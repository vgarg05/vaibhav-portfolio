import emailjs from "@emailjs/browser";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import Section from "../components/Section";
import { contactLinks } from "../data/portfolio";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      return "Please complete all fields before sending.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (form.message.trim().length < 20) {
      return "Please write a message of at least 20 characters.";
    }
    return "";
  };

  const submit = async (event) => {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured yet.");
      }

      await emailjs.send(serviceId, templateId, form, { publicKey });
      setForm(initialForm);
      setStatus({ type: "success", message: "Message sent successfully. I will get back to you soon." });
    } catch (err) {
      setStatus({ type: "error", message: err.message || "Message could not be sent. Please use the direct email link." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch for internships, full-time opportunities, or project collaborations.">
      <div className="mt-10 grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
        <div className="space-y-4">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} className="glass flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-1 hover:border-electric/35">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric"><Icon size={23} /></span>
                <span className="min-w-0">
                  <span className="block font-black text-white">{link.label}</span>
                  <span className="block break-words text-sm text-slate-400">{link.value}</span>
                </span>
              </a>
            );
          })}
        </div>

        <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={update} placeholder="Your name" />
            <Field label="Email" name="email" value={form.email} onChange={update} placeholder="you@example.com" type="email" />
          </div>
          <Field label="Subject" name="subject" value={form.subject} onChange={update} placeholder="Internship opportunity" />
          <label className="mt-4 block">
            <span className="text-sm font-bold text-slate-300">Message</span>
            <textarea name="message" value={form.message} onChange={update} rows="6" placeholder="Tell me about the role or project..." className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-electric" />
          </label>
          {status.message && (
            <p className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-semibold ${status.type === "success" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200" : "border-rose-400/30 bg-rose-400/10 text-rose-200"}`}>
              {status.message}
            </p>
          )}
          <button className="btn-primary mt-5 w-full sm:w-auto" type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="mt-4 block">
      <span className="text-sm font-bold text-slate-300">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-electric"
      />
    </label>
  );
}
