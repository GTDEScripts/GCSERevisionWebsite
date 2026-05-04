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
  },
  {
    section: 'Case Studies',
    icon: '📍',
    color: '#B45309',
    topics: [
      {
        ref: 'CS-1',
        title: 'Japanese Earthquake 2011 (Tectonic Hazard — HIC)',
        points: [
          'Location: Pacific Plate subducts under North American Plate — destructive boundary off NE Japan coast',
          'Magnitude 9.0 — one of the strongest earthquakes ever recorded; depth ~30km',
          'Primary effects: ground shaking caused 127,000 buildings to collapse; 15,000+ people killed; 14,000+ injured; Fukushima Daiichi nuclear plant reactors failed',
          'Secondary — Social: over 340,000 people displaced; mass evacuation zones around Fukushima; long-term psychological trauma',
          'Secondary — Economic: total cost ~$235 billion; global supply chain disruption (car, electronics manufacturing halted); fishing industry collapsed',
          'Secondary — Environmental: radioactive water leaked into Pacific Ocean from Fukushima; farmland contaminated; 20km exclusion zone still partly in force',
          'Tsunami: triggered by earthquake — waves up to 40m high struck coastline within 30 minutes; inundated 560km² of land',
          'Fully linked chain: Earthquake → Tsunami → Reactor meltdown → Supply chain disruption → Global food/energy shortages → Long-term environmental degradation',
          'Immediate responses: 100,000 military deployed for search and rescue; 120,000 people evacuated from coastal towns; emergency shelters set up',
          'Long-term responses: Reconstruction of coastal towns and seawalls; Nuclear safety reforms; improved early warning systems; "Build Back Better" philosophy applied'
        ],
        tip: 'Japan is an HIC with excellent preparation (strict building codes, early warning system) yet still suffered massive losses — shows that even wealthy countries cannot fully prevent tectonic hazard damage.',
        example: 'Compare Japan 2011 vs Haiti 2010: Japan (HIC, M9.0) ~15,000 deaths; Haiti (LIC, M7.0) ~220,000 deaths. Level of development and preparedness — not just magnitude — determines death toll.'
      },
      {
        ref: 'CS-2',
        title: 'Haiti Earthquake 2010 (Tectonic Hazard — LIC)',
        points: [
          'Date: 12 January 2010, 16:53 local time; Magnitude 7.0 on Richter Scale; depth ~13km; epicentre 25km from Port-au-Prince',
          'Plate boundary: conservative/transform boundary — Caribbean and North American plates slide past each other',
          'Primary effects: 336,000 people killed; 90% of buildings in worst-hit towns destroyed; 13 of 15 government ministry offices destroyed; half of Haiti\'s schools collapsed',
          'Secondary effects: main road to Jacmel blocked for 10+ days, preventing aid delivery; Radio Lumière (broadcasts to 90% of Haiti) went off-air; main prison in Port-au-Prince destroyed, 4,000 inmates escaped',
          'Immediate responses: $100 million aid from USA; $330 million from EU; 105,000 tents and 1,000,000+ tarpaulins provided; 4.3 million given food rations in following weeks; American Red Cross worked to prevent cholera',
          'Long-term responses: temporary schools created, new teachers trained; support for jobs (equates to ~70% of population needing income); cash-for-work projects',
          'Why so devastating: LIC with weak building standards (no earthquake-resistant construction), inadequate emergency services, political instability, extreme poverty; 80% of population lived below poverty line',
          'Earthquake struck a densely populated area — Port-au-Prince had 3 million people in a small area'
        ],
        tip: 'Haiti vs Japan: same decade, very different outcomes. Haiti shows how poverty amplifies hazard impacts — weak buildings, poor governance, limited emergency services, and pre-existing poverty created catastrophic death toll.',
        example: 'Haiti M7.0 = 336,000 deaths. Japan M9.0 = 15,000 deaths. Magnitude alone does not determine impact — development level is the key variable.'
      },
      {
        ref: 'CS-3',
        title: 'Typhoon Haiyan 2013 (Tropical Cyclone — LIC/NEE)',
        points: [
          'Date: 7–8 November 2013; Philippines — western Pacific; Category: Super Typhoon (highest category)',
          'Wind speeds up to 314 km/h; storm surge 6–8m high; rainfall ~400mm in 12 hours; landfall near Tacloban city',
          'Primary effects: 6,000+ people killed; 28,000 injured; 1.1 million houses damaged or destroyed; large-scale crop failure (coconut and rice)',
          'Secondary — Social: disease outbreaks (cholera, dysentery from contaminated water); long-term mental health problems; 4 million people displaced',
          'Secondary — Economic: $2.86 billion total damage; fishing industry devastated; destroyed infrastructure impeded aid delivery',
          'Secondary — Environmental: coastal ecosystems devastated; storm surge flattened coastal vegetation; saltwater intrusion contaminated agricultural land',
          'Immediate responses: 100,000 military personnel deployed for search and rescue; evacuation of 1.5 million people prior to landfall; emergency food, water and shelter distributed',
          'Long-term responses: "Build Back Better" programme launched — rebuilding homes to higher standards; mangrove restoration along coastlines to act as natural buffer; coastal sea walls rebuilt; improved early warning systems'
        ],
        tip: 'Storm surge is the most deadly element of a tropical cyclone — not wind. Haiyan\'s 6–8m storm surge is what caused mass casualties in Tacloban.',
        example: 'Haiyan was one of the most powerful tropical cyclones ever recorded at landfall. Despite warnings and evacuations, coastal communities were devastated by storm surge — highlighting limits of preparedness even with warnings.'
      },
      {
        ref: 'CS-4',
        title: 'Somerset Levels Flooding 2013–14 (UK Flood Event)',
        points: [
          'Location: Somerset Moors, SW England — low-lying floodplain of Rivers Parrett and Tone; traditionally managed wetland',
          'Flooding began November 2013; not fully drained until late February 2014 — lasted ~65 days; 2022 was the UK\'s warmest year on record, making extreme rainfall more likely',
          'Causes: exceptional autumn/winter rainfall (most since 1766); rivers ran over banks; drains and ditches clogged with sediment; farm fields became saturated; rivers had not been dredged for years',
          'Effects on farms: 17 farms abandoned (some for up to 36 weeks); crops lost; livestock moved; farm income collapsed; road access across Somerset disrupted',
          'Transport effects: A361 (main road between Taunton and Glastonbury) flooded and closed; limited access for emergency services',
          'Community: villages isolated; residents used boats to access homes; psychological stress on local population',
          'Immediate responses: pumping stations used to increase capacity of rivers; villages used community groups and volunteers; government provided financial support',
          'Long-term: Somerset Flood Action Plan launched; £100 million investment to dredge rivers, raise road levels, increase pump capacity; allows businesses to continue during future floods; planning restrictions on new flood plain development'
        ],
        tip: 'For UK flooding: explain both PHYSICAL causes (prolonged rainfall, saturated soils) and HUMAN causes (lack of dredging, flood plain development, impermeable surfaces). Management must balance hard and soft engineering.',
        example: 'The Somerset Levels flooding showed how human management decisions (stopping dredging) combined with extreme weather can cause long-term disruption. The £100m action plan balanced engineering with sustainable land management.'
      },
      {
        ref: 'CS-5',
        title: 'River Tees — River Landscapes in the UK',
        points: [
          'The River Tees flows 137km from Cross Fell (893m) in the Pennines to the North Sea at Teesmouth; ideal UK river to show all three landform zones',
          'Upper Course — High Force Waterfall: one of UK\'s most powerful waterfalls, dropping 21m; formed where river flows over resistant Whin Sill (hard igneous rock) above softer limestone and shale; undercutting creates plunge pool → gorge retreats upstream',
          'Upper Course features: steep gradient, narrow V-shaped valley, interlocking spurs, waterfalls, rapids; mainly vertical erosion',
          'Middle Course near Barnard Castle: valley widens; meanders develop; lateral erosion dominant; river cliff on outer bend (erosion), slip-off slope on inner bend (deposition)',
          'Lower Course landforms (deposition dominant): wide floodplain; levees (raised banks from flood deposition); ox-bow lakes (abandoned meanders cut off); gentle gradient approaching sea',
          'Linked processes — meander formation: steep slope → fast flow → hydraulic action erodes outer bend → lateral erosion widens valley → deposition on inner bend → meander migrates → neck narrows → ox-bow lake forms',
          'Lower Course: floodplain created by lateral erosion and deposition of alluvium during floods; builds fertile agricultural land'
        ],
        tip: 'For river landscapes: know Upper (erosion dominant — V-shaped valley, waterfalls), Middle (meanders, wider valley), and Lower (deposition dominant — floodplain, ox-bow lakes, delta). Link landforms to PROCESSES.',
        example: 'High Force: Hard Whin Sill overlies soft limestone. River undercuts the soft rock → overhang collapses → gorge retreats upstream. This shows how differential rock resistance controls landform development.'
      },
      {
        ref: 'CS-6',
        title: 'Holderness Coastline — Coastal Management',
        points: [
          'Location: East Yorkshire, stretching 61km from Flamborough Head in the north to Spurn Head spit in the south; fastest eroding coastline in Europe (~2m/year)',
          'Why erosion is so rapid: soft boulder clay cliffs (easily eroded), powerful North Sea waves attacking directly from the north-east, longshore drift removes sediment southward, rising sea levels, limited natural beach to absorb wave energy',
          'Problems of coastal erosion/management: property prices falling (people want to buy a house that might fall into sea); villages lost — 30 since Roman times; businesses at risk of losing income; Easington gas terminal at risk (supplies ~25% of UK\'s gas); farmers lose ~100 acres of farmland per year',
          'Attempts at coastal management — Mappleton: two rock groynes built (£2 million, 1991) to trap longshore drift sediment and maintain beach; sea wall to protect village and B1242 road',
          'Conflicts created: Mappleton is protected, but the groynes trap sediment that used to travel south; beaches south of Mappleton now starved of sediment → erosion rate has increased south of Mappleton',
          'Example: Cowden Farm — ~400 acres of farmland lost to sea; farmer not protected; Great Cowden village lost; dispute between landowners and council',
          'Spurn Head: a 5km long narrow sand spit formed by longshore drift transporting sediment southward; has been rebuilt after storms several times; now acts as a nature reserve; council decided to allow natural processes rather than defend',
          'Spurn Head: maintained by deposition of material from northern Holderness erosion — if northern erosion stopped, Spurn Head would disappear'
        ],
        tip: 'Holderness shows the classic conflict of coastal management: defending one area can accelerate erosion elsewhere. Always evaluate SOCIAL, ECONOMIC and ENVIRONMENTAL costs and benefits of coastal defences.',
        example: 'Mappleton sea wall protected 50 homes and a main road (B1242). Cost: ~£2 million. Benefit: village saved. But groynes starved beaches to the south of sediment — accelerating erosion of farmland and other properties. Is protecting one village worth it?'
      },
      {
        ref: 'CS-7',
        title: 'Amazon Rainforest — Deforestation',
        points: [
          'Location: Brazil and 8 surrounding countries; world\'s largest tropical rainforest covering ~5.5 million km²',
          'Causes of deforestation: commercial farming (soya bean — Brazil is world\'s largest exporter, cattle ranching), logging (mahogany, rosewood), road building (Trans-Amazonian Highway opened up forest to settlers), mineral extraction (iron ore, gold — e.g. Carajás mine, Brazil), energy development (HEP dams — Belo Monte Dam), settlement (government-sponsored migration), population growth',
          'Scale: Brazil lost over 17% of the Amazon in 50 years; deforestation rate peaked in 2004 (~27,000 km²/year), declined after government action, but rising again',
          'Advantages of deforestation (economic development): creates jobs, export earnings (soya, beef, timber), tax revenue for government, infrastructure development for remote communities',
          'Disadvantages/environmental impacts: biodiversity loss — Amazon holds ~10% of all species on Earth; deforestation releases stored carbon (contributes to climate change); soil erosion once tree roots removed; disruption to water cycle; displacement of indigenous communities (e.g. Yanomami tribe)',
          'Local climate impacts: fewer trees = less transpiration → less rainfall → drier local climate → makes remaining forest more vulnerable to fire and drought',
          'Sustainable management: selective logging, replanting, REDD+ scheme (pays countries to protect forests), indigenous land rights, ecotourism, debt-for-nature swaps, international pressure (e.g. G7 commitments to protect Amazon)'
        ],
        tip: 'Learn the full list of causes of deforestation — examiners expect more than just "logging." Always balance the economic arguments FOR deforestation with environmental arguments AGAINST. Sustainable management is always evaluated.',
        example: 'Cattle ranching accounts for ~80% of Amazon deforestation — driven by global demand for beef. Brazil exports beef to US, EU, China. This shows the global economic system is linked to local deforestation decisions.'
      },
      {
        ref: 'CS-8',
        title: 'Thar Desert — Opportunities and Challenges',
        points: [
          'Location: India/Pakistan border (Rajasthan state, India); ~200,000 km² of hot desert; annual rainfall <150mm; temperatures up to 50°C in summer, near 0°C in winter',
          'Opportunities — Mineral extraction: gypsum (used in construction and for making plaster), kerite (used for paper-making); quarrying provides employment and export income',
          'Opportunities — Energy: ideal for solar energy (very few cloudy days; India\'s National Solar Mission targets large solar farms here); wind energy also harnessed',
          'Opportunities — Farming: subsistence farming of crops like millet and sorghum (drought resistant); some commercial farming using irrigation (the Indira Gandhi Canal brings water 650km from the Himalayas)',
          'Opportunities — Tourism: Thar Desert safari popular; tens of thousands of tourists visit annually; camel rides, folk music and festivals attract visitors; local economic benefit from hotels and guides',
          'Challenges — Extreme temperatures: makes working outdoors very difficult in summer; heat stress on workers, livestock, and crops',
          'Challenges — Water supply: only a few rivers flow through; demand has increased due to irrigation and population growth; aquifer depletion; Indira Gandhi Canal has led to waterlogging and soil salinisation in some areas',
          'Challenges — Inaccessibility: poor road network; only a few routes accessible after monsoon rainfall; remote location limits economic development and access to services'
        ],
        tip: 'Hot desert case study needs BOTH opportunities AND challenges. Always give specific examples — mineral names, tourist activities, specific canal name — not just vague statements.',
        example: 'The Indira Gandhi Canal brings irrigation water 650km to the Thar Desert, enabling commercial farming. Benefit: increased food production and income. Problem: waterlogging and salinisation of soil in some irrigated areas — a classic double-edged intervention.'
      },
      {
        ref: 'CS-9',
        title: 'Rio de Janeiro — Urban Issues in an NEE',
        points: [
          'Location and importance: 2nd largest city in Brazil with 13 million in metropolitan area; located on Guanabara Bay in SE Brazil; regional role in South America; major port, financial and tourism centre',
          'Location/global role: 2nd largest city in South America (after São Paulo); hosts international events (2014 FIFA World Cup, 2016 Olympics); cultural exports include samba, carnival; global centre for trade/tourism',
          'Causes of urban growth: natural increase (higher birth rate than death rate) and rural-urban migration — people pushed from rural poverty, attracted by Rio\'s jobs, services, and perceived opportunities',
          'Squatter settlements (favelas): over 1,000 favelas housing ~22% of Rio\'s population; built on steep hillsides (Zona Sul) or flood plains — land nobody else wanted; self-built from scavenged materials; lack clean water, sanitation, electricity, security of tenure',
          'Rocinha favela: one of South America\'s largest, estimated 70,000–150,000 residents; located next to wealthy Gávea and São Conrado neighbourhoods — visible inequality; steep slope means flood and landslide risk',
          'Problems in favelas: poor sanitation; inadequate housing (flood and fire risk); high crime (drug gangs control some areas); lack of formal employment; poor access to healthcare and education; stigma prevents residents accessing formal economy',
          'Favela-Bairro Project: government upgrading programme — paved roads, installed sewers, connected electricity, built sports facilities and health centres; improved conditions for 600,000+ residents; gave legal land titles',
          'Issues with Favela-Bairro: gentrification pushed some original residents out as land values rose; not all favelas included; crime and gang control remained in some areas',
          'Regeneration for 2014/2016 events: Olympic stadium, improved transport (BRT metro lines extended), port zone regenerated; but also forced evictions of favela residents from land developers wanted'
        ],
        tip: 'Rio exemplifies NEE urban challenges — rapid growth, massive inequality (wealthy Ipanema beach vs Rocinha hillside), and government schemes that help but create new problems (gentrification, displacement).',
        example: 'Rocinha sits immediately behind the upmarket beach neighbourhood of São Conrado — the contrast is visible in minutes. HDI for Rocinha is lower than many LICs; for São Conrado it matches European averages. Same city, same kilometre, different world.'
      },
      {
        ref: 'CS-10',
        title: 'Curitiba — Sustainable Urban Living (Brazil)',
        points: [
          'Location: Curitiba is the capital of Paraná state, southern Brazil; population ~1.9 million; recognised globally as a model of sustainable urban planning',
          'Bus Rapid Transit (BRT) — "Green Exchange": Curitiba\'s BRT system is a global model; dedicated bus lanes carry up to 2,200 passengers per hour; re-articulated buses, speedy payment, reliable service; 70% of commuters use public transport (reduces car dependency); integrated network links bus with cycle paths and pedestrian zones',
          'Waste recycling — "Green Exchange" programme: 70% of Curitiba\'s waste is recycled — one of the most successful recycling rates in the world; the Green Exchange programme allows low-income residents to exchange recyclable waste for food, bus tickets, school supplies, or medical treatment — waste reduction AND social welfare in one scheme',
          'This reduces time, improves public health and provides incentives for recycling and litter reduction; local schools involved, encouraging community participation',
          'Creating green space: over 28 parks and woodland areas created, improving quality of life and managing flood risk (floodplains converted to parks rather than built on); 1.5 million trees planted across the city; green parks act as natural flood storage',
          'Why Curitiba is a model: combines environmental sustainability, social equity, and economic sensibility; long-term planning vision (Mayor Jaime Lerner from 1970s); shows sustainable strategies work together — transport + recycling + green space + local economy'
        ],
        tip: 'Curitiba shows that sustainable urban living requires MULTIPLE strategies working together — transport, recycling, green space. The BRT and Green Exchange programmes link environmental, social and economic sustainability.',
        example: 'The Green Exchange: Curitiba residents in low-income areas bring recyclable waste (cans, bottles, paper) and receive fresh food, bus tokens, or school supplies in return. Result: city gets recycling; residents get food security. A single scheme that achieves environmental AND social goals simultaneously.'
      },
      {
        ref: 'CS-11',
        title: 'Bristol Temple Quarter — UK Urban Regeneration',
        points: [
          'Location: Temple Quarter is an area in central Bristol, adjacent to Bristol Temple Meads railway station (the main intercity rail hub for Bristol)',
          'History: former industrial and warehouse district; first part of the city to be outside the original medieval city walls; declined as traditional industries left; area became derelict wasteland with empty warehouses',
          'Why regeneration was needed: economic decline; high unemployment; underused brownfield land in a prime location next to the railway station',
          'Regeneration plans: major mixed-use redevelopment of ~170 hectares; plans include new homes, commercial offices, hotels, restaurants, visitor attractions, and an arena for up to 12,000 spectators',
          'University of Bristol enterprise campus: major new academic and commercial campus planned as part of Temple Quarter — bringing student accommodation, research facilities, and academia; high-tech, media and digital industries targeted',
          'Positives: new jobs created; brownfield land being reused (no green belt impact); improved transport links; tourism boost for city; links to university creates knowledge economy hub',
          'Negatives/problems: slow progress — much of the area remains undeveloped; local people have been involved very little in planning decisions; housing affordability concerns as regeneration raises property prices',
          'Conflicts: between developers (profit motive), existing residents (community concerns), and environmentalists (some wildlife habitats on derelict land); arena plans delayed due to costs'
        ],
        tip: 'Urban regeneration in UK cities typically involves brownfield redevelopment, public-private partnerships, and flagship projects. Always evaluate who BENEFITS and who LOSES — gentrification is a common criticism.',
        example: 'Temple Quarter shows urban regeneration is not quick or simple — despite plans dating back years, much of the site remains unused. The arena was delayed repeatedly. This highlights the gap between planning ambitions and real-world delivery.'
      },
      {
        ref: 'CS-12',
        title: 'Nigeria — Newly Emerging Economy (NEE)',
        points: [
          'Location and importance: West Africa, Gulf of Guinea; borders Benin, Niger, Chad and Cameroon; largest economy in Africa (overtook South Africa ~2014); population 220 million+ — most populous country in Africa',
          'Global/regional role: member of ECOWAS, OPEC, Commonwealth; US peacekeeping troops in region; BBC broadcasts to over 200 countries from Lagos; cultural influence through Nollywood (world\'s second largest film industry by output); one of fastest-growing music/fashion scenes globally',
          'Changing industrial structure: traditionally dependent on oil (discovered 1958); oil still ~70% of government revenue but manufacturing, services and IT growing; Lagos emerging as financial and commercial hub',
          'Economic growth benefits: GDP per capita has risen, Nigeria now classed as lower-middle income; reducing absolute poverty; improving healthcare and education access; FDI increasing (Chinese investment in infrastructure)',
          'Advantages of TNCs/oil: tax revenue, infrastructure investment, technology transfer, thousands of jobs in oil sector',
          'Challenges/inequalities: GDP per capita masks huge inequality — many in rural north still in absolute poverty; high regional inequality between wealthy Lagos/Abuja and poor rural north; corruption (oil revenues have not always reached people); unstable oil prices',
          'Political instability: history of military rule; Boko Haram terrorism in north; land conflicts in Niger Delta region linked to oil extraction; elections disputed',
          'Environmental issues: widespread oil pollution from pipeline spills; gas flaring contributes to climate change; deforestation in south; water contamination in Niger Delta communities'
        ],
        tip: 'Nigeria is the AQA go-to NEE case study. Know: location, role in region/world, changing economy (oil to services), advantages AND disadvantages of economic development, AND the role of TNCs (Shell). Link all three together.',
        example: 'Nigeria earns billions from oil but the Niger Delta — where oil is extracted — has some of the country\'s poorest communities. Shell operates there as a TNC. This illustrates how resource wealth can coexist with local poverty when governance is weak.'
      },
      {
        ref: 'CS-13',
        title: 'Shell in the Niger Delta — TNC Case Study',
        points: [
          'Shell (Royal Dutch Shell) is a TNC that has operated in the Niger Delta since oil was discovered in 1958; Niger Delta = major oil-producing region in southern Nigeria',
          'Scale of operations: Shell Nigeria has over 6,000km of pipelines; extracts millions of barrels of oil per year; one of Nigeria\'s largest employers',
          'Advantages to Nigeria: tax and royalty payments to Nigerian government fund public services; ~250,000 Nigerian workers employed directly or indirectly in the energy sector; technology and skills transfer; infrastructure (roads, pipelines) built by Shell',
          'Disadvantages/problems — Environmental: approximately 300+ oil spills per year from corroded pipelines and sabotage; spills contaminate rivers, groundwater and farmland; mangroves (important coastal ecosystem) heavily damaged; Ogoniland oil spill (UNEP 2011 report) found contamination requiring up to 30 years to clean up',
          'Disadvantages — Social: local communities (e.g. Ogoni people) receive little of oil wealth; fishing and farming livelihoods destroyed by pollution; protests have been met with military force (Ken Saro-Wiwa executed 1995 after protesting Shell\'s activities)',
          'Disadvantages — Economic leakage: profits go back to Shell\'s European shareholders and headquarters; Dutch and UK governments/shareholders benefit more than local Nigerian communities',
          'Gas flaring: Shell burns off excess natural gas at oil wells — wastes energy, pollutes air, contributes to climate change; illegal under Nigerian law but continues',
          'Shell\'s response: company says many spills caused by pipeline sabotage and oil theft (not their fault); has funded some community development projects; committed to ending gas flaring'
        ],
        tip: 'TNC case study: always cover ADVANTAGES (to host country) AND DISADVANTAGES. Shell in Niger Delta perfectly illustrates the tension between economic development and environmental/social justice.',
        example: 'The Ogoni people\'s land in the Niger Delta has been producing oil for Shell since the 1950s yet Ogoniland remains one of Nigeria\'s poorest regions with severe oil contamination. A UN report (2011) found contamination at levels 1,000× WHO safe limits — requiring the world\'s largest oil cleanup.'
      },
      {
        ref: 'CS-14',
        title: 'UK Post-Industrial Economy & North-South Divide',
        points: [
          'Deindustrialisation: from 1970s–1990s, UK lost primary (coal mining, fishing) and secondary (steel, shipbuilding, textiles) industries; causes: global competition, mechanisation (fewer workers needed), cheaper labour in Asia, North Sea oil decline',
          'Coal mining example: ~1,000,000 miners in 1920 → fewer than 3,000 today; steel mills in Sheffield/South Wales closed; Manchester\'s cotton industry gone; Middlesbrough\'s steelworks closed',
          'Shift to tertiary/quaternary: UK economy now ~80% services; financial services (London stock exchange, global banking), IT and digital (1.5 million people in IT sector), creative industries, tourism, education',
          'IT and digital industries: UK is a global hub for fintech (London = world\'s 2nd fintech centre); 1.4 million people employed in IT sector; UK is one of top 5 global destinations for tech investment',
          'Science and business parks: Gloucestershire Business Park (near M5 Junction 11A, Cheltenham) — 70+ companies including NHS Shared Business Services, Direct Wines, Ministry of Defence contractors; modern energy-efficient buildings, green landscaping, cycleways; shows UK\'s shift to quaternary sector',
          'North-South Divide: wages ~£4,000–£14,000 higher on average in South than North; life expectancy 1–2 years lower in North; unemployment higher in North; London and SE generate ~40% of UK\'s GDP',
          'Strategies to reduce the divide: Northern Powerhouse (investment in Manchester, Leeds, Liverpool); Transport improvements (HS2, East Midlands rail); Enterprise Zones (tax breaks to attract businesses to deprived areas); Devolution (devolving power and budgets to regional assemblies)',
          'UK in the Wider World: exports to US, Germany, France, Netherlands, Belgium, China; cultural influence (BBC worldwide, Premier League, music); Heathrow — one of world\'s busiest airports; Channel Tunnel links UK to mainland Europe; UK a global hub for financial services'
        ],
        tip: 'The UK\'s economic change involves three shifts: primary → secondary → tertiary/quaternary. Always link deindustrialisation to the North-South divide. Know at least one example of a science/business park (Gloucestershire Business Park).',
        example: 'Gloucestershire Business Park replaced farmland near Cheltenham with modern offices for 70+ companies. Located near M5 Junction 11A — excellent road links. Shows how UK economic growth now clusters around transport hubs rather than coalfields or ports.'
      },
      {
        ref: 'CS-15',
        title: 'LIC Micro Hydro — Nepal (Renewable Energy)',
        points: [
          'Location: Nepal, South Asia — landlocked, mountainous LIC; most rural communities have no connection to national electricity grid',
          'Scheme: LIC Micro Hydro — small-scale run-of-river hydroelectric schemes built on local fast-flowing rivers and streams in the Himalayas; no large dam required — uses natural flow and gradient',
          'Benefits: provides affordable electricity to communities previously reliant on candles, kerosene and firewood; powers lights, motors, ICT equipment, small businesses; reduces indoor air pollution from burning kerosene; community-managed and maintained',
          'Economic benefits: enables small businesses to operate in evenings; children can study after dark; women freed from collecting firewood; supports agriculture through powered irrigation pumps',
          'The Nepalese government and World Bank have invested heavily: ~500 million rupees committed; supports sustainable, affordable energy aligned with Nepal\'s sustainable development goals',
          'Successes: micro-hydro now powers over 12% of Nepal\'s energy mix; local communities trained to manage systems; supports economic development without large environmental footprint',
          'Problems: when snow melts in spring, flood flows can damage turbines and infrastructure; difficult and expensive to repair equipment in remote mountain areas; local communities lack technical skills to maintain complex components; seasonal variation in river flow affects output'
        ],
        tip: 'LIC energy case study: micro-hydro is ideal for LICs with mountains and rivers — low cost, community-scale, renewable, no dam needed. But reliability and maintenance in remote areas are key challenges.',
        example: 'A village in rural Nepal with micro-hydro can power a school, medical clinic, and small businesses. Before: kerosene lamps, early bedtime, high indoor air pollution. After: children study at night, women run evening businesses, health clinic can refrigerate medicine.'
      },
      {
        ref: 'CS-16',
        title: 'Natural Gas — Resource Management (UK)',
        points: [
          'Natural gas is a non-renewable fossil fuel (mainly methane, CH₄); extracted from underground reservoirs; transported by pipeline; UK relies on natural gas for ~40% of electricity generation and most home heating',
          'Advantages: provides employment for ~1.2 million people in UK gas industry; cleaner than coal (produces ~40% fewer CO₂ emissions per unit of energy); reliable supply during peak demand periods; can respond quickly to changes in electricity demand unlike wind/solar; relatively affordable compared to many alternatives',
          'Disadvantages: non-renewable — finite resource being depleted; reserves concentrated in politically unstable regions (Russia, Middle East) creating energy security risk; still produces significant CO₂ (contributes to climate change); fracking to extract new gas reserves is controversial (earthquakes, water contamination concerns); leaks from pipelines release methane, a much more potent greenhouse gas than CO₂',
          'UK energy dependency: UK has significant North Sea gas reserves but these are declining; increasingly dependent on imported gas from Norway, Qatar, Russia; Russia/Ukraine war (2022) highlighted vulnerability of European energy dependence on Russian gas',
          'Transition challenge: UK aims for net zero by 2050 — must phase out natural gas; replacement requires massive expansion of wind, solar, nuclear; gas boilers in 28 million homes need replacing with heat pumps — expensive and disruptive',
          'The role of natural gas in transition: often described as a "bridging fuel" — cleaner than coal, buys time while renewables are scaled up; but continued investment in gas infrastructure risks carbon lock-in'
        ],
        tip: 'For resource management, always weigh advantages vs disadvantages and consider SUSTAINABILITY. Natural gas is "cleaner than coal" but is still a fossil fuel — it cannot be a long-term solution for net zero.',
        example: 'UK natural gas: 40% of electricity, 85% of homes heated by gas boilers. Replacing all gas boilers with heat pumps would cost ~£500 billion and is the biggest challenge of the UK\'s net zero transition — showing how deeply embedded fossil fuels are in our energy system.'
      }
    ]
  }
];
