export const mentionValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Mention' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Mention and reference other users or entities within your text using @-mentions.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Try mentioning ' },
      { type: 'mention', value: 'BB-8', children: [{ text: 'BB-8' }] },
      { text: ' or ' },
      {
        type: 'mention',
        value: 'Boba Fett',
        children: [{ text: 'Boba Fett' }],
      },
      { text: '.' },
    ],
  },
];
