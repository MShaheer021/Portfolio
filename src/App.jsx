import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./Sections/Hero.jsx";
import About from "./Sections/About.jsx";
import Skills from "./Sections/Skills.jsx";
import Experience from "./Sections/Experience.jsx";
import Education from "./Sections/Education.jsx";
import Projects from "./Sections/Projects.jsx";
import Contact from "./Sections/Contact.jsx";
import Blog from "./Sections/Blog.jsx";


export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const bg = useMemo(
    () =>
      "bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900",
    []
  );

  return (
    <div className={`min-h-screen ${bg} text-slate-100 dark:text-slate-100`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
