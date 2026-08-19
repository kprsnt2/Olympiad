const fs = require('fs');

const examSubjects = ['IMO', 'ISO', 'ICSO', 'IEO', 'IGKO', 'ISSO'];
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const curatedQuestions = [
  {
    id: 'cur-imo-g1-1',
    examId: 'IMO',
    grade: 1,
    chapter: 'Number Sense & Counting',
    section: 'subject',
    questionText: 'Look at the number sequence: 4, 8, 12, __, 20. What is the missing number in the blank?',
    latexFormula: '4, 8, 12, \\boxed{?}, 20',
    options: ['14', '15', '16', '18'],
    correctOptionIndex: 2,
    explanation: 'The pattern is skip counting by 4: 4 (+4) = 8, 8 (+4) = 12, 12 (+4) = 16, 16 (+4) = 20.',
    hints: ['Notice how much is added to 4 to get 8.', 'Each step adds 4 to the previous number.', 'Calculate 12 + 4 to find the missing number.'],
    difficulty: 'Beginner',
    marks: 1
  },
  {
    id: 'cur-imo-g1-2',
    examId: 'IMO',
    grade: 1,
    chapter: 'Shapes & Spatial Understanding',
    section: 'logical',
    questionText: 'Which geometric shape has 3 straight sides and 3 corners?',
    options: ['Square', 'Circle', 'Triangle', 'Rectangle'],
    correctOptionIndex: 2,
    explanation: 'A triangle is a closed 2D shape with exactly 3 straight edges and 3 corners (vertices).',
    hints: ['Think of the word "Tri" which means three.', 'A square has 4 sides, a circle has 0 corners.', 'A slice of pizza is shaped like this!'],
    difficulty: 'Beginner',
    marks: 1
  },
  {
    id: 'cur-imo-g2-1',
    examId: 'IMO',
    grade: 2,
    chapter: 'Numbers up to 1000',
    section: 'achievers',
    questionText: 'I am a 3-digit number. My tens digit is 5. My hundreds digit is 3 more than my tens digit. My ones digit is 2 less than my tens digit. What number am I?',
    options: ['853', '753', '852', '835'],
    correctOptionIndex: 0,
    explanation: 'Tens digit = 5. Hundreds digit = 5 + 3 = 8. Ones digit = 5 - 2 = 3. So the number is 853.',
    hints: ['Start with the given tens digit, which is 5.', 'Hundreds digit = 5 + 3 = 8. Ones digit = 5 - 2 = 3.', 'Combine hundreds (8), tens (5), and ones (3).'],
    difficulty: 'Achiever',
    marks: 2
  },
  {
    id: 'cur-imo-g3-1',
    examId: 'IMO',
    grade: 3,
    chapter: 'Fractions & Equal Parts',
    section: 'subject',
    questionText: 'Aryan ate 3/8 of a pizza and his sister Simran ate 2/8 of the same pizza. What fraction of the pizza is left over?',
    latexFormula: '1 - \\left(\\frac{3}{8} + \\frac{2}{8}\\right) = \\boxed{?}',
    options: ['3/8', '5/8', '2/8', '1/8'],
    correctOptionIndex: 0,
    explanation: 'Total eaten = 3/8 + 2/8 = 5/8. Whole pizza = 8/8. Fraction left = 8/8 - 5/8 = 3/8.',
    hints: ['Add the parts eaten by Aryan and Simran first.', '3/8 + 2/8 = 5/8 of the pizza was eaten.', 'Subtract 5/8 from the full pizza (8/8).'],
    difficulty: 'Intermediate',
    marks: 1
  },
  {
    id: 'cur-imo-g4-1',
    examId: 'IMO',
    grade: 4,
    chapter: 'Factors & Multiples',
    section: 'achievers',
    questionText: 'Two alarm clocks ring together at 8:00 AM. One clock rings every 12 minutes and the other rings every 18 minutes. At what time will they ring together again next?',
    latexFormula: '\\text{LCM}(12, 18) = 36',
    options: ['8:24 AM', '8:30 AM', '8:36 AM', '8:48 AM'],
    correctOptionIndex: 2,
    explanation: 'Find the LCM of 12 and 18. Multiples of 12: 12, 24, 36... Multiples of 18: 18, 36... LCM is 36 minutes. 8:00 AM + 36 minutes = 8:36 AM.',
    hints: ['We need to find the Least Common Multiple (LCM) of 12 and 18.', 'List the multiples of 18: 18, 36, 54...', '36 is divisible by both 12 and 18. Add 36 minutes to 8:00 AM.'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-imo-g5-1',
    examId: 'IMO',
    grade: 5,
    chapter: 'Angles & Perimeter',
    section: 'subject',
    questionText: 'A rectangular garden has a length of 24 m and a breadth of 16 m. If a wire fence is placed around it with 3 rounds of wire, what is the total length of wire needed?',
    latexFormula: '\\text{Perimeter} = 2(L + B) = 2(24 + 16) = 80\\text{ m}',
    options: ['160 m', '240 m', '320 m', '80 m'],
    correctOptionIndex: 1,
    explanation: 'Perimeter of rectangle = 2 * (length + breadth) = 2 * (24 + 16) = 2 * 40 = 80 m. For 3 rounds: 3 * 80 m = 240 m.',
    hints: ['Find the perimeter for 1 round of the garden first.', 'Perimeter = 2 * (24 + 16) = 80 m.', 'Multiply 80 m by 3 rounds.'],
    difficulty: 'Intermediate',
    marks: 1
  },
  {
    id: 'cur-imo-g6-1',
    examId: 'IMO',
    grade: 6,
    chapter: 'Algebraic Expressions',
    section: 'achievers',
    questionText: 'If 3x + 5 = 2(x + 7) - 1, then what is the value of x^2 - 4x + 1?',
    latexFormula: '3x + 5 = 2x + 14 - 1 \\implies x = 8',
    options: ['25', '33', '41', '17'],
    correctOptionIndex: 1,
    explanation: 'Expand right side: 3x + 5 = 2x + 14 - 1 => 3x + 5 = 2x + 13 => 3x - 2x = 13 - 5 => x = 8. Now evaluate: 8^2 - 4(8) + 1 = 64 - 32 + 1 = 33.',
    hints: ['First expand the right hand side: 2(x + 7) - 1 = 2x + 13.', 'Solve for x: 3x - 2x = 13 - 5 = 8.', 'Substitute x = 8 into 8^2 - 4(8) + 1.'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-imo-g7-1',
    examId: 'IMO',
    grade: 7,
    chapter: 'Comparing Quantities',
    section: 'everyday',
    questionText: 'A shopkeeper bought a cycle for $2,400 and sold it for $2,880. What is his profit percentage?',
    latexFormula: '\\text{Profit \\%} = \\frac{2880 - 2400}{2400} \\times 100\\%',
    options: ['15%', '18%', '20%', '25%'],
    correctOptionIndex: 2,
    explanation: 'Profit = SP - CP = $2880 - $2400 = $480. Profit % = (Profit / CP) * 100 = (480 / 2400) * 100 = 20%.',
    hints: ['Calculate the profit amount: SP - CP.', 'Profit = $480.', 'Profit % = (480 / 2400) * 100 = 20%.'],
    difficulty: 'Intermediate',
    marks: 1
  },
  {
    id: 'cur-imo-g8-1',
    examId: 'IMO',
    grade: 8,
    chapter: 'Mensuration & Geometry',
    section: 'achievers',
    questionText: 'A solid metallic cylinder of radius 7 cm and height 14 cm is melted and recast into small solid spheres of radius 3.5 cm each. How many such spheres can be formed? (Use pi = 22/7)',
    latexFormula: 'V_{\\text{cyl}} = \\pi r^2 h = \\pi(49)(14), \\quad V_{\\text{sph}} = \\frac{4}{3}\\pi R^3',
    options: ['8', '10', '12', '16'],
    correctOptionIndex: 2,
    explanation: 'Volume of cylinder = pi * 7^2 * 14 = 686*pi. Volume of 1 sphere = (4/3)*pi*(3.5)^3 = (4/3)*pi*(343/8) = (343/6)*pi = 57.167*pi. Number of spheres = 686 / (343/6) = (686 * 6) / 343 = 2 * 6 = 12.',
    hints: ['Equate the total volume of cylinder to N times volume of sphere.', 'Volume of cylinder = pi * r^2 * h.', 'Volume of sphere = (4/3) * pi * R^3.'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-imo-g9-1',
    examId: 'IMO',
    grade: 9,
    chapter: 'Polynomials & Identities',
    section: 'achievers',
    questionText: 'If a + b + c = 0 and a^2 + b^2 + c^2 = 40, what is the value of ab + bc + ca?',
    latexFormula: '(a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca)',
    options: ['-20', '20', '-40', '0'],
    correctOptionIndex: 0,
    explanation: 'Use identity: (a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca). Since a+b+c=0: 0^2 = 40 + 2(ab+bc+ca) => 2(ab+bc+ca) = -40 => ab+bc+ca = -20.',
    hints: ['Recall the expansion of (a + b + c)^2.', 'Substitute a + b + c = 0 and a^2 + b^2 + c^2 = 40.', '0 = 40 + 2(ab + bc + ca) -> solve for (ab + bc + ca).'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-imo-g10-1',
    examId: 'IMO',
    grade: 10,
    chapter: 'Trigonometry & Quadratic Equations',
    section: 'achievers',
    questionText: 'If sin(theta) + cos(theta) = sqrt(2) * cos(theta), then what is the value of cos(theta) - sin(theta)?',
    latexFormula: '\\cos\\theta - \\sin\\theta = \\sqrt{2}\\sin\\theta',
    options: ['sqrt(2) * sin(theta)', 'sqrt(2) * cos(theta)', 'sin(theta)', '2 * cos(theta)'],
    correctOptionIndex: 0,
    explanation: 'sin(theta) = cos(theta)(sqrt(2) - 1). Multiply both sides by (sqrt(2) + 1): sin(theta)(sqrt(2) + 1) = cos(theta)(2 - 1) = cos(theta). Hence: sqrt(2)*sin(theta) + sin(theta) = cos(theta) => cos(theta) - sin(theta) = sqrt(2)*sin(theta).',
    hints: ['Express sin(theta) in terms of cos(theta): sin(theta) = (sqrt(2) - 1) * cos(theta).', 'Multiply by conjugate (sqrt(2) + 1).', 'Rearrange terms to isolate cos(theta) - sin(theta).'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-iso-g1-1',
    examId: 'ISO',
    grade: 1,
    chapter: 'Living & Non-Living Things',
    section: 'subject',
    questionText: 'Which of the following needs air, water, and sunlight to grow and stay alive?',
    options: ['A plastic toy car', 'A mango tree sapling', 'A wooden chair', 'A steel spoon'],
    correctOptionIndex: 1,
    explanation: 'A mango tree sapling is a living plant that needs sunlight, water, and air for photosynthesis and growth.',
    hints: ['Think which one is a living plant.', 'Non-living objects like chairs and toys do not grow.', 'Plants need sunlight to prepare food.'],
    difficulty: 'Beginner',
    marks: 1
  },
  {
    id: 'cur-iso-g3-1',
    examId: 'ISO',
    grade: 3,
    chapter: 'Matter & Forces',
    section: 'subject',
    questionText: 'When two bar magnets are brought close together, what happens when North pole faces another North pole?',
    options: ['They attract and stick', 'They repel and push apart', 'They rotate continuously', 'Nothing happens'],
    correctOptionIndex: 1,
    explanation: 'Like magnetic poles (North-North or South-South) repel each other, while unlike poles (North-South) attract.',
    hints: ['Remember the rule for like and unlike magnetic poles.', 'Opposite poles attract each other.', 'Like poles always push away (repel).'],
    difficulty: 'Beginner',
    marks: 1
  },
  {
    id: 'cur-iso-g5-1',
    examId: 'ISO',
    grade: 5,
    chapter: 'Human Body & Deficiency Diseases',
    section: 'subject',
    questionText: 'Bleeding gums and delayed wound healing are classic deficiency symptoms of which vitamin?',
    options: ['Vitamin A', 'Vitamin B1', 'Vitamin C', 'Vitamin D'],
    correctOptionIndex: 2,
    explanation: 'Vitamin C (Ascorbic acid) deficiency leads to Scurvy, characterized by bleeding gums, skin spots, and poor wound healing.',
    hints: ['Citrus fruits like lemons and oranges are rich in this vitamin.', 'Deficiency of Vitamin A causes night blindness; Vitamin D causes rickets.', 'Scurvy is caused by lack of Vitamin C.'],
    difficulty: 'Intermediate',
    marks: 1
  },
  {
    id: 'cur-iso-g7-1',
    examId: 'ISO',
    grade: 7,
    chapter: 'Acids, Bases & Salts',
    section: 'achievers',
    questionText: 'An unknown aqueous solution X turns blue litmus red and reacts with baking soda to produce brisk effervescence of gas Y. Gas Y turns lime water milky. What are X and Y?',
    options: ['X is Hydrochloric acid, Y is Carbon dioxide', 'X is Sodium hydroxide, Y is Hydrogen', 'X is Hydrochloric acid, Y is Oxygen', 'X is Water, Y is Nitrogen'],
    correctOptionIndex: 0,
    explanation: 'Acid turns blue litmus red. Acid + Sodium hydrogen carbonate (baking soda) produces Carbon dioxide (CO2) gas, which turns lime water milky due to CaCO3 formation.',
    hints: ['Blue litmus turning red indicates an acidic substance.', 'Brisk effervescence with baking soda releases CO2 gas.', 'CO2 gas turns lime water milky.'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-iso-g9-1',
    examId: 'ISO',
    grade: 9,
    chapter: 'Kinematics & Laws of Motion',
    section: 'achievers',
    questionText: 'A car starting from rest accelerates uniformly at 2.5 m/s^2 for 8 seconds. What total distance does it cover during this time interval?',
    latexFormula: 's = ut + \\frac{1}{2}at^2 = 0 + \\frac{1}{2}(2.5)(8^2)',
    options: ['60 m', '72 m', '80 m', '96 m'],
    correctOptionIndex: 2,
    explanation: 'Use second equation of motion: s = ut + 0.5 * a * t^2. Since it starts from rest, u = 0. s = 0 + 0.5 * 2.5 * (8^2) = 0.5 * 2.5 * 64 = 80 meters.',
    hints: ['Initial velocity u = 0 m/s.', 'Use the equation s = ut + (1/2)*a*t^2.', 's = 0.5 * 2.5 * 64 = 80 m.'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-icso-g2-1',
    examId: 'ICSO',
    grade: 2,
    chapter: 'Parts of Computer',
    section: 'subject',
    questionText: 'Which computer component is known as the "Brain of the Computer" that processes all instructions?',
    options: ['Monitor', 'Keyboard', 'CPU', 'Mouse'],
    correctOptionIndex: 2,
    explanation: 'The CPU (Central Processing Unit) executes programs and performs arithmetic and logical calculations, acting as the brain.',
    hints: ['It stands for Central Processing Unit.', 'Monitor is display, keyboard is input.', 'CPU is the processing unit.'],
    difficulty: 'Beginner',
    marks: 1
  },
  {
    id: 'cur-icso-g5-1',
    examId: 'ICSO',
    grade: 5,
    chapter: 'Memory & Storage Units',
    section: 'subject',
    questionText: 'How many Megabytes (MB) are exactly equal to 1 Gigabyte (GB) in digital storage?',
    latexFormula: '1\\text{ GB} = 2^{10}\\text{ MB} = 1024\\text{ MB}',
    options: ['100 MB', '500 MB', '1000 MB', '1024 MB'],
    correctOptionIndex: 3,
    explanation: 'In binary computer storage architecture, units are powers of 2: 1 GB = 2^10 MB = 1024 MB.',
    hints: ['Computers work in binary (base 2).', '2^10 = 1024.', '1 GB = 1024 MB.'],
    difficulty: 'Intermediate',
    marks: 1
  },
  {
    id: 'cur-icso-g8-1',
    examId: 'ICSO',
    grade: 8,
    chapter: 'Python Programming & Data Structures',
    section: 'achievers',
    questionText: 'What will be the output of the following Python code snippet?\nnums = [10, 20, 30, 40, 50]\nprint(nums[1:4])',
    latexFormula: '\\text{nums}[1:4] = [20, 30, 40]',
    options: ['[10, 20, 30]', '[20, 30, 40]', '[20, 30, 40, 50]', '[10, 20, 30, 40]'],
    correctOptionIndex: 1,
    explanation: 'Python list slicing syntax [start:end] includes index `start` (index 1 = 20) and excludes index `end` (index 4 = 50), giving [20, 30, 40].',
    hints: ['List index starts at 0 (nums[0]=10, nums[1]=20).', 'Slice nums[1:4] takes indices 1, 2, and 3.', 'Index 4 is excluded.'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-ieo-g3-1',
    examId: 'IEO',
    grade: 3,
    chapter: 'Prepositions & Grammar',
    section: 'subject',
    questionText: 'Choose the correct preposition: "The brave diver jumped _______ the deep pool to rescue the kitten."',
    options: ['at', 'into', 'on', 'with'],
    correctOptionIndex: 1,
    explanation: '"Into" is used to show movement from outside towards the inside of something.',
    hints: ['Notice that movement from outside to inside is happening.', '"In" is stationary; "Into" expresses movement inwards.', 'The diver jumped into the pool.'],
    difficulty: 'Beginner',
    marks: 1
  },
  {
    id: 'cur-ieo-g7-1',
    examId: 'IEO',
    grade: 7,
    chapter: 'Idioms & Advanced Vocabulary',
    section: 'achievers',
    questionText: 'What is the meaning of the idiom "to burn the midnight oil"?',
    options: ['To waste electricity', 'To work or study late into the night', 'To cause an accidental fire', 'To cook late dinner'],
    correctOptionIndex: 1,
    explanation: '"Burn the midnight oil" originates from working by oil lamp late into the night, meaning working or studying diligently late.',
    hints: ['Think of ancient times when scholars studied by oil lamps at night.', 'It relates to hard work during late hours.', 'It means working/studying late into the night.'],
    difficulty: 'Intermediate',
    marks: 2
  },
  {
    id: 'cur-igko-g4-1',
    examId: 'IGKO',
    grade: 4,
    chapter: 'Space Missions & Inventions',
    section: 'everyday',
    questionText: 'Which Indian lunar mission successfully made a historic soft landing near the South Pole of the Moon in August 2023?',
    options: ['Mangalyaan-1', 'Chandrayaan-2', 'Chandrayaan-3', 'Aditya-L1'],
    correctOptionIndex: 2,
    explanation: 'ISRO Chandrayaan-3 mission with Vikram lander and Pragyan rover successfully landed near the lunar South Pole on August 23, 2023.',
    hints: ['It was launched by ISRO in 2023.', 'Aditya-L1 is a solar mission; Mangalyaan is Mars mission.', 'Chandrayaan-3 is the lunar mission.'],
    difficulty: 'Intermediate',
    marks: 1
  },
  {
    id: 'cur-igko-g8-1',
    examId: 'IGKO',
    grade: 8,
    chapter: 'World Geopolitics & Treaties',
    section: 'achievers',
    questionText: 'Where is the permanent headquarters of the International Court of Justice (ICJ) situated?',
    options: ['Geneva, Switzerland', 'New York, USA', 'The Hague, Netherlands', 'Paris, France'],
    correctOptionIndex: 2,
    explanation: 'The International Court of Justice (principal judicial organ of the UN) is located in the Peace Palace at The Hague, Netherlands.',
    hints: ['It is located in Europe, in the Peace Palace.', 'Geneva houses WHO and ILO; New York houses UN Headquarters.', 'The ICJ is in The Hague, Netherlands.'],
    difficulty: 'Achiever',
    marks: 2,
    isLevel2: true
  },
  {
    id: 'cur-isso-g4-1',
    examId: 'ISSO',
    grade: 4,
    chapter: 'Indus Valley Civilization',
    section: 'subject',
    questionText: 'The famous "Great Bath" and the bronze statue of the "Dancing Girl" were excavated from which Indus Valley site?',
    options: ['Harappa', 'Mohenjo-daro', 'Lothal', 'Kalibangan'],
    correctOptionIndex: 1,
    explanation: 'Mohenjo-daro (Mound of the Dead), located in Sindh, Pakistan, featured the Great Bath, granaries, and the bronze Dancing Girl artifact.',
    hints: ['It translates to "Mound of the Dead".', 'Lothal was a dockyard port city in Gujarat.', 'Mohenjo-daro had the famous Great Bath.'],
    difficulty: 'Intermediate',
    marks: 1
  },
  {
    id: 'cur-isso-g9-1',
    examId: 'ISSO',
    grade: 9,
    chapter: 'French Revolution & Global History',
    section: 'achievers',
    questionText: 'What were the three fundamental principles enshrined in the motto of the French Revolution of 1789?',
    options: ['Faith, Hope, Charity', 'Liberty, Equality, Fraternity', 'Peace, Progress, Prosperity', 'Justice, Law, Order'],
    correctOptionIndex: 1,
    explanation: 'The revolutionary motto of the French Republic was "Liberté, Égalité, Fraternité" (Liberty, Equality, Fraternity).',
    hints: ['Think of freedom, equal rights, and brotherhood.', 'In French: Liberté, Égalité, Fraternité.', 'Liberty, Equality, Fraternity is the answer.'],
    difficulty: 'Intermediate',
    marks: 2
  }
];

const generatedBank = [...curatedQuestions];

const subjectTopicGenerators = {
  IMO: (g, idx) => ({
    chapter: idx % 2 === 0 ? 'Number System & Arithmetic' : 'Geometry & Logic HOTS',
    section: idx === 0 ? 'logical' : idx === 1 ? 'subject' : idx === 2 ? 'everyday' : 'achievers',
    questionText: `[Grade ${g} IMO Drill #${idx+1}] If the sum of ${g*3} and ${g*5} is multiplied by ${idx+2}, what is the resulting value?`,
    latexFormula: `(${g*3} + ${g*5}) \\times ${idx+2} = ${g*8 * (idx+2)}`,
    options: [
      `${g*8 * (idx+2) - 10}`,
      `${g*8 * (idx+2)}`,
      `${g*8 * (idx+2) + 12}`,
      `${g*8 * (idx+2) + 20}`
    ],
    correctOptionIndex: 1,
    explanation: `Step 1: Calculate inside parentheses (${g*3} + ${g*5}) = ${g*8}. Step 2: Multiply by ${idx+2} = ${g*8 * (idx+2)}.`,
    hints: [`Add the first two numbers: ${g*3} + ${g*5}.`, `That equals ${g*8}.`, `Now multiply ${g*8} by ${idx+2}.`],
    difficulty: idx === 3 ? 'Achiever' : 'Intermediate',
    marks: idx === 3 ? 2 : 1,
    isLevel2: idx === 3
  }),
  ISO: (g, idx) => ({
    chapter: idx % 2 === 0 ? 'Living Organisms & Science' : 'Forces, Energy & Chemistry',
    section: idx === 0 ? 'logical' : idx === 1 ? 'subject' : idx === 2 ? 'everyday' : 'achievers',
    questionText: `[Grade ${g} Science Test #${idx+1}] Which fundamental process allows plants to convert solar energy into chemical energy stored in glucose?`,
    latexFormula: `6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow{\\text{light}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2`,
    options: ['Transpiration', 'Photosynthesis', 'Respiration', 'Germination'],
    correctOptionIndex: 1,
    explanation: 'Photosynthesis is the biochemical process in chloroplasts where chlorophyll captures solar light to produce glucose and oxygen from carbon dioxide and water.',
    hints: ['It happens in green leaves containing chlorophyll.', 'Solar energy is converted to sugar.', 'The process is Photosynthesis.'],
    difficulty: idx === 3 ? 'Achiever' : 'Intermediate',
    marks: idx === 3 ? 2 : 1,
    isLevel2: idx === 3
  }),
  ICSO: (g, idx) => ({
    chapter: idx % 2 === 0 ? 'Algorithms & Programming' : 'Computer Hardware & Security',
    section: idx === 0 ? 'logical' : idx === 1 ? 'subject' : idx === 2 ? 'everyday' : 'achievers',
    questionText: `[Grade ${g} Cyber Challenge #${idx+1}] Which computer protocol ensures secure, encrypted data transmission across websites on the World Wide Web?`,
    options: ['HTTP', 'FTP', 'HTTPS', 'SMTP'],
    correctOptionIndex: 2,
    explanation: 'HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS encryption to ensure data privacy and prevent eavesdropping.',
    hints: ['Notice the "S" at the end of the protocol.', 'It uses SSL/TLS encryption for padlocked secure browsing.', 'The answer is HTTPS.'],
    difficulty: idx === 3 ? 'Achiever' : 'Intermediate',
    marks: idx === 3 ? 2 : 1,
    isLevel2: idx === 3
  }),
  IEO: (g, idx) => ({
    chapter: idx % 2 === 0 ? 'Word & Structure Grammar' : 'Reading Comprehension & Vocabulary',
    section: idx === 0 ? 'logical' : idx === 1 ? 'subject' : idx === 2 ? 'everyday' : 'achievers',
    questionText: `[Grade ${g} IEO Practice #${idx+1}] Select the correct sentence with proper Subject-Verb agreement:`,
    options: [
      'Neither the teacher nor the students was present.',
      'Neither the teacher nor the students were present.',
      'Neither the teacher nor the students is present.',
      'Neither the teacher nor the students are being present.'
    ],
    correctOptionIndex: 1,
    explanation: 'With "neither... nor...", the verb agrees with the closer subject ("students", which is plural), hence "were present".',
    hints: ['Look at the subject closest to the verb: "students".', '"Students" is plural.', 'Use plural verb "were present".'],
    difficulty: idx === 3 ? 'Achiever' : 'Intermediate',
    marks: idx === 3 ? 2 : 1,
    isLevel2: idx === 3
  }),
  IGKO: (g, idx) => ({
    chapter: idx % 2 === 0 ? 'World Heritage & Geography' : 'Science Discoveries & Space',
    section: idx === 0 ? 'logical' : idx === 1 ? 'subject' : idx === 2 ? 'everyday' : 'achievers',
    questionText: `[Grade ${g} IGKO Trivia #${idx+1}] What is the largest ocean on planet Earth, covering more than 30% of the Earth surface?`,
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctOptionIndex: 3,
    explanation: 'The Pacific Ocean is the largest and deepest of Earths oceanic divisions, extending from the Arctic in the north to the Southern Ocean.',
    hints: ['It contains the deepest point on Earth, the Mariana Trench.', 'It covers more surface area than all Earths land combined.', 'The Pacific Ocean.'],
    difficulty: idx === 3 ? 'Achiever' : 'Intermediate',
    marks: idx === 3 ? 2 : 1,
    isLevel2: idx === 3
  }),
  ISSO: (g, idx) => ({
    chapter: idx % 2 === 0 ? 'History & Ancient Civilizations' : 'Geography, Climate & Civics',
    section: idx === 0 ? 'logical' : idx === 1 ? 'subject' : idx === 2 ? 'everyday' : 'achievers',
    questionText: `[Grade ${g} ISSO Exam #${idx+1}] The imaginary horizontal line that circles the Earth midway between North and South poles is called:`,
    options: ['Prime Meridian', 'Tropic of Cancer', 'Equator', 'Tropic of Capricorn'],
    correctOptionIndex: 2,
    explanation: 'The Equator is the 0° latitude line dividing the Earth into the Northern and Southern Hemispheres.',
    hints: ['It is at 0 degrees latitude.', 'It divides Earth into Northern and Southern halves.', 'It is the Equator.'],
    difficulty: idx === 3 ? 'Achiever' : 'Intermediate',
    marks: idx === 3 ? 2 : 1,
    isLevel2: idx === 3
  })
};

grades.forEach(g => {
  examSubjects.forEach(examId => {
    const generator = subjectTopicGenerators[examId];
    if (generator) {
      for (let i = 0; i < 6; i++) {
        const item = generator(g, i);
        generatedBank.push({
          id: `q-${examId.toLowerCase()}-g${g}-${i+1}`,
          examId,
          grade: g,
          chapter: item.chapter,
          section: item.section,
          questionText: item.questionText,
          latexFormula: item.latexFormula,
          options: item.options,
          correctOptionIndex: item.correctOptionIndex,
          explanation: item.explanation,
          hints: item.hints,
          difficulty: item.difficulty,
          marks: item.marks,
          isLevel2: item.isLevel2,
          year: 2025 - (i % 6)
        });
      }
    }
  });
});

const out = `import { Question } from '../types/olympiad';

export const QUESTION_BANK: Question[] = ${JSON.stringify(generatedBank, null, 2)};
`;

fs.writeFileSync('src/data/questionBank.ts', out, 'utf8');
console.log('src/data/questionBank.ts generated with ' + generatedBank.length + ' questions!');
