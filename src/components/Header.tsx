'use client';

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/amex-logo-full.jpg" 
              alt="AMEX Construction Logo" 
              width={180} 
              height={50}
              className="h-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-900 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-900 transition font-medium">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-800 hover:text-blue-900 transition font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-900 transition font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-800 hover:text-blue-900 py-2 font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-gray-800 hover:text-blue-900 py-2 font-medium">
              About
            </Link>
            <Link href="/portfolio" className="block text-gray-800 hover:text-blue-900 py-2 font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="block text-gray-800 hover:text-blue-900 py-2 font-medium">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
