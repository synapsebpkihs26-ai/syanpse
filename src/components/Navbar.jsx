import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container.jsx";

// ✅ IMPORT LOGO
import bpkihsLogo from "../assets/bpkihs-logo.jpeg";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Registration", to: "/registration" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      {/* Background layers */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ember-600/30 via-ember-400/25 to-plasma/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 border-b border-white/10 bg-black/50"
        aria-hidden
      />

      <Container className="relative flex items-center justify-between py-4">
        {/* LOGO + TITLE */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-2 ring-amber-300/30 shadow-ember bg-black/20">
            <img
              src={bpkihsLogo}
              alt="BPKIHS Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Synapse 2026
            </p>
            <p className="text-lg font-black text-white">BPKIHS</p>
            <p className="text-xs text-white/60">
              Students Welfare Society
            </p>
          </div>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 rounded-full bg-white/5 px-2 py-1 ring-1 ring-white/10 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-ember-400 via-amber-300 to-magenta" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/registration"
            className="ml-1 rounded-full bg-gradient-to-r from-ember-500 via-ember-400 to-magenta px-4 py-2 text-sm font-bold text-black shadow-ember ring-2 ring-amber-200/60 transition hover:scale-[1.02]"
          >
            Registration
          </Link>
        </nav>
      </Container>

      {/* MOBILE NAV */}
      {open && (
        <div className="border-t border-white/10 bg-black/80 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-2 py-2">
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-gradient-to-r from-ember-600/40 to-plasma/30 text-white"
                      : "text-white/80 hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/registration"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-gradient-to-r from-ember-500 via-ember-400 to-magenta px-4 py-3 text-center text-sm font-bold text-black shadow-ember ring-1 ring-amber-200/60"
            >
              Registration
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
