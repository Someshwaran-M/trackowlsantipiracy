
import React from "react";

const BRAND = "#ADD132";

const solutions = [
  {
    number: "01",
    title: "Live Streaming Protection",
    description: "Act while the event still matters.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",
    icon: "stream",
    link: "/services",
  },
  {
    number: "02",
    title: "OTT & VOD Protection",
    description: "Protect every release window.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",
    icon: "play",
    link: "/industries",
  },
  {
    number: "03",
    title: "Website & App Monitoring",
    description: "See where your content travels.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85",
    icon: "globe",
    link: "/platform",
  },
  {
    number: "04",
    title: "Copyright Enforcement",
    description: "Turn evidence into action.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=85",
    icon: "file",
    link: "/services",
  },
  {
    number: "05",
    title: "Brand Protection",
    description: "Defend the identity you built.",
    image: null,
    icon: "shield",
    link: "/services",
  },
  {
    number: "06",
    title: "Piracy Intelligence",
    description: "Understand the patterns behind piracy.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85",
    icon: "intelligence",
    link: "/platform",
  },
  {
    number: "07",
    title: "Marketplace & Counterfeit Monitoring",
    description: "Investigate listings that misuse your brand.",
    image: null,
    icon: "search",
    link: "/industries",
  },
  {
    number: "08",
    title: "Domain & Impersonation Monitoring",
    description: "Protect the identity behind your digital presence.",
    image: null,
    icon: "globe",
    link: "/services",
  },
  {
    number: "09",
    title: "Social Media & Video Protection",
    description: "Follow infringement across public social channels.",
    image: null,
    icon: "social",
    link: "/platform",
  },
];

function SolutionIcon({ type, className = "h-8 w-8" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    stream: (
      <>
        <path d="M5 9.5a5 5 0 0 1 0 5" />
        <path d="M8 11a2.5 2.5 0 0 1 0 2" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    play: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8 6 4-6 4V8Z" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4a13 13 0 0 1 0 16M12 4a13 13 0 0 0 0 16" />
      </>
    ),
    file: (
      <>
        <path d="M7 3.5h7l4 4V20H7z" />
        <path d="M14 3.5V8h4M10 13h5M10 16h4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.5-3 7.5-7 10-4-2.5-7-5.5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    intelligence: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <path d="m5.6 5.6 2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4 4" />
      </>
    ),
    social: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="16" cy="8" r="3" />
        <path d="M3 19c0-3 2-5 5-5s5 2 5 5m0-4c.8-.6 1.8-1 3-1 3 0 5 2 5 5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      {...common}
    >
      {paths[type] || paths.shield}
    </svg>
  );
}

function HexagonCard({ solution }) {
  return (
    <article className="group relative mx-auto w-full max-w-[360px]">
      {/* HEXAGON BORDER */}
      <div
        className="relative p-[3px] transition-transform duration-500 group-hover:-translate-y-1"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          background: `linear-gradient(145deg, ${BRAND}, #6D900B, ${BRAND})`,
          filter: "drop-shadow(0 9px 12px rgba(21,32,25,0.12))",
        }}
      >
        {/* INNER HEXAGON */}
        <div
          className="relative aspect-[0.98/1] overflow-hidden bg-[#152019]"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {/* IMAGE */}
          {solution.image ? (
            <img
              src={solution.image}
              alt={solution.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#102B36] via-[#152019] to-[#263B19]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(173,209,50,0.22),transparent_50%)]" />
              <SolutionIcon
                type={solution.icon}
                className="h-20 w-20 text-[#ADD132]/80 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          )}

          {/* DARK OVERLAY FOR READABILITY */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07100D]/10 via-[#07100D]/25 to-[#07100D]/95" />

          {/* INNER LIME EDGE */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[4px] opacity-90"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              border: "1px solid rgba(255,255,255,0.65)",
            }}
          />

          {/* CARD CONTENT */}
          <div className="absolute inset-x-3 bottom-[14%] z-10 flex flex-col items-center text-center text-white sm:inset-x-4">
            <h3 className="max-w-[270px] text-[17px] font-bold leading-[1.2] tracking-[-0.025em] sm:text-[19px] lg:text-[20px]">
              {solution.title}
            </h3>

            <p className="mt-1.5 max-w-[290px] text-[12px] leading-[1.4] text-white sm:text-[13px]">
              {solution.description}
            </p>

            {/* EXPLORE BUTTON */}
            <a
              href={solution.link}
              className="mt-3 inline-flex min-h-[32px] items-center justify-center gap-2 rounded-full border-2 border-[#ADD132] bg-[#07100D]/55 px-4 py-1 text-[12px] font-bold text-white transition-all duration-300 hover:bg-[#ADD132] hover:text-[#152019] sm:mt-3.5 sm:px-5 sm:text-[13px]"
            >
              Explore
              <span className="text-[#ADD132] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#152019]">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HomeSolutions() {
  return (
    <section
      id="home-solutions"
      className="relative w-full overflow-hidden bg-white font-['Roboto',Arial,sans-serif]"
    >
      {/* SUBTLE BACKGROUND ACCENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#ADD132]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#ADD132]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1420px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-[70px]">
        {/* ORIGINAL HEADER CONTENT */}
        <div className="mb-9 flex items-end justify-between gap-5 sm:mb-12">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-6 rounded-full bg-[#ADD132]" />
              <p className="m-0 text-xs font-bold uppercase tracking-[0.18em] text-[#6D900B]">
                Our solutions
              </p>
            </div>

            <h2 className="m-0 max-w-[600px] text-[28px] font-bold leading-[1.18] tracking-[-0.035em] text-[#152019] sm:text-[34px] lg:text-[38px]">
              Protection with a
              <br />
              clear path to action.
            </h2>
          </div>

          <a
            href="/services"
            className="group mb-1 hidden shrink-0 items-center gap-1.5 border-b border-[#DCE4D8] pb-1 text-sm font-semibold text-[#6D900B] transition-colors hover:border-[#ADD132] hover:text-[#152019] sm:inline-flex"
          >
            View all solutions
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
          </a>
        </div>

        {/* ROW 1: FOUR HEXAGONS */}
        <div className="grid grid-cols-1 items-center gap-x-2 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-2 xl:gap-x-3">
          {solutions.slice(0, 4).map((solution) => (
            <HexagonCard key={solution.number} solution={solution} />
          ))}
        </div>

        {/* ROW 2: THREE CENTERED HEXAGONS */}
        <div className="mx-auto -mt-12 grid max-w-[1120px] grid-cols-1 items-center gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(4, 7).map((solution) => (
            <HexagonCard key={solution.number} solution={solution} />
          ))}
        </div>

        {/* ROW 3: TWO CENTERED HEXAGONS */}
        <div className="mx-auto -mt-16 grid max-w-[740px] grid-cols-1 items-center gap-x-4 gap-y-8 sm:grid-cols-2">
          {solutions.slice(7, 9).map((solution) => (
            <HexagonCard key={solution.number} solution={solution} />
          ))}
        </div>

        {/* ORIGINAL MOBILE VIEW ALL LINK */}
        <div className="mt-8 sm:hidden">
          <a
            href="/services"
            className="inline-flex items-center gap-2 border-b border-[#DCE4D8] pb-1.5 text-sm font-semibold text-[#6D900B] transition-colors hover:border-[#ADD132] hover:text-[#152019]"
          >
            View all solutions
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
