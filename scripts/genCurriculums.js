const fs = require('fs');

const curriculums = {
  1: {
    grade: 1,
    title: 'Grade 1: Little Stars Explorer',
    subtitle: 'Fun visual puzzles, counting adventures, picture science & phonics',
    ageGroup: '5 - 7 Years',
    difficultyNote: 'Focus on visual cues, picture counting, basic patterns, and everyday words.',
    recommendedTimeDaily: '20 - 30 minutes',
    characterAvatar: '🌟',
    themeColor: 'from-amber-400 to-orange-500',
    subjects: [
      {
        examId: 'IMO',
        chapters: [
          { id: 'g1-m1', name: 'Number Sense & Counting (1 to 100)', subjectId: 'IMO', icon: '🔢', keyConcepts: ['Skip counting by 2, 5, 10', 'Before, After, In-between', 'Number names', 'Comparison > < ='], olympiadTips: 'Look for grouping in 10s to count faster!', estimatedQuestionCount: 20 },
          { id: 'g1-m2', name: 'Addition & Subtraction Puzzles', subjectId: 'IMO', icon: '➕', keyConcepts: ['Single & double digit addition', 'Story sums', 'Number bonds', 'Missing addends'], olympiadTips: 'Use fingers or number lines for double checking!', estimatedQuestionCount: 20 },
          { id: 'g1-m3', name: 'Shapes & Spatial Understanding', subjectId: 'IMO', icon: '🔺', keyConcepts: ['2D Shapes: Circle, Triangle, Square, Rectangle', 'Rolling vs Sliding', 'Patterns'], olympiadTips: 'Count corners and straight edges carefully.', estimatedQuestionCount: 15 },
          { id: 'g1-m4', name: 'Money, Time & Measurement', subjectId: 'IMO', icon: '⏰', keyConcepts: ['Coins & currency notes', 'Days of the week', 'Clock reading (O clock)', 'Longer vs Shorter'], olympiadTips: 'Remember: 1 Rupee/Dollar = 100 Cents/Paise.', estimatedQuestionCount: 15 }
        ]
      },
      {
        examId: 'ISO',
        chapters: [
          { id: 'g1-s1', name: 'Living & Non-Living Things', subjectId: 'ISO', icon: '🌱', keyConcepts: ['Traits of living things', 'Food & breathing', 'Growth & movement'], olympiadTips: 'Living things grow and need food; toys do not!', estimatedQuestionCount: 15 },
          { id: 'g1-s2', name: 'Plants & Animals Around Us', subjectId: 'ISO', icon: '🐾', keyConcepts: ['Types of plants (trees, shrubs, herbs)', 'Wild vs Domestic animals', 'Animal sounds & babies'], olympiadTips: 'Herbs have soft green stems; trees have hard trunks.', estimatedQuestionCount: 15 },
          { id: 'g1-s3', name: 'Human Body & Senses', subjectId: 'ISO', icon: '👀', keyConcepts: ['5 Sense organs', 'Body parts', 'Good habits & hygiene'], olympiadTips: 'Skin is the largest sense organ covering our whole body.', estimatedQuestionCount: 15 }
        ]
      },
      {
        examId: 'ICSO',
        chapters: [
          { id: 'g1-c1', name: 'Introduction to Computers', subjectId: 'ICSO', icon: '🖥️', keyConcepts: ['What is a machine?', 'Computer vs other machines', 'Dos and Donts with computers'], olympiadTips: 'A computer never gets tired and never makes mistakes on its own!', estimatedQuestionCount: 15 },
          { id: 'g1-c2', name: 'Parts of a Computer', subjectId: 'ICSO', icon: '🖱️', keyConcepts: ['Monitor, CPU, Keyboard, Mouse', 'Input vs Output simple ideas'], olympiadTips: 'CPU is the brain of the computer!', estimatedQuestionCount: 15 }
        ]
      },
      {
        examId: 'IEO',
        chapters: [
          { id: 'g1-e1', name: 'Alphabet & Word Fun', subjectId: 'IEO', icon: '🔤', keyConcepts: ['Vowels (A, E, I, O, U)', 'Rhyming words', 'Sight words', 'Alphabetical order'], olympiadTips: 'Look for vowel pairs (ea, ee, oo) to sound out new words.', estimatedQuestionCount: 15 },
          { id: 'g1-e2', name: 'Nouns, Pronouns & Articles', subjectId: 'IEO', icon: '📚', keyConcepts: ['Naming words', 'He, She, It, They', 'A and An usage'], olympiadTips: 'Use An before words starting with vowel sounds!', estimatedQuestionCount: 15 }
        ]
      },
      {
        examId: 'IGKO',
        chapters: [
          { id: 'g1-g1', name: 'My Beautiful World & India', subjectId: 'IGKO', icon: '🗺️', keyConcepts: ['National symbols', 'Festivals & celebrations', 'Our helpers'], olympiadTips: 'Peacock is Indias national bird; Tiger is the national animal.', estimatedQuestionCount: 15 },
          { id: 'g1-g2', name: 'Wonders of Nature & Science', subjectId: 'IGKO', icon: '🌈', keyConcepts: ['Sun, Moon & Stars', 'Seasons', 'Healthy food habits'], olympiadTips: 'Rainbow has 7 colors: VIBGYOR!', estimatedQuestionCount: 15 }
        ]
      },
      {
        examId: 'ISSO',
        chapters: [
          { id: 'g1-ss1', name: 'My Family & Neighborhood', subjectId: 'ISSO', icon: '🏡', keyConcepts: ['Nuclear vs Joint family', 'Neighborhood places', 'Road safety rules'], olympiadTips: 'Red means Stop, Yellow means Wait, Green means Go!', estimatedQuestionCount: 15 }
        ]
      }
    ]
  }
};

