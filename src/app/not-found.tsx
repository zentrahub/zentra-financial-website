import Link from "next/link";
import WordMark from "@/components/marks/WordMark";
import { getMessages } from "@/i18n";

export default function NotFound() {
  const t = getMessages();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Link href="/" aria-label={t.nav.homeAriaLabel} className="mb-12">
        <WordMark className="h-4 w-auto text-fg" />
      </Link>
      <p className="mb-4 text-[0.68rem] font-normal tracking-[0.2em] text-fg-soft uppercase">
        {t.notFound.eyebrow}
      </p>
      <h1 className="font-display max-w-md text-3xl font-thin text-balance sm:text-4xl">
        {t.notFound.headline}
      </h1>
      <p className="mt-4 max-w-sm text-sm font-normal leading-relaxed text-fg-soft">
        {t.notFound.body}
      </p>
      <Link
        href="/"
        className="mt-10 border border-fg px-6 py-3 text-xs font-normal tracking-[0.14em] text-fg uppercase transition hover:bg-fg hover:text-bg"
      >
        {t.notFound.returnHome}
      </Link>
    </div>
  );
}
