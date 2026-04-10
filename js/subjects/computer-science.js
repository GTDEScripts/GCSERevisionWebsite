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
          'CPU (Central Processing Unit): electronic chip that executes instructions from programs. Performs all computations and logical operations. Speed measured in GHz',
          'Control Unit (CU): part of CPU that directs operations. Fetches instructions from memory, decodes them, controls execution sequence. Coordinates all components',
          'ALU (Arithmetic Logic Unit): part of CPU that performs actual calculations and comparisons. Handles: arithmetic operations (+, −, ×, ÷), logical operations (AND, OR, NOT), comparisons (=, <, >)',
          'Clock: oscillates at fixed frequency to synchronise all CPU operations. Measured in GHz (billion cycles per second). 2GHz = 2 billion cycles per second. Higher clock speed = faster processing (generally)',
          'Processor cores: modern CPUs have multiple cores, each an independent processor. Dual-core = 2 cores, quad-core = 4 cores. Enables parallel processing: multiple tasks simultaneously on different cores',
          'Cache: ultra-fast memory built into or very close to CPU. Stores frequently accessed data/instructions to reduce slower RAM access. Hierarchy: L1 (smallest, fastest, ~KB), L2 (larger, slower, ~MB), L3 (even larger, slowest cache, ~MB)',
          'Registers: tiny ultra-fast memory cells inside CPU (nanosecond access). Hold data currently being processed. Very limited capacity (bytes). Every operation uses registers: fetch data from RAM → registers → process → back to RAM',
          'Bus: data highways connecting CPU to other components. Front-side bus connects CPU-RAM. Address bus identifies which memory location. Data bus carries actual data. Width affects speed: 64-bit bus moves data twice as fast as 32-bit',
          'Von Neumann architecture: fundamental computer design principle. Fetch-Decode-Execute cycle: (1) Fetch instruction from memory into register, (2) Decode what instruction means, (3) Execute operation, (4) Store result. Billions of cycles per second',
          'System clock synchronisation: all components operate in lock-step with CPU clock. Ensures data doesn\'t move between components before CPU ready. Clock too fast = data corruption; too slow = performance loss',
          'Overclocking: artificially increasing clock speed beyond manufacturer spec. Increases performance but generates heat, reduces stability/lifespan. Not recommended for exam systems but relevant to understanding performance trade-offs',
          'Cooling systems: high-performance CPUs generate heat. Heat sinks (metal attached to CPU), fans, liquid cooling. Overheating causes thermal throttling (CPU reduces speed to cool down) or permanent damage'
        ],
        tip: 'Understand the distinction: CPU (whole chip), Control Unit (directs), ALU (calculates), Clock (synchronises), Registers (tiny memory). GHz = billion cycles/second.',
        example: 'Executing addition: Clock pulse 1 → fetch "add 5 to variable A" instruction. Pulse 2 → decode instruction. Pulse 3 → ALU loads value from register, adds 5. Pulse 4 → stores result. Repeat 2 billion times per second at 2GHz.'
      },
      {
        ref: '1.2',
        title: 'Memory Types & Storage Hierarchy',
        points: [
          'RAM (Random Access Memory): volatile memory (loses all data when powered off). Fast access (~nanoseconds). Used for running programs and storing temporary data. DRAM (Dynamic RAM) most common - requires refresh. SRAM (Static RAM) faster but more expensive',
          'Capacity measured in GB (gigabytes). Typical systems: 8GB, 16GB, 32GB. More RAM allows running more/larger programs simultaneously. Bottleneck: if program exceeds RAM, system becomes very slow',
          'Virtual memory: OS technique using hard disk as extension of RAM. When physical RAM full, OS moves inactive data to disk. Allows running 20GB program on 8GB RAM. Trade-off: disk access 10,000× slower than RAM, so performance drops significantly',
          'Page files/swap files: area on hard disk reserved for virtual memory. Windows uses pagefile.sys, Linux uses swap partition. Essential for stability when RAM exceeded, but slow',
          'ROM (Read-Only Memory): non-volatile (retains data permanently). Pre-loaded with firmware/BIOS. Cannot be written to during normal operation. Contents survive power loss. Modern systems: flash ROM (rewritable under special conditions, used in UEFI firmware)',
          'BIOS (Basic Input Output System): firmware stored in ROM. Executes on startup: checks hardware, loads bootloader from disk, starts OS. Essential for computer boot process',
          'HDD (Hard Disk Drive): non-volatile magnetic storage. Spinning platters (rotating metal disks) coated with magnetic material. Read/write heads move across platters to access data. Capacity: 1TB to 4TB+. Access time ~milliseconds (slow compared to RAM)',
          'Mechanical nature of HDDs: spinning (typically 5,400 or 7,200 RPM), seeking (moving head to correct position), latency (waiting for correct part of platter). Makes HDDs slow but cheap. Failure risks: head crashes (read/write head hits platter)',
          'SSD (Solid State Drive): non-volatile storage using flash memory. No moving parts = much faster access (~microseconds). Typical speeds: 3,000-7,000 MB/s sequential. More expensive than HDD per GB, but prices falling. NVME (NVMe) even faster via PCIe interface',
          'Secondary storage: USB drives (portable, up to 1TB), SD cards (small, portable, camera/phone storage), external HDDs/SSDs (backup, portable, up to 4TB+). Cloud storage (Google Drive, OneDrive, AWS) - accessible anywhere but requires internet',
          'Storage hierarchy (from fastest to slowest): Registers (KB, nanoseconds) → L1 Cache (KB, nanoseconds) → L2 Cache (MB, nanoseconds) → RAM (GB, nanoseconds) → SSD (TB, microseconds) → HDD (TB, milliseconds) → Cloud (milliseconds to seconds)',
          'Caching strategy: frequently accessed data kept in cache. If cache full, least recently used (LRU) data evicted. OS manages automatically. Understanding hierarchy critical for performance optimisation',
          'Memory protection: modern systems use virtual memory + memory management units (MMU) to prevent programs accessing each other\'s memory. Each process has own memory space. Critical for multi-tasking stability'
        ],
        tip: 'Volatile = loses data (RAM). Non-volatile = keeps data (HDD, SSD, ROM, flash). Faster = more expensive per GB. Know the speed hierarchy: registers (nanoseconds) vs RAM (nanoseconds) vs SSD (microseconds) vs HDD (milliseconds).',
        example: 'System with 8GB RAM running 15GB of applications: 8GB in RAM, 7GB on disk via virtual memory. Program accessing RAM: ~20 nanoseconds. Accessing virtual memory: ~1 millisecond = 50,000× slower! System feels sluggish.'
      },
      {
        ref: '1.3',
        title: 'Input, Output & Peripheral Devices',
        points: [
          'Input devices: capture data from external world and convert to digital form. Keyboard (text input), mouse (pointer control), touchscreen (gesture input), scanner (document to digital image), microphone (sound to digital), camera (images/video), sensors (temperature, motion, pressure)',
          'Input sampling: some devices (microphone, camera) sample continuously. Sampling rate determines quality. Higher sampling = more data = larger file but better quality. Nyquist theorem: must sample at least 2× the highest frequency in signal',
          'Output devices: take digital data and convert to human-perceivable form. Monitor (visual display), speakers (audio output), printer (physical document), projector (large display), haptic devices (vibration feedback)',
          'Display technologies: CRT (cathode ray tube, old, bulky), LCD (liquid crystal display, modern laptops), LED (light-emitting diode, efficient), OLED (organic LEDs, high contrast), resolution affects clarity',
          'Optical storage: data stored as pits on reflective surface. Read by laser detecting pits vs flat areas. CD (650MB), DVD (4.7GB), Blu-ray (25GB). Advantages: durable (100+ years), removable. Disadvantages: slow (sequential access), fragile (scratches)',
          'Optical storage data format: data spiral from centre outward. Reading faster at outer edge (constant linear velocity). CD has 650MB capacity but only holds ~80 minutes music because spiral length is fixed',
          'Magnetic vs optical: magnetic storage (HDD, tape) uses changing magnetic field, optical uses laser reflection. Optical immune to magnetic interference but slower',
          'Cloud storage: data stored on remote servers (Google Drive, OneDrive, AWS S3, Dropbox). Advantages: accessible from anywhere, automatic backup, scales easily, shared access. Disadvantages: internet dependent, potential privacy concerns, ongoing subscription costs',
          'Network storage: NAS (Network Attached Storage) or SAN (Storage Area Network) on local network. Used by organisations for centralised backup/sharing. More control than cloud but requires on-site infrastructure',
          'Tape storage: sequential magnetic tape. Very cheap per GB, high capacity, but slow (for archival only). Used for disaster recovery backup. Takes hours to restore vs minutes with disk',
          'USB standards: USB 1.1 (12 Mbps, slow), USB 2.0 (480 Mbps), USB 3.0 (5 Gbps), USB 3.1 (10 Gbps), USB-C (newer connector, reversible). Speed affects file transfer time. Capacity: thumb drive (32GB-1TB), external HDD (2TB-4TB)',
          'Compression importance: reduces file size for storage/transfer. Lossless (ZIP, PNG, FLAC) = no data lost, 100% recovery. Lossy (JPEG, MP3, H.264) = some data lost permanently, smaller file size, acceptable for images/video. Always use lossless for text/code'
        ],
        tip: 'Input → digital, output ← digital. Cloud (any time/place) vs local storage (faster, more private). Compression essential for management. Optical storage = physical, durable but slow.',
        example: 'Backing up important files: keep local SSD copy (fast access), redundant external HDD (isolated safety), cloud backup (disaster recovery if office burns down). Multiple copies at different locations ensures survival.'
      },
      {
        ref: '1.4',
        title: 'System Software & Operating Systems',
        points: [
          'Operating system (OS): software that manages hardware and provides services to applications. Examples: Windows, macOS, Linux. Performs: resource management, multi-tasking, file system, security, user interface',
          'Bootloader: small program in ROM that starts when computer powered on. Loads OS kernel from disk into RAM. Kernel then takes control. BIOS/UEFI firmware contains bootloader',
          'Device drivers: software that allows OS to communicate with hardware (graphics card, printer, network adapter). Specific to each device model. Outdated drivers cause compatibility issues',
          'File system: how OS organises data on storage. FAT32 (old, max 4GB files), NTFS (Windows modern, supports large files), ext4 (Linux), APFS (macOS). Handles: directories, permissions, fragmentation, allocation of disk space',
          'Fragmentation: over time, files become scattered across disk. Reading fragmented file requires multiple disk seeks (slow). Defragmentation reorganises files contiguously. Modern SSDs don\'t need defrag (wear levelling is different concern)',
          'Multi-tasking: OS runs multiple programs seemingly simultaneously. Actually time-slices: each process gets CPU time slice (10-100ms), then switches to next. Context switching: saves process state, loads next process',
          'Process vs thread: process = isolated program instance with own memory. Thread = lightweight unit within process sharing memory. Switching threads faster than processes. Threads on multi-core can run truly in parallel',
          'Memory management: OS allocates memory to each process. Virtual address space (each process thinks it has full memory). MMU (Memory Management Unit) translates virtual addresses to physical. Prevents programs interfering with each other',
          'Interrupts: signals that pause normal execution to handle urgent event. Timer interrupt (triggers task switching), keyboard interrupt (user input), disk interrupt (data ready). Allows responsive systems',
          'Privilege levels: kernel mode (full hardware access, OS only) vs user mode (restricted, applications). System calls (syscalls) switch to kernel mode for privileged operations (file I/O, network access). Security boundary',
          'Scheduling algorithms: Round-robin (fair time slices), priority-based (important processes first), multi-level feedback queue (adaptive). Affects responsiveness and throughput',
          'Background processes/daemons: programs running without user interaction. Windows services, Linux daemons. Examples: printer spooler, antivirus scanning, system updates. Can reduce performance if too many'
        ],
        tip: 'OS = resource manager. Kernel mode (OS) vs user mode (apps). Virtual memory protects processes. Understand driver role in hardware abstraction. Multi-tasking via time-slicing on single core vs parallelism on multi-core.',
        example: 'Running 5 programs on dual-core: both cores handling multi-tasking (each task time-sliced), OS switches between programs every 20ms. User perceives all 5 running together, but each only gets partial CPU time. Add third core: more true parallelism.'
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
        title: 'Binary, Hexadecimal & Numbering Systems',
        points: [
          'Binary (base-2): uses only digits 0 and 1. Computers use binary because electronic switches have two states: on (1) or off (0). All computer data ultimately represented in binary',
          'Bit (binary digit): single 0 or 1. Byte: 8 bits. Nibble: 4 bits. Kilobyte (KB): 1,024 bytes. Megabyte (MB): 1,024 KB. Gigabyte (GB): 1,024 MB',
          'Denary (decimal, base-10): everyday numbering system (0-9). Positional notation: 349 = 3×100 + 4×10 + 9×1. Each position represents power of 10',
          'Binary positional notation: each position represents power of 2. 1101₂ = 1×8 + 1×4 + 0×2 + 1×1 = 13₁₀. Positions: 128, 64, 32, 16, 8, 4, 2, 1 (memorise these)',
          'Binary to denary: multiply each digit by its position value, sum. 10110₂ = 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 22₁₀',
          'Denary to binary: repeatedly divide by 2, collect remainders. 22 ÷ 2 = 11 R 0, 11 ÷ 2 = 5 R 1, 5 ÷ 2 = 2 R 1, 2 ÷ 2 = 1 R 0, 1 ÷ 2 = 0 R 1. Read remainders bottom-up: 10110₂',
          'Hexadecimal (hex, base-16): uses digits 0-9 and letters A-F (A=10, B=11, C=12, D=13, E=14, F=15). Each hex digit = 4 bits (nibble). Used as shorthand for binary: much more human-readable',
          'Binary to hex: group binary into 4-bit chunks (right to left), convert each. 11010110₂ = 1101₂ 0110₂ = D₁₆ 6₁₆ = D6₁₆',
          'Hex to binary: reverse process. F₁₆ = 1111₂, 3₁₆ = 0011₂. Hex is widely used: MAC addresses, memory addresses, colour codes (#FF0000 = pure red)',
          'Hex to denary: 1F₁₆ = 1×16 + F×1 = 1×16 + 15 = 31₁₀. Useful for understanding memory addresses and colour values',
          'ASCII (American Standard Code for Information Interchange): character encoding using 7-8 bits per character. A=65, a=97, 0=48, space=32. 128 standard characters. Sufficient for English text',
          'Extended ASCII: 8 bits (256 characters) including accents (é, ñ) and special symbols. But not sufficient for non-Latin alphabets (Chinese, Arabic)',
          'Unicode: international standard supporting all writing systems. UTF-8 encoding: variable length (1-4 bytes per character). ASCII characters = 1 byte, accented letters = 2 bytes, Chinese = 3 bytes. Globally compatible, becoming standard'
        ],
        tip: 'Memorise binary positions: 128, 64, 32, 16, 8, 4, 2, 1. Hex is base-16 shorthand (4 binary bits = 1 hex digit). Always label: 1010₂ (binary), AF₁₆ (hex), 175₁₀ (denary).',
        example: 'Convert 175₁₀ to binary: 175 ÷ 2 = 87 R 1, 87 ÷ 2 = 43 R 1, 43 ÷ 2 = 21 R 1, 21 ÷ 2 = 10 R 1, 10 ÷ 2 = 5 R 0, 5 ÷ 2 = 2 R 1, 2 ÷ 2 = 1 R 0, 1 ÷ 2 = 0 R 1 → 10101111₂. Same value: AF₁₆. Check: 128+32+8+4+2+1=175 ✓'
      },
      {
        ref: '2.2',
        title: 'Images & Graphical Data',
        points: [
          'Bitmap images (raster): made of pixels (picture elements). Each pixel is square coloured dot. Resolution: width × height pixels (1920×1080, 4000×3000). Higher resolution = more pixels = sharper image = larger file',
          'Colour depth (bit depth): bits per pixel determining colour range. 1-bit (2 colours: black/white), 8-bit (256 colours), 24-bit (16.7 million colours, "true colour"), 32-bit (16.7M colours + transparency channel)',
          'File size calculation: total bits = width × height × colour depth. Convert to bytes: divide by 8. Example: 1000×1000 pixels, 24-bit = 1,000,000 × 24 bits = 24,000,000 bits = 3,000,000 bytes = 3MB (uncompressed)',
          'Bitmap disadvantages: resolution fixed. Enlarging bitmap causes pixelation (blurry, blocky). Also: large file sizes, difficult to edit individual objects. Suitable for: photographs, complex artwork',
          'Vector images: made of mathematical shapes (lines, curves, polygons) with defined properties. Rectangle at (10,20) size 100×50 with red fill. Scalable: no quality loss when enlarged. File size independent of resolution',
          'Vector advantages: small file sizes (relative), scalable, easy to edit objects, suitable for logos/diagrams. Disadvantages: not suitable for photographs, requires vector software',
          'DPI (dots per inch): printing resolution. Higher DPI = sharper printed image but larger file. 72 DPI (screen), 300 DPI (print quality), 1200 DPI (professional printing)',
          'Colour models: RGB (Red, Green, Blue, additive) for screens. Each channel 0-255. #FF0000 = pure red. CMYK (Cyan, Magenta, Yellow, Black, subtractive) for print',
          'Transparency/Alpha channel: 4th channel in 32-bit images (RGBA). Each pixel also has transparency value (0=transparent to 255=opaque). PNG supports alpha, JPEG doesn\'t',
          'Image compression methods: lossless (PNG, GIF) preserves all data, reversible. Lossy (JPEG) removes detail, irreversible but high compression. JPEG compression: quality 50-95 typical. Quality 100 = larger file, quality 10 = visible artefacts',
          'File formats: BMP (uncompressed, large), PNG (lossless, supports transparency), JPEG (lossy, photo-friendly), GIF (lossless, limited colours, supports animation), TIFF (high quality, large)',
          'Metadata in images: EXIF data (camera settings, GPS location, timestamp). Can be privacy concern. Removing metadata: use tools to strip EXIF before sharing photos online'
        ],
        tip: 'Bitmap = pixels (resolution fixed, no scaling). Vector = shapes (scalable). File size = pixels × depth. Lossless (PNG) for text/diagrams, lossy (JPEG) for photos. Colour depth: 24-bit sufficient for photos.',
        example: 'Photograph 3000×2000 pixels, 24-bit colour: 3000 × 2000 × 24 = 144,000,000 bits = 18MB uncompressed. JPEG at 85% quality: ~2MB (10× smaller, no visible loss). 50% quality: ~500KB (very low quality, visible artefacts).'
      },
      {
        ref: '2.3',
        title: 'Sound & Audio Data',
        points: [
          'Analogue sound: continuous wave form varying in pressure over time. Sound quality determined by frequency (pitch) and amplitude (loudness). Human hearing: ~20Hz to 20kHz frequency range',
          'Sampling: converting analogue sound to digital by measuring amplitude at regular intervals. Sampling rate: measurements per second, measured in Hz (samples/second). CD = 44.1kHz (44,100 samples/second)',
          'Nyquist-Shannon theorem: to accurately reproduce frequency, sampling rate must be ≥ 2× highest frequency. 44.1kHz captures up to 22.05kHz (above human hearing). Higher frequencies in audio require higher sampling rates',
          'Bit depth (audio): bits per sample. 8-bit (256 amplitude levels, low quality), 16-bit (65,536 levels, CD quality), 24-bit (16.7M levels, professional audio). More bits = higher fidelity but larger file',
          'Audio file size: file size = duration (seconds) × sampling rate × bit depth ÷ 8. 1 minute, 44.1kHz, 16-bit: 60 × 44,100 × 16 ÷ 8 = 5,292,000 bytes = 5.3MB (uncompressed)',
          'Mono vs stereo vs surround: mono (1 channel), stereo (2 channels: left/right), 5.1 surround (6 channels). Stereo doubles file size compared to mono. Surround triples',
          'Audio compression: lossless (FLAC, WAV) preserves all audio, reversible. Lossy (MP3, AAC, OGG) removes imperceptible frequencies (psychoacoustic masking), 10-12× compression typical. MP3 at 128kbps = acceptable quality for listening',
          'MP3 compression: removes frequencies masked by louder sounds (frequency masking) and sounds human ear doesn\'t perceive (temporal masking). Compression ratio: lossless ~2:1, lossy (MP3) 10:1 to 12:1',
          'Bitrate: kbps (kilobits per second). Higher bitrate = better quality but larger file. MP3: 128kbps (acceptable), 192kbps (good), 320kbps (high quality). Streaming: 96kbps (adequate for speech)'
        ],
        tip: 'Sampling rate 44.1kHz (CD) sufficient for hearing. Bit depth: 8-bit (poor), 16-bit (CD quality), 24-bit (professional). MP3 128kbps acceptable, 320kbps high quality. Remember: higher sampling/bit depth = better quality but larger file.',
        example: 'Podcast 1 hour long, mono, 22.05kHz, 8-bit: 3600 × 22050 × 8 ÷ 8 = 79,380,000 bytes = 79MB. MP3 at 96kbps: 1 hour × 3600 seconds × 96,000 bits ÷ 8 ÷ 1,000,000 = 43MB (2× smaller, adequate for speech).'
      },
      {
        ref: '2.4',
        title: 'Video Data Representation',
        points: [
          'Video: sequence of still images (frames) displayed rapidly to create illusion of motion. Frame rate: fps (frames per second). 24fps (cinema, minimum perceivable motion), 30fps (TV/streaming), 60fps (smooth, gaming/sports)',
          'Video resolution: width × height pixels. Common: 1920×1080 (Full HD), 3840×2160 (4K Ultra HD). Higher resolution = more detail = larger file',
          'Video file size: resolution × colour depth × fps × duration. 1080p, 24-bit, 30fps, 1 minute: 1920×1080 × 24 × 30 × 60 = 100 billion bits = 12.5GB uncompressed. Impractical → compression essential',
          'Video compression (codecs): H.264 (widely compatible), H.265/HEVC (newer, better compression), VP9, AV1. Codecs use multiple techniques: temporal compression (differences between frames), spatial compression (within-frame patterns)',
          'Temporal compression: instead of storing entire frame, store differences from previous frame (P-frames) or key frames (I-frames). Key frame every 2-10 seconds (for seeking). Reduces file by 10-30×',
          'Bitrate trade-off: 1Mbps (low quality, streaming), 5Mbps (good quality), 25Mbps (high quality), 50Mbps (professional). Depends on resolution: 1080p at 5Mbps acceptable, 4K at 5Mbps looks terrible',
          'Container formats: MP4 (H.264 video + AAC audio), MKV (flexible, supports many codecs), AVI (older), MOV (Apple). Container holds both video and audio streams plus metadata',
          'Interlacing: historical technique storing every other horizontal line (progressive = all lines). Interlaced used in old TV. Modern: progressive only (better for computer playback)',
          'Frame interpolation: generating intermediate frames between originals (AI-powered). Useful: slow-motion video creation, smooth playback on different frame rates. Complex computation',
          'Chroma subsampling: colour perception detail less than luminance. 4:4:4 (full colour detail), 4:2:2 (half horizontal colour), 4:2:0 (quarter colour detail, H.264 standard). Reduces file by ~2× without visible quality loss'
        ],
        tip: 'Video ≈ uncompressed huge files. Compression via H.264/H.265 essential. Temporal compression (between-frame), spatial compression (within-frame). Higher bitrate = better quality. Frame rate: 24fps cinema, 30fps normal, 60fps smooth.',
        example: '10-minute 1080p video at 5Mbps: 10 × 60 × 5 Mbps = 3000 megabits = 375MB. Same uncompressed: 1920×1080×24 bits×30fps×600s = 895 billion bits = 112GB. Compression reduces by 300×!'
      },
      {
        ref: '2.5',
        title: 'Error Detection & Correction Codes',
        points: [
          'Data transmission corruption: noise in communication channels, hardware failures, cosmic radiation. Computers transmit data constantly (network packets, memory reads, disk I/O). Corruption risk always present',
          'Error detection: mechanism to identify if data corrupted. Parity bit: extra bit added to data block. Even parity: total 1s must be even. If receiver counts odd number of 1s, error detected',
          'Parity limitation: single parity bit detects single-bit errors but not double-bit errors (2 bits flip = even again). Not true for odd parity (catches odd number of flips). Used in: older systems, simple validation',
          'Checksum: sum of all bytes in data block, appended to data. Receiver recalculates checksum, compares to received. Mismatch = error detected. Simple but catches most common errors',
          'Cyclic Redundancy Check (CRC): more sophisticated, polynomial-based mathematical function. Detects burst errors (multiple consecutive bits corrupted). Used in: network packets (Ethernet), storage (HDD/SSD), USB',
          'Check digit: single digit appended to number for validation. ISBN-10: last digit calculated via weighted sum of first 9 digits. Barcode check digit: similar calculation. Prevents scanning wrong product/book',
          'Hamming code: can detect AND correct single-bit errors. More redundancy (parity bits at specific positions). Receiver calculates syndrome: if non-zero, syndrome indicates error bit position. Can flip that bit to correct',
          'Error correction trade-off: more redundancy = larger files but higher reliability. RAID arrays: multiple disks store same data or parity. One disk fails: parity/redundant copy allows recovery',
          'Applications of error detection: network transmission (TCP/IP checksums), storage media (SMART error correction in SSDs), communication protocols (CRC in WiFi). Essential for reliability',
          'Forward error correction (FEC): original data + redundant data sent. Receiver can recover from errors without retransmission. Used in: satellite communication, QR codes, streaming video',
          'QR codes: visual error correction. QR codes include redundancy: damaged QR still scannable. Different error correction levels: 7%, 15%, 25%, 30% damage tolerance',
          'Real-world impact: without error detection, downloads fail silently (corrupted files), stored data becomes unreliable, networks unreliable. Error detection/correction = billions of dollars in infrastructure maintaining data integrity'
        ],
        tip: 'Error detection finds errors (parity, checksum, CRC). Error correction fixes errors (Hamming, FEC). Detection simpler, correction needs more redundancy. Know parity, checksum, Hamming basics.',
        example: 'Network packet with CRC: 1000 bytes data + 4 bytes CRC. Transmitted, 1 bit flipped during transmission. Receiver calculates CRC, gets different value than included CRC. Packet discarded, sender retransmits. Prevents silent corruption.'
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
        title: 'Programming Fundamentals & Variables',
        points: [
          'Variable: named storage location holding a value. int age = 25; creates variable "age" holding integer 25. Variables essential for writing flexible code (change value without rewriting)',
          'Data types: integer (whole numbers: 5, -3, 0), float/real (decimals: 3.14, -2.5), string (text: "hello", "world"), boolean (true/false). Type determines operations allowed and memory required',
          'Strongly typed languages: must declare type before use. Java: int x = 5; float y = 3.14; Prevents type errors. More verbose but clearer intent',
          'Weakly typed languages: type inferred from value. JavaScript: x = 5; y = 3.14; Python: similar. More flexible but can cause confusion (x = "5" is string, not number)',
          'Variable naming conventions: descriptive names (age, salary, isValid). Avoid single letters (except loop counters). camelCase (JavaScript, Java) or snake_case (Python). Names case-sensitive: Age ≠ age',
          'Constant: value that cannot change after assignment. const MAX_SIZE = 100; Useful for magic numbers (don\'t hardcode 100 everywhere, use constant)',
          'Scope: where variable accessible. Local scope: within function only, created at function entry, destroyed at exit. Global scope: accessible everywhere (avoid - harder to debug)',
          'Variable lifetime: static (exists entire program), automatic (created/destroyed per scope), dynamic (heap allocation, manual or garbage collection)',
          'Memory allocation: local variables on stack (fast, small size, automatic cleanup). Large data or long-lived: heap (slower, garbage collection for cleanup)',
          'Null/undefined: special values indicating "no value". null = explicitly set to nothing. undefined = variable declared but not assigned. Different languages handle differently',
          'Type casting: converting variable between types. (int)3.7 = 3 (truncation). int(3.7) in some languages. Can lose information (float to int loses decimal) or be impossible ("hello" to int)',
          'Variable declaration vs initialisation: declare (reserve memory), initialise (set initial value). int x; declares but doesn\'t initialise (contains garbage). int x = 0; initialises to 0'
        ],
        tip: 'Use descriptive variable names. Declare type explicitly when possible (catch errors early). Avoid global variables. Initialise before use. Understand scope to avoid bugs.',
        example: 'Function calculate_total(price, quantity, tax_rate): total = price × quantity. tax = total × tax_rate. final = total + tax. return final. Variables (price, total, tax) have function scope, cease existing when function returns.'
      },
      {
        ref: '3.2',
        title: 'Data Structures',
        points: [
          'Array: ordered collection of elements, same type, fixed size. array[0], array[1], etc. Access by index (0-based). If array size 5: valid indices 0-4. Out of bounds: error',
          'Array advantages: fast access (O(1) constant time). Disadvantages: fixed size (need new array to grow), insertion/deletion slow (requires shifting elements)',
          'List (dynamic array): flexible-size array. Add/remove elements without predeclaring size. ArrayList in Java, list in Python. Auto-resizes (internally allocates larger array when needed)',
          'Dictionary/Map (hash table): key-value pairs. {"name": "Alice", "age": 25}. Fast lookup by key (O(1) average). No order guaranteed. Used for: storing properties, caching',
          'Hash function: converts key to array index. Good hash function: distributes keys evenly (minimises collisions). Hash collision: two keys hash to same index (handle via chaining or open addressing)',
          'Stack: LIFO (Last In First Out). push (add to top), pop (remove from top). Use: function call stack, undo functionality, expression evaluation. Example: browser back button',
          'Queue: FIFO (First In First Out). enqueue (add to back), dequeue (remove from front). Use: print queue, message queues, BFS algorithm. Fair ordering',
          'Linked list: chain of nodes, each pointing to next. Dynamic size, fast insertion/deletion at known position. Disadvantages: slower access (must traverse from start), extra memory for pointers',
          'Tree: hierarchical structure, nodes with parent-child relationships. Root (top), leaves (bottom), edges (connections). Binary tree: each node ≤ 2 children. Use: file systems, DOM in browsers',
          'Binary search tree (BST): left subtree < node < right subtree. Enables fast search (O(log n)). Unbalanced BST degrades to O(n). Self-balancing variants (AVL, Red-Black)',
          'Graph: nodes (vertices) connected by edges. Directed (edges have direction) or undirected. Weighted (edges have cost). Use: social networks, maps, routing algorithms',
          'Set: unordered collection of unique elements. No duplicates. Fast membership check. Use: deduplication, intersection/union operations'
        ],
        tip: 'Array = fast access, fixed size. List = flexible size. Dict/Map = fast lookup by key. Stack = LIFO (last-in-first-out). Queue = FIFO (first-in-first-out). Linked list = flexible but slower access.',
        example: 'Array vs List: array = [1,2,3] size 3, array[1]=2, inserting 1.5 requires new array [1,1.5,2,3]. List = auto-grows, insert is easier. Dict: {"age": 25, "name": "Bob"} fast lookup by key. Stack: call stack in function calls.'
      },
      {
        ref: '3.3',
        title: 'Control Flow & Logic',
        points: [
          'IF statement: conditional execution. if (age >= 18) { buy_ticket(); } Executes code block only if condition true. IF-ELSE: alternate path if false',
          'Comparison operators: == (equal), != (not equal), > (greater), < (less), >= (greater/equal), <= (less/equal). Result: boolean (true/false)',
          'Logical operators: AND (both true), OR (at least one true), NOT (negates boolean). if (age >= 18 AND has_ticket) { enter(); }',
          'Loops: repeat code block. FOR loop: fixed iterations. for(i=0; i<10; i++) { print(i); } (prints 0-9). WHILE loop: repeat while condition true',
          'WHILE loop: while(condition) { body } Check condition before each iteration. Infinite loop possible: while(true) must manually break',
          'DO-WHILE: execute body first, then check condition. Guarantees at least one execution. Less common, used when body must run before testing',
          'Loop control: break (exit loop immediately), continue (skip to next iteration). Example: for(i=0; i<100; i++) { if(i==50) break; } (stops at 50)',
          'Nested loops: loop inside loop. Example: multiplication table (outer loop rows, inner loop columns). Be careful: nested loops multiply complexity',
          'Iteration vs recursion: iteration (loop), recursion (function calls itself). factorial(n) = n × factorial(n-1). Recursion elegant but uses more memory (call stack)',
          'Switch statement: multi-way branch. switch(day) { case "Monday": work(); break; case "Sunday": rest(); break; } Cleaner than many IF-ELSE',
          'Short-circuit evaluation: AND stops evaluating if first false (no need to check second). OR stops if first true. Example: if(x!=0 AND y/x > 5) safe (doesn\'t divide by zero)',
          'Guard clauses: early return if condition met. Instead of deep nesting, check invalid condition first and return. Improves readability'
        ],
        tip: 'IF-ELSE for branching. FOR when iterations known. WHILE when condition-based. Use break/continue carefully. Nested loops multiply complexity. Guard clauses improve readability.',
        example: 'Print sum of numbers 1-100: sum = 0; for(i=1; i<=100; i++) { sum += i; } print(sum); = 5050. With while: i=1; sum=0; while(i<=100) { sum+=i; i++; }'
      },
      {
        ref: '3.4',
        title: 'Functions & Code Reusability',
        points: [
          'Function: reusable block of code. function add(a, b) { return a+b; } Call: add(3, 5) returns 8. Parameters (a, b) are inputs. Return value is output',
          'Functions critical for: avoiding code duplication (DRY principle), easier maintenance (change once, affects all calls), better readability (named operations), testability',
          'Parameters vs arguments: parameters = formal variables (a, b). Arguments = actual values passed (3, 5). Pass by value: copy of value. Pass by reference: reference to variable',
          'Return statement: exits function, returns value. Function continues after return. Function without return: returns undefined/null',
          'Scope in functions: parameters and local variables exist only in function. Cannot access from outside. Global variables accessible inside (bad practice)',
          'Recursion: function calling itself. Base case (stop condition) essential, otherwise infinite recursion. Example: factorial(n) = 1 if n≤1, else n × factorial(n-1)',
          'Recursion call stack: each recursive call pushed onto call stack. Deep recursion: stack overflow risk. Iterative solution often safer',
          'Default parameters: function(x = 5) { use x } If x not provided, uses 5. Useful for optional parameters',
          'Variable arguments: some languages allow variable number of arguments. function(args...) handles any number of arguments. Collected into array',
          'Anonymous functions: functions without names. Used as callbacks. JavaScript: const add = (a,b) => a+b; Called via variable: add(3,5)',
          'Higher-order functions: functions taking/returning functions. map(array, function) applies function to each element. Enables functional programming',
          'Closure: function accessing variables from enclosing scope. Inner function "remembers" outer variables even after outer function returns. Useful for: private data, callbacks'
        ],
        tip: 'Functions essential for code reuse (DRY). Parameters are inputs, return value is output. Local scope for parameters. Recursion elegant but risky (stack overflow). Closures powerful but confusing initially.',
        example: 'Function to calculate factorial: function fact(n) { if(n<=1) return 1; else return n*fact(n-1); } fact(5) = 5×4×3×2×1 = 120. Recursive calls: fact(5)→fact(4)→fact(3)→fact(2)→fact(1)→1, then multiply back up.'
      },
      {
        ref: '3.5',
        title: 'Algorithms & Big-O Complexity',
        points: [
          'Algorithm: step-by-step procedure to solve problem. Correctness matters, but efficiency also crucial. Different algorithms for same problem: different speeds',
          'Big-O notation: describes how algorithm performance scales with input size (n). O(1) constant: always same speed. O(n) linear: 2× larger input = 2× slower. O(n²) quadratic: 2× input = 4× slower',
          'O(log n) logarithmic: doubling input adds 1 step (binary search). O(n log n) linearithmic: fast sorting (merge sort). O(2ⁿ) exponential: grows explosively (infeasible for n>30)',
          'Linear search: check each element until found. If not found, check all n elements. Average n/2, worst n. Big-O: O(n). Simple, no requirements',
          'Binary search: halve search space each time. 1M items → ~20 checks. Requires sorted data. Big-O: O(log n). Much faster than linear for large n',
          'Sorting algorithms: Bubble sort (simple, O(n²)), Merge sort (fast, O(n log n)), Quick sort (fast average, O(n²) worst). Choice matters for large data',
          'Bubble sort: compare adjacent pairs, swap if wrong order. Repeat until sorted. Simple to understand, terrible for large data. 10,000 items: very slow',
          'Merge sort: divide-and-conquer. Split in half, recursively sort halves, merge results. Guaranteed O(n log n). Requires extra memory. Preferred for guaranteed speed',
          'Quick sort: pick pivot, partition into smaller/larger, recursively sort. Average O(n log n), worst O(n²) with bad pivot choice. Often faster in practice than merge sort',
          'Time vs space trade-off: algorithms that run faster often use more memory. Hash tables (O(1) lookup) use more memory than arrays. Choose based on constraints',
          'Practical impact: for 1M items, O(n) = 1M operations. O(n²) = 1 trillion operations (10,000× slower). Algorithm choice more important than CPU speed',
          'Optimisation techniques: eliminate redundant operations, use appropriate data structures, cache results (memoization for recursive functions), parallelise when possible'
        ],
        tip: 'Big-O measures worst-case (or average). O(n) linear acceptable, O(n²) suspect. O(log n) excellent (binary search). O(2ⁿ) exponential disaster. For 1M items: O(n)=fast, O(n²)=unusable.',
        example: 'Searching 1 million sorted items for value 50: Linear search = 500,000 checks average. Binary search = 20 checks (log₂(1M)≈20). 25,000× faster! Algorithm choice beats CPU speed.'
      },
      {
        ref: '3.6',
        title: 'Debugging & Testing',
        points: [
          'Bug: error in code causing incorrect behaviour. Debugging: finding and fixing bugs. Tools: print statements, debugger (breakpoints, step-through), logging',
          'Syntax errors: code structure wrong. Missing semicolon, mismatched brackets, undefined variables. Compiler/interpreter catches before running. Easy to fix',
          'Logic errors: code runs but produces wrong output. Algorithm wrong, incorrect calculation, wrong condition. Hardest to find (no error message). Requires testing to discover',
          'Runtime errors: crash during execution. Division by zero, invalid array index, null pointer exception. Handled via error handling (try-catch blocks). Prevents crash',
          'Breakpoint: pause execution at specific line. Debugger stops, shows variable values, program state. Step through: execute one line at a time. Critical for understanding logic',
          'Watch variable: monitor variable during execution. Debugger shows when it changes, what value it has. Identify where unexpected change occurs',
          'Unit test: test individual function. Test single responsibility. Example: test_add() calls add(2,3), asserts equals 5. Run before/after changes catch regressions',
          'Integration test: test multiple components together. Example: test database save + retrieve. Ensures components work together correctly',
          'System test: test entire system. Real data, real workflows. Catches end-to-end issues. Time-consuming but essential before production',
          'Test cases: design test inputs covering all scenarios. Normal cases (expected input), edge cases (boundary values: 0, negative, very large), error cases (invalid input)',
          'Test-driven development (TDD): write test first, then implement to pass test. Benefits: clearer requirements, fewer bugs, easier refactoring',
          'Defensive programming: assume inputs might be wrong. Validate: check ranges, types, nulls. Fail gracefully with meaningful error messages. Prevents cascading failures'
        ],
        tip: 'Syntax errors = compiler catches. Logic errors = hard to find (write tests). Debugger = breakpoints + step-through. Unit tests catch bugs early. Edge cases catch boundary bugs.',
        example: 'Function to divide: divide(a, b) should handle b=0 (division by zero). Defensive: if(b==0) throw Error("Cannot divide by zero"). Test: test_divide_by_zero() expects error. Without test, error missed until production.'
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
        title: 'Network Fundamentals & Communication',
        points: [
          'LAN (Local Area Network): computers in small geographical area (home, office, school) connected via Ethernet cable or WiFi. High speed (Gbps), low latency (ms)',
          'WAN (Wide Area Network): computers across large area (cities, countries, continents) connected via internet. Lower speed than LAN, higher latency. Internet = largest WAN',
          'Ethernet: wired network using twisted-pair cable (Cat5, Cat6) or fiber optic. Standards: 100Mbps (older), 1Gbps (common), 10Gbps (modern). Reliable, no interference',
          'WiFi (802.11): wireless network. Standards: 802.11n (54Mbps), 802.11ac (1.3Gbps), 802.11ax (9.6Gbps). Convenient but slower, more latency, interference from walls/other networks',
          'IP address: unique identifier for device on network. IPv4: 32-bit, written as dotted decimal (192.168.1.1). Allows 2³²≈4.3 billion addresses. IPv6: 128-bit, allows 2¹²⁸ addresses (for future)',
          'MAC address: unique identifier for network interface card (NIC). 48-bit, written as hex (00:1A:2B:3C:4D:5E). Used for local network communication (ARP)',
          'IP (Internet Protocol): routing data across networks. Routers look at IP addresses, forward packets toward destination. IPv4 addresses divided into classes (public/private), subnets',
          'Private IP addresses: non-routable on internet. 10.0.0.0-10.255.255.255, 172.16.0.0-172.31.255.255, 192.168.0.0-192.168.255.255. NAT (Network Address Translation) translates private to public',
          'Subnet mask: determines which portion of IP is network, which is host. 255.255.255.0 = first 3 octets are network. Affects how routing works',
          'Gateway: router between LAN and WAN. Default gateway: router packets sent to reach outside networks. Example: 192.168.1.1 typically your home router',
          'DNS (Domain Name System): translates human-readable names (google.com) to IP addresses (142.251.41.14). Hierarchical: root nameservers → top-level domain → authoritative servers. UDP port 53',
          'DHCP (Dynamic Host Configuration Protocol): automatically assigns IP addresses to devices. Lease period (hours/days). Simplifies network admin vs manual IP assignment'
        ],
        tip: 'IP = internet address (routing), MAC = local network address (switching). LAN fast/local, WAN slow/remote. DNS translates names to IPs. Private IPs for internal networks.',
        example: 'Visiting google.com: browser queries DNS server ("192.168.1.1") asking for google.com IP. DNS (root server→google\'s nameserver) returns 142.251.41.14. Browser initiates TCP connection to that IP. Sends HTTP request.'
      },
      {
        ref: '4.2',
        title: 'Network Protocols & Data Transfer',
        points: [
          'TCP/IP stack: layered model of network protocols. Layer 1 (Physical): wires/radio. Layer 2 (Data Link): Ethernet, WiFi, MAC addresses. Layer 3 (Network): IP routing. Layer 4 (Transport): TCP, UDP. Layer 7 (Application): HTTP, FTP, DNS',
          'TCP (Transmission Control Protocol): reliable, ordered delivery. Establishes connection (3-way handshake), sends data, verifies receipt. Slower than UDP, but guaranteed delivery. Used for: web browsing, email, file transfer',
          '3-way handshake: Client sends SYN (synchronisation) to server. Server responds SYN-ACK. Client sends ACK back. Connection established. Ensures both sides ready',
          'UDP (User Datagram Protocol): unreliable, fast, no connection. Sends packets independently. No guarantee of delivery or order. Used for: video streaming, online gaming, VoIP (can afford to lose packets)',
          'TCP vs UDP: TCP = reliable but slower (overhead), UDP = fast but unreliable. Choice depends on application: email (TCP), video call (UDP), file download (TCP)',
          'Port: identifies service on a device. IP address + port = unique endpoint. Well-known ports: 80 (HTTP), 443 (HTTPS), 25 (SMTP email), 53 (DNS). Ports 0-1023 reserved, 1024+ user assignable',
          'HTTP (HyperText Transfer Protocol): protocol for web. Request-response model. Methods: GET (retrieve), POST (submit), PUT (update), DELETE (remove). Stateless (no memory between requests)',
          'HTTPS (HTTP Secure): HTTP + encryption. Uses TLS/SSL for encryption. Data cannot be read if intercepted. Lock icon in browser indicates HTTPS. Port 443',
          'FTP (File Transfer Protocol): file transfer protocol. Username/password authentication. Transfers files efficiently. Port 21. SFTP (secure FTP) uses SSH for security',
          'Email protocols: SMTP (sending, port 25), POP3 (retrieving, port 110), IMAP (accessing, port 143). SMTPS/POP3S/IMAPS with encryption (ports 465/995/993)',
          'VPN (Virtual Private Network): encrypts all traffic, routes through VPN server. IP address becomes VPN server IP (location spoofing). Uses: privacy on public WiFi, accessing restricted networks',
          'Packet sniffing: capturing network packets. Tools like Wireshark. Unencrypted traffic readable (password on HTTP visible). HTTPS prevents this. Legitimate use: network troubleshooting, security testing'
        ],
        tip: 'TCP = reliable/ordered, UDP = fast/unreliable. HTTP (port 80), HTTPS (port 443), FTP (port 21). Layered protocols: IP routes, TCP ensures delivery, HTTP requests. Encryption with HTTPS essential.',
        example: 'Web request: browser sends HTTP GET request to port 80 (unsecured) or 443 (secured via HTTPS). Server processes, sends HTML back. Unencrypted (port 80): packet sniffing can read. Encrypted (port 443): sniffing shows garbled data.'
      },
      {
        ref: '4.3',
        title: 'Cyber Threats & Attacks',
        points: [
          'Malware: malicious software causing harm. Virus: requires host program, spreads via infected files/downloads. Worm: self-replicating, spreads via network without user action',
          'Trojan horse: disguised as legitimate program (game, utility). Once installed, malicious payload executes. Can steal data, install backdoor for remote access, encrypt files',
          'Ransomware: encrypts user files, demands payment for decryption key. Example: WannaCry (2017, millions affected). Backup essential: encrypted files recovered from backup, no payment needed',
          'Spyware: secretly monitors user activity (keystrokes, browsing, location). Sends data to attacker. Often bundled with free software. Difficult to detect',
          'Phishing: fraudulent emails appearing from trusted source (bank, PayPal). Redirect to fake website. User enters credentials, attacker captures. Social engineering attack',
          'Spear phishing: phishing targeting specific individual/organisation. More personalised, higher success rate. Example: email to CEO requesting wire transfer approval',
          'Pretexting: fabricating scenario to trick user into revealing information. Example: tech support calling claiming "we detected virus on your computer, provide access"',
          'Brute force attack: trying all password combinations. Weak password (6 chars, letters only): 52⁶ ≈ 19B attempts. Modern computers: billions/second = minutes. Strong password (12 chars, mixed): stronger',
          'Dictionary attack: trying common passwords/words. Faster than brute force if password is "password123". Thwarted by rate limiting (max 3 attempts, then 30-min lockout)',
          'SQL injection: inserting malicious SQL into input fields. Example: username field receives "admin\' OR \'1\'=\'1". Becomes query: SELECT * FROM users WHERE username=\'admin\' OR \'1\'=\'1\' (always true). Returns all users',
          'SQL injection prevention: parameterised queries (prepared statements) separate code from data. Database treats input as data, not executable code',
          'Cross-Site Scripting (XSS): injecting JavaScript into website. If user visits, JavaScript runs in browser, can steal cookies/sessions. Prevention: sanitise input, output encoding'
        ],
        tip: 'Malware types: virus (needs host), worm (self-spreading), trojan (disguised), ransomware (encrypts). Social engineering: phishing (fake emails), pretexting (fake scenario). Technical: SQL injection (database), brute force (passwords).',
        example: 'Phishing attack flow: 1) Attacker sends email appearing from "PayPal" with link. 2) User clicks, goes to fake PayPal site (looks real). 3) User enters username/password. 4) Attacker captures credentials. 5) Attacker logs into real account, transfers money/steals info.'
      },
      {
        ref: '4.4',
        title: 'Security Measures & Encryption',
        points: [
          'Encryption: scrambles data into unreadable form using cryptographic key. Only someone with key can decrypt. Two types: symmetric and asymmetric',
          'Symmetric encryption: one key encrypts/decrypts. Fast, efficient. Problem: key distribution (how to securely share key?). Example: AES (Advanced Encryption Standard)',
          'Asymmetric encryption: public/private key pair. Public key encrypts, private key decrypts. Can encrypt without needing to share secret key. Slower than symmetric',
          'RSA encryption: widely used asymmetric algorithm. Based on difficulty of factoring large numbers. 2048-bit key: ~300 decimal digits. Computationally infeasible to break',
          'Hybrid encryption: combine both. Asymmetric to encrypt symmetric key (solves distribution), symmetric to encrypt actual data (fast). Used in HTTPS',
          'Hashing: one-way function producing fixed-length hash. Input "password123" → hash "8d969eef6ecad3c29a3a873fba8a4f7f". Cannot reverse (one-way). Small change in input = completely different hash',
          'Hash functions: MD5 (128-bit, broken, don\'t use), SHA-1 (160-bit, deprecated), SHA-256 (256-bit, current standard), SHA-3 (newer). Same input always produces same hash',
          'Password storage: database stores password hash, not plaintext. User logs in: hash entered password, compare to stored hash. If database breached, hashes useless (can\'t reverse)',
          'Rainbow tables: pre-computed hashes of common passwords. Example: hash of "password" already known. Defender solution: salting',
          'Salting: add random string to password before hashing. hash("password123" + "a7x9k2m1") different from "password123" + "q2w5p9l4". Each password has unique salt. Thwarts rainbow tables',
          'bcrypt/Argon2: password hashing algorithms with salt built-in. Intentionally slow (computational cost increases with time). Brute force on hash table infeasible. Modern best practice',
          'HTTPS/TLS: HTTP encrypted with TLS (Transport Layer Security). Browser-server negotiation: agree on cipher suite, exchange keys, encrypt data. Man-in-the-Middle attack prevented'
        ],
        tip: 'Symmetric (one key, fast), asymmetric (public+private, slow). Hashing (one-way, passwords). Salt (prevents rainbow tables). HTTPS = HTTP encrypted with TLS. Password hashing = bcrypt/Argon2.',
        example: 'Password storage: user creates password "MyP@ssw0rd". Server generates salt "x7m2q9k1". Hash = SHA256("MyP@ssw0rd" + "x7m2q9k1") = "a3f7...". Stored: salt + hash. User logs in: hash entered password, compare. Even if database stolen, hash useless.'
      },
      {
        ref: '4.5',
        title: 'Authentication, Authorisation & Access Control',
        points: [
          'Authentication: verifying identity ("who are you?"). Methods: password (what you know), biometric (what you are), hardware token (what you have), multi-factor (combination)',
          'Password requirements: minimum length (8+ chars), complexity (uppercase, lowercase, numbers, symbols). Trade-off: stronger passwords harder to remember. Password managers solve this',
          'Biometric authentication: fingerprint, face recognition, iris scan. Advantages: convenient, hard to forge. Disadvantages: privacy concerns, false rejection rate, cannot reset if compromised',
          'Two-factor authentication (2FA): requires two methods. Password + SMS code (something you know + something you have). Even if password stolen, attacker needs phone. Greatly increases security',
          'Multi-factor authentication (MFA): 3+ methods. Password + SMS + biometric. Stronger but more inconvenient. Used for high-security systems (banking, government)',
          'Authorisation: determining what authenticated user is allowed to do ("what are you allowed to do?"). Different from authentication (who ≠ permissions)',
          'Access control: system of authorisation. Role-based: user has role (admin, user, guest), role has permissions. Attribute-based: permissions based on attributes (IP address, time, department)',
          'Least privilege principle: user gets minimum permissions needed for job. Admin shouldn\'t be always-admin (reduces damage if compromised). Use admin access only when needed',
          'Session management: after login, server creates session token. Client includes token in requests (proof of authentication). Session expires after inactivity or time limit. Prevents indefinite access',
          'Session hijacking: attacker steals session token, impersonates user. Prevention: HTTPS (encrypts token), secure cookies (only over HTTPS), token rotation (issue new token periodically)',
          'Account lockout: after N failed login attempts, account locked temporarily. Prevents brute force attacks (slows attacker to 3 attempts per 30 min instead of infinite)',
          'Security audit: logging authentication/authorisation events. Who logged in when, what actions performed, failed attempts. Enables detection of suspicious activity, forensics after incident'
        ],
        tip: 'Authentication = who (password, biometric). Authorisation = what (permissions). 2FA = password + SMS (strong). Least privilege = minimum permissions needed. Log everything for audit trail.',
        example: 'Web application login: 1) User enters username/password. 2) Server hashes password, compares to database. 3) Match → create session token (random string). 4) Token sent to client. 5) Client includes token in all requests. 6) Server validates token. 7) User logged out → token invalidated.'
      }
    ]
  }
];
