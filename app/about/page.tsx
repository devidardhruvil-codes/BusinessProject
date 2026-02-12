"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const cards = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Our Mission",
    tag: "01 — PURPOSE",
    text: "To empower businesses through cutting-edge technology solutions that are scalable, reliable, and tailored to their unique needs. We believe in building lasting partnerships and delivering measurable value.",
    accent: "#3b82f6",
    bg: "from-blue-950 to-slate-900",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Our Vision",
    tag: "02 — DIRECTION",
    text: "To be the trusted technology partner for businesses looking to innovate and grow in the digital age. We envision a future where technology seamlessly integrates with business strategy.",
    accent: "#8b5cf6",
    bg: "from-violet-950 to-slate-900",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Core Values",
    tag: "03 — PRINCIPLES",
    text: "Integrity, innovation, and excellence guide everything we do. We prioritize transparency, collaboration, and continuous learning to ensure we're always delivering the best solutions for our clients.",
    accent: "#f59e0b",
    bg: "from-amber-950 to-slate-900",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Our Approach",
    tag: "04 — METHOD",
    text: "We start by understanding your business goals, then design solutions that align with your objectives. Our agile methodology ensures flexibility, rapid delivery, and ongoing support throughout your journey.",
    accent: "#10b981",
    bg: "from-emerald-950 to-slate-900",
  },
];

const TOTAL = cards.length;
const AUTO_INTERVAL = 3000;

function getCardStyle(offset: number): React.CSSProperties {
  const absOffset = Math.abs(offset);
  const sign = offset === 0 ? 0 : offset / absOffset;

  if (absOffset === 0) {
    return {
      transform: "translateX(0%) scale(1) rotateY(0deg)",
      zIndex: 10,
      opacity: 1,
      filter: "brightness(1)",
    };
  }
  if (absOffset === 1) {
    return {
      transform: `translateX(${sign * 72}%) scale(0.82) rotateY(${-sign * 18}deg)`,
      zIndex: 8,
      opacity: 0.75,
      filter: "brightness(0.6)",
    };
  }
  if (absOffset === 2) {
    return {
      transform: `translateX(${sign * 120}%) scale(0.65) rotateY(${-sign * 28}deg)`,
      zIndex: 6,
      opacity: 0.35,
      filter: "brightness(0.35)",
    };
  }
  return {
    transform: `translateX(${sign * 160}%) scale(0.5)`,
    zIndex: 4,
    opacity: 0,
    pointerEvents: "none",
  };
}

