import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FiBriefcase, FiCheck } from "react-icons/fi";

function Timeline({ items, renderTitle, renderMeta, renderBody }) {
  return (
    <div className="relative">
      {/* Animated vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute left-3.75 top-0 bottom-0 w-px dark:bg-linear-to-b dark:from-blue-500/50 dark:via-indigo-500/30 dark:to-slate-500/10 from-blue-400/50 via-indigo-400/30 to-slate-400/10 origin-top"
      />

      <div className="space-y-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="relative pl-16"
          >
            {/* Animated dot with pulse effect */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.4)", "0 0 0 8px rgba(59, 130, 246, 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute left-1 top-1 h-7 w-7 rounded-full dark:bg-blue-500 bg-blue-600 border-2 dark:border-blue-300 border-blue-400 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
                className="dark:text-white text-white text-sm"
              >
                <FiBriefcase size={14} />
              </motion.div>
            </motion.div>

            {/* Main card */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-6 transition-all duration-300 dark:hover:border-blue-500/50 hover:border-blue-400/50"
            >
              {/* Gradient overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 dark:bg-linear-to-r dark:from-blue-600/10 dark:to-indigo-600/10 from-blue-400/10 to-indigo-400/10 pointer-events-none rounded-2xl"
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.1 }}
                    className="font-bold text-lg dark:text-white text-slate-900"
                  >
                    {renderTitle(item)}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 + 0.15 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full dark:bg-blue-600/20 bg-blue-400/20 dark:border-blue-500/30 border-blue-500/30 border dark:text-blue-300 text-blue-700 text-sm font-semibold"
                  >
                    <motion.span animate={{ rotate: [0, 20, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                      ⏱️
                    </motion.span>
                    {renderMeta(item)}
                  </motion.div>
                </div>

                {/* Body content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                  className="dark:text-slate-300 text-slate-700"
                >
                  <div className="space-y-2">
                    {Array.isArray(item.points) ? (
                      item.points.map((p, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.15 + 0.25 + i * 0.05 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="mt-1 dark:text-green-400 text-green-600 shrink-0"
                          >
                            <FiCheck size={18} />
                          </motion.div>
                          <span className="group-hover/item:dark:text-blue-300 group-hover/item:text-blue-600 transition-colors">
                            {p}
                          </span>
                        </motion.div>
                      ))
                    ) : (
                      renderBody(item)
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Corner accent */}
              <div className="absolute -top-6 -right-6 w-24 h-24 dark:bg-blue-500/20 bg-blue-400/20 rounded-full blur-2xl group-hover:dark:bg-blue-500/40 group-hover:bg-blue-400/40 transition-all duration-300" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

Timeline.propTypes = {
  items: PropTypes.array.isRequired,
  renderTitle: PropTypes.func.isRequired,
  renderMeta: PropTypes.func.isRequired,
  renderBody: PropTypes.func.isRequired,
};

export default Timeline;
