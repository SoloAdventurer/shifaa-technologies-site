"use client";

import { useState } from "react";
import {
  validateEgyptianPhone,
  validateEgyptianLocation,
  validateEmail,
  validateRequiredField,
  EGYPTIAN_LOCATIONS,
} from "../services/validationService";

// Simple loading spinner component
const LoadingSpinner = () => (
  <svg
    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [currentSystem, setCurrentSystem] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [countryError, setCountryError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setPhoneError(null);
    setCountryError(null);

    // Validate name
    const nameValidation = validateRequiredField(name, "Full name");
    if (!nameValidation.isValid) {
      setError(nameValidation.error ?? null);
      setIsLoading(false);
      return;
    }

    // Validate email
    const emailValidation = validateEmail(email);
    if (!emailValidation.isValid) {
      setError(emailValidation.error ?? null);
      setIsLoading(false);
      return;
    }

    // Validate phone number (Egyptian)
    const phoneValidation = await validateEgyptianPhone(phone);
    if (!phoneValidation.isValid) {
      setPhoneError(phoneValidation.error ?? null);
      setIsLoading(false);
      return;
    }

    // Validate country/city (Egyptian)
    const locationValidation = validateEgyptianLocation(country);
    if (!locationValidation.isValid) {
      setCountryError(locationValidation.error ?? null);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-beta-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          country,
          email,
          clinicName,
          currentSystem,
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setClinicName("");
        setCurrentSystem("");
      } else {
        throw new Error(data.error || "Failed to send request.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // This is the "Thank You" message that replaces the form on success
  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-green-50 text-green-800 rounded-lg shadow-md">
        <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
        <p className="text-lg mb-6">
          We&apos;ve received your request. We&apos;ll be in touch via email
          shortly with the next steps!
        </p>
        <a
          href="https://3yadti.app"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
        >
          Start Using 3yadti Beta Now
        </a>
        <p className="text-sm mt-4">
          Remember to check your spam folder just in case.
        </p>
      </div>
    );
  }

  // This is the form
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p>{error}</p>
        </div>
      )}
      <div className="space-y-8">
        {/* Name (Required) and Phone(Optional)}*/}
        <div className="text-gray-900">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 mb-6 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Dr. Ahmed Hassan"
          />

          <div className="text-gray-900">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone / WhatsApp Number (Optional, Egypt numbers only)
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError(null);
              }}
              className={`mt-2 block w-full px-2 py-4 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white ${
                phoneError ? "border-red-500" : "border-black-300"
              }`}
              placeholder="e.g., +20 109 252 3277"
            />
            {phoneError && (
              <p className="mt-1 text-sm text-red-600">{phoneError}</p>
            )}
          </div>
        </div>

        {/* Email and Country (Optional) */}
        <div className="grid sm:grid-cols-2 gap-6 text-gray-800">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-2 py-4 rounded-lg border-black-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Governorate / City (Optional)
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setCountryError(null);
              }}
              className={`mt-1 block w-full px-4 py-3 rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-white transition-all duration-200 appearance-none cursor-pointer ${
                countryError
                  ? "border-2 border-red-500"
                  : "border border-gray-300 hover:border-gray-400"
              }`}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
                paddingRight: "2.5rem",
              }}
            >
              <option value="">Select your location...</option>
              {EGYPTIAN_LOCATIONS.map((location) => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>
            {countryError && (
              <p className="mt-1 text-sm text-red-600">{countryError}</p>
            )}
          </div>
        </div>

        <div className="text-gray-900">
          <label
            htmlFor="clinicName"
            className="block text-sm font-medium text-gray-700"
          >
            Clinic Name (Optional)
          </label>
          <input
            type="text"
            id="clinicName"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Shifaa Clinic"
          />
        </div>

        <div className="text-gray-900">
          <label
            htmlFor="currentSystem"
            className="block text-sm font-medium text-gray-700"
          >
            What do you currently use to manage your clinic?
          </label>
          <select
            id="currentSystem"
            value={currentSystem}
            onChange={(e) => setCurrentSystem(e.target.value)}
            required
            className="mt-2 block w-full px-4 py-3 rounded-lg border border-grey-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 bg-white transition-all duration-200 appearance-none cursor-pointer hover:border-gray-400"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 0.5rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1.5em 1.5em",
              paddingRight: "2.5rem",
            }}
          >
            <option value="" disabled>
              Please select...
            </option>
            <option value="paper">Paper Files</option>
            <option value="excel">Excel / Google Sheets</option>
            <option value="old_software">Old Desktop Software</option>
            <option value="other_saas">Another Online Software</option>
            <option value="nothing">Nothing / Just Starting</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="text-gray-900">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              Submitting...
            </>
          ) : (
            "Request Beta Access"
          )}
        </button>
      </div>
      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to be contacted by our team for feedback as
        part of the Design Partner Program.
      </p>
    </form>
  );
}
