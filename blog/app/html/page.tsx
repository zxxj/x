// app/html/page.tsx
import * as React from 'react';

// 标记为动态页面，避免在构建时预渲染
export const dynamic = 'force-dynamic';
import path from 'node:path';
import fs from 'node:fs/promises';

import { cva } from 'class-variance-authority';
import {
  type Value,
  createStaticEditor,
  normalizeNodeId,
  serializeHtml,
} from 'platejs';

import { BaseEditorKit } from '@/components/editor/editor-base-kit';
import {
  ExportHtmlButton,
  HtmlIframe,
} from '@/components/slate-to-html';

// 导入客户端组件包装器
import { EditorViewWrapper } from './editor-view-wrapper';
import { alignValue } from '@/components/align-value';
import { basicBlocksValue } from '@/components/basic-blocks-value';
import { basicMarksValue } from '@/components/basic-marks-value';
import { columnValue } from '@/components/column-value';
import { dateValue } from '@/components/date-value';
import { discussionValue } from '@/components/discussion-value';
import { equationValue } from '@/components/equation-value';
import { fontValue } from '@/components/font-value';
import { indentValue } from '@/components/indent-value';
import { lineHeightValue } from '@/components/line-height-value';
import { linkValue } from '@/components/link-value';
import { listValue } from '@/components/list-value';
import { mediaValue } from '@/components/media-value';
import { mentionValue } from '@/components/mention-value';
import { createTable } from '@/components/table-value';
import { tocPlaygroundValue } from '@/components/toc-value';
import { createHtmlDocument } from '@/lib/create-html-document';
import { EditorStatic } from '@/components/ui/editor-static';

const headingVariants = cva(
  'group mt-8 scroll-m-20 font-heading text-xl font-semibold tracking-tight',
);

// 服务端缓存读取 Tailwind CSS
const getCachedTailwindCss = async () => {
  const cssPath = path.join(process.cwd(), 'public', 'tailwind.css');
  return await fs.readFile(cssPath, 'utf8');
};

export default async function SlateToHtmlBlock() {
  // 生成 Plate Value
  const createValue = (): Value =>
    normalizeNodeId([
      ...basicBlocksValue,
      ...basicMarksValue,
      ...tocPlaygroundValue,
      ...linkValue,
      createTable,
      ...equationValue,
      ...columnValue,
      ...mentionValue,
      ...dateValue,
      ...fontValue,
      ...discussionValue,
      ...alignValue,
      ...lineHeightValue,
      ...indentValue,
      ...listValue,
      ...mediaValue,
    ]);

  // 创建静态编辑器
  const editor = createStaticEditor({
    plugins: BaseEditorKit,
    value: createValue(),
  });

  // 读取 Tailwind CSS
  const tailwindCss = await getCachedTailwindCss();

  const katexCDN = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.18/dist/katex.css" integrity="sha384-9PvLvaiSKCPkFKB1ZsEoTjgnJn+O3KvEwtsz37/XrkYft3DTk2gHdYvd9oWgW3tV" crossorigin="anonymous">`;

  const theme = 'light'; // 默认主题

  // 生成 HTML
  const editorHtml = await serializeHtml(editor, {
    editorComponent: EditorStatic,
    props: { style: { padding: '0 calc(50% - 350px)', paddingBottom: '' } },
  });

  const html = createHtmlDocument({
    editorHtml,
    katexCDN,
    tailwindCss,
    theme,
  });

  return (
    <div className="grid grid-cols-3 px-4">
      <div className="p-2">
        <h3 className={headingVariants()}>Editor</h3>
      </div>

      <div className="p-2">
        <h3 className={headingVariants()}>EditorView</h3>
        <EditorViewWrapper value={createValue()} />
      </div>

      <div className="relative p-2">
        <h3 className={headingVariants()}>HTML Iframe</h3>
        <ExportHtmlButton
          className="absolute top-10 right-0"
          html={html}
          serverTheme={theme}
        />
        <HtmlIframe
          className="h-[7500px] w-full"
          html={html}
          serverTheme={theme}
        />
      </div>
    </div>
  );
}
