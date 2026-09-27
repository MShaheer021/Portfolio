import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { portfolioData } from "../data/portfolioData";

export default function Creative() {
  return (
    <section id="creative" className="py-16">
      <SectionTitle eyebrow="Creative Experience" title="Beyond the interface" subtitle="Photography, photoshoots, and basic video editing." />
      <div className="grid md:grid-cols-2 gap-6">
        {portfolioData.creativeExperience.map((item) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-300/40 dark:border-slate-700/50 bg-slate-100/40 dark:bg-slate-800/40 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-700 dark:text-slate-300">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
