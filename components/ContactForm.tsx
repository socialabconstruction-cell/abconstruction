"use client";

import { useState } from "react";
import { IconArrowUpRight, IconCheck } from "./Icons";
import { SERVICES } from "@/lib/services";

// Submit-only public key. SplitForms access keys are sent from the browser by
// design, so this is not a secret — it can only write to this one form.
const SPLITFORMS_ACCESS_KEY = "14e50ca0a82a4e1fa72206377320d924";
const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
const PHONE = "(780) 818-5555";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    const fields = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(SPLITFORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: SPLITFORMS_ACCESS_KEY,
          subject: `Quote request from ${fields.name || "the AB Construction website"}`,
          ...fields,
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success !== false) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
        setError(json.message || "We couldn't send your request. Please try again.");
      }
    } catch {
      setStatus("error");
      setError(
        `We couldn't reach our server. Check your connection and try again, or call us at ${PHONE}.`
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)] p-10 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-forest-700)] text-white">
          <IconCheck size={22} />
        </span>
        <h3 className="font-display text-2xl mt-5">Thanks — we're on it.</h3>
        <p className="mt-3 text-sm text-[color:var(--color-ink-soft)] max-w-md mx-auto leading-relaxed">
          We've received your request and will get back to you within one business day with next
          steps. For urgent work, give us a call at {PHONE}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)] p-7 md:p-10"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field label="Company (optional)" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] mb-2">
            Service needed
          </label>
          <select
            name="service"
            className="w-full rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-4 py-3 text-sm focus:border-[color:var(--color-forest-700)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-forest-700)]/15"
            defaultValue=""
          >
            <option value="" disabled>Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.title}</option>
            ))}
            <option value="partnership">Partnership / builder relationship</option>
            <option value="multiple">Multiple services / full-site package</option>
            <option value="other">Other</option>
          </select>
        </div>
        <Field label="Project location" name="location" placeholder="City / neighbourhood" />
        <Field label="Timeline" name="timeline" placeholder="Approx. start date" />
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] mb-2">
            Project details
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Tell us about your project: scope, square footage, site conditions, and any relevant details."
            className="w-full rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-4 py-3 text-sm focus:border-[color:var(--color-forest-700)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-forest-700)]/15"
          />
        </div>
      </div>
      {status === "error" && (
        <p
          role="alert"
          className="mt-6 rounded-lg bg-[color:var(--color-steel-500)]/10 px-4 py-3 text-sm text-[color:var(--color-steel-500)]"
        >
          {error}
        </p>
      )}
      <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-xs text-[color:var(--color-muted)] max-w-md">
          By submitting, you agree that we may contact you about your project. We don't share your information
          with anyone outside our team.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary justify-center disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Request Quote"}
          <IconArrowUpRight size={16} />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)] mb-2">
        {label}
        {required && <span className="text-[color:var(--color-steel-500)] ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[color:var(--color-line)] bg-[color:var(--color-bg)] px-4 py-3 text-sm focus:border-[color:var(--color-forest-700)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-forest-700)]/15"
      />
    </div>
  );
}
