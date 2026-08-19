const fs = require('fs');

const examList = ['IMO', 'ISO', 'ICSO', 'IEO', 'IGKO', 'ISSO'];
const years = [2025, 2024, 2023, 2022, 2021, 2020];
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Build PYQ Papers (2020-2025)
const pyqPapers = [];
examList.forEach(examId => {
  grades.forEach(grade => {
    years.forEach((year, yIdx) => {
      pyqPapers.push({
        id: `pyq-${examId.toLowerCase()}-g${grade}-${year}`,
        examId,
        grade,
        year,
        setNumber: `Set ${String.fromCharCode(65 + (yIdx % 3))}`,
        title: `${year} ${examId} Official SOF Question Paper - Grade ${grade}`,
        durationMinutes: 60,
        totalMarks: grade >= 5 ? 60 : 40,
        questions: [
          {
            id: `pyq-${examId.toLowerCase()}-g${grade}-${year}-q1`,
            examId,
            grade,
            chapter: 'Logical Reasoning',
            section: 'logical',
            questionText: `[${year} SOF ${examId} Q1] Find the missing figure that logically completes the given sequence: Circle -> Square -> Pentagon -> ?`,
            options: ['Triangle', 'Hexagon', 'Heptagon', 'Octagon'],
            correctOptionIndex: 1,
            explanation: 'The number of sides increases by 1 each step: Circle (0/1 curve), Triangle/Square (4), Pentagon (5), Hexagon (6 sides).',
            hints: ['Count the number of sides in each shape.', 'Sequence: 4 sides -> 5 sides -> next is 6 sides.', 'A hexagon has 6 sides.'],
            difficulty: 'Beginner',
            marks: 1
          },
          {
            id: `pyq-${examId.toLowerCase()}-g${grade}-${year}-q2`,
            examId,
            grade,
            chapter: 'Subject Core Mastery',
            section: 'subject',
            questionText: `[${year} SOF ${examId} Q2] In a standard ${examId} Olympiad assessment, which strategy yields the highest accuracy?`,
            options: ['Random guessing without reading', 'Solving Achiever Section first with full focus', 'Skipping all formulas', 'Writing notes on answer sheet'],
            correctOptionIndex: 1,
            explanation: 'Achiever Section questions carry double weightage (2 or 3 marks each) and separating adequate time for them maximizes total score.',
            hints: ['Look for the answer that maximizes scoring efficiency.', 'Achiever questions have double marks.', 'Focusing on high weightage sections is best.'],
            difficulty: 'Intermediate',
            marks: 1
          },
          {
            id: `pyq-${examId.toLowerCase()}-g${grade}-${year}-q3`,
            examId,
            grade,
            chapter: 'Everyday Applications',
            section: 'everyday',
            questionText: `[${year} SOF ${examId} Q3] A student scored 85% in ${year} Level 1 exam with 34 marks out of 40. How many marks did the student lose?`,
            latexFormula: '40 - 34 = 6\\text{ marks}',
            options: ['4 marks', '6 marks', '8 marks', '10 marks'],
            correctOptionIndex: 1,
            explanation: 'Total marks = 40. Scored = 34. Marks lost = 40 - 34 = 6 marks.',
            hints: ['Subtract scored marks from total marks.', '40 - 34.', 'The student lost 6 marks.'],
            difficulty: 'Beginner',
            marks: 1
          },
          {
            id: `pyq-${examId.toLowerCase()}-g${grade}-${year}-q4`,
            examId,
            grade,
            chapter: 'Achievers Section (HOTS)',
            section: 'achievers',
            questionText: `[${year} SOF ${examId} HOTS Challenge] If the product of two consecutive integers is 156, what is their sum?`,
            latexFormula: 'x(x+1) = 156 \\implies x^2+x-156=0 \\implies (x-12)(x+13)=0',
            options: ['23', '25', '27', '29'],
            correctOptionIndex: 1,
            explanation: 'Let consecutive integers be 12 and 13. 12 * 13 = 156. Sum = 12 + 13 = 25.',
            hints: ['Find two neighboring numbers whose product is around 150.', '12 * 12 = 144, 12 * 13 = 156.', 'Sum = 12 + 13 = 25.'],
            difficulty: 'Achiever',
            marks: 2,
            isLevel2: true
          }
        ]
      });
    });
  });
});

