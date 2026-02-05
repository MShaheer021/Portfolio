import React from "react";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Muhammad Shaheer. All rights reserved.</p>
        <p className="text-slate-500">Built with React + Tailwind + Framer Motion</p>
      </div>
    </footer>
  );
}
