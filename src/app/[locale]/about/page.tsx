import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("mission.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t("mission.content")}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("differentiators.title")}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("differentiators.offlineFirst.title")}
                </h3>
                <p className="text-gray-600">
                  {t("differentiators.offlineFirst.description")}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("differentiators.arabicNative.title")}
                </h3>
                <p className="text-gray-600">
                  {t("differentiators.arabicNative.description")}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("differentiators.egyptFocused.title")}
                </h3>
                <p className="text-gray-600">
                  {t("differentiators.egyptFocused.description")}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {t("differentiators.doctorDriven.title")}
                </h3>
                <p className="text-gray-600">
                  {t("differentiators.doctorDriven.description")}
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t("story.title")}
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              {t("story.paragraph1")}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("story.paragraph2")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
