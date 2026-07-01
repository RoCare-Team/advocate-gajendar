"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Field, Input, Textarea, SelectField } from "@/components/forms/Field";
import { practiceAreas } from "@/data/practiceAreas";
import { cities } from "@/data/cities";

const TIME_SLOTS = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 8 PM)",
];

export default function ConsultationForm() {
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only: no backend. Show a confirmation state.
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-ink-100 bg-white p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-100 text-gold-600">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
          Consultation requested!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          We&apos;ve received your request. A member of our team will confirm your slot
          and share the advocate details shortly.
        </p>
        <button
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-semibold text-gold-600 hover:text-gold-700"
        >
          Book another consultation
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
        <Field label="Phone number" required>
          <Input type="tel" name="phone" placeholder="+91 98765 43210" required />
        </Field>
        <Field label="Email" required>
          <Input type="email" name="email" placeholder="you@example.com" required />
        </Field>
        <Field label="City" required>
          <SelectField
            name="city"
            required
            placeholder="Select your city"
            options={cities.map((c) => ({ value: c.slug, label: c.name }))}
          />
        </Field>
        <Field label="Practice area" required>
          <SelectField
            name="practiceArea"
            required
            placeholder="Select a practice area"
            options={practiceAreas.map((p) => ({ value: p.slug, label: p.name }))}
          />
        </Field>
        <Field label="Preferred time" required>
          <SelectField
            name="time"
            required
            placeholder="Select a time slot"
            options={TIME_SLOTS.map((t) => ({ value: t, label: t }))}
          />
        </Field>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <Field label="Preferred date" required>
          <Input type="date" name="date" required />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Briefly describe your matter">
          <Textarea name="details" placeholder="Give us a short summary so we can match the right advocate…" />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold text-ink-950 shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5 hover:bg-gold-300 sm:w-auto"
      >
        <CalendarCheck className="h-4 w-4" /> Request Consultation
      </button>
      <p className="mt-3 text-xs text-ink-400">
        By requesting a consultation you agree to our{" "}
        <Link href="/terms" className="text-gold-600 hover:underline">Terms</Link> and{" "}
        <Link href="/privacy-policy" className="text-gold-600 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
