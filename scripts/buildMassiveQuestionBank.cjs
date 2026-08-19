const fs = require('fs');

const examSubjects = ['IMO', 'ISO', 'ICSO', 'IEO', 'IGKO', 'ISSO'];
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fullBank = [];

const subjectGenerators = {
  IMO: (g, i) => {
    const isAchiever = i % 5 === 4;
    const isLogical = i % 5 === 0;
    const isEveryday = i % 5 === 3;
    const section = isAchiever ? 'achievers' : (isLogical ? 'logical' : (isEveryday ? 'everyday' : 'subject'));
    
    const topicIdx = i % 10;
    let chapter = 'Number Sense & Operations';
    let qText = '';
    let formula = undefined;
    let opts = [];
    let exp = '';

    if (topicIdx === 0 || topicIdx === 1) {
      chapter = 'Arithmetic & Speed Calculation';
      const n1 = g * 7 + i * 3 + 12;
      const n2 = g * 4 + i * 2 + 8;
      const mult = (i % 4) + 2;
      const ans = (n1 + n2) * mult;
      qText = `[Grade ${g} IMO Q#${i+1}] Calculate the value of (${n1} + ${n2}) × ${mult}.`;
      formula = `(${n1} + ${n2}) \\times ${mult} = ${ans}`;
      opts = [`${ans - 14}`, `${ans}`, `${ans + 10}`, `${ans + 22}`];
      exp = `Step 1: ${n1} + ${n2} = ${n1 + n2}. Step 2: Multiply by ${mult} = ${ans}.`;
    } else if (topicIdx === 2 || topicIdx === 3) {
      chapter = 'Geometry, Perimeter & Area';
      const len = g * 5 + i * 2 + 10;
      const wid = g * 3 + i + 5;
      const peri = 2 * (len + wid);
      qText = `[Grade ${g} IMO Q#${i+1}] A rectangular field has length ${len} m and width ${wid} m. What is its boundary perimeter?`;
      formula = `\\text{Perimeter} = 2(${len} + ${wid}) = ${peri}\\text{ m}`;
      opts = [`${peri - 8} m`, `${peri} m`, `${peri + 12} m`, `${peri + 20} m`];
      exp = `Perimeter of rectangle = 2 * (length + width) = 2 * (${len} + ${wid}) = ${peri} m.`;
    } else if (topicIdx === 4 || topicIdx === 5) {
      chapter = 'Fractions, Decimals & Ratios';
      const totalMarks = g * 15 + 60;
      const pct = 75;
      const ans = Math.round((totalMarks * pct) / 100);
      qText = `[Grade ${g} IMO Q#${i+1}] In an Olympiad evaluation of ${totalMarks} total marks, Kabir scored ${pct}%. How many marks did he obtain?`;
      formula = `\\frac{${pct}}{100} \\times ${totalMarks} = ${ans}`;
      opts = [`${ans - 6}`, `${ans}`, `${ans + 8}`, `${ans + 15}`];
      exp = `${pct}% of ${totalMarks} = (${pct}/100) * ${totalMarks} = ${ans} marks.`;
    } else if (topicIdx === 6 || topicIdx === 7) {
      chapter = 'Patterns, Series & Logical Deduction';
      const start = g * 3 + i * 2;
      const step = (i % 5) + 3;
      const term4 = start + step * 3;
      qText = `[Grade ${g} IMO Q#${i+1}] Find the missing number in the progression: ${start}, ${start + step}, ${start + step * 2}, ___, ${start + step * 4}.`;
      opts = [`${term4 - step + 1}`, `${term4}`, `${term4 + step - 1}`, `${term4 + 2 * step}`];
      exp = `The series increases by a common difference of +${step}. Missing number = ${start + step * 2} + ${step} = ${term4}.`;
    } else {
      chapter = 'Achievers Section HOTS Algebra';
      const k = g + 2;
      const c = g * 4 + 10;
      const val = 6;
      const rhs = k * val + c;
      const sq = val * val;
      qText = `[Grade ${g} IMO Achievers HOTS #${i+1}] If ${k}x + ${c} = ${rhs}, what is the value of x²?`;
      formula = `${k}x + ${c} = ${rhs} \\implies x = ${val}, \\quad x^2 = ${sq}`;
      opts = [`${sq - 11}`, `${sq}`, `${sq + 13}`, `${sq + 20}`];
      exp = `${k}x = ${rhs} - ${c} = ${k * val} => x = ${val}. Thus x² = ${val}² = ${sq}.`;
    }

    return {
      chapter,
      section,
      questionText: qText,
      latexFormula: formula,
      options: opts,
      correctOptionIndex: 1,
      explanation: exp,
      hints: [
        `Identify the key parameters for Grade ${g} Mathematics.`,
        `Apply standard algebraic or geometric formulas.`,
        `Double-check your calculation step by step.`
      ],
      difficulty: isAchiever ? 'Achiever' : (i % 2 === 0 ? 'Intermediate' : 'Beginner'),
      marks: isAchiever ? 2 : 1,
      isLevel2: isAchiever
    };
  },

  ISO: (g, i) => {
    const isAchiever = i % 5 === 4;
    const isLogical = i % 5 === 0;
    const section = isAchiever ? 'achievers' : (isLogical ? 'logical' : (i % 3 === 0 ? 'subject' : 'everyday'));
    
    const scienceDatabase = [
      { topic: 'Plant Physiology & Photosynthesis', q: 'Which organelle in plant cells contains chlorophyll and carries out photosynthesis?', ans: 'Chloroplast', dist: ['Mitochondria', 'Endoplasmic Reticulum', 'Golgi Body'], exp: 'Chloroplasts contain chlorophyll pigments that synthesize glucose using sunlight, CO2, and water.' },
      { topic: 'Human Body & Organ Systems', q: 'Which chambers of the human heart receive oxygen-rich blood directly from the lungs?', ans: 'Left Atrium', dist: ['Right Atrium', 'Right Ventricle', 'Superior Vena Cava'], exp: 'Pulmonary veins carry oxygenated blood from the lungs into the Left Atrium.' },
      { topic: 'Acids, Bases & Indicators', q: 'What is the color change when a strip of blue litmus paper is dipped into an acidic solution?', ans: 'Turns Red', dist: ['Turns Green', 'Remains Blue', 'Turns Colorless'], exp: 'Acids turn blue litmus red, whereas bases turn red litmus blue.' },
      { topic: 'Electricity & Circuits', q: 'In an electric circuit, what device is used to safely break or complete the circuit current flow?', ans: 'Electric Switch', dist: ['Voltmeter only', 'Ammeter only', 'Insulating Tape'], exp: 'A switch is a control device designed to open or close an electrical conductive path.' },
      { topic: 'Forces, Friction & Newton Laws', q: 'Which type of friction offers the least resistance to motion among the following?', ans: 'Rolling Friction', dist: ['Static Friction', 'Sliding Friction', 'Kinetic Fluid Friction'], exp: 'Rolling friction is significantly smaller than sliding or static friction due to minimal contact point deformation.' },
      { topic: 'Matter, States & Phase Changes', q: 'The direct phase transition of a substance from solid directly into gas without becoming liquid is called:', ans: 'Sublimation', dist: ['Evaporation', 'Condensation', 'Solidification'], exp: 'Sublimation is the direct transition from solid to gaseous state (e.g. Dry Ice, Camphor, Iodine).' },
      { topic: 'Optics, Mirrors & Lenses', q: 'Which type of mirror is universally used as a rear-view mirror in automobiles because it gives a wider field of view?', ans: 'Convex Mirror', dist: ['Concave Mirror', 'Plane Mirror', 'Cylindrical Mirror'], exp: 'Convex mirrors always form virtual, erect, and diminished images, providing a wide rear panorama.' },
      { topic: 'Ecosystem, Nutrition & Food Chains', q: 'In an ecological food chain, organisms that produce their own food by trapping solar energy are called:', ans: 'Autotrophic Producers', dist: ['Primary Consumers', 'Secondary Carnivores', 'Saprophytic Decomposers'], exp: 'Green plants are autotrophs (producers) that convert solar photon flux into chemical biomass.' },
      { topic: 'Cell Biology & Genetics', q: 'Which cellular structure is known as the "Powerhouse of the Cell" for generating ATP energy?', ans: 'Mitochondria', dist: ['Ribosome', 'Lysosome', 'Nucleolus'], exp: 'Mitochondria generate adenosine triphosphate (ATP) through cellular respiration.' },
      { topic: 'Achievers Science HOTS', isAchiever: true, q: 'Why does a piece of iron sink in water, whereas a giant steel ship floats comfortably on ocean water?', ans: 'The hollow ship displaces a volume of water equal to its total weight (Archimedes Principle)', dist: ['Steel has lower atomic density than pure iron', 'Ocean salt makes steel weightless', 'Ship engines push water downward to hover'], exp: 'Due to its hollow design, the ship average density is lower than water and buoyant force balances its total weight.' }
    ];

    const item = scienceDatabase[i % scienceDatabase.length];
    return {
      chapter: item.topic,
      section,
      questionText: `[Grade ${g} Science Q#${i+1}] ${item.q}`,
      options: [item.dist[0], item.ans, item.dist[1], item.dist[2]],
      correctOptionIndex: 1,
      explanation: item.exp,
      hints: [
        `Relate to Grade ${g} Science curriculum: ${item.topic}.`,
        `Consider fundamental biological and physical mechanisms.`,
        `The correct answer is ${item.ans}.`
      ],
      difficulty: isAchiever ? 'Achiever' : (i % 2 === 0 ? 'Intermediate' : 'Beginner'),
      marks: isAchiever ? 2 : 1,
      isLevel2: isAchiever
    };
  },

  ICSO: (g, i) => {
    const isAchiever = i % 5 === 4;
    const isLogical = i % 5 === 0;
    const section = isAchiever ? 'achievers' : (isLogical ? 'logical' : (i % 3 === 0 ? 'subject' : 'everyday'));

    const cyberDatabase = [
      { topic: 'Hardware & Architecture', q: 'Which computer component is responsible for carrying out arithmetic and logic operations in the CPU?', ans: 'ALU (Arithmetic Logic Unit)', dist: ['Control Unit (CU)', 'RAM Memory', 'Hard Disk Drive'], exp: 'The ALU performs all arithmetic (+, -, *, /) and logical comparison operations inside the CPU.' },
      { topic: 'Storage Units & Binary Logic', q: 'How many bytes are there in exactly 1 Kilobyte (KB) in binary computing?', ans: '1024 Bytes', dist: ['100 Bytes', '512 Bytes', '1000 Bytes'], exp: 'In standard binary computer architecture, 1 KB = 2^10 Bytes = 1024 Bytes.' },
      { topic: 'Operating Systems & File Management', q: 'Which software acts as an intermediary bridge between computer hardware and user application programs?', ans: 'Operating System (OS)', dist: ['Web Browser', 'Spreadsheet', 'Compiler only'], exp: 'The Operating System manages hardware resources, process scheduling, and user input/output interfaces.' },
      { topic: 'Programming Logic & Scratch', q: 'In Scratch 3.0 programming, which category of colorful blocks controls sprite motion (e.g. "move 10 steps")?', ans: 'Blue Motion Blocks', dist: ['Purple Looks Blocks', 'Yellow Events Blocks', 'Orange Control Blocks'], exp: 'Blue blocks in Scratch control coordinates, rotation, direction, and spatial movement of sprites.' },
      { topic: 'Python Programming & Syntax', q: 'What will be the output of print(type(42.5)) in Python 3?', ans: "<class 'float'>", dist: ["<class 'int'>", "<class 'str'>", "<class 'bool'>"], exp: 'Numbers with fractional/decimal points are instances of the float data type in Python.' },
      { topic: 'Cyber Safety & Digital Ethics', q: 'What is the safe practice of creating a duplicate copy of important digital files called?', ans: 'Data Backup', dist: ['Data Phishing', 'Disk Formatting', 'Spamming'], exp: 'A data backup ensures files can be restored in case of hardware failure or malware infection.' },
      { topic: 'Internet, Protocols & Web', q: 'Which internet protocol is used specifically to send outgoing email messages between mail servers?', ans: 'SMTP (Simple Mail Transfer Protocol)', dist: ['HTTP', 'FTP', 'DHCP'], exp: 'SMTP is the standard application layer protocol used for transferring outgoing electronic mail messages.' },
      { topic: 'Artificial Intelligence & Robotics', q: 'What branch of Computer Science enables machines to learn patterns from data and improve from experience?', ans: 'Machine Learning (ML)', dist: ['Database Indexing', 'Text Typography', 'Analog Synthesis'], exp: 'Machine Learning algorithms build mathematical models based on sample training data to make predictions.' },
      { topic: 'Data Structures & Algorithms', q: 'Which search algorithm operates by repeatedly dividing a sorted array in half to find a target value?', ans: 'Binary Search', dist: ['Linear Search', 'Bubble Sort', 'Insertion Sort'], exp: 'Binary Search achieves O(log N) time efficiency by halving the search interval on sorted data.' },
      { topic: 'Achievers Cyber HOTS', isAchiever: true, q: 'In Python, what is the output of [x**2 for x in range(5) if x % 2 != 0]?', ans: '[1, 9]', dist: ['[0, 1, 4, 9, 16]', '[1, 4, 9]', '[0, 4, 16]'], exp: 'range(5) gives 0,1,2,3,4. Odd numbers are 1 and 3. Their squares are 1^2=1 and 3^2=9 -> [1, 9].' }
    ];

    const item = cyberDatabase[i % cyberDatabase.length];
    return {
      chapter: item.topic,
      section,
      questionText: `[Grade ${g} Cyber Q#${i+1}] ${item.q}`,
      options: [item.dist[0], item.ans, item.dist[1], item.dist[2]],
      correctOptionIndex: 1,
      explanation: item.exp,
      hints: [
        `Focus on Grade ${g} Computer & Cyber Olympiad concepts: ${item.topic}.`,
        `Recall standard IT systems, syntax, or protocols.`,
        `The correct answer is ${item.ans}.`
      ],
      difficulty: isAchiever ? 'Achiever' : (i % 2 === 0 ? 'Intermediate' : 'Beginner'),
      marks: isAchiever ? 2 : 1,
      isLevel2: isAchiever
    };
  },

  IEO: (g, i) => {
    const isAchiever = i % 5 === 4;
    const isLogical = i % 5 === 0;
    const section = isAchiever ? 'achievers' : (isLogical ? 'logical' : (i % 3 === 0 ? 'subject' : 'everyday'));

    const englishDatabase = [
      { topic: 'Nouns, Pronouns & Articles', q: 'Choose the correct article: "Dr. Sharma is ________ honorable and distinguished professor."', ans: 'an', dist: ['a', 'the', 'no article'], exp: '"Honorable" begins with a silent "h", producing an open vowel sound "o", so "an" is used.' },
      { topic: 'Subject-Verb Concord', q: 'Identify the sentence with correct subject-verb agreement:', ans: 'Neither the teacher nor the students were late for the lecture.', dist: ['Neither the teacher nor the students was late for the lecture.', 'Neither the teacher nor the students is late for the lecture.', 'Neither the teacher nor the students has been late.'], exp: 'With "neither... nor", the verb agrees with the closer plural subject ("students were").' },
      { topic: 'Tenses & Modals', q: 'Fill in the blank: "By the time the train arrives, we ________ on the platform for two hours."', ans: 'will have been waiting', dist: ['waited', 'are waiting', 'have wait'], exp: 'Future Perfect Continuous expresses an ongoing continuous action up to a future point in time.' },
      { topic: 'Active & Passive Voice', q: 'Change into Passive Voice: "The committee approved the new scholarship policy yesterday."', ans: 'The new scholarship policy was approved by the committee yesterday.', dist: ['The new scholarship policy is approved by the committee yesterday.', 'The committee was approved by the scholarship policy.', 'The new scholarship policy had approved by the committee.'], exp: 'Simple Past Passive format: Subject + was/were + V3 (approved) + by + Agent.' },
      { topic: 'Vocabulary: Synonyms & Antonyms', q: 'What is the closest synonym of the word "ELOQUENT"?', ans: 'Articulate & Persuasive', dist: ['Hesitant', 'Awkward', 'Silent'], exp: 'Eloquent means fluent, articulate, and expressive in speech or writing.' },
      { topic: 'Idioms & Phrasal Verbs', q: 'What does the English idiom "to beat around the bush" mean?', ans: 'To avoid speaking directly about the main topic', dist: ['To plant garden shrubs', 'To hit something angrily', 'To complete a marathon quickly'], exp: '"Beat around the bush" means discussing tangential matters to avoid the uncomfortable core issue.' },
      { topic: 'Direct & Indirect Speech', q: 'Convert to indirect speech: She said, "I am reading an interesting biography."', ans: 'She said that she was reading an interesting biography.', dist: ['She said that I am reading an interesting biography.', 'She told that she is reading an interesting biography.', 'She said that she had been read an interesting biography.'], exp: 'Present Continuous changes to Past Continuous in indirect reporting: "am reading" -> "was reading".' },
      { topic: 'Prepositions & Conjunctions', q: 'Fill in the blank: "He has been living in Bengaluru ________ October 2021."', ans: 'since', dist: ['for', 'from', 'during'], exp: '"Since" is used to designate a specific fixed point in past time from which an action continues.' },
      { topic: 'Reading Comprehension & Tone', q: 'If an author presents balanced factual evidence without taking sides, the author tone is described as:', ans: 'Objective & Neutral', dist: ['Sarcastic', 'Biased & Emotional', 'Melodramatic'], exp: 'An objective tone relies on verifiable facts, balanced arguments, and impartial neutrality.' },
      { topic: 'Achievers English HOTS', isAchiever: true, q: 'Identify the figure of speech in: "The lonely lighthouse stood as a silent sentinel watching over the turbulent sea."', ans: 'Personification & Metaphor', dist: ['Hyperbole only', 'Onomatopoeia', 'Irony without figurative meaning'], exp: 'Comparing the lighthouse to a "silent sentinel" that "stands and watches" employs metaphor and personification.' }
    ];

    const item = englishDatabase[i % englishDatabase.length];
    return {
      chapter: item.topic,
      section,
      questionText: `[Grade ${g} English Q#${i+1}] ${item.q}`,
      options: [item.dist[0], item.ans, item.dist[1], item.dist[2]],
      correctOptionIndex: 1,
      explanation: item.exp,
      hints: [
        `Review Grade ${g} English grammar and vocabulary rules: ${item.topic}.`,
        `Check syntactic harmony, tenses, and context clues.`,
        `The correct answer is ${item.ans}.`
      ],
      difficulty: isAchiever ? 'Achiever' : (i % 2 === 0 ? 'Intermediate' : 'Beginner'),
      marks: isAchiever ? 2 : 1,
      isLevel2: isAchiever
    };
  },

  IGKO: (g, i) => {
    const isAchiever = i % 5 === 4;
    const isLogical = i % 5 === 0;
    const section = isAchiever ? 'achievers' : (isLogical ? 'logical' : (i % 3 === 0 ? 'subject' : 'everyday'));

    const gkDatabase = [
      { topic: 'India: Heritage & Monuments', q: 'Which historic monument in Delhi was commissioned by Mughal Emperor Humayun son Akbar and is made of red sandstone?', ans: 'Humayun Tomb', dist: ['Charminar', 'Gateway of India', 'Victoria Memorial'], exp: 'Humayun Tomb in Delhi was built in 1570 and was the first garden-tomb on the Indian subcontinent.' },
      { topic: 'World Geography & Extremes', q: 'Which is the largest hot desert in the world, spanning across North Africa?', ans: 'Sahara Desert', dist: ['Gobi Desert', 'Kalahari Desert', 'Thar Desert'], exp: 'The Sahara Desert covers an area of roughly 9.2 million square kilometers across North Africa.' },
      { topic: 'Space Missions & Astronomy', q: 'Which is the closest star system to planet Earth (located approximately 4.24 light-years away)?', ans: 'Proxima Centauri', dist: ['Sirius', 'Betelgeuse', 'Polaris'], exp: 'Proxima Centauri, a red dwarf in the Alpha Centauri system, is our nearest stellar neighbor.' },
      { topic: 'Inventions & Discoveries', q: 'Who discovered the world first antibiotic drug, Penicillin, in 1928?', ans: 'Sir Alexander Fleming', dist: ['Louis Pasteur', 'Edward Jenner', 'Robert Koch'], exp: 'Sir Alexander Fleming observed that Penicillium notatum mold prevented staphylococcus bacterial growth.' },
      { topic: 'Sports, Cups & Olympiad History', q: 'In which city were the first modern Olympic Games held in the year 1896?', ans: 'Athens, Greece', dist: ['Paris, France', 'London, UK', 'Rome, Italy'], exp: 'The 1896 Summer Olympics took place in Athens, Greece, reviving the ancient Panathenaic tradition.' },
      { topic: 'Indian Polity & Governance', q: 'Who presides over the joint sittings of both Houses of the Indian Parliament?', ans: 'Speaker of the Lok Sabha', dist: ['President of India', 'Vice President (Rajya Sabha Chairman)', 'Prime Minister'], exp: 'Under Article 118(4) of the Indian Constitution, the Speaker of the Lok Sabha presides over joint sittings.' },
      { topic: 'Environment, Climate & Ecology', q: 'World Environment Day is observed globally every year on which date to raise environmental awareness?', ans: 'June 5', dist: ['April 22', 'March 21', 'September 16'], exp: 'June 5 has been recognized as UN World Environment Day since 1974.' },
      { topic: 'Science Trivia & Daily Life', q: 'Which vitamin is synthesized naturally by the human skin upon exposure to solar ultraviolet rays?', ans: 'Vitamin D', dist: ['Vitamin A', 'Vitamin B12', 'Vitamin C'], exp: 'Sunlight triggers biochemical synthesis of cholecalciferol (Vitamin D3) in skin epidermal layers.' },
      { topic: 'World Leaders & Treaties', q: 'In which European city is the headquarters of the United Nations Educational, Scientific and Cultural Organization (UNESCO) situated?', ans: 'Paris, France', dist: ['Geneva, Switzerland', 'New York, USA', 'Vienna, Austria'], exp: 'UNESCO headquarters is located at Place de Fontenoy in Paris, France.' },
      { topic: 'Achievers GK HOTS', isAchiever: true, q: 'Which Indian national space mission launched in September 2023 was positioned at the Sun-Earth L1 Lagrange point to study solar coronal mass ejections?', ans: 'Aditya-L1 Mission', dist: ['Gaganyaan-1', 'Mangalyaan-2', 'AstroSat-2'], exp: 'ISRO Aditya-L1 spacecraft orbits the Sun-Earth L1 halo orbit ~1.5 million km away to observe solar dynamics.' }
    ];

    const item = gkDatabase[i % gkDatabase.length];
    return {
      chapter: item.topic,
      section,
      questionText: `[Grade ${g} General Knowledge Q#${i+1}] ${item.q}`,
      options: [item.dist[0], item.ans, item.dist[1], item.dist[2]],
      correctOptionIndex: 1,
      explanation: item.exp,
      hints: [
        `General Awareness for Grade ${g}: ${item.topic}.`,
        `Recall key historical, scientific, or geopolitical milestones.`,
        `The answer is ${item.ans}.`
      ],
      difficulty: isAchiever ? 'Achiever' : (i % 2 === 0 ? 'Intermediate' : 'Beginner'),
      marks: isAchiever ? 2 : 1,
      isLevel2: isAchiever
    };
  },

  ISSO: (g, i) => {
    const isAchiever = i % 5 === 4;
    const isLogical = i % 5 === 0;
    const section = isAchiever ? 'achievers' : (isLogical ? 'logical' : (i % 3 === 0 ? 'subject' : 'everyday'));

    const issoDatabase = [
      { topic: 'Ancient Civilizations & Archaeology', q: 'Which Harappan civilization site in Gujarat is world-famous for its massive stone-cut water reservoirs and city fortification?', ans: 'Dholavira', dist: ['Kalibangan', 'Banawali', 'Ropar'], exp: 'Dholavira in the Rann of Kutch featured sophisticated rainwater harvesting and stone architecture.' },
      { topic: 'Dynasties & Freedom Movement', q: 'Which famous ruler of the Vijayanagara Empire authored the Telugu epic poem "Amuktamalyada"?', ans: 'Emperor Krishnadevaraya', dist: ['Harihara I', 'Bukka Raya I', 'Rama Raya'], exp: 'King Krishnadevaraya of the Tuluva dynasty composed Amuktamalyada during the golden age of Vijayanagara.' },
      { topic: 'Physical Geography & Landforms', q: 'What triangular landform of alluvial deposit is formed at the mouth of a river where it empties into the sea?', ans: 'Delta', dist: ['Estuary only', 'Gorge', 'Oxbow Lake'], exp: 'River deltas form when sediment deposition occurs as river water slows upon entering a standing body of water.' },
      { topic: 'Atmosphere, Climate & Ocean Currents', q: 'Which warm ocean current flows along the east coast of North America into the Atlantic Ocean?', ans: 'Gulf Stream', dist: ['Canary Current', 'California Current', 'Labrador Current'], exp: 'The Gulf Stream is an intense warm western boundary current in the North Atlantic.' },
      { topic: 'Constitution & Fundamental Rights', q: 'Which Fundamental Right in the Indian Constitution was referred to by Dr. B.R. Ambedkar as the "Heart and Soul of the Constitution"?', ans: 'Right to Constitutional Remedies (Article 32)', dist: ['Right to Equality (Article 14)', 'Right to Freedom of Speech (Article 19)', 'Right to Freedom of Religion (Article 25)'], exp: 'Article 32 empowers citizens to move the Supreme Court directly for writ enforcement of Fundamental Rights.' },
      { topic: 'Democratic Institutions & Parliament', q: 'What is the maximum constitutionally sanctioned strength of the Rajya Sabha (Council of States) in India?', ans: '250 Members', dist: ['245 Members', '545 Members', '300 Members'], exp: 'Article 80 specifies max 250 members: 238 representing States/UTs and 12 nominated by the President.' },
      { topic: 'Economics & Sustainable Resources', q: 'Which economic sector encompasses agriculture, forestry, fishing, and dairy farming?', ans: 'Primary Sector', dist: ['Secondary Sector', 'Tertiary Sector', 'Quaternary Sector'], exp: 'The Primary Sector involves extraction and direct harvesting of natural resources from the Earth.' },
      { topic: 'Medieval History & Architecture', q: 'Who built the world-renowned "Buland Darwaza" (Door of Victory) at Fatehpur Sikri to commemorate his military conquest of Gujarat?', ans: 'Mughal Emperor Akbar', dist: ['Babur', 'Jahangir', 'Aurangzeb'], exp: 'Emperor Akbar erected the 54-meter Buland Darwaza in 1575 at Fatehpur Sikri.' },
      { topic: 'Maps, Scales & Projections', q: 'What is the map line connecting points of equal atmospheric pressure at sea level called?', ans: 'Isobar', dist: ['Isotherm', 'Isohyet', 'Contour Line'], exp: 'Isobars connect geographic points with equal barometric pressure on meteorological weather charts.' },
      { topic: 'Achievers Social Studies HOTS', isAchiever: true, q: 'In which historic session in December 1929 did the Indian National Congress officially adopt the resolution of "Purna Swaraj" (Complete Independence)?', ans: 'Lahore Session (Presided by Jawaharlal Nehru)', dist: ['Karachi Session 1931', 'Belgaum Session 1924', 'Surat Session 1907'], exp: 'At the Lahore Congress session in December 1929, the historic Purna Swaraj declaration was formalized.' }
    ];

    const item = issoDatabase[i % issoDatabase.length];
    return {
      chapter: item.topic,
      section,
      questionText: `[Grade ${g} Social Studies Q#${i+1}] ${item.q}`,
      options: [item.dist[0], item.ans, item.dist[1], item.dist[2]],
      correctOptionIndex: 1,
      explanation: item.exp,
      hints: [
        `Social Studies curriculum for Grade ${g}: ${item.topic}.`,
        `Recall constitutional, geographical, or historical facts.`,
        `The correct answer is ${item.ans}.`
      ],
      difficulty: isAchiever ? 'Achiever' : (i % 2 === 0 ? 'Intermediate' : 'Beginner'),
      marks: isAchiever ? 2 : 1,
      isLevel2: isAchiever
    };
  }
};

grades.forEach(g => {
  examSubjects.forEach(examId => {
    const gen = subjectGenerators[examId];
    for (let i = 0; i < 50; i++) {
      const q = gen(g, i);
      fullBank.push({
        id: `q-${examId.toLowerCase()}-g${g}-${i + 1}`,
        examId,
        grade: g,
        chapter: q.chapter,
        section: q.section,
        questionText: q.questionText,
        latexFormula: q.latexFormula,
        options: q.options,
        correctOptionIndex: q.correctOptionIndex,
        explanation: q.explanation,
        hints: q.hints,
        difficulty: q.difficulty,
        marks: q.marks,
        isLevel2: q.isLevel2
      });
    }
  });
});

const out = `import { Question } from '../types/olympiad';

const RAW_BANK: any[] = ${JSON.stringify(fullBank)};

export const QUESTION_BANK: Question[] = RAW_BANK as unknown as Question[];
`;

fs.writeFileSync('src/data/questionBank.ts', out, 'utf8');
console.log('src/data/questionBank.ts generated with ' + fullBank.length + ' questions!');
