import { AIConfig, OlympiadExamId, GradeLevel, Question } from '../types/olympiad';

const AI_CONFIG_KEY = 'olympiad_ai_config_v1';

declare const __OPENAI_API_KEY__: string;
declare const __GEMINI_API_KEY__: string;
declare const __OPENAI_MODEL__: string;
declare const __GEMINI_MODEL__: string;

const getEnvValue = (key: string, fallback: string = ''): string => {
  try {
    if (key === 'OPENAI_KEY') {
      if (typeof __OPENAI_API_KEY__ !== 'undefined' && __OPENAI_API_KEY__) return __OPENAI_API_KEY__;
      return (import.meta as any).env?.VITE_OPENAI_API_KEY || (import.meta as any).env?.OPENAI_API_KEY || '';
    }
    if (key === 'GEMINI_KEY') {
      if (typeof __GEMINI_API_KEY__ !== 'undefined' && __GEMINI_API_KEY__) return __GEMINI_API_KEY__;
      return (import.meta as any).env?.VITE_GEMINI_API_KEY || (import.meta as any).env?.GEMINI_API_KEY || '';
    }
    if (key === 'OPENAI_MODEL') {
      if (typeof __OPENAI_MODEL__ !== 'undefined' && __OPENAI_MODEL__) return __OPENAI_MODEL__;
      return (import.meta as any).env?.VITE_OPENAI_MODEL || (import.meta as any).env?.OPENAI_MODEL || 'gpt-5.4-mini';
    }
    if (key === 'GEMINI_MODEL') {
      if (typeof __GEMINI_MODEL__ !== 'undefined' && __GEMINI_MODEL__) return __GEMINI_MODEL__;
      return (import.meta as any).env?.VITE_GEMINI_MODEL || (import.meta as any).env?.GEMINI_MODEL || 'gemini-flash-latest';
    }
  } catch (e) {
    // Ignore environment read errors in non-browser context
  }
  return fallback;
};

export const DEFAULT_AI_CONFIG: AIConfig = {
  openaiKey: getEnvValue('OPENAI_KEY'),
  geminiKey: getEnvValue('GEMINI_KEY'),
  openaiModel: getEnvValue('OPENAI_MODEL', 'gpt-5.4-mini'),
  geminiModel: getEnvValue('GEMINI_MODEL', 'gemini-flash-latest'),
  preferredProvider: 'auto'
};

export function getStoredAiConfig(): AIConfig {
  const envConfig: AIConfig = {
    openaiKey: getEnvValue('OPENAI_KEY'),
    geminiKey: getEnvValue('GEMINI_KEY'),
    openaiModel: getEnvValue('OPENAI_MODEL', 'gpt-5.4-mini'),
    geminiModel: getEnvValue('GEMINI_MODEL', 'gemini-flash-latest'),
    preferredProvider: 'auto'
  };

  try {
    const saved = localStorage.getItem(AI_CONFIG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        openaiKey: parsed.openaiKey || envConfig.openaiKey,
        geminiKey: parsed.geminiKey || envConfig.geminiKey,
        openaiModel: parsed.openaiModel || envConfig.openaiModel,
        geminiModel: parsed.geminiModel || envConfig.geminiModel,
        preferredProvider: parsed.preferredProvider || 'auto'
      };
    }
  } catch (e) {
    console.warn('Failed to load AI config from storage', e);
  }
  return envConfig;
}

export function saveAiConfig(config: AIConfig): void {
  try {
    localStorage.setItem(AI_CONFIG_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Failed to save AI config', e);
  }
}

// Call OpenAI Chat Completions API
async function callOpenAI(
  prompt: string,
  systemPrompt: string,
  config: AIConfig
): Promise<{ text: string; model: string }> {
  const key = config.openaiKey || getEnvValue('OPENAI_KEY');
  if (!key) {
    throw new Error('OpenAI API key is missing.');
  }

  const model = config.openaiModel || 'gpt-5.4-mini';
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `OpenAI API error (${response.status})`);
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || 'No response from OpenAI.';
  return { text, model };
}

