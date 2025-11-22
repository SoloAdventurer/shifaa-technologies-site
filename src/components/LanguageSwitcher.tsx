"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition, useState } from "react";
import * as motion from "motion/react-client";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [animatingLocale, setAnimatingLocale] = useState(locale);

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";

    // Update animation state immediately for smooth visual feedback
    setAnimatingLocale(newLocale);

    // Delay the actual route change to let animation complete
    setTimeout(() => {
      startTransition(() => {
        router.replace(pathname, { locale: newLocale });
      });
    }, 300); // Match animation duration
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      aria-label={`Switch language to ${
        locale === "en" ? "Arabic" : "English"
      }`}
      className="relative flex bg-gray-100 rounded-full p-1 w-40"
      style={{
        justifyContent: animatingLocale === "ar" ? "flex-start" : "flex-end",
      }}
    >
      <motion.div
        className="absolute inset-y-1 w-[calc(50%-4px)] bg-blue-600 rounded-full"
        layout
        transition={{
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.2,
        }}
      />

      <span
        className={`relative z-10 flex-1 px-3 py-2 text-sm font-medium transition-colors ${
          animatingLocale === "ar" ? "text-white" : "text-gray-700"
        }`}
      >
        العربية
      </span>

      <span
        className={`relative z-10 flex-1 px-3 py-2 text-sm font-medium transition-colors ${
          animatingLocale === "en" ? "text-white" : "text-gray-700"
        }`}
      >
        EN
      </span>
    </button>
  );
}
