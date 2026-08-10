import Link from "next/link";

export default function LegalPlaceholder({ title }: { title: string }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 sm:px-10">
      <p className="mb-4 text-[0.62rem] font-light tracking-[0.2em] text-fg-soft uppercase">
        Zentra Financial
      </p>
      <h1 className="font-display text-3xl font-thin">{title}</h1>
      <p className="mt-6 text-sm font-light text-fg-soft">
        This page hasn&rsquo;t been published yet. If you have a question in
        the meantime, request a private consultation and we&rsquo;ll follow
        up directly.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block border-b border-fg pb-0.5 text-xs font-light tracking-[0.08em] text-fg uppercase"
      >
        Return Home
      </Link>
    </div>
  );
}
