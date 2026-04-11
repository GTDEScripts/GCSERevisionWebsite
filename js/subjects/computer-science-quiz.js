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
          }
        ]
      }
    ]
  }
];
