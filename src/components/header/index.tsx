'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useLayoutEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin } from 'lucide-react';
import CustomLoader from '../loader';
import { useTheme } from '@/src/context/ThemeContext';
import { NAV_LINKS, PERSONAL_DETAILS } from '@/src/utils/constants';

export default function Header() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useLayoutEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm">
          <CustomLoader />
        </div>
      )}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-white/80 dark:bg-black/50 border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-indigo-500/30 transition-shadow">
              HT
            </div>
            <span className="font-semibold text-slate-800 dark:text-white hidden sm:block tracking-wide">
              Harini Thangavel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  pathname === link.href
                    ? 'text-indigo-600 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {pathname === link.href && (
                  <span className="absolute inset-0 rounded-lg bg-slate-100 dark:bg-white/10" />
                )}
                <span className="relative">{link.label}</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 rounded-full ${
                    pathname === link.href ? 'w-4' : 'w-0 group-hover:w-4'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <button
              onClick={toggleTheme}
              className="text-slate-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-semibold transition-colors ${
                  pathname === link.href
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-slate-700 dark:text-white/70 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
