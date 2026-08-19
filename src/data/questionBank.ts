import { Question } from '../types/olympiad';

export const QUESTION_BANK: Question[] = [
  {
    "id": "cur-imo-g1-1",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Number Sense & Counting",
    "section": "subject",
    "questionText": "Look at the number sequence: 4, 8, 12, __, 20. What is the missing number in the blank?",
    "latexFormula": "4, 8, 12, \\boxed{?}, 20",
    "options": [
      "14",
      "15",
      "16",
      "18"
    ],
    "correctOptionIndex": 2,
    "explanation": "The pattern is skip counting by 4: 4 (+4) = 8, 8 (+4) = 12, 12 (+4) = 16, 16 (+4) = 20.",
    "hints": [
      "Notice how much is added to 4 to get 8.",
      "Each step adds 4 to the previous number.",
      "Calculate 12 + 4 to find the missing number."
    ],
    "difficulty": "Beginner",
    "marks": 1
  },
  {
    "id": "cur-imo-g1-2",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Shapes & Spatial Understanding",
    "section": "logical",
    "questionText": "Which geometric shape has 3 straight sides and 3 corners?",
    "options": [
      "Square",
      "Circle",
      "Triangle",
      "Rectangle"
    ],
    "correctOptionIndex": 2,
    "explanation": "A triangle is a closed 2D shape with exactly 3 straight edges and 3 corners (vertices).",
    "hints": [
      "Think of the word \"Tri\" which means three.",
      "A square has 4 sides, a circle has 0 corners.",
      "A slice of pizza is shaped like this!"
    ],
    "difficulty": "Beginner",
    "marks": 1
  },
  {
    "id": "cur-imo-g2-1",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Numbers up to 1000",
    "section": "achievers",
    "questionText": "I am a 3-digit number. My tens digit is 5. My hundreds digit is 3 more than my tens digit. My ones digit is 2 less than my tens digit. What number am I?",
    "options": [
      "853",
      "753",
      "852",
      "835"
    ],
    "correctOptionIndex": 0,
    "explanation": "Tens digit = 5. Hundreds digit = 5 + 3 = 8. Ones digit = 5 - 2 = 3. So the number is 853.",
    "hints": [
      "Start with the given tens digit, which is 5.",
      "Hundreds digit = 5 + 3 = 8. Ones digit = 5 - 2 = 3.",
      "Combine hundreds (8), tens (5), and ones (3)."
    ],
    "difficulty": "Achiever",
    "marks": 2
  },
  {
    "id": "cur-imo-g3-1",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Fractions & Equal Parts",
    "section": "subject",
    "questionText": "Aryan ate 3/8 of a pizza and his sister Simran ate 2/8 of the same pizza. What fraction of the pizza is left over?",
    "latexFormula": "1 - \\left(\\frac{3}{8} + \\frac{2}{8}\\right) = \\boxed{?}",
    "options": [
      "3/8",
      "5/8",
      "2/8",
      "1/8"
    ],
    "correctOptionIndex": 0,
    "explanation": "Total eaten = 3/8 + 2/8 = 5/8. Whole pizza = 8/8. Fraction left = 8/8 - 5/8 = 3/8.",
    "hints": [
      "Add the parts eaten by Aryan and Simran first.",
      "3/8 + 2/8 = 5/8 of the pizza was eaten.",
      "Subtract 5/8 from the full pizza (8/8)."
    ],
    "difficulty": "Intermediate",
    "marks": 1
  },
  {
    "id": "cur-imo-g4-1",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Factors & Multiples",
    "section": "achievers",
    "questionText": "Two alarm clocks ring together at 8:00 AM. One clock rings every 12 minutes and the other rings every 18 minutes. At what time will they ring together again next?",
    "latexFormula": "\\text{LCM}(12, 18) = 36",
    "options": [
      "8:24 AM",
      "8:30 AM",
      "8:36 AM",
      "8:48 AM"
    ],
    "correctOptionIndex": 2,
    "explanation": "Find the LCM of 12 and 18. Multiples of 12: 12, 24, 36... Multiples of 18: 18, 36... LCM is 36 minutes. 8:00 AM + 36 minutes = 8:36 AM.",
    "hints": [
      "We need to find the Least Common Multiple (LCM) of 12 and 18.",
      "List the multiples of 18: 18, 36, 54...",
      "36 is divisible by both 12 and 18. Add 36 minutes to 8:00 AM."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-imo-g5-1",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Angles & Perimeter",
    "section": "subject",
    "questionText": "A rectangular garden has a length of 24 m and a breadth of 16 m. If a wire fence is placed around it with 3 rounds of wire, what is the total length of wire needed?",
    "latexFormula": "\\text{Perimeter} = 2(L + B) = 2(24 + 16) = 80\\text{ m}",
    "options": [
      "160 m",
      "240 m",
      "320 m",
      "80 m"
    ],
    "correctOptionIndex": 1,
    "explanation": "Perimeter of rectangle = 2 * (length + breadth) = 2 * (24 + 16) = 2 * 40 = 80 m. For 3 rounds: 3 * 80 m = 240 m.",
    "hints": [
      "Find the perimeter for 1 round of the garden first.",
      "Perimeter = 2 * (24 + 16) = 80 m.",
      "Multiply 80 m by 3 rounds."
    ],
    "difficulty": "Intermediate",
    "marks": 1
  },
  {
    "id": "cur-imo-g6-1",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Algebraic Expressions",
    "section": "achievers",
    "questionText": "If 3x + 5 = 2(x + 7) - 1, then what is the value of x^2 - 4x + 1?",
    "latexFormula": "3x + 5 = 2x + 14 - 1 \\implies x = 8",
    "options": [
      "25",
      "33",
      "41",
      "17"
    ],
    "correctOptionIndex": 1,
    "explanation": "Expand right side: 3x + 5 = 2x + 14 - 1 => 3x + 5 = 2x + 13 => 3x - 2x = 13 - 5 => x = 8. Now evaluate: 8^2 - 4(8) + 1 = 64 - 32 + 1 = 33.",
    "hints": [
      "First expand the right hand side: 2(x + 7) - 1 = 2x + 13.",
      "Solve for x: 3x - 2x = 13 - 5 = 8.",
      "Substitute x = 8 into 8^2 - 4(8) + 1."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-imo-g7-1",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Comparing Quantities",
    "section": "everyday",
    "questionText": "A shopkeeper bought a cycle for $2,400 and sold it for $2,880. What is his profit percentage?",
    "latexFormula": "\\text{Profit \\%} = \\frac{2880 - 2400}{2400} \\times 100\\%",
    "options": [
      "15%",
      "18%",
      "20%",
      "25%"
    ],
    "correctOptionIndex": 2,
    "explanation": "Profit = SP - CP = $2880 - $2400 = $480. Profit % = (Profit / CP) * 100 = (480 / 2400) * 100 = 20%.",
    "hints": [
      "Calculate the profit amount: SP - CP.",
      "Profit = $480.",
      "Profit % = (480 / 2400) * 100 = 20%."
    ],
    "difficulty": "Intermediate",
    "marks": 1
  },
  {
    "id": "cur-imo-g8-1",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Mensuration & Geometry",
    "section": "achievers",
    "questionText": "A solid metallic cylinder of radius 7 cm and height 14 cm is melted and recast into small solid spheres of radius 3.5 cm each. How many such spheres can be formed? (Use pi = 22/7)",
    "latexFormula": "V_{\\text{cyl}} = \\pi r^2 h = \\pi(49)(14), \\quad V_{\\text{sph}} = \\frac{4}{3}\\pi R^3",
    "options": [
      "8",
      "10",
      "12",
      "16"
    ],
    "correctOptionIndex": 2,
    "explanation": "Volume of cylinder = pi * 7^2 * 14 = 686*pi. Volume of 1 sphere = (4/3)*pi*(3.5)^3 = (4/3)*pi*(343/8) = (343/6)*pi = 57.167*pi. Number of spheres = 686 / (343/6) = (686 * 6) / 343 = 2 * 6 = 12.",
    "hints": [
      "Equate the total volume of cylinder to N times volume of sphere.",
      "Volume of cylinder = pi * r^2 * h.",
      "Volume of sphere = (4/3) * pi * R^3."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-imo-g9-1",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Polynomials & Identities",
    "section": "achievers",
    "questionText": "If a + b + c = 0 and a^2 + b^2 + c^2 = 40, what is the value of ab + bc + ca?",
    "latexFormula": "(a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca)",
    "options": [
      "-20",
      "20",
      "-40",
      "0"
    ],
    "correctOptionIndex": 0,
    "explanation": "Use identity: (a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca). Since a+b+c=0: 0^2 = 40 + 2(ab+bc+ca) => 2(ab+bc+ca) = -40 => ab+bc+ca = -20.",
    "hints": [
      "Recall the expansion of (a + b + c)^2.",
      "Substitute a + b + c = 0 and a^2 + b^2 + c^2 = 40.",
      "0 = 40 + 2(ab + bc + ca) -> solve for (ab + bc + ca)."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-imo-g10-1",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Trigonometry & Quadratic Equations",
    "section": "achievers",
    "questionText": "If sin(theta) + cos(theta) = sqrt(2) * cos(theta), then what is the value of cos(theta) - sin(theta)?",
    "latexFormula": "\\cos\\theta - \\sin\\theta = \\sqrt{2}\\sin\\theta",
    "options": [
      "sqrt(2) * sin(theta)",
      "sqrt(2) * cos(theta)",
      "sin(theta)",
      "2 * cos(theta)"
    ],
    "correctOptionIndex": 0,
    "explanation": "sin(theta) = cos(theta)(sqrt(2) - 1). Multiply both sides by (sqrt(2) + 1): sin(theta)(sqrt(2) + 1) = cos(theta)(2 - 1) = cos(theta). Hence: sqrt(2)*sin(theta) + sin(theta) = cos(theta) => cos(theta) - sin(theta) = sqrt(2)*sin(theta).",
    "hints": [
      "Express sin(theta) in terms of cos(theta): sin(theta) = (sqrt(2) - 1) * cos(theta).",
      "Multiply by conjugate (sqrt(2) + 1).",
      "Rearrange terms to isolate cos(theta) - sin(theta)."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-iso-g1-1",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Living & Non-Living Things",
    "section": "subject",
    "questionText": "Which of the following needs air, water, and sunlight to grow and stay alive?",
    "options": [
      "A plastic toy car",
      "A mango tree sapling",
      "A wooden chair",
      "A steel spoon"
    ],
    "correctOptionIndex": 1,
    "explanation": "A mango tree sapling is a living plant that needs sunlight, water, and air for photosynthesis and growth.",
    "hints": [
      "Think which one is a living plant.",
      "Non-living objects like chairs and toys do not grow.",
      "Plants need sunlight to prepare food."
    ],
    "difficulty": "Beginner",
    "marks": 1
  },
  {
    "id": "cur-iso-g3-1",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Matter & Forces",
    "section": "subject",
    "questionText": "When two bar magnets are brought close together, what happens when North pole faces another North pole?",
    "options": [
      "They attract and stick",
      "They repel and push apart",
      "They rotate continuously",
      "Nothing happens"
    ],
    "correctOptionIndex": 1,
    "explanation": "Like magnetic poles (North-North or South-South) repel each other, while unlike poles (North-South) attract.",
    "hints": [
      "Remember the rule for like and unlike magnetic poles.",
      "Opposite poles attract each other.",
      "Like poles always push away (repel)."
    ],
    "difficulty": "Beginner",
    "marks": 1
  },
  {
    "id": "cur-iso-g5-1",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Human Body & Deficiency Diseases",
    "section": "subject",
    "questionText": "Bleeding gums and delayed wound healing are classic deficiency symptoms of which vitamin?",
    "options": [
      "Vitamin A",
      "Vitamin B1",
      "Vitamin C",
      "Vitamin D"
    ],
    "correctOptionIndex": 2,
    "explanation": "Vitamin C (Ascorbic acid) deficiency leads to Scurvy, characterized by bleeding gums, skin spots, and poor wound healing.",
    "hints": [
      "Citrus fruits like lemons and oranges are rich in this vitamin.",
      "Deficiency of Vitamin A causes night blindness; Vitamin D causes rickets.",
      "Scurvy is caused by lack of Vitamin C."
    ],
    "difficulty": "Intermediate",
    "marks": 1
  },
  {
    "id": "cur-iso-g7-1",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Acids, Bases & Salts",
    "section": "achievers",
    "questionText": "An unknown aqueous solution X turns blue litmus red and reacts with baking soda to produce brisk effervescence of gas Y. Gas Y turns lime water milky. What are X and Y?",
    "options": [
      "X is Hydrochloric acid, Y is Carbon dioxide",
      "X is Sodium hydroxide, Y is Hydrogen",
      "X is Hydrochloric acid, Y is Oxygen",
      "X is Water, Y is Nitrogen"
    ],
    "correctOptionIndex": 0,
    "explanation": "Acid turns blue litmus red. Acid + Sodium hydrogen carbonate (baking soda) produces Carbon dioxide (CO2) gas, which turns lime water milky due to CaCO3 formation.",
    "hints": [
      "Blue litmus turning red indicates an acidic substance.",
      "Brisk effervescence with baking soda releases CO2 gas.",
      "CO2 gas turns lime water milky."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-iso-g9-1",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Kinematics & Laws of Motion",
    "section": "achievers",
    "questionText": "A car starting from rest accelerates uniformly at 2.5 m/s^2 for 8 seconds. What total distance does it cover during this time interval?",
    "latexFormula": "s = ut + \\frac{1}{2}at^2 = 0 + \\frac{1}{2}(2.5)(8^2)",
    "options": [
      "60 m",
      "72 m",
      "80 m",
      "96 m"
    ],
    "correctOptionIndex": 2,
    "explanation": "Use second equation of motion: s = ut + 0.5 * a * t^2. Since it starts from rest, u = 0. s = 0 + 0.5 * 2.5 * (8^2) = 0.5 * 2.5 * 64 = 80 meters.",
    "hints": [
      "Initial velocity u = 0 m/s.",
      "Use the equation s = ut + (1/2)*a*t^2.",
      "s = 0.5 * 2.5 * 64 = 80 m."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-icso-g2-1",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Parts of Computer",
    "section": "subject",
    "questionText": "Which computer component is known as the \"Brain of the Computer\" that processes all instructions?",
    "options": [
      "Monitor",
      "Keyboard",
      "CPU",
      "Mouse"
    ],
    "correctOptionIndex": 2,
    "explanation": "The CPU (Central Processing Unit) executes programs and performs arithmetic and logical calculations, acting as the brain.",
    "hints": [
      "It stands for Central Processing Unit.",
      "Monitor is display, keyboard is input.",
      "CPU is the processing unit."
    ],
    "difficulty": "Beginner",
    "marks": 1
  },
  {
    "id": "cur-icso-g5-1",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Memory & Storage Units",
    "section": "subject",
    "questionText": "How many Megabytes (MB) are exactly equal to 1 Gigabyte (GB) in digital storage?",
    "latexFormula": "1\\text{ GB} = 2^{10}\\text{ MB} = 1024\\text{ MB}",
    "options": [
      "100 MB",
      "500 MB",
      "1000 MB",
      "1024 MB"
    ],
    "correctOptionIndex": 3,
    "explanation": "In binary computer storage architecture, units are powers of 2: 1 GB = 2^10 MB = 1024 MB.",
    "hints": [
      "Computers work in binary (base 2).",
      "2^10 = 1024.",
      "1 GB = 1024 MB."
    ],
    "difficulty": "Intermediate",
    "marks": 1
  },
  {
    "id": "cur-icso-g8-1",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Python Programming & Data Structures",
    "section": "achievers",
    "questionText": "What will be the output of the following Python code snippet?\nnums = [10, 20, 30, 40, 50]\nprint(nums[1:4])",
    "latexFormula": "\\text{nums}[1:4] = [20, 30, 40]",
    "options": [
      "[10, 20, 30]",
      "[20, 30, 40]",
      "[20, 30, 40, 50]",
      "[10, 20, 30, 40]"
    ],
    "correctOptionIndex": 1,
    "explanation": "Python list slicing syntax [start:end] includes index `start` (index 1 = 20) and excludes index `end` (index 4 = 50), giving [20, 30, 40].",
    "hints": [
      "List index starts at 0 (nums[0]=10, nums[1]=20).",
      "Slice nums[1:4] takes indices 1, 2, and 3.",
      "Index 4 is excluded."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-ieo-g3-1",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Prepositions & Grammar",
    "section": "subject",
    "questionText": "Choose the correct preposition: \"The brave diver jumped _______ the deep pool to rescue the kitten.\"",
    "options": [
      "at",
      "into",
      "on",
      "with"
    ],
    "correctOptionIndex": 1,
    "explanation": "\"Into\" is used to show movement from outside towards the inside of something.",
    "hints": [
      "Notice that movement from outside to inside is happening.",
      "\"In\" is stationary; \"Into\" expresses movement inwards.",
      "The diver jumped into the pool."
    ],
    "difficulty": "Beginner",
    "marks": 1
  },
  {
    "id": "cur-ieo-g7-1",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Idioms & Advanced Vocabulary",
    "section": "achievers",
    "questionText": "What is the meaning of the idiom \"to burn the midnight oil\"?",
    "options": [
      "To waste electricity",
      "To work or study late into the night",
      "To cause an accidental fire",
      "To cook late dinner"
    ],
    "correctOptionIndex": 1,
    "explanation": "\"Burn the midnight oil\" originates from working by oil lamp late into the night, meaning working or studying diligently late.",
    "hints": [
      "Think of ancient times when scholars studied by oil lamps at night.",
      "It relates to hard work during late hours.",
      "It means working/studying late into the night."
    ],
    "difficulty": "Intermediate",
    "marks": 2
  },
  {
    "id": "cur-igko-g4-1",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "Space Missions & Inventions",
    "section": "everyday",
    "questionText": "Which Indian lunar mission successfully made a historic soft landing near the South Pole of the Moon in August 2023?",
    "options": [
      "Mangalyaan-1",
      "Chandrayaan-2",
      "Chandrayaan-3",
      "Aditya-L1"
    ],
    "correctOptionIndex": 2,
    "explanation": "ISRO Chandrayaan-3 mission with Vikram lander and Pragyan rover successfully landed near the lunar South Pole on August 23, 2023.",
    "hints": [
      "It was launched by ISRO in 2023.",
      "Aditya-L1 is a solar mission; Mangalyaan is Mars mission.",
      "Chandrayaan-3 is the lunar mission."
    ],
    "difficulty": "Intermediate",
    "marks": 1
  },
  {
    "id": "cur-igko-g8-1",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "World Geopolitics & Treaties",
    "section": "achievers",
    "questionText": "Where is the permanent headquarters of the International Court of Justice (ICJ) situated?",
    "options": [
      "Geneva, Switzerland",
      "New York, USA",
      "The Hague, Netherlands",
      "Paris, France"
    ],
    "correctOptionIndex": 2,
    "explanation": "The International Court of Justice (principal judicial organ of the UN) is located in the Peace Palace at The Hague, Netherlands.",
    "hints": [
      "It is located in Europe, in the Peace Palace.",
      "Geneva houses WHO and ILO; New York houses UN Headquarters.",
      "The ICJ is in The Hague, Netherlands."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true
  },
  {
    "id": "cur-isso-g4-1",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "Indus Valley Civilization",
    "section": "subject",
    "questionText": "The famous \"Great Bath\" and the bronze statue of the \"Dancing Girl\" were excavated from which Indus Valley site?",
    "options": [
      "Harappa",
      "Mohenjo-daro",
      "Lothal",
      "Kalibangan"
    ],
    "correctOptionIndex": 1,
    "explanation": "Mohenjo-daro (Mound of the Dead), located in Sindh, Pakistan, featured the Great Bath, granaries, and the bronze Dancing Girl artifact.",
    "hints": [
      "It translates to \"Mound of the Dead\".",
      "Lothal was a dockyard port city in Gujarat.",
      "Mohenjo-daro had the famous Great Bath."
    ],
    "difficulty": "Intermediate",
    "marks": 1
  },
  {
    "id": "cur-isso-g9-1",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "French Revolution & Global History",
    "section": "achievers",
    "questionText": "What were the three fundamental principles enshrined in the motto of the French Revolution of 1789?",
    "options": [
      "Faith, Hope, Charity",
      "Liberty, Equality, Fraternity",
      "Peace, Progress, Prosperity",
      "Justice, Law, Order"
    ],
    "correctOptionIndex": 1,
    "explanation": "The revolutionary motto of the French Republic was \"Liberté, Égalité, Fraternité\" (Liberty, Equality, Fraternity).",
    "hints": [
      "Think of freedom, equal rights, and brotherhood.",
      "In French: Liberté, Égalité, Fraternité.",
      "Liberty, Equality, Fraternity is the answer."
    ],
    "difficulty": "Intermediate",
    "marks": 2
  },
  {
    "id": "q-imo-g1-1",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 1 IMO Drill #1] If the sum of 3 and 5 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(3 + 5) \\times 2 = 16",
    "options": [
      "6",
      "16",
      "28",
      "36"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (3 + 5) = 8. Step 2: Multiply by 2 = 16.",
    "hints": [
      "Add the first two numbers: 3 + 5.",
      "That equals 8.",
      "Now multiply 8 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g1-2",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 1 IMO Drill #2] If the sum of 3 and 5 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(3 + 5) \\times 3 = 24",
    "options": [
      "14",
      "24",
      "36",
      "44"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (3 + 5) = 8. Step 2: Multiply by 3 = 24.",
    "hints": [
      "Add the first two numbers: 3 + 5.",
      "That equals 8.",
      "Now multiply 8 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g1-3",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 1 IMO Drill #3] If the sum of 3 and 5 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(3 + 5) \\times 4 = 32",
    "options": [
      "22",
      "32",
      "44",
      "52"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (3 + 5) = 8. Step 2: Multiply by 4 = 32.",
    "hints": [
      "Add the first two numbers: 3 + 5.",
      "That equals 8.",
      "Now multiply 8 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g1-4",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 1 IMO Drill #4] If the sum of 3 and 5 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(3 + 5) \\times 5 = 40",
    "options": [
      "30",
      "40",
      "52",
      "60"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (3 + 5) = 8. Step 2: Multiply by 5 = 40.",
    "hints": [
      "Add the first two numbers: 3 + 5.",
      "That equals 8.",
      "Now multiply 8 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g1-5",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 1 IMO Drill #5] If the sum of 3 and 5 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(3 + 5) \\times 6 = 48",
    "options": [
      "38",
      "48",
      "60",
      "68"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (3 + 5) = 8. Step 2: Multiply by 6 = 48.",
    "hints": [
      "Add the first two numbers: 3 + 5.",
      "That equals 8.",
      "Now multiply 8 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g1-6",
    "examId": "IMO",
    "grade": 1,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 1 IMO Drill #6] If the sum of 3 and 5 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(3 + 5) \\times 7 = 56",
    "options": [
      "46",
      "56",
      "68",
      "76"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (3 + 5) = 8. Step 2: Multiply by 7 = 56.",
    "hints": [
      "Add the first two numbers: 3 + 5.",
      "That equals 8.",
      "Now multiply 8 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g1-1",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 1 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g1-2",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 1 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g1-3",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 1 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g1-4",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 1 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g1-5",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 1 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g1-6",
    "examId": "ISO",
    "grade": 1,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 1 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g1-1",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 1 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g1-2",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 1 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g1-3",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 1 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g1-4",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 1 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g1-5",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 1 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g1-6",
    "examId": "ICSO",
    "grade": 1,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 1 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g1-1",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 1 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g1-2",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 1 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g1-3",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 1 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g1-4",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 1 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g1-5",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 1 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g1-6",
    "examId": "IEO",
    "grade": 1,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 1 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g1-1",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 1 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g1-2",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 1 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g1-3",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 1 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g1-4",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 1 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g1-5",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 1 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g1-6",
    "examId": "IGKO",
    "grade": 1,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 1 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g1-1",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 1 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g1-2",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 1 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g1-3",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 1 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g1-4",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 1 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g1-5",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 1 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g1-6",
    "examId": "ISSO",
    "grade": 1,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 1 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g2-1",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 2 IMO Drill #1] If the sum of 6 and 10 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(6 + 10) \\times 2 = 32",
    "options": [
      "22",
      "32",
      "44",
      "52"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (6 + 10) = 16. Step 2: Multiply by 2 = 32.",
    "hints": [
      "Add the first two numbers: 6 + 10.",
      "That equals 16.",
      "Now multiply 16 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g2-2",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 2 IMO Drill #2] If the sum of 6 and 10 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(6 + 10) \\times 3 = 48",
    "options": [
      "38",
      "48",
      "60",
      "68"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (6 + 10) = 16. Step 2: Multiply by 3 = 48.",
    "hints": [
      "Add the first two numbers: 6 + 10.",
      "That equals 16.",
      "Now multiply 16 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g2-3",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 2 IMO Drill #3] If the sum of 6 and 10 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(6 + 10) \\times 4 = 64",
    "options": [
      "54",
      "64",
      "76",
      "84"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (6 + 10) = 16. Step 2: Multiply by 4 = 64.",
    "hints": [
      "Add the first two numbers: 6 + 10.",
      "That equals 16.",
      "Now multiply 16 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g2-4",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 2 IMO Drill #4] If the sum of 6 and 10 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(6 + 10) \\times 5 = 80",
    "options": [
      "70",
      "80",
      "92",
      "100"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (6 + 10) = 16. Step 2: Multiply by 5 = 80.",
    "hints": [
      "Add the first two numbers: 6 + 10.",
      "That equals 16.",
      "Now multiply 16 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g2-5",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 2 IMO Drill #5] If the sum of 6 and 10 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(6 + 10) \\times 6 = 96",
    "options": [
      "86",
      "96",
      "108",
      "116"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (6 + 10) = 16. Step 2: Multiply by 6 = 96.",
    "hints": [
      "Add the first two numbers: 6 + 10.",
      "That equals 16.",
      "Now multiply 16 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g2-6",
    "examId": "IMO",
    "grade": 2,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 2 IMO Drill #6] If the sum of 6 and 10 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(6 + 10) \\times 7 = 112",
    "options": [
      "102",
      "112",
      "124",
      "132"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (6 + 10) = 16. Step 2: Multiply by 7 = 112.",
    "hints": [
      "Add the first two numbers: 6 + 10.",
      "That equals 16.",
      "Now multiply 16 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g2-1",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 2 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g2-2",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 2 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g2-3",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 2 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g2-4",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 2 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g2-5",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 2 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g2-6",
    "examId": "ISO",
    "grade": 2,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 2 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g2-1",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 2 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g2-2",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 2 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g2-3",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 2 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g2-4",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 2 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g2-5",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 2 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g2-6",
    "examId": "ICSO",
    "grade": 2,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 2 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g2-1",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 2 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g2-2",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 2 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g2-3",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 2 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g2-4",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 2 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g2-5",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 2 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g2-6",
    "examId": "IEO",
    "grade": 2,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 2 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g2-1",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 2 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g2-2",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 2 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g2-3",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 2 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g2-4",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 2 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g2-5",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 2 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g2-6",
    "examId": "IGKO",
    "grade": 2,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 2 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g2-1",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 2 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g2-2",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 2 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g2-3",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 2 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g2-4",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 2 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g2-5",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 2 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g2-6",
    "examId": "ISSO",
    "grade": 2,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 2 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g3-1",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 3 IMO Drill #1] If the sum of 9 and 15 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(9 + 15) \\times 2 = 48",
    "options": [
      "38",
      "48",
      "60",
      "68"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (9 + 15) = 24. Step 2: Multiply by 2 = 48.",
    "hints": [
      "Add the first two numbers: 9 + 15.",
      "That equals 24.",
      "Now multiply 24 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g3-2",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 3 IMO Drill #2] If the sum of 9 and 15 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(9 + 15) \\times 3 = 72",
    "options": [
      "62",
      "72",
      "84",
      "92"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (9 + 15) = 24. Step 2: Multiply by 3 = 72.",
    "hints": [
      "Add the first two numbers: 9 + 15.",
      "That equals 24.",
      "Now multiply 24 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g3-3",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 3 IMO Drill #3] If the sum of 9 and 15 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(9 + 15) \\times 4 = 96",
    "options": [
      "86",
      "96",
      "108",
      "116"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (9 + 15) = 24. Step 2: Multiply by 4 = 96.",
    "hints": [
      "Add the first two numbers: 9 + 15.",
      "That equals 24.",
      "Now multiply 24 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g3-4",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 3 IMO Drill #4] If the sum of 9 and 15 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(9 + 15) \\times 5 = 120",
    "options": [
      "110",
      "120",
      "132",
      "140"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (9 + 15) = 24. Step 2: Multiply by 5 = 120.",
    "hints": [
      "Add the first two numbers: 9 + 15.",
      "That equals 24.",
      "Now multiply 24 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g3-5",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 3 IMO Drill #5] If the sum of 9 and 15 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(9 + 15) \\times 6 = 144",
    "options": [
      "134",
      "144",
      "156",
      "164"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (9 + 15) = 24. Step 2: Multiply by 6 = 144.",
    "hints": [
      "Add the first two numbers: 9 + 15.",
      "That equals 24.",
      "Now multiply 24 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g3-6",
    "examId": "IMO",
    "grade": 3,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 3 IMO Drill #6] If the sum of 9 and 15 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(9 + 15) \\times 7 = 168",
    "options": [
      "158",
      "168",
      "180",
      "188"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (9 + 15) = 24. Step 2: Multiply by 7 = 168.",
    "hints": [
      "Add the first two numbers: 9 + 15.",
      "That equals 24.",
      "Now multiply 24 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g3-1",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 3 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g3-2",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 3 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g3-3",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 3 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g3-4",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 3 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g3-5",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 3 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g3-6",
    "examId": "ISO",
    "grade": 3,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 3 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g3-1",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 3 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g3-2",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 3 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g3-3",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 3 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g3-4",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 3 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g3-5",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 3 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g3-6",
    "examId": "ICSO",
    "grade": 3,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 3 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g3-1",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 3 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g3-2",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 3 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g3-3",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 3 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g3-4",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 3 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g3-5",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 3 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g3-6",
    "examId": "IEO",
    "grade": 3,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 3 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g3-1",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 3 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g3-2",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 3 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g3-3",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 3 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g3-4",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 3 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g3-5",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 3 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g3-6",
    "examId": "IGKO",
    "grade": 3,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 3 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g3-1",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 3 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g3-2",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 3 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g3-3",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 3 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g3-4",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 3 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g3-5",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 3 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g3-6",
    "examId": "ISSO",
    "grade": 3,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 3 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g4-1",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 4 IMO Drill #1] If the sum of 12 and 20 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(12 + 20) \\times 2 = 64",
    "options": [
      "54",
      "64",
      "76",
      "84"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (12 + 20) = 32. Step 2: Multiply by 2 = 64.",
    "hints": [
      "Add the first two numbers: 12 + 20.",
      "That equals 32.",
      "Now multiply 32 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g4-2",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 4 IMO Drill #2] If the sum of 12 and 20 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(12 + 20) \\times 3 = 96",
    "options": [
      "86",
      "96",
      "108",
      "116"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (12 + 20) = 32. Step 2: Multiply by 3 = 96.",
    "hints": [
      "Add the first two numbers: 12 + 20.",
      "That equals 32.",
      "Now multiply 32 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g4-3",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 4 IMO Drill #3] If the sum of 12 and 20 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(12 + 20) \\times 4 = 128",
    "options": [
      "118",
      "128",
      "140",
      "148"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (12 + 20) = 32. Step 2: Multiply by 4 = 128.",
    "hints": [
      "Add the first two numbers: 12 + 20.",
      "That equals 32.",
      "Now multiply 32 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g4-4",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 4 IMO Drill #4] If the sum of 12 and 20 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(12 + 20) \\times 5 = 160",
    "options": [
      "150",
      "160",
      "172",
      "180"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (12 + 20) = 32. Step 2: Multiply by 5 = 160.",
    "hints": [
      "Add the first two numbers: 12 + 20.",
      "That equals 32.",
      "Now multiply 32 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g4-5",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 4 IMO Drill #5] If the sum of 12 and 20 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(12 + 20) \\times 6 = 192",
    "options": [
      "182",
      "192",
      "204",
      "212"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (12 + 20) = 32. Step 2: Multiply by 6 = 192.",
    "hints": [
      "Add the first two numbers: 12 + 20.",
      "That equals 32.",
      "Now multiply 32 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g4-6",
    "examId": "IMO",
    "grade": 4,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 4 IMO Drill #6] If the sum of 12 and 20 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(12 + 20) \\times 7 = 224",
    "options": [
      "214",
      "224",
      "236",
      "244"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (12 + 20) = 32. Step 2: Multiply by 7 = 224.",
    "hints": [
      "Add the first two numbers: 12 + 20.",
      "That equals 32.",
      "Now multiply 32 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g4-1",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 4 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g4-2",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 4 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g4-3",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 4 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g4-4",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 4 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g4-5",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 4 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g4-6",
    "examId": "ISO",
    "grade": 4,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 4 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g4-1",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 4 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g4-2",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 4 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g4-3",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 4 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g4-4",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 4 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g4-5",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 4 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g4-6",
    "examId": "ICSO",
    "grade": 4,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 4 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g4-1",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 4 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g4-2",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 4 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g4-3",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 4 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g4-4",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 4 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g4-5",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 4 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g4-6",
    "examId": "IEO",
    "grade": 4,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 4 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g4-1",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 4 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g4-2",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 4 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g4-3",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 4 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g4-4",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 4 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g4-5",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 4 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g4-6",
    "examId": "IGKO",
    "grade": 4,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 4 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g4-1",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 4 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g4-2",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 4 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g4-3",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 4 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g4-4",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 4 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g4-5",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 4 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g4-6",
    "examId": "ISSO",
    "grade": 4,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 4 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g5-1",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 5 IMO Drill #1] If the sum of 15 and 25 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(15 + 25) \\times 2 = 80",
    "options": [
      "70",
      "80",
      "92",
      "100"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (15 + 25) = 40. Step 2: Multiply by 2 = 80.",
    "hints": [
      "Add the first two numbers: 15 + 25.",
      "That equals 40.",
      "Now multiply 40 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g5-2",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 5 IMO Drill #2] If the sum of 15 and 25 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(15 + 25) \\times 3 = 120",
    "options": [
      "110",
      "120",
      "132",
      "140"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (15 + 25) = 40. Step 2: Multiply by 3 = 120.",
    "hints": [
      "Add the first two numbers: 15 + 25.",
      "That equals 40.",
      "Now multiply 40 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g5-3",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 5 IMO Drill #3] If the sum of 15 and 25 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(15 + 25) \\times 4 = 160",
    "options": [
      "150",
      "160",
      "172",
      "180"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (15 + 25) = 40. Step 2: Multiply by 4 = 160.",
    "hints": [
      "Add the first two numbers: 15 + 25.",
      "That equals 40.",
      "Now multiply 40 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g5-4",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 5 IMO Drill #4] If the sum of 15 and 25 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(15 + 25) \\times 5 = 200",
    "options": [
      "190",
      "200",
      "212",
      "220"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (15 + 25) = 40. Step 2: Multiply by 5 = 200.",
    "hints": [
      "Add the first two numbers: 15 + 25.",
      "That equals 40.",
      "Now multiply 40 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g5-5",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 5 IMO Drill #5] If the sum of 15 and 25 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(15 + 25) \\times 6 = 240",
    "options": [
      "230",
      "240",
      "252",
      "260"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (15 + 25) = 40. Step 2: Multiply by 6 = 240.",
    "hints": [
      "Add the first two numbers: 15 + 25.",
      "That equals 40.",
      "Now multiply 40 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g5-6",
    "examId": "IMO",
    "grade": 5,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 5 IMO Drill #6] If the sum of 15 and 25 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(15 + 25) \\times 7 = 280",
    "options": [
      "270",
      "280",
      "292",
      "300"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (15 + 25) = 40. Step 2: Multiply by 7 = 280.",
    "hints": [
      "Add the first two numbers: 15 + 25.",
      "That equals 40.",
      "Now multiply 40 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g5-1",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 5 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g5-2",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 5 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g5-3",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 5 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g5-4",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 5 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g5-5",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 5 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g5-6",
    "examId": "ISO",
    "grade": 5,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 5 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g5-1",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 5 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g5-2",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 5 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g5-3",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 5 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g5-4",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 5 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g5-5",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 5 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g5-6",
    "examId": "ICSO",
    "grade": 5,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 5 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g5-1",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 5 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g5-2",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 5 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g5-3",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 5 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g5-4",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 5 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g5-5",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 5 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g5-6",
    "examId": "IEO",
    "grade": 5,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 5 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g5-1",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 5 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g5-2",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 5 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g5-3",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 5 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g5-4",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 5 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g5-5",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 5 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g5-6",
    "examId": "IGKO",
    "grade": 5,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 5 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g5-1",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 5 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g5-2",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 5 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g5-3",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 5 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g5-4",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 5 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g5-5",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 5 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g5-6",
    "examId": "ISSO",
    "grade": 5,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 5 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g6-1",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 6 IMO Drill #1] If the sum of 18 and 30 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(18 + 30) \\times 2 = 96",
    "options": [
      "86",
      "96",
      "108",
      "116"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (18 + 30) = 48. Step 2: Multiply by 2 = 96.",
    "hints": [
      "Add the first two numbers: 18 + 30.",
      "That equals 48.",
      "Now multiply 48 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g6-2",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 6 IMO Drill #2] If the sum of 18 and 30 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(18 + 30) \\times 3 = 144",
    "options": [
      "134",
      "144",
      "156",
      "164"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (18 + 30) = 48. Step 2: Multiply by 3 = 144.",
    "hints": [
      "Add the first two numbers: 18 + 30.",
      "That equals 48.",
      "Now multiply 48 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g6-3",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 6 IMO Drill #3] If the sum of 18 and 30 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(18 + 30) \\times 4 = 192",
    "options": [
      "182",
      "192",
      "204",
      "212"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (18 + 30) = 48. Step 2: Multiply by 4 = 192.",
    "hints": [
      "Add the first two numbers: 18 + 30.",
      "That equals 48.",
      "Now multiply 48 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g6-4",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 6 IMO Drill #4] If the sum of 18 and 30 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(18 + 30) \\times 5 = 240",
    "options": [
      "230",
      "240",
      "252",
      "260"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (18 + 30) = 48. Step 2: Multiply by 5 = 240.",
    "hints": [
      "Add the first two numbers: 18 + 30.",
      "That equals 48.",
      "Now multiply 48 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g6-5",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 6 IMO Drill #5] If the sum of 18 and 30 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(18 + 30) \\times 6 = 288",
    "options": [
      "278",
      "288",
      "300",
      "308"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (18 + 30) = 48. Step 2: Multiply by 6 = 288.",
    "hints": [
      "Add the first two numbers: 18 + 30.",
      "That equals 48.",
      "Now multiply 48 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g6-6",
    "examId": "IMO",
    "grade": 6,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 6 IMO Drill #6] If the sum of 18 and 30 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(18 + 30) \\times 7 = 336",
    "options": [
      "326",
      "336",
      "348",
      "356"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (18 + 30) = 48. Step 2: Multiply by 7 = 336.",
    "hints": [
      "Add the first two numbers: 18 + 30.",
      "That equals 48.",
      "Now multiply 48 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g6-1",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 6 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g6-2",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 6 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g6-3",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 6 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g6-4",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 6 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g6-5",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 6 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g6-6",
    "examId": "ISO",
    "grade": 6,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 6 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g6-1",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 6 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g6-2",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 6 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g6-3",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 6 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g6-4",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 6 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g6-5",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 6 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g6-6",
    "examId": "ICSO",
    "grade": 6,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 6 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g6-1",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 6 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g6-2",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 6 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g6-3",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 6 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g6-4",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 6 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g6-5",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 6 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g6-6",
    "examId": "IEO",
    "grade": 6,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 6 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g6-1",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 6 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g6-2",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 6 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g6-3",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 6 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g6-4",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 6 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g6-5",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 6 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g6-6",
    "examId": "IGKO",
    "grade": 6,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 6 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g6-1",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 6 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g6-2",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 6 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g6-3",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 6 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g6-4",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 6 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g6-5",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 6 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g6-6",
    "examId": "ISSO",
    "grade": 6,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 6 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g7-1",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 7 IMO Drill #1] If the sum of 21 and 35 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(21 + 35) \\times 2 = 112",
    "options": [
      "102",
      "112",
      "124",
      "132"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (21 + 35) = 56. Step 2: Multiply by 2 = 112.",
    "hints": [
      "Add the first two numbers: 21 + 35.",
      "That equals 56.",
      "Now multiply 56 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g7-2",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 7 IMO Drill #2] If the sum of 21 and 35 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(21 + 35) \\times 3 = 168",
    "options": [
      "158",
      "168",
      "180",
      "188"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (21 + 35) = 56. Step 2: Multiply by 3 = 168.",
    "hints": [
      "Add the first two numbers: 21 + 35.",
      "That equals 56.",
      "Now multiply 56 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g7-3",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 7 IMO Drill #3] If the sum of 21 and 35 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(21 + 35) \\times 4 = 224",
    "options": [
      "214",
      "224",
      "236",
      "244"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (21 + 35) = 56. Step 2: Multiply by 4 = 224.",
    "hints": [
      "Add the first two numbers: 21 + 35.",
      "That equals 56.",
      "Now multiply 56 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g7-4",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 7 IMO Drill #4] If the sum of 21 and 35 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(21 + 35) \\times 5 = 280",
    "options": [
      "270",
      "280",
      "292",
      "300"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (21 + 35) = 56. Step 2: Multiply by 5 = 280.",
    "hints": [
      "Add the first two numbers: 21 + 35.",
      "That equals 56.",
      "Now multiply 56 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g7-5",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 7 IMO Drill #5] If the sum of 21 and 35 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(21 + 35) \\times 6 = 336",
    "options": [
      "326",
      "336",
      "348",
      "356"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (21 + 35) = 56. Step 2: Multiply by 6 = 336.",
    "hints": [
      "Add the first two numbers: 21 + 35.",
      "That equals 56.",
      "Now multiply 56 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g7-6",
    "examId": "IMO",
    "grade": 7,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 7 IMO Drill #6] If the sum of 21 and 35 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(21 + 35) \\times 7 = 392",
    "options": [
      "382",
      "392",
      "404",
      "412"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (21 + 35) = 56. Step 2: Multiply by 7 = 392.",
    "hints": [
      "Add the first two numbers: 21 + 35.",
      "That equals 56.",
      "Now multiply 56 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g7-1",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 7 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g7-2",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 7 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g7-3",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 7 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g7-4",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 7 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g7-5",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 7 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g7-6",
    "examId": "ISO",
    "grade": 7,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 7 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g7-1",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 7 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g7-2",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 7 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g7-3",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 7 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g7-4",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 7 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g7-5",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 7 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g7-6",
    "examId": "ICSO",
    "grade": 7,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 7 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g7-1",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 7 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g7-2",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 7 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g7-3",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 7 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g7-4",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 7 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g7-5",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 7 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g7-6",
    "examId": "IEO",
    "grade": 7,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 7 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g7-1",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 7 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g7-2",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 7 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g7-3",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 7 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g7-4",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 7 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g7-5",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 7 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g7-6",
    "examId": "IGKO",
    "grade": 7,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 7 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g7-1",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 7 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g7-2",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 7 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g7-3",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 7 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g7-4",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 7 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g7-5",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 7 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g7-6",
    "examId": "ISSO",
    "grade": 7,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 7 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g8-1",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 8 IMO Drill #1] If the sum of 24 and 40 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(24 + 40) \\times 2 = 128",
    "options": [
      "118",
      "128",
      "140",
      "148"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (24 + 40) = 64. Step 2: Multiply by 2 = 128.",
    "hints": [
      "Add the first two numbers: 24 + 40.",
      "That equals 64.",
      "Now multiply 64 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g8-2",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 8 IMO Drill #2] If the sum of 24 and 40 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(24 + 40) \\times 3 = 192",
    "options": [
      "182",
      "192",
      "204",
      "212"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (24 + 40) = 64. Step 2: Multiply by 3 = 192.",
    "hints": [
      "Add the first two numbers: 24 + 40.",
      "That equals 64.",
      "Now multiply 64 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g8-3",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 8 IMO Drill #3] If the sum of 24 and 40 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(24 + 40) \\times 4 = 256",
    "options": [
      "246",
      "256",
      "268",
      "276"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (24 + 40) = 64. Step 2: Multiply by 4 = 256.",
    "hints": [
      "Add the first two numbers: 24 + 40.",
      "That equals 64.",
      "Now multiply 64 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g8-4",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 8 IMO Drill #4] If the sum of 24 and 40 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(24 + 40) \\times 5 = 320",
    "options": [
      "310",
      "320",
      "332",
      "340"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (24 + 40) = 64. Step 2: Multiply by 5 = 320.",
    "hints": [
      "Add the first two numbers: 24 + 40.",
      "That equals 64.",
      "Now multiply 64 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g8-5",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 8 IMO Drill #5] If the sum of 24 and 40 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(24 + 40) \\times 6 = 384",
    "options": [
      "374",
      "384",
      "396",
      "404"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (24 + 40) = 64. Step 2: Multiply by 6 = 384.",
    "hints": [
      "Add the first two numbers: 24 + 40.",
      "That equals 64.",
      "Now multiply 64 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g8-6",
    "examId": "IMO",
    "grade": 8,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 8 IMO Drill #6] If the sum of 24 and 40 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(24 + 40) \\times 7 = 448",
    "options": [
      "438",
      "448",
      "460",
      "468"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (24 + 40) = 64. Step 2: Multiply by 7 = 448.",
    "hints": [
      "Add the first two numbers: 24 + 40.",
      "That equals 64.",
      "Now multiply 64 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g8-1",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 8 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g8-2",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 8 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g8-3",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 8 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g8-4",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 8 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g8-5",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 8 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g8-6",
    "examId": "ISO",
    "grade": 8,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 8 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g8-1",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 8 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g8-2",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 8 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g8-3",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 8 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g8-4",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 8 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g8-5",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 8 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g8-6",
    "examId": "ICSO",
    "grade": 8,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 8 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g8-1",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 8 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g8-2",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 8 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g8-3",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 8 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g8-4",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 8 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g8-5",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 8 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g8-6",
    "examId": "IEO",
    "grade": 8,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 8 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g8-1",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 8 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g8-2",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 8 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g8-3",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 8 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g8-4",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 8 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g8-5",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 8 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g8-6",
    "examId": "IGKO",
    "grade": 8,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 8 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g8-1",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 8 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g8-2",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 8 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g8-3",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 8 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g8-4",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 8 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g8-5",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 8 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g8-6",
    "examId": "ISSO",
    "grade": 8,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 8 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g9-1",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 9 IMO Drill #1] If the sum of 27 and 45 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(27 + 45) \\times 2 = 144",
    "options": [
      "134",
      "144",
      "156",
      "164"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (27 + 45) = 72. Step 2: Multiply by 2 = 144.",
    "hints": [
      "Add the first two numbers: 27 + 45.",
      "That equals 72.",
      "Now multiply 72 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g9-2",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 9 IMO Drill #2] If the sum of 27 and 45 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(27 + 45) \\times 3 = 216",
    "options": [
      "206",
      "216",
      "228",
      "236"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (27 + 45) = 72. Step 2: Multiply by 3 = 216.",
    "hints": [
      "Add the first two numbers: 27 + 45.",
      "That equals 72.",
      "Now multiply 72 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g9-3",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 9 IMO Drill #3] If the sum of 27 and 45 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(27 + 45) \\times 4 = 288",
    "options": [
      "278",
      "288",
      "300",
      "308"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (27 + 45) = 72. Step 2: Multiply by 4 = 288.",
    "hints": [
      "Add the first two numbers: 27 + 45.",
      "That equals 72.",
      "Now multiply 72 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g9-4",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 9 IMO Drill #4] If the sum of 27 and 45 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(27 + 45) \\times 5 = 360",
    "options": [
      "350",
      "360",
      "372",
      "380"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (27 + 45) = 72. Step 2: Multiply by 5 = 360.",
    "hints": [
      "Add the first two numbers: 27 + 45.",
      "That equals 72.",
      "Now multiply 72 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g9-5",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 9 IMO Drill #5] If the sum of 27 and 45 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(27 + 45) \\times 6 = 432",
    "options": [
      "422",
      "432",
      "444",
      "452"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (27 + 45) = 72. Step 2: Multiply by 6 = 432.",
    "hints": [
      "Add the first two numbers: 27 + 45.",
      "That equals 72.",
      "Now multiply 72 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g9-6",
    "examId": "IMO",
    "grade": 9,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 9 IMO Drill #6] If the sum of 27 and 45 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(27 + 45) \\times 7 = 504",
    "options": [
      "494",
      "504",
      "516",
      "524"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (27 + 45) = 72. Step 2: Multiply by 7 = 504.",
    "hints": [
      "Add the first two numbers: 27 + 45.",
      "That equals 72.",
      "Now multiply 72 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g9-1",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 9 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g9-2",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 9 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g9-3",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 9 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g9-4",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 9 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g9-5",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 9 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g9-6",
    "examId": "ISO",
    "grade": 9,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 9 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g9-1",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 9 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g9-2",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 9 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g9-3",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 9 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g9-4",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 9 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g9-5",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 9 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g9-6",
    "examId": "ICSO",
    "grade": 9,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 9 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g9-1",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 9 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g9-2",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 9 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g9-3",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 9 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g9-4",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 9 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g9-5",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 9 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g9-6",
    "examId": "IEO",
    "grade": 9,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 9 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g9-1",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 9 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g9-2",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 9 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g9-3",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 9 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g9-4",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 9 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g9-5",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 9 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g9-6",
    "examId": "IGKO",
    "grade": 9,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 9 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g9-1",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 9 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g9-2",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 9 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g9-3",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 9 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g9-4",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 9 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g9-5",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 9 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g9-6",
    "examId": "ISSO",
    "grade": 9,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 9 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-imo-g10-1",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Number System & Arithmetic",
    "section": "logical",
    "questionText": "[Grade 10 IMO Drill #1] If the sum of 30 and 50 is multiplied by 2, what is the resulting value?",
    "latexFormula": "(30 + 50) \\times 2 = 160",
    "options": [
      "150",
      "160",
      "172",
      "180"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (30 + 50) = 80. Step 2: Multiply by 2 = 160.",
    "hints": [
      "Add the first two numbers: 30 + 50.",
      "That equals 80.",
      "Now multiply 80 by 2."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-imo-g10-2",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Geometry & Logic HOTS",
    "section": "subject",
    "questionText": "[Grade 10 IMO Drill #2] If the sum of 30 and 50 is multiplied by 3, what is the resulting value?",
    "latexFormula": "(30 + 50) \\times 3 = 240",
    "options": [
      "230",
      "240",
      "252",
      "260"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (30 + 50) = 80. Step 2: Multiply by 3 = 240.",
    "hints": [
      "Add the first two numbers: 30 + 50.",
      "That equals 80.",
      "Now multiply 80 by 3."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-imo-g10-3",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Number System & Arithmetic",
    "section": "everyday",
    "questionText": "[Grade 10 IMO Drill #3] If the sum of 30 and 50 is multiplied by 4, what is the resulting value?",
    "latexFormula": "(30 + 50) \\times 4 = 320",
    "options": [
      "310",
      "320",
      "332",
      "340"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (30 + 50) = 80. Step 2: Multiply by 4 = 320.",
    "hints": [
      "Add the first two numbers: 30 + 50.",
      "That equals 80.",
      "Now multiply 80 by 4."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-imo-g10-4",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 10 IMO Drill #4] If the sum of 30 and 50 is multiplied by 5, what is the resulting value?",
    "latexFormula": "(30 + 50) \\times 5 = 400",
    "options": [
      "390",
      "400",
      "412",
      "420"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (30 + 50) = 80. Step 2: Multiply by 5 = 400.",
    "hints": [
      "Add the first two numbers: 30 + 50.",
      "That equals 80.",
      "Now multiply 80 by 5."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-imo-g10-5",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Number System & Arithmetic",
    "section": "achievers",
    "questionText": "[Grade 10 IMO Drill #5] If the sum of 30 and 50 is multiplied by 6, what is the resulting value?",
    "latexFormula": "(30 + 50) \\times 6 = 480",
    "options": [
      "470",
      "480",
      "492",
      "500"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (30 + 50) = 80. Step 2: Multiply by 6 = 480.",
    "hints": [
      "Add the first two numbers: 30 + 50.",
      "That equals 80.",
      "Now multiply 80 by 6."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-imo-g10-6",
    "examId": "IMO",
    "grade": 10,
    "chapter": "Geometry & Logic HOTS",
    "section": "achievers",
    "questionText": "[Grade 10 IMO Drill #6] If the sum of 30 and 50 is multiplied by 7, what is the resulting value?",
    "latexFormula": "(30 + 50) \\times 7 = 560",
    "options": [
      "550",
      "560",
      "572",
      "580"
    ],
    "correctOptionIndex": 1,
    "explanation": "Step 1: Calculate inside parentheses (30 + 50) = 80. Step 2: Multiply by 7 = 560.",
    "hints": [
      "Add the first two numbers: 30 + 50.",
      "That equals 80.",
      "Now multiply 80 by 7."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-iso-g10-1",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Living Organisms & Science",
    "section": "logical",
    "questionText": "[Grade 10 Science Test #1] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-iso-g10-2",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Forces, Energy & Chemistry",
    "section": "subject",
    "questionText": "[Grade 10 Science Test #2] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-iso-g10-3",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Living Organisms & Science",
    "section": "everyday",
    "questionText": "[Grade 10 Science Test #3] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-iso-g10-4",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 10 Science Test #4] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-iso-g10-5",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Living Organisms & Science",
    "section": "achievers",
    "questionText": "[Grade 10 Science Test #5] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-iso-g10-6",
    "examId": "ISO",
    "grade": 10,
    "chapter": "Forces, Energy & Chemistry",
    "section": "achievers",
    "questionText": "[Grade 10 Science Test #6] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?",
    "latexFormula": "6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2",
    "options": [
      "Transpiration",
      "Photosynthesis",
      "Respiration",
      "Germination"
    ],
    "correctOptionIndex": 1,
    "explanation": "Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.",
    "hints": [
      "It happens in green leaves containing chlorophyll.",
      "Solar energy is converted to sugar.",
      "The process is Photosynthesis."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-icso-g10-1",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Algorithms & Programming",
    "section": "logical",
    "questionText": "[Grade 10 Cyber Challenge #1] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-icso-g10-2",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Computer Hardware & Security",
    "section": "subject",
    "questionText": "[Grade 10 Cyber Challenge #2] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-icso-g10-3",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Algorithms & Programming",
    "section": "everyday",
    "questionText": "[Grade 10 Cyber Challenge #3] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-icso-g10-4",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 10 Cyber Challenge #4] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-icso-g10-5",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Algorithms & Programming",
    "section": "achievers",
    "questionText": "[Grade 10 Cyber Challenge #5] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-icso-g10-6",
    "examId": "ICSO",
    "grade": 10,
    "chapter": "Computer Hardware & Security",
    "section": "achievers",
    "questionText": "[Grade 10 Cyber Challenge #6] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?",
    "options": [
      "HTTP",
      "FTP",
      "HTTPS",
      "SMTP"
    ],
    "correctOptionIndex": 2,
    "explanation": "HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.",
    "hints": [
      "Notice the \"S\" at the end of the protocol.",
      "It uses SSL/TLS encryption for padlocked secure browsing.",
      "The answer is HTTPS."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-ieo-g10-1",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Word & Structure Grammar",
    "section": "logical",
    "questionText": "[Grade 10 IEO Practice #1] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-ieo-g10-2",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "subject",
    "questionText": "[Grade 10 IEO Practice #2] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-ieo-g10-3",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Word & Structure Grammar",
    "section": "everyday",
    "questionText": "[Grade 10 IEO Practice #3] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-ieo-g10-4",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 10 IEO Practice #4] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-ieo-g10-5",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Word & Structure Grammar",
    "section": "achievers",
    "questionText": "[Grade 10 IEO Practice #5] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-ieo-g10-6",
    "examId": "IEO",
    "grade": 10,
    "chapter": "Reading Comprehension & Vocabulary",
    "section": "achievers",
    "questionText": "[Grade 10 IEO Practice #6] Select the correct sentence with proper Subject-Verb agreement:",
    "options": [
      "Neither the teacher nor the students was present.",
      "Neither the teacher nor the students were present.",
      "Neither the teacher nor the students is present.",
      "Neither the teacher nor the students are being present."
    ],
    "correctOptionIndex": 1,
    "explanation": "With \"neither... nor...\", the verb agrees with the closer subject (\"students\", which is plural), hence \"were present\".",
    "hints": [
      "Look at the subject closest to the verb: \"students\".",
      "\"Students\" is plural.",
      "Use plural verb \"were present\"."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-igko-g10-1",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "World Heritage & Geography",
    "section": "logical",
    "questionText": "[Grade 10 IGKO Trivia #1] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-igko-g10-2",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "Science Discoveries & Space",
    "section": "subject",
    "questionText": "[Grade 10 IGKO Trivia #2] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-igko-g10-3",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "World Heritage & Geography",
    "section": "everyday",
    "questionText": "[Grade 10 IGKO Trivia #3] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-igko-g10-4",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 10 IGKO Trivia #4] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-igko-g10-5",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "World Heritage & Geography",
    "section": "achievers",
    "questionText": "[Grade 10 IGKO Trivia #5] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-igko-g10-6",
    "examId": "IGKO",
    "grade": 10,
    "chapter": "Science Discoveries & Space",
    "section": "achievers",
    "questionText": "[Grade 10 IGKO Trivia #6] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean"
    ],
    "correctOptionIndex": 3,
    "explanation": "The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.",
    "hints": [
      "It contains the deepest point on Earth, the Mariana Trench.",
      "It covers more surface area than all Earths land combined.",
      "The Pacific Ocean."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  },
  {
    "id": "q-isso-g10-1",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "History & Ancient Civilizations",
    "section": "logical",
    "questionText": "[Grade 10 ISSO Exam #1] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2025
  },
  {
    "id": "q-isso-g10-2",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "Geography, Climate & Civics",
    "section": "subject",
    "questionText": "[Grade 10 ISSO Exam #2] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2024
  },
  {
    "id": "q-isso-g10-3",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "History & Ancient Civilizations",
    "section": "everyday",
    "questionText": "[Grade 10 ISSO Exam #3] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2023
  },
  {
    "id": "q-isso-g10-4",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 10 ISSO Exam #4] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Achiever",
    "marks": 2,
    "isLevel2": true,
    "year": 2022
  },
  {
    "id": "q-isso-g10-5",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "History & Ancient Civilizations",
    "section": "achievers",
    "questionText": "[Grade 10 ISSO Exam #5] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2021
  },
  {
    "id": "q-isso-g10-6",
    "examId": "ISSO",
    "grade": 10,
    "chapter": "Geography, Climate & Civics",
    "section": "achievers",
    "questionText": "[Grade 10 ISSO Exam #6] The imaginary horizontal line that circles the Earth midway between North and South poles is called:",
    "options": [
      "Prime Meridian",
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn"
    ],
    "correctOptionIndex": 2,
    "explanation": "The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.",
    "hints": [
      "It is at 0 degrees latitude.",
      "It divides Earth into Northern and Southern halves.",
      "It is the Equator."
    ],
    "difficulty": "Intermediate",
    "marks": 1,
    "isLevel2": false,
    "year": 2020
  }
];
