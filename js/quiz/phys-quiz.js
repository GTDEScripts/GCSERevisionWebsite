const PHYS_QUIZ = [
  // ============================================================
  // SECTION 1: ENERGY
  // ============================================================
  {
    section: 'Energy',
    icon: '⚡',
    color: '#D97706',
    topics: [
      {
        topic: 'Energy Stores & Transfers',
        questions: [
          {
            q: 'Which energy store increases when a spring is compressed?',
            options: ['Kinetic', 'Elastic potential', 'Gravitational potential', 'Thermal'],
            answer: 1,
            explanation: 'Compressing a spring stores energy in its elastic potential energy store due to the deformation of the spring.'
          },
          {
            q: 'A ball is thrown upwards. At the highest point of its trajectory, which energy store is at its maximum?',
            options: ['Kinetic', 'Elastic potential', 'Gravitational potential', 'Chemical'],
            answer: 2,
            explanation: 'At the highest point the ball is momentarily stationary, so kinetic energy is zero and gravitational potential energy is at its maximum.'
          },
          {
            q: 'Which of the following is NOT an energy store?',
            options: ['Chemical', 'Nuclear', 'Electrical', 'Radiation'],
            answer: 3,
            explanation: 'Radiation (light, infrared, etc.) is a pathway for transferring energy, not a store of energy.'
          },
          {
            q: 'A car accelerates from rest. Which energy transfer is taking place?',
            options: ['Chemical to kinetic', 'Kinetic to chemical', 'Gravitational to thermal', 'Elastic to nuclear'],
            answer: 0,
            explanation: 'The fuel (chemical store) is burned and energy is transferred to the kinetic store of the moving car.'
          },
          {
            q: 'Calculate the kinetic energy of a 2 kg object moving at 5 m/s. (KE = ½mv²)',
            options: ['10 J', '25 J', '50 J', '5 J'],
            answer: 1,
            explanation: 'KE = ½ × 2 × 5² = ½ × 2 × 25 = 25 J.'
          },
          {
            q: 'What is the gravitational potential energy of a 3 kg object raised 4 m above the ground? (g = 10 N/kg)',
            options: ['12 J', '120 J', '30 J', '40 J'],
            answer: 1,
            explanation: 'GPE = mgh = 3 × 10 × 4 = 120 J.'
          },
          {
            q: 'Which energy transfer occurs when a kettle boils water?',
            options: ['Chemical to thermal (by heating)', 'Electrical to thermal (by heating)', 'Nuclear to kinetic', 'Thermal to electrical'],
            answer: 1,
            explanation: 'An electric kettle transfers energy from the electrical pathway to the thermal energy store of the water by heating.'
          },
          {
            q: 'A pendulum swings from its highest point to its lowest point. What energy transfer occurs?',
            options: ['Kinetic to gravitational potential', 'Gravitational potential to kinetic', 'Elastic to thermal', 'Chemical to kinetic'],
            answer: 1,
            explanation: 'As the pendulum falls from its highest point, gravitational potential energy is transferred to kinetic energy.'
          },
          {
            q: 'A 500 g ball is dropped from a height of 10 m. What is its speed just before hitting the ground? (g = 10 N/kg, ignore air resistance)',
            options: ['5 m/s', '10 m/s', '14.1 m/s', '20 m/s'],
            answer: 2,
            explanation: 'GPE = KE: mgh = ½mv², so v = √(2gh) = √(2 × 10 × 10) = √200 ≈ 14.1 m/s.'
          },
          {
            q: 'What type of energy store does food contain?',
            options: ['Thermal', 'Kinetic', 'Chemical', 'Nuclear'],
            answer: 2,
            explanation: 'Food contains chemical energy which is released during digestion and respiration.'
          },
          {
            q: 'A stretched elastic band is released and fires a marble. What is the main energy transfer?',
            options: ['Chemical to kinetic', 'Elastic potential to kinetic', 'Gravitational to kinetic', 'Thermal to kinetic'],
            answer: 1,
            explanation: 'The stretched elastic band has elastic potential energy which is transferred to the kinetic energy of the marble.'
          },
          {
            q: 'Which of these is an energy transfer pathway, not an energy store?',
            options: ['Thermal', 'Chemical', 'Mechanical (by forces)', 'Gravitational potential'],
            answer: 2,
            explanation: 'Mechanical work (by forces) is a pathway for transferring energy between stores, not a store itself.'
          },
          {
            q: 'An object has 200 J of kinetic energy and a mass of 4 kg. What is its speed?',
            options: ['5 m/s', '10 m/s', '50 m/s', '100 m/s'],
            answer: 1,
            explanation: 'KE = ½mv², so 200 = ½ × 4 × v², giving v² = 100, therefore v = 10 m/s.'
          },
          {
            q: 'A battery-powered toy car moves across the floor and gradually slows to a stop. Where has the kinetic energy been transferred to?',
            options: ['Chemical store of the battery', 'Gravitational potential store', 'Thermal store of surroundings', 'Nuclear store'],
            answer: 2,
            explanation: 'Friction between the wheels and the floor converts kinetic energy to thermal energy in the surroundings.'
          },
          {
            q: 'What happens to the total energy in a closed system?',
            options: ['It increases over time', 'It decreases over time', 'It remains constant', 'It varies randomly'],
            answer: 2,
            explanation: 'The law of conservation of energy states that total energy in a closed system is always conserved.'
          },
          {
            q: 'A cyclist at the top of a hill has 5000 J of gravitational potential energy. Ignoring friction, what is their kinetic energy at the bottom?',
            options: ['0 J', '2500 J', '5000 J', '10000 J'],
            answer: 2,
            explanation: 'Ignoring friction, all the gravitational potential energy is converted to kinetic energy, so KE = 5000 J.'
          },
          {
            q: 'Which energy store is associated with a moving object?',
            options: ['Elastic potential', 'Chemical', 'Kinetic', 'Magnetic'],
            answer: 2,
            explanation: 'A moving object has energy in its kinetic energy store, which depends on its mass and speed.'
          },
          {
            q: 'An electric heater converts 2000 J of electrical energy. 1800 J heats the room. What is the efficiency?',
            options: ['80%', '90%', '95%', '100%'],
            answer: 1,
            explanation: 'Efficiency = useful output / total input × 100 = 1800/2000 × 100 = 90%.'
          },
          {
            q: 'Which of these increases the gravitational potential energy store of an object?',
            options: ['Increasing its speed', 'Raising it to a greater height', 'Compressing it', 'Cooling it down'],
            answer: 1,
            explanation: 'GPE = mgh, so increasing the height (h) increases gravitational potential energy.'
          },
          {
            q: 'A nuclear power station transfers energy from which store?',
            options: ['Chemical', 'Kinetic', 'Nuclear', 'Elastic potential'],
            answer: 2,
            explanation: 'Nuclear power stations release energy from the nuclear store of uranium or plutonium atoms through nuclear fission.'
          }
        ]
      },
      {
        topic: 'Conservation & Dissipation of Energy',
        questions: [
          {
            q: 'What does the principle of conservation of energy state?',
            options: [
              'Energy can be created but not destroyed',
              'Energy can be destroyed but not created',
              'Energy cannot be created or destroyed, only transferred',
              'Energy is always lost as heat'
            ],
            answer: 2,
            explanation: 'The conservation of energy principle states energy cannot be created or destroyed, only transferred between stores.'
          },
          {
            q: 'A light bulb is 20% efficient. If it receives 100 J of electrical energy, how much useful light energy does it produce?',
            options: ['10 J', '20 J', '80 J', '100 J'],
            answer: 1,
            explanation: 'Useful output = efficiency × input = 0.20 × 100 = 20 J.'
          },
          {
            q: 'What is meant by "dissipated" energy?',
            options: [
              'Energy that is destroyed',
              'Energy that is stored usefully',
              'Energy transferred to less useful stores, often thermal',
              'Energy that is created by friction'
            ],
            answer: 2,
            explanation: 'Dissipated energy is energy transferred to less useful stores (usually thermal energy in the surroundings), making it less useful.'
          },
          {
            q: 'Which method reduces unwanted energy transfer in a house?',
            options: ['Opening windows', 'Using cavity wall insulation', 'Removing the roof', 'Using thinner walls'],
            answer: 1,
            explanation: 'Cavity wall insulation traps air which is a poor conductor, reducing heat loss through walls by conduction and convection.'
          },
          {
            q: 'A motor has an efficiency of 75%. It receives 400 J of energy. How much energy is wasted?',
            options: ['100 J', '200 J', '300 J', '75 J'],
            answer: 0,
            explanation: 'Useful output = 0.75 × 400 = 300 J. Wasted = 400 − 300 = 100 J.'
          },
          {
            q: 'Which of these is the correct formula for efficiency?',
            options: [
              'Efficiency = total input ÷ useful output',
              'Efficiency = useful output ÷ total input',
              'Efficiency = wasted output ÷ total input',
              'Efficiency = total input × useful output'
            ],
            answer: 1,
            explanation: 'Efficiency = useful output energy (or power) ÷ total input energy (or power).'
          },
          {
            q: 'Double glazing reduces heat loss primarily by reducing which type of heat transfer?',
            options: ['Radiation only', 'Conduction and convection', 'Nuclear transfer', 'Electrical transfer'],
            answer: 1,
            explanation: 'The trapped air between the two panes is a poor conductor and the sealed gap prevents convection currents.'
          },
          {
            q: 'A machine does 150 J of useful work from 200 J of input energy. What is its efficiency as a percentage?',
            options: ['50%', '60%', '75%', '80%'],
            answer: 2,
            explanation: 'Efficiency = 150/200 × 100 = 75%.'
          },
          {
            q: 'Why can no machine be 100% efficient?',
            options: [
              'Because machines always create new energy',
              'Because some energy is always dissipated as thermal energy',
              'Because energy can be destroyed by friction',
              'Because machines always need electricity'
            ],
            answer: 1,
            explanation: 'Friction and other processes always cause some energy to be dissipated as thermal energy to the surroundings.'
          },
          {
            q: 'Which home insulation method reduces energy transfer by radiation from the roof?',
            options: ['Draught excluders', 'Loft insulation', 'Double glazing', 'Thick curtains'],
            answer: 1,
            explanation: 'Loft insulation reduces heat loss through the roof by trapping air, which is a poor thermal conductor.'
          },
          {
            q: 'A power station produces 500 MW of electrical power from 1200 MW of thermal input. What is its efficiency?',
            options: ['24%', '42%', '58%', '240%'],
            answer: 1,
            explanation: 'Efficiency = 500/1200 × 100 ≈ 41.7%, which rounds to 42%.'
          },
          {
            q: 'Lubrication reduces energy waste in machines by:',
            options: [
              'Increasing the friction between moving parts',
              'Reducing the friction between moving parts',
              'Increasing the temperature of moving parts',
              'Adding more energy to the system'
            ],
            answer: 1,
            explanation: 'Lubricants create a thin layer between surfaces, reducing friction and therefore reducing wasted thermal energy.'
          },
          {
            q: 'An LED bulb has an efficiency of 90% and receives 10 W of power. What is the useful light power output?',
            options: ['1 W', '5 W', '9 W', '10 W'],
            answer: 2,
            explanation: 'Useful power = efficiency × input power = 0.90 × 10 = 9 W.'
          },
          {
            q: 'What is the main energy transfer that occurs when brakes are applied to a moving car?',
            options: ['Kinetic to chemical', 'Kinetic to thermal', 'Thermal to kinetic', 'Chemical to gravitational'],
            answer: 1,
            explanation: 'Friction between brake pads and discs converts the kinetic energy of the car into thermal energy (the brakes get hot).'
          },
          {
            q: 'Thick curtains reduce heat loss from a window by:',
            options: [
              'Increasing radiation from the window',
              'Trapping a layer of insulating air',
              'Conducting heat better than glass',
              'Allowing more convection'
            ],
            answer: 1,
            explanation: 'Thick curtains trap a layer of air near the window. Air is a poor conductor, reducing heat loss by conduction and convection.'
          },
          {
            q: 'A Sankey diagram shows that 400 J enters a device, 280 J is useful output. What is the wasted energy?',
            options: ['80 J', '120 J', '280 J', '680 J'],
            answer: 1,
            explanation: 'Wasted energy = input − useful output = 400 − 280 = 120 J.'
          },
          {
            q: 'Why is thermal energy often considered "wasted"?',
            options: [
              'Because it is destroyed',
              'Because it spreads out and becomes less useful',
              'Because it does not exist',
              'Because it can be easily recovered'
            ],
            answer: 1,
            explanation: 'Thermal energy dissipates into the surroundings and spreads out, making it difficult to use for further useful work.'
          },
          {
            q: 'What is the useful energy output of a 60% efficient motor that receives 500 J?',
            options: ['200 J', '300 J', '400 J', '500 J'],
            answer: 1,
            explanation: 'Useful output = 0.60 × 500 = 300 J.'
          },
          {
            q: 'Which renewable energy resource has no fuel costs and produces no greenhouse gases during operation?',
            options: ['Gas power station', 'Coal power station', 'Wind turbine', 'Oil power station'],
            answer: 2,
            explanation: 'Wind turbines use kinetic energy from the wind. They have no fuel costs and produce no CO₂ during operation.'
          },
          {
            q: 'A fridge transfers 150 J of thermal energy from inside to the surroundings and uses 50 J of electrical energy. The total energy transferred to the surroundings is:',
            options: ['50 J', '100 J', '150 J', '200 J'],
            answer: 3,
            explanation: 'The fridge transfers the 150 J removed from inside plus the 50 J of electrical energy as heat to the surroundings = 200 J total.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // SECTION 2: ELECTRICITY
  // ============================================================
  {
    section: 'Electricity',
    icon: '🔌',
    color: '#2563EB',
    topics: [
      {
        topic: 'Circuit Components & Current-Voltage Graphs',
        questions: [
          {
            q: 'What is electric current?',
            options: [
              'The energy stored in a battery',
              'The rate of flow of charge',
              'The resistance of a wire',
              'The voltage across a component'
            ],
            answer: 1,
            explanation: 'Electric current is defined as the rate of flow of electrical charge, measured in amperes (A).'
          },
          {
            q: 'Calculate the current when 60 C of charge flows in 20 seconds.',
            options: ['0.3 A', '3 A', '80 A', '1200 A'],
            answer: 1,
            explanation: 'I = Q/t = 60/20 = 3 A.'
          },
          {
            q: 'What does the gradient of a current-voltage (I-V) graph represent for an ohmic conductor?',
            options: ['Resistance', 'Power', '1/Resistance', 'Energy'],
            answer: 2,
            explanation: 'For an I-V graph (current on y-axis, voltage on x-axis), the gradient = I/V = 1/R.'
          },
          {
            q: 'The I-V graph for a filament lamp is:',
            options: [
              'A straight line through the origin',
              'A curve that gets steeper',
              'A curve that gets less steep as voltage increases',
              'A horizontal line'
            ],
            answer: 2,
            explanation: 'As the filament heats up, its resistance increases, so the current increases less for each increase in voltage, producing a curve that flattens.'
          },
          {
            q: 'What is the resistance of a component if 6 V drives a current of 2 A through it?',
            options: ['3 Ω', '4 Ω', '8 Ω', '12 Ω'],
            answer: 0,
            explanation: 'R = V/I = 6/2 = 3 Ω.'
          },
          {
            q: 'A diode allows current to flow in:',
            options: ['Both directions equally', 'One direction only', 'Neither direction', 'All directions'],
            answer: 1,
            explanation: 'A diode has a very high resistance in the reverse direction and low resistance in the forward direction, so current only flows one way.'
          },
          {
            q: 'What happens to the resistance of a thermistor as temperature increases?',
            options: ['It increases', 'It decreases', 'It stays the same', 'It becomes infinite'],
            answer: 1,
            explanation: 'In a negative temperature coefficient (NTC) thermistor, resistance decreases as temperature increases.'
          },
          {
            q: 'What happens to the resistance of a light-dependent resistor (LDR) as light intensity increases?',
            options: ['It increases', 'It decreases', 'It stays the same', 'It doubles'],
            answer: 1,
            explanation: 'As light intensity increases, the resistance of an LDR decreases, allowing more current to flow.'
          },
          {
            q: 'An ohmic conductor has a V-I graph that is:',
            options: ['A curve', 'A straight line through the origin', 'A horizontal line', 'A vertical line'],
            answer: 1,
            explanation: 'An ohmic conductor has constant resistance, so V and I are directly proportional, giving a straight line through the origin.'
          },
          {
            q: 'Which component could be used in a circuit to automatically switch on a light when it gets dark?',
            options: ['Thermistor', 'Diode', 'LDR', 'Fixed resistor'],
            answer: 2,
            explanation: 'An LDR has high resistance in the dark and low resistance in the light, so it can be used to detect darkness and trigger a light.'
          },
          {
            q: 'Calculate the charge that flows when a current of 0.5 A flows for 2 minutes.',
            options: ['1 C', '30 C', '60 C', '120 C'],
            answer: 2,
            explanation: 'Q = It = 0.5 × 120 (converting 2 min to seconds) = 60 C.'
          },
          {
            q: 'What is the unit of electrical resistance?',
            options: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)', 'Watt (W)'],
            answer: 2,
            explanation: 'Resistance is measured in ohms (Ω).'
          },
          {
            q: 'A 12 V battery drives a current of 0.5 A through a lamp. What is the resistance of the lamp?',
            options: ['6 Ω', '12 Ω', '24 Ω', '0.04 Ω'],
            answer: 2,
            explanation: 'R = V/I = 12/0.5 = 24 Ω.'
          },
          {
            q: 'In which direction do electrons flow in a circuit?',
            options: [
              'From positive to negative terminal',
              'From negative to positive terminal',
              'In both directions equally',
              'Electrons do not move in circuits'
            ],
            answer: 1,
            explanation: 'Electrons are negatively charged and flow from the negative terminal to the positive terminal (opposite to conventional current).'
          },
          {
            q: 'Why does the resistance of a filament lamp increase as it gets hotter?',
            options: [
              'The wire gets thinner',
              'Metal ions vibrate more, impeding electron flow',
              'Electrons slow down permanently',
              'The voltage decreases'
            ],
            answer: 1,
            explanation: 'As the filament heats up, metal ions vibrate more, causing more collisions with electrons and increasing resistance.'
          },
          {
            q: 'What voltage is needed to drive a current of 4 A through a 5 Ω resistor?',
            options: ['0.8 V', '1.25 V', '9 V', '20 V'],
            answer: 3,
            explanation: 'V = IR = 4 × 5 = 20 V.'
          },
          {
            q: 'Which circuit symbol represents a variable resistor?',
            options: [
              'A rectangle with a line through it',
              'A rectangle with an arrow through it',
              'A circle with a cross',
              'Two parallel lines'
            ],
            answer: 1,
            explanation: 'A variable resistor is represented by a rectangle (resistor) with a diagonal arrow through it, indicating adjustability.'
          },
          {
            q: 'A component has a resistance of 10 Ω at 20°C and 4 Ω at 80°C. What is this component most likely to be?',
            options: ['Fixed resistor', 'Filament lamp', 'Thermistor', 'Diode'],
            answer: 2,
            explanation: 'A thermistor (NTC) has a resistance that decreases significantly as temperature increases.'
          },
          {
            q: 'What is the current through a 100 Ω resistor when 10 V is applied across it?',
            options: ['0.01 A', '0.1 A', '10 A', '1000 A'],
            answer: 1,
            explanation: 'I = V/R = 10/100 = 0.1 A.'
          },
          {
            q: 'In a circuit, the ammeter reads 2 A and the voltmeter across a resistor reads 8 V. What charge flows through the resistor in 10 s?',
            options: ['4 C', '16 C', '20 C', '80 C'],
            answer: 2,
            explanation: 'Q = It = 2 × 10 = 20 C. The voltmeter reading is not needed for this calculation.'
          }
        ]
      },
      {
        topic: 'Series & Parallel Circuits',
        questions: [
          {
            q: 'In a series circuit, what happens to the current at different points?',
            options: [
              'It increases along the circuit',
              'It decreases along the circuit',
              'It is the same at all points',
              'It varies randomly'
            ],
            answer: 2,
            explanation: 'In a series circuit, the current is the same at all points because there is only one path for the charge to flow.'
          },
          {
            q: 'Two resistors of 4 Ω and 6 Ω are connected in series. What is the total resistance?',
            options: ['2.4 Ω', '5 Ω', '10 Ω', '24 Ω'],
            answer: 2,
            explanation: 'In series, total resistance = R₁ + R₂ = 4 + 6 = 10 Ω.'
          },
          {
            q: 'In a parallel circuit, how does the total resistance compare to the smallest individual resistance?',
            options: [
              'It is greater',
              'It is smaller',
              'It is equal',
              'It is double'
            ],
            answer: 1,
            explanation: 'In parallel, the total resistance is always less than the smallest individual resistance because there are more paths for current.'
          },
          {
            q: 'Two identical 6 Ω resistors are connected in parallel. What is the total resistance?',
            options: ['3 Ω', '6 Ω', '12 Ω', '36 Ω'],
            answer: 0,
            explanation: '1/R_total = 1/6 + 1/6 = 2/6, so R_total = 6/2 = 3 Ω.'
          },
          {
            q: 'In a series circuit with a 12 V battery and two identical resistors, what is the voltage across each resistor?',
            options: ['3 V', '6 V', '12 V', '24 V'],
            answer: 1,
            explanation: 'In series, the voltage is shared equally between identical resistors: 12/2 = 6 V each.'
          },
          {
            q: 'In a parallel circuit, what is the voltage across each branch?',
            options: [
              'It is shared between branches',
              'It is the same across each branch',
              'It is zero in all branches',
              'It doubles in each successive branch'
            ],
            answer: 1,
            explanation: 'In parallel, each branch has the same potential difference (voltage) across it, equal to the supply voltage.'
          },
          {
            q: 'A 12 V battery is connected to a 3 Ω and a 6 Ω resistor in series. What is the current in the circuit?',
            options: ['0.75 A', '1.33 A', '2 A', '4 A'],
            answer: 1,
            explanation: 'Total R = 3 + 6 = 9 Ω. I = V/R = 12/9 = 1.33 A.'
          },
          {
            q: 'What is the voltage across the 6 Ω resistor in the previous question?',
            options: ['2 V', '4 V', '6 V', '8 V'],
            answer: 3,
            explanation: 'V = IR = 1.33 × 6 = 8 V (the remaining 4 V is across the 3 Ω resistor).'
          },
          {
            q: 'Why are household circuits wired in parallel rather than series?',
            options: [
              'It uses less wire',
              'Each appliance gets the full supply voltage and can be switched on/off independently',
              'It increases the total resistance',
              'It reduces the current'
            ],
            answer: 1,
            explanation: 'Parallel circuits provide the full mains voltage to each appliance and allow independent switching.'
          },
          {
            q: 'Three 12 Ω resistors are connected in parallel. What is the total resistance?',
            options: ['4 Ω', '12 Ω', '36 Ω', '0.25 Ω'],
            answer: 0,
            explanation: '1/R_total = 1/12 + 1/12 + 1/12 = 3/12, so R_total = 12/3 = 4 Ω.'
          },
          {
            q: 'In a series circuit, the sum of the voltages across all components equals:',
            options: [
              'Zero',
              'The current times resistance of one component',
              'The supply voltage',
              'Twice the supply voltage'
            ],
            answer: 2,
            explanation: 'In series, the voltages across all components add up to equal the total supply voltage (conservation of energy).'
          },
          {
            q: 'A parallel circuit has two branches. Branch 1 carries 2 A and Branch 2 carries 3 A. What is the total current from the battery?',
            options: ['1 A', '2.5 A', '5 A', '6 A'],
            answer: 2,
            explanation: 'In parallel, the total current is the sum of currents in each branch: 2 + 3 = 5 A.'
          },
          {
            q: 'Adding more resistors in series to a circuit will:',
            options: [
              'Decrease total resistance',
              'Increase total resistance',
              'Have no effect on resistance',
              'Decrease the voltage'
            ],
            answer: 1,
            explanation: 'In series, resistances add up, so adding more resistors increases the total resistance.'
          },
          {
            q: 'Adding more resistors in parallel to a circuit will:',
            options: [
              'Increase total resistance',
              'Decrease total resistance',
              'Have no effect on resistance',
              'Double the voltage'
            ],
            answer: 1,
            explanation: 'Adding resistors in parallel provides more paths for current, which decreases the total resistance.'
          },
          {
            q: 'An ammeter should be connected in:',
            options: ['Parallel with the component', 'Series with the component', 'Anywhere in the circuit', 'Across the battery only'],
            answer: 1,
            explanation: 'An ammeter must be in series so that all the current flows through it, giving an accurate reading.'
          },
          {
            q: 'A voltmeter should be connected in:',
            options: ['Series with the component', 'Parallel across the component', 'Before the battery', 'In the main loop only'],
            answer: 1,
            explanation: 'A voltmeter is connected in parallel across a component to measure the potential difference across it.'
          },
          {
            q: 'A 10 Ω and a 15 Ω resistor are in series with a 5 V battery. What is the current?',
            options: ['0.2 A', '0.5 A', '2.5 A', '5 A'],
            answer: 0,
            explanation: 'Total R = 10 + 15 = 25 Ω. I = V/R = 5/25 = 0.2 A.'
          },
          {
            q: 'If one bulb in a series circuit breaks, what happens to the other bulbs?',
            options: [
              'They get brighter',
              'They stay the same',
              'They all go out',
              'They get dimmer'
            ],
            answer: 2,
            explanation: 'In series there is only one path for current. If one bulb breaks, the circuit is broken and all bulbs go out.'
          },
          {
            q: 'If one bulb in a parallel circuit breaks, what happens to the other bulbs?',
            options: [
              'They all go out',
              'They stay on',
              'They get dimmer',
              'The circuit is destroyed'
            ],
            answer: 1,
            explanation: 'In parallel, each branch is independent. If one bulb breaks, current still flows through the other branches.'
          },
          {
            q: 'A 6 V battery is connected to two 10 Ω resistors in parallel. What is the total current drawn from the battery?',
            options: ['0.3 A', '0.6 A', '1.2 A', '3 A'],
            answer: 2,
            explanation: 'Total R = 10/2 = 5 Ω. Total I = V/R = 6/5 = 1.2 A (or 0.6 A through each branch).'
          }
        ]
      },
      {
        topic: 'Power & Energy Transfer',
        questions: [
          {
            q: 'What is the equation for electrical power?',
            options: ['P = V/I', 'P = IR', 'P = IV', 'P = I/V'],
            answer: 2,
            explanation: 'Electrical power is calculated using P = IV (power = current × voltage).'
          },
          {
            q: 'A 230 V kettle draws a current of 10 A. What is its power?',
            options: ['23 W', '230 W', '2300 W', '23000 W'],
            answer: 2,
            explanation: 'P = IV = 10 × 230 = 2300 W.'
          },
          {
            q: 'How much energy is transferred by a 2000 W heater in 5 minutes?',
            options: ['10 000 J', '400 J', '600 000 J', '100 000 J'],
            answer: 2,
            explanation: 'E = Pt = 2000 × 300 (5 minutes = 300 seconds) = 600 000 J.'
          },
          {
            q: 'What is the formula P = I²R used to calculate?',
            options: ['Voltage', 'Current', 'Resistance', 'Power'],
            answer: 3,
            explanation: 'P = I²R is an alternative formula for electrical power, derived from P = IV and V = IR.'
          },
          {
            q: 'A 5 A current flows through a 10 Ω resistor. What power is dissipated?',
            options: ['50 W', '100 W', '250 W', '500 W'],
            answer: 2,
            explanation: 'P = I²R = 5² × 10 = 25 × 10 = 250 W.'
          },
          {
            q: 'The unit of electrical energy when using E = Pt (with P in watts and t in seconds) is:',
            options: ['Kilowatt-hour', 'Joule', 'Watt', 'Volt'],
            answer: 1,
            explanation: 'When power is in watts and time in seconds, E = Pt gives energy in joules.'
          },
          {
            q: 'What is a kilowatt-hour (kWh)?',
            options: [
              'A unit of power',
              'A unit of current',
              'A unit of energy used by energy companies',
              'A unit of voltage'
            ],
            answer: 2,
            explanation: 'A kilowatt-hour is a unit of energy equal to 1 kW of power used for 1 hour. It is used for domestic energy bills.'
          },
          {
            q: 'A 3 kW oven is used for 2 hours. How many kWh of energy does it use?',
            options: ['1.5 kWh', '3 kWh', '5 kWh', '6 kWh'],
            answer: 3,
            explanation: 'Energy = power × time = 3 kW × 2 h = 6 kWh.'
          },
          {
            q: 'Electricity costs 15p per kWh. What is the cost of using a 2 kW heater for 3 hours?',
            options: ['30p', '45p', '90p', '£1.50'],
            answer: 2,
            explanation: 'Energy = 2 × 3 = 6 kWh. Cost = 6 × 15 = 90p.'
          },
          {
            q: 'The National Grid transmits electricity at high voltage and low current. Why?',
            options: [
              'To make the cables glow',
              'To reduce energy lost as heat in the cables (P = I²R)',
              'To increase the resistance of the cables',
              'To make it more dangerous'
            ],
            answer: 1,
            explanation: 'Using high voltage allows low current. Since power loss = I²R, a lower current greatly reduces heating in the cables.'
          },
          {
            q: 'What device is used to increase voltage for transmission in the National Grid?',
            options: ['Generator', 'Step-up transformer', 'Step-down transformer', 'Fuse'],
            answer: 1,
            explanation: 'A step-up transformer increases voltage (and decreases current) for efficient long-distance transmission.'
          },
          {
            q: 'What device reduces voltage to safe levels for household use?',
            options: ['Step-up transformer', 'Step-down transformer', 'Circuit breaker', 'Diode'],
            answer: 1,
            explanation: 'A step-down transformer reduces the high transmission voltage to 230 V for safe domestic use.'
          },
          {
            q: 'A current of 2 A flows through a wire with resistance 3 Ω. What is the power wasted as heat?',
            options: ['6 W', '12 W', '18 W', '24 W'],
            answer: 1,
            explanation: 'P = I²R = 2² × 3 = 4 × 3 = 12 W.'
          },
          {
            q: 'How much energy does a 100 W light bulb transfer in 1 hour?',
            options: ['100 J', '6000 J', '36 000 J', '360 000 J'],
            answer: 3,
            explanation: 'E = Pt = 100 × 3600 = 360 000 J.'
          },
          {
            q: 'A 12 V battery transfers 360 J of energy in 30 seconds. What is the current?',
            options: ['0.5 A', '1 A', '12 A', '144 A'],
            answer: 1,
            explanation: 'P = E/t = 360/30 = 12 W. I = P/V = 12/12 = 1 A.'
          },
          {
            q: 'What is the power rating of a device that has 230 V across it and a resistance of 529 Ω?',
            options: ['50 W', '100 W', '200 W', '500 W'],
            answer: 1,
            explanation: 'P = V²/R = 230²/529 = 52900/529 = 100 W.'
          },
          {
            q: 'A 500 W microwave is used for 4 minutes. How much energy is transferred in kJ?',
            options: ['2 kJ', '120 kJ', '2000 kJ', '200 kJ'],
            answer: 1,
            explanation: 'E = Pt = 500 × 240 = 120 000 J = 120 kJ.'
          },
          {
            q: 'The live wire in a UK plug is at approximately:',
            options: ['0 V', '12 V', '230 V', '400 V'],
            answer: 2,
            explanation: 'The UK mains supply provides an alternating voltage of about 230 V through the live wire.'
          },
          {
            q: 'What is the purpose of the earth wire in a three-pin plug?',
            options: [
              'To carry the current to the appliance',
              'To complete the circuit',
              'To provide a safe path to earth if a fault occurs',
              'To increase the voltage'
            ],
            answer: 2,
            explanation: 'The earth wire provides a low-resistance path to earth, carrying a large fault current that blows the fuse and disconnects the supply.'
          },
          {
            q: 'A fuse in a plug is rated at 3 A. The appliance normally draws 2 A. If a fault causes 10 A to flow, what happens?',
            options: [
              'Nothing, the fuse can handle it',
              'The fuse melts and breaks the circuit',
              'The earth wire melts',
              'The voltage increases'
            ],
            answer: 1,
            explanation: 'The 10 A fault current exceeds the 3 A fuse rating, so the fuse wire melts, breaking the circuit and protecting the user.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // SECTION 3: PARTICLE MODEL OF MATTER
  // ============================================================
  {
    section: 'Particle Model of Matter',
    icon: '🌡️',
    color: '#DC2626',
    topics: [
      {
        topic: 'Density & States of Matter',
        questions: [
          {
            q: 'What is the formula for density?',
            options: ['ρ = m × V', 'ρ = m/V', 'ρ = V/m', 'ρ = m + V'],
            answer: 1,
            explanation: 'Density = mass/volume (ρ = m/V), measured in kg/m³ or g/cm³.'
          },
          {
            q: 'A block has a mass of 500 g and a volume of 250 cm³. What is its density?',
            options: ['0.5 g/cm³', '2 g/cm³', '125 g/cm³', '750 g/cm³'],
            answer: 1,
            explanation: 'ρ = m/V = 500/250 = 2 g/cm³.'
          },
          {
            q: 'Which state of matter has particles that are closely packed in a regular arrangement?',
            options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
            answer: 0,
            explanation: 'In a solid, particles are closely packed in a fixed, regular arrangement and vibrate about fixed positions.'
          },
          {
            q: 'In which state of matter are particles far apart and moving randomly at high speed?',
            options: ['Solid', 'Liquid', 'Gas', 'All states'],
            answer: 2,
            explanation: 'In a gas, particles are far apart, move randomly at high speeds, and fill the container they are in.'
          },
          {
            q: 'Why do gases have a much lower density than solids?',
            options: [
              'Gas particles are heavier',
              'Gas particles are much further apart',
              'Gas particles are smaller',
              'Gas particles don\'t move'
            ],
            answer: 1,
            explanation: 'Gas particles are much further apart than in solids, so the same mass occupies a much larger volume, giving a lower density.'
          },
          {
            q: 'How would you measure the density of an irregular solid?',
            options: [
              'Use a ruler to measure dimensions',
              'Use a displacement method with a eureka can',
              'Weigh it and multiply by 10',
              'Heat it until it melts'
            ],
            answer: 1,
            explanation: 'For irregular objects, use water displacement (eureka can) to find the volume, then calculate density = mass/volume.'
          },
          {
            q: 'What is the change of state from solid to liquid called?',
            options: ['Evaporation', 'Condensation', 'Melting', 'Sublimation'],
            answer: 2,
            explanation: 'Melting is the change of state from solid to liquid, occurring at the melting point.'
          },
          {
            q: 'What is the change of state from gas to liquid called?',
            options: ['Evaporation', 'Condensation', 'Melting', 'Boiling'],
            answer: 1,
            explanation: 'Condensation is the change of state from gas to liquid, releasing energy to the surroundings.'
          },
          {
            q: 'During a change of state, what happens to the temperature of the substance?',
            options: [
              'It increases rapidly',
              'It decreases rapidly',
              'It remains constant',
              'It fluctuates randomly'
            ],
            answer: 2,
            explanation: 'During a change of state, temperature remains constant because energy is used to break or form intermolecular bonds, not to change temperature.'
          },
          {
            q: 'An object has a density of 800 kg/m³ and a volume of 0.5 m³. What is its mass?',
            options: ['400 kg', '800 kg', '1600 kg', '0.000625 kg'],
            answer: 0,
            explanation: 'm = ρ × V = 800 × 0.5 = 400 kg.'
          },
          {
            q: 'Which of the following has the highest density?',
            options: ['Air', 'Water', 'Steel', 'Wood'],
            answer: 2,
            explanation: 'Steel has a density of about 7800 kg/m³, much higher than water (1000 kg/m³), wood (~500 kg/m³), or air (~1.2 kg/m³).'
          },
          {
            q: 'Sublimation is the change of state from:',
            options: ['Solid to liquid', 'Liquid to gas', 'Solid directly to gas', 'Gas to solid'],
            answer: 2,
            explanation: 'Sublimation is when a solid changes directly to a gas without passing through the liquid state.'
          },
          {
            q: 'What happens to the spacing between particles when a liquid changes to a gas?',
            options: [
              'Particles move closer together',
              'Spacing stays the same',
              'Particles move much further apart',
              'Particles stop moving'
            ],
            answer: 2,
            explanation: 'When a liquid becomes a gas, particles gain enough energy to overcome attractions and spread far apart.'
          },
          {
            q: 'A cube has sides of 2 cm and a mass of 24 g. What is its density?',
            options: ['3 g/cm³', '6 g/cm³', '12 g/cm³', '48 g/cm³'],
            answer: 0,
            explanation: 'Volume = 2³ = 8 cm³. Density = 24/8 = 3 g/cm³.'
          },
          {
            q: 'Which particle model best describes a liquid?',
            options: [
              'Fixed particles in a regular pattern',
              'Closely packed but able to slide past each other',
              'Far apart and moving rapidly in all directions',
              'Not moving at all'
            ],
            answer: 1,
            explanation: 'In a liquid, particles are close together but not in a fixed arrangement; they can flow and slide past each other.'
          },
          {
            q: 'What happens to the mass of water when it freezes into ice?',
            options: ['It increases', 'It decreases', 'It stays the same', 'It doubles'],
            answer: 2,
            explanation: 'Mass is conserved during a change of state. The same number of particles are present, so mass stays the same.'
          },
          {
            q: 'An object will float in water if its density is:',
            options: [
              'Greater than 1000 kg/m³',
              'Less than 1000 kg/m³',
              'Exactly 1000 kg/m³',
              'Greater than 2000 kg/m³'
            ],
            answer: 1,
            explanation: 'Water has a density of 1000 kg/m³. Objects with lower density float; objects with higher density sink.'
          },
          {
            q: 'What is the density of a liquid if 200 cm³ has a mass of 160 g?',
            options: ['0.8 g/cm³', '1.25 g/cm³', '40 g/cm³', '32000 g/cm³'],
            answer: 0,
            explanation: 'ρ = m/V = 160/200 = 0.8 g/cm³.'
          },
          {
            q: 'In the particle model, what provides the evidence that particles are constantly moving?',
            options: ['Convection', 'Conduction', 'Brownian motion', 'Radiation'],
            answer: 2,
            explanation: 'Brownian motion (random movement of smoke particles hit by invisible air molecules) provides evidence that particles are in constant random motion.'
          },
          {
            q: 'Convert a density of 2.5 g/cm³ to kg/m³.',
            options: ['0.0025 kg/m³', '25 kg/m³', '250 kg/m³', '2500 kg/m³'],
            answer: 3,
            explanation: 'To convert g/cm³ to kg/m³, multiply by 1000. So 2.5 × 1000 = 2500 kg/m³.'
          }
        ]
      },
      {
        topic: 'Internal Energy & Specific Heat/Latent Heat',
        questions: [
          {
            q: 'What is internal energy?',
            options: [
              'The total kinetic energy of all particles',
              'The total kinetic and potential energy of all particles in a system',
              'The temperature of the system',
              'The gravitational potential energy of the object'
            ],
            answer: 1,
            explanation: 'Internal energy is the total kinetic energy and potential energy of all the particles in a system.'
          },
          {
            q: 'When a substance is heated, what happens to its internal energy?',
            options: ['It decreases', 'It stays the same', 'It increases', 'It is destroyed'],
            answer: 2,
            explanation: 'Heating a substance increases the internal energy of its particles (they gain kinetic and/or potential energy).'
          },
          {
            q: 'What is the formula for calculating energy change due to temperature change?',
            options: ['E = mcΔθ', 'E = mL', 'E = ½mv²', 'E = Pt'],
            answer: 0,
            explanation: 'The energy change for a temperature change is E = mcΔθ (mass × specific heat capacity × temperature change).'
          },
          {
            q: 'How much energy is needed to raise the temperature of 2 kg of water by 10°C? (Specific heat capacity of water = 4200 J/kg°C)',
            options: ['420 J', '8400 J', '42 000 J', '84 000 J'],
            answer: 3,
            explanation: 'E = mcΔθ = 2 × 4200 × 10 = 84 000 J.'
          },
          {
            q: 'What is specific heat capacity?',
            options: [
              'The energy needed to melt 1 kg of a substance',
              'The energy needed to raise 1 kg of a substance by 1°C',
              'The temperature at which a substance boils',
              'The energy needed to change state'
            ],
            answer: 1,
            explanation: 'Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1°C.'
          },
          {
            q: 'Specific latent heat of fusion is the energy needed to:',
            options: [
              'Raise the temperature of 1 kg by 1°C',
              'Change 1 kg from solid to liquid at constant temperature',
              'Change 1 kg from liquid to gas at constant temperature',
              'Cool 1 kg by 1°C'
            ],
            answer: 1,
            explanation: 'Specific latent heat of fusion is the energy needed to change 1 kg of a substance from solid to liquid without changing temperature.'
          },
          {
            q: 'Specific latent heat of vaporisation is the energy needed to:',
            options: [
              'Melt 1 kg of a substance',
              'Freeze 1 kg of a substance',
              'Change 1 kg from liquid to gas at constant temperature',
              'Raise the temperature by 1°C'
            ],
            answer: 2,
            explanation: 'Specific latent heat of vaporisation is the energy needed to change 1 kg of a substance from liquid to gas at constant temperature.'
          },
          {
            q: 'The latent heat of fusion of ice is 334 000 J/kg. How much energy is needed to melt 0.5 kg of ice at 0°C?',
            options: ['167 000 J', '334 000 J', '668 000 J', '16 700 J'],
            answer: 0,
            explanation: 'E = mL = 0.5 × 334 000 = 167 000 J.'
          },
          {
            q: 'Why is the specific latent heat of vaporisation usually much larger than the latent heat of fusion for the same substance?',
            options: [
              'Because more particles need to be heated',
              'Because more energy is needed to completely separate particles in vaporisation',
              'Because the temperature change is greater',
              'Because gases are heavier than liquids'
            ],
            answer: 1,
            explanation: 'Vaporisation requires completely overcoming intermolecular forces to separate particles, which needs more energy than just loosening them in melting.'
          },
          {
            q: 'During boiling, what happens to the temperature of the liquid?',
            options: ['It increases', 'It decreases', 'It remains constant', 'It fluctuates'],
            answer: 2,
            explanation: 'During boiling, the temperature stays constant because all energy input goes into breaking intermolecular bonds, not raising temperature.'
          },
          {
            q: 'When a gas condenses, energy is:',
            options: [
              'Absorbed from the surroundings',
              'Released to the surroundings',
              'Destroyed',
              'Created'
            ],
            answer: 1,
            explanation: 'Condensation is an exothermic process — energy is released to the surroundings as particles form bonds.'
          },
          {
            q: 'A 0.3 kg block of metal is heated from 20°C to 70°C using 6000 J of energy. What is the specific heat capacity?',
            options: ['200 J/kg°C', '400 J/kg°C', '600 J/kg°C', '900 J/kg°C'],
            answer: 1,
            explanation: 'c = E/(mΔθ) = 6000/(0.3 × 50) = 6000/15 = 400 J/kg°C.'
          },
          {
            q: 'Which substance has the highest specific heat capacity?',
            options: ['Copper (390 J/kg°C)', 'Aluminium (900 J/kg°C)', 'Water (4200 J/kg°C)', 'Iron (450 J/kg°C)'],
            answer: 2,
            explanation: 'Water has the highest specific heat capacity of common substances at 4200 J/kg°C, meaning it takes a lot of energy to heat.'
          },
          {
            q: 'On a heating curve (temperature vs time), what does a flat section represent?',
            options: [
              'The substance is cooling down',
              'A change of state is occurring',
              'The heater has been switched off',
              'The particles have stopped moving'
            ],
            answer: 1,
            explanation: 'A flat section on a heating curve indicates a change of state where temperature stays constant despite continued heating.'
          },
          {
            q: 'What happens to the kinetic energy of particles when a substance is heated (without changing state)?',
            options: ['It decreases', 'It stays the same', 'It increases', 'It becomes zero'],
            answer: 2,
            explanation: 'When heated without changing state, the particles gain kinetic energy and move faster, causing the temperature to rise.'
          },
          {
            q: 'What type of energy do particles gain during a change of state?',
            options: ['Kinetic energy', 'Potential energy', 'Nuclear energy', 'Chemical energy'],
            answer: 1,
            explanation: 'During a change of state, particles gain (or lose) potential energy as bonds are broken (or formed), not kinetic energy (temperature stays constant).'
          },
          {
            q: 'How much energy is needed to heat 5 kg of aluminium from 25°C to 75°C? (c = 900 J/kg°C)',
            options: ['22 500 J', '112 500 J', '225 000 J', '337 500 J'],
            answer: 2,
            explanation: 'E = mcΔθ = 5 × 900 × 50 = 225 000 J.'
          },
          {
            q: 'Why does sweating cool you down?',
            options: [
              'Sweat is cold',
              'Evaporation of sweat removes latent heat from the skin',
              'Sweat increases your internal energy',
              'Sweat reflects heat radiation'
            ],
            answer: 1,
            explanation: 'Evaporation requires latent heat, which is taken from the skin, cooling the body down.'
          },
          {
            q: 'When water freezes, the particles:',
            options: [
              'Speed up and spread out',
              'Slow down and form a regular arrangement',
              'Stop moving completely',
              'Break apart into atoms'
            ],
            answer: 1,
            explanation: 'When freezing, particles lose kinetic energy, slow down, and form a fixed regular arrangement (solid structure).'
          },
          {
            q: 'A 4 kW heater is used to heat 10 kg of water. How long will it take to raise the temperature by 20°C? (c = 4200 J/kg°C)',
            options: ['105 s', '210 s', '420 s', '840 s'],
            answer: 1,
            explanation: 'E = mcΔθ = 10 × 4200 × 20 = 840 000 J. t = E/P = 840 000/4000 = 210 s.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // SECTION 4: ATOMIC STRUCTURE & RADIATION
  // ============================================================
  {
    section: 'Atomic Structure & Radiation',
    icon: '☢️',
    color: '#9333EA',
    topics: [
      {
        topic: 'Atomic Models & Radioactive Decay',
        questions: [
          {
            q: 'What did J.J. Thomson\'s "plum pudding" model suggest about the atom?',
            options: [
              'Atoms have a central nucleus',
              'Atoms are a ball of positive charge with electrons embedded in it',
              'Atoms are mostly empty space',
              'Atoms contain neutrons'
            ],
            answer: 1,
            explanation: 'Thomson\'s model proposed that the atom was a sphere of positive charge with negatively charged electrons scattered throughout (like plums in a pudding).'
          },
          {
            q: 'What did the Rutherford alpha scattering experiment show?',
            options: [
              'Atoms are solid spheres',
              'The atom has a small, dense, positively charged nucleus',
              'Electrons orbit in fixed shells',
              'Neutrons exist inside the atom'
            ],
            answer: 1,
            explanation: 'Most alpha particles passed straight through the gold foil, but a few were deflected, showing the atom is mostly empty space with a small, dense, positive nucleus.'
          },
          {
            q: 'Who proposed that electrons orbit the nucleus in fixed energy levels?',
            options: ['Thomson', 'Rutherford', 'Bohr', 'Chadwick'],
            answer: 2,
            explanation: 'Niels Bohr proposed the model where electrons orbit the nucleus in specific, fixed energy levels (shells).'
          },
          {
            q: 'What is the relative charge of a proton?',
            options: ['+2', '+1', '0', '-1'],
            answer: 1,
            explanation: 'A proton has a relative charge of +1.'
          },
          {
            q: 'The atomic number of an element tells you:',
            options: [
              'The number of neutrons',
              'The number of protons',
              'The total number of protons and neutrons',
              'The number of electron shells'
            ],
            answer: 1,
            explanation: 'The atomic number is the number of protons in the nucleus, which defines the element.'
          },
          {
            q: 'The mass number of an atom is:',
            options: [
              'The number of protons only',
              'The number of neutrons only',
              'The total number of protons and neutrons',
              'The number of electrons'
            ],
            answer: 2,
            explanation: 'The mass number = protons + neutrons (the total number of nucleons).'
          },
          {
            q: 'What are isotopes?',
            options: [
              'Atoms of different elements',
              'Atoms of the same element with different numbers of neutrons',
              'Atoms with different numbers of protons',
              'Atoms with no electrons'
            ],
            answer: 1,
            explanation: 'Isotopes are atoms of the same element (same number of protons) but with different numbers of neutrons.'
          },
          {
            q: 'Alpha (α) radiation consists of:',
            options: [
              'High-energy electromagnetic waves',
              'High-speed electrons',
              'Two protons and two neutrons (a helium nucleus)',
              'Neutrons only'
            ],
            answer: 2,
            explanation: 'An alpha particle is a helium nucleus, consisting of 2 protons and 2 neutrons.'
          },
          {
            q: 'Beta (β) radiation consists of:',
            options: [
              'A helium nucleus',
              'A high-speed electron emitted from the nucleus',
              'An electromagnetic wave',
              'A proton'
            ],
            answer: 1,
            explanation: 'A beta particle is a high-speed electron emitted from the nucleus when a neutron converts to a proton.'
          },
          {
            q: 'Gamma (γ) radiation is:',
            options: [
              'A particle with mass',
              'A helium nucleus',
              'An electromagnetic wave with very short wavelength',
              'A slow-moving neutron'
            ],
            answer: 2,
            explanation: 'Gamma radiation is a high-energy electromagnetic wave with no mass and no charge, emitted from an unstable nucleus.'
          },
          {
            q: 'Which type of radiation is the most ionising?',
            options: ['Alpha', 'Beta', 'Gamma', 'They are all equally ionising'],
            answer: 0,
            explanation: 'Alpha particles are the most ionising because they are large, slow, and strongly charged (+2), so they interact strongly with atoms.'
          },
          {
            q: 'Which type of radiation has the greatest penetrating power?',
            options: ['Alpha', 'Beta', 'Gamma', 'All are equal'],
            answer: 2,
            explanation: 'Gamma rays are the most penetrating; they can pass through most materials and are only significantly reduced by thick lead or concrete.'
          },
          {
            q: 'Alpha radiation is stopped by:',
            options: ['Thick lead', 'Thin aluminium', 'A sheet of paper or skin', 'Nothing can stop it'],
            answer: 2,
            explanation: 'Alpha particles are large and highly ionising, so they are stopped by just a few centimetres of air, paper, or skin.'
          },
          {
            q: 'When a nucleus emits an alpha particle, what happens to its atomic number and mass number?',
            options: [
              'Atomic number decreases by 2, mass number decreases by 4',
              'Atomic number increases by 1, mass number stays the same',
              'Both decrease by 1',
              'Atomic number decreases by 4, mass number decreases by 2'
            ],
            answer: 0,
            explanation: 'Alpha emission loses 2 protons and 2 neutrons, so atomic number drops by 2 and mass number drops by 4.'
          },
          {
            q: 'When a nucleus emits a beta particle, what happens to its atomic number?',
            options: [
              'It decreases by 1',
              'It increases by 1',
              'It stays the same',
              'It increases by 2'
            ],
            answer: 1,
            explanation: 'In beta decay, a neutron converts to a proton (emitting an electron). The atomic number increases by 1 while the mass number stays the same.'
          },
          {
            q: 'What is radioactive decay?',
            options: [
              'A chemical reaction',
              'The spontaneous emission of radiation from an unstable nucleus',
              'Burning of radioactive material',
              'Absorption of radiation by a nucleus'
            ],
            answer: 1,
            explanation: 'Radioactive decay is the random, spontaneous process by which an unstable nucleus emits radiation to become more stable.'
          },
          {
            q: 'Radioactive decay is described as random because:',
            options: [
              'It can be predicted exactly',
              'It happens at regular intervals',
              'It is impossible to predict which nucleus will decay next',
              'It only happens when heated'
            ],
            answer: 2,
            explanation: 'Radioactive decay is random — you cannot predict which individual nucleus will decay or when, but you can predict the average rate for a large sample.'
          },
          {
            q: 'Which particle was discovered by James Chadwick in 1932?',
            options: ['Proton', 'Electron', 'Neutron', 'Positron'],
            answer: 2,
            explanation: 'James Chadwick discovered the neutron in 1932, completing the basic model of the atom.'
          },
          {
            q: 'What is the charge on a beta particle?',
            options: ['+2', '+1', '0', '-1'],
            answer: 3,
            explanation: 'A beta particle is an electron, which has a relative charge of -1.'
          },
          {
            q: 'Carbon-14 has 6 protons. How many neutrons does it have?',
            options: ['6', '8', '14', '20'],
            answer: 1,
            explanation: 'Neutrons = mass number − atomic number = 14 − 6 = 8 neutrons.'
          }
        ]
      },
      {
        topic: 'Half-Life & Uses of Radiation',
        questions: [
          {
            q: 'What is half-life?',
            options: [
              'The time taken for all atoms to decay',
              'The time for half the unstable nuclei to decay',
              'The time for the radiation to become safe',
              'Half the lifetime of a radioactive source'
            ],
            answer: 1,
            explanation: 'Half-life is the time taken for half the unstable nuclei in a sample to decay (or for the count rate to halve).'
          },
          {
            q: 'A sample has an activity of 800 Bq. After 3 half-lives, what is the activity?',
            options: ['400 Bq', '200 Bq', '100 Bq', '50 Bq'],
            answer: 2,
            explanation: '800 → 400 → 200 → 100 Bq after 3 half-lives (halved three times).'
          },
          {
            q: 'A radioactive isotope has a half-life of 6 hours. After 24 hours, what fraction of the original sample remains?',
            options: ['1/2', '1/4', '1/8', '1/16'],
            answer: 3,
            explanation: '24 hours = 4 half-lives. Fraction remaining = (1/2)⁴ = 1/16.'
          },
          {
            q: 'Which type of radiation is used in smoke detectors?',
            options: ['Alpha', 'Beta', 'Gamma', 'X-rays'],
            answer: 0,
            explanation: 'Alpha particles ionise air in the detector, creating a small current. Smoke absorbs the alpha particles, reducing the current and triggering the alarm.'
          },
          {
            q: 'Gamma radiation is used to sterilise medical equipment because:',
            options: [
              'It is the least dangerous',
              'It is highly penetrating and kills bacteria',
              'It has no ionising effect',
              'It makes equipment radioactive'
            ],
            answer: 1,
            explanation: 'Gamma rays are highly penetrating and can kill bacteria and viruses on sealed medical equipment without damaging or making it radioactive.'
          },
          {
            q: 'Which type of radiation is best for use as a medical tracer inside the body?',
            options: ['Alpha', 'Beta', 'Gamma', 'Neutron'],
            answer: 2,
            explanation: 'Gamma rays can pass through the body and be detected externally. Alpha would be absorbed and beta is not penetrating enough for most uses.'
          },
          {
            q: 'Beta radiation is used to monitor the thickness of paper in a factory. Why not alpha?',
            options: [
              'Alpha is too expensive',
              'Alpha would be stopped by even thin paper, making it useless for monitoring',
              'Alpha radiation is not radioactive',
              'Beta is cheaper'
            ],
            answer: 1,
            explanation: 'Alpha particles are stopped by paper, so they cannot pass through to be detected. Beta particles can partially pass through and changes in thickness affect the count rate.'
          },
          {
            q: 'What is background radiation?',
            options: [
              'Radiation from nuclear power stations only',
              'Low-level radiation that is always present in the environment',
              'Radiation from mobile phones',
              'Radiation from the Sun only'
            ],
            answer: 1,
            explanation: 'Background radiation is the low-level radiation present everywhere from natural sources (rocks, cosmic rays, radon gas) and some artificial sources.'
          },
          {
            q: 'The main source of background radiation in the UK is:',
            options: ['Nuclear power stations', 'Medical X-rays', 'Radon gas from rocks', 'Mobile phones'],
            answer: 2,
            explanation: 'Radon gas, released from uranium in rocks and soil, is the largest contributor to background radiation in the UK.'
          },
          {
            q: 'A radioactive source has an activity of 1200 Bq. After 2 half-lives, the activity is 300 Bq. What is the half-life?',
            options: ['Cannot be determined from this information', 'The data is inconsistent', '150 minutes', 'Any value is possible'],
            answer: 1,
            explanation: 'After 2 half-lives from 1200 Bq: 1200 → 600 → 300. The activity should be 300 Bq after 2 half-lives, so the data is actually consistent. However, without knowing the time elapsed, the half-life value cannot be determined.'
          },
          {
            q: 'Nuclear fission is:',
            options: [
              'The joining of small nuclei to form a larger one',
              'The splitting of a large unstable nucleus into two smaller nuclei',
              'The emission of gamma radiation only',
              'A chemical reaction'
            ],
            answer: 1,
            explanation: 'Nuclear fission is the splitting of a large unstable nucleus (like uranium-235) into two smaller nuclei, releasing energy and neutrons.'
          },
          {
            q: 'Nuclear fusion is:',
            options: [
              'The splitting of a large nucleus',
              'The joining of two small nuclei to form a larger one',
              'A type of radioactive decay',
              'Burning nuclear fuel'
            ],
            answer: 1,
            explanation: 'Nuclear fusion is the joining of two light nuclei (like hydrogen) to form a heavier nucleus, releasing large amounts of energy. This is the process in stars.'
          },
          {
            q: 'In a nuclear power station, a chain reaction is maintained by:',
            options: [
              'Adding more heat',
              'Released neutrons causing further fission in other nuclei',
              'Using gamma radiation',
              'Cooling the reactor down'
            ],
            answer: 1,
            explanation: 'Each fission event releases neutrons, which can hit other uranium nuclei and cause further fission, creating a chain reaction.'
          },
          {
            q: 'What is nuclear waste?',
            options: [
              'Waste from chemical reactions in power stations',
              'Radioactive materials left over from nuclear processes',
              'Ordinary household waste',
              'Waste heat only'
            ],
            answer: 1,
            explanation: 'Nuclear waste is radioactive material produced by nuclear reactors and other processes. High-level waste remains dangerous for thousands of years.'
          },
          {
            q: 'A sample starts with 6400 unstable atoms. After 4 half-lives, how many unstable atoms remain?',
            options: ['1600', '800', '400', '200'],
            answer: 2,
            explanation: '6400 → 3200 → 1600 → 800 → 400 after 4 half-lives.'
          },
          {
            q: 'Why is irradiation different from contamination?',
            options: [
              'They are the same thing',
              'Irradiation exposes an object to radiation; contamination means radioactive material is on/in the object',
              'Contamination is always safe',
              'Irradiation always makes objects radioactive'
            ],
            answer: 1,
            explanation: 'Irradiation is exposure to radiation from an external source (the object does not become radioactive). Contamination is when radioactive material gets onto or into an object.'
          },
          {
            q: 'Which precaution should be taken when handling radioactive sources in a school lab?',
            options: [
              'Hold the source as close to your body as possible',
              'Use tongs, point away from people, minimise exposure time',
              'No precautions are needed for small sources',
              'Wear sunglasses'
            ],
            answer: 1,
            explanation: 'Radioactive sources should be handled with tongs (distance), pointed away from people, and exposure time should be minimised.'
          },
          {
            q: 'A radioactive tracer used in medicine should have a half-life that is:',
            options: [
              'Very long (thousands of years)',
              'Very short (seconds)',
              'Long enough to carry out the procedure but short enough to decay quickly afterwards',
              'Infinite'
            ],
            answer: 2,
            explanation: 'Medical tracers need a half-life long enough to complete the medical procedure but short enough that the radiation doesn\'t linger in the patient\'s body.'
          },
          {
            q: 'What is the activity of a radioactive source measured in?',
            options: ['Sieverts (Sv)', 'Becquerels (Bq)', 'Grays (Gy)', 'Joules (J)'],
            answer: 1,
            explanation: 'Activity is the rate of decay of a radioactive source, measured in becquerels (Bq). 1 Bq = 1 decay per second.'
          },
          {
            q: 'The count rate from a radioactive source drops from 480 counts per minute to 60 counts per minute in 9 hours. What is the half-life?',
            options: ['1.5 hours', '3 hours', '4.5 hours', '9 hours'],
            answer: 1,
            explanation: '480 → 240 → 120 → 60 = 3 half-lives in 9 hours. Half-life = 9/3 = 3 hours.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // SECTION 5: FORCES
  // ============================================================
  {
    section: 'Forces',
    icon: '🏗️',
    color: '#059669',
    topics: [
      {
        topic: 'Forces & Motion (Newton\'s Laws, F=ma)',
        questions: [
          {
            q: 'What is the unit of force?',
            options: ['Joule (J)', 'Watt (W)', 'Newton (N)', 'Pascal (Pa)'],
            answer: 2,
            explanation: 'Force is measured in newtons (N).'
          },
          {
            q: 'Newton\'s First Law states that an object will remain at rest or continue moving at constant velocity unless:',
            options: [
              'It runs out of energy',
              'A resultant force acts on it',
              'Gravity pulls it down',
              'It is in a vacuum'
            ],
            answer: 1,
            explanation: 'Newton\'s First Law: an object remains at rest or in uniform motion unless acted upon by a resultant (net) force.'
          },
          {
            q: 'A car is travelling at a constant speed in a straight line. What can be said about the forces acting on it?',
            options: [
              'The driving force is greater than friction',
              'There are no forces acting on it',
              'The resultant force is zero',
              'The car is decelerating'
            ],
            answer: 2,
            explanation: 'Constant speed in a straight line means no acceleration, so the resultant force must be zero (balanced forces).'
          },
          {
            q: 'Newton\'s Second Law is expressed as:',
            options: ['F = mv', 'F = ma', 'F = mg', 'F = mΔv'],
            answer: 1,
            explanation: 'Newton\'s Second Law: Force = mass × acceleration (F = ma).'
          },
          {
            q: 'Calculate the force needed to accelerate a 1500 kg car at 2 m/s².',
            options: ['750 N', '1500 N', '3000 N', '4500 N'],
            answer: 2,
            explanation: 'F = ma = 1500 × 2 = 3000 N.'
          },
          {
            q: 'A 60 kg person stands on a scale in a lift. What is their weight? (g = 10 N/kg)',
            options: ['6 N', '60 N', '600 N', '6000 N'],
            answer: 2,
            explanation: 'Weight = mg = 60 × 10 = 600 N.'
          },
          {
            q: 'What is the acceleration of a 500 kg object with a resultant force of 2000 N?',
            options: ['0.25 m/s²', '2 m/s²', '4 m/s²', '1000 m/s²'],
            answer: 2,
            explanation: 'a = F/m = 2000/500 = 4 m/s².'
          },
          {
            q: 'A parachutist is falling at constant velocity (terminal velocity). Which statement is correct?',
            options: [
              'Weight is greater than air resistance',
              'Air resistance is greater than weight',
              'Weight equals air resistance',
              'There are no forces acting'
            ],
            answer: 2,
            explanation: 'At terminal velocity, the forces are balanced: air resistance equals weight, so there is no acceleration.'
          },
          {
            q: 'Newton\'s Third Law states:',
            options: [
              'Every action has an equal and opposite reaction',
              'Force equals mass times acceleration',
              'Objects at rest stay at rest',
              'Energy is always conserved'
            ],
            answer: 0,
            explanation: 'Newton\'s Third Law: for every action force, there is an equal and opposite reaction force acting on a different object.'
          },
          {
            q: 'A book rests on a table. The book pushes down on the table with 10 N. According to Newton\'s Third Law:',
            options: [
              'The table pushes up on the book with 5 N',
              'The table pushes up on the book with 10 N',
              'The table pushes down on the book with 10 N',
              'No reaction force exists'
            ],
            answer: 1,
            explanation: 'Newton\'s Third Law: the table exerts an equal and opposite reaction force of 10 N upward on the book.'
          },
          {
            q: 'What is the difference between mass and weight?',
            options: [
              'They are the same thing',
              'Mass is measured in newtons, weight in kilograms',
              'Mass is the amount of matter (kg), weight is a gravitational force (N)',
              'Weight never changes, mass does'
            ],
            answer: 2,
            explanation: 'Mass is the amount of matter in an object (measured in kg), while weight is the gravitational force on the object (measured in N).'
          },
          {
            q: 'A car accelerates from 10 m/s to 30 m/s in 5 seconds. What is its acceleration?',
            options: ['2 m/s²', '4 m/s²', '6 m/s²', '8 m/s²'],
            answer: 1,
            explanation: 'a = (v − u)/t = (30 − 10)/5 = 20/5 = 4 m/s².'
          },
          {
            q: 'On a velocity-time graph, what does the area under the line represent?',
            options: ['Acceleration', 'Force', 'Distance travelled', 'Speed'],
            answer: 2,
            explanation: 'The area under a velocity-time graph gives the distance (displacement) travelled.'
          },
          {
            q: 'On a velocity-time graph, what does the gradient represent?',
            options: ['Speed', 'Distance', 'Acceleration', 'Force'],
            answer: 2,
            explanation: 'The gradient (slope) of a velocity-time graph gives the acceleration of the object.'
          },
          {
            q: 'A resultant force of 10 N acts on a 2 kg object at rest. What is its velocity after 4 seconds?',
            options: ['5 m/s', '10 m/s', '20 m/s', '40 m/s'],
            answer: 2,
            explanation: 'a = F/m = 10/2 = 5 m/s². v = u + at = 0 + 5 × 4 = 20 m/s.'
          },
          {
            q: 'What is the resultant force on a car if the engine provides 5000 N forward and friction is 3000 N backwards?',
            options: ['2000 N forward', '8000 N forward', '3000 N backward', '5000 N forward'],
            answer: 0,
            explanation: 'Resultant = 5000 − 3000 = 2000 N in the forward direction.'
          },
          {
            q: 'A distance-time graph shows a straight line. What does this tell you about the motion?',
            options: [
              'The object is accelerating',
              'The object is stationary',
              'The object is moving at constant speed',
              'The object is decelerating'
            ],
            answer: 2,
            explanation: 'A straight line on a distance-time graph means constant speed (the object covers equal distances in equal times).'
          },
          {
            q: 'What does a horizontal line on a velocity-time graph represent?',
            options: [
              'The object is accelerating',
              'The object is stationary',
              'The object is moving at constant velocity',
              'The object is decelerating'
            ],
            answer: 2,
            explanation: 'A horizontal line on a velocity-time graph means constant velocity (zero acceleration).'
          },
          {
            q: 'A force of 50 N is applied to a 10 kg trolley on a frictionless surface. What is the acceleration?',
            options: ['0.2 m/s²', '5 m/s²', '50 m/s²', '500 m/s²'],
            answer: 1,
            explanation: 'a = F/m = 50/10 = 5 m/s².'
          },
          {
            q: 'An astronaut has a mass of 80 kg. On the Moon (g = 1.6 N/kg), what is their weight?',
            options: ['80 N', '128 N', '800 N', '50 N'],
            answer: 1,
            explanation: 'Weight = mg = 80 × 1.6 = 128 N.'
          }
        ]
      },
      {
        topic: 'Momentum & Stopping Distances',
        questions: [
          {
            q: 'What is the formula for momentum?',
            options: ['p = Ft', 'p = mv', 'p = ma', 'p = ½mv²'],
            answer: 1,
            explanation: 'Momentum = mass × velocity (p = mv), measured in kg m/s.'
          },
          {
            q: 'Calculate the momentum of a 1200 kg car travelling at 15 m/s.',
            options: ['80 kg m/s', '1200 kg m/s', '15 000 kg m/s', '18 000 kg m/s'],
            answer: 3,
            explanation: 'p = mv = 1200 × 15 = 18 000 kg m/s.'
          },
          {
            q: 'The law of conservation of momentum states that in a closed system:',
            options: [
              'Momentum is always increasing',
              'Total momentum before = total momentum after an event',
              'Momentum is always zero',
              'Momentum is converted to energy'
            ],
            answer: 1,
            explanation: 'In a closed system with no external forces, total momentum is conserved: the total momentum before equals the total momentum after a collision or explosion.'
          },
          {
            q: 'A 2 kg ball moving at 3 m/s collides with a stationary 1 kg ball. They stick together. What is their velocity after the collision?',
            options: ['1 m/s', '2 m/s', '3 m/s', '6 m/s'],
            answer: 1,
            explanation: 'Momentum before = 2 × 3 + 1 × 0 = 6 kg m/s. After: (2 + 1) × v = 6, so v = 6/3 = 2 m/s.'
          },
          {
            q: 'Stopping distance is equal to:',
            options: [
              'Thinking distance only',
              'Braking distance only',
              'Thinking distance + braking distance',
              'Speed × time'
            ],
            answer: 2,
            explanation: 'Stopping distance = thinking distance + braking distance.'
          },
          {
            q: 'Which of these increases thinking distance?',
            options: [
              'Wet roads',
              'Worn brakes',
              'Tiredness or alcohol',
              'Worn tyres'
            ],
            answer: 2,
            explanation: 'Thinking distance depends on reaction time. Tiredness, alcohol, drugs, and distractions all increase reaction time and therefore thinking distance.'
          },
          {
            q: 'Which of these increases braking distance?',
            options: [
              'Using a mobile phone',
              'Tiredness',
              'Wet or icy roads',
              'Being distracted'
            ],
            answer: 2,
            explanation: 'Braking distance is affected by road conditions (wet, icy), tyre condition, brake condition, and speed. Wet/icy roads reduce friction.'
          },
          {
            q: 'If a car\'s speed doubles, what happens to its braking distance?',
            options: [
              'It doubles',
              'It triples',
              'It quadruples (×4)',
              'It stays the same'
            ],
            answer: 2,
            explanation: 'Braking distance is proportional to speed squared. If speed doubles, braking distance increases by a factor of 4.'
          },
          {
            q: 'Why do car crumple zones improve safety in a collision?',
            options: [
              'They make the car lighter',
              'They increase the time of impact, reducing the force on passengers',
              'They make the car faster',
              'They reduce the car\'s momentum'
            ],
            answer: 1,
            explanation: 'Crumple zones increase the time over which the momentum changes, which reduces the force (F = Δp/Δt) on passengers.'
          },
          {
            q: 'A 70 kg passenger in a car travelling at 20 m/s is brought to rest in 0.5 s. What is the average force?',
            options: ['700 N', '1400 N', '2800 N', '7000 N'],
            answer: 2,
            explanation: 'F = Δp/Δt = (70 × 20)/0.5 = 1400/0.5 = 2800 N.'
          },
          {
            q: 'Momentum is a vector quantity because:',
            options: [
              'It has magnitude only',
              'It is always positive',
              'It has both magnitude and direction',
              'It has no units'
            ],
            answer: 2,
            explanation: 'Momentum is a vector quantity — it has both magnitude (size) and direction, determined by the velocity of the object.'
          },
          {
            q: 'In an explosion, two objects initially at rest fly apart. What is the total momentum after the explosion?',
            options: [
              'Positive',
              'Negative',
              'Zero',
              'Cannot be determined'
            ],
            answer: 2,
            explanation: 'The total momentum before was zero (at rest), so by conservation of momentum, the total momentum after must also be zero.'
          },
          {
            q: 'Seatbelts protect passengers by:',
            options: [
              'Keeping passengers in their seats and increasing the time of deceleration',
              'Making the car lighter',
              'Reducing the speed of the car',
              'Increasing the momentum of the passenger'
            ],
            answer: 0,
            explanation: 'Seatbelts stretch slightly, increasing the time to decelerate the passenger. This reduces the force acting on them (F = Δp/Δt).'
          },
          {
            q: 'A 0.05 kg bullet is fired at 400 m/s from a 4 kg rifle. What is the recoil velocity of the rifle?',
            options: ['0.5 m/s', '2 m/s', '5 m/s', '20 m/s'],
            answer: 2,
            explanation: 'By conservation of momentum: 0 = (0.05 × 400) + (4 × v). 4v = -20, so v = -5 m/s (5 m/s backwards).'
          },
          {
            q: 'What is the typical reaction time of a human?',
            options: ['0.02 s', '0.2 s', '2 s', '20 s'],
            answer: 1,
            explanation: 'The typical human reaction time is between 0.2 and 0.9 seconds, with 0.2 s being a common average for an alert driver.'
          },
          {
            q: 'A car travelling at 20 m/s has a thinking distance of 12 m. What is the driver\'s reaction time?',
            options: ['0.4 s', '0.6 s', '1.0 s', '1.2 s'],
            answer: 1,
            explanation: 'Thinking distance = speed × reaction time. 12 = 20 × t, so t = 12/20 = 0.6 s.'
          },
          {
            q: 'Why does increased speed lead to a greater risk of serious injury in a collision?',
            options: [
              'Because faster cars are heavier',
              'Because greater speed means greater kinetic energy that must be dissipated',
              'Because brakes work better at high speed',
              'Because reaction times decrease'
            ],
            answer: 1,
            explanation: 'Greater speed means more kinetic energy (KE = ½mv²). In a collision, this energy is transferred to the occupants, causing greater injury.'
          },
          {
            q: 'Air bags protect passengers by:',
            options: [
              'Stopping the car faster',
              'Increasing the momentum',
              'Spreading the force over a larger area and increasing deceleration time',
              'Making the car heavier'
            ],
            answer: 2,
            explanation: 'Air bags increase the time of deceleration (reducing force) and spread the force over a larger area of the body.'
          },
          {
            q: 'A 800 kg car and a 1600 kg truck are both travelling at the same speed. Which has greater momentum?',
            options: ['The car', 'The truck', 'They have equal momentum', 'Cannot be determined'],
            answer: 1,
            explanation: 'p = mv. Since they have the same speed, the truck (with double the mass) has double the momentum.'
          },
          {
            q: 'What is the relationship between force, change in momentum, and time?',
            options: ['F = Δp × t', 'F = Δp/t', 'F = t/Δp', 'F = Δp + t'],
            answer: 1,
            explanation: 'Force = rate of change of momentum: F = Δp/t. This shows that the same change in momentum over a longer time requires less force.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // SECTION 6: WAVES
  // ============================================================
  {
    section: 'Waves',
    icon: '🌊',
    color: '#0891B2',
    topics: [
      {
        topic: 'Wave Properties & Electromagnetic Spectrum',
        questions: [
          {
            q: 'What is the equation linking wave speed, frequency, and wavelength?',
            options: ['v = f + λ', 'v = f/λ', 'v = fλ', 'v = λ/f'],
            answer: 2,
            explanation: 'Wave speed = frequency × wavelength (v = fλ).'
          },
          {
            q: 'Calculate the speed of a wave with frequency 50 Hz and wavelength 3 m.',
            options: ['16.7 m/s', '53 m/s', '150 m/s', '1500 m/s'],
            answer: 2,
            explanation: 'v = fλ = 50 × 3 = 150 m/s.'
          },
          {
            q: 'What is the difference between transverse and longitudinal waves?',
            options: [
              'Transverse waves are faster',
              'In transverse waves, oscillations are perpendicular to the direction of travel; in longitudinal, they are parallel',
              'Longitudinal waves only travel through solids',
              'There is no difference'
            ],
            answer: 1,
            explanation: 'Transverse waves oscillate perpendicular to the wave direction (e.g., light), while longitudinal waves oscillate parallel (e.g., sound).'
          },
          {
            q: 'Which of the following is a longitudinal wave?',
            options: ['Light', 'Sound', 'Water waves', 'Radio waves'],
            answer: 1,
            explanation: 'Sound is a longitudinal wave — particles vibrate back and forth parallel to the direction of energy transfer, creating compressions and rarefactions.'
          },
          {
            q: 'The amplitude of a wave is:',
            options: [
              'The distance between two crests',
              'The maximum displacement from the rest position',
              'The number of waves per second',
              'The speed of the wave'
            ],
            answer: 1,
            explanation: 'Amplitude is the maximum displacement of a point on the wave from its undisturbed (rest) position.'
          },
          {
            q: 'What is the frequency of a wave measured in?',
            options: ['Metres (m)', 'Hertz (Hz)', 'Metres per second (m/s)', 'Newtons (N)'],
            answer: 1,
            explanation: 'Frequency is measured in hertz (Hz). 1 Hz means one complete wave passes a point per second.'
          },
          {
            q: 'The period of a wave is 0.02 s. What is the frequency?',
            options: ['0.02 Hz', '2 Hz', '20 Hz', '50 Hz'],
            answer: 3,
            explanation: 'f = 1/T = 1/0.02 = 50 Hz.'
          },
          {
            q: 'Which of these is NOT part of the electromagnetic spectrum?',
            options: ['Radio waves', 'Sound waves', 'X-rays', 'Microwaves'],
            answer: 1,
            explanation: 'Sound waves are mechanical waves (longitudinal), not electromagnetic waves. They require a medium to travel through.'
          },
          {
            q: 'All electromagnetic waves travel at the same speed in a vacuum. What is this speed?',
            options: ['340 m/s', '3000 m/s', '3 × 10⁶ m/s', '3 × 10⁸ m/s'],
            answer: 3,
            explanation: 'All electromagnetic waves travel at the speed of light in a vacuum: approximately 3 × 10⁸ m/s.'
          },
          {
            q: 'Which electromagnetic wave has the highest frequency?',
            options: ['Radio waves', 'Visible light', 'Ultraviolet', 'Gamma rays'],
            answer: 3,
            explanation: 'Gamma rays have the highest frequency (and shortest wavelength) in the electromagnetic spectrum.'
          },
          {
            q: 'Which electromagnetic wave has the longest wavelength?',
            options: ['Gamma rays', 'X-rays', 'Infrared', 'Radio waves'],
            answer: 3,
            explanation: 'Radio waves have the longest wavelength (and lowest frequency) in the electromagnetic spectrum.'
          },
          {
            q: 'Infrared radiation is used for:',
            options: [
              'Medical X-ray imaging',
              'Thermal imaging and remote controls',
              'Sterilising medical equipment',
              'Radio broadcasting'
            ],
            answer: 1,
            explanation: 'Infrared is emitted by warm objects and is used in thermal imaging cameras, remote controls, and fibre optic communication.'
          },
          {
            q: 'Ultraviolet radiation can cause:',
            options: [
              'Burns and skin cancer',
              'No harmful effects',
              'Improved vision',
              'Stronger bones'
            ],
            answer: 0,
            explanation: 'UV radiation can cause sunburn, premature aging of the skin, and increase the risk of skin cancer through DNA damage.'
          },
          {
            q: 'Which type of electromagnetic radiation is used in mobile phone communication?',
            options: ['Gamma rays', 'X-rays', 'Microwaves', 'Ultraviolet'],
            answer: 2,
            explanation: 'Microwaves are used for mobile phone signals, satellite communication, and Wi-Fi.'
          },
          {
            q: 'A radio wave has a frequency of 100 MHz (100 × 10⁶ Hz). What is its wavelength? (speed of light = 3 × 10⁸ m/s)',
            options: ['0.3 m', '3 m', '30 m', '300 m'],
            answer: 1,
            explanation: 'λ = v/f = (3 × 10⁸)/(100 × 10⁶) = 3 m.'
          },
          {
            q: 'Which type of wave can travel through a vacuum?',
            options: ['Sound', 'Seismic P-waves', 'Electromagnetic waves', 'Water waves'],
            answer: 2,
            explanation: 'Electromagnetic waves do not need a medium and can travel through a vacuum. Sound and water waves require a material.'
          },
          {
            q: 'X-rays are used in medicine because they:',
            options: [
              'Are reflected by soft tissue',
              'Can pass through soft tissue but are absorbed by bone and metal',
              'Are completely safe',
              'Have long wavelengths'
            ],
            answer: 1,
            explanation: 'X-rays pass through soft tissue but are absorbed by denser materials like bone, allowing internal imaging.'
          },
          {
            q: 'What is the wavelength of a wave if 5 complete waves fit into a 10 m space?',
            options: ['0.5 m', '2 m', '5 m', '50 m'],
            answer: 1,
            explanation: 'Wavelength = total length / number of waves = 10/5 = 2 m.'
          },
          {
            q: 'In order of increasing frequency, the correct sequence is:',
            options: [
              'Radio, microwave, infrared, visible, UV, X-rays, gamma',
              'Gamma, X-rays, UV, visible, infrared, microwave, radio',
              'Radio, visible, UV, infrared, microwave, X-rays, gamma',
              'Visible, UV, radio, microwave, infrared, gamma, X-rays'
            ],
            answer: 0,
            explanation: 'The EM spectrum in order of increasing frequency: radio → microwave → infrared → visible → UV → X-rays → gamma.'
          },
          {
            q: 'What happens to the wavelength of a wave if the frequency doubles but the speed stays the same?',
            options: ['It doubles', 'It halves', 'It stays the same', 'It quadruples'],
            answer: 1,
            explanation: 'Since v = fλ and v is constant, if f doubles then λ must halve.'
          }
        ]
      },
      {
        topic: 'Light, Reflection & Refraction',
        questions: [
          {
            q: 'The law of reflection states that:',
            options: [
              'The angle of incidence is half the angle of reflection',
              'The angle of incidence equals the angle of reflection',
              'Light always travels in straight lines',
              'Light cannot be reflected'
            ],
            answer: 1,
            explanation: 'The law of reflection: the angle of incidence equals the angle of reflection, measured from the normal.'
          },
          {
            q: 'All angles in reflection and refraction are measured from:',
            options: [
              'The surface of the mirror',
              'The horizontal',
              'The normal (perpendicular to the surface)',
              'The vertical'
            ],
            answer: 2,
            explanation: 'Angles of incidence, reflection, and refraction are all measured from the normal — the line perpendicular to the surface at the point of incidence.'
          },
          {
            q: 'When light passes from air into glass, it:',
            options: [
              'Speeds up and bends away from the normal',
              'Slows down and bends towards the normal',
              'Does not change direction',
              'Speeds up and bends towards the normal'
            ],
            answer: 1,
            explanation: 'Glass is optically denser than air, so light slows down and bends towards the normal when entering glass.'
          },
          {
            q: 'When light passes from glass back into air, it:',
            options: [
              'Slows down and bends towards the normal',
              'Speeds up and bends away from the normal',
              'Stays at the same speed',
              'Is completely absorbed'
            ],
            answer: 1,
            explanation: 'Light speeds up when moving from glass (denser) to air (less dense), and bends away from the normal.'
          },
          {
            q: 'Total internal reflection occurs when:',
            options: [
              'Light enters a denser medium',
              'The angle of incidence is less than the critical angle',
              'The angle of incidence is greater than the critical angle, at a boundary from a denser to less dense medium',
              'Light hits a mirror'
            ],
            answer: 2,
            explanation: 'Total internal reflection occurs when light hits the boundary of a denser medium at an angle greater than the critical angle — all light is reflected back.'
          },
          {
            q: 'Which of the following uses total internal reflection?',
            options: ['Magnifying glass', 'Camera lens', 'Optical fibre', 'Prism (rainbow)'],
            answer: 2,
            explanation: 'Optical fibres use total internal reflection to transmit light signals over long distances with minimal loss.'
          },
          {
            q: 'A converging (convex) lens causes parallel rays of light to:',
            options: [
              'Spread out (diverge)',
              'Come together at a focal point',
              'Travel parallel',
              'Stop completely'
            ],
            answer: 1,
            explanation: 'A convex (converging) lens refracts parallel light rays so they converge at the focal point.'
          },
          {
            q: 'A diverging (concave) lens causes parallel rays of light to:',
            options: [
              'Come together at a point',
              'Spread out as if from a focal point',
              'Travel parallel',
              'Reflect backwards'
            ],
            answer: 1,
            explanation: 'A concave (diverging) lens causes parallel light rays to spread out (diverge), appearing to come from a virtual focal point.'
          },
          {
            q: 'White light is split into a spectrum by a prism because:',
            options: [
              'The prism creates new colours',
              'Different colours have different speeds in glass and refract by different amounts',
              'The prism absorbs some colours',
              'White light is not a mixture of colours'
            ],
            answer: 1,
            explanation: 'Different wavelengths (colours) of light travel at slightly different speeds in glass, so they refract by different amounts — this is called dispersion.'
          },
          {
            q: 'Which colour of light has the longest wavelength?',
            options: ['Violet', 'Blue', 'Green', 'Red'],
            answer: 3,
            explanation: 'Red light has the longest wavelength (about 700 nm) and violet has the shortest (about 400 nm) in the visible spectrum.'
          },
          {
            q: 'An object appears red because it:',
            options: [
              'Absorbs red light and reflects all others',
              'Reflects red light and absorbs other colours',
              'Emits red light',
              'Refracts red light'
            ],
            answer: 1,
            explanation: 'A red object reflects red wavelengths of light and absorbs all other colours.'
          },
          {
            q: 'An opaque object appears black because it:',
            options: [
              'Reflects all colours',
              'Transmits all colours',
              'Absorbs all colours of light',
              'Emits black light'
            ],
            answer: 2,
            explanation: 'A black object absorbs all wavelengths of visible light and reflects none, so it appears black.'
          },
          {
            q: 'The image in a plane mirror is:',
            options: [
              'Real, inverted, and magnified',
              'Virtual, upright, and laterally inverted',
              'Real, upright, and same size',
              'Virtual, inverted, and diminished'
            ],
            answer: 1,
            explanation: 'A plane mirror produces a virtual (cannot be projected), upright, same-size, and laterally inverted (left-right swapped) image.'
          },
          {
            q: 'What is the critical angle?',
            options: [
              'The angle at which light is fully absorbed',
              'The angle of incidence that gives an angle of refraction of 90°',
              'The angle at which light speeds up',
              'The smallest angle of reflection'
            ],
            answer: 1,
            explanation: 'The critical angle is the angle of incidence that produces an angle of refraction of exactly 90°. Beyond this angle, total internal reflection occurs.'
          },
          {
            q: 'Which colour of visible light is refracted the most by a glass prism?',
            options: ['Red', 'Yellow', 'Green', 'Violet'],
            answer: 3,
            explanation: 'Violet light has the shortest wavelength and is slowed down the most in glass, so it is refracted the most.'
          },
          {
            q: 'Sound waves cannot travel through:',
            options: ['Air', 'Water', 'Steel', 'A vacuum'],
            answer: 3,
            explanation: 'Sound is a mechanical wave that requires particles to travel through. A vacuum contains no particles, so sound cannot travel through it.'
          },
          {
            q: 'What type of image can be projected onto a screen?',
            options: ['Virtual image', 'Real image', 'Both', 'Neither'],
            answer: 1,
            explanation: 'A real image is formed where light rays actually converge and can be projected onto a screen. A virtual image cannot.'
          },
          {
            q: 'A ray of light hits a mirror at 30° to the mirror surface. What is the angle of reflection?',
            options: ['30°', '60°', '90°', '120°'],
            answer: 1,
            explanation: 'The angle is measured from the normal (perpendicular to the surface). If the ray is 30° to the surface, it is 60° to the normal. The angle of reflection is also 60°.'
          },
          {
            q: 'Refraction occurs because:',
            options: [
              'Light bounces off surfaces',
              'Light changes speed when it enters a different medium',
              'Light is absorbed by the medium',
              'Light is always reflected'
            ],
            answer: 1,
            explanation: 'Refraction is caused by a change in the speed of light as it passes from one medium to another, causing it to change direction.'
          },
          {
            q: 'If light hits a glass block at 0° (along the normal), what happens?',
            options: [
              'It bends towards the normal',
              'It bends away from the normal',
              'It passes straight through without bending',
              'It is totally reflected'
            ],
            answer: 2,
            explanation: 'Light hitting a surface along the normal (at 0° angle of incidence) passes straight through without changing direction, even though it changes speed.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // SECTION 7: MAGNETISM & ELECTROMAGNETISM
  // ============================================================
  {
    section: 'Magnetism & Electromagnetism',
    icon: '🧲',
    color: '#B91C1C',
    topics: [
      {
        topic: 'Magnetic Fields & Electromagnets',
        questions: [
          {
            q: 'Which of these materials is magnetic?',
            options: ['Copper', 'Iron', 'Aluminium', 'Gold'],
            answer: 1,
            explanation: 'Iron, cobalt, nickel, and steel are magnetic materials. Copper, aluminium, and gold are not.'
          },
          {
            q: 'Magnetic field lines around a bar magnet:',
            options: [
              'Go from south to north',
              'Go from north to south',
              'Point randomly in all directions',
              'Only exist at the poles'
            ],
            answer: 1,
            explanation: 'Magnetic field lines go from the north pole to the south pole outside the magnet (and south to north inside).'
          },
          {
            q: 'What happens when two north poles of magnets are brought together?',
            options: ['They attract', 'They repel', 'Nothing happens', 'They demagnetise'],
            answer: 1,
            explanation: 'Like poles (N-N or S-S) repel each other. Unlike poles (N-S) attract.'
          },
          {
            q: 'A magnetic field can be detected using:',
            options: ['A thermometer', 'A compass', 'A voltmeter', 'A barometer'],
            answer: 1,
            explanation: 'A compass needle is a small magnet that aligns with the magnetic field, showing the direction of the field.'
          },
          {
            q: 'When a current flows through a wire, it creates:',
            options: ['An electric field only', 'A magnetic field around the wire', 'A gravitational field', 'No field at all'],
            answer: 1,
            explanation: 'A current-carrying wire produces a circular magnetic field around it, centered on the wire.'
          },
          {
            q: 'The magnetic field around a straight current-carrying wire is:',
            options: [
              'Straight lines parallel to the wire',
              'Concentric circles around the wire',
              'Radiating outward like light',
              'In the same direction as the current'
            ],
            answer: 1,
            explanation: 'The magnetic field forms concentric circles around a straight current-carrying wire, with the wire at the centre.'
          },
          {
            q: 'What is a solenoid?',
            options: [
              'A type of battery',
              'A coil of wire that produces a magnetic field when current flows through it',
              'A permanent magnet',
              'A type of motor'
            ],
            answer: 1,
            explanation: 'A solenoid is a coil of wire. When current flows through it, it produces a magnetic field similar to that of a bar magnet.'
          },
          {
            q: 'How can the strength of an electromagnet be increased?',
            options: [
              'Use fewer coils and less current',
              'Increase the current, add more turns, or add an iron core',
              'Use a copper core',
              'Decrease the voltage'
            ],
            answer: 1,
            explanation: 'An electromagnet can be made stronger by increasing the current, adding more turns of wire, or inserting a soft iron core.'
          },
          {
            q: 'What is the advantage of an electromagnet over a permanent magnet?',
            options: [
              'It is always stronger',
              'It can be switched on and off',
              'It weighs less',
              'It does not need electricity'
            ],
            answer: 1,
            explanation: 'Electromagnets can be switched on and off by controlling the current, and their strength can be varied. Permanent magnets cannot be turned off.'
          },
          {
            q: 'A soft iron core is used in an electromagnet because:',
            options: [
              'It is a permanent magnet',
              'It is easily magnetised and demagnetised',
              'It repels magnetic fields',
              'It is the cheapest metal'
            ],
            answer: 1,
            explanation: 'Soft iron is easily magnetised (concentrating the field) and quickly demagnetised when the current stops, making it ideal for electromagnets.'
          },
          {
            q: 'The right-hand grip rule for a solenoid is used to determine:',
            options: [
              'The direction of current flow',
              'The direction of the north pole',
              'The strength of the field',
              'The resistance of the wire'
            ],
            answer: 1,
            explanation: 'Curling the fingers of the right hand in the direction of current flow, the thumb points towards the north pole of the solenoid.'
          },
          {
            q: 'Induced magnetism is:',
            options: [
              'Magnetism that lasts forever',
              'A temporary magnetism produced in a magnetic material when placed in a magnetic field',
              'Magnetism caused by heating',
              'Magnetism that cannot be removed'
            ],
            answer: 1,
            explanation: 'Induced magnetism occurs when a magnetic material is placed in a magnetic field and becomes temporarily magnetised.'
          },
          {
            q: 'Which of these is a use of electromagnets?',
            options: [
              'Refrigerator magnets',
              'Scrapyard cranes, MRI scanners, electric bells',
              'Compass needles',
              'Bar magnets in schools'
            ],
            answer: 1,
            explanation: 'Electromagnets are used in scrapyard cranes (to pick up and release metal), MRI scanners, electric bells, and many other applications.'
          },
          {
            q: 'The magnetic field inside a solenoid is:',
            options: [
              'Very weak and irregular',
              'Strong and uniform (parallel lines)',
              'Circular',
              'Non-existent'
            ],
            answer: 1,
            explanation: 'Inside a solenoid, the magnetic field is strong and uniform, with parallel field lines running from one end to the other.'
          },
          {
            q: 'A magnetic material that retains its magnetism after the external field is removed is called:',
            options: [
              'Soft magnetic material',
              'Hard (permanent) magnetic material',
              'Diamagnetic material',
              'Non-magnetic material'
            ],
            answer: 1,
            explanation: 'Hard magnetic materials like steel retain their magnetism and are used to make permanent magnets. Soft materials like iron lose it quickly.'
          },
          {
            q: 'What is a magnetic field?',
            options: [
              'A type of radiation',
              'A region where a magnetic material or moving charge experiences a force',
              'A type of electric current',
              'A region around a battery'
            ],
            answer: 1,
            explanation: 'A magnetic field is the region around a magnet where a force acts on another magnetic material or on a moving charge.'
          },
          {
            q: 'The closer together the magnetic field lines, the:',
            options: [
              'Weaker the field',
              'Stronger the field',
              'More uniform the field',
              'Less dangerous the field'
            ],
            answer: 1,
            explanation: 'The density of field lines indicates field strength. Closer lines mean a stronger magnetic field.'
          },
          {
            q: 'Where is the magnetic field strongest around a bar magnet?',
            options: [
              'In the middle of the magnet',
              'At the poles',
              'Far away from the magnet',
              'On the sides'
            ],
            answer: 1,
            explanation: 'The magnetic field is strongest at the poles, where the field lines are closest together.'
          },
          {
            q: 'A plotting compass placed near a wire carrying current will:',
            options: [
              'Point north always',
              'Deflect due to the magnetic field of the current',
              'Not be affected',
              'Spin continuously'
            ],
            answer: 1,
            explanation: 'The magnetic field from the current-carrying wire will cause the compass needle to deflect from magnetic north.'
          },
          {
            q: 'If the direction of current in a solenoid is reversed, the:',
            options: [
              'Magnetic field disappears',
              'Field strength doubles',
              'North and south poles swap',
              'Nothing changes'
            ],
            answer: 2,
            explanation: 'Reversing the current reverses the direction of the magnetic field, swapping the north and south poles of the solenoid.'
          }
        ]
      },
      {
        topic: 'The Motor Effect & Electromagnetic Induction',
        questions: [
          {
            q: 'The motor effect occurs when:',
            options: [
              'A magnet is placed near iron',
              'A current-carrying conductor is placed in a magnetic field and experiences a force',
              'An electromagnet is switched off',
              'Two magnets attract each other'
            ],
            answer: 1,
            explanation: 'The motor effect is the force experienced by a current-carrying conductor when it is placed in a magnetic field.'
          },
          {
            q: 'What rule is used to determine the direction of the force on a current-carrying conductor in a magnetic field?',
            options: [
              'Right-hand grip rule',
              'Fleming\'s left-hand rule',
              'Fleming\'s right-hand rule',
              'Newton\'s third law'
            ],
            answer: 1,
            explanation: 'Fleming\'s left-hand rule: thumb = force (motion), first finger = field (north to south), second finger = current (conventional).'
          },
          {
            q: 'In Fleming\'s left-hand rule, the first finger represents:',
            options: ['Force', 'Field direction', 'Current direction', 'Velocity'],
            answer: 1,
            explanation: 'First finger = Field (magnetic field direction, N to S). SeCond finger = Current. ThuMb = Motion (force).'
          },
          {
            q: 'The force on a current-carrying conductor in a magnetic field can be increased by:',
            options: [
              'Decreasing the current or the magnetic field strength',
              'Increasing the current, increasing the field strength, or increasing the wire length in the field',
              'Using a thicker wire with no other changes',
              'Reducing the length of wire in the field'
            ],
            answer: 1,
            explanation: 'F = BIL, so the force increases with stronger magnetic field (B), larger current (I), or longer conductor length in the field (L).'
          },
          {
            q: 'Calculate the force on a 0.5 m wire carrying 3 A in a magnetic field of 0.2 T. (F = BIL)',
            options: ['0.1 N', '0.3 N', '0.5 N', '3 N'],
            answer: 1,
            explanation: 'F = BIL = 0.2 × 3 × 0.5 = 0.3 N.'
          },
          {
            q: 'An electric motor works by:',
            options: [
              'Converting kinetic energy to electrical energy',
              'Using the motor effect to create rotation from an electrical current in a magnetic field',
              'Using electromagnetic induction',
              'Converting thermal energy to kinetic energy'
            ],
            answer: 1,
            explanation: 'An electric motor uses the motor effect: a current-carrying coil in a magnetic field experiences forces that cause it to rotate.'
          },
          {
            q: 'What is the role of the split-ring commutator in a DC motor?',
            options: [
              'To increase the speed of the motor',
              'To reverse the direction of current every half turn so the coil keeps spinning',
              'To supply power to the motor',
              'To create a magnetic field'
            ],
            answer: 1,
            explanation: 'The split-ring commutator reverses the current direction every half turn, ensuring the forces on the coil always act in the same rotational direction.'
          },
          {
            q: 'Electromagnetic induction is the process of:',
            options: [
              'Creating a magnetic field from a current',
              'Generating a potential difference (voltage) when a conductor moves through a magnetic field or the field changes',
              'Magnetising a piece of iron',
              'Demagnetising a magnet'
            ],
            answer: 1,
            explanation: 'Electromagnetic induction occurs when a conductor cuts through magnetic field lines (or the magnetic field changes), inducing a potential difference.'
          },
          {
            q: 'Which rule is used to find the direction of induced current?',
            options: [
              'Fleming\'s left-hand rule',
              'Fleming\'s right-hand rule',
              'Right-hand grip rule',
              'Newton\'s second law'
            ],
            answer: 1,
            explanation: 'Fleming\'s right-hand rule is used for generators/induction: thuMb = Motion, First finger = Field, seCond finger = Current (induced).'
          },
          {
            q: 'A generator converts:',
            options: [
              'Electrical energy to kinetic energy',
              'Kinetic energy to electrical energy',
              'Thermal energy to light energy',
              'Chemical energy to thermal energy'
            ],
            answer: 1,
            explanation: 'A generator converts kinetic energy (rotation) into electrical energy using electromagnetic induction.'
          },
          {
            q: 'The induced voltage in a generator can be increased by:',
            options: [
              'Rotating the coil more slowly',
              'Using fewer turns of wire',
              'Rotating faster, using more turns, or using a stronger magnet',
              'Using a weaker magnet'
            ],
            answer: 2,
            explanation: 'Induced voltage increases with faster rotation (more field lines cut per second), more turns on the coil, or a stronger magnetic field.'
          },
          {
            q: 'A transformer works by:',
            options: [
              'Electromagnetic induction — an alternating current in the primary coil induces a voltage in the secondary coil',
              'The motor effect',
              'Direct current flowing through both coils',
              'Permanent magnets inside the core'
            ],
            answer: 0,
            explanation: 'A transformer uses electromagnetic induction: AC in the primary coil creates a changing magnetic field in the iron core, which induces a voltage in the secondary coil.'
          },
          {
            q: 'Why do transformers only work with alternating current (AC)?',
            options: [
              'AC is stronger than DC',
              'AC creates a continuously changing magnetic field needed for induction',
              'DC would melt the transformer',
              'Transformers work with both AC and DC'
            ],
            answer: 1,
            explanation: 'Transformers require a changing magnetic field to induce a voltage. AC constantly changes direction, providing this. DC produces a constant field — no induction.'
          },
          {
            q: 'The transformer equation is:',
            options: [
              'Vp/Vs = Ns/Np',
              'Vp/Vs = Np/Ns',
              'Vp × Vs = Np × Ns',
              'Vp + Vs = Np + Ns'
            ],
            answer: 1,
            explanation: 'Vp/Vs = Np/Ns (primary voltage / secondary voltage = primary turns / secondary turns).'
          },
          {
            q: 'A transformer has 100 turns on the primary coil and 500 turns on the secondary. If the input voltage is 12 V, what is the output voltage?',
            options: ['2.4 V', '12 V', '60 V', '600 V'],
            answer: 2,
            explanation: 'Vp/Vs = Np/Ns → 12/Vs = 100/500 → Vs = 12 × 500/100 = 60 V.'
          },
          {
            q: 'The transformer described in the previous question is a:',
            options: [
              'Step-down transformer',
              'Step-up transformer',
              'Isolating transformer',
              'DC transformer'
            ],
            answer: 1,
            explanation: 'Since the secondary voltage (60 V) is greater than the primary voltage (12 V), and the secondary has more turns, it is a step-up transformer.'
          },
          {
            q: 'For a 100% efficient transformer: VpIp = VsIs. If a step-up transformer increases voltage by a factor of 10, what happens to the current?',
            options: [
              'It increases by a factor of 10',
              'It decreases by a factor of 10',
              'It stays the same',
              'It decreases by a factor of 100'
            ],
            answer: 1,
            explanation: 'Power is conserved (VpIp = VsIs). If voltage increases by 10, current must decrease by 10 to keep power constant.'
          },
          {
            q: 'Moving a magnet into a coil of wire generates a voltage. Moving it faster will:',
            options: [
              'Generate a smaller voltage',
              'Generate a larger voltage',
              'Generate the same voltage',
              'Generate no voltage'
            ],
            answer: 1,
            explanation: 'Moving the magnet faster increases the rate at which field lines are cut, inducing a larger voltage.'
          },
          {
            q: 'A microphone converts sound into electrical signals using:',
            options: [
              'The motor effect',
              'Electromagnetic induction (a coil vibrates in a magnetic field)',
              'A battery',
              'Thermal energy conversion'
            ],
            answer: 1,
            explanation: 'In a dynamic microphone, sound waves cause a diaphragm and attached coil to vibrate in a magnetic field, inducing a varying voltage by electromagnetic induction.'
          },
          {
            q: 'A loudspeaker converts electrical signals into sound using:',
            options: [
              'Electromagnetic induction',
              'The motor effect (a varying current in a coil in a magnetic field creates vibrations)',
              'Thermal expansion',
              'Nuclear energy'
            ],
            answer: 1,
            explanation: 'A loudspeaker uses the motor effect: a varying current in a coil within a magnetic field causes the coil (and attached cone) to vibrate, producing sound.'
          }
        ]
      }
    ]
  },

  // ============================================================
  // SECTION 8: SPACE PHYSICS (TRIPLE)
  // ============================================================
  {
    section: 'Space Physics (Triple)',
    icon: '🚀',
    color: '#6366F1',
    topics: [
      {
        topic: 'The Solar System, Stars & the Big Bang',
        questions: [
          {
            q: 'What is at the centre of our solar system?',
            options: ['Earth', 'The Moon', 'The Sun', 'Jupiter'],
            answer: 2,
            explanation: 'The Sun is the star at the centre of our solar system. All planets orbit around it.'
          },
          {
            q: 'Which of the following is the correct order of planets from the Sun?',
            options: [
              'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune',
              'Venus, Mercury, Earth, Mars, Saturn, Jupiter, Neptune, Uranus',
              'Earth, Mars, Venus, Mercury, Jupiter, Saturn, Uranus, Neptune',
              'Mercury, Venus, Mars, Earth, Jupiter, Saturn, Neptune, Uranus'
            ],
            answer: 0,
            explanation: 'The correct order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.'
          },
          {
            q: 'What force keeps planets in orbit around the Sun?',
            options: ['Friction', 'Gravity', 'Magnetic force', 'Electrostatic force'],
            answer: 1,
            explanation: 'Gravity provides the centripetal force that keeps planets in orbit around the Sun.'
          },
          {
            q: 'Our Sun is classified as:',
            options: ['A red giant', 'A white dwarf', 'A main sequence star', 'A neutron star'],
            answer: 2,
            explanation: 'Our Sun is currently a main sequence star, fusing hydrogen into helium in its core.'
          },
          {
            q: 'What is a galaxy?',
            options: [
              'A single star with planets',
              'A large collection of billions of stars held together by gravity',
              'A group of moons',
              'A type of nebula'
            ],
            answer: 1,
            explanation: 'A galaxy is a vast collection of billions of stars, gas, and dust held together by gravitational attraction.'
          },
          {
            q: 'Our galaxy is called:',
            options: ['Andromeda', 'The Milky Way', 'The Solar System', 'The Universe'],
            answer: 1,
            explanation: 'Our solar system is in the Milky Way galaxy, a spiral galaxy containing hundreds of billions of stars.'
          },
          {
            q: 'A star forms from:',
            options: [
              'A white dwarf cooling down',
              'A cloud of dust and gas (nebula) collapsing under gravity',
              'Two planets colliding',
              'A black hole exploding'
            ],
            answer: 1,
            explanation: 'Stars form when clouds of dust and gas (nebulae) collapse under gravity, increasing in temperature until nuclear fusion begins.'
          },
          {
            q: 'The main source of energy in a main sequence star is:',
            options: [
              'Burning of hydrogen gas',
              'Nuclear fission',
              'Nuclear fusion of hydrogen into helium',
              'Gravitational potential energy only'
            ],
            answer: 2,
            explanation: 'Main sequence stars are powered by nuclear fusion, where hydrogen nuclei fuse to form helium, releasing enormous amounts of energy.'
          },
          {
            q: 'What is the life cycle of a star about the same size as our Sun?',
            options: [
              'Nebula → main sequence → red giant → supernova → black hole',
              'Nebula → protostar → main sequence → red giant → white dwarf',
              'Nebula → main sequence → neutron star → black hole',
              'Nebula → red giant → main sequence → white dwarf'
            ],
            answer: 1,
            explanation: 'A Sun-like star: nebula → protostar → main sequence → red giant → planetary nebula → white dwarf (then eventually a black dwarf).'
          },
          {
            q: 'What is the life cycle of a star much more massive than our Sun?',
            options: [
              'Nebula → main sequence → white dwarf',
              'Nebula → main sequence → red super giant → supernova → neutron star or black hole',
              'Nebula → red giant → white dwarf → black hole',
              'Nebula → protostar → supernova only'
            ],
            answer: 1,
            explanation: 'Massive stars: nebula → protostar → main sequence → red supergiant → supernova → neutron star or black hole.'
          },
          {
            q: 'A supernova is:',
            options: [
              'A new star being born',
              'The collapse and explosion of a massive star',
              'A type of planet',
              'A small, dim star'
            ],
            answer: 1,
            explanation: 'A supernova is the explosive death of a massive star, scattering heavy elements across space.'
          },
          {
            q: 'Elements heavier than iron are formed during:',
            options: [
              'Main sequence fusion',
              'Red giant phase only',
              'A supernova explosion',
              'In the Sun\'s core'
            ],
            answer: 2,
            explanation: 'Elements heavier than iron require the extreme energy of a supernova to be formed. They are distributed through space by the explosion.'
          },
          {
            q: 'What is red-shift?',
            options: [
              'The apparent change in colour of stars due to temperature',
              'An increase in the observed wavelength of light from objects moving away from us',
              'The colour of old stars',
              'A decrease in the wavelength of light'
            ],
            answer: 1,
            explanation: 'Red-shift is the observed increase in wavelength (shift towards red) of light from galaxies moving away from us, indicating the universe is expanding.'
          },
          {
            q: 'Red-shift of light from distant galaxies provides evidence that:',
            options: [
              'The universe is contracting',
              'The universe is expanding',
              'Stars are getting hotter',
              'Galaxies are getting closer'
            ],
            answer: 1,
            explanation: 'The red-shift observed in light from distant galaxies shows they are moving away from us, indicating the universe is expanding.'
          },
          {
            q: 'The Big Bang theory suggests that:',
            options: [
              'The universe has always existed in its current form',
              'The universe began from a very small, extremely hot and dense point and has been expanding ever since',
              'The universe is getting smaller',
              'Stars were created from nothing'
            ],
            answer: 1,
            explanation: 'The Big Bang theory states that the universe began from an incredibly hot, dense point approximately 13.8 billion years ago and has been expanding since.'
          },
          {
            q: 'What is cosmic microwave background radiation (CMBR)?',
            options: [
              'Radiation from mobile phone masts',
              'Low-level microwave radiation from all directions in space, leftover from the Big Bang',
              'Radiation from the Sun',
              'X-rays from black holes'
            ],
            answer: 1,
            explanation: 'CMBR is faint microwave radiation detected from all directions in space. It is the cooled remnant of radiation from shortly after the Big Bang.'
          },
          {
            q: 'CMBR provides evidence for the Big Bang because:',
            options: [
              'It comes from the Sun',
              'It is the afterglow of the initial hot, dense state that has cooled as the universe expanded',
              'It is produced by stars today',
              'It only comes from one direction'
            ],
            answer: 1,
            explanation: 'CMBR is the cooled remnant of the radiation released when the early universe became cool enough for atoms to form. Its existence supports the Big Bang theory.'
          },
          {
            q: 'The further away a galaxy is from us, the:',
            options: [
              'Slower it is moving away',
              'Faster it is moving away (greater red-shift)',
              'Bluer its light appears',
              'Closer it is getting'
            ],
            answer: 1,
            explanation: 'Hubble\'s observations showed that more distant galaxies have greater red-shifts, meaning they are receding faster — evidence for an expanding universe.'
          },
          {
            q: 'A natural satellite is:',
            options: [
              'A man-made spacecraft in orbit',
              'A moon — a celestial body orbiting a planet',
              'An asteroid',
              'A comet'
            ],
            answer: 1,
            explanation: 'A natural satellite is a moon — a celestial body that orbits a planet due to gravity (e.g., our Moon orbits Earth).'
          },
          {
            q: 'Which of these is correct about orbital motion?',
            options: [
              'Planets closer to the Sun orbit more slowly',
              'Planets closer to the Sun orbit faster and have shorter orbital periods',
              'All planets take the same time to orbit the Sun',
              'Orbital speed is not related to distance from the Sun'
            ],
            answer: 1,
            explanation: 'Planets closer to the Sun experience stronger gravity, so they orbit faster with shorter orbital periods (e.g., Mercury\'s year is 88 Earth days).'
          }
        ]
      }
    ]
  }
];
