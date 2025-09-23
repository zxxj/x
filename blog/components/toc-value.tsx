export const tocValue: any = [
  {
    type: 'heading',
    level: 1,
    children: [{ text: 'Table of Contents' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: "The Table of Contents (TOC) feature allows you to create an automatically updated overview of your document's structure.",
      },
    ],
  },
  {
    type: 'paragraph',
    children: [{ text: 'How to use the Table of Contents:' }],
  },
  {
    type: 'bulleted-list',
    children: [
      {
        type: 'list-item',
        children: [{ text: 'Type "/toc" and press Enter to create the TOC.' }],
      },
      {
        type: 'list-item',
        children: [
          {
            text: 'The TOC updates automatically when you modify headings in the document.',
          },
        ],
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Example Content' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'This is an example of content that would be reflected in the Table of Contents.',
      },
    ],
  },
  {
    type: 'heading',
    level: 3,
    children: [{ text: 'Subsection' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Adding or modifying headings in your document will automatically update the TOC.',
      },
    ],
  },
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Benefits of Using TOC' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'A Table of Contents improves document navigation and provides a quick overview of your content structure.',
      },
    ],
  },
];

export const tocPlaygroundValue: any = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'Click on any heading in the table of contents to smoothly scroll to that section.',
      },
    ],
  },
];
