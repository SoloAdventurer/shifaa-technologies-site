"use client";

import { useState } from "react";

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
  const [currentSystem, setCurrentSystem] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/send-beta-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, clinicName, currentSystem }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await res.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        throw new Error(data.error || "Failed to send request.");
      }
    } catch (err: any) {
      setError(err.message);
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
          We've received your request. We'll be in touch via email shortly with
          the next steps!
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
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Dr. Ahmed Hassan"
        />
      </div>

      <div className="text-gray-900">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-3 rounded-lg border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="your-email@gmail.com"
        />
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
          className="mt-1 block w-full px-4 py-3 rounded-lg border-black-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white"
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
        <p className="mt-2 text-xs text-gray-500">
          This helps us understand your needs.
        </p>
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
