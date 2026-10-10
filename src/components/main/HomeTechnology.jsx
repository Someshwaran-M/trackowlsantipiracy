import React from "react";

const BRAND = "#ADD132";

const features = [
  {
    number: "01",
    title: "Analyst verification",
    description: "Review the finding before taking action.",
    icon: "eye",
  },
  {
    number: "02",
    title: "Evidence-led enforcement",
    description: "Keep URLs, timestamps and supporting records.",
    icon: "file",
  },
  {
    number: "03",
    title: "Agreed priorities",
    description: "Define coverage, response targets and escalations.",
    icon: "clock",
  },
  {
    number: "04",
    title: "Transparent reporting",
    description: "See submitted actions and confirmed outcomes.",
    icon: "chart",
  },
];

function TechnologyIcon({ type }) {
  const icons = {
    eye: (
      <>
        <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.7" />
      </>
    ),
    file: (
      <>
        <path d="M7 3.5h7l4 4V21H7z" />
        <path d="M14 3.5V8h4M10 12h5M10 15h5M10 18h3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V11M10 20V5M16 20v-8M22 20H2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function HomeTechnology() {
  return (
    <section
      id="home-technology"
      className="relative isolate w-full overflow-hidden border-y border-[#DCE4D8] bg-[#F8FAF5] font-['Roboto',sans-serif]"
    >
      {/* Ambient lime illumination */}
      <div className="pointer-events-none absolute -left-36 top-10 h-[340px] w-[340px] rounded-full bg-[#ADD132]/[0.10] blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#ADD132]/[0.08] blur-[110px]" />

      {/* Technical dot matrix */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.24]"
        style={{
          backgroundImage:
            "radial-gradient(#A6B39D 0.65px, transparent 0.65px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-[60px] lg:py-[100px]">

       

        {/* Main composition */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">

          {/* LEFT — Editorial headline */}
          <div className="relative min-w-0">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ADD132]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#829078]">
                From discovery to action
              </span>
            </div>

            <h2 className="m-0 text-[clamp(39px,5.2vw,68px)] font-bold leading-[1.04] tracking-[-0.065em] text-[#172219]">
              The right
              <br />
              <span className="relative inline-block">
                evidence.
                <span className="absolute -bottom-1 left-0 h-[4px] w-[45%] rounded-full bg-[#ADD132] sm:h-[5px]" />
              </span>
              <br />
              The right
              <br />
              <span className="text-[#809C37]">action.</span>
            </h2>

            <p className="mb-0 mt-8 max-w-[410px] text-[13px] leading-[2] text-[#68746C] sm:text-[14px]">
              Automation supports discovery. Analyst review supports
              decisions. Enforcement operations connect verified findings to
              appropriate reporting channels.
            </p>

            <a
              href="/how-it-works"
              className="group mt-8 inline-flex items-center gap-3 text-[13px] font-bold text-[#526F0C] transition-colors duration-300 hover:text-[#172219]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6E0CF] transition-all duration-300 group-hover:border-[#ADD132] group-hover:bg-[#ADD132]">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              Explore our approach
            </a>

            {/* Decorative tracking line */}
            <div className="mt-12 flex max-w-[330px] items-center gap-2">
              <span className="h-[3px] w-14 bg-[#ADD132]" />
              <span className="h-[3px] w-5 bg-[#DCE4D8]" />
              <span className="h-[3px] w-2 bg-[#DCE4D8]" />
              <span className="h-px flex-1 bg-[#DCE4D8]" />
            </div>
          </div>

          {/* RIGHT — Open verification timeline */}
          <div className="relative min-w-0 lg:pt-2">

            {/* Vertical signal path */}
            <div className="pointer-events-none absolute bottom-8 left-[22px] top-8 w-px bg-[#DCE4D8] sm:left-[27px]">
              <div className="absolute left-0 top-0 h-[27%] w-px bg-[#ADD132]" />
            </div>

            <div className="relative">
              {features.map((feature, index) => (
                <article
                  key={feature.number}
                  className={`group relative grid grid-cols-[46px_minmax(0,1fr)] gap-4 py-6 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 sm:py-7 ${
                    index !== features.length - 1
                      ? "border-b border-[#DCE4D8]"
                      : ""
                  }`}
                >
                  {/* Icon node */}
                  <div className="relative z-10 flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#DCE4D8] bg-[#F8FAF5] text-[#708A2A] transition-all duration-300 group-hover:border-[#ADD132] group-hover:bg-[#ADD132] group-hover:text-[#1C2815] sm:h-[56px] sm:w-[56px]">
                    <TechnologyIcon type={feature.icon} />
                  </div>

                  {/* Feature content */}
                  <div className="min-w-0 pt-0.5">

                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#84917F]">
                        STEP {feature.number}
                      </span>

                      <span className="text-[10px] font-semibold tabular-nums text-[#9BA696] transition-colors duration-300 group-hover:text-[#708A2A]">
                        / 04
                      </span>
                    </div>

                    <h3 className="m-0 text-[16px] font-bold leading-[1.5] tracking-[-0.025em] text-[#19241A] transition-colors duration-300 group-hover:text-[#68851C] sm:text-[18px]">
                      {feature.title}
                    </h3>

                    <p className="mb-0 mt-1.5 max-w-[360px] text-[12px] leading-[1.9] text-[#68746C] sm:text-[13px]">
                      {feature.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-4 h-[2px] w-full max-w-[70px] overflow-hidden bg-[#E4E9DF]">
                      <div
                        className="h-full w-0 bg-[#ADD132] transition-all duration-500 group-hover:w-full"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Timeline footer */}
            <div className="mt-7 flex items-center justify-between gap-3 pl-[60px] sm:pl-[80px]">
              <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#84917F]">
                Discovery · Verification · Action
              </span>

              <span className="flex h-2 w-2 rounded-full bg-[#ADD132] shadow-[0_0_0_4px_rgba(173,209,50,0.15)]" />
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}

export default HomeTechnology;
