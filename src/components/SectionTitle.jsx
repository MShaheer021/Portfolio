import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="text-xs uppercase tracking-[0.25em] dark:text-slate-400 text-slate-600"
      >
        {eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-2 text-2xl sm:text-3xl font-semibold dark:text-white text-slate-900"
      >
        {title}
      </motion.h2>

      {subtitle ? (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-2 max-w-2xl dark:text-slate-300 text-slate-700"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

SectionTitle.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
