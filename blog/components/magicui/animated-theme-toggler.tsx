'use client';

import { Moon, SunDim } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { cn } from '@/lib/utils';

type Props = { className?: string };

export const AnimatedThemeToggler = ({ className }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    if ((document as any).startViewTransition) {
      const transition = (document as any).startViewTransition(() => {
        flushSync(() => {
          const dark = document.documentElement.classList.toggle('dark');
          setIsDarkMode(dark);
          localStorage.setItem('theme', dark ? 'dark' : 'light');
        });
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRad}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      });
    } else {
      // ❌ 不支持时只能瞬间切换
      const dark = document.documentElement.classList.toggle('dark');
      setIsDarkMode(dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }
  };

  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      {isDarkMode ? <SunDim /> : <Moon />}
    </button>
  );
};
