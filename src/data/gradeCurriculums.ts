import { GradeLevel } from '../types/olympiad';

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

export const GRADE_CURRICULUMS: Record<GradeLevel, GradeCurriculum> = {
  "1": {
    "grade": 1,
    "title": "Grade 1: Little Stars Explorer",
    "subtitle": "Fun visual puzzles, counting adventures, picture science & phonics",
    "ageGroup": "5 - 7 Years",
    "difficultyNote": "Visual cues, picture counting, basic patterns, and everyday words.",
    "recommendedTimeDaily": "20 - 30 mins",
    "characterAvatar": "🌟",
    "themeColor": "from-amber-400 to-orange-500",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g1-imo-1",
            "name": "Grade 1 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-imo-2",
            "name": "Grade 1 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-imo-3",
            "name": "Grade 1 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-imo-4",
            "name": "Grade 1 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 22
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g1-iso-1",
            "name": "Grade 1 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-iso-2",
            "name": "Grade 1 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-iso-3",
            "name": "Grade 1 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 22
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g1-icso-1",
            "name": "Grade 1 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-icso-2",
            "name": "Grade 1 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-icso-3",
            "name": "Grade 1 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 22
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g1-ieo-1",
            "name": "Grade 1 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-ieo-2",
            "name": "Grade 1 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-ieo-3",
            "name": "Grade 1 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 22
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g1-igko-1",
            "name": "Grade 1 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-igko-2",
            "name": "Grade 1 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 22
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g1-isso-1",
            "name": "Grade 1 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 22
          },
          {
            "id": "g1-isso-2",
            "name": "Grade 1 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 22
          }
        ]
      }
    ]
  },
  "2": {
    "grade": 2,
    "title": "Grade 2: Junior Olympiad Cadet",
    "subtitle": "3-digit numbers, animal habitats, spelling challenges & world facts",
    "ageGroup": "6 - 8 Years",
    "difficultyNote": "Pattern sequences, introductory multiplication, and reading speed.",
    "recommendedTimeDaily": "30 - 45 mins",
    "characterAvatar": "🚀",
    "themeColor": "from-blue-500 to-indigo-600",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g2-imo-1",
            "name": "Grade 2 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-imo-2",
            "name": "Grade 2 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-imo-3",
            "name": "Grade 2 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-imo-4",
            "name": "Grade 2 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 24
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g2-iso-1",
            "name": "Grade 2 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-iso-2",
            "name": "Grade 2 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-iso-3",
            "name": "Grade 2 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 24
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g2-icso-1",
            "name": "Grade 2 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-icso-2",
            "name": "Grade 2 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-icso-3",
            "name": "Grade 2 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 24
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g2-ieo-1",
            "name": "Grade 2 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-ieo-2",
            "name": "Grade 2 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-ieo-3",
            "name": "Grade 2 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 24
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g2-igko-1",
            "name": "Grade 2 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-igko-2",
            "name": "Grade 2 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 24
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g2-isso-1",
            "name": "Grade 2 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 24
          },
          {
            "id": "g2-isso-2",
            "name": "Grade 2 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 24
          }
        ]
      }
    ]
  },
  "3": {
    "grade": 3,
    "title": "Grade 3: Olympiad Pathfinder",
    "subtitle": "Fractions, energy forces, algorithms, grammar mechanics & world geography",
    "ageGroup": "7 - 9 Years",
    "difficultyNote": "Coding-decoding, embedded figures, and word problem multi-steps.",
    "recommendedTimeDaily": "35 - 50 mins",
    "characterAvatar": "🪐",
    "themeColor": "from-emerald-500 to-teal-600",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g3-imo-1",
            "name": "Grade 3 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-imo-2",
            "name": "Grade 3 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-imo-3",
            "name": "Grade 3 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-imo-4",
            "name": "Grade 3 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 26
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g3-iso-1",
            "name": "Grade 3 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-iso-2",
            "name": "Grade 3 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-iso-3",
            "name": "Grade 3 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 26
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g3-icso-1",
            "name": "Grade 3 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-icso-2",
            "name": "Grade 3 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-icso-3",
            "name": "Grade 3 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 26
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g3-ieo-1",
            "name": "Grade 3 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-ieo-2",
            "name": "Grade 3 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-ieo-3",
            "name": "Grade 3 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 26
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g3-igko-1",
            "name": "Grade 3 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-igko-2",
            "name": "Grade 3 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 26
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g3-isso-1",
            "name": "Grade 3 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 26
          },
          {
            "id": "g3-isso-2",
            "name": "Grade 3 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 26
          }
        ]
      }
    ]
  },
  "4": {
    "grade": 4,
    "title": "Grade 4: Olympiad Champion Challenger",
    "subtitle": "Factors & multiples, ecosystem web, coding logic, grammar mastery & civics",
    "ageGroup": "8 - 10 Years",
    "difficultyNote": "Factors, Multiples, Area & Perimeter, HOTS Achievers section.",
    "recommendedTimeDaily": "45 - 60 mins",
    "characterAvatar": "🛸",
    "themeColor": "from-purple-500 to-indigo-600",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g4-imo-1",
            "name": "Grade 4 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-imo-2",
            "name": "Grade 4 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-imo-3",
            "name": "Grade 4 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-imo-4",
            "name": "Grade 4 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 28
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g4-iso-1",
            "name": "Grade 4 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-iso-2",
            "name": "Grade 4 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-iso-3",
            "name": "Grade 4 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 28
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g4-icso-1",
            "name": "Grade 4 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-icso-2",
            "name": "Grade 4 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-icso-3",
            "name": "Grade 4 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 28
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g4-ieo-1",
            "name": "Grade 4 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-ieo-2",
            "name": "Grade 4 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-ieo-3",
            "name": "Grade 4 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 28
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g4-igko-1",
            "name": "Grade 4 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-igko-2",
            "name": "Grade 4 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 28
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g4-isso-1",
            "name": "Grade 4 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 28
          },
          {
            "id": "g4-isso-2",
            "name": "Grade 4 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 28
          }
        ]
      }
    ]
  },
  "5": {
    "grade": 5,
    "title": "Grade 5: Master Olympiad Strategist",
    "subtitle": "Decimals, algebraic thinking, cells & human physiology, Python intro & modern world",
    "ageGroup": "9 - 11 Years",
    "difficultyNote": "50 Questions / 60 Marks SOF format. Speed and multi-step accuracy.",
    "recommendedTimeDaily": "50 - 70 mins",
    "characterAvatar": "🛰️",
    "themeColor": "from-cyan-500 to-blue-600",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g5-imo-1",
            "name": "Grade 5 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-imo-2",
            "name": "Grade 5 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-imo-3",
            "name": "Grade 5 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-imo-4",
            "name": "Grade 5 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 30
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g5-iso-1",
            "name": "Grade 5 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-iso-2",
            "name": "Grade 5 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-iso-3",
            "name": "Grade 5 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 30
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g5-icso-1",
            "name": "Grade 5 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-icso-2",
            "name": "Grade 5 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-icso-3",
            "name": "Grade 5 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 30
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g5-ieo-1",
            "name": "Grade 5 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-ieo-2",
            "name": "Grade 5 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-ieo-3",
            "name": "Grade 5 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 30
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g5-igko-1",
            "name": "Grade 5 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-igko-2",
            "name": "Grade 5 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 30
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g5-isso-1",
            "name": "Grade 5 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 30
          },
          {
            "id": "g5-isso-2",
            "name": "Grade 5 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 30
          }
        ]
      }
    ]
  },
  "6": {
    "grade": 6,
    "title": "Grade 6: Senior Olympiad Scholar",
    "subtitle": "Integers, algebra intro, physics motions, electricity, Python & world heritage",
    "ageGroup": "10 - 12 Years",
    "difficultyNote": "50 Questions Olympiad syllabus with in-depth Achievers Section.",
    "recommendedTimeDaily": "60 - 80 mins",
    "characterAvatar": "🌌",
    "themeColor": "from-blue-600 to-violet-700",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g6-imo-1",
            "name": "Grade 6 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-imo-2",
            "name": "Grade 6 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-imo-3",
            "name": "Grade 6 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-imo-4",
            "name": "Grade 6 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 32
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g6-iso-1",
            "name": "Grade 6 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-iso-2",
            "name": "Grade 6 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-iso-3",
            "name": "Grade 6 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 32
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g6-icso-1",
            "name": "Grade 6 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-icso-2",
            "name": "Grade 6 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-icso-3",
            "name": "Grade 6 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 32
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g6-ieo-1",
            "name": "Grade 6 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-ieo-2",
            "name": "Grade 6 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-ieo-3",
            "name": "Grade 6 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 32
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g6-igko-1",
            "name": "Grade 6 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-igko-2",
            "name": "Grade 6 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 32
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g6-isso-1",
            "name": "Grade 6 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 32
          },
          {
            "id": "g6-isso-2",
            "name": "Grade 6 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 32
          }
        ]
      }
    ]
  },
  "7": {
    "grade": 7,
    "title": "Grade 7: High-Order Thinker",
    "subtitle": "Rational numbers, algebraic identities, heat & thermodynamics, acids & bases, Python",
    "ageGroup": "11 - 13 Years",
    "difficultyNote": "Advanced HOTS questions with multi-concept combinations.",
    "recommendedTimeDaily": "60 - 90 mins",
    "characterAvatar": "☄️",
    "themeColor": "from-indigo-600 to-purple-800",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g7-imo-1",
            "name": "Grade 7 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-imo-2",
            "name": "Grade 7 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-imo-3",
            "name": "Grade 7 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-imo-4",
            "name": "Grade 7 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 34
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g7-iso-1",
            "name": "Grade 7 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-iso-2",
            "name": "Grade 7 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-iso-3",
            "name": "Grade 7 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 34
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g7-icso-1",
            "name": "Grade 7 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-icso-2",
            "name": "Grade 7 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-icso-3",
            "name": "Grade 7 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 34
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g7-ieo-1",
            "name": "Grade 7 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-ieo-2",
            "name": "Grade 7 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-ieo-3",
            "name": "Grade 7 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 34
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g7-igko-1",
            "name": "Grade 7 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-igko-2",
            "name": "Grade 7 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 34
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g7-isso-1",
            "name": "Grade 7 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 34
          },
          {
            "id": "g7-isso-2",
            "name": "Grade 7 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 34
          }
        ]
      }
    ]
  },
  "8": {
    "grade": 8,
    "title": "Grade 8: Grand Olympiad Challenger",
    "subtitle": "Square roots, polynomials, force & pressure, sound & light, Python & civics",
    "ageGroup": "12 - 14 Years",
    "difficultyNote": "National & international standard. Level 2 qualifying focus.",
    "recommendedTimeDaily": "60 - 90 mins",
    "characterAvatar": "🌟",
    "themeColor": "from-purple-600 to-pink-600",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g8-imo-1",
            "name": "Grade 8 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-imo-2",
            "name": "Grade 8 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-imo-3",
            "name": "Grade 8 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-imo-4",
            "name": "Grade 8 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 36
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g8-iso-1",
            "name": "Grade 8 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-iso-2",
            "name": "Grade 8 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-iso-3",
            "name": "Grade 8 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 36
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g8-icso-1",
            "name": "Grade 8 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-icso-2",
            "name": "Grade 8 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-icso-3",
            "name": "Grade 8 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 36
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g8-ieo-1",
            "name": "Grade 8 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-ieo-2",
            "name": "Grade 8 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-ieo-3",
            "name": "Grade 8 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 36
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g8-igko-1",
            "name": "Grade 8 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-igko-2",
            "name": "Grade 8 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 36
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g8-isso-1",
            "name": "Grade 8 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 36
          },
          {
            "id": "g8-isso-2",
            "name": "Grade 8 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 36
          }
        ]
      }
    ]
  },
  "9": {
    "grade": 9,
    "title": "Grade 9: Elite Olympiad Master",
    "subtitle": "Polynomials, Euclidean geometry, kinematics & dynamics, chemical bonds, Python OOP",
    "ageGroup": "13 - 15 Years",
    "difficultyNote": "Rigorous high-tier Olympiad curriculum for SOF Level 2 and medals.",
    "recommendedTimeDaily": "75 - 100 mins",
    "characterAvatar": "⚡",
    "themeColor": "from-pink-600 to-rose-600",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g9-imo-1",
            "name": "Grade 9 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-imo-2",
            "name": "Grade 9 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-imo-3",
            "name": "Grade 9 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-imo-4",
            "name": "Grade 9 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 38
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g9-iso-1",
            "name": "Grade 9 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-iso-2",
            "name": "Grade 9 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-iso-3",
            "name": "Grade 9 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 38
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g9-icso-1",
            "name": "Grade 9 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-icso-2",
            "name": "Grade 9 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-icso-3",
            "name": "Grade 9 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 38
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g9-ieo-1",
            "name": "Grade 9 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-ieo-2",
            "name": "Grade 9 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-ieo-3",
            "name": "Grade 9 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 38
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g9-igko-1",
            "name": "Grade 9 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-igko-2",
            "name": "Grade 9 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 38
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g9-isso-1",
            "name": "Grade 9 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 38
          },
          {
            "id": "g9-isso-2",
            "name": "Grade 9 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 38
          }
        ]
      }
    ]
  },
  "10": {
    "grade": 10,
    "title": "Grade 10: Grandmaster Olympiad Elite",
    "subtitle": "Trigonometry, quadratic equations, optics & electromagnetism, organic chemistry, AI",
    "ageGroup": "14 - 16 Years",
    "difficultyNote": "Highest standard SOF Olympiad mastery and national ranks.",
    "recommendedTimeDaily": "90 - 120 mins",
    "characterAvatar": "👑",
    "themeColor": "from-amber-500 via-rose-500 to-purple-600",
    "subjects": [
      {
        "examId": "IMO",
        "chapters": [
          {
            "id": "g10-imo-1",
            "name": "Grade 10 Number System & Arithmetic",
            "subjectId": "IMO",
            "icon": "🔢",
            "keyConcepts": [
              "Number Properties",
              "Computation Speed",
              "Rounding & Estimation"
            ],
            "olympiadTips": "Master mental math tricks to save time!",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-imo-2",
            "name": "Grade 10 Geometry, Mensuration & Shapes",
            "subjectId": "IMO",
            "icon": "📐",
            "keyConcepts": [
              "Geometric Shapes",
              "Perimeter & Area Formulas",
              "Angles & Theorems"
            ],
            "olympiadTips": "Draw rough diagrams to visualize spatial relations.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-imo-3",
            "name": "Grade 10 Algebra, Fractions & Percentages",
            "subjectId": "IMO",
            "icon": "📊",
            "keyConcepts": [
              "Variable Manipulation",
              "Ratio & Proportion",
              "Percentage Applications"
            ],
            "olympiadTips": "Invert operations when isolating variables.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-imo-4",
            "name": "Grade 10 Logical Reasoning & Achiever Puzzles",
            "subjectId": "IMO",
            "icon": "🧩",
            "keyConcepts": [
              "Series & Coding-Decoding",
              "Analogy & Venn Diagrams",
              "HOTS Multi-step Reasoning"
            ],
            "olympiadTips": "Eliminate impossible options first to narrow choices.",
            "estimatedQuestionCount": 40
          }
        ]
      },
      {
        "examId": "ISO",
        "chapters": [
          {
            "id": "g10-iso-1",
            "name": "Grade 10 Living Organisms & Biological Systems",
            "subjectId": "ISO",
            "icon": "🌿",
            "keyConcepts": [
              "Plant & Animal Physiology",
              "Adaptations & Habitats",
              "Cell Structure & Organelles"
            ],
            "olympiadTips": "Remember: Producers are the base of all food pyramids.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-iso-2",
            "name": "Grade 10 Matter, Materials & Chemical Reactions",
            "subjectId": "ISO",
            "icon": "🧪",
            "keyConcepts": [
              "States of Matter",
              "Physical vs Chemical Changes",
              "Acids, Bases & Elements"
            ],
            "olympiadTips": "Check whether a reaction can be reversed to identify chemical change.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-iso-3",
            "name": "Grade 10 Forces, Energy, Motion & Space",
            "subjectId": "ISO",
            "icon": "⚡",
            "keyConcepts": [
              "Laws of Motion",
              "Work, Power & Energy",
              "Electricity, Magnetism & Cosmos"
            ],
            "olympiadTips": "Always check SI units before computing numericals.",
            "estimatedQuestionCount": 40
          }
        ]
      },
      {
        "examId": "ICSO",
        "chapters": [
          {
            "id": "g10-icso-1",
            "name": "Grade 10 Computer Hardware, OS & Storage",
            "subjectId": "ICSO",
            "icon": "🖥️",
            "keyConcepts": [
              "CPU Architecture",
              "RAM vs ROM & Storage Units",
              "Operating System Fundamentals"
            ],
            "olympiadTips": "1 Byte = 8 Bits, 1 KB = 1024 Bytes.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-icso-2",
            "name": "Grade 10 Algorithms, Logic & Programming",
            "subjectId": "ICSO",
            "icon": "💻",
            "keyConcepts": [
              "Flowcharts & Pseudo-code",
              "Scratch/Python Control Flow",
              "Variables, Loops & Conditions"
            ],
            "olympiadTips": "Trace variables step-by-step in execution tables.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-icso-3",
            "name": "Grade 10 Networks, Cyber Security & AI",
            "subjectId": "ICSO",
            "icon": "🌐",
            "keyConcepts": [
              "Internet Protocols & LAN/WAN",
              "Cyber Hygiene & Phishing",
              "AI & Machine Learning Trends"
            ],
            "olympiadTips": "Strong passwords use alphanumeric symbols and never share OTPs.",
            "estimatedQuestionCount": 40
          }
        ]
      },
      {
        "examId": "IEO",
        "chapters": [
          {
            "id": "g10-ieo-1",
            "name": "Grade 10 Word & Structure Knowledge (Grammar)",
            "subjectId": "IEO",
            "icon": "✍️",
            "keyConcepts": [
              "Tenses & Verb Agreement",
              "Prepositions & Conjunctions",
              "Active/Passive Voice & Clauses"
            ],
            "olympiadTips": "Singular subjects take singular verbs with -s/-es.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-ieo-2",
            "name": "Grade 10 Reading Comprehension & Inferences",
            "subjectId": "IEO",
            "icon": "📖",
            "keyConcepts": [
              "Central Theme Detection",
              "Contextual Vocabulary",
              "Critical Tone & Fact vs Opinion"
            ],
            "olympiadTips": "Read questions first, then scan passage for targeted keywords.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-ieo-3",
            "name": "Grade 10 Spoken & Written Expression & HOTS",
            "subjectId": "IEO",
            "icon": "💡",
            "keyConcepts": [
              "Situational Dialogue",
              "Idioms & Phrasal Verbs",
              "Collocations & Nuances"
            ],
            "olympiadTips": "Identify tone (formal vs informal) to choose the right expression.",
            "estimatedQuestionCount": 40
          }
        ]
      },
      {
        "examId": "IGKO",
        "chapters": [
          {
            "id": "g10-igko-1",
            "name": "Grade 10 World & Indian Heritage, Wonders & Capitals",
            "subjectId": "IGKO",
            "icon": "🌍",
            "keyConcepts": [
              "Monuments & Landmarks",
              "Capitals & Currencies",
              "World Geography & Oceans"
            ],
            "olympiadTips": "Asia is the largest continent in area and population.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-igko-2",
            "name": "Grade 10 Science Discoveries, Space & Current Affairs",
            "subjectId": "IGKO",
            "icon": "🚀",
            "keyConcepts": [
              "Recent Space Missions",
              "Inventions & Nobel Prizes",
              "Global Summits & Leaders"
            ],
            "olympiadTips": "Stay updated with ISRO and NASA flagship missions.",
            "estimatedQuestionCount": 40
          }
        ]
      },
      {
        "examId": "ISSO",
        "chapters": [
          {
            "id": "g10-isso-1",
            "name": "Grade 10 Historical Eras, Civilizations & Empires",
            "subjectId": "ISSO",
            "icon": "📜",
            "keyConcepts": [
              "Ancient Civilizations",
              "Freedom Struggle Milestones",
              "World Heritage & Culture"
            ],
            "olympiadTips": "Construct a chronological timeline for historical events.",
            "estimatedQuestionCount": 40
          },
          {
            "id": "g10-isso-2",
            "name": "Grade 10 Geography, Environment & Governance",
            "subjectId": "ISSO",
            "icon": "🏛️",
            "keyConcepts": [
              "Atmosphere & Landforms",
              "Constitution & Democracy",
              "Local Governance & Civics"
            ],
            "olympiadTips": "Equator divides Earth into Northern and Southern Hemispheres.",
            "estimatedQuestionCount": 40
          }
        ]
      }
    ]
  }
};
