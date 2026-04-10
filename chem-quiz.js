const CHEM_QUIZ = [
  // ========== SECTION 1: ATOMIC STRUCTURE & PERIODIC TABLE ==========
  {
    section: 'Atomic Structure & Periodic Table',
    icon: '\u269B\uFE0F',
    color: '#2563EB',
    topics: [
      {
        topic: 'Atoms, Elements & Compounds',
        questions: [
          {
            q: 'What is an element?',
            options: [
              'A substance made of only one type of atom',
              'A substance made of two or more types of atom chemically bonded',
              'A mixture of different atoms',
              'A substance that cannot be seen under a microscope'
            ],
            answer: 0,
            explanation: 'An element contains only one type of atom. All atoms in an element have the same number of protons.'
          },
          {
            q: 'Which of the following is a compound?',
            options: ['Oxygen (O\u2082)', 'Iron (Fe)', 'Water (H\u2082O)', 'Nitrogen (N\u2082)'],
            answer: 2,
            explanation: 'Water (H\u2082O) is a compound because it contains two different elements (hydrogen and oxygen) chemically bonded together.'
          },
          {
            q: 'What is the difference between a mixture and a compound?',
            options: [
              'A mixture has a fixed ratio of elements; a compound does not',
              'A compound has atoms chemically bonded in fixed proportions; a mixture does not',
              'A mixture can only contain two substances',
              'There is no difference'
            ],
            answer: 1,
            explanation: 'In a compound, atoms of different elements are chemically bonded in fixed proportions. In a mixture, substances are not chemically bonded and can be in any proportion.'
          },
          {
            q: 'How many elements are represented in the formula Ca(OH)\u2082?',
            options: ['2', '3', '4', '5'],
            answer: 1,
            explanation: 'Ca(OH)\u2082 contains three elements: calcium (Ca), oxygen (O), and hydrogen (H).'
          },
          {
            q: 'Which of the following correctly describes a molecule?',
            options: [
              'A single atom of any element',
              'Two or more atoms chemically bonded together',
              'A group of atoms that are not bonded',
              'An atom that has gained or lost electrons'
            ],
            answer: 1,
            explanation: 'A molecule is formed when two or more atoms are chemically bonded together. This can be atoms of the same element (e.g. O\u2082) or different elements (e.g. H\u2082O).'
          },
          {
            q: 'What does the chemical formula H\u2082SO\u2084 tell you?',
            options: [
              'It contains 2 hydrogen atoms, 1 sulfur atom, and 4 oxygen atoms',
              'It contains 2 hydrogen molecules and 4 oxygen molecules',
              'It is a mixture of hydrogen, sulfur, and oxygen',
              'It contains 7 elements'
            ],
            answer: 0,
            explanation: 'The formula H\u2082SO\u2084 shows 2 hydrogen atoms, 1 sulfur atom, and 4 oxygen atoms bonded together in one molecule of sulfuric acid.'
          },
          {
            q: 'Which statement about elements is correct?',
            options: [
              'Elements can be broken down into simpler substances by chemical reactions',
              'Elements are listed in the periodic table',
              'Elements always exist as molecules',
              'Elements are always solids at room temperature'
            ],
            answer: 1,
            explanation: 'All elements are listed in the periodic table. Elements cannot be broken down into simpler substances by chemical means.'
          },
          {
            q: 'Air is best described as:',
            options: [
              'An element',
              'A compound',
              'A mixture',
              'A molecule'
            ],
            answer: 2,
            explanation: 'Air is a mixture of different gases (mainly nitrogen, oxygen, argon, and carbon dioxide) that are not chemically bonded together.'
          },
          {
            q: 'How many atoms in total are represented by 2NaOH?',
            options: ['3', '4', '6', '8'],
            answer: 2,
            explanation: '2NaOH means 2 formula units of NaOH. Each NaOH has 3 atoms (Na, O, H), so 2 \u00D7 3 = 6 atoms in total.'
          },
          {
            q: 'Which of these is NOT a property that typically changes when elements form a compound?',
            options: [
              'Melting point',
              'The number of protons in each atom',
              'Colour',
              'Chemical reactivity'
            ],
            answer: 1,
            explanation: 'The number of protons in each atom does not change when a compound is formed. Proton number defines the element and is unchanged in chemical reactions.'
          },
          {
            q: 'Which separation technique would be best to obtain pure water from salt water?',
            options: [
              'Filtration',
              'Distillation',
              'Chromatography',
              'Crystallisation'
            ],
            answer: 1,
            explanation: 'Distillation separates a liquid from a dissolved solid by evaporating the liquid and then condensing it. This gives pure water from salt water.'
          },
          {
            q: 'A pure substance in chemistry is defined as:',
            options: [
              'A substance that is natural and unprocessed',
              'A single element or compound with no other substances mixed in',
              'Any substance that is safe to consume',
              'A substance with a high boiling point'
            ],
            answer: 1,
            explanation: 'In chemistry, a pure substance consists of only one element or one compound. It melts and boils at specific, sharp temperatures.'
          },
          {
            q: 'Which technique is used to separate mixtures of soluble coloured substances?',
            options: [
              'Filtration',
              'Evaporation',
              'Chromatography',
              'Distillation'
            ],
            answer: 2,
            explanation: 'Chromatography separates mixtures of soluble substances, often coloured ones like inks or dyes, based on how they travel through a stationary phase.'
          },
          {
            q: 'What does a pure substance show on a heating curve?',
            options: [
              'A gradual increase in temperature during melting',
              'A flat horizontal section at its melting and boiling points',
              'A decrease in temperature during boiling',
              'No change in temperature at any point'
            ],
            answer: 1,
            explanation: 'A pure substance has a sharp, fixed melting and boiling point, shown as a flat (horizontal) section on a heating curve where temperature stays constant during the state change.'
          },
          {
            q: 'Filtration is used to separate:',
            options: [
              'Two miscible liquids',
              'An insoluble solid from a liquid',
              'A dissolved solid from a liquid',
              'Two gases'
            ],
            answer: 1,
            explanation: 'Filtration separates an insoluble solid from a liquid. The solid stays in the filter paper while the liquid passes through as the filtrate.'
          },
          {
            q: 'In chromatography, a substance with an Rf value of 0.75 means:',
            options: [
              'It moved 75% as far as the solvent front',
              'It is 75% pure',
              'It contains 75% of the original sample',
              'It moved 75 cm up the paper'
            ],
            answer: 0,
            explanation: 'Rf = distance moved by substance / distance moved by solvent front. An Rf of 0.75 means the substance moved 75% as far as the solvent front.'
          },
          {
            q: 'Which of these formulas represents a mixture?',
            options: [
              'NaCl',
              'H\u2082O',
              'Fe + S',
              'CO\u2082'
            ],
            answer: 2,
            explanation: 'Fe + S represents iron and sulfur as separate, unbonded substances (a mixture). NaCl, H\u2082O and CO\u2082 are all compounds with atoms chemically bonded.'
          },
          {
            q: 'How would you obtain dry crystals of copper sulfate from copper sulfate solution?',
            options: [
              'Filtration then distillation',
              'Evaporation (gently heating) then drying',
              'Chromatography',
              'Adding more water'
            ],
            answer: 1,
            explanation: 'Gently heating the solution evaporates the water, leaving copper sulfate crystals behind. Gentle heating avoids spitting and decomposition.'
          },
          {
            q: 'The formula MgCl\u2082 tells you that magnesium chloride contains:',
            options: [
              '1 magnesium atom and 2 chlorine atoms per formula unit',
              '2 magnesium atoms and 1 chlorine atom',
              '1 magnesium molecule and 2 chlorine molecules',
              '3 different elements'
            ],
            answer: 0,
            explanation: 'MgCl\u2082 shows 1 magnesium atom bonded to 2 chlorine atoms. The subscript 2 applies only to the chlorine.'
          },
          {
            q: 'What is the total number of atoms in one formula unit of Al\u2082(SO\u2084)\u2083?',
            options: ['9', '14', '17', '5'],
            answer: 2,
            explanation: 'Al\u2082(SO\u2084)\u2083 = 2 Al + 3 S + 12 O = 17 atoms. The subscript 3 outside the bracket multiplies both S and O\u2084.'
          }
        ]
      },
      {
        topic: 'Atomic Structure & Isotopes',
        questions: [
          {
            q: 'What are the three subatomic particles found in an atom?',
            options: [
              'Protons, neutrons, and electrons',
              'Protons, photons, and electrons',
              'Neutrons, electrons, and ions',
              'Protons, neutrons, and isotopes'
            ],
            answer: 0,
            explanation: 'Atoms consist of protons and neutrons in the nucleus, with electrons orbiting in shells around the nucleus.'
          },
          {
            q: 'What is the relative charge of a proton?',
            options: ['+2', '+1', '0', '-1'],
            answer: 1,
            explanation: 'A proton has a relative charge of +1. Neutrons have no charge (0), and electrons have a charge of -1.'
          },
          {
            q: 'The atomic number of an element tells you:',
            options: [
              'The total number of protons and neutrons',
              'The number of protons in the nucleus',
              'The number of electron shells',
              'The mass of one atom'
            ],
            answer: 1,
            explanation: 'The atomic number (or proton number) is the number of protons in the nucleus. In a neutral atom, this also equals the number of electrons.'
          },
          {
            q: 'An atom has an atomic number of 11 and a mass number of 23. How many neutrons does it have?',
            options: ['11', '12', '23', '34'],
            answer: 1,
            explanation: 'Neutrons = mass number - atomic number = 23 - 11 = 12 neutrons.'
          },
          {
            q: 'What are isotopes?',
            options: [
              'Atoms of different elements with the same mass number',
              'Atoms of the same element with different numbers of electrons',
              'Atoms of the same element with different numbers of neutrons',
              'Atoms of the same element with different numbers of protons'
            ],
            answer: 2,
            explanation: 'Isotopes are atoms of the same element (same proton number) but with different numbers of neutrons, giving them different mass numbers.'
          },
          {
            q: 'Carbon-12 and carbon-14 are isotopes. Which statement is correct?',
            options: [
              'They have different numbers of protons',
              'They have the same number of neutrons',
              'Carbon-14 has 2 more neutrons than carbon-12',
              'They have different chemical properties'
            ],
            answer: 2,
            explanation: 'Both have 6 protons (same element). Carbon-12 has 6 neutrons, carbon-14 has 8 neutrons \u2014 a difference of 2. Isotopes have the same chemical properties.'
          },
          {
            q: 'In the plum pudding model, the atom was described as:',
            options: [
              'A tiny dense nucleus surrounded by electrons',
              'A ball of positive charge with electrons embedded in it',
              'Electrons orbiting a nucleus in fixed shells',
              'A cloud of negative charge with protons inside'
            ],
            answer: 1,
            explanation: 'Thomson\'s plum pudding model described the atom as a sphere of positive charge with negative electrons embedded throughout, like plums in a pudding.'
          },
          {
            q: 'What did the alpha particle scattering experiment (Rutherford) show?',
            options: [
              'Atoms are solid spheres',
              'The atom has a small, dense, positively charged nucleus with mostly empty space',
              'Electrons are inside the nucleus',
              'Atoms have no charge'
            ],
            answer: 1,
            explanation: 'Most alpha particles passed straight through (empty space), some were deflected (positive nucleus), and very few bounced back (dense nucleus). This disproved the plum pudding model.'
          },
          {
            q: 'The electronic configuration of sodium (atomic number 11) is:',
            options: ['2,8,2', '2,9', '2,8,1', '2,1,8'],
            answer: 2,
            explanation: 'Sodium has 11 electrons arranged as 2 in the first shell, 8 in the second shell, and 1 in the third shell (2,8,1).'
          },
          {
            q: 'Which subatomic particle has the smallest mass?',
            options: ['Proton', 'Neutron', 'Electron', 'They all have the same mass'],
            answer: 2,
            explanation: 'Electrons have a relative mass of approximately 1/1836 (negligible compared to protons and neutrons). Protons and neutrons both have a relative mass of 1.'
          },
          {
            q: 'An atom of chlorine-37 has 17 protons. How many neutrons does it contain?',
            options: ['17', '20', '37', '54'],
            answer: 1,
            explanation: 'Neutrons = mass number - atomic number = 37 - 17 = 20 neutrons.'
          },
          {
            q: 'Why do isotopes of an element have the same chemical properties?',
            options: [
              'They have the same number of neutrons',
              'They have the same mass number',
              'They have the same number of electrons and electronic configuration',
              'They have the same number of protons and neutrons'
            ],
            answer: 2,
            explanation: 'Chemical properties depend on the electronic configuration (number and arrangement of electrons). Isotopes have the same number of electrons, so they react in the same way.'
          },
          {
            q: 'Chlorine has two isotopes: Cl-35 (75%) and Cl-37 (25%). What is the relative atomic mass of chlorine?',
            options: ['35.0', '35.5', '36.0', '36.5'],
            answer: 1,
            explanation: 'Relative atomic mass = (35 \u00D7 75 + 37 \u00D7 25) / 100 = (2625 + 925) / 100 = 3550 / 100 = 35.5.'
          },
          {
            q: 'What is the maximum number of electrons in the second electron shell?',
            options: ['2', '6', '8', '18'],
            answer: 2,
            explanation: 'The first shell holds a maximum of 2 electrons, the second shell holds a maximum of 8, and the third shell also holds up to 8 (at GCSE level).'
          },
          {
            q: 'Who first proposed the nuclear model of the atom?',
            options: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'],
            answer: 2,
            explanation: 'Rutherford proposed the nuclear model after the alpha particle scattering experiment, suggesting a small dense positive nucleus with electrons around it.'
          },
          {
            q: 'What improvement did Bohr make to Rutherford\'s model?',
            options: [
              'He discovered the neutron',
              'He suggested electrons orbit the nucleus in fixed energy levels (shells)',
              'He proposed that atoms are indivisible',
              'He proved the existence of protons'
            ],
            answer: 1,
            explanation: 'Bohr proposed that electrons orbit in specific, fixed energy levels (shells) at set distances from the nucleus, rather than randomly orbiting.'
          },
          {
            q: 'An ion of aluminium has the symbol Al\u00B3\u207A. This means:',
            options: [
              'It has 3 more protons than a neutral aluminium atom',
              'It has 3 more electrons than a neutral aluminium atom',
              'It has lost 3 electrons and has 3 more protons than electrons',
              'Its mass number is 3'
            ],
            answer: 2,
            explanation: 'Al\u00B3\u207A has lost 3 electrons, giving it a 3+ charge because it now has 3 more protons than electrons (13 protons, 10 electrons).'
          },
          {
            q: 'The relative mass of a neutron is:',
            options: ['0', '1/1836', '1', '2'],
            answer: 2,
            explanation: 'A neutron has a relative mass of 1, the same as a proton. Electrons have a negligible relative mass of approximately 1/1836.'
          },
          {
            q: 'An atom of potassium (K) has atomic number 19 and mass number 39. What is its electronic configuration?',
            options: ['2,8,8,1', '2,8,9', '2,8,1,8', '2,8,8,2'],
            answer: 0,
            explanation: 'Potassium has 19 electrons: 2 in the first shell, 8 in the second, 8 in the third, and 1 in the fourth shell (2,8,8,1).'
          },
          {
            q: 'Which of the following pairs are NOT isotopes of each other?',
            options: [
              'Carbon-12 and carbon-14',
              'Chlorine-35 and chlorine-37',
              'Hydrogen-1 and hydrogen-2',
              'Oxygen-16 and sulfur-16'
            ],
            answer: 3,
            explanation: 'Oxygen-16 and sulfur-16 are different elements (different atomic numbers), not isotopes. Isotopes must be atoms of the same element (same number of protons).'
          }
        ]
      },
      {
        topic: 'The Periodic Table & Trends',
        questions: [
          {
            q: 'The elements in the periodic table are arranged in order of:',
            options: [
              'Increasing relative atomic mass',
              'Increasing atomic (proton) number',
              'Increasing number of neutrons',
              'Alphabetical order'
            ],
            answer: 1,
            explanation: 'The modern periodic table arranges elements in order of increasing atomic (proton) number. Mendeleev originally used atomic mass, but this was later corrected.'
          },
          {
            q: 'Elements in the same group of the periodic table have:',
            options: [
              'The same number of electron shells',
              'The same number of electrons in their outer shell',
              'The same atomic mass',
              'The same number of neutrons'
            ],
            answer: 1,
            explanation: 'Elements in the same group have the same number of electrons in their outer shell, which gives them similar chemical properties.'
          },
          {
            q: 'What does the period number tell you about an element?',
            options: [
              'The number of outer shell electrons',
              'The total number of electrons',
              'The number of occupied electron shells',
              'The number of neutrons'
            ],
            answer: 2,
            explanation: 'The period number corresponds to the number of occupied electron shells. For example, period 3 elements have 3 electron shells.'
          },
          {
            q: 'Which Group 1 metal is the most reactive?',
            options: ['Lithium', 'Sodium', 'Potassium', 'Francium'],
            answer: 3,
            explanation: 'Reactivity increases going down Group 1 because the outer electron is further from the nucleus and more easily lost. Francium is the most reactive alkali metal.'
          },
          {
            q: 'Why does reactivity increase down Group 1?',
            options: [
              'The atoms get smaller so electrons are lost more easily',
              'The outer electron is further from the nucleus and is more easily lost due to increased shielding',
              'The atoms gain more neutrons',
              'The nuclear charge decreases'
            ],
            answer: 1,
            explanation: 'Going down the group, atoms have more electron shells, so the outer electron is further from the nucleus with more shielding. This means the outer electron is more easily lost.'
          },
          {
            q: 'Which Group 7 element is the most reactive?',
            options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
            answer: 0,
            explanation: 'Reactivity decreases down Group 7. Fluorine is the most reactive because its outer shell is closest to the nucleus, making it easiest to gain an electron.'
          },
          {
            q: 'What happens when chlorine water is added to potassium bromide solution?',
            options: [
              'Nothing happens',
              'The solution turns orange/brown as chlorine displaces bromine',
              'The solution turns green',
              'Potassium chloride is displaced'
            ],
            answer: 1,
            explanation: 'Chlorine is more reactive than bromine, so it displaces bromine from KBr. The solution turns orange/brown due to the bromine produced: Cl\u2082 + 2KBr \u2192 2KCl + Br\u2082.'
          },
          {
            q: 'Why does reactivity decrease down Group 7?',
            options: [
              'The atoms become smaller',
              'The atoms have fewer electron shells',
              'The outer shell is further from the nucleus with more shielding, making it harder to gain an electron',
              'The nuclear charge decreases'
            ],
            answer: 2,
            explanation: 'Going down Group 7, atoms are larger with more shielding. The outer shell is further from the nucleus, so the attraction for an incoming electron is weaker, making it harder to gain an electron.'
          },
          {
            q: 'What is the trend in melting and boiling points going down Group 1?',
            options: [
              'They increase',
              'They decrease',
              'They stay the same',
              'They increase then decrease'
            ],
            answer: 1,
            explanation: 'Melting and boiling points decrease down Group 1 because the metallic bonds become weaker as the atoms get larger and the delocalised electrons are further from the positive nuclei.'
          },
          {
            q: 'What is the trend in melting and boiling points going down Group 7?',
            options: [
              'They increase',
              'They decrease',
              'They stay the same',
              'They increase then decrease'
            ],
            answer: 0,
            explanation: 'Melting and boiling points increase down Group 7 because the intermolecular forces between molecules become stronger as the molecules get larger.'
          },
          {
            q: 'Mendeleev left gaps in his periodic table because:',
            options: [
              'He made mistakes in his calculations',
              'He predicted that undiscovered elements would fill those gaps',
              'He did not know about all the elements',
              'The elements in those positions were radioactive'
            ],
            answer: 1,
            explanation: 'Mendeleev left gaps and predicted the properties of undiscovered elements. When these elements were later discovered, their properties matched his predictions, supporting his table.'
          },
          {
            q: 'Group 0 (noble gases) are unreactive because:',
            options: [
              'They are all gases',
              'They have full outer electron shells (stable electronic configurations)',
              'They have no electrons',
              'They have no protons'
            ],
            answer: 1,
            explanation: 'Noble gases have full outer electron shells (2 for He, 8 for the others), making them very stable and unreactive. They do not need to lose, gain, or share electrons.'
          },
          {
            q: 'What is the trend in boiling points going down Group 0?',
            options: [
              'They decrease',
              'They increase',
              'They remain constant',
              'They alternate'
            ],
            answer: 1,
            explanation: 'Boiling points increase down Group 0 because the atoms get larger, resulting in stronger London (intermolecular) forces between atoms.'
          },
          {
            q: 'When lithium reacts with water, what products are formed?',
            options: [
              'Lithium oxide and hydrogen',
              'Lithium hydroxide and hydrogen',
              'Lithium hydroxide and oxygen',
              'Lithium chloride and water'
            ],
            answer: 1,
            explanation: 'All Group 1 metals react with water to produce a metal hydroxide and hydrogen gas: 2Li + 2H\u2082O \u2192 2LiOH + H\u2082.'
          },
          {
            q: 'Which halogen is a liquid at room temperature?',
            options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
            answer: 2,
            explanation: 'Bromine is a dark red-brown liquid at room temperature. Fluorine and chlorine are gases, and iodine is a dark grey solid.'
          },
          {
            q: 'A displacement reaction between halogens works because:',
            options: [
              'A more reactive halogen displaces a less reactive halogen from its compound',
              'A less reactive halogen displaces a more reactive halogen',
              'All halogens are equally reactive',
              'Halogens do not undergo displacement reactions'
            ],
            answer: 0,
            explanation: 'A more reactive halogen can displace a less reactive one from a solution of its salt. For example, chlorine displaces bromine from sodium bromide solution.'
          },
          {
            q: 'Transition metals are found in which part of the periodic table?',
            options: [
              'Group 1',
              'Group 7',
              'The central block between Groups 2 and 3',
              'Group 0'
            ],
            answer: 2,
            explanation: 'Transition metals are located in the central block of the periodic table, between Groups 2 and 3. They include metals such as iron, copper, and zinc.'
          },
          {
            q: 'Which property is typical of transition metals but NOT of Group 1 metals?',
            options: [
              'They are shiny',
              'They form coloured compounds',
              'They conduct electricity',
              'They are metals'
            ],
            answer: 1,
            explanation: 'Transition metals commonly form coloured compounds (e.g. copper sulfate is blue, iron(III) oxide is orange). Group 1 metals typically form white or colourless compounds.'
          },
          {
            q: 'Which of these statements about Group 1 metals is correct?',
            options: [
              'They are hard and dense metals',
              'They have high melting points',
              'They are soft and have low densities',
              'They form coloured compounds'
            ],
            answer: 2,
            explanation: 'Group 1 metals (alkali metals) are soft enough to cut with a knife and have low densities. Lithium, sodium, and potassium float on water.'
          },
          {
            q: 'Why did Mendeleev switch the order of iodine and tellurium in his periodic table?',
            options: [
              'Tellurium is a gas and iodine is a solid',
              'He wanted to keep elements with similar properties in the same group',
              'He made an error',
              'Iodine is more radioactive than tellurium'
            ],
            answer: 1,
            explanation: 'Mendeleev prioritised grouping elements with similar chemical properties together, even though this meant placing tellurium (higher atomic mass) before iodine in his table.'
          }
        ]
      }
    ]
  },

  // ========== SECTION 2: BONDING, STRUCTURE & PROPERTIES ==========
  {
    section: 'Bonding, Structure & Properties',
    icon: '\uD83D\uDD17',
    color: '#7C3AED',
    topics: [
      {
        topic: 'Ionic, Covalent & Metallic Bonding',
        questions: [
          {
            q: 'Ionic bonding involves:',
            options: [
              'Sharing of electron pairs between atoms',
              'Transfer of electrons from a metal to a non-metal',
              'Delocalised electrons in a sea of positive ions',
              'Weak intermolecular forces'
            ],
            answer: 1,
            explanation: 'Ionic bonding occurs when electrons are transferred from a metal atom to a non-metal atom, forming positive and negative ions that are attracted by electrostatic forces.'
          },
          {
            q: 'What type of bonding is found in sodium chloride (NaCl)?',
            options: ['Covalent', 'Metallic', 'Ionic', 'Molecular'],
            answer: 2,
            explanation: 'NaCl is formed by ionic bonding. Sodium (metal) transfers an electron to chlorine (non-metal), forming Na\u207A and Cl\u207B ions held together by electrostatic attraction.'
          },
          {
            q: 'In a covalent bond:',
            options: [
              'Electrons are transferred from one atom to another',
              'A pair of electrons is shared between two atoms',
              'Positive metal ions are surrounded by delocalised electrons',
              'Ions are held together by electrostatic forces'
            ],
            answer: 1,
            explanation: 'A covalent bond is formed when a pair of electrons is shared between two non-metal atoms. Both nuclei are attracted to the shared pair of electrons.'
          },
          {
            q: 'How many covalent bonds does a nitrogen atom typically form?',
            options: ['1', '2', '3', '4'],
            answer: 2,
            explanation: 'Nitrogen has 5 outer electrons and needs 3 more to complete its outer shell, so it forms 3 covalent bonds (e.g. in NH\u2083 or N\u2082).'
          },
          {
            q: 'What type of bonding is found in a pure copper wire?',
            options: ['Ionic', 'Covalent', 'Metallic', 'Molecular'],
            answer: 2,
            explanation: 'Copper is a metal. In metallic bonding, positive metal ions are arranged in a regular structure with delocalised electrons free to move between them.'
          },
          {
            q: 'When magnesium reacts with oxygen, what ions are formed?',
            options: [
              'Mg\u207A and O\u207B',
              'Mg\u00B2\u207A and O\u00B2\u207B',
              'Mg\u00B2\u207B and O\u00B2\u207A',
              'Mg\u00B3\u207A and O\u00B3\u207B'
            ],
            answer: 1,
            explanation: 'Magnesium (Group 2) loses 2 electrons to form Mg\u00B2\u207A. Oxygen (Group 6) gains 2 electrons to form O\u00B2\u207B. The compound MgO is formed.'
          },
          {
            q: 'A dot-and-cross diagram for water (H\u2082O) shows:',
            options: [
              'Two shared pairs of electrons and two lone pairs on the oxygen',
              'One shared pair and three lone pairs on the oxygen',
              'Four shared pairs of electrons',
              'Transfer of electrons from hydrogen to oxygen'
            ],
            answer: 0,
            explanation: 'Oxygen shares one pair of electrons with each hydrogen atom (2 bonding pairs) and retains 2 lone pairs of electrons. This gives oxygen a full outer shell of 8 electrons.'
          },
          {
            q: 'Which of these molecules contains a double covalent bond?',
            options: ['H\u2082', 'H\u2082O', 'O\u2082', 'HCl'],
            answer: 2,
            explanation: 'O\u2082 has a double bond (O=O). Each oxygen atom shares 2 pairs of electrons with the other to complete their outer shells.'
          },
          {
            q: 'Why can metals conduct electricity?',
            options: [
              'They contain free ions that can move',
              'They have delocalised electrons that are free to move and carry charge',
              'They have a high melting point',
              'They contain covalent bonds'
            ],
            answer: 1,
            explanation: 'In metallic bonding, the delocalised (free) electrons can move through the structure, carrying electrical charge. This is why metals are good conductors.'
          },
          {
            q: 'What is a polyatomic ion?',
            options: [
              'An ion made from a single atom',
              'An ion made from a group of atoms covalently bonded together that carries a charge',
              'A neutral molecule',
              'A type of metallic bond'
            ],
            answer: 1,
            explanation: 'A polyatomic ion is a group of atoms bonded together by covalent bonds that carries an overall charge. Examples include OH\u207B (hydroxide), NO\u2083\u207B (nitrate), and SO\u2084\u00B2\u207B (sulfate).'
          },
          {
            q: 'How many covalent bonds does carbon typically form?',
            options: ['1', '2', '3', '4'],
            answer: 3,
            explanation: 'Carbon has 4 outer electrons and needs 4 more to fill its outer shell, so it forms 4 covalent bonds. This allows it to form diverse structures like diamond and methane.'
          },
          {
            q: 'In metallic bonding, the metal ions are arranged in:',
            options: [
              'A random arrangement',
              'A regular lattice structure',
              'Separate molecules',
              'Long chains'
            ],
            answer: 1,
            explanation: 'Metal ions are arranged in a regular, closely packed lattice structure, with delocalised electrons free to move between the ions.'
          },
          {
            q: 'Which of these substances contains both ionic and covalent bonding?',
            options: [
              'Sodium chloride (NaCl)',
              'Sodium hydroxide (NaOH)',
              'Water (H\u2082O)',
              'Copper (Cu)'
            ],
            answer: 1,
            explanation: 'NaOH contains ionic bonding between Na\u207A and OH\u207B ions, and covalent bonding between the O and H atoms within the hydroxide ion.'
          },
          {
            q: 'The formula of calcium chloride is CaCl\u2082. What does this tell you about the bonding?',
            options: [
              'Calcium loses 1 electron to each chlorine atom',
              'Calcium loses 2 electrons; each chlorine gains 1 electron',
              'Calcium and chlorine share electrons',
              'Calcium gains 2 electrons from chlorine'
            ],
            answer: 1,
            explanation: 'Calcium (Group 2) loses 2 electrons to form Ca\u00B2\u207A. Each chlorine (Group 7) gains 1 electron to form Cl\u207B. Two Cl\u207B ions are needed to balance the 2+ charge on calcium.'
          },
          {
            q: 'What is the dot-and-cross diagram of methane (CH\u2084)?',
            options: [
              'Carbon shares one pair of electrons with each of 4 hydrogen atoms',
              'Carbon transfers 4 electrons to 4 hydrogen atoms',
              'Carbon forms a double bond with 2 hydrogen atoms',
              'Hydrogen atoms share electrons with each other'
            ],
            answer: 0,
            explanation: 'In methane, carbon forms 4 single covalent bonds by sharing one pair of electrons with each of the 4 hydrogen atoms, giving carbon a full outer shell of 8 electrons.'
          },
          {
            q: 'Why are metals malleable (can be bent and shaped)?',
            options: [
              'The ionic bonds break easily',
              'The layers of metal ions can slide over each other while delocalised electrons hold them together',
              'Metals have weak intermolecular forces',
              'The covalent bonds are flexible'
            ],
            answer: 1,
            explanation: 'In metals, layers of ions can slide over each other when a force is applied. The delocalised electrons shift with the layers, maintaining the metallic bonding and holding the structure together.'
          },
          {
            q: 'Which pair of elements would be most likely to form an ionic compound?',
            options: [
              'Carbon and oxygen',
              'Hydrogen and chlorine',
              'Sodium and chlorine',
              'Nitrogen and hydrogen'
            ],
            answer: 2,
            explanation: 'Ionic compounds form between metals and non-metals. Sodium is a reactive metal (Group 1) and chlorine is a reactive non-metal (Group 7), so they form the ionic compound NaCl.'
          },
          {
            q: 'Nitrogen gas (N\u2082) has a triple covalent bond. How many electron pairs are shared?',
            options: ['1', '2', '3', '6'],
            answer: 2,
            explanation: 'A triple bond consists of 3 shared pairs of electrons (6 electrons total). Each nitrogen atom contributes 3 electrons to form the N\u2261N triple bond.'
          },
          {
            q: 'An ionic bond is best described as:',
            options: [
              'A shared pair of electrons',
              'The electrostatic attraction between oppositely charged ions',
              'A bond between two non-metals',
              'The attraction between delocalised electrons and metal ions'
            ],
            answer: 1,
            explanation: 'An ionic bond is the strong electrostatic force of attraction between oppositely charged ions (e.g. Na\u207A and Cl\u207B).'
          },
          {
            q: 'Which of these is NOT a property of metallic bonding?',
            options: [
              'Good electrical conductivity',
              'Malleability',
              'Low melting points',
              'Good thermal conductivity'
            ],
            answer: 2,
            explanation: 'Metals generally have high melting points because of the strong electrostatic attraction between the positive metal ions and the sea of delocalised electrons. Low melting point is not typical.'
          }
        ]
      },
      {
        topic: 'Properties of Different Structures',
        questions: [
          {
            q: 'Why does sodium chloride have a high melting point?',
            options: [
              'It contains covalent bonds which are hard to break',
              'It has strong electrostatic forces between positive and negative ions throughout its giant lattice',
              'It contains metallic bonds',
              'It has strong intermolecular forces'
            ],
            answer: 1,
            explanation: 'NaCl has a giant ionic lattice with strong electrostatic forces of attraction between Na\u207A and Cl\u207B ions in all directions. A lot of energy is needed to overcome these forces.'
          },
          {
            q: 'Why does solid sodium chloride NOT conduct electricity, but molten or dissolved NaCl does?',
            options: [
              'The ions are free to move when molten or dissolved, but fixed in position in the solid',
              'The electrons are free to move when molten',
              'Solid NaCl has no ions',
              'Molten NaCl contains metallic bonds'
            ],
            answer: 0,
            explanation: 'In solid NaCl, ions are held in fixed positions in the lattice and cannot move to carry charge. When molten or dissolved, the ions are free to move and conduct electricity.'
          },
          {
            q: 'Diamond is very hard because:',
            options: [
              'It contains ionic bonds',
              'Each carbon atom forms 4 strong covalent bonds in a rigid giant structure',
              'It has delocalised electrons',
              'It contains weak intermolecular forces'
            ],
            answer: 1,
            explanation: 'In diamond, every carbon atom is covalently bonded to 4 others in a giant covalent (macromolecular) structure. The many strong C-C covalent bonds make it extremely hard.'
          },
          {
            q: 'Why is graphite a good conductor of electricity?',
            options: [
              'It contains ionic bonds',
              'Each carbon is bonded to 4 other carbons',
              'Each carbon is bonded to 3 others, leaving one delocalised electron per atom that can move and carry charge',
              'It has a low melting point'
            ],
            answer: 2,
            explanation: 'In graphite, each carbon bonds to 3 others in layers. The fourth electron from each carbon is delocalised, allowing these electrons to move along the layers and conduct electricity.'
          },
          {
            q: 'Why does graphite act as a lubricant?',
            options: [
              'It has strong covalent bonds between layers',
              'The layers are held together by weak intermolecular forces and can slide over each other',
              'It contains ions that move freely',
              'It dissolves in water easily'
            ],
            answer: 1,
            explanation: 'Graphite consists of layers of carbon atoms. The layers are held together by weak intermolecular (van der Waals) forces, so they can slide over each other easily, making graphite slippery.'
          },
          {
            q: 'Simple molecular substances (like water and oxygen) have low melting and boiling points because:',
            options: [
              'The covalent bonds within molecules are weak',
              'The intermolecular forces between molecules are weak and require little energy to overcome',
              'They contain no bonds at all',
              'They have ionic bonds that break easily'
            ],
            answer: 1,
            explanation: 'Simple molecular substances have weak intermolecular forces between molecules. It is these forces (not the covalent bonds) that are overcome during melting and boiling, requiring little energy.'
          },
          {
            q: 'Why do simple molecular substances not conduct electricity?',
            options: [
              'They have no free electrons or ions to carry charge',
              'They have too many electrons',
              'Their covalent bonds are too strong',
              'They are always gases'
            ],
            answer: 0,
            explanation: 'Simple molecular substances have no free electrons or ions, so there are no charged particles to carry an electrical current.'
          },
          {
            q: 'Silicon dioxide (SiO\u2082) has a very high melting point because:',
            options: [
              'It is an ionic compound',
              'It is a simple molecular substance with strong intermolecular forces',
              'It has a giant covalent structure with many strong covalent bonds that need to be broken',
              'It contains metallic bonds'
            ],
            answer: 2,
            explanation: 'SiO\u2082 has a giant covalent (macromolecular) structure similar to diamond. Many strong Si-O covalent bonds must be broken to melt it, requiring a very large amount of energy.'
          },
          {
            q: 'Which of these substances would you expect to have the lowest boiling point?',
            options: ['Sodium chloride', 'Diamond', 'Chlorine (Cl\u2082)', 'Silicon dioxide'],
            answer: 2,
            explanation: 'Chlorine is a simple molecular substance with weak intermolecular forces, so it has a very low boiling point (-34\u00B0C). The others are giant structures with high melting/boiling points.'
          },
          {
            q: 'What is the structure of a polymer?',
            options: [
              'A giant ionic lattice',
              'Very large molecules made of many repeating units bonded by strong covalent bonds',
              'A small simple molecule',
              'A metallic lattice'
            ],
            answer: 1,
            explanation: 'Polymers are very large molecules (macromolecules) made up of many repeating monomer units joined by strong covalent bonds. They have higher melting points than small simple molecules.'
          },
          {
            q: 'Which statement correctly compares diamond and graphite?',
            options: [
              'Diamond conducts electricity but graphite does not',
              'Both have 4 covalent bonds per carbon atom',
              'Diamond is hard and graphite is soft and slippery',
              'Graphite has a higher melting point than diamond'
            ],
            answer: 2,
            explanation: 'Diamond is very hard (4 bonds per carbon in a rigid structure). Graphite is soft and slippery (3 bonds per carbon in layers that slide). Both have very high melting points.'
          },
          {
            q: 'Graphene is a single layer of graphite. Which property makes it useful in electronics?',
            options: [
              'It is an insulator',
              'It is a very good electrical conductor because of delocalised electrons',
              'It is very thick',
              'It dissolves in water'
            ],
            answer: 1,
            explanation: 'Graphene has delocalised electrons (like graphite) that allow it to conduct electricity very well. Its single-layer structure also makes it extremely strong and lightweight.'
          },
          {
            q: 'Fullerenes (e.g. buckminsterfullerene C\u2086\u2080) can be used to:',
            options: [
              'Replace diamond in jewellery',
              'Deliver drugs into the body because of their hollow structure',
              'Make ionic compounds',
              'Act as thermal insulators'
            ],
            answer: 1,
            explanation: 'Fullerenes have hollow cage-like structures that can trap molecules inside. This makes them useful for drug delivery, as they can carry drug molecules to specific sites in the body.'
          },
          {
            q: 'Why does ice float on water?',
            options: [
              'Ice has stronger covalent bonds than water',
              'Ice is denser than liquid water',
              'Ice has a more open structure due to hydrogen bonding, making it less dense than liquid water',
              'Ice contains different atoms than liquid water'
            ],
            answer: 2,
            explanation: 'When water freezes, the hydrogen bonds hold the molecules in a more open, regular arrangement. This makes ice less dense than liquid water, so it floats.'
          },
          {
            q: 'An alloy is harder than a pure metal because:',
            options: [
              'It contains ionic bonds',
              'Atoms of different sizes distort the regular layers, preventing them from sliding easily',
              'It has weaker metallic bonds',
              'It has fewer delocalised electrons'
            ],
            answer: 1,
            explanation: 'In an alloy, atoms of different sizes disrupt the regular arrangement of layers. This prevents the layers from sliding over each other as easily, making the alloy harder.'
          },
          {
            q: 'Which of the following is a giant covalent structure?',
            options: ['Sodium chloride', 'Methane', 'Diamond', 'Copper'],
            answer: 2,
            explanation: 'Diamond is a giant covalent structure. NaCl is a giant ionic structure, methane is a simple molecular substance, and copper is a metallic structure.'
          },
          {
            q: 'Carbon nanotubes are useful for strengthening materials because:',
            options: [
              'They are very soft',
              'They have extremely high tensile strength due to strong covalent bonds',
              'They dissolve easily',
              'They have low melting points'
            ],
            answer: 1,
            explanation: 'Carbon nanotubes are cylindrical fullerenes with incredibly high tensile strength due to the strong covalent bonds between carbon atoms. They can reinforce composite materials.'
          },
          {
            q: 'A substance has a high melting point, does not conduct electricity when solid, but does conduct when dissolved in water. Its structure is most likely:',
            options: [
              'Simple molecular',
              'Giant covalent',
              'Giant ionic',
              'Metallic'
            ],
            answer: 2,
            explanation: 'Giant ionic substances have high melting points and conduct electricity when dissolved (ions free to move) but not when solid (ions in fixed positions).'
          },
          {
            q: 'Why does water have a relatively high boiling point for a simple molecular substance?',
            options: [
              'It has very strong covalent bonds',
              'It has hydrogen bonds (a type of relatively strong intermolecular force) between molecules',
              'It has a giant covalent structure',
              'It contains ionic bonds'
            ],
            answer: 1,
            explanation: 'Water molecules form hydrogen bonds between the slightly positive hydrogen atoms and the slightly negative oxygen atoms on neighbouring molecules. These are relatively strong intermolecular forces.'
          },
          {
            q: 'Which substance has the structure: layers of atoms with delocalised electrons between them?',
            options: ['Diamond', 'Sodium chloride', 'Graphite', 'Silicon dioxide'],
            answer: 2,
            explanation: 'Graphite has layers of carbon atoms, each bonded to 3 others, with delocalised electrons between the layers. This unique structure gives it its properties as a conductor and lubricant.'
          }
        ]
      },
      {
        topic: 'Nanoparticles',
        questions: [
          {
            q: 'Nanoparticles are defined as particles with dimensions between:',
            options: [
              '1 and 100 metres',
              '1 and 100 millimetres',
              '1 and 100 nanometres',
              '1 and 100 micrometres'
            ],
            answer: 2,
            explanation: 'Nanoparticles have dimensions between 1 and 100 nanometres (nm). 1 nm = 10\u207B\u2079 m. They are much smaller than fine particles but larger than individual atoms.'
          },
          {
            q: 'How does a nanoparticle compare in size to a fine particle (PM 2.5)?',
            options: [
              'Nanoparticles are larger',
              'They are the same size',
              'Nanoparticles are much smaller',
              'Fine particles are smaller than nanoparticles'
            ],
            answer: 2,
            explanation: 'Fine particles (like PM 2.5) have diameters of about 100 nm to 2500 nm. Nanoparticles (1-100 nm) are much smaller than fine particles.'
          },
          {
            q: 'Why do nanoparticles have different properties to bulk materials of the same substance?',
            options: [
              'They contain different atoms',
              'They have a much larger surface area to volume ratio',
              'They have stronger covalent bonds',
              'They are made of different elements'
            ],
            answer: 1,
            explanation: 'Nanoparticles have a very high surface area to volume ratio. This means a greater proportion of atoms are on the surface, giving them different physical and chemical properties.'
          },
          {
            q: 'Which of these is a potential use of nanoparticles in medicine?',
            options: [
              'As building materials',
              'As fuel for cars',
              'Delivering drugs to specific cells in the body',
              'Making clothing waterproof'
            ],
            answer: 2,
            explanation: 'Nanoparticles can be used for targeted drug delivery, carrying medicine directly to diseased cells. This can reduce side effects and improve treatment effectiveness.'
          },
          {
            q: 'Silver nanoparticles are added to some wound dressings because:',
            options: [
              'They are shiny and attractive',
              'They have antibacterial properties',
              'They make the dressing cheaper',
              'They conduct electricity'
            ],
            answer: 1,
            explanation: 'Silver nanoparticles have antibacterial properties. Their high surface area to volume ratio makes them very effective at killing bacteria, helping prevent wound infections.'
          },
          {
            q: 'What is a concern about the use of nanoparticles?',
            options: [
              'They are too large to be useful',
              'Their small size means they could enter cells and have unknown long-term health effects',
              'They are too expensive to produce',
              'They react with oxygen and explode'
            ],
            answer: 1,
            explanation: 'Because nanoparticles are so small, they may be able to enter cells and accumulate in organs. The long-term effects on human health and the environment are not yet fully understood.'
          },
          {
            q: 'Titanium dioxide nanoparticles are used in sunscreens because:',
            options: [
              'They make the sunscreen visible on the skin',
              'They are transparent but still absorb and reflect UV light effectively',
              'They dissolve in water easily',
              'They have a pleasant smell'
            ],
            answer: 1,
            explanation: 'TiO\u2082 nanoparticles are so small they appear transparent on skin (unlike bulk TiO\u2082 which is white), while still effectively absorbing and reflecting harmful UV radiation.'
          },
          {
            q: 'As particle size decreases, the surface area to volume ratio:',
            options: [
              'Decreases',
              'Stays the same',
              'Increases',
              'First increases then decreases'
            ],
            answer: 2,
            explanation: 'Smaller particles have a larger surface area relative to their volume. This is why nanoparticles are so reactive \u2014 more atoms are exposed at the surface.'
          },
          {
            q: 'A cube of side 1 cm is cut into cubes of side 1 mm. The total surface area:',
            options: [
              'Stays the same',
              'Decreases by a factor of 10',
              'Increases by a factor of 10',
              'Doubles'
            ],
            answer: 2,
            explanation: 'Cutting a 1 cm cube into 1 mm cubes creates 1000 smaller cubes. The total surface area increases by a factor of 10, as the surface area to volume ratio increases for smaller cubes.'
          },
          {
            q: 'Nanoparticles can be used as catalysts because:',
            options: [
              'They have very low melting points',
              'Their high surface area to volume ratio provides many active sites for reactions',
              'They are magnetic',
              'They dissolve in the reactants'
            ],
            answer: 1,
            explanation: 'The very high surface area to volume ratio of nanoparticles means they have many surface atoms available to act as active sites, making them very effective catalysts even in small quantities.'
          },
          {
            q: 'Carbon nanotubes are examples of:',
            options: [
              'Ionic compounds',
              'Nanoparticles made of carbon with cylindrical structures',
              'Simple molecular substances',
              'Metallic structures'
            ],
            answer: 1,
            explanation: 'Carbon nanotubes are cylindrical nanoparticles made of carbon atoms arranged in hexagonal rings. They have remarkable strength and conductivity.'
          },
          {
            q: 'Which statement about nanoparticles in cosmetics is true?',
            options: [
              'They are banned in all countries',
              'They can improve product performance but their safety is debated',
              'They make products less effective',
              'They are always completely safe'
            ],
            answer: 1,
            explanation: 'Nanoparticles in cosmetics (e.g. sunscreens) can improve product performance, but there is ongoing debate about whether they can penetrate the skin and cause harm.'
          },
          {
            q: 'Self-cleaning glass uses nanoparticles of titanium dioxide. How does it work?',
            options: [
              'The nanoparticles repel water only',
              'The nanoparticles act as a photocatalyst, breaking down organic dirt using sunlight',
              'The nanoparticles make the glass thicker',
              'The nanoparticles dissolve the dirt using acid'
            ],
            answer: 1,
            explanation: 'TiO\u2082 nanoparticles on the glass surface act as a photocatalyst. UV light from the sun causes them to break down organic dirt. Rainwater then washes the broken-down residue away.'
          },
          {
            q: 'How many nanometres are in 1 millimetre?',
            options: ['1,000', '10,000', '100,000', '1,000,000'],
            answer: 3,
            explanation: '1 mm = 10\u207B\u00B3 m and 1 nm = 10\u207B\u2079 m. So 1 mm = 10\u207B\u00B3 / 10\u207B\u2079 = 10\u2076 = 1,000,000 nm.'
          },
          {
            q: 'Coarse particles (dust) typically have diameters in the range:',
            options: [
              '1 nm to 100 nm',
              '100 nm to 2500 nm',
              '1 \u00B5m to 2500 \u00B5m (or 1000 nm to 2.5 mm)',
              'Greater than 10 mm'
            ],
            answer: 2,
            explanation: 'Coarse particles (PM 10) have diameters roughly between 1 \u00B5m and 2500 \u00B5m. Fine particles are 100 nm to 2500 nm, and nanoparticles are 1-100 nm.'
          },
          {
            q: 'Fullerenes can be used to:',
            options: [
              'Make ionic lattices',
              'Act as lubricants and deliver drugs due to their hollow cage structure',
              'Replace metals in electrical wires',
              'Make nuclear fuel'
            ],
            answer: 1,
            explanation: 'Fullerenes have hollow structures that can trap other molecules inside. They can act as lubricants (like graphite) and are being developed for drug delivery and catalyst support.'
          },
          {
            q: 'Buckminsterfullerene (C\u2086\u2080) has the shape of a:',
            options: [
              'Cylinder',
              'Flat sheet',
              'Hollow sphere (like a football)',
              'Cube'
            ],
            answer: 2,
            explanation: 'C\u2086\u2080 is a spherical molecule made of 60 carbon atoms arranged in pentagons and hexagons, resembling the pattern on a football (soccer ball).'
          },
          {
            q: 'Which of these is NOT a reason to be cautious about using nanoparticles?',
            options: [
              'They could accumulate in the environment',
              'Long-term health effects are unknown',
              'They could enter cells through membranes',
              'They are too heavy to be inhaled'
            ],
            answer: 3,
            explanation: 'Nanoparticles are extremely light and small, making them very easy to inhale \u2014 this is actually a concern, not something that makes them safe. Their small size is the main risk factor.'
          },
          {
            q: 'Nanoparticles of gold appear:',
            options: [
              'Gold/yellow, the same as bulk gold',
              'Different colours depending on their size (e.g. red or purple)',
              'Completely transparent',
              'Black'
            ],
            answer: 1,
            explanation: 'Gold nanoparticles can appear red, purple, or other colours depending on their size, unlike bulk gold which is yellow. This is due to their different interaction with light at the nanoscale.'
          },
          {
            q: 'Why might nanoparticles of a substance be more reactive than larger particles of the same substance?',
            options: [
              'They contain different atoms',
              'They have fewer atoms total',
              'A greater proportion of their atoms are on the surface and available to react',
              'They have stronger covalent bonds'
            ],
            answer: 2,
            explanation: 'With a much higher surface area to volume ratio, a greater proportion of atoms in nanoparticles are on the surface. Surface atoms are the ones available for chemical reactions, increasing reactivity.'
          }
        ]
      }
    ]
  },

  // ========== SECTION 3: QUANTITATIVE CHEMISTRY ==========
  {
    section: 'Quantitative Chemistry',
    icon: '\u2696\uFE0F',
    color: '#D97706',
    topics: [
      {
        topic: 'Conservation of Mass',
        questions: [
          {
            q: 'The law of conservation of mass states that:',
            options: [
              'Mass is always created during a chemical reaction',
              'Mass is always destroyed during a chemical reaction',
              'No atoms are created or destroyed in a chemical reaction, so total mass is conserved',
              'Energy is conserved but mass is not'
            ],
            answer: 2,
            explanation: 'In a chemical reaction, atoms are rearranged but not created or destroyed. The total mass of products equals the total mass of reactants.'
          },
          {
            q: 'When magnesium burns in air, the mass of the product (magnesium oxide) is greater than the mass of the magnesium used. Why?',
            options: [
              'Mass is created during the reaction',
              'Oxygen from the air combines with the magnesium, adding mass',
              'The magnesium expands when heated',
              'Experimental error'
            ],
            answer: 1,
            explanation: 'The magnesium reacts with oxygen from the air. The mass of oxygen adds to the mass of magnesium, making the product heavier. Mass is still conserved overall.'
          },
          {
            q: 'When calcium carbonate is heated, the mass of the remaining solid decreases. This is because:',
            options: [
              'Mass is destroyed',
              'Carbon dioxide gas is released into the atmosphere',
              'The calcium disappears',
              'Water evaporates from the solid'
            ],
            answer: 1,
            explanation: 'CaCO\u2083 \u2192 CaO + CO\u2082. The carbon dioxide gas escapes into the air, so the remaining solid (CaO) has less mass. If the CO\u2082 were captured, total mass would be conserved.'
          },
          {
            q: 'Balance the equation: __Mg + __O\u2082 \u2192 __MgO',
            options: [
              'Mg + O\u2082 \u2192 MgO',
              '2Mg + O\u2082 \u2192 2MgO',
              'Mg + O\u2082 \u2192 MgO\u2082',
              '2Mg + 2O\u2082 \u2192 2MgO'
            ],
            answer: 1,
            explanation: '2Mg + O\u2082 \u2192 2MgO. There are 2 Mg atoms and 2 O atoms on each side, so the equation is balanced.'
          },
          {
            q: 'Balance the equation: __Fe + __Cl\u2082 \u2192 __FeCl\u2083',
            options: [
              'Fe + Cl\u2082 \u2192 FeCl\u2083',
              '2Fe + Cl\u2082 \u2192 2FeCl\u2083',
              '2Fe + 3Cl\u2082 \u2192 2FeCl\u2083',
              'Fe + 3Cl\u2082 \u2192 2FeCl\u2083'
            ],
            answer: 2,
            explanation: '2Fe + 3Cl\u2082 \u2192 2FeCl\u2083. Left: 2 Fe, 6 Cl. Right: 2 Fe, 6 Cl. Balanced.'
          },
          {
            q: 'In the reaction 2H\u2082 + O\u2082 \u2192 2H\u2082O, how many molecules of water are produced from 4 molecules of hydrogen?',
            options: ['2', '4', '6', '8'],
            answer: 1,
            explanation: 'The ratio is 2H\u2082 : 2H\u2082O (1:1 for H\u2082 to H\u2082O). So 4 molecules of H\u2082 produce 4 molecules of H\u2082O.'
          },
          {
            q: 'If 10 g of reactants are used and 7 g of solid product is formed, how much gas was released?',
            options: ['0 g', '3 g', '7 g', '17 g'],
            answer: 1,
            explanation: 'By conservation of mass: mass of gas = total reactant mass - solid product mass = 10 - 7 = 3 g.'
          },
          {
            q: 'Balance the equation: __Na + __H\u2082O \u2192 __NaOH + __H\u2082',
            options: [
              'Na + H\u2082O \u2192 NaOH + H\u2082',
              '2Na + 2H\u2082O \u2192 2NaOH + H\u2082',
              'Na + 2H\u2082O \u2192 NaOH + H\u2082',
              '2Na + H\u2082O \u2192 2NaOH + H\u2082'
            ],
            answer: 1,
            explanation: '2Na + 2H\u2082O \u2192 2NaOH + H\u2082. Left: 2 Na, 4 H, 2 O. Right: 2 Na, 4 H, 2 O. Balanced.'
          },
          {
            q: 'Why must chemical equations be balanced?',
            options: [
              'To make them look neat',
              'Because atoms cannot be created or destroyed in a chemical reaction',
              'Because molecules must always be in pairs',
              'To show the physical states of substances'
            ],
            answer: 1,
            explanation: 'Equations must be balanced to reflect the law of conservation of mass. The same number of each type of atom must appear on both sides of the equation.'
          },
          {
            q: 'Balance: __CH\u2084 + __O\u2082 \u2192 __CO\u2082 + __H\u2082O',
            options: [
              'CH\u2084 + O\u2082 \u2192 CO\u2082 + H\u2082O',
              'CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O',
              'CH\u2084 + 3O\u2082 \u2192 CO\u2082 + 2H\u2082O',
              '2CH\u2084 + 3O\u2082 \u2192 2CO\u2082 + 2H\u2082O'
            ],
            answer: 1,
            explanation: 'CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O. Left: 1 C, 4 H, 4 O. Right: 1 C, 4 H, 4 O. Balanced.'
          },
          {
            q: 'In a precipitation reaction carried out in a sealed container, what happens to the total mass?',
            options: [
              'It increases',
              'It decreases',
              'It stays the same',
              'It depends on the reaction'
            ],
            answer: 2,
            explanation: 'In a sealed container, no substances can enter or leave. By conservation of mass, the total mass remains exactly the same, even though a solid precipitate forms.'
          },
          {
            q: 'When iron reacts with copper sulfate solution: Fe + CuSO\u2084 \u2192 FeSO\u2084 + Cu. If 56 g of iron reacts with 160 g of copper sulfate, what is the total mass of products?',
            options: ['56 g', '104 g', '160 g', '216 g'],
            answer: 3,
            explanation: 'By conservation of mass, total mass of products = total mass of reactants = 56 + 160 = 216 g.'
          },
          {
            q: 'Balance: __Al + __O\u2082 \u2192 __Al\u2082O\u2083',
            options: [
              '2Al + O\u2082 \u2192 Al\u2082O\u2083',
              '4Al + 3O\u2082 \u2192 2Al\u2082O\u2083',
              '2Al + 3O\u2082 \u2192 Al\u2082O\u2083',
              'Al + O\u2082 \u2192 Al\u2082O\u2083'
            ],
            answer: 1,
            explanation: '4Al + 3O\u2082 \u2192 2Al\u2082O\u2083. Left: 4 Al, 6 O. Right: 4 Al, 6 O. Balanced.'
          },
          {
            q: 'In the equation 2Na + Cl\u2082 \u2192 2NaCl, what does the 2 in front of Na represent?',
            options: [
              'There are 2 protons in sodium',
              'Two atoms/formula units of sodium are needed',
              'Sodium has an atomic number of 2',
              'Two molecules of sodium chloride are reactants'
            ],
            answer: 1,
            explanation: 'The large number in front of a formula (coefficient) shows how many atoms, molecules, or formula units of that substance are involved in the reaction.'
          },
          {
            q: 'A student heats copper carbonate in an open crucible. The mass decreases. Which gas was lost?',
            options: [
              'Oxygen',
              'Hydrogen',
              'Carbon dioxide',
              'Nitrogen'
            ],
            answer: 2,
            explanation: 'CuCO\u2083 \u2192 CuO + CO\u2082. When copper carbonate is heated (thermal decomposition), carbon dioxide gas is produced and escapes, reducing the mass of solid remaining.'
          },
          {
            q: 'Balance: __C\u2082H\u2086 + __O\u2082 \u2192 __CO\u2082 + __H\u2082O',
            options: [
              'C\u2082H\u2086 + O\u2082 \u2192 2CO\u2082 + 3H\u2082O',
              '2C\u2082H\u2086 + 7O\u2082 \u2192 4CO\u2082 + 6H\u2082O',
              'C\u2082H\u2086 + 3O\u2082 \u2192 2CO\u2082 + 3H\u2082O',
              'C\u2082H\u2086 + 4O\u2082 \u2192 2CO\u2082 + 3H\u2082O'
            ],
            answer: 1,
            explanation: '2C\u2082H\u2086 + 7O\u2082 \u2192 4CO\u2082 + 6H\u2082O. Left: 4 C, 12 H, 14 O. Right: 4 C, 12 H, 14 O. Balanced.'
          },
          {
            q: 'State symbols in equations: what does (aq) mean?',
            options: [
              'The substance is a solid',
              'The substance is dissolved in water (aqueous)',
              'The substance is a gas',
              'The substance is a liquid'
            ],
            answer: 1,
            explanation: '(aq) means aqueous \u2014 dissolved in water. Other state symbols: (s) = solid, (l) = liquid, (g) = gas.'
          },
          {
            q: 'When zinc reacts with hydrochloric acid in an open beaker, the mass decreases because:',
            options: [
              'Zinc dissolves and disappears',
              'The acid evaporates',
              'Hydrogen gas is produced and escapes',
              'Mass is destroyed in the reaction'
            ],
            answer: 2,
            explanation: 'Zn + 2HCl \u2192 ZnCl\u2082 + H\u2082. The hydrogen gas produced escapes from the open beaker, causing the measured mass to decrease. If sealed, mass would be conserved.'
          },
          {
            q: 'Half equations show what happens at each electrode during electrolysis. In the half equation: Cu\u00B2\u207A + 2e\u207B \u2192 Cu, what is happening?',
            options: [
              'Copper is being oxidised',
              'Copper ions are gaining electrons (being reduced)',
              'Electrons are being removed from copper',
              'Copper is dissolving'
            ],
            answer: 1,
            explanation: 'Cu\u00B2\u207A ions gain 2 electrons to form copper atoms. Gaining electrons is reduction (remember: OILRIG \u2014 Reduction Is Gain).'
          },
          {
            q: 'In the balanced equation N\u2082 + 3H\u2082 \u2192 2NH\u2083, what is the ratio of nitrogen to hydrogen molecules?',
            options: ['1:1', '1:2', '1:3', '2:3'],
            answer: 2,
            explanation: 'The coefficients show the ratio: 1 molecule of N\u2082 reacts with 3 molecules of H\u2082 to produce 2 molecules of NH\u2083. The ratio N\u2082 : H\u2082 is 1:3.'
          }
        ]
      },
      {
        topic: 'Moles',
        questions: [
          {
            q: 'What is the relative formula mass (M\u1d63) of water (H\u2082O)? (A\u1d63: H = 1, O = 16)',
            options: ['17', '18', '19', '20'],
            answer: 1,
            explanation: 'M\u1d63 of H\u2082O = (2 \u00D7 1) + 16 = 18.'
          },
          {
            q: 'One mole of any substance contains how many particles?',
            options: [
              '6.02 \u00D7 10\u00B2\u00B3 (Avogadro\'s constant)',
              '6.02 \u00D7 10\u00B2\u00B2',
              '3.01 \u00D7 10\u00B2\u00B3',
              '1.00 \u00D7 10\u00B2\u00B3'
            ],
            answer: 0,
            explanation: 'One mole contains 6.02 \u00D7 10\u00B2\u00B3 particles (atoms, molecules, ions, etc.). This is known as Avogadro\'s constant.'
          },
          {
            q: 'Calculate the number of moles in 48 g of magnesium (A\u1d63 of Mg = 24).',
            options: ['0.5', '1', '2', '24'],
            answer: 2,
            explanation: 'Moles = mass / A\u1d63 = 48 / 24 = 2 moles.'
          },
          {
            q: 'What is the mass of 0.5 moles of calcium carbonate, CaCO\u2083? (A\u1d63: Ca = 40, C = 12, O = 16)',
            options: ['50 g', '100 g', '25 g', '200 g'],
            answer: 0,
            explanation: 'M\u1d63 of CaCO\u2083 = 40 + 12 + (3 \u00D7 16) = 100. Mass = moles \u00D7 M\u1d63 = 0.5 \u00D7 100 = 50 g.'
          },
          {
            q: 'How many moles of sodium hydroxide (NaOH) are in 8 g? (A\u1d63: Na = 23, O = 16, H = 1)',
            options: ['0.1', '0.2', '0.5', '4'],
            answer: 1,
            explanation: 'M\u1d63 of NaOH = 23 + 16 + 1 = 40. Moles = 8 / 40 = 0.2 mol.'
          },
          {
            q: 'In the reaction 2Mg + O\u2082 \u2192 2MgO, if 2 moles of Mg react, how many moles of MgO are produced?',
            options: ['1', '2', '3', '4'],
            answer: 1,
            explanation: 'The ratio of Mg to MgO is 2:2 (or 1:1). So 2 moles of Mg produce 2 moles of MgO.'
          },
          {
            q: 'What is the relative formula mass of sulfuric acid (H\u2082SO\u2084)? (A\u1d63: H = 1, S = 32, O = 16)',
            options: ['49', '82', '96', '98'],
            answer: 3,
            explanation: 'M\u1d63 of H\u2082SO\u2084 = (2 \u00D7 1) + 32 + (4 \u00D7 16) = 2 + 32 + 64 = 98.'
          },
          {
            q: 'What mass of carbon dioxide is produced when 10 g of calcium carbonate decomposes? CaCO\u2083 \u2192 CaO + CO\u2082 (M\u1d63: CaCO\u2083 = 100, CO\u2082 = 44)',
            options: ['4.4 g', '5.6 g', '10 g', '44 g'],
            answer: 0,
            explanation: 'Moles of CaCO\u2083 = 10/100 = 0.1 mol. Ratio CaCO\u2083 : CO\u2082 is 1:1, so 0.1 mol CO\u2082 produced. Mass = 0.1 \u00D7 44 = 4.4 g.'
          },
          {
            q: 'The empirical formula of a compound containing 40% carbon, 6.7% hydrogen, and 53.3% oxygen is: (A\u1d63: C = 12, H = 1, O = 16)',
            options: ['CHO', 'CH\u2082O', 'C\u2082H\u2084O\u2082', 'C\u2083H\u2086O\u2083'],
            answer: 1,
            explanation: 'C: 40/12 = 3.33, H: 6.7/1 = 6.7, O: 53.3/16 = 3.33. Divide by smallest (3.33): C = 1, H \u2248 2, O = 1. Empirical formula = CH\u2082O.'
          },
          {
            q: 'What is the percentage by mass of oxygen in MgO? (A\u1d63: Mg = 24, O = 16)',
            options: ['40%', '60%', '66.7%', '33.3%'],
            answer: 0,
            explanation: 'M\u1d63 of MgO = 24 + 16 = 40. Percentage of O = (16/40) \u00D7 100 = 40%.'
          },
          {
            q: 'In the reaction N\u2082 + 3H\u2082 \u2192 2NH\u2083, what mass of ammonia is produced from 28 g of nitrogen? (A\u1d63: N = 14, H = 1)',
            options: ['17 g', '34 g', '51 g', '68 g'],
            answer: 1,
            explanation: 'Moles of N\u2082 = 28/28 = 1 mol. Ratio N\u2082 : NH\u2083 = 1:2, so 2 mol NH\u2083. M\u1d63 of NH\u2083 = 17. Mass = 2 \u00D7 17 = 34 g.'
          },
          {
            q: 'A limiting reactant is:',
            options: [
              'The reactant that is in excess',
              'The reactant that is completely used up and determines the amount of product formed',
              'The reactant with the largest mass',
              'The most dangerous reactant'
            ],
            answer: 1,
            explanation: 'The limiting reactant is completely used up first and limits the amount of product formed. The other reactant is in excess \u2014 some of it is left over.'
          },
          {
            q: 'Calculate the number of moles of CO\u2082 in 11 g of carbon dioxide. (M\u1d63 of CO\u2082 = 44)',
            options: ['0.25', '0.5', '4', '44'],
            answer: 0,
            explanation: 'Moles = mass / M\u1d63 = 11 / 44 = 0.25 mol.'
          },
          {
            q: 'What volume does 1 mole of any gas occupy at room temperature and pressure (RTP)?',
            options: ['12 dm\u00B3', '22.4 dm\u00B3', '24 dm\u00B3', '100 dm\u00B3'],
            answer: 2,
            explanation: 'At room temperature and pressure (approximately 20\u00B0C and 1 atm), 1 mole of any gas occupies 24 dm\u00B3 (24,000 cm\u00B3).'
          },
          {
            q: 'What volume of hydrogen gas (at RTP) is produced when 0.5 moles of H\u2082 are formed?',
            options: ['6 dm\u00B3', '12 dm\u00B3', '24 dm\u00B3', '48 dm\u00B3'],
            answer: 1,
            explanation: 'Volume = moles \u00D7 24 = 0.5 \u00D7 24 = 12 dm\u00B3 at RTP.'
          },
          {
            q: 'What is the mass of 3 moles of iron? (A\u1d63 of Fe = 56)',
            options: ['56 g', '112 g', '168 g', '18.7 g'],
            answer: 2,
            explanation: 'Mass = moles \u00D7 A\u1d63 = 3 \u00D7 56 = 168 g.'
          },
          {
            q: 'A compound has the empirical formula CH\u2082O and a relative molecular mass of 60. What is its molecular formula?',
            options: ['CH\u2082O', 'C\u2082H\u2084O\u2082', 'C\u2083H\u2086O\u2083', 'C\u2084H\u2088O\u2084'],
            answer: 1,
            explanation: 'Empirical formula mass of CH\u2082O = 12 + 2 + 16 = 30. Ratio = 60/30 = 2. Molecular formula = C\u2082H\u2084O\u2082.'
          },
          {
            q: 'In the equation 2H\u2082 + O\u2082 \u2192 2H\u2082O, how many moles of oxygen are needed to react with 6 moles of hydrogen?',
            options: ['2', '3', '6', '12'],
            answer: 1,
            explanation: 'The ratio H\u2082 : O\u2082 is 2:1. For 6 moles of H\u2082, moles of O\u2082 = 6/2 = 3 moles.'
          },
          {
            q: 'Calculate the percentage by mass of iron in Fe\u2082O\u2083. (A\u1d63: Fe = 56, O = 16)',
            options: ['46.7%', '56%', '70%', '112%'],
            answer: 2,
            explanation: 'M\u1d63 of Fe\u2082O\u2083 = (2 \u00D7 56) + (3 \u00D7 16) = 112 + 48 = 160. % Fe = (112/160) \u00D7 100 = 70%.'
          },
          {
            q: 'Theoretical yield is 20 g and actual yield is 15 g. What is the percentage yield?',
            options: ['25%', '50%', '75%', '133%'],
            answer: 2,
            explanation: 'Percentage yield = (actual yield / theoretical yield) \u00D7 100 = (15/20) \u00D7 100 = 75%.'
          }
        ]
      },
      {
        topic: 'Concentration & Titrations',
        questions: [
          {
            q: 'The concentration of a solution is measured in:',
            options: [
              'g/dm\u00B3 or mol/dm\u00B3',
              'g/cm\u00B3 only',
              'moles only',
              'degrees Celsius'
            ],
            answer: 0,
            explanation: 'Concentration can be expressed in g/dm\u00B3 (grams per cubic decimetre) or mol/dm\u00B3 (moles per cubic decimetre).'
          },
          {
            q: 'A solution contains 10 g of sodium chloride dissolved in 500 cm\u00B3 of water. What is its concentration in g/dm\u00B3?',
            options: ['5 g/dm\u00B3', '10 g/dm\u00B3', '20 g/dm\u00B3', '50 g/dm\u00B3'],
            answer: 2,
            explanation: '500 cm\u00B3 = 0.5 dm\u00B3. Concentration = mass / volume = 10 / 0.5 = 20 g/dm\u00B3.'
          },
          {
            q: 'What is the concentration in mol/dm\u00B3 if 0.2 moles of HCl are dissolved in 500 cm\u00B3 of solution?',
            options: ['0.1 mol/dm\u00B3', '0.2 mol/dm\u00B3', '0.4 mol/dm\u00B3', '1.0 mol/dm\u00B3'],
            answer: 2,
            explanation: '500 cm\u00B3 = 0.5 dm\u00B3. Concentration = moles / volume = 0.2 / 0.5 = 0.4 mol/dm\u00B3.'
          },
          {
            q: 'In a titration, which piece of equipment is used to add the acid precisely?',
            options: ['Beaker', 'Measuring cylinder', 'Burette', 'Test tube'],
            answer: 2,
            explanation: 'A burette allows precise addition of liquid in small, measured amounts. It is graduated to 0.1 cm\u00B3 and has a tap to control the flow.'
          },
          {
            q: 'What is the purpose of an indicator in a titration?',
            options: [
              'To speed up the reaction',
              'To show when the reaction has reached the end point (neutralisation)',
              'To measure the temperature',
              'To act as a catalyst'
            ],
            answer: 1,
            explanation: 'An indicator changes colour at the end point, showing when exactly enough acid has been added to neutralise the alkali (or vice versa).'
          },
          {
            q: 'Which indicator is commonly used in strong acid - strong alkali titrations?',
            options: [
              'Litmus',
              'Universal indicator',
              'Phenolphthalein or methyl orange',
              'Bromothymol blue only'
            ],
            answer: 2,
            explanation: 'Phenolphthalein (colourless in acid, pink in alkali) and methyl orange (red in acid, yellow in alkali) give a sharp colour change at the end point, unlike universal indicator.'
          },
          {
            q: 'A titration result gives concordant titres of 24.50 cm\u00B3, 24.45 cm\u00B3, and 24.55 cm\u00B3. What mean titre should be used?',
            options: ['24.45 cm\u00B3', '24.50 cm\u00B3', '24.55 cm\u00B3', '73.50 cm\u00B3'],
            answer: 1,
            explanation: 'Mean = (24.50 + 24.45 + 24.55) / 3 = 73.50 / 3 = 24.50 cm\u00B3. Use concordant results (within 0.10 cm\u00B3 of each other) to calculate the mean.'
          },
          {
            q: '25.0 cm\u00B3 of 0.1 mol/dm\u00B3 NaOH is neutralised by HCl. How many moles of NaOH were used?',
            options: ['0.0025 mol', '0.025 mol', '0.25 mol', '2.5 mol'],
            answer: 0,
            explanation: '25.0 cm\u00B3 = 0.025 dm\u00B3. Moles = concentration \u00D7 volume = 0.1 \u00D7 0.025 = 0.0025 mol.'
          },
          {
            q: 'NaOH + HCl \u2192 NaCl + H\u2082O. If 0.0025 mol NaOH reacts, how many moles of HCl are needed?',
            options: ['0.00125 mol', '0.0025 mol', '0.005 mol', '0.025 mol'],
            answer: 1,
            explanation: 'The ratio of NaOH to HCl is 1:1, so 0.0025 mol of NaOH reacts with exactly 0.0025 mol of HCl.'
          },
          {
            q: 'If 0.0025 mol of HCl is contained in 20.0 cm\u00B3 of solution, what is the concentration of the HCl?',
            options: ['0.05 mol/dm\u00B3', '0.125 mol/dm\u00B3', '0.5 mol/dm\u00B3', '1.25 mol/dm\u00B3'],
            answer: 1,
            explanation: '20.0 cm\u00B3 = 0.020 dm\u00B3. Concentration = moles / volume = 0.0025 / 0.020 = 0.125 mol/dm\u00B3.'
          },
          {
            q: 'How do you convert concentration from mol/dm\u00B3 to g/dm\u00B3?',
            options: [
              'Divide by M\u1d63',
              'Multiply by M\u1d63',
              'Add M\u1d63',
              'Subtract M\u1d63'
            ],
            answer: 1,
            explanation: 'Concentration (g/dm\u00B3) = concentration (mol/dm\u00B3) \u00D7 M\u1d63. This converts from number of moles to mass.'
          },
          {
            q: 'A solution has a concentration of 0.5 mol/dm\u00B3. The M\u1d63 of the solute is 40. What is the concentration in g/dm\u00B3?',
            options: ['0.0125 g/dm\u00B3', '20 g/dm\u00B3', '40 g/dm\u00B3', '80 g/dm\u00B3'],
            answer: 1,
            explanation: 'Concentration (g/dm\u00B3) = 0.5 \u00D7 40 = 20 g/dm\u00B3.'
          },
          {
            q: 'Why is a rough titration performed first?',
            options: [
              'To get the most accurate result',
              'To get an approximate value so you know where to slow down in subsequent accurate titrations',
              'To waste solution',
              'To calibrate the burette'
            ],
            answer: 1,
            explanation: 'The rough titration gives an approximate end point volume. In subsequent accurate titrations, you can add quickly until near this volume, then add dropwise for a precise result.'
          },
          {
            q: 'How many cm\u00B3 are in 1 dm\u00B3?',
            options: ['10', '100', '1000', '10000'],
            answer: 2,
            explanation: '1 dm\u00B3 = 1000 cm\u00B3. This is equivalent to 1 litre.'
          },
          {
            q: 'In a titration, why should the alkali be measured using a pipette rather than a measuring cylinder?',
            options: [
              'A pipette is cheaper',
              'A pipette measures a more precise, fixed volume',
              'A measuring cylinder is too accurate',
              'A pipette can hold more liquid'
            ],
            answer: 1,
            explanation: 'A pipette delivers a precise, fixed volume (e.g. exactly 25.0 cm\u00B3) with high accuracy. A measuring cylinder is less precise and not suitable for titrations.'
          },
          {
            q: 'What mass of solute is needed to make 250 cm\u00B3 of a 40 g/dm\u00B3 solution?',
            options: ['10 g', '40 g', '100 g', '160 g'],
            answer: 0,
            explanation: '250 cm\u00B3 = 0.25 dm\u00B3. Mass = concentration \u00D7 volume = 40 \u00D7 0.25 = 10 g.'
          },
          {
            q: 'If you dilute a solution by adding water, what happens to the concentration?',
            options: [
              'It increases',
              'It decreases',
              'It stays the same',
              'It depends on the solute'
            ],
            answer: 1,
            explanation: 'Adding water increases the volume but does not change the amount of solute. Since concentration = amount / volume, increasing volume decreases the concentration.'
          },
          {
            q: 'In a titration of 2NaOH + H\u2082SO\u2084 \u2192 Na\u2082SO\u2084 + 2H\u2082O, if 0.005 mol NaOH is used, how many moles of H\u2082SO\u2084 are needed?',
            options: ['0.0025 mol', '0.005 mol', '0.01 mol', '0.05 mol'],
            answer: 0,
            explanation: 'The ratio NaOH : H\u2082SO\u2084 is 2:1. So moles of H\u2082SO\u2084 = 0.005 / 2 = 0.0025 mol.'
          },
          {
            q: 'Atom economy is calculated by:',
            options: [
              '(mass of useful product / total mass of all products) \u00D7 100',
              '(M\u1d63 of desired product / sum of M\u1d63 of all products) \u00D7 100',
              '(actual yield / theoretical yield) \u00D7 100',
              '(mass of reactants / mass of products) \u00D7 100'
            ],
            answer: 1,
            explanation: 'Atom economy = (M\u1d63 of desired product / sum of M\u1d63 of all products) \u00D7 100. It measures how much of the reactant atoms end up in the useful product.'
          },
          {
            q: 'A reaction with 100% atom economy means:',
            options: [
              'The reaction is very slow',
              'All reactant atoms are converted into the desired product with no waste',
              'The reaction requires a catalyst',
              'The yield is always 100%'
            ],
            answer: 1,
            explanation: '100% atom economy means all atoms in the reactants end up in the desired product \u2014 there are no by-products or waste. This is ideal for sustainability.'
          }
        ]
      }
    ]
  },

  // ========== SECTION 4: CHEMICAL CHANGES ==========
  {
    section: 'Chemical Changes',
    icon: '\uD83E\uDDEA',
    color: '#DC2626',
    topics: [
      {
        topic: 'Reactivity Series & Extraction of Metals',
        questions: [
          {
            q: 'Which of these metals is the most reactive?',
            options: ['Copper', 'Iron', 'Potassium', 'Gold'],
            answer: 2,
            explanation: 'Potassium is the most reactive of these metals. The reactivity series (from most to least reactive) includes: K > Na > Ca > Mg > Al > Zn > Fe > Cu > Ag > Au.'
          },
          {
            q: 'Metals more reactive than carbon are extracted by:',
            options: [
              'Reduction with carbon',
              'Electrolysis',
              'Heating in air',
              'Filtering from seawater'
            ],
            answer: 1,
            explanation: 'Metals more reactive than carbon (e.g. aluminium, sodium) cannot be reduced by carbon. They must be extracted by electrolysis of their molten compounds.'
          },
          {
            q: 'Iron oxide is reduced to iron in a blast furnace using:',
            options: ['Electricity', 'Carbon (coke)', 'Water', 'Hydrogen'],
            answer: 1,
            explanation: 'Iron is below carbon in the reactivity series, so carbon can reduce iron oxide: Fe\u2082O\u2083 + 3CO \u2192 2Fe + 3CO\u2082 (carbon monoxide acts as the reducing agent).'
          },
          {
            q: 'In the reaction Zn + CuSO\u2084 \u2192 ZnSO\u2084 + Cu, zinc displaces copper because:',
            options: [
              'Copper is more reactive than zinc',
              'Zinc is more reactive than copper',
              'They are equally reactive',
              'Copper is a better conductor'
            ],
            answer: 1,
            explanation: 'Zinc is more reactive than copper, so it can displace copper from copper sulfate solution. The more reactive metal takes the place of the less reactive one.'
          },
          {
            q: 'What is oxidation in terms of oxygen?',
            options: [
              'Loss of oxygen',
              'Gain of oxygen',
              'Loss of electrons',
              'Gain of hydrogen'
            ],
            answer: 1,
            explanation: 'Oxidation is the gain of oxygen (and also the loss of electrons \u2014 OILRIG). For example, when iron rusts: 4Fe + 3O\u2082 \u2192 2Fe\u2082O\u2083, iron is oxidised.'
          },
          {
            q: 'What is reduction in terms of oxygen?',
            options: [
              'Gain of oxygen',
              'Loss of oxygen',
              'Gain of electrons',
              'Both B and C'
            ],
            answer: 3,
            explanation: 'Reduction is the loss of oxygen AND the gain of electrons (OILRIG). In the blast furnace, iron oxide loses oxygen (is reduced) to form iron.'
          },
          {
            q: 'Which metal can be found native (uncombined) in the Earth\'s crust?',
            options: ['Potassium', 'Aluminium', 'Iron', 'Gold'],
            answer: 3,
            explanation: 'Gold is very unreactive, so it exists naturally in its elemental form (native) in the Earth\'s crust. Reactive metals are found as compounds in ores.'
          },
          {
            q: 'If magnesium ribbon is placed in copper sulfate solution, what is observed?',
            options: [
              'Nothing happens',
              'The solution turns from blue to colourless and a brown/orange solid forms',
              'The solution turns green',
              'Gas bubbles are produced'
            ],
            answer: 1,
            explanation: 'Magnesium is more reactive than copper, so it displaces copper. The blue colour fades (Cu\u00B2\u207A ions removed) and copper metal (brown/orange solid) is deposited.'
          },
          {
            q: 'In the thermite reaction (2Al + Fe\u2082O\u2083 \u2192 Al\u2082O\u2083 + 2Fe), which substance is oxidised?',
            options: ['Iron oxide', 'Aluminium', 'Iron', 'Aluminium oxide'],
            answer: 1,
            explanation: 'Aluminium gains oxygen to form aluminium oxide, so aluminium is oxidised. Iron oxide loses oxygen (iron is reduced).'
          },
          {
            q: 'Why is aluminium extracted by electrolysis rather than reduction with carbon?',
            options: [
              'Aluminium is less dense than carbon',
              'Aluminium is more reactive than carbon, so carbon cannot reduce it',
              'Carbon is too expensive',
              'Aluminium does not form an ore'
            ],
            answer: 1,
            explanation: 'Aluminium is above carbon in the reactivity series, so carbon is not reactive enough to reduce aluminium oxide. Electrolysis of molten aluminium oxide is required.'
          },
          {
            q: 'Which of these reactions would NOT happen?',
            options: [
              'Zinc + copper sulfate solution',
              'Magnesium + iron sulfate solution',
              'Copper + magnesium sulfate solution',
              'Iron + copper sulfate solution'
            ],
            answer: 2,
            explanation: 'Copper is less reactive than magnesium, so it cannot displace magnesium from its sulfate solution. A less reactive metal cannot displace a more reactive one.'
          },
          {
            q: 'An ore is:',
            options: [
              'A pure metal found in the ground',
              'A rock containing enough metal or metal compound to make extraction worthwhile',
              'A type of alloy',
              'A mixture of two metals'
            ],
            answer: 1,
            explanation: 'An ore is a naturally occurring rock that contains a metal or metal compound in sufficient quantity to make extraction of the metal economically viable.'
          },
          {
            q: 'In terms of electrons, oxidation is:',
            options: [
              'Gain of electrons',
              'Loss of electrons',
              'Sharing of electrons',
              'No change in electrons'
            ],
            answer: 1,
            explanation: 'OILRIG: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). When a metal forms a positive ion, it loses electrons and is oxidised.'
          },
          {
            q: 'Phytomining involves:',
            options: [
              'Using explosives to mine metals',
              'Growing plants on land containing metal compounds, then harvesting and burning the plants to extract the metal',
              'Dissolving metals in acid',
              'Using bacteria to make metals'
            ],
            answer: 1,
            explanation: 'Phytomining uses plants that absorb metal compounds from the soil. The plants are harvested and burned, and the metal is extracted from the ash. It is used for low-grade ores.'
          },
          {
            q: 'Bioleaching uses:',
            options: [
              'Acids to dissolve metals from ores',
              'Bacteria to produce leachate solutions containing metal compounds',
              'Electricity to extract metals',
              'Heat to melt metals from ores'
            ],
            answer: 1,
            explanation: 'Bioleaching uses bacteria to extract metals from low-grade ores. The bacteria produce acidic solutions (leachate) that contain dissolved metal ions, which can then be recovered.'
          },
          {
            q: 'Why is recycling metals important?',
            options: [
              'It uses more energy than extracting from ores',
              'It reduces the need for mining, saves energy, and reduces landfill',
              'It makes metals less pure',
              'It is always more expensive than mining'
            ],
            answer: 1,
            explanation: 'Recycling metals reduces mining (which damages the environment), saves energy compared to extraction from ores, conserves finite resources, and reduces waste going to landfill.'
          },
          {
            q: 'In the blast furnace, limestone is added to:',
            options: [
              'Act as a fuel',
              'Provide carbon',
              'Remove impurities (like sand) by forming slag',
              'Cool down the furnace'
            ],
            answer: 2,
            explanation: 'Limestone (CaCO\u2083) decomposes to calcium oxide (CaO), which reacts with sandy impurities (SiO\u2082) to form calcium silicate (slag), removing them from the iron.'
          },
          {
            q: 'The ionic equation for a displacement reaction of zinc with copper sulfate is:',
            options: [
              'Zn + Cu\u00B2\u207A \u2192 Zn\u00B2\u207A + Cu',
              'Zn\u00B2\u207A + Cu \u2192 Zn + Cu\u00B2\u207A',
              'Zn + CuSO\u2084 \u2192 ZnSO\u2084 + Cu',
              'Zn + Cu \u2192 ZnCu'
            ],
            answer: 0,
            explanation: 'The ionic equation shows only the species that change: Zn \u2192 Zn\u00B2\u207A (oxidised, loses electrons) and Cu\u00B2\u207A \u2192 Cu (reduced, gains electrons). The sulfate ion is a spectator ion.'
          },
          {
            q: 'Rusting of iron requires:',
            options: [
              'Only oxygen',
              'Only water',
              'Both oxygen and water',
              'Carbon dioxide and water'
            ],
            answer: 2,
            explanation: 'Iron rusts (forms hydrated iron(III) oxide) only when both water and oxygen are present. Preventing either from reaching the iron surface prevents rusting.'
          },
          {
            q: 'Sacrificial protection works by:',
            options: [
              'Painting a less reactive metal onto iron',
              'Attaching a more reactive metal to iron so it corrodes instead',
              'Heating the iron to make it less reactive',
              'Coating iron with plastic'
            ],
            answer: 1,
            explanation: 'A more reactive metal (e.g. zinc or magnesium) is attached to iron. It oxidises preferentially, \"sacrificing\" itself to protect the iron from rusting.'
          }
        ]
      },
      {
        topic: 'Acids, Bases & Salts',
        questions: [
          {
            q: 'What ions do acids produce in aqueous solution?',
            options: ['OH\u207B ions', 'H\u207A (hydrogen) ions', 'Na\u207A ions', 'Cl\u207B ions'],
            answer: 1,
            explanation: 'Acids are substances that produce H\u207A (hydrogen) ions when dissolved in water. The higher the concentration of H\u207A ions, the lower the pH.'
          },
          {
            q: 'What is the pH of a neutral solution?',
            options: ['0', '1', '7', '14'],
            answer: 2,
            explanation: 'A neutral solution has a pH of 7. Below 7 is acidic, above 7 is alkaline.'
          },
          {
            q: 'What is the general equation for acid + metal?',
            options: [
              'Acid + metal \u2192 salt + water',
              'Acid + metal \u2192 salt + hydrogen',
              'Acid + metal \u2192 salt + carbon dioxide',
              'Acid + metal \u2192 metal oxide + water'
            ],
            answer: 1,
            explanation: 'When a reactive metal reacts with an acid, a salt and hydrogen gas are produced. E.g. Mg + 2HCl \u2192 MgCl\u2082 + H\u2082.'
          },
          {
            q: 'What is the general equation for acid + metal oxide (base)?',
            options: [
              'Acid + metal oxide \u2192 salt + hydrogen',
              'Acid + metal oxide \u2192 salt + water',
              'Acid + metal oxide \u2192 salt + carbon dioxide',
              'Acid + metal oxide \u2192 metal + water'
            ],
            answer: 1,
            explanation: 'Acid + metal oxide \u2192 salt + water. This is a neutralisation reaction. E.g. 2HCl + CuO \u2192 CuCl\u2082 + H\u2082O.'
          },
          {
            q: 'What is the general equation for acid + metal carbonate?',
            options: [
              'Acid + metal carbonate \u2192 salt + water',
              'Acid + metal carbonate \u2192 salt + hydrogen',
              'Acid + metal carbonate \u2192 salt + water + carbon dioxide',
              'Acid + metal carbonate \u2192 metal + carbon dioxide'
            ],
            answer: 2,
            explanation: 'Acid + metal carbonate \u2192 salt + water + carbon dioxide. E.g. 2HCl + CaCO\u2083 \u2192 CaCl\u2082 + H\u2082O + CO\u2082.'
          },
          {
            q: 'Neutralisation is the reaction between:',
            options: [
              'Two metals',
              'An acid and a base to produce a salt and water',
              'Two gases',
              'A metal and water'
            ],
            answer: 1,
            explanation: 'Neutralisation occurs when an acid reacts with a base (including alkalis) to form a salt and water. The H\u207A ions react with OH\u207B ions: H\u207A + OH\u207B \u2192 H\u2082O.'
          },
          {
            q: 'Which salt is formed when hydrochloric acid reacts with sodium hydroxide?',
            options: [
              'Sodium sulfate',
              'Sodium chloride',
              'Sodium nitrate',
              'Sodium carbonate'
            ],
            answer: 1,
            explanation: 'Hydrochloric acid always produces chloride salts. NaOH + HCl \u2192 NaCl + H\u2082O. Sodium chloride is formed.'
          },
          {
            q: 'Which acid would you use to make copper sulfate?',
            options: [
              'Hydrochloric acid',
              'Nitric acid',
              'Sulfuric acid',
              'Ethanoic acid'
            ],
            answer: 2,
            explanation: 'Sulfuric acid (H\u2082SO\u2084) produces sulfate salts. To make copper sulfate, react copper oxide with sulfuric acid: CuO + H\u2082SO\u2084 \u2192 CuSO\u2084 + H\u2082O.'
          },
          {
            q: 'A base is:',
            options: [
              'Any substance with a pH below 7',
              'A substance that neutralises an acid, including metal oxides and hydroxides',
              'A substance that produces H\u207A ions',
              'The same as an indicator'
            ],
            answer: 1,
            explanation: 'A base is a substance that neutralises an acid. Bases include metal oxides and metal hydroxides. An alkali is a soluble base that dissolves in water to produce OH\u207B ions.'
          },
          {
            q: 'What is produced when nitric acid reacts with potassium hydroxide?',
            options: [
              'Potassium chloride + water',
              'Potassium sulfate + water',
              'Potassium nitrate + water',
              'Potassium carbonate + water'
            ],
            answer: 2,
            explanation: 'Nitric acid (HNO\u2083) produces nitrate salts. KOH + HNO\u2083 \u2192 KNO\u2083 + H\u2082O. Potassium nitrate and water are formed.'
          },
          {
            q: 'Strong acids, compared to weak acids of the same concentration:',
            options: [
              'Have a higher pH',
              'Are fully ionised in solution and have a lower pH',
              'Are only partially ionised',
              'Have the same pH'
            ],
            answer: 1,
            explanation: 'Strong acids (e.g. HCl, H\u2082SO\u2084, HNO\u2083) are fully ionised in water \u2014 every acid molecule releases H\u207A ions. This gives a lower pH than a weak acid at the same concentration.'
          },
          {
            q: 'Ethanoic acid is a weak acid. This means:',
            options: [
              'It has a very low concentration',
              'It only partially ionises in aqueous solution',
              'It does not react with metals',
              'It is fully ionised in solution'
            ],
            answer: 1,
            explanation: 'A weak acid only partially ionises in water \u2014 the ionisation is reversible and an equilibrium is established. Only a small fraction of molecules release H\u207A ions at any time.'
          },
          {
            q: 'How can you make pure, dry crystals of copper sulfate from copper oxide and sulfuric acid?',
            options: [
              'Mix them and filter immediately',
              'Add excess copper oxide to warm acid, filter off excess solid, then evaporate the filtrate gently',
              'Add excess acid and boil to dryness',
              'Add a catalyst and heat strongly'
            ],
            answer: 1,
            explanation: 'Add excess copper oxide to ensure all acid reacts. Filter to remove unreacted copper oxide. Gently evaporate the filtrate to crystallise the copper sulfate, then dry the crystals.'
          },
          {
            q: 'What gas is produced when an acid reacts with a metal carbonate?',
            options: ['Hydrogen', 'Oxygen', 'Carbon dioxide', 'Nitrogen'],
            answer: 2,
            explanation: 'Acid + metal carbonate \u2192 salt + water + carbon dioxide. The CO\u2082 can be tested with limewater, which turns milky/cloudy.'
          },
          {
            q: 'The test for hydrogen gas is:',
            options: [
              'It turns limewater milky',
              'A burning splint is held near the gas and it burns with a squeaky pop',
              'It relights a glowing splint',
              'It turns damp litmus paper white'
            ],
            answer: 1,
            explanation: 'Hydrogen gas is tested with a lit splint \u2014 it burns with a squeaky pop. This is because hydrogen reacts explosively with oxygen in air.'
          },
          {
            q: 'If pH decreases from 7 to 5, what has happened to the H\u207A ion concentration?',
            options: [
              'It has decreased',
              'It has stayed the same',
              'It has increased by a factor of 100',
              'It has doubled'
            ],
            answer: 2,
            explanation: 'Each unit decrease in pH represents a 10-fold increase in H\u207A concentration. From pH 7 to pH 5 is 2 units, so H\u207A concentration increases by 10\u00B2 = 100 times.'
          },
          {
            q: 'Which of the following is NOT a strong acid?',
            options: [
              'Hydrochloric acid (HCl)',
              'Sulfuric acid (H\u2082SO\u2084)',
              'Citric acid',
              'Nitric acid (HNO\u2083)'
            ],
            answer: 2,
            explanation: 'Citric acid is a weak acid \u2014 it only partially ionises in solution. HCl, H\u2082SO\u2084, and HNO\u2083 are all strong acids that fully ionise.'
          },
          {
            q: 'A universal indicator turns green when added to a solution. The solution is:',
            options: ['Strongly acidic', 'Weakly acidic', 'Neutral', 'Alkaline'],
            answer: 2,
            explanation: 'Universal indicator turns green at pH 7, indicating a neutral solution. Red/orange = acidic, yellow/green = weakly acidic to neutral, blue/purple = alkaline.'
          },
          {
            q: 'What is produced when zinc reacts with dilute sulfuric acid?',
            options: [
              'Zinc chloride + hydrogen',
              'Zinc sulfate + hydrogen',
              'Zinc sulfate + water',
              'Zinc oxide + hydrogen'
            ],
            answer: 1,
            explanation: 'Zn + H\u2082SO\u2084 \u2192 ZnSO\u2084 + H\u2082. Metal + acid \u2192 salt + hydrogen. Sulfuric acid produces sulfate salts.'
          },
          {
            q: 'Indigestion tablets contain bases such as calcium carbonate. They work by:',
            options: [
              'Making the stomach more acidic',
              'Neutralising excess stomach acid',
              'Adding more H\u207A ions',
              'Dissolving food faster'
            ],
            answer: 1,
            explanation: 'Indigestion is caused by excess hydrochloric acid in the stomach. The base in the tablet neutralises the acid: CaCO\u2083 + 2HCl \u2192 CaCl\u2082 + H\u2082O + CO\u2082.'
          }
        ]
      },
      {
        topic: 'Electrolysis',
        questions: [
          {
            q: 'Electrolysis is:',
            options: [
              'Heating a substance to decompose it',
              'Using an electric current to decompose a molten or dissolved ionic compound',
              'Mixing two solutions to form a precipitate',
              'Burning a substance in oxygen'
            ],
            answer: 1,
            explanation: 'Electrolysis uses a direct current (d.c.) to break down (decompose) an ionic substance that is either molten or dissolved in water, allowing the ions to move.'
          },
          {
            q: 'During electrolysis, positive ions (cations) move to the:',
            options: [
              'Anode (positive electrode)',
              'Cathode (negative electrode)',
              'They do not move',
              'Either electrode'
            ],
            answer: 1,
            explanation: 'Positive ions (cations) are attracted to the negative electrode (cathode). Opposites attract \u2014 positive ions move to the negative electrode.'
          },
          {
            q: 'During electrolysis, negative ions (anions) move to the:',
            options: [
              'Cathode (negative electrode)',
              'Anode (positive electrode)',
              'They do not move',
              'Either electrode'
            ],
            answer: 1,
            explanation: 'Negative ions (anions) are attracted to the positive electrode (anode). Opposites attract \u2014 negative ions move to the positive electrode.'
          },
          {
            q: 'At the cathode during electrolysis, what happens to the positive metal ions?',
            options: [
              'They are oxidised',
              'They are reduced (gain electrons)',
              'They lose more electrons',
              'Nothing happens'
            ],
            answer: 1,
            explanation: 'At the cathode, positive metal ions gain electrons and are reduced to form metal atoms. E.g. Cu\u00B2\u207A + 2e\u207B \u2192 Cu.'
          },
          {
            q: 'At the anode during electrolysis, what happens to the negative ions?',
            options: [
              'They gain electrons and are reduced',
              'They lose electrons and are oxidised',
              'They form a metal',
              'They dissolve'
            ],
            answer: 1,
            explanation: 'At the anode, negative ions lose electrons and are oxidised. E.g. 2Cl\u207B \u2192 Cl\u2082 + 2e\u207B. The electrons flow through the external circuit.'
          },
          {
            q: 'Why must an ionic compound be molten or dissolved for electrolysis to work?',
            options: [
              'The substance needs to be hot',
              'The ions need to be free to move to the electrodes',
              'The substance must be a gas',
              'The electrons need to be inside the liquid'
            ],
            answer: 1,
            explanation: 'In solid ionic compounds, ions are held in fixed positions and cannot move. When molten or dissolved, the ions are free to move to the electrodes and carry the current.'
          },
          {
            q: 'When molten lead bromide (PbBr\u2082) is electrolysed, what is formed at the cathode?',
            options: ['Bromine', 'Lead', 'Lead oxide', 'Hydrogen'],
            answer: 1,
            explanation: 'Pb\u00B2\u207A ions are attracted to the cathode (negative electrode) where they gain electrons and are reduced to lead metal: Pb\u00B2\u207A + 2e\u207B \u2192 Pb.'
          },
          {
            q: 'When molten lead bromide is electrolysed, what is formed at the anode?',
            options: ['Lead', 'Bromine gas', 'Oxygen', 'Hydrogen'],
            answer: 1,
            explanation: 'Br\u207B ions are attracted to the anode (positive electrode) where they lose electrons and are oxidised: 2Br\u207B \u2192 Br\u2082 + 2e\u207B. Bromine gas is produced.'
          },
          {
            q: 'When a concentrated solution of sodium chloride (brine) is electrolysed, what is produced at the cathode?',
            options: ['Sodium metal', 'Chlorine gas', 'Hydrogen gas', 'Oxygen gas'],
            answer: 2,
            explanation: 'In aqueous solution, hydrogen is produced at the cathode instead of sodium (because sodium is more reactive than hydrogen). 2H\u207A + 2e\u207B \u2192 H\u2082.'
          },
          {
            q: 'When concentrated sodium chloride solution is electrolysed, what is produced at the anode?',
            options: ['Sodium', 'Oxygen', 'Chlorine', 'Hydrogen'],
            answer: 2,
            explanation: 'At the anode, chloride ions (from the concentrated NaCl) are discharged in preference to hydroxide ions: 2Cl\u207B \u2192 Cl\u2082 + 2e\u207B. Chlorine gas is produced.'
          },
          {
            q: 'When dilute sulfuric acid is electrolysed, what gas is produced at the anode?',
            options: ['Hydrogen', 'Sulfur dioxide', 'Oxygen', 'Chlorine'],
            answer: 2,
            explanation: 'At the anode, hydroxide ions (from water) are discharged: 4OH\u207B \u2192 O\u2082 + 2H\u2082O + 4e\u207B. Oxygen gas is produced. The sulfate ions remain in solution.'
          },
          {
            q: 'Aluminium is extracted from aluminium oxide (Al\u2082O\u2083) by electrolysis. The Al\u2082O\u2083 is dissolved in molten cryolite because:',
            options: [
              'Cryolite makes aluminium stronger',
              'Cryolite lowers the melting point of Al\u2082O\u2083, reducing energy costs',
              'Cryolite is the ore of aluminium',
              'Cryolite acts as a catalyst'
            ],
            answer: 1,
            explanation: 'Al\u2082O\u2083 has a very high melting point (over 2000\u00B0C). Dissolving it in molten cryolite lowers the temperature needed to about 950\u00B0C, significantly reducing energy and cost.'
          },
          {
            q: 'In the electrolysis of aluminium oxide, aluminium forms at the:',
            options: ['Anode', 'Cathode', 'In the electrolyte', 'On the surface'],
            answer: 1,
            explanation: 'Al\u00B3\u207A ions are attracted to the cathode (negative electrode) where they gain 3 electrons and are reduced: Al\u00B3\u207A + 3e\u207B \u2192 Al. Molten aluminium sinks to the bottom.'
          },
          {
            q: 'Why do the carbon anodes need to be replaced regularly during aluminium extraction?',
            options: [
              'They dissolve in the electrolyte',
              'They react with the oxygen produced, forming carbon dioxide, and gradually burn away',
              'They melt at high temperatures',
              'They become coated with aluminium'
            ],
            answer: 1,
            explanation: 'Oxygen is produced at the anode, which reacts with the carbon electrodes at high temperature: C + O\u2082 \u2192 CO\u2082. The anodes gradually burn away and must be replaced.'
          },
          {
            q: 'The electrolyte is:',
            options: [
              'The solid ionic compound',
              'The electrode',
              'The molten or dissolved ionic compound that conducts electricity',
              'The power supply'
            ],
            answer: 2,
            explanation: 'The electrolyte is the molten or dissolved (aqueous) ionic compound. It conducts electricity because the ions in it are free to move.'
          },
          {
            q: 'Electroplating uses electrolysis to:',
            options: [
              'Extract metals from ores',
              'Coat an object with a thin layer of metal',
              'Make ionic compounds',
              'Generate electricity'
            ],
            answer: 1,
            explanation: 'Electroplating coats an object with a thin layer of metal (e.g. silver or copper). The object to be plated is the cathode, and the plating metal is the anode.'
          },
          {
            q: 'In electroplating with copper, the copper anode:',
            options: [
              'Gains mass',
              'Loses mass as copper atoms are oxidised to Cu\u00B2\u207A ions',
              'Stays the same mass',
              'Turns into a gas'
            ],
            answer: 1,
            explanation: 'The copper anode dissolves: Cu \u2192 Cu\u00B2\u207A + 2e\u207B. Copper atoms are oxidised to Cu\u00B2\u207A ions that go into solution, so the anode loses mass. The cathode gains mass as Cu is deposited.'
          },
          {
            q: 'OILRIG stands for:',
            options: [
              'Oxygen Is Lost, Reduction Is Gained',
              'Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons)',
              'Only Ions Lose, Reduced Ions Gain',
              'Oxygen In Liquid, Reduction In Gas'
            ],
            answer: 1,
            explanation: 'OILRIG is a mnemonic: Oxidation Is Loss of electrons, Reduction Is Gain of electrons. This helps remember what happens during electrolysis and redox reactions.'
          },
          {
            q: 'Which products are formed at each electrode when copper sulfate solution is electrolysed using inert (carbon) electrodes?',
            options: [
              'Copper at cathode, sulfur at anode',
              'Copper at cathode, oxygen at anode',
              'Hydrogen at cathode, oxygen at anode',
              'Hydrogen at cathode, sulfur at anode'
            ],
            answer: 1,
            explanation: 'Cu\u00B2\u207A ions (less reactive than hydrogen) are discharged at the cathode as copper. At the anode, OH\u207B ions are discharged as oxygen (sulfate ions stay in solution).'
          },
          {
            q: 'The half equation at the cathode during electrolysis of copper sulfate solution is:',
            options: [
              'Cu \u2192 Cu\u00B2\u207A + 2e\u207B',
              'Cu\u00B2\u207A + 2e\u207B \u2192 Cu',
              '4OH\u207B \u2192 O\u2082 + 2H\u2082O + 4e\u207B',
              '2H\u207A + 2e\u207B \u2192 H\u2082'
            ],
            answer: 1,
            explanation: 'At the cathode, copper ions gain electrons (reduction): Cu\u00B2\u207A + 2e\u207B \u2192 Cu. Copper metal is deposited on the cathode.'
          }
        ]
      }
    ]
  },

  // ========== SECTION 5: ENERGY CHANGES ==========
  {
    section: 'Energy Changes',
    icon: '\uD83D\uDD25',
    color: '#EA580C',
    topics: [
      {
        topic: 'Exothermic & Endothermic Reactions',
        questions: [
          {
            q: 'An exothermic reaction is one that:',
            options: [
              'Takes in energy from the surroundings',
              'Transfers energy to the surroundings, causing a temperature increase',
              'Has no energy change',
              'Only occurs at high temperatures'
            ],
            answer: 1,
            explanation: 'Exothermic reactions transfer energy to the surroundings. This causes the temperature of the surroundings to increase. Examples include combustion and neutralisation.'
          },
          {
            q: 'An endothermic reaction is one that:',
            options: [
              'Releases energy to the surroundings',
              'Takes in energy from the surroundings, causing a temperature decrease',
              'Always involves burning',
              'Produces light'
            ],
            answer: 1,
            explanation: 'Endothermic reactions absorb (take in) energy from the surroundings, causing the temperature of the surroundings to decrease. Examples include thermal decomposition and photosynthesis.'
          },
          {
            q: 'Which of the following is an exothermic process?',
            options: [
              'Thermal decomposition of calcium carbonate',
              'Photosynthesis',
              'Combustion of methane',
              'Dissolving ammonium nitrate in water'
            ],
            answer: 2,
            explanation: 'Combustion (burning) is always exothermic \u2014 it releases heat energy to the surroundings. Thermal decomposition and photosynthesis are endothermic.'
          },
          {
            q: 'When citric acid is mixed with sodium hydrogen carbonate solution, the temperature drops. This reaction is:',
            options: [
              'Exothermic',
              'Endothermic',
              'Neutral',
              'Combustion'
            ],
            answer: 1,
            explanation: 'A temperature decrease shows that the reaction is absorbing energy from the surroundings (endothermic). The surroundings cool down as energy is transferred to the reaction.'
          },
          {
            q: 'Hand warmers use:',
            options: [
              'Endothermic reactions',
              'Exothermic reactions that release heat',
              'Nuclear reactions',
              'Electrical energy only'
            ],
            answer: 1,
            explanation: 'Hand warmers use exothermic reactions (e.g. iron oxidation or crystallisation of sodium acetate) that release heat energy to warm your hands.'
          },
          {
            q: 'Self-cooling sports injury packs use:',
            options: [
              'Exothermic reactions',
              'Endothermic reactions that absorb heat from the injury',
              'Ice only',
              'Chemical combustion'
            ],
            answer: 1,
            explanation: 'Sports injury cold packs use an endothermic reaction (e.g. dissolving ammonium nitrate in water) that absorbs heat from the surroundings, cooling the injured area.'
          },
          {
            q: 'During neutralisation of an acid and alkali, the temperature of the mixture:',
            options: [
              'Decreases',
              'Stays the same',
              'Increases',
              'First increases then decreases'
            ],
            answer: 2,
            explanation: 'Neutralisation is an exothermic reaction. Energy is transferred to the surroundings, so the temperature of the solution increases.'
          },
          {
            q: 'A reaction where the products have more energy than the reactants is:',
            options: [
              'Exothermic',
              'Endothermic',
              'Neutral',
              'Catalytic'
            ],
            answer: 1,
            explanation: 'If products have more energy than reactants, the extra energy must have been absorbed from the surroundings. This is an endothermic reaction.'
          },
          {
            q: 'A reaction where the products have less energy than the reactants is:',
            options: [
              'Endothermic',
              'Exothermic',
              'Reversible',
              'Impossible'
            ],
            answer: 1,
            explanation: 'If products have less energy than reactants, energy has been released to the surroundings. This is an exothermic reaction. The energy difference is given out as heat.'
          },
          {
            q: 'Which of the following is endothermic?',
            options: [
              'Burning wood',
              'Respiration',
              'Photosynthesis',
              'Neutralisation'
            ],
            answer: 2,
            explanation: 'Photosynthesis is endothermic \u2014 plants absorb light energy to convert carbon dioxide and water into glucose and oxygen. This energy is stored in the glucose molecules.'
          },
          {
            q: 'A student measures the temperature change when magnesium reacts with hydrochloric acid. The temperature rises by 15\u00B0C. This tells us the reaction is:',
            options: [
              'Endothermic',
              'Exothermic',
              'Reversible',
              'Not a chemical reaction'
            ],
            answer: 1,
            explanation: 'A temperature rise indicates energy is being released to the surroundings (exothermic). The reaction between magnesium and HCl is exothermic.'
          },
          {
            q: 'Why is a polystyrene cup used as a calorimeter in energy change experiments?',
            options: [
              'It conducts heat well',
              'It is transparent',
              'It is a good insulator, reducing heat loss to the surroundings',
              'It reacts with the chemicals'
            ],
            answer: 2,
            explanation: 'Polystyrene is a good thermal insulator. Using a polystyrene cup reduces heat loss to the surroundings, making the temperature measurement more accurate.'
          },
          {
            q: 'In a simple calorimetry experiment, Q = mc\u0394T. What does c represent?',
            options: [
              'Concentration',
              'The number of moles',
              'Specific heat capacity',
              'Temperature'
            ],
            answer: 2,
            explanation: 'c is the specific heat capacity \u2014 the energy needed to raise the temperature of 1 g (or 1 kg) of a substance by 1\u00B0C. For water, c = 4.18 J/g/\u00B0C.'
          },
          {
            q: 'Calculate the energy transferred when 100 g of water increases in temperature by 20\u00B0C. (c for water = 4.2 J/g/\u00B0C)',
            options: ['420 J', '840 J', '4200 J', '8400 J'],
            answer: 3,
            explanation: 'Q = mc\u0394T = 100 \u00D7 4.2 \u00D7 20 = 8400 J.'
          },
          {
            q: 'A for a reversible reaction, if the forward reaction is exothermic, the reverse reaction is:',
            options: [
              'Also exothermic',
              'Endothermic, by the same amount of energy',
              'Neutral',
              'Not possible'
            ],
            answer: 1,
            explanation: 'If the forward reaction is exothermic (\u0394H negative), the reverse must be endothermic (\u0394H positive) by the same magnitude. Energy is conserved.'
          },
          {
            q: 'Displacement reactions are generally:',
            options: [
              'Endothermic',
              'Exothermic',
              'Neither exo- nor endothermic',
              'Only possible at low temperatures'
            ],
            answer: 1,
            explanation: 'Displacement reactions (e.g. zinc reacting with copper sulfate solution) are generally exothermic because the more reactive metal forms a more stable compound, releasing energy.'
          },
          {
            q: 'Dissolving ammonium nitrate in water feels cold to the touch. This demonstrates that the process is:',
            options: [
              'Exothermic',
              'Endothermic',
              'A combustion reaction',
              'Not a chemical change'
            ],
            answer: 1,
            explanation: 'Feeling cold means the process is absorbing heat from the surroundings (including your hand), which is an endothermic process.'
          },
          {
            q: 'Cellular respiration in the body is:',
            options: [
              'Endothermic',
              'Exothermic',
              'Neither',
              'Only exothermic in plants'
            ],
            answer: 1,
            explanation: 'Respiration (glucose + oxygen \u2192 carbon dioxide + water) is exothermic. It releases energy that is used by cells for life processes and to maintain body temperature.'
          },
          {
            q: 'Which statement about activation energy is correct?',
            options: [
              'It is the energy released during a reaction',
              'It is the minimum amount of energy needed for reactant particles to react when they collide',
              'It is only needed for endothermic reactions',
              'It is the total energy of the products'
            ],
            answer: 1,
            explanation: 'Activation energy is the minimum energy that colliding particles must have in order to react. All reactions, both exo- and endothermic, require activation energy to start.'
          },
          {
            q: 'Thermal decomposition reactions are:',
            options: [
              'Always exothermic',
              'Always endothermic (they need continuous heating)',
              'Neither exo- nor endothermic',
              'Only possible with metals'
            ],
            answer: 1,
            explanation: 'Thermal decomposition requires continuous heating because it is endothermic. Energy must be constantly supplied to break the chemical bonds in the compound.'
          }
        ]
      },
      {
        topic: 'Reaction Profiles & Bond Energies',
        questions: [
          {
            q: 'On a reaction profile for an exothermic reaction, the products are:',
            options: [
              'At a higher energy level than the reactants',
              'At a lower energy level than the reactants',
              'At the same energy level as the reactants',
              'Not shown on the diagram'
            ],
            answer: 1,
            explanation: 'In an exothermic reaction, energy is released. The products have less energy than the reactants, so they appear lower on the energy profile diagram.'
          },
          {
            q: 'On a reaction profile for an endothermic reaction, the products are:',
            options: [
              'At a lower energy level than the reactants',
              'At a higher energy level than the reactants',
              'At the same energy level',
              'Below the x-axis'
            ],
            answer: 1,
            explanation: 'In an endothermic reaction, energy is absorbed. The products have more energy than the reactants, so they appear higher on the energy profile diagram.'
          },
          {
            q: 'On a reaction profile, activation energy is shown as:',
            options: [
              'The difference in energy between products and reactants',
              'The energy rise from the reactants to the top of the energy barrier (peak)',
              'The total energy of the products',
              'The energy of the catalyst'
            ],
            answer: 1,
            explanation: 'Activation energy (Ea) is the energy difference between the reactants and the peak (transition state) of the energy profile. It represents the minimum energy needed to start the reaction.'
          },
          {
            q: 'How does a catalyst affect a reaction profile?',
            options: [
              'It increases the activation energy',
              'It provides an alternative pathway with a lower activation energy',
              'It changes the energy of the products',
              'It makes the reaction more endothermic'
            ],
            answer: 1,
            explanation: 'A catalyst provides an alternative reaction pathway with a lower activation energy. This means more particles have enough energy to react, increasing the rate of reaction.'
          },
          {
            q: 'Bond breaking is:',
            options: [
              'Exothermic (releases energy)',
              'Endothermic (requires energy)',
              'Neither exo- nor endothermic',
              'Only exothermic for ionic bonds'
            ],
            answer: 1,
            explanation: 'Energy must be supplied to break chemical bonds (endothermic). Bond making releases energy (exothermic). The overall energy change depends on the balance between these.'
          },
          {
            q: 'Bond making is:',
            options: [
              'Endothermic',
              'Exothermic (releases energy)',
              'Neither',
              'Depends on the type of bond'
            ],
            answer: 1,
            explanation: 'Forming new chemical bonds releases energy (exothermic). The atoms reach a more stable, lower energy arrangement when bonded.'
          },
          {
            q: 'If more energy is released making bonds than is needed to break bonds, the reaction is:',
            options: [
              'Endothermic',
              'Exothermic',
              'Neither',
              'Impossible to determine'
            ],
            answer: 1,
            explanation: 'If energy released (bond making) > energy absorbed (bond breaking), the overall reaction is exothermic. More energy is given out than taken in.'
          },
          {
            q: 'If more energy is needed to break bonds than is released making new bonds, the reaction is:',
            options: [
              'Exothermic',
              'Endothermic',
              'Neither',
              'Catalytic'
            ],
            answer: 1,
            explanation: 'If energy absorbed (bond breaking) > energy released (bond making), the overall reaction is endothermic. More energy is taken in than given out.'
          },
          {
            q: 'Using bond energies: H-H = 436 kJ/mol, Cl-Cl = 242 kJ/mol, H-Cl = 431 kJ/mol. Calculate the energy change for H\u2082 + Cl\u2082 \u2192 2HCl.',
            options: [
              '-184 kJ/mol',
              '+184 kJ/mol',
              '-862 kJ/mol',
              '+862 kJ/mol'
            ],
            answer: 0,
            explanation: 'Bonds broken: H-H (436) + Cl-Cl (242) = 678 kJ. Bonds made: 2 \u00D7 H-Cl (2 \u00D7 431) = 862 kJ. Energy change = 678 - 862 = -184 kJ/mol (exothermic).'
          },
          {
            q: 'A negative overall energy change (\u0394H) indicates the reaction is:',
            options: [
              'Endothermic',
              'Exothermic',
              'At equilibrium',
              'Not occurring'
            ],
            answer: 1,
            explanation: 'A negative \u0394H means energy is released to the surroundings, which is the definition of an exothermic reaction.'
          },
          {
            q: 'A positive overall energy change (\u0394H) indicates the reaction is:',
            options: [
              'Exothermic',
              'Endothermic',
              'At equilibrium',
              'Reversible'
            ],
            answer: 1,
            explanation: 'A positive \u0394H means energy is absorbed from the surroundings, which is the definition of an endothermic reaction.'
          },
          {
            q: 'Using bond energies: C-H = 413 kJ/mol, O=O = 498 kJ/mol, C=O = 805 kJ/mol, O-H = 464 kJ/mol. For CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O, what is the energy change?',
            options: [
              '-818 kJ/mol',
              '+818 kJ/mol',
              '-1646 kJ/mol',
              '+1646 kJ/mol'
            ],
            answer: 0,
            explanation: 'Bonds broken: 4(C-H) + 2(O=O) = 4(413) + 2(498) = 1652 + 996 = 2648. Bonds made: 2(C=O) + 4(O-H) = 2(805) + 4(464) = 1610 + 1856 = 3466. \u0394H = 2648 - 3466 = -818 kJ/mol.'
          },
          {
            q: 'On an exothermic reaction profile, the overall energy change is shown by:',
            options: [
              'The height of the activation energy peak',
              'The difference in energy between reactants and products (with products lower)',
              'The width of the curve',
              'The temperature of the reaction'
            ],
            answer: 1,
            explanation: 'The overall energy change (\u0394H) is the vertical difference between the energy levels of the reactants and products. For exothermic, products are lower than reactants.'
          },
          {
            q: 'A catalyst on a reaction profile diagram appears as:',
            options: [
              'A higher peak than the uncatalysed reaction',
              'A lower peak (lower activation energy) than the uncatalysed reaction',
              'A line below the products',
              'No change to the diagram'
            ],
            answer: 1,
            explanation: 'A catalyst lowers the activation energy, so the peak on the reaction profile is lower. The start (reactants) and end (products) energy levels remain unchanged.'
          },
          {
            q: 'The bond energy of a bond is defined as:',
            options: [
              'The energy released when a bond forms between two atoms in a molecule',
              'The energy needed to break one mole of a particular covalent bond in gaseous molecules',
              'The total energy in a molecule',
              'The kinetic energy of bonded atoms'
            ],
            answer: 1,
            explanation: 'Bond energy is the amount of energy required to break one mole of a specific type of covalent bond in the gaseous state. It is measured in kJ/mol.'
          },
          {
            q: 'Why are bond energy calculations sometimes different from experimentally measured energy changes?',
            options: [
              'Bond energies are always exact',
              'Bond energy values are averages, and actual bond energies vary depending on the molecule they are in',
              'Experiments are always wrong',
              'Bonds do not really have energy'
            ],
            answer: 1,
            explanation: 'Published bond energies are mean (average) values taken from many different compounds. The actual energy of a specific bond varies slightly depending on its molecular environment.'
          },
          {
            q: 'For the reaction N\u2082 + 3H\u2082 \u2192 2NH\u2083, given N\u2261N = 945 kJ/mol, H-H = 436 kJ/mol, N-H = 391 kJ/mol, calculate \u0394H.',
            options: [
              '-93 kJ/mol',
              '+93 kJ/mol',
              '-186 kJ/mol',
              '+186 kJ/mol'
            ],
            answer: 0,
            explanation: 'Bonds broken: N\u2261N (945) + 3(H-H) (3\u00D7436 = 1308) = 2253. Bonds made: 6(N-H) (6\u00D7391 = 2346). \u0394H = 2253 - 2346 = -93 kJ/mol (exothermic).'
          },
          {
            q: 'In a reaction profile, the transition state (peak) represents:',
            options: [
              'The final products',
              'The initial reactants',
              'The highest energy arrangement of atoms during bond breaking and forming',
              'The catalyst'
            ],
            answer: 2,
            explanation: 'The transition state is the highest energy point along the reaction pathway. It occurs when old bonds are partially broken and new bonds are partially formed.'
          },
          {
            q: 'Which reaction would you expect to have the smallest activation energy?',
            options: [
              'A very slow reaction that barely occurs at room temperature',
              'A fast, explosive reaction',
              'A reaction that only happens at 1000\u00B0C',
              'Thermal decomposition of a very stable compound'
            ],
            answer: 1,
            explanation: 'A fast, explosive reaction occurs readily because many particles already have enough energy to overcome the activation energy barrier. This means the activation energy must be small.'
          },
          {
            q: 'The overall energy change for a reaction can be calculated using:',
            options: [
              'Energy change = energy of bonds broken + energy of bonds made',
              'Energy change = energy of bonds broken - energy of bonds made',
              'Energy change = energy of bonds made - energy of bonds broken',
              'Energy change = energy of bonds broken \u00D7 energy of bonds made'
            ],
            answer: 1,
            explanation: '\u0394H = total energy to break bonds (endothermic, positive) - total energy released making bonds (exothermic, positive). If negative, the reaction is exothermic overall.'
          }
        ]
      }
    ]
  },

  // ========== SECTION 6: RATE & EXTENT OF CHEMICAL CHANGE ==========
  {
    section: 'Rate & Extent of Chemical Change',
    icon: '\u23F1\uFE0F',
    color: '#0891B2',
    topics: [
      {
        topic: 'Rates of Reaction',
        questions: [
          {
            q: 'The rate of a chemical reaction is a measure of:',
            options: [
              'How much product is formed in total',
              'How quickly reactants are used up or products are formed',
              'How much energy is released',
              'How many reactants are used'
            ],
            answer: 1,
            explanation: 'Rate of reaction measures the speed at which a reaction proceeds \u2014 how quickly reactants are converted into products per unit of time.'
          },
          {
            q: 'According to collision theory, for a reaction to occur, particles must:',
            options: [
              'Be the same size',
              'Collide with sufficient energy (at least the activation energy) and correct orientation',
              'Be in the gas state',
              'Be at high temperature only'
            ],
            answer: 1,
            explanation: 'Collision theory states that particles must collide with at least the activation energy and in the correct orientation for a successful reaction to occur.'
          },
          {
            q: 'Increasing the temperature increases the rate of reaction because:',
            options: [
              'It decreases the activation energy',
              'Particles move faster, collide more frequently, and a greater proportion have energy \u2265 activation energy',
              'It increases the concentration',
              'It adds a catalyst'
            ],
            answer: 1,
            explanation: 'Higher temperature gives particles more kinetic energy. They move faster (more frequent collisions) and more particles have energy equal to or greater than the activation energy (more successful collisions).'
          },
          {
            q: 'Increasing the concentration of a reactant in solution increases the rate because:',
            options: [
              'The particles move faster',
              'The activation energy decreases',
              'There are more particles in the same volume, leading to more frequent collisions',
              'The temperature increases'
            ],
            answer: 2,
            explanation: 'Higher concentration means more reactant particles in the same volume. This increases the frequency of collisions, making successful collisions more likely per unit time.'
          },
          {
            q: 'How does increasing the surface area of a solid reactant affect the rate?',
            options: [
              'It decreases the rate',
              'It has no effect',
              'It increases the rate because more particles are exposed for collisions',
              'It changes the products formed'
            ],
            answer: 2,
            explanation: 'Smaller pieces (powder) have a larger surface area than large lumps. More particles of the solid are exposed to the other reactant, so collisions are more frequent and the rate increases.'
          },
          {
            q: 'A catalyst:',
            options: [
              'Is used up in the reaction',
              'Increases the rate by providing an alternative pathway with lower activation energy',
              'Always increases the temperature',
              'Changes the products of the reaction'
            ],
            answer: 1,
            explanation: 'A catalyst speeds up a reaction by providing an alternative reaction pathway with a lower activation energy. It is not used up and can be reused.'
          },
          {
            q: 'On a graph of volume of gas produced vs time, how can you tell when the reaction is complete?',
            options: [
              'The line goes down',
              'The line becomes horizontal (levels off)',
              'The line goes vertical',
              'The graph ends'
            ],
            answer: 1,
            explanation: 'When the reaction is complete (all limiting reactant used up), no more gas is produced and the line on the graph levels off (becomes horizontal/flat).'
          },
          {
            q: 'On a rate graph (mass loss vs time), a steeper initial gradient indicates:',
            options: [
              'A slower reaction',
              'A faster reaction',
              'More product formed overall',
              'An endothermic reaction'
            ],
            answer: 1,
            explanation: 'A steeper gradient means more product is formed in a shorter time, indicating a faster rate of reaction. The gradient of the curve at any point gives the rate at that moment.'
          },
          {
            q: 'Which of these changes would NOT increase the rate of reaction between magnesium ribbon and hydrochloric acid?',
            options: [
              'Using powdered magnesium instead of ribbon',
              'Using more concentrated acid',
              'Heating the acid',
              'Using a larger volume of acid at the same concentration'
            ],
            answer: 3,
            explanation: 'Using a larger volume of acid at the same concentration does not change the frequency of collisions per unit volume. It would produce more product overall but not change the rate.'
          },
          {
            q: 'For a gas-phase reaction, increasing the pressure:',
            options: [
              'Decreases the rate',
              'Increases the rate because gas particles are closer together and collide more frequently',
              'Has no effect on rate',
              'Changes the products'
            ],
            answer: 1,
            explanation: 'Increasing pressure pushes gas particles closer together (like increasing concentration), so collisions are more frequent and the rate increases.'
          },
          {
            q: 'The rate of reaction can be calculated using the formula:',
            options: [
              'Rate = mass \u00D7 time',
              'Rate = quantity of reactant used or product formed \u00F7 time',
              'Rate = time \u00F7 mass',
              'Rate = temperature \u00D7 concentration'
            ],
            answer: 1,
            explanation: 'Rate = amount of reactant used (or product formed) / time taken. It can be measured as volume of gas per second, mass change per second, etc.'
          },
          {
            q: 'In the reaction between sodium thiosulfate and hydrochloric acid, the rate is measured by:',
            options: [
              'Measuring the volume of gas produced',
              'Timing how long it takes for the solution to become opaque (cross to disappear)',
              'Measuring the temperature change',
              'Weighing the products'
            ],
            answer: 1,
            explanation: 'This reaction produces sulfur, making the solution cloudy. A cross is placed under the flask, and the time for it to disappear is measured. Shorter time = faster rate.'
          },
          {
            q: 'Manganese dioxide is used as a catalyst for the decomposition of hydrogen peroxide. After the reaction, the manganese dioxide:',
            options: [
              'Has been used up',
              'Has changed into a different substance',
              'Can be recovered unchanged and reused',
              'Has increased in mass'
            ],
            answer: 2,
            explanation: 'A catalyst is not used up in a reaction. It can be recovered in the same chemical form and mass at the end of the reaction and used again.'
          },
          {
            q: 'Two experiments are identical except one uses a catalyst. On a graph of volume of gas vs time:',
            options: [
              'The catalysed reaction reaches the same final volume but faster (steeper curve)',
              'The catalysed reaction produces more gas',
              'The catalysed reaction produces less gas',
              'Both curves are identical'
            ],
            answer: 0,
            explanation: 'A catalyst increases the rate (steeper initial curve) but does not change the total amount of product. Both reactions reach the same final volume, but the catalysed one gets there faster.'
          },
          {
            q: 'Enzymes are:',
            options: [
              'Inorganic catalysts',
              'Biological catalysts made of protein',
              'Types of acid',
              'Reactants in chemical reactions'
            ],
            answer: 1,
            explanation: 'Enzymes are biological catalysts. They are proteins that speed up specific reactions in living organisms by lowering the activation energy.'
          },
          {
            q: 'The mean rate of reaction for the first 30 seconds if 60 cm\u00B3 of gas was produced is:',
            options: [
              '0.5 cm\u00B3/s',
              '2 cm\u00B3/s',
              '30 cm\u00B3/s',
              '1800 cm\u00B3/s'
            ],
            answer: 1,
            explanation: 'Mean rate = volume / time = 60 / 30 = 2 cm\u00B3/s.'
          },
          {
            q: 'To find the rate at a specific time on a curved graph, you should:',
            options: [
              'Read the value from the y-axis',
              'Draw a tangent to the curve at that point and calculate its gradient',
              'Measure the total area under the curve',
              'Find the average of all points'
            ],
            answer: 1,
            explanation: 'The rate at a specific time is found by drawing a tangent (straight line touching the curve) at that point and calculating the gradient (change in y / change in x).'
          },
          {
            q: 'Using marble chips (CaCO\u2083) and hydrochloric acid, which would give the fastest rate?',
            options: [
              'Large chips in dilute acid at 20\u00B0C',
              'Large chips in concentrated acid at 20\u00B0C',
              'Powdered CaCO\u2083 in concentrated acid at 40\u00B0C',
              'Powdered CaCO\u2083 in dilute acid at 20\u00B0C'
            ],
            answer: 2,
            explanation: 'Powdered CaCO\u2083 has the largest surface area, concentrated acid has more H\u207A ions per volume, and 40\u00B0C gives particles more energy. All three factors increase the rate.'
          },
          {
            q: 'A graph shows mass of flask + contents vs time for a reaction producing gas. The mass:',
            options: [
              'Increases over time',
              'Decreases over time then levels off',
              'Stays constant',
              'Increases then decreases'
            ],
            answer: 1,
            explanation: 'As gas is produced and escapes from the flask, the total mass decreases. When the reaction is complete, no more gas is lost and the mass levels off.'
          },
          {
            q: 'If you double the concentration of a reactant, the rate approximately:',
            options: [
              'Halves',
              'Doubles',
              'Stays the same',
              'Quadruples'
            ],
            answer: 1,
            explanation: 'Doubling the concentration approximately doubles the frequency of collisions, so the rate roughly doubles (for many reactions, though the exact relationship depends on the reaction mechanism).'
          }
        ]
      },
      {
        topic: 'Reversible Reactions & Equilibrium',
        questions: [
          {
            q: 'A reversible reaction is one where:',
            options: [
              'Only the forward reaction can occur',
              'The products can react to re-form the reactants',
              'The reaction can only happen once',
              'A catalyst is always needed'
            ],
            answer: 1,
            explanation: 'In a reversible reaction, the products can react together to reform the original reactants. It is shown with the \u21CC symbol.'
          },
          {
            q: 'Dynamic equilibrium is reached when:',
            options: [
              'The reaction has stopped completely',
              'The forward and reverse reactions occur at the same rate, with constant concentrations',
              'All reactants have been converted to products',
              'The temperature is 0\u00B0C'
            ],
            answer: 1,
            explanation: 'At dynamic equilibrium, the forward and reverse reactions occur at equal rates. The concentrations of reactants and products remain constant (but not necessarily equal).'
          },
          {
            q: 'For equilibrium to be achieved, the reaction must be in a:',
            options: [
              'Open container',
              'Closed system (no substances can enter or leave)',
              'Very hot environment',
              'Vacuum'
            ],
            answer: 1,
            explanation: 'Equilibrium can only be reached in a closed system where no reactants or products can escape. In an open system, gases escape and equilibrium cannot be established.'
          },
          {
            q: 'If the forward reaction of a reversible reaction is exothermic, what effect does increasing the temperature have on the position of equilibrium?',
            options: [
              'It shifts to the right (towards products)',
              'It shifts to the left (towards reactants), favouring the endothermic reverse reaction',
              'No effect',
              'It stops the reaction'
            ],
            answer: 1,
            explanation: 'Increasing temperature favours the endothermic direction to absorb the extra heat. If the forward reaction is exothermic, equilibrium shifts left (towards reactants).'
          },
          {
            q: 'If the forward reaction is exothermic, what effect does decreasing the temperature have?',
            options: [
              'Equilibrium shifts left',
              'Equilibrium shifts right (towards products), favouring the exothermic forward reaction',
              'No effect',
              'The reaction stops'
            ],
            answer: 1,
            explanation: 'Decreasing temperature favours the exothermic direction to release heat. If the forward reaction is exothermic, equilibrium shifts right (towards products).'
          },
          {
            q: 'For the reaction N\u2082(g) + 3H\u2082(g) \u21CC 2NH\u2083(g), what happens to the position of equilibrium if pressure is increased?',
            options: [
              'Shifts to the left (more gas molecules)',
              'Shifts to the right (fewer gas molecules)',
              'No change',
              'The reaction stops'
            ],
            answer: 1,
            explanation: 'Increasing pressure favours the side with fewer moles of gas. Left has 4 moles of gas (1+3), right has 2 moles. Equilibrium shifts right to reduce pressure.'
          },
          {
            q: 'Increasing the concentration of a reactant shifts the equilibrium position:',
            options: [
              'To the left',
              'To the right (towards products)',
              'No change',
              'It depends on the temperature'
            ],
            answer: 1,
            explanation: 'Adding more reactant disturbs the equilibrium. The system responds by using up the extra reactant, shifting the position of equilibrium to the right (towards products).'
          },
          {
            q: 'What effect does a catalyst have on the position of equilibrium?',
            options: [
              'It shifts equilibrium to the right',
              'It shifts equilibrium to the left',
              'It has no effect on the position of equilibrium, but equilibrium is reached faster',
              'It prevents equilibrium from being reached'
            ],
            answer: 2,
            explanation: 'A catalyst speeds up both the forward and reverse reactions equally. It does not change the position of equilibrium but allows equilibrium to be reached more quickly.'
          },
          {
            q: 'The thermal decomposition of ammonium chloride is reversible: NH\u2084Cl \u21CC NH\u2083 + HCl. What is observed when NH\u2084Cl is heated in a test tube?',
            options: [
              'The solid melts to a liquid',
              'White solid disappears from the bottom and reforms higher up where it is cooler',
              'A coloured gas is produced',
              'Nothing happens'
            ],
            answer: 1,
            explanation: 'NH\u2084Cl decomposes when heated into NH\u2083 and HCl gases (forward reaction). Higher up the tube where it is cooler, the gases recombine to form white NH\u2084Cl solid (reverse reaction).'
          },
          {
            q: 'Le Chatelier\'s principle states that:',
            options: [
              'All reactions eventually reach equilibrium',
              'If a system at equilibrium is disturbed, it responds to counteract the change and restore a new equilibrium',
              'Equilibrium can only be reached at room temperature',
              'Catalysts always shift the equilibrium to the right'
            ],
            answer: 1,
            explanation: 'Le Chatelier\'s principle says that if a change in conditions is applied to a system at equilibrium, the system will adjust to partially oppose the change and establish a new equilibrium.'
          },
          {
            q: 'For the reaction: 2SO\u2082(g) + O\u2082(g) \u21CC 2SO\u2083(g) (\u0394H = -197 kJ/mol). To maximise the yield of SO\u2083, you should use:',
            options: [
              'High temperature and low pressure',
              'Low temperature and high pressure',
              'High temperature and high pressure',
              'Low temperature and low pressure'
            ],
            answer: 1,
            explanation: 'Forward reaction is exothermic, so low temperature favours products. There are 3 moles of gas on the left vs 2 on the right, so high pressure also favours products.'
          },
          {
            q: 'In the Haber process (N\u2082 + 3H\u2082 \u21CC 2NH\u2083), a compromise temperature of about 450\u00B0C is used because:',
            options: [
              'It gives the maximum yield of ammonia',
              'Lower temperatures give higher yield but the rate is too slow; 450\u00B0C is a compromise between yield and rate',
              'Higher temperatures are cheaper',
              'It is the melting point of ammonia'
            ],
            answer: 1,
            explanation: 'The forward reaction is exothermic, so lower temperatures favour a higher yield. However, at low temperatures the rate is too slow. 450\u00B0C is a compromise giving an acceptable yield at a reasonable rate.'
          },
          {
            q: 'In the Haber process, a pressure of about 200 atmospheres is used. Why not use even higher pressure?',
            options: [
              'Higher pressure would decrease the yield',
              'Very high pressures are expensive and dangerous, requiring stronger equipment',
              'Higher pressure has no effect',
              'Ammonia decomposes at high pressure'
            ],
            answer: 1,
            explanation: 'While higher pressure increases yield (fewer moles on the product side), very high pressures are costly to maintain and create safety risks. 200 atm is a compromise between yield, cost, and safety.'
          },
          {
            q: 'An iron catalyst is used in the Haber process. Its role is to:',
            options: [
              'Increase the yield of ammonia',
              'Increase the rate of reaction so equilibrium is reached faster',
              'Decrease the temperature needed',
              'Remove impurities from the gases'
            ],
            answer: 1,
            explanation: 'The iron catalyst increases the rate of both forward and reverse reactions equally, allowing equilibrium to be reached more quickly. It does not change the equilibrium position or yield.'
          },
          {
            q: 'For the equilibrium A(g) + B(g) \u21CC C(g), what happens if more C is added?',
            options: [
              'Equilibrium shifts right to make more C',
              'Equilibrium shifts left to use up the extra C',
              'Nothing changes',
              'The reaction stops'
            ],
            answer: 1,
            explanation: 'Adding more product (C) disturbs the equilibrium. The system shifts to the left (backwards) to use up the extra C and partially restore the balance.'
          },
          {
            q: 'At equilibrium, the concentrations of reactants and products:',
            options: [
              'Are always equal',
              'Are always changing',
              'Remain constant but are not necessarily equal',
              'Are both zero'
            ],
            answer: 2,
            explanation: 'At equilibrium, concentrations remain constant because the forward and reverse rates are equal. However, the amounts of reactants and products are not necessarily equal.'
          },
          {
            q: 'For an equilibrium where the forward reaction produces fewer moles of gas, decreasing the pressure will:',
            options: [
              'Shift equilibrium towards the side with fewer moles of gas (products)',
              'Shift equilibrium towards the side with more moles of gas (reactants)',
              'Have no effect',
              'Stop the reaction'
            ],
            answer: 1,
            explanation: 'Decreasing pressure favours the side with more moles of gas, as this increases the pressure back towards the original value (Le Chatelier\'s principle).'
          },
          {
            q: 'Hydrated copper sulfate (blue) \u21CC anhydrous copper sulfate (white) + water. Adding water to white copper sulfate:',
            options: [
              'Nothing happens',
              'The solid turns blue and the reaction is exothermic',
              'The solid stays white',
              'Gas is produced'
            ],
            answer: 1,
            explanation: 'Adding water to anhydrous (white) copper sulfate reverses the dehydration. The forward reaction (dehydration) is endothermic, so the reverse (hydration) is exothermic. The solid turns blue and heats up.'
          },
          {
            q: 'Which statement about dynamic equilibrium is FALSE?',
            options: [
              'Both forward and reverse reactions are still occurring',
              'The rate of the forward reaction equals the rate of the reverse reaction',
              'The reaction has completely stopped',
              'The concentrations of reactants and products are constant'
            ],
            answer: 2,
            explanation: 'At dynamic equilibrium, both forward and reverse reactions continue to occur \u2014 the reaction has NOT stopped. The \"dynamic\" part means reactions are still happening.'
          },
          {
            q: 'If removing a product from an equilibrium mixture, the equilibrium will:',
            options: [
              'Shift to the left',
              'Shift to the right to replace the removed product',
              'Not change',
              'The reaction will stop'
            ],
            answer: 1,
            explanation: 'Removing a product disturbs the equilibrium. The system shifts to the right (forward) to produce more product and partially counteract the change (Le Chatelier\'s principle).'
          }
        ]
      }
    ]
  },

  // ========== SECTION 7: ORGANIC CHEMISTRY ==========
  {
    section: 'Organic Chemistry',
    icon: '\uD83D\uDEE2\uFE0F',
    color: '#65A30D',
    topics: [
      {
        topic: 'Crude Oil & Hydrocarbons',
        questions: [
          {
            q: 'Crude oil is a mixture of:',
            options: [
              'Elements',
              'Ionic compounds',
              'Hydrocarbons (compounds of hydrogen and carbon only)',
              'Metals and non-metals'
            ],
            answer: 2,
            explanation: 'Crude oil is a complex mixture of hydrocarbons \u2014 molecules made up of only carbon and hydrogen atoms. These can be separated by fractional distillation.'
          },
          {
            q: 'Crude oil is separated into fractions by:',
            options: [
              'Filtration',
              'Fractional distillation',
              'Chromatography',
              'Electrolysis'
            ],
            answer: 1,
            explanation: 'Fractional distillation separates crude oil into fractions based on their different boiling points. Each fraction contains molecules with a similar number of carbon atoms.'
          },
          {
            q: 'In fractional distillation, the fractions with the lowest boiling points:',
            options: [
              'Collect at the bottom of the column',
              'Collect at the top of the column where it is coolest',
              'Stay in the liquid phase',
              'Are removed from the middle'
            ],
            answer: 1,
            explanation: 'The column is hot at the bottom and cool at the top. Substances with low boiling points rise as vapour to the top before condensing. High boiling point fractions condense lower down.'
          },
          {
            q: 'As the chain length of alkane molecules increases:',
            options: [
              'Boiling point decreases and viscosity decreases',
              'Boiling point increases and viscosity increases',
              'Boiling point increases and viscosity decreases',
              'Boiling point decreases and viscosity increases'
            ],
            answer: 1,
            explanation: 'Longer chain alkanes have stronger intermolecular forces, giving higher boiling points. They are also more viscous (thicker/less runny) and less flammable.'
          },
          {
            q: 'The general formula for alkanes is:',
            options: ['C\u2099H\u2082\u2099', 'C\u2099H\u2082\u2099\u208A\u2082', 'C\u2099H\u2082\u2099\u208B\u2082', 'C\u2099H\u2099'],
            answer: 1,
            explanation: 'Alkanes have the general formula C\u2099H\u2082\u2099\u208A\u2082. For example, methane CH\u2084 (n=1), ethane C\u2082H\u2086 (n=2), propane C\u2083H\u2088 (n=3).'
          },
          {
            q: 'Alkanes are described as saturated hydrocarbons because:',
            options: [
              'They are dissolved in water',
              'They contain only single covalent bonds between carbon atoms',
              'They contain double bonds',
              'They contain ionic bonds'
            ],
            answer: 1,
            explanation: 'Saturated means all carbon-carbon bonds are single bonds (no double bonds). Each carbon is bonded to the maximum number of hydrogen atoms possible.'
          },
          {
            q: 'The complete combustion of a hydrocarbon produces:',
            options: [
              'Carbon monoxide and water',
              'Carbon dioxide and water',
              'Carbon and hydrogen',
              'Soot and water'
            ],
            answer: 1,
            explanation: 'Complete combustion occurs when there is plenty of oxygen. Hydrocarbon + oxygen \u2192 carbon dioxide + water. E.g. CH\u2084 + 2O\u2082 \u2192 CO\u2082 + 2H\u2082O.'
          },
          {
            q: 'Incomplete combustion of hydrocarbons can produce:',
            options: [
              'Only carbon dioxide and water',
              'Carbon monoxide, soot (carbon particles), and water',
              'Oxygen and nitrogen',
              'Only hydrogen and carbon'
            ],
            answer: 1,
            explanation: 'When there is insufficient oxygen, incomplete combustion produces carbon monoxide (toxic gas) and/or soot (carbon/particulates) instead of carbon dioxide, plus water.'
          },
          {
            q: 'Why is carbon monoxide dangerous?',
            options: [
              'It is flammable',
              'It is a greenhouse gas',
              'It binds to haemoglobin in red blood cells, reducing the blood\'s ability to carry oxygen',
              'It is acidic'
            ],
            answer: 2,
            explanation: 'Carbon monoxide is a toxic, colourless, odourless gas. It binds irreversibly to haemoglobin in the blood, preventing oxygen transport, which can lead to death.'
          },
          {
            q: 'Cracking is the process of:',
            options: [
              'Joining small molecules together',
              'Breaking down long-chain hydrocarbons into shorter, more useful molecules',
              'Burning hydrocarbons',
              'Distilling crude oil'
            ],
            answer: 1,
            explanation: 'Cracking breaks large, less useful hydrocarbon molecules into smaller, more useful ones (shorter alkanes for fuels and alkenes for making polymers).'
          },
          {
            q: 'What conditions are needed for catalytic cracking?',
            options: [
              'High pressure and a catalyst',
              'Hot temperature (~600\u00B0C) and a zeolite (aluminium silicate) catalyst',
              'Low temperature and high pressure',
              'Room temperature and pressure'
            ],
            answer: 1,
            explanation: 'Catalytic cracking uses a hot zeolite catalyst at about 600-700\u00B0C. The vapour of the long-chain hydrocarbon is passed over the catalyst.'
          },
          {
            q: 'Steam cracking uses:',
            options: [
              'A catalyst at low temperature',
              'Very high temperature (~850\u00B0C) and steam',
              'Low temperature and high pressure',
              'Electricity'
            ],
            answer: 1,
            explanation: 'Steam cracking uses very high temperatures (about 850\u00B0C) and steam to break down long-chain hydrocarbons. No catalyst is needed.'
          },
          {
            q: 'One product of cracking is always:',
            options: [
              'An alkane only',
              'An alkene (which has a double bond and is useful for making polymers)',
              'A noble gas',
              'An ionic compound'
            ],
            answer: 1,
            explanation: 'Cracking always produces at least one alkene (unsaturated hydrocarbon with a C=C double bond). Alkenes are valuable for making polymers like poly(ethene).'
          },
          {
            q: 'What is the molecular formula of propane?',
            options: ['CH\u2084', 'C\u2082H\u2086', 'C\u2083H\u2088', 'C\u2084H\u2081\u2080'],
            answer: 2,
            explanation: 'Propane has 3 carbon atoms. Using C\u2099H\u2082\u2099\u208A\u2082: C\u2083H\u2088 (2\u00D73 + 2 = 8 hydrogens).'
          },
          {
            q: 'Which fraction from crude oil has the highest boiling point?',
            options: ['Petrol (gasoline)', 'Kerosene', 'Diesel', 'Bitumen'],
            answer: 3,
            explanation: 'Bitumen has the longest chain molecules and the highest boiling point. It collects at the bottom of the fractionating column and is used for road surfaces.'
          },
          {
            q: 'Sulfur impurities in fuels produce which pollutant when burned?',
            options: ['Carbon monoxide', 'Sulfur dioxide', 'Nitrogen', 'Methane'],
            answer: 1,
            explanation: 'Sulfur impurities in fossil fuels burn to form sulfur dioxide (SO\u2082), which dissolves in rainwater to form sulfurous/sulfuric acid, causing acid rain.'
          },
          {
            q: 'Nitrogen oxides (NOx) are produced in car engines because:',
            options: [
              'Nitrogen is present in the fuel',
              'The high temperature causes nitrogen and oxygen from the air to react',
              'The catalyst produces them',
              'They come from the car\'s battery'
            ],
            answer: 1,
            explanation: 'At the very high temperatures inside car engines, nitrogen and oxygen from the air react together to form nitrogen oxides (NOx), which contribute to acid rain and smog.'
          },
          {
            q: 'Particulates (soot) from incomplete combustion can cause:',
            options: [
              'Acid rain only',
              'Respiratory problems and global dimming',
              'Ozone depletion',
              'Increased plant growth'
            ],
            answer: 1,
            explanation: 'Particulates (tiny carbon particles) cause respiratory problems and lung disease when inhaled. They also contribute to global dimming by reflecting sunlight back into space.'
          },
          {
            q: 'The name of the alkane with 4 carbon atoms is:',
            options: ['Methane', 'Ethane', 'Propane', 'Butane'],
            answer: 3,
            explanation: 'The first four alkanes are: methane (1C), ethane (2C), propane (3C), butane (4C).'
          },
          {
            q: 'Why is cracking economically important?',
            options: [
              'It makes crude oil cheaper to extract',
              'It converts less useful long-chain fractions into more useful shorter-chain fuels and alkenes for polymers',
              'It removes impurities from crude oil',
              'It increases the amount of crude oil available'
            ],
            answer: 1,
            explanation: 'There is more demand for shorter-chain fractions (petrol, alkenes) than longer-chain ones. Cracking converts the surplus long chains into the more useful and valuable shorter molecules.'
          }
        ]
      },
      {
        topic: 'Reactions of Alkenes & Alcohols',
        questions: [
          {
            q: 'The general formula for alkenes is:',
            options: ['C\u2099H\u2082\u2099\u208A\u2082', 'C\u2099H\u2082\u2099', 'C\u2099H\u2082\u2099\u208B\u2082', 'C\u2099H\u2099'],
            answer: 1,
            explanation: 'Alkenes have the general formula C\u2099H\u2082\u2099. They have one carbon-carbon double bond (C=C), making them unsaturated hydrocarbons.'
          },
          {
            q: 'Alkenes are described as unsaturated because:',
            options: [
              'They dissolve in water',
              'They contain a carbon-carbon double bond (C=C)',
              'They contain only single bonds',
              'They are gases at room temperature'
            ],
            answer: 1,
            explanation: 'Unsaturated means the molecule contains at least one C=C double bond. This means not every carbon is bonded to the maximum number of hydrogen atoms.'
          },
          {
            q: 'How can you test whether a hydrocarbon is an alkene (unsaturated)?',
            options: [
              'Add it to water and see if it dissolves',
              'Add bromine water \u2014 it decolourises from orange to colourless',
              'Burn it and test the gas produced',
              'Add universal indicator'
            ],
            answer: 1,
            explanation: 'Bromine water (orange) decolourises when shaken with an alkene. The bromine adds across the C=C double bond in an addition reaction. Alkanes do not decolourise bromine water.'
          },
          {
            q: 'When ethene reacts with bromine, the product is:',
            options: ['Ethane', 'Ethanol', 'Dibromoethane', 'Ethanoic acid'],
            answer: 2,
            explanation: 'Ethene (C\u2082H\u2084) + Br\u2082 \u2192 C\u2082H\u2084Br\u2082 (1,2-dibromoethane). The bromine atoms add across the C=C double bond in an addition reaction.'
          },
          {
            q: 'Addition polymerisation of ethene produces:',
            options: [
              'Ethanol',
              'Poly(ethene) / polyethylene',
              'Ethane',
              'Polypropene'
            ],
            answer: 1,
            explanation: 'Many ethene molecules (monomers) join together by addition polymerisation to form poly(ethene). The C=C double bonds open up and the molecules link together in a long chain.'
          },
          {
            q: 'In addition polymerisation, the monomer must contain:',
            options: [
              'An ionic bond',
              'A C=C double bond',
              'An -OH group',
              'A -COOH group'
            ],
            answer: 1,
            explanation: 'Addition polymerisation requires monomers with a C=C double bond. The double bond opens up to allow monomers to join together. No other molecules are produced (no by-products).'
          },
          {
            q: 'Ethanol can be produced by fermentation of sugars using:',
            options: [
              'Hydrochloric acid as a catalyst',
              'Yeast (which contains enzymes) under anaerobic conditions',
              'High temperature and pressure',
              'Electrolysis'
            ],
            answer: 1,
            explanation: 'Fermentation uses yeast enzymes to convert glucose into ethanol and carbon dioxide at about 30-40\u00B0C in the absence of oxygen: C\u2086H\u2081\u2082O\u2086 \u2192 2C\u2082H\u2085OH + 2CO\u2082.'
          },
          {
            q: 'Ethanol can also be produced by the hydration of ethene. This involves reacting ethene with:',
            options: [
              'Water (steam) using a phosphoric acid catalyst at high temperature and pressure',
              'Hydrogen gas',
              'Bromine water',
              'Oxygen'
            ],
            answer: 0,
            explanation: 'Hydration of ethene: C\u2082H\u2084 + H\u2082O \u2192 C\u2082H\u2085OH. This uses steam at about 300\u00B0C, 60-70 atm pressure, with a phosphoric acid catalyst.'
          },
          {
            q: 'Which method of making ethanol is more sustainable \u2014 fermentation or hydration of ethene?',
            options: [
              'Hydration of ethene, because it is faster',
              'Fermentation, because it uses a renewable resource (sugar) and lower temperatures',
              'Both are equally sustainable',
              'Neither is sustainable'
            ],
            answer: 1,
            explanation: 'Fermentation uses renewable sugar crops and operates at low temperatures (less energy). Hydration uses ethene from non-renewable crude oil and requires high temperature and pressure.'
          },
          {
            q: 'The functional group of an alcohol is:',
            options: ['-COOH', '-OH (hydroxyl group)', '-NH\u2082', '-C=C-'],
            answer: 1,
            explanation: 'Alcohols contain the -OH (hydroxyl) functional group. The simplest alcohol is methanol (CH\u2083OH), followed by ethanol (C\u2082H\u2085OH).'
          },
          {
            q: 'Ethanol burns in air to produce:',
            options: [
              'Carbon monoxide and water only',
              'Carbon dioxide and water',
              'Ethanoic acid',
              'Ethene and water'
            ],
            answer: 1,
            explanation: 'Complete combustion of ethanol: C\u2082H\u2085OH + 3O\u2082 \u2192 2CO\u2082 + 3H\u2082O. It burns with a clean blue flame.'
          },
          {
            q: 'The first four members of the alkene homologous series are:',
            options: [
              'Methene, ethene, propene, butene',
              'Ethene, propene, butene, pentene',
              'Methane, ethane, propane, butane',
              'Ethanol, propanol, butanol, pentanol'
            ],
            answer: 1,
            explanation: 'Alkenes start at ethene (C\u2082H\u2084) because you need at least 2 carbon atoms for a C=C double bond. There is no \"methene\". The series is ethene, propene, butene, pentene.'
          },
          {
            q: 'Carboxylic acids contain which functional group?',
            options: ['-OH', '-C=C-', '-COOH', '-CHO'],
            answer: 2,
            explanation: 'Carboxylic acids contain the -COOH functional group. Examples include methanoic acid (HCOOH) and ethanoic acid (CH\u2083COOH, found in vinegar).'
          },
          {
            q: 'Ethanoic acid (CH\u2083COOH) is a weak acid. It reacts with sodium carbonate to produce:',
            options: [
              'Sodium ethanoate, water, and carbon dioxide',
              'Ethanol and sodium oxide',
              'Sodium chloride and water',
              'Ethene and salt'
            ],
            answer: 0,
            explanation: '2CH\u2083COOH + Na\u2082CO\u2083 \u2192 2CH\u2083COONa + H\u2082O + CO\u2082. Like all acids, carboxylic acids react with carbonates to produce a salt, water, and carbon dioxide.'
          },
          {
            q: 'Alcohols react with carboxylic acids to form:',
            options: [
              'Alkenes',
              'Esters (and water)',
              'Ketones',
              'Amines'
            ],
            answer: 1,
            explanation: 'Alcohol + carboxylic acid \u2192 ester + water (condensation reaction). An acid catalyst is needed. Esters have pleasant fruity smells and are used in flavourings and perfumes.'
          },
          {
            q: 'Poly(ethene) and poly(propene) are difficult to dispose of because:',
            options: [
              'They dissolve in water easily',
              'They are biodegradable',
              'They are not biodegradable and persist in the environment for many years',
              'They decompose in sunlight'
            ],
            answer: 2,
            explanation: 'Most addition polymers like poly(ethene) are non-biodegradable. Microorganisms cannot break them down, so they persist in landfills and the environment for hundreds of years.'
          },
          {
            q: 'What type of reaction occurs when ethene reacts with steam to form ethanol?',
            options: ['Combustion', 'Addition', 'Substitution', 'Decomposition'],
            answer: 1,
            explanation: 'Hydration of ethene is an addition reaction. Water (H-OH) adds across the C=C double bond: H goes to one carbon and OH to the other, forming C\u2082H\u2085OH.'
          },
          {
            q: 'Ethanol is used as a solvent and as a fuel. What is its molecular formula?',
            options: ['CH\u2084', 'C\u2082H\u2084', 'C\u2082H\u2086O', 'C\u2082H\u2084O\u2082'],
            answer: 2,
            explanation: 'Ethanol has the molecular formula C\u2082H\u2086O (or written as C\u2082H\u2085OH to show the functional group). It has 2 carbons, 6 hydrogens, and 1 oxygen.'
          },
          {
            q: 'A condensation polymer is formed when:',
            options: [
              'Monomers with C=C double bonds join together',
              'Monomers with two functional groups join together, releasing a small molecule like water',
              'Monomers are heated to very high temperatures',
              'Monomers are dissolved in water'
            ],
            answer: 1,
            explanation: 'In condensation polymerisation, monomers with two functional groups (e.g. diols and dicarboxylic acids) link together, releasing small molecules like water as a by-product.'
          },
          {
            q: 'What is the structural formula of ethene?',
            options: [
              'CH\u2083CH\u2083',
              'CH\u2082=CH\u2082',
              'CH\u2083OH',
              'CH\u2083COOH'
            ],
            answer: 1,
            explanation: 'Ethene has the structural formula CH\u2082=CH\u2082, showing the carbon-carbon double bond. Each carbon is bonded to 2 hydrogen atoms and the other carbon (with a double bond).'
          }
        ]
      }
    ]
  },

  // ========== SECTION 8-10: ANALYSIS, ATMOSPHERE & RESOURCES ==========
  {
    section: 'Analysis, Atmosphere & Resources',
    icon: '\uD83C\uDF0D',
    color: '#0D9488',
    topics: [
      {
        topic: 'Chemical Analysis & Tests',
        questions: [
          {
            q: 'A formulation is:',
            options: [
              'A pure substance',
              'A mixture designed and made for a specific purpose with precise quantities of each component',
              'A random mixture of chemicals',
              'A single element'
            ],
            answer: 1,
            explanation: 'A formulation is a mixture that has been carefully designed to have specific properties. Examples include medicines, paints, cleaning products, and fuels.'
          },
          {
            q: 'In paper chromatography, a pure substance will produce:',
            options: [
              'Multiple spots',
              'A single spot',
              'A streak',
              'No visible mark'
            ],
            answer: 1,
            explanation: 'A pure substance produces a single spot on a chromatogram because it contains only one substance. A mixture produces multiple spots (one for each component).'
          },
          {
            q: 'The Rf value in chromatography is calculated as:',
            options: [
              'Distance moved by solvent \u00F7 distance moved by substance',
              'Distance moved by substance \u00F7 distance moved by solvent front',
              'Mass of substance \u00F7 mass of solvent',
              'Time taken for substance to dissolve'
            ],
            answer: 1,
            explanation: 'Rf = distance moved by substance / distance moved by solvent front. Rf values are specific to a substance under set conditions and can be used for identification.'
          },
          {
            q: 'The test for hydrogen gas is:',
            options: [
              'It turns limewater milky',
              'A lit splint \u2014 it burns with a squeaky pop',
              'It relights a glowing splint',
              'It bleaches damp litmus paper'
            ],
            answer: 1,
            explanation: 'Hydrogen gas pops when a burning splint is held near the gas. The pop is caused by hydrogen reacting with oxygen in air.'
          },
          {
            q: 'The test for oxygen gas is:',
            options: [
              'It puts out a lit splint',
              'It pops with a lit splint',
              'It relights a glowing splint',
              'It turns limewater milky'
            ],
            answer: 2,
            explanation: 'Oxygen relights a glowing splint. This is because oxygen supports combustion, reigniting the hot (but not burning) wooden splint.'
          },
          {
            q: 'The test for carbon dioxide gas is:',
            options: [
              'A squeaky pop with a lit splint',
              'It relights a glowing splint',
              'Bubbling through limewater \u2014 it turns milky/cloudy',
              'It turns damp litmus paper blue'
            ],
            answer: 2,
            explanation: 'CO\u2082 turns limewater (calcium hydroxide solution) milky/cloudy because it reacts to form insoluble calcium carbonate: Ca(OH)\u2082 + CO\u2082 \u2192 CaCO\u2083 + H\u2082O.'
          },
          {
            q: 'The test for chlorine gas is:',
            options: [
              'It turns limewater milky',
              'It bleaches damp litmus paper, turning it white',
              'It relights a glowing splint',
              'It makes a squeaky pop'
            ],
            answer: 1,
            explanation: 'Chlorine is a bleaching agent. Damp litmus paper held in chlorine gas is first turned red (because chlorine is acidic) and then bleached white.'
          },
          {
            q: 'To test for the presence of sulfate ions (SO\u2084\u00B2\u207B), you add:',
            options: [
              'Silver nitrate solution',
              'Dilute hydrochloric acid then barium chloride solution',
              'Sodium hydroxide solution',
              'Universal indicator'
            ],
            answer: 1,
            explanation: 'Add dilute HCl (to remove carbonate ions that could interfere) then barium chloride solution. A white precipitate of barium sulfate confirms sulfate ions: Ba\u00B2\u207A + SO\u2084\u00B2\u207B \u2192 BaSO\u2084.'
          },
          {
            q: 'To test for halide ions (Cl\u207B, Br\u207B, I\u207B), you add:',
            options: [
              'Barium chloride solution',
              'Dilute nitric acid then silver nitrate solution',
              'Sodium hydroxide solution',
              'Litmus paper'
            ],
            answer: 1,
            explanation: 'Add dilute nitric acid then silver nitrate. Chloride gives white precipitate (AgCl), bromide gives cream precipitate (AgBr), iodide gives yellow precipitate (AgI).'
          },
          {
            q: 'Flame tests are used to identify:',
            options: [
              'Non-metal elements',
              'Gases',
              'Metal ions in compounds',
              'The pH of solutions'
            ],
            answer: 2,
            explanation: 'Different metal ions produce characteristic flame colours when heated. For example: lithium = crimson red, sodium = yellow, potassium = lilac, copper = green/blue.'
          },
          {
            q: 'A crimson red flame test indicates the presence of:',
            options: ['Sodium ions', 'Potassium ions', 'Lithium ions', 'Copper ions'],
            answer: 2,
            explanation: 'Lithium ions produce a crimson red flame. Sodium = yellow, potassium = lilac, calcium = orange-red, copper = green/blue.'
          },
          {
            q: 'Sodium hydroxide solution is added to a solution and a blue precipitate forms. This indicates the presence of:',
            options: [
              'Iron(II) ions (Fe\u00B2\u207A)',
              'Iron(III) ions (Fe\u00B3\u207A)',
              'Copper(II) ions (Cu\u00B2\u207A)',
              'Calcium ions (Ca\u00B2\u207A)'
            ],
            answer: 2,
            explanation: 'Cu\u00B2\u207A + 2OH\u207B \u2192 Cu(OH)\u2082. Copper(II) hydroxide is a blue precipitate. Iron(II) gives green, iron(III) gives brown, and calcium/magnesium give white precipitates.'
          },
          {
            q: 'Adding NaOH to a solution produces a green precipitate. Which ion is present?',
            options: ['Cu\u00B2\u207A', 'Fe\u00B2\u207A', 'Fe\u00B3\u207A', 'Al\u00B3\u207A'],
            answer: 1,
            explanation: 'Iron(II) hydroxide (Fe(OH)\u2082) is a green precipitate. Fe\u00B2\u207A + 2OH\u207B \u2192 Fe(OH)\u2082 (green).'
          },
          {
            q: 'Adding NaOH to a solution produces a brown precipitate. Which ion is present?',
            options: ['Cu\u00B2\u207A', 'Fe\u00B2\u207A', 'Fe\u00B3\u207A', 'Mg\u00B2\u207A'],
            answer: 2,
            explanation: 'Iron(III) hydroxide (Fe(OH)\u2083) is a brown (rust-coloured) precipitate. Fe\u00B3\u207A + 3OH\u207B \u2192 Fe(OH)\u2083 (brown).'
          },
          {
            q: 'A white precipitate forms with NaOH that dissolves in excess NaOH. The ion present is:',
            options: ['Ca\u00B2\u207A', 'Mg\u00B2\u207A', 'Al\u00B3\u207A', 'Fe\u00B2\u207A'],
            answer: 2,
            explanation: 'Aluminium hydroxide (Al(OH)\u2083) is a white precipitate that dissolves in excess NaOH (it is amphoteric). Calcium and magnesium hydroxides are also white but do not dissolve in excess NaOH.'
          },
          {
            q: 'Which instrument is used to identify elements by the light they emit?',
            options: [
              'Microscope',
              'Flame emission spectroscope',
              'pH meter',
              'Voltmeter'
            ],
            answer: 1,
            explanation: 'Flame emission spectroscopy analyses the wavelengths of light emitted by elements when heated. Each element produces a unique line spectrum that acts as a fingerprint.'
          },
          {
            q: 'Why is flame emission spectroscopy more reliable than flame tests?',
            options: [
              'It is cheaper',
              'It can detect very small quantities and distinguish between elements that produce similar flame colours',
              'It does not require a sample',
              'It works at room temperature'
            ],
            answer: 1,
            explanation: 'Flame emission spectroscopy is more sensitive and can identify elements even in tiny quantities. It also distinguishes between elements with similar visual flame colours by analysing specific wavelengths.'
          },
          {
            q: 'A yellow flame colour in a flame test indicates:',
            options: ['Lithium', 'Sodium', 'Potassium', 'Calcium'],
            answer: 1,
            explanation: 'Sodium ions produce an intense yellow/orange flame. This colour is so strong it can mask the colours of other ions present in the sample.'
          },
          {
            q: 'To test whether water is pure, you could:',
            options: [
              'See if it is colourless',
              'Measure its boiling point \u2014 pure water boils at exactly 100\u00B0C at standard atmospheric pressure',
              'Taste it',
              'See if it dissolves salt'
            ],
            answer: 1,
            explanation: 'Pure water has a precise boiling point of 100\u00B0C at 1 atmosphere. If it boils at a different temperature or over a range, it is not pure (it contains dissolved substances).'
          },
          {
            q: 'Which of these is an example of a formulation?',
            options: [
              'Pure water',
              'A single crystal of salt',
              'Paracetamol tablets (containing active ingredient, binders, and coating)',
              'A gold bar'
            ],
            answer: 2,
            explanation: 'Paracetamol tablets are a formulation \u2014 they contain the active drug plus precisely measured amounts of other components (binders, fillers, coatings) for a specific purpose.'
          }
        ]
      },
      {
        topic: 'Atmosphere & Climate Change',
        questions: [
          {
            q: 'The approximate composition of the Earth\'s atmosphere today is:',
            options: [
              '78% oxygen, 21% nitrogen, 1% other gases',
              '78% nitrogen, 21% oxygen, 1% other gases (including 0.04% CO\u2082)',
              '50% nitrogen, 50% oxygen',
              '99% carbon dioxide, 1% other gases'
            ],
            answer: 1,
            explanation: 'The atmosphere is approximately 78% nitrogen, 21% oxygen, with about 1% argon and small amounts of other gases including 0.04% carbon dioxide.'
          },
          {
            q: 'The early atmosphere of the Earth (billions of years ago) was mainly composed of:',
            options: [
              'Nitrogen and oxygen, like today',
              'Carbon dioxide and water vapour, with little or no oxygen',
              'Hydrogen and helium',
              'Oxygen and methane'
            ],
            answer: 1,
            explanation: 'The early atmosphere was mainly CO\u2082 and water vapour, released by volcanic activity. There was little or no oxygen. It may have been similar to the atmospheres of Mars and Venus today.'
          },
          {
            q: 'How did oxygen first appear in the Earth\'s atmosphere?',
            options: [
              'It was released by volcanoes',
              'It was produced by photosynthesis in algae and plants',
              'It was brought by meteorites',
              'It formed from the decomposition of carbon dioxide'
            ],
            answer: 1,
            explanation: 'About 2.7 billion years ago, early photosynthetic organisms (cyanobacteria/algae, and later plants) produced oxygen through photosynthesis: 6CO\u2082 + 6H\u2082O \u2192 C\u2086H\u2081\u2082O\u2086 + 6O\u2082.'
          },
          {
            q: 'The carbon dioxide levels in the early atmosphere decreased because:',
            options: [
              'CO\u2082 escaped into space',
              'CO\u2082 was used by photosynthesis, dissolved in the oceans, and locked up in fossil fuels and sedimentary rocks',
              'Volcanoes stopped erupting',
              'Animals breathed it all in'
            ],
            answer: 1,
            explanation: 'CO\u2082 was removed by: dissolving in the oceans (forming carbonate sediments/limestone), photosynthesis by plants, and being locked in fossil fuels (coal, oil, gas) over millions of years.'
          },
          {
            q: 'Which of these is a greenhouse gas?',
            options: [
              'Nitrogen',
              'Oxygen',
              'Carbon dioxide',
              'Argon'
            ],
            answer: 2,
            explanation: 'Carbon dioxide, methane, and water vapour are greenhouse gases. They absorb and re-emit infrared radiation, trapping heat in the atmosphere.'
          },
          {
            q: 'The greenhouse effect causes:',
            options: [
              'The ozone layer to thicken',
              'The Earth\'s average temperature to be higher than it would be without an atmosphere',
              'The Earth to cool down',
              'Acid rain'
            ],
            answer: 1,
            explanation: 'The greenhouse effect is a natural process where greenhouse gases absorb and re-emit infrared radiation from the Earth\'s surface, keeping the planet warm enough to support life.'
          },
          {
            q: 'Human activities that increase the amount of greenhouse gases include:',
            options: [
              'Planting trees and recycling',
              'Burning fossil fuels, deforestation, agriculture, and landfill',
              'Using solar panels and wind turbines',
              'Filtering water'
            ],
            answer: 1,
            explanation: 'Burning fossil fuels releases CO\u2082, deforestation reduces CO\u2082 absorption, livestock farming produces methane, and landfill sites release methane. All increase greenhouse gas levels.'
          },
          {
            q: 'The enhanced greenhouse effect leads to:',
            options: [
              'Cleaner air',
              'Climate change, including global warming, sea level rise, and extreme weather events',
              'More ozone in the atmosphere',
              'Decreased carbon dioxide levels'
            ],
            answer: 1,
            explanation: 'Increased greenhouse gases enhance the natural greenhouse effect, leading to global warming. Consequences include melting ice caps, rising sea levels, more frequent extreme weather, and changing habitats.'
          },
          {
            q: 'Carbon dioxide is released into the atmosphere by:',
            options: [
              'Photosynthesis',
              'Combustion of fossil fuels and respiration',
              'Condensation of water',
              'Filtration of air'
            ],
            answer: 1,
            explanation: 'CO\u2082 is released by burning fossil fuels (combustion), respiration by living organisms, volcanic eruptions, and decomposition of organic matter.'
          },
          {
            q: 'Which of these is a potential consequence of climate change?',
            options: [
              'Increased ozone layer',
              'Rising sea levels due to thermal expansion and melting ice',
              'Decreased rainfall everywhere',
              'Cooler global temperatures'
            ],
            answer: 1,
            explanation: 'Global warming causes sea levels to rise due to thermal expansion of water and melting of glaciers and ice sheets. This threatens coastal communities and low-lying areas.'
          },
          {
            q: 'A carbon footprint is:',
            options: [
              'A fossil found in rock',
              'The total amount of carbon dioxide and other greenhouse gases emitted over the full life cycle of a product, service, or event',
              'The weight of carbon in a substance',
              'The distance carbon travels in the atmosphere'
            ],
            answer: 1,
            explanation: 'A carbon footprint measures the total greenhouse gas emissions (expressed as CO\u2082 equivalent) associated with something, from production through to disposal.'
          },
          {
            q: 'Ways to reduce carbon footprint include:',
            options: [
              'Burning more fossil fuels',
              'Using renewable energy, improving energy efficiency, and carbon capture',
              'Increasing deforestation',
              'Producing more methane'
            ],
            answer: 1,
            explanation: 'Carbon footprints can be reduced by using renewable energy sources, improving insulation and energy efficiency, carbon capture and storage, and reducing consumption.'
          },
          {
            q: 'Why is it difficult to get international agreement on reducing carbon emissions?',
            options: [
              'All countries agree already',
              'Reducing emissions can be costly and some countries prioritise economic growth over environmental protection',
              'Carbon emissions have no measurable effect',
              'Technology to reduce emissions does not exist'
            ],
            answer: 1,
            explanation: 'Different countries are at different stages of development. Reducing emissions may be seen as expensive and could slow economic growth, making international agreement challenging.'
          },
          {
            q: 'Methane is a greenhouse gas produced by:',
            options: [
              'Burning wood only',
              'Livestock farming (cattle digestion) and decomposition in landfill sites',
              'Photosynthesis',
              'Evaporation of water'
            ],
            answer: 1,
            explanation: 'Methane is produced by cattle (enteric fermentation in digestion), decomposing waste in landfill sites, rice paddies, and natural wetlands. It is a potent greenhouse gas.'
          },
          {
            q: 'The water vapour in the early atmosphere eventually:',
            options: [
              'Escaped into space',
              'Condensed to form the oceans as the Earth cooled',
              'Was absorbed by plants',
              'Turned into oxygen'
            ],
            answer: 1,
            explanation: 'As the Earth gradually cooled, water vapour in the atmosphere condensed to form liquid water, which collected to form the oceans.'
          },
          {
            q: 'Limestone (calcium carbonate) formed in the oceans because:',
            options: [
              'Volcanoes erupted underwater',
              'CO\u2082 dissolved in the oceans and was used by marine organisms to make shells, which formed sediment',
              'Salt water froze and formed rock',
              'Sand turned into limestone'
            ],
            answer: 1,
            explanation: 'CO\u2082 dissolved in seawater was used by marine organisms to make calcium carbonate shells. When they died, their shells formed sediments that eventually became limestone rock.'
          },
          {
            q: 'Fossil fuels formed from:',
            options: [
              'Volcanic rock',
              'Biological material that did not decay fully and was buried under layers of sediment over millions of years',
              'Chemical reactions in the atmosphere',
              'Meteorites'
            ],
            answer: 1,
            explanation: 'Coal formed from ancient trees/plants, and oil/gas formed from marine organisms. The biological material was buried, compressed, and heated over millions of years, locking away carbon.'
          },
          {
            q: 'One scientific concern about current CO\u2082 levels is that:',
            options: [
              'CO\u2082 levels have always been this high',
              'The rate of CO\u2082 increase correlates with human industrial activity and is unprecedented in geological history',
              'CO\u2082 is decreasing',
              'CO\u2082 has no effect on temperature'
            ],
            answer: 1,
            explanation: 'Ice core data shows CO\u2082 levels were relatively stable for thousands of years but have risen sharply since the Industrial Revolution, correlating with increased burning of fossil fuels.'
          },
          {
            q: 'Peer review of climate change data is important because:',
            options: [
              'It makes the research cheaper',
              'Other scientists check the methods, data, and conclusions for accuracy and reliability',
              'It speeds up the research process',
              'It is only done by politicians'
            ],
            answer: 1,
            explanation: 'Peer review ensures that climate science is scrutinised by other experts. This helps identify errors, validates conclusions, and builds confidence in the findings before they influence policy.'
          },
          {
            q: 'Which gas makes up about 0.9% of the atmosphere and is a noble gas?',
            options: ['Carbon dioxide', 'Argon', 'Methane', 'Neon'],
            answer: 1,
            explanation: 'Argon makes up about 0.9% of the atmosphere. It is a noble gas (Group 0) and is chemically unreactive due to its full outer electron shell.'
          }
        ]
      },
      {
        topic: 'Sustainable Chemistry & Resources',
        questions: [
          {
            q: 'A finite (non-renewable) resource is one that:',
            options: [
              'Can be replaced at the same rate it is used',
              'Will eventually run out because it is not being replaced',
              'Is found in infinite quantities',
              'Is always sustainable'
            ],
            answer: 1,
            explanation: 'Finite resources (like fossil fuels and metal ores) exist in limited quantities and are being used faster than they can be replaced. They will eventually run out.'
          },
          {
            q: 'A renewable resource is one that:',
            options: [
              'Will run out within 100 years',
              'Can be replenished at the same rate or faster than it is used',
              'Is only found underground',
              'Is always made from plants'
            ],
            answer: 1,
            explanation: 'Renewable resources (like timber, biofuels, solar/wind energy) can be replaced as fast as they are used, so they will not run out if managed sustainably.'
          },
          {
            q: 'Potable water is:',
            options: [
              'Pure water with no dissolved substances',
              'Water that is safe to drink (may still contain dissolved substances)',
              'Sea water',
              'Distilled water only'
            ],
            answer: 1,
            explanation: 'Potable water is safe to drink but is not necessarily pure in the chemical sense. It may contain low levels of dissolved salts and minerals that are safe for consumption.'
          },
          {
            q: 'In the UK, potable water is produced by:',
            options: [
              'Desalination of sea water',
              'Collecting fresh water, filtering, and sterilising it (e.g. with chlorine, ozone, or UV light)',
              'Melting ice',
              'Evaporating rain water'
            ],
            answer: 1,
            explanation: 'In the UK, rain collects in reservoirs. The water is filtered through gravel/sand beds to remove particles, then sterilised (usually with chlorine) to kill microorganisms.'
          },
          {
            q: 'Desalination is used in some countries to produce potable water from:',
            options: [
              'River water',
              'Rain water',
              'Sea water or brackish water',
              'Underground springs'
            ],
            answer: 2,
            explanation: 'Desalination removes dissolved salts from sea water to make it drinkable. Methods include distillation and reverse osmosis. It is energy-intensive and used where fresh water is scarce.'
          },
          {
            q: 'Waste water (sewage) treatment involves:',
            options: [
              'Only adding chlorine',
              'Screening, sedimentation, biological treatment (by bacteria), then further chemical treatment',
              'Boiling it',
              'Freezing it to remove impurities'
            ],
            answer: 1,
            explanation: 'Sewage treatment includes: screening (removing large objects), sedimentation (settling solids), biological treatment (microorganisms digest organic matter), and sometimes chemical treatment before release.'
          },
          {
            q: 'Life cycle assessments (LCAs) consider the environmental impact of a product from:',
            options: [
              'Only its manufacture',
              'Only its disposal',
              'Cradle to grave: raw material extraction, manufacture, use, and disposal',
              'Only its transport'
            ],
            answer: 2,
            explanation: 'An LCA assesses environmental impact at every stage: extracting raw materials, manufacturing, transport, use, and final disposal (recycling, landfill, or incineration).'
          },
          {
            q: 'A limitation of life cycle assessments is:',
            options: [
              'They are too simple to be useful',
              'Some data is difficult to quantify (e.g. pollution impact) and value judgments may lead to bias',
              'They always give the same result',
              'They are only used for food products'
            ],
            answer: 1,
            explanation: 'LCAs involve subjective judgments about which environmental impacts matter most. Some data is hard to measure accurately, and selective use of data can lead to biased conclusions.'
          },
          {
            q: 'Reduce, reuse, recycle is a hierarchy for waste management. Which is most preferable?',
            options: [
              'Recycle',
              'Reuse',
              'Reduce (using less in the first place)',
              'Landfill'
            ],
            answer: 2,
            explanation: 'Reducing consumption is best because it prevents waste entirely. Reuse is second (using items again without reprocessing), then recycling (reprocessing materials). Landfill is least preferable.'
          },
          {
            q: 'Recycling metals is important because:',
            options: [
              'It uses more energy than mining',
              'It conserves finite ore resources, saves energy, and reduces landfill waste',
              'Recycled metal is always stronger',
              'It increases the amount of ore in the ground'
            ],
            answer: 1,
            explanation: 'Recycling metals uses less energy than extracting from ores, preserves finite mineral resources, reduces mining damage to the environment, and diverts waste from landfill.'
          },
          {
            q: 'The Haber process is important for making:',
            options: [
              'Sulfuric acid',
              'Ammonia, which is used to make fertilisers',
              'Sodium chloride',
              'Plastics'
            ],
            answer: 1,
            explanation: 'The Haber process makes ammonia (NH\u2083) from nitrogen and hydrogen. Ammonia is essential for making nitrogen-based fertilisers that help grow enough food for the global population.'
          },
          {
            q: 'NPK fertilisers contain:',
            options: [
              'Nitrogen, phosphorus, and potassium compounds',
              'Sodium, phosphorus, and krypton',
              'Nitrogen, platinum, and potassium',
              'Only nitrogen'
            ],
            answer: 0,
            explanation: 'NPK fertilisers contain compounds of nitrogen (N), phosphorus (P), and potassium (K) \u2014 the three essential elements that plants need for healthy growth.'
          },
          {
            q: 'Ammonia is converted to nitric acid by:',
            options: [
              'The Haber process',
              'The Ostwald process (catalytic oxidation of ammonia)',
              'Fermentation',
              'Electrolysis'
            ],
            answer: 1,
            explanation: 'The Ostwald process oxidises ammonia with oxygen over a platinum-rhodium catalyst to produce nitrogen dioxide, which is then dissolved in water to make nitric acid.'
          },
          {
            q: 'Ammonium nitrate (NH\u2084NO\u2083) is used as a fertiliser because:',
            options: [
              'It is a fuel',
              'It provides nitrogen in a soluble form that plants can absorb through their roots',
              'It is insoluble in water',
              'It is a pesticide'
            ],
            answer: 1,
            explanation: 'NH\u2084NO\u2083 provides nitrogen in a soluble form. Plants need nitrogen to make proteins and nucleic acids for growth. It dissolves in soil water and is absorbed by roots.'
          },
          {
            q: 'Phytomining and bioleaching are alternative methods for extracting copper. They are used because:',
            options: [
              'They are faster than traditional mining',
              'High-grade copper ores are running out, so low-grade ores and waste must be exploited',
              'They produce purer copper',
              'They are more polluting than traditional methods'
            ],
            answer: 1,
            explanation: 'As high-grade copper ores become scarcer, phytomining and bioleaching allow copper to be extracted from low-grade ores and mine waste that traditional methods cannot process economically.'
          },
          {
            q: 'Glass can be recycled by:',
            options: [
              'Burning it',
              'Crushing and melting it to form new glass products',
              'Dissolving it in acid',
              'Composting it'
            ],
            answer: 1,
            explanation: 'Glass is recycled by crushing it into cullet, which is melted and reformed into new glass products. This uses less energy than making glass from raw materials (sand, soda ash, limestone).'
          },
          {
            q: 'Corrosion of iron (rusting) can be prevented by:',
            options: [
              'Keeping it wet',
              'Painting, oiling, galvanising, or sacrificial protection',
              'Exposing it to salt water',
              'Heating it'
            ],
            answer: 1,
            explanation: 'Rusting requires both water and oxygen. Prevention methods include: painting/oiling (barrier), galvanising (zinc coating \u2014 barrier + sacrificial), and attaching a more reactive metal (sacrificial protection).'
          },
          {
            q: 'Ceramics, polymers, and composites have replaced metals in many applications because:',
            options: [
              'They are always stronger',
              'They can be lighter, more resistant to corrosion, and cheaper to produce for specific applications',
              'They conduct electricity better',
              'They have higher melting points'
            ],
            answer: 1,
            explanation: 'Different materials suit different purposes. Polymers can be lightweight and corrosion-resistant, ceramics withstand high temperatures, and composites combine properties of multiple materials.'
          },
          {
            q: 'A composite material is:',
            options: [
              'A pure element',
              'A material made from two or more different materials combined to create improved properties',
              'A type of metal alloy',
              'A single polymer'
            ],
            answer: 1,
            explanation: 'Composites combine materials (e.g. carbon fibre reinforced polymer) to get properties better than either component alone \u2014 such as high strength with low weight.'
          },
          {
            q: 'Sustainable development means:',
            options: [
              'Using as many resources as possible right now',
              'Meeting the needs of the present without compromising the ability of future generations to meet their own needs',
              'Never using any natural resources',
              'Only using renewable resources'
            ],
            answer: 1,
            explanation: 'Sustainable development is about balancing current needs with future needs. It involves using resources efficiently, recycling, developing alternatives, and minimising environmental damage.'
          }
        ]
      }
    ]
  }
];
