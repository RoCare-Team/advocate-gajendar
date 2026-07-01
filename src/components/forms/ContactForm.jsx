"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Field, Input, Textarea } from "@/components/forms/Field";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: no backend. Show a success state.
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-ink-100 bg-white p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-100 text-gold-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
          Message received!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-gold-600 hover:text-gold-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-ink-100 bg-white p-7 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <Input name="name" placeholder="Your name" required />
        </Field>
        <Field label="Email" required>
          <Input type="email" name="email" placeholder="you@example.com" required />
        </Field>
        <Field label="Phone">
          <Input type="tel" name="phone" placeholder="+91 98765 43210" />
        </Field>
        <Field label="Subject" required>
          <Input name="subject" placeholder="How can we help?" required />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" required>
          <Textarea name="message" placeholder="Tell us a little about your matter…" required />
        </Field>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-8 py-3.5 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:bg-gold-300"
      >
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
