import React from "react";
import { ShieldCheck, ScanLine } from "lucide-react";

export default function HomeOwl() {
  return (
    <div className="home-owl group relative mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#ADD132]/40 bg-[#D7FF00] shadow-[0_20px_55px_rgba(21,32,25,0.12)]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.18),transparent_65%)]" />

      {/* Animated scan line */}
      <div className="home-owl-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

      {/* Owl artwork */}
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src="/home-owl.png"
          alt="TrackOwls digital protection owl with cybersecurity imagery"
          loading="lazy"
          className="home-owl-image h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />

        {/* Subtle image overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#152019]/35 via-transparent to-transparent" />

        {/* Protection status */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 sm:bottom-5 sm:left-5 sm:right-5">
          <div className="flex min-w-0 items-center gap-2.5 rounded-full border border-white/30 bg-[#152019]/80 px-3 py-2 text-white shadow-lg backdrop-blur-md sm:px-4">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#D7FF00]" />

            <span className="truncate text-[10px] font-semibold tracking-wide sm:text-xs">
              Digital Protection Intelligence
            </span>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-[#D7FF00] text-[#152019] shadow-lg transition-transform duration-300 group-hover:rotate-12">
            <ScanLine size={19} strokeWidth={1.8} />
          </span>
        </div>
      </div>

      <style>{`
        .home-owl-scan {
          animation: homeOwlScan 4s ease-in-out infinite;
        }

        @keyframes homeOwlScan {
          0% {
            top: 0%;
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.8;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-owl-scan {
            animation: none;
          }

          .home-owl-image {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
