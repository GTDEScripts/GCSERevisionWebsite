// ══════ ENGLISH LITERATURE: Power & Conflict Poetry (AQA) ══════

const POWER_CONFLICT = {
  title: 'Power & Conflict Poetry',
  subtitle: 'Quote Flashcards & Analysis',
  unitLabel: 'Poem',
  units: [
    'ozymandias', 'london', 'prelude', 'my_last_duchess',
    'charge_of_the_light_brigade', 'exposure', 'storm_on_the_island',
    'bayonet_charge', 'remains', 'poppies',
    'war_photographer', 'tissue', 'emigree',
    'checking_out_me_history', 'kamikaze'
  ],
  storagePrefix: 'pc',
  authorVerb: 'The poet presents',
  contextLabel: 'Historical/social context',
  essayTip: 'Compare two poems. Frame each point with "The poet presents…". Link to context. Identify structural techniques alongside language choices. Always explain the effect on the reader.',
  unitBg: {
    ozymandias: '#FEF3C7',
    london: '#FEE2E2',
    prelude: '#D1FAE5',
    my_last_duchess: '#EDE9FE',
    charge_of_the_light_brigade: '#DBEAFE',
    exposure: '#F3F4F6',
    storm_on_the_island: '#CCFBF1',
    bayonet_charge: '#FFEDD5',
    remains: '#FCE7F3',
    poppies: '#D9F99D',
    war_photographer: '#FEE2E2',
    tissue: '#DBEAFE',
    emigree: '#FEF3C7',
    checking_out_me_history: '#D1FAE5',
    kamikaze: '#EDE9FE'
  },
  unitText: {
    ozymandias: '#92400E',
    london: '#991B1B',
    prelude: '#065F46',
    my_last_duchess: '#5B21B6',
    charge_of_the_light_brigade: '#1E40AF',
    exposure: '#4B5563',
    storm_on_the_island: '#115E59',
    bayonet_charge: '#9A3412',
    remains: '#9D174D',
    poppies: '#3F6212',
    war_photographer: '#991B1B',
    tissue: '#1E40AF',
    emigree: '#92400E',
    checking_out_me_history: '#065F46',
    kamikaze: '#5B21B6'
  },
  themes: {
    power: { bg: '#EDE9FE', c: '#5B21B6' },
    conflict: { bg: '#FEE2E2', c: '#991B1B' },
    nature: { bg: '#D1FAE5', c: '#065F46' },
    identity: { bg: '#DBEAFE', c: '#1E40AF' },
    memory: { bg: '#FEF3C7', c: '#92400E' },
    loss: { bg: '#FCE7F3', c: '#9D174D' },
    pride: { bg: '#FFEDD5', c: '#9A3412' },
    suffering: { bg: '#F3F4F6', c: '#4B5563' },
    reality_of_war: { bg: '#CCFBF1', c: '#115E59' },
    anger: { bg: '#D9F99D', c: '#3F6212' }
  },
  quotes: [

    // ── OZYMANDIAS (Shelley, 1818) ──────────────────────────────────
    {
      quote: `My name is Ozymandias, King of Kings; Look on my Works, ye Mighty, and despair!`,
      act: 'ozymandias',
      speaker: `Shelley (via the inscription)`,
      themes: [`power`, `pride`, `loss`],
      devices: [`dramatic_irony`, `hubris`, `exclamation`, `caesura`],
      analysis: `The inscription commands awe — "King of Kings" stacks superlatives to claim absolute dominance — yet the dramatic irony is devastating: these words survive, but the "Works" do not. The exclamation mark performs confidence while the surrounding decay mocks it. Shelley uses a poem-within-a-poem structure (traveller telling Shelley, Shelley writing it down) to create ironic distance: we read Ozymandias boasting about power he no longer has.`,
      context: `Shelley wrote this in 1817 in competition with his friend Horace Smith. Ozymandias is the Greek name for Ramesses II, the Egyptian pharaoh considered one of the most powerful rulers of the ancient world. Shelley, a radical critic of the monarchy, uses this historical figure to attack all tyrannical rulers — including George III and the Prince Regent, who dominated British politics at the time.`
    },
    {
      quote: `Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare`,
      act: 'ozymandias',
      speaker: `Shelley`,
      themes: [`power`, `loss`, `nature`],
      devices: [`caesura`, `enjambment`, `juxtaposition`, `imagery`],
      analysis: `"Nothing beside remains" — the blunt monosyllables enact the nothingness they describe. The enjambment carries the eye across empty space, mimicking the vast desert. "Colossal Wreck" is a violent juxtaposition: "colossal" suggests greatness, "Wreck" signals ruin. "Boundless and bare" — the alliterative pair describes nature's indifference, which dwarfs any human ambition. The desert outlasts the empire.`,
      context: `Shelley was a second-generation Romantic who believed nature was eternal and human power transient. The poem argues that all political power — including that of the British Empire at its height — will inevitably crumble. "Boundless and bare" describes not just the desert but the emptiness left when tyranny collapses.`
    },

    {
      quote: `Two vast and trunkless legs of stone / Stand in the desert`,
      act: 'ozymandias',
      speaker: `Shelley`,
      themes: [`power`, `loss`, `nature`],
      devices: [`imagery`, `fragmentation`, `juxtaposition`],
      analysis: `"Two vast" emphasises scale — these were enormous — yet "trunkless" immediately registers absence. The legs stand without body, without purpose, stripped of the authority they once upheld. "Stand in the desert" is ironic: they still stand, but to no effect. Shelley fragments the statue to fragment the empire: power, when stripped of its context, is merely debris. The desert provides no audience, no subjects — power without witness is nothing.`,
      context: `Shelley presents physical decay as a metaphor for political decay. The statue was built to last forever — stone, not flesh — yet even stone crumbles. For Shelley, writing amid the aftermath of Napoleon's empire and the oppressive Peterloo era, this was a message to contemporary rulers: permanence is an illusion, and every tyrant's legacy will eventually be just rubble.`
    },
    {
      quote: `Half sunk, a shattered visage lies`,
      act: 'ozymandias',
      speaker: `Shelley`,
      themes: [`power`, `loss`, `pride`],
      devices: [`imagery`, `caesura`, `passive_voice`],
      analysis: `The passive voice "lies" removes Ozymandias's agency — the face does not stand proud but merely lies there, acted upon by time. "Half sunk" suggests slow submersion, like a drowning: power slipping beneath the sands of history. "Shattered visage" — the face, the seat of identity and expression, is broken. The caesura created by the comma enacts a pause over the wreckage, making the reader stop and survey it.`,
      context: `The face was the symbol of absolute rule — kings issued coins and statues of their faces to assert authority. By fragmenting the face, Shelley deconstructs royal iconography. The image of a buried face is also politically loaded: Shelley suggests that tyranny buries itself — the face of oppression cannot survive the judgment of time.`
    },
    {
      quote: `whose frown, / And wrinkled lip, and sneer of cold command`,
      act: 'ozymandias',
      speaker: `Shelley`,
      themes: [`power`, `pride`, `anger`],
      devices: [`tricolon`, `listing`, `imagery`, `enjambment`],
      analysis: `The tricolon — "frown," "wrinkled lip," "sneer" — builds a portrait of contempt. The sculptor has preserved the tyrant's character more faithfully than the tyrant preserved his empire. "Cold command" is the poem's most damning phrase: not warm leadership, not wisdom, but cold, distant authority. The enjambment delays "sneer" for emphasis — Shelley wants the contempt to land. The face survives; the power does not.`,
      context: `Shelley makes the sculptor — an artist — the real hero of the poem. The sculptor "well those passions read": art outlasts power. This is a pointed argument about the relative permanence of tyranny and creativity. The king is remembered because the artist was skilled, not because the king was great — art is the real legacy.`
    },

    {
      quote: `The hand that mocked them and the heart that fed`,
      act: 'ozymandias',
      speaker: `Shelley`,
      themes: [`power`, `pride`, `loss`],
      devices: [`ambiguity`, `personification`, `irony`],
      analysis: `"The hand that mocked them" refers to the sculptor's hand — "mocked" meaning both imitated (carved) and ridiculed. The sculptor mocked the king's passions in both senses: reproduced them in stone, and by doing so, exposed their absurdity. "The heart that fed" — the king's heart that sustained those passions, now gone. Both hand (sculptor) and heart (tyrant) have ceased; only the passions "survive" in the stone. Shelley's irony is complete: the artist has outlasted the tyrant, and art has outlasted power.`,
      context: `The line's grammatical ambiguity — whose hand, whose heart? — is deliberate. Both the sculptor and the king are compressed into a single line, inseparable. This ambiguity asks: who is more powerful, the ruler who commands or the artist who records? Shelley, a poet, gives his answer by structuring the entire poem around the sculptor's superior vision. The king commanded; the sculptor understood. The sculptor's work survives; the king's does not.`
    },

    // ── LONDON (Blake, 1794) ──────────────────────────────────────────
    {
      quote: `I wander thro' each charter'd street, / Near where the charter'd Thames does flow`,
      act: 'london',
      speaker: `Blake`,
      themes: [`power`, `suffering`, `anger`],
      devices: [`repetition`, `imagery`, `sibilance`],
      analysis: `"Charter'd" — repeated to build oppressive rhythm. The word means both "mapped" (controlled, owned) and "chartered" (legally granted privilege). Blake argues that even the river — nature itself — has been commodified and owned by the powerful. "Wander" suggests aimlessness and alienation: the speaker does not belong in his own city. The repetition creates a sense of inescapable ownership.`,
      context: `Blake published this in Songs of Experience (1794), his collection critiquing the corruption of industrial society. "Charter'd streets" refers to the legal ownership of London's streets by wealthy landowners — an attack on the enclosure of common land. The Thames was London's main commercial artery, heavily used for trade; Blake presents commerce as a form of oppression.`
    },
    {
      quote: `The mind-forg'd manacles I hear`,
      act: 'london',
      speaker: `Blake`,
      themes: [`power`, `suffering`, `identity`],
      devices: [`metaphor`, `imagery`, `compound_adjective`],
      analysis: `"Mind-forg'd manacles" is the poem's central metaphor: chains created not by physical force but by psychological conditioning. The compound adjective collapses mind and manufacture — slavery is internal as much as external. "Forg'd" links to industry (the forge) and deliberate construction: oppression is engineered, not natural. The speaker "hears" these manacles — suffering is audible, pervasive, inescapable.`,
      context: `Blake was writing during a period when Britain's industrial revolution was transforming cities and creating new forms of poverty. He was also influenced by the French and American Revolutions, which suggested that political liberation was possible. "Mind-forg'd manacles" argues that oppression is maintained partly through the oppressed internalising their own subjugation — a radical political insight.`
    },
    {
      quote: `And the hapless Soldier's sigh / Runs in blood down Palace walls`,
      act: 'london',
      speaker: `Blake`,
      themes: [`conflict`, `power`, `suffering`],
      devices: [`imagery`, `synaesthesia`, `juxtaposition`],
      analysis: `Synaesthesia: a sigh (sound) becomes blood (sight) — suffering transforms into visible accusation. "Hapless" means unfortunate, unlucky: the soldier did not choose his fate. "Palace walls" — the blood runs directly from soldier to monarch, implicating the king in the deaths of his subjects. The juxtaposition of vulnerable "sigh" against violent "blood" compresses the distance from quiet suffering to death. Blake makes the Palace complicit.`,
      context: `Britain was at war during the 1790s, sending working-class soldiers to die in conflicts decided by the aristocracy. Blake was a fierce anti-war pacifist who saw patriotism as a form of manipulation by the powerful. The image of blood on Palace walls is deliberately shocking — a visual accusation that would have been dangerous to publish openly.`
    },

    {
      quote: `In every cry of every Man, / In every Infant's cry of fear, / In every voice, in every ban`,
      act: 'london',
      speaker: `Blake`,
      themes: [`power`, `suffering`, `anger`],
      devices: [`anaphora`, `repetition`, `universality`],
      analysis: `The anaphoric "In every" sweeps across the whole of humanity — man, infant, voice, law. Blake insists suffering is total and universal; no group in London escapes. "Every ban" — laws, prohibitions, restrictions — are the linguistic form of oppression. The accumulation creates an overwhelming sense that there is nowhere in London free from the marks of oppression. Blake is building toward a systemic argument: this is not isolated poverty but total, designed suffering.`,
      context: `Blake was a radical Christian who believed God's creation had been corrupted by human institutions — the Church, the State, commerce. His vision of London in 1794 was of a city where every human voice was marked by oppression. The poem preceded the massive social protests of the 1790s and can be read as a call to awareness: before you can change the world, you must see it clearly.`
    },
    {
      quote: `The Chimney-sweeper's cry / Every blackening Church appalls`,
      act: 'london',
      speaker: `Blake`,
      themes: [`power`, `suffering`, `conflict`],
      devices: [`imagery`, `juxtaposition`, `symbolism`],
      analysis: `Child chimney sweepers — a notorious Victorian abuse — represent the most vulnerable. "Every blackening Church appalls" — the Church is blackened both by soot (industrial pollution) and by its moral failure to protect children. "Appalls" carries its root meaning: to make pale, to horrify. The Church should be appalled by the child's cry — but it is the Church itself that is darkening. Blake implicates religious institutions in the poverty they should be addressing.`,
      context: `Child chimney sweepers could be as young as four, purchased or rented from workhouses. Many died of chimney sweep's cancer. The Church of England was wealthy and politically conservative in 1794, largely allied with the ruling class rather than the poor. Blake's attack on the "blackening Church" is a direct accusation of institutional complicity in child exploitation.`
    },
    {
      quote: `How the youthful Harlot's curse / Blasts the new-born Infant's tear`,
      act: 'london',
      speaker: `Blake`,
      themes: [`power`, `suffering`, `reality_of_war`],
      devices: [`imagery`, `irony`, `cycle_of_oppression`],
      analysis: `The poem ends with the most shocking image: a young sex worker's "curse" — either her words of anger, or a venereal disease — passing to a newborn. Blake shows suffering as cyclical: the harlot was once an infant; the infant may become a harlot. "Blasts" — violent, explosive destruction — of "the new-born Infant's tear": innocence destroyed at birth. The final image collapses the poem's themes of exploitation, poverty, and institutional failure into a single devastating image of inherited suffering.`,
      context: `Prostitution was common and largely invisible in late 18th-century London. Young women, often driven by poverty, faced constant violence and disease. Blake's use of "harlot" in the final stanza — after attacking the Church and the monarchy — completes a system: State, Church, military, and commerce all participate in producing poverty that drives women to prostitution, and the cycle begins again with the next generation.`
    },

    // ── THE PRELUDE (Wordsworth, 1850) ────────────────────────────────
    {
      quote: `I dipped my oars into the silent lake, / And, as I rose upon the stroke, my boat / Went heaving through the water like a swan`,
      act: 'prelude',
      speaker: `Wordsworth`,
      themes: [`nature`, `power`, `identity`],
      devices: [`simile`, `sibilance`, `enjambment`, `imagery`],
      analysis: `The simile "like a swan" presents the young Wordsworth as graceful, at one with nature — confident in his mastery. Sibilance in "silent" and "swan" creates a soft, peaceful soundscape. The enjambment mimics the boat's smooth movement. This is the calm before the sublime: Wordsworth establishes harmony with nature precisely so its power to disturb him will be more forceful when it erupts.`,
      context: `Wordsworth wrote The Prelude as an autobiographical poem about the "growth of a poet's mind." This episode, which he called a "spot of time," is about a moment of childhood transgression (stealing a boat) that leads to a profound encounter with natural sublimity. For the Romantics, nature was a moral and spiritual force — capable of educating and disciplining the human soul.`
    },
    {
      quote: `a huge peak, black and huge, as if with voluntary power instinct / Upreared its head`,
      act: 'prelude',
      speaker: `Wordsworth`,
      themes: [`nature`, `power`, `identity`],
      devices: [`personification`, `repetition`, `imagery`, `sublime`],
      analysis: `"Voluntary power" personifies the mountain as an active agent — it chooses to confront the boy, suggesting nature has consciousness and purpose. The repetition of "huge" enacts the overwhelming scale: the mountain fills the boy's vision, doubling in apparent size. "Upreared its head" gives the mountain a serpent-like quality — threatening, watchful, alive. Nature here is not gentle but morally powerful: it disciplines through fear.`,
      context: `The Romantic concept of the "sublime" describes the mixture of awe and terror produced by overwhelming natural power. Burke and Kant both theorised it: the sublime showed humans their smallness. Wordsworth believed these moments of natural confrontation were educative — they taught the soul humility and respect. This is nature as disciplinarian.`
    },

    {
      quote: `It was an act of stealth / And troubled pleasure`,
      act: 'prelude',
      speaker: `Wordsworth`,
      themes: [`nature`, `identity`, `power`],
      devices: [`oxymoron`, `confession`, `enjambment`],
      analysis: `"Troubled pleasure" is an oxymoron that captures the moral complexity of the boy's transgression — he knows stealing a boat is wrong, which is precisely what makes it exciting. "Act of stealth" frames it as deliberate wrongdoing, not childish innocence. The enjambment creates a conspiratorial lean forward. Wordsworth the adult poet is presenting his younger self honestly: this was not innocent play but a conscious act of transgression that triggered nature's response.`,
      context: `The Romantics believed guilt was educative — that conscience, properly developed, was a moral compass. Wordsworth presents the childhood transgression as necessary for his development as a poet and a moral being. By being honest about the "stealth," he makes the subsequent encounter with the sublime mountain more meaningful: guilt opened him to nature's power.`
    },
    {
      quote: `I struck and struck again`,
      act: 'prelude',
      speaker: `Wordsworth`,
      themes: [`nature`, `identity`, `power`],
      devices: [`repetition`, `rhythm`, `urgency`],
      analysis: `The repeated "struck" creates a drumbeat of urgency — the boy rows harder, faster, deeper into the act of transgression. The repetition enacts the physical effort and the growing exhilaration. But it also suggests compulsion: the boy cannot stop, is drawn further from shore, further into the landscape's power. The rhythm is insistent, mimicking oars hitting water — until the mountain rises and the rhythm breaks.`,
      context: `The physical act of rowing away from safety mirrors the psychological act of moving away from social norms. Wordsworth shows how transgression draws us deeper: one wrong act leads to another, and the further you go, the more the natural world responds. The "striking" is both literal (oars) and metaphorical — testing, challenging, daring nature to respond.`
    },
    {
      quote: `With trembling oars I turned, / And through the silent water stole my way / Back to the covert of the willow tree`,
      act: 'prelude',
      speaker: `Wordsworth`,
      themes: [`nature`, `identity`, `power`],
      devices: [`imagery`, `contrast`, `verb_choice`],
      analysis: `"Trembling oars" — the confidence of "I struck and struck again" has collapsed into fear. "Stole" returns to the register of transgression — the same word used for the theft of the boat — but now it means retreat, not daring. The willow tree's "covert" (shelter) is a hiding place, not a home. The transformation is complete: the boy who left boldly returns broken. Wordsworth does not hide his fear; the contrast between departure and return is the point.`,
      context: `The sublime in Romantic theory produces both awe and terror, and crucially, a sense of human smallness. Wordsworth returns to the covert like a chastened child. The experience has not destroyed him but disciplined him — nature has taught him humility. This "spot of time" will shape the adult poet's understanding of nature as morally powerful rather than merely beautiful.`
    },
    {
      quote: `for many days, my brain / Worked with a dim and undetermined sense / Of unknown modes of being`,
      act: 'prelude',
      speaker: `Wordsworth`,
      themes: [`nature`, `identity`, `power`],
      devices: [`caesura`, `abstract_language`, `aftermath`],
      analysis: `The aftermath is cognitive, not emotional: Wordsworth does not say he was frightened but that his brain "worked" on the experience for days. "Dim and undetermined sense" — the encounter with the sublime cannot be processed rationally; it produces a knowledge that is not yet knowledge. "Unknown modes of being" — nature revealed that existence has dimensions beyond human understanding. The experience expanded his consciousness without being reducible to language.`,
      context: `For the Romantics, the most important experiences were those that exceeded rational explanation. Wordsworth's language here deliberately resists clarity — "dim," "undetermined," "unknown" — because the encounter with the sublime produces a kind of negative knowledge: awareness of what we cannot know. This is the central Romantic argument: nature teaches us our limits, and that teaching is the most valuable education.`
    },

    // ── MY LAST DUCHESS (Browning, 1842) ─────────────────────────────
    {
      quote: `That's my last Duchess painted on the wall, / Looking as if she were alive`,
      act: 'my_last_duchess',
      speaker: `The Duke of Ferrara`,
      themes: [`power`, `identity`, `loss`],
      devices: [`dramatic_monologue`, `dramatic_irony`, `enjambment`],
      analysis: `"My last Duchess" — the possessive "my" reduces a person to a possession, and "last" implies there will be more. "Looking as if she were alive" is chilling dramatic irony: she is not alive — the Duke has had her killed. The painting has replaced the woman: she is now perfectly controlled, permanently compliant. The casual tone ("That's") reveals how comfortable the Duke is with his own violence.`,
      context: `Browning's dramatic monologue gives voice to a Renaissance Italian nobleman who, historical sources suggest, had his wife murdered. Browning uses the form to implicate the reader: we hear only the Duke's self-justifications and must infer the horror beneath. The poem critiques Victorian patriarchal attitudes toward women as property, projecting them onto a safe historical distance.`
    },
    {
      quote: `She had / A heart — how shall I say? — too soon made glad`,
      act: 'my_last_duchess',
      speaker: `The Duke of Ferrara`,
      themes: [`power`, `identity`, `anger`],
      devices: [`dramatic_monologue`, `caesura`, `enjambment`, `euphemism`],
      analysis: `The caesura — "how shall I say?" — performs false hesitation: the Duke knows exactly what he means. "Too soon made glad" is a euphemism for natural human warmth, which the Duke reads as infidelity or disrespect. His objection is that she treated everyone's gifts equally — she failed to honour his "nine-hundred-years-old name" above all others. The enjambment creates a stumbling rhythm that mimics his attempt to control his rage.`,
      context: `The Duke's complaint reveals Victorian anxieties about female autonomy. A woman who smiled too easily was perceived as sexually suspect. Browning critiques this by making the Duke's logic clear and monstrous: he killed a woman for being warm. The Duke's focus on his "name" (i.e., reputation) over his wife's life exposes how class and gender hierarchy dehumanise women.`
    },

    {
      quote: `I gave commands; / Then all smiles stopped together`,
      act: 'my_last_duchess',
      speaker: `The Duke of Ferrara`,
      themes: [`power`, `conflict`, `identity`],
      devices: [`euphemism`, `caesura`, `dramatic_irony`],
      analysis: `"I gave commands" is the most chilling euphemism in English literature. The Duke never says "I had her killed" — he delegates the horror behind a phrase of administrative precision. "Then all smiles stopped together" — the word "together" is eerily complete, final, as if smiling itself ceased to exist. The caesura after "commands" creates a pause that the reader must fill with the unspeakable. Browning implicates the reader: we complete the sentence in our heads, making us complicit.`,
      context: `Browning based the Duke on Alfonso II d'Este of Ferrara, who was suspected of poisoning his young wife Lucrezia in 1561. By placing the poem in Renaissance Italy, Browning creates safe historical distance from Victorian patriarchy while clearly critiquing it. The Victorian audience would have recognised the logic — women as property — without having to directly confront it in their own society.`
    },
    {
      quote: `as if she ranked / My gift of a nine-hundred-years-old name / With anybody's gift`,
      act: 'my_last_duchess',
      speaker: `The Duke of Ferrara`,
      themes: [`power`, `pride`, `identity`],
      devices: [`dramatic_monologue`, `irony`, `enjambment`],
      analysis: `The Duke's complaint is that the Duchess valued his aristocratic name — "nine-hundred-years-old," emphasising ancient lineage — no more highly than a common person's gift of flowers or a sunset. The enjambment — "ranked / My gift" — creates a stumble, mimicking the Duke's barely controlled outrage. The irony is total: the reader sees his logic as monstrous, but the Duke presents it as self-evident. Browning shows how entitlement dehumanises: to the Duke, his name IS a gift, and ingratitude for it is a crime.`,
      context: `Class hierarchy in Victorian England was closely tied to land, lineage, and name. The Duke's obsession with his "nine-hundred-years-old name" reflects a real aristocratic psychology: inherited status was sacred, and anything that diminished it — including a wife who smiled too freely — was an existential threat. Browning exposes how this system destroys the people it reduces to property.`
    },
    {
      quote: `Notice Neptune, though, / Taming a sea-horse, thought a rarity`,
      act: 'my_last_duchess',
      speaker: `The Duke of Ferrara`,
      themes: [`power`, `identity`, `pride`],
      devices: [`symbolism`, `dramatic_irony`, `allusion`],
      analysis: `The poem ends with the Duke directing attention to another artwork: Neptune taming a sea-horse. The symbolism is unmistakable — the Duke IS Neptune, the Duchess was the sea-horse, and "taming" is what he does to unruly things. The throwaway "thought a rarity" — as if mentioning it in passing — reveals his pride in the possession. The final word is not about love or grief but about a piece of art he owns. Browning closes the poem on ownership: the Duke will always see people as objects to control.`,
      context: `The dramatic monologue form means the Duke never realises how he condemns himself. He shows off his art collection, describes his murdered wife, and negotiates for a new one in a single sustained speech — revealing complete moral blindness. Browning uses the form to show how power corrupts not through villainy but through the assumption that control is natural.`
    },
    {
      quote: `Will't please you sit and look at her?`,
      act: 'my_last_duchess',
      speaker: `The Duke of Ferrara`,
      themes: [`power`, `identity`, `loss`],
      devices: [`dramatic_irony`, `possessive`, `polite_register`],
      analysis: `The question is superficially polite — even gracious — but the possessive "her" has replaced the Duchess with the painting. She is now permanently available for his display, unable to smile at anyone else. The Duke offers to show his guest something he owns; that something was once a living woman. "Sit and look" — the Duchess is a spectacle, and the Duke controls who sees her and when. Politeness becomes the most unsettling register for this total possession.`,
      context: `Browning uses the polite surface of the Duke's speech to expose the violence beneath. He never shouts, never threatens — but the controlled register makes the horror worse. The Duchess, reduced to a painting, is now the perfect wife: beautiful, visible on command, permanently silent. Browning shows how patriarchal control operates through the language of civility.`
    },

    // ── CHARGE OF THE LIGHT BRIGADE (Tennyson, 1854) ─────────────────
    {
      quote: `Half a league, half a league, / Half a league onward`,
      act: 'charge_of_the_light_brigade',
      speaker: `Tennyson`,
      themes: [`conflict`, `pride`, `reality_of_war`],
      devices: [`repetition`, `dactylic_rhythm`, `anaphora`],
      analysis: `The triple repetition of "half a league" creates a thundering, mechanical rhythm — the sound of horses galloping. Tennyson uses dactylic metre (one stressed syllable followed by two unstressed) to literally enact the charge in sound. The reader is physically pulled forward by the rhythm: it is impossible to read slowly. This formal technique makes the poem itself a charging force — we experience the momentum that cannot be stopped.`,
      context: `Tennyson wrote this within days of reading a Times report about the disastrous charge in October 1854 during the Crimean War, where a miscommunication sent the Light Brigade into a valley surrounded by Russian guns. 247 of 637 soldiers were killed or wounded. Tennyson was the Poet Laureate; this poem was both a celebration of courage and an implicit critique of the command failure that caused needless deaths.`
    },
    {
      quote: `Theirs not to reason why, / Theirs but to do and die`,
      act: 'charge_of_the_light_brigade',
      speaker: `Tennyson`,
      themes: [`conflict`, `pride`, `reality_of_war`, `suffering`],
      devices: [`repetition`, `rhyme`, `anaphora`],
      analysis: `The anaphora "Theirs not to…" / "Theirs but to…" strips the soldiers of agency — they are defined entirely by what they cannot do. The rhyme of "why" and "die" creates a shocking compression: the question of purpose and the fact of death are linked in a single couplet, suggesting that to question is to die. Tennyson both honours the soldiers' obedience and quietly criticises the system that demands it — they cannot reason why because they are not permitted to.`,
      context: `Military discipline required absolute obedience to orders, however catastrophic. Tennyson captures the Victorian ideal of duty while simultaneously revealing its human cost. The poem's ambivalence — glorifying and mourning simultaneously — reflects the public's conflicted response to the charge: admiration for the soldiers, anger at the generals.`
    },

    {
      quote: `Into the valley of Death / Rode the six hundred`,
      act: 'charge_of_the_light_brigade',
      speaker: `Tennyson`,
      themes: [`conflict`, `pride`, `reality_of_war`, `suffering`],
      devices: [`biblical_allusion`, `repetition`, `refrain`],
      analysis: `"Valley of Death" alludes directly to Psalm 23 ("Though I walk through the valley of the shadow of death") — the soldiers are walking into a biblical space of mortality. The refrain "Rode the six hundred" is repeated throughout the poem as a drumbeat of identity: these are specific men, a specific number, not abstract "soldiers." Tennyson insists on their humanity even as he celebrates their sacrifice. The repetition also creates inevitability — the six hundred keep riding, cannot stop, even knowing what lies ahead.`,
      context: `Tennyson was the Poet Laureate — the official voice of the British crown — and was expected to produce poems that honoured military sacrifice. But the charge was widely recognised as a catastrophic failure of command. Tennyson navigates this by praising the soldiers' courage while the structural irony of the "valley of Death" quietly questions the generals' decisions.`
    },
    {
      quote: `Cannon to right of them, / Cannon to left of them, / Cannon in front of them`,
      act: 'charge_of_the_light_brigade',
      speaker: `Tennyson`,
      themes: [`conflict`, `reality_of_war`, `suffering`],
      devices: [`tricolon`, `anaphora`, `encirclement`],
      analysis: `The tricolon of "cannon to right… left… in front" physically surrounds the reader along with the soldiers. The anaphoric repetition traps — there is no direction without guns. "In front of them" places the reader in the charge, facing forward with no escape. Tennyson uses spatial listing to make the military disaster visceral: this is not tactics on a map but bodies in a valley with no way out. The rhythm keeps pushing the soldiers forward even as the guns multiply.`,
      context: `The Light Brigade rode into a valley surrounded on three sides by Russian artillery — the result of a miscommunicated order. Tennyson's structural use of three repeated cannon positions is historically accurate: the soldiers genuinely had nowhere to go. By mapping this topography in the poem's form, Tennyson ensures the reader experiences the trap rather than merely reading about it.`
    },
    {
      quote: `Boldly they rode and well, / Into the jaws of Death, / Into the mouth of Hell`,
      act: 'charge_of_the_light_brigade',
      speaker: `Tennyson`,
      themes: [`conflict`, `pride`, `reality_of_war`],
      devices: [`metaphor`, `parallelism`, `escalation`],
      analysis: `"Jaws of Death" / "mouth of Hell" — two metaphors for the valley, escalating from earthly to supernatural danger. The parallelism reinforces the comparison: both images consume. "Boldly they rode and well" — Tennyson inserts this brief acknowledgment of their quality before swallowing them in the metaphors. The soldiers are not passive victims but active agents — they rode boldly — which makes their destruction more tragic. Hell awaits those who deserve heaven.`,
      context: `The religious imagery places the soldiers in a martyrdom narrative: they enter Hell as the righteous, not the sinful. Tennyson uses this to honour them while maintaining the ambiguity about whether they died for a just cause. The metaphors of jaw and mouth suggest the soldiers are literally being consumed — devoured by the machinery of war that has no regard for their courage.`
    },
    {
      quote: `Honour the charge they made! / Honour the Light Brigade, / Noble six hundred!`,
      act: 'charge_of_the_light_brigade',
      speaker: `Tennyson`,
      themes: [`conflict`, `pride`, `reality_of_war`],
      devices: [`imperative`, `repetition`, `exclamation`],
      analysis: `The repeated imperative "Honour" commands the audience — us — to remember. Tennyson steps outside the narrative to address posterity directly. "Noble six hundred" — "noble" applies both to aristocratic rank and moral virtue. The exclamation marks perform urgency: this is not a suggestion but an obligation. The poem ends not with the battle but with its commemoration: what matters now is how we remember them. Tennyson transforms a military disaster into a moral lesson about courage.`,
      context: `The poem was immensely popular immediately after publication, distributed to surviving soldiers in the Crimea. Tennyson understood that a nation needed a narrative of heroism even amid disaster. The imperative "Honour" is a direct civic instruction — this is what the Poet Laureate is for. Yet the poem's ambivalence has persisted: readers still debate whether honouring courage amounts to excusing the catastrophic failures of command.`
    },

    // ── EXPOSURE (Owen, 1918) ─────────────────────────────────────────
    {
      quote: `Our brains ache, in the merciless iced east winds that knive us`,
      act: 'exposure',
      speaker: `Owen`,
      themes: [`conflict`, `suffering`, `reality_of_war`, `nature`],
      devices: [`personification`, `neologism`, `sibilance`, `imagery`],
      analysis: `"Knive us" — Owen creates a verb from a noun, making the wind actively violent. The neologism is jarring: it forces the reader to feel the novelty of the pain. Sibilance in "iced east winds" hisses like the cold itself. "Merciless" personifies the wind as a deliberate torturer — nature is not indifferent here but hostile and conscious. The plural "our" brings collective suffering and solidarity: this is a shared, communal experience of pain.`,
      context: `Owen wrote Exposure in 1917-18 based on his experience in the trenches near Serre. The poem's central argument is that the real enemy is not the Germans (barely mentioned) but the weather. More soldiers died from exposure, illness, and cold than in many engagements. Owen challenges the propaganda narrative of heroic combat by presenting passive, helpless suffering as the true reality of war.`
    },
    {
      quote: `But nothing happens`,
      act: 'exposure',
      speaker: `Owen`,
      themes: [`conflict`, `suffering`, `reality_of_war`],
      devices: [`bathos`, `repetition`, `structure`],
      analysis: `Repeated five times as a stanza-ending refrain, this line is structural bathos — after each build-up of tension or description, the anticlimax of "nothing happens" deflates all expectation. Nothing is the poem's subject: no heroism, no action, no resolution, just continued suffering. The repetition makes the nothing accumulate into something suffocating. Owen uses structure to enact the psychological experience of trench warfare: waiting, waiting, waiting, with no release.`,
      context: `Owen directly challenges Rupert Brooke's romanticised vision of war as glorious sacrifice. In Brooke's poetry ("The Soldier"), war is noble and purposeful; in Owen's, it is passive, pointless, and cruel. "Nothing happens" is Owen's counter-argument to every war poem that presents combat as meaningful action. It is also historically accurate: much of WWI involved soldiers waiting in freezing trenches, dying of cold rather than bullets.`
    },

    {
      quote: `Wearied we keep awake because the night is silent`,
      act: 'exposure',
      speaker: `Owen`,
      themes: [`conflict`, `suffering`, `reality_of_war`],
      devices: [`paradox`, `oxymoron`, `inversion`],
      analysis: `The paradox is complete: the soldiers keep awake not because of noise but because of silence. Silence in No Man's Land means the Germans might be advancing; sound at least tells you what is happening. "Wearied" placed first emphasises exhaustion before the paradox of keeping awake. Owen shows how war inverts everything — rest is dangerous, silence is threatening, darkness is more active than daylight. The soldiers cannot even trust their own senses.`,
      context: `Trench warfare required soldiers to maintain watch through the night, not just against enemy attack but against the weather. Owen shows that vigilance was required against everything: cold, frost, wind, and silence. The poem's central argument is that the real enemy is the environment, and the paradox of "wearied we keep awake" is its most economical expression: exhaustion and alertness are not opposites in the trenches; they are the same state.`
    },
    {
      quote: `Our ghosts drag home: glimpsing the sunk fires, glozed / With crusted dark-red jewels`,
      act: 'exposure',
      speaker: `Owen`,
      themes: [`conflict`, `suffering`, `memory`, `loss`],
      devices: [`imagery`, `dream_sequence`, `metaphor`],
      analysis: `"Our ghosts drag home" — the soldiers imaginatively travel home while their bodies remain in the trenches. "Drag" suggests reluctance or exhaustion: even the dream of home is effortful. "Sunk fires, glozed / With crusted dark-red jewels" — the home fires are dying, covered in hardening ash that looks like jewels. The beauty of the image makes it sadder: home is lovely but inaccessible, cooling, no longer waiting. The vision offers no comfort; home has moved on.`,
      context: `Owen contrasts the fantasy of home with the reality of the trenches throughout the poem. The "ghost" version of the soldiers visiting home is a bleak device: they are already half-dead, already haunting their own lives. The cooling fires suggest that the soldiers' families are also moving on, that home is not frozen waiting for their return. Owen denies the soldiers even the comfort of an imagined reunion.`
    },
    {
      quote: `Dawn massing in the east her melancholy army / Attacks once more in ranks on shivering ranks of grey`,
      act: 'exposure',
      speaker: `Owen`,
      themes: [`conflict`, `nature`, `suffering`],
      devices: [`personification`, `military_metaphor`, `pathetic_fallacy`],
      analysis: `Dawn is personified as a military commander leading an army of grey clouds against the soldiers. "Melancholy army" — nature fights with sadness, not aggression: this is a war of attrition by weather. "Shivering ranks of grey" — the clouds mirror the soldiers, also in ranks, also shivering. Owen blurs the boundary between the natural attack and the military one. Nature and war are the same enemy, both indifferent to the men's suffering.`,
      context: `Owen's use of military language for weather ("massing," "attacks," "ranks") is his most sustained irony. The real war is not between armies but between men and the indifferent forces — cold, wind, dawn — that will kill them whether the Germans advance or not. By the time Owen wrote this (1917-18), the Western Front had been static for three years; soldiers were dying of cold and disease as much as combat.`
    },
    {
      quote: `For love of God seems dying`,
      act: 'exposure',
      speaker: `Owen`,
      themes: [`conflict`, `suffering`, `loss`],
      devices: [`religious_imagery`, `ambiguity`, `bathos`],
      analysis: `"For love of God seems dying" carries double meaning: "for the love of God" as an oath — God, this is terrible — and the literal reading that love of God is dying in the men. Faith cannot survive the conditions. "Seems" introduces doubt: perhaps God is still there, but from the trench it cannot be felt. The line arrives quietly after the images of cold and ghost-visits home, a small devastating admission: religious faith has not outlasted the weather.`,
      context: `Owen's relationship with Christianity was complex — he had been a lay assistant to a vicar before the war. His war poems consistently question the Church's support for the conflict and whether God could endorse such suffering. "For love of God seems dying" is his quietest statement of spiritual crisis: not an angry atheism but a sorrowful sense that faith has been killed by the cold alongside the men.`
    },

    // ── STORM ON THE ISLAND (Heaney, 1966) ───────────────────────────
    {
      quote: `We are prepared: we build our houses squat`,
      act: 'storm_on_the_island',
      speaker: `Heaney`,
      themes: [`power`, `nature`, `conflict`],
      devices: [`dramatic_monologue`, `caesura`, `imperative`],
      analysis: `"We are prepared" — the confident assertion at the poem's opening sets up its central irony: the community's preparations prove inadequate against nature's power. The caesura after "prepared" creates a pause before the explanation — but the explanation itself ("we build our houses squat") is modest and defensive. "Squat" suggests cowering rather than strength. The poem begins with human agency and systematically dismantles it.`,
      context: `Heaney grew up on a farm in County Derry, Northern Ireland. The poem draws on the experience of Atlantic storms hitting the Irish coast, where communities have learned defensive building practices. Many critics also read the poem as an allegory for political conflict in Northern Ireland (The Troubles): the island community is also vulnerable to social "storms" it cannot control. The poem's ambiguity is deliberate.`
    },
    {
      quote: `Strange, it is a huge nothing that we fear`,
      act: 'storm_on_the_island',
      speaker: `Heaney`,
      themes: [`power`, `nature`, `conflict`, `suffering`],
      devices: [`paradox`, `oxymoron`, `volta`],
      analysis: `"Huge nothing" is an oxymoron — size and absence in a single phrase. The paradox captures the terror of wind: it is powerful precisely because it is invisible, shapeless, uncontainable. "We fear" the final admission — after all the community's preparations and confidence, the poem ends in fear. The word "strange" signals the speaker's own surprise at arriving at this conclusion. The volta in the final stanza dismantles everything that came before it.`,
      context: `The poem ends where it began — with the community's vulnerability — but the tone has completely changed. What appeared to be a poem about practical resilience reveals itself as a meditation on the limits of human control. Heaney is also writing about existential fear: the "huge nothing" is whatever we cannot control, prepare for, or understand — nature, conflict, death, the irrational.`
    },

    {
      quote: `No stacks or stocks or hay to build against / The source of dread`,
      act: 'storm_on_the_island',
      speaker: `Heaney`,
      themes: [`power`, `nature`, `conflict`],
      devices: [`listing`, `negative_construction`, `imagery`],
      analysis: `The listing of absent things — stacks, stocks, hay — emphasises what the island lacks as defences. The negative construction "no… no… no" builds an accumulation of vulnerability. The island community cannot buffer itself; there is nothing soft between them and "the source of dread." "Source of dread" is deliberately vague — it could be storm, violence, or existential threat. Heaney shows that real dread cannot be stockpiled against: there is no physical preparation for the sublime or the political.`,
      context: `The poem is set in the specific landscape of the Irish coast, where Atlantic storms arrive with no warning. But many critics read the poem as an allegory for Northern Ireland during The Troubles (1968-1998): a community that has built defensively (squat houses, thick walls) but cannot defend against the internal violence of civil conflict. The "source of dread" on that reading is sectarian violence — as invisible and unstoppable as wind.`
    },
    {
      quote: `you might think that the sea is company, / Exploding comfortably down on the cliffs`,
      act: 'storm_on_the_island',
      speaker: `Heaney`,
      themes: [`power`, `nature`, `conflict`],
      devices: [`oxymoron`, `irony`, `personification`],
      analysis: `"Exploding comfortably" is one of poetry's most dissonant oxymorons: explosions are violent, comfort is safe. Heaney captures the strange familiarity the islanders have with storm — they have watched it so many times it feels routine. But "you might think" distances the speaker: this is an outsider's view, not the insider's reality. The sea is not company; it is a constant threat that you learn to live beside. Familiarity with danger does not make danger safe.`,
      context: `Heaney was interested in how communities adapt psychologically to threat. The islanders have normalised the extraordinary — a storm "exploding comfortably" is their everyday reality. This parallels the Northern Irish experience during The Troubles, where extraordinary violence became normalised background. Heaney suggests this normalisation is itself a kind of psychological distortion.`
    },
    {
      quote: `Spits like a tame cat / Turned savage`,
      act: 'storm_on_the_island',
      speaker: `Heaney`,
      themes: [`power`, `nature`, `conflict`],
      devices: [`simile`, `juxtaposition`, `enjambment`],
      analysis: `The simile compares the wind to a domestic cat that has turned wild. "Tame" — once controllable, once familiar — versus "savage" — primal, dangerous. The enjambment places "Turned savage" on its own line, forcing the turn to hit with full force. The image captures the poem's central paradox: what seems manageable is not, what seems familiar can become lethal. Nature's domestication is always illusion; underneath the tame surface is potential savagery.`,
      context: `The image of the tamed-turned-savage cat is Heaney at his most politically subtle. On one level it describes how a coastal storm feels — familiar yet terrifying. On another, it describes what happens when suppressed conflict erupts into violence: communities that have appeared settled and tame "turn savage" with devastating speed. The Troubles transformed a familiar social landscape into a war zone.`
    },
    {
      quote: `We are bombarded by the empty air`,
      act: 'storm_on_the_island',
      speaker: `Heaney`,
      themes: [`power`, `nature`, `conflict`],
      devices: [`military_metaphor`, `oxymoron`, `paradox`],
      analysis: `"Bombarded by the empty air" reaches the poem's paradox of the "huge nothing." Military language — "bombarded" — applied to invisible force: the wind is both absolute weapon and absolute absence. You cannot fight what has no body. "Empty air" is the most dangerous thing in the poem — not the sea, not rain, but nothing itself. The community has been preparing for a visible enemy and discovers the real threat is formless. Heaney moves the poem from practical storm to existential dread.`,
      context: `The final movement of the poem is its most philosophically ambitious. Heaney arrives at a statement about the nature of fear itself: we are most threatened by what we cannot see, name, or prepare for. This resonates with Northern Ireland, where communities lived in fear of invisible threats — a bomb could be anywhere, violence could come from anyone. "Empty air" is both meteorological and psychological.`
    },

    // ── BAYONET CHARGE (Hughes, 1957) ─────────────────────────────────
    {
      quote: `Suddenly he awoke and was running — raw / In raw-seamed hot khaki`,
      act: 'bayonet_charge',
      speaker: `Hughes`,
      themes: [`conflict`, `reality_of_war`, `suffering`],
      devices: [`adverb`, `repetition`, `enjambment`, `imagery`],
      analysis: `"Suddenly" — no context, no buildup. Hughes drops the soldier and reader into the action mid-stride. "Raw" repeated twice — the uniform is physically uncomfortable (raw seams chafing) but "raw" also means exposed, vulnerable, unprocessed. The enjambment mimics the soldier's stumbling forward motion: the sentence cannot stop, just as the soldier cannot stop. Hughes refuses to explain why — the absence of context is the point.`,
      context: `Hughes wrote from imagination rather than personal experience (he was born in 1930, too late for WWI). The poem strips war of its narrative — no cause, no enemy, no heroism, just the physical experience of running. Hughes was influenced by Owen but creates a different kind of anti-war poem: not about passive suffering but about the way combat abolishes thought and reduces humans to animal instinct.`
    },
    {
      quote: `His terror's touchy dynamite`,
      act: 'bayonet_charge',
      speaker: `Hughes`,
      themes: [`conflict`, `suffering`, `reality_of_war`],
      devices: [`metaphor`, `alliteration`],
      analysis: `"Terror's touchy dynamite" — alliteration on "t" creates a hard, explosive sound that mimics detonation. The metaphor presents fear as explosive material: unstable, ready to go off at the lightest touch. This is not courage but controlled panic. The soldier is no longer a person choosing action; he is a bomb running toward the enemy. Hughes shows how war dehumanises — not through deliberate cruelty, but by reducing a man to a weapon.`,
      context: `Hughes was deeply interested in the relationship between violence and nature. He saw war as a stripping-away of civilisation back to primal drives. The poem's imagery throughout connects the soldier to animal instinct — the "hare" simile in the penultimate stanza makes this explicit. Terror, Hughes argues, is war's true fuel: not patriotism or duty, but biological survival instinct.`
    },

    {
      quote: `King, honour, human dignity, etcetera / Dropped like luxuries`,
      act: 'bayonet_charge',
      speaker: `Hughes`,
      themes: [`conflict`, `reality_of_war`, `identity`],
      devices: [`listing`, `bathos`, `simile`],
      analysis: `The listing — "King, honour, human dignity" — contains everything the soldier was told he was fighting for, then "etcetera" dismisses it all. "Etcetera" is the most devastating word in the poem: all abstract values are reduced to things not even worth naming. "Dropped like luxuries" — these ideals are not abandoned in shame but shed as unnecessary weight: they are impractical, they slow him down. Hughes argues that combat strips ideology: once bullets fly, abstraction is irrelevant. Only survival matters.`,
      context: `Hughes was writing in the shadow of WWI but also the era of Cold War nationalism. The poem deconstructs the language of patriotic motivation: soldiers are sent to die for "King, honour, human dignity" — but Hughes shows these words evaporate in the physical reality of combat. This is his anti-war argument: the gap between the rhetoric of the powerful and the experience of those who fight.`
    },
    {
      quote: `In what cold clockwork of the stars and the nations / Was he the hand pointing that second?`,
      act: 'bayonet_charge',
      speaker: `Hughes`,
      themes: [`conflict`, `identity`, `reality_of_war`],
      devices: [`rhetorical_question`, `metaphor`, `existentialism`],
      analysis: `The rhetorical question asks what cosmic or political machinery produced this moment — this soldier, this field, this second. "Cold clockwork" — mechanical, indifferent, pre-set. "The hand pointing" — the soldier as a clock hand: he did not choose this second, he was placed here by forces beyond him. The question has no answer and does not expect one. Hughes locates individual suffering within vast impersonal systems (stars = fate, nations = politics) and shows how both are equally indifferent.`,
      context: `Hughes's question challenges the idea of individual agency in war. The soldier did not choose to charge; he was produced by a "clockwork" of historical forces — imperial rivalry, conscription, ideology — that he could not see or control. This is Hughes's deepest critique: not of individual soldiers but of the systems that manufacture soldiers, make them charge, and then forget them.`
    },
    {
      quote: `a yellow hare that rolled like a flame / And ran in a threshing circle`,
      act: 'bayonet_charge',
      speaker: `Hughes`,
      themes: [`conflict`, `nature`, `suffering`],
      devices: [`simile`, `imagery`, `nature_symbolism`],
      analysis: `The hare, fleeing in a panicked "threshing circle," is the poem's moment of clarity: here is innocent life also caught in the machinery of war. "Yellow hare that rolled like a flame" — the animal is both fleeing and burning, alive and destroyed. The simile links the hare to fire: it moves with fire's intensity and may face fire's destruction. The soldier, seeing the hare, suddenly has a mirror: he too is a creature running in circles, terrified, with nowhere to go.`,
      context: `The hare is a symbol of wild natural life intruding into the mechanical devastation of the battlefield. Hughes, who wrote extensively about animals as expressions of natural instinct, uses the hare to reveal what war destroys: not just human life but the whole natural world that sustains it. The soldier and the hare are equal victims of the "cold clockwork" of nations.`
    },
    {
      quote: `the patriotic tear that had brimmed in his eye / Sweating like molten iron from the centre of his chest`,
      act: 'bayonet_charge',
      speaker: `Hughes`,
      themes: [`conflict`, `identity`, `reality_of_war`],
      devices: [`imagery`, `simile`, `transformation`],
      analysis: `The patriotic emotion — the "tear" of noble feeling — has been physically transformed. "Brimmed" suggests it was once poised, beautiful, ready to overflow. But now it "sweats like molten iron" — the ideology has melted into base metal, burning and shapeless. The transformation from tear (water, emotion, sentiment) to molten iron (industrial, burning, destructive) is Hughes's image of what war does to idealism: it melts it down into something dangerous and unrecognisable.`,
      context: `Hughes compresses the arc of disillusionment into a single metaphor. The soldier began with patriotic tears — the emotional response to propaganda and national pride — and those tears have become something that burns him from the inside. This is the poem's most personal image: ideology as physical wound. Hughes argued that nationalism and militarism do not just destroy bodies; they destroy the capacity for moral feeling.`
    },

    // ── REMAINS (Armitage, 2008) ──────────────────────────────────────
    {
      quote: `one of my mates goes by / and tosses his guts back into his body`,
      act: 'remains',
      speaker: `Armitage (soldier's voice)`,
      themes: [`conflict`, `reality_of_war`, `suffering`, `memory`],
      devices: [`colloquial_language`, `graphic_imagery`, `enjambment`],
      analysis: `The colloquial "mates" and "tosses" create a disturbing contrast with the graphic horror of "guts back into his body." The casual register — as if this were an ordinary incident — reveals the psychological numbing of combat: soldiers cannot process what they're doing in real time, so they linguistically minimise it. The enjambment across lines forces the reader to carry the horror into the next line, just as the soldier carries the memory.`,
      context: `Armitage wrote this based on an interview with a soldier who had served in Iraq. It is part of "The Not Dead," a collection of poems based on veterans' testimonies. The poem explores PTSD: a traumatic event that seemed manageable at the time (the soldier shot a looter who may or may not have been armed) returns to haunt him obsessively. Armitage uses the soldier's own colloquial voice to avoid editorialising.`
    },
    {
      quote: `I see every round as it rips through his life — / I see broad daylight on the other side`,
      act: 'remains',
      speaker: `Armitage (soldier's voice)`,
      themes: [`conflict`, `memory`, `suffering`],
      devices: [`repetition`, `imagery`, `present_tense`],
      analysis: `The shift to present tense ("I see") marks the transition from event to traumatic replay: the killing is happening now, perpetually. "I see" repeated — the soldier cannot stop seeing. "Broad daylight on the other side" creates a visceral image of a bullet wound letting in light: the body becomes a window. The precision of the detail (seeing through the wound) reveals how trauma preserves every detail with terrible clarity.`,
      context: `PTSD was only officially recognised as a condition in 1980, and many veterans of the Iraq and Afghanistan wars struggled to have their psychological injuries acknowledged. Armitage's poem was part of a broader cultural effort to take seriously the mental health consequences of combat. The repetition of "I see" makes visible the involuntary nature of traumatic memory — the soldier is not choosing to remember.`
    },

    {
      quote: `legs it up the road, probably armed, / possibly not`,
      act: 'remains',
      speaker: `Armitage (soldier's voice)`,
      themes: [`conflict`, `reality_of_war`, `suffering`],
      devices: [`colloquial_language`, `ambiguity`, `caesura`],
      analysis: `"Legs it" — slang for running — makes the man's desperate flight sound mundane. "Probably armed, / possibly not" — the caesura and line break perform the split-second moral decision: fire or don't fire. The ambiguity is the poem's moral centre. The soldier did not know if the man was armed — and shot anyway. Armitage does not judge; he shows the calculation exactly as the soldier experienced it. The casualness of "possibly not" contains the whole ethical horror.`,
      context: `The incident the poem describes — soldiers firing on a looter who may or may not have been carrying a weapon — was a common dilemma in Iraq and Afghanistan. Rules of engagement created situations where soldiers made life-or-death decisions in seconds. Armitage's soldier is not a villain; he followed procedure. The poem asks whether procedure can absolve moral responsibility — and leaves the question open.`
    },
    {
      quote: `All three of us open fire`,
      act: 'remains',
      speaker: `Armitage (soldier's voice)`,
      themes: [`conflict`, `reality_of_war`, `identity`],
      devices: [`collective_voice`, `blunt_statement`, `rhythm`],
      analysis: `"All three" distributes moral responsibility — and makes it harder to bear. The soldier cannot say "I shot him"; the pronoun is "we," the action is collective. But this shared responsibility does not ease the guilt; it spreads it. The blunt monosyllabic statement — "open fire" — has no emotion, no hedging, no regret. It is a report, not a confession. Armitage captures how soldiers are trained to act without deliberating, and how this training doesn't prevent the mind from deliberating afterwards.`,
      context: `Armitage is meticulous about not editorialising. The poem gives the soldier's voice without the author's judgment overlaid. "All three of us open fire" is the most factual line in the poem — and the most devastating. PTSD is partly a product of this factuality: the soldier knows exactly what happened, can replay it precisely, and cannot make it mean anything other than what it was.`
    },
    {
      quote: `his blood-shadow stays on the street`,
      act: 'remains',
      speaker: `Armitage (soldier's voice)`,
      themes: [`conflict`, `memory`, `suffering`],
      devices: [`imagery`, `compound_noun`, `permanence`],
      analysis: `"Blood-shadow" — Armitage coins a compound noun that doesn't exist, forcing you to picture it: the outline of a body left in blood after it is removed. The shadow (absence) is more present than the body (absence). The stain "stays" — a permanent mark that the soldier cannot return to clean, cannot undo. This image will follow the soldier home. The street is in Iraq; the blood-shadow is in his head. Armitage maps the geography of trauma: the external mark becomes an internal one.`,
      context: `The poem's setting — a named street in an unnamed country — is deliberately specific yet anonymous. Armitage grounds the poem in physical reality (a street, blood) while leaving the political context vague. This allows the poem to function as a universal statement about the psychological cost of killing, while remaining rooted in the specific experience of Iraq War veterans.`
    },
    {
      quote: `the drink and the drugs won't flush him out — / he's here in my head when I close my eyes`,
      act: 'remains',
      speaker: `Armitage (soldier's voice)`,
      themes: [`conflict`, `memory`, `suffering`, `identity`],
      devices: [`colloquial_language`, `present_tense`, `PTSD`],
      analysis: `"Won't flush him out" — military language ("flush out") applied to a coping mechanism: the soldier is trying to defeat his own memory using the tactics of combat. It doesn't work. "He's here in my head when I close my eyes" — the present tense makes the killing perpetual: he sees it now, with his eyes closed, every night. The shift from "he" (the dead man) to "my" (the soldier) is the poem's core movement: the dead man has moved from the street into the soldier's mind.`,
      context: `PTSD is characterised by intrusive memories that cannot be suppressed. Armitage presents this clinically — the soldier has tried everything ("drink and drugs") and nothing works. The poem implicitly asks what support these soldiers received: the answer, in 2008, was very little. Armitage wrote Poppies and Remains partly to make visible what the public preferred not to see: that war destroys soldiers who survive it.`
    },

    // ── POPPIES (Weir, 2009) ──────────────────────────────────────────
    {
      quote: `Before you left, I pinned one onto your lapel, crimped and tin-like`,
      act: 'poppies',
      speaker: `Weir`,
      themes: [`conflict`, `loss`, `memory`, `identity`],
      devices: [`domestic_imagery`, `tactile_imagery`, `enjambment`],
      analysis: `The domestic action — pinning a poppy — takes on enormous weight in the context of a son leaving for war. "Crimped and tin-like" — the tactile detail makes the poppy feel artificial, fragile, inadequate as a symbol for the gravity of the moment. The poem focuses entirely on small physical gestures rather than abstract concepts of sacrifice or duty. Weir presents grief through the body: touch, smell, sound, and sight.`,
      context: `Jane Weir wrote Poppies from the perspective of a mother whose son has enlisted. She draws on her own experience as a mother and textile artist — the poem is full of fabric and sewing imagery. The poem is set at Remembrance Sunday (when poppies are worn), linking personal grief to national commemoration. Weir challenges the public language of heroism by focusing on private, domestic loss.`
    },
    {
      quote: `I listened, hoping to hear / your playground voice catching on the wind`,
      act: 'poppies',
      speaker: `Weir`,
      themes: [`loss`, `memory`, `identity`],
      devices: [`imagery`, `metaphor`, `enjambment`],
      analysis: `"Playground voice" reaches back to childhood — the mother's grief is not just for her adult son but for the boy he was. The phrase "catching on the wind" suggests something almost heard but not quite — the voice is elusive, already becoming memory. The enjambment creates a listening pause before "your playground voice," as if the sentence itself is hoping. Weir shows how grief is also about the collapse of a future: she will never hear that voice again.`,
      context: `The poem refuses to describe the son's death or fate directly — we never know whether he has died or is simply absent. This ambiguity makes the poem more universally resonant: it speaks to every parent who has sent a child into danger, whether military or otherwise. The lack of explicit statement mirrors the way grief sometimes cannot be spoken directly.`
    },

    {
      quote: `spasms of paper red, disrupting a blockade / of yellow bias binding around your blazer`,
      act: 'poppies',
      speaker: `Weir`,
      themes: [`conflict`, `loss`, `memory`, `identity`],
      devices: [`textile_imagery`, `colour`, `enjambment`],
      analysis: `Weir is a textile artist, and the poem is stitched with fabric language: "bias binding," "blazer," "spasms." The poppy "disrupts" the yellow blazer trim — red breaking into a school uniform, war intruding into childhood. "Spasms" suggests involuntary movement, as if the poppies themselves flinch. The mother is pinning a symbol of the dead onto her living son — the poem registers this collision of life and death in the texture of fabric. The act of dressing becomes an act of grief.`,
      context: `Weir draws on the tradition of women's wartime textile work — knitting, sewing, making uniforms — which was both a form of care and a form of farewell. The school blazer places the son at the beginning of adulthood; the poppy places him in the lineage of the dead. The mother's hands perform both these contradictory meanings simultaneously as she pins the poppy on.`
    },
    {
      quote: `I was brave, as I walked / with you, to the front door`,
      act: 'poppies',
      speaker: `Weir`,
      themes: [`loss`, `identity`, `conflict`],
      devices: [`understatement`, `irony`, `enjambment`],
      analysis: `"I was brave" — the word belongs to soldiers, to battlefields, to the son. The mother reclaims it for the domestic threshold. Walking to "the front door" contains "the front" — the battlefront — in its phrase. The enjambment delays "with you" on the next line, creating a pause that is also a holding on. The mother's bravery is the bravery of letting go: she walks him to the door, and stops there. Her courage is invisible and uncomemorated, unlike his.`,
      context: `Weir challenges the public language of heroism by locating courage in private, female, domestic space. War poetry has traditionally celebrated the soldier; Poppies asks what it costs the people who send them. "I was brave" is both proud and heartbreaking — pride in the self-control required not to weep, at the door, on a Sunday morning.`
    },
    {
      quote: `released a song bird from its cage`,
      act: 'poppies',
      speaker: `Weir`,
      themes: [`loss`, `identity`, `memory`],
      devices: [`metaphor`, `ambiguity`, `imagery`],
      analysis: `The songbird released from its cage is the son leaving home — the mother has opened the cage and let him go. But the metaphor is double-edged: birds are released, but not always safely. A released songbird may be taken by a hawk. "Song bird" — something beautiful, something that makes music — is the mother's image of her child: something precious, now out of her protection. The release is love, and loss, and terror, all in one phrase.`,
      context: `Weir uses the bird metaphor as the poem's pivot from preparation (pinning the poppy, combing the hair) to departure. The cage is both the protection of home and the constraint of childhood; to let the son go is to let him grow up and face danger. The poem never specifies whether the son lives or dies — the ambiguity is deliberate, making the poem resonate for any mother who has watched a child leave.`
    },
    {
      quote: `leaned against it for a while before / I went inside`,
      act: 'poppies',
      speaker: `Weir`,
      themes: [`loss`, `memory`, `identity`],
      devices: [`understatement`, `bathos`, `enjambment`],
      analysis: `The poem ends at the gate, not at the front. The mother does not follow the son; she leans against the gate — a small physical gesture that holds an enormous emotional weight. "For a while" — she cannot say how long; grief distorts time. "Before I went inside" — eventually she turns back to the empty house. The understatement is devastating: she does not weep, does not cry out. She leans. Then she goes inside. The bathos of "went inside" as the poem's final movement makes the private, contained nature of maternal grief unbearably real.`,
      context: `Weir ends the poem with the mother's return to the domestic space, not with any image of the son. This is a poem about the one left behind, not the one who goes. The gate — the threshold between the private and the public, between safety and war — is the poem's geographical and emotional centre. She crosses it to let him go; she crosses back alone.`
    },

    // ── WAR PHOTOGRAPHER (Duffy, 1985) ────────────────────────────────
    {
      quote: `In his dark room he is finally alone / with spools of suffering set out in ordered rows`,
      act: 'war_photographer',
      speaker: `Duffy`,
      themes: [`conflict`, `reality_of_war`, `identity`, `suffering`],
      devices: [`alliteration`, `juxtaposition`, `imagery`, `pun`],
      analysis: `The "dark room" is both the photographic darkroom (where images develop) and a psychological state — the photographer retreats into darkness to process what he has witnessed. "Spools of suffering" — the alliterative pairing compresses technology and humanity: suffering has been reduced to spools of film. "Ordered rows" juxtaposes the chaos of the war zone with the clinical order of the darkroom. Duffy asks: what does it mean to organise and preserve suffering?`,
      context: `Duffy was inspired by the work of war photographers like Don McCullin and Philip Jones Griffiths. The poem explores the ethical paradox of photojournalism: to capture suffering you must witness it without intervening, and the images you produce may be ignored. Written in 1985, the poem reflects growing media saturation — by the time images reach Western newspapers, readers are already numbed.`
    },
    {
      quote: `A hundred agonies in black-and-white / from which his editor will pick out five or six`,
      act: 'war_photographer',
      speaker: `Duffy`,
      themes: [`conflict`, `suffering`, `reality_of_war`, `power`],
      devices: [`imagery`, `structural_irony`, `bathos`],
      analysis: `"A hundred agonies" — vast human suffering reduced to a number. "His editor will pick out five or six" — the editorial process performs a second reduction: from a hundred agonies to five or six images, from five or six to whatever fits beside the travel supplement. The bathos is structural: Duffy shows suffering being processed through a commercial system that values it only as content. The photographer's moral witness is filtered through profit and reader appetite.`,
      context: `Duffy critiques the Western media's consumption of suffering from safe distance. The poem's final image — readers glancing at images "between the bath and pre-lunch beers" — places comfortable domesticity against distant horror. This is the poem's central argument: Western comfort depends on not looking too closely at the suffering that sustains it.`
    },

    {
      quote: `Belfast. Beirut. Phnom Penh. All flesh is grass.`,
      act: 'war_photographer',
      speaker: `Duffy`,
      themes: [`conflict`, `reality_of_war`, `suffering`, `identity`],
      devices: [`listing`, `biblical_allusion`, `bathos`],
      analysis: `Three conflict zones listed as bare nouns — no articles, no verbs, no context. Duffy reduces entire wars to place names, mimicking the photographer's professional geography of disaster. "All flesh is grass" — a biblical quotation (Isaiah 40:6) arrives like a caption: all human life is temporary, impermanent, cut down. The allusion transforms the journalistic listing into a lament. But the juxtaposition of specific place names with timeless scripture also shows the gap: scripture offers consolation; war photography offers only records.`,
      context: `Duffy was writing in 1985, when Belfast (The Troubles), Beirut (Lebanese Civil War), and Phnom Penh (aftermath of the Khmer Rouge) were all active conflict zones in Western media. The photographer travels between them professionally, carrying his camera and his detachment. The biblical quotation is what his professional persona cannot say aloud — that he has witnessed death upon death and it weighs on him.`
    },
    {
      quote: `Something is happening. A stranger's features / faintly start to develop`,
      act: 'war_photographer',
      speaker: `Duffy`,
      themes: [`conflict`, `suffering`, `identity`, `reality_of_war`],
      devices: [`present_tense`, `pun`, `enjambment`],
      analysis: `"Something is happening" — the present tense creates urgency and uncertainty: the image is emerging from the chemical bath, and so is an emotion. "A stranger's features / faintly start to develop" — pun on "develop": the photograph develops, and so does the photographer's recognition of the human being in it. The enjambment places "faintly" at the beginning of a new line — the features are faint, barely visible, not yet fully real. The developing image is also developing guilt.`,
      context: `The darkroom is the poem's psychological space: away from the war zone, away from the editorial process, the photographer is alone with the evidence of what he witnessed. Duffy shows the darkroom as a space of moral awakening — the moment when the professional distance collapses and the photographer sees a person, not a subject.`
    },
    {
      quote: `He has a job to do`,
      act: 'war_photographer',
      speaker: `Duffy`,
      themes: [`conflict`, `identity`, `reality_of_war`],
      devices: [`understatement`, `irony`, `colloquial_language`],
      analysis: `"He has a job to do" — the most mundane possible framing for witnessing atrocity. The colloquial phrase is professional self-justification: the photographer uses employment as moral cover. But "a job to do" is also genuinely true — he is not there as a tourist, but as a journalist whose work might change things. Duffy holds both meanings simultaneously: the phrase is honest about professional necessity and chilling about professional detachment.`,
      context: `War photography has always faced this ethical challenge. Don McCullin, whose work inspired the poem, spoke about the psychological cost of witnessing suffering without intervening. "He has a job to do" is what photographers tell themselves to keep functioning — and Duffy refuses to judge whether this is admirable resilience or moral abdication. The poem holds the question open.`
    },
    {
      quote: `the reader's eyeballs prick / with tears between the bath and pre-lunch beers`,
      act: 'war_photographer',
      speaker: `Duffy`,
      themes: [`reality_of_war`, `conflict`, `suffering`],
      devices: [`bathos`, `irony`, `juxtaposition`],
      analysis: `"Eyeballs prick with tears" — the reader almost cries, physically: this is real emotional response. Then "between the bath and pre-lunch beers" — the bathos is crushing. The emotional response occurs in the interval between domestic pleasures; it costs nothing, changes nothing, and the reader returns to their Sunday. "Pre-lunch beers" is comfortably middle-class, leisured — the precise world from which the war zones are visible only as photographs. Duffy's target is not the photographer but us.`,
      context: `Duffy's final target is Western complicity. The reader — comfortable, clean, pre-lunch — flicks through images of suffering and feels briefly sad, then turns the page. This emotional response is not worthless, but it is not enough. The poem's accusation is structural, not personal: we live in a system that produces both distant suffering and comfortable guilt, and we participate in that system by reading Sunday newspapers.`
    },

    // ── TISSUE (Dharker, 2006) ────────────────────────────────────────
    {
      quote: `Paper that lets the light / shine through, this is what could alter things`,
      act: 'tissue',
      speaker: `Dharker`,
      themes: [`power`, `identity`, `nature`],
      devices: [`imagery`, `enjambment`, `metaphor`],
      analysis: `"Lets the light shine through" — paper as fragile, permeable, transparent. Dharker proposes fragility as a form of power: what can be seen through, what does not block, is a model for more humane structures. "Alter things" — the paper could change the world not through force but through different values: transparency, impermanence, softness. The enjambment enacts the poem's philosophy — lines flow into each other, resisting rigid boundaries.`,
      context: `Dharker was born in Pakistan and grew up in Glasgow. She frequently explores the intersections of culture, faith, and identity. Tissue was written as part of a collection exploring the fragility of human systems — political, religious, and familial. The poem draws on the Qur'an (paper holding holy text) to argue for humility over power. "Alter things" suggests political as well as personal change.`
    },
    {
      quote: `Maps too. The sun shines through / their borderlines, the marks / that rivers make`,
      act: 'tissue',
      speaker: `Dharker`,
      themes: [`power`, `identity`, `nature`],
      devices: [`imagery`, `enjambment`, `symbolism`],
      analysis: `Maps — the instruments of political power (borders, territories, nations) — become translucent when held to the light. "Borderlines" seen through paper are revealed as arbitrary marks: rivers (natural) and lines (man-made) look the same. Dharker argues that national boundaries are as fragile and temporary as tissue paper. The enjambment breaks the word "marks" from "that rivers make" — visually separating the map (human) from the river (natural), just as light separates them.`,
      context: `Dharker's Pakistani background gives "borderlines" specific resonance: the 1947 Partition of India and Pakistan created borders that resulted in one of the largest forced migrations in history. The poem suggests that the borders which separate and divide people are ultimately insubstantial — natural geography (rivers) has no allegiance to political maps. It is a quietly radical argument against nationalism.`
    },

    {
      quote: `An architect could use all this / to re-design the world`,
      act: 'tissue',
      speaker: `Dharker`,
      themes: [`power`, `identity`, `nature`],
      devices: [`conditional`, `metaphor`, `volta`],
      analysis: `"An architect could use all this" — the conditional "could" makes this a possibility, not a certainty: it is a vision of an alternative world. Paper — fragile, transparent, impermanent — as the material for redesigning power structures. The "architect" is both literal (a builder) and metaphorical (anyone who designs systems of power). Dharker argues that if we built our institutions with paper's qualities — lightness, transparency, the ability to let light through — they would be more just and more human.`,
      context: `Dharker's proposal is radical but gentle: she does not demand revolution but reimagination. Her background spans Pakistan, Scotland, and India — three places where the relationship between imposed systems (colonial maps, religious law, national borders) and human life has been violently contested. "Re-design the world" is her quietly subversive call: not to destroy existing structures but to build differently.`
    },
    {
      quote: `how easily / they fall away on a sigh, / how easily they let the names / a family chooses, silt away`,
      act: 'tissue',
      speaker: `Dharker`,
      themes: [`power`, `identity`, `loss`],
      devices: [`repetition`, `imagery`, `enjambment`],
      analysis: `"How easily" repeated — not a complaint but an observation that impermanence is natural, not tragic. Pages of sacred text "fall away on a sigh" — the lightest breath can turn a page. Names written on paper — birth records, family histories — can "silt away": a geological metaphor, like river sediment gradually buried. Dharker shows how official records (the instruments of state power) are themselves made of paper, subject to the same impermanence as human lives. Power's documents are as fragile as the people they govern.`,
      context: `"The names a family chooses" refers to naming traditions across cultures — but also to the way colonial powers renamed places, people, and rivers to assert ownership. The poem quietly points out that these renamings, written on paper, can fall away as easily as the original names. Identity, Dharker suggests, cannot ultimately be controlled by official documents.`
    },
    {
      quote: `the kind of paper used for wrapping incense sticks / or lining a drawer`,
      act: 'tissue',
      speaker: `Dharker`,
      themes: [`identity`, `memory`, `nature`],
      devices: [`domestic_imagery`, `sensory_detail`, `cultural_reference`],
      analysis: `Dharker moves from grand concepts (maps, architecture) to intimate, domestic paper: incense wrapping, drawer liners. The incense reference is culturally specific — incense sticks are used in South Asian and East Asian religious practice, connecting paper to devotion. "Lining a drawer" places the paper in domestic privacy. Both uses are hidden, humble, yet important: paper holds sacred objects, protects household contents. The poem insists on the value of the small and the hidden, against the monumental and the public.`,
      context: `Dharker consistently moves between the global (borders, maps, architecture) and the intimate (family names, drawer liners). This movement argues that the personal and the political are inseparable: the same fragility that makes paper beautiful makes human beings vulnerable to the systems that classify and contain them.`
    },
    {
      quote: `turned into your skin`,
      act: 'tissue',
      speaker: `Dharker`,
      themes: [`identity`, `power`, `nature`],
      devices: [`metaphor`, `direct_address`, `volta`],
      analysis: `The poem's final image: paper becoming human skin. The "you" — a direct address introduced near the poem's end — merges the reader with the paper's qualities. If you were paper: thin, translucent, holding light, impermanent. Dharker asks us to imagine being built with paper's values rather than stone's. "Turned into" suggests transformation: not just described as, but actually becoming. The poem ends by dissolving the boundary between object (paper) and person (you).`,
      context: `Dharker's final line is both utopian and bodily: she imagines human beings as transparent, fragile, letting light through. This is not weakness but a vision of radical openness. Skin, like paper, can be written on, marked, tattooed — both are surfaces that hold identity. Dharker asks: what if human identity were as easy to revise, as lightly held, as a sheet of paper?`
    },

    // ── THE EMIGRÉE (Rumens, 1993) ────────────────────────────────────
    {
      quote: `There once was a country… I left it as a child / but my memory of it is sunlight-clear`,
      act: 'emigree',
      speaker: `Rumens`,
      themes: [`identity`, `memory`, `loss`, `conflict`],
      devices: [`fairy_tale_opening`, `imagery`, `oxymoron`],
      analysis: `"There once was a country" — the fairy-tale register sets up a dreamlike, idealised version of the homeland. The ellipsis performs both nostalgia and uncertainty — the country is half-remembered, half-imagined. "Sunlight-clear" suggests both clarity (vivid memory) and warmth (emotional attachment). The childhood departure means the speaker's country is frozen in memory — she carries a version of it that may no longer exist, changed by war or time.`,
      context: `Rumens deliberately does not name the country, making the poem universally applicable to any experience of exile or displacement. The poem explores what it means to carry a homeland inside you when the physical place has been destroyed, changed, or made inaccessible. This resonates with the experiences of refugees, immigrants, and political exiles worldwide.`
    },
    {
      quote: `My city hides behind me. They mutter death, / and my shadow falls as evidence of sunlight`,
      act: 'emigree',
      speaker: `Rumens`,
      themes: [`identity`, `conflict`, `loss`, `power`],
      devices: [`personification`, `imagery`, `paradox`],
      analysis: `"My city hides behind me" — personification reverses the usual relationship: the speaker protects the city, not vice versa. She carries it, shelters it from those who would destroy her memory of it. "They mutter death" — unnamed authorities try to erase her identity and her homeland. The paradox "shadow falls as evidence of sunlight" is the poem's most beautiful image: her shadow (her presence, her darkness) proves the sunlight (her city's warmth) was real. Darkness confirms the existence of light.`,
      context: `The poem's political dimension becomes clearest here: "they" are authoritarian forces — censors, regimes, or nationalist ideologues — who want to delegitimise her memory and her identity. Rumens argues that exile cannot erase identity: the emigree carries her country more faithfully than those who stayed and changed it. Memory is resistance.`
    },

    {
      quote: `It tastes of sunlight`,
      act: 'emigree',
      speaker: `Rumens`,
      themes: [`identity`, `memory`, `loss`],
      devices: [`synaesthesia`, `imagery`, `sensory_detail`],
      analysis: `Synaesthesia: a remembered place has a taste — not a sight, sound, or smell, but taste, the most intimate and primal sense. "Sunlight" as something edible suggests the homeland is nourishing, life-giving, warm. The city has been absorbed into the speaker's body; she carries it not in her mind but in her flesh. This physicality is important: the memory is not intellectual nostalgia but bodily, organic, impossible to reason away. The brevity of the phrase — three words — matches its simplicity. The city is this simple, this sweet, this present.`,
      context: `Rumens uses sensory memory — the way taste and smell can trigger immediate, involuntary recollection — to convey the involuntary nature of exile's grief. You do not choose to miss your homeland; it arrives without warning, through a taste, a sound, a shaft of light. "It tastes of sunlight" is the poem's most purely emotional moment, before the political threats of the later stanzas reassert themselves.`
    },
    {
      quote: `I am branded by an impression of sunlight`,
      act: 'emigree',
      speaker: `Rumens`,
      themes: [`identity`, `memory`, `conflict`],
      devices: [`metaphor`, `passive_voice`, `permanence`],
      analysis: `"Branded" — marked permanently, like livestock. The passive voice ("am branded") means this was done to her, not chosen: the homeland marked her before she could consent. An "impression" is both a mark pressed into a surface and a vague feeling — her memory of sunlight is both precise (the brand) and uncertain (an impression). She carries this mark into her new country: it cannot be erased by citizenship, language learning, or time.`,
      context: `The branding metaphor carries its darker resonance: it was used on slaves and prisoners. Rumens uses it to show how identity is not freely chosen but imposed — she did not choose to love this country, to be marked by it. For political exiles, this is particularly painful: they may be forced to leave, but they cannot leave their origins behind. The brand is indelible.`
    },
    {
      quote: `They try to close me down`,
      act: 'emigree',
      speaker: `Rumens`,
      themes: [`conflict`, `identity`, `power`],
      devices: [`direct_speech`, `metaphor`, `resistance`],
      analysis: `"They try to close me down" — bureaucratic language applied to a person: you "close down" a business, a building, an account. The phrase reveals how authoritarian power treats individuals: as operations to be terminated. "Try" signals failure: they have not succeeded. The emigree's continued existence — carrying her city, speaking her language, remembering her sunlight — is an act of resistance. To remain open, alive, and remembering is to defeat the forces that want to erase her.`,
      context: `"They" are never identified, which makes them more threatening: censors, border officials, nationalists, regimes. The poem speaks to any experience of forced assimilation or cultural erasure. For Rumens, identity is not something the powerful can simply delete — the emigree persists, her city persists, her language persists, despite every attempt at closure.`
    },
    {
      quote: `my shadow falls as evidence of sunlight`,
      act: 'emigree',
      speaker: `Rumens`,
      themes: [`identity`, `memory`, `conflict`],
      devices: [`paradox`, `imagery`, `volta`],
      analysis: `The paradox: a shadow — darkness, absence — proves the existence of light. Her presence in the new country, her dark differentness (as an immigrant, as "other"), is proof that something bright produced her. The shadow is usually read as threat or negativity; Rumens reclaims it as testimony. She does not need to show her homeland — her shadow does it. The poem's deepest argument is here: the emigree's existence, her life, her difference, is the evidence that her city was real and worth preserving.`,
      context: `The image reverses the usual politics of visibility: the emigree is often told her difference is a problem, an absence, a lack. Rumens says the opposite: her differentness is proof, evidence, testimony. The shadow cast by sunlight is always darker than the absence of sun — the more vividly you have been formed by your homeland, the darker the shadow you carry. This is not a burden but a badge of origin.`
    },

    // ── CHECKING OUT ME HISTORY (Agard, 1996) ────────────────────────
    {
      quote: `Dem tell me / Dem tell me / Wha dem want to tell me`,
      act: 'checking_out_me_history',
      speaker: `Agard`,
      themes: [`power`, `identity`, `anger`],
      devices: [`repetition`, `dialect`, `anaphora`],
      analysis: `The anaphoric "Dem tell me" builds through repetition into frustration and accusation. "Dem" — Caribbean dialect for "them" — immediately establishes the speaker's cultural identity against an educational "them." The repetition mimics the relentless imposition of a colonial curriculum: being told, and told again, what to know. "Wha dem want to tell me" — the curriculum serves the tellers, not the learner. Agard uses dialect as a political act: the language resists the education that tried to erase it.`,
      context: `Agard was born in Guyana and moved to Britain in 1977. The poem critiques the British school curriculum of the 1970s-80s, which taught British history (Dick Whittington, 1066, Florence Nightingale) while ignoring the histories of Caribbean, African, and Asian people. For Black British children, this curriculum taught them their heritage was invisible and unimportant — a form of cultural erasure Agard calls out directly.`
    },
    {
      quote: `But Toussaint L'Ouverture / no dem never tell me bout dat`,
      act: 'checking_out_me_history',
      speaker: `Agard`,
      themes: [`identity`, `power`, `pride`],
      devices: [`contrast`, `dialect`, `italics`],
      analysis: `The italics and different stanza format for Black historical figures (Toussaint, Nanny, Mary Seacole) visually separate them from the mock-nursery rhyme stanzas of British history, suggesting they exist in a different, more serious register. "No dem never tell me bout dat" — triple negative in Caribbean dialect emphasises the depth of the absence. Toussaint L'Ouverture led the Haitian Revolution, the only successful slave revolt in history — his omission from the curriculum is not accidental but political.`,
      context: `Toussaint L'Ouverture (1743-1803) was the leader of the Haitian Revolution that led to the first free Black republic. His story directly challenges the British empire's self-image. Agard's argument is that the curriculum omitted Black history not because it was unimportant but because it was inconvenient for a narrative of white British superiority. Including it would require acknowledging colonialism and slavery.`
    },

    {
      quote: `Bandage up me eye with me own history`,
      act: 'checking_out_me_history',
      speaker: `Agard`,
      themes: [`power`, `identity`, `anger`],
      devices: [`metaphor`, `dialect`, `imagery`],
      analysis: `"Bandage up me eye" — the colonial curriculum is presented as a blindfold made from "me own history": the speaker is blinded using his own people's story, selectively edited. The metaphor is powerful because it makes the speaker complicit: his history is used against him, turned into an instrument of his own oppression. "Me own history" — the dialect possessive insists on ownership even in the act of describing dispossession. His history belongs to him; it has been stolen and weaponised.`,
      context: `Agard's central argument is that the British school curriculum performed a kind of epistemological violence: by omitting Black and Caribbean history, it implied these histories did not exist or did not matter. This is a form of cultural blindfolding — children could not see themselves in the stories they were told. By naming this explicitly ("bandage up me eye"), Agard makes the mechanism of colonial education visible.`
    },
    {
      quote: `Dick Whittington and he cat / but Nanny de maroon`,
      act: 'checking_out_me_history',
      speaker: `Agard`,
      themes: [`power`, `identity`, `pride`],
      devices: [`contrast`, `juxtaposition`, `dialect`],
      analysis: `"Dick Whittington and he cat" — Agard renders English nursery-rhyme history in Caribbean dialect, subtly mockingly. "But Nanny de maroon" — juxtaposed against this trivial British legend is the Jamaican Maroon leader Nanny, who led guerrilla resistance against British colonial rule. The contrast is the argument: the curriculum taught fairy tales about a London merchant and his cat while omitting a real, revolutionary Black woman leader. "But" carries the weight of the entire poem's argument.`,
      context: `Nanny of the Maroons (c.1686-c.1755) was an Akan-born leader who led the Windward Maroons in Jamaica against British colonisers. She was eventually granted a peace treaty and land. Her story directly challenges the British colonial narrative of benevolent rule. Agard's decision to place Dick Whittington directly beside Nanny exposes the absurdity of what was considered educationally important.`
    },
    {
      quote: `Nanny see-far woman / of mountain dream`,
      act: 'checking_out_me_history',
      speaker: `Agard`,
      themes: [`identity`, `pride`, `power`],
      devices: [`italics`, `imagery`, `celebration`],
      analysis: `The italics signal a different register: when Agard celebrates Black historical figures, the poem's typography shifts. "See-far woman" — visionary, a prophet, someone who can see beyond the present. "Mountain dream" — Nanny lived in the Blue Mountains of Jamaica, and the landscape is part of her power. The language is elevated, lyrical, reverent: a complete contrast to the mock-nursery-rhyme stanzas for British history. Agard's form enacts his argument: these figures deserve a different, more serious kind of attention.`,
      context: `Nanny was named a National Hero of Jamaica in 1976. Agard's poem reclaims her for the Caribbean diaspora in Britain — restoring a hero who was erased from the curriculum. The formal difference (italics, different rhythm) is also an argument: Black history requires a different mode of telling because it was suppressed in a different mode. You cannot undo colonial education with the same language that performed it.`
    },
    {
      quote: `I carving out me identity`,
      act: 'checking_out_me_history',
      speaker: `Agard`,
      themes: [`identity`, `power`, `pride`],
      devices: [`present_continuous`, `metaphor`, `dialect`],
      analysis: `"Carving out" — active, effortful, ongoing: identity is not given but made, not inherited but constructed through the labour of recovering suppressed history. The present continuous tense makes this permanent and unfinished — the poem's final statement is not a resolution but a process. "Me identity" — the dialect possessive insists on ownership: this is mine, not yours to define or withhold. The poem ends where it began (identity) but transformed: from passive blindfolding to active carving.`,
      context: `The poem's final movement is from oppression to agency. Agard does not end in anger but in self-creation: "I carving out me identity" is a declaration that the colonial curriculum has failed. Despite every attempt to bandage his eyes with selective history, the speaker has found other stories, other heroes, other ways of knowing himself. Identity, Agard argues, is always possible to recover — but it requires work.`
    },

    // ── KAMIKAZE (Garland, 2006) ──────────────────────────────────────
    {
      quote: `the dark shoal of flies / parted before him like a door`,
      act: 'kamikaze',
      speaker: `Garland`,
      themes: [`conflict`, `identity`, `nature`, `loss`],
      devices: [`simile`, `imagery`, `nature_symbolism`],
      analysis: `"Dark shoal of flies" uses natural imagery — fish moving in formation — to describe the fighter planes. The natural comparison softens the military technology, suggesting the pilot's connection to the natural world rather than the military one. "Parted like a door" — nature opens before him, inviting him away from his mission. The simile presents his turning back as a natural, not a cowardly, act. Garland uses nature throughout to suggest the pilot's decision was a return to life rather than a betrayal of honour.`,
      context: `Garland was inspired by a photograph of a kamikaze pilot before his mission. The poem explores the conflict between cultural/military duty (self-sacrifice for the Emperor) and the individual human will to survive. Japan's bushido code of honour considered it shameful to surrender or turn back; the pilot who returned would face family and social ostracism. Garland asks which requires more courage: dying on command or choosing to live.`
    },
    {
      quote: `his father's sword / to bring back ships / of all his emperor commanded`,
      act: 'kamikaze',
      speaker: `Garland`,
      themes: [`conflict`, `identity`, `pride`, `loss`],
      devices: [`imagery`, `duty`, `juxtaposition`],
      analysis: `"His father's sword" — the weapon is inherited, not chosen: the pilot carries his father's military identity into the cockpit. "To bring back ships of all his emperor commanded" — the mission is framed through absolute obedience. The father's sword should have ensured the mission; instead, the pilot will turn back. The juxtaposition of the inherited obligation (sword, emperor, command) against the eventual choice to live reveals the poem's central conflict: filial and imperial duty against the individual will to survive.`,
      context: `The kamikaze pilots were not fanatics but young men trained in a culture where honour and sacrifice were sacred obligations. Many were university students, recruited with appeals to patriotism and bushido — the samurai code. The father's sword connects this pilot to a tradition of Japanese military honour going back centuries. Garland asks what it means to break that tradition in the name of living.`
    },
    {
      quote: `the swordfish and the tuna / and the huge, translucent fish / their silver-blue scales`,
      act: 'kamikaze',
      speaker: `Garland`,
      themes: [`nature`, `identity`, `conflict`],
      devices: [`imagery`, `listing`, `beauty`],
      analysis: `As the pilot looks down into the ocean, nature overwhelms duty. The listing of fish — swordfish, tuna, "huge translucent" varieties — builds a world of dazzling variety and life beneath him. "Silver-blue scales" — the colour is both beautiful and specific, suggesting the pilot sees clearly, sees the individual creatures rather than an abstract ocean. Nature offers him everything the military mission denies: beauty, specificity, life. He looks down into the sea and sees a reason to live.`,
      context: `Garland uses natural imagery throughout to represent the instinct for life against the cultural demand for death. The pilot was raised in a fishing community; the sea is not just scenery but his heritage, his livelihood, his identity before he became a soldier. The fish his father caught, the seas he knows — these call him back more powerfully than the emperor's command.`
    },
    {
      quote: `at the very end / the sun wore a golden eye`,
      act: 'kamikaze',
      speaker: `Garland`,
      themes: [`nature`, `identity`, `conflict`],
      devices: [`personification`, `imagery`, `ambiguity`],
      analysis: `"The sun wore a golden eye" — the sun as a watching presence, wearing an eye like a mask or monocle. Personification makes the sun a witness to the pilot's decision. "Golden" is warm, life-affirming, the opposite of the "dark shoal" of the mission. The sun watches him turn back: nature endorses the choice to live. But the eye also watches without expression — it does not judge, simply sees. The ambiguity leaves open whether the sun's golden gaze is approval, witness, or indifference.`,
      context: `Japan's national symbol is the rising sun — the flag, the imperial imagery, everything the pilot's mission is meant to serve. Garland's image of a sun that watches with a "golden eye" rather than a rising red disc subtly reframes the symbol: this sun belongs to nature, not to the empire. It is the sun of the living world, not of military sacrifice.`
    },
    {
      quote: `she said he must have / looked far down / and seen what was there`,
      act: 'kamikaze',
      speaker: `Garland (via the daughter)`,
      themes: [`conflict`, `identity`, `nature`, `memory`],
      devices: [`dramatic_monologue`, `third_person`, `enjambment`],
      analysis: `The narration shifts from third-person (the pilot) to the daughter's perspective — and then further, to reported speech about the daughter's imagined version of events. This layered distance mirrors the family's emotional distance from the father after his "dishonour." "She said he must have looked far down" — the daughter constructs a story of redemption for the man she could not speak to. The enjambment creates a tentative, searching quality: she is feeling her way toward understanding.`,
      context: `After the pilot returned, his family refused to acknowledge his existence — he was treated as if already dead. This social death is arguably crueller than physical death. The poem is told through the daughter's perspective because she is the most morally complex voice: she was taught to be ashamed of him, but as an adult she searches for a more humane interpretation. Garland asks: which society is more humane — one that demands death, or one that values life?`
    },
    {
      quote: `we too / felt the shame`,
      act: 'kamikaze',
      speaker: `Garland (via the daughter)`,
      themes: [`conflict`, `identity`, `loss`, `memory`],
      devices: [`first_person_plural`, `volta`, `understatement`],
      analysis: `"We too" — the daughter includes herself in the shame she was taught to feel. This is the poem's most devastating admission: the family, including the daughter, internalised the culture's condemnation and treated the father as if he were dead. "Felt the shame" — past tense, spoken from adulthood, suggests she no longer feels it: the poem is an act of retrospective revision. But the damage was done. Garland shows how shame is transmitted through families as surely as love — and how it can destroy a person more completely than death.`,
      context: `The poem's final movement is a confession by the daughter that she participated in her father's social death. As a child, she was too young to resist the cultural pressure; as an adult, she tells his story. The poem is an act of posthumous redemption — too late to save him, but not too late to bear witness. Garland asks: which society is crueller — one that sends young men to die, or one that punishes those who choose to live?`
    }
  ],

  bestIdx: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84]
};

// Register into the global TEXTS object (defined in english-literature.js)
TEXTS.power_conflict = POWER_CONFLICT;
