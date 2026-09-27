import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiMail, FiPhone, FiArrowRight, FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiGit,
  SiFigma,
  SiMui,
} from "react-icons/si";

const FloatingCard = ({ delay = 0, icon: Icon, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -12, scale: 1.08 }}
    className="flex flex-col items-center gap-2 p-4 rounded-2xl 
      dark:bg-slate-800/40 dark:border-slate-700/50 dark:text-slate-200
      bg-slate-100/60 border-slate-300/40 text-slate-700
      border backdrop-blur-md dark:hover:border-blue-500/50 hover:border-blue-400/50
      dark:hover:bg-slate-700/40 hover:bg-slate-200/60 transition-all shadow-lg"
  >
    <Icon className="text-3xl dark:text-blue-400 text-blue-600" />
    <span className="text-xs font-semibold dark:text-slate-300 text-slate-600">{label}</span>
  </motion.div>
);

FloatingCard.propTypes = {
  delay: PropTypes.number,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

// Floating particles background
const FloatingParticles = () => (
  <div className="absolute inset-0 -z-20 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.sin(i) * 20, 0],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 6 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute w-2 h-2 rounded-full dark:bg-blue-400/40 bg-blue-500/40 blur-sm`}
        style={{
          left: `${20 + i * 15}%`,
          top: `${30 + i * 10}%`,
        }}
      />
    ))}
  </div>
);

