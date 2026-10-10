
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const workflowStages = [
  {
    number: "01",
    title: "Monitor",
    subtitle: "Define the scope.",
    description:
      "Define the assets, territories and digital channels in scope.",
    detail: "ASSET COVERAGE",
    keywords: ["Assets", "Territories", "Digital channels"],
  },
  {
    number: "02",
    title: "Detect",
    subtitle: "Discover potential threats.",
    description:
      "Discover suspected unauthorized content, streams and URLs.",
    detail: "DISCOVERY",
    keywords: ["Content", "Streams", "URLs"],
  },
  {
    number: "03",
    title: "Verify",
    subtitle: "Establish the evidence.",
    description:
      "Analysts check rights, validate the finding and capture evidence.",
    detail: "ANALYST REVIEW",
    keywords: ["Rights checks", "Validation", "Evidence"],
  },
  {
    number: "04",
    title: "Enforce",
    subtitle: "Take authorized action.",
    description:
      "Submit authorized complaints and escalate through available channels.",
    detail: "ENFORCEMENT",
    keywords: ["Complaints", "Escalation", "Action tracking"],
  },
  {
    number: "05",
    title: "Report",
    subtitle: "Track the outcome.",
    description:
      "Verify outcomes and report pending actions, removals and repeat cases.",
    detail: "OUTCOME REPORTING",
    keywords: ["Removals", "Pending actions", "Repeat cases"],
  },
];

