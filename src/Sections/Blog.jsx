import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { portfolioData } from "../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

export default function Blog() {
  const [openPost, setOpenPost] = useState(null);

  return (
    <section id="blog" className="py-12">
      <SectionTitle
        eyebrow="Blog"
        title="Writing & notes"
        subtitle="Short, practical posts to show your thinking, workflow and expertise."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {portfolioData.blogPosts.map((post, idx) => (
          <motion.button
            key={post.id}
            onClick={() => setOpenPost(post)}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.2) }}
            className="text-left rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-white font-semibold text-lg">{post.title}</h3>
              <span className="text-xs text-slate-400">{post.date}</span>
            </div>
            <p className="mt-2 text-slate-200">{post.excerpt}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      {/* ✅ Modal */}
      <AnimatePresence>
        {openPost && (
          <motion.div
            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenPost(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="max-w-2xl w-full rounded-3xl border border-white/10 bg-slate-950 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-xl">{openPost.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{openPost.date}</p>
                </div>
                <button
                  onClick={() => setOpenPost(null)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>

              <div className="mt-5 space-y-3 text-slate-200 leading-relaxed">
                {openPost.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
