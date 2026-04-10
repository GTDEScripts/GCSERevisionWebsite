// ══════ GEOGRAPHY: Topic Notes (AQA 8035) ══════

const GEO_DATA = [
  {
    section: '1. Hazards',
    icon: '⚠️',
    color: '#DC2626',
    topics: [
      {
        ref: '1.1',
        title: 'Plate Tectonics & Tectonic Hazards',
        points: [
          'Plate tectonics: Earth\'s crust divided into large rigid plates that float on semi-molten mantle. Plates move continuously (cm per year) driven by convection currents',
          'Lithosphere: rigid outer layer (crust + upper mantle). Asthenosphere: semi-molten layer allowing plate movement',
          'Constructive plate boundaries (divergent): plates move apart, magma rises, new oceanic crust forms. Example: Mid-Atlantic Ridge, East African Rift. Creates new crust',
          'Destructive plate boundaries (convergent): plates collide. Denser oceanic plate subducts beneath lighter continental plate. Magma forms from friction/pressure. Maximum hazard potential',
          'Subduction zone: where oceanic plate slides beneath continental plate into mantle. Creates intense pressure, friction, earthquakes, volcanoes. The Pacific Ring of Fire',
          'Conservative plate boundaries (transform): plates slide horizontally past each other. No crust created/destroyed. Major earthquakes but no volcanism. Example: San Andreas Fault',
          'Collision zones: two continental plates collide (both too light to subduct). Crust crumples, mountains form. Example: Himalayas (India/Asia collision). Earthquakes but not volcanic',
          'Hot spots: volcanic regions not at plate boundaries (e.g., Hawaii, Yellowstone). Caused by stationary mantle plume. Plates move over plume, creating chain of volcanoes',
          'Earthquake focus (hypocenter): exact point underground where rupture occurs. Epicenter: point on surface directly above focus. Depth affects intensity (shallow worse)',
          'Magnitude (Richter scale): measures energy released (logarithmic). Each unit 30× more energy. Magnitude 5 ≠ 2.5× magnitude 4, it\'s 900× more energy',
          'Intensity (Modified Mercalli): measures damage observed, varies by location. Same earthquake high magnitude, but intensity varies. Distance from epicenter, geology, building quality matter',
          'Seismic waves: P-waves (primary, fast, push-pull motion, travel through liquids/solids), S-waves (secondary, slower, side-to-side, through solids only), surface waves (slowest, most damage, confined to surface)',
          'P and S wave arrivals used to locate epicenter. Multiple seismographs record arrival time difference. P arrives first, then S, then surface waves. Time difference indicates distance',
          'Distribution patterns: earthquakes/volcanoes concentrate at plate boundaries (Ring of Fire encircles Pacific). Distribution shows where plates interact. Predicting exact location/time nearly impossible'
        ],
        tip: 'Know the three boundary types and what happens at each: constructive (pull apart, new crust), destructive (collide, subduction, magma, maximum hazard), conservative (slide, earthquakes, no volcanism). Exam tests this heavily.',
        example: 'San Francisco (San Andreas Fault, conservative): strike-slip earthquakes every 100-150 years, magnitude 7+. Japan (subduction zone, destructive): frequent smaller earthquakes + major quakes + tsunamis. Iceland (constructive boundary): regular lava eruptions, new crust forming.'
      },
      {
        ref: '1.2',
        title: 'Volcanic Hazards & Impacts',
        points: [
          'Volcano: opening in crust where molten rock (magma) erupts. When magma reaches surface, called lava. Composition determines eruption style',
          'Magma composition: basaltic (low silica, fluid, flows easily, frequent eruptions), rhyolitic (high silica, viscous, thick, explosive). Destructive plate boundaries produce more viscous magma',
          'Eruption types: Hawaiian (gentle, lava fountains), Strombolian (frequent small explosions), Vulcanian (violent explosions), Peléan (pyroclastic flows, most dangerous)',
          'Pyroclastic flows: superheated mixture of gas, ash, pumice moving 100+ km/h at 800°C+. Deadly, fastest-moving volcanic hazard. Kills via heat and impact, not lava',
          'Lahars: volcanic mudflows of ash and water. Triggered by eruption melting ice/snow or heavy rain on volcanic slopes. Travel fast downslope into valleys. Destructive, far-reaching',
          'Lava flows: molten rock flowing downslope. Move slowly (can outrun, usually). Destroy buildings, vegetation, infrastructure. Basaltic lava flows faster than rhyolitic',
          'Ash fall: fine particles ejected high into atmosphere. Darkness at midday, breathing problems, collapse of structures, agricultural damage. Ash settles over large area (hundreds of km)',
          'Toxic gases: SO₂ (sulfur dioxide, respiratory hazard), H₂S (hydrogen sulfide, toxic at high concentrations), CO₂ (can asphyxiate in enclosed spaces). Acid rain from SO₂',
          'Volcanic bombs: large rock fragments ejected through air. Destroy buildings, kill directly. Smaller fragments = cinders',
          'Volcanic landforms: shield volcanoes (broad, gentle slopes, basaltic), composite/stratovolcanoes (steep sides, alternating layers, rhyolitic/andesitic, more dangerous), cinder cones (small, one eruption usually)',
          'Long-term impacts: ash in atmosphere reduces sunlight, causes temporary cooling (volcanic winter), affects agriculture globally. Ash fertilises soil (long-term benefit). Lahars create lahars hazards for decades',
          'Prediction challenges: monitoring seismographs, gas emissions, ground deformation helps predict eruptions, but accurate timing/magnitude difficult. Some volcanoes give warning signs, others erupt without warning'
        ],
        tip: 'Most dangerous hazards: pyroclastic flows (fastest, hottest, unstoppable) and lahars (reach far downslope). Lava flows slow so less dangerous. Ashfall affects large area but less immediately deadly.',
        example: 'Mount Vesuvius (destructive boundary, composite): 79 AD eruption buried Pompeii in ash within hours. Pyroclastic flows killed residents instantly (heat, not suffocation). Mount St Helens (subduction zone): lateral blast knocked down forest 20km away.'
      },
      {
        ref: '1.3',
        title: 'Tropical Cyclones & Atmospheric Hazards',
        points: [
          'Tropical cyclone: rotating storm system forming over warm tropical oceans. Called hurricanes (Atlantic/East Pacific), typhoons (Northwest Pacific), cyclones (Indian Ocean/South Pacific). Same phenomenon',
          'Formation requirements: ocean temperature >26.5°C, light wind shear (consistent wind direction/speed at different altitudes), sufficient Coriolis force (latitude ~5-30° required, not near equator)',
          'Development process: warm ocean water evaporates, warm air rises (latent heat release), Coriolis effect causes rotation (red spinner), low pressure centre forms, outflow of air aloft strengthens system',
          'Structure: eye (calm centre, very low pressure, weak winds, often clear sky), eyewall (most intense winds, heaviest rainfall, updrafts strongest), rain bands (spiral bands of thunderstorms, extending outward)',
          'Wind speeds: tropical storm 39-73 mph. Major hurricane 96+ mph. Wind speed determines damage: 120+ mph destroys most buildings, vegetation',
          'Saffir-Simpson scale: categories 1-5 based on wind speed. Category 1 (74-95 mph) to category 5 (157+ mph). Wind damage, storm surge, flooding increase with category',
          'Storm surge: rise in sea level caused by intense low pressure (water drawn upward) + wind pushing water shoreward. Can exceed 7 metres. Floods coastal areas, destroys buildings',
          'Heavy rainfall: can exceed 2,000mm in 24 hours (vs UK average 700mm/year). Causes inland flooding, landslides, mudslides. Most damage often from rainfall not wind',
          'Hazard extent: cyclones affect large areas (diameter 500+ km). Small eye but outer bands affect wide region. Coastal areas especially vulnerable to storm surge',
          'Temperate depressions (mid-latitudes): low-pressure systems where warm tropical air meets cold polar air. Less intense than tropical cyclones but affect UK. Bring rain + wind',
          'Anticyclones: high-pressure systems. Summer = hot, sunny, dry. Winter = cold, frosty, clear. Block depressions (can persist weeks)',
          'Jet streams: fast-moving narrow air currents in upper atmosphere (polar jets). Influence depression/anticyclone movement, steering cyclones. Wobbles affect weather patterns'
        ],
        tip: 'Cyclone formation: warm ocean (>26.5°C), rotation from Coriolis, low pressure. THREE formation requirements ALL needed. Eye = calm, eyewall = strongest. Storm surge often most damaging.',
        example: 'Hurricane Katrina (2005): formed over warm Gulf of Mexico, intensified to Category 5, weakened to Category 3 before landfall. Storm surge ~8m flooded New Orleans. Extreme rainfall, wind damage, flooding killed 1,800+. Levee failure worsened flooding.'
      },
      {
        ref: '1.4',
        title: 'Climate Change: Evidence & Drivers',
        points: [
          'Global warming: average global temperature rising. ~1.1°C increase since pre-industrial (1850). Accelerating: most warming in last 50 years',
          'Greenhouse effect (natural): atmosphere contains gases (CO₂, methane, water vapour) that trap heat. Without GHE, Earth ~33°C colder (frozen). Natural GHE essential for life',
          'Enhanced greenhouse effect: human activities increasing GHE gas concentrations, trapping more heat, warming planet beyond natural level',
          'CO₂ sources: combustion of fossil fuels (coal, oil, gas) for energy, transport, heating. Deforestation (trees absorb CO₂, burning releases it). Cement production, agriculture. CO₂ up 50% since 1750',
          'Methane sources: livestock farming (cattle digestion), rice paddies, natural gas extraction, decomposition in landfills. 25× more powerful GHE gas than CO₂ (per molecule), but shorter lifetime',
          'Nitrous oxide sources: agricultural fertilizers, animal manure, industrial processes. 300× more powerful than CO₂',
          'Evidence for warming: instrumental records show rising temperatures (since 1850, accurate). Tree rings, ice cores show pre-industrial temperatures (proxy data). Current temperatures highest in 2,000 years',
          'Melting ice: Arctic sea ice declining, Greenland ice sheet melting, glaciers worldwide retreating (except some affected by precipitation). 95% of glaciers shrinking',
          'Sea level rise: partly from melting ice (adding water), partly from thermal expansion (warmer water takes more volume). Rising ~3mm/year, accelerating',
          'Ocean acidification: oceans absorb ~25% of CO₂. Forms carbonic acid, lowering pH. Threatens shellfish, corals. pH dropping 0.1 units per century (30% more acidic since 1750)',
          'Ecosystem shifts: species shifting ranges poleward/upward in elevation. Phenology changes (plants blooming earlier, birds migrating earlier). Mismatch between predator/prey timing emerging',
          'Coral bleaching: warming oceans stress corals, they expel symbiotic algae (lose colour, die). Great Barrier Reef 1998, 2010, 2016 bleaching events. 50% of global coral reefs at risk'
        ],
        tip: 'Evidence for warming is OVERWHELMING: temperature records, ice melt, sea level rise, ecosystem changes, chemistry. Distinguish natural climate variation from anthropogenic (human-caused) warming.',
        example: 'Arctic warming: temperature increase 2× global average. Sea ice extent declining. Permafrost thawing releases methane (positive feedback). Threatens polar bears, indigenous peoples.'
      },
      {
        ref: '1.5',
        title: 'Climate Change: Impacts & Responses',
        points: [
          'Extreme weather intensification: climate change increases probability of extreme heat, heavy rainfall, droughts. Not creating new types of weather, just making extremes more frequent/intense',
          'Heat waves: temperature extremes (>40°C in previously temperate regions). Kills directly (heat stress), increases disease (dehydration, heat exhaustion), strains infrastructure (blackouts)',
          'Flooding risks: increased from two sources: heavier rainfall (more atmospheric moisture from warming) + sea level rise in coastal areas. Overwhelming drainage systems, flooding urban areas',
          'Drought expansion: some regions drying (Mediterranean, Southwest USA, Sub-Saharan Africa). Agricultural failure, water stress, famine risk. Billions dependent on irrigation',
          'Food security threats: crop yields declining due to heat/drought/pests. Shifting growing seasons, pest range expansion. Fishing declining from ocean warming/acidification. Vulnerable countries hit hardest',
          'Water stress: uneven impact geographically. Some regions get more rainfall (wet areas wetter), others get less (dry areas drier). Mountain snowmelt supplying rivers shifts earlier',
          'Health impacts: heat stress, vector-borne disease range expansion (malaria, dengue moving poleward), malnutrition from crop failure, mental health from displacement/stress',
          'Forced migration: sea level rise displaces island nations (Maldives, Kiribati, Tuvalu). Droughts cause pastoral migration in Africa/Asia. Termed "climate refugees" (not official)',
          'Biodiversity loss: species extinction accelerating (threatened by both climate change and habitat loss). Coral reefs, polar ice ecosystems, mountain forests under threat. Some species cannot adapt fast enough',
          'MITIGATION strategies: reduce emissions (transition to renewables, efficiency, electrification, behavior change). Carbon capture technology (nascent). Reforestation (carbon sink)',
          'ADAPTATION strategies: build flood defences, develop drought-resistant crops, insulate buildings, shift agriculture, healthcare planning for heat/disease. Mostly reactive',
          'Limits to adaptation: some changes irreversible on human timescales. Ice sheet collapse (sea level rises 7m+), Amazon dieback, permafrost collapse (releases methane). Tipping points approaching'
        ],
        tip: 'MITIGATION = reduce climate change (emissions cuts). ADAPTATION = live with changes (flood walls, drought crops). Exam distinguishes these. Both needed; mitigation urgent as some impacts now inevitable.',
        example: 'Small island states (Maldives 1m above sea level): cannot adapt to 1m sea level rise by 2100. Mitigation essential. Currently pushing for 1.5°C limit (vs 2°C target) at climate negotiations.'
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
        title: 'Glaciation, Erosion & Deposition',
        points: [
          'Glacier formation: snow accumulates on high ground, becomes compacted over years, pressure converts to ice. Glaciers form where annual snowfall exceeds melt. Takes 20-40 years to form glacier',
          'Glacier movement: ice flows under its own weight (plastic flow in lower layers, fracturing in upper). Movement rate 10cm/year to several metres/year depending on slope, thickness, temperature',
          'Ablation: loss of ice mass through melting, sublimation, calving (icebergs). Balance between accumulation (upper) and ablation (lower) zones determines glacier size',
          'Plucking: glacier ice freezes to bedrock, when ice moves, pulls rock away. Works where rock has joints/fractures. Most effective erosion mechanism',
          'Abrasion: rocks embedded in glacier base act like sandpaper, scratch and smooths bedrock. Creates striations (parallel scratches). Rock flour (silt-sized particles) created',
          'Freeze-thaw weathering: water enters cracks, freezes (expands 9%), thaws. Repeated cycles fracture rock. Supplies rock to glacier base for abrasion',
          'Meltwater erosion: subglacial streams carry rock flour, abrade channel walls/beds. Creates channels under ice. Discharge increases in summer (high-energy)',
          'Glacial landforms (erosional): U-shaped valleys (wider, deeper, steeper sides than V-shaped river valleys), cirques/corries (bowl-shaped hollows on mountainsides), hanging valleys (tributary valleys high above main valley, created by unequal erosion), aretes (sharp ridges between cirques), pyramidal peaks (steep mountain formed by cirques on all sides)',
          'Truncated spurs: where glacier cuts through ridges, removing mountainsides. Creates steep sides',
          'Moraine deposition: glaciers carry till (unsorted sediment). Terminal moraine marks furthest extent. Lateral moraine along glacier sides. Medial moraine where two glaciers merge',
          'Drumlins: elongated hills of till aligned with ice flow direction. Found in areas overrun by ice sheets (Ireland, Scotland, North America). Shape aids dating/reconstruction',
          'Outwash plains (sandurs): flat areas beyond glacier where meltwater deposits sorted sediment. Stratified (layered) appearance. Braided streams typical in outwash plains',
          'Periglacial landscapes (permafrost regions): permanently frozen ground beneath active layer. Created by freeze-thaw over centuries. Found in Siberia, Canada, Alps above treeline',
          'Periglacial features: ice wedge polygons (thermal contraction creates cracks filled with ice), pingos (ice-cored mounds from groundwater freezing), stone circles (frost heave sorts rocks)',
          'Solifluction: slow movement of soil over permafrost. Water-saturated top layer flows over frozen base. Creates lobes downslope. Evidence: trees tilting downslope'
        ],
        tip: 'Glacier erosion (plucking, abrasion) creates characteristic U-shaped valleys. Deposition creates moraines. Periglacial = freeze-thaw processes, permafrost features. Know landforms and formation.',
        example: 'Scottish Highlands: multiple U-shaped valleys carved by ice sheets, hanging valleys where tributaries join main glacier high above floor, corries on mountainsides (Ben Nevis). Medial moraines visible where valley glaciers merged.'
      },
      {
        ref: '2.2',
        title: 'River Processes & Fluvial Landscapes',
        points: [
          'River source (upper course): starts in mountains, steep gradient (10°+), narrow valley, small width/depth. Rapids, waterfalls common. Energy high, mostly used for erosion',
          'Vertical erosion: dominant in upper course. River cuts downward through bedrock, creating V-shaped valley. Hydraulic action (force of water), abrasion (sediment scratches), attrition (sediment fragments collide)',
          'Hydraulic action: force of water and turbulence breaks rock. Most effective at waterfalls, rapids',
          'Abrasion: river-carried pebbles/sand scratch bedrock. Creates smooth, polished surfaces',
          'Attrition: sediment particles collide with each other and bedrock. Sediment becomes smaller, rounder downstream',
          'River discharge: volume of water flow. Calculated: cross-sectional area × velocity. Measured in cumecs (m³/s). Increases downstream as tributaries add water',
          'Factors affecting discharge: rainfall, relief (steep = fast runoff), soil type (permeable = infiltration), vegetation (intercepts rainfall), land use (urban impermeable surfaces increase runoff)',
          'Sediment load: material carried by river. Bed load (large stones, moves by rolling), suspended load (fine sediment suspended), dissolved load (nutrients, minerals in solution)',
          'Middle course: moderate gradient (2-5°). Lateral erosion begins (sideways widening). Meanders develop, sinuosity increases. Floodplain begins to develop. Both erosion and deposition occurring',
          'Meander formation: river follows least-resistant path, curves develop. Outside bend: faster water, more erosion, cliff forms. Inside bend: slower water, deposition, slip-off slope',
          'Oxbow lakes: meander loop becomes isolated when river cuts straight through neck. Creates crescent-shaped lake, eventually fills with sediment',
          'Lower course: gentle gradient (<1°). Lateral erosion dominant, floodplain wide. Deposition dominates as energy decreases. Sediment finest (silt, clay)',
          'Floodplain: flat area adjacent to river, floods periodically. Natural levees (ridges built by sediment deposition during floods). Flood basins (areas of temporary water). Provides storage moderating downstream floods',
          'River delta: where river meets sea/lake and deposits sediment. Arcuate delta (triangular), bird\'s foot delta (finger-like). Requires large sediment load, low-energy depositing environment',
          'River terraces: step-like features indicating former floodplain levels. Created by river lowering base level (climate change, sea level fall, tectonics), starts eroding former floodplain'
        ],
        tip: 'VERTICAL erosion = upper course (downward). LATERAL erosion = middle/lower course (sideways). Energy = downstream discharge + gradient. Meanders = least-resistance path.',
        example: 'River Ganges (India): source Himalayan glaciers, upper course steep, white water. Meanders across Indian plain (middle/lower), tremendous discharge. Delta in Bangladesh, one of largest deltas globally.'
      },
      {
        ref: '2.3',
        title: 'Coastal Erosion, Transportation & Deposition',
        points: [
          'Wave formation: wind blowing over sea surface creates friction, transfers energy. Wave height depends on wind speed, duration, fetch (distance wind travels). Larger fetch = bigger waves',
          'Wave motion: water particles move in circles. In deep water, motion is circular. In shallow water, motion flattens (due to friction with seabed). Waves break when water depth <1.3× wave height',
          'Constructive waves: low amplitude, long wavelength, low frequency (10-12/min). Less energy. Dominated by swash (water moving up beach), weak backwash. Net sediment movement up beach = beach building',
          'Destructive waves: high amplitude, short wavelength, high frequency (13-15/min). More energy. Strong backwash drags sediment down beach. Net movement down beach = beach erosion',
          'Coastal erosion processes: hydraulic action (wave force on cliffs), abrasion (sediment abrading cliff), attrition (sediment fragments), weathering (chemical, freeze-thaw, salt crystallisation), slumping (cliff failure on clay)',
          'Wave refraction: waves bend as they reach shallower water. Energy concentrates on headlands (more erosion), disperses in bays (more deposition)',
          'Erosional landforms: cliffs (vertical or steep rock faces formed by undercutting at wave base), wave-cut platforms (flat areas at cliff base exposed at low tide), caves (enlarged weaknesses), arches (cave breaks through), stacks (isolated pillars when arch collapses), stumps (stump of stack)',
          'Coastal transportation: longshore drift (sediment moved parallel to shore by wave action). Angle of wave approach + backwash perpendicular to shore creates net alongshore movement. Very significant for sediment redistribution',
          'Depositional landforms: beaches (accumulations of sediment, profile varies with wave type), spits (ridges of sediment extending into sea, formed where coast bends), bars (ridges parallel to shore, completely blocking bays in some cases), sand dunes (wind-blown sand accumulation)',
          'Spit formation: waves and longshore drift build ridge of sediment extending across bay opening. Example: Spurn Head (Humber Estuary)',
          'Saltmarsh: vegetation-colonised tidal flats. Sediment traps, stabilises substrate. Supports diverse wildlife. Accretes (grows seaward) slowly',
          'Coastal management hard engineering: sea walls (expensive, reflect wave energy, can cause increased erosion nearby), groynes (trap sediment, interrupt longshore drift), breakwaters (reduce wave energy)',
          'Coastal management soft engineering: beach nourishment (add sediment, natural-looking, temporary), managed retreat (allow erosion in less valuable areas, relocate defences), dune management (plant marram grass, restore natural dune system)',
          'Integrated coastal zone management (ICZM): considers coastal processes, multiple stakeholders, sustainable development. Attempts holistic approach vs piecemeal defences'
        ],
        tip: 'Constructive BUILDS beach, destructive DESTROYS beach. Longshore drift moves sediment along shore. Hard engineering (walls) expensive, short-term. Soft engineering (nourishment) cheaper, longer-term.',
        example: 'Holderness Coast (Yorkshire): clay cliffs, weak rock, rapid erosion (~1m/year). Sea walls at Hornsea slowed erosion locally but increased erosion downdrift. Managed retreat now policy, relocating people away from coast.'
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
        title: 'Urban Growth & Urbanisation Patterns',
        points: [
          'Urbanisation: increasing proportion of population living in towns/cities (global 55% now, 68% projected by 2050). Acceleration in developing world (Africa, Asia)',
          'Rural-urban migration: people leave countryside for cities seeking employment, education, healthcare, entertainment. Push factors (poverty, lack of services) and pull factors (job opportunities, wages)',
          'Natural increase: cities have higher birth rates in some developing countries (young population structure, fewer contraception). Urban areas also have lower mortality',
          'Megacities: cities with >10 million population. Growing dominance: Tokyo (37M), Delhi (31M), Shanghai (27M), São Paulo (22M). Most in developing world now (previously rare)',
          'Urbanisation in developed countries: slower growth, mature urban systems, suburbanisation (movement from urban core to suburbs), gentrification (inner city renewal attracting wealthier residents)',
          'Urbanisation in developing countries: rapid growth, struggling to provide services, informal settlements (slums), unplanned growth. Infrastructure lags population',
          'Urban primacy: large city dominates national economy/politics. Capital cities (Delhi, Bangkok, Cairo) become mega-cities. Alternative: distributed cities (multiple large cities, more balanced)',
          'Urban hierarchy: world cities (London, New York, Tokyo) dominate global flows of capital, information. National cities are regional centres. Linked by global networks (finance, headquarters, trade)',
          'Global North urbanisation: early (1800s), now stabilised. Good infrastructure, planned development, suburban spread',
          'Global South urbanisation: recent (1960s+), rapid, unplanned. Inadequate infrastructure, informal sector dominant. Challenges: housing, water, sanitation, employment',
          'Urban sprawl: uncontrolled outward growth. Loss of agricultural land, fragmented countryside, car-dependent lifestyle. Sustainability concerns',
          'Counterurbanisation (some developed countries): movement FROM cities TO smaller towns/rural areas. Related to: technology (remote work), quality of life, housing costs'
        ],
        tip: 'Urbanisation fastest in developing world. Megacities increasingly important. Distinguish rapid growth (developing) from stabilised (developed). Push/pull factors drive migration.',
        example: 'Sub-Saharan Africa: lowest urbanisation (40%) but fastest growth. By 2050, 55% urban. Cities struggling with infrastructure, creating massive slums alongside formal areas.'
      },
      {
        ref: '3.2',
        title: 'Urban Structure & Development',
        points: [
          'CBD (Central Business District): city centre, highest land values, office buildings, retail, entertainment. High-rise development due to expensive land. Often historic core',
          'Inner city: older residential, industrial, mixed uses. Often deteriorated, housing stock old. Gentrification pushing out poorer residents. Green space limited',
          'Suburbs: lower-density residential, newer housing, families, space for gardens/cars. Commuting to city. Developed world: extensive suburbs. Developing world: limited',
          'Urban-rural fringe: transitional zone, agricultural land being developed, hobby farms, industry. Ribbon development along roads. Planning conflicts',
          'Concentric zone model (Burgess): CBD in centre, then concentric zones (inner city, workers, middle-class, suburbs). Real cities don\'t match perfectly, useful simplification',
          'Sector model (Hoyt): wealthy residential extends from centre outward in sectors along transport routes. Lower-class follows sector pattern. Better represents linear features',
          'Multiple nuclei model: several centres (CBD, industrial districts, residential clusters). Different nuclei specialise. Reflects modern cities with multiple centres',
          'Real city patterns: combination of models. History determines zones (industries where transport was available). Affluent areas often on higher ground (historically healthy)',
          'Formal settlements (developing cities): planned, regular blocks, owner-occupied, services present. Middle/upper-class areas',
          'Informal settlements (developing cities): unplanned, irregular, overcrowded, no planning permission, limited services. Squatter settlements, slums. Often on worst land (steep, flood-prone)',
          'Urban challenges in developing cities: inadequate housing (millions in slums, 1 billion+ globally), water scarcity (unable to provide), sanitation (open defecation in some), pollution (air, water), congestion',
          'Shanty town characteristics: materials from waste (corrugated iron, plastic, wood), temporary appearance, dangerous (fire risk, collapse), minimal services. Home to 10-30% of developing city populations'
        ],
        tip: 'City models (Burgess, Hoyt, multiple nuclei) show patterns but real cities blend features. Know developing city challenges: inadequate housing, water, sanitation, pollution.',
        example: 'Mexico City: CBD (historic centre), spread outward into suburbs, informal settlements on city fringes. Altitude (2,200m) limits growth. Water supply major issue (overextracting aquifer, sinking).'
      },
      {
        ref: '3.3',
        title: 'Development Indicators & Global Inequalities',
        points: [
          'Development: improvement in living standards, access to services, economic opportunity. Not just wealth, broader than GDP',
          'GDP/GNI: total national income. GDP per capita indicates average income. Doesn\'t reflect distribution (unequal), environmental cost (depletion), quality of life',
          'HDI (Human Development Index): composite of three dimensions: (1) life expectancy (health), (2) education (mean + expected years), (3) GNI per capita (standard of living). Ranges 0-1, higher = more developed',
          'Advantages of HDI: broader than GDP, reflects multiple dimensions. Disadvantages: still doesn\'t include inequality, environmental sustainability, subjective wellbeing',
          'Inequality indices: Gini coefficient (income distribution, 0=equal, 100=unequal), gender inequality (education, labour, representation), multidimensional poverty index',
          'Life expectancy disparities: developed countries 80+ years (healthcare, nutrition), least-developed countries 50-60 years (disease, malnutrition, maternal mortality)',
          'Infant mortality: strong indicator of healthcare quality. Developed <5 per 1000 births, least-developed 50-80+. Infections, malnutrition, lack of vaccination cause most deaths',
          'Education access: developed countries near-universal primary education, high secondary/tertiary. Developing countries low enrolment, gender gaps (girls less likely to attend)',
          'Causes of inequality: colonialism (extractive institutions, resource drain), geography (landlocked, difficult climate), governance (corruption, weak institutions), infrastructure gaps, disease burden',
          'Colonial legacy: Many developing countries (Africa, South Asia) colonised, economies structured for resource extraction not development. Independence 1950s-1960s, but economic structures remain exploitative',
          'Debt trap: many developing countries borrow for development, must repay with interest. Debt servicing consumes government budget, limiting education/health spending. Structural adjustment programs (IMF conditions) further limit public spending',
          'Technology gap: developing countries lack research, higher education, capital for technology development. Technologies patented in developed countries (expensive to access), widening gap',
          'Brain drain: skilled workers (doctors, engineers) emigrate to developed countries for better wages. Removes human capital needed for development. Loss of ~100,000 graduates/year from Africa'
        ],
        tip: 'HDI multidimensional (health, education, wealth). Distinguish HDI from GDP. Know major causes of inequality: colonialism, debt, governance, disease, geography.',
        example: 'Sub-Saharan Africa: lowest HDI, life expectancy 60 years (vs 82 in Europe), education gaps, poverty (billions on <$5/day). Causes: colonial legacy, weak governance, disease (HIV/AIDS, malaria), debt servicing constraints.'
      },
      {
        ref: '3.4',
        title: 'Globalisation, MNCs & Trade',
        points: [
          'Globalisation: increasing interdependence of national economies, cultures, societies. Enabled by: containerised transport, telecommunications, internet, trade liberalisation',
          'MNC (Multinational Corporation): company operating in multiple countries. Headquarters in one country (usually developed), subsidiaries/factories worldwide. Massive economic power',
          'FDI (Foreign Direct Investment): capital flow into developing countries by MNCs. Brings capital, technology, employment. Can also exploit labour, extract resources',
          'Offshoring: moving production to lower-cost countries. Labour cost differential: worker in Bangladesh earns $3/day vs $15/hour in US. 5× wage difference drives relocation',
          'Supply chains (Global Value Chains): production fragmented across countries. Components made where labour/inputs cheap, assembled elsewhere, distributed globally. Complex interdependence',
          'Supply chain benefits: efficiency (each country specialises), access to expertise, lower costs passed to consumers (theoretically)',
          'Supply chain risks: exploitation (low wages, poor conditions), environmental damage (lax regulations), vulnerability (COVID disruptions shut down factories), political (trade wars, sanctions)',
          'Trade liberalisation: reducing tariffs, quotas, trade barriers. WTO (World Trade Organisation) coordinates. Supporters: efficiency gains, cheaper goods. Critics: job losses, inequality',
          'Winners from globalisation: MNC shareholders (profits), developing countries (investment, jobs, exports), consumers (cheaper goods). But often low-quality jobs, volatility',
          'Losers: manufacturing workers in developed countries (job losses, wage pressure), developing country workers (wages low, conditions poor), small producers unable to compete',
          'Deindustrialisation: loss of manufacturing in developed countries. Steel, textiles moved to cheaper regions. Creates unemployment, regional decline (Rust Belt, post-industrial towns)',
          'Trade blocs: EU, ASEAN, MERCOSUR, NAFTA/USMCA. Preferential trade within bloc (lower tariffs). Benefits: larger markets, bargaining power. Risks: exclusion of outsiders, unequal development',
          'Cultural impacts: Americanisation (English language, Hollywood, fast food, brands spread globally). Local cultures threatened but also blending, resisting, adapting. Homogenisation vs hybridity debate'
        ],
        tip: 'Globalisation = efficiency + cheap goods BUT job losses in developed countries + exploitation in developing. Supply chains complex, vulnerable. Winners (shareholders, consumers) and losers (workers) different.',
        example: 'Nike supply chain: design USA, materials sourced globally, manufacture Vietnam/Indonesia (cheap labour), distribution worldwide. Nike brand value high (premium pricing), but manufacturing workers earn <$200/month. Globalisation concentrates wealth.'
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
        title: 'Ecosystems, Food Chains & Biodiversity',
        points: [
          'Ecosystem: community of living organisms (flora, fauna, microorganisms) interacting with abiotic environment (soil, water, atmosphere, light). Energy flows, nutrients cycle',
          'Biotic factors: all living things. Plants (autotrophs, produce energy), animals (consumers, eat other organisms), decomposers (break down dead matter)',
          'Abiotic factors: temperature (affects metabolism), light (enables photosynthesis), water (essential for life), soil (nutrients, growing medium), pH (affects organisms present), dissolved oxygen (aquatic life)',
          'Producer: organism making own food (plants via photosynthesis, some bacteria via chemosynthesis). Foundation of food chain',
          'Consumer: organism eating other organisms. Primary consumers (herbivores eating plants), secondary consumers (carnivores eating herbivores), tertiary consumers (carnivores eating carnivores)',
          'Food chain: linear sequence of feeding relationships. Example: grass → grasshopper → sparrow → hawk. Shows energy transfer',
          'Food web: multiple interconnected food chains. Grass eaten by grasshopper, cricket, zebra. Sparrow eats grasshopper. More realistic than single chain. Shows complexity',
          'Trophic levels: producer (level 1), primary consumer (level 2), secondary consumer (level 3), tertiary (level 4). Energy decreases at each level (~10% of energy transfers)',
          'Energy loss explanation: not all energy consumed goes to growth (some excreted, some used for respiration, some lost as heat). Only ~10-20% of consumed energy becomes biomass for next level',
          'Population sizes: reflect energy availability. Lots of grass, fewer grasshoppers, fewer sparrows, very few hawks. Numbers reflect energy trophic levels',
          'Biome: large-scale ecosystem type. Tropical rainforest (hot, wet, high biodiversity), tropical savanna (seasonal, grass/shrub), temperate forest, temperate grassland, taiga (coniferous forest), tundra (frozen, sparse vegetation)',
          'Biodiversity: variety of species in area. Alpha diversity (within one area), beta diversity (between areas). Rainforests: high diversity (10% global species on 2% land). Tundra: low diversity (harsh conditions)',
          'Biodiversity importance: ecosystem resilience (many species provide redundancy), genetic diversity (adaptation to change), medicines (many drugs from plants), food security, aesthetic/cultural value'
        ],
        tip: 'Energy decreases up food chain (~10% per level). Lots of plants, fewer animals, very few top predators. Diversity provides resilience.',
        example: 'Rainforest food web: thousands of plant species, herbivores (insects, monkeys, deer), carnivores (jaguars, anacondas, eagles). Loss of tree species cascades through web. Diversity ensures stability.'
      },
      {
        ref: '4.2',
        title: 'Threats to Ecosystems & Conservation',
        points: [
          'Habitat loss: primary cause of extinction (~70% threatened species). Deforestation for agriculture/development, wetland drainage, coral reef destruction, urban expansion',
          'Deforestation: tropical rainforest loss ~10 million hectares/year (Brazil, Indonesia, Congo). Driven by cattle ranching, logging, agriculture. Causes species extinction, carbon release',
          'Pollution: air (acid rain damages forests), water (runoff eutrophication), soil (heavy metals, pesticides). Chemical contamination kills organisms, bioaccumulates up food chains',
          'Overexploitation: hunting (tigers, rhinos near extinction), fishing (overfishing collapses fisheries), trade (rare animals, plants). Removes species faster than reproduction rate',
          'Invasive species: species introduced to new region, lacking natural predators, outcompete native species. Examples: cane toads (Australia), zebra mussels (North America), rabbits (Australia)',
          'Disease: chytrid fungus killing amphibians (1000+ species lost), white-nose syndrome killing bats, plague killing prairie dogs. Climate change spreading disease ranges',
          'Climate change: species cannot adapt fast enough, range shifts, phenology mismatches (timing of breeding/food availability), ecosystem disruption',
          'Extinction rate: currently ~100-1000 species/year (100-1000× natural background rate). Sixth mass extinction underway (first caused by humans)',
          'Protected areas: national parks, nature reserves limit habitat loss. Effective but need management, enforcement, sufficient size (small reserves lose species)',
          'Breeding programmes: captive breeding for species on edge of extinction (Arabian oryx, California condor). Reintroduction attempts restoration. Success rates vary, expensive',
          'CITES: international agreement restricting trade in endangered species. Reduces poaching of ivory, rhino horn, rare parrots. But illegal trade continues (~$7-23 billion/year)',
          'Sustainable forest management: selective logging (preserve ecosystem), replanting (restore timber resource), FSC certification (third-party verification). Balance use with conservation',
          'Sustainable fishing: catch limits, size restrictions, marine protected areas. Prevent collapse of fisheries. Challenge: enforcement, illegal fishing',
          'Reforestation: planting trees to restore forests. Restores carbon storage, habitats, water regulation. Monoculture plantations (single species, low diversity) less beneficial than mixed native forests'
        ],
        tip: 'Habitat loss biggest threat. Conservation strategies: protected areas, breeding programmes, international agreements, sustainable management. Prevention better than restoration.',
        example: 'Sumatran orangutan: habitat loss from palm oil plantations, illegal trade. Numbers dropped 1M → ~100,000. Protected areas and enforcement protecting some populations, but insufficient. Requires stopping land conversion.'
      },
      {
        ref: '4.3',
        title: 'Sustainable Resource Management',
        points: [
          'Renewable resources: naturally replenished (forests, fish, water, wind, solar). Can be sustainably managed if use ≤ regeneration rate',
          'Non-renewable resources: finite (fossil fuels, metals, minerals). One-time use, no regeneration. Depletion inevitable, only question is rate/duration',
          'Sustainability: use resources at rate they regenerate/can be recycled. Meet current needs without compromising future generations. Triple bottom line: economic + social + environmental',
          'Sustainable forestry: harvest rate ≤ growth rate. Selective logging (remove selected trees, maintain ecosystem). Replanting (restore supply). Rotation cycles (typically 30-80 years between harvests)',
          'Unsustainable forestry: clear-cutting (remove all trees, destroy ecosystem), deforestation for agriculture, tropical timber extraction. High-value hardwoods (mahogany) logged faster than regeneration',
          'Sustainable fishing: total allowable catch (TAC) based on population dynamics. Seasonal closures during breeding. Size restrictions (young fish reproduce). Marine protected areas (fishing bans) allow recovery',
          'Unsustainable fishing: overfishing collapses stocks (North Atlantic cod collapsed 1992, not recovered). Bycatch (non-target species killed), bottom trawling (destroys sea floor). Industrial fishing unsustainable',
          'Water sustainability: groundwater depletion (Ogallala Aquifer USA, Middle East aquifers being drained). Unequal distribution (wet areas, dry areas). Demand for agriculture, industry, households',
          'Water efficiency: drip irrigation (vs flood irrigation, 50% water saved), drought-resistant crops, recycling wastewater, reducing demand. But politically difficult (agricultural lobbies resist)',
          'Agriculture sustainability: organic (no synthetic chemicals, lower yields but healthier soil), agroforestry (trees + crops, multiple benefits), crop rotation (restore soil), terracing (prevent erosion)',
          'Intensive agriculture: high inputs (fertiliser, pesticide, water), monoculture (single crop). High yields but degrades soil, pollutes water, reduces biodiversity. Unsustainable long-term (soil depletion)',
          'Energy sustainability: renewable transition (solar, wind, hydro, geothermal, biomass). Currently 27% renewable (mostly hydro), target 80% by 2050. Challenges: storage, intermittency, upfront cost',
          'Circular economy: reduce waste, reuse, recycle. Linear model (extract, produce, waste) replaced by circular (materials reused indefinitely). Saves resources, reduces pollution. But infrastructure needed'
        ],
        tip: 'Renewable can be unsustainable if overused. Non-renewable have no sustainable use (only delayed depletion). Sustainability requires systems thinking (interconnections, long-term effects).',
        example: 'Palm oil: tropical rainforest converted for plantations (unsustainable, biodiversity loss). But economic pressure enormous (cheap oil feeds demand). Sustainability impossible without reducing consumption.'
      }
    ]
  }
];