function WorkflowPage({ stage }) {
  return (
    <div className="absolute inset-0 overflow-hidden border border-[#DCE4D8] bg-white text-[#152019] [backface-visibility:hidden]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_90%,rgba(173,209,50,0.12),transparent_55%)]" />

      <div className="relative flex h-full flex-col p-4 sm:p-7 md:p-9 lg:p-11">
        {/* PAGE HEADER */}
        <div className="flex items-center justify-between gap-2 border-b border-[#DCE4D8] pb-3 sm:pb-5">
          <span className="text-[7px] font-bold uppercase tracking-[0.13em] text-[#6D900B] sm:text-[10px] sm:tracking-[0.18em]">
            TrackOwls / Protection workflow
          </span>

          <span className="text-[8px] tracking-wider text-[#68746C] sm:text-[10px]">
            2026
          </span>
        </div>

        {/* PAGE CONTENT */}
        <div className="grid flex-1 grid-cols-1 items-center gap-3 py-4 sm:gap-6 sm:py-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
          <div>
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#6D900B] sm:mb-4 sm:text-xs">
              Stage {stage.number} / 05
            </p>

            <h3 className="m-0 font-serif text-[clamp(25px,4vw,54px)] font-normal leading-[1.05] tracking-[-0.04em] text-[#152019]">
              {stage.title}
              <span className="mt-2 block text-[0.48em] leading-tight text-[#6D900B]">
                {stage.subtitle}
              </span>
            </h3>

            <span className="mt-4 block h-[3px] w-9 rounded-full bg-[#ADD132] sm:mt-6 sm:w-12" />

            <p className="mt-3 max-w-[400px] text-[10px] leading-[1.7] text-[#68746C] sm:mt-5 sm:text-sm sm:leading-7">
              {stage.description}
            </p>
          </div>

          {/* STAGE DETAILS */}
          <div className="flex min-h-0 flex-col justify-center border border-[#DCE4D8] bg-[#F5F8F2] p-3 sm:p-5 md:p-6">
            <span className="mb-3 text-[7px] font-bold uppercase tracking-[0.15em] text-[#6D900B] sm:mb-5 sm:text-[10px]">
              {stage.detail}
            </span>

            <div className="space-y-2 sm:space-y-3">
              {stage.keywords.map((keyword, index) => (
                <div
                  key={keyword}
                  className="flex items-center gap-2 border-b border-[#DCE4D8] pb-2 sm:gap-3 sm:pb-3"
                >
                  <span className="text-[8px] font-bold text-[#6D900B] sm:text-[10px]">
                    0{index + 1}
                  </span>

                  <span className="text-[9px] font-medium text-[#152019] sm:text-xs md:text-sm">
                    {keyword}
                  </span>

                  <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAGE FOOTER */}
        <div className="flex items-end justify-between gap-2 border-t border-[#DCE4D8] pt-3 sm:pt-4">
          <div>
            <p className="m-0 text-[7px] font-bold uppercase tracking-[0.1em] text-[#68746C] sm:text-[9px] sm:tracking-[0.15em]">
              Scan · Detect · Remove · Protect
            </p>

            <p className="mt-1 text-[7px] text-[#68746C] sm:mt-2 sm:text-[9px]">
              TrackOwls / Digital protection
            </p>
          </div>

          <span className="font-serif text-xl text-[#6D900B] sm:text-3xl">
            {stage.number}
          </span>
        </div>
      </div>

      {/* SUBTLE PAGE EDGE */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[4px] bg-gradient-to-l from-[#DCE4D8] to-transparent" />
    </div>
  );
}

export default function HomeHowItWorks() {
  return (
    <section
      id="home-how-it-works"
      className="relative isolate w-full overflow-hidden border-y border-[#DCE4D8] bg-[#F5F8F2] font-['Roboto',Arial,sans-serif] text-[#152019]"
    >
      {/* LIGHT BRAND BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[#ADD132]/[0.13] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#ADD132]/[0.10] blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-[84px]">
        {/* HEADER */}
        <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ADD132]" />

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6D900B] sm:text-[11px]">
                How TrackOwls Works
              </p>
            </div>

            <h2 className="m-0 max-w-[680px] text-[clamp(34px,5vw,60px)] font-extrabold leading-[1.06] tracking-[-0.05em] text-[#152019]">
              From detection
              <br />
              to <span className="text-[#6D900B]">enforcement.</span>
            </h2>
          </div>

          <p className="m-0 max-w-[440px] text-sm leading-7 text-[#68746C] sm:text-base md:justify-self-end">
            Five connected stages. One traceable record of what was found,
            verified and actioned.
          </p>
        </div>

        {/* FIVE-PAGE ANIMATED BOOK */}
        <div className="relative mx-auto mt-10 max-w-[1050px] sm:mt-14">
          <div className="relative [perspective:1800px]">
            <div className="relative aspect-[1.05/1] w-full [transform-style:preserve-3d] sm:aspect-[1.65/1] lg:aspect-[2.05/1]">
              {/* BOOK BASE */}
              <div className="absolute inset-0 border border-[#DCE4D8] bg-[#E9EEE4] shadow-[0_24px_70px_rgba(21,32,25,0.12)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#DCE4D8]/40 via-transparent to-white/70" />
              </div>

              {/* LEFT TITLE PAGE */}
              <div className="absolute inset-y-0 left-0 w-1/2 border-r border-[#DCE4D8] bg-gradient-to-br from-white to-[#EDF2E8]">
                <div className="absolute inset-x-[8%] top-[12%] sm:top-[15%]">
                  <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#6D900B] sm:text-[9px] sm:tracking-[0.18em]">
                    TrackOwls / 2026
                  </span>

                  <h3 className="mt-4 max-w-[260px] font-serif text-[clamp(20px,4vw,42px)] leading-[1.12] tracking-[-0.035em] text-[#152019] sm:mt-6">
                    A structured
                    <br />
                    path to
                    <br />
                    protection.
                  </h3>

                  <span className="mt-4 block h-[3px] w-8 rounded-full bg-[#ADD132] sm:mt-6 sm:w-12" />

                  <p className="mt-3 max-w-[200px] text-[8px] leading-5 text-[#68746C] sm:mt-5 sm:text-xs">
                    Five stages. Clear records. Traceable outcomes.
                  </p>
                </div>

                <span className="absolute bottom-[8%] left-[8%] text-[7px] uppercase tracking-[0.12em] text-[#68746C] sm:text-[9px] sm:tracking-[0.15em]">
                  Digital protection / 2026
                </span>

                <span className="absolute bottom-[8%] right-[8%] font-serif text-2xl text-[#6D900B]/30 sm:text-4xl">
                  01
                </span>
              </div>

              {/* RIGHT PAGE BACKGROUND */}
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[#E9EEE4]" />

              {/* FIVE INDIVIDUAL TURNING PAGES */}
              {workflowStages.map((stage, index) => (
                <div
                  key={stage.number}
                  className="absolute inset-y-0 right-0 w-1/2 origin-left [transform-style:preserve-3d] motion-reduce:!animate-none"
                  style={{
                    animationName: "trackOwlsPageTurn",
                    animationDuration: "20s",
                    animationTimingFunction:
                      "cubic-bezier(0.65, 0, 0.35, 1)",
                    animationDelay: `${index * 4}s`,
                    animationIterationCount: "infinite",
                    zIndex: workflowStages.length - index + 10,
                  }}
                >
                  {/* FRONT OF PAGE */}
                  <WorkflowPage stage={stage} />

                  {/* BACK OF PAGE */}
                  <div className="absolute inset-0 overflow-hidden border border-[#DCE4D8] bg-[#EDF2E8] text-[#152019] [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex h-full flex-col justify-between p-4 sm:p-7 md:p-9 lg:p-11">
                      <div>
                        <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#6D900B] sm:text-[10px] sm:tracking-[0.18em]">
                          TrackOwls / Protection workflow
                        </p>

                        <h3 className="mt-4 font-serif text-[clamp(20px,3vw,38px)] leading-tight tracking-[-0.035em] sm:mt-7">
                          {workflowStages[
                            (index + 1) % workflowStages.length
                          ].title}
                        </h3>

                        <span className="mt-4 block h-[3px] w-8 rounded-full bg-[#ADD132] sm:mt-6 sm:w-12" />

                        <p className="mt-3 max-w-[280px] text-[9px] leading-5 text-[#68746C] sm:mt-5 sm:text-sm sm:leading-7">
                          {
                            workflowStages[
                              (index + 1) % workflowStages.length
                            ].description
                          }
                        </p>
                      </div>

                      <div className="flex items-end justify-between gap-2 border-t border-[#DCE4D8] pt-3 sm:pt-5">
                        <span className="text-[7px] font-medium uppercase tracking-[0.1em] text-[#68746C] sm:text-[9px] sm:tracking-[0.14em]">
                          The protection process
                        </span>

                        <span className="font-serif text-2xl text-[#6D900B] sm:text-4xl">
                          {
                            workflowStages[
                              (index + 1) % workflowStages.length
                            ].number
                          }
                        </span>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 right-0 w-[4px] bg-gradient-to-l from-[#C9D2C4] to-transparent" />
                  </div>
                </div>
              ))}

              {/* BOOK SPINE */}
              <div className="pointer-events-none absolute inset-y-0 left-1/2 z-30 w-[3px] -translate-x-1/2 bg-gradient-to-r from-[#CAD3C5] via-white to-[#CAD3C5]" />
            </div>
          </div>

          {/* ANIMATION CAPTION */}
          <div className="mt-5 flex items-center gap-3 text-[8px] font-bold uppercase tracking-[0.1em] text-[#68746C] sm:mt-6 sm:text-[10px] sm:tracking-[0.12em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132]" />

            <span>Five pages / Five stages</span>

            <span className="h-px flex-1 bg-gradient-to-r from-[#DCE4D8] to-transparent" />

            <span>01 — 05</span>
          </div>
        </div>

        {/* BOTTOM LINK */}
        <div className="mt-9 sm:mt-12">
          <Link
            to="/how-it-works"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#ADD132] pb-2 text-sm font-semibold text-[#6D900B] transition-colors duration-300 hover:text-[#152019] sm:text-[15px]"
          >
            <span>Understand the workflow</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ADD132] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#ADD132] group-hover:text-[#152019]">
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </span>
          </Link>
        </div>
      </div>

      {/* PAGE-TURN ANIMATION */}
      <style>{`
        @keyframes trackOwlsPageTurn {
          0%, 14% {
            transform: rotateY(0deg);
          }

          24%, 100% {
            transform: rotateY(-180deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #home-how-it-works *,
          #home-how-it-works *::before,
          #home-how-it-works *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
