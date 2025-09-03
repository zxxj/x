import { Toaster } from 'sonner';

import { PlateEditor } from '@/components/editor/plugins/plate-editor';

export default function Page() {
  return (
    <div className="h-screen w-full">
      <PlateEditor />

      <Toaster />
    </div>
  );
}
