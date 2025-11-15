export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Healthcare Innovation
                <span className="block text-blue-600">Built for Egypt</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We build smart, offline-first healthcare technology solutions
                specifically designed for Egyptian medical professionals and the
                unique challenges they face.
              </p>
            </div>

            {/* Key Stats
            <div className="grid grid-cols-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 text-sm">Offline Operation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Arabic
                </div>
                <div className="text-gray-600 text-sm">Native Support</div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="https://3yadti.app"
                target="_blank"
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl text-center"
              >
                Try 3yadti Beta
                <svg
                  className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform"
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

              <a
                href="/about"
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 text-center"
              >
                Learn More
              </a>
            </div>
            <p className="text-sm text-yellow-700 bg-yellow-100 p-2 rounded-lg">
              <strong>Beta Disclaimer:</strong> This is a trial version for
              feedback. Please use with caution and maintain external backups of
              all critical data. Also write all patient data in English in case
              you intend to Export into PDFs. Export in other languages is a
              premium feature.
            </p>
          </div>

          {/* Right Visual - 3yadti Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/3yadti-hero.png"
                alt="3yadti Clinic Management System"
                className="w-full max-w-lg h-auto transform hover:scale-105 transition-transform duration-300"
              />

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                Beta Ready!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
