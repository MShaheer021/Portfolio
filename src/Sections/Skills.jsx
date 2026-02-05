import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../components/SectionTitle";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { FiZap, FiCheck } from "react-icons/fi";

// Categorized skills
const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: ["React JS", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    name: "Design & Tools",
    icon: "🎭",
    skills: ["Figma", "Canva", "UI/UX Design", "Responsive Design", "Cross-Browser Compatibility"],
  },
  {
    name: "Professional",
    icon: "💼",
    skills: ["Teamwork", "Project Management", "Performance Optimization", "Effective Communication"],
  },
  {
    name: "Other",
    icon: "🚀",
    skills: ["Data Entry", "Git", "Version Control"],
  },
];

const SkillCard = ({ name, icon, skills, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-2xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-6 transition-all duration-300 dark:hover:border-blue-500/50 hover:border-blue-400/50"
  >
    {/* Gradient background on hover */}
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute inset-0 dark:bg-linear-to-br dark:from-blue-600/10 dark:to-indigo-600/10 from-blue-400/10 to-indigo-400/10 pointer-events-none rounded-2xl"
    />

    {/* Category header */}
    <div className="relative z-10 mb-5">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-3xl mb-2"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-bold dark:text-white text-slate-900 flex items-center gap-2">
        {name}
        <FiZap className="text-base dark:text-blue-400 text-blue-600" />
      </h3>
    </div>

    {/* Skills list */}
    <div className="relative z-10 space-y-2">
      {skills.map((skill, idx) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: delay + idx * 0.05 }}
          className="flex items-center gap-2 dark:text-slate-300 text-slate-700 text-sm hover:dark:text-blue-400 hover:text-blue-600 transition-colors group/skill"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + idx * 0.08 }}
            className="dark:text-blue-400 text-blue-600"
          >
            <FiCheck size={16} />
          </motion.div>
          <span className="group-hover/skill:font-semibold transition-all">{skill}</span>
        </motion.div>
      ))}
    </div>

    {/* Corner accent */}
    <div className="absolute -top-4 -right-4 w-20 h-20 dark:bg-blue-500/20 bg-blue-400/20 rounded-full blur-2xl group-hover:dark:bg-blue-500/40 group-hover:bg-blue-400/40 transition-all duration-300" />
  </motion.div>
);

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};

// Animated skill badge for all skills list
const AnimatedSkillBadge = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay: index * 0.02 }}
    whileHover={{ scale: 1.1, y: -4 }}
    className="relative group inline-flex items-center"
  >
    <div className="rounded-full dark:bg-linear-to-r dark:from-blue-600 dark:to-indigo-600 from-blue-500 to-indigo-500 p-px">
      <div className="rounded-full dark:bg-slate-950 bg-white px-4 py-2 dark:text-slate-200 text-slate-900 text-sm font-semibold flex items-center gap-2 dark:group-hover:bg-slate-900 group-hover:bg-slate-50 transition-colors">
        <motion.span
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="dark:text-blue-400 text-blue-600"
        >
          ✦
        </motion.span>
        {skill}
      </div>
    </div>
  </motion.div>
);

AnimatedSkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 -left-40 w-80 h-80 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 -right-40 w-96 h-96 dark:bg-indigo-500/10 bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <SectionTitle
        eyebrow="Skills"
        title="Tools & strengths"
        subtitle="A practical stack for building fast, responsive and maintainable front-end apps."
      />

      {/* Skills by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skillCategories.map((category, idx) => (
          <SkillCard
            key={category.name}
            name={category.name}
            icon={category.icon}
            skills={category.skills}
            delay={idx * 0.1}
          />
        ))}
      </div>

      {/* All Skills - Visual display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl dark:bg-slate-800/30 bg-slate-100/30 dark:border-slate-700/40 border-slate-300/40 border backdrop-blur-xl p-8"
      >
        {/* Gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 dark:bg-linear-to-r dark:from-blue-600/0 dark:via-blue-600/5 dark:to-indigo-600/0 from-blue-400/0 via-blue-400/5 to-indigo-400/0 pointer-events-none rounded-3xl"
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold dark:text-white text-slate-900 flex items-center gap-3 mb-2">
              <span className="text-3xl">⚡</span>
              Complete Skill Set
            </h3>
            <p className="dark:text-slate-400 text-slate-600">
              All technologies and tools I work with
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, idx) => (
              <AnimatedSkillBadge key={skill} skill={skill} index={idx} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Experience Level Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 grid md:grid-cols-2 gap-6"
      >
        {[
          { title: "Frontend Expertise", level: 95 },
          { title: "Responsiveness & UX", level: 90 },
        ].map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-6"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold dark:text-white text-slate-900">
                {item.title}
              </h4>
              <span className="text-sm font-bold dark:text-blue-400 text-blue-600">
                {item.level}%
              </span>
            </div>
            <div className="relative h-3 rounded-full dark:bg-slate-700/50 bg-slate-300/50 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full dark:bg-linear-to-r dark:from-blue-500 dark:to-indigo-500 from-blue-400 to-indigo-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
