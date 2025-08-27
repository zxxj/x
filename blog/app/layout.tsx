import './globals.css';
import { SmoothCursor } from '@/components/ui/smooth-cursor';
import Header from '@/components/common/header';
import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import Footer from '@/components/common/footer';

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
      <body className="w-screen h-screen overflow-x-hidden relative">
        {/* 背景固定，不随滚动 */}
        <AnimatedGridPattern className="fixed inset-0 w-full h-full z-0" />

        {/* 光标 */}
        <SmoothCursor />

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
