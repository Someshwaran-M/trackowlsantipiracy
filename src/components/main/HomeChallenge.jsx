
import React from "react";

const challenges = [
  {
    number: "01",
    title: "Content leakage",
    description:
      "Premium films, episodes and digital assets distributed without permission.",
  },
  {
    number: "02",
    title: "Live piracy",
    description:
      "Unauthorized streams during events where every minute matters.",
  },
  {
    number: "03",
    title: "Brand & IP abuse",
    description:
      "Misused trademarks, logos and creative assets across digital channels.",
  },
];

function HomeChallenge() {
  return (
    <section
      id="home-challenge"
      className="relative isolate w-full overflow-hidden border-y border-[#DDE5D9] bg-[#F8FAF5] font-['Roboto',sans-serif]"
    >
      {/* Ambient brand lighting */}
      <div className="pointer-events-none absolute -left-44 top-10 h-[360px] w-[360px] rounded-full bg-[#ADD132]/[0.09] blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[320px] w-[320px] rounded-full bg-[#ADD132]/[0.08] blur-[100px]" />

      {/* Fine background pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.23]"
        style={{
          backgroundImage:
            "radial-gradient(#9BAA91 0.65px, transparent 0.65px)",
          backgroundSize: "23px 23px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-[57px] lg:py-[104px]">

        {/* Editorial header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px] lg:items-end lg:gap-16">

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#ADD132]/50" />
                <span className="relative h-[7px] w-[7px] rounded-full bg-[#88AF17]" />
              </span>

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.24em] text-[#668516] sm:text-[11px]">
                The challenge
              </p>

              <span className="h-px w-10 bg-[#D7E0D0]" />
            </div>

            <h2 className="m-0 max-w-[800px] text-[clamp(35px,5.1vw,66px)] font-bold leading-[1.06] tracking-[-0.065em] text-[#172219]">
              Piracy moves fast.
              <br />
              <span className="relative inline-block">
                Your response should too.
                <span className="absolute -bottom-2 left-0 h-[4px] w-[38%] rounded-full bg-[#ADD132] sm:-bottom-3 sm:h-[5px]" />
              </span>
            </h2>
          </div>

          <div className="relative max-w-[390px] pb-1 lg:justify-self-end">
            <div className="absolute -left-4 top-1 h-[calc(100%-8px)] w-[2px] bg-gradient-to-b from-[#ADD132] via-[#ADD132]/50 to-transparent sm:-left-6" />

            <p className="m-0 text-[13px] leading-[2] text-[#68746C] sm:text-[14px]">
              Unauthorized copies and brand misuse spread across channels. A
              useful response connects discovery, verification and action.
            </p>
          </div>
        </div>

        {/* Architectural divider */}
        <div className="relative my-12 h-px bg-[#DCE4D8] sm:my-[68px]">
          <span className="absolute left-0 top-0 h-px w-20 bg-[#ADD132] sm:w-28" />
        </div>

        {/* Open editorial challenge layout */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">

          {challenges.map((challenge, index) => (
            <article
              key={challenge.number}
              className={`group relative min-w-0 py-8 sm:px-6 sm:py-9 lg:px-8 lg:py-5 ${
                index === 0
                  ? "sm:pl-0 lg:pl-0"
                  : "border-t border-[#DCE4D8] sm:border-t-0"
              } ${
                index === 1
                  ? "sm:border-l sm:border-[#DCE4D8]"
                  : ""
              } ${
                index === 2
                  ? "sm:col-span-2 sm:border-t sm:border-[#DCE4D8] lg:col-span-1 lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              {/* Large outlined number */}
              <div className="relative mb-7 flex items-center justify-between sm:mb-9">
                <span
                  className="select-none text-[65px] font-bold leading-[0.9] tracking-[-0.09em] text-[#E1E8DB] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:text-[#ADD132] sm:text-[76px] lg:text-[86px]"
                  aria-hidden="true"
                >
                  {challenge.number}
                </span>

                {/* Minimal orbit detail */}
                <div className="relative mr-1 flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12">
                  <div className="absolute inset-0 rounded-full border border-[#D6E0D0] transition-all duration-500 group-hover:scale-110 group-hover:border-[#ADD132]" />
                  <div className="absolute inset-[7px] rounded-full border border-dashed border-[#D6E0D0] transition-transform duration-700 group-hover:rotate-45 group-hover:border-[#A3C92C]" />
                  <span className="h-[7px] w-[7px] rounded-full bg-[#A5CA2F] transition-all duration-300 group-hover:scale-150" />
                </div>
              </div>

              {/* Animated accent */}
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[3px] w-8 rounded-full bg-[#ADD132] transition-all duration-500 group-hover:w-14" />
                <span className="text-[9px] font-semibold tracking-[0.18em] text-[#84917F]">
                  {challenge.number}
                </span>
              </div>

              <h3 className="mb-3 text-[19px] font-bold leading-snug tracking-[-0.035em] text-[#19241A] transition-colors duration-300 group-hover:text-[#668516] sm:text-[21px] lg:text-[22px]">
                {challenge.title}
              </h3>

              <p className="m-0 max-w-[350px] text-[13px] leading-[1.95] text-[#68746C] sm:text-[14px]">
                {challenge.description}
              </p>

              {/* Bottom tracking line */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-[2px] w-5 bg-[#DCE4D8] transition-all duration-500 group-hover:w-10 group-hover:bg-[#ADD132]" />
                <span className="h-[2px] w-1 bg-[#DCE4D8] transition-colors duration-300 group-hover:bg-[#ADD132]" />
              </div>
            </article>
          ))}
        </div>

       
      </div>
    </section>
  );
}

export default HomeChallenge;