import { getMessages } from "@/i18n";

export default function Positioning() {
  const t = getMessages();

  return (
    <section
      id="about"
      className="border-t border-line px-6 py-20 text-center sm:px-10"
    >
      <p className="font-display mx-auto max-w-2xl text-2xl leading-relaxed font-extralight text-balance sm:text-3xl">
        {t.positioning.statementPrefix}{" "}
        <span className="text-accent">{t.positioning.statementHighlight}</span>
      </p>
      <p className="mx-auto mt-6 max-w-lg text-sm font-light text-fg-soft">
        {t.positioning.body}
      </p>
    </section>
  );
}
