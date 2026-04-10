// ══════ ENGLISH LANGUAGE: Topic Notes (AQA 8700) ══════

const ENGLISH_LANG_DATA = [
  {
    section: '1. Reading Comprehension & Analysis',
    icon: '📖',
    color: '#DC2626',
    topics: [
      {
        ref: '1.1',
        title: 'Reading Skills & Inference',
        points: [
          'Explicit information: directly stated in text ("The cat is black")',
          'Implicit information: suggested but not stated ("The cat sat alone on the windowsill" implies loneliness)',
          'Inference: reading between the lines, interpreting meaning. Example: "She stared at the letter for an hour" suggests she\'s nervous/emotional about contents',
          'Evidence: quote from text supporting interpretation. Always include quotes when analysing',
          'Word choice analysis: why did writer choose this word over synonym? Connotations (associated meanings) matter. "Slender" vs "skinny" vs "scrawny" = different impressions',
          'Tone: writer\'s attitude (formal, sarcastic, angry, sad, hopeful). Conveyed through word choice, sentence structure, examples',
          'Purpose: why did writer write this? Inform, persuade, entertain, explain. Audience affects purpose (writing for children ≠ adults)'
        ],
        tip: 'Inference requires EVIDENCE from text. Don\'t guess; always quote. "X suggests Y because..."',
        example: 'Text: "She clutched the job rejection letter, her hands trembling." Inference: nervous/upset about rejection. Evidence: "clutched" (tense grip), "trembling" (physical distress).'
      },
      {
        ref: '1.2',
        title: 'Persuasive & Rhetorical Techniques',
        points: [
          'Rhetoric: art of persuasion. Rhetorical techniques used in speeches, advertising, arguments',
          'Ethos: appeal to credibility. "As a doctor, I recommend..." establishes authority',
          'Pathos: appeal to emotion. Stories, emotive language, imagery. Makes audience care',
          'Logos: appeal to logic. Facts, statistics, reasoning. Convince through evidence',
          'Repetition: repeating phrase for emphasis. "We will fight, we will win, we will prevail"',
          'Rhetorical question: question not expecting answer, for effect. "Do you want to live in a cleaner world?"',
          'Hyperbole: exaggeration for effect. "I\'ve told you a million times"',
          'Lists: building effect through accumulated points. "The company offers flexible hours, free lunches, gym access, and top salary"',
          'Inclusive language: "we", "us", "our" makes audience feel part of group. Unites writer and reader'
        ],
        tip: 'Name the technique, quote evidence, explain EFFECT on reader. "This hyperbole makes the issue seem urgent..."',
        example: 'Advertisement: "Join thousands of satisfied customers" (appeals to safety of numbers). "Clinically proven" (appeals to logic). Emotive image of happy family (pathos).'
      },
      {
        ref: '1.3',
        title: 'Text Structure & Language Features',
        points: [
          'Paragraphing: each paragraph one main idea. Transitions between paragraphs show links',
          'Topic sentence: first sentence of paragraph stating main idea. Supporting sentences develop it',
          'Openings: hook reader immediately (question, shocking stat, story), establish topic, set tone',
          'Closings: summarise main points, call to action, thought-provoking ending, links back to opening',
          'Syntax: sentence structure and word order. Short sentences = punchy, dramatic. Long sentences = complex, sophisticated. Mix creates rhythm',
          'Figurative language: simile ("like a tiger"), metaphor ("she is a tiger"), personification ("the trees danced"), oxymoron ("deafening silence")',
          'Register: formality level. Formal (academic, business), informal (conversational, friendly), colloquial (slang, casual)'
        ],
        tip: 'Structure creates effect. Understand why writer broke sentences/paragraphs that way. Short sentences build tension.',
        example: 'Formal letter: full sentences, complete spelling. Text to friend: "lol how u been?" Short sentences in action scene = fast pace. Long reflective sentences = slow mood.'
      }
    ]
  },
  {
    section: '2. Writing Skills & Composition',
    icon: '✍️',
    color: '#2563EB',
    topics: [
      {
        ref: '2.1',
        title: 'Narrative & Descriptive Writing',
        points: [
          'Narrative: telling a story. Includes setting (where/when), characters (who), plot (what happens), dialogue (character speech)',
          'Show, don\'t tell: instead of "He was angry", write "He slammed the door, his jaw clenched"',
          'Descriptive language: vivid words that appeal to senses (sight, sound, smell, taste, touch). "Icy silence" → cold + quiet',
          'Setting description: establish mood. Gloomy castle (darkness, decay, threatening) vs sunny meadow (hope, peace, freedom)',
          'Character development: reveal character through actions, dialogue, thoughts. Flat characters (unchanging) vs round characters (complex, evolve)',
          'Dialogue: realistic speech, reveals character. Formal character speaks differently than informal. Punctuation: new speaker = new line',
          'Flashback/foreshadowing: flashback reveals past, foreshadowing hints at future. Both add complexity'
        ],
        tip: 'Sensory details make writing vivid. Instead of "the beach", try "the salt-stung air, golden sand, crashing waves".',
        example: 'Tell: "The house was old." Show: "Ivy strangled the walls, paint peeling like dead skin, windows dark as closed eyes." Second version creates mood, dread.'
      },
      {
        ref: '2.2',
        title: 'Persuasive & Argumentative Writing',
        points: [
          'Persuasive: convince reader to agree/do something. Use emotion, appeal to values, call to action',
          'Argumentative: present claim with evidence, counter opposing views. More logical than persuasive',
          'Thesis/claim: main argument stated clearly. "Social media harms mental health in teenagers."',
          'Supporting evidence: facts, statistics, expert opinions, examples. Each paragraph develops one point',
          'Counterargument: acknowledge opposing view ("Some argue social media builds connections"), then refute it ("However, evidence shows..."). Makes argument stronger',
          'Conclusion: restate thesis, summarise main points, final persuasive push or call to action',
          'Bias awareness: recognise own biases, present opposing views fairly (even if disagreeing). Strengthen argument by showing you\'ve considered alternatives'
        ],
        tip: 'Strongest arguments acknowledge opposing views, then explain why their point is weaker. Shows critical thinking.',
        example: 'Claim: "School uniforms improve focus." Support: studies show fewer distractions. Counter: "Some say uniforms stifle creativity." Refute: "But dress codes exist in creative fields (fashion, film) and don\'t prevent innovation."'
      },
      {
        ref: '2.3',
        title: 'Clarity, Accuracy & Proofreading',
        points: [
          'Clarity: write so reader understands easily. Avoid jargon, keep sentences clear, define technical terms',
          'Grammar: correct sentence structure, verb agreement, tense consistency. "She go" (wrong) vs "She goes" (right)',
          'Spelling: check dictionary for uncertain words. Common mistakes: there/their/they\'re, to/too/two, your/you\'re',
          'Punctuation: period/full stop (ends sentence), comma (breaks clause), semicolon (separates independent clauses), apostrophe (possession/contraction)',
          'Proofreading: read aloud to catch awkward phrasing, check spelling/grammar, verify facts. Read multiple times for different things',
          'Word choice: use precise words. "Walk" vs "trudge" vs "saunter" = different impressions. Vary vocabulary, avoid repetition',
          'Sentence variety: mix simple (one clause), compound (two independent clauses), complex (independent + dependent clause) sentences'
        ],
        tip: 'Proofread late in process. Early drafting: focus on ideas. Once draft solid, fix mechanics. Read aloud — ears catch what eyes miss.',
        example: 'Error: "Their going to the concert over their." Fix: "They\'re going to the concert over there." Homophones trap writers, but context helps check.'
      }
    ]
  },
  {
    section: '3. Grammar & Language Mechanics',
    icon: '🔤',
    color: '#059669',
    topics: [
      {
        ref: '3.1',
        title: 'Parts of Speech & Sentence Structure',
        points: [
          'Noun: person, place, thing (cat, London, book). Proper nouns (specific, capitalized): London, Harry. Common nouns: city, boy',
          'Verb: action (run, jump, think) or state (be, seem, feel). Active (subject performs action: "cat ate fish"), passive (action performed on subject: "fish was eaten by cat")',
          'Adjective: describes noun (blue book, tall building, happy person). Comparative (taller), superlative (tallest)',
          'Adverb: describes verb/adjective/adverb. Usually ends -ly (quickly, happily, carefully). Tells how/when/where/why',
          'Sentence components: subject (who/what), verb (action), object (receiver of action). "The cat ate the mouse." Cat = subject, ate = verb, mouse = object',
          'Clause: group of words with subject and verb. Independent clause (complete thought: "I like pizza"). Dependent clause (incomplete: "because I like pizza")',
          'Phrase: group without subject-verb. Prepositional: "in the house", "under the bridge". Doesn\'t contain all clause components'
        ],
        tip: 'Every sentence needs subject + verb (except commands where subject is implied). "The dog runs" (complete). "Runs quickly" (incomplete without subject).',
        example: 'Subject: "The red ball", Verb: "rolled", Object: "down the hill". Complete sentence: "The red ball rolled down the hill." Noun = ball (thing), adjective = red (describes ball), adverb = down (describes rolled).'
      },
      {
        ref: '3.2',
        title: 'Tense, Mood & Voice',
        points: [
          'Tense: time of action. Present (I walk), past (I walked), future (I will walk). Present continuous (I am walking), past perfect (I had walked)',
          'Consistency: maintain tense throughout. "I walk to school and saw a dog" (wrong: walks, then past). "I walked to school and saw a dog" (correct)',
          'Perfect tenses: show completion. Present perfect (I have walked) = action started in past, continues or recently finished. Past perfect (I had walked) = action completed before another past action',
          'Mood: indicates speaker\'s attitude. Indicative (statement: "It rains"). Subjunctive (hypothetical: "If it were raining..." — contrary to fact). Imperative (command: "Close the door")',
          'Voice: active (subject does action) vs passive (action done to subject). Active: "The chef cooked dinner." Passive: "Dinner was cooked by the chef."',
          'Choosing voice: active = clearer, stronger. Passive = useful when actor unknown ("The window was broken") or emphasis on receiver ("The President was elected")',
          'Modal verbs: can, could, may, might, must, should, will, would. Indicate possibility, necessity, permission'
        ],
        tip: 'Tense consistency crucial. One past tense slip breaks flow. Use future tense only for actual future. Don\'t say "I go to the store yesterday".',
        example: 'Present: "She plays tennis every day." Past: "She played tennis yesterday." Future: "She will play tennis tomorrow." Mixed wrong: "She plays tennis yesterday and was tired" (present and past mixed).'
      },
      {
        ref: '3.3',
        title: 'Common Errors & Corrections',
        points: [
          'Run-on sentence: two independent clauses joined without punctuation or conjunction. Wrong: "I love to read I read every day." Fix: "I love to read; I read every day." or "I love to read, and I read every day."',
          'Fragment: incomplete sentence. Wrong: "Running through the park." Fix: "He was running through the park."',
          'Comma splice: independent clauses joined only by comma. Wrong: "I like pizza, it\'s delicious." Fix: Add conjunction or semicolon: "I like pizza; it\'s delicious."',
          'Subject-verb disagreement: "The team are going" (wrong, team = singular). "The team is going" (correct)',
          'Pronoun-antecedent disagreement: "Everyone should bring their own book" (correct, everyone = singular, but "their" acceptable modern usage). Traditional: "Everyone should bring his own book"',
          'Misplaced modifiers: adjective near wrong noun. Wrong: "Running late, the bus was missed." (bus running late?) Right: "Running late, she missed the bus."',
          'Double negatives: two negatives make unclear meaning. "I don\'t want no trouble" (nonstandard). Standard: "I don\'t want any trouble."'
        ],
        tip: 'Common errors destroy credibility. Proofread for THESE specific mistakes. Single error in cover letter might lose job opportunity.',
        example: 'Fragment error: "After finishing homework." Fix: "After finishing homework, she watched TV." Modifier error: "Sitting on the bench, the book fell." Fix: "Sitting on the bench, he dropped the book."'
      }
    ]
  },
  {
    section: '4. Spoken Language & Presentations',
    icon: '🎤',
    color: '#7C3AED',
    topics: [
      {
        ref: '4.1',
        title: 'Effective Speaking & Presentation',
        points: [
          'Vocal delivery: pace (not too fast), volume (audible), pronunciation (clear), intonation (variation prevents monotone)',
          'Eye contact: look at audience members, not at notes. Builds connection and confidence perception',
          'Body language: posture (stand tall, don\'t slouch), gestures (natural, not excessive), movement (purposeful, not pacing)',
          'Preparation: know content well, practise aloud (not just reading), anticipate questions, time your speech',
          'Audience awareness: tailor language to audience (formal for adults, casual for peers), anticipate knowledge level',
          'Structure: clear introduction (grab attention, state topic), main points with evidence, conclusion (summary, memorable ending)',
          'Handling nerves: breathe deeply, remember audience wants you to succeed, focus on message not performance'
        ],
        tip: 'Practice speaking aloud. Reading silently doesn\'t reveal stumbling blocks. Speaking aloud shows what needs improvement.',
        example: 'Presentation on climate change: intro with alarming stat ("Global temperatures risen 1.1°C since 1880"), main points with evidence, conclusion with call to action ("Support renewable energy").'
      },
      {
        ref: '4.2',
        title: 'Listening & Discussion Skills',
        points: [
          'Active listening: focus fully on speaker, don\'t interrupt, ask clarifying questions, nod/take notes showing engagement',
          'Asking questions: open-ended ("How do you feel about...?") get more info than closed ("Do you like...?"). Good questions show you listened',
          'Discussion etiquette: take turns, don\'t dominate, respect other opinions even if disagreeing, stay on topic',
          'Summarising: repeat back what you heard to confirm understanding. "So you\'re saying..."',
          'Disagreeing respectfully: "I see your point, but I think..." Shows respect while presenting counterargument',
          'Verbal fillers: "um", "uh", "like", "you know" weaken argument. Remove them by pausing instead',
          'Confidence in discussion: speak clearly, don\'t apologise for having opinion, support claims with evidence'
        ],
        tip: 'Good listeners are valuable in discussions. Let others finish, ask follow-up questions, acknowledge valid points.',
        example: 'Poor: "That\'s wrong, you don\'t understand." Good: "I hear your point. However, the data shows..." Shows respect while disagreeing substantively.'
      },
      {
        ref: '4.3',
        title: 'Media Literacy & Critical Analysis',
        points: [
          'Media bias: all media has perspective. Recognise it, seek multiple sources, understand editorial decisions',
          'Source credibility: check who\'s reporting (established news vs random blog?), author credentials, is fact-checking present, are sources cited?',
          'Propaganda vs persuasion: propaganda distorts truth for effect, persuasion uses facts. Propaganda uses emotion manipulatively',
          'Advertisements: analyse techniques (emotional appeals, celebrity endorsement, bandwagon "everyone uses..."), whose interests served?',
          'Fake news: fabricated stories presented as real. Check: source, date, author credentials, claims verified elsewhere, satire or serious?',
          'Digital literacy: evaluate online content, distinguish opinion from fact, spot scams, protect privacy, understand digital footprint',
          'Misinformation: false information spread, sometimes unintentionally. Disinformation: intentionally false, meant to mislead'
        ],
        tip: 'Never trust single source. Verify facts across multiple outlets. Be sceptical of content that makes you very angry/emotional (propaganda tactic).',
        example: 'Evaluating news: headline claims "New study proves X". Check: who funded study (bias?), peer-reviewed (credible?), other scientists agree (consensus?), full text available (transparency?).'
      }
    ]
  }
];
