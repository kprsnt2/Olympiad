import { ExamInfo } from '../types/olympiad';

export const OLYMPIAD_EXAMS: Record<string, ExamInfo> = {
  IMO: {
    id: 'IMO',
    name: 'IMO',
    shortName: 'Maths',
    fullName: 'International Mathematics Olympiad',
    tagline: 'Master numbers, geometry, algebraic reasoning & pattern puzzles',
    icon: '🧮',
    color: '#3B82F6',
    accentBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    borderColor: 'border-blue-500',
    badgeBg: 'bg-blue-500',
    totalQuestions: 35, // 35 for Gr 1-4, 50 for Gr 5-10
    totalMarks: 40,     // 40 for Gr 1-4, 60 for Gr 5-10
    timeAllowedMinutes: 60,
    examMonth: 'November / December',
    sections: [
      {
        name: 'Logical Reasoning',
        type: 'logical',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Patterns, analogies, coding-decoding, series completion, mirror images'
      },
      {
        name: 'Mathematical Reasoning',
        type: 'subject',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Core grade-level numbers, geometry, measurement, fractions, data handling'
      },
      {
        name: 'Everyday Mathematics',
        type: 'everyday',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Real-world word problems, money calculations, time & distance applications'
      },
      {
        name: "Achievers Section (HOTS)",
        type: 'achievers',
        questionCount: 5,
        marksPerQuestion: 2,
        description: 'Higher Order Thinking Skills (HOTS) questions with 2x score weightage!'
      }
    ],
    keySkills: ['Speed Calculation', 'Spatial Visualization', 'Multi-step Problem Solving', 'Logic Puzzles']
  },
  ISO: {
    id: 'ISO',
    name: 'ISO / NSO',
    shortName: 'Science',
    fullName: 'International / National Science Olympiad',
    tagline: 'Explore the universe, living organisms, physics, chemistry & the environment',
    icon: '🔬',
    color: '#10B981',
    accentBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    borderColor: 'border-emerald-500',
    badgeBg: 'bg-emerald-500',
    totalQuestions: 35,
    totalMarks: 40,
    timeAllowedMinutes: 60,
    examMonth: 'October / November',
    sections: [
      {
        name: 'Logical Reasoning',
        type: 'logical',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Verbal & non-verbal reasoning, pattern matching, flowcharts'
      },
      {
        name: 'Science Fundamentals',
        type: 'subject',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Plants, animals, human body, matter, forces, electricity & space'
      },
      {
        name: 'Everyday Science',
        type: 'everyday',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Scientific principles in daily life, health, safety, and ecosystem'
      },
      {
        name: "Achievers Section (HOTS)",
        type: 'achievers',
        questionCount: 5,
        marksPerQuestion: 2,
        description: 'Deep experimental analysis, reasoning graphs & HOTS questions'
      }
    ],
    keySkills: ['Observation', 'Hypothesis Testing', 'Ecosystem Understanding', 'Data Interpretation']
  },
  ICSO: {
    id: 'ICSO',
    name: 'ICSO / NCO',
    shortName: 'Cyber & AI',
    fullName: 'International Cyber & Computer Olympiad',
    tagline: 'Code algorithms, understand hardware, software, AI, Scratch & digital safety',
    icon: '💻',
    color: '#8B5CF6',
    accentBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    borderColor: 'border-purple-500',
    badgeBg: 'bg-purple-500',
    totalQuestions: 35,
    totalMarks: 40,
    timeAllowedMinutes: 60,
    examMonth: 'November / January',
    sections: [
      {
        name: 'Logical Reasoning',
        type: 'logical',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Flowcharts, sequence logic, binary thinking & spatial deduction'
      },
      {
        name: 'Computers & IT',
        type: 'subject',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Hardware, software, MS Office/Paint, Scratch/Python, Internet & cyber safety'
      },
      {
        name: 'IT Applications',
        type: 'everyday',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Modern tech, cloud storage, smartphones, AI trends & digital etiquette'
      },
      {
        name: "Achievers Section (HOTS)",
        type: 'achievers',
        questionCount: 5,
        marksPerQuestion: 2,
        description: 'Advanced code tracing, algorithm complexity & tech problem solving'
      }
    ],
    keySkills: ['Algorithmic Thinking', 'Cyber Hygiene', 'Scratch/Block Coding', 'Hardware Architecture']
  },
  IEO: {
    id: 'IEO',
    name: 'IEO',
    shortName: 'English',
    fullName: 'International English Olympiad',
    tagline: 'Grammar mastery, rich vocabulary, reading comprehension & spoken nuances',
    icon: '📖',
    color: '#F59E0B',
    accentBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    borderColor: 'border-amber-500',
    badgeBg: 'bg-amber-500',
    totalQuestions: 35,
    totalMarks: 40,
    timeAllowedMinutes: 60,
    examMonth: 'September / October',
    sections: [
      {
        name: 'Word & Structure Knowledge',
        type: 'subject',
        questionCount: 15,
        marksPerQuestion: 1,
        description: 'Prepositions, tenses, idioms, synonyms, antonyms, collocations'
      },
      {
        name: 'Reading Comprehension',
        type: 'logical',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Passages, stories, dialogues, main idea extraction, inference'
      },
      {
        name: 'Spoken & Written Expression',
        type: 'everyday',
        questionCount: 5,
        marksPerQuestion: 1,
        description: 'Situational conversations, polite phrases, email & letter cues'
      },
      {
        name: "Achievers Section (HOTS)",
        type: 'achievers',
        questionCount: 5,
        marksPerQuestion: 2,
        description: 'Advanced nuance, subtle tone, complex grammar & vocabulary challenge'
      }
    ],
    keySkills: ['Vocabulary Mastery', 'Critical Reading', 'Grammar Precision', 'Contextual Inference']
  },
  IGKO: {
    id: 'IGKO',
    name: 'IGKO',
    shortName: 'Gen. Knowledge',
    fullName: 'International General Knowledge Olympiad',
    tagline: 'Current affairs, world wonders, science discoveries, sports & life skills',
    icon: '🌍',
    color: '#EC4899',
    accentBg: 'bg-pink-500/10 text-pink-400 border-pink-500/30',
    borderColor: 'border-pink-500',
    badgeBg: 'bg-pink-500',
    totalQuestions: 35,
    totalMarks: 40,
    timeAllowedMinutes: 60,
    examMonth: 'September / October',
    sections: [
      {
        name: 'General Awareness',
        type: 'subject',
        questionCount: 15,
        marksPerQuestion: 1,
        description: 'Plants & Animals, India & World, Science & Tech, Sports, Entertainment'
      },
      {
        name: 'Current Affairs',
        type: 'everyday',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Recent global & national events, awards, missions, leaders'
      },
      {
        name: 'Life Skills',
        type: 'logical',
        questionCount: 5,
        marksPerQuestion: 1,
        description: 'Empathy, decision making, environmental ethics, time management'
      },
      {
        name: "Achievers Section (HOTS)",
        type: 'achievers',
        questionCount: 5,
        marksPerQuestion: 2,
        description: 'Combined multi-domain puzzles, historical timelines & trivia'
      }
    ],
    keySkills: ['Global Awareness', 'Memory Retention', 'Current Events', 'Ethical Thinking']
  },
  ISSO: {
    id: 'ISSO',
    name: 'ISSO',
    shortName: 'Social Studies',
    fullName: 'International Social Studies Olympiad',
    tagline: 'Journey through ancient civilizations, maps, geography, democracy & societies',
    icon: '🏛️',
    color: '#06B6D4',
    accentBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    borderColor: 'border-cyan-500',
    badgeBg: 'bg-cyan-500',
    totalQuestions: 35,
    totalMarks: 40,
    timeAllowedMinutes: 60,
    examMonth: 'January / February',
    sections: [
      {
        name: 'History & Heritage',
        type: 'subject',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Civilizations, freedom struggles, monuments, archaeology'
      },
      {
        name: 'Geography & Environment',
        type: 'everyday',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Landforms, climates, maps, resources, oceans & continents'
      },
      {
        name: 'Civics & Society',
        type: 'logical',
        questionCount: 10,
        marksPerQuestion: 1,
        description: 'Constitution, local governance, human rights, community living'
      },
      {
        name: "Achievers Section (HOTS)",
        type: 'achievers',
        questionCount: 5,
        marksPerQuestion: 2,
        description: 'Historical source analysis, geographical coordinates & civic dilemmas'
      }
    ],
    keySkills: ['Map Reading', 'Chronological Reasoning', 'Civic Responsibility', 'Spatial Sense']
  }
};
