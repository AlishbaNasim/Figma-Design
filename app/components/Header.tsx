import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="grid grid-cols-1 lg:grid-cols-5 items-center px-6 lg:px-16 py-4 lg:py-8 bg-gray-100 gap-4">
      {/* Left Column: Logo */}
      <div className="text-center lg:text-left text-[32px] lg:text-[40px] font-bold">
        ma.
      </div>

      {/* Center Column: Navigation */}
      <nav className="flex justify-between gap-2 lg:gap-8 text-[20px] lg:text-[24px]">
        <Link href="/">
          work
        </Link>
        <Link href="/about">
          About
        </Link>
   <Link href="/">Playground</Link> 
   <Link href="/">Contact</Link> 

      </nav>
    </header>
  );
}

export default Header;
