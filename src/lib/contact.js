const env = import.meta.env ?? {};

// EmailJS public identifiers are safe to use in the browser. Never add private keys here.
export const contactConfig = {
  serviceId: env.VITE_EMAILJS_SERVICE_ID || "service_hxrxtwr",
  templateId: env.VITE_EMAILJS_TEMPLATE_ID || "template_z6v1lte",
  publicKey: env.VITE_EMAILJS_PUBLIC_KEY || "UXp7xEgG2dWCFM09Z",
};

export function validateContact(values) {
  const errors = {};
  if (!values.name.trim() || values.name.trim().length > 100) {
    errors.name = "Enter your name (up to 100 characters).";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) || values.email.trim().length > 254) {
    errors.email = "Enter a valid email address so I can reply.";
  }
  if (values.message.trim().length < 10 || values.message.trim().length > 5000) {
    errors.message = "Write a message between 10 and 5,000 characters.";
  }
  return errors;
}

export async function sendContact(values, { fetchImpl = globalThis.fetch, timeoutMs = 20000 } = {}) {
  if (Object.keys(validateContact(values)).length) {
    throw new Error("Please check your name, email address, and message.");
  }
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        service_id: contactConfig.serviceId,
        template_id: contactConfig.templateId,
        user_id: contactConfig.publicKey,
        template_params: {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          message: values.message.trim(),
        },
      }),
    });
    if (!response.ok) {
      const error = new Error(response.status === 429
        ? "The messaging service is busy. Please wait a moment before trying again, or contact me on WhatsApp."
        : "The messaging service couldn’t send your message. Please use email or WhatsApp below.");
      error.status = response.status;
      throw error;
    }
  } catch (error) {
    if (controller.signal.aborted) {
      throw new Error("Delivery couldn’t be confirmed because the request timed out. Your message may have gone through. Please wait before retrying, or contact me directly.");
    }
    if (error instanceof TypeError) {
      throw new Error("Unable to reach the messaging service. Check your connection and try again. Your message is still here.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
