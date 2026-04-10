// ══════ ENGLISH LANGUAGE: Topic Notes (AQA 8700) ══════

const ENGLISH_LANG_DATA = [
  {
    section: '1. Paper 1 Section A: Reading (40 marks)',
    icon: '📖',
    color: '#DC2626',
    topics: [
      {
        ref: 'P1 Q1',
        title: 'Q1 — List/Retrieval (4 marks)',
        points: [
          'Format: "List four things you learn about X from lines 1–15" or "What do we learn about X?"',
          'Marks: 4 marks — one mark per valid point. No analysis required whatsoever',
          'Source: One unseen fiction text (20th or 21st century prose fiction). Directed to specific lines',
          'Task: retrieve EXPLICIT information only — what the text directly states, not what it implies',
          'Method: scan the directed lines, pick out four separate facts/details. Quote or paraphrase both fine',
          'Do NOT: analyse language, infer meaning, or discuss writer\'s methods — you will waste time and marks',
          'Format: bullet points acceptable. Keep each point brief (one clause is enough)',
          'Common pitfall: repeating the same point in different words counts as one mark only',
          'Time: ~5 minutes maximum. This is the fastest question on the paper'
        ],
        tip: 'Q1 is pure retrieval — what does the text DIRECTLY SAY? No technique spotting, no inference. Find four separate facts from the given lines and write them down.',
        example: '"List four things about the journey." Text says: "muddy track", "three hours", "blistered feet", "arrived at dusk." Four points = four marks. Done.'
      },
      {
        ref: 'P1 Q2',
        title: 'Q2 — Language Analysis (8 marks)',
        points: [
          'Format: "How does the writer use language to describe X?" or "How does the writer create tension/atmosphere/mood in lines X–Y?"',
          'Marks: 8 marks. Assesses AO2 — understanding of language choices and their effects',
          'Source: directed to specific lines of the fiction extract',
          'Task: analyse the writer\'s language choices — word choice, imagery, sentence structure, tone — and explain their EFFECT',
          'Structure each point with: technique identified + quote embedded + effect on reader explained',
          'Language features to cover: word choice/connotations, metaphor/simile, personification, listing, repetition, short/fragmented sentences, sensory language',
          'Effect must be specific: not "it makes it interesting" but "it creates unease in the reader because..."',
          'Aim for 3–4 well-developed points. Quality over quantity — one fully explained point beats three surface-level ones',
          'Use subject terminology accurately (e.g., sibilance, semantic field, juxtaposition) but only if you can explain the effect',
          'Do NOT: discuss structure here (that is Q3), do not retell the story, do not just list techniques without effect'
        ],
        tip: 'Q2 wants LANGUAGE analysis. Name the technique, embed a quote, explain the effect. "The writer uses the verb \'clawed\' to suggest desperation, making the reader feel the character\'s panic."',
        example: 'Weak: "The writer uses lots of descriptive language." Strong: "The metaphor \'the fog swallowed the street\' personifies the fog as predatory, creating a threatening atmosphere that unsettles the reader."'
      },
      {
        ref: 'P1 Q3',
        title: 'Q3 — Structure Analysis (8 marks)',
        points: [
          'Format: "How does the writer structure the text to interest you as a reader?" or "How is the text structured to build tension?"',
          'Marks: 8 marks. Assesses AO2 — understanding of structural choices and their effects',
          'Source: the whole fiction extract (not directed to specific lines)',
          'Task: analyse structural decisions — how the text is put together — not language features',
          'Structural features to discuss: openings (how the extract begins, what it establishes), endings (how it closes, any resolution or cliff-hanger), shifts in focus (narrator perspective changes), narrative development (how tension builds/releases), time shifts (flashback, flash-forward), paragraph lengths (short paragraph = emphasis), sentence variety (short for impact, long for complexity)',
          'Zoom in AND out: comment on whole-text structure (how it develops) AND zoom into specific moments (a short paragraph, a sentence fragment)',
          'Use language like: "At the start of the extract... As the text develops... Towards the end..."',
          'Do NOT: analyse language choices here (that is Q2). Avoid commenting on word choice/imagery in Q3',
          'Common pitfall: confusing language and structure. Structure = HOW the text is organised. Language = WHAT words are used',
          'Aim for 3–4 structural points, each with a quote/reference and effect explained'
        ],
        tip: 'Q3 is about STRUCTURE — how the text is built, ordered, paced. Think: beginnings, endings, shifts, pace, paragraph lengths, perspective changes. NOT word choice.',
        example: 'Strong: "The writer opens in medias res — mid-action — immediately immersing the reader. Towards the end, a shift to slow, reflective sentences creates contrast with the earlier urgency, suggesting the character has processed their fear."'
      },
      {
        ref: 'P1 Q4',
        title: 'Q4 — Evaluation / Critical Reading (20 marks)',
        points: [
          'Format: "A student says \'the writer presents X as...\'  To what extent do you agree with this view?" Directed to a section of the text',
          'Marks: 20 marks — the highest-tariff reading question. Assesses AO4',
          'Task: evaluate the extent to which you agree with a given statement. This requires a CRITICAL, PERSONAL response supported by textual evidence',
          'Must: state your personal viewpoint clearly; support with quotes; analyse language for effect; consider both where you agree AND disagree',
          'Structure: agree with evidence, then agree elsewhere, then partially disagree with evidence, then balanced conclusion (or fully agree/disagree with nuance)',
          'Key word: "evaluate" = weigh up, consider extent, don\'t just agree fully or disagree fully. Show critical thinking',
          'Every point needs: your opinion + quote + analysis of language + link to the given statement',
          'AO4 mark scheme bands: simple/limited (1–5), some understanding (6–10), clear understanding (11–15), perceptive/detailed (16–20)',
          'Perceptive responses: develop interpretations beyond the obvious; consider implications; suggest what effect writer intended',
          'Time: ~20 minutes. Write 4–6 well-developed paragraphs. This is where top grades are achieved in reading'
        ],
        tip: 'Q4 needs EVALUATION — agree + disagree with the statement, analyse language throughout. Show you\'re thinking critically. Use phrases like "This supports the view that..." and "However, one could argue..."',
        example: 'Statement: "The writer presents the village as peaceful and safe." Agree: "arrived like coming home" — safe connotations. However disagree: "shadows crept between the houses" — personification of threat undermines safety. Conclusion: peaceful on the surface, but underlying tension.'
      }
    ]
  },
  {
    section: '2. Paper 1 Section B: Writing (40 marks)',
    icon: '✍️',
    color: '#B45309',
    topics: [
      {
        ref: 'P1 Q5',
        title: 'Q5 — Creative Writing (40 marks: 24 content + 16 technical accuracy)',
        points: [
          'Format: choice of two tasks — either (a) descriptive writing prompted by image OR (b) narrative writing with a given title/opening/situation',
          'Marks: 40 total. AO5 Content & Organisation: 24 marks. AO6 Technical Accuracy: 16 marks. Both halves equally important',
          'AO5 (24 marks): communicate clearly and effectively; select vocabulary and techniques for effect; organise information with structural/grammatical features',
          'AO6 (16 marks): correct spelling, punctuation, grammar; varied vocabulary; accurate sentence structures',
          'Recommended length: 450–600 words. Quality matters more than quantity, but very short responses cap at lower marks',
          'PLAN first — 5 minutes minimum. Decide: narrative arc OR descriptive angle, key moments, atmosphere, opening hook, ending',
          'Show, don\'t tell: "He was frightened" = telling. "His hands shook; he pressed himself flat against the wall" = showing',
          'Techniques to include: varied sentence lengths (short for impact), figurative language (metaphor, simile, personification), sensory detail (all five senses), structural devices (in medias res opening, circular structure, cliff-hanger ending)',
          'Ambitious vocabulary: avoid "nice", "good", "bad", "said". Use "exquisite", "unsettling", "austere", "murmured", "hissed"',
          'Paragraph clearly: each paragraph moves the description/narrative forward. Use discourse markers if helpful',
          'Proofread: leave 3–5 minutes at the end. Check spelling, missing words, punctuation. SPaG worth 16 marks'
        ],
        tip: 'Q5 is 40 marks — your biggest opportunity. Plan it. Use techniques. Write vividly. PROOFREAD. Half the marks are for technical accuracy so spelling and punctuation matter enormously.',
        example: 'Descriptive task — image of a railway station at night. Open in medias res: "Steam billowed across the platform, swallowing figures whole." Use senses: sight (pale lamps), sound (screeching brakes), smell (diesel). Short sentence for impact: "Then silence." End reflectively.'
      }
    ]
  },
  {
    section: '3. Paper 2 Section A: Reading (40 marks)',
    icon: '📰',
    color: '#2563EB',
    topics: [
      {
        ref: 'P2 Q1',
        title: 'Q1 — True/False Retrieval (4 marks)',
        points: [
          'Format: "Choose four statements which are TRUE" from a list of eight about Source A',
          'Marks: 4 marks — one mark per correctly identified true statement',
          'Source: Source A only (one of the two non-fiction texts). Directed to the whole source or specific lines',
          'Task: read statements, match to text, tick or identify the four that are accurate',
          'Method: read each statement, locate in the text, verify it is explicitly true',
          'Do NOT: infer or interpret. Statements are either explicitly supported or they are not',
          'Common pitfall: a statement that sounds plausible but is not directly in the text = false',
          'Time: ~5 minutes. Fast question. Move on quickly'
        ],
        tip: 'Q1 Paper 2 is TRUE/FALSE. Go back to the text for each statement. If you cannot find it stated explicitly, it is not true. Do not guess.',
        example: 'Statement: "The writer visited the location in summer." Text says "the long summer days stretched endlessly." This is TRUE — directly supported. Statement: "The writer enjoyed the trip." Text does not say this explicitly — could be FALSE even if implied.'
      },
      {
        ref: 'P2 Q2',
        title: 'Q2 — Summary / Synthesis (8 marks)',
        points: [
          'Format: "You need to refer to Source A and Source B. Use details from BOTH sources. Write a summary of the differences/similarities between X in Source A and Source B"',
          'Marks: 8 marks. Assesses AO1 — selecting and synthesising evidence from both texts',
          'Task: identify and summarise the KEY differences or similarities between both sources on a given topic. Must use BOTH texts',
          'DO NOT: analyse language (that is Q3). This question is about IDEAS not HOW they are expressed',
          'Structure: identify a difference/similarity, quote or paraphrase from Source A, quote or paraphrase from Source B, brief explanation',
          'Balance: reference both sources equally. Spending too long on one source loses marks',
          'Synthesis: don\'t just describe each text separately. COMPARE them: "While Source A suggests... Source B presents a contrasting view..."',
          'Aim for 4–5 well-evidenced comparison points',
          'Common pitfall: analysing language techniques. For Q2, you just need to show you understand WHAT each source says, not HOW it says it'
        ],
        tip: 'Q2 is about IDEAS in BOTH texts. What do they say about the topic differently/similarly? Synthesise — compare them directly. No language analysis needed here.',
        example: 'Topic: "Attitudes to city life." Source A (Victorian): describes city as exciting, full of opportunity ("the streets hummed with possibility"). Source B (modern): portrays city as isolating ("surrounded by millions yet completely alone"). Both discuss city but hold opposing views.'
      },
      {
        ref: 'P2 Q3',
        title: 'Q3 — Language Analysis of One Source (12 marks)',
        points: [
          'Format: "How does the writer of Source A use language to present their views about X?" or "...to influence the reader?"',
          'Marks: 12 marks. Assesses AO2 — language choices and effects',
          'Source: directed to Source A only (or sometimes Source B — check carefully)',
          'Task: analyse HOW the writer uses language to convey their viewpoint or persuade the reader. Same skills as Paper 1 Q2 but higher marks',
          'Techniques in non-fiction/persuasive texts: rhetorical questions, emotive language, direct address ("you"), statistics, anecdote, hyperbole, listing, inclusive language ("we"), imperatives',
          'Structure each point: technique + embedded quote + effect on reader + link to writer\'s purpose',
          'Effect must link to writer\'s viewpoint: "This hyperbole suggests the writer is outraged, positioning the reader to share their anger"',
          'Aim for 4–5 well-developed points. Higher marks (9–12) require perceptive analysis — consider WHY the writer made this choice',
          'Consider tone: angry, calm, humorous, ironic, passionate, detached? What does this reveal about the writer\'s attitude?',
          'Vocabulary choices: "The writer selects the verb \'abandon\' rather than \'leave\' to emphasise..."'
        ],
        tip: 'Q3 Paper 2 = language analysis of non-fiction. Focus on persuasive/rhetorical techniques. Always link to the writer\'s viewpoint/purpose. Embed quotes.',
        example: 'Technique: direct address. Quote: "You must ask yourself." Effect: "By directly addressing the reader, the writer creates a sense of personal responsibility, making it harder to dismiss the argument."'
      },
      {
        ref: 'P2 Q4',
        title: 'Q4 — Compare Writers\' Viewpoints (16 marks)',
        points: [
          'Format: "Compare how the writers of Source A and Source B present their different viewpoints about X. Use evidence from both sources"',
          'Marks: 16 marks. Assesses AO3 — comparing ideas and perspectives across texts',
          'Task: compare HOW (the methods used) both writers present their viewpoints, not just WHAT they think',
          'Must reference: both sources throughout. Each paragraph should compare, not describe one then the other separately',
          'Structure: point of comparison + evidence from Source A (with language analysis) + evidence from Source B (with language analysis) + comparison of effect',
          'Comparison language: "While Source A uses... to convey..., Source B employs... to suggest...", "Both writers... however they differ in..."',
          'Methods to compare: tone, vocabulary choices, structural choices (opening/ending), techniques (rhetorical question vs direct statement), sentence length, use of evidence',
          'Don\'t forget context: Source A may be 19th century — consider how historical context affects language/viewpoint',
          'Aim for 4–5 comparative paragraphs with dual evidence in each',
          'Top marks (13–16) require: perceptive comparison of both WHAT writers think AND HOW they use language to express it'
        ],
        tip: 'Q4 must COMPARE BOTH sources throughout. Don\'t do Source A then Source B — compare them side by side in each paragraph. Analyse METHODS (language, tone, structure) not just ideas.',
        example: 'Strong: "Source A employs formal, measured language (\'extensive research confirms\') to establish credibility, while Source B uses emotive, urgent rhetoric (\'children are dying\') to galvanise the reader into action. Both aim to persuade, but use contrasting registers to do so."'
      }
    ]
  },
  {
    section: '4. Paper 2 Section B: Writing (40 marks)',
    icon: '🗣️',
    color: '#7C3AED',
    topics: [
      {
        ref: 'P2 Q5',
        title: 'Q5 — Transactional / Persuasive Writing (40 marks: 24 content + 16 technical accuracy)',
        points: [
          'Format: a writing task to a specific audience, purpose and form — e.g. "Write a speech arguing that...", "Write a letter to your MP persuading...", "Write a magazine article about..."',
          'Marks: 40 total. AO5 Content & Organisation: 24 marks. AO6 Technical Accuracy: 16 marks',
          'AO5 (24 marks): communicate clearly and effectively for purpose/audience; organise information; use structural/grammatical features',
          'AO6 (16 marks): accurate spelling, punctuation, grammar; varied vocabulary and sentence structures',
          'Form matters: if asked to write a speech, open with direct address ("Ladies and gentlemen..."). Letter needs correct format. Article needs headline/subheadings optional. Know conventions',
          'Audience and purpose: tailor register to audience. Writing to a politician = formal, persuasive. Writing to peers = engaging, slightly informal. Always persuasive/argumentative tone',
          'Structure: introduction (hook + clear stance), body paragraphs (one argument per paragraph with evidence/example), counterargument (acknowledge + refute), conclusion (restate stance + call to action or memorable close)',
          'Persuasive techniques: AFOREST — Anecdote, Facts, Opinion, Rhetorical questions, Emotive language, Statistics, Triplets (rule of three)',
          'Counter-argument: include and refute opposing views. Shows sophistication and strengthens your position',
          'Vocabulary: formal, ambitious. Avoid passive hedging ("maybe", "perhaps"). Assert your viewpoint confidently',
          'Proofread: 3–5 minutes at the end. SPaG = 16 marks. Correct spelling of key words. Check punctuation'
        ],
        tip: 'Q5 Paper 2 = persuasive/argumentative writing. Know your FORM (speech, letter, article). Make your viewpoint clear from the start. Use AFOREST techniques throughout. Proofread — 16 marks for accuracy.',
        example: 'Task: "Write a speech to your school arguing that social media does more harm than good." Open: "Picture this: a teenager, alone at midnight, scrolling through images of perfect lives." Use rhetorical question, statistics, emotive language. Counterargument: "Some claim social media connects us. But connection requires presence, not a screen."'
      }
    ]
  },
  {
    section: '5. Spoken Language Endorsement',
    icon: '🎤',
    color: '#059669',
    topics: [
      {
        ref: '5.1',
        title: 'Spoken Language: Presentation & Delivery',
        points: [
          'Assessment: teacher-assessed endorsement. Reported as Pass, Merit, or Distinction. Does NOT count towards GCSE grade (0% weighting) but appears on certificate',
          'Format: individual prepared presentation (typically 5–10 minutes), followed by questions from the audience or teacher',
          'AO7 (Spoken language): communicate effectively in a range of contexts, selecting appropriate register',
          'AO8 (Listening and responding): listen and respond appropriately to spoken language, including questions and feedback',
          'AO9 (Standard English): use Standard English where appropriate',
          'Delivery skills assessed: clarity of speech (volume, pace, pronunciation), intonation (vocal variety — avoid monotone), eye contact (engage with audience, not notes), posture and confidence',
          'Content skills: clear structure (introduction, main points, conclusion), relevant supporting evidence, sustained engagement with topic',
          'Standard English: formal vocabulary, correct grammar, no excessive filler words ("um", "like", "basically"). Regional accent is acceptable — clarity is what matters',
          'Responding to questions: listen carefully, answer relevantly, extend your answer with examples, admit uncertainty honestly rather than bluffing',
          'Preparation: practise aloud multiple times. Use cue cards (key prompts only — not a full script to read). Time your presentation. Anticipate likely questions and prepare responses'
        ],
        tip: 'Spoken Language is assessed by your teacher and does not affect your grade — but Distinction shows strong communication skills. Speak clearly, vary your tone, maintain eye contact, use Standard English.',
        example: 'Topic: "Schools should ban smartphones." Structure: 1) Hook ("What if I told you the average teen checks their phone 96 times a day?"), 2) Three arguments with evidence, 3) Counterargument refuted, 4) Conclusion with call to action.'
      }
    ]
  },
  {
    section: '6. Reading & Writing Toolkit',
    icon: '🔤',
    color: '#374151',
    topics: [
      {
        ref: '6.1',
        title: 'Language Techniques & Terminology',
        points: [
          'Simile: comparison using "like" or "as" — "cold as stone", "moved like water". Effect: creates vivid image, often softens/sharpens comparison',
          'Metaphor: direct comparison without "like/as" — "she was a storm", "the city is a jungle". Effect: stronger than simile, merges two concepts',
          'Personification: gives human qualities to non-human things — "the wind howled", "shadows crept". Effect: creates mood, often menacing or sympathetic',
          'Sibilance: repeated "s" sounds — "shadows slipped silently". Effect: soft, sinister, hissing quality',
          'Alliteration: repeated initial consonant sounds — "dark, damp, dripping dungeon". Effect: creates rhythm, emphasis, memorability',
          'Semantic field: group of words related to same topic — "darkness, shadow, night, void" all relate to darkness. Effect: sustained mood or theme',
          'Connotations: associations a word carries beyond its literal meaning — "slender" (elegant), "scrawny" (unhealthy), "skeletal" (disturbing). Choice reveals attitude',
          'Rhetorical question: question not expecting answer — "Is this the world we want to leave our children?" Effect: challenges reader, creates urgency',
          'Anaphora: repetition at the start of successive clauses — "We will fight. We will endure. We will prevail." Effect: builds momentum, emphasises commitment',
          'Juxtaposition: placing contrasting ideas side by side — "the opulent palace shadowed the slum below". Effect: highlights contrast, often implies criticism',
          'Hyperbole: deliberate exaggeration — "I\'ve told you a thousand times." Effect: emphasises emotion, often creates humour or outrage',
          'Irony: saying the opposite of what you mean — "What lovely weather" during a storm. Effect: creates humour or biting criticism'
        ],
        tip: 'Know your techniques BUT always explain their EFFECT. "The writer uses alliteration" earns one mark. "The alliteration \'dead, dark, dank\' creates a relentless oppressive rhythm, making the reader feel trapped" earns full marks.',
        example: 'Weak: "The writer uses personification." Strong: "The personification of the city as a \'breathing beast\' suggests it has its own hunger and will, positioning the narrator as vulnerable prey rather than a citizen."'
      },
      {
        ref: '6.2',
        title: 'PEE Structure & Writing Paragraphs',
        points: [
          'PEE stands for: Point (your interpretation/analysis claim), Evidence (quote from text — embedded in your sentence), Explanation (how evidence supports point + effect on reader)',
          'Point: make a clear analytical claim first. "The writer presents the protagonist as deeply isolated." Don\'t begin with a quote',
          'Evidence: embed quote smoothly in your sentence. "The writer presents isolation through the image of Oliver \'huddled in the corner, invisible to all\'." Do not paste long block quotes',
          'Explanation: explain HOW the evidence creates the effect AND what effect it has on the reader. "The verb \'huddled\' suggests he has made himself small to avoid notice, evoking pathos in the reader."',
          'Zoom in: analyse specific words or phrases within your quote. "The noun \'invisible\' suggests he has ceased to exist socially, not just physically — he is entirely disregarded."',
          'Link back: connect paragraph to the question at end. "This reinforces the idea that the writer presents society\'s indifference to poverty."',
          'Avoid: beginning paragraph with quote, writing "This quote shows...", describing plot, explaining technique without effect',
          'Multiple evidence: can use two pieces of evidence per paragraph if both support the same point',
          'Vary openers: "The writer conveys...", "X is presented as...", "The use of X reveals...", "Through the imagery of X, the writer suggests..."'
        ],
        tip: 'PEE is non-negotiable. Point → Evidence → Explanation. If you only have a quote with no explanation, you are describing not analysing. Analyse EVERY quote you use.',
        example: 'Full PEE: "Dickens presents Victorian poverty as dehumanising [POINT]. Oliver is described as \'no more than a small bundle of rags\' [EVIDENCE]. The reductive noun phrase strips him of personhood, comparing him to rubbish, implying the poor are treated as disposable by society [EXPLANATION]."'
      },
      {
        ref: '6.3',
        title: 'Context: Reading 19th-Century Texts',
        points: [
          'Paper 1 source: 20th or 21st century fiction. Paper 2 has one pre-1900 non-fiction source alongside one modern non-fiction text',
          'Victorian era (1837–1901): class system rigid (upper, middle, working, poor). Industrial Revolution — factories, child labour, urbanisation. Reforms being debated (Education Acts, Factory Acts)',
          'Victorian attitudes: women had fewer rights, expected to be domestic. Poor seen as morally lacking. Social reform movements growing (Dickens, Booth)',
          'Pre-1900 language: more formal, longer sentences, complex vocabulary, passive voice more common. Addressed reader formally',
          'Contextual reading: understanding when a text was written helps explain its attitudes. A 19th-century writer defending Empire would not be seen as problematic in their time',
          'Do NOT drop in context for its own sake — only if it helps explain the text or writer\'s viewpoint',
          'Useful contextual references: Victorian poverty/reform, Empire and colonialism (attitudes), women\'s roles (pre-suffrage), religious influence on society, industrialisation effects'
        ],
        tip: 'Context helps explain WHY a 19th-century writer holds certain views. Only reference context if it helps your analysis — don\'t just describe history.',
        example: 'A 19th-century text praising Empire expansion — contextual note: writing before anti-colonial movements emerged, writer would see expansion as progress. This helps explain the triumphant, uncritical tone.'
      }
    ]
  }
];
