// ══════ SUBJECTS CONFIG ══════
// Maps each subject to its title, exam board, type, and data reference.
// English Literature uses TEXTS (quote flashcards).
// Sciences and Maths use topic notes rendered in the notes view.

const SUBJECTS = {
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

  'maths': {
    title: 'Mathematics',
    sub: 'Edexcel 1MA1 · Higher Tier',
    type: 'notes',
    data: MATHS_DATA
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

  'geography': {
    title: 'Geography',
    sub: 'AQA 8035',
    type: 'notes',
    data: GEO_DATA
  },

  'business': {
    title: 'Business',
    sub: 'OCR J204',
    type: 'notes',
    data: BUSINESS_DATA
  },

  'computer-science': {
    title: 'Computer Science',
    sub: 'OCR J277',
    type: 'notes',
    data: COMP_SCI_DATA
  },

  'english-language': {
    title: 'English Language',
    sub: 'AQA 8700',
    type: 'notes',
    data: ENGLISH_LANG_DATA
  }
};
