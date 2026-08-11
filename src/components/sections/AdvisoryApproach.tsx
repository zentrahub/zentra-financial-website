import { getMessages } from "@/i18n";

export default function AdvisoryApproach() {
  const t = getMessages();

  return (
    <section className="border-t border-line px-6 py-16 sm:px-10 md:py-20">
      <p className="mb-10 text-center text-[0.62rem] font-normal tracking-[0.2em] text-fg-soft uppercase">
        {t.advisoryApproach.label}
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {t.advisoryApproach.steps.map((step, i) => (
          <div
            key={step.name}
            className={`text-center sm:px-6 ${
              i > 0 ? "sm:border-l sm:border-line" : ""
            }`}
          >
            <h3 className="font-display mb-3 text-sm font-normal tracking-[0.1em] text-accent uppercase">
              {step.name}
            </h3>
            <p className="text-sm font-normal leading-relaxed text-fg-soft">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
