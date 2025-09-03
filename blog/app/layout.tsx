import './globals.css';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { Skeleton } from '@/components/ui/skeleton';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>x</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="w-full h-full">
        {/* 背景固定，不随滚动 */}
        <AnimatedGridPattern className="fixed inset-0 w-full h-full z-0" />

        {/* 骨架 */}
        <Skeleton />

        {/* 光标 */}
        {/* <SmoothCursor /> */}

        {/* 进度条 */}
        <ScrollProgress />

        {/* sonner */}
        <Toaster position="top-center" />

        {/* 内容 */}
        <div>
          <Header />
          <main className="pt-20 w-full max-w-[1500px] mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
