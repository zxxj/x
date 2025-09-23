export const linkValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Link' }],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Add ' },
      {
        type: 'link',
        url: 'https://en.wikipedia.org/wiki/Hypertext',
        target: '_blank',
        rel: 'noopener noreferrer',
        children: [{ text: 'hyperlinks' }],
      },
      {
        text: ' within your text to reference external sources or provide additional information using the Link plugin.',
      },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Effortlessly create hyperlinks using the toolbar or by pasting a URL while selecting the desired text.',
      },
    ],
  },
];
