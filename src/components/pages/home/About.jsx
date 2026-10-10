
import React, { useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  ScanSearch,
  Eye,
  Target,
  Compass,
  Search,
  FileCheck2,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  {
    number: "01",
    icon: Eye,
    title: "Visibility",
    description:
      "Understand where your digital content and brand appear across online environments.",
  },
  {
    number: "02",
    icon: ScanSearch,
    title: "Intelligence",
    description:
      "Review potential infringements and organize findings into meaningful information.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Protection",
    description:
      "Support informed decisions with evidence, case visibility and structured response workflows.",
  },
];

const process = [
  {
    number: "01",
    icon: Search,
    title: "Scan",
    description:
      "Identify potential instances of unauthorized use across relevant digital channels.",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Detect",
    description:
      "Review findings and organize relevant information for further assessment.",
  },
  {
    number: "03",
    icon: Shield,
    title: "Respond",
    description:
      "Support appropriate action through structured case and response workflows.",
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("about-reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("about-reveal-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`about-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <main className="overflow-x-clip bg-white font-['Roboto',sans-serif] text-[#142943]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-[#F3F7FB] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12 lg:pb-28 lg:pt-40 xl:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[#ADD132]/15 blur-3xl sm:h-[480px] sm:w-[480px]"
        />

        <div className="mx-auto max-w-[1580px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">

            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#7B9E16]" />
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#648512] sm:text-xs">
                  About TrackOwls
                </p>
              </div>

              <h1 className="max-w-[720px] text-[42px] font-black leading-[1.04] tracking-[-0.05em] text-[#142943] sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[72px]">
                Protecting what matters in a{" "}
                <span className="relative inline-block">
                  digital world.
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-0 -z-10 h-2.5 w-full bg-[#ADD132]/55 sm:bottom-2 sm:h-3"
                  />
                </span>
              </h1>

              <p className="mt-7 max-w-[590px] text-base leading-8 text-[#5A6D82] sm:text-lg sm:leading-9">
                TrackOwls Anti-Piracy Private Limited focuses on helping
                organizations understand, monitor and protect valuable digital
                content, intellectual property and online presence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-md bg-[#ADD132] px-6 py-4 text-sm font-bold text-[#17230A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#BDE640]"
                >
                  Talk to our team
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/how-it-works"
                  className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-md border border-[#D5DFE7] bg-white px-6 py-4 text-sm font-bold text-[#263D55] transition-colors hover:border-[#ADD132]"
                >
                  How it works
                  <ArrowRight size={17} />
                </Link>
              </div>
            </Reveal>

            {/* Editorial company statement */}
            <Reveal delay={140}>
              <div className="relative border-l-2 border-[#ADD132] pl-6 sm:pl-8">
                <p className="text-lg leading-9 text-[#455D75] sm:text-xl sm:leading-10">
                  Your content and brand can appear far beyond the channels
                  you authorize. TrackOwls brings those findings into a
                  structured review: what was found, which rights apply, what
                  evidence supports it and what action follows.
                </p>

                <p className="mt-7 text-base leading-8 text-[#607388]">
                  Start with a release, a live event, a catalogue or a brand
                  portfolio. Build the monitoring scope around your priorities,
                  then use case records and reporting to follow the work.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Content protection", "Digital intelligence", "IP protection"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#DCE5EB] bg-white px-4 py-2.5 text-xs font-semibold text-[#30475E]"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Company information */}
          <div className="mt-16 grid grid-cols-1 gap-4 border-t border-[#DCE5EB] pt-7 sm:mt-20 sm:grid-cols-3 sm:gap-8">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7A8A9B]">
                Company
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-[#142943] sm:text-base">
                TrackOwls Anti-Piracy Private Limited
              </p>
            </div>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7A8A9B]">
                Established
              </p>
              <p className="mt-3 text-sm font-bold text-[#142943] sm:text-base">
                2026
              </p>
            </div>

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7A8A9B]">
                Headquarters
              </p>
              <p className="mt-3 text-sm font-bold text-[#142943] sm:text-base">
                Coimbatore, Tamil Nadu
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR PURPOSE
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[1580px]">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#7B9E16]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#648512]">
                    Our Purpose
                  </span>
                </div>

                <h2 className="max-w-[500px] text-3xl font-black leading-tight tracking-[-0.04em] text-[#142943] sm:text-4xl lg:text-5xl">
                  Digital protection starts with visibility.
                </h2>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-base leading-8 text-[#536980] sm:text-lg sm:leading-9">
                  Digital content can be copied, shared or used beyond its
                  intended channels. Understanding where potential issues
                  appear is an important first step toward making informed
                  decisions about protecting intellectual property and brand
                  assets.
                </p>

                <p className="mt-5 text-base leading-8 text-[#718195]">
                  TrackOwls is focused on bringing discovery, review, evidence
                  and response workflows together in a clearer process.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          OUR PRINCIPLES
      ===================================================== */}

      <section className="border-y border-[#E2E9EF] bg-[#F7F9FB] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[1580px]">
          <Reveal>
            <div className="mb-12 max-w-[700px]">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#7B9E16]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#648512]">
                  What Guides Us
                </span>
              </div>

              <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-[#142943] sm:text-4xl lg:text-5xl">
                A clearer approach to digital protection.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.number} delay={index * 100}>
                  <article className="group h-full border-t border-[#DCE5EB] py-7 md:border-l md:px-7 md:first:border-l-0 md:first:pl-0 md:last:pr-0 lg:py-9">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.16em] text-[#8493A3]">
                        {item.number}
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DCE5EB] bg-white text-[#648512] transition-all duration-300 group-hover:border-[#ADD132] group-hover:bg-[#ADD132]/15">
                        <Icon size={20} strokeWidth={1.6} />
                      </span>
                    </div>

                    <h3 className="mt-7 text-xl font-extrabold text-[#142943] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[350px] text-sm leading-7 text-[#65778B] sm:text-base">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE APPROACH PROTECTION
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[1580px]">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#7B9E16]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#648512]">
                  Our Approach
                </span>
              </div>

              <h2 className="max-w-[520px] text-3xl font-black leading-tight tracking-[-0.04em] text-[#142943] sm:text-4xl lg:text-5xl">
                From discovery to informed action.
              </h2>

              <p className="mt-6 max-w-[460px] text-base leading-8 text-[#65778B]">
                A structured way to understand potential infringement,
                organize evidence and follow the next steps.
              </p>

              <Link
                to="/how-it-works"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#547A0B] transition-colors hover:text-[#365405]"
              >
                Explore how it works
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>

            <div className="border-t border-[#DCE5EB]">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} delay={index * 90}>
                    <div className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#DCE5EB] py-6 sm:grid-cols-[52px_1fr] sm:gap-6 sm:py-8">
                      <span className="pt-1 text-xs font-extrabold tracking-[0.12em] text-[#789719]">
                        {item.number}
                      </span>

                      <div className="flex items-start gap-4 sm:gap-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0F5E5] text-[#648512] sm:h-12 sm:w-12">
                          <Icon size={20} strokeWidth={1.7} />
                        </span>

                        <div>
                          <h3 className="text-lg font-extrabold text-[#142943] sm:text-xl">
                            {item.title}
                          </h3>

                          <p className="mt-2 max-w-[560px] text-sm leading-7 text-[#65778B] sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP
      ===================================================== */}

      <section className="bg-[#F3F7FB] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <div className="mx-auto max-w-[1580px]">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#7B9E16]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#648512]">
                    Leadership
                  </span>
                </div>

                <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-[#142943] sm:text-4xl lg:text-5xl">
                  People behind the vision.
                </h2>

                <p className="mt-5 max-w-[520px] text-base leading-8 text-[#65778B]">
                  TrackOwls is focused on building a structured approach to
                  digital monitoring, intelligence and content protection.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <article className="border border-[#DCE5EB] bg-white p-6 sm:p-7">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7A8A9B]">
                    Founder
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#142943] sm:text-2xl">
                    P Dhanalakshmi
                  </h3>
                  <div className="mt-5 h-1 w-12 bg-[#ADD132]" />
                </article>

                <article className="border border-[#DCE5EB] bg-white p-6 sm:p-7">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7A8A9B]">
                    Co-Founder
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold text-[#142943] sm:text-2xl">
                    Shamsath Begum
                  </h3>
                  <div className="mt-5 h-1 w-12 bg-[#ADD132]" />
                </article>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28 xl:px-16">
        <Reveal>
          <div className="relative mx-auto max-w-[1580px] overflow-hidden bg-[#102B43] px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#ADD132]/10 blur-3xl"
            />

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[740px]">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D1F20B]">
                  Protect What Matters
                </p>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Let's talk about protecting your digital assets.
                </h2>

                <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#D0DCE8] sm:text-base sm:leading-8">
                  Start a conversation about digital content, intellectual
                  property and a protection approach suited to your needs.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-md bg-[#D1F20B] px-6 py-4 text-sm font-extrabold text-[#102033] transition-all hover:-translate-y-0.5 hover:bg-[#E0FF24]"
              >
                Contact TrackOwls
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        .about-reveal {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
          transition:
            opacity 650ms cubic-bezier(0.16, 1, 0.3, 1),
            transform 650ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-reveal-visible {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-reveal,
          .about-reveal-visible {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}
