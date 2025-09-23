'use client';

import { type Value } from 'platejs';
import { EditorViewClient } from '@/components/slate-to-html';

interface EditorViewWrapperProps {
  value: Value;
}

export const EditorViewWrapper = ({ value }: EditorViewWrapperProps) => {
  return <EditorViewClient value={value} />;
};