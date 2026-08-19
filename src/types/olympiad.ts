export type OlympiadExamId = 'IMO' | 'ISO' | 'ICSO' | 'IEO' | 'IGKO' | 'ISSO';

export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type SectionType = 'logical' | 'subject' | 'everyday' | 'achievers';

export interface ExamInfo {
  id: OlympiadExamId;
  name: string;
  shortName: string;
  fullName: string;
  tagline: string;
  icon: string;
  color: string;
  accentBg: string;
  borderColor: string;
  badgeBg: string;
  sections: {
    name: string;
    type: SectionType;
    questionCount: number;
    marksPerQuestion: number;
    description: string;
  }[];
  totalQuestions: number;
  totalMarks: number;
  timeAllowedMinutes: number;
  examMonth: string;
  keySkills: string[];
}

export interface Question {
  id: string;
  examId: OlympiadExamId;
  grade: GradeLevel;
  chapter: string;
  section: SectionType;
  questionText: string;
  latexFormula?: string;
  imageVisual?: string; // emoji/icon/diagram description
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  hints: [string, string, string]; // Hint 1 (Clue), Hint 2 (Guiding step), Hint 3 (Near answer)
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Achiever';
  marks: number;
  isLevel2?: boolean;
  year?: number;
}

export interface MockTest {
  id: string;
  title: string;
  examId: OlympiadExamId;
  grade: GradeLevel;
  durationMinutes: number;
  totalMarks: number;
  isLevel2: boolean;
  year?: number;
  description: string;
  questions: Question[];
}

export interface PYQPaper {
  id: string;
  examId: OlympiadExamId;
  grade: GradeLevel;
  year: number;
  setNumber: string;
  title: string;
  durationMinutes: number;
  totalMarks: number;
  questions: Question[];
}

export interface Worksheet {
  id: string;
  title: string;
  examId: OlympiadExamId;
  grade: GradeLevel;
  chapter: string;
  difficulty: 'Easy' | 'Medium' | 'Challenger' | 'Olympiad-Level';
  description: string;
  timeLimitMinutes: number;
  questions: Question[];
}

export interface FormulaSheet {
  id: string;
  title: string;
  examId: OlympiadExamId;
  gradeRange: string;
  category: string;
  icon: string;
  cards: {
    topic: string;
    formulaOrConcept: string;
    explanation: string;
    olympiadTrick: string;
    example?: string;
  }[];
}

export interface TestAttemptResult {
  testId: string;
  testTitle: string;
  examId: OlympiadExamId;
  grade: GradeLevel;
  date: string;
  timeTakenSeconds: number;
  score: number;
  totalMarks: number;
  percentage: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  sectionBreakdown: Record<SectionType, { correct: number; total: number; marks: number }>;
  userAnswers: Record<number, number>; // questionIndex -> selectedOptionIndex
}

export interface Badge {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedDate?: string;
  category: 'streak' | 'accuracy' | 'mastery' | 'speed' | 'explorer';
}

export interface UserProfile {
  name: string;
  grade: GradeLevel;
  avatar: string;
  xp: number;
  rankTier: string;
  streakDays: number;
  lastActiveDate: string;
  solvedQuestionIds: string[];
  bookmarkedQuestionIds: string[];
  testHistory: TestAttemptResult[];
  badges: Badge[];
}

export interface AIConfig {
  openaiKey: string;
  geminiKey: string;
  openaiModel: string;
  geminiModel: string;
  preferredProvider: 'openai' | 'gemini' | 'auto';
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: string;
  providerUsed?: 'openai' | 'gemini' | 'offline';
  modelUsed?: string;
  structuredHints?: {
    hint1?: string;
    hint2?: string;
    solution?: string;
  };
}
