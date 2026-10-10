import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import TrackOwlsLogo from "./TrackOwlsLogo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "How it works", path: "/how-it-works" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Platform", path: "/platform" },
  { name: "Insights", path: "/insights" },
];

const WHATSAPP_NUMBER = "91XXXXXXXXXX";

export default function Navbar() {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello TrackOwls, I would like to know more about your anti-piracy services."
  )}`;

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const desktopLinkClass = ({ isActive: active }) =>
    [
      "relative inline-flex min-h-[42px] items-center justify-center",
      "whitespace-nowrap rounded-full px-2.5 xl:px-3",
      "font-['Roboto',sans-serif] text-[12px] xl:text-[13px]",
      "transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2",
      "focus-visible:ring-[#8BB630] focus-visible:ring-offset-2",
      active
        ? "bg-[#EAF3D9] font-bold !text-[#45651A]"
        : "bg-transparent font-medium !text-[#42483A] hover:bg-[#F2F6EA] hover:!text-[#45651A]",
    ].join(" ");

  const mobileLinkClass = (active) =>
    [
      "mb-1 flex min-h-[49px] w-full items-center justify-between",
      "rounded-xl border px-4 py-3 text-sm transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8BB630]",
      active
        ? "border-[#DCE9C7] bg-[#F0F6E5] font-semibold text-[#45651A]"
        : "border-transparent font-medium text-[#42483A] hover:border-[#E6EDD9] hover:bg-[#F7F9F3]",
    ].join(" ");

  return (
    <>
      {/* LIGHT MODE NAVBAR */}
      <header className="fixed inset-x-0 top-0 z-[1000] w-full font-['Roboto',sans-serif] text-[#343A2D]">
        <div className="w-full border-b border-[#E6EBDD] bg-white/95 shadow-[0_4px_18px_rgba(50,70,25,0.07)] backdrop-blur-xl">
          <div className="mx-auto flex min-h-[84px] w-full max-w-[1420px] items-center justify-between gap-3 px-4 py-2 sm:min-h-[90px] sm:px-6 lg:min-h-[94px] lg:px-8 xl:gap-5 xl:px-10 2xl:px-14">
            {/* BIGGER LOGO */}
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="TrackOwls home"
              className="flex h-[70px] w-[205px] shrink-0 items-center justify-start overflow-visible rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8BB630] sm:h-[76px] sm:w-[245px] md:w-[265px] lg:h-[80px] lg:w-[250px] xl:w-[285px] 2xl:w-[310px]"
            >
              <div className="trackowls-logo-holder flex h-full w-full min-w-0 items-center justify-start">
                <TrackOwlsLogo />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav
              aria-label="Main navigation"
              className="hidden min-w-0 flex-1 lg:block"
            >
              <div className="mx-auto flex w-fit max-w-full items-center justify-center gap-0.5 rounded-full border border-[#E8EDDF] bg-[#FAFCF7] p-1 xl:gap-1 xl:p-1.5">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    className={desktopLinkClass}
                    aria-current={
                      isActive(item.path) ? "page" : undefined
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </nav>

            {/* CONSULTATION BUTTON */}
            <Link
              to="/request-demo"
              onClick={closeMenu}
              className="group hidden h-[46px] shrink-0 items-center gap-2 rounded-full border border-[#DCE7CB] bg-[#F8FAF4] py-1 pl-4 pr-1 text-[#45651A] transition-all duration-300 hover:border-[#8BB630] hover:bg-[#EFF5E4] xl:flex 2xl:gap-3 2xl:pl-5"
            >
              <span className="whitespace-nowrap text-[12px] font-bold 2xl:text-[13px]">
                Request a consultation
              </span>

              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8BB630] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={18} strokeWidth={2} />
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="trackowls-mobile-navigation"
              className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E1E8D7] bg-white text-[#526D29] shadow-sm transition hover:border-[#8BB630] hover:bg-[#F2F6EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8BB630] lg:hidden"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE AND TABLET MENU */}
        <div
          id="trackowls-mobile-navigation"
          aria-hidden={!mobileMenuOpen}
          className={[
            "fixed inset-x-0 bottom-0 z-[1001] overflow-y-auto",
            "border-t border-[#E3EAD8] bg-white shadow-[0_16px_35px_rgba(50,70,25,0.12)]",
            "transition-[transform,opacity,visibility] duration-200 ease-out lg:hidden",
            mobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none",
          ].join(" ")}
          style={{
            top: "84px",
            maxHeight: "calc(100dvh - 84px)",
          }}
        >
          <div className="mx-auto flex min-h-full w-full max-w-[700px] flex-col px-4 pb-6 pt-5 sm:px-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#E9EDE3] pb-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#63851E]">
                  Explore TrackOwls
                </p>
                <p className="mt-1.5 text-xs text-[#777D6E]">
                  Scan · Detect · Remove · Protect
                </p>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                tabIndex={mobileMenuOpen ? 0 : -1}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E9DC] bg-white text-[#526D29] transition hover:bg-[#F2F6EA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8BB630]"
              >
                <X size={18} />
              </button>
            </div>

            <nav
              aria-label="Tablet and mobile navigation"
              className="flex flex-col"
            >
              {navItems.map((item, index) => {
                const active = isActive(item.path);

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    onClick={closeMenu}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className={mobileLinkClass(active)}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={[
                          "w-5 text-[10px] font-bold tracking-wider",
                          active ? "text-[#63851E]" : "text-[#A0A697]",
                        ].join(" ")}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.name}</span>
                    </span>

                    <ArrowUpRight
                      size={17}
                      className={active ? "text-[#63851E]" : "text-[#969C8B]"}
                    />
                  </NavLink>
                );
              })}
            </nav>

            {/* MOBILE CONSULTATION BUTTON */}
            <Link
              to="/request-demo"
              onClick={closeMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="group mt-4 flex min-h-[52px] w-full items-center justify-between gap-3 rounded-full border border-[#DCE7CB] bg-[#F5F8EF] py-1 pl-5 pr-1 text-[#45651A] transition hover:bg-[#EDF4E0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8BB630] focus-visible:ring-offset-2"
            >
              <span className="text-sm font-bold">
                Request a consultation
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8BB630] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={19} />
              </span>
            </Link>

            <p className="mt-4 text-center text-[10px] font-medium tracking-wide text-[#858B7D]">
              Protecting your digital content and intellectual property
            </p>
          </div>
        </div>
      </header>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with TrackOwls on WhatsApp"
        className="group fixed bottom-5 right-4 z-[1050] flex h-[49px] items-center gap-2 rounded-full border border-[#E2E9D9] bg-white py-1 pl-1 pr-3 text-[#455C29] shadow-[0_5px_20px_rgba(50,70,25,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8BB630] sm:bottom-6 sm:right-6 sm:h-[54px] sm:gap-3 sm:pr-4"
      >
        <span className="relative flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-full bg-[#8BB630] text-white sm:h-[44px] sm:w-[44px]">
          <MessageCircle size={22} />
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#25D366]" />
        </span>

        <span className="flex flex-col leading-tight">
          <span className="text-xs font-bold text-[#455C29]">
            Let&apos;s talk
          </span>
          <span className="mt-1 text-[10px] text-[#777D70]">
            Chat on WhatsApp
          </span>
        </span>

        <ArrowUpRight
          size={16}
          className="text-[#63851E] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>

      {/* SCROLL TO TOP */}
      <button
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          closeMenu();
        }}
        aria-label="Scroll to top"
        tabIndex={showScrollTop ? 0 : -1}
        className={[
          "fixed bottom-[80px] right-4 z-[1050] flex h-10 w-10 items-center justify-center",
          "rounded-full border border-[#E1E8D7] bg-white text-[#526D29] shadow-md",
          "transition-all duration-300 hover:border-[#8BB630] hover:bg-[#F0F5E7]",
          "sm:bottom-[91px] sm:right-6",
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        ].join(" ")}
      >
        <ArrowUp size={18} />
      </button>

      {/* LOGO AND ACCESSIBILITY STYLES */}
      <style>{`
        .trackowls-logo-holder,
        .trackowls-logo-holder > a,
        .trackowls-logo-holder > div {
          width: 100%;
          height: 100%;
          min-width: 0;
        }

        .trackowls-logo-holder img,
        .trackowls-logo-holder video {
          display: block;
          width: 100%;
          height: 100%;
          max-width: 100%;
          object-fit: contain;
          object-position: left center;
        }

        @media (prefers-reduced-motion: reduce) {
          header *,
          header a,
          header button {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}
