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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICE_SLUGS.map((slug, i) => {
          const service = t.services[slug];
          return (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className={`group px-0 text-center sm:px-6 ${
                i > 0 ? "sm:border-l sm:border-line" : ""
              }`}
            >
              <p className="mb-3 text-[0.64rem] font-normal text-fg-soft">
                {service.idx}
              </p>
              <h3 className="font-display mb-3 text-lg font-normal underline-offset-4 group-hover:underline">
                {service.name}
              </h3>
              <p className="text-sm font-normal leading-relaxed text-fg-soft">
                {service.shortDescription}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
