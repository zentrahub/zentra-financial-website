import Link from "next/link";
import WordMark from "./marks/WordMark";
import ConsultationButton from "./ConsultationButton";
import { getMessages } from "@/i18n";

export default function Footer() {
  const t = getMessages();

  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
        <WordMark className="h-3 w-auto text-fg-soft" />
        <div className="flex flex-wrap gap-6">
          <Link
            href="/#expertise"
            className="text-[0.64rem] font-light tracking-[0.05em] text-fg-soft uppercase transition hover:text-fg"
          >
            {t.footer.expertise}
          </Link>
          <Link
            href="/#about"
            className="text-[0.64rem] font-light tracking-[0.05em] text-fg-soft uppercase transition hover:text-fg"
          >
            {t.footer.about}
          </Link>
          <ConsultationButton className="text-[0.64rem] font-light tracking-[0.05em] text-fg-soft uppercase transition hover:text-fg">
            {t.footer.privateConsultation}
          </ConsultationButton>
          {/* TODO: point at the firm's TaxDome tenant URL once available */}
          <a
            href="#"
            className="text-[0.64rem] font-light tracking-[0.05em] text-fg-soft uppercase transition hover:text-fg"
          >
            {t.footer.clientPortal}
          </a>
          <Link
            href="/privacy"
            className="text-[0.64rem] font-light tracking-[0.05em] text-fg-soft uppercase transition hover:text-fg"
          >
            {t.footer.privacy}
          </Link>
          <Link
            href="/terms"
            className="text-[0.64rem] font-light tracking-[0.05em] text-fg-soft uppercase transition hover:text-fg"
          >
            {t.footer.terms}
          </Link>
        </div>
      </div>
    </footer>
  );
}