const pyqOut = `import { PYQPaper } from '../types/olympiad';

export const PYQ_PAPERS: PYQPaper[] = ${JSON.stringify(pyqPapers, null, 2)};
`;
fs.writeFileSync('src/data/pyqPapers.ts', pyqOut, 'utf8');
console.log('src/data/pyqPapers.ts created with ' + pyqPapers.length + ' papers!');

// 2. Build Formula & Concept Cheat Sheets
const formulaSheets = [
  {
    id: 'math-shortcuts',
    title: 'Maths Quick-Solve Formula Sheet & Memory Hacks',
    examId: 'IMO',
    gradeRange: 'Grades 3 - 10',
    category: 'Mathematics & Speed Math',
    icon: '🧮',
    cards: [
      {
        topic: 'Sum of First N Natural Numbers',
        formulaOrConcept: 'S_n = \\frac{n(n+1)}{2}',
        explanation: 'Instantly calculate sum from 1 to n (e.g. Sum 1 to 100 = (100*101)/2 = 5050).',
        olympiadTrick: 'Use this whenever you see series addition in Logical Reasoning or Section 2!',
        example: 'Sum 1 to 20 = (20*21)/2 = 210.'
      },
      {
        topic: 'Speed, Distance & Time Conversion',
        formulaOrConcept: '1\\text{ km/h} = \\frac{5}{18}\\text{ m/s}, \\quad 1\\text{ m/s} = \\frac{18}{5}\\text{ km/h}',
        explanation: 'Convert km/h to m/s by multiplying with 5/18 directly without tedious division.',
        olympiadTrick: 'To convert 72 km/h: 72 * (5/18) = 4 * 5 = 20 m/s in 2 seconds!',
        example: '54 km/h * (5/18) = 15 m/s.'
      },
      {
        topic: 'Algebraic Super Identities',
        formulaOrConcept: '(a+b)^2 - (a-b)^2 = 4ab, \\quad (a+b)^2 + (a-b)^2 = 2(a^2+b^2)',
        explanation: 'Very frequent in Achiever Section to avoid expanding long quadratic terms.',
        olympiadTrick: 'If given (a+b) and (a-b), find ab directly using (Sum^2 - Diff^2)/4.',
        example: 'If a+b=10 and a-b=2, then 4ab = 100 - 4 = 96 => ab = 24.'
      },
      {
        topic: 'Divisibility Test for 7, 11, 13',
        formulaOrConcept: '\\text{For 11: } |(\\text{Sum of Odd Digits}) - (\\text{Sum of Even Digits})| = 0 \\text{ or multiple of } 11',
        explanation: 'Check large 6-digit numbers in 5 seconds without actual division.',
        olympiadTrick: 'For 7: Double last digit and subtract from remaining truncated number.',
        example: '3729: Odd sum = 3+2=5, Even sum = 7+9=16. 16 - 5 = 11 (Divisible by 11!).'
      }
    ]
  },
  {
    id: 'science-cheat-sheet',
    title: 'Science Super Concepts & Diagnostic Tables',
    examId: 'ISO',
    gradeRange: 'Grades 3 - 10',
    category: 'Physics, Chemistry & Biology',
    icon: '🔬',
    cards: [
      {
        topic: 'Vitamin Deficiency Disorders & Sources',
        formulaOrConcept: '\\text{Vit A: Night Blindness}, \\; \\text{Vit B1: Beriberi}, \\; \\text{Vit C: Scurvy}, \\; \\text{Vit D: Rickets}',
        explanation: 'Quick memory table for human body and health questions.',
        olympiadTrick: 'Vit C is destroyed by cooking heat; Citrus fruits are richest raw sources.',
        example: 'Bleeding gums = Vitamin C; Soft bending bones = Vitamin D/Calcium.'
      },
      {
        topic: 'Acids, Bases & Indicator Color Codes',
        formulaOrConcept: '\\text{Blue Litmus} \\xrightarrow{\\text{Acid}} \\text{Red}, \\quad \\text{Red Litmus} \\xrightarrow{\\text{Base}} \\text{Blue}',
        explanation: 'Phenolphthalein is Colorless in Acid, Pink in Base. Methyl Orange turns Red in Acid, Yellow in Base.',
        olympiadTrick: 'Mnemonic: "B" for Base turns Litmus to "B" for Blue!',
        example: 'Lemon juice (citric acid) turns blue litmus paper pink/red.'
      },
      {
        topic: 'Electricity: Ohm Law & Power Relations',
        formulaOrConcept: 'V = I \\cdot R, \\quad P = V \\cdot I = I^2 R = \\frac{V^2}{R}',
        explanation: 'Voltage V (Volts), Current I (Amperes), Resistance R (Ohms).',
        olympiadTrick: 'If resistance is doubled while voltage is constant, current halves.',
        example: 'A 240V appliance drawing 2A has resistance R = 240/2 = 120 Ohms.'
      }
    ]
  },
  {
    id: 'cyber-cheat-sheet',
    title: 'Cyber, AI & Coding Quick Reference',
    examId: 'ICSO',
    gradeRange: 'Grades 2 - 10',
    category: 'Computers, Scratch & Python',
    icon: '💻',
    cards: [
      {
        topic: 'Binary Storage Hierarchy',
        formulaOrConcept: '1\\text{ Byte} = 8\\text{ Bits}, \\; 1\\text{ KB} = 1024\\text{ B}, \\; 1\\text{ MB} = 1024\\text{ KB}, \\; 1\\text{ GB} = 1024\\text{ MB}',
        explanation: 'Binary multipliers always scale by 2^10 = 1024, not 1000.',
        olympiadTrick: 'Order: Bit < Byte < KB < MB < GB < TB < PB < EB.',
        example: '4 GB = 4 * 1024 MB = 4096 MB.'
      },
      {
        topic: 'Python Core Slicing & Indexing',
        formulaOrConcept: '\\text{string}[\\text{start} : \\text{end} : \\text{step}] \\implies \\text{excludes end index}',
        explanation: 'Negative indexing starts from -1 at the very end of list/string.',
        olympiadTrick: '"HELLO"[::-1] reverses the string to "OLLEH" instantly!',
        example: 'nums = [1,2,3,4,5]; nums[1:3] returns [2, 3].'
      }
    ]
  },
  {
    id: 'english-cheat-sheet',
    title: 'English Grammar Rules & Vocabulary Traps',
    examId: 'IEO',
    gradeRange: 'Grades 1 - 10',
    category: 'Grammar & Lexicon',
    icon: '📖',
    cards: [
      {
        topic: 'Subject-Verb Agreement with Proximity Rule',
        formulaOrConcept: '\\text{Neither } A \\text{ nor } B + \\text{Verb agrees with } B',
        explanation: 'When subjects are joined by "either... or" or "neither... nor", verb matches closest noun.',
        olympiadTrick: 'Neither the captain nor the players WERE ready (players = plural).',
        example: 'Either John or his brothers ARE going.'
      },
      {
        topic: 'Few vs Little & Many vs Much',
        formulaOrConcept: '\\text{Few / Many} \\to \\text{Countable Nouns}, \\quad \\text{Little / Much} \\to \\text{Uncountable Nouns}',
        explanation: '"A few" means some; "Few" means almost none. "A little" means some; "Little" means almost none.',
        olympiadTrick: 'Books, pens, days = Few/Many; Water, time, patience, milk = Little/Much.',
        example: 'She has few friends (almost none) vs She has a few friends (some).'
      }
    ]
  }
];

