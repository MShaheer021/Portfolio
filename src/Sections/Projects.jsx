import React, { useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const FILTERS = ["All", ...new Set(portfolioData.projects.map((project) => project.category))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return portfolioData.projects;
    return portfolioData.projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 -right-40 w-80 h-80 dark:bg-cyan-500/10 bg-cyan-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 -left-40 w-96 h-96 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <SectionTitle
        eyebrow="Projects"
        title="Selected work"
        subtitle="Showcase of my best projects and creative work."
      />

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-wrap gap-3 justify-center sm:justify-start"
      >
        {FILTERS.map((f, idx) => (
          <motion.button
            key={f}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(f)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold border transition-all
              ${active === f
                ? "dark:bg-blue-600 dark:border-blue-500 dark:text-white bg-blue-500 border-blue-400 text-white dark:shadow-lg dark:shadow-blue-600/50 shadow-lg shadow-blue-500/50"
                : "dark:bg-slate-800/40 dark:border-slate-700/50 dark:text-slate-300 bg-slate-100/40 border-slate-300/40 text-slate-700 dark:hover:bg-slate-700/40 hover:bg-slate-200/40"
              }`}
          >
            {f}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((p, idx) => (
          <motion.div
            key={p.title}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: Math.min(idx * 0.08, 0.25) }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-2xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-6 flex flex-col transition-all duration-300 dark:hover:border-blue-500/50 hover:border-blue-400/50"
          >
            {/* Gradient overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 dark:bg-linear-to-br dark:from-blue-600/10 dark:to-indigo-600/10 from-blue-400/10 to-indigo-400/10 pointer-events-none rounded-2xl"
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 + 0.1 }}
                  className="dark:text-white text-slate-900 font-bold text-lg flex-1"
                >
                  {p.title}
                </motion.h3>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 + 0.15 }}
                  className="text-xs rounded-full dark:bg-blue-600/30 dark:border-blue-500/40 dark:text-blue-300 bg-blue-400/30 border-blue-500/40 text-blue-700 px-3 py-1 border font-semibold whitespace-nowrap"
                >
                  {p.category}
                </motion.span>
              </div>

              <p className="mb-3 text-sm text-blue-400">{p.period}</p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 + 0.2 }}
                className="dark:text-slate-300 text-slate-700 flex-1 mb-4"
              >
                {p.desc}
              </motion.p>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 + 0.25 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {p.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs rounded-full dark:bg-slate-700/50 dark:border-slate-600/50 dark:text-slate-200 bg-slate-200/50 border-slate-300/50 text-slate-700 px-3 py-1 border font-medium dark:group-hover:bg-slate-600/50 group-hover:bg-slate-300/50 transition-all"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 + 0.3 }}
                className="flex gap-3 mt-auto"
              >
                {p.live && <motion.a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 rounded-xl dark:bg-blue-600 bg-blue-500 text-white px-4 py-2.5 text-sm font-semibold flex items-center justify-center gap-2 dark:hover:bg-blue-700 hover:bg-blue-600 transition-all"
                >
                  <FiExternalLink size={16} />
                  Visit Project
                </motion.a>}
              </motion.div>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 dark:bg-blue-500/20 bg-blue-400/20 rounded-full blur-2xl group-hover:dark:bg-blue-500/40 group-hover:bg-blue-400/40 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
