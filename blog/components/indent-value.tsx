export const indentValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Indentation' }],
  },
  {
    type: 'paragraph',
    marginLeft: 1, // 表示一级缩进
    children: [
      {
        text: 'Easily control the indentation of specific blocks to highlight important information and improve visual structure.',
      },
    ],
  },
  {
    type: 'paragraph',
    marginLeft: 2, // 表示二级缩进
    children: [
      {
        text: 'For instance, this paragraph looks like it belongs to the previous one.',
      },
    ],
  },
];
