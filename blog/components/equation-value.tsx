export const equationValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Equation' }],
  },
  {
    type: 'paragraph',
    indent: 1,
    listStyleType: 'decimal',
    children: [
      {
        text: 'Equations allow you to express complex mathematical concepts in both inline and block formats.',
      },
    ],
  },
  {
    type: 'paragraph',
    indent: 1,
    listStyleType: 'decimal',
    children: [{ text: 'Key features:' }],
  },
  {
    type: 'bulleted-list',
    indent: 2,
    children: [
      { type: 'list-item', children: [{ text: 'LaTeX syntax support' }] },
      {
        type: 'list-item',
        children: [{ text: 'Inline and block equation formats' }],
      },
    ],
  },
  {
    type: 'paragraph',
    indent: 1,
    listStyleType: 'decimal',
    children: [
      { text: 'Inline equation example: ' },
      {
        type: 'inline-equation',
        texExpression: 'E=mc^2',
        children: [{ text: '' }],
      },
      { text: " (Einstein's famous equation)" },
    ],
  },
  {
    type: 'paragraph',
    indent: 1,
    listStyleType: 'decimal',
    children: [{ text: 'Block equation examples:' }],
  },
  {
    type: 'block-equation',
    texExpression: '\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    children: [{ text: '' }],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'The quadratic formula for solving ' },
      {
        type: 'inline-equation',
        texExpression: 'ax^2 + bx + c = 0',
        children: [{ text: '' }],
      },
      { text: '.' },
    ],
  },
  {
    type: 'block-equation',
    texExpression: '\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)',
    children: [{ text: '' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'The fundamental theorem of calculus.' }],
  },
  {
    type: 'paragraph',
    indent: 1,
    listStyleType: 'decimal',
    children: [{ text: 'Try these actions:' }],
  },
  {
    type: 'bulleted-list',
    indent: 2,
    children: [
      {
        type: 'list-item',
        children: [
          {
            text: 'Click on any equation to edit it. Press Escape to close the menu without editing it.',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'You can navigate through the equation by using the arrow keys',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'Use the slash command (/equation) to insert a new equation',
          },
        ],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'Use the slash command (/inline equation) for inline equations',
          },
        ],
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Advanced usage: Combine equations with other elements like tables or code blocks for comprehensive scientific documentation. For example:',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'The Schrödinger equation, ' },
      {
        type: 'inline-equation',
        texExpression:
          'i\\hbar\\frac{\\partial}{\\partial t}\\Psi = \\hat{H}\\Psi',
        children: [{ text: '' }],
      },
      { text: ', is fundamental in quantum mechanics.' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Experiment with different equation types and formatting to create rich, mathematical content in your documents.',
      },
    ],
  },
];
