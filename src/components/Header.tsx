import Link from "next/link";
import WordMark from "./marks/WordMark";
import ConsultationButton from "./ConsultationButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/#top" aria-label="Zentra Financial home">
          <WordMark className="h-4 w-auto text-fg" />
        </Link>

        <div className="flex items-center gap-6 sm:gap-8">
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2.5 text-[0.66rem] font-light tracking-[0.14em] text-fg uppercase [&::-webkit-details-marker]:hidden">
              <span className="block">
                <span className="block h-px w-4 bg-fg transition-transform group-open:translate-y-[5px] group-open:rotate-45" />
                <span className="mt-[5px] block h-px w-4 bg-fg transition-opacity group-open:opacity-0" />
                <span className="mt-[5px] block h-px w-4 bg-fg transition-transform group-open:-translate-y-[5px] group-open:-rotate-45" />
              </span>
              Menu
            </summary>
            <div className="absolute top-[calc(100%+1rem)] right-0 z-20 flex min-w-48 flex-col gap-4 border border-line bg-bg px-6 py-5">
              <Link
                href="/#expertise"
                className="text-xs font-light tracking-[0.08em] text-fg-soft uppercase transition hover:text-fg"
              >
                Expertise
              </Link>
              <Link
                href="/#about"
                className="text-xs font-light tracking-[0.08em] text-fg-soft uppercase transition hover:text-fg"
              >
                About
              </Link>
              <ConsultationButton className="text-left text-xs font-light tracking-[0.08em] text-fg-soft uppercase transition hover:text-fg">
                Contact
              </ConsultationButton>
              {/* TODO: point at the firm's TaxDome tenant URL once available */}
              <a
                href="#"
                className="text-xs font-light tracking-[0.08em] text-fg uppercase transition hover:text-accent"
              >
                Client Portal
              </a>
            </div>
          </details>

          <ConsultationButton className="hidden border border-fg px-5 py-3 text-[0.66rem] font-normal tracking-[0.14em] text-fg uppercase transition hover:bg-fg hover:text-bg sm:block">
            Request a Private Consultation
          </ConsultationButton>
        </div>
      </nav>
    </header>
  );
}
