"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Education", href: "#educate" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const PAGE_BG = "#0d151d";
const BRIDGERTON_BLUE = "#1a538c";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (visibleSections.length > 0) {
          const currentSection = visibleSections[0].target as HTMLElement;

          setActive(`#${currentSection.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    const handleScroll = () => {
      const navbarOffset = 120;

      let currentSection = sections[0];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= navbarOffset) {
          currentSection = section;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) {
        currentSection = sections[sections.length - 1];
      }

      setActive(`#${currentSection.id}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

   
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-30 w-full border-b backdrop-blur-md"
      style={{
        backgroundColor: "white",
        borderColor: "#243342",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-5">
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="flex items-center tracking-wide"
        >
          <span
            className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl"
            style={{ color: BRIDGERTON_BLUE }}
          >
            Queen Carine Portfolio
          </span>
        </a>

        <ul className="hidden items-center gap-1.5 md:gap-2 lg:flex xl:gap-3">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-md border px-2.5 py-1.5 text-xs font-medium transition-all duration-300 md:px-3 md:text-sm lg:px-3.5 lg:py-1.5"
                  style={
                    isActive
                      ? {
                          color: "white",
                          backgroundColor: BRIDGERTON_BLUE,
                          borderColor: BRIDGERTON_BLUE,
                          boxShadow: "0 4px 12px rgba(26, 83, 140, 0.2)",
                        }
                      : {
                          color: BRIDGERTON_BLUE,
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-150 hover:bg-blue-50 active:bg-blue-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X size={24} style={{ color: BRIDGERTON_BLUE }} />
          ) : (
            <Menu size={24} style={{ color: BRIDGERTON_BLUE }} />
          )}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className="overflow-hidden border-t transition-all duration-300 ease-in-out lg:hidden"
        style={{
          backgroundColor: PAGE_BG,
          borderColor: "#243342",
          maxHeight: open ? "400px" : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <ul className="space-y-1 px-4 py-3 sm:px-6 sm:py-4">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block rounded-md border px-4 py-3 text-sm font-medium transition-all duration-300 sm:py-2.5"
                  style={
                    isActive
                      ? {
                          color: "white",
                          backgroundColor: BRIDGERTON_BLUE,
                          borderColor: BRIDGERTON_BLUE,
                        }
                      : {
                          color: "white",
                          backgroundColor: "transparent",
                          borderColor: "transparent",
                        }
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
