// ══════ ENGLISH LANGUAGE: Topic Notes (AQA 8700) ══════

const ENGLISH_LANG_DATA = [
  {
    section: '1. Paper 1: Creative Reading & Writing',
    icon: '📖',
    color: '#DC2626',
    topics: [
      {
        ref: '1.1',
        title: 'Paper 1 Q1: Reading (retrieval & summary)',
        points: [
          'Question type: "What do we learn about X from this section?" OR "Find four things that the character does/thinks/feels"',
          'Marks: typically 4-8 marks. Straightforward comprehension (easiest question)',
          'Task: identify explicit information directly stated in text. No inference required, no analysis needed',
          'Method: scan text systematically, find relevant quotes, explain what they reveal. Must be concise',
          'What NOT to do: don\'t infer (that\'s Q2), don\'t analyse techniques (that\'s Q2/Q3), don\'t discuss writer\'s methods',
          'Evidence: provide quotes/details from text. Each point needs brief explanation (one sentence)',
          'Format: bullet points acceptable, or short sentences. Clear and direct answers',
          'Common mistakes: including inference (wrong question type), too much detail (waste time), not quoting specific evidence',
          'Time management: spend ~8-10 minutes. Retrieve information, don\'t linger. Move on to Q2'
        ],
        tip: 'Q1 is STRAIGHTFORWARD. Just retrieve explicit facts. Don\'t overthink. What does the text directly SAY about this character/situation?',
        example: 'Question: "What do we learn about Sarah\'s appearance?" Text: "Sarah had long red hair and wore a blue dress." Answer: She has long red hair and wears a blue dress. That\'s it!'
      },
      {
        ref: '1.2',
        title: 'Paper 1 Q2: Reading (inference & analysis)',
        points: [
          'Question type: "What does the writer convey/suggest about X?" OR "How does the writer present Y?" OR "What is the effect of...?"',
          'Marks: 8-10 marks. Requires inference and comment on writer\'s methods',
          'Task: infer meaning from evidence, analyse language/structural choices, explain their effect on reader',
          'Inference: read between lines. Example: "He stared at the photograph for hours" → suggests emotional connection/nostalgia/loss',
          'Language analysis: examine word choice (connotations, why that word?), phrases, imagery, tone, mood',
          'Structural analysis: short/long sentences, fragments, punctuation choices, repetition, sentence order',
          'Technique + quote + effect: PEE structure (Point-Evidence-Explanation) mandatory',
          'Effect on reader: doesn\'t just state technique, explains how it makes reader feel/think',
          'Length: 3-5 detailed paragraphs. Quality over quantity (one great analysis beats three weak ones)',
          'Common mistakes: identifying technique without explaining effect, quoting long passages, not explaining WHY writer chose this'
        ],
        tip: 'Q2 DEMANDS ANALYSIS. Don\'t just say "the writer uses a metaphor". Say WHAT the metaphor is, WHY they chose it, and WHAT EFFECT it creates on the reader.',
        example: 'Poor: "The writer uses vivid imagery." Good: "The writer uses the image \'petals scattered like snow\' to suggest fragility and transience, evoking sadness in the reader." Name technique, quote evidence, explain effect.'
      },
      {
        ref: '1.3',
        title: 'Paper 1 Q3: Writing (descriptive or narrative)',
        points: [
          'Question type: "Write a description of..." OR "Continue the story..." OR "Write about a time when..."',
          'Marks: 24 marks (40% of Paper 1). Significant marks available',
          'Task: write 400-600 words of creative, descriptive, or narrative writing',
          'Descriptive writing: paint vivid picture using sensory language (sight, sound, smell, taste, touch). Mood is crucial',
          'Narrative writing: tell engaging story with characters, plot, dialogue, setting. Beginning-middle-end structure',
          'Technique essential: use metaphors, similes, personification, precise vocabulary, varied sentence lengths',
          'Sensory details: instead of "nice day", write "golden sunlight filtered through leaves, warm breeze carried scent of honeysuckle"',
          'Show, don\'t tell: instead of "He was angry", write "His jaw clenched, fists balled, face flushed crimson"',
          'Structure matters: clear beginning (set scene/introduce character), middle (develop action/description), ending (resolution/reflection)',
          'Dialogue (if narrative): breaks up narrative, reveals character, adds realism. Format: new speaker = new line',
          'Vocabulary: ambitious word choices impress examiners. Avoid "nice", "good", "bad" - use "exquisite", "malevolent", "austere"',
          'Spelling/grammar: accuracy matters (20 marks). Proofread. Errors lose marks',
          'Planning essential: spend 5 minutes brainstorming ideas, structure, key phrases before writing'
        ],
        tip: 'Q3 is YOUR CHANCE to show writing ability. Use techniques. Create atmosphere. Choose ambitious vocabulary. Show examiners you can WRITE.',
        example: 'Weak: "The forest was dark." Strong: "Ancient oaks stretched skyward, their gnarled branches intertwining to create a canopy so dense that even midday sunlight could barely penetrate, casting the forest floor into perpetual twilight."'
      },
      {
        ref: '1.4',
        title: 'Paper 1 Q4: Writing (transactional)',
        points: [
          'Question type: "Write a letter/email/article/speech/review about..." OR "Write to persuade/inform/explain"',
          'Marks: 16 marks. Less than Q3, but specific format required',
          'Task: write 200-300 words in specific format (letter, email, article, speech, etc.)',
          'Purpose matters: know whether you\'re persuading, informing, explaining, entertaining. Adjust tone/language accordingly',
          'Audience matters: writing to school headteacher ≠ writing to friend. Register (formality level) changes',
          'Format accuracy: if letter, include correct layout (address, date, salutation "Dear...", sign-off). If speech, address audience directly',
          'Structure: introduction (hook reader, state purpose), main points (develop ideas with evidence/reasons), conclusion (summarise, call to action)',
          'Technique: use persuasive techniques (rhetorical questions, emotive language, statistics, repetition) if persuasive task',
          'Tone: consistency important. Don\'t switch between formal and informal. Match purpose and audience',
          'Vocabulary: appropriate to genre (letter = formal, speech = engaging, article = informative)',
          'Common mistakes: wrong format (email when letter requested), ignoring audience (too casual/formal), no clear purpose',
          'Time management: ~20 minutes. Plan briefly, write clearly, proofread quickly'
        ],
        tip: 'Q4 tests FORM + PURPOSE + AUDIENCE. Know exact format. Match tone to audience. Don\'t just write an essay - write what\'s asked.',
        example: 'If asked to write persuasive letter to council about new cycle lane: include proper letter format, persuasive techniques (rhetorical questions, emotive language), address councillor formally, sign with "Yours faithfully" (formal letter sign-off).'
      }
    ]
  },
  {
    section: '2. Paper 2: Writers\' Viewpoints & Perspectives',
    icon: '✍️',
    color: '#2563EB',
    topics: [
      {
        ref: '2.1',
        title: 'Paper 2 Q1: Reading (retrieval)',
        points: [
          'Question type: "What do we learn about X from both texts?" OR "Find one way that the texts are similar/different"',
          'Marks: 4 marks (only 2 texts, not detailed analysis)',
          'Task: retrieve explicit information from BOTH texts, identify similarities or differences',
          'Method: scan both texts for relevant information. Identify explicit facts (no inference yet)',
          'Both texts required: must reference both texts equally. Don\'t focus on one text only',
          'Evidence: short quotes from both texts supporting your point',
          'Format: 2-3 sentences per point. Concise and clear',
          'Common mistakes: only using one text, inferring (that\'s Q2/Q3), being too detailed',
          'Time management: ~8 minutes total. Retrieve information quickly'
        ],
        tip: 'Q1 is RETRIEVAL from TWO TEXTS. Find what\'s explicitly stated in both. No inference, no analysis, no technique discussion.',
        example: 'Question: "What do both texts reveal about attitudes to technology?" Text A: "Technology has revolutionised communication." Text B: "Modern gadgets have made us isolated." Both texts discuss technology, but with opposing viewpoints.'
      },
      {
        ref: '2.2',
        title: 'Paper 2 Q2: Reading (comparison analysis)',
        points: [
          'Question type: "How do the writers present viewpoints/perspectives on X?" OR "Compare how the texts present..."',
          'Marks: 10 marks. Significant analysis required',
          'Task: analyse HOW writers present viewpoints in BOTH texts. Compare their methods',
          'Comparison essential: can\'t just analyse one text. Must explicitly compare: "Text A uses... whereas Text B uses..."',
          'Methods include: language choices (tone, vocabulary, phrases), structural choices (sentence length, paragraph breaks, openings/closings), techniques (rhetoric, imagery, repetition)',
          'Perspective/viewpoint: what does each writer believe? Don\'t just identify technique, explain what viewpoint it conveys',
          'PEE structure: Point (what viewpoint?), Evidence (quote from both texts), Effect (how does language/structure create this?)',
          'Balance: spend roughly equal time on both texts. Compare consistently',
          'Common mistakes: analysing only one text, not comparing, describing technique without linking to viewpoint',
          'Length: 5-7 detailed paragraphs. Deep analysis, not surface-level observation',
          'Signposting language: "Similarly, both texts...", "In contrast to Text A, Text B...", "While Text A presents... Text B argues..."'
        ],
        tip: 'Q2 COMPARES VIEWPOINTS. Not just "both texts discuss X". Rather: "Text A celebrates technology\'s progress (evidenced by...) while Text B laments human connection lost (shown by...)."',
        example: 'Text A (19th century) celebrates progress: formal tone, optimistic language ("triumph", "advance"). Text B (modern) questions progress: fragmented sentences, sarcastic tone ("so-called progress"). Both discuss technology, but oppose views.'
      },
      {
        ref: '2.3',
        title: 'Paper 2 Q3: Reading (summary/synthesis)',
        points: [
          'Question type: "Summarise what the texts tell us about X" OR "Identify three ways the texts are similar/different"',
          'Marks: 6 marks. Focused retrieval with some synthesis',
          'Task: synthesise information from both texts. Summarise main ideas. Identify patterns/connections',
          'Synthesis: combining ideas from both texts to create bigger picture. Not just listing observations',
          'Similarity/difference: identify patterns. Example: both texts discuss climate change (similar topic), but one blames industry, one blames consumers (different viewpoints)',
          'Summary: condense key points from both texts into 3-4 clear statements',
          'Evidence: support with quotes/references from both texts',
          'Common mistakes: only one text, too much detail (this is summary, not analysis), not synthesising (just listing)',
          'Format: bullet points or short paragraphs. Clear and concise',
          'Time management: ~10 minutes. Retrieve main ideas, synthesise briefly, move on'
        ],
        tip: 'Q3 SUMMARISES and SYNTHESISES. What\'s the big picture? What do both texts together tell us? Find connections.',
        example: 'Both texts discuss education reform. Text A advocates traditional methods (grammar focus, exams). Text B champions progressive methods (creativity focus, project-based). Both seek improvement, but disagree on method.'
      },
      {
        ref: '2.4',
        title: 'Paper 2 Q4: Writing (argumentative/persuasive)',
        points: [
          'Question type: "Write a speech/article/letter arguing that..." OR "Write persuasively about..."',
          'Marks: 24 marks (40% of Paper 2). Highest marks for single response',
          'Task: write 400-600 words arguing a specific position persuasively or argumentatively',
          'Argumentative: present claim with evidence, acknowledge opposing views, refute them. Logic-focused',
          'Persuasive: convince through emotion, appeal to values, call to action. Emotion + logic',
          'Clear thesis: state your position clearly at start. "Technology has transformed education for better." Not wishy-washy',
          'Supporting evidence: facts, statistics, expert opinions, examples. Each paragraph develops one point',
          'Counterargument: acknowledge opposing view ("Some argue technology distracts..."), then refute ("However, evidence shows...").',
          'Technique essential: rhetorical questions ("Do we really want to return to chalkboards?"), repetition, emotive language, lists, inclusive language ("we", "us")',
          'Structure: introduction (hook + thesis), body (3-4 paragraphs with evidence), counterargument (acknowledge alternative view), conclusion (restate thesis + final persuasive push or call to action)',
          'Tone: consistency important. Don\'t become sarcastic mid-argument (unless intentional). Match purpose',
          'Vocabulary: ambitious word choices. Vary sentence length (short for impact, long for complexity)',
          'Spelling/grammar: 20 marks for accuracy. Proofread carefully',
          'Planning: 5 minutes brainstorming ideas, evidence, counterargument before writing'
        ],
        tip: 'Q4 demands ARGUMENTATION or PERSUASION. Not just opinion. Present evidence. Acknowledge alternatives. Strengthen your case by showing you\'ve thought about opposing views.',
        example: 'Thesis: "Social media has damaged mental health in teenagers." Evidence: studies show increased anxiety/depression. Counter: "Social media enables connection." Refute: "Connection online ≠ genuine relationships; lacks non-verbal communication." Conclusion: limit screen time, promote in-person connection.'
      }
    ]
  },
  {
    section: '3. Spoken Language Endorsement',
    icon: '🎤',
    color: '#7C3AED',
    topics: [
      {
        ref: '3.1',
        title: 'Individual Presentation (5-7 minutes)',
        points: [
          'Format: Solo presentation on topic of choice (can be academic or personal interest)',
          'Marks: 50 marks (endorsement = separate, doesn\'t affect A*-C grade but shows communication skill)',
          'Assessment: teacher assesses on content, delivery, communication effectiveness',
          'Content matters: relevant information, logical structure, evidence/examples supporting ideas',
          'Delivery assessment: volume (audible), pace (not rushing, clear diction), intonation (varied, engaging), confidence (eye contact, posture)',
          'Engagement: maintain listener interest through vocal variety, visual aids (optional but effective), direct address to audience',
          'Structure essential: introduction (grab attention, state topic, preview main points), body (3-4 main points with evidence), conclusion (summary, memorable ending)',
          'Visual aids: slides/posters acceptable but not required. If used, support speech, don\'t distract',
          'Language: clear, formal register (not conversational), appropriate vocabulary, no verbal fillers ("um", "like", "you know")',
          'Preparation: practise aloud multiple times. Timing essential - too short/long loses marks. Cue cards allowed (notes, not full script)',
          'Confidence techniques: deep breathing before starting, focus on message not nervousness, imagine friendly audience'
        ],
        tip: 'PRESENTATION assesses communication. Speak clearly, vary tone, maintain eye contact. Don\'t just read notes. ENGAGE your audience.',
        example: 'Topic: Climate change in polar regions. Structure: 1) Hook with statistic ("Polar ice melting 3x faster than 20 years ago"), 2) Causes (greenhouse gases), 3) Effects (habitat loss, rising sea levels), 4) Solutions (renewable energy). Conclusion: call to action (support green policy).'
      },
      {
        ref: '3.2',
        title: 'Responding to Questions (5-7 minutes)',
        points: [
          'Format: Audience asks questions about your presentation (2-3 questions typically)',
          'Assessment: ability to listen, understand questions, respond relevantly and clearly',
          'Active listening: focus fully on questioner, don\'t interrupt, take brief notes if helpful',
          'Understanding: if confused about question, ask for clarification ("Do you mean...?"). Better than guessing',
          'Responding: answer directly and fully. Don\'t ramble. 2-3 sentences per answer usually sufficient',
          'Vocabulary: maintain formal register. Don\'t become casual or defensive',
          'Admitting uncertainty: if unsure of answer, say so honestly ("That\'s a good question I hadn\'t considered. I think..."). Don\'t bluff',
          'Building on points: use questions as opportunity to extend your argument. "That\'s interesting because it relates to my point about..."',
          'Confidence: maintain eye contact with questioner, speak clearly, pause briefly before answering (seems thoughtful, not rushed)',
          'Common mistakes: dismissing questions ("That\'s not important"), becoming defensive, giving irrelevant answers, rambling'
        ],
        tip: 'RESPONDING tests comprehension and communication. Listen carefully. Answer the actual question. Be honest if you don\'t know something.',
        example: 'Questioner: "How would we transition from fossil fuels to renewables without economic collapse?" Answer: "That\'s crucial. My presentation discussed renewable energy growth in countries like Denmark. They transitioned gradually while creating jobs in new sectors. Gradual transition with government investment minimises economic disruption."'
      },
      {
        ref: '3.3',
        title: 'Use of Standard English & Formality',
        points: [
          'Standard English: correct grammar, complete sentences, formal vocabulary. No slang, dialect features, or informal speech',
          'Accent/dialect: acceptable if clear. Examiners assess communication, not accent. Clarity essential',
          'Vocabulary: subject-appropriate terminology. If discussing science, use precise scientific terms. Academic register',
          'Grammar: correct subject-verb agreement, consistent tense, proper sentence structure. One grammatical error won\'t fail you, but patterns suggest poor English',
          'Pronunciation: clear articulation essential. Practice tricky words beforehand if needed',
          'Formality: match presentation context. Academic presentation = formal. Personal interest presentation = still formal (not conversational chat)',
          'Fillers & hesitations: avoid "um", "uh", "like", "you know", "innit". Pause instead if needing thinking time (seems more confident)',
          'Verbal tics: repetitive phrases ("basically", "literally") weaken communication. Vary opening phrases',
          'Non-verbal communication: matches Standard English standard. Posture (stand tall), gestures (purposeful), eye contact (regular), facial expressions (engaged)',
          'Audience awareness: adjust complexity of language to listener understanding. Don\'t use jargon without explaining'
        ],
        tip: 'STANDARD ENGLISH is formal, grammatically correct, clear communication. Not your everyday speech. Think "academic" not "chat with friends".',
        example: 'Informal: "So like, climate change is basically destroying the planet, innit? It\'s caused by us burning stuff and it\'s gonna make everything super bad." Formal: "Climate change results from anthropogenic emissions. These greenhouse gases trap heat, causing catastrophic environmental consequences including ecosystem collapse and human displacement."'
      }
    ]
  },
  {
    section: '4. Reading & Language Analysis Skills',
    icon: '🔤',
    color: '#059669',
    topics: [
      {
        ref: '4.1',
        title: 'Language Analysis Techniques',
        points: [
          'Word choice (diction): why did writer choose THIS word over synonym? Connotations matter. "Slender" vs "scrawny" vs "skeletal" = different impressions. Always ask WHY',
          'Imagery: vivid descriptive language appealing to senses. Simile ("like a tiger"), metaphor ("she is a tiger"), personification ("the trees danced"), oxymoron ("deafening silence")',
          'Tone: writer\'s attitude (formal, sarcastic, angry, sad, hopeful, ironic). Created through word choice, sentence structure, examples chosen',
          'Mood: emotional atmosphere created for reader (tense, peaceful, sinister, joyful). Tone + language create mood',
          'Syntax: sentence structure matters. Short sentences = punchy, dramatic, emphatic. Long sentences = complex, sophisticated, winding. Fragment = stark, dramatic. Questions = engaging',
          'Repetition: repeating words/phrases for emphasis or effect. "We will fight, we will win, we will prevail" = builds momentum, rallies audience',
          'Lists: accumulation of ideas builds effect. Three items common (rule of three). "Flexible hours, free lunch, gym access" = generous benefits',
          'Rhetorical devices: rhetorical question (no answer expected, for effect), pun (wordplay), alliteration (repeated initial sounds), assonance (repeated vowel sounds)',
          'Register: formality level (formal, informal, colloquial). Affects credibility and audience',
          'Perspective: whose viewpoint? First person (I), second person (you), third person (he/she). Affects distance, intimacy, authority'
        ],
        tip: 'ALWAYS identify technique + quote evidence + explain EFFECT on reader. Never just name technique. "The writer uses a metaphor" is incomplete. "The metaphor \'petals scattered like snow\' suggests fragility, evoking sadness" is complete.',
        example: 'Weak analysis: "The writer uses short sentences." Strong analysis: "The writer uses short sentences (\'He stopped. She stared. Time froze.\') to create staccato rhythm mimicking the character\'s shock and panic, making the reader share his disorientation."'
      },
      {
        ref: '4.2',
        title: 'Inference & Interpretation',
        points: [
          'Explicit information: directly stated in text. "The sky was blue." No inference needed',
          'Implicit information: suggested but not stated. "She clutched the rejection letter" → implies emotional distress (not directly said)',
          'Inference: reading between lines, interpreting meaning beyond explicit words. Requires textual evidence, not guessing',
          'Evidence-based: every inference must be supported by quote/detail. "X suggests Y because [quote]"',
          'Connotation: associated meanings. "Stubborn" (negative) vs "determined" (positive) = same concept, different judgments',
          'Context matters: historical context, social context, character context affects interpretation. Victorian attitudes ≠ modern attitudes',
          'Multiple interpretations: some texts allow valid different readings. Accept complexity. Don\'t assume one "right" answer',
          'Avoiding over-interpretation: don\'t read meanings that aren\'t supported. Stick to evidence. "Plausible and supported" is standard',
          'Supporting interpretation: own judgement acceptable if backed by textual evidence. "I think the character is guilty because..." (provide evidence)',
          'Bias awareness: recognise own assumptions. Text might challenge your views. Try to understand writer\'s perspective'
        ],
        tip: 'INFERENCE needs EVIDENCE. Never guess. "X suggests Y" → provide quote supporting this connection. Examiners want thinking based on text, not wild interpretation.',
        example: 'Text: "He stared at her passport, lips tightening." Inference: He\'s concerned about her leaving (suggested by staring + physical response, not directly stated). Evidence: "stared" (intense focus), "lips tightening" (involuntary reaction showing tension).'
      },
      {
        ref: '4.3',
        title: 'PEE Paragraph Structure (Point-Evidence-Explanation)',
        points: [
          'Point: state your interpretation/analysis first. "The writer presents the setting as threatening." Clear, bold statement',
          'Evidence: provide quote or specific textual reference supporting your point. "\'Gnarled branches intertwined like skeletal fingers\'" shows threatening imagery',
          'Explanation: explain HOW the evidence supports your point and WHAT EFFECT it creates. "The simile and personification combine to suggest supernatural evil, frightening the reader."',
          'Full structure: Point sentence + Evidence quote + Explanation of effect. Three separate elements',
          'Multiple evidence: can use 2 pieces of evidence per paragraph if they support same point. Keep explanation clear',
          'Length: one paragraph = one point. Don\'t cram multiple ideas together',
          'Linking: connect to question. "This reinforces that..." or "This demonstrates the writer\'s perspective on..." shows relevance',
          'Conclusion of paragraph: often restate point in context of question. "Thus, the writer conveys the character\'s isolation through..."',
          'Variation: occasionally start Evidence first if more effective, but Point-Evidence-Explanation is most reliable structure'
        ],
        tip: 'PEE is your structure LIFELINE. Point first (what are you claiming?), Evidence second (prove it), Explanation third (why does it matter?). Every paragraph follows this.',
        example: 'Point: "Dickens presents Victorian poverty as dehumanising." Evidence: "Oliver was no more than a small bundle of rags, barely human in appearance." Explanation: "The simile strips Oliver of humanity, suggesting the poor are treated as objects rather than people, critiquing Victorian social indifference."'
      }
    ]
  }
];
