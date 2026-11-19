import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/header';
import { ThemeProvider } from '@/src/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Harini Thangavel | Full Stack Developer',
  description:
    'Full Stack Developer specializing in React.js, Next.js, Node.js, NestJS — building scalable web applications and immersive 3D experiences.',
  keywords: [
    'Harini thangavel',
    'Full Stack Developer',
    'React.js',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'MySQL',
    'Prisma ORM',
    'Three.js'
  ],
  authors: [{ name: 'Harini Thangavel' }]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try {
                var saved = localStorage.getItem('theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            })()`
          }}
        />
      </head>
      <body className="antialiased bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
