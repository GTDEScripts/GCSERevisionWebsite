const CS_QUIZ = [
  {
    section: "Computer Systems",
    topics: [
      {
        topic: "Hardware & Components",
        questions: [
          {
            q: "Explain the purpose of the CPU and how it executes instructions.",
            markScheme: [
              "CPU (Central Processing Unit) is the processor that controls all operations",
              "Executes instructions from the fetch-execute cycle",
              "Fetch: retrieve instruction from memory",
              "Execute: perform the operation and store result"
            ],
            maxMarks: 4,
            keywords: ["CPU", "processor", "fetch", "execute", "instructions", "memory", "operations"],
            modelAnswer: "The CPU (Central Processing Unit) is the main processor that controls all computer operations. It executes instructions through the fetch-execute cycle: the CPU fetches an instruction from memory, decodes what it means, executes the operation (add, compare, load, etc.), and stores the result back in memory or registers. This cycle repeats billions of times per second.",
            hint: "Describe the main stages of instruction execution."
          },
          {
            q: "Compare RAM and ROM. Explain why a computer needs both types of memory.",
            markScheme: [
              "RAM: random access, volatile (loses data when powered off)",
              "ROM: read-only, non-volatile (retains data when powered off)",
              "RAM: fast temporary storage for running programs and data",
              "ROM: stores bootstrap/BIOS code needed to start the computer"
            ],
            maxMarks: 4,
            keywords: ["RAM", "ROM", "volatile", "non-volatile", "temporary", "storage", "bootstrap"],
            modelAnswer: "RAM (Random Access Memory) is volatile—it loses its contents when the computer powers off. It's fast temporary storage for programs and data currently being used. ROM (Read-Only Memory) is non-volatile—it permanently stores the bootstrap code (BIOS) that initializes the computer when powered on. Computers need both: RAM for running programs, ROM for startup instructions.",
            hint: "Think about what happens when you turn off the computer."
          },
          {
            q: "Explain the difference between primary and secondary storage, with examples.",
            markScheme: [
              "Primary: fast, limited capacity (RAM), volatile—used by running programs",
              "Secondary: larger capacity, non-volatile—permanent storage",
              "Primary examples: RAM, cache, registers",
              "Secondary examples: hard drives, SSDs, USB drives, optical discs"
            ],
            maxMarks: 4,
            keywords: ["primary", "secondary", "storage", "volatile", "capacity", "permanent", "RAM"],
            modelAnswer: "Primary storage (RAM) is fast but volatile and limited in capacity—it temporarily holds programs and data being actively processed. Secondary storage (hard drives, SSDs) offers large permanent capacity but slower access speeds. Primary storage must be fast because the CPU needs rapid access; secondary storage provides permanent backup. Programs are loaded from secondary storage into primary RAM when needed.",
            hint: "Consider speed, permanence, and how each is used."
          }
        ]
      },
      {
        topic: "Software & Operating Systems",
        questions: [
          {
            q: "Explain the main functions of an operating system.",
            markScheme: [
              "Manage hardware resources (memory, processor, storage)",
              "Provide user interface for human interaction",
              "Run and manage applications",
              "Handle file storage and organization"
            ],
            maxMarks: 4,
            keywords: ["manage", "hardware", "resources", "interface", "applications", "file"],
            modelAnswer: "An operating system manages hardware resources by allocating memory, processor time, and storage to applications. It provides a user interface (command-line or graphical) for humans to interact with the computer. The OS loads and manages applications, allowing multitasking. It also handles file storage, organization, and retrieval, ensuring data is safely stored and retrieved.",
            hint: "Think of the OS as the intermediary between users/applications and hardware."
          },
          {
            q: "Describe how multitasking works in an operating system and explain its benefits.",
            markScheme: [
              "Multitasking: OS allocates small time slices to each running application",
              "CPU rapidly switches between tasks (context switching)",
              "Appears that multiple programs run simultaneously",
              "Improves productivity: user can work while background tasks run"
            ],
            maxMarks: 4,
            keywords: ["multitasking", "time slice", "context switching", "CPU", "simultaneous", "productivity"],
            modelAnswer: "An OS enables multitasking by giving each running application a small time slice (milliseconds) to execute. The CPU rapidly switches between applications in a process called context switching. While one application waits for input/disk access, another runs. This creates the illusion of simultaneous execution. Multitasking improves productivity: users can download files while editing documents, or watch video while browsing.",
            hint: "Explain how rapid switching creates the appearance of parallel execution."
          },
          {
            q: "Compare RAM and virtual memory in terms of speed, capacity, and usage.",
            markScheme: [
              "RAM: very fast, limited capacity (typically 8-16 GB), stores active data",
              "Virtual memory: slower (uses hard disk), large capacity available",
              "OS uses virtual memory as overflow when RAM is full",
              "Virtual memory page faults (transfers data to/from disk) cause performance drops"
            ],
            maxMarks: 4,
            keywords: ["RAM", "virtual memory", "speed", "capacity", "disk", "page fault"],
            modelAnswer: "RAM is fast but limited (8-16 GB typically). When RAM is full, the OS moves data to the hard disk, creating virtual memory. Virtual memory is much slower but nearly unlimited in capacity. When a program needs data only in virtual memory, a 'page fault' occurs—the OS transfers data from disk to RAM, causing significant slowdown. Using too much virtual memory severely impacts performance.",
            hint: "Compare speed and capacity trade-offs between RAM and hard disk storage."
          }
        ]
      }
    ]
  },
  {
    section: "Network Security",
    topics: [
      {
        topic: "Network Fundamentals",
        questions: [
          {
            q: "Explain the purpose of the Internet and World Wide Web, and the difference between them.",
            markScheme: [
              "Internet: global network infrastructure connecting billions of devices",
              "World Wide Web: system of linked documents accessed via HTTP",
              "Internet: physical networks and protocols enabling data transmission",
              "Web: application layer service built on top of the Internet"
            ],
            maxMarks: 4,
            keywords: ["Internet", "Web", "network", "infrastructure", "HTTP", "documents", "protocols"],
            modelAnswer: "The Internet is the global physical infrastructure of interconnected networks enabling communication between any two computers worldwide using TCP/IP protocols. The World Wide Web is an application (service) built on top of the Internet that uses HTTP to transmit hyperlinked documents and resources. The Internet existed before the Web; the Web is just one application that uses the Internet.",
            hint: "The Internet is the infrastructure; the Web is a service on top."
          },
          {
            q: "Explain what is meant by cybersecurity and describe two types of cyber threats.",
            markScheme: [
              "Cybersecurity: protecting systems and data from unauthorized access",
              "Malware: harmful software (viruses, worms) that damages systems",
              "Phishing: fraudulent emails/messages tricking users into revealing data",
              "Examples of others: DDoS attacks, ransomware, SQL injection"
            ],
            maxMarks: 4,
            keywords: ["cybersecurity", "unauthorized", "malware", "viruses", "phishing", "threats"],
            modelAnswer: "Cybersecurity is the practice of protecting computer systems and data from unauthorized access, theft, or damage. Malware includes viruses and worms—malicious software that replicates itself and damages systems or steals data. Phishing involves fraudulent emails or messages that appear legitimate, tricking users into revealing passwords or personal information.",
            hint: "Define the field, then explain specific attack types."
          },
          {
            q: "Explain the concept of packet switching and how data is transmitted across networks.",
            markScheme: [
              "Data split into small packets with destination address and sequence number",
              "Packets sent separately across network using different routes",
              "Each packet contains source, destination, and data portion",
              "Destination reassembles packets in correct order to reconstruct message"
            ],
            maxMarks: 4,
            keywords: ["packet switching", "packets", "routing", "destination", "reassemble", "network"],
            modelAnswer: "Packet switching divides data into small packets, each containing a header (source/destination address, sequence number) and data. Packets are sent independently across the network, potentially via different routes. This provides reliability: if one route fails, packets find alternative paths. At the destination, packets are reassembled in the correct order using sequence numbers to reconstruct the original message.",
            hint: "Explain how splitting data into packets improves network resilience."
          },
          {
            q: "Describe the difference between bandwidth and latency in network performance.",
            markScheme: [
              "Bandwidth: amount of data transmitted per second (measured in Mbps or Gbps)",
              "Latency: time delay for data to travel from source to destination",
              "High bandwidth: fast downloads and large file transfers",
              "Low latency: responsive systems important for gaming, video conferencing"
            ],
            maxMarks: 4,
            keywords: ["bandwidth", "latency", "data", "delay", "Mbps", "responsive", "performance"],
            modelAnswer: "Bandwidth measures data capacity—how much data the connection can transfer per second (megabits or gigabits per second). Latency is delay—the time for a packet to travel from source to destination (milliseconds). Bandwidth is crucial for downloading large files; latency matters for real-time applications like online gaming or video calls. A connection might have high bandwidth (fast downloads) but high latency (unresponsive).",
            hint: "Compare throughput (quantity) versus responsiveness (speed)."
          }
        ]
      },
      {
        topic: "Data Protection & Encryption",
        questions: [
          {
            q: "Explain why encryption is important for protecting data in transit across networks.",
            markScheme: [
              "Data travelling across networks can be intercepted by attackers",
              "Encryption scrambles data into unreadable format",
              "Only recipient with correct encryption key can decrypt",
              "Protects passwords, personal data, financial information"
            ],
            maxMarks: 4,
            keywords: ["encryption", "intercept", "key", "decrypt", "protection", "data", "networks"],
            modelAnswer: "Data travelling across networks can be intercepted by attackers (man-in-the-middle attacks). Encryption scrambles data using an encryption key into ciphertext that's unreadable without the correct decryption key. This ensures that even if data is intercepted, attackers cannot read passwords, financial details, or personal information. HTTPS uses encryption to protect web communications.",
            hint: "Think about what happens if unencrypted data is intercepted."
          },
          {
            q: "Compare symmetric and asymmetric encryption in terms of key usage and advantages/disadvantages.",
            markScheme: [
              "Symmetric: same key for encryption and decryption",
              "Asymmetric: public key (encrypt) and private key (decrypt)",
              "Symmetric: faster, easier, but key distribution is difficult",
              "Asymmetric: slower, solves key distribution problem, enables digital signatures"
            ],
            maxMarks: 4,
            keywords: ["symmetric", "asymmetric", "key", "public", "private", "distribution", "encryption"],
            modelAnswer: "Symmetric encryption uses one shared key for both encryption and decryption (fast and simple). The challenge is securely sharing the key. Asymmetric encryption uses two related keys: a public key (widely shared, encrypts data) and a private key (secret, decrypts data). It's slower but solves the key distribution problem—anyone can encrypt with the public key, only the private key holder can decrypt. This also enables digital signatures proving message authenticity.",
            hint: "Consider key sharing and the trade-off between speed and security."
          },
          {
            q: "Explain what a digital certificate is and how it protects against man-in-the-middle attacks.",
            markScheme: [
              "Digital certificate: cryptographic document proving identity of website/organization",
              "Issued by trusted Certificate Authority (CA), contains public key",
              "Browser verifies certificate before establishing secure connection",
              "Prevents attackers from impersonating legitimate websites"
            ],
            maxMarks: 4,
            keywords: ["digital certificate", "CA", "identity", "public key", "browser", "impersonation"],
            modelAnswer: "A digital certificate is a cryptographic credential proving the identity of a website or organization. A trusted Certificate Authority (CA) verifies the organization and issues a certificate containing its public key. When you visit a website (HTTPS), your browser automatically verifies the certificate. If certificate is invalid/expired/from wrong domain, your browser warns you. This prevents attackers from impersonating legitimate websites to steal data.",
            hint: "Explain how trusting a CA prevents identity theft online."
          }
        ]
      }
    ]
  },
  {
    section: "Programming & Algorithms",
    topics: [
      {
        topic: "Programming Fundamentals",
        questions: [
          {
            q: "Explain the difference between syntax errors and logic errors, with examples.",
            markScheme: [
              "Syntax errors: violate programming language rules (wrong grammar)",
              "Examples: missing brackets, incorrect variable names, wrong keywords",
              "Logic errors: code runs but produces wrong results",
              "Examples: wrong algorithm, incorrect conditions, incorrect calculations"
            ],
            maxMarks: 4,
            keywords: ["syntax", "logic", "grammar", "rules", "algorithm", "conditions", "results"],
            modelAnswer: "Syntax errors violate the rules of the programming language—like missing brackets, incorrect indentation, or wrong keywords. The compiler/interpreter will report these and refuse to run the code. Logic errors don't break syntax rules but contain flaws in the algorithm or calculations, causing the program to run but produce incorrect results. Logic errors are harder to find because the code runs without error messages.",
            hint: "Syntax = does the code follow the language rules? Logic = does it do what it should?"
          },
          {
            q: "Explain what is meant by a variable and why variables are used in programming.",
            markScheme: [
              "Variable: named memory location storing a value",
              "Allows storage of data for use later in the program",
              "Values can be changed (varied) during program execution",
              "Makes code readable and maintainable"
            ],
            maxMarks: 4,
            keywords: ["variable", "memory", "value", "storage", "readable", "maintainable"],
            modelAnswer: "A variable is a named memory location that stores a value. Variables allow programmers to store data and retrieve it later in the program. The value stored in a variable can change during program execution (hence 'variable'). Using meaningful variable names (e.g., 'studentAge' rather than 'x') makes code more readable and easier to maintain.",
            hint: "Think of a variable as a labeled box that holds data."
          },
          {
            q: "Describe the purpose of loops in programming and compare for loops with while loops.",
            markScheme: [
              "Loops repeat blocks of code multiple times, reducing code duplication",
              "For loop: used when number of iterations is known (e.g., iterate through array)",
              "While loop: used when number of iterations unknown, repeats while condition is true",
              "For loop syntax cleaner for known iterations; while loop more flexible"
            ],
            maxMarks: 4,
            keywords: ["loop", "iterations", "for loop", "while loop", "condition", "repeat"],
            modelAnswer: "Loops repeat a block of code multiple times. A for loop is used when you know in advance how many iterations you need (e.g., processing 10 items in an array). A while loop repeats as long as a condition remains true, useful when the number of iterations is unknown (e.g., reading user input until they enter 'quit'). For loops prevent code duplication and make programs more efficient.",
            hint: "Consider when you know iteration count versus when you don't."
          },
          {
            q: "Explain the concept of a subroutine (function/procedure) and the benefits of using them.",
            markScheme: [
              "Subroutine: reusable block of code with specific purpose",
              "Functions return a value; procedures perform action without returning value",
              "Benefits: reduces code duplication, improves readability, easier to debug",
              "Parameters allow functions to work with different data inputs"
            ],
            maxMarks: 4,
            keywords: ["subroutine", "function", "procedure", "reusable", "parameters", "duplication"],
            modelAnswer: "A subroutine is a reusable block of code with a specific purpose. Functions return values (e.g., calculateTotal()); procedures perform actions without returning (e.g., displayMessage()). Subroutines reduce code duplication—instead of writing sorting code everywhere, write once and reuse. They improve readability (clear purpose from name) and ease debugging (fix in one place). Parameters allow the same function to work with different data.",
            hint: "Explain why not rewriting the same code repeatedly saves time and improves quality."
          }
        ]
      },
      {
        topic: "Data Representation & Structure",
        questions: [
          {
            q: "Explain how the ASCII code is used to represent text in binary.",
            markScheme: [
              "ASCII assigns a unique 8-bit binary code to each character",
              "Each character (letter, digit, symbol) has a decimal value 0-127",
              "Characters are stored as binary representations of these codes",
              "Allows text to be transmitted and stored as binary data"
            ],
            maxMarks: 4,
            keywords: ["ASCII", "binary", "character", "code", "decimal", "representation"],
            modelAnswer: "ASCII (American Standard Code for Information Interchange) assigns each text character a unique 8-bit binary code. For example, 'A' = 65 (01000001 in binary), 'a' = 97, '0' = 48. When you type text, the computer converts each character to its ASCII binary code for storage and transmission. This enables computers to handle text as binary data.",
            hint: "Focus on how characters become binary numbers."
          },
          {
            q: "Explain what is meant by data integrity and how checksums can protect it.",
            markScheme: [
              "Data integrity: data remains unaltered during storage/transmission",
              "Checksum: calculated value based on data content",
              "Sender calculates checksum and includes it with data",
              "Receiver recalculates checksum; mismatch indicates corruption"
            ],
            maxMarks: 4,
            keywords: ["data integrity", "checksum", "calculated", "corruption", "sender", "receiver"],
            modelAnswer: "Data integrity means data hasn't been accidentally corrupted during storage or transmission. A checksum is a calculated value derived from the data's content. The sender calculates a checksum and transmits it with the data. The receiver recalculates the checksum independently; if the values don't match, the data was corrupted during transmission.",
            hint: "Think about how you verify data hasn't been changed."
          },
          {
            q: "Explain the difference between analog and digital data and why computers use digital representation.",
            markScheme: [
              "Analog data: continuous range of values (e.g., temperature, sound waves)",
              "Digital data: discrete values, represented as binary (0s and 1s)",
              "Computers process digital data as streams of electrical pulses",
              "Digital is more reliable: noise affects small portion, data recoverable"
            ],
            maxMarks: 4,
            keywords: ["analog", "digital", "binary", "continuous", "discrete", "electrical", "noise"],
            modelAnswer: "Analog data is continuous (temperature ranges 20-21°C, gradually). Digital data is discrete values represented in binary (0 or 1, on or off). Computers use digital because electrical circuits naturally work in two states (electricity on/off). Digital is more robust: noise affecting the signal slightly doesn't change 0s to 1s. Analog data is converted to digital through sampling and encoding.",
            hint: "Consider how electrical circuits work and why binary fits naturally."
          },
          {
            q: "Describe different data types and give examples of when each is used.",
            markScheme: [
              "Integer: whole numbers (age, count) - uses less memory than decimal",
              "Real/Float: decimal numbers (temperature, measurements) - allows precision",
              "Boolean: true/false values (flags, conditions in loops/if statements)",
              "String: text data (names, addresses, messages) - requires character encoding"
            ],
            maxMarks: 4,
            keywords: ["integer", "real", "float", "boolean", "string", "data type", "memory"],
            modelAnswer: "Data types determine what kind of data a variable stores. Integers are whole numbers (efficient, less memory). Real/Float numbers have decimal points (temperature 37.5°C). Boolean values are true/false (used in conditions). Strings are text (names, addresses). Using appropriate data types saves memory: storing age as integer uses less space than as decimal or text.",
            hint: "Consider what each data type stores and why you'd choose one over another."
          }
        ]
      }
    ]
  },
  {
    section: "Cyber Security",
    topics: [
      {
        topic: "Authentication & Access Control",
        questions: [
          {
            q: "Explain why strong passwords are important and describe characteristics of a strong password.",
            markScheme: [
              "Strong passwords prevent unauthorized access to accounts",
              "Mix of uppercase, lowercase, numbers, and special characters",
              "Minimum 8-12 characters, avoiding dictionary words",
              "Harder for attackers to crack through brute-force or dictionary attacks"
            ],
            maxMarks: 4,
            keywords: ["strong", "password", "unauthorized", "uppercase", "lowercase", "characters"],
            modelAnswer: "Strong passwords are essential because weak passwords can be quickly cracked, allowing attackers to access accounts and data. A strong password should be at least 12 characters, mixing uppercase letters, lowercase letters, numbers, and special symbols (@#$). It should avoid dictionary words, names, and predictable patterns. This makes brute-force attacks (trying all combinations) and dictionary attacks impractical.",
            hint: "Focus on characteristics that make passwords hard to crack."
          },
          {
            q: "Explain the difference between hardware and software firewalls.",
            markScheme: [
              "Hardware firewall: network device protecting entire network",
              "Software firewall: installed on individual computers/devices",
              "Hardware: blocks traffic at network boundary",
              "Software: monitors and controls individual computer traffic"
            ],
            maxMarks: 4,
            keywords: ["hardware", "software", "firewall", "network", "device", "computer"],
            modelAnswer: "A hardware firewall is a physical device protecting an entire network by filtering traffic at the network boundary. A software firewall is installed on individual computers to monitor and control outgoing/incoming traffic on that device. Hardware firewalls protect the whole network; software firewalls protect individual devices.",
            hint: "Think about scope of protection: whole network vs. single device."
          },
          {
            q: "Explain the concept of user access levels and why different users have different permissions.",
            markScheme: [
              "User access levels: standard user, administrator, guest - define what files/programs accessible",
              "Administrators: full control, can install software, modify system settings",
              "Standard users: limited permissions, cannot access other users' files",
              "Restricts unauthorized access, protects sensitive data, prevents accidental damage"
            ],
            maxMarks: 4,
            keywords: ["access levels", "administrator", "standard user", "permissions", "unauthorized"],
            modelAnswer: "User access levels control what each user can do. Administrators have full permissions to modify system settings and install software. Standard users have limited permissions—they cannot access other users' files or modify system settings. Guest accounts are most restricted. Different access levels protect sensitive data, prevent users from accidentally damaging the system, and prevent unauthorized access.",
            hint: "Consider why you wouldn't give everyone administrator privileges."
          },
          {
            q: "Explain the difference between authentication and authorization.",
            markScheme: [
              "Authentication: verifying identity of user (who you claim to be)",
              "Authorization: determining what authenticated user is permitted to do",
              "Authentication methods: passwords, biometrics, two-factor authentication",
              "Authorization uses access levels/permissions to control resource access"
            ],
            maxMarks: 4,
            keywords: ["authentication", "authorization", "identity", "permissions", "access", "password"],
            modelAnswer: "Authentication verifies a user's identity (who you are). Methods include passwords, fingerprints, or two-factor codes. Authorization determines what an authenticated user can do—which files they can access, which programs they can run. You might authenticate with a password, but your authorization might limit you to read-only access to a file. Both are necessary for security.",
            hint: "Think about proving identity first, then what you're allowed to do with it."
          },
          {
            q: "Explain what a DDoS attack is and how it disrupts services.",
            markScheme: [
              "Distributed Denial of Service: overwhelming traffic attack",
              "Attacker sends massive traffic from multiple sources",
              "Server cannot handle volume, crashes or becomes very slow",
              "Legitimate users cannot access the service"
            ],
            maxMarks: 4,
            keywords: ["DDoS", "denial", "service", "overwhelming", "traffic", "crash", "legitimate"],
            modelAnswer: "A DDoS (Distributed Denial of Service) attack overwhelms a server with traffic from multiple sources, making it impossible to process legitimate requests. The server crashes or becomes so slow that legitimate users cannot access it. This disrupts online services and can cause significant business losses.",
            hint: "Focus on the 'distributed' nature and the resulting service disruption."
          },
          {
            q: "Explain what ransomware is, how it works, and how users can protect against it.",
            markScheme: [
              "Ransomware: malicious software that encrypts files and demands payment",
              "Often spread via email attachments, malicious links, infected websites",
              "Attacker demands payment (ransom) to provide decryption key",
              "Protection: regular backups, keep software updated, cautious email/downloads"
            ],
            maxMarks: 4,
            keywords: ["ransomware", "encrypt", "files", "payment", "ransom", "backups", "protection"],
            modelAnswer: "Ransomware is malicious software that encrypts a user's files, making them inaccessible. Attackers demand payment (ransom) to provide the decryption key. Ransomware spreads through email attachments, suspicious links, or infected websites. Prevention includes keeping backups on separate drives (so you can restore without paying), updating software with security patches, and being cautious with email attachments and downloads.",
            hint: "Explain the attack and then practical defenses."
          },
          {
            q: "Describe what SQL injection is and explain how it can compromise database security.",
            markScheme: [
              "SQL injection: inserting malicious SQL code into form fields",
              "Attacker modifies the intended SQL query to bypass authentication",
              "Can access unauthorized data, modify/delete database contents",
              "Prevention: use parameterized queries, input validation, escaping characters"
            ],
            maxMarks: 4,
            keywords: ["SQL injection", "injection", "SQL", "query", "database", "authentication", "validation"],
            modelAnswer: "SQL injection exploits poorly designed web forms to insert malicious SQL code. For example, entering ' OR '1'='1' in a login field might bypass authentication by modifying the query logic. Attackers can read unauthorized data, modify records, or delete databases. Prevention includes using parameterized queries (which separate code from data), validating all user input, and escaping special characters.",
            hint: "Explain how user input can be misused to alter database queries."
          }
        ]
      }
    ]
  }
];
