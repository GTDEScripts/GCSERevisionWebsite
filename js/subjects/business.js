// ══════ BUSINESS: Topic Notes (OCR J204) ══════

const BUSINESS_DATA = [
  {
    section: '1. Enterprise & Entrepreneurship',
    icon: '💼',
    color: '#DC2626',
    topics: [
      {
        ref: '1.1',
        title: 'Business Ownership & Structure',
        points: [
          'Sole trader: one person owns and runs business. Advantages: simple, low costs, keeps all profit. Disadvantages: unlimited liability (personal assets at risk), long hours, limited capital',
          'Partnership: 2+ people own business. General partnership: all partners liable; Limited partnership: some partners have limited liability',
          'Private Limited Company (Ltd): shareholders own business, managed by directors. Limited liability (shareholders\' risk limited to investment). Cannot sell shares publicly',
          'Public Limited Company (Plc): can sell shares to public on stock exchange. Larger capital, but more regulation and scrutiny',
          'Cooperatives: owned and controlled by members (employees/customers). Democratic decision-making, profits shared among members',
          'Franchise: person (franchisee) pays fee to use established business model of franchisor. Lower risk than startup, but less independence'
        ],
        tip: 'LIABILITY is key difference: sole trader/general partners = unlimited (personal assets at risk), Ltd/Plc = limited (only investment at risk).',
        example: 'Sole trader: local plumber. Partnership: law firm. Ltd: small tech startup. Plc: Apple, Microsoft. Coop: John Lewis (employee-owned).'
      },
      {
        ref: '1.2',
        title: 'Business Aims & Objectives',
        points: [
          'Aims: long-term goals (e.g., "become market leader"). Objectives: short-term, measurable targets (e.g., "increase sales by 20% this year")',
          'Common aims: profit maximisation, growth, market share, social responsibility, survival',
          'SMART objectives: Specific, Measurable, Achievable, Relevant, Time-bound. Example: "increase customer satisfaction score from 7.5 to 8.5 within 6 months"',
          'Mission statement: purpose and values of business. Internal (guides staff) and external (PR) function',
          'Stakeholder objectives: different groups have different goals. Owners want profit, employees want good wages, customers want quality, communities want environmental care'
        ],
        tip: 'Aims are GENERAL, objectives are SPECIFIC and MEASURABLE. Exam asks you to identify which is which.',
        example: 'Aim: "grow the business". Objective: "open 5 new stores in the North by end of 2025".'
      },
      {
        ref: '1.3',
        title: 'Business Start-Up & Failure',
        points: [
          'Why people become entrepreneurs: independence, profit potential, spot market gap, personal fulfillment',
          'Barriers to entry: high startup costs, competition, regulation, lack of skills/experience, access to finance',
          'Business plan: document outlining business idea, market research, financial projections, marketing strategy. Essential for bank loans',
          'Cash flow: movement of money in/out of business. Even profitable businesses can fail if cash flow is poor (paying suppliers before receiving customer payments)',
          'Causes of failure: poor planning, undercapitalisation (insufficient starting money), poor marketing, overexpansion, external shocks (recession, pandemic)',
          'Sources of finance: personal savings, bank loans (interest cost), venture capital (investors fund risky startups, take equity share), crowdfunding, grants'
        ],
        tip: 'PROFIT ≠ CASH FLOW. Profitable on paper but insolvent (no cash) = business dies. Cash flow management is critical.',
        example: 'Startup sells 100 products at £100 profit each = £10,000 profit. But customers pay in 60 days while suppliers want payment in 7 days. Company runs out of cash before receiving payments.'
      }
    ]
  },
  {
    section: '2. Marketing & Market Research',
    icon: '📊',
    color: '#2563EB',
    topics: [
      {
        ref: '2.1',
        title: 'Market Research & Customer Analysis',
        points: [
          'Primary research: collecting new data directly (surveys, focus groups, interviews, observations). Time-consuming but specific to your needs',
          'Secondary research: using existing data (reports, competitors\' websites, government statistics, news). Cheaper, faster, but may not be exactly relevant',
          'Quantitative: numerical data (how many? what percentage?). Analysed statistically, finds trends',
          'Qualitative: detailed insights (why? how do people feel?). Smaller sample, rich understanding',
          'Market segmentation: dividing market into groups with similar characteristics. By: age, income, geography, lifestyle, behaviour',
          'Customer personas: fictional profiles of target customers. Guides marketing decisions and product development'
        ],
        tip: 'Primary = you collect, Secondary = already exists. Both useful: primary for specific insights, secondary for trends.',
        example: 'Company launching vegan snacks. Primary: survey vegan consumers on taste preferences. Secondary: analyse vegan market growth statistics.'
      },
      {
        ref: '2.2',
        title: 'Marketing Strategy & The Marketing Mix',
        points: [
          'Marketing mix (4Ps): Product (what you sell, quality, features), Price (cost strategy), Place (how/where customers access it), Promotion (advertising, sales promotions)',
          'Product: lifecycle (introduction, growth, maturity, decline). New products need heavy promotion; mature products focus on efficiency',
          'Pricing strategies: cost-plus (costs + markup), competitive (match competitors), penetration (low price to gain market share), premium (high price for quality perception)',
          'Place/Distribution: direct (company sells to customer), indirect (via retailers/wholesalers). Omnichannel (online + offline)',
          'Promotion: advertising (TV, online, print), sales promotions (discounts, loyalty programs), PR (public relations), sponsorship',
          'Digital marketing: online advertising, social media, email campaigns, SEO (search engine optimisation). Advantages: targeted, measurable, cheaper than traditional'
        ],
        tip: 'All 4Ps must work TOGETHER. Can\'t have premium product (P1) with cheap price (P2). Must be consistent.',
        example: 'Apple: premium product (P1: high quality, innovation) + premium price (P2: expensive) + selective distribution (P3: own stores, premium retailers) + aspirational marketing (P4).'
      },
      {
        ref: '2.3',
        title: 'Branding & Customer Loyalty',
        points: [
          'Brand: identity and reputation of product/company. Strong brand commands premium prices and customer loyalty',
          'Brand value: intangible asset. Apple brand worth billions; same product with unknown brand worth much less',
          'Brand loyalty: customers repeat purchase, resist competitors. Built through: quality, consistency, emotional connection, good customer service',
          'Customer retention: keeping existing customers (cheaper than acquiring new ones). Strategies: loyalty programs, personalisation, excellent service',
          'Brand extension: using established brand name for new products. Risk: if new product fails, damages main brand',
          'Corporate social responsibility (CSR): business actions benefiting society. Good for brand reputation, attracts conscious consumers and talented employees'
        ],
        tip: 'Brand ≠ logo. Brand is the entire perception and experience. Strong brands survive price increases and competition.',
        example: 'Coca-Cola: brand so strong it survives taste changes, competitions (Pepsi), health concerns. People pay premium for "the real thing".'
      }
    ]
  },
  {
    section: '3. Operations & Human Resources',
    icon: '⚙️',
    color: '#059669',
    topics: [
      {
        ref: '3.1',
        title: 'Production Methods & Efficiency',
        points: [
          'Job production: making one-off items to customer specification (e.g., custom furniture). High cost, high quality, slow',
          'Batch production: making multiple identical units in groups (e.g., bakery batches). Medium cost/speed/quality. Can switch between products',
          'Flow production: continuous assembly line (e.g., car manufacturing). High volume, low cost per unit, repetitive work',
          'Lean production: minimising waste (time, materials, inventory). Just-in-time (JIT): parts arrive exactly when needed, not stockpiled. Advantages: low inventory costs; disadvantage: disruption risks',
          'Quality control: checking products meet standards. Quality assurance: preventing defects throughout process',
          'Productivity: output per worker/per hour. Improved by: technology, training, motivation, efficiency gains'
        ],
        tip: 'Job = high quality but slow, Flow = fast but repetitive. Know which method suits which product.',
        example: 'Job: bespoke wedding cake. Batch: restaurant kitchen (prep ingredients in batches, cook multiple orders). Flow: car assembly line.'
      },
      {
        ref: '3.2',
        title: 'Human Resource Management',
        points: [
          'HR functions: recruitment (hiring right people), training (skill development), performance management, employee relations, remuneration (pay)',
          'Motivation: drivers of employee effort. Financial: wages, bonuses, profit-sharing. Non-financial: recognition, development, autonomy, job satisfaction',
          'Herzberg\'s two-factor theory: hygiene factors (pay, conditions) prevent dissatisfaction; motivators (achievement, responsibility) create satisfaction. Pay more doesn\'t automatically motivate if other factors lacking',
          'Organisational structure: how roles and responsibilities organised. Hierarchical (layers of management, clear chain of command, slow decisions). Flat (few layers, fast decisions, less specialisation)',
          'Communication: downward (management → staff instructions), upward (staff feedback), lateral (between peers). Good communication improves morale and efficiency',
          'Employee turnover: rate of people leaving. High turnover = costly (training new staff), low morale. Retention strategies: competitive pay, development, good management'
        ],
        tip: 'Motivation is NOT just money. Lack of respect, poor conditions, unfair treatment demotivates even well-paid employees.',
        example: 'Company A: pays well but autocratic manager, no input on decisions = high turnover. Company B: lower pay but empowered, flexible, supportive culture = high retention.'
      },
      {
        ref: '3.3',
        title: 'Employment Law & Workplace Issues',
        points: [
          'Types of employment: full-time (permanent, regular hours), part-time (fewer hours), temporary/casual (short-term), zero-hours (no guaranteed hours, call as needed)',
          'Employment rights: minimum wage, maximum working hours, holiday pay, sick pay, maternity/paternity leave, unfair dismissal protection, discrimination protection',
          'Health & safety: employer duty to provide safe working environment. HSE (Health and Safety Executive) enforces regulations',
          'Discrimination: illegal to treat someone unfairly based on: race, gender, age, disability, religion, sexual orientation. Direct (obvious) or indirect (policy disadvantages group)',
          'Trade unions: represent workers\' interests. Collective bargaining for wages/conditions. Can strike if demands not met. Declining in many countries',
          'Modern slavery: illegal forced labour, debt bondage, trafficking. Companies must audit supply chains to prevent'
        ],
        tip: 'Know basic employment rights. Companies must provide legal minimums; better companies offer more.',
        example: 'Worker paid £4/hour illegally (below minimum wage of £11.44 for adults). Worker can claim back pay and is protected from retaliation.'
      }
    ]
  },
  {
    section: '4. Finance & External Environment',
    icon: '💰',
    color: '#7C3AED',
    topics: [
      {
        ref: '4.1',
        title: 'Business Finance & Accounting',
        points: [
          'Profit = Revenue − Costs. Gross profit = Revenue − COGS (Cost of Goods Sold). Net profit = Gross profit − overheads',
          'Break-even point: sales volume where revenue = total costs. Below = loss, above = profit. Break-even = Fixed Costs ÷ Contribution per Unit',
          'Contribution: Selling Price − Variable Cost per Unit. Higher contribution = faster break-even',
          'Cash flow: money in/out over time. Positive = more coming in than going out. Essential for business survival',
          'Financial statements: Income Statement (profit/loss), Balance Sheet (assets/liabilities/equity), Cash Flow Statement',
          'Profitability ratios: Net Profit Margin (net profit ÷ sales %), Return on Capital Employed (profit ÷ capital %). Higher is better',
          'Liquidity ratios: Current Ratio (current assets ÷ current liabilities). >1 = can pay short-term debts'
        ],
        tip: 'PROFIT and CASH are different. You can be profitable on paper but insolvent (no cash to pay suppliers).',
        example: 'Business: selling 1000 units at £20 (revenue £20,000). Costs £12,000. Profit £8,000. But if customers pay in 90 days and suppliers need payment in 7 days, business needs cash flow financing.'
      },
      {
        ref: '4.2',
        title: 'Macro-Economic Factors',
        points: [
          'Economic growth: increase in national output (GDP). Positive = more consumer spending, business expansion. Negative = recession, lower demand, unemployment',
          'Inflation: rising prices. Moderate inflation (2-3%) expected. High inflation erodes purchasing power, makes planning difficult. Deflation (falling prices) can trap people in debt',
          'Interest rates: cost of borrowing. Central banks raise rates to cool inflation, lower to stimulate economy. Higher rates = higher business borrowing costs, lower consumer spending',
          'Exchange rates: value of currency vs others. Strong currency = exports more expensive, imports cheaper. Weak currency = reverse. Affects competitiveness globally',
          'Employment/unemployment: high unemployment = lower demand, available workers (lower wages). Low unemployment = tight labour market, wage pressures, inflation risk',
          'Government intervention: taxes, subsidies, regulation, monetary policy. Can help or hinder businesses depending on policies'
        ],
        tip: 'Macro factors affect ALL businesses in economy. Firms must adapt strategy to economic conditions.',
        example: 'Recession (negative growth): consumer spending drops, businesses cut costs, unemployment rises. Luxury goods suffer more than essentials.'
      },
      {
        ref: '4.3',
        title: 'Business Growth & Strategy',
        points: [
          'Growth strategies: organic (internal growth through increased sales), acquisition (buy other businesses), merger (combine with equal partner)',
          'Ansoff Matrix: Product/Market (existing/new). Existing/Existing = market penetration (increase sales of current products). New/Existing = product development (sell new products to current market). Existing/New = market development (sell current products to new markets). New/New = diversification (highest risk)',
          'Competitive advantage: why business outperforms rivals. Sources: cost leadership (cheapest), differentiation (unique/premium), niche (focus on small market segment)',
          'SWOT analysis: Strengths (internal advantages), Weaknesses (internal disadvantages), Opportunities (external positive), Threats (external negative)',
          'Porter\'s Five Forces: threat of new entrants, supplier power, buyer power, threat of substitutes, competitive rivalry. Analyse industry attractiveness',
          'Digital transformation: using technology to improve business. E-commerce, automation, data analytics, cloud computing'
        ],
        tip: 'Ansoff Matrix: Existing/Existing = safest, New/New = riskiest. Know which strategy suits which situation.',
        example: 'Apple: started with computers (Existing/Existing market penetration). Launched iPod (product development). Opened Apple Stores (market expansion). Diversified into services (App Store, iCloud).'
      }
    ]
  }
];
