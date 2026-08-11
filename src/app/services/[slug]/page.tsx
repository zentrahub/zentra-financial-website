import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationButton from "@/components/ConsultationButton";
import { SERVICE_SLUGS, isServiceSlug } from "@/lib/services";
import { getMessages } from "@/i18n";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!isServiceSlug(slug)) return {};
  const service = getMessages().services[slug];
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isServiceSlug(slug)) notFound();

  const t = getMessages();
  const service = t.services[slug];
  const otherSlugs = SERVICE_SLUGS.filter((s) => s !== slug);

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
          <Link
            href="/#expertise"
            className="mb-10 inline-block text-xs font-normal tracking-[0.08em] text-fg-soft uppercase transition hover:text-fg"
          >
            {t.servicesIndex.backToExpertise}
          </Link>
          <p className="mb-6 text-[0.68rem] font-normal tracking-[0.2em] text-accent uppercase">
            {service.kicker}
          </p>
          <h1 className="font-display text-3xl leading-tight font-thin text-balance sm:text-4xl md:text-5xl">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base font-normal leading-relaxed text-fg-soft">
            {service.intro}
          </p>
          <div className="mt-10">
            <ConsultationButton className="bg-accent px-8 py-4 text-xs font-normal tracking-[0.12em] text-white uppercase">
              {t.hero.primaryCta}
            </ConsultationButton>
          </div>
        </section>

        <section className="border-t border-line px-6 py-16 sm:px-10 md:py-20">
          <p className="mx-auto mb-10 max-w-3xl text-[0.62rem] font-normal tracking-[0.2em] text-fg-soft uppercase">
            {t.servicesIndex.whatThisCovers}
          </p>
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
            {service.covers.map((item, i) => (
              <div key={i}>
                <h2 className="font-display mb-2 text-base font-normal">
                  {item.title}
                </h2>
                <p className="text-sm font-normal leading-relaxed text-fg-soft">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-line px-6 py-16 text-center sm:px-10">
          <p className="mx-auto mb-6 text-[0.62rem] font-normal tracking-[0.2em] text-fg-soft uppercase">
            {t.servicesIndex.whoItsFor}
          </p>
          <p className="mx-auto max-w-xl text-lg font-normal leading-relaxed text-balance">
            {service.whoItsFor}
          </p>
        </section>

        <section className="border-t border-line px-6 py-16 text-center sm:px-10">
          <h2 className="font-display text-2xl font-thin sm:text-3xl">
            {t.selectiveEngagement.headline}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm font-normal leading-relaxed text-fg-soft">
            {t.selectiveEngagement.body}
          </p>
          <div className="mt-8">
            <ConsultationButton className="bg-accent px-8 py-4 text-xs font-normal tracking-[0.12em] text-white uppercase">
              {t.hero.primaryCta}
            </ConsultationButton>
          </div>
        </section>

        <section className="border-t border-line px-6 py-16 sm:px-10 md:py-20">
          <p className="mx-auto mb-10 max-w-5xl text-center text-[0.62rem] font-normal tracking-[0.2em] text-fg-soft uppercase">
            {t.servicesIndex.otherAreas}
          </p>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-y-8 sm:grid-cols-3">
            {otherSlugs.map((s, i) => (
              <Link
                key={s}
                href={`/services/${s}`}
                className={`group text-center sm:px-6 ${
                  i > 0 ? "sm:border-l sm:border-line" : ""
                }`}
              >
                <p className="mb-2 text-[0.64rem] font-normal text-fg-soft">
                  {t.services[s].idx}
                </p>
                <h3 className="font-display text-base font-normal underline-offset-4 group-hover:underline">
                  {t.services[s].name}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
