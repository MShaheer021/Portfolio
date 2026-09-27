import React, { useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { FiArrowUpRight, FiArrowRight, FiMail, FiPhone, FiLoader } from "react-icons/fi";
import { portfolioData as data } from "../data/portfolioData";
import { sendContact, validateContact } from "../lib/contact";

const emptyValues = { name: "", email: "", message: "" };
const whatsappUrl = `https://wa.me/${data.phone.replace(/\D/g, "")}`;

export default function Contact() {
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const sending = useRef(false);
  const lastSent = useRef(0);

  function onChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setStatus(null);
  }

  async function onSubmit(event) {
    event.preventDefault();
    if (sending.current) return;
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    setStatus(null);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      event.currentTarget.elements.namedItem(firstInvalid)?.focus();
      return;
    }
    if (Date.now() - lastSent.current < 30000) {
      setStatus({ type: "error", message: "Your previous message was sent. Please wait 30 seconds before sending another." });
      return;
    }
    if (!navigator.onLine) {
      setStatus({ type: "error", message: "You appear to be offline. Reconnect to send your message; your text is still here." });
      return;
    }
    sending.current = true;
    setLoading(true);
    try {
      await sendContact(values);
      lastSent.current = Date.now();
      setStatus({ type: "success", message: "Thank you! Your message was accepted by the email service. I’ll reply to the email address you provided." });
      setValues(emptyValues);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      sending.current = false;
      setLoading(false);
    }
  }

  const fallbackEmail = `mailto:${data.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${values.name.trim() || "a visitor"}`)}&body=${encodeURIComponent(`${values.message}\n\nFrom: ${values.name}\nReply to: ${values.email}`)}`;

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">07 / OPEN_A_CONNECTION</p>
          <h2>Have something<br />in mind<span>?</span><FiArrowUpRight /></h2>
          <p>Have a project, an opportunity, or just a good question?<br />I’d love to hear from you.</p>
          <div className="contact-links">
            <a href={`mailto:${data.email}`}><FiMail />{data.email}<FiArrowUpRight /></a>
            <a href={`tel:${data.phone}`}><FiPhone />{data.phone}<FiArrowUpRight /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp at ${data.phone}`}><SiWhatsapp />WhatsApp: {data.phone}<FiArrowUpRight /></a>
          </div>
          <span className="contact-location">BASED IN LAHORE, PAKISTAN</span>
        </div>
        <form onSubmit={onSubmit} className="contact-form" noValidate aria-busy={loading}>
          <h3>Start a conversation</h3>
          <div className="form-row">
            <label htmlFor="contact-name">Your name
              <input id="contact-name" name="name" autoComplete="name" placeholder="Jane Smith" required maxLength={100} value={values.name} onChange={onChange} disabled={loading} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
              {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
            </label>
            <label htmlFor="contact-email">Email address
              <input id="contact-email" type="email" name="email" autoComplete="email" placeholder="jane@company.com" required maxLength={254} value={values.email} onChange={onChange} disabled={loading} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
              {errors.email && <span id="email-error" className="field-error">{errors.email}</span>}
            </label>
          </div>
          <label htmlFor="contact-message">What are you working on?
            <textarea id="contact-message" name="message" rows={4} placeholder="Tell me a little about your project or idea…" required minLength={10} maxLength={5000} value={values.message} onChange={onChange} disabled={loading} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error message-hint" : "message-hint"} />
            <span id="message-hint" className="field-hint">At least 10 characters <span>{values.message.length.toLocaleString()} / 5,000</span></span>
            {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
          </label>
          <div aria-live="polite" aria-atomic="true">
            {loading && <p className="form-status">Sending your message…</p>}
            {status && <p className={`form-status ${status.type}`}>{status.message}</p>}
          </div>
          {status?.type === "error" && <div className="contact-fallback"><a href={fallbackEmail}>Use my email app <FiMail /></a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <SiWhatsapp /></a></div>}
          <button type="submit" className="button button-primary" disabled={loading}>{loading ? "Sending…" : "Send message"}{loading ? <FiLoader className="sending-spinner" /> : <FiArrowRight />}</button>
          <p className="form-privacy">Your details are used to respond to your enquiry. Messages are sent via EmailJS.</p>
        </form>
      </div>
    </section>
  );
}
