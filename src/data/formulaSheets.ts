import { FormulaSheet } from '../types/olympiad';

export const FORMULA_SHEETS: FormulaSheet[] = [
  {
    "id": "math-shortcuts",
    "title": "Maths Quick-Solve Formula Sheet & Memory Hacks",
    "examId": "IMO",
    "gradeRange": "Grades 3 - 10",
    "category": "Mathematics & Speed Math",
    "icon": "🧮",
    "cards": [
      {
        "topic": "Sum of First N Natural Numbers",
        "formulaOrConcept": "S_n = \\frac{n(n+1)}{2}",
        "explanation": "Instantly calculate sum from 1 to n (e.g. Sum 1 to 100 = (100*101)/2 = 5050).",
        "olympiadTrick": "Use this whenever you see series addition in Logical Reasoning or Section 2!",
        "example": "Sum 1 to 20 = (20*21)/2 = 210."
      },
      {
        "topic": "Speed, Distance & Time Conversion",
        "formulaOrConcept": "1\\text{ km/h} = \\frac{5}{18}\\text{ m/s}, \\quad 1\\text{ m/s} = \\frac{18}{5}\\text{ km/h}",
        "explanation": "Convert km/h to m/s by multiplying with 5/18 directly without tedious division.",
        "olympiadTrick": "To convert 72 km/h: 72 * (5/18) = 4 * 5 = 20 m/s in 2 seconds!",
        "example": "54 km/h * (5/18) = 15 m/s."
      },
      {
        "topic": "Algebraic Super Identities",
        "formulaOrConcept": "(a+b)^2 - (a-b)^2 = 4ab, \\quad (a+b)^2 + (a-b)^2 = 2(a^2+b^2)",
        "explanation": "Very frequent in Achiever Section to avoid expanding long quadratic terms.",
        "olympiadTrick": "If given (a+b) and (a-b), find ab directly using (Sum^2 - Diff^2)/4.",
        "example": "If a+b=10 and a-b=2, then 4ab = 100 - 4 = 96 => ab = 24."
      },
      {
        "topic": "Divisibility Test for 7, 11, 13",
        "formulaOrConcept": "\\text{For 11: } |(\\text{Sum of Odd Digits}) - (\\text{Sum of Even Digits})| = 0 \\text{ or multiple of } 11",
        "explanation": "Check large 6-digit numbers in 5 seconds without actual division.",
        "olympiadTrick": "For 7: Double last digit and subtract from remaining truncated number.",
        "example": "3729: Odd sum = 3+2=5, Even sum = 7+9=16. 16 - 5 = 11 (Divisible by 11!)."
      }
    ]
  },
  {
    "id": "science-cheat-sheet",
    "title": "Science Super Concepts & Diagnostic Tables",
    "examId": "ISO",
    "gradeRange": "Grades 3 - 10",
    "category": "Physics, Chemistry & Biology",
    "icon": "🔬",
    "cards": [
      {
        "topic": "Vitamin Deficiency Disorders & Sources",
        "formulaOrConcept": "\\text{Vit A: Night Blindness}, \\; \\text{Vit B1: Beriberi}, \\; \\text{Vit C: Scurvy}, \\; \\text{Vit D: Rickets}",
        "explanation": "Quick memory table for human body and health questions.",
        "olympiadTrick": "Vit C is destroyed by cooking heat; Citrus fruits are richest raw sources.",
        "example": "Bleeding gums = Vitamin C; Soft bending bones = Vitamin D/Calcium."
      },
      {
        "topic": "Acids, Bases & Indicator Color Codes",
        "formulaOrConcept": "\\text{Blue Litmus} \\xrightarrow{\\text{Acid}} \\text{Red}, \\quad \\text{Red Litmus} \\xrightarrow{\\text{Base}} \\text{Blue}",
        "explanation": "Phenolphthalein is Colorless in Acid, Pink in Base. Methyl Orange turns Red in Acid, Yellow in Base.",
        "olympiadTrick": "Mnemonic: \"B\" for Base turns Litmus to \"B\" for Blue!",
        "example": "Lemon juice (citric acid) turns blue litmus paper pink/red."
      },
      {
        "topic": "Electricity: Ohm Law & Power Relations",
        "formulaOrConcept": "V = I \\cdot R, \\quad P = V \\cdot I = I^2 R = \\frac{V^2}{R}",
        "explanation": "Voltage V (Volts), Current I (Amperes), Resistance R (Ohms).",
        "olympiadTrick": "If resistance is doubled while voltage is constant, current halves.",
        "example": "A 240V appliance drawing 2A has resistance R = 240/2 = 120 Ohms."
      }
    ]
  },
  {
    "id": "cyber-cheat-sheet",
    "title": "Cyber, AI & Coding Quick Reference",
    "examId": "ICSO",
    "gradeRange": "Grades 2 - 10",
    "category": "Computers, Scratch & Python",
    "icon": "💻",
    "cards": [
      {
        "topic": "Binary Storage Hierarchy",
        "formulaOrConcept": "1\\text{ Byte} = 8\\text{ Bits}, \\; 1\\text{ KB} = 1024\\text{ B}, \\; 1\\text{ MB} = 1024\\text{ KB}, \\; 1\\text{ GB} = 1024\\text{ MB}",
        "explanation": "Binary multipliers always scale by 2^10 = 1024, not 1000.",
        "olympiadTrick": "Order: Bit < Byte < KB < MB < GB < TB < PB < EB.",
        "example": "4 GB = 4 * 1024 MB = 4096 MB."
      },
      {
        "topic": "Python Core Slicing & Indexing",
        "formulaOrConcept": "\\text{string}[\\text{start} : \\text{end} : \\text{step}] \\implies \\text{excludes end index}",
        "explanation": "Negative indexing starts from -1 at the very end of list/string.",
        "olympiadTrick": "\"HELLO\"[::-1] reverses the string to \"OLLEH\" instantly!",
        "example": "nums = [1,2,3,4,5]; nums[1:3] returns [2, 3]."
      }
    ]
  },
  {
    "id": "english-cheat-sheet",
    "title": "English Grammar Rules & Vocabulary Traps",
    "examId": "IEO",
    "gradeRange": "Grades 1 - 10",
    "category": "Grammar & Lexicon",
    "icon": "📖",
    "cards": [
      {
        "topic": "Subject-Verb Agreement with Proximity Rule",
        "formulaOrConcept": "\\text{Neither } A \\text{ nor } B + \\text{Verb agrees with } B",
        "explanation": "When subjects are joined by \"either... or\" or \"neither... nor\", verb matches closest noun.",
        "olympiadTrick": "Neither the captain nor the players WERE ready (players = plural).",
        "example": "Either John or his brothers ARE going."
      },
      {
        "topic": "Few vs Little & Many vs Much",
        "formulaOrConcept": "\\text{Few / Many} \\to \\text{Countable Nouns}, \\quad \\text{Little / Much} \\to \\text{Uncountable Nouns}",
        "explanation": "\"A few\" means some; \"Few\" means almost none. \"A little\" means some; \"Little\" means almost none.",
        "olympiadTrick": "Books, pens, days = Few/Many; Water, time, patience, milk = Little/Much.",
        "example": "She has few friends (almost none) vs She has a few friends (some)."
      }
    ]
  }
];
