// ══════ MATHS: Quiz/Flashcard Data (Edexcel 1MA1 Higher) ══════

const MATHS_DATA = [
  {
    section: 'Number',
    icon: '🔢',
    color: '#2563EB',
    topics: [
      {
        ref: 'N1–N3',
        title: 'Operations & Place Value',
        formulas: [
          'BIDMAS: Brackets → Indices → Division/Multiplication → Addition/Subtraction'
        ],
        points: [
          'Order integers, decimals and fractions using =, ≠, <, >, ≤, ≥',
          'Apply +, −, ×, ÷ to integers, decimals, fractions (proper, improper, mixed), positive and negative',
          'Use inverse operations to check answers and simplify',
          'Reciprocal of n is 1/n — multiply a number by its reciprocal gives 1'
        ],
        tip: 'Dividing by a fraction = multiplying by its reciprocal. e.g. 3 ÷ ²⁄₅ = 3 × ⁵⁄₂ = 7.5'
      },
      {
        ref: 'N4',
        title: 'Primes, Factors & Multiples',
        formulas: [
          'HCF = product of shared prime factors',
          'LCM = product of all prime factors (highest powers)'
        ],
        points: [
          'Prime number: only divisible by 1 and itself (2 is the only even prime)',
          'Prime factorisation: break a number into a product of primes using a factor tree',
          'HCF: multiply the common primes',
          'LCM: multiply all primes at their highest power',
          'Unique factorisation theorem: every integer >1 has exactly one prime factorisation'
        ],
        tip: 'For HCF/LCM — draw Venn diagrams with prime factors. HCF = intersection, LCM = everything.',
        example: 'Find HCF and LCM of 60 and 84:\n60 = 2² × 3 × 5, 84 = 2² × 3 × 7\nHCF = 2² × 3 = 12\nLCM = 2² × 3 × 5 × 7 = 420'
      },
      {
        ref: 'N5',
        title: 'Systematic Listing & Product Rule',
        formulas: [
          'Product rule: m ways × n ways = m×n total outcomes'
        ],
        points: [
          'List outcomes systematically — use tables, grids or tree diagrams',
          'Product rule for counting: if task A has m ways and task B has n ways, total = m × n'
        ],
        tip: 'Always check you haven\'t missed combinations. Organise alphabetically or numerically.'
      },
      {
        ref: 'N6–N7',
        title: 'Powers & Roots',
        formulas: [
          'aᵐ × aⁿ = aᵐ⁺ⁿ',
          'aᵐ ÷ aⁿ = aᵐ⁻ⁿ',
          '(aᵐ)ⁿ = aᵐⁿ',
          'a⁰ = 1',
          'a⁻ⁿ = 1/aⁿ',
          'a^(1/n) = ⁿ√a',
          'a^(m/n) = (ⁿ√a)ᵐ'
        ],
        points: [
          'Know powers of 2 (up to 2¹⁰=1024), 3 (up to 3⁵=243), 4, 5',
          'Fractional indices: the denominator is the root, numerator is the power',
          'Negative indices: flip the fraction — 2⁻³ = 1/2³ = 1/8',
          'Estimate roots: √50 ≈ 7.07 because 7² = 49'
        ],
        tip: 'For fractional indices, ALWAYS root first, then power. (8)^(2/3) = (³√8)² = 2² = 4.'
      },
      {
        ref: 'N8',
        title: 'Surds & Exact Values',
        formulas: [
          '√(ab) = √a × √b',
          '√(a/b) = √a / √b',
          'Rationalise: a/√b = a√b/b',
          '(a+√b)(a−√b) = a²−b'
        ],
        points: [
          'Simplify surds: √12 = √4 × √3 = 2√3',
          'Add/subtract surds: 3√2 + 5√2 = 8√2 (only with same surd)',
          'Rationalise denominators: multiply top and bottom by the surd',
          'For (a+√b) denominators, multiply by the conjugate (a−√b)',
          'Calculate exactly with multiples of π — leave π in your answer'
        ],
        tip: '√a × √a = a always. When rationalising, you\'re not changing the value — just the form.'
      },
      {
        ref: 'N9',
        title: 'Standard Form',
        formulas: [
          'A × 10ⁿ where 1 ≤ A < 10',
          'Large numbers: n is positive',
          'Small numbers: n is negative'
        ],
        points: [
          '3,400,000 = 3.4 × 10⁶ (count jumps of decimal point)',
          '0.00056 = 5.6 × 10⁻⁴',
          'To multiply: multiply A values, add indices',
          'To divide: divide A values, subtract indices',
          'Adjust if A falls outside 1 ≤ A < 10 range'
        ],
        tip: 'On calculator: use EXP or ×10ˣ button. Read display carefully — 3.4E6 means 3.4 × 10⁶.',
        example: '(3 × 10⁴) × (2 × 10⁵) = 6 × 10⁹\n(8 × 10⁷) ÷ (4 × 10³) = 2 × 10⁴'
      },
      {
        ref: 'N10–N12',
        title: 'Fractions, Decimals & Percentages',
        formulas: [
          'Fraction → decimal: divide numerator by denominator',
          'Decimal → percentage: × 100',
          'Percentage → decimal: ÷ 100'
        ],
        points: [
          'Terminating decimals: denominator only has factors of 2 and 5',
          'Recurring decimals to fractions: let x = 0.3̄, then 10x = 3.3̄, so 9x = 3, x = 1/3',
          'Know common conversions: 1/8 = 0.125, 1/3 = 0.3̄, 1/7 = 0.142857̄',
          'Fractions as operators: ³⁄₄ of 60 = 60 × 3 ÷ 4 = 45',
          'Percentages as operators: 15% of 80 = 0.15 × 80 = 12'
        ],
        tip: 'For recurring decimals: multiply by 10ⁿ where n = number of repeating digits, then subtract.'
      },
      {
        ref: 'N13–N16',
        title: 'Measures & Accuracy',
        formulas: [
          'Error interval: lower bound ≤ x < upper bound',
          'Upper bound = value + ½ unit',
          'Lower bound = value − ½ unit'
        ],
        points: [
          'Round to decimal places (dp) or significant figures (sf)',
          'Truncation: chop off digits (always rounds down)',
          'Error intervals use inequality notation: 4.5 ≤ x < 5.5 for x = 5 to nearest integer',
          'Upper and lower bounds: for max of a/b, use max a ÷ min b',
          'Use appropriate units: metric conversions (1km = 1000m, 1kg = 1000g etc.)'
        ],
        tip: 'In bounds questions, addition/multiplication → use both uppers for max. Division → upper ÷ lower for max.'
      }
    ]
  },
  {
    section: 'Algebra',
    icon: '📊',
    color: '#7C3AED',
    topics: [
      {
        ref: 'A1–A3',
        title: 'Algebraic Notation & Vocabulary',
        formulas: [
          'Expression: terms with no = sign (e.g. 3x + 2)',
          'Equation: has = sign, can be solved (e.g. 3x + 2 = 11)',
          'Formula: relationship between variables (e.g. v = u + at)',
          'Identity: true for ALL values, uses ≡ (e.g. 2(x+1) ≡ 2x+2)'
        ],
        points: [
          'ab means a × b, 3y means 3 × y',
          'a² means a × a, a/b means a ÷ b',
          'Terms: parts separated by + or −',
          'Factors: things multiplied together',
          'Coefficients: the number in front of a variable'
        ],
        tip: 'An identity is true for every value of x. An equation is only true for specific values.'
      },
      {
        ref: 'A4',
        title: 'Simplifying & Expanding',
        formulas: [
          'Single bracket: a(b + c) = ab + ac',
          'Double bracket: (a+b)(c+d) = ac + ad + bc + bd',
          'Difference of two squares: a² − b² = (a+b)(a−b)'
        ],
        points: [
          'Collect like terms: 3x + 5x = 8x, but 3x + 5x² cannot be simplified',
          'Expand single brackets: multiply every term inside by the term outside',
          'Expand double brackets: FOIL (First, Outside, Inside, Last) or grid method',
          'Factorise: take out common factors first, then try quadratic factorisation',
          'x² + bx + c: find two numbers that multiply to c and add to b',
          'ax² + bx + c (Higher): use grouping or trial method',
          'Simplify expressions with indices: use index laws'
        ],
        tip: 'For ax² + bx + c factorising: find two numbers that multiply to ac and add to b, then split the middle term.',
        example: 'Factorise 6x² + 11x − 10:\nac = −60. Numbers: 15 and −4 (15×−4=−60, 15+−4=11)\n6x² + 15x − 4x − 10 = 3x(2x+5) − 2(2x+5) = (3x−2)(2x+5)'
      },
      {
        ref: 'A5–A6',
        title: 'Formulae & Rearranging',
        formulas: [
          'To rearrange: use inverse operations to isolate the subject',
          'If the new subject appears twice: factorise it out'
        ],
        points: [
          'Rearranging is like solving — do the same to both sides',
          'Undo operations in reverse BIDMAS order',
          'If the subject is in a fraction, multiply both sides to clear it',
          'If the subject is squared, take the square root (remember ±)',
          'If subject appears more than once: collect on one side, factorise, divide'
        ],
        tip: 'Always check by substituting numbers back into both the original and rearranged formula.',
        example: 'Make t the subject of v = u + at:\nv − u = at\nt = (v − u) / a'
      },
      {
        ref: 'A7',
        title: 'Functions',
        formulas: [
          'f(x) notation: f(3) means substitute x = 3',
          'Composite: fg(x) = f(g(x)) — do g first, then f',
          'Inverse: f⁻¹(x) — reverse the function'
        ],
        points: [
          'f(x) = 2x + 3 → f(4) = 2(4) + 3 = 11',
          'Composite function fg(x): apply g first, then f to the result',
          'To find inverse: write y = f(x), swap x and y, rearrange for y',
          'The inverse "undoes" the function: ff⁻¹(x) = x'
        ],
        tip: 'For composites, work from the INSIDE out. fg(x) means g first, then f.'
      },
      {
        ref: 'A8–A10',
        title: 'Straight Line Graphs',
        formulas: [
          'y = mx + c (gradient-intercept form)',
          'Gradient m = (y₂−y₁)/(x₂−x₁) = rise/run',
          'Parallel lines: same gradient',
          'Perpendicular lines: m₁ × m₂ = −1'
        ],
        points: [
          'm = gradient (steepness), c = y-intercept (where it crosses y-axis)',
          'Positive gradient = line goes up left→right, negative = goes down',
          'To find equation through (x₁,y₁) with gradient m: y − y₁ = m(x − x₁)',
          'To find equation through two points: find m first, then use point',
          'x = a is a vertical line, y = b is a horizontal line'
        ],
        tip: 'Perpendicular gradient is the negative reciprocal. If m = 2/3, perpendicular m = −3/2.',
        example: 'Find equation through (1,4) and (3,10):\nm = (10−4)/(3−1) = 6/2 = 3\ny − 4 = 3(x − 1) → y = 3x + 1'
      },
      {
        ref: 'A11–A13',
        title: 'Quadratic & Other Graphs',
        formulas: [
          'Quadratic: y = ax² + bx + c (U or ∩ shape)',
          'Completing the square: y = a(x+p)² + q',
          'Turning point = (−p, q)',
          'Line of symmetry: x = −b/2a'
        ],
        points: [
          'a > 0: U shape (minimum). a < 0: ∩ shape (maximum)',
          'Roots = where the graph crosses x-axis (set y = 0)',
          'Discriminant b² − 4ac: >0 = two roots, =0 = one root, <0 = no real roots',
          'Cubic: y = x³ has S-shape',
          'Reciprocal: y = 1/x has two curves in opposite quadrants',
          'Exponential: y = kˣ — rapid growth/decay, never touches x-axis',
          'Trig graphs: sin x and cos x wave between −1 and 1, period 360°; tan x has asymptotes at 90°, 270° etc.',
          'Translations: y = f(x) + a shifts up; y = f(x + a) shifts left'
        ],
        tip: 'Completing the square gives you the turning point directly. Write x² + 6x + 2 as (x+3)² − 7, so turning point is (−3, −7).'
      },
      {
        ref: 'A14–A16',
        title: 'Graph Interpretation & Circles',
        formulas: [
          'Circle: x² + y² = r² (centre at origin, radius r)',
          'Tangent to circle is perpendicular to radius at that point',
          'Area under graph ≈ count squares or use trapeziums',
          'Gradient of curve at a point = gradient of tangent'
        ],
        points: [
          'Distance-time: gradient = speed',
          'Velocity-time: gradient = acceleration, area under = distance',
          'For area under a curve: split into trapeziums',
          'Estimate gradient at a point by drawing a tangent and finding its gradient',
          'Circle x² + y² = 25 has centre (0,0) and radius 5',
          'Tangent at (3,4) on x²+y²=25: gradient of radius = 4/3, so tangent gradient = −3/4'
        ],
        tip: 'For gradient of a curve — draw the tangent as accurately as possible, then use a large triangle to calculate rise/run.'
      },
      {
        ref: 'A17–A20',
        title: 'Solving Equations',
        formulas: [
          'Linear: ax + b = c → x = (c−b)/a',
          'Quadratic formula: x = (−b ± √(b²−4ac)) / 2a',
          'Iteration: xₙ₊₁ = f(xₙ)'
        ],
        points: [
          'Linear: expand brackets, collect terms, isolate x',
          'Quadratic by factorising: set = 0, factorise, solve each bracket = 0',
          'Quadratic by completing the square: (x+p)² = q, then x = −p ± √q',
          'Quadratic formula: use when factorising doesn\'t work easily',
          'Simultaneous (linear): elimination or substitution',
          'Simultaneous (linear/quadratic): substitute linear into quadratic, solve',
          'Iteration: start with x₀, repeatedly apply the formula to converge on an answer'
        ],
        tip: 'For simultaneous equations — if one is linear and one quadratic, always substitute the LINEAR one into the quadratic.',
        example: 'Solve x² + 5x − 6 = 0:\n(x + 6)(x − 1) = 0\nx = −6 or x = 1'
      },
      {
        ref: 'A21–A22',
        title: 'Inequalities',
        formulas: [
          'Solve like equations BUT: flip the sign when multiplying/dividing by a negative'
        ],
        points: [
          'Open circle ○ for < or >, closed circle ● for ≤ or ≥',
          'Represent on number line or as shaded regions on graphs',
          'Quadratic inequalities: solve the equation first, sketch the graph, read off the region',
          'Set notation: {x : x > 3} means "the set of x values where x is greater than 3"',
          'For two-variable inequalities: draw the line, shade the correct side',
          'Test a point to check which side to shade'
        ],
        tip: 'For quadratic inequalities like x² − 5x + 6 < 0, factorise to (x−2)(x−3) < 0 → sketch → answer is 2 < x < 3.'
      },
      {
        ref: 'A23–A25',
        title: 'Sequences',
        formulas: [
          'Arithmetic: nth term = a + (n−1)d = dn + (a−d)',
          'Quadratic: nth term = an² + bn + c',
          'Geometric: nth term = arⁿ⁻¹'
        ],
        points: [
          'Arithmetic (linear): constant difference between terms',
          'Quadratic: second difference is constant',
          'Find nth term of linear: nth term = difference × n + zero term',
          'Quadratic nth term: halve the 2nd difference = coefficient of n²',
          'Fibonacci-type: each term = sum of previous two',
          'Geometric: multiply by a common ratio each time',
          'Recognise triangular (1,3,6,10...), square (1,4,9,16...), cube (1,8,27,64...)'
        ],
        tip: 'For quadratic sequences: 2nd differences ÷ 2 = a. Then subtract an² from the sequence to find a linear sequence for bn + c.',
        example: 'Find nth term of 3, 8, 15, 24, 35...\n1st diff: 5, 7, 9, 11  |  2nd diff: 2, 2, 2\na = 2/2 = 1, so n² part: 1, 4, 9, 16, 25\nSubtract: 2, 4, 6, 8, 10 → 2n\nnth term = n² + 2n'
      }
    ]
  },
  {
    section: 'Ratio, Proportion & Rates of Change',
    icon: '⚖️',
    color: '#D97706',
    topics: [
      {
        ref: 'R1–R3',
        title: 'Units & Conversions',
        formulas: [
          'Speed = distance / time',
          'Density = mass / volume',
          'Pressure = force / area'
        ],
        points: [
          'Convert between metric units: ×1000 for km→m, kg→g, litres→ml',
          'Compound units: speed (m/s, km/h), density (g/cm³, kg/m³)',
          '1 mile ≈ 1.6 km, 1 inch = 2.54 cm, 1 gallon ≈ 4.5 litres'
        ],
        tip: 'To convert km/h to m/s: divide by 3.6. To convert m/s to km/h: multiply by 3.6.'
      },
      {
        ref: 'R4–R8',
        title: 'Ratio',
        formulas: [
          'part:part ratio → shares = total ÷ sum of parts × each part',
          'part:whole → the whole IS one of the parts',
          'Fraction link: a:b means a/(a+b) and b/(a+b)'
        ],
        points: [
          'Simplify ratios like fractions — divide by the HCF',
          'To divide in a ratio: add parts, divide total, multiply by each part',
          'Ratio to fraction: 2:3 means ²⁄₅ and ³⁄₅ of the total',
          '1:n form: divide both sides by the first number',
          'Link to linear functions: y:x = m (the gradient)'
        ],
        tip: 'If told "ratio of A to B is 3:5 and B = 40", find one part: 40÷5 = 8, so A = 3×8 = 24.',
        example: 'Share £240 in the ratio 3:5:\nTotal parts = 8, one part = £30\nShares: £90 and £150'
      },
      {
        ref: 'R9',
        title: 'Percentages',
        formulas: [
          'Percentage increase: new = original × (1 + r/100)',
          'Percentage decrease: new = original × (1 − r/100)',
          'Reverse: original = new ÷ multiplier',
          'Percentage change = (change/original) × 100'
        ],
        points: [
          'Find a percentage: decimal method — 17.5% of 64 = 0.175 × 64',
          'Multipliers: 25% increase = ×1.25, 10% decrease = ×0.90',
          'Reverse percentage: "after 20% off, price is £48" → £48 ÷ 0.8 = £60',
          'Repeated percentage change: compound — multiply the multiplier',
          'Express as percentage: (part/whole) × 100'
        ],
        tip: 'Original value problems: if the result AFTER a % change is given, divide by the multiplier. Don\'t add/subtract the percentage from the result.'
      },
      {
        ref: 'R10, R13',
        title: 'Direct & Inverse Proportion',
        formulas: [
          'Direct: y = kx or y ∝ x',
          'Inverse: y = k/x or y ∝ 1/x',
          'Square: y ∝ x² means y = kx²',
          'Cube root: y ∝ ³√x means y = k³√x'
        ],
        points: [
          'Direct proportion: as x increases, y increases at the same rate',
          'Inverse proportion: as x increases, y decreases',
          'Find k (constant): substitute known values',
          'Other types: y ∝ x², y ∝ √x, y ∝ 1/x²',
          'Graph: direct = straight line through origin, inverse = reciprocal curve'
        ],
        tip: 'Always start by writing the proportionality, then replace ∝ with = k, then find k using given values.',
        example: 'y ∝ x². When x=3, y=36. Find y when x=5.\ny = kx² → 36 = k(9) → k = 4\ny = 4(25) = 100'
      },
      {
        ref: 'R11–R12, R14–R15',
        title: 'Rates of Change & Compound Measures',
        points: [
          'Speed = distance ÷ time (m/s, km/h)',
          'Density = mass ÷ volume (g/cm³, kg/m³)',
          'Pressure = force ÷ area (N/m², Pa)',
          'Gradient of distance-time graph = speed',
          'Gradient of velocity-time graph = acceleration',
          'Gradient at a point on a curve = instantaneous rate of change',
          'Draw a tangent to find instantaneous rate of change',
          'Similar shapes: if length scale factor is k, area = k², volume = k³'
        ],
        tip: 'For compound measures, use the formula triangle — cover what you want, and the remaining two show you whether to multiply or divide.'
      },
      {
        ref: 'R16',
        title: 'Growth & Decay',
        formulas: [
          'Compound interest: A = P(1 + r/100)ⁿ',
          'Depreciation: A = P(1 − r/100)ⁿ',
          'General iteration: xₙ₊₁ = f(xₙ)'
        ],
        points: [
          'P = principal/original amount, r = rate per period, n = number of periods',
          'Compound interest grows exponentially — not linearly',
          'For depreciation, multiply by (1 − r/100) each period',
          'Read the question carefully: per year, per month, etc.'
        ],
        tip: 'Don\'t calculate year by year — use the formula directly. 5% compound interest for 3 years: multiply by 1.05³.',
        example: '£5000 invested at 3% compound interest for 4 years:\nA = 5000 × 1.03⁴ = 5000 × 1.1255... = £5627.54'
      }
    ]
  },
  {
    section: 'Geometry & Measures',
    icon: '📐',
    color: '#059669',
    topics: [
      {
        ref: 'G1–G4',
        title: 'Angles & Polygons',
        formulas: [
          'Angles in a triangle = 180°',
          'Angles in a quadrilateral = 360°',
          'Interior angle sum = (n−2) × 180°',
          'Each interior angle (regular) = (n−2)×180° / n',
          'Exterior angles sum = 360°',
          'Each exterior angle (regular) = 360° / n'
        ],
        points: [
          'Vertically opposite angles are equal',
          'Alternate angles (Z-shape) are equal on parallel lines',
          'Corresponding angles (F-shape) are equal on parallel lines',
          'Co-interior angles (C/U-shape) add to 180°',
          'Interior + exterior = 180° at each vertex'
        ],
        tip: 'For "find the number of sides" questions: use exterior angle = 360°/n, so n = 360°/exterior angle.'
      },
      {
        ref: 'G5–G8',
        title: 'Congruence, Similarity & Transformations',
        formulas: [
          'Congruence: SSS, SAS, ASA, RHS',
          'Similar: corresponding angles equal, sides in same ratio',
          'Scale factor = new length / original length',
          'Enlargement: distance from centre × scale factor'
        ],
        points: [
          'Congruent = same shape AND size',
          'Similar = same shape, different size',
          'Enlargement: scale factor > 1 = bigger, 0 < SF < 1 = smaller, SF < 0 = inverted',
          'Reflection: state the mirror line (e.g. x = 2, y = x)',
          'Rotation: state centre, angle, direction',
          'Translation: describe using a column vector',
          'For similarity: length ratio k → area ratio k² → volume ratio k³'
        ],
        tip: 'When describing transformations, you MUST give all details — centre + angle + direction for rotation, mirror line for reflection, vector for translation.'
      },
      {
        ref: 'G9–G10',
        title: 'Circles & Circle Theorems',
        formulas: [
          'Angle at centre = 2 × angle at circumference',
          'Angle in semicircle = 90°',
          'Angles in same segment are equal',
          'Opposite angles in cyclic quadrilateral = 180°',
          'Tangent ⊥ radius at point of contact',
          'Two tangents from external point are equal',
          'Alternate segment theorem: angle between tangent and chord = angle in alternate segment'
        ],
        points: [
          'Chord: line segment across circle (not through centre)',
          'Arc: part of circumference',
          'Sector: "pizza slice" (two radii + arc)',
          'Segment: region between chord and arc',
          'Tangent touches the circle at exactly one point',
          'Know all 7 circle theorems and be able to spot them in diagrams'
        ],
        tip: 'Always state the theorem name in your working — examiners give marks for naming them. Draw extra lines (radii, chords) to reveal hidden theorems.'
      },
      {
        ref: 'G14–G19',
        title: 'Perimeter, Area & Volume',
        formulas: [
          'Triangle: A = ½bh',
          'Parallelogram: A = bh',
          'Trapezium: A = ½(a+b)h',
          'Circle: C = 2πr = πd, A = πr²',
          'Arc length = (θ/360) × 2πr',
          'Sector area = (θ/360) × πr²',
          'Prism volume = cross-section area × length',
          'Cylinder: V = πr²h, SA = 2πrh + 2πr²',
          'Cone: V = ⅓πr²h, SA = πrl + πr²',
          'Sphere: V = ⁴⁄₃πr³, SA = 4πr²',
          'Pyramid: V = ⅓ × base area × h'
        ],
        points: [
          'Composite shapes: split into known shapes or subtract',
          'Surface area: add all faces',
          'Units: area in cm², m²; volume in cm³, m³, litres (1L = 1000cm³)',
          'Frustum = cone with top cut off: V = V(big cone) − V(small cone)',
          'Similar shapes: length × k, area × k², volume × k³'
        ],
        tip: 'For cones/pyramids, the key formula starts with ⅓. For spheres, remember the ⁴⁄₃. These are given on the formula sheet in the exam but learn them anyway.'
      },
      {
        ref: 'G20–G23',
        title: 'Pythagoras & Trigonometry',
        formulas: [
          'Pythagoras: a² + b² = c² (c = hypotenuse)',
          'sin θ = O/H, cos θ = A/H, tan θ = O/A',
          'Sine rule: a/sin A = b/sin B = c/sin C',
          'Cosine rule: a² = b² + c² − 2bc cos A',
          'Area = ½ab sin C'
        ],
        points: [
          'Pythagoras: finding missing side — rearrange for the side you need',
          'SOH CAH TOA: label the triangle O, A, H relative to the angle',
          'Finding an angle: use inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)',
          'Exact trig values: sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3, sin 45° = cos 45° = 1/√2, tan 45° = 1, sin 60° = √3/2, cos 60° = ½, tan 60° = √3',
          'Sine rule: use when you have a matching pair (angle + opposite side)',
          'Cosine rule: use when you have SAS (two sides and included angle) or SSS',
          '3D problems: find the right-angled triangle within the 3D shape'
        ],
        tip: 'For SOH CAH TOA use the mnemonic. Label your triangle carefully. For 3D trig: draw the 2D right-angled triangle you need separately.'
      },
      {
        ref: 'G24–G25',
        title: 'Vectors',
        formulas: [
          'Translation vector: (x, y) means x right, y up',
          'a + b: place head-to-tail',
          'ka: scales the vector by k'
        ],
        points: [
          'Vectors have magnitude (length) and direction',
          'Negative vector: reverses direction — BA = −AB',
          'To get from A to B via O: AB = AO + OB = −OA + OB = OB − OA',
          'Parallel vectors: one is a scalar multiple of the other',
          'Prove collinear: show AB = kBC (parallel + shared point B)',
          'Midpoint M of AB: OM = OA + ½AB'
        ],
        tip: 'To find a vector path: go backwards to a known point, then forwards. Use the "journey" method — trace along known vectors.'
      }
    ]
  },
  {
    section: 'Probability',
    icon: '🎲',
    color: '#DC2626',
    topics: [
      {
        ref: 'P1–P5',
        title: 'Probability Basics',
        formulas: [
          'P(event) = favourable outcomes / total outcomes',
          'P(not A) = 1 − P(A)',
          'Relative frequency = frequency / total trials'
        ],
        points: [
          'Probability scale: 0 (impossible) to 1 (certain)',
          'All probabilities in a sample space sum to 1',
          'Mutually exclusive: P(A or B) = P(A) + P(B)',
          'Expected frequency = probability × number of trials',
          'Relative frequency approaches theoretical probability as trials increase',
          'Experimental probability uses results from trials; theoretical uses equally likely outcomes'
        ],
        tip: 'Always check probabilities sum to 1. If they don\'t, you\'ve made an error.'
      },
      {
        ref: 'P6–P7',
        title: 'Sample Spaces & Listing Outcomes',
        points: [
          'Two-way tables: organise combined event outcomes',
          'Tree diagrams: show sequential events with branches',
          'Venn diagrams: show overlapping sets',
          'Sample space diagrams: grids for two events (e.g. two dice)',
          'Systematic listing: be organised, don\'t miss or repeat outcomes'
        ],
        tip: 'For Venn diagrams: fill in the intersection FIRST, then work outwards. The total of everything inside should equal the total given.'
      },
      {
        ref: 'P8–P9',
        title: 'Combined Events & Conditional Probability',
        formulas: [
          'Independent: P(A and B) = P(A) × P(B)',
          'Dependent: P(A and B) = P(A) × P(B|A)',
          'P(A or B) = P(A) + P(B) − P(A and B)',
          'Conditional: P(A|B) = P(A and B) / P(B)'
        ],
        points: [
          'Independent events: one outcome doesn\'t affect the other',
          'Dependent events: probabilities change (e.g. picking without replacement)',
          'AND = multiply along branches, OR = add between branches',
          'Tree diagrams: branches from each node must sum to 1',
          'Without replacement: second probabilities change (denominator decreases)',
          'Two-way tables and frequency trees help with conditional probability'
        ],
        tip: 'For "without replacement" questions: the denominator goes DOWN by 1 on the second pick. Draw the tree diagram — it prevents most errors.',
        example: 'Bag: 4 red, 6 blue. Pick 2 without replacement.\nP(both red) = 4/10 × 3/9 = 12/90 = 2/15'
      }
    ]
  },
  {
    section: 'Statistics',
    icon: '📈',
    color: '#0891B2',
    topics: [
      {
        ref: 'S1–S2',
        title: 'Data Collection & Representation',
        points: [
          'Population: entire group. Sample: subset of population',
          'Samples should be representative — avoid bias',
          'Bar charts: categorical data. Pie charts: proportional data',
          'Line graphs: time series (trends over time)',
          'Frequency tables: grouped or ungrouped',
          'Pictograms: use a key for each symbol',
          'Random sampling: every member has equal chance of selection',
          'Stratified sampling: proportional representation from each group'
        ],
        tip: 'When criticising a sample, think: Is it big enough? Is it representative? Could there be bias in how it was collected?'
      },
      {
        ref: 'S3',
        title: 'Histograms & Cumulative Frequency',
        formulas: [
          'Frequency density = frequency / class width',
          'Cumulative frequency: running total of frequencies',
          'Median from CF graph: read at n/2',
          'LQ at n/4, UQ at 3n/4',
          'IQR = UQ − LQ'
        ],
        points: [
          'Histograms: y-axis is frequency DENSITY, not frequency',
          'Unequal class widths: frequency = frequency density × class width',
          'Cumulative frequency: plot at upper class boundary, join with smooth curve',
          'Read median, quartiles from the CF curve',
          'Box plots: show minimum, LQ, median, UQ, maximum',
          'Compare distributions using median (average) and IQR (spread)'
        ],
        tip: 'For histograms, the AREA of each bar represents the frequency, not the height. If class widths are equal, height = frequency.'
      },
      {
        ref: 'S4–S6',
        title: 'Averages, Spread & Scatter Graphs',
        formulas: [
          'Mean = Σfx / Σf (for grouped data, use midpoints)',
          'Median: middle value (or average of two middle values)',
          'Mode: most frequent value',
          'Range = highest − lowest',
          'IQR = UQ − LQ'
        ],
        points: [
          'For grouped data: mean uses midpoints, median uses interpolation or CF graph',
          'Modal class: class with highest frequency',
          'Outliers: typically more than 1.5 × IQR beyond quartiles',
          'Scatter graphs: positive correlation (both increase), negative (one up, one down), no correlation',
          'Line of best fit: goes through the mean point, roughly equal points above and below',
          'Interpolation (within data range) is more reliable than extrapolation (outside range)',
          'Correlation ≠ causation: just because two things correlate doesn\'t mean one causes the other'
        ],
        tip: 'When comparing distributions, always compare a measure of average (median or mean) AND a measure of spread (range or IQR). Use the context of the data in your answer.'
      }
    ]
  }
];