const AnimatedAvatar = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative w-72 h-72 mx-auto"
  >
    {/* Animated outer ring */}
    <motion.div
      animate={{ rotate: 360, scale: [1, 1.02, 1] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full dark:border-blue-500/30 border-blue-400/40 border-2"
    />
    
    {/* Middle ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute inset-6 rounded-full dark:border-indigo-500/20 border-indigo-400/30 border"
    />

    {/* Inner gradient circle */}
    <motion.div
      animate={{ opacity: [0.6, 0.8, 0.6] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute inset-0 rounded-full dark:bg-linear-to-br dark:from-blue-600/20 dark:to-indigo-900/20 
        from-blue-400/20 to-indigo-600/20 flex items-center justify-center"
    >
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="text-7xl filter drop-shadow-lg"
      >
        👨‍💻
      </motion.div>
    </motion.div>

    {/* Orbiting tech icons */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0"
    >
      {[
        { angle: 0, icon: SiReact, colorClass: "blue" },
        { angle: 120, icon: SiTailwindcss, colorClass: "cyan" },
        { angle: 240, icon: SiJavascript, colorClass: "yellow" },
      ].map((item, idx) => {
        const rad = (item.angle * Math.PI) / 180;
        const x = 120 * Math.cos(rad);
        const y = 120 * Math.sin(rad);
        const Icon = item.icon;
        
        return (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.25 }}
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              backgroundColor: item.colorClass === "blue" ? "rgba(59, 130, 246, 0.2)" : 
                               item.colorClass === "cyan" ? "rgba(34, 211, 238, 0.2)" : 
                               "rgba(234, 179, 8, 0.2)",
              borderColor: item.colorClass === "blue" ? "rgba(59, 130, 246, 0.4)" : 
                          item.colorClass === "cyan" ? "rgba(34, 211, 238, 0.4)" : 
                          "rgba(234, 179, 8, 0.4)",
            }}
            className="absolute p-3 rounded-full border backdrop-blur-md cursor-pointer
              transition-all shadow-lg"
          >
            <Icon 
              className="text-2xl" 
              style={{
                color: item.colorClass === "blue" ? "rgb(96, 165, 250)" : 
                        item.colorClass === "cyan" ? "rgb(34, 211, 238)" : 
                        "rgb(202, 138, 4)",
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  </motion.div>
);

export default function Hero() {
  return (
    <section id="home" className="pt-20 sm:pt-28 pb-16 relative overflow-hidden dark:text-white text-slate-900">
      <FloatingParticles />
      
      {/* Animated background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 -right-32 w-96 h-96 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-32 -left-32 w-96 h-96 dark:bg-indigo-500/10 bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Role Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full
              dark:bg-blue-600/20 dark:border dark:border-blue-500/40 dark:text-blue-300
              bg-blue-400/20 border border-blue-500/40 text-blue-700
              backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full dark:bg-blue-400 bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 dark:bg-blue-500 bg-blue-700"></span>
            </span>
            {portfolioData.role}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Hi, I&apos;m{" "}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="dark:bg-linear-to-r dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400
                from-blue-600 via-indigo-600 to-purple-600
                bg-clip-text text-transparent"
            >
              {portfolioData.name.split(" ")[1]}
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="dark:text-slate-300 text-slate-700"
            >
              I build responsive web interfaces
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg dark:text-slate-400 text-slate-600 max-w-xl leading-relaxed"
          >
            {portfolioData.summary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group rounded-2xl dark:bg-blue-600 bg-blue-500 text-white
                px-8 py-4 text-base font-semibold flex items-center justify-center gap-2
                dark:hover:bg-blue-700 hover:bg-blue-600 transition-all shadow-lg
                dark:shadow-blue-600/30 shadow-blue-500/30"
            >
              View My Work
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FiArrowRight />
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-2xl dark:border-slate-600 border-slate-400
                dark:bg-white/5 bg-slate-900/5 px-8 py-4 text-base font-semibold
                dark:text-white text-slate-900 dark:hover:bg-white/10 hover:bg-slate-900/10
                backdrop-blur-sm transition-all border"
            >
              Let&apos;s Talk
            </motion.a>
          </motion.div>

          <a href={portfolioData.githubUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
            <FiGithub /> Explore my GitHub
          </a>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-col xl:flex-row gap-4 text-sm"
          >
            <motion.a
              href={`mailto:${portfolioData.email}`}
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 dark:text-slate-300 text-slate-700
                dark:hover:text-blue-400 hover:text-blue-600 transition-colors group"
            >
              <div className="p-3 rounded-xl dark:bg-blue-600/20 bg-blue-400/20 dark:group-hover:bg-blue-600/40 group-hover:bg-blue-400/40 transition-all">
                <FiMail className="text-xl" />
              </div>
              <span>{portfolioData.email}</span>
            </motion.a>
            <motion.a
              href={`tel:${portfolioData.phone}`}
              whileHover={{ x: 6 }}
              className="flex items-center gap-3 dark:text-slate-300 text-slate-700
                dark:hover:text-blue-400 hover:text-blue-600 transition-colors group"
            >
              <div className="p-3 rounded-xl dark:bg-blue-600/20 bg-blue-400/20 dark:group-hover:bg-blue-600/40 group-hover:bg-blue-400/40 transition-all">
                <FiPhone className="text-xl" />
              </div>
              <span>{portfolioData.phone}</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-8"
        >
          {/* Avatar Section */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-8 shadow-2xl
              dark:shadow-blue-900/20 shadow-blue-500/10"
          >
            <AnimatedAvatar />
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl dark:bg-slate-800/30 bg-slate-100/30 dark:border-slate-700/40 border-slate-300/40 
              border backdrop-blur-xl p-6 shadow-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="dark:text-slate-400 text-slate-600 text-xs uppercase tracking-[0.25em] font-semibold mb-5"
            >
              💫 Tech Stack
            </motion.p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <FloatingCard delay={0} icon={SiReact} label="React" />
              <FloatingCard delay={0.1} icon={SiTailwindcss} label="Tailwind" />
              <FloatingCard delay={0.2} icon={SiJavascript} label="JavaScript" />
              <FloatingCard delay={0.3} icon={SiGit} label="Git" />
              <FloatingCard delay={0.4} icon={SiFigma} label="Figma" />
              <FloatingCard delay={0.5} icon={SiMui} label="Material UI" />
            </div>

            <motion.a
              href={portfolioData.resumeUrl}
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 rounded-xl 
                dark:bg-linear-to-r dark:from-blue-600 dark:to-indigo-600
                from-blue-500 to-indigo-500
                px-5 py-3 text-sm font-semibold text-white
                dark:hover:shadow-lg dark:hover:shadow-blue-600/40 
                hover:shadow-lg hover:shadow-blue-500/30
                transition-all backdrop-blur-sm"
            >
              ⬇️ Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
