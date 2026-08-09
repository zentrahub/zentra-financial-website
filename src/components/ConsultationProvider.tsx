"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

type ConsultationContextValue = {
  open: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(
  null,
);

const REVENUE_RANGES = [
  "Under $250K",
  "$250K–$500K",
  "$500K–$1M",
  "$1M–$3M",
  "$3M–$10M",
  "$10M+",
];

const AREAS_OF_INTEREST = [
  "Tax Strategy",
  "CFO & Financial Advisory",
  "Entity Architecture",
  "Corporate Tax & Accounting",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const open = useCallback(() => {
    setStatus("idle");
    dialogRef.current?.showModal();
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }, []);

  return (
    <ConsultationContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        className="m-auto w-[92%] max-w-lg rounded-sm border-none bg-bg p-0 text-fg backdrop:bg-black/60"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="max-h-[85vh] overflow-y-auto p-8 sm:p-10">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-extralight">
                Private Consultation Request
              </h3>
              <p className="mt-1 text-sm font-light text-fg-soft">
                A brief description helps us understand whether we&rsquo;re a
                fit before we speak.
              </p>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="shrink-0 text-xl text-fg-soft transition hover:text-fg"
            >
              &times;
            </button>
          </div>

          {status === "success" ? (
            <div className="py-6">
              <p className="font-display text-xl font-extralight">
                Request received.
              </p>
              <p className="mt-2 text-sm font-light text-fg-soft">
                Thank you &mdash; we&rsquo;ll be in touch if it looks like a
                fit.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-6 border border-fg px-6 py-3 text-xs font-normal tracking-[0.12em] text-fg uppercase"
              >
                Close
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Company" name="company" />
              <SelectField
                label="Approximate Annual Revenue"
                name="revenue"
                options={REVENUE_RANGES}
              />
              <SelectField
                label="Primary Area of Interest"
                name="interest"
                options={AREAS_OF_INTEREST}
              />
              <Field
                label="How did you hear about Zentra?"
                name="source"
                full
              />
              <TextAreaField
                label="Short Description"
                name="description"
                full
              />

              <div className="col-span-full mt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-accent px-8 py-3.5 text-xs font-normal tracking-[0.12em] text-white uppercase disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Sending…"
                    : "Request Consultation"}
                </button>
                {status === "error" && (
                  <p className="mt-3 text-xs font-light text-fg-soft">
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </dialog>
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const ctx = useContext(ConsultationContext);
  if (!ctx) {
    throw new Error("useConsultation must be used within ConsultationProvider");
  }
  return ctx;
}

function fieldId(name: string) {
  return `consultation-${name}`;
}

function Field({
  label,
  name,
  type = "text",
  full = false,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  full?: boolean;
  required?: boolean;
}) {
  return (
    <div className={full ? "col-span-full" : undefined}>
      <label
        htmlFor={fieldId(name)}
        className="mb-2 block text-[0.62rem] font-light tracking-[0.1em] text-fg-soft uppercase"
      >
        {label}
        {required && " *"}
      </label>
      <input
        id={fieldId(name)}
        name={name}
        type={type}
        required={required}
        className="h-8 w-full border-0 border-b border-fg bg-transparent text-sm text-fg outline-none"
      />
    </div>
  );
}

function TextAreaField({
  label,
  name,
  full = false,
}: {
  label: string;
  name: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "col-span-full" : undefined}>
      <label
        htmlFor={fieldId(name)}
        className="mb-2 block text-[0.62rem] font-light tracking-[0.1em] text-fg-soft uppercase"
      >
        {label}
      </label>
      <textarea
        id={fieldId(name)}
        name={name}
        rows={3}
        className="w-full resize-none border border-line bg-transparent p-2 text-sm text-fg outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={fieldId(name)}
        className="mb-2 block text-[0.62rem] font-light tracking-[0.1em] text-fg-soft uppercase"
      >
        {label}
      </label>
      <select
        id={fieldId(name)}
        name={name}
        defaultValue=""
        className="h-8 w-full border-0 border-b border-fg bg-transparent text-sm text-fg outline-none"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-bg text-fg">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
