const fs = require('fs');

const examSubjects = ['IMO', 'ISO', 'ICSO', 'IEO', 'IGKO', 'ISSO'];
const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const distinctQuestions = [];

const topicBanks = {
  IMO: [
    {
      title: 'Arithmetic & Number Sense',
      qGen: (g, i) => `If a store sells ${g*5} math notebooks on Monday and ${g*3} on Tuesday, and each pack contains ${i+2} books, how many books were sold in total?`,
      calc: (g, i) => (g*5 + g*3)*(i+2),
      exp: (g, i) => `Total packs = ${g*5} + ${g*3} = ${g*8}. Total books = ${g*8} * ${i+2} = ${(g*8)*(i+2)}.`
    },
    {
      title: 'Geometry & Perimeter',
      qGen: (g, i) => `A rectangular math garden has length ${g*6} m and width ${g*4} m. What is its perimeter?`,
      calc: (g, i) => 2*(g*6 + g*4),
      exp: (g, i) => `Perimeter = 2 * (length + width) = 2 * (${g*6} + ${g*4}) = ${2*(g*6 + g*4)} meters.`
    },
    {
      title: 'Fractions & Percentages',
      qGen: (g, i) => `In a math assessment of ${g*10 + 50} total marks, Sneha scored 80%. How many marks did she score?`,
      calc: (g, i) => Math.round((g*10 + 50) * 0.8),
      exp: (g, i) => `80% of ${g*10 + 50} = (80/100) * ${g*10 + 50} = ${Math.round((g*10 + 50) * 0.8)} marks.`
    },
    {
      title: 'Achievers HOTS Algebra',
      isHots: true,
      qGen: (g, i) => `If ${g+2} times an integer plus ${g*3} equals ${(g+2)*5 + g*3}, what is the cube of that integer?`,
      calc: () => 125,
      exp: () => `Solving the equation gives x = 5. The cube of 5 is 5^3 = 125.`
    }
  ],
  ISO: [
    {
      title: 'Plant Biology & Photosynthesis',
      qGen: (g, i) => `Which specialized organelle in green plant leaves contains chlorophyll and carries out photosynthesis?`,
      ans: 'Chloroplast',
      dist: ['Mitochondria', 'Ribosome', 'Vacuole'],
      exp: 'Chloroplasts contain chlorophyll pigments that absorb photon energy to convert carbon dioxide and water into glucose.'
    },
    {
      title: 'Matter, Acids & Chemical Reactions',
      qGen: (g, i) => `What gas is evolved with brisk effervescence when dilute hydrochloric acid reacts with sodium carbonate?`,
      ans: 'Carbon dioxide (CO2)',
      dist: ['Hydrogen (H2)', 'Oxygen (O2)', 'Nitrogen (N2)'],
      exp: 'Acid + Carbonate produces salt, water, and Carbon dioxide gas (CO2), which turns lime water milky.'
    },
    {
      title: 'Forces, Motion & Energy',
      qGen: (g, i) => `What type of frictional force acts between two contact surfaces that are at rest relative to each other?`,
      ans: 'Static Friction',
      dist: ['Rolling Friction', 'Sliding Friction', 'Fluid Drag'],
      exp: 'Static friction is the self-adjusting frictional force opposing the initiation of relative motion between resting surfaces.'
    },
    {
      title: 'Achievers Science HOTS',
      isHots: true,
      qGen: (g, i) => `Why do astronomical stars appear to twinkle when observed from the surface of planet Earth?`,
      ans: 'Atmospheric refraction of starlight by continuously shifting air layers',
      dist: ['Stars pulse atomic light energy on and off', 'Interstellar cosmic dust clouds', 'Earth magnetic field deflection'],
      exp: 'Turbulence and continuous density variations in Earth atmosphere constantly shift the path of starlight (twinkling).'
    }
  ],
  ICSO: [
    {
      title: 'Computer Hardware & Memory Architecture',
      qGen: (g, i) => `Which volatile primary memory temporarily stores active operating system and application data while the computer is running?`,
      ans: 'RAM (Random Access Memory)',
      dist: ['ROM (Read Only Memory)', 'Hard Disk Drive (HDD)', 'Optical DVD-ROM'],
      exp: 'RAM is high-speed temporary memory that loses all stored contents when power is switched off.'
    },
    {
      title: 'Algorithms, Scratch & Python',
      qGen: (g, i) => `In programming (Python/Scratch), which control structure repeatedly executes a block of instructions while a condition is true?`,
      ans: 'While Loop',
      dist: ['Variable Declaration', 'Print Statement', 'Comments Header'],
      exp: 'A While loop executes its code block iteratively as long as the test condition remains true.'
    },
    {
      title: 'Cybersecurity & Networks',
      qGen: (g, i) => `What type of malware disguises itself as legitimate or harmless software to deceive users into installing it?`,
      ans: 'Trojan Horse',
      dist: ['Firewall Rule', 'Optical Scanner Driver', 'Ethernet Switch'],
      exp: 'Trojan Horse malware masquerades as useful software to breach system security and grant unauthorized backdoor access.'
    },
    {
      title: 'Achievers Cyber HOTS',
      isHots: true,
      qGen: (g, i) => `Which cryptographic method uses mathematically linked pairs of asymmetric keys (a public key and a private key)?`,
      ans: 'Public-Key Cryptography (RSA)',
      dist: ['Single XOR Cipher', 'Base64 Text Encoding', 'Caesar Shift Method'],
      exp: 'Public-key asymmetric cryptography (e.g. RSA) uses a public key to encrypt data and a private key to decrypt it.'
    }
  ],
  IEO: [
    {
      title: 'Grammar & Subject-Verb Agreement',
      qGen: (g, i) => `Choose the grammatically correct sentence with proper subject-verb concord:`,
      ans: 'Each of the participants was awarded a certificate.',
      dist: ['Each of the participants were awarded a certificate.', 'Each of the participants are awarded a certificate.', 'Each of the participants have awarded a certificate.'],
      exp: '"Each" is a distributive singular pronoun and requires the singular verb "was".'
    },
    {
      title: 'Vocabulary & Antonyms/Synonyms',
      qGen: (g, i) => `What is the exact antonym of the word "METICULOUS"?`,
      ans: 'Careless',
      dist: ['Thorough', 'Diligent', 'Precise'],
      exp: 'Meticulous means showing extreme care and precision; careless is the exact antonym.'
    },
    {
      title: 'Tenses & Active/Passive Voice',
      qGen: (g, i) => `Convert into passive voice: "The architect designed an eco-friendly solar skyscraper."`,
      ans: 'An eco-friendly solar skyscraper was designed by the architect.',
      dist: ['An eco-friendly solar skyscraper is designed by the architect.', 'The architect was designed by an eco-friendly skyscraper.', 'An eco-friendly skyscraper has been designing.'],
      exp: 'In simple past passive voice: Subject + was/were + V3 (designed) + by + agent.'
    },
    {
      title: 'Achievers English HOTS',
      isHots: true,
      qGen: (g, i) => `Identify the rhetorical figurative device in: "The roaring engine whispered a soft warning as night fell."`,
      ans: 'Personification & Oxymoron',
      dist: ['Hyperbole only', 'Alliteration only', 'Irony without figurative meaning'],
      exp: 'Attributing human traits like "whispering" to an engine is personification, while pairing "roaring" with "whispered soft" creates an oxymoron.'
    }
  ],
  IGKO: [
    {
      title: 'World Heritage & Geography',
      qGen: (g, i) => `Which iconic ancient monument was constructed by Emperor Shah Jahan on the banks of the Yamuna River in Agra?`,
      ans: 'Taj Mahal',
      dist: ['Qutub Minar', 'Red Fort', 'Hawa Mahal'],
      exp: 'The Taj Mahal was commissioned by Mughal Emperor Shah Jahan in 1632 in Agra.'
    },
    {
      title: 'Space Science & Missions',
      qGen: (g, i) => `What was the official name of the robotic lunar rover deployed by ISRO Chandrayaan-3 on the Moon surface?`,
      ans: 'Pragyan Rover',
      dist: ['Vikram Lander', 'Pushpak Shuttle', 'Aditya Sensor'],
      exp: 'The Pragyan rover was deployed by the Vikram lander to conduct chemical experiments on lunar surface soil.'
    },
    {
      title: 'Sports, Nobels & Discoveries',
      qGen: (g, i) => `Which prestigious international sports championship awards the coveted "Webb Ellis Cup"?`,
      ans: 'Rugby World Cup',
      dist: ['FIFA Football World Cup', 'ICC Cricket World Cup', 'Wimbledon Tennis'],
      exp: 'The Webb Ellis Cup is presented to the winning nation of the Men Rugby World Cup.'
    },
    {
      title: 'Achievers GK HOTS',
      isHots: true,
      qGen: (g, i) => `Which international judicial organ located in The Hague, Netherlands adjudicates legal disputes between sovereign States?`,
      ans: 'International Court of Justice (ICJ)',
      dist: ['International Monetary Fund', 'World Trade Organization', 'United Nations Security Council'],
      exp: 'The International Court of Justice (ICJ) is the principal judicial organ of the UN at The Hague.'
    }
  ],
  ISSO: [
    {
      title: 'Ancient Civilizations & Archaeology',
      qGen: (g, i) => `The famous Great Granary and advanced grid-pattern town drainage system were excavated in which Harappan city?`,
      ans: 'Mohenjo-daro & Harappa',
      dist: ['Pataliputra', 'Taxila', 'Ujjain'],
      exp: 'Indus Valley civilization cities like Mohenjo-daro and Harappa featured brick-lined sewers and urban town planning.'
    },
    {
      title: 'Geography, Atmosphere & Earth',
      qGen: (g, i) => `Which layer of the atmosphere contains almost all atmospheric water vapor and weather phenomena like rain and clouds?`,
      ans: 'Troposphere',
      dist: ['Stratosphere', 'Mesosphere', 'Thermosphere'],
      exp: 'The Troposphere is the lowest atmospheric layer containing 75% of atmospheric mass and weather systems.'
    },
    {
      title: 'Indian Constitution & Civics',
      qGen: (g, i) => `The fundamental principle of "Universal Adult Suffrage" in the Indian Constitution guarantees:`,
      ans: 'Every adult citizen right to vote regardless of caste, gender or wealth',
      dist: ['Free higher education for all citizens', 'Right to hold public rallies without permits', 'Lifetime pension for government workers'],
      exp: 'Universal Adult Suffrage guarantees voting rights to all adult citizens without discrimination.'
    },
    {
      title: 'Achievers Social Studies HOTS',
      isHots: true,
      qGen: (g, i) => `The historic "Dandi March" led by Mahatma Gandhi in March 1930 was undertaken to protest against:`,
      ans: 'The British salt tax and state monopoly on salt production',
      dist: ['The Rowlatt Act', 'The Partition of Bengal', 'The Simon Commission without Indian members'],
      exp: 'Gandhiji marched 240 miles to Dandi to produce salt from seawater in defiance of the British salt monopoly.'
    }
  ]
};

