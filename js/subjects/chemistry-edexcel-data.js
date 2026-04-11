// ══════ EDEXCEL GCSE CHEMISTRY (1CH0) — Exam Board Tailored ══════
// Based on Pearson Edexcel Level 1/Level 2 GCSE (9-1) Chemistry specification
// 9 Topics emphasizing atomic structure, bonding, periodicity, and reactions

const EDEXCEL_CHEM_DATA = [
  {
    section: '1. Key Concepts in Chemistry',
    icon: '⚛️',
    color: '#2563EB',
    topics: [
      {
        ref: '1.1',
        title: 'Atomic Structure and Bonding',
        points: [
          'Atom: smallest particle of element retaining chemical properties; consists of protons, neutrons (nucleus), electrons (electron shells)',
          'Proton number (atomic number): defines element; determines electron configuration and chemical properties',
          'Mass number: total protons + neutrons; isotopes have same protons but different neutrons',
          'Electron configuration: electrons fill shells: 1st shell max 2, 2nd shell max 8, 3rd shell max 8 (simplified for GCSE)',
          'Groups (vertical): elements with same electron configuration in outer shell; similar properties',
          'Periods (horizontal): increasing proton and electron number',
          'Bonding: ionic (electron transfer, metals to non-metals), covalent (electron sharing, non-metals), metallic (delocalized electrons)',
          'Ionic bonding: attraction between positive ions (cations) and negative ions (anions); occurs between elements with very different electronegativities',
          'Covalent bonding: shared pairs of electrons between atoms; can be polar (unequal sharing) or non-polar (equal sharing)',
          'Electronegativity: ability to attract electrons; increases across a period, decreases down a group',
          'Metallic bonding: metal atoms lose outer electrons forming cations in a sea of mobile electrons; explains malleability, conductivity'
        ],
        tip: 'Edexcel emphasizes electron configuration and how it predicts bonding and group properties. Master the periodic table structure.'
      },
      {
        ref: '1.2',
        title: 'Formulas and Equations',
        points: [
          'Relative atomic mass (Aᵣ): mass of atom relative to ¹²C; approximately equal to mass number',
          'Relative formula mass (Mᵣ): sum of all atomic masses in a compound',
          'Valency: number of bonds an element typically forms; related to electrons in outer shell',
          'Empirical formula: simplest whole-number ratio of elements in a compound',
          'Molecular formula: actual number of atoms in a molecule',
          'Balancing equations: ensure same number of atoms on both sides; coefficients adjust atom counts, not subscripts',
          'Ionic equations: show only species involved in reaction (remove spectator ions)',
          'Half-equations: show electron transfer in redox reactions; balance atoms then electrons'
        ],
        tip: 'Edexcel requires balance all equations given; practice is essential.'
      },
      {
        ref: '1.3',
        title: 'Moles and Calculations',
        formulas: [
          'Mole: amount of substance containing 6.02 × 10²³ particles (Avogadro\'s constant)',
          'n = m / M (moles = mass / molar mass)',
          'Concentration = moles / volume (mol/dm³)',
          'Using mole ratios from balanced equations to calculate reactant/product amounts'
        ],
        points: [
          'Molar mass: mass of one mole of substance (numerically equal to Mᵣ but in g/mol)',
          'Mole calculations: essential for stoichiometry; determine limiting reactant, theoretical yield, percentage yield',
          'Percentage yield: (actual yield / theoretical yield) × 100; accounts for losses in practical reactions',
          'Gas calculations: at RTP (room temperature and pressure ~25°C, 1 atm), 1 mole gas occupies ~24 L'
        ],
        tip: 'Mole calculations appear in almost every Edexcel chemistry question. Master this or struggle!'
      }
    ]
  },
  {
    section: '2. States of Matter and Mixtures',
    icon: '💧',
    color: '#0891B2',
    topics: [
      {
        ref: '2.1',
        title: 'States of Matter',
        points: [
          'Solid: fixed shape and volume; particles tightly packed and vibrating; strongest intermolecular forces',
          'Liquid: fixed volume but not shape; particles close but less ordered; can flow',
          'Gas: no fixed shape or volume; particles widely spaced and moving rapidly; weakest intermolecular forces',
          'Melting: solid → liquid (endothermic); requires breaking some intermolecular forces',
          'Boiling: liquid → gas (endothermic); requires breaking all intermolecular forces',
          'Freezing: liquid → solid (exothermic)',
          'Condensation: gas → liquid (exothermic)',
          'Sublimation: solid → gas directly (e.g., dry ice); requires heating',
          'Kinetic theory: explains states through particle motion; higher temperature = faster movement',
          'Particle model: describes density (mass per unit volume); solids/liquids incompressible (particles touching), gases compressible (space between particles)'
        ],
        tip: 'Edexcel includes phase diagrams and questions about energy changes during state changes.'
      },
      {
        ref: '2.2',
        title: 'Intermolecular Forces',
        points: [
          'Intermolecular forces: weak forces between molecules (much weaker than ionic/covalent bonds)',
          'Van der Waals forces: weak attractions between all molecules; stronger in larger molecules with more electrons',
          'Hydrogen bonding: special case of Van der Waals between O/N/F and H in another molecule; stronger than typical Van der Waals',
          'Polar vs. non-polar molecules: polar molecules have uneven electron distribution (bonds are polar and not symmetrical); affects solubility and boiling point',
          'Boiling point trends: increases with molecular size/mass (more electrons → stronger Van der Waals); hydrogen bonding raises boiling point (e.g., water has unexpectedly high boiling point)',
          'Solubility: "like dissolves like" — polar solvents dissolve ionic/polar solutes; non-polar solvents dissolve non-polar solutes'
        ],
        tip: 'Edexcel asks why boiling points differ; know that hydrogen bonding is significant.'
      },
      {
        ref: '2.3',
        title: 'Mixtures and Separation',
        points: [
          'Pure substance: single element or compound with fixed melting and boiling points',
          'Mixture: two or more substances not chemically bonded; no fixed melting/boiling point',
          'Filtration: separates solids from liquids using filter paper; pores trap particles',
          'Evaporation: heating liquid to remove solvent, leaving dissolved solute',
          'Crystallization: cooling solution to crystallize dissolved solute',
          'Chromatography: separates dissolved substances by differential movement through stationary phase; paper chromatography for dyes, gas chromatography for volatiles',
          'Distillation: separates liquids with different boiling points by heating, condensing vapor',
          'Fractional distillation: separates miscible liquids with closer boiling points; uses fractionating column'
        ],
        tip: 'Edexcel includes practical separation questions and Rf value calculations in chromatography.'
      }
    ]
  },
  {
    section: '3. Chemical Changes',
    icon: '⚡',
    color: '#DC2626',
    topics: [
      {
        ref: '3.1',
        title: 'Acids and Bases',
        points: [
          'Acid: donates protons (H⁺); has pH < 7; can be strong (fully dissociate: HCl, H₂SO₄) or weak (partially: ethanoic acid)',
          'Base: accepts protons (H⁺); has pH > 7; e.g., ammonia',
          'Alkali: base dissolved in water; has pH > 7 (hydroxide ions OH⁻)',
          'pH scale: 0–14; < 7 acidic, 7 neutral, > 7 alkaline; pH = -log[H⁺]',
          'Neutralization: acid + base → salt + water; H⁺(aq) + OH⁻(aq) → H₂O(l)',
          'Titration: accurate neutralization using burettes to find concentration of unknown solution',
          'Salts: ionic compounds formed from acid-base reactions; named systematically',
          'Indicators: methyl orange (red in acidic, yellow in alkaline), phenolphthalein (colorless in acidic, pink in alkaline), universal indicator'
        ],
        tip: 'Edexcel includes pH calculations, neutralization equations, and titration calculations.'
      },
      {
        ref: '3.2',
        title: 'Oxidation and Reduction',
        points: [
          'Oxidation: loss of electrons (or gain of oxygen, or loss of hydrogen); oxidation state increases',
          'Reduction: gain of electrons (or loss of oxygen, or gain of hydrogen); oxidation state decreases',
          'Redox reaction: both oxidation and reduction occur simultaneously',
          'Oxidation states: assigned using rules — elements are 0, compounds atoms have assigned values, most common values follow group number',
          'Identifying redox: look for change in oxidation states; reactant oxidation state increases → oxidized; decreases → reduced',
          'Combustion: reaction with oxygen (redox); complete combustion produces CO₂ + H₂O; incomplete produces CO (toxic) or C',
          'Displacement reactions: more reactive element displaces less reactive from compound; metal + salt → different metal salt + reduced metal'
        ],
        tip: 'Edexcel emphasizes oxidation state changes; master this to identify redox reactions.'
      },
      {
        ref: '3.3',
        title: 'Reactions of Acids',
        points: [
          'Acid + metal → salt + hydrogen gas (metal must be above hydrogen in reactivity series)',
          'Acid + alkali → salt + water (neutralization)',
          'Acid + carbonate → salt + water + carbon dioxide gas',
          'Thermal decomposition: compounds break down when heated; e.g., CaCO₃ → CaO + CO₂',
          'Reversible reactions: can proceed in both directions; represented with ⇌; system reaches equilibrium',
          'Practical reactions: reactions with bases (metal oxides, hydroxides, carbonates); reactions with metals; combustion'
        ],
        tip: 'Know the products of each reaction type and write balanced equations confidently.'
      }
    ]
  },
  {
    section: '4. Extracting Metals and Equilibria',
    icon: '⛏️',
    color: '#B45309',
    topics: [
      {
        ref: '4.1',
        title: 'Metal Extraction and Reactivity',
        points: [
          'Reactivity series: ranking metals by tendency to lose electrons (most reactive at top)',
          'Extraction method depends on reactivity: very reactive (K, Na) — electrolysis of molten salt; moderately reactive (Ca, Al) — electrolysis of oxide/molten compound; less reactive (Fe, Cu) — reduction with carbon/carbon monoxide',
          'Carbon reduction: C or CO removes oxygen from ore (ore + carbon → metal + CO₂); works if metal is below carbon in reactivity',
          'Electrolysis: electric current forces non-spontaneous reactions; breaks down molten ionic compounds; separates at cathode (reduction, gains electrons) and anode (oxidation, loses electrons)',
          'Aluminum extraction: bauxite ore (Al₂O₃) dissolved in cryolite, electrolyzed → Al produced at cathode, O₂ at anode',
          'Iron extraction: blast furnace; ore + carbon monoxide → iron (reduced) + CO₂; iron melts and tapped at bottom; slag forms from impurities',
          'Copper: extracted by either reduction (if ore contains CuO) or concentration/electrolytic refining (from Cu compounds/malachite)',
          'Uses: metals chosen for specific properties — copper for wiring (conducts), aluminum for aircraft (light, strong), iron for construction (strong, cheap)'
        ],
        tip: 'Edexcel emphasizes reactivity series determining extraction methods; link to electron transfer (redox).'
      },
      {
        ref: '4.2',
        title: 'Reversible Reactions and Equilibrium',
        formulas: [
          'Le Chatelier\'s Principle: if equilibrium disturbed, system shifts to counteract the change'
        ],
        points: [
          'Reversible reaction: A + B ⇌ C + D; proceeds in both directions, reaches equilibrium where forward and reverse rates equal',
          'At equilibrium: concentrations (or pressures) constant; continuous forward and reverse reactions (dynamic equilibrium)',
          'Equilibrium expression: Kc = [C][D] / [A][B] (square brackets = concentrations); constant at given temperature',
          'Factors affecting equilibrium position:',
          '  - Temperature: exothermic reaction favored by lower temp; endothermic by higher temp',
          '  - Pressure: shifts toward side with fewer moles of gas',
          '  - Concentration: adding reactant shifts right; removing shifts left',
          'Industrial equilibria: Haber process (N₂ + 3H₂ ⇌ 2NH₃), Contact process (2SO₂ + O₂ ⇌ 2SO₃)',
          'Conditions chosen to maximize yield while maintaining reasonable rates'
        ],
        tip: 'Edexcel includes predicting equilibrium shifts and understanding industrial chemistry rationale.'
      }
    ]
  },
  {
    section: '5. Separate Chemistry I',
    icon: '🧪',
    color: '#7C3AED',
    topics: [
      {
        ref: '5.1',
        title: 'Enthalpy and Energy Changes',
        formulas: [
          'ΔH = energy products - energy reactants (if ΔH < 0, exothermic; if > 0, endothermic)',
          'q = m × c × ΔT (heat = mass × specific heat capacity × temperature change)'
        ],
        points: [
          'Exothermic: reactions releasing energy; temperature of surroundings increases; ΔH negative; e.g., combustion, neutralization, condensation',
          'Endothermic: reactions absorbing energy; temperature decreases; ΔH positive; e.g., melting, evaporation, photosynthesis',
          'Enthalpy change (ΔH): total heat absorbed/released at constant pressure',
          'Calorimetry: burning fuel in bomb calorimeter or simple can experiment to measure energy released',
          'Bond energy: energy required to break a bond (endothermic) or released when forming bond (exothermic)',
          'ΔH = Σ(bond energies broken) - Σ(bond energies formed)',
          'Applications: understanding fuel efficiency, designing instant heat/cold packs, industrial heat recovery'
        ],
        tip: 'Edexcel requires energy calculations from calorimetry data and bond energies.'
      }
    ]
  },
  {
    section: '6. Groups in the Periodic Table',
    icon: '📋',
    color: '#059669',
    topics: [
      {
        ref: '6.1',
        title: 'Group 1: Alkali Metals',
        points: [
          'Electron configuration: [noble gas]ns¹ (one electron in outer shell)',
          'Physical properties: soft metals, low density, silvery appearance, low melting/boiling points',
          'Reactivity: increases down group (easier to lose outer electron); Li < Na < K < Rb < Cs',
          'Reactions with water: metal + water → metal hydroxide + hydrogen gas; reaction vigorous and releases heat',
          'Reactions with chlorine: metal + chlorine → metal chloride (ionic salt)',
          'Reactions with oxygen: 4Li + O₂ → 2Li₂O (forms oxides); Na and K form peroxides/superoxides in excess oxygen',
          'Trends: density increases down group (except K), reactivity increases, melting points decrease'
        ],
        tip: 'Edexcel includes predictions of reactivity patterns and equations for reactions with water/oxygen/halogens.'
      },
      {
        ref: '6.2',
        title: 'Group 7: Halogens',
        points: [
          'Electron configuration: [noble gas]ns²np⁵ (seven electrons in outer shell)',
          'Physical properties: diatomic molecules (F₂, Cl₂, Br₂, I₂); F is gas (pale yellow), Cl is gas (yellow-green), Br is liquid (red-brown), I is solid (dark gray)',
          'Reactivity: decreases down group (harder to gain electron); Cl > Br > I > F (F is anomalous — too small)',
          'Displacement reactions: halogen + halide salt → different halogen + halide salt; more reactive halogen displaces less reactive',
          'Reaction with metals: halogen + metal → metal halide; reactivity decreases with thermal energy required',
          'Reaction with hydrogen: H₂ + halogen → hydrogen halide; reactivity decreases down group',
          'Tests: Cl₂ bleaches moist starch paper (turns white); Br₂ turns aqueous KI orange-brown (I₂ forms)'
        ],
        tip: 'Edexcel includes halogen displacement reactions and explanations using atomic properties.'
      },
      {
        ref: '6.3',
        title: 'Group 0: Noble Gases',
        points: [
          'Electron configuration: full outer shell (ns²np⁶ except He which is 1s²)',
          'Chemical properties: extremely unreactive (inert) — stable octet of electrons',
          'Physical properties: monoatomic gases; very low boiling points',
          'Uses: helium (balloons, cooling, inert atmosphere), neon (signs), argon (light bulbs, welding), xenon (headlights)',
          'Boiling points increase down group due to increasing Van der Waals forces'
        ],
        tip: 'Edexcel notes that noble gas unreactivity is due to complete outer shell, explaining group trends.'
      }
    ]
  },
  {
    section: '7. Rates of Reaction and Energy Changes',
    icon: '🔥',
    color: '#EA580C',
    topics: [
      {
        ref: '7.1',
        title: 'Reaction Rates',
        points: [
          'Reaction rate: speed at which reactants are consumed or products formed (mol/L/s or g/s)',
          'Measuring rate: monitor change in concentration, mass, or volume with time; use graphs',
          'Mean rate = change in concentration / change in time (from linear section of graph)',
          'Factors affecting rate:',
          '  - Temperature: higher temp = faster particle movement = more frequent, energetic collisions; rate increases ~×2 for every 10°C',
          '  - Concentration: higher concentration = more particles per unit volume = more frequent collisions',
          '  - Pressure (gases): increase pressure → increase concentration → more collisions',
          '  - Surface area (solids): larger surface area = more contact with reactant, faster reaction',
          '  - Catalysts: provide alternative pathway with lower activation energy, speeds reaction without being used',
          'Collision theory: particles must collide with sufficient energy (> activation energy) to react',
          'Activation energy (Eₐ): minimum energy required for reaction to proceed'
        ],
        tip: 'Edexcel includes graphs showing rate changes with temperature, concentration; requires calculation of mean rates.'
      },
      {
        ref: '7.2',
        title: 'Catalysts and Industrial Chemistry',
        points: [
          'Catalyst: substance that increases reaction rate by providing alternate pathway; regenerated (not consumed)',
          'Enzyme catalysts: biological catalysts; highly specific to one substrate (biological molecule)',
          'Examples: ammonia synthesis (Fe catalyst), sulfur trioxide production (V₂O₅ catalyst), car exhaust (Pt, Pd catalysts)',
          'Industrial reactions: optimized for economic reasons — balance rate (speed), yield (amount), cost (temperature, pressure, catalysts)',
          'Haber process: N₂ + 3H₂ ⇌ 2NH₃; uses high temperature (~450°C) for reasonable rate, high pressure (200 atm) to shift equilibrium right, iron catalyst',
          'Contact process: 2SO₂ + O₂ ⇌ 2SO₃; uses moderate temperature to balance rate and yield, vanadium(V) oxide catalyst'
        ],
        tip: 'Edexcel asks why specific conditions are chosen in industrial reactions; consider rate, yield, cost, safety.'
      }
    ]
  },
  {
    section: '8. Fuels and Earth Science',
    icon: '🌍',
    color: '#16A34A',
    topics: [
      {
        ref: '8.1',
        title: 'Fossil Fuels and Crude Oil',
        points: [
          'Crude oil: complex mixture of hydrocarbons (compounds of C and H only); formed from marine organisms over millions of years',
          'Hydrocarbons: alkanes (CₙH₂ₙ₊₂, saturated, single bonds), alkenes (CₙH₂ₙ, unsaturated, C=C double bonds)',
          'Fractional distillation: separates crude oil into fractions by boiling point: refinery gas (smallest, lowest BP), petrol, kerosene, diesel, fuel oil, bitumen (largest, highest BP)',
          'Fraction properties: boiling point increases with chain length; viscosity increases; flammability decreases',
          'Cracking: breaking long-chain hydrocarbons into shorter, more useful ones; done by heating or catalytic cracking',
          'Complete combustion: hydrocarbon + O₂ → CO₂ + H₂O (clean burning); releases lots of energy',
          'Incomplete combustion: insufficient oxygen → CO + H₂O or C + H₂O (produces toxic CO)',
          'Sulfur content: some crude oil contains sulfur compounds; burning releases SO₂ (acid rain); desulfurization removes this'
        ],
        tip: 'Edexcel includes properties of fuel fractions and equations for combustion (complete and incomplete).'
      },
      {
        ref: '8.2',
        title: 'Atmospheric Chemistry',
        points: [
          'Atmosphere composition: 78% N₂, 21% O₂, 1% noble gases + trace CO₂, H₂O vapor, pollutants',
          'Early atmosphere: mostly CO₂, water vapor, little O₂; atmosphere changed due to photosynthesis (added O₂) and chemical reactions',
          'Greenhouse gases: CO₂, CH₄, N₂O, CFCs; trap infrared radiation, warming atmosphere',
          'Global warming: increased atmospheric CO₂ (from burning fossil fuels, deforestation) → increased greenhouse effect → rising temperatures',
          'Climate change evidence: melting ice caps, rising sea levels, changing weather patterns, ecosystem disruption',
          'Ozone layer: O₃ in stratosphere; blocks harmful UV radiation; CFCs damage ozone (Montreal Protocol phases out CFCs)',
          'Acid rain: SO₂ (from combustion) + H₂O → H₂SO₄; damages ecosystems; solutions include coal desulfurization, catalytic converters'
        ],
        tip: 'Edexcel includes causes and consequences of atmospheric issues; requires understanding of chemical processes.'
      },
      {
        ref: '8.3',
        title: 'Alternative Fuels',
        points: [
          'Hydrogen: burns cleanly (H₂ + O₂ → H₂O), zero emissions; produced via electrolysis or steam reforming; challenges: production energy, storage, infrastructure',
          'Biofuels: ethanol from fermentation (biomass + yeast → ethanol + CO₂), biodiesel from plant oils; renewable but land-use concerns',
          'Electric vehicles: powered by rechargeable batteries; zero direct emissions but electricity generation matters (coal vs. renewable)',
          'Nuclear: uranium fission releases enormous energy; low carbon but radioactive waste disposal concern',
          'Renewables: solar, wind, hydroelectric; abundant but intermittent (require storage)',
          'Evaluating fuels: consider environmental impact, sustainability, efficiency, cost, availability'
        ],
        tip: 'Edexcel requires evaluation of fuel choices considering multiple factors.'
      }
    ]
  },
  {
    section: '9. Separate Chemistry II',
    icon: '🧬',
    color: '#DC2626',
    topics: [
      {
        ref: '9.1',
        title: 'Identification of Ions and Compounds',
        points: [
          'Flame tests: metal ions produce characteristic colors — Li red, Na orange, K lilac, Ca brick-red, Cu green-blue',
          'Hydroxide precipitation: metal ions + NaOH solution → colored precipitates — Fe²⁺ green, Fe³⁺ brown, Cu²⁺ blue, Al³⁺ white (soluble in excess NaOH)',
          'Anion tests: CO₃²⁻ + dilute HCl → CO₂ (bubbles, turns lime water milky); SO₄²⁻ + Ba²⁺ → BaSO₄ (white precipitate); Cl⁻ + AgNO₃ → AgCl (white precipitate)',
          'Gas tests: H₂ + burning splint → "pop"; O₂ + glowing splint → relights; CO₂ + lime water → white precipitate; NH₃ + damp red litmus → blue',
          'Qualitative analysis: combination of tests to identify known ions in solution'
        ],
        tip: 'Edexcel requires confident identification of ions using test methods and characteristic observations.'
      },
      {
        ref: '9.2',
        title: 'Organic Chemistry Basics',
        points: [
          'Organic chemistry: chemistry of carbon compounds (except carbonates, oxides)',
          'Alkanes: saturated hydrocarbons, only single bonds (C-C, C-H); inert, non-polar',
          'Alkenes: unsaturated hydrocarbons, contain C=C double bond; reactive (addition reactions)',
          'Bromine water test: alkene + Br₂ → orange solution decolorizes (C=C attacked); alkane unchanged',
          'Addition reactions: alkene + reagent → product; e.g., ethene + Br₂ → 1,2-dibromoethane',
          'Polymers: long-chain molecules formed by linking monomers; addition polymers (alkene units link via C-C), condensation polymers (monomers join losing water)',
          'Polymers like poly(ethene): produced by polymerization of alkenes under heat and pressure',
          'Alcohols: contain -OH group; used as fuels (ethanol), solvents, reactions to carboxylic acids',
          'Fermentation: glucose + yeast → ethanol + CO₂; anaerobic process; ethanol separated by distillation',
          'Carboxylic acids: contain -COOH group; acidic; can react with alcohols (esterification) to form esters'
        ],
        tip: 'Edexcel emphasizes functional groups and how they determine reactivity.'
      },
      {
        ref: '9.3',
        title: 'Nanochemistry',
        points: [
          'Nanoparticles: particles with at least one dimension < 100 nm (1-100 nm size range)',
          'Properties: different properties than bulk material at same composition (e.g., gold nanoparticles appear red, bulk gold yellow)',
          'Surface area to volume ratio: nanoparticles have larger ratio; explains different reactivity and properties',
          'Applications: sunscreens (ZnO, TiO₂ nanoparticles), medicine (targeted drug delivery), electronics, catalysts',
          'Risks: limited toxicity data; nanoparticles may enter body via lungs/skin; disposal challenges',
          'Production methods: top-down (breaking bulk into nanoparticles), bottom-up (assembling from atoms/molecules)'
        ],
        tip: 'Edexcel includes discussion of benefits and risks of nanotechnology.'
      }
    ]
  }
];
