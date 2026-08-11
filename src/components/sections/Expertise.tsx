import Link from "next/link";
import { SERVICES } from "@/lib/services";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="border-t border-line px-6 py-16 sm:px-10 md:py-20"
    >
      <p className="mb-10 text-center text-[0.62rem] font-light tracking-[0.2em] text-fg-soft uppercase">
        Expertise
      </p>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={`group px-0 text-center sm:px-6 ${
              i > 0 ? "sm:border-l sm:border-line" : ""
            }`}
          >
            <p className="mb-3 text-[0.64rem] font-light text-fg-soft">
              {service.idx}
            </p>
            <h3 className="font-display mb-3 text-lg font-extralight underline-offset-4 group-hover:underline">
              {service.name}
            </h3>
            <p className="text-sm font-light text-fg-soft">
              {service.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
