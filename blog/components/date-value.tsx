const today = new Date().toISOString().split('T')[0];

export const dateValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Date' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Insert and display dates within your text using inline date elements. These dates can be easily selected and modified using a calendar interface.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Try selecting ' },
      {
        type: 'date',
        date: '2024-01-01',
        children: [{ text: '\u00A0' }], // non-breaking space
      },
      { text: ' or ' },
      {
        type: 'date',
        date: today,
        children: [{ text: '\u00A0' }],
      },
      { text: '.' },
    ],
  },
];
