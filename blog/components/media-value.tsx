export const imageValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Image' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Add images by either uploading them or providing the image URL:',
      },
    ],
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1712688930249-98e1963af7bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Image caption',
    align: 'center',
    width: '55%',
  },
  {
    type: 'paragraph',
    children: [{ text: 'Customize image captions and resize images.' }],
  },
];

export const mediaPlaceholderValue: any = [
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Upload' }],
  },
  {
    type: 'paragraph',
    children: [
      {
        text: 'Our editor supports various media types for upload, including images, videos, audio, and files.',
      },
    ],
  },
  {
    type: 'ul',
    children: [
      {
        type: 'li',
        children: [{ text: 'Real-time upload status and progress tracking' }],
      },
      {
        type: 'li',
        children: [
          { text: 'Configurable file size limits and batch upload settings' },
        ],
      },
      {
        type: 'li',
        children: [{ text: 'Clear error messages for any upload issues' }],
      },
      {
        type: 'li',
        children: [
          {
            text: 'Try it now - drag an image from your desktop or click the upload button in the toolbar',
          },
        ],
      },
    ],
  },
];

export const mediaValue: any = [
  ...imageValue,
  ...mediaPlaceholderValue,
  {
    type: 'heading',
    level: 2,
    children: [{ text: 'Embed' }],
  },
  {
    type: 'paragraph',
    children: [
      { text: 'Embed various types of content, such as videos and tweets:' },
    ],
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/MyiBAziEWUA',
    width: '560',
    height: '315',
    align: 'center',
  },
];
