
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const BRAND = "#8BB630";

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    ["Home", "home"],
    ["How it works", "how-it-works"],
    ["About", "about"],
    ["Services", "services"],
    ["Monitoring Tools", "monitoring-tools"],
    ["Plans", "plans"],
    ["Contact", "contact"],
  ];

  const protectionLinks = [
    ["Live Streaming Protection", "/services"],
    ["OTT & VOD Protection", "/industries"],
    ["Website & App Monitoring", "/platform"],
    ["Copyright Enforcement", "/services"],
    ["Brand Protection", "/services"],
    ["Piracy Intelligence", "/platform"],
    ["Marketplace & Counterfeit Monitoring", "/industries"],
    ["Domain & Impersonation Monitoring", "/services"],
    ["Social Media & Video Protection", "/platform"],
  ];

  const companyLinks = [
    ["About", "/about"],
    ["Leadership", "/about"],
    ["Team", "/about"],
    ["News", "/insights"],
    ["Blog", "/insights"],
    ["How it works", "/how-it-works"],
    ["Case studies", "/insights"],
    ["Insights", "/insights"],
    ["FAQs", "/#home-faq"],
    ["Technology", "/platform"],
    ["Careers", "/contact"],
    ["Contact", "/contact"],
  ];

  const informationLinks = [
    ["Privacy", "/privacy-policy"],
    ["Terms", "/terms"],
    ["Cookies", "/privacy-policy"],
    ["Copyright reporting", "/services"],
    ["Content editor", "/contact"],
  ];

  const socialLinks = [
    { label: "LinkedIn", icon: "in", href: "#" },
    { label: "Instagram", icon: "◎", href: "#" },
    { label: "X", icon: "𝕏", href: "#" },
    { label: "Facebook", icon: "f", href: "#" },
  ];

  const handleQuickLink = (section) => {
    if (section === "contact") {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollToSection = () => {
      const element = document.getElementById(section);

      if (!element) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const navbarOffset = 90;
      const elementPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");

      window.setTimeout(() => {
        scrollToSection();
      }, 250);
    } else {
      scrollToSection();
    }
  };

  const FooterLink = ({ to, children }) => (
    <Link
      to={to}
      className="group inline-flex w-fit items-center gap-1 text-[11px] leading-[1.5] text-[#74836c] transition-colors duration-200 hover:text-[#648c22] sm:text-[12px]"
    >
      <span>{children}</span>
    </Link>
  );

  const FooterColumn = ({ title, links }) => (
    <div className="min-w-0">
      <h3 className="mb-4 text-[11px] font-semibold text-[#526747] sm:text-[12px]">
        {title}
      </h3>

      <ul className="m-0 list-none space-y-2.5 p-0">
        {links.map(([label, to]) => (
          <li key={`${label}-${to}`}>
            <FooterLink to={to}>{label}</FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="relative w-full overflow-hidden border-t border-[#dce7d3] bg-[#f3f8ee] font-['Roboto',sans-serif]">
      {/* Soft brand background */}
      <div className="pointer-events-none absolute -left-40 top-0 h-72 w-72 rounded-full bg-[#8BB630]/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#8BB630]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-10 xl:px-12">
        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-10 py-10 sm:py-12 lg:grid-cols-[1.4fr_1fr_0.85fr_0.8fr] lg:gap-10 lg:py-12 xl:gap-14">
          {/* BRAND COLUMN */}
          <div className="min-w-0">
            <Link
              to="/"
              aria-label="TrackOwls Home"
              className="group relative inline-flex items-center"
            >
              <div className="relative flex h-[66px] w-[230px] items-center sm:h-[72px] sm:w-[250px]">
                <video
                  src="/logo-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-hidden="true"
                  className="h-full w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <p className="mt-3 max-w-[270px] text-[11px] leading-[1.9] text-[#788772] sm:text-[12px]">
              Digital anti-piracy, content protection and brand enforcement.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {["Scan", "Detect", "Remove", "Protect"].map(
                (item, index) => (
                  <React.Fragment key={item}>
                    <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6e922c]">
                      {item}
                    </span>

                    {index !== 3 && (
                      <span className="text-[#a8b69b]">|</span>
                    )}
                  </React.Fragment>
                ),
              )}
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6e3cb] bg-white/80 text-[11px] font-bold text-[#718467] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8BB630] hover:bg-[#8BB630] hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* PROTECTION COLUMN */}
          <FooterColumn title="Protection" links={protectionLinks} />

          {/* COMPANY COLUMN */}
          <FooterColumn title="Company" links={companyLinks} />

          {/* INFORMATION COLUMN */}
          <FooterColumn title="Information" links={informationLinks} />
        </div>

        {/* OPTIONAL CONTACT STRIP */}
        <div className="grid grid-cols-1 gap-4 border-t border-[#dce7d3] py-5 sm:grid-cols-3 sm:gap-5">
          <a
            href="mailto:contact@trackowls.com"
            className="group flex min-w-0 items-center gap-3 text-[#788772] transition-colors hover:text-[#648c22]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#dce7d3] bg-white text-[#789b3b]">
              <Mail size={14} strokeWidth={1.7} />
            </span>

            <span className="min-w-0">
              <span className="block text-[9px] uppercase tracking-[0.12em] text-[#93a08a]">
                Email
              </span>
              <span className="mt-1 block break-all text-[11px]">
                contact@trackowls.com
              </span>
            </span>

            <ArrowUpRight
              size={13}
              className="ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </a>

          <a
            href="tel:+919XXXXXXXXX"
            className="group flex min-w-0 items-center gap-3 text-[#788772] transition-colors hover:text-[#648c22]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#dce7d3] bg-white text-[#789b3b]">
              <Phone size={14} strokeWidth={1.7} />
            </span>

            <span className="min-w-0">
              <span className="block text-[9px] uppercase tracking-[0.12em] text-[#93a08a]">
                Phone
              </span>
              <span className="mt-1 block text-[11px]">
                +91 XXXXX XXXXX
              </span>
            </span>

            <ArrowUpRight
              size={13}
              className="ml-auto shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </a>

          <div className="flex min-w-0 items-center gap-3 text-[#788772]">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#dce7d3] bg-white text-[#789b3b]">
              <MapPin size={14} strokeWidth={1.7} />
            </span>

            <span className="min-w-0">
              <span className="block text-[9px] uppercase tracking-[0.12em] text-[#93a08a]">
                Office
              </span>
              <span className="mt-1 block text-[11px] leading-[1.7]">
                Coimbatore, Tamil Nadu, India
              </span>
            </span>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-4 border-t border-[#dce7d3] py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="m-0 text-[10px] leading-5 text-[#87947f]">
              © {currentYear} TrackOwls Anti-Piracy Private Limited. All rights
              reserved.
            </p>

            <p className="mb-0 mt-1 text-[9px] text-[#97a28f]">
              Powered by{" "}
              <span className="font-semibold text-[#6e922c]">
                MK Dynamic Technology
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-[10px] text-[#87947f] transition-colors hover:text-[#648c22]"
            >
              Privacy Policy
            </Link>

            <span className="h-3 w-px bg-[#d6e3cb]" />

            <Link
              to="/terms"
              className="text-[10px] text-[#87947f] transition-colors hover:text-[#648c22]"
            >
              Terms & Conditions
            </Link>

            <span className="h-3 w-px bg-[#d6e3cb]" />

            <Link
              to="/sitemap"
              className="text-[10px] text-[#87947f] transition-colors hover:text-[#648c22]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* BRAND ACCENT */}
      <div className="h-[3px] w-full bg-[#8BB630]" />
    </footer>
  );
}

export default Footer;
