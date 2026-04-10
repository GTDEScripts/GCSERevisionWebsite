// ══════ GEOGRAPHY: Topic Notes (AQA 8035) ══════

const GEO_DATA = [
  {
    section: 'Paper 1: Living with the Physical Environment (88 marks)',
    icon: '⚠️',
    color: '#DC2626',
    topics: [
      {
        ref: 'P1-A',
        title: 'Section A: The Challenge of Natural Hazards',
        points: [
          'Natural hazard: natural event that poses a risk to people or property. Tectonic (earthquakes, volcanoes, tsunamis), atmospheric (tropical cyclones, drought), geomorphological (flooding, mass movement)',
          'Hazard risk factors: level of urbanisation, population density, proximity to plate boundary, level of development (LEDCs more vulnerable), preparedness and governance',
          'Tectonic plates: Earth\'s crust divided into moving plates. Plates float on semi-molten asthenosphere, moved by convection currents in the mantle',
          'Plate boundary types: Constructive/divergent (plates move apart — magma rises, new crust forms, gentle volcanic activity, shallow earthquakes — e.g. Mid-Atlantic Ridge, Iceland), Destructive/convergent (oceanic plate subducts under continental — intense earthquakes, explosive volcanoes — e.g. Pacific Ring of Fire), Conservative/transform (plates slide horizontally — major earthquakes, no volcanism — e.g. San Andreas Fault)',
          'Earthquakes: sudden release of energy as tectonic plates move. Focus = underground origin. Epicentre = surface point above focus. Seismic waves (P-waves, S-waves, surface waves) cause shaking. Measured on Richter scale (magnitude/energy) and Mercalli scale (intensity/damage)',
          'Primary earthquake effects: ground shaking, building collapse, infrastructure damage. Secondary effects: tsunamis, fires (broken gas mains), landslides, disease',
          'Volcanic hazards: lava flows, pyroclastic flows (superheated gas + ash, 800°C+, most deadly), lahars (volcanic mudflows), ash fall (collapses roofs, disrupts aviation), toxic gases (SO₂, CO₂)',
          'Responses to tectonic hazards: immediate (search and rescue, emergency aid, temporary shelter) vs long-term (rebuilding, hazard-resistant construction, early warning systems)',
          'Tropical cyclones: rotate around low pressure centre over warm ocean (>26.5°C). Also called hurricanes (Atlantic) or typhoons (Pacific). Structure: calm eye, destructive eyewall, spiral rain bands',
          'Cyclone formation requirements: sea surface temperature >26.5°C, sufficient Coriolis effect (5°–20° latitude), low wind shear at altitude',
          'Cyclone hazards: violent winds (150–300 km/h), storm surge (most deadly — sea rises 5–8m, floods coast), torrential rainfall (inland flooding, landslides)',
          'Climate change and natural hazards: warming oceans intensify tropical cyclones, more extreme rainfall events (flooding), shifting climate belts alter drought/flood patterns',
          'Global atmospheric circulation: three-cell model (Hadley, Ferrel, Polar cells). ITCZ (Inter-Tropical Convergence Zone) drives rainfall in tropics. Trade winds, westerlies created by pressure differences',
          'UK weather hazards: winter storms (named by Met Office), flooding (prolonged rainfall, flash floods), drought (blocking anticyclones), Beast from the East events (cold Arctic air)',
          'Climate change evidence: temperature records (+1.1°C since 1850), ice core data, sea level rise (+3mm/year), glacier retreat, coral bleaching, phenological shifts',
          'Causes of climate change: natural (Milankovitch cycles, volcanic eruptions, solar variation) and human (CO₂ from fossil fuels — 420ppm vs 280ppm pre-industrial, deforestation, agriculture methane/N₂O)',
          'Managing climate change: mitigation (reducing emissions — renewable energy, energy efficiency, afforestation, international agreements — Paris Agreement 1.5°C target) vs adaptation (flood defences, drought-resistant crops, relocation, heat action plans)'
        ],
        tip: 'Know all three plate boundary types and what happens at each. For responses, always distinguish between IMMEDIATE and LONG-TERM. Mitigation = reducing climate change. Adaptation = living with it.',
        example: 'Haiti vs Japan earthquakes: similar magnitude but vastly different death tolls. Haiti (LEDC): poorly constructed buildings, inadequate emergency services, slow international response = 220,000 deaths. Japan (MEDC): strict building codes, early warning system, rapid response = fewer deaths.'
      },
      {
        ref: 'P1-B',
        title: 'Section B: The Living World',
        points: [
          'Ecosystem: community of living organisms (biotic: plants, animals, microorganisms) interacting with non-living environment (abiotic: soil, climate, water). Linked by food chains/webs and nutrient cycles',
          'Food chain: linear sequence of feeding relationships. Producer (plant) → primary consumer (herbivore) → secondary consumer (carnivore) → tertiary consumer. Energy transfers but ~90% lost as heat at each level',
          'Food web: network of interconnected food chains. More realistic. Removal of one species can cascade through web. More species = more resilient ecosystem',
          'Nutrient cycle: nutrients move between living organisms and abiotic environment. Carbon cycle (photosynthesis absorbs CO₂, respiration + decomposition releases CO₂). Nitrogen cycle (bacteria fix nitrogen, plants absorb, decomposers return to soil)',
          'Biome: large-scale ecosystem determined by climate (temperature + precipitation). Major biomes: tropical rainforest, tropical savanna, temperate deciduous forest, temperate grassland, boreal forest (taiga), tundra, hot desert, cold desert',
          'Tropical rainforest characteristics: high biodiversity (over 50% of world\'s species on 6% of land), dense layered canopy (emergent, canopy, understorey, ground), high rainfall (2000mm+/year), hot and stable temperatures (26–28°C), nutrient-poor soils (nutrients locked in vegetation, not soil)',
          'Rainforest adaptations: buttress roots (structural support on thin soils), drip tips (shed water), lianas (woody climbers to reach light), epiphytes (grow on trees), many animals nocturnal',
          'Deforestation causes: commercial logging, cattle ranching (Amazon — beef/leather exports), palm oil plantations (Southeast Asia), subsistence farming, mineral extraction, HEP dam construction',
          'Deforestation impacts: biodiversity loss (habitat destruction, extinction), climate change (trees store CO₂ — releasing it by burning), soil erosion (roots hold soil — without them, topsoil washes away), hydrological change (trees regulate water cycle — flooding + drought increase), indigenous community displacement',
          'Sustainable rainforest management: selective logging (not clear-cutting), replanting, ecotourism, debt-for-nature swaps, international agreements, indigenous land rights',
          'Hot deserts characteristics: less than 250mm annual rainfall, extreme temperature range (50°C day, below 0°C night), sparse vegetation, sandy/rocky terrain. Location: 20°–30° north/south latitude (subtropical high pressure)',
          'Desert adaptations: cacti (store water in stems, spines reduce transpiration), camels (fat humps not water, kidney efficiency), reptiles (ectotherms — thermoregulate using environment)',
          'Opportunities in hot deserts: mineral extraction, solar energy (cloudless skies), farming (irrigation), tourism (unique landscapes)',
          'Challenges: extreme heat, water scarcity, soil infertility, remoteness. Desertification: spread of desert conditions due to overgrazing, deforestation, drought, climate change. Sahel region example'
        ],
        tip: 'Ecosystems in Small Scale (pond, hedgerow) vs Large Scale (biomes). Rainforest: nutrient-poor soils but high biodiversity — understand why. Know causes AND impacts of deforestation.',
        example: 'Amazon deforestation: Brazil lost 17% of Amazon in 50 years. Cattle ranching accounts for 80% of clearance. Impact: golden lion tamarin near extinction, carbon released = accelerates climate change, indigenous Yanomami communities displaced.'
      },
      {
        ref: 'P1-C',
        title: 'Section C: Physical Landscapes in the UK',
        points: [
          'UK physical landscape shaped by: glaciation (ice ages), geology (rock type determines landscape), rivers (erosion, transportation, deposition), coastal processes (wave action)',
          'Glaciation legacy: U-shaped valleys, corries/cirques, arêtes (sharp ridges), hanging valleys, drumlins, moraines. Most prominent in Scotland, Wales, Lake District',
          'Coastal processes: erosion (hydraulic action, abrasion, attrition, solution/corrosion), transportation (longshore drift — moves sediment along coast), deposition',
          'Erosional coastal landforms: cliffs, wave-cut platforms (at base of cliff), headlands and bays (differential erosion of hard/soft rock), caves → arches → stacks → stumps',
          'Depositional coastal landforms: beaches (constructive waves deposit material), spits (longshore drift extends ridge into sea where coast bends — e.g., Spurn Head), bars (spit joins headlands), tombolo (spit connects island to mainland), sand dunes',
          'Coastal management: hard engineering (sea walls — expensive, reflect waves, protect directly; groynes — trap longshore drift, maintain beach; rock armour/rip rap — absorbs wave energy; revetments — permeable slope reduces wave energy) vs soft engineering (beach nourishment — adds sediment, natural appearance; managed retreat — allow flooding, create saltmarsh — cheaper long-term)',
          'River processes: erosion (vertical — downward cutting; lateral — sideways widening; hydraulic action — water pressure; abrasion — sediment scraping; attrition — sediment wearing down; solution — chemical dissolving), transportation, deposition',
          'River course: upper (steep, narrow, V-shaped valley, waterfalls, rapids), middle (wider, meanders begin, floodplain developing), lower (wide floodplain, ox-bow lakes, deltas, gentle gradient)',
          'River landforms: waterfall and gorge, meanders (lateral erosion outside bend creates cliff, deposition inside creates slip-off slope), ox-bow lakes (abandoned meander), floodplain (flat area either side), levees (natural raised banks from deposition in floods)',
          'Flood hydrographs: lag time (between peak rainfall and peak discharge), rising limb, falling limb, base flow. Shorter lag time = faster response to rainfall = more flood risk. Impermeable surfaces, steep slopes, sparse vegetation all shorten lag time',
          'Flood management: hard engineering (dams and reservoirs, channel straightening, embankments/levees, flood relief channels) vs soft engineering (flood plain zoning — don\'t build on flood plain; afforestation — trees intercept rainfall; river restoration — restore natural meanders to slow flow)',
          'UK glaciated uplands: Lake District, Scottish Highlands, Snowdonia. Tourism important. Challenges: overgrazing, footpath erosion, conflicts between farmers and tourists'
        ],
        tip: 'Section C asks you to answer questions on TWO of three options: UK rivers, UK coasts, or UK glaciated uplands. Check which topics you have studied. Hard vs soft engineering trade-offs are frequently examined.',
        example: 'Holderness Coast (fastest eroding coast in Europe — ~2m/year): chalk cliffs, soft geology, powerful waves. Coastal management debate: Mappleton protected (sea wall + groynes) but this reduced sediment supply, accelerating erosion south of Mappleton. Hard engineering can create problems elsewhere.'
      }
    ]
  },
  {
    section: 'Paper 2: Challenges in the Human Environment (88 marks)',
    icon: '🏙️',
    color: '#1E40AF',
    topics: [
      {
        ref: 'P2-A',
        title: 'Section A: Urban Issues and Challenges',
        points: [
          'Urbanisation: increasing proportion of population living in urban areas. Global average 55% (2018) → 68% projected by 2050. Urbanisation fastest in Africa and Asia',
          'Causes of urbanisation: rural-urban migration (push factors: rural poverty, lack of jobs/services, farming failure; pull factors: employment, higher wages, better education/healthcare) and natural increase (higher birth rates than death rates in cities)',
          'Megacities: cities with population >10 million. 2023: 34 megacities globally. Most in Asia (Tokyo, Delhi, Shanghai, Mumbai, Dhaka). Increasing in Global South',
          'World cities: cities with major global influence in finance, culture, business (London, New York, Tokyo). Often centres of MNCs, media, international finance',
          'Urban issues in LICs/NEEs: rapid unplanned growth outstripping services. Squatter settlements/informal settlements (shanty towns) — lack clean water, sanitation, electricity, security. Often on hazardous land (steep slopes, floodplains)',
          'Squatter settlement characteristics: self-built from scavenged materials, high population density, limited/no legal tenure, poor infrastructure. Often occupied by rural migrants seeking work',
          'Improving squatter settlements: site and service schemes (government provides land + basic services — residents build own homes), self-help schemes (government provides materials/training), favela upgrading (improve existing settlement — pave roads, add electricity, improve housing security)',
          'Urban issues in HICs: deindustrialisation (loss of manufacturing jobs), social inequality (wealthy suburbs vs deprived inner-city areas), traffic congestion, pollution, housing shortage, aging infrastructure',
          'Urban regeneration: renewal of declining urban areas. Gentrification (private investment attracts wealthier residents — can displace original community), flagship projects (iconic development regenerates wider area), public-private partnerships',
          'Sustainable urban living: reducing resource use, green spaces, efficient transport, energy-efficient buildings, waste reduction. Example: BedZED (London) — low-carbon housing development',
          'Urban transport: congestion a major challenge. Solutions: public transport investment (metro, BRT — Bus Rapid Transit), cycling infrastructure, congestion charging (London), pedestrianisation, park-and-ride',
          'Urban green spaces: parks, gardens, street trees, green roofs. Benefits: air quality, biodiversity, mental health, surface water absorption, urban heat island reduction',
          'Urban heat island: cities warmer than surrounding rural areas. Causes: dark surfaces absorb heat, buildings trap heat, reduced vegetation, waste heat from buildings/vehicles. Mitigated by green roofs, trees, light-coloured surfaces'
        ],
        tip: 'Know urban issues in both LICs/NEEs (squatter settlements, rapid growth) AND HICs (deindustrialisation, gentrification). Urban growth rates highest in Africa and Asia. Be able to evaluate strategies to improve squatter settlements.',
        example: 'Rio de Janeiro favela upgrading (Favela-Bairro programme): streets paved, sewers installed, electricity connected, sports facilities built. Improved living conditions for 600,000 residents. However: gentrification forced some original residents out as land values rose.'
      },
      {
        ref: 'P2-B',
        title: 'Section B: The Changing Economic World',
        points: [
          'Development: improvement in living standards, economic productivity, health, and education. Multidimensional — not just income',
          'Measuring development: GNI per capita (income), HDI (Human Development Index — life expectancy + education + income), infant mortality rate, life expectancy, literacy rate, access to safe water, access to healthcare, Gini coefficient (inequality)',
          'HDI: composite index combining life expectancy (health), education (mean + expected years schooling), GNI per capita. 0–1 scale. Very High (>0.8), High, Medium, Low. Better measure than GNI alone',
          'Development gap: vast inequality between highest and lowest income countries. Top 10% own ~76% of global wealth. Sub-Saharan Africa lowest development indicators',
          'Causes of unequal development: colonialism (exploitative extraction, artificially drawn borders), landlocked countries (limited trade), physical geography (disease burden, natural disasters), governance (corruption, political instability), debt (servicing loans limits public spending), trade inequality (commodity prices unstable, manufactured goods more valuable)',
          'Development continuum: spectrum from LICs (low income) through NEEs (newly emerging economies — Brazil, Russia, India, China, South Africa = BRICS) to HICs (high income). Movement along continuum possible',
          'Strategies to reduce the development gap: aid (short-term emergency vs long-term development aid), fair trade (guarantees minimum price to farmers, funds community projects), investment (FDI — Multinational Corporation investment creates jobs, technology transfer), microfinance (small loans to entrepreneurs in LICs), remittances (money sent home by migrants — $700bn/year globally), debt relief (writing off unpayable debts), technology leapfrogging (mobile banking replacing need for physical bank infrastructure)',
          'Tourism as development strategy: advantages (foreign currency earnings, employment, infrastructure investment), disadvantages (profits leak to foreign-owned companies, seasonal employment, dependency, environmental damage)',
          'NEEs (Newly Emerging Economies): rapid economic growth, industrialisation, urbanisation. India example: IT sector growth, educated English-speaking workforce, outsourcing hub. China: world\'s factory, manufacturing-led growth',
          'UK economy changes: deindustrialisation from 1970s (coal, steel, shipbuilding declined), shift to tertiary/quaternary sectors (services, finance, technology). Regional inequalities (London dominant, North-South divide). Post-Brexit trade adjustments',
          'Science and business parks: clusters of high-tech industries near universities. Cambridge Science Park, Salford Quays. Benefits: knowledge exchange, skilled graduates, prestige addresses'
        ],
        tip: 'HDI is more useful than GNI alone (includes health + education). Know causes of unequal development — examiners expect multiple factors. Be able to evaluate strategies (trade vs aid vs investment — which is more effective?)',
        example: 'Fair trade bananas: Fairtrade certified farmers receive guaranteed minimum price (even if market price drops), plus social premium for community projects. Empowers small-scale farmers vs large plantation dependence. Criticism: premium not always passed fully to farmers; benefits limited scale.'
      },
      {
        ref: 'P2-C',
        title: 'Section C: The Challenge of Resource Management',
        points: [
          'Resource: something found in the environment that meets human needs. Renewable (can be replenished — wind, solar, timber) vs non-renewable (finite — fossil fuels, metal ores)',
          'Global resource inequality: HICs consume far more per capita than LICs. USA consumes 25× more oil per person than India. Reflects economic development and lifestyle',
          'Food security: enough nutritious food available, accessible and affordable for all people. 820 million people currently food insecure. Conflict, poverty, climate change, drought main causes',
          'Threats to food security: population growth, climate change (altered rainfall, heat stress on crops), water scarcity, soil degradation, rising food prices, political instability/conflict disrupting supply chains',
          'Increasing food supply: irrigation (drip irrigation most efficient), new GMO crops (drought/pest resistant), aeroponics/hydroponics (growing without soil), seasonal food and avoiding waste (reduce demand), increased use of fertilisers and pesticides (intensification), land reform',
          'Sustainable food production: organic farming (no synthetic chemicals, healthier soil, lower yields), permaculture (mimics natural ecosystems), urban farming (rooftop gardens, vertical farms), reducing meat consumption (livestock very resource-intensive)',
          'Water security: reliable access to sufficient safe water for drinking, sanitation, and production. 2 billion people lack safe drinking water. Agriculture uses 70% of global freshwater',
          'Water stress: demand exceeds natural supply. Arid regions, high population density, economic growth. River over-extraction (Colorado River no longer reaches sea), aquifer depletion (Ogallala, Middle East)',
          'Water management: dams and reservoirs (store water, generate HEP but displaces communities, ecological damage), water transfer schemes (move water from wet to dry regions — controversial), desalination (removes salt from seawater — expensive, energy-intensive), grey water recycling, reducing demand through pricing',
          'Energy security: uninterrupted availability of affordable energy. Most countries dependent on imported fossil fuels — creates geopolitical vulnerability. Russia/Ukraine war highlighted European gas dependence',
          'Energy mix: combination of energy sources. UK: natural gas (heating), nuclear, wind (fastest growing), solar, biomass. Target: net zero by 2050 — requires massive renewable expansion',
          'Non-renewable energy: fossil fuels (coal, oil, natural gas — burning releases CO₂), nuclear (uranium fission — no CO₂ but radioactive waste, safety concerns, high construction cost)',
          'Renewable energy: wind (on/offshore — intermittent, visual impact debate), solar (photovoltaic cells — intermittent, land use), hydroelectric (reliable, large-scale, ecosystem disruption), geothermal (Iceland), tidal/wave (emerging technology)',
          'Energy conservation: reducing consumption through efficiency (LED lighting, insulation, fuel-efficient vehicles, smart grids) cheaper than generating more power'
        ],
        tip: 'Resource management covers food, water AND energy — know all three. Food security threats: population growth + climate change. Water stress = demand > supply. Energy security = reliable, affordable energy supply.',
        example: 'UK water stress: South East England most water stressed (high population density, low rainfall, chalk aquifers over-extracted). Solution proposed: reservoir expansion (controversial — loss of land), water transfer from Wales, leakage reduction (25% of water lost in pipes).'
      }
    ]
  },
  {
    section: 'Paper 3: Geographical Applications (76 marks)',
    icon: '🔍',
    color: '#059669',
    topics: [
      {
        ref: 'P3-A',
        title: 'Section A: Issue Evaluation',
        points: [
          'Pre-release resource booklet: given 12 weeks before exam. Contains maps, graphs, data, photos on a geographical issue (links to Paper 1 and 2 content)',
          'Issue evaluation task: use resource booklet + geographical knowledge to make a justified decision/recommendation about a geographical issue. Worth 37 marks',
          'Decision-making: identify viewpoints of different stakeholders (local residents, government, developers, environmental groups — often conflicting priorities), weigh up evidence, reach justified conclusion',
          'Using resources: extract relevant data from maps/graphs/tables; analyse photographs for spatial and temporal change; identify bias/limitation in sources',
          'Geographical skills tested: interpreting maps (OS maps, choropleth maps, dot maps, flow maps), analysing graphs (bar, line, scatter, pie), statistical skills (mean, median, mode, range, percentage change, correlation)',
          'Map skills: 4-figure grid references (identify 1km grid square), 6-figure grid references (identify 100m square), measuring distance (with scale bar), identifying relief using contour lines, aspect and gradient',
          'Fieldwork skills (also in Section B): primary data collection, secondary data, sampling methods (random, systematic, stratified), risk assessment',
          'Exam strategy for Issue Evaluation: spend time before exam understanding resource booklet thoroughly. In exam: use specific data from booklet as evidence. Show you understand different viewpoints. Justify final recommendation clearly'
        ],
        tip: 'Issue Evaluation uses the pre-release booklet — study it thoroughly beforehand. In the exam, cite specific data/evidence from the booklet. Acknowledge different stakeholder perspectives before reaching a conclusion.',
        example: 'Issue: should a new reservoir be built in a river valley? FOR: water security for 500,000 people, flood control, recreation. AGAINST: 200 homes flooded, agricultural land lost, river ecosystem disrupted, community displaced. Decision must weigh evidence and give justified recommendation.'
      },
      {
        ref: 'P3-B',
        title: 'Section B: Fieldwork',
        points: [
          'Fieldwork: primary data collection in an outdoor environment. GCSE requires two fieldwork investigations — one in a physical environment (river, coast) and one in a human environment (CBD, urban area)',
          'Enquiry process: Question/hypothesis → planning → risk assessment → data collection (primary) → data presentation → analysis and interpretation → evaluation + conclusion',
          'Hypothesis: testable prediction. Example: "Pebble size decreases downstream in River X." Clear, measurable, location-specific',
          'Primary data collection: data you collect yourself. Questionnaires, counts (pedestrian, traffic), measurements (river velocity, pebble size, beach width), field sketches, photographs',
          'Secondary data: data collected by others. OS maps, census data, Environment Agency flood records, Met Office weather data, satellite imagery. Used to support primary data',
          'Sampling strategies: random (every point has equal chance — unbiased but may miss patterns), systematic (at regular intervals — e.g., every 50m — efficient), stratified (proportional to known groups — e.g., age groups in questionnaire)',
          'Equipment: river fieldwork (flow meter/dog biscuit for velocity, clinometer for gradient, tape measure, pebble sampling), coastal (quadrat for vegetation, erosion pin for cliff retreat), human (tally counter, questionnaire)',
          'Risk assessment: identify hazards (fast-flowing water, traffic, uneven terrain), assess likelihood and severity, mitigation measures. Required before fieldwork',
          'Data presentation: appropriate technique for data type. Bar graph (comparing categories), line graph (change over time or continuous data), scatter graph (correlation between two variables), choropleth map (shading to show spatial variation), isoline map (lines connecting equal values), proportional symbol map',
          'Analysis: describe patterns, explain causes. Use geographical knowledge to explain findings. Reference data specifically (give values)',
          'Evaluation: limitations of methodology (sample size too small? Equipment accuracy? Weather conditions? Bias in questionnaire?). Suggest improvements',
          'Anomalies: data points that don\'t fit the overall pattern. Identify and explain (human error, unusual local conditions, sampling bias)'
        ],
        tip: 'Fieldwork questions test the WHOLE enquiry process. Know your OWN fieldwork investigations thoroughly — question, method, data collected, how presented, findings, limitations. Examiners ask about YOUR specific fieldwork.',
        example: 'River investigation hypothesis: "Velocity increases downstream." Primary data: float method (timing dog biscuit over 10m) at 5 sites. Systematic sampling every 500m downstream. Anomaly at Site 3 (slower than Site 2): explained by narrow channel section creating turbulence. Overall trend: velocity increased downstream (supported hypothesis).'
      }
    ]
  },
  {
    section: 'Geographic Skills & Techniques',
    icon: '🗺️',
    color: '#7C3AED',
    topics: [
      {
        ref: 'Skills',
        title: 'Cartographic, Graphical & Statistical Skills',
        points: [
          'OS maps: 1:50,000 (2cm = 1km) and 1:25,000 (4cm = 1km). Contour lines (brown lines connecting equal heights). Closer contours = steeper slope. Spot heights (exact elevation points)',
          '4-figure grid reference: identifies 1km² grid square. Always go "along the corridor then up the stairs" — eastings (along) first, northings (up) second. E.g., 3652',
          '6-figure grid reference: more precise (100m² square). Estimate tenths within each grid square. E.g., 362524',
          'Choropleth maps: areas shaded to show intensity/density. Useful for comparing regions. Limitation: implies uniform distribution within each area',
          'Dot maps: each dot represents a quantity. Shows distribution/concentration. Limitation: dots can overlap, hard to read exact values',
          'Flow/desire line maps: arrows showing direction and volume of movement. Width of arrow proportional to amount',
          'Scatter graphs and correlation: positive (as x increases, y increases), negative (as x increases, y decreases), no correlation. Line of best fit. Outliers (anomalies). Spearman\'s Rank Correlation coefficient (exam may ask you to interpret)',
          'Statistical measures: mean (average — sum ÷ count), median (middle value when ordered), mode (most frequent), range (highest − lowest). Used to analyse field data',
          'Percentage change: ((new − old) ÷ old) × 100. Positive = increase. Negative = decrease',
          'Cross sections: drawing vertical profile from OS map contours. Shows relief (height variation) along a transect line',
          'Annotated sketch maps and field sketches: label key features, show proportions roughly accurately, include compass direction and scale',
          'Comparing map evidence: identifying spatial patterns, changes over time (historical maps), land use change, infrastructure development'
        ],
        tip: 'Grid references: EASTINGS first (along), NORTHINGS second (up). "Along the corridor, up the stairs." For 6-figure: estimate tenths within each grid square. Scatter graph correlation: positive, negative, or none — and how strong.',
        example: 'Reading 6-figure grid reference 362524: Easting 362 (go to line 36, then 0.2 of the way to 37 = 36.2), Northing 524 (go to line 52, then 0.4 of the way to 53 = 52.4). This identifies a 100m × 100m square on the map.'
      }
    ]
  }
];
