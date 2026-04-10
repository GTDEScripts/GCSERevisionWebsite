// ══════ COMPUTER SCIENCE: Topic Notes (OCR J277) ══════

const COMP_SCI_DATA = [
  {
    section: 'Component 01: Computer Systems',
    icon: '💻',
    color: '#1E40AF',
    topics: [
      {
        ref: '1.1',
        title: '1.1 Systems Architecture',
        points: [
          'Von Neumann architecture: the standard model of computer design. CPU, memory, and I/O devices connected by buses. Programs and data stored in the same memory',
          'CPU (Central Processing Unit): executes instructions. Contains the Control Unit (CU), Arithmetic Logic Unit (ALU), and registers',
          'Control Unit (CU): fetches, decodes, and coordinates execution of instructions. Sends control signals to other components',
          'ALU (Arithmetic Logic Unit): performs arithmetic (+, −, ×, ÷) and logical (AND, OR, NOT, XOR) operations, and comparisons',
          'Registers: ultra-fast temporary storage inside the CPU. Key registers: Program Counter (PC — holds address of next instruction), Accumulator (ACC — holds result of current calculation), Memory Address Register (MAR — holds address to read/write), Memory Data Register (MDR — holds data being transferred)',
          'Fetch-Decode-Execute cycle: (1) FETCH instruction from memory into MDR, update PC. (2) DECODE instruction in CU. (3) EXECUTE the operation using ALU/CU. Repeats billions of times per second',
          'Cache: ultra-fast memory between CPU and RAM. L1 (smallest, fastest, inside CPU), L2, L3. Stores recently/frequently used data. Reduces slow RAM access',
          'CPU performance factors: clock speed (GHz — cycles per second, more = faster), number of cores (more = parallel tasks), cache size (more = fewer RAM accesses)',
          'Clock speed: measured in GHz. 3GHz = 3 billion cycles per second. Higher clock speed generally means faster execution',
          'Multiple cores: dual-core, quad-core, octa-core. Each core is an independent processor. Allows true parallel processing of multiple tasks simultaneously',
          'Embedded systems: computers built into specific devices (washing machines, cars, medical devices). Run dedicated software, limited inputs/outputs, often real-time operating requirements'
        ],
        tip: 'Know the Fetch-Decode-Execute cycle in order. Know what each register stores. Clock speed, cores, and cache size all improve CPU performance — know WHY each one does.',
        example: 'Executing "ADD 5": PC holds address of instruction → fetch to MDR → decode in CU → ALU adds 5 to accumulator value → result stored back in accumulator → PC incremented to next instruction.'
      },
      {
        ref: '1.2',
        title: '1.2 Memory and Storage',
        points: [
          'Primary storage: directly accessible by the CPU. Includes RAM and ROM. Fast but limited capacity',
          'RAM (Random Access Memory): volatile (loses data when power off). Stores currently running programs and data. Read/write. Capacity measured in GB. More RAM = more programs running simultaneously',
          'ROM (Read-Only Memory): non-volatile (keeps data without power). Pre-programmed — usually contains firmware/BIOS. Read only during normal operation (some modern ROM can be updated)',
          'BIOS/UEFI: firmware stored in ROM. First program to run at startup. Checks hardware, loads bootloader, starts OS',
          'Virtual memory: area of secondary storage (hard drive) used as extension of RAM when RAM is full. Much slower than RAM — leads to poor performance if overused',
          'Secondary storage: non-volatile, keeps data permanently. Slower than primary storage but much larger capacity',
          'HDD (Hard Disk Drive): spinning magnetic platters with read/write heads. Non-volatile. Large capacity (1–4TB+), cheap per GB. Slower due to mechanical parts. Fragile (moving parts)',
          'SSD (Solid State Drive): flash memory chips, no moving parts. Non-volatile. Faster than HDD (10–30× read speed). More expensive per GB. More durable. Quieter',
          'Optical storage: CD (650MB), DVD (4.7GB), Blu-ray (25GB). Laser reads pits/lands on reflective disc. Slow, portable, durable for archival. Used for distributing software/media',
          'Flash/USB drives: portable flash memory. Non-volatile. Convenient for file transfer. Capacity 8GB–1TB',
          'Cloud storage: data stored on remote servers via internet. Accessible from any device. Advantages: no physical storage needed, automatic backup, scalable, sharable. Disadvantages: requires internet, privacy/security concerns, ongoing cost',
          'Units of storage: bit (0 or 1), byte (8 bits), kilobyte KB (1024 bytes), megabyte MB (1024 KB), gigabyte GB (1024 MB), terabyte TB (1024 GB)',
          'Compression: reduces file size. Lossless (original perfectly recoverable — ZIP, PNG, FLAC). Lossy (some data permanently discarded — JPEG, MP3, H.264). Lossy gives smaller files but cannot be reversed'
        ],
        tip: 'RAM = volatile, fast, primary. ROM = non-volatile, read-only, firmware. HDD = magnetic, slow, cheap, large. SSD = flash, fast, expensive. Cloud = remote, needs internet. Know all storage types and their trade-offs.',
        example: 'Laptop with 8GB RAM running too many apps: OS uses virtual memory (space on SSD pretending to be RAM). Performance drops noticeably because SSD is much slower than RAM. Closing apps frees RAM, performance improves.'
      },
      {
        ref: '1.3',
        title: '1.3 Computer Networks, Connections and Protocols',
        points: [
          'Network: two or more computers connected to share data and resources. Advantages: share files/printers, communication, shared internet, centralised backup',
          'LAN (Local Area Network): small geographical area (one building, campus). High speed, low latency. Owned and managed by one organisation',
          'WAN (Wide Area Network): large geographical area (cities, countries). Uses leased telecommunications lines. Internet is the largest WAN',
          'Wired connections: Ethernet (twisted-pair copper cable — Cat5e, Cat6). Reliable, fast, secure. Requires physical cable installation',
          'Wireless connections: WiFi (IEEE 802.11 standards). Convenient, mobile. Affected by distance, walls, interference. Less secure than wired by default',
          'Network hardware: switch (connects devices in a LAN, sends data only to intended recipient), router (connects different networks, e.g., home LAN to internet, assigns IP addresses), wireless access point (WAP, extends WiFi coverage), NIC (Network Interface Card — hardware in device enabling network connection)',
          'Network topologies: Star (all devices connect to central switch — most common in LANs; failure of one device doesn\'t affect others; central switch failure affects all), Mesh (every device connects to every other — very resilient but expensive; used in WANs), Bus (all devices on single cable — old, collision-prone)',
          'IP address: unique identifier for device on a network. IPv4: 32-bit dotted decimal (192.168.1.1). IPv6: 128-bit hexadecimal (newer, more addresses). Used for routing data across networks',
          'MAC address: unique hardware identifier built into NIC (e.g., 00:1A:2B:3C:4D:5E). Used within a LAN to identify devices. Cannot be changed (permanently assigned)',
          'DNS (Domain Name System): translates domain names (www.bbc.co.uk) to IP addresses. Removes need to remember IP addresses',
          'Protocols: agreed rules for communication. TCP/IP (Transmission Control Protocol/Internet Protocol — reliable, ensures delivery, used for web/email), HTTP (web pages), HTTPS (encrypted HTTP), FTP (file transfer), SMTP/IMAP (email)',
          'TCP vs UDP: TCP = reliable, ordered, acknowledgement of receipt (web browsing, email). UDP = faster, no guarantee of delivery (video streaming, gaming, VoIP — speed more important than perfection)',
          'Packet switching: data split into small packets, each sent independently across network, reassembled at destination. Allows efficient use of network, packets can take different routes'
        ],
        tip: 'Star topology is the most common LAN topology — know its advantages (fault isolation) and disadvantage (central switch dependency). Know the difference between IP address (logical, routing) and MAC address (physical, local).',
        example: 'Home network: router connects LAN to internet. WiFi access point lets devices connect wirelessly. Each device has MAC address (hardware) and gets IP address from router via DHCP. When you visit google.com, DNS resolves to IP address, packets routed via TCP/IP.'
      },
      {
        ref: '1.4',
        title: '1.4 Network Security',
        points: [
          'Threats to networks: malware, phishing, brute force attacks, denial of service (DoS), man-in-the-middle attacks, SQL injection, social engineering',
          'Malware: malicious software designed to harm systems. Types: virus (attaches to files, spreads when file shared), worm (self-replicates across network without user action), trojan (disguised as legitimate software), ransomware (encrypts files, demands payment), spyware (secretly monitors activity)',
          'Phishing: fraudulent emails/messages appearing to be from trusted sources. Goal: trick user into revealing credentials or clicking malicious link. Spear phishing = targeted at specific individual',
          'Brute force attack: automated attempt of all possible password combinations. Mitigated by: strong passwords, account lockout after failed attempts, two-factor authentication',
          'Denial of Service (DoS): flooding server with requests to make it unavailable. DDoS (Distributed DoS): using many compromised computers simultaneously. Mitigated by: traffic filtering, content delivery networks (CDNs)',
          'Man-in-the-Middle (MitM): attacker intercepts communication between two parties, potentially reading or altering it. Prevented by encryption (HTTPS/TLS)',
          'SQL injection: inserting malicious SQL code into input fields to manipulate database queries. Example: entering "OR 1=1" to bypass login. Prevented by: input validation, parameterised queries',
          'Social engineering: manipulating people rather than systems. Pretexting (false scenario), baiting (USB drive left in car park), vishing (phone phishing)',
          'Network security measures: firewalls (filter incoming/outgoing traffic by rules — block unauthorised access), encryption (scrambles data so unreadable without key), strong passwords (long, mixed, unique), two-factor authentication (2FA — requires second form of verification), anti-malware software (detects/removes threats), physical security (server rooms locked, devices secured)',
          'Access control: user accounts with appropriate permissions. Principle of least privilege — users only access what they need. Admin accounts separate from everyday accounts',
          'HTTPS and SSL/TLS: encrypts data between browser and server. Padlock icon indicates HTTPS. Protects against eavesdropping and MitM attacks on data in transit'
        ],
        tip: 'Know all malware types (virus/worm/trojan/ransomware/spyware) and what distinguishes them. Know countermeasures for each threat type. Firewall, encryption, strong passwords, 2FA are key defences.',
        example: 'Ransomware attack: user opens email attachment (trojan delivery mechanism), ransomware installs, encrypts all files, demands £500 in Bitcoin. Defence: regular backups (restore files without paying), email filtering, user education not to open unexpected attachments.'
      },
      {
        ref: '1.5',
        title: '1.5 Systems Software',
        points: [
          'Systems software: software that manages hardware and provides services to applications. Includes operating systems and utility software',
          'Operating system (OS): manages all hardware resources and provides interface for applications. Examples: Windows, macOS, Linux, Android, iOS',
          'OS functions: memory management (allocates RAM to processes, prevents interference), process management (multi-tasking via scheduling, switching between processes rapidly), file management (organises files in hierarchical directory structure, controls access), device management (device drivers allow OS to communicate with hardware), user interface (GUI — graphical, or CLI — command line)',
          'Memory management: OS allocates RAM to each running program. Virtual memory (part of HDD/SSD used as overflow). Ensures programs don\'t access each other\'s memory space',
          'Process scheduling: CPU time-sliced between processes. Round-robin (equal slices), priority-based (more important processes get more time). Creates illusion of simultaneous running',
          'File systems: FAT32 (old, max 4GB file size), NTFS (Windows — large files, permissions, encryption), ext4 (Linux), APFS (macOS). Controls how files are stored, retrieved, named',
          'Device drivers: software allowing OS to communicate with specific hardware (printer driver, graphics card driver, keyboard driver). Hardware-specific — wrong driver causes malfunction',
          'User interfaces: GUI (graphical — windows, icons, menus, pointer — intuitive but resource-heavy), CLI (command line — text commands — fast, powerful, requires knowledge), touch interface (smartphones, tablets)',
          'Utility software: programs performing maintenance tasks. Disk defragmenter (reorganises fragmented files for faster access — not needed for SSDs), anti-malware (scans, detects, removes malicious software), compression utility (ZIP files — reduces file size), backup software (creates copies of files), encryption software (protects data)',
          'Open source vs proprietary: open source (source code publicly available, free to modify/distribute — Linux, LibreOffice), proprietary (source code private, licenced — Windows, Microsoft Office)',
          'Updates and patches: OS regularly updated to fix security vulnerabilities, bugs, add features. Patch = small fix for specific vulnerability. Critical to install promptly'
        ],
        tip: 'Know the key functions of an OS: memory management, process scheduling, file management, device management, user interface. Know the difference between OS and utility software. Be able to give examples of each.',
        example: 'Running three applications: OS allocates RAM to each. If combined RAM exceeds physical RAM, OS uses virtual memory (slower). OS scheduler switches CPU between processes every few milliseconds — appears simultaneous to user.'
      },
      {
        ref: '1.6',
        title: '1.6 Ethical, Legal, Cultural and Environmental Impacts',
        points: [
          'Ethical issues: privacy (data collected without clear consent — cookies, tracking), surveillance (CCTV, facial recognition, government monitoring), bias in algorithms (AI decisions reflecting biased training data — recruitment algorithms discriminating), digital divide (unequal access to technology by income/geography/age)',
          'Privacy: personal data collected by apps, websites, governments. GDPR (General Data Protection Regulation — UK/EU law giving individuals rights over their data: right to access, correct, delete). Companies must state what data collected and why',
          'Surveillance technology: CCTV, facial recognition, location tracking, internet monitoring. Government use for security (justified as crime/terrorism prevention) vs civil liberties concerns (innocent people tracked)',
          'Artificial intelligence ethics: autonomous vehicles (who is responsible in an accident?), AI hiring tools (proven to discriminate), deepfakes (manipulated video/audio misleading public), AI in criminal justice (predictive policing bias)',
          'Digital divide: inequality in access to technology. Global divide (developing countries lack infrastructure), local divide (low-income families lack devices/internet), age divide (elderly less digitally literate). Affects education, employment, access to services',
          'Environmental impacts: energy consumption (data centres consume ~1% of global electricity), e-waste (discarded electronics contain toxic materials — cadmium, lead, mercury), manufacturing footprint (rare minerals mined for devices)',
          'Environmental positives: remote working reduces commuting emissions, smart energy grids improve efficiency, environmental monitoring via sensors, digital replacing physical (no printing)',
          'Legal issues: Computer Misuse Act 1990 (UK — criminalises: unauthorised access to computers, unauthorised access with intent to commit further offences, unauthorised modification of computer material — includes hacking, creating malware)',
          'Copyright and intellectual property: Copyright Act protects creative works (music, software, images). Illegal to copy/distribute without permission. Creative Commons licences allow sharing with conditions',
          'Data protection: Data Protection Act 2018 / GDPR. Eight principles: data must be fairly and lawfully processed, used only for stated purpose, adequate and relevant, accurate, not kept longer than necessary, processed in accordance with rights, secure, not transferred outside EEA without adequate protection',
          'Cultural impacts: social media\'s effect on society (echo chambers, mental health, political polarisation, cyberbullying), globalisation of culture via internet, remote working reshaping work-life boundaries'
        ],
        tip: 'Know the Computer Misuse Act (three offences), Data Protection Act principles, and GDPR basics. Be able to argue BOTH SIDES of ethical debates (surveillance for safety vs privacy; AI for efficiency vs bias).',
        example: 'Facial recognition debate: FOR — rapidly identifies wanted criminals, prevents terrorism, helps find missing persons. AGAINST — innocent people misidentified (higher error rate for darker skin tones), chills free speech/protest, normalises mass surveillance.'
      }
    ]
  },
  {
    section: 'Component 02: Computational Thinking, Algorithms & Programming',
    icon: '⌨️',
    color: '#DC2626',
    topics: [
      {
        ref: '2.1',
        title: '2.1 Algorithms',
        points: [
          'Algorithm: a precise, step-by-step set of instructions to solve a problem or perform a task. Must be: finite (terminates), unambiguous (each step clear), correct (produces right output)',
          'Computational thinking: four key skills. Decomposition (break large problem into smaller manageable sub-problems), Abstraction (remove irrelevant detail, focus on essential features), Algorithmic thinking (design step-by-step solution), Pattern recognition (identify similarities/trends)',
          'Abstraction example: designing a map — include roads, landmarks, but exclude exact tree positions, grass types. Include only what is needed for navigation',
          'Pseudocode: informal, structured language describing algorithm steps without syntax of a specific programming language. Used for planning. OCR uses its own pseudocode conventions',
          'Flowcharts: visual representation of algorithm. Symbols: oval (start/end), rectangle (process/instruction), diamond (decision/branch — yes/no), parallelogram (input/output)',
          'Linear search: checks each element sequentially until target found or list exhausted. Works on unsorted data. O(n) — up to n checks for n elements. Simple but slow for large datasets',
          'Binary search: requires sorted data. Repeatedly halves search space. Compare target to middle element — if equal, found; if smaller, search left half; if larger, search right half. O(log n) — very fast for large datasets',
          'Bubble sort: compare adjacent pairs, swap if wrong order. Repeat passes until no swaps occur. O(n²) — slow for large data. Simple to understand and implement',
          'Merge sort: divide-and-conquer. Split list in half repeatedly until single elements, then merge halves in sorted order. O(n log n) — much faster than bubble sort for large data',
          'Insertion sort: builds sorted list one element at a time by inserting each new element in correct position. Efficient for small/nearly-sorted data',
          'Trace tables: used to manually trace through an algorithm step by step, recording variable values at each stage. Essential for identifying logic errors and understanding algorithm behaviour',
          'Efficiency: O(n) notation describes how time/space scales with input size. O(1) constant, O(log n) logarithmic (binary search), O(n) linear (linear search), O(n²) quadratic (bubble sort). Better algorithms handle large data faster'
        ],
        tip: 'Know binary search vs linear search (sorted vs unsorted data, speed difference). Know bubble sort steps. Be able to trace through algorithms using trace tables. Decomposition and abstraction are key computational thinking skills examiners test.',
        example: 'Binary search for 42 in [2, 15, 27, 42, 58, 71, 89]: middle=42 — found in 1 step. For linear search: checks 2, 15, 27, 42 — found in 4 steps. For 1000 elements, binary search max 10 steps vs linear search max 1000 steps.'
      },
      {
        ref: '2.2',
        title: '2.2 Programming Fundamentals',
        points: [
          'Data types: integer (whole numbers — 5, -3, 0), real/float (decimal numbers — 3.14, -2.5), Boolean (true/false — only two values), string (text/characters — "hello"), character (single character — \'a\')',
          'Variables: named memory locations storing a value. Must be declared before use in some languages. Can change during program. Example: score = 0; score = score + 10',
          'Constants: named values that cannot change during execution. Defined once. Example: TAX_RATE = 0.20. Makes code readable and maintainable',
          'Assignment: storing a value in a variable. score ← 0 (OCR pseudocode uses ←). score = 0 (most languages use =)',
          'Input/output: INPUT name — takes data from user. PRINT/OUTPUT name — displays data to user',
          'Arithmetic operators: + (add), - (subtract), * (multiply), / (divide), ^ (power/exponent), MOD (modulus/remainder — 17 MOD 5 = 2), DIV (integer division — 17 DIV 5 = 3)',
          'Comparison operators: == (equal to), != (not equal), > (greater than), < (less than), >= (greater or equal), <= (less or equal). Return Boolean result',
          'Logical operators: AND (both conditions true), OR (at least one true), NOT (negates). Example: IF age >= 18 AND hasID THEN...',
          'Selection (IF statements): IF condition THEN ... ENDIF. IF ... THEN ... ELSE ... ENDIF. IF ... THEN ... ELSEIF ... ELSE ... ENDIF. Executes different code based on condition',
          'Count-controlled iteration: FOR loop. FOR i ← 1 TO 10 ... NEXT i. Repeats fixed number of times. Used when number of iterations known in advance',
          'Condition-controlled iteration: WHILE condition DO ... ENDWHILE (check before). REPEAT ... UNTIL condition (check after, always runs at least once). Used when iterations not known in advance',
          'String operations: LEN("hello") = 5, SUBSTRING("hello", 2, 3) = "llo" (depends on language), string concatenation "hello" + " " + "world" = "hello world", UPPER/LOWER case conversion',
          'Arrays: ordered collection of elements, same data type, accessed by index. array[0] for first element (zero-indexed). Useful for storing multiple related values'
        ],
        tip: 'Know the difference between FOR loops (known iterations) and WHILE loops (condition-based). Know MOD and DIV operations. Be able to read and write OCR pseudocode. Data types must match operations — you cannot add integer to string directly.',
        example: 'FOR loop counting 1 to 10: FOR i ← 1 TO 10 / OUTPUT i / NEXT i. WHILE loop: WHILE password != "correct" / INPUT password / ENDWHILE. WHILE used because we don\'t know how many attempts user needs.'
      },
      {
        ref: '2.3',
        title: '2.3 Producing Robust Programs',
        points: [
          'Robust program: handles unexpected inputs gracefully without crashing, produces correct output for all valid inputs, handles edge cases',
          'Defensive design: anticipate things that could go wrong. Validate all inputs, handle errors, include appropriate authentication, plan for edge cases',
          'Input validation: checking user input meets requirements before processing. Type check (is it the right data type?), range check (is it within acceptable values? e.g., age 0–120), presence check (has something been entered?), format check (e.g., email must contain @), length check (password at least 8 characters)',
          'Input sanitisation: cleaning input to remove/escape dangerous characters (e.g., removing SQL injection characters, removing HTML from user-submitted text)',
          'Authentication: verifying identity. Password validation, two-factor authentication, session tokens. Ensures only authorised users access features',
          'Maintainability: code others (and you, later) can understand and modify. Key practices: meaningful variable/function names (score not s), comments explaining complex logic, consistent indentation, modular design (functions/procedures)',
          'Syntax error: code breaks language rules (missing bracket, typo in keyword). Caught by the compiler/interpreter before running. Program will not run at all with syntax errors',
          'Logic error: code runs but produces wrong output. Algorithm is incorrect. Harder to find — requires testing. Example: using > instead of >=',
          'Runtime error: program crashes during execution. Examples: division by zero, accessing array index out of bounds, infinite loop. Often caused by unexpected inputs',
          'Testing: systematic process of verifying program correctness. Normal data (valid typical inputs — should work), boundary/edge data (extreme valid values — at the limit), erroneous data (invalid inputs — program should reject or handle gracefully)',
          'Test tables: document test data, expected output, actual output, pass/fail. Evidence program has been tested thoroughly',
          'Iterative testing: test as you build, not just at the end. Fix errors as they arise. Prevents accumulation of interconnected bugs',
          'Trace tables: manually simulate algorithm execution, recording all variable values at each step. Identifies logic errors without running the program'
        ],
        tip: 'Know THREE types of errors: syntax (won\'t run), logic (wrong output), runtime (crashes during execution). Know THREE types of test data: normal, boundary, erroneous. Examiners often ask you to complete a trace table.',
        example: 'Input validation for age: type check (is it a number?), range check (is it 0–150?), presence check (has user entered something?). Test data: normal = 25 (valid), boundary = 0 and 150 (edge of range), erroneous = "abc" and -5 (invalid).'
      },
      {
        ref: '2.4',
        title: '2.4 Boolean Logic',
        points: [
          'Boolean logic: based on two values — TRUE (1) and FALSE (0). Named after mathematician George Boole. Foundation of all digital circuits',
          'Logic gates: electronic components performing Boolean operations. Key gates: AND, OR, NOT, NAND, NOR, XOR',
          'AND gate: output is TRUE only if ALL inputs are TRUE. A AND B = TRUE only when A=TRUE AND B=TRUE. Truth table: TT→T, TF→F, FT→F, FF→F',
          'OR gate: output is TRUE if AT LEAST ONE input is TRUE. A OR B = FALSE only when both FALSE. Truth table: TT→T, TF→T, FT→T, FF→F',
          'NOT gate: inverts single input. NOT TRUE = FALSE, NOT FALSE = TRUE. Also called inverter',
          'NAND gate: NOT AND — output is FALSE only when ALL inputs TRUE (opposite of AND). Universal gate — can replicate any other gate',
          'NOR gate: NOT OR — output is TRUE only when ALL inputs FALSE (opposite of OR)',
          'XOR gate (Exclusive OR): output TRUE when inputs are DIFFERENT. TT→F, TF→T, FT→T, FF→F',
          'Truth tables: systematic table showing output for all possible input combinations. Two inputs = 4 rows (TT, TF, FT, FF). Three inputs = 8 rows',
          'Boolean expressions: written using operators. A AND B, NOT (A OR B), (A AND B) OR (NOT C). Brackets change order of operations',
          'Drawing logic gate diagrams: gates represented by standard symbols. Inputs as lines entering gate, output as line leaving gate. Circuits combine multiple gates',
          'Simplification: Boolean algebra can simplify expressions (De Morgan\'s laws: NOT(A AND B) = NOT A OR NOT B; NOT(A OR B) = NOT A AND NOT B)',
          'Real-world application: logic gates implemented in transistors. CPUs contain billions of gates. ALU performs calculations using combinations of AND, OR, NOT gates'
        ],
        tip: 'Memorise AND (all true → true), OR (at least one true → true), NOT (flip). Be able to complete truth tables and draw gate diagrams from Boolean expressions. XOR = inputs are different.',
        example: 'Boolean expression: (A AND B) OR NOT C. If A=TRUE, B=FALSE, C=TRUE: A AND B = FALSE. NOT C = FALSE. FALSE OR FALSE = FALSE. If A=TRUE, B=TRUE, C=FALSE: A AND B = TRUE. NOT C = TRUE. TRUE OR TRUE = TRUE.'
      },
      {
        ref: '2.5',
        title: '2.5 Programming Languages and IDEs',
        points: [
          'High-level languages (HLL): closer to human language, easier to read and write, portable (run on different hardware). Examples: Python, Java, C#, JavaScript. Require translation before execution',
          'Low-level languages: closer to machine code, harder to read. Assembly language (uses mnemonics like MOV, ADD), machine code (binary — 0s and 1s only). Faster, more control over hardware. Used in embedded systems, device drivers',
          'Machine code: the binary instructions the CPU directly executes. All programs ultimately run as machine code',
          'Assembly language: one step above machine code. Mnemonics replace binary (ADD instead of 10000011). Assembler translates to machine code. Still hardware-specific',
          'Translator: converts source code (human-written) to executable machine code. Three types: compiler, interpreter, assembler',
          'Compiler: translates entire HLL program to machine code BEFORE execution. Creates standalone executable. Advantages: fast execution (already translated), source code not needed to run. Disadvantages: errors found only after compilation, platform-specific compiled output',
          'Interpreter: translates HLL program line-by-line DURING execution. Advantages: easier debugging (errors reported immediately on specific line), platform-independent (interpreter handles differences). Disadvantages: slower execution (translating each time run), source code needed to distribute',
          'Assembler: translates assembly language to machine code. One-to-one relationship between assembly instructions and machine code',
          'IDE (Integrated Development Environment): software providing tools for writing, running, and debugging programs. Examples: PyCharm, Visual Studio, Eclipse',
          'IDE features: code editor (with syntax highlighting — colours keywords, errors), run environment (execute program within IDE), debugger (set breakpoints, step through code, inspect variables), error diagnostics (highlights errors with descriptions), auto-completion (suggests completions), version control integration',
          'Breakpoints: pause execution at specific line during debugging. Allows inspection of variable values at that moment. Essential for finding logic errors',
          'Compiled languages: C, C++, Java (compiles to bytecode). Interpreted languages: Python, JavaScript, Ruby'
        ],
        tip: 'Compiler translates ALL code before running (fast execution, errors after compilation). Interpreter translates line-by-line during running (slow execution, immediate error feedback). Know IDE features and what each one does.',
        example: 'Python (interpreted): run script → interpreter reads line 1, translates, executes → reads line 2... If error on line 50, lines 1–49 already ran. C++ (compiled): write code → compiler translates all → produces .exe → run executable. Compiler errors found before running.'
      }
    ]
  }
];
