import BetaSignupForm from "../../components/BetaSignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "3yadti Beta Signup | Shifaa Technologies",
  description:
    "Join the 3yadti beta and help shape the future of healthcare technology in Egypt.",
};

export default function BetaSignupPage() {
  return (
    // We reuse the same gradient style from your Hero section for consistency
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Join the <span className="text-blue-600">3yadti Beta</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            You're one step away. As a Design Partner, your feedback will
            directly shape the future of healthcare tech in Egypt.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
          <BetaSignupForm />
        </div>
      </div>
    </div>
  );
}
