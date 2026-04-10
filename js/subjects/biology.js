// ══════ BIOLOGY: Topic Notes (AQA 8461 Triple) ══════

const BIO_DATA = [
  {
    section: '1. Cell Biology',
    icon: '🔬',
    color: '#059669',
    topics: [
      {
        ref: '4.1.1',
        title: 'Cell Structure',
        formulas: [
          'Magnification = Image size ÷ Actual size',
          'Actual size = Image size ÷ Magnification'
        ],
        points: [
          'Animal cells: nucleus (contains DNA, controls cell), cytoplasm (where chemical reactions happen), cell membrane (controls what enters/leaves), mitochondria (aerobic respiration), ribosomes (protein synthesis)',
          'Plant cells: all of the above PLUS cell wall (cellulose, structural support), permanent vacuole (filled with cell sap, maintains turgor), chloroplasts (photosynthesis, contain chlorophyll)',
          'Prokaryotic cells (bacteria): no true nucleus — DNA is a single loop floating in cytoplasm, plus plasmids (small rings of extra DNA), cell membrane, cell wall, flagellum (movement), ribosomes (smaller than eukaryotic)',
          'Eukaryotic cells: animal and plant cells — have a true nucleus with a nuclear membrane',
          'Order of size: most animal cells ~10–30μm, plant cells ~10–100μm, bacteria ~1–5μm'
        ],
        tip: 'In the exam, always specify WHERE in the cell a process happens. Respiration = mitochondria. Protein synthesis = ribosomes. Photosynthesis = chloroplasts.',
        example: 'A cell image is 30mm across. Magnification is ×2000. What is the actual size?\nActual = 30 ÷ 2000 = 0.015mm = 15μm',
        image: 'img/cell-structure.svg'
      },
      {
        ref: '4.1.1.3',
        title: 'Microscopy',
        points: [
          'Light microscopes: magnification up to ×1500, resolution ~200nm, can view living specimens, uses light and lenses',
          'Electron microscopes: magnification up to ×2,000,000, resolution ~0.2nm (1000× better than light), cannot view living specimens',
          'Scanning Electron Microscope (SEM): 3D surface images',
          'Transmission Electron Microscope (TEM): 2D internal structure, higher resolution than SEM',
          'Resolution: the ability to distinguish two close points as separate objects — more important than magnification',
          'Standard form: 1μm = 1×10⁻³mm = 1×10⁻⁶m, 1nm = 1×10⁻⁹m'
        ],
        tip: 'Electron microscopes have better RESOLUTION, not just magnification. That\'s why they reveal more detail — they can separate objects that are closer together.'
      },
      {
        ref: '4.1.2',
        title: 'Cell Division — Mitosis',
        points: [
          'Cell cycle: growth (G1) → DNA replication (S) → growth + check (G2) → mitosis (M)',
          'Mitosis: one cell divides to produce TWO genetically identical daughter cells',
          'Used for: growth, repair, asexual reproduction',
          'Stages: Prophase (chromosomes condense, spindle forms) → Metaphase (chromosomes line up at equator) → Anaphase (chromatids pulled apart) → Telophase (nuclear membranes reform) → Cytokinesis (cytoplasm divides)',
          'Before mitosis: DNA replicates so each chromosome has two sister chromatids joined at a centromere',
          'Cancer: uncontrolled mitosis — cells divide rapidly forming a tumour'
        ],
        tip: 'Remember PMAT for the stages. In mitosis the chromosome number stays the SAME — this is different from meiosis which halves it.'
      },
      {
        ref: '4.1.2.3',
        title: 'Cell Division — Meiosis',
        points: [
          'Meiosis: produces FOUR genetically different gametes (sex cells) with HALF the chromosome number',
          'Occurs in ovaries and testes only',
          'Two divisions: Meiosis I (homologous pairs separate — halves chromosome number) then Meiosis II (sister chromatids separate — like mitosis)',
          'Genetic variation from: crossing over (in Meiosis I, homologous chromosomes swap sections of DNA), independent assortment (random orientation of pairs on spindle)',
          'Human gametes: 23 chromosomes (haploid). Fertilisation restores 46 (diploid)',
          'Gametes are genetically unique — this is why siblings look different'
        ],
        tip: 'Key difference: mitosis = 2 identical cells (diploid), meiosis = 4 different cells (haploid). Examiners LOVE asking you to compare them.'
      },
      {
        ref: '4.1.3',
        title: 'Transport in Cells',
        formulas: [
          'Rate of diffusion depends on: concentration gradient, temperature, surface area, distance'
        ],
        points: [
          'Diffusion: net movement of particles from HIGH to LOW concentration — passive (no energy needed). Examples: O₂ and CO₂ in lungs, O₂ into cells for respiration',
          'Osmosis: movement of WATER molecules from a dilute solution to a more concentrated solution through a partially permeable membrane — also passive',
          'Active transport: movement from LOW to HIGH concentration — AGAINST the gradient — requires energy from respiration. Examples: mineral ion uptake in root hair cells, glucose absorption in small intestine',
          'Factors affecting diffusion rate: surface area (bigger = faster), concentration gradient (steeper = faster), temperature (higher = faster), membrane thickness (thinner = faster)'
        ],
        tip: 'Osmosis is ONLY about water molecules. If asked about anything else moving through a membrane, it\'s diffusion or active transport. Active transport needs energy — link it to mitochondria and respiration.',
        example: 'If you place a plant cell in pure water: water enters by osmosis → cell becomes turgid (swells but doesn\'t burst because of cell wall)\nIn concentrated sugar solution: water leaves → cell becomes plasmolysed (membrane pulls away from wall)'
      }
    ]
  },
  {
    section: '2. Organisation',
    icon: '🫀',
    color: '#DC2626',
    topics: [
      {
        ref: '4.2.1',
        title: 'Principles of Organisation',
        points: [
          'Hierarchy: Cells → Tissues → Organs → Organ systems → Organisms',
          'Tissue: group of similar cells working together (e.g. muscle tissue, epithelial tissue)',
          'Organ: group of different tissues working together for a specific function (e.g. stomach has muscular, glandular, and epithelial tissue)',
          'Organ system: group of organs working together (e.g. digestive system)'
        ],
        tip: 'Always use the correct terminology in sequence. Don\'t say "organ" when you mean "tissue."'
      },
      {
        ref: '4.2.2',
        title: 'The Digestive System',
        points: [
          'Mouth: mechanical digestion (teeth) + chemical digestion (salivary amylase breaks starch → sugars)',
          'Stomach: churns food (mechanical), produces protease (pepsin) + HCl acid (pH 2, kills bacteria, optimum for pepsin)',
          'Small intestine: bile (from liver, stored in gall bladder) emulsifies fats (increases SA), pancreas produces all three enzymes, products absorbed through villi',
          'Large intestine: absorbs water from undigested food',
          'Enzymes: biological catalysts — proteins with specific active sites (lock and key model)',
          'Carbohydrases: break carbohydrates → simple sugars (amylase: starch → maltose → glucose)',
          'Proteases: break proteins → amino acids',
          'Lipases: break lipids → glycerol + fatty acids',
          'Bile: alkaline — neutralises stomach acid for optimum enzyme conditions in small intestine, emulsifies fats increasing surface area for lipase'
        ],
        tip: 'Bile is NOT an enzyme — it emulsifies fats. This is a very common exam mistake. Bile is made in the liver and stored in the gall bladder.'
      },
      {
        ref: '4.2.2.5',
        title: 'Heart & Blood Vessels',
        formulas: [
          'Cardiac output = stroke volume × heart rate'
        ],
        points: [
          'Double circulatory system: Right side pumps deoxygenated blood to lungs (pulmonary circuit), left side pumps oxygenated blood to body (systemic circuit)',
          'Heart chambers: right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body',
          'Left ventricle has thicker muscular wall — pumps blood further (whole body vs just lungs)',
          'Valves prevent backflow of blood',
          'Coronary arteries supply heart muscle with oxygenated blood — blockage = heart attack',
          'Arteries: thick walls, small lumen, elastic fibres, carry blood AWAY from heart at high pressure',
          'Veins: thinner walls, larger lumen, valves to prevent backflow, carry blood TO heart at low pressure',
          'Capillaries: one cell thick (short diffusion distance), permeable walls, very narrow — allow exchange of substances'
        ],
        tip: 'Remember: Arteries carry blood AWAY from heart (both start with A). Veins have Valves (both start with V). The left ventricle is thicker because it needs more force.'
      },
      {
        ref: '4.2.3',
        title: 'Plant Tissues & Transport',
        points: [
          'Xylem: transports water and minerals from roots UP through the plant — dead cells, hollow, lignified (strengthened), one-way flow by transpiration pull',
          'Phloem: transports dissolved sugars (from photosynthesis) both up AND down — translocation, living cells, uses companion cells',
          'Transpiration: evaporation of water from leaf surfaces (mainly stomata) — creates a pull that draws water up the xylem',
          'Stomata: small pores on leaf underside, opened and closed by guard cells. Open in light (for CO₂ for photosynthesis), close in dark or drought (to conserve water)',
          'Factors increasing transpiration rate: higher temperature, lower humidity, more wind, more light',
          'Root hair cells: long extensions increasing surface area for water absorption by osmosis and mineral absorption by active transport'
        ],
        tip: 'Xylem = water UP (dead, lignified). Phloem = sugars BOTH ways (alive, translocation). A common 6-mark question is explaining the transpiration stream from root to leaf.'
      }
    ]
  },
  {
    section: '3. Infection & Response',
    icon: '🦠',
    color: '#7C3AED',
    topics: [
      {
        ref: '4.3.1',
        title: 'Communicable Diseases',
        points: [
          'Pathogens: microorganisms that cause disease — bacteria, viruses, fungi, protists',
          'Bacteria: produce toxins that damage cells. Treated with antibiotics. Examples: Salmonella (food poisoning), Gonorrhoea (STI)',
          'Viruses: invade cells and reproduce inside them, destroying the cell. NOT treated with antibiotics. Examples: Measles, HIV, TMV (Tobacco Mosaic Virus)',
          'Fungi: e.g. Rose black spot — spreads by spores in wind/water, treated with fungicide',
          'Protists: e.g. Malaria — caused by Plasmodium protist, spread by mosquito vector',
          'Spread: direct contact, airborne (droplets), water, vectors (animals that carry pathogens)',
          'Prevention: hand washing, vaccination, barriers (condoms), destroying vectors, quarantine'
        ],
        tip: 'Antibiotics kill BACTERIA, not viruses. This is because viruses live inside your cells — you can\'t kill the virus without killing the cell. This is a very common exam question.'
      },
      {
        ref: '4.3.1.6',
        title: 'The Immune System',
        points: [
          'Non-specific defences (first line): skin (physical barrier), nose hairs and mucus (trap particles), tears and saliva (contain lysozyme enzyme), stomach acid (pH 2 kills most pathogens), scabs and clotting (seal wounds)',
          'White blood cells (specific immune response): Phagocytes — engulf and digest pathogens (phagocytosis). Lymphocytes — produce antibodies specific to antigens on the pathogen surface. Memory cells remain after infection for faster secondary response',
          'Antibodies: lock onto specific antigens on pathogens, causing agglutination (clumping) so phagocytes can destroy them more easily',
          'Vaccination: inject dead/weakened pathogen → immune system produces antibodies and memory cells → if real pathogen enters later, memory cells produce antibodies RAPIDLY before you get ill',
          'Antibiotics: kill bacteria (e.g. penicillin). Bacteria can become resistant through natural selection — MRSA is resistant to many antibiotics',
          'Painkillers: treat symptoms but do NOT kill pathogens'
        ],
        tip: 'Vaccination does NOT contain antibodies — it stimulates YOUR immune system to make them. This is a crucial distinction. Also, resistance develops in the BACTERIA, not in the person.'
      },
      {
        ref: '4.3.2',
        title: 'Monoclonal Antibodies (Triple)',
        points: [
          'Produced from a single clone of white blood cells — all identical, all target ONE specific antigen',
          'Production: inject mouse with antigen → collect lymphocytes from mouse → fuse with tumour cells to make hybridoma → hybridoma divides rapidly and produces antibodies indefinitely',
          'Uses: pregnancy tests (detect hCG hormone), diagnosing diseases, locating specific molecules in cells/tissue, cancer treatment (carry drug/radioactive substance directly to tumour cells)',
          'Limitations: more side effects than expected in clinical trials, not as widely used in treatment as hoped'
        ],
        tip: 'Monoclonal = one clone. The key advantage is specificity — they only bind to ONE type of antigen, so can target specific cells.'
      }
    ]
  },
  {
    section: '4. Bioenergetics',
    icon: '🌿',
    color: '#16A34A',
    topics: [
      {
        ref: '4.4.1',
        title: 'Photosynthesis',
        formulas: [
          '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light energy)',
          'Carbon dioxide + Water → Glucose + Oxygen'
        ],
        points: [
          'Endothermic reaction — takes in energy from light (sunlight absorbed by chlorophyll in chloroplasts)',
          'Glucose is used for: respiration (energy), making cellulose (cell walls), making amino acids (with nitrate ions for proteins), making lipids (fats and oils for storage), stored as starch (insoluble, doesn\'t affect osmosis)',
          'Limiting factors: light intensity (up to a point, then plateaus), CO₂ concentration (up to a point), temperature (enzymes denature above ~45°C)',
          'Rate of photosynthesis: measured by counting oxygen bubbles produced per minute, or using a gas syringe',
          'Inverse square law: light intensity ∝ 1/distance² — doubling distance = ¼ the light intensity'
        ],
        tip: 'At any time, only ONE factor is limiting. If increasing light doesn\'t increase rate, then temperature or CO₂ must be limiting instead. Greenhouse owners use this to optimise all three factors.',
        example: 'Graph interpretation: if rate plateaus as light increases, another factor (CO₂ or temperature) has become limiting. The graph shows a curve that levels off.',
        image: 'img/photosynthesis.svg'
      },
      {
        ref: '4.4.2',
        title: 'Respiration',
        formulas: [
          'Aerobic: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O (+ energy)',
          'Glucose + Oxygen → Carbon dioxide + Water',
          'Anaerobic (animals): Glucose → Lactic acid',
          'Anaerobic (yeast/plants): Glucose → Ethanol + Carbon dioxide'
        ],
        points: [
          'Respiration: exothermic reaction — releases energy from glucose, happens in ALL living cells continuously',
          'Aerobic: uses oxygen, happens in mitochondria, releases MORE energy per glucose molecule',
          'Anaerobic: without oxygen, happens in cytoplasm, releases LESS energy, produces lactic acid (animals) or ethanol + CO₂ (yeast = fermentation)',
          'Energy used for: muscle contraction, maintaining body temperature, building larger molecules (proteins from amino acids, lipids, glycogen from glucose), active transport, nerve impulses',
          'Exercise: heart rate and breathing rate increase to deliver more O₂ and glucose to muscles and remove CO₂ faster',
          'Oxygen debt: after vigorous exercise, you continue breathing heavily to repay the oxygen debt — lactic acid must be broken down (in the liver) which requires oxygen',
          'Metabolism: all the chemical reactions in an organism — respiration is a metabolic reaction'
        ],
        tip: 'Respiration is NOT breathing. Respiration happens in cells; breathing is the physical process of getting air in and out of lungs. Every living cell respires — even plant cells.'
      }
    ]
  },
  {
    section: '5. Homeostasis & Response',
    icon: '🧠',
    color: '#0891B2',
    topics: [
      {
        ref: '4.5.1',
        title: 'Homeostasis & the Nervous System',
        points: [
          'Homeostasis: maintaining a constant internal environment — temperature, blood glucose, water levels',
          'Receptor → Coordinator (brain/spinal cord) → Effector (muscle/gland) → Response',
          'Nervous system: fast, short-lived, electrical impulses along neurones',
          'Sensory neurone: receptor → CNS',
          'Relay neurone: within CNS (brain/spinal cord)',
          'Motor neurone: CNS → effector (muscle or gland)',
          'Synapse: tiny gap between neurones — nerve impulse triggers release of neurotransmitter chemical which diffuses across and triggers impulse in next neurone',
          'Reflex arc: receptor → sensory neurone → relay neurone (in spinal cord) → motor neurone → effector. Automatic, fast, protective — bypasses conscious brain',
          'Examples of reflexes: pulling hand from hot object, pupil constriction in bright light'
        ],
        tip: 'A reflex arc goes through the SPINAL CORD, not the brain. That\'s why it\'s fast. The brain is informed afterwards but doesn\'t control the initial response.'
      },
      {
        ref: '4.5.2',
        title: 'Hormonal Control & Reproduction',
        points: [
          'Endocrine system: slower, longer-lasting, chemical messengers (hormones) carried in blood',
          'Key glands: pituitary (master gland), thyroid (thyroxine — metabolic rate), adrenal (adrenaline — fight or flight), pancreas (insulin and glucagon), ovaries (oestrogen, progesterone), testes (testosterone)',
          'Blood glucose regulation: Blood glucose rises → pancreas releases INSULIN → liver converts glucose to glycogen (stored). Blood glucose falls → pancreas releases GLUCAGON → liver converts glycogen back to glucose',
          'Type 1 diabetes: autoimmune — pancreas produces no insulin. Treated with insulin injections',
          'Type 2 diabetes: body cells no longer respond to insulin (insulin resistance). Linked to obesity/diet. Treated with diet, exercise, medication',
          'Menstrual cycle hormones: FSH (pituitary, stimulates egg maturation), LH (pituitary, triggers ovulation), Oestrogen (ovaries, repairs uterus lining, inhibits FSH), Progesterone (ovaries, maintains uterus lining, inhibits FSH and LH)',
          'Contraception: hormonal (pill — oestrogen+progesterone, prevents ovulation), barrier (condoms), IUD, sterilisation',
          'IVF: FSH and LH given to stimulate multiple egg production → eggs collected → fertilised in lab → embryos implanted'
        ],
        tip: 'Insulin LOWERS blood glucose. Glucagon RAISES it. Think: Insulin = Into cells. Glucagon = Glucose goes up. Negative feedback: the response counteracts the change.'
      },
      {
        ref: '4.5.3',
        title: 'Plant Hormones (Triple)',
        points: [
          'Auxin: controls phototropism (growth toward light) and gravitropism (growth in response to gravity)',
          'Phototropism: auxin moves to shaded side → cells elongate more on shaded side → shoot bends TOWARD light',
          'Gravitropism: in roots, auxin accumulates on lower side → INHIBITS growth on lower side → root grows DOWN. In shoots, auxin accumulates on lower side → PROMOTES growth → shoot grows UP',
          'Auxin is produced at the shoot tip',
          'Gibberellins: promote seed germination and stem elongation',
          'Ethene: promotes fruit ripening',
          'Uses: selective weedkillers (auxin-based, causes weeds to grow too fast and die), rooting powder (stimulates root growth in cuttings), fruit ripening control (ethene gas)'
        ],
        tip: 'Auxin has OPPOSITE effects in shoots vs roots. In shoots it promotes elongation. In roots it inhibits it. This is why shoots grow up and roots grow down.'
      }
    ]
  },
  {
    section: '6. Inheritance, Variation & Evolution',
    icon: '🧬',
    color: '#9333EA',
    topics: [
      {
        ref: '4.6.1',
        title: 'DNA & the Genome',
        points: [
          'DNA: double helix, made of two strands of nucleotides',
          'Each nucleotide: phosphate + sugar (deoxyribose) + base',
          'Base pairs: A-T (adenine-thymine), C-G (cytosine-guanine) — complementary base pairing',
          'Gene: a small section of DNA on a chromosome that codes for a particular protein',
          'Genome: entire genetic material of an organism',
          'Human Genome Project: mapped all 20,000+ human genes. Benefits: understanding genetic disorders, developing personalised medicine, tracing human migration',
          'Chromosomes: 23 pairs in humans (46 total). Pair 23 = sex chromosomes (XX female, XY male)',
          'Protein synthesis: DNA → mRNA (transcription in nucleus) → mRNA leaves nucleus → ribosome reads mRNA triplet code → amino acids assembled in order (translation) → protein folds into specific 3D shape',
          'Mutations: changes in DNA base sequence, can alter protein produced, most have no effect, some cause genetic disorders'
        ],
        tip: 'Every cell in your body contains the SAME DNA. Different cells look different because different genes are switched on/off. A muscle cell has the same DNA as a nerve cell.'
      },
      {
        ref: '4.6.2',
        title: 'Genetics & Inheritance',
        formulas: [
          'Genotype: combination of alleles (e.g. Bb)',
          'Phenotype: physical characteristic expressed (e.g. brown eyes)'
        ],
        points: [
          'Alleles: different versions of the same gene',
          'Dominant allele: expressed when at least one copy is present (capital letter, e.g. B)',
          'Recessive allele: only expressed when two copies are present, homozygous recessive (lowercase, e.g. bb)',
          'Homozygous: two identical alleles (BB or bb). Heterozygous: two different alleles (Bb)',
          'Punnett squares: used to predict offspring ratios. Monohybrid cross for one gene',
          'Sex determination: XX = female, XY = male. 50:50 chance. The Y chromosome carries the SRY gene',
          'Inherited disorders: Cystic fibrosis (recessive, ff — both parents must be carriers), Polydactyly (dominant, Dd or DD — only one allele needed)',
          'Family pedigrees: trace inheritance through generations — useful for identifying carriers'
        ],
        tip: 'In a Punnett square, always put gametes (single alleles) on the outside, not full genotypes. Two carriers (Bb × Bb) give a 3:1 ratio of dominant:recessive phenotype, but 1:2:1 genotype ratio (BB:Bb:bb).',
        example: 'Cystic fibrosis cross — both parents carriers (Ff × Ff):\n    F    f\nF  FF   Ff\nf  Ff   ff\nProbability of CF child = 1 in 4 (25%)'
      },
      {
        ref: '4.6.3',
        title: 'Evolution & Natural Selection',
        points: [
          'Variation: differences between individuals — caused by genetics, environment, or both',
          'Natural selection: individuals with advantageous characteristics are more likely to survive, reproduce, and pass on their alleles → frequency of advantageous allele increases over generations',
          'Darwin\'s theory: variation exists → competition for resources → survival of the fittest → reproduction → inheritance of advantageous traits',
          'Evidence for evolution: fossil record, antibiotic-resistant bacteria (e.g. MRSA — observed evolution), comparative anatomy',
          'Speciation: when populations of the same species become so different they can no longer interbreed. Caused by geographical isolation → different selection pressures → different mutations → genetic divergence',
          'Selective breeding: humans choose organisms with desirable traits to breed together. Reduces genetic variation (inbreeding) — can cause health problems',
          'Genetic engineering: cutting out a gene from one organism and inserting it into another using restriction enzymes and ligase. Examples: insulin production in bacteria, pest-resistant crops',
          'Classification: Linnaeus system — Kingdom, Phylum, Class, Order, Family, Genus, Species. Based on structure and characteristics, updated with DNA analysis'
        ],
        tip: 'Natural selection is NOT "survival of the fittest" in the popular sense. It\'s survival of the best ADAPTED to the current environment. An organism perfectly adapted to cold would die in heat.'
      }
    ]
  },
  {
    section: '7. Ecology',
    icon: '🌍',
    color: '#CA8A04',
    topics: [
      {
        ref: '4.7.1',
        title: 'Ecosystems & Communities',
        points: [
          'Ecosystem: interaction of a community of living organisms with the non-living parts of their environment',
          'Community: all the living organisms in an ecosystem',
          'Habitat: where an organism lives',
          'Population: all organisms of one species in a habitat',
          'Abiotic factors: non-living — temperature, light, water, CO₂, wind, soil pH, soil mineral content',
          'Biotic factors: living — predation, competition, disease, availability of food',
          'Competition: organisms compete for resources. Plants: light, water, space, minerals. Animals: food, territory, mates',
          'Adaptations: structural (thick fur, large ears), behavioural (migration, hibernation), functional (producing venom, antifreeze proteins)',
          'Quadrats and transects: sample organisms. Mean = total count ÷ number of quadrats. Transects show how distribution changes along an environmental gradient'
        ],
        tip: 'Abiotic = non-living (A for Absent of life). Biotic = living (B for Biology). Population estimates from quadrats require RANDOM sampling to avoid bias.'
      },
      {
        ref: '4.7.2–4.7.3',
        title: 'Carbon Cycle, Water Cycle & Decomposition',
        points: [
          'Carbon cycle: CO₂ removed by photosynthesis → carbon in plant biomass → eaten by animals → returned by respiration, combustion, and decomposition',
          'Decomposition: bacteria and fungi break down dead organisms, releasing nutrients back to soil',
          'Factors affecting decomposition: temperature (faster when warm, enzymes work faster), moisture (needed for microorganism growth), oxygen (aerobic decomposers work faster)',
          'Water cycle: evaporation → condensation → precipitation → collection (rivers, groundwater) → transpiration from plants',
          'Bioaccumulation: toxins build up along food chains — top predators have highest concentration',
          'Biodiversity: the variety of species in an ecosystem. Higher biodiversity = more stable ecosystem',
          'Threats to biodiversity: habitat destruction, pollution, climate change, overexploitation, invasive species',
          'Conservation: breeding programmes, seed banks, nature reserves, reforestation, legislation (legal protections)'
        ],
        tip: 'The carbon cycle links to BOTH photosynthesis and respiration. Plants do both — they photosynthesise AND respire. At night, they only respire (releasing CO₂).',
        image: 'img/carbon-cycle.svg'
      },
      {
        ref: '4.7.5',
        title: 'Food Production & Sustainability',
        points: [
          'Trophic levels: Producer → Primary consumer → Secondary consumer → Tertiary consumer',
          'Only ~10% of biomass is transferred between trophic levels — rest is lost through respiration, excretion, and parts not eaten',
          'Efficiency of biomass transfer = (biomass transferred ÷ biomass available) × 100',
          'Farming techniques to increase efficiency: restrict movement of animals (less energy lost in movement), keep animals warm (less energy lost as heat), use pesticides and herbicides, fertilise fields',
          'GM crops: genetically modified to be pest-resistant, drought-resistant, or produce higher yields',
          'Sustainable fishing: quotas, net size regulations, fish farming (aquaculture)',
          'Food security threatened by: population growth, climate change, new pests/pathogens, cost of farming, conflicts'
        ],
        tip: 'In any food chain, energy is ALWAYS lost between levels. That\'s why food chains rarely have more than 4-5 trophic levels — there isn\'t enough energy left.'
      }
    ]
  }
];
