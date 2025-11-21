import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div>
      <Hero />

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-8xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            {t("productsTitle")}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProductCard
              title={t("product3yadti.title")}
              description={t("product3yadti.description")}
              features={[
                t("product3yadti.features.offline"),
                t("product3yadti.features.language"),
                t("product3yadti.features.search"),
                t("product3yadti.features.appointments"),
                t("product3yadti.features.analytics"),
                t("product3yadti.features.export"),
              ]}
              status={t("product3yadti.status")}
              link="/beta-signup"
              primaryProduct={true}
            />

            <ProductCard
              title={t("productComingSoon.title")}
              description={t("productComingSoon.description")}
              features={[
                t("productComingSoon.features.hospital"),
                t("productComingSoon.features.pharmacy"),
                t("productComingSoon.features.telemedicine"),
                t("productComingSoon.features.analytics"),
              ]}
              status={t("productComingSoon.status")}
              link="#"
              primaryProduct={false}
            />
          </div>

          <p className="text-sm text-yellow-700 bg-yellow-100 p-2 rounded-lg mt-8">
            <strong>{t("betaDisclaimer.title")}</strong>{" "}
            {t("betaDisclaimer.text")}
          </p>
        </div>
      </section>
    </div>
  );
}
