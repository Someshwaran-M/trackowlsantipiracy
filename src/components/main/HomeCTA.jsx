
import React from "react";

function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="relative w-full overflow-hidden border-y border-[#26382A] bg-[#152019] font-['Roboto',sans-serif]"
    >
      {/* Subtle TrackOwls green accents */}
      <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#ADD132]/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-20 -bottom-28 h-56 w-56 rounded-full bg-[#ADD132]/[0.07] blur-3xl" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8 sm:py-9 lg:px-[26px] lg:py-10">
        {/* LEFT CONTENT */}
        <div className="min-w-0">
          <div className="mb-2.5 flex items-center gap-2">
            <span className="h-[2px] w-5 rounded-full bg-[#ADD132]" />

            <p className="m-0 text-[9px] font-bold uppercase tracking-[0.18em] text-[#ADD132] sm:text-[10px]">
              Start with a conversation
            </p>
          </div>

          <h2 className="m-0 text-[26px] font-bold leading-[1.2] tracking-[-0.035em] text-[#F5F8F2] sm:text-[30px] lg:text-[32px]">
            Let’s protect what you’ve built.
          </h2>

          <p className="mb-0 mt-2.5 text-[11px] leading-[1.8] text-[#C5CEC5] sm:text-[12px]">
            Tell us about your content, rights and protection priorities.
          </p>
        </div>

        {/* CTA BUTTON */}
        <a
          href="/request-demo"
          className="group inline-flex min-h-[42px] shrink-0 items-center justify-center gap-2 rounded-md bg-[#ADD132] px-5 py-3 text-[11px] font-bold text-[#152019] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6D900B] hover:text-white hover:shadow-[0_8px_22px_rgba(173,209,50,0.18)] focus:outline-none focus:ring-2 focus:ring-[#ADD132] focus:ring-offset-2 focus:ring-offset-[#152019]"
        >
          Request a consultation

          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              d="M4 10h12m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default HomeCTA;
