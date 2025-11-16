import ProductCard from "@/components/ProductCard";

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Healthcare Solutions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Innovative software designed specifically for Egyptian medical
            professionals.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <ProductCard
              title="3yadti"
              description="Comprehensive offline-first clinic management system designed for Egyptian general practitioners. Manage patients, appointments, and medical records without internet dependency."
              features={[
                "100% Offline Operation",
                "Arabic & English Support",
                "Smart Medical Search",
                "Patient Records Management",
                "Appointment Scheduling",
                "Analytics Dashboard",
                "PDF, CSV, JSON Export",
                "Prescription Templates",
              ]}
              status="Beta Available"
              link="/beta-signup"
              primaryProduct={true}
            />

            <ProductCard
              title="Hospital Management Suite"
              description="Complete hospital management solution for larger healthcare facilities. Multi-department coordination, staff management, and advanced reporting."
              features={[
                "Multi-Department Management",
                "Staff Scheduling",
                "Inventory Management",
                "Financial Reporting",
                "Patient Flow Optimization",
                "Bed Management",
                "Pharmacy Integration",
              ]}
              status="In Development"
              link="#"
              primaryProduct={false}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProductCard
              title="Pharmacy Management System"
              description="Streamlined pharmacy operations with inventory tracking, prescription management, and automated reordering for Egyptian pharmacies."
              features={[
                "Inventory Tracking",
                "Prescription Management",
                "Automated Reordering",
                "Sales Analytics",
                "Expiry Date Monitoring",
                "Supplier Management",
              ]}
              status="Planning Phase"
              link="#"
              primaryProduct={false}
            />

            <ProductCard
              title="Telemedicine Platform"
              description="Secure telemedicine solution connecting Egyptian patients with doctors, designed for low-bandwidth environments."
              features={[
                "Low-Bandwidth Video Calls",
                "Secure Messaging",
                "Digital Prescriptions",
                "Appointment Booking",
                "Patient History Access",
                "Mobile App Support",
              ]}
              status="Research Phase"
              link="#"
              primaryProduct={false}
            />
          </div>
        </div>
      </section>

      {/* Call to Action
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start with 3yadti Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the beta and help shape the future of healthcare technology in
            Egypt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/beta-signup"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Try 3yadti Beta
            </a>
            <a
              href="/contact"
              className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
}
