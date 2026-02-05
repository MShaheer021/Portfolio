import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiUser, FiCode, FiTarget, FiAward } from "react-icons/fi";

const StatCard = ({ icon: Icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, scale: 1.05 }}
    className="group relative overflow-hidden rounded-2xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-6 transition-all duration-300 dark:hover:border-blue-500/50 hover:border-blue-400/50"
  >
    {/* Gradient overlay on hover */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute inset-0 dark:bg-linear-to-br dark:from-blue-600/10 dark:to-indigo-600/10 from-blue-400/10 to-indigo-400/10 pointer-events-none"
    />
    
    <div className="relative z-10">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-4xl dark:text-blue-400 text-blue-600 mb-3 group-hover:scale-110 transition-transform"
      >
        <Icon />
      </motion.div>
      <p className="dark:text-slate-400 text-slate-600 text-sm mb-1">{label}</p>
      <p className="dark:text-white text-slate-900 text-2xl font-bold">{value}</p>
    </div>
  </motion.div>
);

StatCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

export default function About() {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 -right-40 w-80 h-80 dark:bg-indigo-500/10 bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <SectionTitle
        eyebrow="About"
        title="A bit about me"
        subtitle="I focus on clean UI, strong responsiveness, and smooth user interactions."
      />

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
      >
        <StatCard delay={0} icon={FiCode} label="Projects" value="5+" />
        <StatCard delay={0.1} icon={FiTarget} label="Focus" value="UI/UX" />
        <StatCard delay={0.2} icon={FiAward} label="Exp." value="2+ yrs" />
        <StatCard delay={0.3} icon={FiUser} label="Role" value="Frontend" />
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {/* About Text - Larger */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-2 group relative overflow-hidden rounded-3xl dark:bg-slate-800/30 bg-slate-100/30 dark:border-slate-700/40 border-slate-300/40 border backdrop-blur-xl p-8 transition-all duration-300"
        >
          {/* Gradient border on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 dark:bg-linear-to-r dark:from-blue-600/0 dark:via-blue-600/10 dark:to-indigo-600/0 from-blue-400/0 via-blue-400/10 to-indigo-400/0 pointer-events-none rounded-3xl"
          />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="dark:text-slate-300 text-slate-700 leading-relaxed text-lg"
            >
              {portfolioData.summary}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 dark:text-slate-400 text-slate-600 leading-relaxed"
            >
              I enjoy turning designs into real products, keeping UX smooth, and
              ensuring websites look great on every screen size. My approach combines
              technical expertise with creative problem-solving.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 dark:text-slate-400 text-slate-600 leading-relaxed"
            >
              When I&apos;m not coding, I&apos;m learning new technologies, exploring design trends,
              and contributing to open-source projects.
            </motion.p>
          </div>
        </motion.div>

        {/* Details Card */}
        <motion.div
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl dark:bg-slate-800/30 bg-slate-100/30 dark:border-slate-700/40 border-slate-300/40 border backdrop-blur-xl p-8 transition-all duration-300"
        >
          {/* Gradient overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 dark:bg-linear-to-br dark:from-blue-600/0 dark:to-indigo-600/10 from-blue-400/0 to-indigo-400/10 pointer-events-none rounded-3xl"
          />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="dark:text-slate-400 text-slate-600 text-xs uppercase tracking-[0.25em] font-semibold mb-6"
            >
              ℹ️ Details
            </motion.p>
            <div className="space-y-4">
              {[
                { label: "Name", value: portfolioData.name },
                { label: "Role", value: portfolioData.role },
                { label: "Email", value: portfolioData.email },
                { label: "Phone", value: portfolioData.phone },
                { label: "Location", value: portfolioData.locationNote },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="flex justify-between items-center gap-3 pb-3 border-b dark:border-slate-700/50 border-slate-300/30 last:border-0 last:pb-0 group/item hover:dark:text-blue-400 hover:text-blue-600 transition-colors"
                >
                  <span className="dark:text-slate-500 text-slate-600 text-sm font-medium">
                    {item.label}
                  </span>
                  <span className="dark:text-slate-200 text-slate-800 text-sm font-semibold truncate group-hover/item:text-blue-500">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
