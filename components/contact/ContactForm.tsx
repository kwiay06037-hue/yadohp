"use client";

import { useId, useState, type FormEvent } from "react";
import Link from "next/link";
import { stays } from "@/data/stays";
import { localizedPath } from "@/lib/i18n";
import { t } from "@/lib/text";
import { useLocale, useMessages } from "@/lib/locale-context";
import { Button } from "@/components/common/Button";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormState = {
  name: string;
  email: string;
  stay: string;
  checkInDate: string;
  guests: string;
  inquiryType: string;
  message: string;
  privacyAgreed: boolean;
  // Honeypot: real users never fill this in; bots that autofill every field will.
  company: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  stay: "",
  checkInDate: "",
  guests: "",
  inquiryType: "booking",
  message: "",
  privacyAgreed: false,
  company: "",
};

export function ContactForm() {
  const locale = useLocale();
  const messages = useMessages();
  const formId = useId();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = messages.contact.errorRequired;
    if (!form.email.trim()) next.email = messages.contact.errorRequired;
    else if (!EMAIL_PATTERN.test(form.email)) next.email = messages.contact.errorEmail;
    if (!form.message.trim()) next.message = messages.contact.errorRequired;
    if (!form.privacyAgreed) next.privacyAgreed = messages.contact.errorRequired;
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.company) return; // Honeypot triggered — silently drop.
    if (!validate()) return;

    setStatus("submitting");
    // TODO: replace this simulated delay with a real submission — e.g. POST
    // this payload to /api/contact (a server-validated route handler with
    // rate limiting) or a third-party form backend. No data is sent yet.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-bg-white p-8 text-center">
        <p className="text-lg font-semibold text-ink">{messages.contact.successTitle}</p>
        <p className="mt-2 text-sm text-ink-soft">{messages.contact.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <Field
        id={`${formId}-name`}
        label={messages.contact.name}
        required
        error={errors.name}
      >
        <input
          id={`${formId}-name`}
          type="text"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field
        id={`${formId}-email`}
        label={messages.contact.email}
        required
        error={errors.email}
      >
        <input
          id={`${formId}-email`}
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
        />
      </Field>

      <Field id={`${formId}-stay`} label={messages.contact.stay}>
        <select
          id={`${formId}-stay`}
          value={form.stay}
          onChange={(e) => update("stay", e.target.value)}
          className={inputClass}
        >
          <option value="">{messages.contact.stayAny}</option>
          {stays.map((stay) => (
            <option key={stay.id} value={stay.id}>
              {t(stay.name, locale)}
            </option>
          ))}
        </select>
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={`${formId}-checkin`} label={messages.contact.checkInDate}>
          <input
            id={`${formId}-checkin`}
            type="date"
            value={form.checkInDate}
            onChange={(e) => update("checkInDate", e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field id={`${formId}-guests`} label={messages.contact.guests}>
          <input
            id={`${formId}-guests`}
            type="number"
            min={1}
            value={form.guests}
            onChange={(e) => update("guests", e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>

      <Field id={`${formId}-type`} label={messages.contact.inquiryType}>
        <select
          id={`${formId}-type`}
          value={form.inquiryType}
          onChange={(e) => update("inquiryType", e.target.value)}
          className={inputClass}
        >
          <option value="booking">{messages.contact.inquiryTypeBooking}</option>
          <option value="facility">{messages.contact.inquiryTypeFacility}</option>
          <option value="other">{messages.contact.inquiryTypeOther}</option>
        </select>
      </Field>

      <Field
        id={`${formId}-message`}
        label={messages.contact.message}
        required
        error={errors.message}
      >
        <textarea
          id={`${formId}-message`}
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={inputClass}
        />
      </Field>

      <div>
        <label className="flex items-start gap-2 text-sm text-ink">
          <input
            type="checkbox"
            checked={form.privacyAgreed}
            onChange={(e) => update("privacyAgreed", e.target.checked)}
            className="mt-1 h-4 w-4"
            aria-invalid={Boolean(errors.privacyAgreed)}
          />
          <span>
            {messages.contact.privacyAgreement}{" "}
            <Link
              href={localizedPath(locale, "/privacy")}
              className="text-accent underline underline-offset-2"
            >
              {messages.contact.privacyAgreementLink}
            </Link>
          </span>
        </label>
        {errors.privacyAgreed ? (
          <p className="mt-1 text-sm text-accent">{errors.privacyAgreed}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? messages.contact.submitting : messages.contact.submit}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full min-h-11 rounded-xl border border-border bg-bg-white px-4 py-2 text-ink outline-none focus:border-accent";

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  const messages = useMessages();
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="ml-1 text-accent">{messages.contact.required}</span>
        ) : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-accent">{error}</p> : null}
    </div>
  );
}
