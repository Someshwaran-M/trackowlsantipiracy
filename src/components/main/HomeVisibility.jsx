import React from "react";

const BRAND = "#ADD132";

const reportItems = [
  {
    label: "Verified URLs",
    description: "Separate from raw discoveries",
  },
  {
    label: "Enforcement actions",
    description: "Submission and escalation history",
  },
  {
    label: "Confirmed outcomes",
    description: "Removed, pending or still available",
  },
];

const coverageChannels = [
  "Websites",
  "Search engines",
  "Social platforms",
  "Video platforms",
  "Streaming websites",
  "Mobile applications",
  "App stores",
  "Marketplaces",
  "Domains",
];

function VisibilityIcon({ type, className = "h-5 w-5" }) {
  const icons = {
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5" />
        <path d="M5 17v3h14v-3" />
      </>
    ),
    arrow: <path d="M4 10h12m-5-5 5 5-5 5" />,
    document: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h4M10 12h5M10 16h5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function HomeVisibility() {
  const downloadSampleReport = () => {
    const report = [
      "TRACKOWLS — ILLUSTRATIVE PROTECTION REPORT",
      "==========================================",
      "",
      "Report type: Sample enforcement report",
      "Status: Illustrative sample only",
      "",
      "1. VERIFIED URLS",
      "Separate from raw discoveries.",
      "",
      "2. ENFORCEMENT ACTIONS",
      "Submission and escalation history.",
      "",
      "3. CONFIRMED OUTCOMES",
      "Removed, pending or still available.",
      "",
      "Note: This is a sample report and contains no live detection data.",
    ].join("\n");

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "TrackOwls-Sample-Protection-Report.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home-visibility"
      className="relative isolate w-full overflow-hidden border-y border-[#DCE4D8] bg-[#F8FAF5] font-['Roboto',sans-serif]"
    >
      {/* Atmospheric brand lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#ADD132]/[0.09] blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 top-[35%] h-[400px] w-[400px] rounded-full bg-[#ADD132]/[0.07] blur-[120px]" />

      {/* Fine technical texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.20]"
        style={{
          backgroundImage:
            "radial-gradient(#98A68F 0.65px, transparent 0.65px)",
          backgroundSize: "23px 23px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 85%, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-[60px] lg:py-[104px]">

        {/* 01 — Editorial header */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_360px] lg:items-end lg:gap-16">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-3 w-3 items-center justify-center">
                <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#ADD132]/40" />
                <span className="relative h-2 w-2 rounded-full bg-[#8BAE20]" />
              </span>

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.22em] text-[#68851C] sm:text-[11px]">
                Visibility that matters
              </p>
            </div>

            <h2 className="m-0 text-[clamp(38px,5.3vw,66px)] font-bold leading-[1.07] tracking-[-0.065em] text-[#172219]">
              Understand the work.
              <br />
              <span className="relative inline-block">
                Track the outcome.
                <span className="absolute -bottom-2 left-0 h-[4px] w-[35%] rounded-full bg-[#ADD132] sm:h-[5px]" />
              </span>
            </h2>
          </div>

          <div className="relative max-w-[360px] pb-1 lg:justify-self-end">
            <span className="absolute -left-4 top-1 h-[calc(100%-8px)] w-[2px] bg-gradient-to-b from-[#ADD132] to-transparent sm:-left-6" />

            <p className="m-0 text-[13px] leading-[2] text-[#68746C] sm:text-[14px]">
              A useful report distinguishes detections from verified
              infringements, complaints and confirmed removals.
            </p>
          </div>
        </div>

        {/* Editorial divider */}
        <div className="relative my-12 h-px bg-[#DCE4D8] sm:my-16">
          <span className="absolute left-0 top-0 h-px w-20 bg-[#ADD132] sm:w-28" />
        </div>

        {/* 02 — Report workspace */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* Report introduction */}
          <div className="flex min-w-0 flex-col items-start justify-center lg:py-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCE4D8] text-[#68851C] transition-all duration-300 hover:border-[#ADD132] hover:bg-[#ADD132]/15">
                <VisibilityIcon type="document" className="h-5 w-5" />
              </div>

              <div>
                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.17em] text-[#899485]">
                  REPORT PREVIEW
                </p>
                <p className="mb-0 mt-1 text-[11px] font-medium text-[#68746C]">
                  Illustrative sample
                </p>
              </div>
            </div>

            <h3 className="m-0 max-w-[460px] text-[28px] font-bold leading-[1.16] tracking-[-0.045em] text-[#172219] sm:text-[35px]">
              See a sample enforcement report.
            </h3>

            <p className="mb-0 mt-5 max-w-[420px] text-[13px] leading-[1.95] text-[#68746C] sm:text-[14px]">
              Case references, platforms, actions and outcomes in a clear
              reporting format.
            </p>

            <button
              type="button"
              onClick={downloadSampleReport}
              className="group mt-8 inline-flex min-h-[48px] items-center gap-4 rounded-full bg-[#ADD132] py-2 pl-5 pr-2.5 text-[12px] font-bold text-[#172219] transition-all duration-300 hover:bg-[#9EC125] hover:shadow-[0_8px_28px_rgba(145,177,34,0.20)] focus:outline-none focus:ring-2 focus:ring-[#ADD132] focus:ring-offset-4"
            >
              Download sample report

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#172219] text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
                <VisibilityIcon type="download" className="h-4 w-4" />
              </span>
            </button>

            <div className="mt-8 flex items-center gap-2">
              <span className="h-[5px] w-[5px] rounded-full bg-[#ADD132]" />
              <span className="text-[10px] leading-5 text-[#899485]">
                Illustrative sample
              </span>
            </div>
          </div>

          {/* Report preview — document-style layout */}
          <div className="relative min-w-0 pt-3 sm:pl-4 sm:pt-4 lg:pl-5">

            {/* Document shadow sheet */}
            <div className="absolute inset-x-5 bottom-0 top-7 -z-10 rotate-[2deg] border border-[#DCE4D8] bg-[#EEF2E9] sm:inset-x-9 sm:top-9" />

            <div className="relative border border-[#DCE4D8] bg-white shadow-[0_20px_65px_rgba(39,54,32,0.055)]">

              {/* Document header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5EAE1] px-5 py-5 sm:px-8 sm:py-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ADD132]/20">
                    <VisibilityIcon
                      type="document"
                      className="h-[17px] w-[17px] text-[#526C16]"
                    />
                  </div>

                  <div>
                    <p className="m-0 text-[11px] font-bold tracking-[0.02em] text-[#172219]">
                      TRACKOWLS
                    </p>
                    <p className="m-0 mt-1 text-[9px] uppercase tracking-[0.13em] text-[#899485]">
                      Protection report
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 border border-[#E1E8D8] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#68851C]">
                  <span className="h-[6px] w-[6px] rounded-full bg-[#ADD132]" />
                  Sample
                </span>
              </div>

              {/* Document body */}
              <div className="px-5 py-2 sm:px-8 sm:py-4">
                {reportItems.map((item, index) => (
                  <article
                    key={item.label}
                    className={`group relative grid grid-cols-[34px_minmax(0,1fr)] gap-3 py-6 sm:grid-cols-[42px_minmax(0,1fr)] sm:gap-4 sm:py-7 ${
                      index !== reportItems.length - 1
                        ? "border-b border-[#E5EAE1]"
                        : ""
                    }`}
                  >
                    <span className="pt-1 text-[11px] font-bold tabular-nums tracking-[0.06em] text-[#A1AD98] transition-colors duration-300 group-hover:text-[#68851C]">
                      0{index + 1}
                    </span>

                    <div className="min-w-0">
                      <h4 className="m-0 text-[13px] font-bold leading-[1.6] text-[#172219] sm:text-[15px]">
                        {item.label}
                      </h4>

                      <p className="mb-0 mt-1.5 text-[12px] leading-[1.85] text-[#68746C] sm:text-[13px]">
                        {item.description}
                      </p>

                      <div className="mt-4 h-[2px] w-full max-w-[90px] bg-[#EEF1EA]">
                        <div className="h-full w-0 bg-[#ADD132] transition-all duration-500 group-hover:w-full" />
                      </div>
                    </div>

                    <div className="absolute right-0 top-7 text-[#A1B76E] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <VisibilityIcon
                        type="check"
                        className="h-4 w-4"
                      />
                    </div>
                  </article>
                ))}
              </div>

              {/* Document footer */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E5EAE1] bg-[#FBFCF9] px-5 py-4 sm:px-8">
                <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#899485]">
                  Illustrative sample only
                </span>

                <div className="flex items-center gap-1.5">
                  <span className="h-[3px] w-7 bg-[#ADD132]" />
                  <span className="h-[3px] w-3 bg-[#E1E8D8]" />
                  <span className="h-[3px] w-3 bg-[#E1E8D8]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 03 — Report link */}
        <div className="mt-9 border-b border-[#DCE4D8] pb-8 sm:mt-12 sm:pb-10">
          <a
            href="/industries"
            className="group inline-flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-bold text-[#68851C] transition-colors duration-300 hover:text-[#172219] sm:text-[13px]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DCE4D8] transition-all duration-300 group-hover:border-[#ADD132] group-hover:bg-[#ADD132]">
              <VisibilityIcon type="arrow" className="h-4 w-4" />
            </span>

            Explore illustrative protection scenarios
          </a>
        </div>

        
{/* DIGITAL COVERAGE */}
<div className="relative mx-auto mt-16 max-w-[1100px] text-center sm:mt-20 lg:mt-[90px]">

  {/* Heading */}
  <div className="mb-8 sm:mb-10">
    <div className="mb-4 flex items-center justify-center gap-2.5">
      <span className="h-[2px] w-6 rounded-full bg-[#ADD132]" />

      <p className="m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-[#68851C]">
        Digital coverage
      </p>

      <span className="h-[2px] w-6 rounded-full bg-[#ADD132]" />
    </div>

    <h2 className="m-0 text-[30px] font-bold leading-[1.2] tracking-[-0.04em] text-[#172F46] sm:text-[36px] lg:text-[40px]">
      Across the channels
      <br />
      that matter to your rights.
    </h2>
  </div>

  {/* Normal-sized outlined boxes */}
  <div className="flex flex-wrap items-center justify-center gap-3">
    {coverageChannels.map((channel, index) => (
      <div
        key={channel}
        className="group flex min-h-[44px] items-center justify-center border border-[#D2DFE8] bg-white/60 px-5 py-2.5 opacity-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ADD132] hover:bg-[#ADD132]/10 hover:shadow-[0_4px_14px_rgba(65,86,36,0.07)] motion-safe:animate-[coverageFadeIn_0.45s_ease-out_forwards]"
        style={{
          animationDelay: `${index * 60}ms`,
        }}
      >
        <span className="whitespace-nowrap text-[13px] font-medium text-[#52687A] transition-colors duration-300 group-hover:text-[#405A19]">
          {channel}
        </span>
      </div>
    ))}
  </div>

  {/* Disclaimer */}
  <p className="mx-auto mb-0 mt-7 max-w-[720px] text-[12px] leading-[1.8] text-[#718092] sm:mt-8">
    Coverage and available enforcement routes are agreed during scoping.
    Platform access and removal decisions depend on authorization and the
    receiving service.
  </p>

  <style>{`
    @keyframes coverageFadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .motion-safe\\:animate-\\[coverageFadeIn_0\\.45s_ease-out_forwards\\] {
        animation: none;
        opacity: 1;
        transform: none;
      }
    }
  `}</style>
</div>

       
      </div>
    </section>
  );
}

export default HomeVisibility;
