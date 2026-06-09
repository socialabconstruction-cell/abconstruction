import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";
import SplitHero from "@/components/SplitHero";
import RelatedServices from "@/components/RelatedServices";
import ServiceAreas from "@/components/ServiceAreas";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";
import { IconChevronDown } from "@/components/Icons";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} in Edmonton & Alberta`,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} in Edmonton | AB Construction Group`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.shortTitle, url: `/services/${service.slug}` },
          ]),
          faqSchema(service.faqs),
        ]}
      />
      <SplitHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
        eyebrow={service.category}
        title={service.title}
        highlight="in Edmonton & Alberta"
        description={`${service.tagline} Serving builders and homeowners across Edmonton and Alberta.`}
        bullets={service.bullets}
        image={service.image}
        imageAlt={`${service.title} on an active Alberta construction site`}
        badge="Edmonton & Alberta"
        secondary={{ label: "All Services", href: "/services" }}
      />

      {/* Overview + gallery */}
      <section className="section bg-[color:var(--color-bg)]">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-[color:var(--color-forest-700)]">Overview</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08]">
              {service.shortTitle} in Edmonton &amp; across Alberta.
            </h2>
            <p className="mt-6 leading-relaxed text-[color:var(--color-ink-soft)]">
              {service.longDescription}
            </p>
            <p className="mt-4 leading-relaxed text-[color:var(--color-ink-soft)]">
              {service.detailParagraph}
            </p>
          </div>

          <div className="grid gap-4">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
              <Image
                src={service.gallery[0]?.src ?? service.image}
                alt={service.gallery[0]?.alt ?? service.title}
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {service.gallery.slice(1, 3).map((g) => (
                <div
                  key={g.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]"
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section bg-[color:var(--color-paper)]">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow text-[color:var(--color-forest-700)]">Why It Matters</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-medium leading-[1.06]">
              What you get when we handle the {service.shortTitle.toLowerCase()}.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {service.highlights.map((h, i) => (
              <div
                key={h.title}
                className="flex h-full flex-col rounded-lg bg-[color:var(--color-bg)] p-7 ring-1 ring-[color:var(--color-line)]"
              >
                <span className="font-mono text-[11px] tracking-[0.3em] text-[color:var(--color-forest-700)]">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--color-ink)]">
                  {h.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                  {h.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="section bg-[color:var(--color-bg)]">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow text-[color:var(--color-forest-700)]">Good to Know</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-medium leading-[1.08]">
              {service.shortTitle} questions, answered.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-[color:var(--color-ink-soft)]">
              A few of the things builders and homeowners ask us most about this service. Have
              another question? We&apos;re happy to walk through it.
            </p>
          </div>

          <div className="divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
            {service.faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                  <span className="font-display text-lg font-semibold text-[color:var(--color-ink)]">
                    {item.question}
                  </span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-paper)] text-[color:var(--color-forest-700)] ring-1 ring-[color:var(--color-line)] transition-transform group-open:rotate-180">
                    <IconChevronDown size={16} />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas
        eyebrow="Service Areas"
        heading={`${service.shortTitle} across Greater Edmonton`}
        intro={`Need ${service.shortTitle.toLowerCase()} in Edmonton or a nearby community? We bring crews and equipment to residential and commercial sites throughout the Greater Edmonton Area and across Alberta.`}
      />

      <RelatedServices currentSlug={service.slug} />

      <CtaBand
        eyebrow="Start Your Project"
        title={`Need ${service.shortTitle.toLowerCase()}`}
        highlight="on your next build?"
        body="Send us the site details and we'll come back with scope, schedule notes, and a clear quote for the work."
      />
    </>
  );
}
