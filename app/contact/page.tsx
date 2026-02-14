"use client";

import React, { useState } from "react";
import Link from "next/link";
// ─── DATA ────────────────────────────────────────────────────────────────────
const contactDetails = [
  {
    label: "Email Us",
    value: "hello@brinova.com",
    sub: "We reply within one business day.",
    color: "#3b82f6",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+1 (555) 000-1234",
    sub: "Mon – Fri, 9 am – 6 pm EST.",
    color: "#8b5cf6",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "Our Office",
    value: "123 Innovation Drive",
    sub: "San Francisco, CA 94105",
    color: "#10b981",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];
const faqs = [
  {
    q: "How quickly can you start on a new project?",
    a: "Typically within 1–2 weeks of our initial scoping call, depending on team availability and project complexity.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Both. We tailor our engagement model to fit your stage — whether that's a lean MVP sprint or a full-scale enterprise rollout.",
  },
  {
    q: "What does your development process look like?",
    a: "We follow an agile process: discovery, architecture, iterative sprints with regular demos, then launch and ongoing support.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We do code audits, refactors, and can take ownership of existing projects. We'll give you an honest assessment upfront.",
  },
];
const services = [
  "Web Development",
  "Mobile App",
  "Digital Marketing",
  "AI Solutions",
  "Data Analytics",
  "IT Consulting",
  "Other",
];
// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Replace this with your actual API call / form handler
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };
  return (
    <main className="min-h-screen bg-white pt-16 md:pt-[68px]">
      {/* HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="relative text-center space-y-6 max-w-3xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-500 bg-blue-50 px-4 py-1.5 rounded-full">
            Contact Us
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-gray-900 tracking-tight">
            Let's build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              something great
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            Tell us about your project. We'll get back to you within one
            business day with a clear path forward.
          </p>
        </div>
      </section>
      {/* FORM + INFO */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16 md:pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">
          {/* Form card */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Message sent!
                </h3>
                <p className="text-gray-500 max-w-sm leading-relaxed">
                  Thanks for reaching out,{" "}
                  <span className="font-semibold text-gray-700">
                    {formData.name}
                  </span>
                  . We'll be in touch within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Send us a message
                  </h2>
                  <p className="text-sm text-gray-500">
                    Fill in the details below and we'll take it from there.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
                      htmlFor="name"
                    >
                      Full Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
                      htmlFor="email"
                    >
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
                      htmlFor="service"
                    >
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a service…
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label
                    className="text-xs font-semibold text-gray-600 uppercase tracking-wide"
                    htmlFor="message"
                  >
                    Message <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, timeline, or anything else that's useful…"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full inline-flex items-center justify-center gap-0 hover:gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
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
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  We respect your privacy. Your information is never shared with
                  third parties.
                </p>
              </form>
            )}
          </div>
          {/* Right column */}
          <div className="space-y-5">
            {contactDetails.map((detail, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${detail.color}15` }}
                >
                  <span style={{ color: detail.color }}>{detail.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                    {detail.label}
                  </p>
                  <p className="font-bold text-gray-900 text-sm">
                    {detail.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{detail.sub}</p>
                </div>
              </div>
            ))}
            {/* Dark response-time card */}
            <div className="bg-gray-900 rounded-2xl p-6 space-y-4">
              <div>
                <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full mb-3">
                  Response Time
                </span>
                <h3 className="text-lg font-bold text-white">We move fast.</h3>
                <p className="text-gray-400 text-sm mt-1.5 leading-relaxed">
                  Most enquiries get a personal response within 4 hours during
                  business hours — never a bot.
                </p>
              </div>
              <div className="space-y-2.5 pt-1">
                {[
                  {
                    label: "Initial Response",
                    value: "< 4 hrs",
                    color: "#3b82f6",
                  },
                  {
                    label: "Scoping Call",
                    value: "1–2 days",
                    color: "#10b981",
                  },
                  {
                    label: "Proposal Sent",
                    value: "3–5 days",
                    color: "#f59e0b",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                  >
                    <span className="text-gray-400 text-sm">{m.label}</span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: m.color }}
                    >
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Social links */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Find Us Online
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    label: "LinkedIn",
                    color: "#0077b5",
                    icon: (
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    ),
                  },
                  {
                    label: "Twitter / X",
                    color: "#000",
                    icon: (
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    ),
                  },
                  {
                    label: "GitHub",
                    color: "#333",
                    icon: (
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    ),
                  },
                ].map((s, i) => (
                  <button
                    key={i}
                    title={s.label}
                    className="w-9 h-9 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: s.color }}
                    >
                      {s.icon}
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50/70">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-violet-500 bg-violet-50 px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Common Questions
            </h2>
            <p className="text-gray-500 text-lg">
              A few things people usually ask before reaching out.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? "border-gray-200 shadow-md" : "border-gray-100 hover:border-gray-200"}`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-gray-900 text-sm leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-gray-900" : "bg-gray-100"}`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${openFaq === i ? "rotate-45 text-white" : "text-gray-600"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40 pb-5" : "max-h-0"}`}
                >
                  <p className="px-6 text-sm text-gray-500 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* BOTTOM CTA */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Not sure where to start?
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Browse our work to see what we've built, or read more about how we
          operate.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            See our portfolio
            <svg
              className="w-4 h-4"
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
            href="/about"
            className="inline-flex items-center justify-center px-9 py-4 text-base font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200"
          >
            About us
          </Link>
        </div>
      </section>
    </main>
  );
}