export default function About() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (idx: number) => setActive(((idx % TOTAL) + TOTAL) % TOTAL),
    [],
  );
  const prev = () => {
    goTo(active - 1);
    pauseBriefly();
  };
  const next = () => {
    goTo(active + 1);
    pauseBriefly();
  };

  const pauseBriefly = () => {
    setPaused(true);
    setTimeout(() => setPaused(false), 1500);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setActive((a) => (a + 1) % TOTAL),
      AUTO_INTERVAL,
    );
    return () => clearInterval(t);
  }, [paused]);

  const onPointerDown = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    dragStartX.current =
      (e as React.MouseEvent).clientX ??
      (e as React.TouchEvent).touches?.[0]?.clientX;
    setDragging(true);
    setPaused(true);
  };
  const onPointerUp = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!dragging || dragStartX.current === null) return;
    const endX =
      (e as React.MouseEvent).clientX ??
      (e as React.TouchEvent).changedTouches?.[0]?.clientX;
    const delta = dragStartX.current - endX;
    if (Math.abs(delta) > 40) delta > 0 ? goTo(active + 1) : goTo(active - 1);
    setDragging(false);
    dragStartX.current = null;
    setTimeout(() => setPaused(false), 1500);
  };

  const getOffset = (idx: number) => {
    let diff = idx - active;
    if (diff > TOTAL / 2) diff -= TOTAL;
    if (diff < -TOTAL / 2) diff += TOTAL;
    return diff;
  };

  return (
    <main className="min-h-screen bg-gray-50/95 pt-15 md:pt-14">
      {/* Hero */}
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

      {/* ── CAROUSEL ── */}
      <section className="relative py-20 overflow-hidden select-none">
        {/* Dark atmospheric background */}
        <div className="absolute inset-0 bg-[#050a14]">
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(ellipse 65% 55% at 50% 65%, ${cards[active].accent}28 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Heading */}
        <div className="relative text-center mb-14 px-4">
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500 mb-3">
            Who we are
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Foundation
          </h2>
        </div>

        {/* 3D Track */}
        <div
          className="relative mx-auto"
          style={{
            height: 380,
            maxWidth: 900,
            perspective: "1200px",
            cursor: dragging ? "grabbing" : "grab",
          }}
          onMouseDown={onPointerDown}
          onMouseUp={onPointerUp}
          onMouseLeave={(e) => {
            if (dragging) onPointerUp(e);
          }}
          onTouchStart={onPointerDown}
          onTouchEnd={onPointerUp}
        >
          {cards.map((card, idx: number) => {
            const offset = getOffset(idx);
            const style = getCardStyle(offset);
            const isActive = offset === 0;

            return (
              <div
                key={idx}
                className="absolute top-0 left-1/2"
                style={{
                  width: 288,
                  marginLeft: -144,
                  height: 340,
                  transition:
                    "transform 0.65s cubic-bezier(.25,.8,.25,1), opacity 0.65s ease, filter 0.65s ease",
                  cursor: isActive ? "grab" : "pointer",
                  ...style,
                }}
                onClick={() => {
                  if (!dragging && !isActive) goTo(idx);
                }}
              >
                <div
                  className={`relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br ${card.bg} border border-white/10`}
                  style={{
                    boxShadow: isActive
                      ? `0 32px 64px -12px ${card.accent}55, 0 0 0 1px ${card.accent}33, inset 0 1px 0 rgba(255,255,255,0.07)`
                      : "0 12px 32px -8px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* Top shimmer line */}
                  <div
                    className="absolute inset-x-0 top-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${card.accent}99, transparent)`,
                    }}
                  />

                  {/* Decorative blobs */}
                  <div
                    className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-25"
                    style={{ background: card.accent }}
                  />
                  <div
                    className="absolute -bottom-12 -left-8 w-32 h-32 rounded-full blur-3xl opacity-15"
                    style={{ background: card.accent }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-7">
                    <p
                      className="text-[10px] tracking-[0.25em] uppercase font-semibold mb-5"
                      style={{ color: card.accent }}
                    >
                      {card.tag}
                    </p>
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border border-white/10"
                      style={{ background: `${card.accent}28` }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {card.title}
                    </h3>
                    <div
                      className="w-10 h-0.5 mb-4 rounded-full"
                      style={{ background: card.accent }}
                    />
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="relative flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2 items-center">
            {cards.map((c, i: number) => (
              <button
                key={i}
                onClick={() => {
                  goTo(i);
                  pauseBriefly();
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background:
                    i === active
                      ? cards[active].accent
                      : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress bar */}
        <div className="relative mx-auto mt-6 max-w-xs h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            key={`${active}-${paused}`}
            className="h-full rounded-full"
            style={{
              background: cards[active].accent,
              animation: paused
                ? "none"
                : `progressFill ${AUTO_INTERVAL}ms linear forwards`,
            }}
          />
        </div>

        <style>{`
          @keyframes progressFill {
            from { width: 0% }
            to   { width: 100% }
          }
        `}</style>
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
          {[
            {
              color: "blue",
              iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
              title: "Web Development",
              desc: "Custom web applications built with modern frameworks, optimized for performance and user experience.",
            },
            {
              color: "purple",
              iconPath:
                "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              title: "Mobile Apps",
              desc: "Native and cross-platform mobile applications that engage users and deliver seamless experiences.",
            },
            {
              color: "green",
              iconPath:
                "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
              title: "Digital Marketing",
              desc: "Data-driven marketing strategies that increase visibility and drive conversions across digital channels.",
            },
            {
              color: "cyan",
              iconPath:
                "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              title: "AI Solutions",
              desc: "Intelligent chatbots and AI-powered tools that automate processes and enhance customer interactions.",
            },
            {
              color: "red",
              iconPath:
                "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              title: "Data Analytics",
              desc: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
            },
            {
              color: "orange",
              iconPath:
                "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
              title: "IT Consulting",
              desc: "Strategic guidance to help you navigate technology decisions and optimize your IT infrastructure.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 bg-${s.color}-500/20 rounded-xl flex items-center justify-center mb-4`}
              >
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 text-${s.color}-500`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={s.iconPath}
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="bg-black rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
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
                {[
                  {
                    title: "Expert Team",
                    desc: "Skilled professionals with years of industry experience.",
                  },
                  {
                    title: "Client-Focused",
                    desc: "Your success is our priority, every step of the way.",
                  },
                  {
                    title: "Proven Results",
                    desc: "Track record of delivering projects on time and on budget.",
                  },
                  {
                    title: "Innovation-Driven",
                    desc: "Always exploring new technologies to keep you ahead.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
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
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

      {/* CTA */}
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
}
