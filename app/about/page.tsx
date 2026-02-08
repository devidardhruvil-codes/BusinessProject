import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen bg-gray-50/95 pt-15 md:pt-14">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a team of passionate technologists committed to delivering
            innovative IT solutions that drive real business results.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values & Approach - 4 Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses through cutting-edge technology solutions
              that are scalable, reliable, and tailored to their unique needs.
              We believe in building lasting partnerships and delivering
              measurable value.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To be the trusted technology partner for businesses looking to
              innovate and grow in the digital age. We envision a future where
              technology seamlessly integrates with business strategy.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Core Values
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Integrity, innovation, and excellence guide everything we do. We
              prioritize transparency, collaboration, and continuous learning to
              ensure we're always delivering the best solutions for our clients.
            </p>
          </div>

          {/* Our Approach */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 md:w-7 md:h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We start by understanding your business goals, then design
              solutions that align with your objectives. Our agile methodology
              ensures flexibility, rapid delivery, and ongoing support
              throughout your journey.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of IT services designed to help your
            business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition border border-gray-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Web Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Custom web applications built with modern frameworks, optimized
              for performance and user experience.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition border border-gray-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Mobile Apps
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Native and cross-platform mobile applications that engage users
              and deliver seamless experiences.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition border border-gray-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Digital Marketing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Data-driven marketing strategies that increase visibility and
              drive conversions across digital channels.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition border border-gray-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-cyan-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Intelligent chatbots and AI-powered tools that automate processes
              and enhance customer interactions.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition border border-gray-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Data Analytics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transform raw data into actionable insights with advanced
              analytics and visualization tools.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition border border-gray-100">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              IT Consulting
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic guidance to help you navigate technology decisions and
              optimize your IT infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="bg-black rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left - Content */}
            <div className="p-8 md:p-12 lg:p-16 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Why Choose Us?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We combine technical expertise with a deep understanding of
                business needs to deliver solutions that truly make a
                difference.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Expert Team
                    </h3>
                    <p className="text-gray-400">
                      Skilled professionals with years of industry experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Client-Focused
                    </h3>
                    <p className="text-gray-400">
                      Your success is our priority, every step of the way.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Proven Results
                    </h3>
                    <p className="text-gray-400">
                      Track record of delivering projects on time and on budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      Innovation-Driven
                    </h3>
                    <p className="text-gray-400">
                      Always exploring new technologies to keep you ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Visual element */}
            <div className="relative h-64 lg:h-full bg-gradient-to-br from-gray-900 to-black">
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]" />
              </div>
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with the right
            technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-white border-2 border-black rounded-full hover:bg-gray-100 transition shadow-md hover:shadow-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
