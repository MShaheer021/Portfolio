import React from "react";
import SectionTitle from "../components/SectionTitle";
import Timeline from "../components/Timeline";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 -left-40 w-80 h-80 dark:bg-purple-500/10 bg-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 -right-40 w-96 h-96 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 dark:bg-indigo-500/10 bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <SectionTitle
        eyebrow="Education"
        title="Academic background"
        subtitle="My educational journey and learning experience."
      />

      <Timeline
        items={portfolioData.education}
        renderTitle={(ed) => (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-4"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-3xl"
            >
              🎓
            </motion.span>
            <div className="flex flex-col">
              <span className="font-bold dark:text-white text-slate-900 text-lg">{ed.institute}</span>
              <span className="dark:text-slate-400 text-slate-600 text-sm mt-1 font-medium">{ed.degree}</span>
            </div>
          </motion.div>
        )}
        renderMeta={(ed) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="dark:bg-slate-700/40 bg-slate-200/40 dark:border-slate-600/50 border-slate-400/50 border rounded-lg px-3 py-1 text-sm font-semibold dark:text-blue-300 text-blue-700 backdrop-blur-sm"
          >
            📅 {ed.years}
          </motion.div>
        )}
        renderBody={(ed) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <div className="flex items-start gap-3">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="dark:text-green-400 text-green-600 text-xl mt-0.5 shrink-0"
              >
                ✓
              </motion.span>
              <p className="dark:text-slate-300 text-slate-700 font-medium">{ed.degree}</p>
            </div>
            {ed.details && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="ml-8 dark:text-slate-400 text-slate-600 text-sm"
              >
                {ed.details}
              </motion.div>
            )}
          </motion.div>
        )}
      />

      <div className="mt-12">
        <SectionTitle eyebrow="Training" title="Professional training" subtitle="Focused learning in web development." />
        <Timeline
          items={portfolioData.training}
          renderTitle={(course) => course.degree}
          renderMeta={(course) => course.years}
          renderBody={(course) => <p>{course.institute}</p>}
        />
      </div>
    </section>
  );
}
