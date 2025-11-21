"use client";
import { Link } from "@/i18n/routing";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitch from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("Header");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky border top-0 z-50">
      <nav className="max-w-8xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br rounded-xl flex items-center justify-center">
              <img src="/shifaa-technologies.png" alt="Shifaa Technologies" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Shifaa Technologies
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600">
              {t("about")}
            </Link>

            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              {t("contact")}
            </Link>

            <LanguageSwitch />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitch />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mt-4 pb-4 space-y-4 flex flex-col items-end">
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-500"
              onClick={closeMobileMenu}
            >
              {t("about")}
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-500"
              onClick={closeMobileMenu}
            >
              {t("contact")}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
