import React from "react";
import SectionTitle from "../components/SectionTitle";
import Timeline from "../components/Timeline";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 -right-40 w-80 h-80 dark:bg-indigo-500/10 bg-indigo-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 -left-40 w-96 h-96 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-3xl"
        />
      </div>

      <SectionTitle
        eyebrow="Experience"
        title="Work & project experience"
        subtitle="My current final-year project and professional internship experience."
      />

      <Timeline
        items={portfolioData.experience}
        renderTitle={(job) => (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 w-full">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💼</span>
              <div className="flex flex-col">
                <span className="font-bold dark:text-white text-slate-900 text-lg">{job.title}</span>
                <span className="dark:text-slate-400 text-slate-600 text-sm">{job.company}</span>
                {job.live && (
                  <a
                    href={job.live}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit Jaiza ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        renderMeta={(job) => job.year}
        renderBody={(job) => job.points}
      />

      {/* Experience Stats */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 grid md:grid-cols-2 gap-6"
      >
        {[
          { icon: "🎯", label: "Role", value: "Front-End Developer" },
          { icon: "🚀", label: "Current Project", value: "Jaiza · Final Year Project" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ y: -8, scale: 1.05 }}
            className="group relative overflow-hidden rounded-2xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-6 text-center transition-all duration-300"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 dark:bg-linear-to-br dark:from-blue-600/10 dark:to-indigo-600/10 from-blue-400/10 to-indigo-400/10 pointer-events-none rounded-2xl"
            />
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl mb-3"
              >
                {stat.icon}
              </motion.div>
              <p className="dark:text-slate-400 text-slate-600 text-sm mb-1">{stat.label}</p>
              <p className="dark:text-white text-slate-900 text-xl font-bold">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
