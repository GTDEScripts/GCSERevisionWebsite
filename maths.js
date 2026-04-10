// ══════ MATHS: Topic Notes (Edexcel 1MA1 Higher) ══════

const MATHS_NOTES = {
  number: {
    title: 'Number',
    icon: '🔢',
    color: '#2563EB',
    sections: [
      {
        title: 'Ordering & Operations (BIDMAS)',
        ref: 'N1–N3',
        content: `<p>Order integers, decimals and fractions using <strong>=, ≠, <, >, ≤, ≥</strong>. Convert to same form to compare.</p><p><strong>BIDMAS</strong>: Brackets → Indices → Division/Multiplication → Addition/Subtraction.</p><p>Use <strong>inverse operations</strong> to check: addition ↔ subtraction, multiplication ↔ division.</p>`,
        tip: 'Show working when comparing fractions — convert to decimals or common denominator for method marks.'
      },
      {
        title: 'Primes, Factors & Multiples',
        ref: 'N4–N5',
        content: `<p><strong>Primes</strong> have exactly 2 factors: 2, 3, 5, 7, 11, 13… Use <strong>factor trees</strong> for prime factorisation.</p>`,
        formula: 'HCF = product of shared prime factors (lowest powers)<br>LCM = product of ALL prime factors (highest powers)',
        example: `<strong>HCF and LCM of 84 and 120</strong><br>84 = 2² × 3 × 7 · 120 = 2³ × 3 × 5<br>HCF = 2² × 3 = <strong>12</strong> · LCM = 2³ × 3 × 5 × 7 = <strong>840</strong>`,
        tip: 'Product rule for counting (Higher): m ways × n ways = m×n total combinations.'
      },
      {
        title: 'Powers, Roots & Indices',
        ref: 'N6–N7',
        content: `<p>Know squares to 15² = 225, cubes: 1, 8, 27, 64, 125. Know powers of 2 up to 2¹⁰ = 1024.</p>`,
        formula: 'a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup> · a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup> · (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup><br>a<sup>0</sup> = 1 · a<sup>−n</sup> = 1/a<sup>n</sup> · a<sup>½</sup> = √a · a<sup>m/n</sup> = (ⁿ√a)<sup>m</sup>',
        example: `<strong>Simplify 8<sup>⅔</sup></strong> = (∛8)² = 2² = <strong>4</strong>`,
        tip: 'Fractional indices: denominator = root, numerator = power. Root first to keep numbers small.'
      },
      {
        title: 'Surds (Higher)',
        ref: 'N8',
        content: `<p><strong>Surds</strong> are exact irrational roots. Simplify by finding square factors.</p>`,
        formula: '√(ab) = √a × √b · Rationalise: multiply top and bottom by the surd',
        example: `<strong>√72</strong> = √(36×2) = 6√2<br><strong>Rationalise 1/(3+√2)</strong> = (3−√2)/(9−2) = (3−√2)/7`
      },
      {
        title: 'Standard Form',
        ref: 'N9',
        content: `<p><strong>A × 10<sup>n</sup></strong> where 1 ≤ A < 10. Large numbers → +n. Small → −n.</p>`,
        example: `0.000347 = 3.47 × 10<sup>−4</sup> · (3×10⁴)(2×10⁵) = 6×10⁹`,
        tip: 'Adding/subtracting: convert to same power of 10 first.'
      },
      {
        title: 'Fractions, Decimals & Percentages',
        ref: 'N10–N12',
        content: `<p><strong>Recurring → fraction:</strong> let x = decimal, multiply to shift repeating block, subtract.</p>`,
        example: `<strong>0.2̇7̇ → fraction:</strong> x = 0.2727… · 100x = 27.2727… · 99x = 27 · x = <strong>3/11</strong>`
      },
      {
        title: 'Estimation & Bounds',
        ref: 'N13–N16',
        content: `<p><strong>Error intervals:</strong> if x = 7.3 (1dp), then 7.25 ≤ x < 7.35.</p><p>For max of a fraction: upper ÷ lower. For min: lower ÷ upper.</p>`,
        formula: 'Upper bound = value + ½ accuracy unit<br>Lower bound = value − ½ accuracy unit',
        example: `<strong>x = 5.4 (1dp), y = 3.2 (1dp). Max of x/y?</strong><br>= 5.45 ÷ 3.15 = <strong>1.730…</strong>`
      }
    ]
  },
  algebra: {
    title: 'Algebra',
    icon: '𝑥',
    color: '#7C3AED',
    sections: [
      {
        title: 'Expressions & Factorising',
        ref: 'A1–A4',
        content: `<p><strong>Expand</strong> brackets. <strong>Factorise</strong> quadratics: find two numbers that multiply to c and add to b.</p><p><strong>Harder (ax²+bx+c):</strong> multiply a×c, split middle term, group and factorise.</p>`,
        formula: '(a+b)(a−b) = a²−b²<br>x²+bx+c = (x+p)(x+q) where pq = c, p+q = b',
        example: `<strong>Factorise 6x²+x−2</strong><br>a×c = −12. Pair: +4,−3.<br>= 2x(3x+2)−1(3x+2) = <strong>(2x−1)(3x+2)</strong>`
      },
      {
        title: 'Rearranging Formulae',
        ref: 'A5–A6',
        content: `<p>Do same operation to both sides. If subject appears twice → collect and factorise.</p>`,
        example: `<strong>Make r subject: V = ⅓πr²h</strong><br>r = √(3V/(πh))<br><strong>Make x subject: ax+3 = bx−7</strong><br>x(a−b) = −10 → x = −10/(a−b)`
      },
      {
        title: 'Functions (Higher)',
        ref: 'A7',
        content: `<p>f(x) = rule. <strong>Composite fg(x):</strong> g first, then f. <strong>Inverse f⁻¹(x):</strong> swap x and y, rearrange.</p>`,
        example: `f(x)=3x−1. f⁻¹(x) = (x+1)/3`
      },
      {
        title: 'Straight Line Graphs',
        ref: 'A8–A10',
        content: `<p><strong>y = mx + c.</strong> Parallel: same m. Perpendicular: m₁×m₂ = −1.</p>`,
        formula: 'y − y₁ = m(x − x₁)',
        example: `<strong>Through (2,5), perp to y = 3x+1:</strong> m = −⅓ → y = −⅓x + 17/3`
      },
      {
        title: 'Quadratics & Completing the Square',
        ref: 'A11–A13',
        content: `<p>Completing the square reveals the turning point.</p>`,
        formula: 'x²+bx+c = (x+b/2)²−(b/2)²+c<br>Turning point: (−p, q) from y = (x+p)²+q',
        example: `y = x²+6x+2 = (x+3)²−7. Turning point: <strong>(−3,−7)</strong>`,
        tip: 'Translations: f(x)+a → up. f(x+a) → left. −f(x) → reflect x-axis.'
      },
      {
        title: 'Solving Equations',
        ref: 'A17–A20',
        content: `<p><strong>Quadratic:</strong> factorise, complete square, or formula. <strong>Simultaneous:</strong> elimination or substitution.</p>`,
        formula: 'x = (−b ± √(b²−4ac)) / 2a<br>Discriminant b²−4ac: >0 → 2 roots, =0 → 1, <0 → none',
        tip: 'Iteration (Higher): rearrange to x = g(x), apply repeatedly.'
      },
      {
        title: 'Inequalities',
        ref: 'A22',
        content: `<p>Solve like equations. <strong>Flip sign when ×/÷ by negative.</strong> Quadratic: solve, sketch, read regions.</p>`,
        example: `x²−5x+6 < 0 → (x−2)(x−3) < 0 → <strong>2 < x < 3</strong>`
      },
      {
        title: 'Sequences',
        ref: 'A23–A25',
        content: `<p><strong>Linear:</strong> nth term = dn+(a−d). <strong>Quadratic:</strong> 2nd diffs constant, coeff of n² = half 2nd diff.</p>`,
        example: `5, 11, 21, 35, 53… 2nd diffs = 4 → n² coeff = 2. Subtract 2n²: all 3. nth term = <strong>2n²+3</strong>`
      },
      {
        title: 'Circle Equations & Area Under Graphs (Higher)',
        ref: 'A14–A16',
        content: `<p><strong>x²+y² = r²</strong> (centre origin, radius r). Tangent ⊥ radius. Area under velocity-time graph = distance.</p>`,
        example: `Tangent to x²+y² = 25 at (3,4): radius gradient = 4/3, tangent = −¾ → y = −¾x+25/4`
      }
    ]
  },
  ratio: {
    title: 'Ratio, Proportion & Rates',
    icon: '⚖️',
    color: '#D97706',
    sections: [
      {
        title: 'Ratio & Sharing',
        ref: 'R1–R8',
        content: `<p>Simplify by HCF. Share: total parts, then calculate each.</p>`,
        example: `Share £450 in 2:3:4 → 9 parts → £50 each → <strong>£100, £150, £200</strong>`
      },
      {
        title: 'Percentages & Multipliers',
        ref: 'R9',
        content: `<p>Increase x%: ×(1+x/100). Reverse: divide by multiplier.</p>`,
        example: `Price rises 15% to £276. Original = 276 ÷ 1.15 = <strong>£240</strong>`
      },
      {
        title: 'Compound Growth & Decay',
        ref: 'R16',
        formula: 'Amount = P × (multiplier)<sup>n</sup>',
        example: `£5000 at 3% for 4 yrs = 5000×1.03⁴ = <strong>£5627.54</strong>`
      },
      {
        title: 'Direct & Inverse Proportion',
        ref: 'R10, R13',
        content: `<p>Direct: y = kx. Inverse: y = k/x. Find k from given values.</p>`,
        example: `y ∝ x². x=3,y=36 → k=4. When x=5: y = 4×25 = <strong>100</strong>`
      },
      {
        title: 'Compound Measures',
        ref: 'R11, R14–R15',
        content: `<p>Speed = D/T. Density = M/V. Pressure = F/A.</p><p>Distance-time gradient = speed. Velocity-time gradient = acceleration, area = distance.</p>`
      },
      {
        title: 'Similarity Ratios',
        ref: 'R12',
        formula: 'Lengths × k · Areas × k² · Volumes × k³',
        example: `Heights 6cm & 15cm. k=2.5. Volume = 100×2.5³ = <strong>1562.5 cm³</strong>`
      }
    ]
  },
  geometry: {
    title: 'Geometry & Measures',
    icon: '📐',
    color: '#059669',
    sections: [
      {
        title: 'Angle Facts',
        ref: 'G1–G4',
        formula: 'Interior sum = (n−2)×180° · Exterior (regular) = 360°/n',
        tip: 'Always state the angle rule for marks.'
      },
      {
        title: 'Congruence & Similarity',
        ref: 'G5–G7, G19',
        content: `<p>Congruent: SSS, SAS, ASA, RHS. Similar: same angles, proportional sides.</p>`,
        formula: 'Similar: lengths ×k, areas ×k², volumes ×k³'
      },
      {
        title: 'Circle Theorems (Higher)',
        ref: 'G9–G10',
        content: `<ul class="note-keypoints"><li>Angle at centre = 2× at circumference</li><li>Semicircle → 90°</li><li>Same segment angles equal</li><li>Cyclic quad: opposite angles = 180°</li><li>Tangent ⊥ radius</li><li>Two tangents from point are equal</li><li>Alternate segment theorem</li></ul>`,
        tip: 'Draw extra radii → isosceles triangles. Name the theorem.'
      },
      {
        title: 'Area, Perimeter & Volume',
        ref: 'G16–G18',
        formula: 'Triangle ½bh · Trap ½(a+b)h · Circle C=πd, A=πr²<br>Arc=(θ/360)×2πr · Sector=(θ/360)×πr²<br>Sphere V=⁴⁄₃πr³ · Cone V=⅓πr²h · Prism V=area×length',
        tip: 'Leave in terms of π when asked for exact answers.'
      },
      {
        title: 'Pythagoras & SOHCAHTOA',
        ref: 'G20–G21',
        formula: 'a²+b²=c² · sinθ=O/H · cosθ=A/H · tanθ=O/A<br>sin30°=½ · cos60°=½ · sin45°=cos45°=1/√2<br>sin60°=cos30°=√3/2 · tan30°=1/√3 · tan60°=√3'
      },
      {
        title: 'Sine & Cosine Rules (Higher)',
        ref: 'G22–G23',
        formula: 'a/sinA = b/sinB = c/sinC<br>a²=b²+c²−2bc·cosA<br>Area = ½ab·sinC',
        tip: 'Sine rule: need matching pair. Cosine rule: SAS or SSS.'
      },
      {
        title: 'Vectors',
        ref: 'G24–G25',
        formula: 'AB = b−a · Midpoint: OM = ½(a+b)',
        tip: 'Parallel proof: show one vector = k × other. Collinear: parallel + shared point.'
      },
      {
        title: 'Transformations',
        ref: 'G7–G8',
        content: `<p>Translation: vector. Rotation: centre+angle+direction. Reflection: mirror line. Enlargement: centre+SF.</p>`,
        tip: 'Missing any detail loses marks. Always give ALL required info.'
      }
    ]
  },
  probability: {
    title: 'Probability',
    icon: '🎲',
    color: '#DC2626',
    sections: [
      {
        title: 'Basic Probability',
        ref: 'P1–P5',
        formula: 'P(A) = favourable/total · P(not A) = 1−P(A)<br>Mutually exclusive: P(A or B) = P(A)+P(B)'
      },
      {
        title: 'Tree Diagrams & Combined Events',
        ref: 'P6–P8',
        content: `<p><strong>AND = multiply</strong> branches. <strong>OR = add</strong> final probs. Without replacement: probs change.</p>`,
        example: `3 red, 5 blue. 2 picks, no replacement. P(both red) = 3/8 × 2/7 = <strong>3/28</strong>`,
        tip: 'Branches from each point must add to 1.'
      },
      {
        title: 'Conditional Probability (Higher)',
        ref: 'P9',
        formula: 'P(A|B) = P(A∩B)/P(B)<br>n(A∪B) = n(A)+n(B)−n(A∩B)',
        example: `100 students: 40 French, 35 Spanish, 15 both. P(Spanish|French) = 15/40 = <strong>3/8</strong>`
      }
    ]
  },
  statistics: {
    title: 'Statistics',
    icon: '📈',
    color: '#0891B2',
    sections: [
      {
        title: 'Averages & Spread',
        ref: 'S1, S4–S5',
        formula: 'Mean = Σfx/Σf · IQR = Q3−Q1<br>Outlier if < Q1−1.5×IQR or > Q3+1.5×IQR',
        tip: 'Grouped data → "estimated mean" (use midpoints). Say estimated!'
      },
      {
        title: 'Histograms & Cumulative Frequency (Higher)',
        ref: 'S2–S3',
        formula: 'Frequency density = frequency / class width',
        content: `<p>Cumulative frequency: plot upper boundaries. Read median at n/2, Q1 at n/4, Q3 at 3n/4.</p><p>Box plots: min, Q1, median, Q3, max.</p>`,
        tip: 'Comparing: one comment about average + one about spread. Always use context.'
      },
      {
        title: 'Scatter Graphs',
        ref: 'S6',
        content: `<p>Positive/negative/no correlation. Line of best fit through mean point. Interpolation = reliable, extrapolation = unreliable.</p>`,
        tip: 'Correlation ≠ causation. Consider lurking variables.'
      }
    ]
  }
};
