// ══════ SUBJECTS CONFIG ══════
// Maps each subject to its title, exam board, type, and data reference.
// English Literature uses TEXTS (quote flashcards).
// Sciences and Maths use topic notes rendered in the notes view.

const SUBJECTS = {
  // ══════ ENGLISH ══════
  'english': {
    title: 'English',
    sub: 'Select exam board',
    type: 'board-selector',
    boards: [
      { id: 'english-aqa', title: 'AQA', icon: '📚', examBoards: [
          { id: 'eng-lit', title: 'English Literature', icon: '🎭', sub: 'AQA 8702', desc: 'Macbeth, An Inspector Calls, A Christmas Carol, Power & Conflict' },
          { id: 'english-language', title: 'English Language', icon: '✍️', sub: 'AQA 8700', desc: 'Language analysis, creative writing' }
        ]
      },
      { id: 'english-edexcel', title: 'Edexcel', icon: '📊', status: 'coming-soon' },
      { id: 'english-ocr', title: 'OCR', icon: '📖', status: 'coming-soon' }
    ]
  },

  'english-aqa': {
    title: 'AQA English',
    sub: 'AQA 8700 & 8702',
    type: 'board-content',
    subjects: [
      { id: 'eng-lit', title: 'English Literature', icon: '🎭', sub: 'AQA 8702' },
      { id: 'english-language', title: 'English Language', icon: '✍️', sub: 'AQA 8700' }
    ]
  },

  // ══════ ENGLISH LITERATURE ══════
  'eng-lit': {
    title: 'English Literature',
    sub: 'AQA 8702',
    type: 'texts',
    texts: ['macbeth', 'aic', 'acc', 'power_conflict'],
    textCards: {
      macbeth: {
        icon: '🗡️',
        cls: 'macbeth',
        title: 'Macbeth',
        desc: 'Quote flashcards · Spaced repetition · Essay checker · Exam mode',
        stats: ['35 quotes', '10 themes', '5 acts']
      },
      aic: {
        icon: '🔍',
        cls: 'aic',
        title: 'An Inspector Calls',
        desc: 'Quote flashcards · Spaced repetition · Essay checker · Exam mode',
        stats: ['25 quotes', '8 themes', '3 acts']
      },
      acc: {
        icon: '👻',
        cls: 'acc',
        title: 'A Christmas Carol',
        desc: 'Quote flashcards · Spaced repetition · Essay checker · Exam mode',
        stats: ['25 quotes', '8 themes', '5 staves']
      },
      power_conflict: {
        icon: '⚔️',
        cls: 'pac',
        title: 'Power & Conflict Poems',
        desc: 'Quote flashcards · Analysis · Comparison prep · 15 poems',
        stats: ['90 quotes', '10 themes', '15 poems']
      }
    },
    extra: []
  },

  // ══════ ENGLISH LANGUAGE ══════
  'english-language': {
    title: 'English Language',
    sub: 'AQA 8700',
    type: 'notes',
    data: ENGLISH_LANG_DATA
  },

  // ══════ MATHS ══════
  'maths': {
    title: 'Mathematics',
    sub: 'Select exam board',
    type: 'board-selector',
    boards: [
      { id: 'maths-edexcel', title: 'Edexcel', icon: '📊', examBoards: [
          { id: 'maths', title: 'Edexcel Mathematics', icon: '📐', sub: 'Edexcel 1MA1 · Higher Tier', desc: 'Algebra to Statistics' }
        ]
      },
      { id: 'maths-aqa', title: 'AQA', icon: '🎓', status: 'coming-soon' },
      { id: 'maths-ocr', title: 'OCR', icon: '📖', status: 'coming-soon' },
      { id: 'maths-wjec', title: 'WJEC', icon: '🏴', status: 'coming-soon' }
    ]
  },

  'maths-edexcel': {
    title: 'Edexcel Mathematics',
    sub: 'Edexcel 1MA1 · Higher Tier',
    type: 'notes',
    data: MATHS_DATA,
    boardId: 'edexcel'
  },

  // ══════ SCIENCES ══════
  'sciences': {
    title: 'Sciences',
    sub: 'Select exam board',
    type: 'board-selector',
    boards: [
      { id: 'sciences-aqa', title: 'AQA', icon: '🎓', examBoards: [
          { id: 'biology', title: 'Biology', icon: '🧬', sub: 'AQA 8461' },
          { id: 'chemistry', title: 'Chemistry', icon: '⚗️', sub: 'AQA 8462' },
          { id: 'physics', title: 'Physics', icon: '⚡', sub: 'AQA 8463' }
        ]
      },
      { id: 'sciences-edexcel', title: 'Edexcel', icon: '📐', examBoards: [
          { id: 'biology-edexcel', title: 'Biology', icon: '🧬', sub: 'Edexcel 1BI0' },
          { id: 'chemistry-edexcel', title: 'Chemistry', icon: '⚗️', sub: 'Edexcel 1CH0' },
          { id: 'physics-edexcel', title: 'Physics', icon: '⚡', sub: 'Edexcel 1PH0' }
        ]
      },
      { id: 'sciences-ocr', title: 'OCR', icon: '📖', status: 'coming-soon' },
      { id: 'sciences-wjec', title: 'WJEC', icon: '🏴', status: 'coming-soon' }
    ]
  },

  'sciences-aqa': {
    title: 'AQA Sciences',
    sub: 'AQA Triple Science',
    type: 'board-content',
    boardId: 'aqa',
    subjects: [
      { id: 'biology', title: 'Biology', icon: '🧬', sub: 'AQA 8461' },
      { id: 'chemistry', title: 'Chemistry', icon: '⚗️', sub: 'AQA 8462' },
      { id: 'physics', title: 'Physics', icon: '⚡', sub: 'AQA 8463' }
    ]
  },

  'sciences-edexcel': {
    title: 'Edexcel Sciences',
    sub: 'Edexcel Triple Science',
    type: 'board-content',
    boardId: 'edexcel',
    subjects: [
      { id: 'biology-edexcel', title: 'Biology', icon: '🧬', sub: 'Edexcel 1BI0' },
      { id: 'chemistry-edexcel', title: 'Chemistry', icon: '⚗️', sub: 'Edexcel 1CH0' },
      { id: 'physics-edexcel', title: 'Physics', icon: '⚡', sub: 'Edexcel 1PH0' }
    ]
  },

  'biology': {
    title: 'Biology',
    sub: 'AQA 8461 · Triple Science',
    type: 'notes',
    data: BIO_DATA
  },

  'chemistry': {
    title: 'Chemistry',
    sub: 'AQA 8462 · Triple Science',
    type: 'notes',
    data: CHEM_DATA
  },

  'physics': {
    title: 'Physics',
    sub: 'AQA 8463 · Triple Science',
    type: 'notes',
    data: PHYS_DATA
  },

  'biology-edexcel': {
    title: 'Biology',
    sub: 'Edexcel 1BI0 · Triple Science',
    type: 'notes',
    data: EDEXCEL_BIO_DATA
  },

  'chemistry-edexcel': {
    title: 'Chemistry',
    sub: 'Edexcel 1CH0 · Triple Science',
    type: 'notes',
    data: EDEXCEL_CHEM_DATA
  },

  'physics-edexcel': {
    title: 'Physics',
    sub: 'Edexcel 1PH0 · Triple Science',
    type: 'notes',
    data: EDEXCEL_PHYS_DATA
  },

  // ══════ GEOGRAPHY ══════
  'geography': {
    title: 'Geography',
    sub: 'Select exam board',
    type: 'board-selector',
    boards: [
      { id: 'geography-aqa', title: 'AQA', icon: '🎓', examBoards: [
          { id: 'geography-aqa-content', title: 'Geography', icon: '🌍', sub: 'AQA 8035', desc: 'Hazards to Environmental Management' }
        ]
      },
      { id: 'geography-edexcel', title: 'Edexcel', icon: '📊', status: 'coming-soon' },
      { id: 'geography-ocr', title: 'OCR', icon: '📖', status: 'coming-soon' },
      { id: 'geography-wjec', title: 'WJEC', icon: '🏴', status: 'coming-soon' }
    ]
  },

  'geography-aqa': {
    title: 'AQA Geography',
    sub: 'AQA 8035',
    type: 'notes',
    data: GEO_DATA,
    boardId: 'aqa'
  },

  // ══════ BUSINESS ══════
  'business': {
    title: 'Business',
    sub: 'Select exam board',
    type: 'board-selector',
    boards: [
      { id: 'business-ocr', title: 'OCR', icon: '📖', examBoards: [
          { id: 'business-ocr-content', title: 'Business', icon: '💼', sub: 'OCR J204', desc: 'Business Activity to Influences' }
        ]
      },
      { id: 'business-aqa', title: 'AQA', icon: '🎓', status: 'coming-soon' },
      { id: 'business-edexcel', title: 'Edexcel', icon: '📊', status: 'coming-soon' },
      { id: 'business-wjec', title: 'WJEC', icon: '🏴', status: 'coming-soon' }
    ]
  },

  'business-ocr': {
    title: 'OCR Business',
    sub: 'OCR J204',
    type: 'notes',
    data: BUSINESS_DATA,
    boardId: 'ocr'
  },

  // ══════ COMPUTER SCIENCE ══════
  'computer-science': {
    title: 'Computer Science',
    sub: 'Select exam board',
    type: 'board-selector',
    boards: [
      { id: 'computer-science-ocr', title: 'OCR', icon: '📖', examBoards: [
          { id: 'computer-science-ocr-content', title: 'Computer Science', icon: '💻', sub: 'OCR J277', desc: 'Architecture to Cyber Security' }
        ]
      },
      { id: 'computer-science-aqa', title: 'AQA', icon: '🎓', status: 'coming-soon' },
      { id: 'computer-science-edexcel', title: 'Edexcel', icon: '📊', status: 'coming-soon' },
      { id: 'computer-science-wjec', title: 'WJEC', icon: '🏴', status: 'coming-soon' }
    ]
  },

  'computer-science-ocr': {
    title: 'OCR Computer Science',
    sub: 'OCR J277',
    type: 'notes',
    data: COMP_SCI_DATA,
    boardId: 'ocr'
  },
};
