"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.push(`/${newLocale}`);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      <span className="text-sm font-medium">
        {locale === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
}
