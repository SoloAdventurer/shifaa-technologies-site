"use client";

import { useTranslations, useLocale } from "next-intl";
import { EGYPTIAN_LOCATIONS } from "../services/validationService";
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
  const {
    formData,
    errors,
    isLoading,
    isSubmitted,
    updateField,
    handleSubmit,
  } = useBetaSignupForm();

  const t = useTranslations("BetaSignupForm");
  const locale = useLocale();
  const isRtl = locale === "ar";

  // Thank You message
  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 text-green-800 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4">{t("successTitle")}</h3>
        <p className="text-lg mb-6">{t("successMessage")}</p>
        <a
          href="https://3yadti.app"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
        >
          {t("successButton")}
        </a>
        <p className="text-sm mt-4">{t("spamNote")}</p>
      </div>
    );
  }

  // Form
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form Error Message */}
      {errors.general && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p>{errors.general || t("generalError")}</p>
        </div>
      )}
      <div className="space-y-8">
        {/* Name */}
        <div className="text-gray-900">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            {t("labels.fullName")}
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
            className="mt-1 mb-6 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder={t("placeholders.name")}
          />

          {/* Phone */}
          <div className="text-gray-900">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {t("labels.phone")}
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className={`mt-2 block w-full px-2 py-4 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white ${
                errors.phone ? "border-red-500" : "border-black-300"
              }`}
              placeholder={t("placeholders.phone")}
              dir="ltr" // Phone numbers usually better left LTR
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email and Country */}
        <div className="grid sm:grid-cols-2 gap-6 text-gray-800">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t("labels.email")}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              required
              className="mt-1 block w-full px-2 py-4 rounded-lg border-black-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
              placeholder={t("placeholders.email")}
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              {t("labels.location")}
            </label>
            <select
              id="country"
              value={formData.country}
              onChange={(e) => updateField("country", e.target.value)}
              className={`required mt-1 block w-full px-4 py-3 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-white transition-all duration-200 appearance-none cursor-pointer ${
                errors.country
                  ? "border-2 border-red-500"
                  : "border border-gray-300 hover:border-gray-400"
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: isRtl
                  ? "left 0.5rem center"
                  : "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: isRtl ? "1rem" : "2.5rem",
                paddingLeft: isRtl ? "2.5rem" : "1rem",
              }}
            >
              <option value="">{t("labels.locationPlaceholder")}</option>
              {/* Note: EGYPTIAN_LOCATIONS labels might need to be translated in the source file or mapped here if they are static keys */}
              {EGYPTIAN_LOCATIONS.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country}</p>
            )}
          </div>
        </div>

        {/* Medical Specialty */}
        <div className="text-gray-900">
          <label
            htmlFor="medicalSpecialty"
            className="block text-sm font-medium text-gray-700"
          >
            {t("labels.specialty")}
          </label>
          <input
            type="text"
            id="medicalSpecialty"
            value={formData.medicalSpecialty}
            onChange={(e) => updateField("medicalSpecialty", e.target.value)}
            className={`mt-1 block w-full px-4 py-3 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white ${
              errors.specialty
                ? "border-2 border-red-500"
                : "border border-gray-300"
            }`}
            placeholder={t("placeholders.specialty")}
          />
          {errors.specialty && (
            <p className="mt-1 text-sm text-red-600">{errors.specialty}</p>
          )}
        </div>

        {/* Clinic Name */}
        <div className="text-gray-900">
          <label
            htmlFor="clinicName"
            className="block text-sm font-medium text-gray-700"
          >
            {t("labels.clinicName")}
          </label>
          <input
            type="text"
            id="clinicName"
            value={formData.clinicName}
            onChange={(e) => updateField("clinicName", e.target.value)}
            className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder={t("placeholders.clinicName")}
          />
        </div>

        {/* Current System */}
        <div className="text-gray-900">
          <label
            htmlFor="currentSystem"
            className="block text-sm font-medium text-gray-700"
          >
            {t("labels.currentSystem")}
          </label>
          <select
            id="currentSystem"
            value={formData.currentSystem}
            onChange={(e) => updateField("currentSystem", e.target.value)}
            required
            className="mt-2  border border-gray-300 hover:border-gray-400 block w-full px-4 py-3 rounded-lg  shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-white transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: isRtl
                ? "left 0.5rem center"
                : "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
              paddingRight: isRtl ? "1rem" : "2.5rem",
              paddingLeft: isRtl ? "2.5rem" : "1rem",
            }}
          >
            <option value="" disabled>
              {t("labels.currentSystemPlaceholder")}
            </option>
            <option value="paper">{t("systemOptions.paper")}</option>
            <option value="excel">{t("systemOptions.excel")}</option>
            <option value="old_software">
              {t("systemOptions.old_software")}
            </option>
            <option value="other_saas">{t("systemOptions.other_saas")}</option>
            <option value="nothing">{t("systemOptions.nothing")}</option>
            <option value="other">{t("systemOptions.other")}</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-gray-900">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              {t("submitting")}
            </>
          ) : (
            t("submit")
          )}
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center">{t("disclaimer")}</p>
    </form>
  );
}
