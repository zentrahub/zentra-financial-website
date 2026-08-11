import Link from "next/link";
import WordMark from "./marks/WordMark";
import ConsultationButton from "./ConsultationButton";
import { getMessages } from "@/i18n";

export default function Header() {
  const t = getMessages();

  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/95 backdrop-blur-sm">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/#top" aria-label={t.nav.homeAriaLabel}>
          <WordMark className="h-4 w-auto text-fg" />
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden">
              <span className="sr-only">{t.nav.menu}</span>
              <span className="block">
                <span className="block h-px w-5 bg-fg transition-transform group-open:translate-y-[5px] group-open:rotate-45" />
                <span className="mt-[5px] block h-px w-5 bg-fg transition-opacity group-open:opacity-0" />
                <span className="mt-[5px] block h-px w-5 bg-fg transition-transform group-open:-translate-y-[5px] group-open:-rotate-45" />
              </span>
            </summary>
            <div className="absolute inset-x-0 top-full z-20 flex flex-col gap-6 border-t border-b border-line bg-bg px-6 py-8 sm:inset-x-auto sm:right-0 sm:top-[calc(100%+1rem)] sm:w-auto sm:min-w-48 sm:gap-4 sm:border sm:border-line sm:px-6 sm:py-5">
              <p className="text-[0.62rem] font-normal tracking-[0.2em] text-fg-soft uppercase">
                {t.nav.menu}
              </p>
              <Link
                href="/#expertise"
                className="text-sm font-normal tracking-[0.08em] text-fg-soft uppercase transition hover:text-fg sm:text-xs"
              >
                {t.nav.expertise}
              </Link>
              <Link
                href="/#about"
                className="text-sm font-normal tracking-[0.08em] text-fg-soft uppercase transition hover:text-fg sm:text-xs"
              >
                {t.nav.about}
              </Link>
              <ConsultationButton className="text-left text-sm font-normal tracking-[0.08em] text-fg-soft uppercase transition hover:text-fg sm:text-xs">
                {t.nav.contact}
              </ConsultationButton>
              {/* TODO: point at the firm's TaxDome tenant URL once available */}
              <a
                href="#"
                className="text-sm font-normal tracking-[0.08em] text-fg uppercase transition hover:text-accent sm:text-xs"
              >
                {t.nav.clientPortal}
              </a>
            </div>
          </details>

          <ConsultationButton className="hidden border border-fg px-5 py-3 text-[0.66rem] font-normal tracking-[0.14em] text-fg uppercase transition hover:bg-fg hover:text-bg sm:block">
            {t.nav.requestConsultation}
          </ConsultationButton>
        </div>
      </nav>
    </header>
  );
}