grades.forEach(g => {
  examSubjects.forEach(examId => {
    const templates = topicBanks[examId];
    templates.forEach((tmpl, tIdx) => {
      for (let subIdx = 0; subIdx < 3; subIdx++) {
        const uniqueId = `q-${examId.toLowerCase()}-g${g}-${tIdx * 3 + subIdx + 1}`;
        let questionText = '';
        let options = [];
        let correctOptionIndex = 1;
        let explanation = '';
        let latexFormula = undefined;

        if (examId === 'IMO') {
          const val = tmpl.calc(g, subIdx);
          questionText = `[Grade ${g} IMO ${tmpl.title}] ${tmpl.qGen(g, subIdx)}`;
          options = [`${val - 12}`, `${val}`, `${val + 8}`, `${val + 16}`];
          correctOptionIndex = 1;
          explanation = tmpl.exp(g, subIdx);
        } else {
          questionText = `[Grade ${g} ${examId} ${tmpl.title}] ${tmpl.qGen(g, subIdx)}`;
          options = [tmpl.dist[0], tmpl.ans, tmpl.dist[1], tmpl.dist[2]];
          correctOptionIndex = 1;
          explanation = tmpl.exp;
        }

        distinctQuestions.push({
          id: uniqueId,
          examId,
          grade: g,
          chapter: tmpl.title,
          section: tmpl.isHots ? 'achievers' : (tIdx % 3 === 0 ? 'subject' : (tIdx % 3 === 1 ? 'logical' : 'everyday')),
          questionText,
          latexFormula,
          options,
          correctOptionIndex,
          explanation,
          hints: [
            `Identify the core ${examId} topic: ${tmpl.title}.`,
            `Apply step-by-step reasoning.`,
            `Double check your chosen option.`
          ],
          difficulty: tmpl.isHots ? 'Achiever' : 'Intermediate',
          marks: tmpl.isHots ? 2 : 1,
          isLevel2: tmpl.isHots || false
        });
      }
    });
  });
});

const out = `import { Question } from '../types/olympiad';

export const QUESTION_BANK: Question[] = ${JSON.stringify(distinctQuestions, null, 2)};
`;

fs.writeFileSync('src/data/questionBank.ts', out, 'utf8');
console.log('src/data/questionBank.ts rebuilt successfully with ' + distinctQuestions.length + ' strictly subject-segregated questions!');
