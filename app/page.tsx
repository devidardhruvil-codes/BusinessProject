import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/95 pt-6 md:pt-0">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className="space-y-8 md:space-y-10 text-center lg:text-left">
            {/* Small label */}
            <p className="text-xs font-semibold mb-2 uppercase text-gray-400 text-center lg:text-left">
              IT Services & Solutions
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
              Stay ahead of trends
              <br />
              with our progressive
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-700 to-gray-500">
                IT strategies.
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              A results-driven IT services company focused on understanding your
              business goals and delivering scalable, modern technology
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-0 hover:gap-2.5 px-8 py-3.5 text-base font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Us
                <svg
                  className="w-5 h-5 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-black bg-white border-2 border-black rounded-full hover:bg-gray-100 transition shadow-sm hover:shadow-md"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Right - Tech Stack Visual */}
          <div className="relative h-[420px] sm:h-[500px] lg:h-[580px] rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
            {/* Subtle grid background */}
            <div className="absolute inset-0 opacity-[0.12]">
              <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            {/* Glowing accent orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />

            {/* Floating Tech Cards */}
            <div className="absolute inset-0 p-6 md:p-8">
              {/* Digital Marketing — top left */}
              <div className="absolute top-10 left-8 md:left-12 bg-white/8 backdrop-blur-md px-4 md:px-5 py-3 md:py-3.5 rounded-2xl border border-white/15 shadow-lg animate-float-smooth">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-blue-400"
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
                  <span className="text-white font-semibold text-sm">
                    Digital Marketing
                  </span>
                </div>
              </div>

              {/* Web Development — top right */}
              <div className="absolute top-28 right-8 md:right-12 bg-white/8 backdrop-blur-md px-4 md:px-5 py-3 md:py-3.5 rounded-2xl border border-white/15 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-green-400"
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
                  <span className="text-white font-semibold text-sm">
                    Web Development
                  </span>
                </div>
              </div>

              {/* Center card — Data Visualization */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/20 shadow-xl animate-float-smooth">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-red-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-red-400"
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
                  <span className="text-white font-semibold text-sm whitespace-nowrap">
                    Data Visualization
                  </span>
                </div>
              </div>

              {/* Mobile Apps — bottom left */}
              <div className="absolute bottom-28 left-8 md:left-16 bg-white/8 backdrop-blur-md px-4 md:px-5 py-3 md:py-3.5 rounded-2xl border border-white/15 shadow-lg animate-float-delayed">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-purple-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-purple-400"
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
                  <span className="text-white font-semibold text-sm">
                    Mobile Apps
                  </span>
                </div>
              </div>

              {/* AI ChatBot — bottom right */}
              <div className="absolute bottom-10 right-8 md:right-12 bg-white/8 backdrop-blur-md px-4 md:px-5 py-3 md:py-3.5 rounded-2xl border border-white/15 shadow-lg animate-float-smooth">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-9 md:h-9 bg-cyan-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-cyan-400"
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
                  <span className="text-white font-semibold text-sm">
                    AI ChatBot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
