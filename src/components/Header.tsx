"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint in Tailwind
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
              <img
                src="/shifaa-technologies.png"
                alt="Healthcare Innovation Built for Egypt"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Shifaa Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              About
            </Link>

            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 pb-4 space-y-4">
            <Link
              href="/about"
              className="block text-gray-600 hover:text-blue-500"
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 hover:text-blue-500"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <a
              href="https://3yadti.app"
              className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={closeMobileMenu}
            >
              Try 3yadti
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
