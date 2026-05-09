"use client";

import { useEffect, useState } from "react";

const headline = "Your moments into";
const headlineAccent = "Visual Stories";

function FloatingIcon({
  d,
  className,
}: {
  d: string;
  className: string;
}) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`absolute text-coral/20 ${className}`}
    >
      <path d={d} />
    </svg>
  );
}

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const renderLetters = (text: string, offset: number, colorClass: string) =>
    text.split("").map((char, i) => (
      <span
        key={i}
        className={`inline-block transition-all duration-500 ${colorClass} ${
          revealed
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: `${(offset + i) * 35}ms` }}
      >
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
      {/* Floating decorative icons */}
      <FloatingIcon
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"
        className="animate-float-1 top-[20%] left-[15%] hidden md:block"
      />
      <FloatingIcon
        d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
        className="animate-float-2 top-[30%] right-[18%] hidden md:block"
      />
      <FloatingIcon
        d="M4 4h16v16H4zM4 8h16M8 4v16"
        className="animate-float-3 bottom-[25%] left-[25%] hidden md:block"
      />
      <FloatingIcon
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
        className="animate-float-1 bottom-[30%] right-[22%] hidden md:block"
      />
      <FloatingIcon
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
        className="animate-float-2 top-[50%] left-[10%] hidden md:block"
      />

      {/* LEFT CHARACTER VIDEO */}
      <div className="absolute left-0 bottom-0 w-[280px] md:w-[380px] lg:w-[440px] h-[400px] md:h-[500px] z-0 hidden md:flex items-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain object-bottom"
          src="/videos/left-character.mp4"
        />
      </div>

      {/* RIGHT CHARACTER VIDEO */}
      <div className="absolute right-0 bottom-0 w-[280px] md:w-[380px] lg:w-[440px] h-[400px] md:h-[500px] z-0 hidden md:flex items-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain object-bottom"
          src="/videos/right-character.mp4"
        />
      </div>

      {/* MOBILE: single character video above headline */}
      <div className="md:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[200px] h-[250px] z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
          src="/videos/left-character.mp4"
        />
      </div>

      {/* Centre content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto mt-[280px] md:mt-0">
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
          <span className="block">
            {renderLetters(headline, 0, "text-charcoal")}
          </span>
          <span className="block">
            {renderLetters(headlineAccent, headline.length, "text-coral")}
          </span>
        </h1>

        <p
          className={`mt-6 font-body text-lg text-charcoal/60 max-w-md mx-auto transition-all duration-700 delay-[800ms] ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Capture, create, and preserve your most meaningful moments with
          photography that feels alive.
        </p>

        <div
          className={`mt-8 transition-all duration-700 delay-[1000ms] ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#pricing"
            className="inline-flex items-center px-8 py-3.5 bg-coral text-white font-heading font-bold text-lg rounded-full hover:bg-terracotta transition-colors animate-pulse-glow"
          >
            Start Your Story
          </a>
        </div>

        <p
          className={`mt-6 font-body text-sm text-charcoal/40 tracking-wide transition-all duration-700 delay-[1200ms] ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          500+ stories captured &nbsp;•&nbsp; 4.9★ rated &nbsp;•&nbsp;
          Melbourne based
        </p>
      </div>
    </section>
  );
}
