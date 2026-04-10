// ══════ COMPUTER SCIENCE: Topic Notes (OCR J277) ══════

const COMP_SCI_DATA = [
  {
    section: '1. Fundamentals of Computer Architecture',
    icon: '💻',
    color: '#1E40AF',
    topics: [
      {
        ref: '1.1',
        title: 'Hardware & The Processor',
        points: [
          'CPU (Central Processing Unit): executes instructions from programs. Control Unit (directs operations), ALU (Arithmetic Logic Unit, does calculations)',
          'Clock: synchronises operations, measured in GHz (billion cycles per second). Higher clock speed = faster execution',
          'Processor cores: modern CPUs have multiple cores for parallel processing. Dual-core, quad-core, etc.',
          'Cache: ultra-fast memory very close to CPU. L1 (smallest, fastest), L2, L3 (larger, slower but still fast). Stores frequently used data to avoid slow RAM access',
          'Registers: tiny ultra-fast memory inside CPU, holds current data being processed. Limited capacity (KB)',
          'Bus: data highway connecting components. Front-side bus (CPU-RAM), data bus (carries data), address bus (identifies memory locations)',
          'Von Neumann architecture: fetch-decode-execute cycle. Fetch instruction from memory, decode what it means, execute the operation'
        ],
        tip: 'Remember: CPU speed measured in GHz, caches store recent data to avoid slow RAM, buses carry data between components.',
        example: 'CPU executing loop: fetch "add 5 to variable", decode instruction, execute addition, store result in memory. Repeat millions of times per second.'
      },
      {
        ref: '1.2',
        title: 'Memory & Storage',
        points: [
          'RAM (Random Access Memory): volatile (loses data when powered off), fast, used for running programs. Capacity measured in GB',
          'Virtual memory: uses hard disk as extension of RAM. When RAM full, less-used data moved to disk. Slower than RAM but allows running larger programs',
          'ROM (Read-Only Memory): non-volatile, pre-loaded firmware. BIOS (Basic Input Output System) stored in ROM, executed on startup',
          'HDD (Hard Disk Drive): non-volatile storage, large capacity (1TB+), mechanical, slower. Spinning platters with read/write heads',
          'SSD (Solid State Drive): non-volatile, uses flash memory, no moving parts, much faster than HDD, more expensive',
          'Secondary storage: USB drives, SD cards, cloud storage. For backup and file transfer',
          'Storage hierarchy: registers (fastest, tiny) → cache → RAM → SSD → HDD → cloud (slowest, largest capacity)'
        ],
        tip: 'Volatile = loses data (RAM). Non-volatile = keeps data (HDD, SSD, ROM). Faster = smaller capacity.',
        example: 'Virtual memory: you run 20GB of applications on 8GB RAM. OS moves inactive 12GB to hard disk, freeing up RAM for active applications. Slower, but works.'
      },
      {
        ref: '1.3',
        title: 'Secondary Storage, Input/Output Devices',
        points: [
          'Input devices: capture data (keyboard, mouse, scanner, camera, microphone, sensors). Convert real-world data to digital',
          'Output devices: display/produce data (monitor, speakers, printer, headphones, projector)',
          'Optical storage: CD (650MB), DVD (4.7GB), Blu-ray (25GB). Read by laser. Slower than HDD but durable (100+ years if stored properly)',
          'Cloud storage: data stored on remote servers (Google Drive, OneDrive, iCloud). Advantages: accessible anywhere, backed up, scales easily. Disadvantage: internet dependent, privacy concerns',
          'Network storage: NAS (Network Attached Storage) or file servers on local network. For sharing files within organisation',
          'Compression: reduces file size. Lossless (no data lost, can restore exactly) vs lossy (some data lost, can\'t restore exactly). JPEG is lossy, PNG/ZIP are lossless'
        ],
        tip: 'Optical ≠ magnetic storage. Optical uses laser, magnetic uses magnetism. Different advantages.',
        example: 'Backing up: important files stored on HDD locally + uploaded to cloud. If HDD fails, cloud backup available. Redundancy ensures data safety.'
      }
    ]
  },
  {
    section: '2. Data Representation & Digital Systems',
    icon: '🔢',
    color: '#2563EB',
    topics: [
      {
        ref: '2.1',
        title: 'Binary, Hexadecimal & Data Representation',
        points: [
          'Binary: base-2 numbering (only 0 and 1). Computers use binary because electronic switches are on (1) or off (0)',
          'Bit: single binary digit (0 or 1). Byte: 8 bits',
          'Denary (decimal): base-10 numbering (0-9). Everyday numbering system',
          'Binary to denary conversion: 1101 = 1×8 + 1×4 + 0×2 + 1×1 = 13 (powers of 2: 8,4,2,1)',
          'Denary to binary: repeatedly divide by 2, remainders give binary. 13 ÷ 2 = 6 R 1, 6 ÷ 2 = 3 R 0, 3 ÷ 2 = 1 R 1, 1 ÷ 2 = 0 R 1 → 1101',
          'Hexadecimal (hex): base-16 (0-9, A-F). Used as shorthand for binary. 4 bits = 1 hex digit. Easier for humans to read than binary',
          'ASCII: character encoding, 1 byte per character. "A" = 65, "0" (digit) = 48',
          'Unicode: extended character set, supports multiple languages and symbols. UTF-8 (variable length, 1-4 bytes per character)'
        ],
        tip: 'Binary uses powers of 2 (1,2,4,8,16...). Hex uses powers of 16. Know conversions between denary, binary, hex.',
        example: 'Denary 255 = binary 11111111 = hex FF. Denary 16 = binary 10000 = hex 10.'
      },
      {
        ref: '2.2',
        title: 'Images, Sound, Video Data',
        points: [
          'Bitmap images: made of pixels (picture elements). Resolution: width × height pixels. Colour depth: bits per pixel. 24-bit = 16 million colours, 8-bit = 256 colours',
          'File size: pixels × colour depth. 1000×1000 image, 24-bit colour = 1,000,000 × 24 bits = 3MB (24,000,000 bits ÷ 8)',
          'Vector images: made of mathematical shapes (lines, curves, polygons). Scalable without quality loss, smaller file sizes for simple graphics',
          'Sampling: capturing sound by taking measurements at intervals (sampling rate). CD = 44.1kHz (44,100 samples per second)',
          'Bit depth (audio): 16-bit, 24-bit standard. More bits = higher quality but larger file',
          'Video: sequence of images (frames) per second (fps). 24/30/60 fps common. File size = frame size × colour depth × fps × duration',
          'Compression: reduces file size. Lossless (PNG, FLAC, ZIP) preserves all data. Lossy (JPEG, MP3, H.264) acceptable quality loss'
        ],
        tip: 'Bitmap resolution fixed (blurry if enlarged). Vector scalable. Colour depth affects colour accuracy. Sampling rate affects audio quality.',
        example: 'High-res photo: 4000×3000 pixels, 24-bit colour = 36MB. Compressed to JPEG = 2MB (lossy). Can\'t recover lost details.'
      },
      {
        ref: '2.3',
        title: 'Error Detection & Correction',
        points: [
          'Parity bit: extra bit added to data for error detection. Even parity: total 1s must be even. If received parity odd, error detected',
          'Check digit: calculated digit appended to data. Detects single errors. Example: ISBN check digit, barcode check digit',
          'Checksum: sum of all data bytes. Receiver recalculates; mismatch indicates error',
          'Error correction codes: Hamming code can detect AND correct single-bit errors. Redundancy added to allow recalculation',
          'Applications: communication (network packets), storage (hard drives, SSDs), QR codes, barcodes',
          'Redundancy: extra data added to detect/correct errors. Trade-off: larger file size but higher reliability'
        ],
        tip: 'Error detection finds errors (parity, checksum). Error correction fixes them (Hamming code). Detection simpler, correction needs more redundancy.',
        example: 'Network packet corrupted: parity bit indicates error detected, packet retransmitted. ISBN: bookstore scans, check digit verifies correct book scanned.'
      }
    ]
  },
  {
    section: '3. Programming & Algorithms',
    icon: '⌨️',
    color: '#DC2626',
    topics: [
      {
        ref: '3.1',
        title: 'Programming Fundamentals',
        points: [
          'Variables: named storage for data (int age = 25). Types: integer, float, string, boolean. Typing: strongly typed (specify type) vs weakly typed (type inferred)',
          'Data structures: Arrays (list of same type), Lists (dynamic arrays), Dictionaries/Maps (key-value pairs), Tuples (immutable ordered pairs)',
          'Operators: arithmetic (+, −, ×, ÷, %), comparison (==, !=, >, <), logical (AND, OR, NOT, XOR)',
          'Control flow: IF statements (conditional execution), WHILE loops (repeat while condition true), FOR loops (repeat fixed times)',
          'Functions: reusable code blocks. Parameters (inputs), return values (outputs). Avoid repeating code (DRY principle)',
          'Scope: where variables are accessible. Local (within function), global (everywhere). Avoid global variables (hard to debug)',
          'String operations: concatenation (joining strings), slicing (extracting part), length, upper/lower case'
        ],
        tip: 'Functions are key to clean code. Break large problems into smaller functions. DRY = Don\'t Repeat Yourself.',
        example: 'Function to check if number prime: pass number as parameter, return true/false. Call function from multiple places instead of repeating code.'
      },
      {
        ref: '3.2',
        title: 'Data Structures & Algorithms',
        points: [
          'Algorithms: step-by-step procedure to solve problem. Efficiency matters: O(n) linear vs O(n²) quadratic vs O(2ⁿ) exponential',
          'Sorting: arranging data in order. Bubble sort (simple, slow O(n²)), merge sort (fast O(n log n), divide-and-conquer), quicksort (fast average O(n log n))',
          'Searching: finding element. Linear search (check each element, O(n)), binary search (halve search space, O(log n), requires sorted data)',
          'Graph: nodes connected by edges. Traversal: depth-first (go deep), breadth-first (explore all neighbours first)',
          'Tree: special graph with parent-child hierarchy. Binary search tree: left child < parent < right child. Enables fast searching',
          'Big-O notation: describes algorithm complexity as data scales. O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) linearithmic, O(n²) quadratic, O(2ⁿ) exponential'
        ],
        tip: 'Better algorithm matters more than faster CPU. O(n log n) sorts beats O(n²) sorts even on slow computer with huge datasets.',
        example: 'Searching 1 million items: linear search ~500,000 checks average. Binary search ~20 checks. 25,000× faster with right algorithm.'
      },
      {
        ref: '3.3',
        title: 'Debugging, Testing & Problem Solving',
        points: [
          'Bug: error in code. Debugging: finding and fixing bugs. Techniques: breakpoints (pause execution), step through code, inspect variables',
          'Syntax errors: code structure wrong (missing semicolon, bracket). Caught by compiler/interpreter',
          'Logic errors: code runs but produces wrong results (algorithm wrong). Harder to find, require testing',
          'Runtime errors: crash during execution (division by zero, invalid index). Handled with error handling (try-catch blocks)',
          'Testing: unit tests (test individual functions), integration tests (test components together), system tests (test whole system)',
          'Test cases: systematic scenarios. Include normal cases (expected inputs), edge cases (boundary values), error cases (invalid inputs)',
          'Defensive programming: validate inputs, handle exceptions, leave comments explaining code'
        ],
        tip: 'Syntax errors prevent running. Logic errors run but give wrong answers (hardest to find). Write tests as you code.',
        example: 'Function sum([1,2,3]): should return 6. Test cases: empty list (0), single element (1), negatives (work correctly), very large numbers (overflow?).'
      }
    ]
  },
  {
    section: '4. Cyber Security & Networks',
    icon: '🔒',
    color: '#059669',
    topics: [
      {
        ref: '4.1',
        title: 'Network Fundamentals',
        points: [
          'LAN (Local Area Network): computers in small area (home, office) connected via Ethernet/WiFi. Fast, secure',
          'WAN (Wide Area Network): computers across large area (cities, countries) connected via internet. Internet is largest WAN',
          'IP address: identifies device on network. IPv4: 32-bit (192.168.1.1), IPv6: 128-bit (newer, more addresses)',
          'MAC address: identifies device on local network (network card). Used for ARP (mapping IP to MAC)',
          'DNS: Domain Name System. Translates domain names (google.com) to IP addresses (142.251.41.14)',
          'Protocols: agreed methods of communication. TCP/IP (reliable, all internet), UDP (fast, unreliable, video/gaming), HTTP/HTTPS (web)',
          'Bandwidth: data transfer rate (Mbps). Latency: delay (ms). Throughput: actual data rate considering congestion'
        ],
        tip: 'IP = internet address, MAC = local network address. DNS converts names to IPs. TCP reliable, UDP fast.',
        example: 'Visiting google.com: browser queries DNS ("what\'s IP for google.com?"), receives 142.251.41.14, establishes TCP connection, sends HTTP request.'
      },
      {
        ref: '4.2',
        title: 'Threats & Cyber Security',
        points: [
          'Malware: harmful software. Virus (replicates through files), worm (self-replicates, spreads via network), trojan (disguised as legitimate), ransomware (encrypts files, demands payment)',
          'Social engineering: manipulating people into security breaches. Phishing (fake emails), pretexting (false pretense), baiting (tempting downloads)',
          'Brute force: trying all password combinations. Mitigated by: strong passwords, rate limiting, account lockout',
          'SQL injection: inserting malicious SQL into input fields. Database returns sensitive data. Prevention: parameterised queries, input validation',
          'Denial of Service (DoS): flooding server with requests, making it unavailable. DDoS (distributed): many computers flooding from multiple sources',
          'Man-in-the-Middle (MITM): intercepting communication between two parties. HTTPS prevents by encrypting data',
          'Zero-day exploit: vulnerability unknown to vendor, attackers use before patch available. High-value targets for cybercriminals'
        ],
        tip: 'Malware software, phishing people, brute force passwords, injection code. Know how each works and defences.',
        example: 'Phishing attack: email pretends to be from bank ("confirm password"), user clicks link on fake site. Attacker captures credentials.'
      },
      {
        ref: '4.3',
        title: 'Encryption & Data Protection',
        points: [
          'Encryption: scrambles data into unreadable form using key. Symmetric (one key encrypts/decrypts, fast, key distribution problem) vs asymmetric (public/private key pair, slower, secure distribution)',
          'Caesar cipher: shift each letter by fixed amount (A→D, B→E). Easily broken (only 26 keys possible)',
          'RSA encryption: asymmetric, used widely. Public key encrypts, private key decrypts. Hard to break (based on large number factorisation)',
          'HTTPS: HTTP + encryption (TLS/SSL). Protects data from interception. Lock icon in browser indicates HTTPS',
          'Hashing: one-way function producing fixed-length hash. Used for passwords: database stores hash, not password. Even if database breached, passwords safe',
          'Salting: adding random data to password before hashing. Prevents rainbow table attacks (pre-computed hashes)',
          'Access control: authentication (who are you?, passwords/biometrics), authorisation (what are you allowed to do?, permissions)'
        ],
        tip: 'Symmetric = one key, asymmetric = public+private keys. Hashing one-way (can\'t decrypt). Encryption reversible (can decrypt with key).',
        example: 'Password: stored as hash (sha256("password123" + salt)). When logging in, hash entered password, compare to stored hash. Even hacker with password hash can\'t recover original password.'
      }
    ]
  }
];
