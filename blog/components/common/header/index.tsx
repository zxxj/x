'use client';

import { useState } from 'react';
import Dock from './dock';
import Image from 'next/image';
import { MorphingText } from '@/components/magicui/morphing-text';
import EditorDialog from '@/components/editor/editor-dialog';

const Header: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="w-full h-20 fixed z-[40] px-4 sm:px-10 lg:px-40 bg-white dark:bg-[#0a0a0a] flex justify-between items-center border-b-[1px] border-b-[#e5e5e5]  dark:border-[#222323]">
      <div className="flex h-full items-center">
        <Image
          className="dark:hidden block sm:w-16 sm:h-16"
          src="/lightLogo.svg"
          alt="Logo"
          priority
          width={40}
          height={40}
        />
        <Image
          className="hidden dark:block sm:w-16 sm:h-16"
          src="/darkLogo.svg"
          alt="Logo"
          priority
          width={40}
          height={40}
        />

        <MorphingText texts={['x?', 'i?', 'n?', 'xin!']} />
      </div>

      <Dock />
      <div>
        <Image
          className="hidden dark:block w-9 h-9"
          src="/article.svg"
          alt="Logo"
          priority
          width={25}
          height={25}
          onClick={() => setVisible(true)}
        />
        <Image
          className="dark:hidden block  w-9 h-9"
          src="/article_dark.svg"
          alt="Logo"
          priority
          width={25}
          height={25}
          onClick={() => setVisible(true)}
        />
      </div>

      <EditorDialog visible={visible} onVisibleChange={setVisible} />
    </div>
  );
};

export default Header;
