"use client";

import { useTranslations, useLocale } from "next-intl";
import { useBetaSignupForm } from "@/app/hooks/useBetaSignupForm";

const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 rtl:ml-3 rtl:mr-0 h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function BetaSignupForm() {
  const t = useTranslations("BetaSignupForm");
  const locale = useLocale();

  // Use the refactored hook
  const {
    formData,
    errors,
    isLoading,
    isSubmitted,
    updateField,
    handleSubmit,
  } = useBetaSignupForm(locale);

  // Thank You message
  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 text-green-800 rounded-xl shadow-lg border-2 border-green-200">
        <div className="mb-4">
          <svg
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-4">{t("successTitle")}</h3>
        <p className="text-lg mb-6">{t("successMessage")}</p>
        <a
          href="https://3yadti.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
        >
          {t("successButton")}
        </a>
      </div>
    );
  }

  // Minimal 2-Field Form
  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {locale === "ar" ? "انضم للنسخة التجريبية" : "Join Beta Access"}
          </h2>
          <p className="text-gray-600">
            {locale === "ar"
              ? "سنتواصل معك خلال 24 ساعة"
              : "We'll contact you within 24 hours"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Error Message */}
          {errors.general && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg flex items-start gap-2">
              <svg
                className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm">{errors.general}</p>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t("labels.fullName")}
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              required
              className={`block w-full px-4 py-3 text-gray-900 bg-gray-50 rounded-xl shadow-sm focus:ring-2 focus:ring-opacity-50 focus:bg-white transition-all ${
                errors.name
                  ? "border-2 border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder={t("placeholders.name")}
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone/WhatsApp Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              {t("labels.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              required
              className={`block w-full px-4 py-3 text-gray-900 bg-gray-50 rounded-xl shadow-sm focus:ring-2 focus:ring-opacity-50 focus:bg-white transition-all ${
                errors.phone
                  ? "border-2 border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder={t("placeholders.phone")}
              dir="ltr"
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.phone}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-4 px-6 rounded-xl shadow-lg text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                {t("submitting")}
              </>
            ) : (
              <>
                {t("submit")}
                <svg
                  className="w-5 h-5 ml-2 rtl:mr-2 rtl:ml-0 rtl:rotate-180"
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
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 text-center leading-relaxed pt-2">
            {t("disclaimer")}
          </p>
        </form>
      </div>

      {/* Trust indicators below form */}
      <div className="mt-6 space-y-2 text-sm text-gray-600 text-center">
        <div className="flex items-center justify-center gap-2">
          <svg
            className="w-4 h-4 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            {locale === "ar"
              ? "رد سريع خلال 24 ساعة"
              : "Quick response within 24 hours"}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <svg
            className="w-4 h-4 text-green-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            {locale === "ar" ? "بدون تكاليف مقدمة" : "No upfront costs"}
          </span>
        </div>
      </div>
    </div>
  );
}
