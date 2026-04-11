// ══════ BUSINESS: Topic Notes (OCR J204) ══════

const BUSINESS_DATA = [
  {
    section: '1. Business Activity',
    icon: '💼',
    color: '#DC2626',
    topics: [
      {
        ref: '1.1',
        title: 'Business Objectives & Purpose',
        points: [
          'Business: organisation that produces goods/services to meet customer needs and generate profit',
          'Business objectives: long-term goals. Profit maximisation (make as much profit as possible), growth (expand size/revenue/market share), survival (stay in business, especially during downturns), social objectives (help community), stakeholder satisfaction (keep stakeholders happy)',
          'Primary objective: varies by business. Startup = survival. Mature company = profit. Charity = social. Aim = overarching purpose; objectives = measurable targets to achieve aim',
          'SMART objectives: Specific (clear what\'s being achieved), Measurable (can track progress), Achievable (realistic given resources), Relevant (related to business aims), Time-bound (deadline set)',
          'Purpose of business: satisfy customer needs profitably, provide employment, contribute to economy, generate returns for owners, deliver quality products/services',
          'Stakeholder objectives: owners want profit/growth, employees want wages/job security, customers want value/quality, suppliers want reliable payment, community wants jobs/sustainability, government wants tax revenue/job creation'
        ],
        tip: 'Different stakeholders have CONFLICTING objectives. Growth might mean redundancies (bad for employees). Low prices benefit customers but reduce profit (bad for owners).',
        example: 'Coffee shop objective: "increase profit by 25% within 12 months". SMART: Specific (25% profit increase), Measurable (can calculate), Achievable (with right strategy), Relevant (profit growth), Time-bound (12 months).'
      },
      {
        ref: '1.2',
        title: 'Stakeholders & Business Decisions',
        points: [
          'Stakeholder: anyone affected by/interested in business. Internal: owners, employees, managers. External: customers, suppliers, competitors, community, government, banks',
          'Owners/shareholders: provide capital, expect return on investment, want business to grow and be profitable. Risk if business fails',
          'Employees: need wages, job security, good working conditions, career development. Affected by business decisions (redundancies, relocations, wage cuts)',
          'Customers: want good quality, fair price, reliable supply, good service, ethical sourcing. Affected by pricing, product changes',
          'Suppliers: want reliable orders, on-time payment, long-term contracts. Affected by business scale-back or switching suppliers',
          'Community: wants jobs, tax contributions, environmental responsibility, no negative impacts (pollution, congestion)',
          'Government: wants tax revenue, employment, compliance with law, economic growth. Regulates business through legislation',
          'Competing interests: downsizing harms employees/community but increases profit. Cheap production might exploit workers. Business must balance stakeholders',
          'Consultation: good businesses consult stakeholders before major decisions. Employees: redundancy meetings. Community: planning proposals. Suppliers: expansion plans'
        ],
        tip: 'Exam often asks: "How does this decision affect different stakeholders?" Show you understand stakeholders have different interests.',
        example: 'Decision: move factory overseas for cheaper labour. Owners: reduced costs, higher profit ✓. Employees (old location): job losses ✗. Community (old): unemployment ✗. Customers: lower prices ✓. New country workers: jobs ✓.'
      },
      {
        ref: '1.3',
        title: 'Business Plans & Risk Assessment',
        points: [
          'Business plan: detailed document outlining business idea, market research, operations, marketing strategy, financial projections. Essential for loans, attracting investors, guiding decisions',
          'Contents: executive summary (overview), business description (what it does), market analysis (demand, competition), marketing strategy (how to attract customers), financial projections (profit forecasts, break-even), funding requirement (how much capital needed)',
          'Purpose: secures funding (banks want to see plan before lending), provides direction for staff, identifies potential problems early, measures progress against targets',
          'Market research in plan: primary (surveys, focus groups) show real customer demand. Secondary (industry reports) show market trends. Together justify viability',
          'Financial projections: realistic (not overly optimistic). Include startup costs (equipment, premises), fixed costs (rent, salaries), variable costs (materials), revenue estimates',
          'Risk analysis: identify risks (competition, changes in demand, economic downturn, key staff leaving), probability (likely?), impact (how bad?), mitigation (what will you do?)',
          'Common risks: market risk (demand lower than projected), financial risk (can\'t pay back loans), operational risk (production problems), external risk (recession, regulation changes)'
        ],
        tip: 'Business plans aren\'t just for banks — they\'re a roadmap for the business itself. Realistic plans (with conservative estimates) are better than overoptimistic ones.',
        example: 'Start coffee shop: plan shows £50k startup (equipment, fitting out), £3k monthly fixed costs (rent, staff), £2 variable cost per coffee, sell 300/month at £4.50 = £1,350 profit/month. Identifies risk: new competitor might open, mitigation: loyalty program.'
      },
      {
        ref: '1.4',
        title: 'Location & Factors Affecting Business',
        points: [
          'Location decisions crucial: retail (high street visibility, customer footfall), manufacturing (transport access, labour availability), online (less location-dependent)',
          'Factors affecting location: customer accessibility (can customers reach easily?), transport links (for delivery, staff commutes), cost of premises (rent/rates), skilled labour availability, supplier proximity, competition, local taxes/incentives',
          'Retail location: needs customer footfall. Town centres have high footfall but high rent. Out-of-town has lower rent but fewer passing customers',
          'Manufacturing location: needs transport access (rail, motorway), skilled workers, space for expansion, proximity to suppliers or customers (reduces transport costs)',
          'Online business: less location-dependent (can be anywhere), needs reliable internet, warehouse space for stock, logistics partners',
          'Government incentives: may offer tax breaks, subsidised premises, grants to encourage business in deprived areas',
          'Relocation: moving business is expensive (new premises, staff retraining, lost customers) but might be necessary (overcrowding, changing customer base, cost savings)',
          'International location: lower costs (Asia manufacturing), market access (locating in EU for EU market), but regulatory complexity, language barriers, quality control challenges'
        ],
        tip: 'Location affects costs (high rent vs low rent = different profit margins), customer access, and operational efficiency. Good location decision requires weighing multiple factors.',
        example: 'Coffee shop: high street location (£5k/month rent) attracts 500 customers/week. Out-of-town mall (£1.5k/month) attracts 200/week. Trade-off: pay more rent for more customers, or accept lower footfall for cheaper premises?'
      },
      {
        ref: '1.5',
        title: 'Business Structures & Legal Forms',
        points: [
          'Sole trader: one person owns business. Simplest structure. Advantages: easy to set up (no paperwork), keeps all profit, fast decisions (no consultation needed), tax flexibility. Disadvantages: unlimited liability (personal assets at risk if sued), difficult to raise capital (personal savings only), long hours, isolated decision-making',
          'Partnership: 2+ people own business. General partnership: all partners liable. Limited partnership: some partners have limited liability (dormant, don\'t work in business). Advantages: shared capital, shared workload, professional credibility (multiple owners). Disadvantages: profit shared, unlimited liability (general partners), partnership disputes, one partner\'s decisions bind others',
          'Private Limited Company (Ltd): incorporated legal entity separate from owners (shareholders). Limited liability: shareholders\' risk limited to investment amount. Controlled by directors. Advantages: limited liability, credibility (Ltd name), can raise capital by selling shares (to friends/family, not public). Disadvantages: complex paperwork, costly to set up, more regulation, profit taxed twice (company + shareholder)',
          'Public Limited Company (Plc): can sell shares publicly on stock exchange. Much larger, more capital. Advantages: large capital raising ability, credibility, shares traded publicly. Disadvantages: expensive to set up, heavy regulation, scrutiny from shareholders and media, pressure for short-term profit',
          'Social Enterprise: profit-motivated but primarily for social/environmental benefit. Example: fair-trade coffee company (profit secondary to fair wages for farmers)',
          'Cooperative: owned by workers/customers/suppliers. Democratic control (one person one vote). Profits shared among members. Benefits: fairer workplaces, customer loyalty. Challenges: slower decision-making (consensus needed)',
          'Franchise: franchisee pays fee to use established business model of franchisor. Provides brand, training, systems. Advantages: lower startup risk (proven model), training support. Disadvantages: less independence, ongoing fee payments, quality control by franchisor'
        ],
        tip: 'LIABILITY is key difference. Sole trader/general partners have UNLIMITED liability (personal assets at risk). Ltd/Plc have LIMITED liability (only investment at risk).',
        example: 'Sole trader pizza shop sued for £100k (customer injury). Must pay from personal savings/house. Vs. Ltd pizza shop sued: only limited to company assets, personal house protected.'
      }
    ]
  },
  {
    section: '2. Marketing',
    icon: '📊',
    color: '#2563EB',
    topics: [
      {
        ref: '2.1',
        title: 'Customer Needs & Market Research',
        points: [
          'Customer needs: what customers want/require (quality, price, reliability, choice, convenience, after-sales service, brand status)',
          'Identifying needs: observe customer behaviour, listen to complaints/feedback, survey customers, analyse sales data, competitor research',
          'Market research: systematic investigation of market to understand customers, competition, trends',
          'Primary research: collecting new data directly. Methods: surveys (questionnaires, online polls), focus groups (small group discussion), interviews (one-on-one), observations (watching customer behaviour), experiments (A/B testing)',
          'Advantages primary: specific to your business, up-to-date, you control methodology. Disadvantages: expensive, time-consuming, small sample (not fully representative)',
          'Secondary research: using existing data. Sources: government statistics, industry reports, competitor websites, trade journals, academic research, news articles',
          'Advantages secondary: cheap, quick, large sample sizes. Disadvantages: may not be relevant to your specific needs, outdated, competitor data incomplete',
          'Market size: total potential sales for a product category. Market growth: is it expanding (growing demand) or shrinking? Informs investment decisions',
          'Sampling: choosing who to survey. Random (everyone has equal chance), stratified (ensure representation of age groups, income levels), quota (set number from each group)',
          'Questionnaire design: clear questions (not ambiguous), avoid leading questions ("Don\'t you think product X is great?" — biased), multiple choice for easy analysis, include demographics'
        ],
        tip: 'Primary = YOU collect (specific, current, expensive). Secondary = already exists (cheap, quick, may not fit). Best practice: use BOTH.',
        example: 'Starting juice bar: primary research: survey 200 local office workers on price they\'d pay, favourite flavours. Secondary research: UK juice market growing 5% annually, competitors\' prices. Combined data informs pricing and menu.'
      },
      {
        ref: '2.2',
        title: 'Market Segmentation & Targeting',
        points: [
          'Market segmentation: dividing market into groups with similar characteristics (segments have different needs/preferences)',
          'Demographic segmentation: by age, gender, income, family size, occupation, education. Example: luxury car brand targets high-income professionals; budget airline targets cost-conscious families',
          'Psychographic segmentation: by lifestyle, values, personality, attitudes. Example: eco-conscious consumers (green products), thrill-seekers (extreme sports)',
          'Geographic segmentation: by location (country, region, urban/rural). Example: restaurant chain located in city centers; farming equipment mainly to rural areas',
          'Behavioural segmentation: by shopping habits, brand loyalty, usage rate, price sensitivity. Example: loyal customers (repeat buyers) vs price-sensitive (switch brands easily)',
          'Benefits of segmentation: targeted marketing (relevant messages to right group), efficient spending (don\'t waste on irrelevant customers), product development (tailor to segment needs), pricing (charge what segment can afford)',
          'Target market: segment you decide to focus on. Must be: identifiable (can find them), measurable (size quantifiable), accessible (can reach with marketing), profitable (worth targeting)',
          'Positioning: how you want product perceived relative to competitors. Premium (high quality, high price) vs value (decent quality, low price) vs niche (specialist, small market)'
        ],
        tip: 'All customers are NOT the same. Segmentation recognises different groups want different things. Better marketing targeting increases sales.',
        example: 'Smartphone market: Apple targets premium (high income, brand loyalty), Xiaomi targets price-conscious, Samsung targets middle market. Each segment has different needs: Apple = premium features, Xiaomi = value for money, Samsung = balance.'
      },
      {
        ref: '2.3',
        title: 'The Marketing Mix (4Ps)',
        points: [
          'Marketing mix: combination of product, price, place, promotion. All must work together — inconsistency confuses customers',
          'PRODUCT: physical item or service. Decisions: features (what can it do?), quality (how durable/reliable?), design (aesthetics), branding (name, logo, image), packaging (attracts customers, protects product)',
          'Product development: invention of new product or improvement of existing. Stages: idea generation (brainstorm), testing (prototypes), production (scale up), launch (market introduction), growth (rising sales), maturity (peak sales), decline (falling sales, replace with new product)',
          'PRICE: amount customer pays. Pricing strategy: cost-plus (cost + markup, ensures profit), competitive (match competitor prices), penetration (low price to gain market share, then raise), premium (high price signals quality), psychological (£9.99 vs £10 seems cheaper)',
          'Price elasticity: how quantity demanded changes with price. Elastic: big quantity change when price changes (luxury goods, many substitutes). Inelastic: quantity stays same (necessities, no substitutes). Affects pricing power',
          'PLACE (Distribution): how/where customers access product. Direct: company sells to customer (e.g., factory shop, online). Indirect: via retailers/wholesalers (e.g., supermarket shelf). Omnichannel: online + offline channels',
          'Distribution decisions: exclusive (limited retailers, premium image), selective (multiple retailers, balance), intensive (many retailers, easy access)',
          'PROMOTION: communicating product benefits to encourage purchase. Advertising (TV, online, print), sales promotions (discounts, loyalty schemes, buy-one-get-one), PR (positive publicity), sponsorship (associate with events/people), personal selling (sales staff)',
          'Digital marketing: online advertising (Google Ads, Facebook), social media (Instagram, TikTok), email campaigns, influencer marketing, content marketing (blogs, videos), SEO (appear in search results)',
          'Promotional mix integration: consistent message across all channels. Premium product requires premium advertising (not discount-focused), Budget product promoted via price deals'
        ],
        tip: 'All 4Ps must ALIGN. Premium product (P1) + cheap price (P2) = confused customers. Must be consistent.',
        example: 'Apple iPhone: premium product (P1: latest tech, quality materials) + premium price (P2: most expensive) + selective distribution (P3: own stores + premium retailers) + aspirational marketing (P4: "Think Different"). All aligned.'
      },
      {
        ref: '2.4',
        title: 'Product Life Cycle',
        points: [
          'Product life cycle: stages from launch to withdrawal. 5 stages: development (design, testing), introduction (launch, low sales, high marketing spend), growth (sales rising, profit growing, competitors enter), maturity (peak sales, maximum profit, high competition, price wars), decline (sales falling, profit declining, market saturation)',
          'Development: before launch. Heavy R&D costs, no revenue yet. Requires secure funding. Can take months/years',
          'Introduction: new product launched. Customers unaware (need heavy promotion). Sales low, prices often high (recover R&D costs). Few competitors. Profit often negative (marketing costs exceed sales)',
          'Growth: sales rise rapidly, profit increases, economies of scale (mass production = lower cost/unit), competitors enter attracted by profit, price may drop due to competition',
          'Maturity: peak sales, maximum profit, many competitors, price wars (profit margins squeeze), focus shifts to brand loyalty/customer retention rather than sales growth, marketing spend maintained but less growth-focused',
          'Decline: sales falling (customers switch to newer products or substitutes), profit declining, competitors leaving, business decides: continue with cost cuts, or withdraw product',
          'Extension strategies to prolong maturity: repackage product (new flavours, sizes), find new uses (aspirin = pain relief, but also heart health), enter new markets (sell internationally), refresh brand (updated logo, marketing)',
          'Cash flow by stage: development/introduction = negative cash (spending > revenue), growth/maturity = positive (revenue > costs), decline = depends on cost cuts',
          'Portfolio management: successful companies have products in different lifecycle stages. Growing products fund declining products. Mature products provide cash flow'
        ],
        tip: 'Different stages require different marketing. Introduction = build awareness, Growth = beat competitors, Maturity = defend market share, Decline = manage withdrawal.',
        example: 'iPhone lifecycle: introduction (2007, high price, limited features), growth (features added, market grows), maturity (now — many models, price competition), future decline as replaced by newer tech.'
      },
      {
        ref: '2.5',
        title: 'Branding & Brand Management',
        points: [
          'Brand: identity and reputation of product/company. Includes name, logo, colours, values, customer experience, perceived quality',
          'Brand value: intangible asset. Apple brand worth more than company assets — customers willing to pay premium for brand',
          'Brand loyalty: customers repeat purchase, resist competitors, willing to pay premium. Built through: consistent quality, emotional connection, good customer service, brand heritage (trusted over time)',
          'Strong brand advantages: can charge premium prices (customers accept higher cost), easier to launch new products (brand trust transfers), customer retention (cheaper than acquiring new customers), pricing power during inflation',
          'Brand extensions: using established brand for new products. Risk: if new product fails, harms main brand. Example: Virgin extended from airline to mobile phones, banking, music — but extension failed in cola',
          'Rebranding: changing brand image. Reasons: image outdated, negative associations, strategic pivot. Risks: alienate loyal customers, expensive (new marketing needed)',
          'Brand positioning: how brand perceived vs competitors. Premium positioning (luxury, high price, exclusivity), mass market (accessible, affordable), niche (specialist, small loyal group)',
          'Brand communication: visual identity (logo, colours, design consistent across touchpoints), messaging (brand values communicated), experience (product/service matches brand promise)',
          'Own brand vs manufacturer brands: retailers launch own brands (supermarket cola) cheaper than brands like Coca-Cola. Threatens manufacturer brands but increases retailer profit'
        ],
        tip: 'Brand is NOT just logo. It\'s customer perception of entire company. Strong brands survive price increases and competition.',
        example: 'Coca-Cola: brand so strong it charges premium vs generic cola, survives taste changes, competes globally. Brand heritage (1886) builds trust. Failure: New Coke (trying to change brand) — customers rejected.'
      }
    ]
  },
  {
    section: '3. People',
    icon: '👥',
    color: '#059669',
    topics: [
      {
        ref: '3.1',
        title: 'Organisational Structure',
        points: [
          'Organisational structure: how roles, responsibilities, authority are arranged. Affects decision-making speed, communication, employee motivation',
          'Hierarchical structure: layers of management (CEO → Directors → Managers → Staff). Clear chain of command, authority flows downward, each person reports to one manager',
          'Advantages hierarchical: clear lines of authority (knows who\'s in charge), specialisation (each person has specific role), easy to manage large organisations',
          'Disadvantages hierarchical: slow decision-making (must go through layers), poor communication (top-down, filtered), less employee empowerment (little input on decisions), can be inflexible',
          'Flat structure: few management layers, wider span of control (managers oversee many staff). Examples: startups, creative agencies, some tech companies',
          'Advantages flat: fast decisions (less approval needed), good communication (everyone talks), employee empowerment (input valued), lower management costs',
          'Disadvantages flat: chaos if grown too much (too many direct reports), limited career progression (few management roles), dependent on good communication skills from all',
          'Choosing structure: size (small = flat, large = hierarchical), industry (tech/creative = flat, finance/manufacturing = hierarchical), strategy (innovation = flat, efficiency = hierarchical)',
          'Matrix structure: reporting to multiple managers (project manager + functional manager). Combines benefits of hierarchical (clear roles) and flat (flexibility)',
          'Span of control: how many staff report to one manager. Narrow span (few staff, close supervision), wide span (many staff, less oversight). Affects quality of management'
        ],
        tip: 'Flat structures are fashionable but can become chaotic. Hierarchical structures are slow but stable. Right choice depends on business needs.',
        example: 'Google (flat): engineers have wide input, fast innovation, but requires self-motivated staff. Bank (hierarchical): clear roles, strict procedures, slow change but reliable.'
      },
      {
        ref: '3.2',
        title: 'Recruitment & Selection',
        points: [
          'Recruitment: finding and hiring right people. Process: identify need (vacancy), create job description (what\'s the role?), advertise (where to recruit from?), screen applicants, interview, assess, select, onboard',
          'Recruitment sources: internal (promote existing staff, knowledge of company, lower cost) vs external (fresh ideas, wider skills, expensive)',
          'Job description: role title, responsibilities, reporting to, salary, benefits, person specification (required qualifications, skills, experience, qualities)',
          'Advertising: job boards (Indeed, LinkedIn), company website, recruitment agencies, word-of-mouth. Choice affects quality/cost of applicants',
          'Application process: CV, application form, cover letter. Purpose: basic information, motivation, fit for role',
          'Shortlisting: filtering applications based on requirements. Experienced recruiters identify best matches',
          'Interviews: final selection stage. Types: one-to-one, panel (multiple interviewers), group (multiple candidates), technical (specific skill assessment)',
          'Interview questions: open-ended ("Tell us about a time..."), scenario-based ("How would you handle...?"), competency-based (STAR: Situation, Task, Action, Result)',
          'Assessment methods: psychometric tests (personality, ability), work samples (perform job-related task), references (previous employer feedback)',
          'Selection criteria: qualifications, experience, skills, culture fit (match with company values), potential for growth. Different weightings per role',
          'Induction: onboarding new employee. Covers: company policies, role training, team introduction, systems/tools training. Good induction reduces turnover, improves performance'
        ],
        tip: 'Good recruitment costs upfront but saves later (bad hires = expensive to replace, damage team morale). First impression matters.',
        example: 'Software developer role: job description specifies Python, 3+ years experience, degree preferred. Advertise on LinkedIn (reaches tech professionals). Interview assesses both technical skills (coding test) and teamwork (scenario questions).'
      },
      {
        ref: '3.3',
        title: 'Training & Development',
        points: [
          'Training: developing employee skills to do current job better and prepare for future roles',
          'Induction training: first few days/weeks. Introduction to company, role-specific training, team introduction, policies/procedures. Critical for new employee confidence',
          'On-the-job training: learning while doing. Experienced colleague supervises, shows how tasks done, corrects mistakes. Cheap, practical, but can be inconsistent (depends on trainer)',
          'Off-the-job training: external courses, workshops, university degree, online learning. More structured, standardised, expensive, time away from work',
          'Skills training: job-specific (software, machinery, customer service), generic (communication, problem-solving), management (leadership, delegation)',
          'Continuous professional development (CPD): ongoing learning throughout career. Industry requirements (doctors need CPD to maintain license), competitive advantage (stay current)',
          'Learning styles: visual (show), auditory (tell), kinesthetic (do). Good training combines methods',
          'Apprenticeships: young people learn trade (electrician, plumber) combining work + study. Cheaper for employer than hiring experienced staff, long-term loyalty',
          'Benefits of training: improved performance (staff do job better), increased motivation (feel valued), reduced mistakes, lower staff turnover (career progression shown), improved customer service',
          'Costs of training: direct (course fees, trainer salary), indirect (time away from work), risk employee leaves after training (but don\'t train = fall behind)',
          'Evaluation: does training improve performance? Measure: higher productivity, fewer errors, improved customer feedback, staff retention, promotion rates'
        ],
        tip: 'Training is investment not expense. It costs upfront but pays off in better staff performance and retention. Poor training = high turnover.',
        example: 'Customer service training: induction (company policies, product knowledge), on-the-job (listen to experienced staff handle calls, feedback), off-the-job (communication workshop). Result: faster staff confidence, fewer customer complaints.'
      },
      {
        ref: '3.4',
        title: 'Motivation Methods',
        points: [
          'Motivation: drivers of employee effort and performance. Financial (money) and non-financial (non-money) factors',
          'Financial motivation: wages (salary/hourly), performance bonuses (extra pay for hitting targets), commission (percentage of sales), profit-sharing (employees get share of company profit), share options (own piece of company)',
          'Advantages financial: clear link between effort and reward, attracts quality staff, easy to understand and measure',
          'Disadvantages financial: expensive in tough times, may demotivate if unfair, doesn\'t address underlying issues',
          'Non-financial motivation: recognition (praise, awards), responsibility (trust, important projects), career progression (promotion, training), job satisfaction (meaningful work, autonomy), flexible working (work-life balance)',
          'Herzberg\'s two-factor theory: hygiene factors (pay, conditions, job security) prevent dissatisfaction but don\'t motivate. Motivators (achievement, responsibility, recognition, growth) create satisfaction',
          'Implication: pay £50k vs £60k doesn\'t dramatically motivate if person unhappy with job. But happy person in meaningful role WILL perform well',
          'Taylor\'s scientific management: workers are economically rational, motivated purely by pay. Criticised as dehumanising, ignores other motivations',
          'Job enrichment: make job more interesting by adding variety, responsibility, autonomy. Example: not just processing transactions, but understanding customer needs',
          'Empowerment: giving staff authority to make decisions. Builds trust, increases motivation, requires training. Risk: inconsistent decisions',
          'Culture & values: people want to work for companies they believe in. Transparency, fairness, ethical business practices motivate more than money alone'
        ],
        tip: 'Money matters but isn\'t everything. Demotivated well-paid worker underperforms. Pay competitive levels, then focus on job satisfaction.',
        example: 'Retail job: £10/hr, no recognition, told what to do = low motivation, high turnover. Same job: £11/hr (competitive), recognition for good service, empowerment to solve customer issues = high motivation, low turnover.'
      },
      {
        ref: '3.5',
        title: 'Communication in Business',
        points: [
          'Effective communication: clear information flow, shared understanding, prevents errors, improves coordination',
          'Internal communication: downward (management → staff, policies, goals), upward (staff → management, feedback, ideas), lateral (between departments, collaboration)',
          'Communication methods: meetings (sync, discussion), emails (documentation, wide reach), notices (one-way information), suggestion schemes (employee ideas), team briefings (regular updates)',
          'Barriers to communication: noise (distractions), language (different understanding), cultural differences, information overload (too much information), poor listening',
          'Downward communication: policies must be clear and consistently explained. Managers should confirm staff understands (not just broadcast)',
          'Upward communication: management must genuinely listen to staff feedback. Suggestion schemes, regular 1-on-1s, open-door policy',
          'Two-way communication: better than one-way. Feedback loop ensures message received and understood. More time but fewer errors',
          'Formal vs informal: formal (email, meetings, memos, official) appropriate for important matters. Informal (chat, quick phone calls) good for quick questions but no record',
          'Digital communication: emails, instant messaging, video calls. Fast, documented, but can be misinterpreted (no tone of voice), creates "always on" culture',
          'Company newsletter: keeps entire company aligned on strategy, news, achievements. Builds sense of community',
          'Crisis communication: transparent, timely, honest. Silence during crisis creates rumours. Early, truthful communication maintains trust'
        ],
        tip: 'Most business problems stem from POOR COMMUNICATION. Clear, timely, two-way communication prevents 80% of conflicts.',
        example: 'Company downsizing: poor communication — staff hear from competitors before company announces, rumours spread, morale crashes. Good communication — management explains why, what timeline, support (redundancy packages, retraining).'
      }
    ]
  },
  {
    section: '4. Operations',
    icon: '⚙️',
    color: '#059669',
    topics: [
      {
        ref: '4.1',
        title: 'Production Methods & Efficiency',
        points: [
          'Production: converting inputs (labour, materials, equipment) into outputs (goods/services)',
          'Job production: making one-off items to customer specification. Examples: custom furniture, tailored suit, website design. Advantages: high quality, premium price, customer satisfaction. Disadvantages: expensive, time-consuming, inefficient (retrain workers per job), each job different',
          'Batch production: making identical items in groups. Examples: bakery batches, furniture batches. Advantages: medium cost/quality/speed, can switch between products. Disadvantages: setup time between batches, inventory of batches waiting',
          'Flow production: continuous assembly line (car factory). Advantages: high volume, low cost per unit, efficient. Disadvantages: inflexible (can\'t make variations easily), repetitive work (staff boredom), huge investment in equipment (one product must be successful)',
          'Lean production: eliminating waste (time, materials, effort). Just-in-time (JIT) inventory: materials arrive exactly when needed, not stockpiled. Benefits: lower inventory costs, faster production. Risks: disruption (delay = production stops), supplier quality critical',
          'Quality management: ensuring consistent high quality. Quality control: checking finished products meet standards (spot-checking). Quality assurance: preventing defects throughout process (right first time)',
          'Productivity: output per worker/per hour. Measured: units per hour, revenue per employee. Improved by: technology, training, motivation, process efficiency',
          'Calculating productivity: (total output / total input) × 100. Example: 100 units produced using 50 labour hours = 2 units per hour. Improved to 120 units = 2.4 units/hour = 20% productivity increase',
          'Automation: using machines instead of labour. Advantages: higher output, lower labour costs, consistent quality, 24/7 production. Disadvantages: high capital cost, reduces jobs, inflexible (machine designed for one product)',
          'Capacity: maximum output facility can produce. Capacity utilisation: actual output / maximum capacity. High utilisation = good (fixed costs spread over more units). Too high = quality suffers (overworked staff/machines)'
        ],
        tip: 'Right production method depends on product type and volume. Custom items = job, high volume identical = flow, between = batch.',
        example: 'Car factory: uses flow production (millions of identical cars), automation (robots assemble), JIT (parts delivered daily). Bespoke furniture maker: job production (one piece at a time), hand-crafted, skilled workers.'
      },
      {
        ref: '4.2',
        title: 'Quality Control & Assurance',
        points: [
          'Quality: meeting customer expectations. High quality = few defects, reliable, meets spec',
          'Quality control (QC): inspecting finished products to catch defects. Methods: 100% inspection (check every item — expensive, slow) or sampling (check random items)',
          'Disadvantages QC: detects problems too late (product already made), costs money to inspect, costs more to fix faulty products (scrap or rework)',
          'Quality assurance (QA): preventing defects throughout production. Focus on process (getting it right first time), not just checking end product',
          'QA methods: standardised procedures (everyone does job same way), staff training (understand quality), equipment maintenance (prevent breakdowns), supplier quality checks (good inputs)',
          'Just-in-time production + quality critical: if production must run 24/7 without stoppages, quality must be built in (can\'t afford to discover defects late)',
          'Total quality management (TQM): entire organisation focused on quality. Culture where quality is everyone\'s responsibility, continuous improvement, listening to customer feedback',
          'Cost of quality vs cost of poor quality: investing in quality control/assurance costs upfront (training, systems). Poor quality costs later (recalls, damage to reputation, lost customers). Good quality is cheaper long-term',
          'Quality standards: ISO 9001 (quality management certification), industry-specific standards (food safety standards, building regulations)',
          'Customer complaints: should be welcomed (identify problems) not ignored. Analysis: repeat complaints → systemic problem → fix process'
        ],
        tip: 'Quality issues damage reputation more than initial cost savings. One recall can cost millions and destroy trust.',
        example: 'Car manufacturer: invests in QA (worker training, equipment maintenance, supplier checks) = few defects. Saves money vs recall costs (potentially millions, reputation damage).'
      },
      {
        ref: '4.3',
        title: 'Customer Service',
        points: [
          'Customer service: supporting customers before, during, after purchase. Critical competitive advantage (especially when products similar)',
          'Before purchase: information availability, pre-sales support, advice on choosing right product, responsiveness to enquiries',
          'During purchase: easy ordering, payment options, clear billing, on-time delivery, professional interaction',
          'After purchase: delivery/installation, training (how to use), warranty/guarantee, technical support, complaint handling, maintenance/repairs',
          'Service quality factors: responsiveness (how fast?), reliability (does it work right first time?), assurance (staff knowledgeable and professional?), empathy (do they care about customer?), tangibles (physical appearance)',
          'Complaint handling: receive complaint gracefully (thank customer for feedback), investigate, resolve quickly, apologise genuinely, follow up to ensure satisfaction. Good complaint handling can increase loyalty (customer feels valued)',
          'Complaints as feedback: valuable data on problems (product, service, staff). Should be analysed to identify patterns and fix underlying issues',
          'Service recovery: if something goes wrong, how you fix it matters more than the problem itself. Example: delayed delivery + genuine apology + refund builds loyalty; delayed delivery + no acknowledgment = lost customer',
          'Customer retention: keeping existing customers cheaper than acquiring new ones (up to 10×). Service excellence improves retention',
          'Service standards: what level of service? Fast service (quick to serve) vs personalised service (know customer preferences). Cost-quality tradeoff'
        ],
        tip: 'How you handle problems matters more than avoiding problems. Excellent complaint resolution builds loyalty.',
        example: 'Order arrives late: bad response — "Sorry, nothing we can do". Good response — apology, 10% discount on order, expedite next order free. Customer more loyal after problem resolved well.'
      },
      {
        ref: '4.4',
        title: 'Stock Control & Supplier Relationships',
        points: [
          'Stock: materials/goods held for use/sale. Too much stock: tied up capital, storage costs, risk of obsolescence. Too little: stockouts (can\'t fulfill orders), customer dissatisfaction',
          'Optimal stock level: balance between availability (meet demand) and cost (holding expensive)',
          'Stock control methods: minimum stock level (threshold — order when stock falls below this), economic order quantity (EOQ — order size balancing ordering cost vs holding cost), just-in-time (minimal stock, frequent deliveries)',
          'Just-in-time (JIT): materials arrive exactly when needed. Advantages: low holding costs, less storage space, fresher materials (food). Disadvantages: supply chain disruption = production stops, requires reliable suppliers, increased ordering frequency (small costs add up)',
          'Stock rotation: FIFO (first in, first out) for food/perishables, prevents spoilage',
          'Supplier relationships: critical to business. Work with suppliers to: ensure quality (no defects), reliability (on-time delivery), fair pricing, innovation (suggest improvements)',
          'Single vs multiple suppliers: single supplier (lower cost through volume, strong relationship) vs multiple (competition, backup if one fails)',
          'Supplier negotiation: price (cost important), terms (payment timing), quality levels, reliability, support/service',
          'Ethics in supply chain: ensure suppliers treat workers fairly (no exploitation), environmental responsibility (sustainable practices), transparency (know conditions)',
          'Supply chain resilience: vulnerabilities? (Over-dependence on one supplier? Single country source?) Mitigate with: backup suppliers, safety stock, supplier diversification'
        ],
        tip: 'Supply chain disruptions can halt production. Diversify suppliers and maintain safety stock for critical items.',
        example: 'Electronics manufacturer: relies on one Taiwan chip supplier. Chip shortage halts production. Better: multiple suppliers (different countries, companies), safety stock of critical chips, alternative designs that use different chips.'
      }
    ]
  },
  {
    section: '5. Finance',
    icon: '💰',
    color: '#7C3AED',
    topics: [
      {
        ref: '5.1',
        title: 'Sources of Finance',
        points: [
          'Finance: money needed to start/expand business. Sources: internal (from within business) or external (from outside)',
          'Internal sources: retained earnings (previous profit kept in business), sale of assets (sell equipment/property to raise cash), working capital reduction (sell inventory, collect debts faster)',
          'Advantages internal: no interest to pay, no external control, confidential (private). Disadvantages: limited amount (can only use what you have), reduces cash for other needs',
          'External sources SHORT-TERM (< 1 year): overdraft (negative bank balance, expensive interest), trade credit (suppliers give 30-60 days to pay — free financing)',
          'Overdraft: convenient (access when needed), but expensive (high interest), bank can demand repayment anytime',
          'Trade credit: supplier finance (order goods, pay later). Benefits: improves cash flow (delay payment), negotiable terms. Risk: damage relationship if pay late',
          'External sources LONG-TERM (> 1 year): bank loans (borrow fixed amount, repay with interest over time), venture capital (investors fund startups in exchange for equity — ownership stake)',
          'Bank loans: predictable repayments, interest cost known, lender expects security (if default, can seize asset). Disadvantages: requires credit history/assets, interest payments mandatory',
          'Venture capital: attractive for startups (no need to repay, investor takes risk). Disadvantages: lose ownership stake, investor wants high returns (pressure for rapid growth), loss of control',
          'Crowdfunding: raise small amounts from many people (online platforms). Advantages: public validation (if people fund, product likely good), pre-sales (fund and pre-order). Disadvantages: public failure if don\'t reach target, takes time to campaign',
          'Grants: government/non-profit funding, don\'t need to repay. Advantages: free money. Disadvantages: competitive (many apply), strict requirements (must meet conditions), bureaucratic'
        ],
        tip: 'Different stages need different finance. Startup might use personal savings + crowdfunding. Expansion uses bank loans. Rapid growth uses venture capital.',
        example: 'Startup coffee shop: owner saves £20k (personal), overdraft £10k (working capital), bank loan £30k (equipment). After profit, reinvest earnings.'
      },
      {
        ref: '5.2',
        title: 'Financial Calculations & Metrics',
        points: [
          'Revenue: total money from sales. Revenue = price × quantity sold. Example: 100 units at £20 = £2,000 revenue',
          'Costs: COGS (Cost of Goods Sold — direct costs of making product: materials, labour directly making product). Overheads/fixed costs: rent, insurance, salaries (don\'t change with production volume)',
          'Gross profit: Revenue − COGS. Indicates: how much money after paying direct production costs',
          'Net profit: Gross profit − Overheads. = actual profit after all costs',
          'Profit margin: (Profit ÷ Revenue) × 100. Example: if revenue £1,000, profit £200, margin = 20%. Higher margin = better',
          'Break-even: point where Revenue = Total Costs (no profit, no loss). Break-even point = Fixed Costs ÷ Contribution per Unit',
          'Contribution per unit: Selling Price − Variable Cost per Unit. Example: sell at £10, variable costs £6, contribution = £4. Each sale contributes £4 toward fixed costs',
          'Break-even calculation: If fixed costs £12,000/year, contribution £4/unit. Break-even = 12,000 ÷ 4 = 3,000 units/year must be sold to cover costs',
          'Margin of safety: difference between forecast sales and break-even. Example: forecast 5,000 units, break-even 3,000, margin of safety = 2,000 units (can sell 2,000 fewer and still break-even)',
          'Return on capital employed (ROCE): (Profit ÷ Capital Invested) × 100. Measures: how efficiently capital is used. Example: invest £100k, make £20k profit, ROCE = 20%',
          'Cash flow: timing of money in/out. Important: business can be profitable but cash-poor (customers owe money, suppliers want immediate payment). Cash crisis can kill business'
        ],
        tip: 'Profit ≠ cash flow. Understand the difference. Profitable on paper doesn\'t mean you can pay wages/suppliers.',
        example: 'Business: revenue £100k, COGS £40k, overheads £40k. Gross profit = £60k, net profit = £20k, 20% margin. Break-even = £40k overheads ÷ £60k contribution = requires ~£67k revenue.'
      },
      {
        ref: '5.3',
        title: 'Cash Flow Forecasting',
        points: [
          'Cash flow forecast: predicting money in/out month by month. Critical for startups/new ventures (may not profit immediately)',
          'Cash inflows: sales revenue (actual cash received, not just invoiced), loans/investment (capital injection), sale of assets',
          'Cash outflows: purchases (materials, inventory), wages (staff), overheads (rent, utilities), loan repayments, tax',
          'Timing matters: order materials month 1, sell finished product month 3, receive payment month 4. Cash gap = need working capital to bridge',
          'Positive cash flow: inflows > outflows (money pile increases)',
          'Negative cash flow: outflows > inflows (money pile decreases). Business needs reserves/overdraft to survive',
          'Cash crisis: cumulative cash negative (spent more than earned cumulatively). Can happen even if profitable (profit measured when sale made, cash received later)',
          'Forecasting steps: list expected cash inflows by month, list expected outflows by month, calculate monthly net cash (in − out), calculate cumulative cash (running total)',
          'Actions if forecast shows cash crisis: extend payment terms with suppliers (delay outflows), negotiate faster customer payments (accelerate inflows), reduce overheads, arrange overdraft/loan',
          'Assumptions: sales numbers realistic (not overly optimistic), payment timing accurate (customers really pay when forecast?), don\'t forget seasonality (may be high summer, low winter)'
        ],
        tip: 'Cash flow forecast reveals hidden crises months ahead. Better to plan than panic.',
        example: 'Start coffee shop month 1: buy equipment (−£5k outflow), stock (−£1k), rent (−£1k). Sales month 1 (£2k inflow). Net month 1: −£5k. Need £5k reserves or overdraft to survive month 1 cash gap.'
      },
      {
        ref: '5.4',
        title: 'Income Statements & Financial Position',
        points: [
          'Income statement (profit & loss): shows business profit/loss over period (quarterly/annually). Revenue − Costs = Profit',
          'Structure: Revenue (total sales), minus COGS (−materials, −labour making product), = Gross Profit, minus Overheads (−rent, −salaries, −utilities), = Net Profit/Loss',
          'Example: revenue £100k, COGS £40k, gross profit £60k, overheads £50k, net profit £10k (profitable)',
          'Interpretation: positive net profit = profitable, negative = loss-making. Compare to previous period (improving/declining?)',
          'Statement of financial position (balance sheet): snapshot of assets, liabilities, equity at specific date',
          'Assets: resources business owns. Current assets (cash, inventory, receivables — convert to cash <1 year), fixed assets (equipment, property — long-term)',
          'Liabilities: debts owed. Current liabilities (must pay <1 year: wages, payables), long-term liabilities (loans due > 1 year)',
          'Equity: owner\'s stake in business. = Assets − Liabilities',
          'Example balance sheet: assets £100k (£20k cash, £30k inventory, £50k equipment), liabilities £40k (£10k payables, £30k loan), equity £60k',
          'Interpreting balance sheet: healthy if current assets > current liabilities (can pay short-term debts). Risky if highly leveraged (debt >> equity)',
          'Working capital: current assets − current liabilities. Indicates: can business pay bills? Negative = liquidity crisis'
        ],
        tip: 'Income statement shows profit (profitability). Balance sheet shows financial position (solvency). Need both to assess health.',
        example: 'Company A: income statement shows £10k profit (profitable). Balance sheet shows £100k debt, £20k equity (highly leveraged, risky). Profitable but risky.'
      }
    ]
  },
  {
    section: '6. Influences on Business',
    icon: '🌍',
    color: '#DC2626',
    topics: [
      {
        ref: '6.1',
        title: 'Ethical & Environmental Considerations',
        points: [
          'Ethics: right and wrong behaviour. Ethical business: treats stakeholders fairly, transparent practices, doesn\'t harm environment/people',
          'Ethical issues: worker exploitation (low wages, poor conditions), environmental damage (pollution, waste), deception (misleading advertising), bribery, child labour',
          'Business case for ethics: consumers increasingly care (will pay premium for ethical products, boycott unethical companies), employees care (want to work for ethical companies), trust matters (reputation is asset)',
          'Corporate social responsibility (CSR): business actions benefiting society. Examples: donations to charity, environmental programmes, fair trade sourcing, community projects',
          'Environmental sustainability: operating without harming planet long-term. Issues: carbon emissions (climate change), pollution (air/water), waste (plastic/toxic), resource depletion (overconsumption)',
          'Carbon footprint: total greenhouse gas emissions from business. Reducing: energy efficiency, renewable energy, transport optimisation, supply chain emissions',
          'Circular economy: instead of take-make-waste (linear), use materials again (circular). Examples: recycling programs, designing for durability/repair/reuse, packaging from recycled materials',
          'Ethical sourcing: ensure suppliers treat workers fairly, don\'t damage environment. Fair trade: pay premium price to suppliers (ensures fair wages)',
          'Regulations: environmental laws (emissions limits, waste disposal rules), labour laws (minimum wage, working conditions), data protection (customer privacy)',
          'Stakeholder pressure: investors demand ESG (environmental, social, governance) reporting, employees want ethical employer, customers will switch to ethical competitors'
        ],
        tip: 'Ethics and profitability aren\'t opposed. Ethical companies often perform better long-term (customer loyalty, employee retention, avoid fines).',
        example: 'Fashion company: unethical (fast fashion, worker exploitation, pollution). Costs: negative publicity, boycotts, fines. Ethical alternative: fair wages, sustainable materials. Higher costs but premium prices, loyal customers.'
      },
      {
        ref: '6.2',
        title: 'Economic Factors Affecting Business',
        points: [
          'Macroeconomic: big-picture economic conditions affecting all businesses. Factors: growth, inflation, interest rates, unemployment, exchange rates',
          'Economic growth: increase in national GDP. High growth = consumer spending increases, business expansion, hiring. Negative growth (recession) = lower demand, businesses fail, unemployment',
          'Inflation: rising prices of goods/services. Moderate inflation (2-3%) expected. High inflation: erodes purchasing power (money worth less), wages demand increases (staff costs up), planning difficult (uncertain future costs)',
          'Deflation: falling prices. Sounds good (cheaper for consumers) but problematic: people delay purchases (expecting lower prices), debts become harder to repay (real value increases)',
          'Interest rates: cost of borrowing. Set by central bank (UK: Bank of England). Rising rates: borrowing more expensive (car loans, mortgages more costly), saving more attractive, consumer spending falls',
          'Effect on business: rising rates increase business borrowing costs, slow expansion plans, reduce consumer demand (especially expensive items). Falling rates = reverse',
          'Unemployment: % workforce without job. High unemployment: lower demand, labour available (wages lower). Low unemployment: tight labour market (hard to find staff, wages rise)',
          'Exchange rates: value of £ vs foreign currencies. Strong £: UK exports more expensive (sell less abroad), imports cheaper (overseas sourcing cheaper). Weak £: reverse (good for exporters, bad for importers)',
          'Demand elasticity: how demand changes with economy. Essential goods (food, utilities) = inelastic (demand stable even if prices rise). Luxuries (holidays, designer goods) = elastic (demand falls in recession)',
          'Recession strategies: cost-cutting (reduce overheads), focus on essentials (cut luxury products), maintain quality (don\'t lose loyal customers), market to bargain-hunters'
        ],
        tip: 'Businesses can\'t control macro-economy but must adapt strategy to conditions. Growth time = invest/expand. Recession = conserve/cut costs.',
        example: 'Car manufacturer in recession: demand for new cars falls (people delay purchases). Strategies: reduce production (avoid stockpiles), offer financing (easier to afford), focus on reliable used cars (cheaper option).'
      },
      {
        ref: '6.3',
        title: 'Globalisation & Technology',
        points: [
          'Globalisation: increasing interconnection of economies worldwide. Enabled by: transport (global supply chains), communications (instant contact anywhere), free trade agreements (lower barriers)',
          'MNCs (multinational corporations): operate in multiple countries. Bring capital, technology, jobs. Also: exploit cheap labour, extract resources, low tax rates in some countries',
          'Supply chains: production spread across multiple countries. Each stage where cost-effective. Example: design USA, materials China, assembly Vietnam, sold globally',
          'Advantages globalisation: lower costs (cheaper labour/materials), access to markets (sell globally), competition innovation (forces improvement), consumer choice (products worldwide)',
          'Disadvantages: job losses (rich countries lose manufacturing to poor countries), worker exploitation (poor wages/conditions in low-cost countries), environmental damage (transport emissions, weak regulation countries), cultural homogenisation',
          'Trade agreements: reduce tariffs between countries. EU members have free trade. Brexit UK = new trade barriers with EU (may increase costs)',
          'Technology: digital revolution transforming business. E-commerce (sell online), automation (robots, AI), data analytics (understand customers), communication (video calls, instant messaging)',
          'E-commerce: online sales growing rapidly. Advantages: 24/7 availability, global reach, lower costs (no physical store), personal recommendations (data-driven). Challenges: competition intense, delivery logistics, returns handling',
          'Digital transformation: business processes using digital technology. Examples: cloud computing (storage anywhere), CRM (customer relationship management), automation (reduce manual work)',
          'Cybersecurity: protecting digital assets. Threats: hacking (steal data), ransomware (encrypt files, demand payment), phishing (fake emails). Business must invest in security'
        ],
        tip: 'Globalisation creates winners (consumers, efficient producers) and losers (workers in old industries). Technology creates jobs but disrupts others.',
        example: 'Retail globalisation: Amazon disrupts high streets (jobs lost in shops, delivery jobs created). Technology: online shopping, logistics robots. Winners: customers (cheap, convenient). Losers: shop workers.'
      },
      {
        ref: '6.4',
        title: 'Business Legislation & Compliance',
        points: [
          'Legislation: laws affecting business. Requirements: follow law or face penalties (fines, closure, prosecution)',
          'Employment law: minimum wage, maximum working hours, holiday pay, sick pay, discrimination protection, health & safety, unfair dismissal protection',
          'Health & safety: employer duty to provide safe workplace. Regulations: risk assessments, safety equipment, incident reporting, training. Failure = fines + injured worker claims',
          'Consumer protection: businesses must provide accurate information, safe products, right to refund/complaint, GDPR (protect customer data)',
          'Data protection (GDPR): customer data must be secure, used only as told, customer has right to access/delete data. Violations = heavy fines (up to 4% global revenue)',
          'Competition law: preventing monopolies and unfair practices. Can\'t: collude on pricing, abuse market dominance, misleading advertising',
          'Tax compliance: pay correct tax (income tax, VAT, corporation tax), file accurate returns, by deadlines. Non-compliance = penalties + interest',
          'Environmental regulations: emissions limits, waste disposal requirements, pollution controls. Vary by industry (manufacturing = strict, services = less strict)',
          'Changes in legislation: new laws affect business. Examples: smoking ban in public places (hit pubs/cafes), plastic bag charge (retail cost/benefit), national living wage (cost increase)',
          'Compliance costs: implementing legal requirements (systems, training, audits) is expensive. But non-compliance is riskier (fines worse)',
          'Lobbying: businesses influence legislation (want favourable laws). Industry groups advocate for members. Controversial if ethics questionable'
        ],
        tip: 'Ignorance isn\'t defence. Business responsible for knowing relevant laws. Compliance costs upfront but prevents expensive fines.',
        example: 'Employee works 50 hours/week, paid £8/hour (below minimum £11.44), no holiday pay. Illegal. Business fined, must pay back wages, reputation damaged. Compliance cost (correct wages) is cheaper than fine.'
      }
    ]
  }
];
