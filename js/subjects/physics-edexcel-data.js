// ══════ EDEXCEL GCSE PHYSICS (1PH0) — Exam Board Tailored ══════
// Based on Pearson Edexcel Level 1/Level 2 GCSE (9-1) Physics specification
// 15 Topics across motion, forces, energy, waves, electricity, magnetism, astronomy

const EDEXCEL_PHYS_DATA = [
  {
    section: '1. Key Concepts in Physics',
    icon: '⚛️',
    color: '#2563EB',
    topics: [
      {
        ref: '1.1',
        title: 'SI Units and Measurements',
        points: [
          'SI base units: metre (m) length, kilogram (kg) mass, second (s) time, ampere (A) current, kelvin (K) temperature, mole (mol) amount, candela (cd) luminosity',
          'Derived units: newton (N) = kg⋅m/s² (force), joule (J) = kg⋅m²/s² (energy), watt (W) = J/s (power), hertz (Hz) = 1/s (frequency), pascal (Pa) = N/m² (pressure)',
          'Prefixes: giga (10⁹), mega (10⁶), kilo (10³), centi (10⁻²), milli (10⁻³), micro (10⁻⁶), nano (10⁻⁹)',
          'Significant figures: report to appropriate precision; more significant figures = more precise measurement',
          'Standard form: expressing numbers as a × 10ⁿ where 1 ≤ a < 10',
          'Estimation: making reasonable approximations using available information; key skill in physics'
        ],
        tip: 'Edexcel requires unit conversions and appropriate significant figures throughout. Careless errors lose marks.'
      },
      {
        ref: '1.2',
        title: 'Scalar vs Vector Quantities',
        points: [
          'Scalar: magnitude only; e.g., speed (5 m/s), mass (50 kg), temperature (298 K), energy (500 J)',
          'Vector: magnitude and direction; e.g., velocity (5 m/s north), displacement (50 m east), force (100 N downward), acceleration',
          'Vector addition: graphical (head-to-tail) or component method; subtract by reversing direction',
          'Resultant: single vector equivalent to multiple vectors combined',
          'Equilibrium: forces/vectors balanced; resultant = 0; no change in motion'
        ],
        tip: 'Common error: confusing speed (scalar) with velocity (vector). Know the distinction!'
      }
    ]
  },
  {
    section: '2. Motion and Forces',
    icon: '🚗',
    color: '#DC2626',
    topics: [
      {
        ref: '2.1',
        title: 'Kinematics — Describing Motion',
        formulas: [
          'speed = distance / time (m/s)',
          'velocity = displacement / time (m/s, with direction)',
          'acceleration = change in velocity / time = (v - u) / t (m/s²)',
          'v = u + at (final velocity = initial + acceleration × time)',
          's = ut + ½at² (displacement with uniform acceleration)',
          'v² = u² + 2as (velocity squared)'
        ],
        points: [
          'Displacement: straight-line distance from start to finish (vector); different from distance traveled (scalar)',
          'Velocity: rate of change of displacement; constant velocity = no acceleration',
          'Acceleration: rate of change of velocity; positive = speeding up, negative (deceleration) = slowing down',
          'Distance-time graphs: slope = speed; curved = acceleration',
          'Velocity-time graphs: slope = acceleration; area under = displacement',
          'Uniform acceleration: constant acceleration (e.g., falling object under gravity)',
          'Free fall: objects accelerate at g = 9.8 m/s² (or 10 m/s² simplified) under gravity (ignoring air resistance)'
        ],
        tip: 'Master the kinematic equations; they are used constantly in Edexcel physics. Graphical interpretation is key.'
      },
      {
        ref: '2.2',
        title: 'Newton\'s Laws of Motion',
        formulas: [
          'F = ma (force = mass × acceleration, Newton\'s 2nd Law)',
          'Weight W = mg (force due to gravity)',
          'Momentum p = mv (mass × velocity)'
        ],
        points: [
          'Newton\'s 1st Law: object at rest stays at rest, moving object continues at constant velocity unless acted on by unbalanced force (inertia)',
          'Newton\'s 2nd Law: F = ma; unbalanced force causes acceleration; larger force or smaller mass = greater acceleration',
          'Newton\'s 3rd Law: action-reaction pairs; forces are equal and opposite between two objects',
          'Weight: force due to gravity (W = mg); different from mass; varies with gravitational field strength (g = 9.8 m/s² on Earth)',
          'Normal force: contact force perpendicular to surface; supports weight for stationary objects on horizontal surfaces',
          'Friction: opposes motion; static friction (prevents motion) stronger than kinetic friction (during motion)',
          'Terminal velocity: air resistance increases with speed until equal to weight; object stops accelerating and falls at constant velocity'
        ],
        tip: 'Edexcel includes free-body force diagrams; draw all forces clearly, label magnitudes and directions.'
      },
      {
        ref: '2.3',
        title: 'Stopping Distance and Momentum',
        points: [
          'Thinking distance: distance traveled while driver reacts before braking (reaction time × velocity)',
          'Braking distance: distance to stop after brakes applied; depends on friction, surface, mass, initial velocity',
          'Stopping distance = thinking distance + braking distance',
          'Factors affecting stopping distance: speed (distance ∝ v²), road conditions (wet/icy longer), weather, reaction time, vehicle condition',
          'Momentum: p = mv; measure of quantity of motion; conserved in collisions (total momentum before = after)',
          'Impulse: change in momentum = force × time; larger impulse = greater force or longer time',
          'Safety features: crumple zones, seatbelts, airbags increase time of collision (longer contact = lower force on passenger, preventing injury)'
        ],
        tip: 'Edexcel includes calculations of stopping distances and momentum conservation in collisions.'
      }
    ]
  },
  {
    section: '3. Conservation of Energy',
    icon: '⚡',
    color: '#EA580C',
    topics: [
      {
        ref: '3.1',
        title: 'Energy Types and Transfers',
        formulas: [
          'Kinetic energy: Eₖ = ½mv² (energy of moving objects)',
          'Gravitational potential energy: Eₚ = mgh (energy due to height in gravitational field)',
          'Elastic potential energy: Eₑ = ½kx² (energy stored in stretched spring, x = extension, k = spring constant)'
        ],
        points: [
          'Energy types: kinetic (moving), gravitational potential (position in gravitational field), elastic potential (stretched/compressed), thermal (heat), light, sound, electrical, chemical, nuclear',
          'Energy transfer: moving object transfers kinetic, falling object converts potential → kinetic',
          'Conservation of energy: total energy before = total after; energy cannot be created/destroyed, only transferred/transformed',
          'Efficiency: useful energy out / total energy in; most processes have efficiency < 100% due to wasted heat',
          'Power: rate of energy transfer = energy / time (watts, W)'
        ],
        tip: 'Understand energy transformations; use energy conservation to solve problems (GPE → KE, etc.).'
      },
      {
        ref: '3.2',
        title: 'Work, Energy and Power',
        formulas: [
          'Work W = F × s × cos(θ) (force × displacement × cosine of angle between them)',
          'Power P = W / t = E / t'
        ],
        points: [
          'Work: done when force moves object in direction of force; W = Fs if force parallel to motion',
          'Work-energy theorem: work done by force = change in kinetic energy',
          'Power: rate of doing work or transferring energy; greater power = faster energy transfer',
          'Efficiency = (useful energy out / total energy in) × 100%',
          'Renewable vs non-renewable: renewables (solar, wind) replenish naturally; non-renewables (fossil fuels) finite',
          'Energy calculations: combining kinetic, potential, and work equations to solve real-world problems'
        ],
        tip: 'Practice work and power calculations; understand that power depends on both force and speed.'
      }
    ]
  },
  {
    section: '4. Waves',
    icon: '〰️',
    color: '#7C3AED',
    topics: [
      {
        ref: '4.1',
        title: 'Wave Properties',
        formulas: [
          'Wave speed v = f × λ (speed = frequency × wavelength)',
          'Frequency f = 1 / T (where T = period, time for one complete oscillation)'
        ],
        points: [
          'Wave: disturbance transferring energy without transferring matter',
          'Transverse waves: oscillation perpendicular to direction of energy transfer; light, water waves, electromagnetic waves',
          'Longitudinal waves: oscillation parallel to direction of energy transfer; sound, compression waves',
          'Wavelength (λ): distance between adjacent crests or troughs (m)',
          'Frequency (f): number of complete oscillations per second (Hz)',
          'Period (T): time for one complete oscillation (s); T = 1/f',
          'Amplitude: maximum displacement from equilibrium position; greater amplitude = more energy',
          'Wave speed: depends on the medium (same for all frequencies in same medium)',
          'Phase difference: how much one wave lags behind another (in terms of fractions of wavelength or angle)'
        ],
        tip: 'Edexcel includes wave equations; understand what each term represents.'
      },
      {
        ref: '4.2',
        title: 'Wave Behaviors',
        points: [
          'Reflection: wave bounces off boundary; angle of incidence = angle of reflection',
          'Refraction: wave changes direction when passing into different medium (due to speed change); bends toward normal if slower, away if faster',
          'Transmission: wave passes through medium',
          'Absorption: medium absorbs wave energy (usually converted to heat)',
          'Diffraction: wave bends around obstacles or through gaps; more pronounced for longer wavelengths',
          'Superposition: when waves overlap, displacements add (constructive interference if in phase, destructive if out of phase)',
          'Interference: two coherent waves combining; constructive (amplitude increases), destructive (amplitude decreases or cancels)',
          'Standing waves: result from two waves of same frequency traveling in opposite directions; nodes (no motion), antinodes (maximum motion)'
        ],
        tip: 'Edexcel includes diagrams showing reflection, refraction, diffraction; understand mechanisms.'
      }
    ]
  },
  {
    section: '5. Light and Electromagnetic Spectrum',
    icon: '💡',
    color: '#F59E0B',
    topics: [
      {
        ref: '5.1',
        title: 'Electromagnetic Waves',
        points: [
          'EM spectrum: all EM waves transverse; travel at 3 × 10⁸ m/s in vacuum; different frequencies/wavelengths',
          'Order by wavelength (longest to shortest): radio, microwave, infrared, visible, ultraviolet, X-ray, gamma ray',
          'Visible light: ROY G. BIV (red ~700 nm, violet ~400 nm); human eyes sensitive to this range',
          'Different wavelengths interact with matter differently; absorbed, reflected, or transmitted depending on material and wavelength',
          'Applications: radio (communication), microwave (cooking), infrared (heating, thermal imaging), visible (sight), UV (sterilization), X-rays (medical imaging), gamma rays (cancer treatment)'
        ],
        tip: 'Know the EM spectrum order and applications; understand why different frequencies behave differently.'
      },
      {
        ref: '5.2',
        title: 'Visible Light and Optics (Higher Tier)',
        points: [
          'Visible light: narrow range of EM spectrum visible to human eye',
          'Reflection laws: angle in = angle out (smooth surface); rough surfaces scatter light',
          'Refraction: Snell\'s law n₁sinθ₁ = n₂sinθ₂ (refractive index, angles measured from normal)',
          'Refractive index: measure of how much a medium slows light (n = c/v, speed of light in medium)',
          'Lenses: converging lens (convex) focuses light, diverging (concave) spreads light',
          'Lens equation: 1/f = 1/u + 1/v (focal length, object distance, image distance)',
          'Total internal reflection: light bounces off boundary when traveling from denser to less dense medium at angle > critical angle',
          'Fiber optics: uses total internal reflection to transmit light down thin fibers; applications in telecommunications'
        ],
        tip: 'Higher tier physics; master Snell\'s law and lens equations.'
      }
    ]
  },
  {
    section: '6. Radioactivity',
    icon: '☢️',
    color: '#DC2626',
    topics: [
      {
        ref: '6.1',
        title: 'Atomic Structure and Decay',
        points: [
          'Nucleus: protons (positive, charge +e) and neutrons (neutral); occupies small center of atom',
          'Electrons: negative (charge -e), arranged in shells around nucleus; neutralize nuclear charge in neutral atoms',
          'Proton number (Z): number of protons; defines element',
          'Mass number (A): total protons + neutrons',
          'Isotopes: same element (same Z) but different number of neutrons (different A); some radioactive, some stable',
          'Radioactivity: spontaneous emission of particles/radiation from unstable nuclei',
          'Alpha decay: nucleus emits helium-4 nucleus (2 protons, 2 neutrons); ⁴He or ²₂He⁺⁺; decreases Z by 2, A by 4',
          'Beta-minus decay: neutron converts to proton + electron (beta particle); emission increases Z by 1',
          'Beta-plus decay: proton converts to neutron + positron; decreases Z by 1',
          'Gamma decay: excited nucleus emits photon (no change in Z or A)',
          'Half-life: time for radioactivity to reduce to half; exponential decay; N = N₀(½)^(t/t₁/₂)'
        ],
        tip: 'Edexcel includes decay equations and half-life calculations; understand conservation of mass/charge numbers.'
      },
      {
        ref: '6.2',
        title: 'Radiation and Safety',
        points: [
          'Background radiation: always present from natural sources (cosmic rays, rocks, soil); ~2-3 mSv/year average',
          'Ionizing radiation: high-energy particles/waves that knock electrons from atoms, damaging cells',
          'Dangers: mutations (DNA damage), cancer, cataracts; higher doses more harmful',
          'Exposure: distinguish contamination (radioactive material inside/on body) from irradiation (external exposure)',
          'Safety: time (minimize exposure time), distance (increase distance, reduces intensity by inverse square law), shielding (appropriate material blocks radiation)',
          'Alpha: stopped by paper/skin, extremely dangerous if internal (ingested)',
          'Beta: stopped by aluminum, dangerous if internal',
          'Gamma: stopped by lead/concrete, penetrating and dangerous',
          'Medical applications: PET scans (radioactive tracer), radiotherapy (gamma kills cancer cells), sterilization (kills bacteria)'
        ],
        tip: 'Understand ionizing radiation hazards and how to minimize exposure.'
      },
      {
        ref: '6.3',
        title: 'Nuclear Energy (Higher Tier)',
        points: [
          'Nuclear fission: splitting heavy nucleus (e.g., uranium-235) into smaller fragments + neutrons + energy',
          'Chain reaction: neutrons from one fission trigger more fissions, releasing enormous energy',
          'Nuclear reactors: controlled fission; control rods absorb neutrons to regulate reaction rate',
          'Nuclear fusion: joining light nuclei (e.g., hydrogen isotopes) at extreme temperature; releases energy; occurs in stars',
          'Mass-energy equivalence: E = mc² (mass can convert to energy)',
          'Advantages: high energy density, low carbon emissions; disadvantages: radioactive waste, safety concerns, high cost',
          'Waste: spent fuel highly radioactive; disposal challenge (long half-lives require centuries of storage)'
        ],
        tip: 'Higher tier; understand fission/fusion, reactor operation, and waste issues.'
      }
    ]
  },
  {
    section: '7. Astronomy',
    icon: '🌌',
    color: '#059669',
    topics: [
      {
        ref: '7.1',
        title: 'Solar System and Universe',
        points: [
          'Solar system: Sun (central star) + planets, moons, comets, asteroids',
          'Planets (from Sun): Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune; terrestrial (small, rocky) vs gas giants (large, gaseous)',
          'Gravity in orbits: gravitational force provides centripetal force; keeps planets in circular orbits at constant speed (but changing velocity direction)',
          'Kepler\'s laws: planetary periods related to orbital radius; orbits are ellipses with Sun at focus',
          'Universe: billions of galaxies, each with billions of stars; expanding (discovered via red-shift)',
          'Distances: measured in light-years (distance light travels in one year); nearest star ~4 light-years away',
          'Milky Way: our galaxy containing ~100-400 billion stars; solar system on outer spiral arm'
        ],
        tip: 'Edexcel includes orbital mechanics and understanding that gravity, not "centrifugal force," keeps planets orbiting.'
      },
      {
        ref: '7.2',
        title: 'Stellar Evolution',
        points: [
          'Star formation: nebula (cloud of gas/dust) → gravity pulls together → temperature rises → nuclear fusion begins',
          'Main sequence: stable phase when core fusing hydrogen → helium; Sun is currently here (50% through life)',
          'Hertzsprung-Russell diagram: plots luminosity vs temperature; shows star types and evolutionary path',
          'Red giant: outer layers expand, cool down; star becomes large, dim relative to surface area; occurs as hydrogen runs out',
          'White dwarf: stellar core exposed after outer layers shed; extremely hot but small (Earth-sized), dims over time',
          'Supernova: massive star explosion when fuel exhausted (violent death); briefly outshines entire galaxy',
          'Black hole: ultra-dense remnant of massive star collapse; gravity so strong light cannot escape',
          'Life cycle: massive stars have shorter lives; Sun will take ~10 billion years total (currently 4.6 billion years old)'
        ],
        tip: 'Understand the Hertzsprung-Russell diagram and stellar life cycles.'
      },
      {
        ref: '7.3',
        title: 'Big Bang and Expanding Universe',
        points: [
          'Big Bang theory: universe began ~13.8 billion years ago as incredibly hot, dense point; has been expanding ever since',
          'Evidence for Big Bang: (1) red-shift of distant galaxies shows universe expanding, (2) cosmic microwave background radiation (leftover heat from early universe)',
          'Hubble\'s constant: relates galaxy velocity to distance; measures expansion rate',
          'Red-shift: light from receding objects stretched to longer wavelengths (appears redder); amount indicates velocity',
          'Doppler effect: frequency changes for moving sources; approach = higher frequency (blue-shift), receding = lower (red-shift)',
          'Cosmological principle: universe appears same in all directions on large scales',
          'Future: universe will continue expanding; may accelerate (dark energy) or eventually collapse (Big Crunch)'
        ],
        tip: 'Edexcel emphasizes evidence for Big Bang and understanding red-shift as Doppler effect.'
      }
    ]
  },
  {
    section: '8. Energy – Forces Doing Work',
    icon: '🏋️',
    color: '#8B5CF6',
    topics: [
      {
        ref: '8.1',
        title: 'Work and Energy Calculations',
        formulas: [
          'Work W = F × s × cos(θ) where θ is angle between force and displacement',
          'Power P = W/t = ΔE/t'
        ],
        points: [
          'Work: force causing displacement in direction of force; W = Fs when force parallel to motion',
          'Work-energy theorem: work equals change in kinetic energy',
          'Gravitational potential energy: Eₚ = mgh (height h measured from reference point)',
          'Elastic potential energy: stored in stretched/compressed springs; Eₑ = ½kx²',
          'Kinetic energy: Eₖ = ½mv²',
          'Power: rate of energy transfer; P = F × v when force and velocity parallel',
          'Efficiency: useful work out / total work in; always < 100% due to friction/losses',
          'Sankey diagrams: visualize energy flows; width represents energy magnitude'
        ],
        tip: 'Practice work and power problems; understand efficiency in real systems.'
      }
    ]
  },
  {
    section: '9. Forces and Their Effects',
    icon: '⚙️',
    color: '#06B6D4',
    topics: [
      {
        ref: '9.1',
        title: 'Moments and Rotational Forces (Higher Tier)',
        formulas: [
          'Moment (torque) = Force × perpendicular distance from pivot'
        ],
        points: [
          'Moment: turning effect of force around a pivot; greater force or greater distance = greater moment',
          'Levers: simple machines using pivot to amplify force; distance from pivot affects mechanical advantage',
          'Equilibrium: for rotational equilibrium, clockwise moments = counterclockwise moments',
          'Gears: transfer rotational motion; smaller gear spins faster but with less torque; larger gear spins slower with more torque',
          'Density: mass per unit volume (ρ = m/V); determines how materials float/sink',
          'Floating: object floats if average density < fluid density (displaces weight of fluid equal to object weight)'
        ],
        tip: 'Higher tier; understand moment calculations and simple machines.'
      }
    ]
  },
  {
    section: '10. Electricity and Circuits',
    icon: '⚡',
    color: '#F59E0B',
    topics: [
      {
        ref: '10.1',
        title: 'Electric Circuits',
        formulas: [
          'Current I = Q/t (charge per unit time, amperes A)',
          'Potential difference V = W/Q (work per unit charge, volts V)',
          'Resistance R = V/I (Ohm\'s Law)',
          'Power P = V × I = I²R = V²/R'
        ],
        points: [
          'Electric charge: measured in coulombs (C); electrons carry -e (−1.6 × 10⁻¹⁹ C)',
          'Current: flow of charge; conventional current direction (positive to negative) opposite to electron flow',
          'Circuit symbols: cell, battery, resistor, switch, lamp, ammeter (measures current), voltmeter (measures potential difference)',
          'Series circuits: single path; same current through all components; total voltage divides across resistors',
          'Parallel circuits: multiple paths; voltage same across all branches; current divides',
          'Total resistance: series R_total = R₁ + R₂...; parallel 1/R_total = 1/R₁ + 1/R₂...',
          'Component behavior: fixed resistor (ohmic), filament lamp (resistance increases with temperature), diode (one-way), thermistor (resistance varies with temperature), LDR (light-dependent resistor)',
          'EMF and internal resistance: real power supplies have internal resistance r; V = ε - Ir (where ε is EMF)'
        ],
        tip: 'Master circuit analysis; series vs parallel is crucial distinction.'
      }
    ]
  },
  {
    section: '11. Static Electricity',
    icon: '⚡',
    color: '#EF4444',
    topics: [
      {
        ref: '11.1',
        title: 'Electric Charge and Fields (Higher Tier)',
        points: [
          'Charge: two types (positive and negative); like charges repel, opposite charges attract',
          'Electron transfer: friction causes electrons to move between objects; object gaining electrons becomes negative, losing becomes positive',
          'Conductors: allow free electron movement (metals); insulators: electrons tightly bound (plastics, rubber)',
          'Electric field: region where charged object experiences force; field lines point from positive to negative',
          'Electric potential: work done moving unit charge to a point; measured in volts',
          'Electrostatic hazards: sparks from static discharge can ignite flammable materials; antistatic measures prevent buildup',
          'Applications: photocopiers (charge attracts toner), lightning protection (earthing), industrial processes'
        ],
        tip: 'Higher tier physics; understand field concepts and practical applications.'
      }
    ]
  },
  {
    section: '12. Magnetism and Motor Effect',
    icon: '🧲',
    color: '#6366F1',
    topics: [
      {
        ref: '12.1',
        title: 'Magnetic Fields and Forces',
        formulas: [
          'Force on current-carrying wire: F = B × I × L (magnetic field strength × current × length of conductor)'
        ],
        points: [
          'Magnetic field: region where magnetic material/moving charge experiences force; represented by field lines (exit north pole, enter south)',
          'Field strength B: measured in tesla (T)',
          'Permanent magnets: ferromagnetic materials (iron, steel, cobalt) retain magnetism',
          'Electromagnets: coil of wire carrying current produces magnetic field; field strength increases with current/number of coils',
          'Magnetic force on current: wire carrying current in magnetic field experiences force perpendicular to both field and current (F = BIL)',
          'Fleming\'s left-hand rule: thumb = force direction, first finger = field, second finger = current',
          'Motor effect: force on current-carrying conductor causes rotation; basis of electric motors',
          'Transformer: coil in changing magnetic field induces voltage; used to step up/down AC voltage'
        ],
        tip: 'Edexcel emphasizes Fleming\'s rules; practice left-hand rule extensively.'
      }
    ]
  },
  {
    section: '13. Electromagnetic Induction',
    icon: '🔁',
    color: '#10B981',
    topics: [
      {
        ref: '13.1',
        title: 'Induced Voltage and AC (Higher Tier)',
        points: [
          'Electromagnetic induction: changing magnetic field induces voltage in conductor',
          'Faraday\'s law: induced EMF proportional to rate of change of magnetic flux',
          'Lenz\'s law: induced current opposes change causing it (determines direction)',
          'Generator: rotating coil in magnetic field; AC voltage induced, frequency depends on rotation rate',
          'Alternating current (AC): current direction reverses periodically; voltage oscillates',
          'Direct current (DC): constant direction; from batteries',
          'Transformer: two coils (primary and secondary) with common magnetic core',
          'Transformer equation: Vₚ/Vs = Np/Ns (voltage ratio = turns ratio)',
          'Efficiency: real transformers have losses (copper resistance, iron losses); < 100%',
          'National Grid: uses step-up transformers to increase voltage (reduce current, reduce losses in transmission), step-down for consumers'
        ],
        tip: 'Higher tier; essential for understanding modern power systems.'
      }
    ]
  },
  {
    section: '14. Particle Model',
    icon: '•',
    color: '#A855F7',
    topics: [
      {
        ref: '14.1',
        title: 'States of Matter and Kinetic Theory',
        formulas: [
          'Density ρ = m/V (mass per unit volume)',
          'Specific heat capacity: ΔQ = m × c × ΔT (heat energy = mass × specific heat × temperature change)',
          'Latent heat: Q = m × L (energy to change state = mass × latent heat)',
          'Pressure: P = F/A (force per unit area)'
        ],
        points: [
          'Kinetic theory: matter composed of tiny particles in constant random motion',
          'Solid: particles closely packed, vibrating; strong intermolecular forces maintain shape',
          'Liquid: particles closely spaced but disordered; weaker forces allow flow',
          'Gas: particles widely separated, moving rapidly; negligible intermolecular forces',
          'Temperature: measure of average kinetic energy of particles',
          'Melting/Freezing: temperature constant during phase change; internal energy changes as structure changes',
          'Boiling/Condensation: latent heat converts liquid ↔ gas while temperature constant',
          'Sublimation: solid → gas directly (e.g., dry ice)',
          'Pressure in gases: due to particle collisions with walls; increases with temperature or volume decrease'
        ],
        tip: 'Understand that phase changes involve latent heat; temperature stays constant during transition.'
      }
    ]
  },
  {
    section: '15. Forces and Matter',
    icon: '🏗️',
    color: '#EC4899',
    topics: [
      {
        ref: '15.1',
        title: 'Elastic Deformation and Pressure',
        formulas: [
          'Hooke\'s Law: F = k × x (force = spring constant × extension)',
          'Pressure P = F/A (force per unit area)',
          'Hydrostatic pressure: P = h × ρ × g (depth × density × gravity)'
        ],
        points: [
          'Elastic deformation: object returns to original shape after force removed; elastic limit is maximum elastic stress',
          'Plastic deformation: permanent change in shape; occurs beyond elastic limit',
          'Spring constant k: stiffness of spring; larger k = stiffer',
          'Stress: force per unit area (like pressure)',
          'Strain: fractional change in length (extension / original length)',
          'Pressure: normal force pushing on surface; atmosphere ~101 kPa at sea level',
          'Hydrostatic pressure: pressure in fluids due to weight; increases with depth',
          'Atmospheric pressure: decreases with altitude; causes buoyancy',
          'Archimedes principle: buoyant force = weight of fluid displaced; object floats if density < fluid density'
        ],
        tip: 'Understand elastic vs plastic deformation, and pressure concepts in solids and fluids.'
      }
    ]
  }
];
