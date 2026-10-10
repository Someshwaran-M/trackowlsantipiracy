
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import HomeOwl from "../main/HomeOwl";

const categories = [
  "OTT & VOD",
  "LIVE SPORTS",
  "FILM",
  "BROADCAST",
  "MUSIC",
  "BRANDS",
];

const HomeMain = () => {
  return (
    <section
      id="home-main"
      className="relative w-full overflow-hidden border-y border-[#DCE4D8] bg-[#F5F8F2] font-['Roboto',Arial,sans-serif] text-[#152019]"
    >
      {/* SOFT BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#ADD132]/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#ADD132]/[0.06] blur-[110px]" />

      {/* CATEGORY NAVIGATION */}
      <div className="relative border-b border-[#DCE4D8] bg-[#F5F8F2]/90">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-x-5 gap-y-3 px-5 py-4 sm:px-8 lg:flex-nowrap lg:px-12 xl:px-16">
          <div className="flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-[0.13em] text-[#68746C] sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#ADD132]" />
            <span>
              Built for rights
              <br className="hidden lg:block" /> holders
            </span>
          </div>

          {categories.map((category) => (
            <div
              key={category}
              className="group flex items-center gap-2 text-[10px] font-semibold tracking-wide text-[#68746C] transition-colors duration-200 hover:text-[#6D900B] sm:text-xs"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132] transition-transform duration-200 group-hover:scale-125" />
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-5 py-10 sm:px-8 sm:py-12 md:gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-14 lg:px-12 lg:py-16 xl:gap-20 xl:px-16 xl:py-[72px]">
        {/* SUBTLE ACCENT */}
        <div className="pointer-events-none absolute right-0 top-0 -z-0 h-64 w-64 rounded-full bg-[#ADD132]/[0.06] blur-3xl" />

        {/* LEFT SIDE: HEADING + OWL VISUAL */}
        <div className="relative z-10 min-w-0">
          {/* EYEBROW */}
          <div className="mb-5 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6D900B] sm:text-[11px]">
            <span className="h-[2px] w-6 shrink-0 bg-[#ADD132]" />
            CONTENT.IDENTITY.DIGITAL TRUST
          </div>

          {/* HEADLINE */}
          <h1 className="max-w-[650px] text-[clamp(36px,5.2vw,60px)] font-bold leading-[1.08] tracking-[-0.045em] text-[#152019]">
            Protect what
            <br className="hidden sm:block" />
            makes your business
            <br className="hidden sm:block" />
            <span className="text-[#6D900B]">valuable.</span>
          </h1>

          {/* TAGLINE */}
          <div className="mt-6 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.12em] text-[#68746C] sm:mt-7 sm:text-[10px]">
            <span className="h-[2px] w-7 shrink-0 bg-[#ADD132]" />
            Scan. Detect. Remove. Protect.
          </div>

          {/* OWL COMPONENT */}
          <div className="mt-8 w-full sm:mt-10">
            <HomeOwl />
          </div>
        </div>

        {/* RIGHT SIDE: EXPLANATORY CONTENT */}
        <div className="relative z-10 min-w-0 lg:pt-1">
          {/* CONTENT 01 */}
          <div className="mb-7 grid grid-cols-[24px_minmax(0,1fr)] gap-3 border-b border-[#DCE4D8] pb-7 sm:grid-cols-[28px_minmax(0,1fr)] sm:gap-4 sm:pb-8">
            <span className="pt-1 text-[10px] font-bold tracking-wider text-[#6D900B]">
              01
            </span>

            <div>
              <p className="m-0 text-[14px] leading-[1.9] text-[#68746C] sm:text-[15px] sm:leading-[1.95]">
                Your content and brand can appear far beyond the channels you
                authorize. TrackOwls brings those findings into a structured
                review: what was found, which rights apply, what evidence
                supports it and what action follows.
              </p>
            </div>
          </div>

          {/* CONTENT 02 */}
          <div className="mb-7 grid grid-cols-[24px_minmax(0,1fr)] gap-3 border-b border-[#DCE4D8] pb-7 sm:grid-cols-[28px_minmax(0,1fr)] sm:gap-4 sm:pb-8">
            <span className="pt-1 text-[10px] font-bold tracking-wider text-[#6D900B]">
              02
            </span>

            <div>
              <p className="m-0 text-[14px] leading-[1.9] text-[#68746C] sm:text-[15px] sm:leading-[1.95]">
                Start with a release, a live event, a catalogue or a brand
                portfolio. Build the monitoring scope around your priorities,
                then use case records and reporting to follow the work.
              </p>
            </div>
          </div>

          {/* PROCESS HIGHLIGHTS */}
          <div className="mb-7 grid grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                number: "01",
                title: "Discover",
                text: "Identify potential threats",
              },
              {
                number: "02",
                title: "Verify",
                text: "Review findings and evidence",
              },
              {
                number: "03",
                title: "Respond",
                text: "Support authorized action",
              },
              {
                number: "04",
                title: "Report",
                text: "Track outcomes transparently",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-lg border border-[#DCE4D8] bg-[#F5F8F2]/80 p-3 sm:p-4"
              >
                <span className="text-[9px] font-bold tracking-wider text-[#6D900B]">
                  {item.number}
                </span>

                <h3 className="mt-2 text-sm font-bold text-[#152019]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-[#68746C] sm:text-xs">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ABOUT LINK */}
          <Link
            to="/about"
            className="group inline-flex items-center gap-3 border-b border-[#ADD132]/70 pb-2 text-sm font-semibold text-[#6D900B] transition-colors duration-200 hover:border-[#ADD132] hover:text-[#152019] sm:text-[15px]"
          >
            <span>Meet TrackOwls</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ADD132]/60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[#ADD132] group-hover:bg-[#ADD132] group-hover:text-[#152019]">
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;