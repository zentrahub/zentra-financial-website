import Link from "next/link";
import { getMessages } from "@/i18n";

export default function LegalPlaceholder({ title }: { title: string }) {
  const t = getMessages();

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 sm:px-10">
      <p className="mb-4 text-[0.62rem] font-light tracking-[0.2em] text-fg-soft uppercase">
        {t.legalPlaceholder.eyebrow}
      </p>
      <h1 className="font-display text-3xl font-thin">{title}</h1>
      <p className="mt-6 text-sm font-light text-fg-soft">
        {t.legalPlaceholder.body}
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border-b border-fg pb-0.5 text-xs font-light tracking-[0.08em] text-fg uppercase"
      >
        {t.legalPlaceholder.returnHome}
      </Link>
    </div>
  );
}
