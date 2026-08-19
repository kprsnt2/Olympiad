const fs = require('fs');

const examNames = ['IMO', 'ISO', 'ICSO', 'IEO', 'IGKO', 'ISSO'];
const gradeData = [
  { g: 1, title: "Grade 1: Little Stars Explorer", sub: "Fun visual puzzles, counting adventures, picture science & phonics", age: "5 - 7 Years", avatar: "🌟", color: "from-amber-400 to-orange-500", diff: "Visual cues, picture counting, basic patterns, and everyday words.", time: "20 - 30 mins" },
  { g: 2, title: "Grade 2: Junior Olympiad Cadet", sub: "3-digit numbers, animal habitats, spelling challenges & world facts", age: "6 - 8 Years", avatar: "🚀", color: "from-blue-500 to-indigo-600", diff: "Pattern sequences, introductory multiplication, and reading speed.", time: "30 - 45 mins" },
  { g: 3, title: "Grade 3: Olympiad Pathfinder", sub: "Fractions, energy forces, algorithms, grammar mechanics & world geography", age: "7 - 9 Years", avatar: "🪐", color: "from-emerald-500 to-teal-600", diff: "Coding-decoding, embedded figures, and word problem multi-steps.", time: "35 - 50 mins" },
  { g: 4, title: "Grade 4: Olympiad Champion Challenger", sub: "Factors & multiples, ecosystem web, coding logic, grammar mastery & civics", age: "8 - 10 Years", avatar: "🛸", color: "from-purple-500 to-indigo-600", diff: "Factors, Multiples, Area & Perimeter, HOTS Achievers section.", time: "45 - 60 mins" },
  { g: 5, title: "Grade 5: Master Olympiad Strategist", sub: "Decimals, algebraic thinking, cells & human physiology, Python intro & modern world", age: "9 - 11 Years", avatar: "🛰️", color: "from-cyan-500 to-blue-600", diff: "50 Questions / 60 Marks SOF format. Speed and multi-step accuracy.", time: "50 - 70 mins" },
  { g: 6, title: "Grade 6: Senior Olympiad Scholar", sub: "Integers, algebra intro, physics motions, electricity, Python & world heritage", age: "10 - 12 Years", avatar: "🌌", color: "from-blue-600 to-violet-700", diff: "50 Questions Olympiad syllabus with in-depth Achievers Section.", time: "60 - 80 mins" },
  { g: 7, title: "Grade 7: High-Order Thinker", sub: "Rational numbers, algebraic identities, heat & thermodynamics, acids & bases, Python", age: "11 - 13 Years", avatar: "☄️", color: "from-indigo-600 to-purple-800", diff: "Advanced HOTS questions with multi-concept combinations.", time: "60 - 90 mins" },
  { g: 8, title: "Grade 8: Grand Olympiad Challenger", sub: "Square roots, polynomials, force & pressure, sound & light, Python & civics", age: "12 - 14 Years", avatar: "🌟", color: "from-purple-600 to-pink-600", diff: "National & international standard. Level 2 qualifying focus.", time: "60 - 90 mins" },
  { g: 9, title: "Grade 9: Elite Olympiad Master", sub: "Polynomials, Euclidean geometry, kinematics & dynamics, chemical bonds, Python OOP", age: "13 - 15 Years", avatar: "⚡", color: "from-pink-600 to-rose-600", diff: "Rigorous high-tier Olympiad curriculum for SOF Level 2 and medals.", time: "75 - 100 mins" },
  { g: 10, title: "Grade 10: Grandmaster Olympiad Elite", sub: "Trigonometry, quadratic equations, optics & electromagnetism, organic chemistry, AI", age: "14 - 16 Years", avatar: "👑", color: "from-amber-500 via-rose-500 to-purple-600", diff: "Highest standard SOF Olympiad mastery and national ranks.", time: "90 - 120 mins" }
];

