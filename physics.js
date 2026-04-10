// ══════ PHYSICS: Topic Notes (AQA 8463 Triple) ══════

const PHYS_DATA = [
  {
    section: '1. Energy',
    icon: '⚡',
    color: '#D97706',
    topics: [
      {
        ref: '6.1.1',
        title: 'Energy Stores & Transfers',
        formulas: [
          'KE = ½mv²',
          'GPE = mgh',
          'Elastic PE = ½ke²',
          'Efficiency = useful output ÷ total input × 100%',
          'Power = energy transferred ÷ time = work done ÷ time'
        ],
        points: [
          'Energy stores: kinetic (moving objects), thermal (hot objects), chemical (fuels, food, batteries), gravitational potential (raised objects), elastic potential (stretched/compressed objects), nuclear (atoms), magnetic, electrostatic',
          'Energy transfers: mechanically (by a force), electrically (by current), by heating, by radiation (light, sound, waves)',
          'Conservation of energy: energy cannot be created or destroyed, only transferred between stores. Total energy is always conserved',
          'Dissipation: energy is "wasted" — transferred to thermal store of surroundings, becoming less useful. Energy becomes more spread out and less concentrated',
          'Efficiency: no device is 100% efficient — some energy is always wasted, usually as heat',
          'Reducing energy waste: lubrication (reduces friction), thermal insulation, streamlining (reduces air resistance)'
        ],
        tip: 'In every energy question, identify: where does the energy START, where does it END, and where is it WASTED? The total must always balance.',
        example: 'A 2kg ball is dropped from 10m. Find its speed just before hitting the ground (g=10):\nGPE = mgh = 2×10×10 = 200J\nAll GPE → KE: 200 = ½×2×v² → v² = 200 → v = 14.1 m/s'
      },
      {
        ref: '6.1.2',
        title: 'Energy Resources',
        points: [
          'Non-renewable: fossil fuels (coal, oil, gas) and nuclear — finite, will run out',
          'Renewable: solar, wind, hydroelectric, tidal, wave, geothermal, biofuel — replenished naturally',
          'Fossil fuels: reliable, high energy density, but produce CO₂ (climate change), SO₂ (acid rain), running out',
          'Nuclear: very high energy output, no greenhouse gases during operation, but radioactive waste, decommissioning costs, risk of accidents',
          'Solar: free energy, no pollution in use, but intermittent (not always sunny), large area needed, manufacturing has environmental cost',
          'Wind: no fuel costs, no pollution in use, but intermittent, visual impact, noise, expensive to build',
          'Trends: global shift from fossil fuels to renewables due to climate change concerns, energy security, and falling costs of renewables'
        ],
        tip: 'For comparison questions: consider reliability, cost, environmental impact, and whether the source is continuous or intermittent. No energy source is perfect — examiners want balanced evaluation.'
      }
    ]
  },
  {
    section: '2. Electricity',
    icon: '🔌',
    color: '#2563EB',
    topics: [
      {
        ref: '6.2.1',
        title: 'Circuits & Components',
        formulas: [
          'V = IR (Ohm\'s law)',
          'I = V/R',
          'R = V/I',
          'P = VI = I²R = V²/R',
          'E = Pt = QV',
          'Q = It (charge = current × time)'
        ],
        points: [
          'Current (I): rate of flow of charge, measured in amps (A). Same everywhere in a series circuit',
          'Potential difference (V): energy transferred per unit charge, measured in volts (V). Shared in series, same across parallel branches',
          'Resistance (R): opposition to current flow, measured in ohms (Ω)',
          'Ohm\'s law: V = IR. Current is directly proportional to PD for an ohmic conductor (at constant temperature)',
          'Series circuits: one loop, current same everywhere, PD shared (V_total = V₁ + V₂), resistance adds (R_total = R₁ + R₂)',
          'Parallel circuits: multiple branches, PD same across each branch, current splits (I_total = I₁ + I₂), 1/R_total = 1/R₁ + 1/R₂',
          'Ohmic conductor: straight line through origin on I-V graph (e.g. resistor at constant temp)',
          'Filament lamp: resistance increases as temperature increases (curve on I-V graph)',
          'Diode: only allows current in one direction — very high resistance in reverse',
          'Thermistor: resistance DECREASES as temperature increases (used in temperature sensors)',
          'LDR (light dependent resistor): resistance DECREASES as light intensity increases (used in automatic lights)'
        ],
        tip: 'For circuit calculations: identify series or parallel FIRST. In series: I is same, V adds. In parallel: V is same, I adds. Then apply V=IR to each component.',
        example: 'A 6V battery is connected to two resistors in series: 4Ω and 8Ω.\nTotal R = 4+8 = 12Ω\nI = V/R = 6/12 = 0.5A\nPD across 4Ω = IR = 0.5×4 = 2V\nPD across 8Ω = IR = 0.5×8 = 4V (check: 2+4=6 ✓)'
      },
      {
        ref: '6.2.2',
        title: 'Mains Electricity & Power',
        formulas: [
          'P = VI',
          'P = I²R',
          'E = Pt',
          'Cost = energy (kWh) × price per kWh',
          '1 kWh = 3,600,000 J'
        ],
        points: [
          'UK mains: 230V, 50Hz AC (alternating current — direction changes 50 times per second)',
          'DC (direct current): flows in one direction only — from batteries and solar cells',
          '3-pin plug: Live (brown, 230V, carries current to appliance), Neutral (blue, ~0V, completes circuit), Earth (green/yellow, safety wire, 0V normally)',
          'Earth wire: connected to metal casing. If live wire touches casing, large current flows through earth → fuse blows → circuit breaks → prevents electrocution',
          'Fuse: thin wire that melts and breaks circuit if current exceeds the rated value. Protects against fire',
          'Circuit breaker: electromagnetic switch — same function as fuse but reusable and faster',
          'Power: rate of energy transfer. Kilowatt (kW) = 1000W',
          'Energy in kWh: P(kW) × t(hours). Cost = kWh × price per unit'
        ],
        tip: 'Live wire is ALWAYS dangerous even when the switch is off (still at 230V). The earth wire only carries current when there\'s a fault. Fuse rating should be just above the normal operating current.',
        example: 'A 2kW heater runs for 3 hours at 15p per kWh:\nEnergy = 2 × 3 = 6 kWh\nCost = 6 × 15 = 90p'
      }
    ]
  },
  {
    section: '3. Particle Model of Matter',
    icon: '🌡️',
    color: '#DC2626',
    topics: [
      {
        ref: '6.3.1',
        title: 'Density & States of Matter',
        formulas: [
          'Density = mass ÷ volume (ρ = m/V)',
          'Units: kg/m³ or g/cm³'
        ],
        points: [
          'Solid: particles vibrate in fixed positions, close together, regular arrangement. Strong forces. Fixed shape and volume',
          'Liquid: particles close together but can move past each other, random arrangement. Moderate forces. Fixed volume, takes shape of container',
          'Gas: particles far apart, moving fast in random directions, random arrangement. Very weak forces. No fixed shape or volume, fills container',
          'Changes of state: melting (solid→liquid), freezing (liquid→solid), boiling/evaporation (liquid→gas), condensation (gas→liquid), sublimation (solid→gas)',
          'During a change of state: temperature stays constant (energy goes into breaking/forming bonds, not increasing temperature). Internal energy changes but temperature does not',
          'Density: solids generally most dense, gases least dense. Measure by: regular solid = ruler + balance, irregular solid = displacement method (measuring cylinder), liquid = measuring cylinder + balance'
        ],
        tip: 'During melting or boiling, temperature stays CONSTANT on a heating curve — the flat sections. Energy is being used to break intermolecular bonds, not increase kinetic energy.',
        example: 'A metal block has mass 500g and volume 200cm³.\nDensity = 500/200 = 2.5 g/cm³\nIn kg/m³: 2.5 × 1000 = 2500 kg/m³'
      },
      {
        ref: '6.3.2',
        title: 'Internal Energy & Specific Heat/Latent Heat',
        formulas: [
          'ΔE = mcΔθ (energy for temperature change)',
          'E = mL (energy for change of state)',
          'c = specific heat capacity (J/kg°C)',
          'L = specific latent heat (J/kg)'
        ],
        points: [
          'Internal energy: total kinetic energy (movement) + potential energy (bonds) of all particles',
          'Heating increases internal energy → particles move faster (KE increases) → temperature rises',
          'Specific heat capacity (c): energy needed to raise 1 kg of a substance by 1°C. Water has high c (4200 J/kg°C) — good for storing thermal energy',
          'Specific latent heat of fusion (Lf): energy to change 1 kg of solid to liquid at its melting point (no temperature change)',
          'Specific latent heat of vaporisation (Lv): energy to change 1 kg of liquid to gas at its boiling point. Lv > Lf because more bonds need breaking',
          'Gas pressure: particles collide with container walls, exerting force. Higher temperature → faster particles → more frequent and harder collisions → higher pressure',
          'For a fixed volume of gas: pressure ∝ temperature (in kelvin)'
        ],
        tip: 'Use ΔE = mcΔθ for temperature changes and E = mL for changes of state. If a question involves BOTH (e.g. heating ice to steam), you need to calculate each stage separately and add them up.',
        example: 'How much energy to heat 2kg of water from 20°C to 100°C? (c = 4200)\nΔE = mcΔθ = 2 × 4200 × 80 = 672,000 J = 672 kJ'
      }
    ]
  },
  {
    section: '4. Atomic Structure & Radiation',
    icon: '☢️',
    color: '#9333EA',
    topics: [
      {
        ref: '6.4.1',
        title: 'Atomic Structure & Radioactivity',
        points: [
          'Atom: tiny positive nucleus (protons + neutrons) surrounded by negative electrons in shells',
          'Nuclear radius ≈ 1/10,000 of atomic radius — atom is mostly empty space',
          'History: Dalton (solid spheres) → Thomson (plum pudding model, discovered electrons) → Rutherford (gold foil experiment, discovered nucleus — most alpha particles passed through, some deflected = small, dense, positive nucleus) → Bohr (electrons in shells) → Chadwick (discovered neutrons)',
          'Radioactive decay: unstable nuclei emit radiation to become more stable — random and spontaneous',
          'Alpha (α): 2 protons + 2 neutrons (helium nucleus). Charge +2. Stopped by paper/skin. Strongly ionising. Short range in air (few cm)',
          'Beta (β): high-speed electron emitted from nucleus (neutron → proton + electron). Charge −1. Stopped by thin aluminium. Moderately ionising. Range ~1m in air',
          'Gamma (γ): electromagnetic wave from nucleus. No charge, no mass. Stopped by thick lead/concrete. Weakly ionising. Infinite range',
          'Nuclear equations: mass number and atomic number must balance on both sides',
          'Alpha decay: mass number −4, atomic number −2',
          'Beta decay: mass number same, atomic number +1 (neutron → proton)'
        ],
        tip: 'Alpha is the MOST ionising but LEAST penetrating. Gamma is the LEAST ionising but MOST penetrating. Ionising power and penetrating power are INVERSELY related.'
      },
      {
        ref: '6.4.2',
        title: 'Half-life & Uses of Radiation',
        formulas: [
          'Half-life: time for the number of radioactive nuclei (or activity) to halve',
          'After n half-lives: fraction remaining = (½)ⁿ'
        ],
        points: [
          'Half-life: the time taken for the count rate (or number of undecayed nuclei) to fall to half its initial value',
          'Half-life is constant for a given isotope — cannot be changed by temperature, pressure, or chemical reactions',
          'Irradiation: exposing an object to radiation from outside — object does NOT become radioactive',
          'Contamination: radioactive material gets onto or into an object — much more dangerous, harder to remove',
          'Uses: smoke detectors (alpha — blocked by smoke particles), medical tracers (gamma — passes through body, detected by camera), cancer treatment (gamma — kills cancer cells), sterilisation of equipment (gamma), paper thickness control (beta — paper absorbs some)',
          'Dating: carbon-14 dating for organic remains (half-life ~5700 years), uranium-lead dating for rocks (half-life ~4.5 billion years)',
          'Nuclear fission: splitting a large nucleus (uranium-235 or plutonium-239) with a neutron → two smaller nuclei + 2-3 neutrons + energy. Chain reaction in nuclear reactors',
          'Nuclear fusion: joining two small nuclei (e.g. hydrogen → helium) → releases enormous energy. Powers stars. Requires extreme temperature and pressure. Not yet viable for power stations'
        ],
        tip: 'For half-life calculations: keep halving. After 1 half-life = ½, after 2 = ¼, after 3 = ⅛, after 4 = 1/16. If count rate drops from 800 to 100, that\'s 3 halvings (800→400→200→100).',
        example: 'A sample has activity 1200 Bq and half-life of 6 hours.\nAfter 6h: 600 Bq\nAfter 12h: 300 Bq\nAfter 18h: 150 Bq\nAfter 24h: 75 Bq (4 half-lives)'
      }
    ]
  },
  {
    section: '5. Forces',
    icon: '🏗️',
    color: '#059669',
    topics: [
      {
        ref: '6.5.1',
        title: 'Forces & Motion',
        formulas: [
          'Weight = mass × g (W = mg, g ≈ 10 N/kg)',
          'Work done = force × distance (W = Fs)',
          'F = ma (Newton\'s 2nd law)',
          'Momentum = mass × velocity (p = mv)',
          'Acceleration = Δv / t = (v−u)/t',
          'v² = u² + 2as',
          's = ut + ½at²'
        ],
        points: [
          'Scalar: magnitude only (speed, distance, mass, energy, temperature). Vector: magnitude AND direction (velocity, displacement, force, acceleration, momentum)',
          'Contact forces: friction, air resistance, tension, normal contact force. Non-contact: gravity, electrostatic, magnetic',
          'Resultant force: single force that has the same effect as all forces combined. If resultant = 0, object is in equilibrium (stationary or constant velocity)',
          'Newton\'s 1st law: object stays at rest or constant velocity unless acted on by a resultant force',
          'Newton\'s 2nd law: F = ma. Resultant force causes acceleration proportional to force, inversely proportional to mass',
          'Newton\'s 3rd law: every action has an equal and opposite reaction (same type of force, on different objects)',
          'Terminal velocity: when driving force = resistive force → resultant = 0 → acceleration = 0 → constant velocity',
          'Stopping distance = thinking distance + braking distance',
          'Thinking distance affected by: speed, reaction time (tiredness, drugs, alcohol, distractions)',
          'Braking distance affected by: speed, road conditions (wet, icy), tyre condition, brake condition, mass of vehicle'
        ],
        tip: 'F = ma is the most important equation in physics. Always find the RESULTANT force first, then use F = ma. If forces are balanced, acceleration = 0 (not necessarily speed = 0).',
        example: 'A 1500 kg car accelerates from 0 to 30 m/s in 10 seconds.\na = Δv/t = 30/10 = 3 m/s²\nF = ma = 1500 × 3 = 4500 N'
      },
      {
        ref: '6.5.4',
        title: 'Momentum (Triple)',
        formulas: [
          'p = mv',
          'Conservation: total momentum before = total momentum after',
          'F = Δp/Δt (force = rate of change of momentum)'
        ],
        points: [
          'Momentum: product of mass and velocity. Vector quantity (has direction). Units: kg m/s',
          'Conservation of momentum: in a closed system, total momentum before = total momentum after a collision or explosion',
          'Elastic collision: KE is conserved. Inelastic collision: KE is NOT conserved (converted to heat/sound)',
          'Crumple zones, seat belts, air bags: increase the TIME of deceleration → reduce force (F = Δp/Δt, if Δt increases, F decreases)',
          'Safety features all work on the same principle: extend the time over which momentum changes, reducing the peak force on the body'
        ],
        tip: 'Momentum has DIRECTION. If objects move in opposite directions, one momentum is positive and the other negative. Always define a positive direction first.',
        example: 'A 2kg ball moving at 5m/s hits a stationary 3kg ball. They stick together. Find their velocity.\nBefore: p = 2×5 + 3×0 = 10 kg m/s\nAfter: 10 = (2+3)×v → v = 2 m/s'
      }
    ]
  },
  {
    section: '6. Waves',
    icon: '🌊',
    color: '#0891B2',
    topics: [
      {
        ref: '6.6.1',
        title: 'Wave Properties',
        formulas: [
          'v = fλ (wave speed = frequency × wavelength)',
          'T = 1/f (period = 1/frequency)',
          'f = 1/T'
        ],
        points: [
          'Transverse waves: oscillations perpendicular to direction of travel. Examples: light, all EM waves, water waves, S-waves',
          'Longitudinal waves: oscillations parallel to direction of travel. Examples: sound, P-waves, ultrasound. Consist of compressions and rarefactions',
          'Amplitude: maximum displacement from rest position. Related to energy/loudness',
          'Wavelength (λ): distance between two equivalent points (peak to peak, trough to trough)',
          'Frequency (f): number of waves passing a point per second. Units: Hz',
          'Period (T): time for one complete wave',
          'Wave speed: v = fλ. Frequency stays the same when a wave changes medium, but wavelength and speed change',
          'Reflection: angle of incidence = angle of reflection (measured from normal)',
          'Refraction: wave changes speed (and direction, unless hitting boundary at 90°) when entering a different medium. Slows down → bends toward normal. Speeds up → bends away from normal'
        ],
        tip: 'When a wave enters a denser medium it SLOWS DOWN and the wavelength DECREASES — but the frequency stays the SAME. This is because the source hasn\'t changed.',
        example: 'A wave has frequency 500 Hz and wavelength 0.66m.\nSpeed = fλ = 500 × 0.66 = 330 m/s (this is the speed of sound in air)'
      },
      {
        ref: '6.6.2',
        title: 'Electromagnetic Spectrum',
        points: [
          'EM spectrum (lowest to highest frequency): Radio waves, Microwaves, Infrared, Visible light, Ultraviolet, X-rays, Gamma rays',
          'Mnemonic: Raging Martians Invaded Venus Using X-ray Guns',
          'All EM waves: travel at 3×10⁸ m/s in a vacuum (speed of light), transverse waves, transfer energy, don\'t need a medium',
          'Radio waves: TV, radio communication, Bluetooth',
          'Microwaves: mobile phones, satellite communication, cooking (absorbed by water molecules)',
          'Infrared: heating, thermal imaging, fibre optic communication, TV remotes',
          'Visible light: sight, photography, fibre optics. Only part of EM spectrum humans can see',
          'Ultraviolet: sunbeds, fluorescence, security marking. Dangers: skin cancer, eye damage',
          'X-rays: medical imaging (bones absorb, soft tissue doesn\'t), airport security. Dangers: cell damage, cancer',
          'Gamma rays: cancer treatment, sterilisation, medical tracers. Dangers: cell damage, cancer',
          'Dangers increase with frequency (UV, X-rays, gamma most dangerous). Ionising radiation can damage DNA and cause mutations/cancer'
        ],
        tip: 'All EM waves travel at the SAME SPEED in a vacuum (3×10⁸ m/s). Higher frequency = shorter wavelength = more energy = more dangerous. Use v=fλ to convert between frequency and wavelength.'
      }
    ]
  },
  {
    section: '7. Magnetism & Electromagnetism',
    icon: '🧲',
    color: '#B91C1C',
    topics: [
      {
        ref: '6.7.1',
        title: 'Magnets & Magnetic Fields',
        points: [
          'Magnetic poles: North and South. Like poles repel, unlike poles attract',
          'Magnetic field: region where a magnetic force acts. Field lines go from North to South',
          'Permanent magnet: always magnetic (e.g. bar magnet). Induced magnet: becomes magnetic when placed in a magnetic field — always attracted, loses magnetism when removed',
          'Earth has a magnetic field — compass needle points to magnetic north',
          'Magnetic field around a wire: concentric circles. Direction found using right-hand grip rule (thumb = current direction, fingers curl in direction of field)',
          'Solenoid (coil): acts like a bar magnet. Strength increased by: more turns, more current, adding an iron core (= electromagnet)',
          'Electromagnets: can be switched on/off. Used in scrapyard cranes, circuit breakers, loudspeakers, electric bells'
        ],
        tip: 'Field lines never cross. They show direction (N to S) and strength (closer together = stronger field). Use the right-hand grip rule for wire fields.'
      },
      {
        ref: '6.7.2',
        title: 'Motor Effect & Electromagnetic Induction',
        formulas: [
          'Force on a wire: F = BIl (force = magnetic field × current × length)',
          'Fleming\'s left-hand rule: thuMb = Motion, First finger = Field, seCond finger = Current',
          'V = potential difference induced (generator)'
        ],
        points: [
          'Motor effect: a current-carrying wire in a magnetic field experiences a force. Direction found by Fleming\'s LEFT-hand rule',
          'DC motor: coil in magnetic field, current flows, force on each side in opposite directions → coil rotates. Split-ring commutator reverses current every half turn to maintain rotation',
          'Loudspeaker: AC in coil → alternating force → cone vibrates → produces sound waves',
          'Electromagnetic induction: moving a wire through a magnetic field (or changing field through a coil) induces a potential difference',
          'Generator: coil rotates in magnetic field → changing flux → induced pd → alternating current. Slip rings maintain continuous contact',
          'Transformers: change the voltage of AC. Two coils on an iron core. Step-up (more turns on secondary, increases voltage). Step-down (fewer turns, decreases voltage)',
          'Transformer equation: Vs/Vp = Ns/Np. For 100% efficient: VpIp = VsIs',
          'National Grid: electricity transmitted at high voltage (400,000V) and low current to reduce energy losses in cables (P = I²R, lower I = lower power loss). Step-up at power station, step-down before homes'
        ],
        tip: 'Fleming\'s LEFT hand = motor (force on a wire). For the generator and induction, it\'s about CHANGE — a stationary wire in a constant field produces nothing. You need relative motion or changing field.'
      }
    ]
  },
  {
    section: '8. Space Physics (Triple)',
    icon: '🚀',
    color: '#6366F1',
    topics: [
      {
        ref: '6.8.1',
        title: 'The Solar System & Stars',
        points: [
          'Solar system: Sun (star) → planets orbit Sun → moons orbit planets → dwarf planets → asteroids → comets',
          'Orbit: maintained by gravitational attraction. Closer to Sun = faster orbit, shorter period',
          'Our Sun is a main sequence star — formed from a nebula (cloud of dust and gas)',
          'Life cycle of a star like the Sun: Nebula → Protostar (gravity pulls gas together, temperature rises) → Main sequence star (hydrogen fusion, stable for billions of years) → Red giant (hydrogen runs out, outer layers expand and cool) → White dwarf (outer layers ejected as planetary nebula, core remains) → Black dwarf (cools completely)',
          'Massive stars: Nebula → Protostar → Main sequence → Red supergiant → Supernova (massive explosion, elements heavier than iron formed) → Neutron star OR Black hole (if massive enough)',
          'Nuclear fusion: hydrogen nuclei fuse to form helium, releasing enormous energy. This is what powers stars. Requires extreme temperature and pressure to overcome electrostatic repulsion',
          'All elements heavier than iron are formed in supernovae. Everything on Earth (including you) was made in stars',
          'Red shift: light from distant galaxies is shifted toward the red end of the spectrum. The further away, the greater the red shift → galaxies are moving away → universe is expanding',
          'Big Bang theory: universe began from a single point ~13.8 billion years ago and has been expanding ever since. Evidence: red shift of galaxies, cosmic microwave background radiation (CMBR — leftover radiation from the Big Bang, detected in all directions)'
        ],
        tip: 'Star life cycle depends on MASS. Small/medium stars → red giant → white dwarf. Massive stars → red supergiant → supernova → neutron star/black hole. The supernova is what creates heavy elements and distributes them.'
      }
    ]
  }
];
