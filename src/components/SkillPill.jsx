import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function SkillPill({ text, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.3) }}
      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200"
    >
      {text}
    </motion.span>
  );
}

SkillPill.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number,
};
