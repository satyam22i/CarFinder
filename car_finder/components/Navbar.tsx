'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black shadow-md">
      <Link href="/" className="text-xl font-bold text-white">
        Car Finder
      </Link>
      <div className="flex items-center gap-6">
        <Link href="/" className="text-white hover:text-blue-400 transition-colors">
          Home
        </Link>
        <Link href="/wishlist" className="text-white hover:text-blue-400 transition-colors">
          Wishlist
        </Link>
      </div>
    </nav>
  );
}
