'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useState } from 'react';
import CustomLoader from '../loader';

export default function Header() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);

    const finishLoader = () => {
      setLoading(false);
    };

    // Simulate a small delay for demonstration
    const timeout = setTimeout(finishLoader, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <header className="text-white bg-gray-900 shadow-md">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
          <CustomLoader />
        </div>
      )}
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Left Section (Logo) */}
        {/* Center Section (Nav Links) */}
        <div className="flex justify-center flex-1 space-x-6">
          <Link href="/about" title="About" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/work" title="Work Experience" className="hover:text-gray-300">
            Work Experience
          </Link>
          <Link href="/education" className="hover:text-gray-300">
            Education
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="flex justify-center flex-1">
          <Link href="/" className="text-xl font-bold">
            {/* Harini Thangavel  */}
            Sample
          </Link>
        </div>

        {/* Right Section (Button/Profile) */}
        <div className="flex justify-end flex-1">
          <a
            href="https://www.linkedin.com/in/harini-thangavel-04992913a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg hover:bg-transparent"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={25} height={25} />
          </a>
        </div>
      </div>
    </header>
  );
}
