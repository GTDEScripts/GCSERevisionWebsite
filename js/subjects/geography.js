// ══════ GEOGRAPHY: Topic Notes (AQA 8035) ══════

const GEO_DATA = [
  {
    section: '1. Hazards',
    icon: '⚠️',
    color: '#DC2626',
    topics: [
      {
        ref: '1.1',
        title: 'Natural Hazards & Plate Tectonics',
        points: [
          'Tectonic hazards: caused by Earth\'s internal structure. Crust is divided into plates that move on the mantle below',
          'Plate boundaries: constructive (plates move apart, magma rises, new crust forms), destructive (plates collide, denser plate subducts, earthquakes/volcanoes), conservative (plates slide past each other horizontally)',
          'Earthquakes: sudden ground movement caused by tectonic forces. Measured by magnitude (Richter scale, energy released) and intensity (damage caused)',
          'Volcanoes: openings in crust where magma erupts. Hazards: lava flows, pyroclastic flows (fast-moving hot gas + ash), lahars (volcanic mudflows), ash fall',
          'Seismic waves: P-waves (primary, fast, push-pull motion), S-waves (secondary, slower, side-to-side), surface waves (slowest, most damage)',
          'Focus: point where earthquake originates. Epicenter: point on surface directly above focus',
          'Distribution: earthquakes and volcanoes concentrated at plate boundaries (Ring of Fire, Mid-Ocean Ridges)'
        ],
        tip: 'Learn the THREE types of plate boundaries and what happens at each. Most exam questions ask you to identify boundary type from descriptions.',
        example: 'San Francisco sits on the San Andreas Fault (conservative boundary). Japan sits on a subduction zone (destructive boundary). Iceland sits on a mid-ocean ridge (constructive boundary).'
      },
      {
        ref: '1.2',
        title: 'Weather Hazards & Atmospheric Systems',
        points: [
          'Tropical cyclones (hurricanes, typhoons, cyclones): rotating storm systems forming over warm tropical oceans (>26.5°C)',
          'Formation: warm ocean water evaporates, warm air rises, Earth\'s rotation causes spin (Coriolis effect), low pressure centre forms',
          'Structure: eye (calm centre), eyewall (strongest winds, heaviest rain), rain bands (outer bands of cloud and rain)',
          'Hazards: strong winds (structural damage), heavy rainfall (flooding), storm surge (sea level rise from wind and pressure), landslides',
          'Temperate depressions: low-pressure systems forming at mid-latitudes where warm and cold air masses meet. Bring rain and wind but less extreme than tropical cyclones',
          'Anticyclones: high-pressure systems. Bring fair, settled weather in summer (hot, sunny), and cold, frosty weather in winter',
          'Jet streams: fast-moving ribbons of air in the upper atmosphere. Influence depression and anticyclone movement'
        ],
        tip: 'Tropical cyclones only form over oceans >26.5°C — this is a KEY threshold. Never form over land or cold water.',
        example: 'Hurricane Katrina (2005): formed over warm Gulf of Mexico, intensified due to warm water, caused massive storm surge and flooding in New Orleans.'
      },
      {
        ref: '1.3',
        title: 'Climate Change & Human Impact',
        points: [
          'Global warming: average global temperature rising due to greenhouse gas emissions',
          'Greenhouse gases: CO₂ (combustion of fossil fuels), methane (agriculture, landfills), nitrous oxide (agriculture). Trap heat in atmosphere',
          'Evidence: rising temperatures, melting ice sheets/glaciers, sea level rise, species extinction, shifting ecosystems',
          'Impacts: extreme weather (more intense hurricanes, floods, droughts), food security (crop failures), water stress, ecosystem collapse, migration',
          'Mitigation: reduce emissions (renewable energy, efficiency, electrification), carbon capture, reforestation',
          'Adaptation: flood defences, drought-resistant crops, building resilience in vulnerable communities',
          'Anthropogenic (human-caused) vs natural climate variation: humans amplifying natural cycles through emissions'
        ],
        tip: 'Distinguish MITIGATION (preventing climate change) from ADAPTATION (living with its effects). Exam often asks which strategy applies.',
        example: 'Small island states like Maldives face existential threat from sea level rise. Solutions: international climate action (mitigation) + building floating cities (adaptation).'
      }
    ]
  },
  {
    section: '2. Physical Landscapes',
    icon: '🏔️',
    color: '#8B5A3C',
    topics: [
      {
        ref: '2.1',
        title: 'Glaciation & Periglacial Landscapes',
        points: [
          'Glacier formation: snow accumulates, compacts, becomes ice over many years. Moves downslope under gravity',
          'Erosion: plucking (ice pulls rock away), abrasion (rock embedded in ice scratches bedrock), freeze-thaw weathering',
          'Landforms: u-shaped valleys (erosion widens V-shaped river valley), hanging valleys, corries (bowl-shaped hollows), moraines (ridges of deposited material)',
          'Periglacial: permanently frozen ground (permafrost). Active layer thaws in summer. Creates patterns: stone circles, ice wedges, pingos (ice-cored mounds)',
          'Processes: frost heave (water freezes, expands, pushes rocks up), solifluction (soil flows slowly over permafrost)',
          'Climate: glaciated areas experience ice ages (Quaternary period). Last glacial maximum ~20,000 years ago. Current interglacial period'
        ],
        tip: 'U-shaped vs V-shaped valleys: V = river erosion, U = glacier erosion. Know the key landforms and how each forms.',
        example: 'Scottish Highlands: u-shaped valleys carved by glaciers, hanging valleys where tributary glaciers joined main glacier, corries at valley heads.'
      },
      {
        ref: '2.2',
        title: 'Fluvial (River) Landscapes',
        points: [
          'River processes: erosion (abrasion, attrition, hydraulic action), transportation (load carried downstream), deposition (when energy decreases)',
          'Upper course: steep gradient, narrow valley, vertical erosion dominates, rocky bed, waterfalls and gorges',
          'Middle course: moderate gradient, lateral erosion begins, meanders develop, wider valley',
          'Lower course: gentle gradient, lateral erosion dominant, wide floodplain, meanders become exaggerated, deltas form',
          'Floodplain features: ox-bow lakes (meanders cut off), levees (natural or artificial ridges), flood basins (areas that flood)',
          'Factors affecting river discharge: rainfall, relief, soil type (permeability), land use (urban areas increase runoff)'
        ],
        tip: 'Vertical erosion = upper course, lateral erosion = middle/lower course. Remember: VERTICAL = down, LATERAL = sideways.',
        example: 'River Nile: upper course (Ethiopia highlands, steep), middle course (Sudan, meanders), lower course (Egypt, wide delta, floodplain).'
      },
      {
        ref: '2.3',
        title: 'Coastal Landscapes & Processes',
        points: [
          'Coastal erosion: wave action (hydraulic action, abrasion), weathering (chemical, mechanical), sub-aerial processes',
          'Wave types: constructive waves (low, slow, beach building), destructive waves (high, fast, beach eroding)',
          'Landforms: cliffs (steep rock faces), wave-cut platforms (flat areas at cliff base), caves, arches, stacks (isolated rock columns)',
          'Deposition: spits (ridges of shingle/sand projecting into sea), bars (ridges parallel to shore), beaches (accumulation of sediment)',
          'Coastal management: hard engineering (sea walls, groynes, breakwaters — expensive, artificial), soft engineering (beach nourishment, managed retreat — cheaper, natural)',
          'Fetch: distance over which wind travels. Longer fetch = bigger waves'
        ],
        tip: 'Constructive vs destructive waves: constructive BUILD beaches, destructive DESTROY them. Think "constructive = building, destructive = destroying".',
        example: 'Holderness Coast (Yorkshire): erosion rate ~1m/year, villages being lost to sea. Hard engineering (sea walls) slowing but not stopping erosion.'
      }
    ]
  },
  {
    section: '3. Human & Economic Geography',
    icon: '🏙️',
    color: '#1E40AF',
    topics: [
      {
        ref: '3.1',
        title: 'Urban Growth & Development',
        points: [
          'Urbanisation: increasing proportion of population living in cities. Driven by: rural-urban migration (seeking jobs/services), natural increase in cities, industrialisation',
          'Megacities: cities with >10 million people. Concentrated in developing nations (Asia, Africa). Challenges: housing shortage, poverty, pollution, congestion',
          'Urban structure in developed countries: CBD (Central Business District, high-value land, businesses), inner city (older housing, mixed uses), suburbs (newer housing, families), rural-urban fringe',
          'Shanty towns / slums: informal settlements in developing cities. Lack basic services: water, sanitation, electricity. Result of rapid urbanisation outpacing housing supply',
          'Urban regeneration: renewal of old industrial areas. Methods: demolition, renovation, gentrification (wealthier people move in, displacing poor residents)',
          'Sustainability: green spaces, public transport, mixed-use development, affordable housing'
        ],
        tip: 'Megacities are mostly in DEVELOPING countries now (not Europe/North America). Know examples: Tokyo, Delhi, Shanghai, Mumbai.',
        example: 'Lagos: population growing rapidly (7 million in 1990 → 15 million now). Challenges: informal housing, traffic, pollution. Solutions: BRT (Bus Rapid Transit), regeneration projects.'
      },
      {
        ref: '3.2',
        title: 'Development & Global Inequalities',
        points: [
          'Development: improvement in living standards, access to services, income, health, education. Not just GDP per capita',
          'Measures: HDI (Human Development Index combines: life expectancy, education, income), GNI (Gross National Income per person), infant mortality',
          'Global inequalities: wide gap between rich (USA, Western Europe, Japan) and poor (Sub-Saharan Africa, parts of Asia) nations',
          'Causes: colonialism, lack of infrastructure, corruption, debt, climate/geography, disease burden (malaria, HIV)',
          'Strategies to reduce inequality: fair trade, microfinance, education, healthcare, technology transfer, debt relief, good governance',
          'Emerging economies (BRICS: Brazil, Russia, India, China, South Africa): rapidly industrialising, improving development indicators'
        ],
        tip: 'HDI is more complete than GDP alone. A rich country with poor health/education has lower HDI.',
        example: 'Bangladesh: low GDP but improving HDI through better healthcare and education. Myanmar: resource-rich but poor governance limits development.'
      },
      {
        ref: '3.3',
        title: 'Globalisation & Trade',
        points: [
          'Globalisation: interconnection of economies and cultures worldwide. Enabled by: transport, communications, free trade agreements',
          'MNCs (Multinational Corporations): operate in multiple countries. Bring investment, jobs, technology, but also exploit cheap labour and extract resources',
          'Supply chains: production spread across multiple countries. Benefits: efficiency, specialisation. Risks: exploitation, environmental damage, vulnerability to disruption',
          'Trade blocs: groups of countries with preferential trade (EU, ASEAN). Increase trade within bloc, may exclude outsiders',
          'Winners & losers: some countries benefit from specialisation; others deindustrialise (lose manufacturing jobs)',
          'Cultural homogenisation: Western (especially American) culture spreads globally via media. Local cultures threatened but also adapting, blending'
        ],
        tip: 'Globalisation has BENEFITS (efficiency, access to goods) and COSTS (job losses in some places, inequality). Exam asks for BALANCED view.',
        example: 'Nike: manufactures in Vietnam, Indonesia (cheap labour), sells globally. Vietnamese workers earn low wages, Nike makes high profits. Globalisation widens inequality.'
      }
    ]
  },
  {
    section: '4. Environmental Management',
    icon: '♻️',
    color: '#059669',
    topics: [
      {
        ref: '4.1',
        title: 'Ecosystems & Biodiversity',
        points: [
          'Ecosystem: community of living organisms (biotic) interacting with non-living environment (abiotic: soil, climate, water)',
          'Biomes: large-scale ecosystems (rainforest, desert, tundra). Determined by latitude and climate',
          'Food chains & webs: transfer of energy from producers (plants) → consumers (animals). Energy decreases at each level (~10% passes to next level)',
          'Biodiversity: variety of species in an ecosystem. Higher diversity = more stable ecosystem, better resilience',
          'Threats: habitat loss (deforestation, urban expansion), pollution, overexploitation (hunting, fishing), invasive species, climate change',
          'Conservation: protected areas (national parks, reserves), breeding programmes, sustainable management, reforestation'
        ],
        tip: 'Energy DECREASES up a food chain. Top predators are rare because most energy is lost at lower levels.',
        example: 'Amazon rainforest: high biodiversity (~10% of Earth\'s species). Threats: deforestation for cattle/crops. Conservation: indigenous land rights, sustainable timber.'
      },
      {
        ref: '4.2',
        title: 'Resource Management & Sustainability',
        points: [
          'Renewable resources: naturally replenished (forests, water, wind, solar). Can be depleted if overused',
          'Non-renewable: finite resources (fossil fuels, metals). Cannot be replaced once used',
          'Sustainable management: use resources at a rate they can be replenished. Balances human needs with environmental protection',
          'Agriculture: intensive farming (high yields, chemicals, monoculture — degrades soil/biodiversity) vs organic/sustainable (lower yields, healthier ecosystem)',
          'Water stress: uneven distribution (wet tropics, dry deserts). Overextraction (aquifer depletion), pollution, climate change reducing supply',
          'Energy transition: moving from fossil fuels to renewables (solar, wind, hydro). Challenge: fossil fuels still cheaper and well-established'
        ],
        tip: 'Renewable ≠ unlimited. Forests can be replanted but take decades. Sustainability requires BALANCE.',
        example: 'Iceland: 100% renewable electricity (hydro + geothermal). Costa Rica: 99% renewable electricity. Shows transition is possible with right geography/investment.'
      }
    ]
  }
];
