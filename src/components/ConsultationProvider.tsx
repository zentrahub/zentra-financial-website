"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { getMessages } from "@/i18n";

type ConsultationContextValue = {
  open: () => void;
};

const ConsultationContext = createContext<ConsultationContextValue | null>(
  null,
);

type Status = "idle" | "submitting" | "success" | "error";

export function ConsultationProvider({ children }: { children: ReactNode }) {
  const t = getMessages().consultationForm;
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

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
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
          throw new Error(body?.error || t.genericError);
        }
        setStatus("success");
        form.reset();
      } catch (err) {
        setStatus("error");
        setErrorMessage(err instanceof Error ? err.message : t.genericError);
      }
    },
    [t.genericError],
  );

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
                {t.title}
              </h3>
              <p className="mt-1 text-sm font-light text-fg-soft">
                {t.subtitle}
              </p>
            </div>
            <button
              type="button"
              aria-label={t.closeAriaLabel}
              onClick={close}
              className="shrink-0 text-xl text-fg-soft transition hover:text-fg"
            >
              &times;
            </button>
          </div>

          {status === "success" ? (
            <div className="py-6">
              <p className="font-display text-xl font-extralight">
                {t.success.title}
              </p>
              <p className="mt-2 text-sm font-light text-fg-soft">
                {t.success.body}
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-6 border border-fg px-6 py-3 text-xs font-normal tracking-[0.12em] text-fg uppercase"
              >
                {t.success.close}
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <Field label={t.fields.name} name="name" required />
              <Field
                label={t.fields.email}
                name="email"
                type="email"
                required
              />
              <Field label={t.fields.phone} name="phone" type="tel" />
              <Field label={t.fields.company} name="company" />
              <SelectField
                label={t.fields.revenue}
                name="revenue"
                options={t.revenueRanges}
                placeholder={t.selectPlaceholder}
              />
              <SelectField
                label={t.fields.interest}
                name="interest"
                options={t.areasOfInterest}
                placeholder={t.selectPlaceholder}
              />
              <Field label={t.fields.source} name="source" full />
              <TextAreaField
                label={t.fields.description}
                name="description"
                full
              />

              <div className="col-span-full mt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-accent px-8 py-3.5 text-xs font-normal tracking-[0.12em] text-white uppercase disabled:opacity-60"
                >
                  {status === "submitting" ? t.submitting : t.submit}
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
  placeholder,
}: {
  label: string;
  name: string;
  options: readonly string[];
  placeholder: string;
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
          {placeholder}
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
