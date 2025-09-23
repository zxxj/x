export const listValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'List' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Create indented lists with multiple levels of indentation and customize the list style type for each level.',
      },
    ],
  },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        checked: true,
        children: [{ text: 'Todo 1' }],
      },
      {
        type: 'li',
        children: [
          { text: 'Disc 1' },
          {
            type: 'ul',
            children: [
              {
                type: 'li',
                children: [
                  { text: 'Disc 2' },
                  {
                    type: 'ul',
                    children: [
                      {
                        type: 'li',
                        checked: false,
                        children: [{ text: 'Todo 2' }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'li',
        children: [
          { text: 'Roman 1' },
          {
            type: 'ul',
            children: [
              { type: 'li', children: [{ text: 'Decimal 11' }] },
              { type: 'li', children: [{ text: 'Decimal 111' }] },
              { type: 'li', children: [{ text: 'Decimal 112' }] },
            ],
          },
        ],
      },
      {
        type: 'li',
        children: [
          { text: 'Roman 2' },
          {
            type: 'ul',
            children: [
              { type: 'li', children: [{ text: 'Decimal 11' }] },
              { type: 'li', children: [{ text: 'Decimal 12' }] },
            ],
          },
        ],
      },
      { type: 'li', children: [{ text: 'Roman 3' }] },
      { type: 'li', children: [{ text: 'Roman 4' }] },
    ],
  },
];
