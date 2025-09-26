import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Section (Logo) */}
        {/* Center Section (Nav Links) */}
        <div className="flex-1 flex justify-center space-x-6">
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
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-xl font-bold">
            {/* Harini Thangavel  */}
            Sample
          </Link>
        </div>

        {/* Right Section (Button/Profile) */}
        <div className="flex-1 flex justify-end">
          <Link href="/hire-me" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
            {/* Hire Me */}
            <Image src="linkedin.svg" alt={''} width={'25'} height={'25'} />
          </Link>
        </div>
      </div>
    </header>
  );
}