const subjectChaptersTemplate = {
  IMO: [
    { titleSuffix: "Number System & Arithmetic", icon: "🔢", concepts: ["Number Properties", "Computation Speed", "Rounding & Estimation"], tip: "Master mental math tricks to save time!" },
    { titleSuffix: "Geometry, Mensuration & Shapes", icon: "📐", concepts: ["Geometric Shapes", "Perimeter & Area Formulas", "Angles & Theorems"], tip: "Draw rough diagrams to visualize spatial relations." },
    { titleSuffix: "Algebra, Fractions & Percentages", icon: "📊", concepts: ["Variable Manipulation", "Ratio & Proportion", "Percentage Applications"], tip: "Invert operations when isolating variables." },
    { titleSuffix: "Logical Reasoning & Achiever Puzzles", icon: "🧩", concepts: ["Series & Coding-Decoding", "Analogy & Venn Diagrams", "HOTS Multi-step Reasoning"], tip: "Eliminate impossible options first to narrow choices." }
  ],
  ISO: [
    { titleSuffix: "Living Organisms & Biological Systems", icon: "🌿", concepts: ["Plant & Animal Physiology", "Adaptations & Habitats", "Cell Structure & Organelles"], tip: "Remember: Producers are the base of all food pyramids." },
    { titleSuffix: "Matter, Materials & Chemical Reactions", icon: "🧪", concepts: ["States of Matter", "Physical vs Chemical Changes", "Acids, Bases & Elements"], tip: "Check whether a reaction can be reversed to identify chemical change." },
    { titleSuffix: "Forces, Energy, Motion & Space", icon: "⚡", concepts: ["Laws of Motion", "Work, Power & Energy", "Electricity, Magnetism & Cosmos"], tip: "Always check SI units before computing numericals." }
  ],
  ICSO: [
    { titleSuffix: "Computer Hardware, OS & Storage", icon: "🖥️", concepts: ["CPU Architecture", "RAM vs ROM & Storage Units", "Operating System Fundamentals"], tip: "1 Byte = 8 Bits, 1 KB = 1024 Bytes." },
    { titleSuffix: "Algorithms, Logic & Programming", icon: "💻", concepts: ["Flowcharts & Pseudo-code", "Scratch/Python Control Flow", "Variables, Loops & Conditions"], tip: "Trace variables step-by-step in execution tables." },
    { titleSuffix: "Networks, Cyber Security & AI", icon: "🌐", concepts: ["Internet Protocols & LAN/WAN", "Cyber Hygiene & Phishing", "AI & Machine Learning Trends"], tip: "Strong passwords use alphanumeric symbols and never share OTPs." }
  ],
  IEO: [
    { titleSuffix: "Word & Structure Knowledge (Grammar)", icon: "✍️", concepts: ["Tenses & Verb Agreement", "Prepositions & Conjunctions", "Active/Passive Voice & Clauses"], tip: "Singular subjects take singular verbs with -s/-es." },
    { titleSuffix: "Reading Comprehension & Inferences", icon: "📖", concepts: ["Central Theme Detection", "Contextual Vocabulary", "Critical Tone & Fact vs Opinion"], tip: "Read questions first, then scan passage for targeted keywords." },
    { titleSuffix: "Spoken & Written Expression & HOTS", icon: "💡", concepts: ["Situational Dialogue", "Idioms & Phrasal Verbs", "Collocations & Nuances"], tip: "Identify tone (formal vs informal) to choose the right expression." }
  ],
  IGKO: [
    { titleSuffix: "World & Indian Heritage, Wonders & Capitals", icon: "🌍", concepts: ["Monuments & Landmarks", "Capitals & Currencies", "World Geography & Oceans"], tip: "Asia is the largest continent in area and population." },
    { titleSuffix: "Science Discoveries, Space & Current Affairs", icon: "🚀", concepts: ["Recent Space Missions", "Inventions & Nobel Prizes", "Global Summits & Leaders"], tip: "Stay updated with ISRO and NASA flagship missions." }
  ],
  ISSO: [
    { titleSuffix: "Historical Eras, Civilizations & Empires", icon: "📜", concepts: ["Ancient Civilizations", "Freedom Struggle Milestones", "World Heritage & Culture"], tip: "Construct a chronological timeline for historical events." },
    { titleSuffix: "Geography, Environment & Governance", icon: "🏛️", concepts: ["Atmosphere & Landforms", "Constitution & Democracy", "Local Governance & Civics"], tip: "Equator divides Earth into Northern and Southern Hemispheres." }
  ]
};

const result = {};
gradeData.forEach(item => {
  const g = item.g;
  const subjects = examNames.map(examId => {
    const templates = subjectChaptersTemplate[examId] || [];
    const chapters = templates.map((tmpl, idx) => ({
      id: `g${g}-${examId.toLowerCase()}-${idx + 1}`,
      name: `Grade ${g} ${tmpl.titleSuffix}`,
      subjectId: examId,
      icon: tmpl.icon,
      keyConcepts: tmpl.concepts,
      olympiadTips: tmpl.tip,
      estimatedQuestionCount: 20 + g * 2
    }));
    return { examId, chapters };
  });

  result[g] = {
    grade: g,
    title: item.title,
    subtitle: item.sub,
    ageGroup: item.age,
    difficultyNote: item.diff,
    recommendedTimeDaily: item.time,
    characterAvatar: item.avatar,
    themeColor: item.color,
    subjects
  };
});

const out = `import { GradeLevel } from '../types/olympiad';

export interface Chapter {
  id: string;
  name: string;
  subjectId: string;
  icon: string;
  keyConcepts: string[];
  olympiadTips: string;
  estimatedQuestionCount: number;
}

export interface GradeCurriculum {
  grade: GradeLevel;
  title: string;
  subtitle: string;
  ageGroup: string;
  difficultyNote: string;
  recommendedTimeDaily: string;
  characterAvatar: string;
  themeColor: string;
  subjects: {
    examId: string;
    chapters: Chapter[];
  }[];
}

export const GRADE_CURRICULUMS: Record<GradeLevel, GradeCurriculum> = ${JSON.stringify(result, null, 2)};
`;

fs.writeFileSync('src/data/gradeCurriculums.ts', out, 'utf8');
console.log('src/data/gradeCurriculums.ts created successfully!');