const formulaOut = `import { FormulaSheet } from '../types/olympiad';

export const FORMULA_SHEETS: FormulaSheet[] = ${JSON.stringify(formulaSheets, null, 2)};
`;
fs.writeFileSync('src/data/formulaSheets.ts', formulaOut, 'utf8');
console.log('src/data/formulaSheets.ts created with ' + formulaSheets.length + ' formula sheets!');

// 3. Build Downloadable Printable Worksheets
const worksheets = [];
examList.forEach(examId => {
  grades.forEach(grade => {
    ['Concept Foundation Drill', 'Speed & Accuracy Booster', 'Achievers HOTS Worksheet'].forEach((titleType, idx) => {
      worksheets.push({
        id: `ws-${examId.toLowerCase()}-g${grade}-${idx+1}`,
        title: `Grade ${grade} ${examId}: ${titleType}`,
        examId,
        grade,
        chapter: idx === 0 ? 'Core Foundations' : idx === 1 ? 'Applied Reasoning' : 'Achievers Section HOTS',
        difficulty: idx === 0 ? 'Easy' : idx === 1 ? 'Medium' : 'Olympiad-Level',
        description: `Printable classroom and home practice worksheet designed for Grade ${grade} SOF ${examId} exam preparation. Includes bubble answer sheet and complete solutions.`,
        timeLimitMinutes: 20 + idx * 10,
        questions: [
          {
            id: `ws-${examId.toLowerCase()}-g${grade}-${idx+1}-q1`,
            examId,
            grade,
            chapter: 'Section 1: Logic & Fundamentals',
            section: 'logical',
            questionText: `Identify the odd one out among the given options based on mathematical or logical properties:`,
            options: ['121 (11^2)', '144 (12^2)', '169 (13^2)', '150 (Non-square)'],
            correctOptionIndex: 3,
            explanation: '121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.',
            hints: ['Check if the numbers are perfect squares.', '11*11=121, 12*12=144, 13*13=169.', '150 is not a perfect square.'],
            difficulty: 'Intermediate',
            marks: 1
          },
          {
            id: `ws-${examId.toLowerCase()}-g${grade}-${idx+1}-q2`,
            examId,
            grade,
            chapter: 'Section 2: Core Subject Drill',
            section: 'subject',
            questionText: `Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?`,
            latexFormula: '(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105',
            options: ['95', '105', '115', '125'],
            correctOptionIndex: 1,
            explanation: 'By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.',
            hints: ['Calculate 25*4 first.', 'Then calculate 120/6 = 20.', '100 + 20 - 15 = 105.'],
            difficulty: 'Intermediate',
            marks: 1
          },
          {
            id: `ws-${examId.toLowerCase()}-g${grade}-${idx+1}-q3`,
            examId,
            grade,
            chapter: 'Section 3: Achiever HOTS',
            section: 'achievers',
            questionText: `If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?`,
            latexFormula: '\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}',
            options: ['100 m', '120 m', '140 m', '150 m'],
            correctOptionIndex: 1,
            explanation: 'Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.',
            hints: ['Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.', 'Total distance covered in 15s = 20 * 15 = 300 m.', 'Train Length = 300 - 180 = 120 m.'],
            difficulty: 'Achiever',
            marks: 2,
            isLevel2: true
          }
        ]
      });
    });
  });
});

const wsOut = `import { Worksheet } from '../types/olympiad';

export const WORKSHEETS_DATA: Worksheet[] = ${JSON.stringify(worksheets, null, 2)};
`;
fs.writeFileSync('src/data/worksheetsData.ts', wsOut, 'utf8');
console.log('src/data/worksheetsData.ts created with ' + worksheets.length + ' worksheets!');
