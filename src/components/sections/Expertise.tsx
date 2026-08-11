import Link from "next/link";
import { SERVICE_SLUGS } from "@/lib/services";
import { getMessages } from "@/i18n";

export default function Expertise() {
  const t = getMessages();

  return (
    <section
      id="expertise"
      className="border-t border-line px-6 py-16 sm:px-10 md:py-20"
    >
      <p className="mb-10 text-center text-[0.62rem] font-normal tracking-[0.2em] text-fg-soft uppercase">
        {t.expertise.label}
      </p>
      <div className="mx-auto flex max-w-3xl flex-col divide-y divide-line">
        {SERVICE_SLUGS.map((slug, i) => {
          const service = t.services[slug];
          const primary = i === 0;
          return (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group flex items-baseline gap-6 py-7 first:pt-0 last:pb-0"
            >
              <p className="w-6 shrink-0 text-[0.64rem] font-normal text-fg-soft">
                {service.idx}
              </p>
              <div>
                <h3
                  className={`font-display mb-2 underline-offset-4 group-hover:underline ${
                    primary
                      ? "text-2xl font-normal text-accent sm:text-3xl"
                      : "text-lg font-normal text-fg"
                  }`}
                >
                  {service.name}
                </h3>
                <p className="max-w-xl text-sm font-normal leading-relaxed text-fg-soft">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
