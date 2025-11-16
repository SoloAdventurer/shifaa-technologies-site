export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Shifaa Technologies
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are building the future of healthcare technology in Egypt.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Healthcare in Egypt faces unique challenges: inconsistent internet
              connectivity, language barriers in medical software, and systems
              built for Western markets that do not fit local workflows. We are
              here to change that.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Offline-First
                </h3>
                <p className="text-gray-600">
                  Our solutions work perfectly without internet. No more lost
                  data or frustrated doctors when connectivity fails.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Arabic Native
                </h3>
                <p className="text-gray-600">
                  Built from the ground up with Arabic support, not as an
                  afterthought. Natural RTL support and culturally appropriate
                  design.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Egypt-Focused
                </h3>
                <p className="text-gray-600">
                  Designed specifically for Egyptian healthcare workflows,
                  regulations, and the real challenges doctors face every day.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Doctor-Driven
                </h3>
                <p className="text-gray-600">
                  Built by listening to real Egyptian doctors and understanding
                  their actual needs, not what we think they need.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Shifaa Technologies was founded to solve a simple problem:
              existing healthcare software does not work well in Egypt. Whether
              it is language barriers, connectivity issues, or workflows that do
              not match how Egyptian clinics actually operate, doctors were
              struggling with tools that made their jobs harder, not easier.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our first product, 3yadti, is a clinic management system that
              works 100% offline, supports Arabic natively, and is designed
              specifically for Egyptian general practitioners. It is currently
              in beta and being used by doctors across Egypt.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
