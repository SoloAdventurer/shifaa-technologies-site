import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <section className="bg-gradient-to-br from-blue-300 to-indigo-300 min-h-screen flex items-center py-8 md:pt-2">
      <div className="max-w-8xl mx-auto px-4 sm:px-8 md:px-14 md:mb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image on top for mobile, right side on desktop */}
          <div className="flex justify-center lg:justify-end lg:order-2">
            <div className="relative w-full max-w-sm lg:max-w-lg">
              <img
                src="/3yadti-hero.png"
                alt="3yadti Clinic Management System Dashboard"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-300 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl"
              />

              {/* Floating Badge - smaller on mobile */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 rtl:right-auto rtl:-left-2 lg:rtl:-left-4 bg-green-500 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg animate-pulse">
                {t("betaBadge")}
              </div>
            </div>
          </div>

          {/* Content - comes after image on mobile, left side on desktop */}
          <div className="space-y-4 sm:space-y-6 lg:order-1 mx-auto lg:mx-0 max-w-lg lg:max-w-none">
            <div className="space-y-3 sm:space-y-4">
              <h1
                className={`text-center ${
                  isRTL ? "lg:text-right" : "lg:text-left"
                } text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight`}
              >
                {t("titlePart1")}
                <span className="block text-blue-600 mt-1 sm:mt-2">
                  {t("titlePart2")}
                </span>
              </h1>

              <p
                className={`text-center ${
                  isRTL ? "lg:text-right" : "lg:text-left"
                } text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg ${
                  isRTL ? "lg:mr-0" : "lg:ml-0"
                } mx-auto`}
              >
                {t("description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="/beta-signup"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto group"
              >
                <span>{t("ctaBeta")}</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rtl:mr-2 rtl:ml-0 inline-block group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Beta Disclaimer - Compact on mobile */}
            <div className="text-xs sm:text-sm text-yellow-800 bg-yellow-100 p-3 sm:p-4 rounded-lg border border-yellow-200">
              <strong className="block sm:inline mb-1 sm:mb-0">
                {t("betaDisclaimerTitle")}
              </strong>{" "}
              <span className="hidden sm:inline">
                {t("betaDisclaimerText")}
              </span>
              <span className="sm:hidden">
                {t("betaDisclaimerMobile") ||
                  "نسخة تجريبية - احتفظ بنسخ احتياطية من بياناتك"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
