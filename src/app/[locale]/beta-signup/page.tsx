import BetaSignupForm from "@/components/BetaSignupForm";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("BetaSignup.metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function BetaSignupPage() {
  const t = useTranslations("BetaSignup");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {t("title")}{" "}
            <span className="text-blue-600">{t("titleHighlight")}</span>
          </h1>
          {/* <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
            {t("subtitle")}
          </p> */}
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl">
          <BetaSignupForm />
        </div>
      </div>
    </div>
  );
}
