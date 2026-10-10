import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

import HomeMain from "../main/HomeMain";
import HomeAssets from "../main/HomeAssests";
import HomeProtection from "../main/HomeProtection";
import HomeChallenge from "../main/HomeChallenge";
import HomeSolutions from "../main/HomeSolutions";
import HomePlatform from "../main/HomePlatform";
import HomeIndustries from "../main/HomeIndustries";
import HomeTechnology from "../main/HomeTechnology";
import HomeVisibility from "../main/HomeVisibility";
import HomeAbout from "./HomeAbout";
import Connect from "./Connect";
import ProtectionEcosystem from "./ProtectionEcosystem";
import AntiPiracyAnimation from "../animations/AntiPiracyAnimation";
import HowItWorks from "./HowItWorks";
import MonitoringTool from "./MonitoringTool";
import ClientUseCases from "./ClientUseCases";
import GettingStarted from "./GettingStarted";
import Plan from "./Plan";
import ClientReviews from "./ClientReviews";
import HomeFAQ from "../main/HomeFAQ";
import HomeCTA from "../main/HomeCTA";
import HomeHowItWorks from "../main/HomeHowItWorks";

const BRAND = "#ADD132";

const categories = [
  "Video & Film",
  "Live Broadcasts",
  "Music & Audio",
  "Digital Publications",
  "Games & Software",
  "Brand Assets",
];

/* =========================================
   SCROLL REVEAL
========================================= */

function Reveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      element.classList.add("track-reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("track-reveal-visible");
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -15px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`track-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* =========================================
   HOMEPAGE
========================================= */

function Home() {
  return (
    <main className="track-home-light w-full overflow-x-clip bg-[#F5F8F2] font-['Roboto',sans-serif] text-[#152019]">
      {/* =====================================
          01. HERO WITH BACKGROUND VIDEO
      ===================================== */}

      <section
        id="home"
        className="track-hero relative isolate flex min-h-[600px] w-full items-center overflow-hidden sm:min-h-[660px] lg:min-h-[calc(100svh-88px)]"
      >
        {/* Background fallback */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#F5F8F2]" />

        {/* Full-screen background video */}
        <video
          className="track-hero-video pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>

        {/* Video readability overlay */}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-white/25" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-[2] " />

        {/* Premium lime-green ambient effects */}
        <div className="track-ambient pointer-events-none absolute -right-24 top-10 z-[3] h-72 w-72 rounded-full bg-[#ADD132]/20 blur-[90px] sm:h-96 sm:w-96 lg:h-[480px] lg:w-[480px]" />

        <div className="track-ambient pointer-events-none absolute -bottom-24 left-[12%] z-[3] h-64 w-64 rounded-full bg-[#ADD132]/15 blur-[90px]" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-12 lg:py-16 xl:gap-16 xl:px-16">
          {/* Hero text */}
          <div className="relative z-10 w-full max-w-[600px]">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 rounded-full bg-[#ADD132]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#6D900B] sm:text-xs">
                  Digital anti-piracy &amp; content protection
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="max-w-[600px] text-[2.4rem] font-bold leading-[1.1] tracking-[-0.045em] text-[#152019] sm:text-5xl lg:text-[3.25rem] xl:text-[3.7rem]">
                Protect your content.
                <span className="mt-2 block text-[#6D900B]">
                  Stop digital piracy.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 max-w-[510px] text-sm leading-7 text-[#4F5E53] sm:text-base sm:leading-8">
                Technology, intelligence and enforcement workflows to help
                rights holders identify suspected online infringement,
                document evidence and protect valuable digital content
                and brands.
              </p>
            </Reveal>

            {/* Protection process */}
            <Reveal delay={190}>
              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#536056] sm:text-xs">
                <span>Scan</span>
                <span className="text-[#ADD132]">/</span>
                <span>Detect</span>
                <span className="text-[#ADD132]">/</span>
                <span>Verify</span>
                <span className="text-[#ADD132]">/</span>
                <span>Protect</span>
              </div>
            </Reveal>

            {/* CTA buttons */}
            <Reveal delay={240}>
              <div className="mt-7 flex w-full flex-col gap-3 min-[480px]:flex-row sm:w-auto">
                <Link
                  to="/request-demo"
                  className="group inline-flex min-h-[46px] items-center justify-center gap-3 rounded-md border border-[#ADD132] bg-[#ADD132] px-5 py-3 text-sm font-semibold text-[#152019] transition duration-300 hover:-translate-y-0.5 hover:border-[#6D900B] hover:bg-[#6D900B] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ADD132] focus:ring-offset-2"
                >
                  Request a consultation

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  to="/services"
                  className="group inline-flex min-h-[46px] items-center justify-center gap-3 rounded-md border border-[#DCE4D8] bg-white/90 px-5 py-3 text-sm font-semibold text-[#536056] transition duration-300 hover:-translate-y-0.5 hover:border-[#ADD132] hover:bg-white hover:text-[#152019] focus:outline-none focus:ring-2 focus:ring-[#ADD132] focus:ring-offset-2"
                >
                  Explore solutions

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>

            {/* Supported asset categories */}
            <Reveal delay={300}>
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[#DCE4D8] bg-white/80 px-3 py-2 text-[10px] font-medium text-[#536056] transition duration-200 hover:border-[#ADD132] hover:text-[#6D900B] sm:text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Trust statement */}
            <Reveal delay={350}>
              <div className="mt-7 flex items-start gap-3 text-xs leading-6 text-[#536056] sm:text-sm">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#6D900B]"
                />

                <span>
                  Evidence-led workflows. Analyst review. Clear case visibility.
                </span>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal
            delay={160}
            className="track-visual-reveal relative flex min-w-0 w-full items-center justify-center lg:justify-end"
          >
            <div className="track-visual relative w-full max-w-[650px]">
              <div className="overflow-hidden rounded-xl border border-[#DCE4D8] bg-white/95 shadow-[0_20px_60px_rgba(21,32,25,0.10)]">
                <div className="relative min-w-0 p-2 sm:p-4">
                  <AntiPiracyAnimation />
                </div>

                {/* Supporting visual information */}
                <div className="grid grid-cols-2 gap-3 border-t border-[#DCE4D8] bg-white/95 px-4 py-4 sm:px-5 sm:py-5">
                  <div>
                    <p className="text-[10px] font-medium text-[#68746C] sm:text-xs">
                      Protection workflow
                    </p>

                    <p className="mt-1.5 text-xs font-semibold text-[#152019] sm:text-sm">
                      Discovery to enforcement
                    </p>
                  </div>

                  <div className="border-l border-[#DCE4D8] pl-4">
                    <p className="text-[10px] font-medium text-[#68746C] sm:text-xs">
                      Our approach
                    </p>

                    <p className="mt-1.5 text-xs font-semibold text-[#6D900B] sm:text-sm">
                      Scan · Detect · Protect
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/how-it-works"
                className="group mx-auto mt-5 flex w-fit max-w-full items-center justify-center gap-2.5 rounded-lg border border-[#DCE4D8] bg-white/95 px-4 py-3 text-center text-xs font-semibold text-[#536056] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#ADD132] hover:text-[#6D900B] sm:text-sm"
              >
                Explore how protection works

                <ArrowUpRight
                  size={15}
                  className="shrink-0 text-[#6D900B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================
          02. INTRODUCTION
      ===================================== */}
      <section id="home-main">
        <Reveal>
          <HomeMain />
        </Reveal>
      </section>

      {/* =====================================
          03. PROTECTED ASSETS
      ===================================== */}
      <section id="protected-assets">
        <Reveal>
          <HomeAssets />
        </Reveal>
      </section>

      {/* =====================================
          04. PROTECTION DETAILS
      ===================================== */}
      <section id="protection-details">
        <Reveal>
          <HomeProtection />
        </Reveal>
      </section>

      {/* =====================================
          05. THE CHALLENGE
      ===================================== */}
      <section id="protection-challenge">
        <Reveal>
          <HomeChallenge />
        </Reveal>
      </section>

      {/* =====================================
          06. SOLUTIONS
      ===================================== */}
      <section id="protection-solutions">
        <Reveal>
          <HomeSolutions />
        </Reveal>
      </section>

      {/* =====================================
          07. HOW PROTECTION WORKS
      ===================================== */}
      <section id="home-how-it-works">
        <Reveal>
          <HomeHowItWorks />
        </Reveal>
      </section>

      {/* =====================================
          08. PLATFORM OVERVIEW
      ===================================== */}
      <section id="platform-overview">
        <Reveal>
          <HomePlatform />
        </Reveal>
      </section>

      {/* =====================================
          09. INDUSTRIES
      ===================================== */}
      <section id="industries">
        <Reveal>
          <HomeIndustries />
        </Reveal>
      </section>

      {/* =====================================
          10. TECHNOLOGY & HUMAN REVIEW
      ===================================== */}
      <section id="technology">
        <Reveal>
          <HomeTechnology />
        </Reveal>
      </section>

      {/* =====================================
          11. COVERAGE & REPORTING
      ===================================== */}
      <section id="visibility-reporting">
        <Reveal>
          <HomeVisibility />
        </Reveal>
      </section>

      {/* =====================================
          12. PROTECTION ECOSYSTEM
      ===================================== */}
      <section id="protection-ecosystem">
        <Reveal>
          <ProtectionEcosystem />
        </Reveal>
      </section>

      {/* =====================================
          13. PLANS
      ===================================== */}
      <section id="protection-plans">
        <Reveal>
          <Plan />
        </Reveal>
      </section>

      {/* =====================================
          14. CLIENT REVIEWS
      ===================================== */}
      <section id="client-reviews">
        <Reveal>
          <ClientReviews />
        </Reveal>
      </section>

      {/* =====================================
          15. FAQ
      ===================================== */}
      <section id="home-faq">
        <Reveal>
          <HomeFAQ />
        </Reveal>
      </section>

      {/* =====================================
          16. FINAL CONSULTATION CTA
      ===================================== */}
      <section id="home-cta">
        <Reveal>
          <HomeCTA />
        </Reveal>
      </section>

      {/* =====================================
          SHARED HOMEPAGE STYLES
      ===================================== */}
      <style>{`
        .track-home-light {
          background: #F5F8F2;
          color: #152019;
          font-family: 'Roboto', sans-serif;
        }

        .track-home-light,
        .track-home-light *,
        .track-home-light *::before,
        .track-home-light *::after {
          box-sizing: border-box;
        }

        .track-home-light * {
          font-family: inherit;
        }

        .track-home-light section {
          scroll-margin-top: 88px;
        }

        .track-hero {
          isolation: isolate;
          position: relative;
          background: #F5F8F2;
          color: #152019;
        }

        .track-hero-video {
          object-position: center;
        }

        .track-visual {
          isolation: isolate;
        }

        .track-ambient {
          animation: track-ambient-pulse 8s ease-in-out infinite alternate;
        }

        .track-reveal {
          opacity: 0;
          transform: translate3d(0, 16px, 0);
          transition:
            opacity 600ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .track-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @keyframes track-ambient-pulse {
          from {
            opacity: 0.55;
            transform: scale(0.96);
          }

          to {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        @media (max-width: 1023px) {
          .track-hero {
            min-height: auto;
          }
        }

        @media (max-width: 639px) {
          .track-reveal {
            transform: translate3d(0, 12px, 0);
            transition:
              opacity 450ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .track-reveal-visible {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .track-reveal,
          .track-reveal-visible {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }

          .track-ambient {
            animation: none !important;
          }

          .track-hero-video {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}

export default Home;