import { AIConfig, OlympiadExamId, GradeLevel, Question } from '../types/olympiad';

const AI_CONFIG_KEY = 'olympiad_ai_config_v1';

export const DEFAULT_AI_CONFIG: AIConfig = {
  openaiKey: '',
  geminiKey: '',
  openaiModel: 'gpt-5.4-mini',
  geminiModel: 'gemini-flash-latest',
  preferredProvider: 'auto'
};

export function getStoredAiConfig(): AIConfig {
  try {
    const saved = localStorage.getItem(AI_CONFIG_KEY);
    if (saved) {
      return { ...DEFAULT_AI_CONFIG, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn('Failed to load AI config from storage', e);
  }
  return DEFAULT_AI_CONFIG;
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
  if (!config.openaiKey) {
    throw new Error('OpenAI API key is missing.');
  }

  const model = config.openaiModel || 'gpt-5.4-mini';
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.openaiKey}`
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1200
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
  if (!config.geminiKey) {
    throw new Error('Gemini API key is missing.');
  }

  const model = config.geminiModel || 'gemini-flash-latest';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${config.geminiKey}`;

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
        maxOutputTokens: 1200
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
        `⭐ *Tip for Exam Day*: Look out for the tricky wording and double check your calculation on the scratchpad!`,
      model: 'Built-in Smart Offline Engine'
    };
  }

  return {
    text: `🌟 **Olympiad AI Coach says (Re: "${prompt}"):**\n\n` +
      `Great question! Here is how an Olympiad champion thinks through this:\n\n` +
      `1. **Break down the problem**: Identify what is given and what you need to calculate.\n` +
      `2. **Apply the Core Formula**: Check if there is a shortcut or algebraic identity that simplifies the math.\n` +
      `3. **Eliminate impossible options**: In multiple choice questions, eliminating 2 obviously wrong options doubles your winning chances!\n\n` +
      `*(To unlock live custom AI explanations for any question, click the ⚙️ Settings icon in the top navigation and enter your OpenAI or Gemini API key!)*`,
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

  // If user specifically requested Gemini first
  if (config.preferredProvider === 'gemini' && config.geminiKey) {
    try {
      const res = await callGemini(fullPrompt, systemPrompt, config);
      return { text: res.text, provider: 'gemini', model: res.model };
    } catch (e) {
      console.warn('Gemini failed, trying OpenAI fallback', e);
      if (config.openaiKey) {
        try {
          const oRes = await callOpenAI(fullPrompt, systemPrompt, config);
          return { text: oRes.text, provider: 'openai', model: oRes.model };
        } catch (oe) {
          console.warn('OpenAI fallback also failed', oe);
        }
      }
    }
  }

  // Default: Try OpenAI first if key provided
  if (config.openaiKey) {
    try {
      const res = await callOpenAI(fullPrompt, systemPrompt, config);
      return { text: res.text, provider: 'openai', model: res.model };
    } catch (e) {
      console.warn('OpenAI primary failed, attempting Gemini fallback', e);
      if (config.geminiKey) {
        try {
          const gRes = await callGemini(fullPrompt, systemPrompt, config);
          return { text: gRes.text, provider: 'gemini', model: gRes.model };
        } catch (ge) {
          console.warn('Gemini fallback failed', ge);
        }
      }
    }
  } else if (config.geminiKey) {
    try {
      const res = await callGemini(fullPrompt, systemPrompt, config);
      return { text: res.text, provider: 'gemini', model: res.model };
    } catch (e) {
      console.warn('Gemini failed', e);
    }
  }

  // Smart Offline Fallback if no keys or API network failure
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
    if (config.openaiKey) {
      const res = await callOpenAI(prompt, systemPrompt, config);
      rawText = res.text;
    } else if (config.geminiKey) {
      const res = await callGemini(prompt, systemPrompt, config);
      rawText = res.text;
    }

    if (rawText) {
      const cleanJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      return {
        id: `ai-gen-${Date.now()}`,
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
    id: `ai-fallback-${Date.now()}`,
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
