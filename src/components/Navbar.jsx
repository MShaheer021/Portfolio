import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Education", to: "education" },
  { label: "Projects", to: "projects" },
  { label: "Creative", to: "creative" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 dark:border-white/10 border-slate-300/20 dark:backdrop-blur dark:bg-slate-950/60 backdrop-blur bg-white/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="font-semibold tracking-wide">
          <span className="dark:text-white text-slate-900">Shaheer</span>
          <span className="dark:text-slate-400 text-slate-500">.dev</span>
        </div>

        <nav className="hidden lg:flex items-center gap-4 text-sm dark:text-slate-300 text-slate-700">
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer dark:hover:text-white hover:text-slate-900 transition"
            >
              {item.label}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* ✅ Resume Download */}
          <a
            href={portfolioData.resumeUrl}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-xl dark:border-white/10 border-slate-300/40 px-3 py-2 text-sm dark:text-slate-200 text-slate-700 dark:hover:bg-white/5 hover:bg-slate-900/5 transition border"
          >
            <FiDownload />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
