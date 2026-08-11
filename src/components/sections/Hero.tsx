import PlateMark from "../marks/PlateMark";
import ConsultationButton from "../ConsultationButton";
import { getMessages } from "@/i18n";

export default function Hero() {
  const t = getMessages();

  return (
    <section id="top" className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">
      <div className="flex items-center justify-center bg-plate p-12 md:p-16">
        <PlateMark className="w-2/3 max-w-[220px] md:w-full" />
      </div>

      <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:px-16 md:py-0">
        <p className="mb-6 text-[0.68rem] font-light tracking-[0.2em] text-accent uppercase">
          {t.hero.kicker}
        </p>
        <h1 className="font-display max-w-xl text-4xl leading-[1.05] font-thin text-balance sm:text-5xl md:text-6xl">
          {t.hero.headline}
        </h1>
        <p className="mt-6 max-w-md text-base font-light text-fg-soft">
          {t.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-7">
          <ConsultationButton className="bg-accent px-8 py-4 text-xs font-normal tracking-[0.12em] text-white uppercase">
            {t.hero.primaryCta}
          </ConsultationButton>
          <a
            href="#expertise"
            className="border-b border-fg pb-0.5 text-xs font-light tracking-[0.08em] text-fg uppercase"
          >
            {t.hero.secondaryCta}
          </a>
        </div>

        <p className="mt-8 max-w-sm text-sm font-light text-fg-soft italic">
          {t.hero.fineprint}
        </p>
      </div>
    </section>
  );
}
