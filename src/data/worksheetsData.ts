import { Worksheet } from '../types/olympiad';

export const WORKSHEETS_DATA: Worksheet[] = [
  {
    "id": "ws-imo-g1-1",
    "title": "Grade 1 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g1-1-q1",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g1-1-q2",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g1-1-q3",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g1-2",
    "title": "Grade 1 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g1-2-q1",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g1-2-q2",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g1-2-q3",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g1-3",
    "title": "Grade 1 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g1-3-q1",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g1-3-q2",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g1-3-q3",
        "examId": "IMO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g2-1",
    "title": "Grade 2 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g2-1-q1",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g2-1-q2",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g2-1-q3",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g2-2",
    "title": "Grade 2 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g2-2-q1",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g2-2-q2",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g2-2-q3",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g2-3",
    "title": "Grade 2 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g2-3-q1",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g2-3-q2",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g2-3-q3",
        "examId": "IMO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g3-1",
    "title": "Grade 3 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g3-1-q1",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g3-1-q2",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g3-1-q3",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g3-2",
    "title": "Grade 3 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g3-2-q1",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g3-2-q2",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g3-2-q3",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g3-3",
    "title": "Grade 3 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g3-3-q1",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g3-3-q2",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g3-3-q3",
        "examId": "IMO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g4-1",
    "title": "Grade 4 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g4-1-q1",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g4-1-q2",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g4-1-q3",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g4-2",
    "title": "Grade 4 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g4-2-q1",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g4-2-q2",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g4-2-q3",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g4-3",
    "title": "Grade 4 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g4-3-q1",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g4-3-q2",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g4-3-q3",
        "examId": "IMO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g5-1",
    "title": "Grade 5 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g5-1-q1",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g5-1-q2",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g5-1-q3",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g5-2",
    "title": "Grade 5 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g5-2-q1",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g5-2-q2",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g5-2-q3",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g5-3",
    "title": "Grade 5 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g5-3-q1",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g5-3-q2",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g5-3-q3",
        "examId": "IMO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g6-1",
    "title": "Grade 6 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g6-1-q1",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g6-1-q2",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g6-1-q3",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g6-2",
    "title": "Grade 6 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g6-2-q1",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g6-2-q2",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g6-2-q3",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g6-3",
    "title": "Grade 6 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g6-3-q1",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g6-3-q2",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g6-3-q3",
        "examId": "IMO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g7-1",
    "title": "Grade 7 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g7-1-q1",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g7-1-q2",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g7-1-q3",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g7-2",
    "title": "Grade 7 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g7-2-q1",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g7-2-q2",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g7-2-q3",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g7-3",
    "title": "Grade 7 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g7-3-q1",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g7-3-q2",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g7-3-q3",
        "examId": "IMO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g8-1",
    "title": "Grade 8 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g8-1-q1",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g8-1-q2",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g8-1-q3",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g8-2",
    "title": "Grade 8 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g8-2-q1",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g8-2-q2",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g8-2-q3",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g8-3",
    "title": "Grade 8 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g8-3-q1",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g8-3-q2",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g8-3-q3",
        "examId": "IMO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g9-1",
    "title": "Grade 9 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g9-1-q1",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g9-1-q2",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g9-1-q3",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g9-2",
    "title": "Grade 9 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g9-2-q1",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g9-2-q2",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g9-2-q3",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g9-3",
    "title": "Grade 9 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g9-3-q1",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g9-3-q2",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g9-3-q3",
        "examId": "IMO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g10-1",
    "title": "Grade 10 IMO: Concept Foundation Drill",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-imo-g10-1-q1",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g10-1-q2",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g10-1-q3",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g10-2",
    "title": "Grade 10 IMO: Speed & Accuracy Booster",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-imo-g10-2-q1",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g10-2-q2",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g10-2-q3",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-imo-g10-3",
    "title": "Grade 10 IMO: Achievers HOTS Worksheet",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IMO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-imo-g10-3-q1",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g10-3-q2",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-imo-g10-3-q3",
        "examId": "IMO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g1-1",
    "title": "Grade 1 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g1-1-q1",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g1-1-q2",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g1-1-q3",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g1-2",
    "title": "Grade 1 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g1-2-q1",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g1-2-q2",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g1-2-q3",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g1-3",
    "title": "Grade 1 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g1-3-q1",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g1-3-q2",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g1-3-q3",
        "examId": "ISO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g2-1",
    "title": "Grade 2 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g2-1-q1",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g2-1-q2",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g2-1-q3",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g2-2",
    "title": "Grade 2 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g2-2-q1",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g2-2-q2",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g2-2-q3",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g2-3",
    "title": "Grade 2 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g2-3-q1",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g2-3-q2",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g2-3-q3",
        "examId": "ISO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g3-1",
    "title": "Grade 3 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g3-1-q1",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g3-1-q2",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g3-1-q3",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g3-2",
    "title": "Grade 3 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g3-2-q1",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g3-2-q2",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g3-2-q3",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g3-3",
    "title": "Grade 3 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g3-3-q1",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g3-3-q2",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g3-3-q3",
        "examId": "ISO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g4-1",
    "title": "Grade 4 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g4-1-q1",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g4-1-q2",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g4-1-q3",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g4-2",
    "title": "Grade 4 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g4-2-q1",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g4-2-q2",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g4-2-q3",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g4-3",
    "title": "Grade 4 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g4-3-q1",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g4-3-q2",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g4-3-q3",
        "examId": "ISO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g5-1",
    "title": "Grade 5 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g5-1-q1",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g5-1-q2",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g5-1-q3",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g5-2",
    "title": "Grade 5 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g5-2-q1",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g5-2-q2",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g5-2-q3",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g5-3",
    "title": "Grade 5 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g5-3-q1",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g5-3-q2",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g5-3-q3",
        "examId": "ISO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g6-1",
    "title": "Grade 6 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g6-1-q1",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g6-1-q2",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g6-1-q3",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g6-2",
    "title": "Grade 6 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g6-2-q1",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g6-2-q2",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g6-2-q3",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g6-3",
    "title": "Grade 6 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g6-3-q1",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g6-3-q2",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g6-3-q3",
        "examId": "ISO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g7-1",
    "title": "Grade 7 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g7-1-q1",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g7-1-q2",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g7-1-q3",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g7-2",
    "title": "Grade 7 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g7-2-q1",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g7-2-q2",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g7-2-q3",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g7-3",
    "title": "Grade 7 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g7-3-q1",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g7-3-q2",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g7-3-q3",
        "examId": "ISO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g8-1",
    "title": "Grade 8 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g8-1-q1",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g8-1-q2",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g8-1-q3",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g8-2",
    "title": "Grade 8 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g8-2-q1",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g8-2-q2",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g8-2-q3",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g8-3",
    "title": "Grade 8 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g8-3-q1",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g8-3-q2",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g8-3-q3",
        "examId": "ISO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g9-1",
    "title": "Grade 9 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g9-1-q1",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g9-1-q2",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g9-1-q3",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g9-2",
    "title": "Grade 9 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g9-2-q1",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g9-2-q2",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g9-2-q3",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g9-3",
    "title": "Grade 9 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g9-3-q1",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g9-3-q2",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g9-3-q3",
        "examId": "ISO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g10-1",
    "title": "Grade 10 ISO: Concept Foundation Drill",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-iso-g10-1-q1",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g10-1-q2",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g10-1-q3",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g10-2",
    "title": "Grade 10 ISO: Speed & Accuracy Booster",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-iso-g10-2-q1",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g10-2-q2",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g10-2-q3",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-iso-g10-3",
    "title": "Grade 10 ISO: Achievers HOTS Worksheet",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ISO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-iso-g10-3-q1",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g10-3-q2",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-iso-g10-3-q3",
        "examId": "ISO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g1-1",
    "title": "Grade 1 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g1-1-q1",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g1-1-q2",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g1-1-q3",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g1-2",
    "title": "Grade 1 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g1-2-q1",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g1-2-q2",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g1-2-q3",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g1-3",
    "title": "Grade 1 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g1-3-q1",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g1-3-q2",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g1-3-q3",
        "examId": "ICSO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g2-1",
    "title": "Grade 2 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g2-1-q1",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g2-1-q2",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g2-1-q3",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g2-2",
    "title": "Grade 2 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g2-2-q1",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g2-2-q2",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g2-2-q3",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g2-3",
    "title": "Grade 2 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g2-3-q1",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g2-3-q2",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g2-3-q3",
        "examId": "ICSO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g3-1",
    "title": "Grade 3 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g3-1-q1",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g3-1-q2",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g3-1-q3",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g3-2",
    "title": "Grade 3 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g3-2-q1",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g3-2-q2",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g3-2-q3",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g3-3",
    "title": "Grade 3 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g3-3-q1",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g3-3-q2",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g3-3-q3",
        "examId": "ICSO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g4-1",
    "title": "Grade 4 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g4-1-q1",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g4-1-q2",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g4-1-q3",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g4-2",
    "title": "Grade 4 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g4-2-q1",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g4-2-q2",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g4-2-q3",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g4-3",
    "title": "Grade 4 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g4-3-q1",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g4-3-q2",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g4-3-q3",
        "examId": "ICSO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g5-1",
    "title": "Grade 5 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g5-1-q1",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g5-1-q2",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g5-1-q3",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g5-2",
    "title": "Grade 5 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g5-2-q1",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g5-2-q2",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g5-2-q3",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g5-3",
    "title": "Grade 5 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g5-3-q1",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g5-3-q2",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g5-3-q3",
        "examId": "ICSO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g6-1",
    "title": "Grade 6 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g6-1-q1",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g6-1-q2",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g6-1-q3",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g6-2",
    "title": "Grade 6 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g6-2-q1",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g6-2-q2",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g6-2-q3",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g6-3",
    "title": "Grade 6 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g6-3-q1",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g6-3-q2",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g6-3-q3",
        "examId": "ICSO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g7-1",
    "title": "Grade 7 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g7-1-q1",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g7-1-q2",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g7-1-q3",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g7-2",
    "title": "Grade 7 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g7-2-q1",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g7-2-q2",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g7-2-q3",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g7-3",
    "title": "Grade 7 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g7-3-q1",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g7-3-q2",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g7-3-q3",
        "examId": "ICSO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g8-1",
    "title": "Grade 8 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g8-1-q1",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g8-1-q2",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g8-1-q3",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g8-2",
    "title": "Grade 8 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g8-2-q1",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g8-2-q2",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g8-2-q3",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g8-3",
    "title": "Grade 8 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g8-3-q1",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g8-3-q2",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g8-3-q3",
        "examId": "ICSO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g9-1",
    "title": "Grade 9 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g9-1-q1",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g9-1-q2",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g9-1-q3",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g9-2",
    "title": "Grade 9 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g9-2-q1",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g9-2-q2",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g9-2-q3",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g9-3",
    "title": "Grade 9 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g9-3-q1",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g9-3-q2",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g9-3-q3",
        "examId": "ICSO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g10-1",
    "title": "Grade 10 ICSO: Concept Foundation Drill",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-icso-g10-1-q1",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g10-1-q2",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g10-1-q3",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g10-2",
    "title": "Grade 10 ICSO: Speed & Accuracy Booster",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-icso-g10-2-q1",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g10-2-q2",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g10-2-q3",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-icso-g10-3",
    "title": "Grade 10 ICSO: Achievers HOTS Worksheet",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ICSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-icso-g10-3-q1",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g10-3-q2",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-icso-g10-3-q3",
        "examId": "ICSO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g1-1",
    "title": "Grade 1 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g1-1-q1",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g1-1-q2",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g1-1-q3",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g1-2",
    "title": "Grade 1 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g1-2-q1",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g1-2-q2",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g1-2-q3",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g1-3",
    "title": "Grade 1 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g1-3-q1",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g1-3-q2",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g1-3-q3",
        "examId": "IEO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g2-1",
    "title": "Grade 2 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g2-1-q1",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g2-1-q2",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g2-1-q3",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g2-2",
    "title": "Grade 2 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g2-2-q1",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g2-2-q2",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g2-2-q3",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g2-3",
    "title": "Grade 2 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g2-3-q1",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g2-3-q2",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g2-3-q3",
        "examId": "IEO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g3-1",
    "title": "Grade 3 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g3-1-q1",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g3-1-q2",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g3-1-q3",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g3-2",
    "title": "Grade 3 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g3-2-q1",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g3-2-q2",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g3-2-q3",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g3-3",
    "title": "Grade 3 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g3-3-q1",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g3-3-q2",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g3-3-q3",
        "examId": "IEO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g4-1",
    "title": "Grade 4 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g4-1-q1",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g4-1-q2",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g4-1-q3",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g4-2",
    "title": "Grade 4 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g4-2-q1",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g4-2-q2",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g4-2-q3",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g4-3",
    "title": "Grade 4 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g4-3-q1",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g4-3-q2",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g4-3-q3",
        "examId": "IEO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g5-1",
    "title": "Grade 5 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g5-1-q1",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g5-1-q2",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g5-1-q3",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g5-2",
    "title": "Grade 5 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g5-2-q1",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g5-2-q2",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g5-2-q3",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g5-3",
    "title": "Grade 5 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g5-3-q1",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g5-3-q2",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g5-3-q3",
        "examId": "IEO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g6-1",
    "title": "Grade 6 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g6-1-q1",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g6-1-q2",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g6-1-q3",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g6-2",
    "title": "Grade 6 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g6-2-q1",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g6-2-q2",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g6-2-q3",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g6-3",
    "title": "Grade 6 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g6-3-q1",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g6-3-q2",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g6-3-q3",
        "examId": "IEO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g7-1",
    "title": "Grade 7 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g7-1-q1",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g7-1-q2",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g7-1-q3",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g7-2",
    "title": "Grade 7 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g7-2-q1",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g7-2-q2",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g7-2-q3",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g7-3",
    "title": "Grade 7 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g7-3-q1",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g7-3-q2",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g7-3-q3",
        "examId": "IEO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g8-1",
    "title": "Grade 8 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g8-1-q1",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g8-1-q2",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g8-1-q3",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g8-2",
    "title": "Grade 8 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g8-2-q1",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g8-2-q2",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g8-2-q3",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g8-3",
    "title": "Grade 8 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g8-3-q1",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g8-3-q2",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g8-3-q3",
        "examId": "IEO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g9-1",
    "title": "Grade 9 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g9-1-q1",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g9-1-q2",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g9-1-q3",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g9-2",
    "title": "Grade 9 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g9-2-q1",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g9-2-q2",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g9-2-q3",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g9-3",
    "title": "Grade 9 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g9-3-q1",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g9-3-q2",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g9-3-q3",
        "examId": "IEO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g10-1",
    "title": "Grade 10 IEO: Concept Foundation Drill",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-ieo-g10-1-q1",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g10-1-q2",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g10-1-q3",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g10-2",
    "title": "Grade 10 IEO: Speed & Accuracy Booster",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-ieo-g10-2-q1",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g10-2-q2",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g10-2-q3",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-ieo-g10-3",
    "title": "Grade 10 IEO: Achievers HOTS Worksheet",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IEO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-ieo-g10-3-q1",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g10-3-q2",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-ieo-g10-3-q3",
        "examId": "IEO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g1-1",
    "title": "Grade 1 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g1-1-q1",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g1-1-q2",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g1-1-q3",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g1-2",
    "title": "Grade 1 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g1-2-q1",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g1-2-q2",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g1-2-q3",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g1-3",
    "title": "Grade 1 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g1-3-q1",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g1-3-q2",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g1-3-q3",
        "examId": "IGKO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g2-1",
    "title": "Grade 2 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g2-1-q1",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g2-1-q2",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g2-1-q3",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g2-2",
    "title": "Grade 2 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g2-2-q1",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g2-2-q2",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g2-2-q3",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g2-3",
    "title": "Grade 2 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g2-3-q1",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g2-3-q2",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g2-3-q3",
        "examId": "IGKO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g3-1",
    "title": "Grade 3 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g3-1-q1",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g3-1-q2",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g3-1-q3",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g3-2",
    "title": "Grade 3 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g3-2-q1",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g3-2-q2",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g3-2-q3",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g3-3",
    "title": "Grade 3 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g3-3-q1",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g3-3-q2",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g3-3-q3",
        "examId": "IGKO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g4-1",
    "title": "Grade 4 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g4-1-q1",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g4-1-q2",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g4-1-q3",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g4-2",
    "title": "Grade 4 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g4-2-q1",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g4-2-q2",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g4-2-q3",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g4-3",
    "title": "Grade 4 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g4-3-q1",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g4-3-q2",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g4-3-q3",
        "examId": "IGKO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g5-1",
    "title": "Grade 5 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g5-1-q1",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g5-1-q2",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g5-1-q3",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g5-2",
    "title": "Grade 5 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g5-2-q1",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g5-2-q2",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g5-2-q3",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g5-3",
    "title": "Grade 5 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g5-3-q1",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g5-3-q2",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g5-3-q3",
        "examId": "IGKO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g6-1",
    "title": "Grade 6 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g6-1-q1",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g6-1-q2",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g6-1-q3",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g6-2",
    "title": "Grade 6 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g6-2-q1",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g6-2-q2",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g6-2-q3",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g6-3",
    "title": "Grade 6 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g6-3-q1",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g6-3-q2",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g6-3-q3",
        "examId": "IGKO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g7-1",
    "title": "Grade 7 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g7-1-q1",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g7-1-q2",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g7-1-q3",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g7-2",
    "title": "Grade 7 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g7-2-q1",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g7-2-q2",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g7-2-q3",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g7-3",
    "title": "Grade 7 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g7-3-q1",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g7-3-q2",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g7-3-q3",
        "examId": "IGKO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g8-1",
    "title": "Grade 8 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g8-1-q1",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g8-1-q2",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g8-1-q3",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g8-2",
    "title": "Grade 8 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g8-2-q1",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g8-2-q2",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g8-2-q3",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g8-3",
    "title": "Grade 8 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g8-3-q1",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g8-3-q2",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g8-3-q3",
        "examId": "IGKO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g9-1",
    "title": "Grade 9 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g9-1-q1",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g9-1-q2",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g9-1-q3",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g9-2",
    "title": "Grade 9 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g9-2-q1",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g9-2-q2",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g9-2-q3",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g9-3",
    "title": "Grade 9 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g9-3-q1",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g9-3-q2",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g9-3-q3",
        "examId": "IGKO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g10-1",
    "title": "Grade 10 IGKO: Concept Foundation Drill",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-igko-g10-1-q1",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g10-1-q2",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g10-1-q3",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g10-2",
    "title": "Grade 10 IGKO: Speed & Accuracy Booster",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-igko-g10-2-q1",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g10-2-q2",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g10-2-q3",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-igko-g10-3",
    "title": "Grade 10 IGKO: Achievers HOTS Worksheet",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF IGKO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-igko-g10-3-q1",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g10-3-q2",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-igko-g10-3-q3",
        "examId": "IGKO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g1-1",
    "title": "Grade 1 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g1-1-q1",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g1-1-q2",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g1-1-q3",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g1-2",
    "title": "Grade 1 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g1-2-q1",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g1-2-q2",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g1-2-q3",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g1-3",
    "title": "Grade 1 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 1 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g1-3-q1",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g1-3-q2",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g1-3-q3",
        "examId": "ISSO",
        "grade": 1,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g2-1",
    "title": "Grade 2 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g2-1-q1",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g2-1-q2",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g2-1-q3",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g2-2",
    "title": "Grade 2 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g2-2-q1",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g2-2-q2",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g2-2-q3",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g2-3",
    "title": "Grade 2 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 2 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g2-3-q1",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g2-3-q2",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g2-3-q3",
        "examId": "ISSO",
        "grade": 2,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g3-1",
    "title": "Grade 3 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g3-1-q1",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g3-1-q2",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g3-1-q3",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g3-2",
    "title": "Grade 3 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g3-2-q1",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g3-2-q2",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g3-2-q3",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g3-3",
    "title": "Grade 3 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 3 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g3-3-q1",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g3-3-q2",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g3-3-q3",
        "examId": "ISSO",
        "grade": 3,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g4-1",
    "title": "Grade 4 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g4-1-q1",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g4-1-q2",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g4-1-q3",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g4-2",
    "title": "Grade 4 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g4-2-q1",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g4-2-q2",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g4-2-q3",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g4-3",
    "title": "Grade 4 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 4 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g4-3-q1",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g4-3-q2",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g4-3-q3",
        "examId": "ISSO",
        "grade": 4,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g5-1",
    "title": "Grade 5 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g5-1-q1",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g5-1-q2",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g5-1-q3",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g5-2",
    "title": "Grade 5 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g5-2-q1",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g5-2-q2",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g5-2-q3",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g5-3",
    "title": "Grade 5 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 5 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g5-3-q1",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g5-3-q2",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g5-3-q3",
        "examId": "ISSO",
        "grade": 5,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g6-1",
    "title": "Grade 6 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g6-1-q1",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g6-1-q2",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g6-1-q3",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g6-2",
    "title": "Grade 6 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g6-2-q1",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g6-2-q2",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g6-2-q3",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g6-3",
    "title": "Grade 6 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 6 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g6-3-q1",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g6-3-q2",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g6-3-q3",
        "examId": "ISSO",
        "grade": 6,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g7-1",
    "title": "Grade 7 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g7-1-q1",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g7-1-q2",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g7-1-q3",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g7-2",
    "title": "Grade 7 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g7-2-q1",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g7-2-q2",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g7-2-q3",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g7-3",
    "title": "Grade 7 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 7 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g7-3-q1",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g7-3-q2",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g7-3-q3",
        "examId": "ISSO",
        "grade": 7,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g8-1",
    "title": "Grade 8 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g8-1-q1",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g8-1-q2",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g8-1-q3",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g8-2",
    "title": "Grade 8 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g8-2-q1",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g8-2-q2",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g8-2-q3",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g8-3",
    "title": "Grade 8 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 8 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g8-3-q1",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g8-3-q2",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g8-3-q3",
        "examId": "ISSO",
        "grade": 8,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g9-1",
    "title": "Grade 9 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g9-1-q1",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g9-1-q2",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g9-1-q3",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g9-2",
    "title": "Grade 9 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g9-2-q1",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g9-2-q2",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g9-2-q3",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g9-3",
    "title": "Grade 9 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 9 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g9-3-q1",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g9-3-q2",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g9-3-q3",
        "examId": "ISSO",
        "grade": 9,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g10-1",
    "title": "Grade 10 ISSO: Concept Foundation Drill",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "Core Foundations",
    "difficulty": "Easy",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 20,
    "questions": [
      {
        "id": "ws-isso-g10-1-q1",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g10-1-q2",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g10-1-q3",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g10-2",
    "title": "Grade 10 ISSO: Speed & Accuracy Booster",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "Applied Reasoning",
    "difficulty": "Medium",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 30,
    "questions": [
      {
        "id": "ws-isso-g10-2-q1",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g10-2-q2",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g10-2-q3",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  },
  {
    "id": "ws-isso-g10-3",
    "title": "Grade 10 ISSO: Achievers HOTS Worksheet",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "Achievers Section HOTS",
    "difficulty": "Olympiad-Level",
    "description": "Printable classroom and home practice worksheet designed for Grade 10 SOF ISSO exam preparation. Includes bubble answer sheet and complete solutions.",
    "timeLimitMinutes": 40,
    "questions": [
      {
        "id": "ws-isso-g10-3-q1",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 1: Logic & Fundamentals",
        "section": "logical",
        "questionText": "Identify the odd one out among the given options based on mathematical or logical properties:",
        "options": [
          "121 (11^2)",
          "144 (12^2)",
          "169 (13^2)",
          "150 (Non-square)"
        ],
        "correctOptionIndex": 3,
        "explanation": "121, 144, and 169 are perfect squares (11^2, 12^2, 13^2), whereas 150 is not a perfect square.",
        "hints": [
          "Check if the numbers are perfect squares.",
          "11*11=121, 12*12=144, 13*13=169.",
          "150 is not a perfect square."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g10-3-q2",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 2: Core Subject Drill",
        "section": "subject",
        "questionText": "Evaluate the expression: (25 * 4) + (120 / 6) - 15 = ?",
        "latexFormula": "(25 \\times 4) + (120 \\div 6) - 15 = 100 + 20 - 15 = 105",
        "options": [
          "95",
          "105",
          "115",
          "125"
        ],
        "correctOptionIndex": 1,
        "explanation": "By BODMAS: 25*4 = 100, 120/6 = 20. 100 + 20 - 15 = 120 - 15 = 105.",
        "hints": [
          "Calculate 25*4 first.",
          "Then calculate 120/6 = 20.",
          "100 + 20 - 15 = 105."
        ],
        "difficulty": "Intermediate",
        "marks": 1
      },
      {
        "id": "ws-isso-g10-3-q3",
        "examId": "ISSO",
        "grade": 10,
        "chapter": "Section 3: Achiever HOTS",
        "section": "achievers",
        "questionText": "If a train traveling at 72 km/h crosses a 180 m long platform in 15 seconds, what is the length of the train?",
        "latexFormula": "\\text{Speed} = 72 \\times \\frac{5}{18} = 20\\text{ m/s}, \\quad \\text{Total Dist} = 20 \\times 15 = 300\\text{ m}",
        "options": [
          "100 m",
          "120 m",
          "140 m",
          "150 m"
        ],
        "correctOptionIndex": 1,
        "explanation": "Speed = 72 * (5/18) = 20 m/s. Distance in 15s = 20 * 15 = 300 m. Total Distance = Train Length + Platform Length. Train Length = 300 - 180 = 120 m.",
        "hints": [
          "Convert speed from km/h to m/s: 72 * (5/18) = 20 m/s.",
          "Total distance covered in 15s = 20 * 15 = 300 m.",
          "Train Length = 300 - 180 = 120 m."
        ],
        "difficulty": "Achiever",
        "marks": 2,
        "isLevel2": true
      }
    ]
  }
];
