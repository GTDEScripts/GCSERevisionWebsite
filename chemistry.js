// ══════ CHEMISTRY: Topic Notes (AQA 8462 Triple) ══════

const CHEM_DATA = [
  {
    section: '1. Atomic Structure & Periodic Table',
    icon: '⚛️',
    color: '#2563EB',
    topics: [
      {
        ref: '5.1.1',
        title: 'Atoms, Elements & Compounds',
        points: [
          'Atom: smallest part of an element that can exist. Nucleus (protons + neutrons) surrounded by electrons in shells',
          'Protons: +1 charge, mass 1, in nucleus. Neutrons: 0 charge, mass 1, in nucleus. Electrons: −1 charge, negligible mass, orbit in shells',
          'Atomic number: number of protons (defines the element). Mass number: protons + neutrons',
          'Isotopes: atoms of the same element with the same number of protons but different numbers of neutrons. Same chemical properties, different masses',
          'Relative atomic mass (Ar): weighted average mass of isotopes compared to ¹²C',
          'Element: substance made of one type of atom only. Compound: two or more elements chemically bonded',
          'Ion: an atom that has gained or lost electrons. Cation = positive (lost electrons). Anion = negative (gained electrons)'
        ],
        tip: 'Atoms are NEUTRAL because protons = electrons. If an atom loses an electron, it becomes a positive ion (one more proton than electrons).',
        example: 'Chlorine has two isotopes: ³⁵Cl (75%) and ³⁷Cl (25%)\nAr = (35×75 + 37×25) ÷ 100 = (2625+925) ÷ 100 = 35.5'
      },
      {
        ref: '5.1.1.4',
        title: 'Electronic Structure',
        points: [
          'Electrons fill shells from the inside out: 1st shell = 2, 2nd shell = 8, 3rd shell = 8',
          'Electronic structure notation: sodium (11) = 2,8,1',
          'Group number = number of electrons in outer shell',
          'Period number = number of electron shells',
          'Noble gases (Group 0): full outer shell — stable, unreactive',
          'Electron configuration determines chemical properties — elements in the same group react similarly because they have the same number of outer electrons'
        ],
        tip: 'The number of outer electrons determines reactivity and bonding. Metals lose outer electrons. Non-metals gain or share electrons.'
      },
      {
        ref: '5.1.2',
        title: 'The Periodic Table',
        points: [
          'Mendeleev: arranged elements by atomic weight, left gaps for undiscovered elements, swapped some elements — his predictions were later confirmed',
          'Modern periodic table: arranged by atomic (proton) number',
          'Groups: vertical columns — same number of outer electrons, similar chemical properties',
          'Periods: horizontal rows — same number of electron shells',
          'Group 1 (alkali metals): very reactive metals, reactivity INCREASES down the group (easier to lose outer electron as atom gets bigger), soft, low density, form +1 ions, react with water to produce hydrogen + metal hydroxide (alkaline solution)',
          'Group 7 (halogens): reactive non-metals, reactivity DECREASES down the group (harder to gain electron as atom gets bigger), form −1 ions, exist as diatomic molecules (F₂, Cl₂, Br₂, I₂), displacement reactions (more reactive halogen displaces less reactive one)',
          'Group 0 (noble gases): very unreactive — full outer shell, boiling point increases down group',
          'Transition metals: between Group 2 and 3 — hard, strong, high melting points, form coloured compounds, can have variable oxidation states, often used as catalysts'
        ],
        tip: 'Group 1 gets MORE reactive going down. Group 7 gets LESS reactive going down. This is opposite — make sure you know why (relates to distance of outer electron from nucleus).'
      }
    ]
  },
  {
    section: '2. Bonding, Structure & Properties',
    icon: '🔗',
    color: '#7C3AED',
    topics: [
      {
        ref: '5.2.1',
        title: 'Ionic Bonding',
        formulas: [
          'Metal + Non-metal → Ionic compound',
          'Electrons TRANSFERRED from metal to non-metal'
        ],
        points: [
          'Ionic bonds form between metals and non-metals',
          'Metal atoms LOSE outer electrons → positive ions (cations)',
          'Non-metal atoms GAIN electrons → negative ions (anions)',
          'Strong electrostatic attraction between oppositely charged ions',
          'Giant ionic lattice: regular arrangement of ions in 3D. Strong bonds in all directions',
          'Properties: high melting/boiling points (strong bonds, lots of energy to break), conduct electricity when molten or dissolved in water (ions free to move and carry charge), do NOT conduct when solid (ions fixed in position), soluble in water',
          'Examples: NaCl (Na⁺ Cl⁻), MgO (Mg²⁺ O²⁻), CaCl₂ (Ca²⁺ 2Cl⁻)'
        ],
        tip: 'When drawing dot-cross diagrams for ionic bonding, show the TRANSFER of electrons. Include the charges on the ions and use square brackets. MgO involves transferring TWO electrons.'
      },
      {
        ref: '5.2.2',
        title: 'Covalent Bonding',
        points: [
          'Covalent bonds: sharing pairs of electrons between non-metal atoms',
          'Single bond: one shared pair. Double bond: two shared pairs. Triple bond: three shared pairs',
          'Simple molecular substances: weak intermolecular forces (van der Waals) between molecules, strong covalent bonds WITHIN molecules',
          'Properties of simple molecular: low melting/boiling points (weak intermolecular forces easily broken), don\'t conduct electricity (no free charges), often gases or liquids at room temperature',
          'Giant covalent structures: diamond (each C bonded to 4 others, very hard, very high MP, doesn\'t conduct), graphite (each C bonded to 3 others in layers, layers slide = soft, one free electron per C = conducts electricity, high MP), silicon dioxide',
          'Graphene: single layer of graphite — strong, light, conducts electricity. Fullerenes: hollow carbon molecules (C₆₀ buckminsterfullerene), carbon nanotubes (very strong, conduct electricity)',
          'Polymers: very large covalent molecules — tangled chains with intermolecular forces between them. Solid at room temperature'
        ],
        tip: 'The KEY distinction: in simple molecular substances, it\'s the weak INTERMOLECULAR forces that break when they melt — NOT the strong covalent bonds. Exam questions often test this.'
      },
      {
        ref: '5.2.3',
        title: 'Metallic Bonding',
        formulas: [
          'Metal structure: giant lattice of positive ions in a sea of delocalised electrons'
        ],
        points: [
          'Metallic bonding: positive metal ions arranged in a regular lattice, surrounded by a sea of delocalised (free) electrons',
          'Delocalised electrons: outer shell electrons detach and move freely between ions',
          'Properties: high melting/boiling points (strong attraction between ions and electrons), good conductors of electricity (delocalised electrons carry charge), good conductors of heat, malleable and ductile (layers of ions can slide over each other without breaking bonds)',
          'Alloys: mixture of two or more metals (or metal + non-metal). Different sized atoms disrupt the regular lattice → layers can\'t slide as easily → harder and stronger than pure metals. Examples: steel (iron + carbon), bronze (copper + tin), brass (copper + zinc)'
        ],
        tip: 'The three types of bonding: Ionic = transfer of electrons (metal + non-metal). Covalent = sharing electrons (non-metal + non-metal). Metallic = sea of electrons (metal + metal). Every bonding question starts with identifying which type.'
      }
    ]
  },
  {
    section: '3. Quantitative Chemistry',
    icon: '⚖️',
    color: '#D97706',
    topics: [
      {
        ref: '5.3.1',
        title: 'Moles & Calculations',
        formulas: [
          'Moles = mass ÷ Mr',
          'Mass = moles × Mr',
          'Mr = sum of Ar of all atoms in formula',
          'Avogadro\'s constant: 6.02 × 10²³ (1 mole = this many particles)',
          'Moles of gas = volume ÷ 24 (at RTP, 24 dm³)',
          'Concentration (mol/dm³) = moles ÷ volume (dm³)',
          'Concentration (g/dm³) = mass ÷ volume (dm³)'
        ],
        points: [
          'Relative formula mass (Mr): add up all relative atomic masses in the formula. H₂O = (2×1) + 16 = 18',
          'Conservation of mass: total mass of reactants = total mass of products (atoms are rearranged, not created or destroyed)',
          'Balancing equations: same number of each type of atom on both sides',
          'Limiting reactant: the reactant that is completely used up first — determines the amount of product formed',
          'Excess reactant: the reactant left over after the reaction',
          'Atom economy = (Mr of desired product ÷ total Mr of all products) × 100%',
          'Percentage yield = (actual yield ÷ theoretical yield) × 100%',
          'Yield is never 100% because: incomplete reactions, side reactions, losses during transfer/purification'
        ],
        tip: 'For calculation questions: ALWAYS start by writing a balanced equation, then calculate Mr, then use the mole formula. Show every step — you get marks for working.',
        example: 'How many moles in 11g of CO₂? (C=12, O=16)\nMr of CO₂ = 12 + (16×2) = 44\nMoles = 11 ÷ 44 = 0.25 mol'
      }
    ]
  },
  {
    section: '4. Chemical Changes',
    icon: '🧪',
    color: '#DC2626',
    topics: [
      {
        ref: '5.4.1',
        title: 'Reactivity Series & Extraction',
        formulas: [
          'Metal + acid → salt + hydrogen',
          'Metal + water → metal hydroxide + hydrogen',
          'Metal oxide + carbon → metal + carbon dioxide'
        ],
        points: [
          'Reactivity series (most to least reactive): Potassium, Sodium, Lithium, Calcium, Magnesium, Aluminium, Carbon, Zinc, Iron, Hydrogen, Copper, Silver, Gold, Platinum',
          'Mnemonic: Please Stop Letting Cows Moo At Cute Zebras In Horrible Copper Silver Gold Pits',
          'More reactive metal displaces less reactive metal from its compound',
          'Oxidation: loss of electrons (OIL). Reduction: gain of electrons (RIG). OILRIG',
          'Metals above carbon: extracted by electrolysis (too reactive for carbon to reduce)',
          'Metals below carbon: extracted by reduction with carbon (cheaper and easier)',
          'Extraction of aluminium: electrolysis of molten aluminium oxide (bauxite) with cryolite to lower melting point. Al forms at cathode (−), O₂ at anode (+, carbon anodes burn away)'
        ],
        tip: 'OILRIG: Oxidation Is Loss, Reduction Is Gain (of electrons). In electrolysis, reduction happens at the cathode (negative — attracts positive metal ions), oxidation at the anode.'
      },
      {
        ref: '5.4.2',
        title: 'Acids & Alkalis',
        formulas: [
          'acid + metal → salt + hydrogen',
          'acid + metal oxide → salt + water',
          'acid + metal hydroxide → salt + water',
          'acid + metal carbonate → salt + water + carbon dioxide'
        ],
        points: [
          'pH scale: 0–14. Below 7 = acid, 7 = neutral, above 7 = alkali',
          'Acids produce H⁺ ions in solution. Alkalis produce OH⁻ ions',
          'Strong acids: completely ionise in water (HCl, H₂SO₄, HNO₃). Weak acids: partially ionise (ethanoic acid, citric acid)',
          'Neutralisation: acid + alkali → salt + water. H⁺ + OH⁻ → H₂O',
          'Naming salts: hydrochloric acid → chlorides, sulfuric acid → sulfates, nitric acid → nitrates',
          'Required practical: titration — measuring exact volumes of acid and alkali needed to neutralise. Use indicator (methyl orange or phenolphthalein). Add acid from burette to alkali in conical flask. Concordant results = within 0.10 cm³',
          'Electrolysis of solutions: at cathode = metal (if less reactive than hydrogen) or hydrogen. At anode = halide ion (Cl₂, Br₂, I₂) if present, otherwise O₂'
        ],
        tip: 'For naming salts: take the metal from the base/carbonate and the ending from the acid. E.g. magnesium + hydrochloric acid → magnesium chloride. Sulfuric acid gives sulfATE salts.',
        example: 'Zinc carbonate + sulfuric acid → zinc sulfate + water + carbon dioxide\nZnCO₃ + H₂SO₄ → ZnSO₄ + H₂O + CO₂'
      }
    ]
  },
  {
    section: '5. Energy Changes',
    icon: '🔥',
    color: '#EA580C',
    topics: [
      {
        ref: '5.5.1',
        title: 'Exothermic & Endothermic Reactions',
        formulas: [
          'Energy change = energy taken in to break bonds − energy released making bonds',
          'ΔH negative = exothermic, ΔH positive = endothermic'
        ],
        points: [
          'Exothermic: transfers energy to surroundings, temperature rises. Examples: combustion, neutralisation, oxidation, hand warmers',
          'Endothermic: takes in energy from surroundings, temperature falls. Examples: thermal decomposition, citric acid + sodium bicarbonate, sports injury cold packs',
          'Bond energy calculations: breaking bonds = endothermic (energy IN). Making bonds = exothermic (energy OUT)',
          'If energy released making new bonds > energy needed to break old bonds → exothermic overall',
          'Energy profile diagrams: exothermic — products lower than reactants (energy released). Endothermic — products higher than reactants (energy absorbed)',
          'Activation energy: minimum energy needed to start a reaction — shown as a "hill" on the energy profile. Catalysts lower the activation energy'
        ],
        tip: 'Breaking bonds ALWAYS requires energy. Making bonds ALWAYS releases energy. The overall energy change depends on which is bigger.',
        example: 'H₂ + Cl₂ → 2HCl\nBonds broken: H-H (436) + Cl-Cl (242) = 678 kJ\nBonds made: 2 × H-Cl (431) = 862 kJ\nEnergy change = 678 − 862 = −184 kJ (exothermic)'
      }
    ]
  },
  {
    section: '6. Rate & Extent of Chemical Change',
    icon: '⏱️',
    color: '#0891B2',
    topics: [
      {
        ref: '5.6.1',
        title: 'Rates of Reaction',
        formulas: [
          'Rate = amount of product formed ÷ time',
          'Rate = amount of reactant used ÷ time',
          'Mean rate = change in quantity ÷ time taken'
        ],
        points: [
          'For a reaction to occur: particles must collide with sufficient energy (≥ activation energy) and correct orientation — collision theory',
          'Factors increasing rate: higher concentration (more particles per volume = more frequent collisions), higher temperature (particles move faster = more frequent AND more energetic collisions), larger surface area (more particles exposed = more collisions), catalyst (provides alternative pathway with lower activation energy, not used up), higher pressure (gases only — more particles in same volume)',
          'Measuring rate: gas syringe (collect gas), mass loss (on balance), colour change, turbidity (disappearing cross)',
          'Rate graphs: steep line = fast reaction, shallow = slow. Gradient of tangent at a point = instantaneous rate. Same amount of product formed regardless of rate (if same quantities used)',
          'Catalysts: increase rate without being used up. They lower the activation energy. Different reactions need different catalysts. Enzymes are biological catalysts'
        ],
        tip: 'Temperature has TWO effects: more frequent collisions AND more energetic collisions. This is why temperature has such a dramatic effect on rate — doubling temperature roughly doubles the rate.',
        example: 'Rate from a graph: if 30 cm³ of gas is produced in the first 20 seconds:\nMean rate = 30 ÷ 20 = 1.5 cm³/s'
      },
      {
        ref: '5.6.2',
        title: 'Reversible Reactions & Equilibrium',
        formulas: [
          'A + B ⇌ C + D (double arrow = reversible)'
        ],
        points: [
          'Reversible reaction: products can react to reform reactants — goes both ways',
          'Dynamic equilibrium: rate of forward reaction = rate of backward reaction. Only in a CLOSED system',
          'Le Chatelier\'s principle: if conditions change, the equilibrium shifts to oppose the change',
          'Temperature increase: equilibrium shifts toward endothermic direction. Decrease: shifts toward exothermic',
          'Pressure increase (gases): equilibrium shifts toward side with FEWER moles of gas',
          'Concentration increase: equilibrium shifts AWAY from the increased substance',
          'Catalysts: do NOT change the position of equilibrium — they speed up both forward and backward reactions equally, reaching equilibrium FASTER but at the same position',
          'Haber process: N₂ + 3H₂ ⇌ 2NH₃ — compromise conditions: 450°C, 200 atm, iron catalyst'
        ],
        tip: 'Catalysts do NOT shift equilibrium — they just help reach it faster. This is a common exam trick question. For Le Chatelier: the system always tries to OPPOSE the change you make.'
      }
    ]
  },
  {
    section: '7. Organic Chemistry',
    icon: '🛢️',
    color: '#65A30D',
    topics: [
      {
        ref: '5.7.1',
        title: 'Crude Oil, Hydrocarbons & Alkanes',
        formulas: [
          'General formula for alkanes: CₙH₂ₙ₊₂',
          'Complete combustion: hydrocarbon + O₂ → CO₂ + H₂O'
        ],
        points: [
          'Crude oil: finite resource, mixture of hydrocarbons formed from ancient marine organisms over millions of years',
          'Hydrocarbons: molecules containing hydrogen and carbon atoms only',
          'Fractional distillation: separates crude oil into fractions by boiling point. Heated to vapour → rises up column → condenses at different heights. Small molecules rise higher (low BP), large molecules stay lower (high BP)',
          'Fractions (top to bottom): gases, petrol, kerosene, diesel, fuel oil, bitumen',
          'Trends as molecules get larger: higher boiling point, higher viscosity (thicker), less flammable, less volatile',
          'Alkanes: saturated hydrocarbons (only single C-C bonds). Methane CH₄, Ethane C₂H₆, Propane C₃H₈, Butane C₄H₁₀',
          'Complete combustion: plenty of oxygen → CO₂ + H₂O (clean). Incomplete combustion: limited oxygen → CO (toxic) + C (soot) + H₂O',
          'Cracking: breaking long-chain hydrocarbons into shorter, more useful ones. Thermal cracking (high temperature, high pressure) or catalytic cracking (catalyst, lower temperature). Produces alkenes (unsaturated, used for polymers)'
        ],
        tip: 'In fractional distillation, remember: small molecules at TOP (low BP, volatile, runny), large molecules at BOTTOM (high BP, viscous, not very flammable).'
      },
      {
        ref: '5.7.2',
        title: 'Alkenes & Polymers',
        formulas: [
          'General formula for alkenes: CₙH₂ₙ',
          'Addition polymerisation: many small monomers → one long polymer chain'
        ],
        points: [
          'Alkenes: unsaturated hydrocarbons — contain at least one C=C double bond',
          'Test for unsaturation: add bromine water — alkenes decolourise it (orange → colourless), alkanes don\'t',
          'Ethene C₂H₄, Propene C₃H₆, Butene C₄H₈',
          'Reactions of alkenes: addition reactions (atoms add across the double bond). Ethene + hydrogen → ethane (hydrogenation). Ethene + water → ethanol (hydration). Ethene + bromine → dibromoethane',
          'Addition polymers: monomers with C=C bonds join together — the double bond opens and links form. Poly(ethene) from ethene, poly(propene) from propene, PVC, PTFE',
          'Condensation polymers: two different monomers join, releasing water. Polyesters (dicarboxylic acid + diol). Naturally occurring: proteins (amino acids), DNA (nucleotides), starch (glucose)',
          'Problem with polymers: most are not biodegradable — persist in landfill and oceans for centuries'
        ],
        tip: 'Addition polymerisation: draw the monomer, open the double bond, show the repeating unit in brackets with extended bonds. The C=C becomes C-C in the polymer.'
      }
    ]
  },
  {
    section: '8–10. Analysis, Atmosphere & Resources',
    icon: '🌍',
    color: '#0D9488',
    topics: [
      {
        ref: '5.8.1',
        title: 'Purity & Chromatography',
        points: [
          'Pure substance: single element or compound (in chemistry, NOT everyday meaning). Has a specific/sharp melting point',
          'Mixture: two or more substances not chemically bonded. Melts over a range',
          'Chromatography: separates mixtures of dissolved substances. Different substances travel different distances through the stationary phase',
          'Rf value = distance moved by substance ÷ distance moved by solvent. Specific to each substance under specific conditions',
          'Required practical: paper chromatography to identify unknown substances by comparing Rf values',
          'Flame tests: Li = crimson red, Na = yellow, K = lilac, Ca = orange-red, Cu = green',
          'Tests: CO₂ = limewater turns milky. O₂ = relights a glowing splint. H₂ = squeaky pop. Cl₂ = bleaches litmus',
          'Test for ions: carbonates = add acid, test gas with limewater. Sulfates = add HCl then barium chloride → white precipitate. Halides = add HNO₃ then silver nitrate (Cl⁻ white, Br⁻ cream, I⁻ yellow precipitate)'
        ],
        tip: 'Rf values should always be between 0 and 1. If your Rf > 1, you\'ve divided the wrong way round. Pure substances give a single spot in chromatography; mixtures give multiple spots.'
      },
      {
        ref: '5.9.1',
        title: 'Earth\'s Atmosphere & Climate',
        points: [
          'Early atmosphere (4 billion years ago): mainly CO₂ and water vapour (like Venus/Mars today). Formed from volcanic activity',
          'How atmosphere changed: water vapour condensed → oceans formed. CO₂ dissolved in oceans → formed sedimentary rocks and fossil fuels. Algae/plants evolved → photosynthesis removed CO₂ and added O₂',
          'Current atmosphere: ~78% nitrogen, ~21% oxygen, ~0.04% CO₂, ~1% argon, plus trace gases',
          'Greenhouse gases: CO₂, methane, water vapour. They absorb infrared radiation from Earth\'s surface and re-radiate it, trapping heat',
          'Human activities increasing greenhouse gases: burning fossil fuels (CO₂), deforestation (less CO₂ absorbed), agriculture/landfill (methane), rice paddies (methane)',
          'Consequences of climate change: rising sea levels, more extreme weather, habitat loss, species extinction, food insecurity',
          'Carbon footprint: total greenhouse gases emitted by a product/person/activity. Reduced by: renewable energy, energy efficiency, carbon capture, reducing consumption'
        ],
        tip: 'The question is not WHETHER climate change is happening (scientific consensus is clear) but how to reduce its impact. Know the difference between correlation and causation in climate data.'
      },
      {
        ref: '5.10.1',
        title: 'Using Earth\'s Resources Sustainably',
        points: [
          'Finite resources: fossil fuels, metal ores — will run out. Renewable resources: timber, fresh water — can be replenished',
          'Reduce, Reuse, Recycle: reduces need for extraction, saves energy, reduces landfill',
          'Life cycle assessment (LCA): evaluates environmental impact at every stage — extraction of raw materials, manufacturing, use, disposal. Involves some subjectivity in assigning values',
          'Water treatment: sedimentation (settling), filtration, chlorination (kills bacteria). Desalination: removes salt from seawater by distillation or reverse osmosis (energy intensive)',
          'Potable water: safe to drink but not pure. Contains dissolved minerals',
          'Phytomining: growing plants on land contaminated with metal, then burning plants to extract metal from ash',
          'Bioleaching: using bacteria to extract metals from low-grade ores — less harmful than traditional mining',
          'Haber process ammonia used for fertilisers: N₂ + 3H₂ ⇌ 2NH₃ (iron catalyst, 450°C, 200 atm)'
        ],
        tip: 'LCA questions often ask you to evaluate — you need to give advantages AND disadvantages, then reach a justified conclusion. There\'s rarely a single "right answer" for these.'
      }
    ]
  }
];
