import React, { useState } from "react";

const faqs = [
  {
    question: "What can TrackOwls help protect?",
    answer:
      "TrackOwls supports digital protection workflows for films, OTT releases, live streams, music, websites, social platforms, brands and other digital assets. The scope is agreed according to your content, rights and protection priorities.",
    category: "Protection",
  },
  {
    question: "How do you distinguish a finding from an infringement?",
    answer:
      "A detected match is a finding that needs review, not automatic proof of infringement. Relevant source details and available evidence are assessed before a case is classified and any appropriate action is considered.",
    category: "Verification",
  },
  {
    question: "Which channels can be included?",
    answer:
      "Depending on the agreed scope, coverage may include websites, search engines, social platforms, video and streaming services, mobile applications, app stores, marketplaces and domains. Access and available actions depend on each platform.",
    category: "Coverage",
  },
  {
    question: "How does a consultation lead to monitoring?",
    answer:
      "The process starts by understanding your assets, ownership or authorization, priorities and relevant channels. Together, the scope and reporting expectations are defined before an appropriate monitoring workflow is planned.",
    category: "Getting started",
  },
  {
    question: "Do I need to own the content to request protection?",
    answer:
      "You should own the relevant rights or be authorized to act for the rights holder. During consultation, the relevant ownership or authorization details and the intended protection scope can be discussed.",
    category: "Authorization",
  },
  {
    question: "What information is useful when reporting suspected piracy?",
    answer:
      "Useful information may include the original asset or reference URL, the suspected source URL, the affected content, relevant timestamps and any supporting evidence you already have. The exact requirements depend on the case.",
    category: "Evidence",
  },
  {
    question: "Can I monitor more than one type of digital asset?",
    answer:
      "Multiple asset types can be discussed as part of the protection scope. Coverage, priorities and reporting can be planned around your assets and the channels relevant to them.",
    category: "Coverage",
  },
  {
    question: "How are potential matches reviewed?",
    answer:
      "Potential matches are reviewed using available reference material, source details and relevant context. A match should not be treated as confirmed infringement without appropriate assessment.",
    category: "Verification",
  },
  {
    question: "What does a protection report include?",
    answer:
      "Reporting can be planned around the agreed scope and available information, such as source details, evidence references, case status, response progress and follow-up requirements.",
    category: "Reporting",
  },
  {
    question: "Does every detected case result in content removal?",
    answer:
      "No. Detection does not guarantee removal or a particular outcome. Any response depends on the evidence, rights-holder authorization, platform procedures, applicable requirements and the decision of the relevant service.",
    category: "Response",
  },
  {
    question: "How can I discuss a protection plan for my business?",
    answer:
      "Contact TrackOwls to discuss your assets, protection priorities, relevant channels and reporting expectations. These details help establish a suitable scope for a potential engagement.",
    category: "Getting started",
  },
];

function PlusIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-[18px] w-[18px] transition-transform duration-300 ${
        open ? "rotate-45" : "rotate-0"
      }`}
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section
      id="home-faq"
      className="relative isolate w-full overflow-hidden bg-[#F5F8F2] font-['Roboto',sans-serif] text-[#152019]"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute -left-44 top-10 h-[420px] w-[420px] rounded-full bg-[#ADD132]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#DDE9C9]/70 blur-[110px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
        {/* Premium header */}
        <div className="mb-10 grid gap-8 lg:mb-14 lg:grid-cols-[1fr_.65fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center bg-[#ADD132] text-[#152019]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-[17px] w-[17px]"
                  aria-hidden="true"
                >
                  <path
                    d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.5-3 4.5M12 18h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#6D900B]">
                Knowledge centre
              </span>
            </div>

            <h2 className="m-0 max-w-[760px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[62px]">
              Clarity before
              <span className="block text-[#779719]">
                you take action.
              </span>
            </h2>
          </div>

          <div className="max-w-[410px] lg:justify-self-end">
            <div className="mb-5 h-px w-full bg-[#D7DFCF]" />

            <p className="m-0 text-sm leading-[2] text-[#68746C] sm:text-[15px]">
              The essentials behind digital protection, evidence review and
              reporting — so you can understand the process before getting
              started.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#75846B]">
                Answers for content owners
              </span>
            </div>
          </div>
        </div>

        {/* FAQ content */}
        <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-16">
          {/* Left information rail */}
          <aside className="flex flex-col justify-between border-b border-[#D8E0D1] pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <div>
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#839078]">
                Browse questions
              </p>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-[52px] font-light leading-none tracking-[-0.07em] text-[#172219]">
                  {String(visibleFaqs.length).padStart(2, "0")}
                </span>
                <span className="mb-1 text-xs text-[#879181]">
                  / {String(faqs.length).padStart(2, "0")} questions
                </span>
              </div>

              <p className="mb-0 mt-4 max-w-[220px] text-xs leading-[1.9] text-[#7A8576]">
                Find information about coverage, verification, authorization
                and case reporting.
              </p>
            </div>

            <div className="mt-7 hidden border-t border-[#D8E0D1] pt-5 lg:block">
              <div className="mb-3 flex h-10 w-10 items-center justify-center border border-[#D8E0D1] text-[#6D900B]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m9 12 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="m-0 text-xs font-semibold text-[#344137]">
                Evidence-led protection
              </p>
              <p className="mb-0 mt-2 text-[11px] leading-[1.8] text-[#879181]">
                Findings are reviewed before appropriate action is considered.
              </p>
            </div>
          </aside>

          {/* Accordion list */}
          <div className="min-w-0">
            <div className="border-t border-[#C8D2BE]">
              {visibleFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const answerId = `home-faq-answer-${index}`;
                const triggerId = `home-faq-trigger-${index}`;

                return (
                  <article
                    key={faq.question}
                    className={`border-b transition-colors duration-300 ${
                      isOpen
                        ? "border-[#A9C46A] bg-white/70"
                        : "border-[#D8E0D1] bg-transparent hover:bg-white/40"
                    }`}
                  >
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="group flex w-full items-center gap-4 px-3 py-5 text-left sm:gap-6 sm:px-5 sm:py-6"
                    >
                      <span
                        className={`w-7 shrink-0 text-[10px] font-bold tabular-nums transition-colors duration-300 ${
                          isOpen ? "text-[#6D900B]" : "text-[#9AA591]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="min-w-0 flex-1">
                        <span
                          className={`mb-2 block text-[9px] font-bold uppercase tracking-[0.16em] transition-colors duration-300 ${
                            isOpen ? "text-[#779719]" : "text-[#98A18F]"
                          }`}
                        >
                          {faq.category}
                        </span>

                        <span
                          className={`block text-[13px] font-semibold leading-[1.65] transition-colors duration-300 sm:text-[15px] ${
                            isOpen
                              ? "text-[#172219]"
                              : "text-[#344137] group-hover:text-[#5F7D13]"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#ADD132] text-[#152019]"
                            : "border border-[#D8E0D1] text-[#6D900B] group-hover:border-[#ADD132] group-hover:bg-[#F0F5E7]"
                        }`}
                      >
                        <PlusIcon open={isOpen} />
                      </span>
                    </button>

                    {/* Expandable answer */}
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={triggerId}
                      hidden={!isOpen}
                      className="animate-[faqReveal_.25s_ease-out_both] px-14 pb-6 pr-5 sm:pl-[76px] sm:pr-16"
                    >
                      <p className="m-0 max-w-[760px] text-[12px] leading-[2] text-[#68746C] sm:text-[13px]">
                        {faq.answer}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* View more / Show less */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="m-0 text-[11px] leading-[1.8] text-[#899384]">
                {showAll
                  ? `Showing all ${faqs.length} questions`
                  : `${faqs.length - visibleFaqs.length} more questions available`}
              </p>

              <button
                type="button"
                onClick={() => {
                  setShowAll((previous) => !previous);
                  setOpenIndex(null);
                }}
                aria-expanded={showAll}
                className="group inline-flex min-h-11 items-center justify-center gap-3 self-start bg-[#172219] px-5 py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#293B2B] sm:self-auto"
              >
                {showAll ? "Show fewer questions" : "View more questions"}

                <span
                  className={`flex h-6 w-6 items-center justify-center bg-[#ADD132] text-[#152019] transition-transform duration-300 ${
                    showAll ? "-rotate-90" : "rotate-0"
                  }`}
                >
                  <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom contact strip */}
        <div className="mt-14 flex flex-col gap-5 border-t border-[#D8E0D1] pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#779719]">
              Still have questions?
            </p>
            <p className="mb-0 mt-2 text-base font-semibold tracking-[-0.02em] text-[#263329] sm:text-lg">
              Let's discuss your protection priorities.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex min-h-11 items-center justify-center gap-3 border border-[#CBD5C1] px-5 py-3 text-xs font-bold text-[#263329] transition-all duration-300 hover:border-[#ADD132] hover:bg-[#ADD132] hover:text-[#152019]"
          >
            Contact TrackOwls
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes faqReveal {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[faqReveal_\\.25s_ease-out_both\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HomeFAQ;
