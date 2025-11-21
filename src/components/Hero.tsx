import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="bg-gradient-to-br from-blue-300 to-indigo-300 min-h-screen flex items-center pt-8 md:pt-2">
      {/* Note: Kept dir="ltr" for visual consistency if you want hero to always look like this, 
          remove it to support RTL layout flipping automatically */}
      <div className="max-w-8xl mx-auto px-14 md:mb-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-2">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t("titlePart1")}
                <span className="block text-blue-600">{t("titlePart2")}</span>
              </h1>

              <p className="flex text-xl text-gray-600 leading-relaxed max-w-lg">
                {t("description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-col pt-6">
              <Link
                href="/beta-signup"
                className=" bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl text-center flex items-center justify-center"
              >
                {t("ctaBeta")}
                <svg
                  className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
            <p className="text-sm text-yellow-700 bg-yellow-100 p-2 rounded-lg">
              <strong>{t("betaDisclaimerTitle")}</strong>{" "}
              {t("betaDisclaimerText")}
            </p>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/3yadti-hero.png"
                alt="3yadti Clinic Management System"
                className="w-full max-w-lg h-auto transform hover:scale-105 transition-transform duration-300"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 rtl:right-auto rtl:-left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                {t("betaBadge")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
