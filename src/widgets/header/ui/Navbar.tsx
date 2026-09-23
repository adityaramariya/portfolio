"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

// const PHONE_NUMBER = "+91 90399 74554";
// const PHONE_LINK = "+919039974554";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      // At the top / hero section
      if (window.scrollY < 300) {
        setActiveSection(null);
        return;
      }

      let currentSection: string | null = null;

      for (const item of navItems) {
        const section = document.querySelector(item.href);

        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;

          if (scrollPosition >= sectionTop) {
            currentSection = item.href.slice(1);
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-gray-950/90 shadow-lg backdrop-blur-xl"
          : "bg-gray-950/30 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        {/* =========================
            BRAND + EXPERIENCE
        ========================== */}
        <div className="flex items-center gap-5">
          {/* Logo / Name */}
          <a
            href="#"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-indigo-500/20">
              AR
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white">Aditya Ramariya</p>

              <p className="text-[11px] text-gray-500">
                Senior Frontend Developer
              </p>
            </div>
          </a>

          <div className="items-center gap-5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 xl:flex">
            {/* Experience */}
            <div className="flex items-center gap-2.5 hidden xl:flex">
              <span className="h-2 w-2 rounded-full bg-blue-400" />

              <span className="whitespace-nowrap text-xs font-semibold text-gray-300">
                8+ Years Experience
              </span>
            </div>

            {/* Divider */}
            <span className="h-4 w-px bg-white/10" />

            {/* Availability */}
            <div className="flex items-center gap-2.5 ">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="whitespace-nowrap text-xs font-semibold text-gray-300">
                Open to new opportunities
              </span>
            </div>
          </div>
        </div>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400 to-cyan-400" />
                )}
              </a>
            );
          })}
        </nav>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-white transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full bg-white transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
          <div className="flex flex-col">
            {/* Experience */}
            <div className="mb-2 flex items-center gap-2 border-b border-white/5 py-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-sm font-medium text-gray-400">
                8+ Years Experience
              </span>
            </div>

            {/* Navigation */}
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between border-b border-white/5 py-4 text-base font-medium transition-colors ${
                    isActive ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    // <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                    <span className="h-1.5 w-1.5 rounded-full  bg-gradient-to-r from-indigo-400 to-cyan-400" />
                  )}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
