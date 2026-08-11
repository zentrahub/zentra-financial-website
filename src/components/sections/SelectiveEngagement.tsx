import ConsultationButton from "../ConsultationButton";
import { getMessages } from "@/i18n";

export default function SelectiveEngagement() {
  const t = getMessages();

  return (
    <section className="border-t border-line px-6 py-20 text-center sm:px-10">
      <h2 className="font-display text-3xl font-thin sm:text-4xl">
        {t.selectiveEngagement.headline}
      </h2>
      <p className="mx-auto mt-5 max-w-md text-sm font-light text-fg-soft">
        {t.selectiveEngagement.body}
      </p>
      <div className="mt-8">
        <ConsultationButton className="bg-accent px-8 py-4 text-xs font-normal tracking-[0.12em] text-white uppercase">
          {t.selectiveEngagement.cta}
        </ConsultationButton>
      </div>
      <p className="mx-auto mt-6 max-w-sm text-sm font-light text-fg-soft italic">
        {t.selectiveEngagement.fineprint}
      </p>
    </section>
  );
}
