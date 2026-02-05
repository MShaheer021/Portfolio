import React, { useState } from "react";
import PropTypes from "prop-types";
import SectionTitle from "../components/SectionTitle";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";

// Put your real EmailJS IDs here
const SERVICE_ID = "service_hxrxtwr";
const TEMPLATE_ID = "template_z6v1lte";
const PUBLIC_KEY = "UXp7xEgG2dWCFM09Z";

const ContactCard = ({ icon: Icon, title, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -8, scale: 1.05 }}
    className="group relative overflow-hidden rounded-2xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-8 transition-all duration-300"
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute inset-0 dark:bg-linear-to-br dark:from-blue-600/10 dark:to-indigo-600/10 from-blue-400/10 to-indigo-400/10 pointer-events-none rounded-2xl"
    />

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl dark:text-blue-400 text-blue-500"
        >
          <Icon />
        </motion.div>
        <h3 className="dark:text-slate-200 text-slate-800 font-semibold text-lg">{title}</h3>
      </div>
      <p className="dark:text-slate-300 text-slate-700 font-medium break-all">{value}</p>
    </div>

    {/* Corner accent light */}
    <div className="absolute top-0 right-0 w-20 h-20 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-2xl group-hover:dark:bg-blue-500/20 group-hover:bg-blue-400/20 transition-all duration-300" />
  </motion.div>
);

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      setStatus({ type: "success", msg: "Message sent successfully! I'll get back to you soon." });
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", msg: "Failed to send message. Please check the EmailJS configuration." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 -right-40 w-80 h-80 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 -left-40 w-96 h-96 dark:bg-indigo-500/10 bg-indigo-400/10 rounded-full blur-3xl"
        />
      </div>

      <SectionTitle
        eyebrow="Contact"
        title="Let's work together"
        subtitle="Get in touch and let's create something amazing together."
      />

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto"
      >
        <ContactCard
          icon={FiMail}
          title="Email"
          value={portfolioData.email}
          delay={0}
        />
        <ContactCard
          icon={FiPhone}
          title="Phone"
          value={portfolioData.phone}
          delay={0.1}
        />
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto group relative overflow-hidden rounded-3xl dark:bg-slate-800/40 bg-slate-100/40 dark:border-slate-700/50 border-slate-300/40 border backdrop-blur-xl p-8"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 dark:bg-linear-to-br dark:from-blue-600/10 dark:to-indigo-600/10 from-blue-400/10 to-indigo-400/10 pointer-events-none rounded-3xl"
        />

        <div className="relative z-10">
          <h3 className="dark:text-white text-slate-900 font-bold text-2xl mb-6">Send me a message</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label className="block dark:text-slate-300 text-slate-700 text-sm font-medium mb-2">
                Name
              </label>
              <input
                name="name"
                required
                className="w-full rounded-xl dark:bg-slate-700/30 bg-slate-200/30 dark:border-slate-600/50 border-slate-400/50 border dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-600 px-4 py-3 outline-none focus:dark:border-blue-500/50 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <label className="block dark:text-slate-300 text-slate-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl dark:bg-slate-700/30 bg-slate-200/30 dark:border-slate-600/50 border-slate-400/50 border dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-600 px-4 py-3 outline-none focus:dark:border-blue-500/50 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-6"
          >
            <label className="block dark:text-slate-300 text-slate-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full rounded-xl dark:bg-slate-700/30 bg-slate-200/30 dark:border-slate-600/50 border-slate-400/50 border dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-600 px-4 py-3 outline-none focus:dark:border-blue-500/50 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
              placeholder="Write your message..."
            />
          </motion.div>

          {status.msg && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 text-sm font-medium ${
                status.type === "success"
                  ? "dark:text-green-400 text-green-600"
                  : "dark:text-red-400 text-red-600"
              }`}
            >
              ✓ {status.msg}
            </motion.p>
          )}

          <motion.button
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full dark:bg-linear-to-r dark:from-blue-600 dark:to-indigo-600 bg-linear-to-r from-blue-500 to-indigo-500 dark:hover:from-blue-700 dark:hover:to-indigo-700 hover:from-blue-600 hover:to-indigo-600 dark:text-white text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  ⏳
                </motion.span>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </div>

        {/* Corner accent lights */}
        <div className="absolute top-0 right-0 w-32 h-32 dark:bg-blue-500/10 bg-blue-400/10 rounded-full blur-3xl group-hover:dark:bg-blue-500/20 group-hover:bg-blue-400/20 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 w-32 h-32 dark:bg-indigo-500/10 bg-indigo-400/10 rounded-full blur-3xl group-hover:dark:bg-indigo-500/20 group-hover:bg-indigo-400/20 transition-all duration-300" />
      </motion.form>
    </section>
  );
}
