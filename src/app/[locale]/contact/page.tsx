import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {t("main.title")}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {t("main.description")}
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 break-words">
                      {t("founder.name")}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {t("founder.title")}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:mohamed@shifaatechnologies.com"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all"
                    >
                      mohamed@shifaatechnologies.com
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-gray-600">
                      {t("founder.location")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-green-800 font-medium text-xs sm:text-sm">
                    {t("founder.responseTime")}
                  </span>
                </div>
              </div>
            </div>

            {/* What to Include */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {t("guidelines.title")}
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="border-l-4 border-blue-600 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {t("guidelines.doctors.title")}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {t("guidelines.doctors.description")}
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {t("guidelines.institutions.title")}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {t("guidelines.institutions.description")}
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {t("guidelines.investors.title")}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {t("guidelines.investors.description")}
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-4 sm:pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {t("guidelines.press.title")}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {t("guidelines.press.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-50 rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {t("quickContact.title")}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  {t("quickContact.description")}
                </p>
                <a
                  href="mailto:mohamed@shifaatechnologies.com"
                  className="inline-flex items-center bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors"
                >
                  <span className="truncate">{t("quickContact.cta")}</span>
                  <svg
                    className="w-4 h-4 ml-2 flex-shrink-0"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
