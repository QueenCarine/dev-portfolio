"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", ids: ["home"] },
  { label: "About", ids: ["about", "about-more"] },
  { label: "Skills", ids: ["skills"] },
  { label: "Projects", ids: ["projects"] },
  { label: "Education", ids: ["educate"] },
  { label: "Contact", ids: ["contact"] },
];

const PAGE_BG = "#0d151d";
const BRIDGERTON_BLUE = "#1a538c";

const PILL_STYLE = {
  backgroundColor: "white",
  borderColor: "#243342",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25)",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const lockRef = useRef(false);
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const entries = navLinks.flatMap((link) =>
      link.ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .map((el) => ({ el, label: link.label }))
    );

    if (entries.length === 0) return;

    const handleScroll = () => {
      if (lockRef.current) {
        if (idleRef.current) clearTimeout(idleRef.current);
        idleRef.current = setTimeout(() => {
          lockRef.current = false;
        }, 150);
        return;
      }

      const navbarOffset = 120;

      const sorted = [...entries].sort(
        (a, b) =>
          a.el.getBoundingClientRect().top - b.el.getBoundingClientRect().top
      );

      let current: (typeof entries)[number] | null = null;

      for (const entry of sorted) {
        if (entry.el.getBoundingClientRect().top <= navbarOffset) {
          current = entry;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atBottom) current = sorted[sorted.length - 1];

      setActive(current ? current.label : "");
    };

    const unlock = () => {
      lockRef.current = false;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", unlock, { passive: true });
    window.addEventListener("touchmove", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchmove", unlock);
      window.removeEventListener("keydown", unlock);
      if (idleRef.current) clearTimeout(idleRef.current);
    };
  }, []);

  const handleNavClick = (label: string) => {
    lockRef.current = true;
    setActive(label);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 flex justify-center px-4 py-4">
      <nav className="relative w-full max-w-fit">
        <ul
          className="hidden items-center gap-1.5 rounded-full border px-3 py-2.5 backdrop-blur-md lg:flex"
          style={PILL_STYLE}
        >
          {navLinks.map((link) => {
            const isActive = active === link.label;
            return (
              <li key={link.label}>
                <a
                  href={`#${link.ids[0]}`}
                  onClick={() => handleNavClick(link.label)}
                  className="block rounded-full px-6 py-2.5 text-base font-medium transition-all duration-300"
                  style={
                    isActive
                      ? {
                          color: "white",
                          backgroundColor: BRIDGERTON_BLUE,
                          boxShadow: "0 4px 12px rgba(26, 83, 140, 0.2)",
                        }
                      : { color: BRIDGERTON_BLUE }
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="lg:hidden">
          <div
            className="flex items-center justify-between gap-6 rounded-full border py-2.5 pl-6 pr-2.5 backdrop-blur-md"
            style={PILL_STYLE}
          >
            <span
              className="text-base font-medium"
              style={{ color: BRIDGERTON_BLUE }}
            >
              Menu
            </span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-150 hover:bg-blue-50 active:bg-blue-100"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? (
                <X size={20} style={{ color: BRIDGERTON_BLUE }} />
              ) : (
                <Menu size={20} style={{ color: BRIDGERTON_BLUE }} />
              )}
            </button>
          </div>

          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-3xl transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: PAGE_BG,
              border: open ? "1px solid #243342" : "0px solid transparent",
              maxHeight: open ? "400px" : "0px",
              opacity: open ? 1 : 0,
            }}
          >
            <ul className="space-y-1 p-2">
              {navLinks.map((link) => {
                const isActive = active === link.label;
                return (
                  <li key={link.label}>
                    <a
                      href={`#${link.ids[0]}`}
                      onClick={() => handleNavClick(link.label)}
                      className="block rounded-full px-4 py-3 text-center text-base font-medium transition-all duration-300"
                      style={{
                        color: "white",
                        backgroundColor: isActive
                          ? BRIDGERTON_BLUE
                          : "transparent",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}