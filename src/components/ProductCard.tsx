import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  status: string;
  link: string;
  primaryProduct: boolean;
}

export default function ProductCard({
  title,
  description,
  features,
  status,
  link,
  primaryProduct,
}: ProductCardProps) {
  const t = useTranslations("ProductCard");

  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
        primaryProduct ? "border-2 border-blue-500" : ""
      }`}
    >
      {primaryProduct && (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white mb-4">
          {t("featured")}
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <svg
              className="w-4 h-4 text-green-500 mr-3 rtl:ml-3 rtl:mr-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <span
          className={`text-sm font-medium ${
            primaryProduct ? "text-blue-600" : "text-gray-500"
          }`}
        >
          {status}
        </span>

        {link !== "#" ? (
          <Link
            href={link}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              primaryProduct
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {primaryProduct ? t("tryNow") : t("comingSoon")}
          </Link>
        ) : (
          <button
            disabled
            className="px-6 py-2 rounded-lg font-medium bg-gray-200 text-gray-400 cursor-not-allowed"
          >
            {t("comingSoon")}
          </button>
        )}
      </div>
    </div>
  );
}