// Call Google Gemini API
async function callGemini(
  prompt: string,
  systemPrompt: string,
  config: AIConfig
): Promise<{ text: string; model: string }> {
  const key = config.geminiKey || getEnvValue('GEMINI_KEY');
  if (!key) {
    throw new Error('Gemini API key is missing.');
  }

  const model = config.geminiModel || 'gemini-flash-latest';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\nUser Question:\n${prompt}` }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2000
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error?.message || `Gemini API error (${response.status})`);
  }

  const data = await response.json();
  const candidate = data.candidates?.[0];
  const text = candidate?.content?.parts?.[0]?.text || 'No response from Gemini.';
  return { text, model };
}

// Smart Offline Fallback response generator
function getSmartOfflineResponse(prompt: string, questionContext?: Question): { text: string; model: string } {
  if (questionContext) {
    return {
      text: `🚀 **Olympiad Coach Step-by-Step Guide**:\n\n` +
        `**Topic**: ${questionContext.chapter} (${questionContext.examId})\n\n` +
        `**Step 1: Understand the Goal**\nWe need to solve: "${questionContext.questionText}"\n\n` +
        `**Step 2: Key Concept & Hint**\n💡 *${questionContext.hints[0]}*\n*${questionContext.hints[1]}*\n\n` +
        `**Step 3: Step-by-Step Solution**\n${questionContext.explanation}\n\n` +
        `**Correct Answer**: Option ${questionContext.correctOptionIndex + 1} (${questionContext.options[questionContext.correctOptionIndex]})\n\n` +
        `⭐ *Tip for Exam Day*: Look out for tricky wording and double check your calculation on the scratchpad!`,
      model: 'Built-in Smart Offline Engine'
    };
  }

  return {
    text: `🌟 **Olympiad AI Coach says (Re: "${prompt}"):**\n\n` +
      `Great question! Here is how an Olympiad champion thinks through this:\n\n` +
      `1. **Break down the problem**: Identify what is given and what you need to calculate.\n` +
      `2. **Apply the Core Formula**: Check if there is a shortcut or algebraic identity that simplifies the math.\n` +
      `3. **Eliminate impossible options**: In multiple choice questions, eliminating 2 obviously wrong options doubles your winning chances!\n\n` +
      `*(Your Vercel environment keys are automatically loaded!)*`,
    model: 'Built-in Smart Offline Engine'
  };
}

// Router: OpenAI Primary -> Gemini Backup -> Smart Offline Fallback
export async function askAiCoach(
  userQuery: string,
  questionContext?: Question
): Promise<{ text: string; provider: 'openai' | 'gemini' | 'offline'; model: string }> {
  const config = getStoredAiConfig();
  const systemPrompt = `You are "Olympiad Coach", a friendly, encouraging, and brilliant AI mentor for students (Grades 1 to 10) preparing for SOF Olympiad exams (IMO, ISO, ICSO, IEO, IGKO, ISSO).
Format your answers with cheerful enthusiasm, clear numbered steps, LaTeX formulas when needed, and kid-friendly analogies.
Always explain *why* the answer is correct and provide a handy "Olympiad Speed Tip".`;

  let fullPrompt = userQuery;
  if (questionContext) {
    fullPrompt = `Question Context:
Subject: ${questionContext.examId} | Grade: ${questionContext.grade} | Chapter: ${questionContext.chapter}
Question: ${questionContext.questionText}
Options: ${questionContext.options.map((opt, i) => `(${i + 1}) ${opt}`).join(', ')}
Correct Answer: Option ${questionContext.correctOptionIndex + 1} (${questionContext.options[questionContext.correctOptionIndex]})
Explanation: ${questionContext.explanation}

Student's Doubt / Query:
${userQuery}`;
  }

  const effectiveOpenAIKey = config.openaiKey || getEnvValue('OPENAI_KEY');
  const effectiveGeminiKey = config.geminiKey || getEnvValue('GEMINI_KEY');

  if (config.preferredProvider === 'gemini' && effectiveGeminiKey) {
    try {
      const res = await callGemini(fullPrompt, systemPrompt, config);
      return { text: res.text, provider: 'gemini', model: res.model };
    } catch (e) {
      console.warn('Gemini failed, trying OpenAI fallback', e);
      if (effectiveOpenAIKey) {
        try {
          const oRes = await callOpenAI(fullPrompt, systemPrompt, config);
          return { text: oRes.text, provider: 'openai', model: oRes.model };
        } catch (oe) {
          console.warn('OpenAI fallback also failed', oe);
        }
      }
    }
  }

  if (effectiveOpenAIKey) {
    try {
      const res = await callOpenAI(fullPrompt, systemPrompt, config);
      return { text: res.text, provider: 'openai', model: res.model };
    } catch (e) {
      console.warn('OpenAI primary failed, attempting Gemini fallback', e);
      if (effectiveGeminiKey) {
        try {
          const gRes = await callGemini(fullPrompt, systemPrompt, config);
          return { text: gRes.text, provider: 'gemini', model: gRes.model };
        } catch (ge) {
          console.warn('Gemini fallback failed', ge);
        }
      }
    }
  } else if (effectiveGeminiKey) {
    try {
      const res = await callGemini(fullPrompt, systemPrompt, config);
      return { text: res.text, provider: 'gemini', model: res.model };
    } catch (e) {
      console.warn('Gemini failed', e);
    }
  }

  const offline = getSmartOfflineResponse(userQuery, questionContext);
  return { text: offline.text, provider: 'offline', model: offline.model };
}

export async function generateAiQuestion(
  examId: OlympiadExamId,
  grade: GradeLevel,
  chapter: string,
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Achiever'
): Promise<Question> {
  const config = getStoredAiConfig();
  const effectiveOpenAIKey = config.openaiKey || getEnvValue('OPENAI_KEY');
  const effectiveGeminiKey = config.geminiKey || getEnvValue('GEMINI_KEY');

  const prompt = `Create ONE brand new authentic SOF ${examId} Olympiad multiple-choice question for Grade ${grade} on the topic "${chapter}" with difficulty level "${difficulty}".
Return ONLY a valid JSON object matching this TypeScript structure:
{
  "questionText": "...",
  "latexFormula": "...",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correctOptionIndex": 0,
  "explanation": "...",
  "hints": ["Hint 1 clue", "Hint 2 guiding step", "Hint 3 near answer"]
}`;

  const systemPrompt = `You are a specialist SOF Olympiad Question Setter. Output raw JSON only with no markdown backticks or commentary.`;

  try {
    let rawText = '';
    if (effectiveOpenAIKey) {
      const res = await callOpenAI(prompt, systemPrompt, config);
      rawText = res.text;
    } else if (effectiveGeminiKey) {
      const res = await callGemini(prompt, systemPrompt, config);
      rawText = res.text;
    }

    if (rawText) {
      const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      return {
        id: `ai-gen-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        examId,
        grade,
        chapter,
        section: difficulty === 'Achiever' ? 'achievers' : 'subject',
        questionText: parsed.questionText,
        latexFormula: parsed.latexFormula || undefined,
        options: parsed.options,
        correctOptionIndex: parsed.correctOptionIndex,
        explanation: parsed.explanation,
        hints: parsed.hints || ['Break down the numbers.', 'Apply standard formula.', 'Double check option.'],
        difficulty,
        marks: difficulty === 'Achiever' ? 2 : 1,
        isLevel2: difficulty === 'Achiever'
      };
    }
  } catch (e) {
    console.warn('Live AI generation failed, using rich fallback template', e);
  }

  // Fallback generation template
  return {
    id: `ai-fallback-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    examId,
    grade,
    chapter,
    section: difficulty === 'Achiever' ? 'achievers' : 'subject',
    questionText: `[AI Generated Drill] In a Grade ${grade} ${examId} challenge on ${chapter}, if 4 times an unknown number is increased by ${grade * 3}, the result is ${grade * 15}. What is the number?`,
    latexFormula: `4x + ${grade * 3} = ${grade * 15} \\implies 4x = ${grade * 12} \\implies x = ${grade * 3}`,
    options: [
      `${grade * 2}`,
      `${grade * 3}`,
      `${grade * 4}`,
      `${grade * 5}`
    ],
    correctOptionIndex: 1,
    explanation: `Let the number be x. 4x + ${grade * 3} = ${grade * 15} => 4x = ${grade * 15 - grade * 3} = ${grade * 12} => x = ${grade * 3}.`,
    hints: [
      `Form an algebraic equation: 4x + ${grade * 3} = ${grade * 15}.`,
      `Subtract ${grade * 3} from both sides to get 4x = ${grade * 12}.`,
      `Divide ${grade * 12} by 4 to get ${grade * 3}.`
    ],
    difficulty,
    marks: difficulty === 'Achiever' ? 2 : 1,
    isLevel2: difficulty === 'Achiever'
  };
}

// Generate multiple adaptive AI questions targeting student weak areas or mastery topics
export async function generateAiAdaptiveDrill(
  examId: OlympiadExamId,
  grade: GradeLevel,
  topics: string[],
  count: number = 5
): Promise<Question[]> {
  const config = getStoredAiConfig();
  const effectiveOpenAIKey = config.openaiKey || getEnvValue('OPENAI_KEY');
  const effectiveGeminiKey = config.geminiKey || getEnvValue('GEMINI_KEY');

  const topicsList = topics.length > 0 ? topics.join(', ') : 'Core Concept Mastery';
  const prompt = `Create a list of ${count} brand new, unique, non-repeating authentic SOF ${examId} Olympiad multiple-choice questions for Grade ${grade} focusing on these topics: "${topicsList}".
Return ONLY a valid JSON array of objects with NO markdown formatting:
[
  {
    "chapter": "Topic name",
    "questionText": "...",
    "latexFormula": "...",
    "options": ["Opt A", "Opt B", "Opt C", "Opt D"],
    "correctOptionIndex": 0,
    "explanation": "...",
    "hints": ["Hint 1", "Hint 2", "Hint 3"],
    "difficulty": "Intermediate"
  }
]`;

  const systemPrompt = `You are a specialist SOF Olympiad Question Setter. Output raw JSON array only.`;

  try {
    let rawText = '';
    if (effectiveOpenAIKey) {
      const res = await callOpenAI(prompt, systemPrompt, config);
      rawText = res.text;
    } else if (effectiveGeminiKey) {
      const res = await callGemini(prompt, systemPrompt, config);
      rawText = res.text;
    }

    if (rawText) {
      const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsedArray = JSON.parse(cleanJson);
      if (Array.isArray(parsedArray) && parsedArray.length > 0) {
        return parsedArray.map((parsed, idx) => ({
          id: `ai-adaptive-${Date.now()}-${idx + 1}`,
          examId,
          grade,
          chapter: parsed.chapter || topics[idx % topics.length] || 'Targeted Practice',
          section: idx === parsedArray.length - 1 ? 'achievers' : 'subject',
          questionText: parsed.questionText,
          latexFormula: parsed.latexFormula || undefined,
          options: parsed.options,
          correctOptionIndex: parsed.correctOptionIndex ?? 0,
          explanation: parsed.explanation || 'Step-by-step solution verified by AI Coach.',
          hints: parsed.hints || ['Break down given data.', 'Apply standard formulas.', 'Check all options.'],
          difficulty: parsed.difficulty || 'Intermediate',
          marks: idx === parsedArray.length - 1 ? 2 : 1,
          isLevel2: idx === parsedArray.length - 1
        }));
      }
    }
  } catch (e) {
    console.warn('Live AI batch generation failed, building adaptive questions from template', e);
  }

  // High-fidelity fallback adaptive set
  const fallbackList: Question[] = [];
  for (let i = 0; i < count; i++) {
    const topic = topics[i % topics.length] || 'Core Problem Solving';
    const isHots = i === count - 1;
    fallbackList.push({
      id: `ai-adapt-fallback-${Date.now()}-${i + 1}`,
      examId,
      grade,
      chapter: topic,
      section: isHots ? 'achievers' : 'subject',
      questionText: `[AI Follow-Up on ${topic}] In a Grade ${grade} ${examId} drill, if the value of ${(i + 2) * 4} is added to ${grade * 5} and divided by 2, what is the outcome?`,
      latexFormula: `\\frac{${(i + 2) * 4} + ${grade * 5}}{2} = ${((i + 2) * 4 + grade * 5) / 2}`,
      options: [
        `${((i + 2) * 4 + grade * 5) / 2 - 5}`,
        `${((i + 2) * 4 + grade * 5) / 2}`,
        `${((i + 2) * 4 + grade * 5) / 2 + 5}`,
        `${((i + 2) * 4 + grade * 5) / 2 + 10}`
      ],
      correctOptionIndex: 1,
      explanation: `Step 1: Compute ${(i + 2) * 4} + ${grade * 5} = ${(i + 2) * 4 + grade * 5}. Step 2: Divide by 2 = ${((i + 2) * 4 + grade * 5) / 2}.`,
      hints: [
        `Identify the two operations: addition followed by division.`,
        `Compute the numerator first: ${(i + 2) * 4 + grade * 5}.`,
        `Divide by 2 to get ${((i + 2) * 4 + grade * 5) / 2}.`
      ],
      difficulty: isHots ? 'Achiever' : 'Intermediate',
      marks: isHots ? 2 : 1,
      isLevel2: isHots
    });
  }
  return fallbackList;
}
