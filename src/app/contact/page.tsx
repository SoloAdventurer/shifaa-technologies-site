export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your healthcare practice? Let's talk.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Build Something Together
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Whether you're a doctor interested in 3yadti, a healthcare
                  institution looking for custom solutions, or an investor
                  interested in Egyptian healthcare technology, I'd love to hear
                  from you.
                </p>
              </div>

              {/* Contact Card */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mohamed</h3>
                    <p className="text-gray-600">Founder & CEO</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:mohamed@shifaatechnologies.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      mohamed@shifaatechnologies.com
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-600">Cairo, Egypt</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-green-800 font-medium text-sm">
                    Usually responds within 24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* What to Include */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What to Include in Your Message
                </h3>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      For Doctors
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Tell me about your practice, current challenges with
                      software, and what features would make your daily work
                      easier.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      For Healthcare Institutions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Describe your organization size, current systems, and
                      specific requirements for custom healthcare solutions.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      For Investors & Partners
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Share your background, investment focus, and how you see
                      yourself contributing to Egyptian healthcare innovation.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-600 pl-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      For Press & Media
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Include your publication, story angle, and deadline. Happy
                      to discuss our mission and products.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  For quick questions about 3yadti or our other products, feel
                  free to reach out directly.
                </p>
                <a
                  href="mailto:mohamed@shifaatechnologies.com?subject=Quick Question about Shifaa Technologies"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Quick Email
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
