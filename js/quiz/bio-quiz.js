const BIO_QUIZ = [
  // ===== SECTION 1: CELL BIOLOGY =====
  {
    section: 'Cell Biology',
    icon: '🔬',
    color: '#059669',
    topics: [
      {
        topic: 'Cell Structure',
        questions: [
          {
            q: 'Which structure is found in plant cells but NOT in animal cells?',
            options: ['Nucleus', 'Cell wall', 'Cell membrane', 'Mitochondria'],
            answer: 1,
            explanation: 'Plant cells have a cell wall made of cellulose, which provides structural support. Animal cells only have a cell membrane.'
          },
          {
            q: 'What is the function of mitochondria?',
            options: ['Protein synthesis', 'Aerobic respiration', 'Photosynthesis', 'Storage of genetic material'],
            answer: 1,
            explanation: 'Mitochondria are the site of aerobic respiration, where glucose is broken down to release energy (ATP).'
          },
          {
            q: 'Which organelle contains the genetic material of the cell?',
            options: ['Ribosome', 'Cytoplasm', 'Nucleus', 'Cell membrane'],
            answer: 2,
            explanation: 'The nucleus contains DNA, which carries the genetic instructions for the cell.'
          },
          {
            q: 'What is the role of ribosomes?',
            options: ['Energy release', 'Protein synthesis', 'Photosynthesis', 'Cell division'],
            answer: 1,
            explanation: 'Ribosomes are the site of protein synthesis, where amino acids are assembled into proteins.'
          },
          {
            q: 'A student observes a cell under a microscope and sees chloroplasts, a cell wall, and a large vacuole. What type of cell is it?',
            options: ['Animal cell', 'Bacterial cell', 'Plant cell', 'Red blood cell'],
            answer: 2,
            explanation: 'Chloroplasts (for photosynthesis), a cellulose cell wall, and a permanent vacuole are characteristic features of plant cells.'
          },
          {
            q: 'Which of the following is a prokaryotic cell?',
            options: ['Red blood cell', 'Palisade cell', 'Bacterium', 'Sperm cell'],
            answer: 2,
            explanation: 'Bacteria are prokaryotic cells. They lack a true nucleus and membrane-bound organelles.'
          },
          {
            q: 'What feature do bacterial cells have instead of a true nucleus?',
            options: ['Mitochondria', 'A single loop of DNA', 'Chloroplasts', 'A nuclear envelope'],
            answer: 1,
            explanation: 'Bacterial cells have a single circular loop of DNA that floats freely in the cytoplasm, rather than being enclosed in a nucleus.'
          },
          {
            q: 'An image of a cell is 50 mm long. The actual cell is 0.05 mm. What is the magnification?',
            options: ['x100', 'x500', 'x1000', 'x2500'],
            answer: 2,
            explanation: 'Magnification = image size / actual size = 50 / 0.05 = x1000.'
          },
          {
            q: 'Which type of microscope has the highest resolution?',
            options: ['Light microscope', 'Magnifying glass', 'Electron microscope', 'Stereo microscope'],
            answer: 2,
            explanation: 'Electron microscopes have much higher resolution than light microscopes, allowing sub-cellular structures to be seen in detail.'
          },
          {
            q: 'What is the function of the cell membrane?',
            options: ['Provides structural support', 'Controls what enters and leaves the cell', 'Contains genetic information', 'Carries out respiration'],
            answer: 1,
            explanation: 'The cell membrane is selectively permeable and controls the movement of substances into and out of the cell.'
          },
          {
            q: 'A cell has an actual size of 0.01 mm. Under a microscope with x400 magnification, what is the image size?',
            options: ['0.4 mm', '4 mm', '40 mm', '400 mm'],
            answer: 1,
            explanation: 'Image size = actual size x magnification = 0.01 x 400 = 4 mm.'
          },
          {
            q: 'Which sub-cellular structure is found in both prokaryotic and eukaryotic cells?',
            options: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Chloroplasts'],
            answer: 2,
            explanation: 'Both prokaryotic and eukaryotic cells contain ribosomes for protein synthesis, though prokaryotic ribosomes are smaller.'
          },
          {
            q: 'What additional genetic material do some bacteria carry in small circular rings?',
            options: ['Chromosomes', 'Plasmids', 'Chromatids', 'Histones'],
            answer: 1,
            explanation: 'Plasmids are small rings of extra DNA found in some bacteria that can carry genes for antibiotic resistance.'
          },
          {
            q: 'Convert 5 micrometres to millimetres.',
            options: ['0.5 mm', '0.05 mm', '0.005 mm', '0.0005 mm'],
            answer: 2,
            explanation: '1 micrometre = 0.001 mm, so 5 micrometres = 5 x 0.001 = 0.005 mm.'
          },
          {
            q: 'Which of the following is the correct order from smallest to largest?',
            options: ['Cell, tissue, organ, organ system', 'Tissue, cell, organ system, organ', 'Organ, tissue, cell, organ system', 'Cell, organ, tissue, organ system'],
            answer: 0,
            explanation: 'The order of biological organisation from smallest to largest is: cell, tissue, organ, organ system, organism.'
          },
          {
            q: 'A light microscope has a maximum useful magnification of approximately:',
            options: ['x100', 'x500', 'x1500', 'x50000'],
            answer: 2,
            explanation: 'Light microscopes can magnify up to about x1500. Beyond this, the image becomes blurred due to the limited resolution of visible light.'
          },
          {
            q: 'What is the function of the permanent vacuole in a plant cell?',
            options: ['Protein synthesis', 'Contains cell sap to maintain turgor pressure', 'Aerobic respiration', 'Controls cell division'],
            answer: 1,
            explanation: 'The permanent vacuole is filled with cell sap and helps maintain turgor pressure, keeping the cell rigid.'
          },
          {
            q: 'Which structure in a bacterial cell provides protection and prevents the cell from bursting?',
            options: ['Flagellum', 'Plasmid', 'Cell wall', 'Capsule'],
            answer: 2,
            explanation: 'The bacterial cell wall provides structural support and prevents the cell from bursting in dilute solutions.'
          },
          {
            q: 'A student uses a microscope with a x10 eyepiece lens and a x40 objective lens. What is the total magnification?',
            options: ['x50', 'x100', 'x400', 'x4000'],
            answer: 2,
            explanation: 'Total magnification = eyepiece magnification x objective magnification = 10 x 40 = x400.'
          },
          {
            q: 'Which organelle is responsible for photosynthesis in plant cells?',
            options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'],
            answer: 2,
            explanation: 'Chloroplasts contain chlorophyll and are the site of photosynthesis, where light energy is used to make glucose.'
          }
        ]
      },
      {
        topic: 'Cell Division (Mitosis)',
        questions: [
          {
            q: 'What is the purpose of mitosis?',
            options: ['To produce gametes', 'To produce genetically identical cells for growth and repair', 'To increase genetic variation', 'To reduce chromosome number'],
            answer: 1,
            explanation: 'Mitosis produces two genetically identical daughter cells and is used for growth, repair, and asexual reproduction.'
          },
          {
            q: 'How many chromosomes do human body cells contain?',
            options: ['23', '44', '46', '92'],
            answer: 2,
            explanation: 'Human body cells (somatic cells) contain 46 chromosomes, arranged in 23 pairs.'
          },
          {
            q: 'What must happen to DNA before a cell can divide by mitosis?',
            options: ['It must be broken down', 'It must be replicated', 'It must be halved', 'It must be removed from the nucleus'],
            answer: 1,
            explanation: 'DNA replication occurs during interphase so that each new daughter cell receives a complete copy of the genetic information.'
          },
          {
            q: 'How many daughter cells are produced at the end of mitosis?',
            options: ['1', '2', '4', '8'],
            answer: 1,
            explanation: 'Mitosis produces two genetically identical daughter cells from one parent cell.'
          },
          {
            q: 'Which of the following does NOT occur during mitosis?',
            options: ['DNA replication', 'Chromosome separation', 'Halving of chromosome number', 'Division of cytoplasm'],
            answer: 2,
            explanation: 'Mitosis maintains the full chromosome number. Halving of chromosome number occurs in meiosis, not mitosis.'
          },
          {
            q: 'A cell with 12 chromosomes undergoes mitosis. How many chromosomes will each daughter cell have?',
            options: ['3', '6', '12', '24'],
            answer: 2,
            explanation: 'Mitosis produces genetically identical cells, so each daughter cell has the same number of chromosomes as the parent cell (12).'
          },
          {
            q: 'During which stage of the cell cycle does DNA replication occur?',
            options: ['Mitosis', 'Interphase', 'Cytokinesis', 'Prophase'],
            answer: 1,
            explanation: 'DNA replication occurs during interphase, the longest phase of the cell cycle, before mitosis begins.'
          },
          {
            q: 'What is the correct sequence of events in the cell cycle?',
            options: ['Mitosis, growth, DNA replication', 'Growth, DNA replication, mitosis', 'DNA replication, growth, mitosis', 'Mitosis, DNA replication, growth'],
            answer: 1,
            explanation: 'The cell cycle involves growth (G1), DNA replication (S phase), further growth (G2), and then mitosis (M phase).'
          },
          {
            q: 'Which process produces genetically different cells?',
            options: ['Mitosis', 'Binary fission', 'Meiosis', 'Cloning'],
            answer: 2,
            explanation: 'Meiosis produces genetically different cells through crossing over and independent assortment of chromosomes.'
          },
          {
            q: 'Uncontrolled cell division can lead to which condition?',
            options: ['Anaemia', 'Cancer', 'Diabetes', 'Asthma'],
            answer: 1,
            explanation: 'Cancer results from uncontrolled mitosis, forming a mass of abnormal cells called a tumour.'
          },
          {
            q: 'How many chromosomes are in a human gamete?',
            options: ['23', '46', '69', '92'],
            answer: 0,
            explanation: 'Human gametes (sperm and egg cells) contain 23 chromosomes — half the number of body cells — produced by meiosis.'
          },
          {
            q: 'Which type of tumour is described as benign?',
            options: ['Spreads to other parts of the body', 'Grows rapidly and invades tissues', 'Stays contained and does not invade other tissues', 'Always requires chemotherapy'],
            answer: 2,
            explanation: 'Benign tumours are contained within a membrane and do not invade other tissues or spread (metastasise).'
          },
          {
            q: 'What happens to chromosomes during mitosis to make them visible under a light microscope?',
            options: ['They uncoil', 'They condense and become shorter and thicker', 'They leave the nucleus', 'They dissolve'],
            answer: 1,
            explanation: 'Chromosomes condense (coil up tightly) during mitosis, making them visible under a light microscope.'
          },
          {
            q: 'A single cell undergoes mitosis 3 times. How many cells are produced?',
            options: ['3', '6', '8', '16'],
            answer: 2,
            explanation: 'Each division doubles the number of cells: 1 -> 2 -> 4 -> 8. After 3 divisions, there are 2^3 = 8 cells.'
          },
          {
            q: 'Where does meiosis occur in the human body?',
            options: ['In the brain', 'In the liver', 'In the reproductive organs', 'In the blood'],
            answer: 2,
            explanation: 'Meiosis occurs in the ovaries and testes to produce egg cells and sperm cells (gametes).'
          },
          {
            q: 'How many daughter cells does meiosis produce from one parent cell?',
            options: ['1', '2', '4', '8'],
            answer: 2,
            explanation: 'Meiosis involves two divisions, producing four genetically different haploid daughter cells from one diploid parent cell.'
          },
          {
            q: 'What type of cell division is used in asexual reproduction?',
            options: ['Meiosis', 'Mitosis', 'Fertilisation', 'Differentiation'],
            answer: 1,
            explanation: 'Asexual reproduction uses mitosis, producing offspring that are genetically identical to the parent.'
          },
          {
            q: 'Which statement about malignant tumours is correct?',
            options: ['They stay in one place', 'They cannot be treated', 'They can spread to other parts of the body via the blood', 'They are always caused by viruses'],
            answer: 2,
            explanation: 'Malignant tumours are cancerous and can metastasise — spreading to other parts of the body through the bloodstream or lymphatic system.'
          },
          {
            q: 'What is the name of the structure formed when chromosomes are joined together after DNA replication?',
            options: ['Chromatids joined by a centromere', 'Plasmids joined by a ribosome', 'Genes joined by a nucleus', 'Alleles joined by a chromosome'],
            answer: 0,
            explanation: 'After DNA replication, the two identical copies (sister chromatids) are held together by a centromere.'
          },
          {
            q: 'Why is genetic variation important for a species?',
            options: ['It makes all organisms identical', 'It allows the species to adapt to changing environments', 'It prevents all reproduction', 'It reduces the chance of survival'],
            answer: 1,
            explanation: 'Genetic variation means some individuals may have characteristics better suited to changing environments, improving the species\' chance of survival through natural selection.'
          }
        ]
      },
      {
        topic: 'Transport in Cells',
        questions: [
          {
            q: 'What is diffusion?',
            options: ['Movement of water through a partially permeable membrane', 'Net movement of particles from high to low concentration', 'Movement of particles against a concentration gradient', 'Movement of particles using energy from respiration'],
            answer: 1,
            explanation: 'Diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration, down the concentration gradient.'
          },
          {
            q: 'Which of the following is an example of osmosis?',
            options: ['Oxygen entering the blood in the lungs', 'Water moving into a plant root hair cell', 'Glucose being absorbed in the small intestine', 'Carbon dioxide leaving a respiring cell'],
            answer: 1,
            explanation: 'Osmosis is the movement of water molecules across a partially permeable membrane from a dilute to a more concentrated solution. Water entering root hair cells is an example.'
          },
          {
            q: 'What happens to a plant cell placed in a very concentrated sugar solution?',
            options: ['It bursts', 'It becomes turgid', 'It becomes plasmolysed', 'Nothing happens'],
            answer: 2,
            explanation: 'Water leaves the cell by osmosis, causing the cytoplasm to shrink away from the cell wall. This is called plasmolysis.'
          },
          {
            q: 'Active transport differs from diffusion because it:',
            options: ['Does not require energy', 'Moves substances from high to low concentration', 'Moves substances against the concentration gradient using energy', 'Only occurs in plant cells'],
            answer: 2,
            explanation: 'Active transport uses energy from respiration to move substances from a lower to a higher concentration, against the concentration gradient.'
          },
          {
            q: 'Which factor does NOT affect the rate of diffusion?',
            options: ['Temperature', 'Concentration gradient', 'Surface area', 'Colour of the substance'],
            answer: 3,
            explanation: 'The rate of diffusion is affected by temperature, concentration gradient, surface area, and membrane thickness, but not by the colour of the substance.'
          },
          {
            q: 'What happens to an animal cell placed in pure water?',
            options: ['It becomes plasmolysed', 'It stays the same', 'It swells and may burst (lyse)', 'It shrinks'],
            answer: 2,
            explanation: 'Water enters the animal cell by osmosis because the cell contents are more concentrated. Without a cell wall, the cell may swell and burst (lyse).'
          },
          {
            q: 'A plant cell placed in pure water becomes:',
            options: ['Plasmolysed', 'Turgid', 'Crenated', 'Lysed'],
            answer: 1,
            explanation: 'Water enters by osmosis, making the cell swell. The rigid cell wall prevents it from bursting, so it becomes turgid (firm).'
          },
          {
            q: 'Where does active transport occur in plants?',
            options: ['In the leaves only', 'In root hair cells to absorb mineral ions', 'In the flowers', 'In the stem'],
            answer: 1,
            explanation: 'Root hair cells use active transport to absorb mineral ions from the soil, where the concentration of minerals is lower than inside the cell.'
          },
          {
            q: 'In the small intestine, glucose is absorbed by:',
            options: ['Osmosis only', 'Diffusion only', 'Active transport and diffusion', 'Filtration'],
            answer: 2,
            explanation: 'Glucose is initially absorbed by diffusion, but when concentration in the gut is lower than in the blood, active transport is used to continue absorption.'
          },
          {
            q: 'How are root hair cells adapted for absorbing water?',
            options: ['They have thick walls', 'They have a large surface area due to their elongated shape', 'They contain chloroplasts', 'They are very short and round'],
            answer: 1,
            explanation: 'Root hair cells have a long, thin extension that increases the surface area for water absorption by osmosis.'
          },
          {
            q: 'Which gas diffuses from the blood into the alveoli?',
            options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Water vapour'],
            answer: 2,
            explanation: 'Carbon dioxide diffuses from the blood (where it is at higher concentration) into the alveoli (lower concentration) to be exhaled.'
          },
          {
            q: 'What provides the energy for active transport?',
            options: ['Sunlight', 'Osmotic pressure', 'Respiration', 'Diffusion'],
            answer: 2,
            explanation: 'Active transport requires energy released from cellular respiration (ATP) to move substances against the concentration gradient.'
          },
          {
            q: 'A student places a chip of potato in pure water for 30 minutes. The chip increases in mass. Why?',
            options: ['Glucose moved into the chip by diffusion', 'Water moved into the chip by osmosis', 'Salt moved out of the chip', 'The chip absorbed heat energy'],
            answer: 1,
            explanation: 'The potato cells have a higher solute concentration than pure water, so water enters by osmosis, increasing the mass of the chip.'
          },
          {
            q: 'Which adaptation of the alveoli increases the rate of gas exchange?',
            options: ['Thick walls', 'Small surface area', 'Rich blood supply', 'Low moisture levels'],
            answer: 2,
            explanation: 'Alveoli have a rich blood supply that maintains a steep concentration gradient for oxygen and carbon dioxide, increasing the rate of diffusion.'
          },
          {
            q: 'Osmosis is best described as the movement of:',
            options: ['Solute molecules from dilute to concentrated solution', 'Water molecules from concentrated to dilute solution', 'Water molecules from dilute to concentrated solution through a partially permeable membrane', 'Any substance down its concentration gradient'],
            answer: 2,
            explanation: 'Osmosis is specifically the movement of water molecules through a partially permeable membrane from a dilute solution to a more concentrated solution.'
          },
          {
            q: 'A potato chip has a starting mass of 5.0 g and a final mass of 4.2 g. What is the percentage change in mass?',
            options: ['-16%', '-8%', '+16%', '+8%'],
            answer: 0,
            explanation: 'Percentage change = ((4.2 - 5.0) / 5.0) x 100 = (-0.8 / 5.0) x 100 = -16%.'
          },
          {
            q: 'Why do cells involved in active transport have many mitochondria?',
            options: ['To produce proteins', 'To release energy through respiration for active transport', 'To carry out photosynthesis', 'To store water'],
            answer: 1,
            explanation: 'Mitochondria carry out aerobic respiration, releasing the energy (ATP) needed to power active transport.'
          },
          {
            q: 'Which of the following increases the rate of diffusion?',
            options: ['Decreasing the surface area', 'Increasing the membrane thickness', 'Increasing the temperature', 'Decreasing the concentration gradient'],
            answer: 2,
            explanation: 'Higher temperatures give particles more kinetic energy, causing them to move faster and increasing the rate of diffusion.'
          },
          {
            q: 'Exchange surfaces in the body are adapted by being:',
            options: ['Thick, with a small surface area and poor blood supply', 'Thin, with a large surface area and good blood supply', 'Thick, with a large surface area and poor blood supply', 'Thin, with a small surface area and good blood supply'],
            answer: 1,
            explanation: 'Efficient exchange surfaces are thin (short diffusion distance), have a large surface area, and a good blood supply to maintain concentration gradients.'
          },
          {
            q: 'What would happen to the rate of active transport if a cell was deprived of oxygen?',
            options: ['It would increase', 'It would stay the same', 'It would decrease or stop', 'It would reverse direction'],
            answer: 2,
            explanation: 'Without oxygen, aerobic respiration cannot occur, reducing the energy available for active transport, so the rate would decrease or stop.'
          }
        ]
      },
      {
        topic: 'Cell Differentiation & Stem Cells',
        questions: [
          {
            q: 'What is cell differentiation?',
            options: ['Cell division by mitosis', 'The process by which a cell becomes specialised for a particular function', 'The movement of cells within the body', 'The death of old cells'],
            answer: 1,
            explanation: 'Cell differentiation is the process by which cells develop specialised structures and functions suited to their role.'
          },
          {
            q: 'Which of the following is a specialised animal cell?',
            options: ['Palisade cell', 'Root hair cell', 'Sperm cell', 'Xylem vessel'],
            answer: 2,
            explanation: 'Sperm cells are specialised animal cells with a streamlined shape, tail for swimming, and many mitochondria for energy.'
          },
          {
            q: 'Why do sperm cells have many mitochondria?',
            options: ['To carry genetic information', 'To provide energy for swimming to the egg', 'To produce enzymes', 'To store food'],
            answer: 1,
            explanation: 'Mitochondria release energy through respiration, which powers the movement of the sperm tail to swim towards the egg.'
          },
          {
            q: 'What type of stem cells can differentiate into any type of cell?',
            options: ['Adult stem cells', 'Embryonic stem cells', 'Meristematic cells', 'Red blood cells'],
            answer: 1,
            explanation: 'Embryonic stem cells are pluripotent, meaning they can differentiate into almost any type of specialised cell in the body.'
          },
          {
            q: 'Where are stem cells found in adult humans?',
            options: ['In the brain only', 'In the bone marrow', 'In the liver only', 'In all body cells'],
            answer: 1,
            explanation: 'Adult stem cells are found in bone marrow and can differentiate into different types of blood cells.'
          },
          {
            q: 'Where are stem cells (meristem tissue) found in plants?',
            options: ['In the leaves', 'In the roots and shoot tips', 'In the flowers', 'In the bark'],
            answer: 1,
            explanation: 'Plant stem cells are found in meristem tissue at the root and shoot tips, where they can differentiate into any type of plant cell.'
          },
          {
            q: 'Which is an ethical concern about using embryonic stem cells?',
            options: ['They are too expensive', 'The embryo is destroyed during extraction', 'They can only produce blood cells', 'They always cause cancer'],
            answer: 1,
            explanation: 'Extracting embryonic stem cells requires destruction of the embryo, which some people consider to be the destruction of a potential human life.'
          },
          {
            q: 'How is a red blood cell adapted for its function?',
            options: ['It has a large nucleus', 'It has a biconcave disc shape and no nucleus', 'It has many chloroplasts', 'It has a tail for movement'],
            answer: 1,
            explanation: 'Red blood cells have a biconcave shape (increasing surface area) and no nucleus (more space for haemoglobin) to efficiently carry oxygen.'
          },
          {
            q: 'How are nerve cells adapted for their function?',
            options: ['They are very short and round', 'They have long axons and branched dendrites', 'They contain chloroplasts', 'They have thick cell walls'],
            answer: 1,
            explanation: 'Nerve cells have long axons to carry electrical impulses over distances and branched dendrites to form connections with other cells.'
          },
          {
            q: 'Which statement about adult stem cells is correct?',
            options: ['They can differentiate into any cell type', 'They can only differentiate into a limited range of cell types', 'They are only found in embryos', 'They cannot be used in medical treatments'],
            answer: 1,
            explanation: 'Adult stem cells are multipotent and can only differentiate into a limited number of cell types, unlike embryonic stem cells.'
          },
          {
            q: 'Therapeutic cloning could be used to:',
            options: ['Clone entire humans', 'Produce embryonic stem cells with the same genes as the patient', 'Replace damaged organs immediately', 'Increase antibiotic resistance'],
            answer: 1,
            explanation: 'Therapeutic cloning produces embryonic stem cells that are genetically identical to the patient, reducing the risk of immune rejection.'
          },
          {
            q: 'Why can most animal cells only differentiate at an early stage?',
            options: ['They lose their DNA', 'They lose the ability to differentiate early in development', 'They have no ribosomes', 'They are too small'],
            answer: 1,
            explanation: 'Most animal cells lose their ability to differentiate early in development and become permanently specialised, unlike plant cells.'
          },
          {
            q: 'How are xylem vessels adapted for transporting water?',
            options: ['They are alive with thin walls', 'They are dead, hollow, and strengthened with lignin', 'They have many mitochondria', 'They contain haemoglobin'],
            answer: 1,
            explanation: 'Xylem vessels are dead cells with no end walls, forming continuous hollow tubes. Lignin strengthens the walls to withstand water pressure.'
          },
          {
            q: 'Stem cells could potentially be used to treat which condition?',
            options: ['Broken bones', 'Paralysis caused by spinal cord damage', 'Common cold', 'Food poisoning'],
            answer: 1,
            explanation: 'Stem cells could potentially be used to replace damaged nerve cells in the spinal cord, offering hope for treating paralysis.'
          },
          {
            q: 'Which advantage do plant cells have over animal cells regarding differentiation?',
            options: ['They differentiate faster', 'They can differentiate throughout their life', 'They do not need stem cells', 'They only produce one cell type'],
            answer: 1,
            explanation: 'Unlike most animal cells, many plant cells retain the ability to differentiate throughout their life from meristematic tissue.'
          },
          {
            q: 'How is a palisade mesophyll cell adapted for photosynthesis?',
            options: ['It has few chloroplasts', 'It is packed with chloroplasts and positioned near the upper surface of the leaf', 'It has no vacuole', 'It has a thick cell wall'],
            answer: 1,
            explanation: 'Palisade cells contain many chloroplasts and are found near the top of the leaf to absorb maximum light for photosynthesis.'
          },
          {
            q: 'What is a potential risk of stem cell therapy?',
            options: ['The patient may grow taller', 'Stem cells may divide uncontrollably, forming tumours', 'Stem cells always cause allergic reactions', 'There are no risks'],
            answer: 1,
            explanation: 'There is a risk that transplanted stem cells may divide uncontrollably and form tumours, which is a concern in stem cell treatments.'
          },
          {
            q: 'Which specialised cell has an elongated shape to increase surface area for absorption?',
            options: ['White blood cell', 'Root hair cell', 'Sperm cell', 'Muscle cell'],
            answer: 1,
            explanation: 'Root hair cells have a long, thin extension (root hair) that greatly increases the surface area for absorbing water and mineral ions from the soil.'
          },
          {
            q: 'Why might stem cells from a donor be rejected by a patient\'s immune system?',
            options: ['They are too large', 'They have different antigens on their surface', 'They contain no DNA', 'They are dead cells'],
            answer: 1,
            explanation: 'Donor stem cells have different antigens (proteins on the cell surface), which the patient\'s immune system may recognise as foreign and attack.'
          },
          {
            q: 'In plants, meristem tissue is important for:',
            options: ['Transporting water', 'Producing new cells for growth throughout the plant\'s life', 'Photosynthesis', 'Gas exchange'],
            answer: 1,
            explanation: 'Meristem tissue contains undifferentiated stem cells that divide by mitosis to produce new cells for growth at the root and shoot tips.'
          }
        ]
      }
    ]
  },

  // ===== SECTION 2: ORGANISATION =====
  {
    section: 'Organisation',
    icon: '🫀',
    color: '#DC2626',
    topics: [
      {
        topic: 'Digestive System & Enzymes',
        questions: [
          {
            q: 'What type of biological molecule are enzymes?',
            options: ['Lipids', 'Carbohydrates', 'Proteins', 'Nucleic acids'],
            answer: 2,
            explanation: 'Enzymes are biological catalysts made of protein that speed up chemical reactions in living organisms.'
          },
          {
            q: 'What is meant by the "lock and key" model of enzyme action?',
            options: ['Enzymes lock cells together', 'The substrate fits into the enzyme\'s active site like a key fits a lock', 'Enzymes are shaped like keys', 'Enzymes lock onto any molecule'],
            answer: 1,
            explanation: 'The lock and key model explains that the substrate has a specific shape that fits exactly into the enzyme\'s active site, like a key in a lock.'
          },
          {
            q: 'What happens to an enzyme at very high temperatures?',
            options: ['It works faster indefinitely', 'It becomes denatured — the active site changes shape', 'It freezes', 'It dissolves'],
            answer: 1,
            explanation: 'High temperatures break the bonds holding the enzyme in shape, changing the active site so the substrate can no longer fit. The enzyme is denatured.'
          },
          {
            q: 'Which enzyme breaks down starch?',
            options: ['Protease', 'Lipase', 'Amylase', 'Catalase'],
            answer: 2,
            explanation: 'Amylase is a carbohydrase that breaks down starch into maltose (a sugar). It is produced in the salivary glands and pancreas.'
          },
          {
            q: 'Where is bile produced and stored?',
            options: ['Produced in the stomach, stored in the pancreas', 'Produced in the liver, stored in the gall bladder', 'Produced in the pancreas, stored in the liver', 'Produced in the small intestine, stored in the appendix'],
            answer: 1,
            explanation: 'Bile is produced by the liver and stored in the gall bladder before being released into the small intestine.'
          },
          {
            q: 'What is the function of bile?',
            options: ['To break down proteins', 'To emulsify fats and neutralise stomach acid', 'To absorb water', 'To kill bacteria'],
            answer: 1,
            explanation: 'Bile emulsifies fats (breaks them into small droplets, increasing surface area for lipase) and neutralises stomach acid to provide alkaline conditions for intestinal enzymes.'
          },
          {
            q: 'What are the products of lipid digestion?',
            options: ['Amino acids', 'Glucose', 'Glycerol and fatty acids', 'Maltose'],
            answer: 2,
            explanation: 'Lipase breaks down lipids (fats) into glycerol and fatty acids.'
          },
          {
            q: 'What are the products of protein digestion?',
            options: ['Amino acids', 'Fatty acids', 'Simple sugars', 'Glycerol'],
            answer: 0,
            explanation: 'Protease enzymes break down proteins into amino acids.'
          },
          {
            q: 'Why does the stomach produce hydrochloric acid?',
            options: ['To neutralise bile', 'To provide the optimum pH for pepsin and kill bacteria', 'To emulsify fats', 'To break down starch'],
            answer: 1,
            explanation: 'Hydrochloric acid provides the acidic pH (about pH 2) needed for pepsin (a stomach protease) to work optimally and kills harmful bacteria in food.'
          },
          {
            q: 'A student tests for the presence of starch. Which reagent should they use?',
            options: ['Benedict\'s solution', 'Biuret reagent', 'Iodine solution', 'Litmus paper'],
            answer: 2,
            explanation: 'Iodine solution turns from brown/orange to blue-black in the presence of starch.'
          },
          {
            q: 'Which reagent is used to test for sugars, and what colour change indicates a positive result?',
            options: ['Iodine — turns blue-black', 'Benedict\'s solution — turns from blue to brick red/orange', 'Biuret reagent — turns purple', 'Ethanol — turns cloudy'],
            answer: 1,
            explanation: 'Benedict\'s solution is heated with the sample. A colour change from blue to green/yellow/orange/brick red indicates reducing sugars are present.'
          },
          {
            q: 'Where is most of the absorption of digested food carried out?',
            options: ['Stomach', 'Large intestine', 'Small intestine', 'Oesophagus'],
            answer: 2,
            explanation: 'The small intestine has a large surface area due to villi and microvilli, a thin lining, a good blood supply, and is long — all adaptations for efficient absorption.'
          },
          {
            q: 'How are villi adapted for absorption?',
            options: ['They are thick and short', 'They have a large surface area, thin walls, and a good blood supply', 'They produce enzymes only', 'They are covered in mucus'],
            answer: 1,
            explanation: 'Villi increase surface area, have thin walls (one cell thick) for short diffusion distance, and have a rich blood supply to maintain concentration gradients.'
          },
          {
            q: 'What is the optimum pH for enzymes in the small intestine?',
            options: ['pH 2 (acidic)', 'pH 7 (neutral) to slightly alkaline', 'pH 14 (very alkaline)', 'pH 5 (slightly acidic)'],
            answer: 1,
            explanation: 'Enzymes in the small intestine (such as those from the pancreas) work best at a neutral to slightly alkaline pH, around pH 7-8.'
          },
          {
            q: 'What does it mean when we say enzymes are "specific"?',
            options: ['They work at any temperature', 'Each enzyme only catalyses one type of reaction', 'They can be reused indefinitely', 'They are found in all cells'],
            answer: 1,
            explanation: 'Enzyme specificity means each enzyme has a uniquely shaped active site that only fits one specific substrate, so it can only catalyse one reaction.'
          },
          {
            q: 'Which organ produces protease, lipase, and amylase?',
            options: ['Stomach', 'Liver', 'Pancreas', 'Salivary glands'],
            answer: 2,
            explanation: 'The pancreas produces all three types of digestive enzymes (protease, lipase, and amylase) and releases them into the small intestine.'
          },
          {
            q: 'What is the test for proteins using Biuret reagent?',
            options: ['Blue to brick red', 'Brown to blue-black', 'Blue to purple/violet', 'Clear to cloudy white'],
            answer: 2,
            explanation: 'Biuret reagent turns from blue to purple/violet in the presence of proteins.'
          },
          {
            q: 'What is the role of the large intestine?',
            options: ['Digestion of proteins', 'Absorption of water from undigested food', 'Production of bile', 'Emulsification of fats'],
            answer: 1,
            explanation: 'The large intestine absorbs water from undigested food, forming faeces which are then egested.'
          },
          {
            q: 'A student investigates the effect of temperature on amylase activity. At 80°C, the starch is not broken down. Why?',
            options: ['The amylase has been denatured', 'The starch has evaporated', 'The iodine reagent does not work at high temperatures', 'The amylase works too quickly'],
            answer: 0,
            explanation: 'At 80°C, the amylase enzyme is denatured — its active site has changed shape permanently, so it can no longer bind to starch.'
          },
          {
            q: 'How does increasing substrate concentration affect the rate of an enzyme-controlled reaction?',
            options: ['Rate always decreases', 'Rate increases until all active sites are occupied, then levels off', 'Rate is unaffected', 'The enzyme is denatured'],
            answer: 1,
            explanation: 'Increasing substrate concentration increases the rate as more substrates collide with active sites, but once all active sites are occupied, the rate plateaus.'
          }
        ]
      },
      {
        topic: 'The Heart & Blood Vessels',
        questions: [
          {
            q: 'Which chamber of the heart pumps blood to the lungs?',
            options: ['Left atrium', 'Left ventricle', 'Right atrium', 'Right ventricle'],
            answer: 3,
            explanation: 'The right ventricle pumps deoxygenated blood to the lungs via the pulmonary artery for gas exchange.'
          },
          {
            q: 'Why does the left ventricle have a thicker muscular wall than the right ventricle?',
            options: ['It receives blood from the lungs', 'It needs to pump blood at higher pressure to the whole body', 'It pumps blood to the lungs only', 'It contains more blood'],
            answer: 1,
            explanation: 'The left ventricle pumps blood around the entire body (systemic circulation), requiring more force than the right ventricle which only pumps to the nearby lungs.'
          },
          {
            q: 'What is the function of the heart valves?',
            options: ['To speed up blood flow', 'To prevent backflow of blood', 'To filter blood', 'To oxygenate blood'],
            answer: 1,
            explanation: 'Heart valves prevent the backflow of blood, ensuring it flows in one direction through the heart chambers.'
          },
          {
            q: 'Which blood vessel carries oxygenated blood away from the heart to the body?',
            options: ['Pulmonary artery', 'Vena cava', 'Aorta', 'Pulmonary vein'],
            answer: 2,
            explanation: 'The aorta is the largest artery and carries oxygenated blood from the left ventricle to the rest of the body.'
          },
          {
            q: 'Which blood vessel carries deoxygenated blood from the body back to the heart?',
            options: ['Aorta', 'Pulmonary artery', 'Pulmonary vein', 'Vena cava'],
            answer: 3,
            explanation: 'The vena cava (superior and inferior) carries deoxygenated blood from the body back to the right atrium of the heart.'
          },
          {
            q: 'What are the characteristics of arteries?',
            options: ['Thin walls, valves, carry blood towards the heart', 'Thick elastic walls, no valves, carry blood away from the heart', 'One cell thick walls, no valves', 'Thick walls, valves, carry blood towards the heart'],
            answer: 1,
            explanation: 'Arteries have thick, elastic, muscular walls to withstand high pressure blood pumped from the heart. They carry blood away from the heart.'
          },
          {
            q: 'What are capillaries adapted for?',
            options: ['Carrying blood at high pressure', 'Exchange of substances with tissues', 'Carrying large volumes of blood', 'Pumping blood back to the heart'],
            answer: 1,
            explanation: 'Capillaries have walls just one cell thick and a narrow lumen, allowing efficient exchange of substances (oxygen, glucose, CO2) between blood and tissues.'
          },
          {
            q: 'Which feature do veins have that arteries do not?',
            options: ['Thick walls', 'Elastic tissue', 'Valves', 'A pulse'],
            answer: 2,
            explanation: 'Veins contain valves to prevent backflow of blood, as they carry blood at low pressure back to the heart.'
          },
          {
            q: 'What is coronary heart disease?',
            options: ['A disease affecting the lungs', 'Blockage of the coronary arteries reducing blood flow to the heart muscle', 'An infection of the heart valves', 'Low blood pressure'],
            answer: 1,
            explanation: 'Coronary heart disease occurs when fatty deposits build up in the coronary arteries, narrowing them and reducing blood (and oxygen) supply to the heart muscle.'
          },
          {
            q: 'What is a stent used for?',
            options: ['To replace a damaged heart valve', 'To hold open a narrowed coronary artery', 'To measure heart rate', 'To filter blood in the kidneys'],
            answer: 1,
            explanation: 'Stents are small mesh tubes inserted into narrowed coronary arteries to keep them open, restoring blood flow to the heart muscle.'
          },
          {
            q: 'Which type of blood vessel has the largest lumen?',
            options: ['Arteries', 'Capillaries', 'Veins', 'Arterioles'],
            answer: 2,
            explanation: 'Veins have the largest lumen (internal diameter) relative to their wall thickness, allowing blood to flow more easily at low pressure.'
          },
          {
            q: 'The natural pacemaker of the heart is located in the:',
            options: ['Left ventricle', 'Right atrium', 'Left atrium', 'Aorta'],
            answer: 1,
            explanation: 'The sinoatrial node (SAN) in the right atrium acts as the natural pacemaker, generating electrical impulses to control heart rate.'
          },
          {
            q: 'What can be used to replace faulty heart valves?',
            options: ['Stents only', 'Biological or mechanical valves', 'Pacemakers', 'Antibiotics'],
            answer: 1,
            explanation: 'Faulty heart valves can be replaced with biological valves (from humans or pigs) or mechanical valves to restore normal blood flow.'
          },
          {
            q: 'What is the double circulatory system?',
            options: ['Blood passes through the heart once per circuit', 'Blood passes through the heart twice per complete circuit of the body', 'The heart has two chambers', 'Blood flows in two directions simultaneously'],
            answer: 1,
            explanation: 'In a double circulatory system, blood passes through the heart twice: once to the lungs (pulmonary) and once to the body (systemic).'
          },
          {
            q: 'A patient has a resting heart rate of 72 beats per minute and a stroke volume of 70 cm³. What is their cardiac output?',
            options: ['5040 cm³/min', '142 cm³/min', '1.03 cm³/min', '7200 cm³/min'],
            answer: 0,
            explanation: 'Cardiac output = heart rate x stroke volume = 72 x 70 = 5040 cm³/min.'
          },
          {
            q: 'Which blood vessel is the exception to the rule that arteries carry oxygenated blood?',
            options: ['Aorta', 'Vena cava', 'Pulmonary artery', 'Hepatic artery'],
            answer: 2,
            explanation: 'The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs, making it the exception.'
          },
          {
            q: 'What are statins used for?',
            options: ['To increase heart rate', 'To reduce cholesterol levels in the blood', 'To replace heart valves', 'To kill bacteria'],
            answer: 1,
            explanation: 'Statins reduce blood cholesterol levels, slowing the build-up of fatty deposits in coronary arteries and reducing the risk of heart disease.'
          },
          {
            q: 'What is the order of blood flow through the heart?',
            options: ['Vena cava, left atrium, left ventricle, aorta', 'Vena cava, right atrium, right ventricle, pulmonary artery', 'Aorta, right atrium, left ventricle, pulmonary artery', 'Pulmonary vein, right atrium, right ventricle, aorta'],
            answer: 1,
            explanation: 'Deoxygenated blood enters via the vena cava into the right atrium, then the right ventricle, and is pumped to the lungs via the pulmonary artery.'
          },
          {
            q: 'An artificial pacemaker is used when:',
            options: ['The coronary arteries are blocked', 'The natural pacemaker (SAN) is faulty', 'Heart valves are leaking', 'Blood pressure is too high'],
            answer: 1,
            explanation: 'An artificial pacemaker is an electrical device implanted to correct irregular heart rhythms caused by a faulty sinoatrial node.'
          },
          {
            q: 'Which risk factor for coronary heart disease is NOT related to lifestyle?',
            options: ['Smoking', 'High-fat diet', 'Family history (genetic factors)', 'Lack of exercise'],
            answer: 2,
            explanation: 'Family history is a non-modifiable risk factor for coronary heart disease, unlike smoking, diet, and exercise which are lifestyle choices.'
          }
        ]
      },
      {
        topic: 'Blood & Disease',
        questions: [
          {
            q: 'What are the four main components of blood?',
            options: ['Red cells, white cells, platelets, plasma', 'Red cells, white cells, water, oxygen', 'Platelets, plasma, haemoglobin, antibodies', 'Glucose, oxygen, carbon dioxide, urea'],
            answer: 0,
            explanation: 'Blood consists of red blood cells (carry oxygen), white blood cells (fight infection), platelets (clotting), and plasma (liquid that carries dissolved substances).'
          },
          {
            q: 'What is the function of plasma?',
            options: ['To carry oxygen', 'To transport dissolved substances such as glucose, CO2, urea, and hormones', 'To fight infection', 'To help blood clot'],
            answer: 1,
            explanation: 'Plasma is the liquid component of blood that transports dissolved substances including glucose, carbon dioxide, urea, hormones, and antibodies.'
          },
          {
            q: 'What protein in red blood cells binds to oxygen?',
            options: ['Keratin', 'Antibodies', 'Haemoglobin', 'Insulin'],
            answer: 2,
            explanation: 'Haemoglobin is an iron-containing protein in red blood cells that binds to oxygen in the lungs and releases it in the tissues.'
          },
          {
            q: 'How do white blood cells defend the body? (Select the most complete answer)',
            options: ['By carrying oxygen', 'By phagocytosis, producing antibodies, and producing antitoxins', 'By clotting blood', 'By carrying dissolved glucose'],
            answer: 1,
            explanation: 'White blood cells defend the body by engulfing pathogens (phagocytosis), producing antibodies to target specific pathogens, and producing antitoxins to neutralise toxins.'
          },
          {
            q: 'What is the role of platelets?',
            options: ['To transport oxygen', 'To fight infection', 'To help blood clot at wound sites', 'To produce hormones'],
            answer: 2,
            explanation: 'Platelets are cell fragments that help blood clot at wound sites, forming a scab to prevent blood loss and entry of pathogens.'
          },
          {
            q: 'Which type of white blood cell engulfs pathogens?',
            options: ['Lymphocytes', 'Phagocytes', 'Red blood cells', 'Platelets'],
            answer: 1,
            explanation: 'Phagocytes surround, engulf, and digest pathogens in a process called phagocytosis.'
          },
          {
            q: 'What are antibodies?',
            options: ['Drugs used to kill bacteria', 'Proteins produced by lymphocytes that bind to specific antigens on pathogens', 'Toxins produced by bacteria', 'Red blood cell proteins'],
            answer: 1,
            explanation: 'Antibodies are specific proteins produced by lymphocytes (a type of white blood cell) that bind to antigens on pathogens, marking them for destruction.'
          },
          {
            q: 'What is a communicable disease?',
            options: ['A disease caused by a genetic mutation', 'A disease that can be spread from one organism to another', 'A disease caused by a vitamin deficiency', 'A disease that cannot be treated'],
            answer: 1,
            explanation: 'Communicable (infectious) diseases are caused by pathogens and can be spread between organisms.'
          },
          {
            q: 'Which of the following is a non-communicable disease?',
            options: ['Measles', 'Tuberculosis', 'Type 2 diabetes', 'Cholera'],
            answer: 2,
            explanation: 'Type 2 diabetes is a non-communicable disease — it cannot be passed from person to person and is linked to lifestyle factors.'
          },
          {
            q: 'What is a risk factor for disease?',
            options: ['A pathogen that causes disease', 'Something that increases the likelihood of developing a disease', 'A type of white blood cell', 'A vaccination'],
            answer: 1,
            explanation: 'Risk factors are aspects of lifestyle or substances that increase the probability of developing a particular disease, such as smoking increasing lung cancer risk.'
          },
          {
            q: 'Smoking is a risk factor for which diseases?',
            options: ['Diabetes and scurvy', 'Lung cancer, cardiovascular disease, and lung disease', 'Measles and chickenpox', 'Rickets and anaemia'],
            answer: 1,
            explanation: 'Smoking is a major risk factor for lung cancer, cardiovascular disease, and chronic lung diseases such as bronchitis and emphysema.'
          },
          {
            q: 'Obesity is a risk factor for:',
            options: ['Measles', 'Type 2 diabetes', 'Malaria', 'Tuberculosis'],
            answer: 1,
            explanation: 'Obesity is a significant risk factor for Type 2 diabetes, as excess body fat can lead to insulin resistance.'
          },
          {
            q: 'What does the term "antigen" mean?',
            options: ['A type of antibiotic', 'A protein on the surface of a pathogen that triggers an immune response', 'A white blood cell', 'A type of vaccine'],
            answer: 1,
            explanation: 'Antigens are unique proteins on the surface of pathogens that are recognised as foreign by the immune system, triggering an immune response.'
          },
          {
            q: 'Excessive alcohol consumption is a risk factor for:',
            options: ['Asthma', 'Liver disease and brain damage', 'Broken bones', 'Malaria'],
            answer: 1,
            explanation: 'Excessive alcohol can cause liver disease (including cirrhosis), brain damage, and other health problems.'
          },
          {
            q: 'Which component of blood has no nucleus?',
            options: ['White blood cells only', 'Red blood cells and platelets', 'Plasma', 'All blood cells have a nucleus'],
            answer: 1,
            explanation: 'Red blood cells and platelets (which are cell fragments) both lack a nucleus. This gives red blood cells more space for haemoglobin.'
          },
          {
            q: 'What is the link between smoking and cardiovascular disease?',
            options: ['Smoking has no effect on the heart', 'Chemicals in smoke damage blood vessel walls and increase blood pressure', 'Smoking strengthens the heart', 'Smoking reduces cholesterol'],
            answer: 1,
            explanation: 'Chemicals in cigarette smoke damage the lining of blood vessels, promote fatty deposits, and increase blood pressure, raising the risk of heart attack and stroke.'
          },
          {
            q: 'Which substance is transported in plasma from the liver to the kidneys?',
            options: ['Oxygen', 'Urea', 'Haemoglobin', 'Starch'],
            answer: 1,
            explanation: 'Urea is a waste product of protein metabolism, produced in the liver and transported in the blood plasma to the kidneys for excretion in urine.'
          },
          {
            q: 'The immune system produces memory lymphocytes after an infection. Why is this important?',
            options: ['They produce more red blood cells', 'They allow a faster immune response if the same pathogen is encountered again', 'They increase blood pressure', 'They produce antitoxins against all pathogens'],
            answer: 1,
            explanation: 'Memory lymphocytes remain in the blood after infection and can produce antibodies rapidly if the same pathogen is encountered again, preventing illness.'
          },
          {
            q: 'Carcinogens are substances that:',
            options: ['Cure cancer', 'Increase the risk of cancer', 'Prevent cell division', 'Are found in vaccines'],
            answer: 1,
            explanation: 'Carcinogens are substances that can cause cancer by damaging DNA and causing mutations that lead to uncontrolled cell division.'
          },
          {
            q: 'A high-fat diet increases the risk of cardiovascular disease because:',
            options: ['It provides too many vitamins', 'It can lead to fatty deposits building up in arteries', 'It makes the heart beat too slowly', 'It reduces the number of red blood cells'],
            answer: 1,
            explanation: 'A diet high in saturated fat increases blood cholesterol, which can form fatty deposits (atheroma) in artery walls, narrowing them and increasing the risk of heart attacks.'
          }
        ]
      },
      {
        topic: 'Plant Organ Systems',
        questions: [
          {
            q: 'Which tissue transports water and mineral ions from the roots to the leaves?',
            options: ['Phloem', 'Xylem', 'Spongy mesophyll', 'Epidermis'],
            answer: 1,
            explanation: 'Xylem tissue transports water and dissolved mineral ions upwards from the roots to the rest of the plant in a process called transpiration.'
          },
          {
            q: 'Which tissue transports dissolved sugars around the plant?',
            options: ['Xylem', 'Phloem', 'Palisade mesophyll', 'Guard cells'],
            answer: 1,
            explanation: 'Phloem tissue transports dissolved sugars (sucrose) from the leaves (where they are made by photosynthesis) to the rest of the plant. This is called translocation.'
          },
          {
            q: 'What is transpiration?',
            options: ['The movement of sugars through phloem', 'The loss of water vapour from the leaves through stomata', 'The absorption of carbon dioxide', 'The breakdown of glucose by respiration'],
            answer: 1,
            explanation: 'Transpiration is the evaporation and loss of water vapour from the surface of leaves, mainly through the stomata.'
          },
          {
            q: 'Which cells control the opening and closing of stomata?',
            options: ['Palisade cells', 'Root hair cells', 'Guard cells', 'Xylem cells'],
            answer: 2,
            explanation: 'Guard cells surround each stoma and change shape to open or close it, controlling gas exchange and water loss.'
          },
          {
            q: 'Which factor would increase the rate of transpiration?',
            options: ['High humidity', 'Low temperature', 'High wind speed', 'Darkness'],
            answer: 2,
            explanation: 'High wind speed removes water vapour from around the leaf surface, maintaining a steep concentration gradient and increasing the rate of transpiration.'
          },
          {
            q: 'What is translocation?',
            options: ['Transport of water through xylem', 'Transport of dissolved sugars through phloem', 'Transport of oxygen in the blood', 'Absorption of minerals by roots'],
            answer: 1,
            explanation: 'Translocation is the movement of dissolved sugars (and other organic compounds) through phloem tissue from sources (leaves) to sinks (growing points, storage organs).'
          },
          {
            q: 'Which organ system in a plant is responsible for absorbing water?',
            options: ['Leaf system', 'Root system', 'Flower system', 'Stem system'],
            answer: 1,
            explanation: 'The root system absorbs water and mineral ions from the soil through root hair cells.'
          },
          {
            q: 'The upper epidermis of a leaf is transparent because:',
            options: ['It prevents water loss', 'It allows light to pass through to the palisade cells for photosynthesis', 'It absorbs carbon dioxide', 'It protects against disease'],
            answer: 1,
            explanation: 'The transparent upper epidermis allows maximum light to reach the palisade mesophyll cells below, where most photosynthesis occurs.'
          },
          {
            q: 'What is the function of the waxy cuticle on a leaf?',
            options: ['To absorb light', 'To reduce water loss from the leaf surface', 'To allow gas exchange', 'To transport water'],
            answer: 1,
            explanation: 'The waxy cuticle is a waterproof layer on the upper surface of the leaf that reduces water loss by evaporation.'
          },
          {
            q: 'Where are most stomata found on a leaf?',
            options: ['Upper epidermis', 'Palisade mesophyll', 'Lower epidermis', 'Spongy mesophyll'],
            answer: 2,
            explanation: 'Most stomata are on the lower epidermis, which reduces water loss since the lower surface is shaded from direct sunlight.'
          },
          {
            q: 'The spongy mesophyll layer has air spaces to:',
            options: ['Store water', 'Allow gases to diffuse through the leaf', 'Support the leaf structure', 'Absorb light'],
            answer: 1,
            explanation: 'Air spaces in the spongy mesophyll allow carbon dioxide to diffuse to photosynthesising cells and oxygen to diffuse out through stomata.'
          },
          {
            q: 'Xylem vessels are strengthened with:',
            options: ['Cellulose', 'Starch', 'Lignin', 'Chlorophyll'],
            answer: 2,
            explanation: 'Xylem vessels are reinforced with lignin, which provides structural support and prevents the vessels from collapsing under the tension of water transport.'
          },
          {
            q: 'Which statement correctly compares xylem and phloem?',
            options: ['Xylem cells are alive; phloem cells are dead', 'Xylem transports sugars; phloem transports water', 'Xylem cells are dead and hollow; phloem cells are alive', 'Both transport water upwards only'],
            answer: 2,
            explanation: 'Xylem cells are dead, hollow tubes reinforced with lignin. Phloem cells are alive (with companion cells) and transport dissolved sugars.'
          },
          {
            q: 'A potometer is used to measure:',
            options: ['The rate of photosynthesis', 'The rate of water uptake (as an estimate of transpiration)', 'The rate of growth', 'The amount of sugar in leaves'],
            answer: 1,
            explanation: 'A potometer measures the rate of water uptake by a plant shoot, which gives an estimate of the rate of transpiration.'
          },
          {
            q: 'On a hot, dry day, stomata are likely to:',
            options: ['Open wider to absorb more water', 'Close to reduce water loss', 'Stay the same', 'Increase in number'],
            answer: 1,
            explanation: 'On hot, dry days, stomata close to reduce excessive water loss by transpiration, though this also reduces CO2 uptake for photosynthesis.'
          },
          {
            q: 'Which tissue acts as a packing tissue in leaves and provides support?',
            options: ['Xylem', 'Phloem', 'Mesophyll', 'Epidermal tissue'],
            answer: 2,
            explanation: 'Mesophyll tissue (palisade and spongy) fills the interior of the leaf, providing support and containing chloroplasts for photosynthesis.'
          },
          {
            q: 'Root hair cells absorb mineral ions by:',
            options: ['Osmosis', 'Diffusion', 'Active transport', 'Transpiration'],
            answer: 2,
            explanation: 'Mineral ions are present in low concentrations in soil water, so root hair cells use active transport (requiring energy from respiration) to absorb them against the concentration gradient.'
          },
          {
            q: 'What drives the movement of water up through xylem?',
            options: ['Active transport by xylem cells', 'Transpiration pull from evaporation at the leaves', 'Pumping by the roots', 'Gravity'],
            answer: 1,
            explanation: 'Water evaporates from leaves (transpiration), creating a pull that draws water up through the xylem from the roots in a continuous column.'
          },
          {
            q: 'Which structure in plants is equivalent to an organ?',
            options: ['A single cell', 'A leaf', 'Xylem tissue', 'Chloroplast'],
            answer: 1,
            explanation: 'A leaf is a plant organ made up of several tissues (epidermis, mesophyll, xylem, phloem) working together to carry out photosynthesis.'
          },
          {
            q: 'Phloem transport requires energy because:',
            options: ['It only occurs in dead cells', 'Translocation is an active process', 'Sugars are transported against gravity only', 'Phloem contains lignin'],
            answer: 1,
            explanation: 'Translocation in phloem is an active process requiring energy from companion cells, as dissolved sugars need to be loaded into and moved through the sieve tubes.'
          }
        ]
      }
    ]
  },

  // ===== SECTION 3: INFECTION & RESPONSE =====
  {
    section: 'Infection & Response',
    icon: '🦠',
    color: '#7C3AED',
    topics: [
      {
        topic: 'Pathogens & Disease',
        questions: [
          {
            q: 'What is a pathogen?',
            options: ['A type of white blood cell', 'A microorganism that causes disease', 'An antibody', 'A type of medicine'],
            answer: 1,
            explanation: 'Pathogens are microorganisms (bacteria, viruses, fungi, or protists) that enter the body and cause infectious disease.'
          },
          {
            q: 'Which type of pathogen causes measles?',
            options: ['Bacterium', 'Virus', 'Fungus', 'Protist'],
            answer: 1,
            explanation: 'Measles is caused by a virus that spreads through droplet infection (coughing and sneezing).'
          },
          {
            q: 'How does Salmonella bacteria cause food poisoning?',
            options: ['By destroying red blood cells', 'By producing toxins that cause fever, vomiting, and diarrhoea', 'By blocking blood vessels', 'By attacking the lungs'],
            answer: 1,
            explanation: 'Salmonella bacteria produce toxins in contaminated food that cause symptoms including fever, abdominal cramps, vomiting, and diarrhoea.'
          },
          {
            q: 'Which disease is caused by a protist and spread by mosquitoes?',
            options: ['Cholera', 'Tuberculosis', 'Malaria', 'Measles'],
            answer: 2,
            explanation: 'Malaria is caused by a Plasmodium protist, which is spread to humans through the bite of infected female Anopheles mosquitoes (vectors).'
          },
          {
            q: 'How do viruses reproduce?',
            options: ['By binary fission', 'By invading cells and using the cell\'s machinery to replicate', 'By budding', 'By meiosis'],
            answer: 1,
            explanation: 'Viruses invade host cells, take over the cell\'s machinery to make copies of themselves, then burst out (lyse) of the cell, destroying it.'
          },
          {
            q: 'Which disease is caused by the HIV virus?',
            options: ['Measles', 'AIDS', 'Cholera', 'Gonorrhoea'],
            answer: 1,
            explanation: 'HIV (Human Immunodeficiency Virus) attacks the immune system and can lead to AIDS (Acquired Immune Deficiency Syndrome) if untreated.'
          },
          {
            q: 'How is gonorrhoea spread?',
            options: ['Through contaminated water', 'Through sexual contact', 'Through insect bites', 'Through the air'],
            answer: 1,
            explanation: 'Gonorrhoea is a sexually transmitted infection (STI) caused by a bacterium, spread through unprotected sexual contact.'
          },
          {
            q: 'Which plant disease is caused by a fungus?',
            options: ['Tobacco mosaic virus', 'Rose black spot', 'Crown gall disease', 'Ash dieback only'],
            answer: 1,
            explanation: 'Rose black spot is a fungal disease that causes purple or black spots on leaves, reducing photosynthesis. It spreads through water and wind.'
          },
          {
            q: 'Tobacco mosaic virus (TMV) affects plants by:',
            options: ['Causing root rot', 'Creating a mosaic pattern of discolouration on leaves, reducing photosynthesis', 'Killing the entire plant immediately', 'Making the plant grow too fast'],
            answer: 1,
            explanation: 'TMV causes a distinctive mosaic pattern of discolouration on leaves, reducing the area available for photosynthesis and affecting plant growth.'
          },
          {
            q: 'How can the spread of diseases be reduced? (Most complete answer)',
            options: ['Hygiene, vaccination, quarantine, and destroying vectors', 'Only by using antibiotics', 'Only by washing hands', 'Only through vaccination'],
            answer: 0,
            explanation: 'Disease spread can be reduced through good hygiene, vaccination, isolation/quarantine of infected individuals, and controlling vectors (e.g., mosquito nets for malaria).'
          },
          {
            q: 'Which of these is NOT a way pathogens can be spread?',
            options: ['Droplet infection (coughing/sneezing)', 'Direct contact', 'Through vectors (e.g., mosquitoes)', 'By mitosis'],
            answer: 3,
            explanation: 'Mitosis is cell division, not a method of disease transmission. Pathogens spread through air, water, direct contact, and vectors.'
          },
          {
            q: 'Bacteria make you ill by:',
            options: ['Invading your cells and replicating', 'Producing toxins that damage cells and tissues', 'Eating your red blood cells', 'Blocking your airways only'],
            answer: 1,
            explanation: 'Bacteria reproduce rapidly in the body and produce toxins (poisons) that damage cells and tissues, causing the symptoms of disease.'
          },
          {
            q: 'How does the body prevent pathogens from entering? (First line of defence)',
            options: ['Antibodies only', 'Skin, mucus, stomach acid, and tears', 'White blood cells only', 'Vaccination'],
            answer: 1,
            explanation: 'Non-specific defences include skin (barrier), mucus (traps pathogens), stomach acid (kills pathogens), and tears/nasal secretions (contain enzymes like lysozyme).'
          },
          {
            q: 'Cholera is spread through:',
            options: ['Insect bites', 'Contaminated water', 'Airborne droplets', 'Sexual contact'],
            answer: 1,
            explanation: 'Cholera is a bacterial disease spread through drinking water contaminated with the faeces of infected individuals.'
          },
          {
            q: 'Which disease can be prevented by poultry vaccination in the UK?',
            options: ['Measles', 'Salmonella', 'Malaria', 'HIV'],
            answer: 1,
            explanation: 'In the UK, poultry are vaccinated against Salmonella to reduce the risk of food poisoning from contaminated eggs and chicken.'
          },
          {
            q: 'How can the spread of malaria be reduced?',
            options: ['By using antibiotics', 'By using mosquito nets and insecticides to prevent mosquito bites', 'By boiling drinking water', 'By vaccination only'],
            answer: 1,
            explanation: 'Malaria can be reduced by preventing mosquito bites using insecticide-treated nets, insect repellent, and draining standing water where mosquitoes breed.'
          },
          {
            q: 'Gonorrhoea was traditionally treated with:',
            options: ['Antiviral drugs', 'Antibiotic penicillin', 'Antifungal cream', 'Painkillers'],
            answer: 1,
            explanation: 'Gonorrhoea is a bacterial infection traditionally treated with the antibiotic penicillin, though antibiotic-resistant strains have become increasingly common.'
          },
          {
            q: 'How does HIV initially affect the body?',
            options: ['It causes immediate death', 'It attacks and destroys immune system cells (T-helper lymphocytes)', 'It damages the lungs', 'It causes skin rashes only'],
            answer: 1,
            explanation: 'HIV attacks T-helper lymphocytes (a type of white blood cell), weakening the immune system over time until it can no longer fight off other infections (AIDS).'
          },
          {
            q: 'Which of the following correctly matches a pathogen type to an example disease?',
            options: ['Virus — Salmonella', 'Bacterium — Measles', 'Protist — Malaria', 'Fungus — HIV'],
            answer: 2,
            explanation: 'Malaria is caused by a Plasmodium protist. Salmonella is bacterial, measles is viral, and HIV is a virus.'
          },
          {
            q: 'How does the spread of gonorrhoea be prevented?',
            options: ['By drinking clean water', 'By using barrier methods of contraception such as condoms', 'By using mosquito nets', 'By cooking food properly'],
            answer: 1,
            explanation: 'Gonorrhoea is an STI, so its spread can be prevented by using barrier methods of contraception, such as condoms, during sexual contact.'
          }
        ]
      },
      {
        topic: 'The Immune System & Vaccination',
        questions: [
          {
            q: 'What does a vaccine contain?',
            options: ['Live, dangerous pathogens', 'Dead or weakened forms of a pathogen', 'Antibiotics', 'White blood cells'],
            answer: 1,
            explanation: 'Vaccines contain dead or inactivated (weakened) forms of a pathogen that stimulate an immune response without causing disease.'
          },
          {
            q: 'How do vaccines provide immunity?',
            options: ['By killing pathogens directly', 'By stimulating white blood cells to produce antibodies and memory cells', 'By increasing body temperature', 'By thickening the skin barrier'],
            answer: 1,
            explanation: 'Vaccines stimulate lymphocytes to produce specific antibodies. Memory cells are formed, enabling a rapid response if the real pathogen is encountered.'
          },
          {
            q: 'What is herd immunity?',
            options: ['When animals become immune to human diseases', 'When a large proportion of a population is vaccinated, reducing disease spread', 'When one person is immune to all diseases', 'When antibiotics are given to everyone'],
            answer: 1,
            explanation: 'Herd immunity occurs when enough people are vaccinated that the pathogen cannot spread easily, protecting unvaccinated individuals too.'
          },
          {
            q: 'Why do antibiotics NOT work against viruses?',
            options: ['Viruses are too small', 'Viruses live inside host cells and antibiotics cannot target them without damaging host cells', 'Viruses are not alive', 'Antibiotics are too weak'],
            answer: 1,
            explanation: 'Viruses reproduce inside host cells, so antibiotics cannot target them without destroying the body\'s own cells. Antivirals are used instead.'
          },
          {
            q: 'What are memory lymphocytes?',
            options: ['White blood cells that die after fighting infection', 'Lymphocytes that remain in the blood and can respond quickly to a second infection by the same pathogen', 'Red blood cells with antibodies', 'Platelets that remember pathogens'],
            answer: 1,
            explanation: 'Memory lymphocytes persist in the body after infection or vaccination and can rapidly produce large quantities of the correct antibody if re-exposed to the same pathogen.'
          },
          {
            q: 'Why is the secondary immune response faster than the primary response?',
            options: ['The pathogen is weaker', 'Memory cells recognise the antigen and rapidly produce specific antibodies', 'The body has more blood', 'Antibiotics help the second time'],
            answer: 1,
            explanation: 'Memory lymphocytes from the first exposure recognise the pathogen\'s antigens immediately and produce antibodies much faster and in greater quantities.'
          },
          {
            q: 'What is phagocytosis?',
            options: ['The production of antibodies', 'The engulfing and digestion of pathogens by phagocytes', 'The clotting of blood', 'The release of histamine'],
            answer: 1,
            explanation: 'Phagocytosis is the process by which phagocytes (a type of white blood cell) surround, engulf, and digest pathogens.'
          },
          {
            q: 'Antitoxins are produced by white blood cells to:',
            options: ['Kill pathogens directly', 'Neutralise toxins produced by pathogens', 'Increase body temperature', 'Produce more platelets'],
            answer: 1,
            explanation: 'Antitoxins are proteins produced by lymphocytes that bind to and neutralise the toxins released by bacteria, reducing the harmful effects.'
          },
          {
            q: 'Which statement about vaccination is correct?',
            options: ['Vaccines cure diseases after infection', 'Vaccines prevent diseases by preparing the immune system before infection', 'Vaccines contain full-strength pathogens', 'Vaccines replace the immune system'],
            answer: 1,
            explanation: 'Vaccines are preventative — they prepare the immune system to respond quickly to future infections by creating memory cells before exposure to the real pathogen.'
          },
          {
            q: 'A person is vaccinated against measles. Two years later, they are exposed to the measles virus. What happens?',
            options: ['They get measles because the vaccine has worn off', 'Memory cells produce antibodies rapidly, preventing the disease', 'They need a new vaccination immediately', 'Their skin blocks the virus'],
            answer: 1,
            explanation: 'Memory lymphocytes from the vaccination recognise the measles virus antigens and quickly produce large quantities of specific antibodies, preventing infection.'
          },
          {
            q: 'Antibodies are described as "specific" because:',
            options: ['They work against all pathogens', 'Each type of antibody only targets one specific antigen', 'They are produced by all body cells', 'They last forever in the blood'],
            answer: 1,
            explanation: 'Each antibody has a unique shape that complementarily fits only one specific antigen, like a lock and key. Different pathogens require different antibodies.'
          },
          {
            q: 'What risk is associated with not vaccinating children?',
            options: ['Increased herd immunity', 'Outbreaks of preventable diseases due to reduced herd immunity', 'Children grow faster', 'No risk at all'],
            answer: 1,
            explanation: 'If vaccination rates drop, herd immunity decreases, allowing previously controlled diseases to spread and cause outbreaks.'
          },
          {
            q: 'Which type of immunity is gained from vaccination?',
            options: ['Natural active immunity', 'Artificial active immunity', 'Passive immunity', 'Innate immunity'],
            answer: 1,
            explanation: 'Vaccination provides artificial active immunity because the immune system actively produces its own antibodies in response to the weakened pathogen in the vaccine.'
          },
          {
            q: 'Why might some people object to vaccination programmes?',
            options: ['Vaccines always cause the disease', 'Concerns about side effects or ethical/religious reasons', 'Vaccines are free', 'Vaccines contain antibiotics'],
            answer: 1,
            explanation: 'Some people have concerns about potential side effects, or have ethical, philosophical, or religious objections to vaccination, though serious side effects are very rare.'
          },
          {
            q: 'The MMR vaccine protects against:',
            options: ['Malaria, mumps, and rubella', 'Measles, mumps, and rubella', 'Measles, malaria, and rickets', 'Meningitis, mumps, and rubella'],
            answer: 1,
            explanation: 'The MMR vaccine protects against measles, mumps, and rubella — three viral diseases.'
          },
          {
            q: 'A new strain of influenza appears each year. Why is a new flu vaccine needed annually?',
            options: ['The old vaccine expires', 'The virus mutates, changing its surface antigens so old antibodies no longer recognise it', 'People forget to take the vaccine', 'The virus becomes resistant to vaccines'],
            answer: 1,
            explanation: 'Influenza viruses mutate frequently, changing their surface antigens. Memory cells from previous vaccines or infections cannot recognise the new antigens.'
          },
          {
            q: 'Which line of defence are antibodies part of?',
            options: ['First line (physical barriers)', 'Second line (non-specific immune response)', 'Third line (specific immune response)', 'They are not part of the immune system'],
            answer: 2,
            explanation: 'Antibodies are part of the specific (adaptive) immune response, produced by lymphocytes in response to particular antigens.'
          },
          {
            q: 'Alexander Fleming discovered:',
            options: ['Vaccination', 'Penicillin', 'DNA structure', 'Blood groups'],
            answer: 1,
            explanation: 'Alexander Fleming discovered the antibiotic penicillin in 1928 when he noticed that a mould (Penicillium) killed bacteria on an agar plate.'
          },
          {
            q: 'If a disease has been eradicated by vaccination (like smallpox), why might vaccination still continue?',
            options: ['Because the vaccine is cheap', 'To maintain herd immunity in case the pathogen re-emerges', 'Because doctors enjoy giving vaccines', 'It does not continue — it stops immediately'],
            answer: 1,
            explanation: 'Vaccination may continue to maintain herd immunity and prevent re-emergence if the pathogen still exists in laboratories or could mutate from related organisms.'
          },
          {
            q: 'Painkillers are different from antibiotics because painkillers:',
            options: ['Kill bacteria', 'Treat the symptoms but do not kill pathogens', 'Prevent viral infections', 'Stimulate the immune system'],
            answer: 1,
            explanation: 'Painkillers (such as paracetamol) relieve symptoms like pain and fever but do not kill the pathogens causing the disease. Antibiotics kill bacteria.'
          }
        ]
      },
      {
        topic: 'Drug Development & Antibiotics',
        questions: [
          {
            q: 'What is an antibiotic?',
            options: ['A chemical that kills viruses', 'A medicine that kills or prevents the growth of bacteria', 'A type of vaccine', 'A painkiller'],
            answer: 1,
            explanation: 'Antibiotics are medicines that kill bacteria or prevent their reproduction. They are not effective against viruses.'
          },
          {
            q: 'Why is antibiotic resistance a growing concern?',
            options: ['Antibiotics are becoming more expensive', 'Overuse of antibiotics has led to resistant bacteria that cannot be treated', 'People are allergic to all antibiotics', 'Antibiotics cause cancer'],
            answer: 1,
            explanation: 'Overuse and misuse of antibiotics has selected for resistant strains of bacteria (e.g., MRSA), making some infections very difficult or impossible to treat.'
          },
          {
            q: 'How does antibiotic resistance develop in bacteria?',
            options: ['Bacteria learn to fight antibiotics', 'Random mutations give some bacteria resistance; antibiotics kill non-resistant bacteria, so resistant ones survive and reproduce', 'Antibiotics make bacteria stronger', 'Bacteria absorb antibiotics and become immune'],
            answer: 1,
            explanation: 'Natural selection: random mutations produce resistant bacteria. When antibiotics are used, non-resistant bacteria die, while resistant ones survive and pass on the resistance gene.'
          },
          {
            q: 'Which of the following is a way to reduce the development of antibiotic resistance?',
            options: ['Prescribing antibiotics for viral infections', 'Completing the full course of antibiotics as prescribed', 'Using antibiotics in animal feed routinely', 'Sharing antibiotics with friends'],
            answer: 1,
            explanation: 'Completing the full course ensures all bacteria are killed, reducing the chance of resistant survivors reproducing.'
          },
          {
            q: 'What is the first stage of drug testing?',
            options: ['Clinical trials on humans', 'Testing on animals or cells in the laboratory (preclinical testing)', 'Marketing the drug', 'Selling the drug over the counter'],
            answer: 1,
            explanation: 'New drugs are first tested in preclinical trials using cells, tissues, and animals to check for toxicity, efficacy, and dosage before human trials.'
          },
          {
            q: 'What is a placebo?',
            options: ['A very strong drug', 'A substance with no therapeutic effect, used as a control in clinical trials', 'A type of antibiotic', 'A vaccine'],
            answer: 1,
            explanation: 'A placebo is a dummy treatment (e.g., sugar pill) that looks identical to the real drug. It is used in clinical trials to test whether the drug has a genuine effect.'
          },
          {
            q: 'Why are double-blind trials used?',
            options: ['To save money', 'To prevent bias — neither the patient nor the doctor knows who receives the drug or placebo', 'To test drugs on animals', 'To speed up drug development'],
            answer: 1,
            explanation: 'In double-blind trials, neither the patient nor the doctor knows who is receiving the drug or placebo, eliminating bias in reporting and interpreting results.'
          },
          {
            q: 'What is a clinical trial?',
            options: ['Testing drugs on cells in a lab', 'Testing drugs on healthy volunteers and patients to check safety and effectiveness', 'Testing drugs on animals only', 'Marketing research'],
            answer: 1,
            explanation: 'Clinical trials test new drugs on human volunteers. Phase 1 tests safety on healthy volunteers; later phases test effectiveness on patients.'
          },
          {
            q: 'The drug digitalis was originally extracted from:',
            options: ['Willow bark', 'Foxgloves', 'Penicillium mould', 'Poppy plants'],
            answer: 1,
            explanation: 'Digitalis, used to treat heart conditions, was originally extracted from foxglove plants.'
          },
          {
            q: 'Aspirin was originally derived from:',
            options: ['Foxgloves', 'Poppy plants', 'Willow bark', 'Penicillium mould'],
            answer: 2,
            explanation: 'Aspirin (a painkiller and anti-inflammatory) was originally developed from a chemical found in willow bark.'
          },
          {
            q: 'What are the three main things that preclinical testing checks?',
            options: ['Colour, taste, and smell', 'Toxicity, efficacy, and dose', 'Speed, strength, and flexibility', 'Cost, availability, and packaging'],
            answer: 1,
            explanation: 'Preclinical testing determines whether the drug is toxic (harmful), effective (works against the disease), and the correct dose to use.'
          },
          {
            q: 'MRSA stands for:',
            options: ['Most Resistant Staphylococcus Aureus', 'Methicillin-Resistant Staphylococcus Aureus', 'Multiple Resistant Skin Allergy', 'Medical Research on Staphylococcus Aureus'],
            answer: 1,
            explanation: 'MRSA (Methicillin-Resistant Staphylococcus Aureus) is a strain of bacteria resistant to many antibiotics, making it very difficult to treat.'
          },
          {
            q: 'Why should antibiotics NOT be prescribed for colds and flu?',
            options: ['They are too expensive', 'Colds and flu are caused by viruses, and antibiotics do not work against viruses', 'Antibiotics cure colds too quickly', 'Colds and flu are not infectious'],
            answer: 1,
            explanation: 'Colds and flu are viral infections. Antibiotics only work against bacteria and using them unnecessarily contributes to antibiotic resistance.'
          },
          {
            q: 'What is the purpose of peer review in drug development?',
            options: ['To advertise the drug', 'To have other scientists independently check and validate the results', 'To make the drug cheaper', 'To test the drug on more animals'],
            answer: 1,
            explanation: 'Peer review involves other scientists checking the methodology, results, and conclusions of research to ensure validity and reliability before publication.'
          },
          {
            q: 'In clinical trials, drugs are first tested on:',
            options: ['Sick patients at high doses', 'Healthy volunteers at low doses', 'Children only', 'Elderly patients only'],
            answer: 1,
            explanation: 'Phase 1 clinical trials test the drug on a small number of healthy volunteers at low doses to check for side effects and safety.'
          },
          {
            q: 'Which of the following is a traditional medicine derived from plants?',
            options: ['Paracetamol', 'Penicillin', 'Aspirin from willow bark', 'Insulin'],
            answer: 2,
            explanation: 'Aspirin was originally derived from salicin found in willow bark, a traditional remedy used for centuries before the drug was synthesised.'
          },
          {
            q: 'Monoclonal antibodies are produced from:',
            options: ['Red blood cells', 'A single clone of white blood cells', 'Bacteria', 'Viruses'],
            answer: 1,
            explanation: 'Monoclonal antibodies are identical antibodies produced from a single clone of cells (hybridoma cells), designed to target specific antigens.'
          },
          {
            q: 'What can monoclonal antibodies be used for?',
            options: ['Only treating cancer', 'Diagnosis (e.g., pregnancy tests), research, and treating diseases including cancer', 'Only pregnancy tests', 'Only research purposes'],
            answer: 1,
            explanation: 'Monoclonal antibodies have many uses including pregnancy testing, diagnosing diseases, locating and treating cancer cells, and in research.'
          },
          {
            q: 'Why is the development of new antibiotics important?',
            options: ['To treat viral infections', 'Because resistant bacteria are evolving and existing antibiotics are becoming ineffective', 'To replace vaccines', 'To cure genetic diseases'],
            answer: 1,
            explanation: 'As bacteria evolve resistance to existing antibiotics, new antibiotics are needed to treat bacterial infections that would otherwise be untreatable.'
          },
          {
            q: 'What is the correct order of drug development?',
            options: ['Clinical trials, preclinical testing, peer review', 'Preclinical testing, clinical trials, peer review and approval', 'Peer review, clinical trials, preclinical testing', 'Marketing, clinical trials, preclinical testing'],
            answer: 1,
            explanation: 'Drugs are first tested in preclinical trials (lab/animals), then clinical trials (humans), and finally undergo peer review before regulatory approval.'
          }
        ]
      }
    ]
  },

  // ===== SECTION 4: BIOENERGETICS =====
  {
    section: 'Bioenergetics',
    icon: '🌿',
    color: '#16A34A',
    topics: [
      {
        topic: 'Photosynthesis',
        questions: [
          {
            q: 'What is the word equation for photosynthesis?',
            options: [
              'Glucose + oxygen → carbon dioxide + water',
              'Carbon dioxide + water → glucose + oxygen',
              'Glucose → carbon dioxide + water + energy',
              'Oxygen + glucose → carbon dioxide + water'
            ],
            answer: 1,
            explanation: 'Photosynthesis uses carbon dioxide and water, with light energy, to produce glucose and oxygen.'
          },
          {
            q: 'Where does photosynthesis take place in a plant cell?',
            options: ['Mitochondria', 'Nucleus', 'Chloroplasts', 'Vacuole'],
            answer: 2,
            explanation: 'Photosynthesis occurs in chloroplasts, which contain the green pigment chlorophyll that absorbs light energy.'
          },
          {
            q: 'What is the role of chlorophyll in photosynthesis?',
            options: ['To release oxygen', 'To absorb light energy', 'To transport water', 'To store glucose'],
            answer: 1,
            explanation: 'Chlorophyll is a green pigment in chloroplasts that absorbs light energy (mainly red and blue wavelengths) needed to power photosynthesis.'
          },
          {
            q: 'Which of the following is NOT a limiting factor of photosynthesis?',
            options: ['Light intensity', 'Carbon dioxide concentration', 'Oxygen concentration', 'Temperature'],
            answer: 2,
            explanation: 'The three main limiting factors of photosynthesis are light intensity, carbon dioxide concentration, and temperature. Oxygen concentration does not limit photosynthesis.'
          },
          {
            q: 'A graph shows that increasing light intensity increases the rate of photosynthesis until a plateau. What is the limiting factor at the plateau?',
            options: ['Light intensity', 'Temperature or CO2 concentration', 'Oxygen', 'Water'],
            answer: 1,
            explanation: 'When the graph plateaus, light is no longer the limiting factor. Another factor (temperature or CO2 concentration) is now limiting the rate.'
          },
          {
            q: 'How do greenhouse owners use knowledge of limiting factors?',
            options: ['By reducing light levels', 'By controlling temperature, light, and CO2 levels to maximise plant growth', 'By removing water from plants', 'By reducing the number of plants'],
            answer: 1,
            explanation: 'Greenhouse owners optimise conditions by providing artificial lighting, heating, and supplementary CO2 to maximise the rate of photosynthesis and crop yield.'
          },
          {
            q: 'What is the inverse square law in relation to light intensity?',
            options: ['Light intensity doubles when distance doubles', 'Light intensity is inversely proportional to the square of the distance from the light source', 'Light intensity is directly proportional to distance', 'Light has no relationship with distance'],
            answer: 1,
            explanation: 'Light intensity is inversely proportional to the square of the distance (I = 1/d²). Doubling the distance reduces light intensity to one quarter.'
          },
          {
            q: 'A lamp is placed 10 cm from a plant. It is then moved to 20 cm. How does the light intensity change?',
            options: ['It halves', 'It quarters (becomes 1/4)', 'It doubles', 'It stays the same'],
            answer: 1,
            explanation: 'Using the inverse square law: light intensity is proportional to 1/d². When distance doubles (10 to 20), intensity = 1/4 of the original.'
          },
          {
            q: 'What happens to glucose produced by photosynthesis? (Most complete answer)',
            options: ['It is always stored as starch', 'It is used for respiration, converted to starch, cellulose, amino acids, or lipids', 'It is always excreted', 'It is only used for respiration'],
            answer: 1,
            explanation: 'Plants use glucose for respiration (energy), convert it to starch (storage), cellulose (cell walls), amino acids/proteins (with nitrate ions), or lipids (oils for energy storage).'
          },
          {
            q: 'Why is photosynthesis described as an endothermic reaction?',
            options: ['It releases heat', 'It absorbs (takes in) energy from light', 'It produces carbon dioxide', 'It happens at night'],
            answer: 1,
            explanation: 'Photosynthesis is endothermic because it absorbs energy (light energy from the Sun) to convert CO2 and water into glucose.'
          },
          {
            q: 'An experiment uses sodium hydrogen carbonate to provide CO2 to pondweed. Counting bubbles of gas measures the rate of:',
            options: ['Respiration', 'Transpiration', 'Photosynthesis', 'Osmosis'],
            answer: 2,
            explanation: 'The bubbles are oxygen gas produced by photosynthesis. Counting bubbles per minute gives an estimate of the rate of photosynthesis.'
          },
          {
            q: 'At what temperature do enzymes involved in photosynthesis typically work best?',
            options: ['0°C', '25-30°C', '60°C', '100°C'],
            answer: 1,
            explanation: 'Enzymes in photosynthesis have an optimum temperature around 25-30°C. Above this, they begin to denature and the rate decreases.'
          },
          {
            q: 'Why do plants convert glucose to starch for storage?',
            options: ['Starch is sweet', 'Starch is insoluble so it does not affect osmosis in cells', 'Starch dissolves easily', 'Starch is a protein'],
            answer: 1,
            explanation: 'Starch is insoluble, so it does not affect the water potential of cells (no osmotic effect) and can be stored compactly without affecting cell processes.'
          },
          {
            q: 'To test a leaf for starch, the correct procedure order is:',
            options: ['Iodine test, boil in water, boil in ethanol', 'Boil in water (kill cells), boil in ethanol (remove chlorophyll), add iodine', 'Add iodine, boil in ethanol, boil in water', 'Boil in ethanol only, then add iodine'],
            answer: 1,
            explanation: 'First boil the leaf in water (to kill cells and break down membranes), then in ethanol (to remove green chlorophyll), then add iodine (which turns blue-black if starch is present).'
          },
          {
            q: 'If a plant is kept in the dark for 48 hours before testing for starch, this is to:',
            options: ['Kill the plant', 'Destarch the leaves so any starch found later must be from the experiment', 'Make the leaves greener', 'Increase the rate of photosynthesis'],
            answer: 1,
            explanation: 'Destarching removes existing starch from leaves. This ensures that any starch detected after the experiment was produced during the experiment, not before.'
          },
          {
            q: 'Which mineral ion do plants need to make amino acids?',
            options: ['Magnesium', 'Nitrate', 'Calcium', 'Potassium'],
            answer: 1,
            explanation: 'Plants need nitrate ions from the soil to combine with glucose to make amino acids, which are then used to build proteins.'
          },
          {
            q: 'Magnesium ions are needed by plants to:',
            options: ['Make starch', 'Make chlorophyll for photosynthesis', 'Build cell walls', 'Transport water'],
            answer: 1,
            explanation: 'Magnesium ions are required to make chlorophyll, the green pigment essential for absorbing light energy in photosynthesis.'
          },
          {
            q: 'What colour would iodine turn when added to a destarched leaf that has been in the dark?',
            options: ['Blue-black', 'Brown/yellow (no change)', 'Green', 'Red'],
            answer: 1,
            explanation: 'Without light, no photosynthesis occurs and no starch is produced. Iodine remains brown/yellow, indicating the absence of starch.'
          },
          {
            q: 'How does temperature above the optimum affect the rate of photosynthesis?',
            options: ['Rate continues to increase', 'Rate decreases because enzymes become denatured', 'Rate stays constant', 'The plant dies immediately'],
            answer: 1,
            explanation: 'Above the optimum temperature, enzymes controlling photosynthesis begin to denature (lose their shape), reducing and eventually stopping the reaction.'
          },
          {
            q: 'A farmer adds CO2 to a greenhouse. Which of the following best explains why this increases crop yield?',
            options: ['CO2 keeps the greenhouse warm', 'CO2 increases the rate of photosynthesis by removing a limiting factor', 'CO2 kills pests', 'CO2 improves soil quality'],
            answer: 1,
            explanation: 'If CO2 is a limiting factor, increasing its concentration raises the rate of photosynthesis, producing more glucose for growth and increasing crop yield.'
          }
        ]
      },
      {
        topic: 'Respiration',
        questions: [
          {
            q: 'What is the word equation for aerobic respiration?',
            options: [
              'Carbon dioxide + water → glucose + oxygen',
              'Glucose + oxygen → carbon dioxide + water (+ energy)',
              'Glucose → lactic acid (+ energy)',
              'Glucose → ethanol + carbon dioxide'
            ],
            answer: 1,
            explanation: 'Aerobic respiration uses glucose and oxygen to produce carbon dioxide and water, releasing energy (transferred to ATP).'
          },
          {
            q: 'Where does aerobic respiration take place?',
            options: ['Chloroplasts', 'Nucleus', 'Mitochondria', 'Ribosomes'],
            answer: 2,
            explanation: 'Aerobic respiration occurs in the mitochondria of cells, where glucose is broken down using oxygen to release energy.'
          },
          {
            q: 'What is anaerobic respiration in animals?',
            options: ['Respiration using oxygen', 'Respiration without oxygen, producing lactic acid', 'Photosynthesis', 'Respiration in plants only'],
            answer: 1,
            explanation: 'Anaerobic respiration in animals occurs without oxygen: glucose → lactic acid (+ small amount of energy). It occurs during intense exercise.'
          },
          {
            q: 'What is anaerobic respiration in yeast called?',
            options: ['Decomposition', 'Fermentation', 'Combustion', 'Photosynthesis'],
            answer: 1,
            explanation: 'Fermentation is anaerobic respiration in yeast: glucose → ethanol + carbon dioxide (+ energy). It is used in bread-making and brewing.'
          },
          {
            q: 'Why does anaerobic respiration release less energy than aerobic respiration?',
            options: ['It uses more oxygen', 'Glucose is not fully broken down, so less energy is transferred', 'It occurs in the mitochondria', 'It produces more carbon dioxide'],
            answer: 1,
            explanation: 'In anaerobic respiration, glucose is only partially broken down (to lactic acid or ethanol), so much less energy is released compared to aerobic respiration.'
          },
          {
            q: 'What is "oxygen debt"?',
            options: ['When you breathe in too much oxygen', 'The extra oxygen needed after exercise to break down lactic acid', 'When oxygen levels in the air decrease', 'When plants run out of CO2'],
            answer: 1,
            explanation: 'Oxygen debt is the amount of extra oxygen needed after exercise to oxidise the lactic acid that accumulated during anaerobic respiration back to carbon dioxide and water.'
          },
          {
            q: 'During vigorous exercise, which changes occur in the body?',
            options: ['Heart rate decreases and breathing slows', 'Heart rate and breathing rate increase to deliver more oxygen and glucose', 'The body stops respiring', 'Only anaerobic respiration occurs'],
            answer: 1,
            explanation: 'Heart rate and breathing rate increase during exercise to supply more oxygen and glucose to muscles for increased aerobic respiration.'
          },
          {
            q: 'Which type of respiration is more efficient at releasing energy?',
            options: ['Anaerobic respiration', 'Aerobic respiration', 'Both release the same amount', 'Fermentation'],
            answer: 1,
            explanation: 'Aerobic respiration is much more efficient, fully breaking down glucose to release approximately 18 times more energy per molecule than anaerobic respiration.'
          },
          {
            q: 'What is the product of anaerobic respiration in yeast?',
            options: ['Lactic acid', 'Ethanol and carbon dioxide', 'Oxygen and water', 'Amino acids'],
            answer: 1,
            explanation: 'In yeast (and plants), anaerobic respiration produces ethanol (alcohol) and carbon dioxide. This is different from animals, which produce lactic acid.'
          },
          {
            q: 'Why is respiration described as an exothermic reaction?',
            options: ['It absorbs energy', 'It releases (transfers) energy to the environment', 'It requires light', 'It only occurs in plants'],
            answer: 1,
            explanation: 'Respiration is exothermic because it releases energy by breaking down glucose molecules. This energy is used for life processes and some is transferred as heat.'
          },
          {
            q: 'What is the energy released by respiration used for?',
            options: ['Photosynthesis only', 'Muscle contraction, maintaining body temperature, building molecules, active transport, nerve impulses', 'Digestion only', 'Sleeping only'],
            answer: 1,
            explanation: 'Energy from respiration is used for muscle contraction, maintaining body temperature, chemical reactions (building proteins, etc.), active transport, and nerve impulses.'
          },
          {
            q: 'A student measures the rate of respiration in yeast. Which gas should they measure being produced?',
            options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
            answer: 2,
            explanation: 'Both aerobic and anaerobic respiration in yeast produce carbon dioxide. The rate of CO2 production can be measured to determine the rate of respiration.'
          },
          {
            q: 'After intense exercise, a person continues to breathe heavily. This is to:',
            options: ['Cool down the body', 'Repay the oxygen debt by breaking down lactic acid', 'Absorb more glucose', 'Increase muscle size'],
            answer: 1,
            explanation: 'Heavy breathing after exercise provides extra oxygen to the liver, where lactic acid is broken down (oxidised) back into carbon dioxide and water.'
          },
          {
            q: 'Which organism carries out anaerobic respiration to produce ethanol?',
            options: ['Humans', 'Dogs', 'Yeast', 'Fish'],
            answer: 2,
            explanation: 'Yeast carries out fermentation (anaerobic respiration), producing ethanol and CO2. This is used commercially in bread-making and brewing.'
          },
          {
            q: 'Where is lactic acid transported to be broken down?',
            options: ['The lungs', 'The liver', 'The kidneys', 'The muscles'],
            answer: 1,
            explanation: 'Lactic acid is transported by the blood to the liver, where it is converted back into glucose when oxygen becomes available.'
          },
          {
            q: 'Respiration occurs in:',
            options: ['Only animal cells', 'Only plant cells', 'All living cells', 'Only during exercise'],
            answer: 2,
            explanation: 'All living cells carry out respiration continuously to release the energy needed for life processes.'
          },
          {
            q: 'What is metabolism?',
            options: ['The rate of breathing', 'The sum of all chemical reactions in a cell or the body', 'Only the breakdown of food', 'The production of sweat'],
            answer: 1,
            explanation: 'Metabolism is the sum of all chemical reactions taking place in an organism. It includes reactions that build up molecules (anabolism) and break them down (catabolism).'
          },
          {
            q: 'A student investigates the effect of temperature on yeast respiration using a water bath. At 60°C, no CO2 is produced. Why?',
            options: ['The yeast is too cold', 'The enzymes in the yeast have been denatured', 'There is too much oxygen', 'The water bath is too small'],
            answer: 1,
            explanation: 'At 60°C, the enzymes controlling respiration in yeast are denatured — their active sites have changed shape, stopping the reaction.'
          },
          {
            q: 'Which of the following is an example of an anabolic reaction in metabolism?',
            options: ['Breaking down glucose in respiration', 'Building amino acids into proteins', 'Digesting starch', 'Lactic acid production'],
            answer: 1,
            explanation: 'Anabolic reactions build larger molecules from smaller ones. Assembling amino acids into proteins is an example of an anabolic reaction.'
          },
          {
            q: 'How is the rate of respiration in germinating seeds often measured?',
            options: ['By measuring oxygen uptake using a respirometer', 'By counting the seeds', 'By measuring the colour of the seeds', 'By weighing the seeds only'],
            answer: 0,
            explanation: 'A respirometer measures oxygen consumption by germinating seeds. The faster oxygen is used up, the higher the rate of aerobic respiration.'
          }
        ]
      }
    ]
  },

  // ===== SECTION 5: HOMEOSTASIS & RESPONSE =====
  {
    section: 'Homeostasis & Response',
    icon: '🧠',
    color: '#0891B2',
    topics: [
      {
        topic: 'Nervous System & Reflexes',
        questions: [
          {
            q: 'What is the function of the nervous system?',
            options: ['To transport blood', 'To detect stimuli and coordinate rapid responses', 'To digest food', 'To produce hormones only'],
            answer: 1,
            explanation: 'The nervous system detects changes in the environment (stimuli) using receptors and coordinates rapid responses via electrical impulses along neurones.'
          },
          {
            q: 'What is a stimulus?',
            options: ['A response to a change', 'A change in the environment that is detected by receptors', 'A type of nerve cell', 'A hormone'],
            answer: 1,
            explanation: 'A stimulus is a change in the internal or external environment that is detected by receptor cells.'
          },
          {
            q: 'What is the correct pathway of a reflex arc?',
            options: [
              'Effector → relay neurone → motor neurone → receptor → sensory neurone',
              'Receptor → sensory neurone → relay neurone → motor neurone → effector',
              'Motor neurone → sensory neurone → relay neurone → receptor → effector',
              'Receptor → motor neurone → relay neurone → sensory neurone → effector'
            ],
            answer: 1,
            explanation: 'In a reflex arc: receptor detects stimulus → sensory neurone → relay neurone (in spinal cord/CNS) → motor neurone → effector (muscle/gland) responds.'
          },
          {
            q: 'What is a synapse?',
            options: ['A type of muscle', 'A gap between two neurones where chemical signals (neurotransmitters) are released', 'A receptor cell', 'Part of the brain'],
            answer: 1,
            explanation: 'A synapse is the junction between two neurones. When an electrical impulse arrives, chemicals called neurotransmitters diffuse across the gap to trigger an impulse in the next neurone.'
          },
          {
            q: 'Why are reflex actions important?',
            options: ['They help you think', 'They are rapid, automatic responses that protect the body from harm', 'They make you stronger', 'They improve memory'],
            answer: 1,
            explanation: 'Reflexes are fast, automatic, and involuntary responses that protect the body from damage (e.g., pulling hand away from a hot object).'
          },
          {
            q: 'Which part of the central nervous system (CNS) coordinates reflex actions?',
            options: ['Brain only', 'Spinal cord', 'Heart', 'Liver'],
            answer: 1,
            explanation: 'Many reflex actions are coordinated by the spinal cord (relay neurones), allowing rapid responses without involving the brain.'
          },
          {
            q: 'The CNS consists of:',
            options: ['Only the brain', 'The brain and spinal cord', 'All the nerves in the body', 'The brain, spinal cord, and all nerves'],
            answer: 1,
            explanation: 'The central nervous system (CNS) is made up of the brain and spinal cord. Nerves outside the CNS form the peripheral nervous system.'
          },
          {
            q: 'What type of neurone carries impulses from receptors to the CNS?',
            options: ['Motor neurone', 'Relay neurone', 'Sensory neurone', 'Effector neurone'],
            answer: 2,
            explanation: 'Sensory neurones carry electrical impulses from receptors (that detect stimuli) to the CNS (brain and spinal cord).'
          },
          {
            q: 'What type of neurone carries impulses from the CNS to effectors?',
            options: ['Sensory neurone', 'Relay neurone', 'Motor neurone', 'Receptor neurone'],
            answer: 2,
            explanation: 'Motor neurones carry electrical impulses from the CNS to effectors (muscles or glands) to produce a response.'
          },
          {
            q: 'What are effectors?',
            options: ['Cells that detect stimuli', 'Muscles or glands that carry out a response', 'Nerve cells in the brain', 'Receptor cells only'],
            answer: 1,
            explanation: 'Effectors are muscles (which contract) or glands (which secrete hormones or other substances) that carry out the response to a stimulus.'
          },
          {
            q: 'Which neurotransmitter is commonly released at synapses?',
            options: ['Insulin', 'Adrenaline', 'Acetylcholine', 'Haemoglobin'],
            answer: 2,
            explanation: 'Acetylcholine is a common neurotransmitter released at synapses that diffuses across the synaptic cleft and binds to receptors on the next neurone.'
          },
          {
            q: 'In a reaction time experiment, a student catches a dropped ruler. What does this test?',
            options: ['Strength', 'Flexibility', 'Reaction time of the nervous system', 'Endurance'],
            answer: 2,
            explanation: 'The ruler drop test measures reaction time — how quickly the nervous system detects the stimulus (ruler dropping) and coordinates a response (catching it).'
          },
          {
            q: 'Which of these is an example of a reflex action?',
            options: ['Reading a book', 'Withdrawing your hand from a hot plate', 'Solving a maths problem', 'Running a race'],
            answer: 1,
            explanation: 'Withdrawing your hand from a hot surface is a reflex action — it is rapid, automatic, and involuntary, protecting the body from burns.'
          },
          {
            q: 'How do neurotransmitters transmit a signal across a synapse?',
            options: ['By electrical impulse jumping across', 'By diffusing across the gap and binding to receptors on the next neurone', 'By physical contact between neurones', 'By osmosis'],
            answer: 1,
            explanation: 'Neurotransmitters are released from vesicles, diffuse across the synaptic cleft, and bind to specific receptor molecules on the membrane of the next neurone.'
          },
          {
            q: 'What is the function of the myelin sheath on a neurone?',
            options: ['To produce neurotransmitters', 'To insulate the neurone and speed up impulse transmission', 'To detect stimuli', 'To produce energy'],
            answer: 1,
            explanation: 'The myelin sheath is a fatty layer that insulates the axon and speeds up the transmission of electrical impulses along the neurone.'
          },
          {
            q: 'What is the difference between a voluntary action and a reflex action?',
            options: ['Voluntary actions are faster', 'Voluntary actions involve conscious brain control; reflexes are automatic and do not', 'Reflexes involve the brain; voluntary actions do not', 'There is no difference'],
            answer: 1,
            explanation: 'Voluntary actions are consciously controlled by the brain, while reflex actions are automatic, rapid responses that bypass the conscious brain.'
          },
          {
            q: 'The pupil reflex helps protect the eye by:',
            options: ['Changing the shape of the lens', 'Adjusting pupil size to control the amount of light entering the eye', 'Producing tears', 'Moving the eyeball'],
            answer: 1,
            explanation: 'In bright light, the pupil constricts (gets smaller) to prevent damage to the retina. In dim light, it dilates (gets larger) to allow more light in.'
          },
          {
            q: 'Which part of the eye contains receptor cells that detect light?',
            options: ['Cornea', 'Iris', 'Retina', 'Lens'],
            answer: 2,
            explanation: 'The retina at the back of the eye contains light-sensitive receptor cells (rods and cones) that convert light into electrical impulses sent to the brain.'
          },
          {
            q: 'How is the lens focused for viewing near objects?',
            options: ['Ciliary muscles relax, suspensory ligaments tighten, lens becomes thin', 'Ciliary muscles contract, suspensory ligaments loosen, lens becomes fat/round', 'The pupil dilates', 'The cornea changes shape'],
            answer: 1,
            explanation: 'For near objects, ciliary muscles contract, suspensory ligaments slacken, and the elastic lens becomes thicker/rounder, increasing refraction to focus light on the retina.'
          },
          {
            q: 'What causes the condition known as short-sightedness (myopia)?',
            options: ['The lens is too thin', 'The eyeball is too long or the lens is too curved, focusing light in front of the retina', 'The retina is damaged', 'The iris is the wrong colour'],
            answer: 1,
            explanation: 'In myopia, the eyeball is too long or the lens refracts light too strongly, causing the image to focus in front of the retina. It is corrected with concave (diverging) lenses.'
          }
        ]
      },
      {
        topic: 'Hormones & the Endocrine System',
        questions: [
          {
            q: 'What is the endocrine system?',
            options: ['A system of nerves', 'A system of glands that produce hormones', 'The digestive system', 'The respiratory system'],
            answer: 1,
            explanation: 'The endocrine system is a collection of glands that secrete hormones directly into the bloodstream to regulate body processes.'
          },
          {
            q: 'How are hormones transported around the body?',
            options: ['Through nerves', 'In the blood (plasma)', 'Through the lymphatic system only', 'Through the air'],
            answer: 1,
            explanation: 'Hormones are chemical messengers secreted by glands and transported to target organs in the blood plasma.'
          },
          {
            q: 'Which gland is known as the "master gland" of the endocrine system?',
            options: ['Thyroid', 'Adrenal gland', 'Pituitary gland', 'Pancreas'],
            answer: 2,
            explanation: 'The pituitary gland is called the master gland because it produces hormones that regulate many other glands in the endocrine system.'
          },
          {
            q: 'What hormone does the pancreas produce to lower blood glucose levels?',
            options: ['Glucagon', 'Adrenaline', 'Insulin', 'Thyroxine'],
            answer: 2,
            explanation: 'Insulin is produced by the pancreas when blood glucose is too high. It causes cells to take up glucose and the liver to convert glucose to glycogen.'
          },
          {
            q: 'What hormone does the pancreas produce to raise blood glucose levels?',
            options: ['Insulin', 'Glucagon', 'Oestrogen', 'ADH'],
            answer: 1,
            explanation: 'Glucagon is released when blood glucose is too low. It causes the liver to convert stored glycogen back into glucose and release it into the blood.'
          },
          {
            q: 'Type 1 diabetes is caused by:',
            options: ['Eating too much sugar', 'The pancreas not producing enough insulin', 'Lack of exercise', 'An excess of glucagon'],
            answer: 1,
            explanation: 'Type 1 diabetes is an autoimmune condition where the immune system destroys insulin-producing cells in the pancreas. It requires insulin injections.'
          },
          {
            q: 'Type 2 diabetes is caused by:',
            options: ['No insulin production', 'Body cells no longer responding properly to insulin (insulin resistance)', 'A viral infection', 'Too much exercise'],
            answer: 1,
            explanation: 'In Type 2 diabetes, body cells become resistant to insulin, often linked to obesity and poor diet. It can be managed with diet, exercise, and medication.'
          },
          {
            q: 'What is the role of adrenaline?',
            options: ['To lower blood sugar', 'To prepare the body for "fight or flight" by increasing heart rate and blood flow to muscles', 'To control the menstrual cycle', 'To regulate water balance'],
            answer: 1,
            explanation: 'Adrenaline is released by the adrenal glands in stressful situations. It increases heart rate, breathing rate, and blood flow to muscles, preparing the body for action.'
          },
          {
            q: 'Thyroxine is produced by the thyroid gland and controls:',
            options: ['Blood glucose levels', 'The metabolic rate and growth/development', 'The menstrual cycle', 'Calcium levels in bones'],
            answer: 1,
            explanation: 'Thyroxine regulates the basal metabolic rate (how fast chemical reactions occur) and is important for growth and development.'
          },
          {
            q: 'Thyroxine levels are controlled by a negative feedback mechanism. What does this mean?',
            options: ['Thyroxine levels constantly increase', 'When thyroxine levels are high, the pituitary produces less TSH, reducing thyroxine production', 'Thyroxine has no regulation', 'The thyroid produces more thyroxine when levels are already high'],
            answer: 1,
            explanation: 'Negative feedback maintains stable levels: high thyroxine inhibits TSH release from the pituitary, reducing thyroid stimulation and thyroxine production until levels fall.'
          },
          {
            q: 'Which hormone stimulates the release of an egg (ovulation) in the menstrual cycle?',
            options: ['Oestrogen', 'Progesterone', 'LH (luteinising hormone)', 'FSH (follicle-stimulating hormone)'],
            answer: 2,
            explanation: 'A surge of LH (luteinising hormone) from the pituitary gland triggers ovulation — the release of a mature egg from the ovary around day 14.'
          },
          {
            q: 'FSH (follicle-stimulating hormone) causes:',
            options: ['Ovulation', 'Maturation of eggs in the ovary and stimulates oestrogen production', 'Maintenance of the uterus lining', 'The menstrual period'],
            answer: 1,
            explanation: 'FSH stimulates the maturation of follicles (containing eggs) in the ovaries and stimulates the ovaries to produce oestrogen.'
          },
          {
            q: 'Which hormones are used in hormonal contraception (the pill)?',
            options: ['Insulin and glucagon', 'Oestrogen and progesterone', 'Adrenaline and thyroxine', 'FSH and LH only'],
            answer: 1,
            explanation: 'Hormonal contraceptives contain oestrogen and/or progesterone, which inhibit FSH production, preventing egg maturation and ovulation.'
          },
          {
            q: 'How can FSH and LH be used in fertility treatment?',
            options: ['To prevent pregnancy', 'To stimulate egg release in women who do not ovulate naturally', 'To increase testosterone', 'To treat diabetes'],
            answer: 1,
            explanation: 'FSH and LH can be given as fertility drugs to stimulate egg maturation and ovulation in women having difficulty conceiving.'
          },
          {
            q: 'What is IVF?',
            options: ['A type of contraception', 'In vitro fertilisation — eggs are fertilised outside the body and implanted into the uterus', 'A test for pregnancy', 'A type of hormone'],
            answer: 1,
            explanation: 'IVF involves collecting eggs (after FSH/LH stimulation), fertilising them with sperm in a laboratory, and implanting the resulting embryo(s) into the uterus.'
          },
          {
            q: 'What is the role of progesterone in the menstrual cycle?',
            options: ['To cause ovulation', 'To maintain the uterus lining for potential pregnancy', 'To cause menstruation', 'To stimulate egg development'],
            answer: 1,
            explanation: 'Progesterone maintains the thickened uterus lining after ovulation. If no fertilisation occurs, progesterone levels drop and the lining breaks down (menstruation).'
          },
          {
            q: 'Which comparison between the nervous and endocrine systems is correct?',
            options: [
              'Nervous responses are slow and long-lasting; hormonal responses are fast and short',
              'Nervous responses are fast and short-lasting; hormonal responses are slower but longer-lasting',
              'Both produce identical responses',
              'The endocrine system uses electrical signals'
            ],
            answer: 1,
            explanation: 'Nervous responses are fast (milliseconds), short-lived, and act on specific targets. Hormonal responses are slower (seconds to hours), longer-lasting, and can act more widely.'
          },
          {
            q: 'Negative feedback is important because it:',
            options: ['Constantly increases hormone levels', 'Maintains conditions within a narrow range (homeostasis)', 'Stops all hormone production', 'Only works for blood glucose'],
            answer: 1,
            explanation: 'Negative feedback mechanisms reverse changes in conditions, bringing them back to the set point and maintaining a stable internal environment (homeostasis).'
          },
          {
            q: 'Which gland produces hormones involved in the menstrual cycle?',
            options: ['Thyroid and adrenal glands', 'Pituitary gland and ovaries', 'Pancreas and liver', 'Kidneys and lungs'],
            answer: 1,
            explanation: 'The pituitary gland produces FSH and LH, while the ovaries produce oestrogen and progesterone — all four hormones control the menstrual cycle.'
          },
          {
            q: 'What is an ethical concern about IVF treatment?',
            options: ['It is free', 'Unused embryos may be destroyed, raising ethical questions about the status of embryos', 'It always works first time', 'There are no ethical concerns'],
            answer: 1,
            explanation: 'IVF produces multiple embryos, and unused ones may be discarded or used for research. Some people have ethical concerns about destroying potential human lives.'
          }
        ]
      },
      {
        topic: 'Homeostasis (Thermoregulation, Osmoregulation)',
        questions: [
          {
            q: 'What is homeostasis?',
            options: ['The study of homes', 'The maintenance of a stable internal environment despite external changes', 'The process of evolution', 'The breakdown of glucose'],
            answer: 1,
            explanation: 'Homeostasis is the regulation of internal conditions (such as temperature, blood glucose, and water levels) to maintain optimal conditions for enzyme action and cell function.'
          },
          {
            q: 'Why is maintaining a constant body temperature important?',
            options: ['To keep comfortable', 'To ensure enzymes work at their optimum rate', 'To prevent sweating', 'To save energy'],
            answer: 1,
            explanation: 'Enzymes have an optimum temperature (around 37°C in humans). If temperature varies too much, enzymes denature or work too slowly, disrupting metabolism.'
          },
          {
            q: 'Which part of the brain monitors body temperature?',
            options: ['Cerebrum', 'Cerebellum', 'Thermoregulatory centre in the hypothalamus', 'Medulla'],
            answer: 2,
            explanation: 'The thermoregulatory centre in the hypothalamus monitors blood temperature and receives information from temperature receptors in the skin.'
          },
          {
            q: 'When the body is too hot, which response helps cool it down?',
            options: ['Shivering', 'Vasoconstriction', 'Sweating and vasodilation', 'Hair standing on end'],
            answer: 2,
            explanation: 'When too hot, sweat glands produce sweat (which evaporates, cooling the skin) and blood vessels near the skin surface dilate (vasodilation) to radiate more heat.'
          },
          {
            q: 'What is vasodilation?',
            options: ['Blood vessels near the skin constrict', 'Blood vessels near the skin dilate (widen), increasing blood flow near the surface to lose heat', 'Muscles contract rapidly', 'Hair lies flat'],
            answer: 1,
            explanation: 'Vasodilation is the widening of blood vessels near the skin surface, allowing more blood to flow close to the surface and lose heat by radiation.'
          },
          {
            q: 'What is vasoconstriction?',
            options: ['Blood vessels widen to lose heat', 'Blood vessels near the skin constrict (narrow) to reduce heat loss', 'Sweating increases', 'Muscles relax'],
            answer: 1,
            explanation: 'Vasoconstriction is the narrowing of blood vessels near the skin surface, reducing blood flow to the surface and conserving heat when the body is cold.'
          },
          {
            q: 'When the body is too cold, which response helps warm it up?',
            options: ['Sweating and vasodilation', 'Shivering and vasoconstriction', 'Increased breathing rate', 'Hair lies flat'],
            answer: 1,
            explanation: 'When cold, muscles shiver (rapid contractions release heat from respiration) and vasoconstriction reduces blood flow to the skin surface, conserving heat.'
          },
          {
            q: 'What organs are responsible for osmoregulation?',
            options: ['Lungs', 'Heart', 'Kidneys', 'Stomach'],
            answer: 2,
            explanation: 'The kidneys regulate water and ion levels in the blood through filtration and selective reabsorption, maintaining the correct water balance.'
          },
          {
            q: 'What does ADH (antidiuretic hormone) do?',
            options: ['Increases urine production', 'Causes the kidneys to reabsorb more water, producing less and more concentrated urine', 'Lowers blood pressure', 'Increases sweating'],
            answer: 1,
            explanation: 'ADH is released by the pituitary gland when blood is too concentrated. It makes kidney tubules more permeable to water, increasing water reabsorption.'
          },
          {
            q: 'When the blood is too dilute, what happens to ADH levels?',
            options: ['ADH levels increase', 'ADH levels decrease, so less water is reabsorbed and more dilute urine is produced', 'ADH levels stay the same', 'The kidneys stop working'],
            answer: 1,
            explanation: 'When blood is too dilute, less ADH is released. The kidney tubules become less permeable to water, so more water passes into urine (dilute urine is produced).'
          },
          {
            q: 'What is the role of the kidneys in excretion?',
            options: ['To produce hormones only', 'To filter blood and remove waste products like urea', 'To produce urea', 'To digest proteins'],
            answer: 1,
            explanation: 'The kidneys filter the blood, removing waste products (urea from protein metabolism, excess water, and ions) which are excreted as urine.'
          },
          {
            q: 'Where is urea produced?',
            options: ['In the kidneys', 'In the liver, from the breakdown of excess amino acids', 'In the muscles', 'In the lungs'],
            answer: 1,
            explanation: 'Urea is produced in the liver by the deamination of excess amino acids (removing the amino group). It is then transported to the kidneys for excretion.'
          },
          {
            q: 'What is selective reabsorption in the kidneys?',
            options: ['All substances are reabsorbed', 'Useful substances (glucose, some water, ions) are reabsorbed back into the blood', 'Only water is reabsorbed', 'Nothing is reabsorbed'],
            answer: 1,
            explanation: 'During selective reabsorption, useful substances like glucose (all of it), amino acids, and some water and ions are reabsorbed from the kidney tubules back into the blood.'
          },
          {
            q: 'A person drinks a large volume of water. What happens to their urine?',
            options: ['It becomes more concentrated', 'It becomes more dilute and increases in volume', 'It stays the same', 'They stop producing urine'],
            answer: 1,
            explanation: 'Excess water dilutes the blood, so less ADH is released. The kidneys reabsorb less water, producing a larger volume of more dilute urine.'
          },
          {
            q: 'On a hot day, a person exercises vigorously. What happens to their urine?',
            options: ['More dilute and larger volume', 'More concentrated and smaller volume', 'No change', 'They produce no urine'],
            answer: 1,
            explanation: 'More water is lost through sweating, so the blood becomes more concentrated. More ADH is released, more water is reabsorbed, and a smaller volume of concentrated urine is produced.'
          },
          {
            q: 'Dialysis is used when:',
            options: ['The heart fails', 'The kidneys fail and cannot filter the blood properly', 'The liver stops working', 'The lungs cannot exchange gases'],
            answer: 1,
            explanation: 'Kidney dialysis uses a machine to artificially filter the blood when the kidneys are unable to do so, removing waste products and excess substances.'
          },
          {
            q: 'How does a dialysis machine work?',
            options: ['It replaces the kidneys permanently', 'Blood flows over a partially permeable membrane; waste substances diffuse out into dialysis fluid', 'It adds clean blood to the body', 'It removes all water from the blood'],
            answer: 1,
            explanation: 'In dialysis, blood flows alongside a partially permeable membrane. Waste products (urea) and excess substances diffuse out into dialysis fluid down concentration gradients.'
          },
          {
            q: 'What advantage does a kidney transplant have over dialysis?',
            options: ['It is cheaper in the short term', 'It provides a permanent solution and the patient can live a more normal life', 'It never requires medication', 'It is risk-free'],
            answer: 1,
            explanation: 'A successful kidney transplant provides a permanent solution, freeing the patient from regular dialysis sessions. However, immunosuppressant drugs are needed to prevent rejection.'
          },
          {
            q: 'Thermoregulation is an example of negative feedback because:',
            options: ['The body always gets hotter', 'When temperature deviates from the set point, mechanisms act to reverse the change', 'It only works when you are cold', 'Positive changes are amplified'],
            answer: 1,
            explanation: 'Negative feedback reverses deviations: if too hot, cooling mechanisms activate; if too cold, warming mechanisms activate — returning temperature to the set point of about 37°C.'
          },
          {
            q: 'Why must blood glucose concentration be controlled?',
            options: ['To make the blood taste sweet', 'Changes in glucose concentration can affect osmosis in cells and damage tissues', 'To prevent weight gain', 'It does not need to be controlled'],
            answer: 1,
            explanation: 'If blood glucose is too high, it can damage blood vessels and affect osmotic balance. If too low, cells lack energy for respiration. Homeostatic control maintains safe levels.'
          }
        ]
      }
    ]
  },

  // ===== SECTION 6: INHERITANCE, VARIATION & EVOLUTION =====
  {
    section: 'Inheritance, Variation & Evolution',
    icon: '🧬',
    color: '#9333EA',
    topics: [
      {
        topic: 'DNA, Genes & Genetic Inheritance',
        questions: [
          {
            q: 'What is a gene?',
            options: ['An entire chromosome', 'A small section of DNA that codes for a particular protein', 'A type of cell', 'A molecule of RNA'],
            answer: 1,
            explanation: 'A gene is a short section of DNA on a chromosome that codes for a specific sequence of amino acids, which forms a particular protein.'
          },
          {
            q: 'What is the structure of DNA?',
            options: ['A single strand of nucleotides', 'A double helix made of two strands of nucleotides', 'A chain of amino acids', 'A ring of sugar molecules'],
            answer: 1,
            explanation: 'DNA has a double helix structure consisting of two strands of nucleotides twisted together, with complementary base pairs (A-T, C-G) holding them together.'
          },
          {
            q: 'Which base pairs with adenine (A) in DNA?',
            options: ['Cytosine (C)', 'Guanine (G)', 'Thymine (T)', 'Uracil (U)'],
            answer: 2,
            explanation: 'In DNA, adenine (A) always pairs with thymine (T), and cytosine (C) always pairs with guanine (G). These are complementary base pairs.'
          },
          {
            q: 'What is an allele?',
            options: ['A type of chromosome', 'A different version (form) of a gene', 'A type of protein', 'A mutation'],
            answer: 1,
            explanation: 'Alleles are different versions of the same gene. For example, the gene for eye colour has alleles for brown, blue, green, etc.'
          },
          {
            q: 'What does "homozygous" mean?',
            options: ['Having two different alleles for a gene', 'Having two identical alleles for a gene', 'Having no alleles', 'Having three alleles'],
            answer: 1,
            explanation: 'Homozygous means having two identical alleles for a particular gene (e.g., BB or bb).'
          },
          {
            q: 'What does "heterozygous" mean?',
            options: ['Having two identical alleles for a gene', 'Having two different alleles for a gene', 'Having only one allele', 'Having no alleles'],
            answer: 1,
            explanation: 'Heterozygous means having two different alleles for a particular gene (e.g., Bb).'
          },
          {
            q: 'What is the difference between genotype and phenotype?',
            options: ['They mean the same thing', 'Genotype is the alleles present; phenotype is the observable characteristics', 'Genotype is what you look like; phenotype is your DNA', 'Phenotype is the alleles; genotype is the traits'],
            answer: 1,
            explanation: 'Genotype refers to the combination of alleles an organism has (e.g., Bb). Phenotype is the observable physical characteristic that results (e.g., brown eyes).'
          },
          {
            q: 'In a genetic cross, two heterozygous parents (Bb x Bb) are crossed. What proportion of offspring would be expected to show the recessive phenotype?',
            options: ['0%', '25%', '50%', '75%'],
            answer: 1,
            explanation: 'Using a Punnett square: BB, Bb, Bb, bb. Only bb (25%) shows the recessive phenotype. 75% show the dominant phenotype.'
          },
          {
            q: 'A dominant allele is one that:',
            options: ['Is always harmful', 'Is expressed in the phenotype even when only one copy is present', 'Is only expressed when two copies are present', 'Is always recessive'],
            answer: 1,
            explanation: 'A dominant allele is expressed in the phenotype when at least one copy is present (heterozygous Bb or homozygous BB).'
          },
          {
            q: 'A recessive allele is only expressed when:',
            options: ['One copy is present', 'The organism is homozygous for that allele (two copies)', 'It is dominant', 'The organism is heterozygous'],
            answer: 1,
            explanation: 'A recessive allele is only expressed in the phenotype when the organism is homozygous recessive (bb) — having two copies of the recessive allele.'
          },
          {
            q: 'What is a Punnett square used for?',
            options: ['Measuring DNA length', 'Predicting the possible genotypes and phenotypes of offspring', 'Counting chromosomes', 'Identifying mutations'],
            answer: 1,
            explanation: 'A Punnett square is a diagram used to predict the probable outcomes of a genetic cross, showing possible genotypes and their ratios in offspring.'
          },
          {
            q: 'Cystic fibrosis is caused by a:',
            options: ['Dominant allele', 'Recessive allele', 'Sex-linked allele only', 'Viral infection'],
            answer: 1,
            explanation: 'Cystic fibrosis is caused by a recessive allele. Both parents must carry the allele (be carriers, Cc) for a child to be affected (cc).'
          },
          {
            q: 'Polydactyly (extra fingers/toes) is caused by a:',
            options: ['Recessive allele', 'Dominant allele', 'Lack of vitamins', 'Bacterial infection'],
            answer: 1,
            explanation: 'Polydactyly is caused by a dominant allele, meaning only one copy is needed for the condition to be expressed.'
          },
          {
            q: 'Two parents are both carriers of cystic fibrosis (Cc). What is the probability their child will have cystic fibrosis?',
            options: ['0%', '25% (1 in 4)', '50% (1 in 2)', '100%'],
            answer: 1,
            explanation: 'Punnett square: CC, Cc, Cc, cc. Only cc (1 in 4, or 25%) will have cystic fibrosis. Cc are carriers but unaffected.'
          },
          {
            q: 'What determines the sex of a baby?',
            options: ['The mother\'s diet', 'The combination of sex chromosomes (XX = female, XY = male)', 'The father\'s age', 'Random chance unrelated to chromosomes'],
            answer: 1,
            explanation: 'Sex is determined by sex chromosomes: females have XX and males have XY. The father\'s sperm determines the sex (carrying either X or Y).'
          },
          {
            q: 'What is a mutation?',
            options: ['Normal DNA replication', 'A random change in the DNA sequence', 'A type of gene expression', 'Cell division'],
            answer: 1,
            explanation: 'A mutation is a random, spontaneous change in the base sequence of DNA. Most mutations have no effect, some are harmful, and rarely some are beneficial.'
          },
          {
            q: 'The Human Genome Project aimed to:',
            options: ['Clone humans', 'Map the entire human DNA sequence (genome)', 'Create new genes', 'Develop antibiotics'],
            answer: 1,
            explanation: 'The Human Genome Project was an international effort to identify and map all of the genes in human DNA, completed in 2003.'
          },
          {
            q: 'What is a genome?',
            options: ['A single gene', 'The entire set of genetic material (DNA) in an organism', 'A chromosome', 'A protein'],
            answer: 1,
            explanation: 'A genome is the entire set of genetic material in an organism — all of its DNA, including all genes and non-coding sequences.'
          },
          {
            q: 'What percentage of a child\'s genes come from each parent?',
            options: ['75% from mother, 25% from father', '50% from each parent', '100% from mother', 'It varies randomly'],
            answer: 1,
            explanation: 'Each parent contributes half of their offspring\'s genes through their gametes (23 chromosomes from each parent = 46 total).'
          },
          {
            q: 'If a father is heterozygous (Bb) for a trait and the mother is homozygous recessive (bb), what ratio of phenotypes is expected in offspring?',
            options: ['All dominant', '1 dominant : 1 recessive', '3 dominant : 1 recessive', 'All recessive'],
            answer: 1,
            explanation: 'Bb x bb gives: Bb, Bb, bb, bb = 50% dominant phenotype, 50% recessive phenotype, a 1:1 ratio.'
          }
        ]
      },
      {
        topic: 'Natural Selection & Evolution',
        questions: [
          {
            q: 'What is natural selection?',
            options: ['Humans choosing which organisms to breed', 'The process where organisms with advantageous traits are more likely to survive and reproduce', 'Random selection of organisms for experiments', 'The creation of new species by scientists'],
            answer: 1,
            explanation: 'Natural selection is the process by which organisms with characteristics best suited to their environment are more likely to survive, reproduce, and pass on their genes.'
          },
          {
            q: 'Who proposed the theory of evolution by natural selection?',
            options: ['Gregor Mendel', 'Charles Darwin', 'Louis Pasteur', 'Alexander Fleming'],
            answer: 1,
            explanation: 'Charles Darwin proposed the theory of evolution by natural selection after his observations during the voyage of HMS Beagle, published in "On the Origin of Species" (1859).'
          },
          {
            q: 'What is evolution?',
            options: ['The development of an organism during its lifetime', 'The gradual change in inherited characteristics of a population over many generations', 'The creation of new organisms in a laboratory', 'The process of growth'],
            answer: 1,
            explanation: 'Evolution is the gradual change in the inherited characteristics (allele frequencies) of a population over successive generations through natural selection.'
          },
          {
            q: 'What is selective breeding (artificial selection)?',
            options: ['Natural selection in the wild', 'Humans choosing organisms with desired traits to breed together', 'Random mating', 'Genetic engineering'],
            answer: 1,
            explanation: 'Selective breeding involves humans choosing plants or animals with desired characteristics to breed together, producing offspring with those traits over generations.'
          },
          {
            q: 'A potential problem with selective breeding is:',
            options: ['Increased genetic variation', 'Reduced genetic variation (inbreeding), making the population vulnerable to disease', 'Organisms become too healthy', 'It is too slow'],
            answer: 1,
            explanation: 'Selective breeding reduces genetic variation because only organisms with desired traits are bred. This inbreeding can lead to health problems and vulnerability to disease.'
          },
          {
            q: 'What is genetic engineering?',
            options: ['Selective breeding', 'The process of modifying the genome of an organism by introducing a gene from another organism', 'Natural mutation', 'Cloning animals'],
            answer: 1,
            explanation: 'Genetic engineering involves cutting a gene from one organism\'s DNA and inserting it into another organism\'s DNA using restriction enzymes and ligase.'
          },
          {
            q: 'What evidence supports the theory of evolution?',
            options: ['There is no evidence', 'Fossil records, antibiotic resistance in bacteria, and comparative anatomy', 'Only religious texts', 'Only DNA evidence'],
            answer: 1,
            explanation: 'Evidence for evolution includes the fossil record (showing changes over time), observed evolution (e.g., antibiotic resistance), comparative anatomy, and DNA/molecular evidence.'
          },
          {
            q: 'What is a fossil?',
            options: ['A living organism', 'The preserved remains or traces of organisms that lived millions of years ago', 'A type of rock only', 'A modern animal bone'],
            answer: 1,
            explanation: 'Fossils are the preserved remains (bones, shells), traces (footprints), or replacement minerals of organisms that lived long ago, found in sedimentary rocks.'
          },
          {
            q: 'Why is the fossil record incomplete?',
            options: ['Scientists have not looked hard enough', 'Many organisms did not fossilise (soft bodies), fossils were destroyed, or have not yet been found', 'All organisms fossilise perfectly', 'Fossils only form in water'],
            answer: 1,
            explanation: 'Many organisms (especially soft-bodied ones) did not form fossils. Others were destroyed by geological processes. Many fossils remain undiscovered.'
          },
          {
            q: 'Antibiotic-resistant bacteria are an example of:',
            options: ['Selective breeding', 'Evolution by natural selection', 'Genetic engineering', 'Artificial selection'],
            answer: 1,
            explanation: 'Antibiotic resistance evolves by natural selection: bacteria with resistance mutations survive antibiotic treatment, reproduce, and pass on resistance genes to offspring.'
          },
          {
            q: 'What is speciation?',
            options: ['The extinction of a species', 'The formation of new species from an existing species', 'The migration of organisms', 'The growth of an organism'],
            answer: 1,
            explanation: 'Speciation is the evolutionary process by which populations of organisms evolve to become distinct species, often through geographic isolation and natural selection.'
          },
          {
            q: 'How does geographic isolation lead to speciation?',
            options: ['It causes immediate new species formation', 'Separated populations experience different selection pressures and evolve differently until they can no longer interbreed', 'It has no effect', 'It always leads to extinction'],
            answer: 1,
            explanation: 'When populations are geographically separated, they face different environments and selection pressures. Over time, they accumulate enough genetic differences that they can no longer interbreed.'
          },
          {
            q: 'What is extinction?',
            options: ['The appearance of a new species', 'When no individuals of a species remain alive', 'When an organism moves to a new habitat', 'When a species adapts successfully'],
            answer: 1,
            explanation: 'Extinction occurs when all members of a species die, often due to environmental changes, new diseases, new predators, or competition they cannot adapt to.'
          },
          {
            q: 'An example of selective breeding in agriculture is:',
            options: ['Antibiotic resistance in bacteria', 'Breeding cattle for higher milk yield', 'Evolution of new species', 'Photosynthesis in plants'],
            answer: 1,
            explanation: 'Farmers selectively breed cows that produce the most milk, choosing them as parents for the next generation to increase average milk yield over time.'
          },
          {
            q: 'GM (genetically modified) crops may be engineered to:',
            options: ['Grow in complete darkness', 'Be resistant to diseases, pests, or herbicides', 'Photosynthesize without water', 'Grow without soil or nutrients'],
            answer: 1,
            explanation: 'GM crops can be engineered with genes for pest resistance (reducing pesticide use), herbicide resistance, or improved nutritional content.'
          },
          {
            q: 'A concern about genetically modified organisms is:',
            options: ['They grow too slowly', 'The transferred genes could spread to wild populations or affect biodiversity', 'They always taste bad', 'They are always safe'],
            answer: 1,
            explanation: 'Concerns about GM organisms include potential gene transfer to wild populations, effects on biodiversity, and unknown long-term health or environmental impacts.'
          },
          {
            q: 'Lamarck\'s theory of evolution suggested that:',
            options: ['Natural selection drives evolution', 'Organisms can pass on characteristics acquired during their lifetime', 'Mutations cause evolution', 'God created all species'],
            answer: 1,
            explanation: 'Lamarck proposed that organisms could pass on acquired characteristics (e.g., a blacksmith\'s strong arms). This was later disproven — only genetic changes are inherited.'
          },
          {
            q: 'What role do mutations play in evolution?',
            options: ['They have no role', 'They provide the genetic variation upon which natural selection acts', 'They always cause extinction', 'They only cause disease'],
            answer: 1,
            explanation: 'Mutations create new alleles, introducing genetic variation into a population. Beneficial mutations may be selected for by natural selection, driving evolution.'
          },
          {
            q: 'Which of the following is needed for natural selection to occur?',
            options: ['All organisms being identical', 'Genetic variation within a population', 'No competition for resources', 'Unlimited food supply'],
            answer: 1,
            explanation: 'Natural selection requires genetic variation — without differences between individuals, there would be no advantageous traits to select for.'
          },
          {
            q: 'What is the advantage of sexual reproduction for a species\' evolution?',
            options: ['It produces clones', 'It increases genetic variation, helping the species adapt to changing environments', 'It is faster than asexual reproduction', 'It produces fewer offspring'],
            answer: 1,
            explanation: 'Sexual reproduction produces genetic variation through meiosis and random fertilisation, giving the species a better chance of adapting to environmental changes.'
          }
        ]
      },
      {
        topic: 'Classification',
        questions: [
          {
            q: 'What is classification?',
            options: ['The study of cells', 'The organisation of living organisms into groups based on shared characteristics', 'The process of evolution', 'The breeding of animals'],
            answer: 1,
            explanation: 'Classification (taxonomy) is the systematic grouping of organisms based on their similarities and differences, reflecting evolutionary relationships.'
          },
          {
            q: 'Who developed the system of binomial nomenclature?',
            options: ['Charles Darwin', 'Carl Linnaeus', 'Gregor Mendel', 'Louis Pasteur'],
            answer: 1,
            explanation: 'Carl Linnaeus developed the binomial naming system and the hierarchical classification system used to organise living organisms.'
          },
          {
            q: 'What is the correct order of classification from largest to smallest group?',
            options: [
              'Species, genus, family, order, class, phylum, kingdom',
              'Kingdom, phylum, class, order, family, genus, species',
              'Kingdom, class, phylum, order, family, genus, species',
              'Domain, species, genus, family, order, class, phylum, kingdom'
            ],
            answer: 1,
            explanation: 'The correct hierarchy from largest to smallest is: Kingdom, Phylum, Class, Order, Family, Genus, Species. A mnemonic: King Philip Came Over For Good Spaghetti.'
          },
          {
            q: 'In binomial nomenclature, the name "Homo sapiens" refers to:',
            options: ['Kingdom and phylum', 'Genus (Homo) and species (sapiens)', 'Family and order', 'Class and genus'],
            answer: 1,
            explanation: 'Binomial nomenclature uses two names: the genus (capitalised) and the species (lowercase), both written in italics. Homo sapiens = genus Homo, species sapiens.'
          },
          {
            q: 'Carl Woese proposed a three-domain system. What are the three domains?',
            options: ['Animals, Plants, Fungi', 'Archaea, Bacteria, Eukarya', 'Vertebrates, Invertebrates, Plants', 'Prokaryotes, Eukaryotes, Viruses'],
            answer: 1,
            explanation: 'Woese proposed three domains based on genetic analysis: Archaea (ancient prokaryotes), Bacteria (true bacteria), and Eukarya (organisms with a true nucleus).'
          },
          {
            q: 'Why was the three-domain system proposed?',
            options: ['To simplify classification', 'Chemical analysis of RNA revealed fundamental differences between groups of organisms', 'To add more kingdoms', 'Because Linnaeus was wrong about everything'],
            answer: 1,
            explanation: 'Analysis of RNA and other biochemical evidence showed that Archaea are fundamentally different from Bacteria, justifying a new, higher level of classification.'
          },
          {
            q: 'Which domain do humans belong to?',
            options: ['Archaea', 'Bacteria', 'Eukarya', 'Protista'],
            answer: 2,
            explanation: 'Humans are eukaryotic organisms (cells with a true nucleus), so they belong to the domain Eukarya.'
          },
          {
            q: 'What are the five traditional kingdoms?',
            options: ['Archaea, Bacteria, Protista, Fungi, Plants', 'Animals, Plants, Fungi, Protists, Prokaryotes', 'Vertebrates, Invertebrates, Plants, Fungi, Bacteria', 'Mammals, Birds, Fish, Reptiles, Amphibians'],
            answer: 1,
            explanation: 'The five kingdoms are: Animals, Plants, Fungi, Protists, and Prokaryotes (bacteria). The three-domain system groups these differently based on deeper evolutionary relationships.'
          },
          {
            q: 'Why do scientists use evolutionary trees (phylogenetic trees)?',
            options: ['To classify plants only', 'To show the evolutionary relationships between different groups of organisms', 'To count the number of species', 'To identify fossils only'],
            answer: 1,
            explanation: 'Evolutionary (phylogenetic) trees show how closely related different species are and their common ancestors, based on evidence from DNA, fossils, and morphology.'
          },
          {
            q: 'Which organisms belong to the domain Archaea?',
            options: ['All bacteria', 'Primitive prokaryotes often found in extreme environments', 'All fungi', 'All animals'],
            answer: 1,
            explanation: 'Archaea are prokaryotic organisms that are often found in extreme environments (hot springs, very salty lakes). Despite being prokaryotic, they are genetically distinct from bacteria.'
          },
          {
            q: 'What is the most specific level of classification?',
            options: ['Kingdom', 'Phylum', 'Genus', 'Species'],
            answer: 3,
            explanation: 'Species is the most specific (smallest) level of classification. Organisms of the same species can interbreed to produce fertile offspring.'
          },
          {
            q: 'How has DNA analysis changed classification?',
            options: ['It has not changed anything', 'It has allowed organisms to be classified more accurately based on genetic similarities', 'It has made classification unnecessary', 'It only works for bacteria'],
            answer: 1,
            explanation: 'DNA analysis reveals genetic similarities between organisms, sometimes reclassifying species that look similar but are genetically different, or vice versa.'
          },
          {
            q: 'Two organisms that share a more recent common ancestor are said to be:',
            options: ['Less closely related', 'More closely related', 'Identical', 'Of different domains'],
            answer: 1,
            explanation: 'Organisms that share a more recent common ancestor are more closely related, meaning they diverged from each other more recently in evolutionary history.'
          },
          {
            q: 'What characteristic defines the kingdom Fungi?',
            options: ['They photosynthesise', 'They are multicellular, have chitin cell walls, and feed by saprotrophic nutrition', 'They are all unicellular', 'They have a backbone'],
            answer: 1,
            explanation: 'Fungi are mostly multicellular organisms with cell walls made of chitin. They feed by saprotrophic nutrition — secreting enzymes externally to digest dead organic matter.'
          },
          {
            q: 'Which kingdom includes organisms that photosynthesise and have cellulose cell walls?',
            options: ['Animals', 'Fungi', 'Plants', 'Prokaryotes'],
            answer: 2,
            explanation: 'Plants are multicellular organisms that photosynthesise using chloroplasts and have cell walls made of cellulose.'
          },
          {
            q: 'Why is it difficult to classify some organisms?',
            options: ['All organisms are easy to classify', 'Some organisms share features of multiple groups, or new evidence changes their classification', 'Scientists disagree about everything', 'Only bacteria are difficult to classify'],
            answer: 1,
            explanation: 'Some organisms share characteristics with multiple groups (e.g., Euglena photosynthesises like a plant but moves like an animal), and new DNA evidence can lead to reclassification.'
          },
          {
            q: 'On an evolutionary tree, the point where two branches meet represents:',
            options: ['Extinction', 'A common ancestor', 'A mutation', 'A new domain'],
            answer: 1,
            explanation: 'Branch points (nodes) on a phylogenetic tree represent common ancestors from which two or more groups diverged.'
          },
          {
            q: 'Which is NOT a characteristic used to classify organisms?',
            options: ['Cell structure', 'DNA sequences', 'Habitat location', 'Morphology (physical features)'],
            answer: 2,
            explanation: 'Classification is based on characteristics like cell structure, DNA sequences, and morphology (physical features). Habitat alone does not determine classification — unrelated organisms can share the same habitat.'
          },
          {
            q: 'A species is defined as:',
            options: ['Any group of organisms that look the same', 'A group of organisms that can interbreed to produce fertile offspring', 'Any group of organisms in the same habitat', 'A group with the same number of chromosomes'],
            answer: 1,
            explanation: 'A species is a group of organisms that can breed together to produce fertile offspring. This is the biological species concept.'
          },
          {
            q: 'What advantage does the Linnaean system have?',
            options: ['It is the newest system', 'It provides a universal naming system understood by scientists worldwide', 'It only uses common names', 'It classifies by colour'],
            answer: 1,
            explanation: 'The Linnaean system provides a standardised, universally recognised naming system (binomial nomenclature) that avoids confusion caused by different common names in different languages.'
          }
        ]
      }
    ]
  },

  // ===== SECTION 7: ECOLOGY =====
  {
    section: 'Ecology',
    icon: '🌍',
    color: '#CA8A04',
    topics: [
      {
        topic: 'Ecosystems & Sampling',
        questions: [
          {
            q: 'What is an ecosystem?',
            options: ['A single organism', 'The interaction of a community of living organisms with the non-living (abiotic) parts of their environment', 'A type of habitat only', 'A food chain'],
            answer: 1,
            explanation: 'An ecosystem is the interaction between the biotic (living) community and the abiotic (non-living) factors in a particular area.'
          },
          {
            q: 'What is a community?',
            options: ['A single species in a habitat', 'All the populations of different species living and interacting in an area', 'The non-living parts of an environment', 'A food web'],
            answer: 1,
            explanation: 'A community is all the populations of different species of organisms that live and interact together in an ecosystem.'
          },
          {
            q: 'What is a population?',
            options: ['All organisms in an ecosystem', 'All the organisms of one species living in a habitat', 'The abiotic factors in a habitat', 'A food chain'],
            answer: 1,
            explanation: 'A population is all the organisms of the same species living in a particular habitat at a given time.'
          },
          {
            q: 'Which of the following is an abiotic factor?',
            options: ['Predation', 'Competition', 'Light intensity', 'Disease'],
            answer: 2,
            explanation: 'Abiotic factors are non-living conditions that affect organisms, such as light intensity, temperature, moisture, soil pH, and wind speed.'
          },
          {
            q: 'Which of the following is a biotic factor?',
            options: ['Temperature', 'Rainfall', 'Predation', 'Soil pH'],
            answer: 2,
            explanation: 'Biotic factors are living factors that affect organisms, such as predation, competition, disease, and availability of food.'
          },
          {
            q: 'What piece of equipment is used to sample plant populations in an area?',
            options: ['Thermometer', 'Quadrat', 'Potometer', 'Microscope'],
            answer: 1,
            explanation: 'Quadrats are square frames placed on the ground to count the number or percentage cover of plants within the frame, used to estimate population size.'
          },
          {
            q: 'Why should quadrats be placed randomly when sampling?',
            options: ['To save time', 'To avoid bias and ensure the sample is representative of the whole area', 'To make the experiment easier', 'Random placement is not important'],
            answer: 1,
            explanation: 'Random placement avoids sampling bias (avoiding or favouring certain areas), ensuring results are representative and valid.'
          },
          {
            q: 'A transect is used to:',
            options: ['Catch insects', 'Study how organisms are distributed along a line across a habitat', 'Measure temperature only', 'Sample water quality'],
            answer: 1,
            explanation: 'A transect (belt or line) is used to study how the distribution of organisms changes across a habitat, for example from a pond to dry land.'
          },
          {
            q: 'How do you estimate the total population of a species in a field using quadrat data?',
            options: ['Count every individual', 'Calculate mean number per quadrat, then multiply by total area / quadrat area', 'Guess based on one quadrat', 'Use a food chain'],
            answer: 1,
            explanation: 'Population estimate = mean number per quadrat x (total area of field / area of one quadrat). This scales up from the sample to the whole area.'
          },
          {
            q: 'A student counts 8 daisies in a 0.5 m x 0.5 m quadrat. The field is 100 m². What is the estimated population?',
            options: ['800', '1600', '3200', '200'],
            answer: 2,
            explanation: 'Quadrat area = 0.5 x 0.5 = 0.25 m². Number of quadrats that fit = 100 / 0.25 = 400. Estimated population = 8 x 400 = 3200 daisies.'
          },
          {
            q: 'What is interdependence?',
            options: ['Organisms living alone', 'The dependence of organisms on other species in the community for food, shelter, pollination, etc.', 'Competition between the same species', 'Predation only'],
            answer: 1,
            explanation: 'Interdependence means species in a community depend on each other. A change in one species can affect others, such as pollinators and flowering plants.'
          },
          {
            q: 'What happens to prey populations if the predator population increases?',
            options: ['Prey population increases', 'Prey population initially decreases due to increased predation', 'Nothing changes', 'Prey population stays the same'],
            answer: 1,
            explanation: 'More predators means more prey are eaten, so the prey population decreases. This can then cause the predator population to decrease due to less food, creating a cycle.'
          },
          {
            q: 'In a food chain: grass → rabbit → fox, which organism is the producer?',
            options: ['Rabbit', 'Fox', 'Grass', 'All of them'],
            answer: 2,
            explanation: 'Grass is the producer because it makes its own food through photosynthesis. Producers are always at the start of a food chain.'
          },
          {
            q: 'What is competition?',
            options: ['Organisms working together', 'The contest between organisms for limited resources such as food, water, or territory', 'The process of photosynthesis', 'Organisms eating each other'],
            answer: 1,
            explanation: 'Competition occurs when organisms vie for the same limited resources. Intraspecific competition is within a species; interspecific is between different species.'
          },
          {
            q: 'Plants compete for:',
            options: ['Prey and mates', 'Light, water, space, and mineral ions', 'Oxygen only', 'Temperature'],
            answer: 1,
            explanation: 'Plants compete with each other for light (photosynthesis), water, space (to grow), and mineral ions from the soil.'
          },
          {
            q: 'Animals compete for:',
            options: ['Light and mineral ions', 'Food, territory, water, and mates', 'Carbon dioxide', 'Chlorophyll'],
            answer: 1,
            explanation: 'Animals compete for resources including food, water, territory (space), and mates for reproduction.'
          },
          {
            q: 'What does a food web show that a food chain does not?',
            options: ['The order of predators', 'The interconnected feeding relationships in a community', 'The amount of energy at each level', 'The number of organisms'],
            answer: 1,
            explanation: 'A food web shows multiple interconnected food chains, revealing the complex feeding relationships and interdependence within a community.'
          },
          {
            q: 'If a species is removed from a food web, what might happen?',
            options: ['Nothing changes', 'Organisms that depend on it for food may decline; organisms it feeds on may increase', 'All organisms die', 'New species immediately replace it'],
            answer: 1,
            explanation: 'Removing a species disrupts the food web: predators of that species lose a food source (population may decline), while its prey may increase (less predation).'
          },
          {
            q: 'What is the name for an organism that eats both plants and animals?',
            options: ['Herbivore', 'Carnivore', 'Omnivore', 'Decomposer'],
            answer: 2,
            explanation: 'An omnivore eats both plant material and animal material, for example humans, bears, and badgers.'
          },
          {
            q: 'A capture-recapture method is used to estimate the population of:',
            options: ['Plants', 'Mobile animals', 'Rocks', 'Water quality'],
            answer: 1,
            explanation: 'Capture-recapture (mark-release-recapture) is used for mobile animals. Animals are caught, marked, released, then recaptured. The population is estimated using: (first catch x second catch) / number marked in second catch.'
          }
        ]
      },
      {
        topic: 'Biodiversity & Human Impact',
        questions: [
          {
            q: 'What is biodiversity?',
            options: ['The number of individuals in a population', 'The variety of different species of organisms on Earth or within an ecosystem', 'The total biomass of an ecosystem', 'The number of habitats'],
            answer: 1,
            explanation: 'Biodiversity refers to the variety of all living organisms in an area — including the diversity of species, genes, and ecosystems.'
          },
          {
            q: 'Why is maintaining biodiversity important?',
            options: ['It is not important', 'It ensures ecosystem stability, provides resources, and supports food security', 'Only for aesthetic reasons', 'It only matters for endangered species'],
            answer: 1,
            explanation: 'Biodiversity maintains stable ecosystems, provides resources (food, medicines), supports pollination and nutrient cycling, and ensures resilience to environmental change.'
          },
          {
            q: 'Which human activity reduces biodiversity?',
            options: ['Creating nature reserves', 'Deforestation, pollution, and habitat destruction', 'Planting trees', 'Breeding programmes'],
            answer: 1,
            explanation: 'Deforestation, pollution, urbanisation, and intensive farming destroy habitats and reduce the variety of species, decreasing biodiversity.'
          },
          {
            q: 'What is deforestation?',
            options: ['Planting new forests', 'The large-scale clearing of trees and forests', 'Growing crops', 'Building dams'],
            answer: 1,
            explanation: 'Deforestation is the large-scale removal of forests, often for agriculture, timber, or development, leading to habitat loss and increased CO2 in the atmosphere.'
          },
          {
            q: 'How does deforestation contribute to climate change?',
            options: ['It reduces oxygen only', 'Fewer trees absorb CO2 (less photosynthesis) and burning/decomposition of trees releases stored carbon', 'It has no effect on climate', 'It cools the Earth'],
            answer: 1,
            explanation: 'Deforestation reduces CO2 absorption (fewer trees for photosynthesis) and releases stored carbon when trees are burned or decompose, increasing atmospheric CO2.'
          },
          {
            q: 'What is the greenhouse effect?',
            options: ['Growing plants in greenhouses', 'Greenhouse gases in the atmosphere trap heat, warming the Earth', 'The ozone layer blocking UV light', 'Plants releasing oxygen'],
            answer: 1,
            explanation: 'Greenhouse gases (CO2, methane, water vapour) in the atmosphere absorb and re-emit infrared radiation, trapping heat and keeping the Earth warm enough to support life.'
          },
          {
            q: 'Which gas is the main contributor to enhanced (human-caused) global warming?',
            options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
            answer: 2,
            explanation: 'Carbon dioxide from burning fossil fuels is the main contributor to the enhanced greenhouse effect and global warming.'
          },
          {
            q: 'What are potential consequences of global warming?',
            options: ['Only positive effects', 'Rising sea levels, extreme weather events, habitat loss, and species extinction', 'Decreased rainfall everywhere', 'Lower sea levels'],
            answer: 1,
            explanation: 'Global warming can cause ice caps to melt (rising sea levels), more extreme weather, changes in habitats, shifts in species distribution, and increased extinction rates.'
          },
          {
            q: 'What is land use change and how does it affect biodiversity?',
            options: ['It has no effect', 'Converting natural habitats for farming, housing, or industry reduces habitats and species diversity', 'It always increases biodiversity', 'It only affects aquatic organisms'],
            answer: 1,
            explanation: 'Converting natural habitats (forests, wetlands) for agriculture, urban development, or industry destroys ecosystems and reduces biodiversity.'
          },
          {
            q: 'How does pollution affect biodiversity?',
            options: ['Pollution has no effect', 'Pollution contaminates water, air, and land, harming organisms and reducing species diversity', 'Pollution increases biodiversity', 'Pollution only affects humans'],
            answer: 1,
            explanation: 'Pollution (air, water, and land) can poison organisms, destroy habitats, cause eutrophication, and reduce biodiversity.'
          },
          {
            q: 'What is eutrophication?',
            options: ['A type of disease', 'Excessive nutrient enrichment (from fertilisers) in water, leading to algal blooms and oxygen depletion', 'A method of farming', 'A type of pollution from cars'],
            answer: 1,
            explanation: 'Eutrophication occurs when excess nitrates/phosphates run off into waterways, causing algal blooms. When algae die and decompose, bacteria use up oxygen, killing aquatic organisms.'
          },
          {
            q: 'How can humans maintain biodiversity?',
            options: ['By increasing pollution', 'By breeding programmes, seed banks, wildlife reserves, and habitat restoration', 'By building more cities', 'Biodiversity cannot be maintained'],
            answer: 1,
            explanation: 'Strategies include creating nature reserves, captive breeding programmes, seed banks (storing seeds), reforestation, hedgerow maintenance, and reducing pollution.'
          },
          {
            q: 'What is a seed bank?',
            options: ['A bank that sells seeds', 'A facility that stores seeds from a wide range of plant species to preserve genetic diversity', 'A type of garden', 'A greenhouse'],
            answer: 1,
            explanation: 'Seed banks store seeds from many plant species in controlled conditions, preserving genetic diversity and allowing species to be reintroduced if they become extinct in the wild.'
          },
          {
            q: 'What does sustainable development mean?',
            options: ['Using resources as fast as possible', 'Meeting the needs of the present without compromising the ability of future generations to meet their needs', 'Stopping all development', 'Only using renewable energy'],
            answer: 1,
            explanation: 'Sustainable development means using resources responsibly to meet current needs while ensuring enough resources remain for future generations.'
          },
          {
            q: 'How does peat bog destruction affect the atmosphere?',
            options: ['It has no effect', 'Peat stores carbon; when peat bogs are destroyed, CO2 is released into the atmosphere', 'It releases oxygen', 'It reduces methane levels'],
            answer: 1,
            explanation: 'Peat bogs are important carbon stores. When peat is drained or burned (for compost or fuel), the stored carbon is released as CO2, contributing to global warming.'
          },
          {
            q: 'Which programme helps maintain biodiversity by protecting endangered species?',
            options: ['Intensive farming', 'Captive breeding and reintroduction programmes', 'Deforestation', 'Urbanisation'],
            answer: 1,
            explanation: 'Captive breeding programmes breed endangered species in zoos or wildlife centres, with the aim of reintroducing them into their natural habitats.'
          },
          {
            q: 'Acid rain is caused by:',
            options: ['Carbon dioxide only', 'Sulfur dioxide and nitrogen oxides dissolving in rainwater', 'Oxygen dissolving in rainwater', 'Methane in the atmosphere'],
            answer: 1,
            explanation: 'Burning fossil fuels releases sulfur dioxide and nitrogen oxides, which dissolve in rainwater to form sulfuric and nitric acids, producing acid rain.'
          },
          {
            q: 'How does acid rain affect ecosystems?',
            options: ['It has no effect', 'It damages leaves, acidifies soils and lakes, and kills aquatic organisms', 'It helps plants grow', 'It only affects buildings'],
            answer: 1,
            explanation: 'Acid rain damages plant leaves, leaches minerals from soil, acidifies rivers and lakes (killing fish and other aquatic life), and erodes buildings and statues.'
          },
          {
            q: 'What is the impact of introducing non-native species to an ecosystem?',
            options: ['Always beneficial', 'They can outcompete native species, reducing biodiversity', 'No impact', 'They always die out'],
            answer: 1,
            explanation: 'Non-native (invasive) species can outcompete native species for resources, prey on native species, or introduce diseases, reducing biodiversity.'
          },
          {
            q: 'Waste management strategies to reduce environmental impact include:',
            options: ['Burning all waste', 'Reducing, reusing, and recycling materials', 'Dumping waste in oceans', 'Producing more packaging'],
            answer: 1,
            explanation: 'Reducing waste production, reusing materials, and recycling resources helps conserve resources, reduce pollution, and minimise landfill use.'
          }
        ]
      },
      {
        topic: 'Decomposition & Carbon Cycle',
        questions: [
          {
            q: 'What are decomposers?',
            options: ['Organisms that photosynthesise', 'Microorganisms (bacteria and fungi) that break down dead organic matter', 'Animals that eat other animals', 'Plants that absorb minerals'],
            answer: 1,
            explanation: 'Decomposers are bacteria and fungi that break down dead organisms and waste products, recycling nutrients back into the ecosystem.'
          },
          {
            q: 'Why is decomposition important for ecosystems?',
            options: ['It produces oxygen', 'It recycles nutrients and minerals back into the soil for plants to use', 'It creates fossils', 'It increases pollution'],
            answer: 1,
            explanation: 'Decomposition returns essential nutrients (mineral ions) to the soil, making them available for plants to absorb and use for growth, completing nutrient cycles.'
          },
          {
            q: 'Which conditions increase the rate of decomposition?',
            options: ['Cold temperatures and dry conditions', 'Warm temperatures, moisture, and oxygen (aerobic conditions)', 'Freezing temperatures', 'Complete darkness only'],
            answer: 1,
            explanation: 'Decomposers work fastest in warm, moist conditions with plenty of oxygen, as these conditions are optimal for enzyme activity and microbial growth.'
          },
          {
            q: 'A student investigates decomposition of milk by measuring pH change. Why does the pH decrease?',
            options: ['Water evaporates', 'Decomposing bacteria produce acidic waste products', 'Milk naturally becomes alkaline', 'The temperature drops'],
            answer: 1,
            explanation: 'Bacteria decompose the lactose in milk, producing lactic acid as a waste product, which lowers the pH (makes it more acidic).'
          },
          {
            q: 'In the carbon cycle, how does carbon enter the atmosphere?',
            options: ['Only through photosynthesis', 'Through respiration, combustion, and decomposition', 'Only through rainfall', 'Carbon cannot enter the atmosphere'],
            answer: 1,
            explanation: 'Carbon enters the atmosphere as CO2 through respiration (by all living organisms), combustion (burning fossil fuels/wood), and decomposition (decay of dead organisms).'
          },
          {
            q: 'In the carbon cycle, how is carbon removed from the atmosphere?',
            options: ['By respiration', 'By photosynthesis (plants absorb CO2)', 'By combustion', 'By decomposition'],
            answer: 1,
            explanation: 'Photosynthesis removes CO2 from the atmosphere — plants use it with water and light energy to produce glucose, incorporating carbon into organic molecules.'
          },
          {
            q: 'What role do decomposers play in the carbon cycle?',
            options: ['They absorb CO2 from the atmosphere', 'They break down dead organisms, releasing CO2 back into the atmosphere through respiration', 'They produce oxygen', 'They have no role in the carbon cycle'],
            answer: 1,
            explanation: 'Decomposers break down dead organic matter and respire, releasing carbon dioxide back into the atmosphere, completing the carbon cycle.'
          },
          {
            q: 'Fossil fuels were formed from:',
            options: ['Volcanic rock', 'Dead organisms that were buried and compressed over millions of years', 'Atmospheric gases', 'Water and minerals'],
            answer: 1,
            explanation: 'Fossil fuels (coal, oil, gas) formed from the remains of dead organisms that were buried millions of years ago and subjected to heat and pressure.'
          },
          {
            q: 'How does burning fossil fuels affect the carbon cycle?',
            options: ['It has no effect', 'It releases carbon stored for millions of years as CO2, increasing atmospheric CO2 levels', 'It removes CO2 from the atmosphere', 'It produces oxygen'],
            answer: 1,
            explanation: 'Combustion of fossil fuels releases carbon that was locked away for millions of years, adding extra CO2 to the atmosphere faster than photosynthesis can remove it.'
          },
          {
            q: 'What is compost?',
            options: ['A type of fertiliser made from chemicals', 'Decomposed organic matter used to improve soil', 'A type of fossil fuel', 'Dried animal waste only'],
            answer: 1,
            explanation: 'Compost is made from decomposed garden and food waste. Microorganisms break down the organic matter, producing a nutrient-rich material for improving soil.'
          },
          {
            q: 'Which conditions would slow down composting?',
            options: ['Warm temperature and moisture', 'Cold temperature and lack of oxygen', 'Turning the compost heap regularly', 'Adding food waste'],
            answer: 1,
            explanation: 'Cold temperatures slow enzyme activity in decomposers, and anaerobic conditions (lack of oxygen) prevent aerobic decomposition, slowing the composting process.'
          },
          {
            q: 'Why do gardeners turn compost heaps?',
            options: ['To make them look tidy', 'To introduce oxygen for aerobic decomposition and speed up the process', 'To remove nutrients', 'To cool the compost down'],
            answer: 1,
            explanation: 'Turning the compost introduces oxygen, promoting aerobic decomposition by microorganisms, which is faster than anaerobic decomposition.'
          },
          {
            q: 'In the carbon cycle, carbon is passed from producers to consumers by:',
            options: ['Respiration', 'Feeding (eating)', 'Photosynthesis', 'Decomposition'],
            answer: 1,
            explanation: 'Carbon passes from producers (plants) to primary consumers (herbivores) and then to secondary consumers (carnivores) through feeding.'
          },
          {
            q: 'Which process returns carbon to the atmosphere but does NOT involve living organisms?',
            options: ['Respiration', 'Photosynthesis', 'Combustion (burning)', 'Decomposition'],
            answer: 2,
            explanation: 'Combustion (burning fossil fuels or wood) releases CO2 into the atmosphere without requiring living organisms, unlike respiration and decomposition.'
          },
          {
            q: 'What is the water cycle?',
            options: ['The flow of water through plants only', 'The continuous movement of water between the atmosphere, land, and oceans through evaporation, condensation, and precipitation', 'Water moving through pipes', 'Osmosis in cells'],
            answer: 1,
            explanation: 'The water cycle describes the continuous movement of water through evaporation, transpiration, condensation, precipitation, and collection in rivers and oceans.'
          },
          {
            q: 'Why is the decay of dead organisms described as a natural recycling process?',
            options: ['It produces new organisms', 'It breaks down organic matter and returns nutrients to the ecosystem for reuse by other organisms', 'It creates fossil fuels', 'It purifies water'],
            answer: 1,
            explanation: 'Decay returns essential elements (carbon, nitrogen, minerals) from dead organisms back to the soil and atmosphere, where they can be used again by living organisms.'
          },
          {
            q: 'Anaerobic decomposition produces:',
            options: ['Only carbon dioxide', 'Methane and other gases', 'Oxygen', 'Nitrogen only'],
            answer: 1,
            explanation: 'Anaerobic decomposition (without oxygen) produces methane, which is a potent greenhouse gas. This occurs in landfill sites and waterlogged soils.'
          },
          {
            q: 'In an experiment on decomposition, bags of leaves are buried in soil. After 6 months, the leaves in the warm, moist location have decomposed more than those in the cold, dry location. What conclusion can be drawn?',
            options: ['Temperature and moisture have no effect', 'Warmer temperatures and greater moisture increase the rate of decomposition', 'Only temperature matters', 'Cold conditions speed up decomposition'],
            answer: 1,
            explanation: 'The results show that warm, moist conditions increase the rate of decomposition, as these conditions are optimal for the activity of decomposer microorganisms.'
          },
          {
            q: 'Which organisms are the main decomposers in an ecosystem?',
            options: ['Plants and animals', 'Bacteria and fungi', 'Viruses and protists', 'Insects only'],
            answer: 1,
            explanation: 'Bacteria and fungi are the primary decomposers. They secrete enzymes onto dead organic matter, digesting it externally and absorbing the nutrients (saprotrophic nutrition).'
          },
          {
            q: 'How do humans affect the carbon cycle?',
            options: ['They have no effect', 'By burning fossil fuels and deforestation, increasing atmospheric CO2 faster than natural processes can remove it', 'By increasing photosynthesis globally', 'By reducing respiration'],
            answer: 1,
            explanation: 'Humans increase atmospheric CO2 by burning fossil fuels (releasing stored carbon) and deforestation (reducing CO2 absorption), contributing to the enhanced greenhouse effect.'
          }
        ]
      }
    ]
  }
];
