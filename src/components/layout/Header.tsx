import { useCallback, useEffect, useState } from "react";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "الوجهات", href: "#destinations" },
  { label: "البرامج السياحية", href: "#programs" },
  { label: "أراء العملاء", href: "#testimonials" },
  { label: "كيفية الحجز", href: "#how-to-book" },
];

/** Returns the id of whichever section is currently most in view. */
function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const existing = sectionIds.filter((id) => document.getElementById(id));
    if (existing.length === 0) {
      setActiveId(sectionIds[0] ?? "");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    existing.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) setActiveId(sectionIds[0]);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return activeId;
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 20L22 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 6H21M3 12H21M3 18H21"
        stroke="#121212"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="#121212"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const activeId = useActiveSection(sectionIds);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      window.history.pushState(null, "", href);
      setIsMobileMenuOpen(false);
    },
    [],
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#F7FAFC] shadow-sm" : "bg-white"
      }`}
    >
      {/* Desktop Header */}
      <nav className="hidden lg:flex items-center justify-between h-20 container">
        {/* Right side: Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="shrink-0"
        >
          <img
            src={logo}
            alt="الفخامة للسياحة"
            className="w-20 h-20 object-contain"
          />
        </a>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative flex flex-col items-center gap-2 text-lg leading-none transition-colors duration-200 ${
                  active
                    ? "font-semibold text-[#0478AF]"
                    : "font-medium text-[#121212] hover:text-[#0478AF]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="w-10 h-1 bg-[#0478AF] rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Left side: CTA + Search */}
        <div className="flex items-center gap-6">
          <button
            className="flex items-center justify-center rounded-full border border-[#0478AF] w-14 h-14 text-[#0478AF] hover:bg-[#0478AF] hover:text-white transition-colors duration-200"
            aria-label="بحث"
          >
            <SearchIcon className="w-6 h-6" />
          </button>
          <a
            href="#book"
            onClick={(e) => handleNavClick(e, "#book")}
            className="flex items-center justify-center bg-[#0478AF] text-white font-semibold text-lg rounded-full w-[205px] h-14 hover:bg-[#00567E] transition-colors duration-200"
          >
            احجز الآن
          </a>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav className="lg:hidden flex items-center justify-between h-[68px] px-4">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="shrink-0"
        >
          <img
            src={logo}
            alt="الفخامة للسياحة"
            className="w-12 h-12 object-contain"
          />
        </a>

        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center rounded-full border border-[#0478AF] w-10 h-10 text-[#0478AF]"
            aria-label="بحث"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center w-10 h-10"
            aria-label={isMobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[68px] bg-black/30 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-[68px] right-0 w-[85vw] max-w-[320px] h-[calc(100vh-68px)] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col py-4 gap-0">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeId === id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-4! px-6! text-[15px] border-b border-gray-50 transition-colors duration-200 ${
                  active
                    ? "font-semibold text-[#0478AF] bg-[#ECF7FF] border-[#ECF7FF]"
                    : "font-medium text-[#121212] hover:bg-[#F7FAFC]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="p-6!">
            <a
              href="#book"
              onClick={(e) => handleNavClick(e, "#book")}
              className="flex items-center justify-center bg-[#0478AF] text-white font-semibold text-[15px] rounded-full h-12 hover:bg-[#00567E] transition-colors duration-200 w-full"
            >
              احجز الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
