import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/95 pt-15 md:pt-14">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="space-y-10 md:space-y-12 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
              Stay ahead of trends
              <br />
              with our progressive
              <br />
              IT strategies.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A results-driven IT services company focused on understanding your
              business goals and delivering scalable, modern technology
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
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
                View Projects
              </Link>
            </div>
          </div>

          {/* Right - Tech Stack Visual */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[620px] rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
            {/* Subtle grid background */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            {/* Floating Tech Icons/Cards */}
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8">
              {/* Digital Marketing */}
              <div className="absolute top-6 sm:top-8 md:top-12 left-4 sm:left-6 md:left-12 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl animate-float-smooth">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400"
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
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    Digital Marketing
                  </span>
                </div>
              </div>

              {/* Web Development */}
              <div className="absolute top-24 sm:top-28 md:top-32 right-4 sm:right-8 md:right-16 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-400"
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
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    Web Development
                  </span>
                </div>
              </div>

              {/* Mobile Apps */}
              <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-6 sm:left-12 md:left-20 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl animate-float-smooth">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-400"
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
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    Mobile Apps
                  </span>
                </div>
              </div>

              {/* AI ChatBot */}
              <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:right-8 md:right-12 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400"
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
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    AI ChatBot
                  </span>
                </div>
              </div>

              {/* Data Visualization - Center card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl animate-float-delayed">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
                    Data Visualization
                  </span>
                </div>
              </div>
            </div>

            {/* Glowing accent orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </main>
  );
}
