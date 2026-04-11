// ══════ EDEXCEL GCSE BIOLOGY (1BI0) — Exam Board Tailored ══════
// Based on Pearson Edexcel Level 1/Level 2 GCSE (9-1) Biology specification
// Topics 1-9 with Edexcel-specific learning outcomes and emphasis

const EDEXCEL_BIO_DATA = [
  {
    section: '1. Key Concepts in Biology',
    icon: '🧬',
    color: '#2563EB',
    topics: [
      {
        ref: '1.1',
        title: 'Cell Structure and Organisation',
        formulas: [
          'Magnification = Size of image ÷ Actual size',
          'All living things are made of cells; cells come from pre-existing cells'
        ],
        points: [
          'Eukaryotic cells (animal and plant) have a nucleus; prokaryotic cells (bacteria) do not',
          'Animal cell organelles: nucleus (DNA control), mitochondria (aerobic respiration/ATP), ribosome (protein synthesis), rough ER (protein transport), Golgi (protein packaging), vesicles, centrioles',
          'Plant cell organelles: all animal structures PLUS chloroplasts (photosynthesis), cell wall (cellulose support), large vacuole (turgor), plasmodesmata (cell-to-cell communication)',
          'Prokaryotic cells: nucleoid (DNA), ribosomes (70S, smaller than eukaryotic 80S), cell wall (peptidoglycan, NOT cellulose), flagella (movement), pili (attachment)',
          'Specialised cells: sperm (mitochondria-rich, flagellum for movement), egg (packed with nutrients), ciliated epithelial cells (cilia beat to move fluids), neurones (long axons for signalling)',
          'Magnification: Light microscopes up to ×1500, electron microscopes up to ×2,000,000 with much better resolution',
          'Resolution: the ability to distinguish two points as separate — electron microscopes reveal ultrastructure light microscopes cannot'
        ],
        tip: 'Edexcel emphasizes functional relationships between organelles. Link mitochondria to cells that need lots of energy (muscle, sperm). Link chloroplasts only to plant cells.',
        example: 'A sperm cell has many mitochondria because it needs lots of ATP for the flagellum to swim. Nerve cells have many mitochondria to power ion pumps. Root tip cells have fewer mitochondria than leaf mesophyll cells.'
      },
      {
        ref: '1.2',
        title: 'Enzymes',
        formulas: [
          'Enzyme equation: E + S → ES → E + P (enzyme + substrate → enzyme-substrate complex → enzyme + product)',
          'Rate increases with temperature until denaturation occurs around 40–50°C for human enzymes'
        ],
        points: [
          'Enzymes are proteins that act as biological catalysts — they speed up reactions without being used up',
          'Enzymes have an active site with a specific 3D shape complementary to the substrate (lock-and-key model, though induced fit is more accurate)',
          'Enzyme specificity: each enzyme catalyzes ONE type of reaction; determined by active site shape and chemical groups',
          'Enzyme function affected by: temperature (kinetic energy increases collision rate until denaturation), pH (changes active site ionization), substrate concentration (at low concentration, rate ∝ substrate; at high concentration, rate plateaus)',
          'Denaturation: when enzymes are heated beyond their optimum, the protein structure breaks down and they can no longer function',
          'Cofactors and coenzymes: some enzymes need non-protein helpers (e.g., metal ions like Mg²⁺ for chlorophyll, NAD⁺ for respiration)',
          'Industrial uses: detergent enzymes (work at low temps to save energy), food industry (cheese making with chymosin), brewing'
        ],
        tip: 'Edexcel likes questions about enzyme denaturation vs. lower activity. Know the difference: lower temp = slower reaction but enzyme still works; higher than optimum temp = permanent damage.',
        example: 'Pepsin (stomach enzyme) has optimum pH 2 (very acidic). Trypsin (small intestine) has optimum pH 8 (slightly alkaline). This is why stomach acid doesn\'t break down enzymes — they\'re adapted to it.'
      },
      {
        ref: '1.3',
        title: 'Transport Across Cell Membranes',
        formulas: [
          'Rate of diffusion ∝ surface area × concentration gradient / distance'
        ],
        points: [
          'Cell membrane: partially permeable phospholipid bilayer with embedded proteins (controls what enters/exits)',
          'Diffusion: passive movement of particles from HIGH to LOW concentration; no energy required. Examples: O₂ into cells, CO₂ out of cells, glucose diffusing along concentration gradients',
          'Osmosis: WATER ONLY — passive movement from dilute solution (more water) to concentrated solution (less water) through a partially permeable membrane',
          'Active transport: movement from LOW to HIGH concentration (AGAINST gradient); requires energy from ATP in mitochondria. Examples: mineral ions into root hair cells, glucose into bloodstream from small intestine',
          'Factors affecting diffusion: larger surface area = faster; steeper concentration gradient = faster; higher temperature = faster; thinner membrane = faster',
          'Plant cell in pure water: water enters by osmosis → cell becomes turgid (firm, doesn\'t burst because of cell wall support)',
          'Plant cell in concentrated sugar solution: water leaves by osmosis → cell becomes plasmolyzed (membrane shrinks away from wall, cell dies)',
          'Animal cell in hypotonic solution: swells and bursts (lyses) because no cell wall support'
        ],
        tip: 'Edexcel emphasizes the MECHANISM — know that diffusion and osmosis are passive (no energy), while active transport requires ATP from mitochondria.',
        example: 'Root hair cells use active transport to absorb mineral ions against the concentration gradient because soil solution is dilute. This requires lots of mitochondria providing ATP.'
      },
      {
        ref: '1.4',
        title: 'Food Tests and Calorimetry',
        points: [
          'Carbohydrates: reducing sugars (glucose, fructose, maltose) turn Fehling\'s reagent blue → brick red precipitate when heated',
          'Starch: turns iodine solution blue-black (forms iodine-amylose complex)',
          'Proteins: biuret test — copper sulfate in alkaline solution turns violet/purple',
          'Lipids: ethanol test — lipids dissolve in ethanol making solution cloudy, or paper bag test — grease spot remains after paper dries',
          'Calorimetry: using bomb calorimeters or simple combustion to measure energy content of food in joules (J) or kilojoules (kJ)',
          'Calorific value: amount of energy released per gram of food (kJ/g); carbs ~17 kJ/g, lipids ~38 kJ/g, proteins ~17 kJ/g'
        ],
        tip: 'Edexcel often asks to plan experiments testing for different nutrients. Remember: never taste chemicals in biology exams! Use reagents and observe color changes.'
      }
    ]
  },
  {
    section: '2. Cells and Control',
    icon: '🫀',
    color: '#DC2626',
    topics: [
      {
        ref: '2.1',
        title: 'Cell Division — Mitosis',
        points: [
          'Mitosis: cell division producing TWO genetically identical daughter cells; used for growth, repair, asexual reproduction',
          'Cell cycle: G1 (gap 1 — growth, normal functions) → S (synthesis — DNA replication) → G2 (gap 2 — growth, preparation) → M (mitosis)',
          'DNA replication (S phase): each chromosome is copied; afterward each has TWO sister chromatids joined at a centromere',
          'Stages of mitosis: PMAT',
          '  - Prophase: chromosomes condense and become visible; spindle apparatus forms from centrioles; nuclear envelope breaks down',
          '  - Metaphase: chromosomes line up at equator (metaphase plate); spindle fibers attach to centromeres',
          '  - Anaphase: sister chromatids pulled apart to opposite poles; they are now individual chromosomes',
          '  - Telophase: chromosomes decondense; nuclear envelopes reform; spindle disappears',
          'Cytokinesis (overlaps telophase): cytoplasm divides; in animals, cleavage furrow forms; in plants, cell plate forms',
          'Result: TWO diploid cells with SAME chromosome number and genetic information as parent',
          'Cancer: uncontrolled mitosis — cells divide repeatedly forming a tumour; mutations disable growth-check mechanisms (tumor suppressors and oncogenes)'
        ],
        tip: 'Edexcel exams often show diagrams asking which stage is shown. REMEMBER: SAME chromosome number throughout; sister chromatids separate in anaphase.',
        example: 'Human somatic cell: 46 chromosomes (diploid). After mitosis: two cells, each with 46 chromosomes. The DNA has doubled and split equally.'
      },
      {
        ref: '2.2',
        title: 'Meiosis and Sexual Reproduction',
        points: [
          'Meiosis: cell division producing FOUR genetically DIFFERENT gametes (sex cells) with HALF the chromosome number (haploid)',
          'Occurs in ovaries (producing eggs) and testes (producing sperm) only — NOT in somatic cells',
          'Meiosis I: homologous chromosome pairs separate (reduction division) — chromosome number halves',
          'Meiosis II: sister chromatids separate (like mitosis) — produces four haploid cells',
          'Human gametes: 23 chromosomes (haploid, n=23); fertilization restores 46 (diploid, 2n=46)',
          'Genetic variation sources: (1) crossing over — homologous chromosomes exchange DNA segments in prophase I; (2) independent assortment — random orientation of chromosome pairs on meiosis I spindle',
          'Why gametes are unique: due to genetic variation, each sperm or egg is genetically different (why siblings look different despite same parents)',
          'Sexual reproduction advantages: genetic variation for evolution; disadvantages: takes longer and needs two parents',
          'Asexual reproduction advantages: faster, only one parent needed; disadvantages: no genetic variation (clones), population vulnerable to disease'
        ],
        tip: 'KEY DIFFERENCE from mitosis: FOUR cells (not two), HAPLOID (not diploid), GENETICALLY DIFFERENT (not identical). Edexcel LOVES comparison questions.',
        example: 'A diploid human cell with 46 chromosomes undergoing meiosis produces four sperm cells, each with 23 chromosomes, all genetically unique.'
      },
      {
        ref: '2.3',
        title: 'Cellular Control and Stem Cells',
        points: [
          'Cell differentiation: as cells develop, they specialize to specific roles by expressing different genes',
          'Stem cells: undifferentiated cells that can divide many times and differentiate into different cell types',
          'Adult stem cells: found in bone marrow, fat, blood; limited differentiation potential',
          'Embryonic stem cells: can differentiate into any cell type (pluripotent); used in research',
          'Therapeutic potential: replacing damaged cells (nerve injuries, heart disease), testing new drugs, understanding development',
          'Ethical concerns: embryonic stem cell research involves destroying embryos; some religious/ethical opposition',
          'Induced pluripotent stem cells (iPSCs): mature cells reprogrammed to stem cell state; avoid ethical issues of embryonic cells'
        ],
        tip: 'Edexcel emphasizes therapeutic applications and ethical debates. Be prepared to discuss both benefits and concerns.'
      },
      {
        ref: '2.4',
        title: 'Control by the Nervous System',
        points: [
          'Nervous system function: detects stimuli (sensory receptors) → transmits information (neurons) → responds (effectors like muscles)',
          'Neurons: specialized cells with long extensions for communication',
          '  - Sensory neurone: receptor (detects stimulus) → sensory neurone → spinal cord/brain',
          '  - Motor neurone: brain/spinal cord → motor neurone → effector (muscle/gland)',
          '  - Relay neurone: connects neurons within CNS',
          'Reflex arc: rapid response to stimuli WITHOUT conscious thought (shorter pathway); e.g., pulling hand from hot object',
          'Reflex arc pathway: stimulus → receptor → sensory neurone → spinal cord (synapse to motor neurone) → motor neurone → effector → response',
          'Synapse: gap between neurons; neurotransmitter chemicals diffuse across to transmit signal',
          'Brain regions: cerebrum (conscious control, memory), cerebellum (coordination, balance), medulla (autonomic: breathing, heart rate), hypothalamus (temperature, hormones)',
          'Sensory receptors: photoreceptors (light), chemoreceptors (taste, smell), mechanoreceptors (touch, pressure, sound)',
          'Pupil reflex: bright light → pupils constrict (to protect retina); dim light → pupils dilate (to let in more light) via autonomic nervous system'
        ],
        tip: 'Edexcel emphasizes reflex arcs as automatic responses. Know the synapse structure and neurotransmitter function.'
      },
      {
        ref: '2.5',
        title: 'The Eye and Vision',
        formulas: [
          'Magnification = image height / object height'
        ],
        points: [
          'Eye structure: cornea (protective, refracts light), aqueous humor (maintains pressure), lens (focuses light via accommodation), iris (controls light entry), retina (photoreceptor cells), optic nerve (transmits impulses)',
          'Lens accommodation: ciliary muscles contract → lens thickens (for near objects); muscles relax → lens thins (for distant objects)',
          'Rods vs. cones: rods (black/white vision, work in dim light, more numerous), cones (color vision, work in bright light)',
          'Focusing problems: myopia (short-sight — eye too long, focal point in front of retina, correct with concave lens), hyperopia (long-sight — eye too short, focal point behind retina, correct with convex lens)',
          'Presbyopia: lens loses elasticity with age, harder to focus on near objects',
          'Modern corrections: spectacles, contact lenses, laser eye surgery (LASIK) reshapes cornea'
        ],
        tip: 'Edexcel includes eye defects and corrections. Remember: myopia = concave lens (diverging), hyperopia = convex lens (converging).'
      }
    ]
  },
  {
    section: '3. Genetics',
    icon: '🧬',
    color: '#7C3AED',
    topics: [
      {
        ref: '3.1',
        title: 'DNA Structure and Genetic Code',
        points: [
          'DNA: polymer made of two strands coiled into a double helix',
          'DNA components: deoxyribose sugar, phosphate groups (form backbone), nitrogenous bases (A, T, G, C — store information)',
          'Base pairing: A pairs with T (2 hydrogen bonds); G pairs with C (3 hydrogen bonds); this is complementary base pairing',
          'Semi-conservative replication: double helix unwinds; each strand serves as template; new strand synthesized with complementary bases',
          'Genetic code: triplet of bases (codon) codes for one amino acid',
          'The code is universal (nearly all organisms use same codon meanings), degenerate (multiple codons can code for same amino acid), non-overlapping',
          'mRNA transcription: DNA unwinds; mRNA synthesized complementary to one DNA strand (except U instead of T); mRNA carries message to ribosomes',
          'Translation: mRNA sequence read by ribosome; tRNA brings amino acids; amino acids joined in order specified by codons'
        ],
        tip: 'Edexcel emphasizes complementary base pairing in replication and the central dogma: DNA → mRNA → Protein.'
      },
      {
        ref: '3.2',
        title: 'Inheritance Patterns',
        points: [
          'Chromosomes: structures containing genes (DNA); humans have 23 pairs (46 total) — 22 autosomes + 1 sex chromosome pair (XX or XY)',
          'Alleles: different versions of the same gene; dominant (D — expressed in heterozygotes), recessive (d — only expressed in homozygotes)',
          'Genotype: genetic makeup (e.g., DD, Dd, dd); Phenotype: observable characteristics',
          'Punnett squares: show all possible gamete combinations and offspring genotypes/phenotypes',
          'Monohybrid inheritance: inheritance of ONE trait controlled by ONE gene',
          '  - Two parents heterozygous (Aa × Aa): offspring 1 AA : 2 Aa : 1 aa; phenotype 3 dominant : 1 recessive',
          'Homozygous: both alleles same (AA or aa); heterozygous: alleles different (Aa)',
          'Sex-linked traits: genes on X chromosome (males hemizygous — only one allele). Examples: color blindness, hemophilia (more common in males)'
        ],
        tip: 'Edexcel questions often ask you to predict offspring or work backward from ratios. Master Punnett squares and be able to explain the 3:1 ratio.'
      },
      {
        ref: '3.3',
        title: 'Mutations and Variation',
        points: [
          'Mutation: random change in DNA; can be beneficial, neutral, or harmful',
          'Types of mutation: (1) substitution — one base replaced with another; (2) insertion — extra base added; (3) deletion — base removed',
          'Substitution examples: sickle cell (glutamic acid → valine in hemoglobin due to single base change)',
          'Insertion/deletion: often more harmful because they shift the reading frame (frameshift), changing all downstream codons',
          'Causes: spontaneous errors in DNA replication, ionizing radiation, chemical mutagens',
          'Evolution link: mutations provide variation; natural selection acts on this variation',
          'Human genetic variation: due to sexual reproduction (genetic recombination) and mutation'
        ],
        tip: 'Edexcel emphasizes that mutations are the ultimate source of genetic variation, and most mutations are neutral or harmful but some are advantageous.'
      }
    ]
  },
  {
    section: '4. Natural Selection and Genetic Modification',
    icon: '🦁',
    color: '#EA580C',
    topics: [
      {
        ref: '4.1',
        title: 'Evidence for Evolution',
        points: [
          'Fossil record: shows gradual change in species over time; older rocks contain simpler organisms, newer rocks contain complex ones',
          'Darwin\'s theory of evolution by natural selection: (1) organisms produce more offspring than survive; (2) variation exists in population; (3) individuals better adapted to environment more likely to survive (survival of the fittest); (4) successful traits passed to offspring',
          'Selective breeding: humans select organisms with desirable traits to breed together, increasing those traits in population',
          'Antibiotic resistance: bacteria exposed to antibiotics — most die, resistant ones survive and reproduce, population becomes resistant. This is natural selection in action, proving evolution occurs.',
          'Human evolution evidence: fossil hominins (Lucy, Homo erectus, Neanderthals) show progression from ape-like ancestors; stone tools in older layers show increasing sophistication',
          'Overproduction: organisms produce more offspring than environment can support, leading to competition and natural selection',
          'Adaptation: inherited traits increasing survival chances (e.g., polar bear fur for cold, cactus spines for water conservation)'
        ],
        tip: 'Edexcel stresses that antibiotic resistance PROVES evolution by natural selection is happening now. Know how resistance develops and spreads.'
      },
      {
        ref: '4.2',
        title: 'Genetic Modification',
        points: [
          'Genetic engineering: inserting genes from one organism into another to give new trait',
          'Techniques: restriction enzymes cut DNA at specific sequences; ligase enzymes join DNA; vectors (plasmids, viruses) carry genes into cells',
          'Applications: insulin production in bacteria, herbicide-resistant crops, disease-resistance breeding',
          'Genetically modified (GM) crops: advantages — higher yield, disease resistant, drought tolerant; disadvantages — reduced genetic diversity, possible gene transfer to wild relatives, ethical concerns',
          'Selective breeding (traditional): choosing organisms with desired traits and breeding them together; takes many generations',
          'GM vs. selective breeding: GM is faster and more precise; selective breeding is "natural" but slower'
        ],
        tip: 'Edexcel includes evaluation questions about benefits and risks of GMOs. Know both sides of the ethical debate.'
      }
    ]
  },
  {
    section: '5. Health, Disease and Medicine Development',
    icon: '💊',
    color: '#DB2777',
    topics: [
      {
        ref: '5.1',
        title: 'Pathogen Types and Disease',
        points: [
          'Disease: departure from normal health; can be communicable (caused by pathogen, spreads between individuals) or non-communicable (lifestyle/genetic)',
          'Pathogens: disease-causing organisms',
          '  - Bacteria: single-celled prokaryotes; cause: tuberculosis, food poisoning, strep throat',
          '  - Viruses: non-living, contain DNA/RNA in protein coat; cause: flu, measles, HIV; can only replicate inside cells',
          '  - Fungi: eukaryotic; cause: athlete\'s foot, thrush',
          '  - Protistans: single-celled eukaryotes; cause: malaria (Plasmodium), dysentery',
          'Transmission: direct (contact), water-borne, airborne droplets, vectors (insects)',
          'Prevention: hygiene, vaccination, quarantine, antibiotic treatment (bacteria only)'
        ],
        tip: 'Edexcel distinguishes clearly between bacteria and viruses. Antibiotics work on bacteria but NOT viruses.'
      },
      {
        ref: '5.2',
        title: 'Immune Response',
        points: [
          'Immune system: defends against pathogens using white blood cells (phagocytes and lymphocytes)',
          'Phagocytes: white blood cells that engulf and destroy bacteria and dead cells',
          'Lymphocytes: produce antibodies (proteins that recognize specific pathogens)',
          'Antibodies: Y-shaped proteins; each specific to one antigen; produced by B lymphocytes',
          'Immune response: (1) pathogen enters → (2) phagocytes engulf → (3) B lymphocytes produce antibodies → (4) antibodies bind to pathogen marking it for destruction',
          'Immunity: resistance to reinfection due to memory cells remembering the pathogen and quickly producing antibodies',
          'Vaccination: introducing harmless form of pathogen (attenuated or antigen only) to trigger immune response without disease; if same pathogen encountered later, immune system rapidly responds'
        ],
        tip: 'Edexcel emphasizes that antibodies are proteins and take time to be produced (primary response slower than secondary response).'
      },
      {
        ref: '5.3',
        title: 'Antibiotics and Antibiotic Resistance',
        points: [
          'Antibiotics: substances that kill bacteria or stop their growth (bacteria only, not viruses)',
          'Antibiotic resistance: bacteria survive antibiotic exposure due to genes conferring resistance',
          'How resistance spreads: (1) some bacteria have resistance genes; (2) antibiotic kills non-resistant bacteria; (3) resistant bacteria survive and reproduce; (4) population becomes resistant',
          'Resistance genes spread via: horizontal gene transfer (plasmids passed between bacteria), natural selection (resistant bacteria outcompete non-resistant)',
          'Overuse of antibiotics: increases selection pressure for resistant bacteria; contributing to problem of antibiotic-resistant infections (MRSA, tuberculosis)',
          'Solutions: use antibiotics only when necessary, complete full course, develop new antibiotics'
        ],
        tip: 'This is a major Edexcel topic. Understand that antibiotic resistance is an example of natural selection happening now.'
      },
      {
        ref: '5.4',
        title: 'Monoclonal Antibodies (Higher Tier)',
        points: [
          'Monoclonal antibodies: identical antibodies produced by cloned B cells; each recognizes one specific antigen',
          'Production: immunize mouse with antigen → isolate B cell producing antibody → fuse with myeloma cell (cancer cell) → hybridoma produces monoclonal antibodies indefinitely',
          'Advantages over polyclonal: highly specific (recognize only target antigen), pure (no contamination)',
          'Medical uses: pregnancy tests (detect hCG hormone), cancer treatment (deliver toxins to tumor cells), diagnostic tests'
        ],
        tip: 'Higher tier content. Know the basic process and applications.'
      },
      {
        ref: '5.5',
        title: 'Medicine Development and Lifestyle Factors',
        points: [
          'New medicine development: (1) drug discovery (from plants, synthesis, screening); (2) preclinical testing (lab tests); (3) clinical trials (Phase 1, 2, 3 on humans); (4) FDA approval; (5) post-market surveillance',
          'Clinical trial phases: Phase 1 (safety, dosage on small healthy group); Phase 2 (effectiveness on patient group); Phase 3 (compare to best treatment on large group)',
          'Lifestyle factors affecting health: diet, smoking, alcohol, exercise, stress, sleep',
          'Cardiovascular disease risks: smoking (damages endothelium), high cholesterol (plaque buildup), high blood pressure (atherosclerosis), obesity (risk factor), type 2 diabetes (related to obesity)',
          'Obesity: excess body fat; calculated as BMI = mass (kg) / height² (m²). Health risks: type 2 diabetes, cardiovascular disease, joint problems',
          'Type 2 diabetes: body can\'t use insulin effectively (insulin resistance); often linked to obesity and lack of exercise'
        ],
        tip: 'Edexcel includes evaluation of prevention strategies. Know that lifestyle changes are often the first line of defense against non-communicable diseases.'
      }
    ]
  },
  {
    section: '6. Plant Structures and Functions',
    icon: '🌿',
    color: '#16A34A',
    topics: [
      {
        ref: '6.1',
        title: 'Plant Tissues and Organ Systems',
        points: [
          'Plant organs: leaves (photosynthesis), stems (support, transport), roots (absorption, anchorage)',
          'Leaf structure: upper epidermis (protective), palisade mesophyll (photosynthesis — columnar cells), spongy mesophyll (gas exchange, loose arrangement), lower epidermis, stomata (gas exchange pores)',
          'Guard cells: control stomata opening/closing via osmotic pressure changes',
          'Root hair cells: increase surface area for water and mineral absorption; long extensions into soil',
          'Xylem: transport water and minerals upward; made of dead cells forming tubes; water moves by capillary action and root pressure',
          'Phloem: transport sugars (products of photosynthesis) up and down the plant; made of living cells; movement requires energy'
        ],
        tip: 'Edexcel emphasizes adaptation of structures to functions. Link large surface area to absorption (roots) and photosynthesis (leaves).'
      },
      {
        ref: '6.2',
        title: 'Photosynthesis',
        formulas: [
          'Photosynthesis: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂',
          'Rate equation: rate of photosynthesis = light-dependent reactions / light-independent reactions'
        ],
        points: [
          'Photosynthesis: endothermic reaction using light energy to produce glucose from CO₂ and water',
          'Location: chloroplasts; light-dependent reactions in thylakoids, light-independent (Calvin cycle) in stroma',
          'Light-dependent reactions: photosystem II absorbs photons → electrons energized → water split (O₂ released) → electron transport chain → ATP and NADPH produced',
          'Light-independent reactions (Calvin cycle): CO₂ fixed to RuBP (enzyme RuBisCO) → 3-PG reduced using ATP and NADPH → GP (glyceraldehyde-3-phosphate) used for glucose synthesis',
          'Limiting factors: light intensity (at low intensity, rate increases with light; at high intensity plateaus), CO₂ concentration, temperature',
          'Optimum conditions: 25–35°C, high light intensity, 0.04% CO₂',
          'Uses of glucose: energy (respiration), growth (cellulose walls), storage (starch in amyloplasts)'
        ],
        tip: 'Edexcel emphasizes limiting factors and graphs showing how changes affect rate.'
      },
      {
        ref: '6.3',
        title: 'Transpiration and Translocation',
        points: [
          'Transpiration: evaporation of water from leaves through stomata; water moves up xylem due to: osmotic potential (water potential gradient), capillary action, root pressure',
          'Factors increasing transpiration: higher temperature, lower humidity, higher light intensity, wind (removes humid air around leaf)',
          'Stomatal control: in light, guard cells become turgid and open; in darkness, they lose water and close (saves water)',
          'Translocation: movement of sucrose and other solutes in phloem; requires energy (ATP) from respiration; can move up or down the plant',
          'Phloem loading: sucrose actively transported into phloem, lowering water potential, water enters → pressure, pushing solutes to sink',
          'Phloem unloading: at sink cells (growing tissues, storage organs), solutes removed, water leaves, solutes used for growth/storage'
        ],
        tip: 'Edexcel includes experiments measuring transpiration rate and questions about factors affecting it.'
      },
      {
        ref: '6.4',
        title: 'Plant Hormones and Growth',
        points: [
          'Plant hormones: chemical messengers regulating growth and responses',
          'Auxins: produced in shoot apex; promote cell elongation (high concentration bends shoot toward light — phototropism); involved in apical dominance (main stem suppresses side branches)',
          'Uses: weedkillers (synthetic auxins cause uncontrolled growth), rooting powders (stimulate root growth)',
          'Gibberellins: promote seed germination, stem elongation, flowering',
          'Cytokinins: promote cell division; delay senescence (aging)',
          'Abscisic acid: closes stomata under drought stress, promotes seed dormancy',
          'Tropism: directional growth response. Phototropism (toward light) — caused by auxin redistributing to shaded side. Geotropism/gravitropism (toward gravity) — auxin sinks to lower side.'
        ],
        tip: 'Edexcel often asks how different hormones work and why synthetic auxins are effective weedkillers.'
      }
    ]
  },
  {
    section: '7. Animal Coordination, Control and Homeostasis',
    icon: '⚖️',
    color: '#0891B2',
    topics: [
      {
        ref: '7.1',
        title: 'The Endocrine System',
        points: [
          'Endocrine glands: secrete hormones (chemical messengers) into bloodstream; effects slower but longer-lasting than nervous system',
          'Major glands: pituitary (master gland, controls others), thyroid (metabolic rate), adrenal (adrenaline for fight-or-flight), pancreas (insulin/glucagon), ovaries (estrogen), testes (testosterone)',
          'Adrenaline: produced by adrenal medulla in response to stress/fear; increases heart rate, breathing, blood glucose (prepare for fight-or-flight)',
          'Thyroid hormone (thyroxine): increases metabolic rate; regulated by TSH from pituitary (negative feedback)',
          'Pituitary gland: anterior lobe (hormones: FSH, LH, ACTH, TSH, GH, prolactin); posterior lobe (stores ADH, oxytocin from hypothalamus)',
          'Hypothalamus: connects nervous and endocrine systems; responds to body conditions (temperature, blood osmolarity) and secretes releasing hormones'
        ],
        tip: 'Edexcel emphasizes hormonal control examples like stress response (adrenaline) and metabolic control (thyroxine).'
      },
      {
        ref: '7.2',
        title: 'Homeostasis: Temperature Regulation',
        points: [
          'Homeostasis: maintaining stable internal environment (temperature, blood glucose, osmolarity)',
          'Thermoregulation: keeping body temperature around 37°C via hypothalamic control',
          'Skin structure: epidermis (protective), dermis (blood vessels, sweat glands, hair follicles, sensory receptors), subcutaneous fat (insulation)',
          'Heat loss mechanisms: (1) vasodilation — arterioles in skin dilate, more blood flows to surface, heat radiates; (2) sweating — evaporative cooling; (3) reduced muscle activity',
          'Heat gain mechanisms: (1) vasoconstriction — arterioles constrict, less blood to surface; (2) shivering — muscle contractions generate heat; (3) increased muscle activity; (4) hair standing up (less effective in humans)',
          'Negative feedback: if temperature rises → sweating/vasodilation → temperature falls → no more sweating',
          'Behavioral thermoregulation: moving to warmer/cooler location, wearing clothes'
        ],
        tip: 'Edexcel asks about how skin structure relates to thermoregulation.'
      },
      {
        ref: '7.3',
        title: 'Homeostasis: Blood Glucose Regulation',
        points: [
          'Blood glucose control: maintained around 80–100 mg/dL (4.5–5.5 mmol/L) by pancreatic hormones',
          'Insulin: produced by beta (β) cells in pancreatic islets; lowers blood glucose by promoting glucose uptake into cells and storage as glycogen',
          'Glucagon: produced by alpha (α) cells; raises blood glucose by promoting glycogen breakdown (glycogenolysis) and glucose synthesis from amino acids (gluconeogenesis)',
          'Negative feedback: high glucose → insulin secretion → glucose uptake → blood glucose falls → less insulin',
          'Type 1 diabetes: autoimmune destruction of beta cells; little/no insulin produced; treated with insulin injections',
          'Type 2 diabetes: cells become resistant to insulin (insulin insensitivity); beta cells eventually decline; often linked to obesity and age; managed with diet, exercise, drugs',
          'Monitoring: HbA1c test shows average blood glucose over 3 months'
        ],
        tip: 'Edexcel includes questions comparing Type 1 and Type 2 diabetes causes, treatments, and lifestyle factors.'
      },
      {
        ref: '7.4',
        title: 'Homeostasis: Kidney Function and Osmoregulation',
        points: [
          'Kidneys: filter blood to remove urea (protein metabolism waste) and regulate water balance',
          'Nephron structure: Bowman\'s capsule (ultrafiltration of small molecules), proximal convoluted tubule (selective reabsorption of glucose, ions, water), loop of Henle (creates osmotic gradient for water reabsorption), distal convoluted tubule (further ion regulation), collecting duct (water reabsorption regulated by ADH)',
          'Ultrafiltration: small molecules (glucose, urea, water, ions) forced from blood into Bowman\'s capsule by blood pressure; large molecules (proteins, blood cells) remain in blood',
          'Selective reabsorption: useful molecules (glucose, all ions, some water) reabsorbed back into blood; by active transport (glucose, ions) in proximal tubule; by osmosis (water) in loop and collecting duct',
          'Urine: water + urea + excess ions; concentration depends on water balance',
          'ADH (antidiuretic hormone): produces in hypothalamus, stored in posterior pituitary; released when body is dehydrated; increases water reabsorption in collecting duct, making urine more concentrated',
          'Dialysis: artificial kidney filtration for kidney failure patients'
        ],
        tip: 'Edexcel often asks to explain how specific parts of the nephron are adapted for their functions.'
      },
      {
        ref: '7.5',
        title: 'The Menstrual Cycle and Contraception',
        points: [
          'Menstrual cycle: approximately 28 days; regulated by FSH, LH, estrogen, progesterone',
          'Phases: (1) Menstruation (day 1–5): uterus lining sheds; (2) Follicular phase (day 1–13): FSH stimulates ovarian follicles to grow, produce estrogen; (3) Ovulation (day 14): LH surge triggers egg release; (4) Luteal phase (day 15–28): corpus luteum produces progesterone, maintains uterus lining',
          'Negative feedback: high estrogen → inhibits FSH → fewer follicles; high progesterone → inhibits FSH and LH → no new follicles',
          'Positive feedback (ovulation): high estrogen surge → triggers LH surge → ovulation',
          'Oral contraceptives: prevent ovulation by suppressing FSH/LH via hormonal feedback',
          'Other contraception: barrier methods (condoms, diaphragm), IUD, injection, implant, surgical (tubal ligation, vasectomy)'
        ],
        tip: 'Edexcel includes detailed menstrual cycle questions with hormone levels and graphs.'
      },
      {
        ref: '7.6',
        title: 'Assisted Reproduction Technologies',
        points: [
          'In vitro fertilization (IVF): eggs removed from ovaries, fertilized with sperm in lab, embryo implanted in uterus',
          'Process: hormonal stimulation (FSH/LH injections) to produce multiple eggs → egg collection → fertilization → embryo culture → implantation',
          'Success rate: about 20–30% per cycle depending on age',
          'Intracytoplasmic sperm injection (ICSI): single sperm injected into egg; used for male infertility',
          'Ethical considerations: cost (expensive), emotional stress, fate of unused embryos, genetic testing of embryos (designer babies debate)'
        ],
        tip: 'Edexcel includes evaluation of benefits and ethical concerns of ART.'
      }
    ]
  },
  {
    section: '8. Exchange and Transport in Animals',
    icon: '🫀',
    color: '#DC2626',
    topics: [
      {
        ref: '8.1',
        title: 'Gas Exchange',
        points: [
          'Gas exchange surfaces: lungs in mammals, gills in fish, tracheal system in insects',
          'Lungs: large surface area for O₂/CO₂ exchange; alveoli increase surface area; thin wall for diffusion; moist for dissolving gases',
          'Breathing: diaphragm contracts → thorax volume increases → pressure decreases → air rushes in (inspiration); diaphragm relaxes → air pushed out (expiration)',
          'Tidal volume: volume of air per breath (~500 mL)',
          'Spirometer: measures lung volumes; vital capacity (maximum air that can be breathed out)',
          'Alveoli adaptation: thin walls, rich blood supply, cuboidal shape for large surface area',
          'Ventilation-perfusion matching: alveoli with good air flow and blood flow maximize gas exchange'
        ],
        tip: 'Edexcel asks about adaptations for efficient gas exchange.'
      },
      {
        ref: '8.2',
        title: 'Blood and Circulation',
        points: [
          'Blood composition: red blood cells (RBC, carry O₂ via hemoglobin), white blood cells (WBC, immunity), platelets (clotting), plasma (transport medium)',
          'Hemoglobin: iron-containing protein in RBCs; binds O₂ reversibly; high O₂ concentration (lungs) → hemoglobin saturated; low O₂ (tissues) → O₂ released',
          'Blood vessels: arteries (thick walls, elastic, carry blood away from heart at high pressure), capillaries (thin walls, allow exchange), veins (thin walls, low pressure, return blood to heart)',
          'Heart structure: four chambers (left/right atria collect blood, left/right ventricles pump), valves prevent backflow',
          'Cardiac cycle: diastole (relaxation, chambers fill), systole (contraction, blood pumped)',
          'Cardiac output: volume of blood pumped per minute = stroke volume × heart rate',
          'Coronary circulation: blood vessels supply the heart muscle itself',
          'Blood clotting: platelets aggregate at wound, fibrinogen converted to fibrin (protein mesh traps RBCs), forms clot'
        ],
        tip: 'Edexcel includes detailed cardiac anatomy questions.'
      },
      {
        ref: '8.3',
        title: 'Respiration and Energy',
        formulas: [
          'Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)',
          'Anaerobic respiration: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (in yeast) or 2C₃H₆O₃ (lactic acid in muscles)'
        ],
        points: [
          'Aerobic respiration: efficient (38 ATP per glucose); three stages: glycolysis (glucose → pyruvate, occurs in cytoplasm, produces 2 ATP), Krebs cycle (pyruvate → CO₂, occurs in mitochondrial matrix), electron transport (NADH/FADH₂ → ATP, occurs in inner mitochondrial membrane)',
          'Anaerobic respiration: occurs when O₂ unavailable; produces lactate (muscles) or ethanol (yeast); regenerates NAD for glycolysis to continue; produces less ATP (2 per glucose)',
          'ATP: adenosine triphosphate; energy currency of cells; ADP + phosphate group + energy → ATP; ATP hydrolysis releases energy',
          'Exercise: increases breathing rate and heart rate to deliver more O₂ and remove CO₂; muscles switch to anaerobic respiration if O₂ limited',
          'Oxygen debt: after exercise, O₂ consumption remains high to repay lactate debt and replenish ATP/phosphocreatine stores'
        ],
        tip: 'Edexcel emphasizes the three stages of aerobic respiration and the ATP yield.'
      }
    ]
  },
  {
    section: '9. Ecosystems and Material Cycles',
    icon: '🌍',
    color: '#059669',
    topics: [
      {
        ref: '9.1',
        title: 'Ecosystem Organization and Energy Flow',
        points: [
          'Ecosystem: community of organisms and their physical environment',
          'Biotic factors: organisms (predators, prey, competitors); abiotic factors: temperature, light, water, pH, soil type',
          'Food chains: organism feeding relationships; e.g., plant → herbivore → carnivore',
          'Food webs: interconnected food chains; show multiple feeding relationships',
          'Producers: plants (autotrophs) — fix light energy into glucose',
          'Consumers: primary (herbivores eat plants), secondary (eat herbivores), tertiary (eat secondary consumers)',
          'Decomposers: bacteria and fungi break down dead organisms, recycling nutrients',
          'Trophic levels: each step up food chain loses ~90% of energy (only ~10% passed on); energy lost as heat during respiration',
          'Pyramid of numbers: shows organism count at each trophic level (can be inverted if one large producer supports many small consumers)',
          'Pyramid of biomass: dry mass of organisms; less likely to be inverted than numbers'
        ],
        tip: 'Edexcel emphasizes energy loss between trophic levels and why food chains only have ~4 levels.'
      },
      {
        ref: '9.2',
        title: 'Recycling and Nutrient Cycles',
        points: [
          'Carbon cycle: CO₂ in atmosphere ↔ photosynthesis (plants) → respiration (plants/animals/decomposers) ↔ combustion (fossil fuels, deforestation)',
          'Greenhouse effect: CO₂ and methane trap heat in atmosphere, warming climate',
          'Nitrogen cycle: atmospheric N₂ → nitrogen fixation (bacteria) → amino acids in plants → proteins in animals → decomposition → nitrification (to NO₃⁻) → denitrification (back to N₂)',
          'Water cycle: evaporation (water → vapor) → condensation (vapor → clouds) → precipitation (rain/snow) → infiltration (into soil) → runoff (to rivers/ocean) → transpiration (plants release water)'
        ],
        tip: 'Edexcel asks about how human activities (burning fossil fuels, deforestation, agriculture) disrupt these cycles.'
      },
      {
        ref: '9.3',
        title: 'Biodiversity and Conservation',
        points: [
          'Biodiversity: variety of organisms within ecosystem; measured by species richness (number of species) and species evenness (relative abundance)',
          'Importance: genetic resources, ecosystem stability, food production, medicines',
          'Threats: habitat loss (deforestation), overexploitation (fishing, hunting), pollution, invasive species, climate change',
          'Conservation strategies: protected areas (national parks, reserves), breeding programs (endangered species), habitat restoration, sustainable resource use',
          'Sustainable practices: sustainable fishing (size limits, quotas), sustainable logging (replanting), organic farming (reduce chemical inputs)'
        ],
        tip: 'Edexcel includes evaluation of conservation effectiveness and cost-benefit analysis.'
      },
      {
        ref: '9.4',
        title: 'Human Population and Food Security',
        points: [
          'Carrying capacity: maximum population size an environment can sustain',
          'Human population growth: exponential since Industrial Revolution; now ~8 billion; expected to peak mid-century',
          'Factors affecting growth: birth rate, death rate, migration, resource availability',
          'Food security: having reliable access to sufficient, nutritious food',
          'Threats to food security: population growth, climate change (droughts, floods), soil degradation, water scarcity, pests/diseases',
          'Solutions: selective breeding (crop yield), genetic modification (disease resistance), aquaculture (fish farming), sustainable agriculture',
          'Fish farming: efficient protein production but concerns about escaped species, disease transmission to wild populations, feed efficiency'
        ],
        tip: 'Edexcel evaluates trade-offs between productivity and sustainability.'
      }
    ]
  }
];
