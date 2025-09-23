export const columnValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Column' }],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Create column and the border will hidden when viewing' },
    ],
  },
  {
    type: 'table',
    colSizes: [50, 50],
    children: [
      {
        type: 'table-row',
        children: [
          {
            type: 'table-cell',
            children: [
              { type: 'paragraph', children: [{ text: 'left 1' }] },
              { type: 'paragraph', children: [{ text: 'left 2' }] },
            ],
          },
          {
            type: 'table-cell',
            children: [
              { type: 'paragraph', children: [{ text: 'right 1' }] },
              { type: 'paragraph', children: [{ text: 'right 2' }] },
            ],
          },
        ],
      },
    ],
  },
];
