import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Healthcare Solutions
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProductCard
              title="3yadti"
              description="Offline-first clinic management system for Egyptian general practitioners"
              features={[
                "100% Offline Operation",
                "Arabic & English Support",
                "Smart Medical Search",
                "Appointment management",
                "Analytics",
                "Full patient profile export",
              ]}
              status="Beta Available"
              link="https://3yadti.app"
              primaryProduct={true}
            />

            <ProductCard
              title="Coming Soon"
              description="More healthcare innovations in development"
              features={[
                "Hospital Management",
                "Pharmacy Systems",
                "Telemedicine Platform",
                "Health Analytics",
              ]}
              status="In Development"
              link="#"
              primaryProduct={false}
            />
            <p className=" text-sm text-yellow-700 bg-yellow-100 p-3 rounded-lg">
              <strong>Beta Disclaimer:</strong> This is a trial version for
              feedback. Please use with caution and maintain external backups of
              all critical data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
