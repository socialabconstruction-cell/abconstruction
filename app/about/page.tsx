import type { Metadata } from "next";
import Image from "next/image";
import SplitHero from "@/components/SplitHero";
import MissionVision from "@/components/MissionVision";
import StatsBanner from "@/components/StatsBanner";
import ServiceAreas from "@/components/ServiceAreas";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import {
  IconCheck,
  IconClock,
  IconShield,
  IconStar,
  IconTeam,
  IconTruck,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us — Edmonton Construction Company",
  description:
    "AB Construction Group is an Alberta-owned company handling foundations, concrete, excavation, waterproofing, and aggregate supply across Greater Edmonton and Alberta.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Quality workmanship",
    body: "Clean forms, careful pours, and site details checked before the next trade ever arrives.",
    Icon: IconShield,
  },
  {
    title: "Experienced crews",
    body: "Operators and foremen who know Alberta job sites, weather windows, and builder schedules.",
    Icon: IconTeam,
  },
  {
    title: "Reliable timelines",
    body: "Equipment, trucks, concrete, and crew flow planned so the work doesn't stall mid-project.",
    Icon: IconClock,
  },
  {
    title: "Modern equipment",
    body: "Pumping, excavation, hauling, and forming support kept ready for residential and commercial work.",
    Icon: IconTruck,
  },
  {
    title: "Honest communication",
    body: "Straight answers on scope, timing, and cost, from the first call through the final handoff.",
    Icon: IconStar,
  },
  {
    title: "Safety-first habits",
    body: "Clear site communication and practical safety built into every phase of the job.",
    Icon: IconCheck,
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ])}
      />
      <SplitHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Us"
        title="Built on Trust."
        highlight="Driven by Quality."
        description="AB Construction Group handles the groundwork that makes the rest of the build easier — excavation, footings, foundation walls, waterproofing, concrete pumping, backfill, and material supply across Greater Edmonton and Alberta."
        bullets={[
          "Alberta owned & operated",
          "Residential & commercial",
          "Prepared, reliable crews",
          "Clean, on-schedule handoffs",
        ]}
        image="/images/stock/site-foreman.jpg"
        imageAlt="Construction foreman reviewing work on an Alberta job site"
        badge="Alberta Owned"
        secondary={{ label: "Our Services", href: "/services" }}
      />

      {/* Story */}
      <section className="section bg-[color:var(--color-bg)]">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div className="grid gap-4">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
              <Image
                src="/images/unique/workers-hardhats.jpg"
                alt="AB Construction Group crew coordinating on site"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
                <Image
                  src="/images/unique/blueprint-review.jpg"
                  alt="Reviewing project plans before construction begins"
                  fill
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
                <Image
                  src="/images/unique/excavator-green-site.jpg"
                  alt="Excavator preparing a site for foundation work"
                  fill
                  sizes="(min-width: 1024px) 24vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[color:var(--color-forest-700)]">Our Story</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.06]">
              An Edmonton company built around the job site.
            </h2>
            <p className="mt-6 leading-relaxed text-[color:var(--color-ink-soft)]">
              We started with a simple belief: construction goes smoothly when the groundwork is
              done right. Foundations, drainage, and site prep are the parts of a build that are
              hardest to fix later — so they&apos;re the parts we obsess over.
            </p>
            <p className="mt-4 leading-relaxed text-[color:var(--color-ink-soft)]">
              Today our crews handle concrete pumping, footings and foundation walls, cribbing and
              forming, waterproofing, aggregate supply, and excavation for builders, developers, and
              homeowners across Alberta. Whether it&apos;s a single pour or a full-site package, the
              same prepared, schedule-first approach shows up on every job.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Residential", v: "Custom homes & infill" },
                { k: "Commercial", v: "Footings & site work" },
                { k: "Alberta-wide", v: "Edmonton & beyond" },
              ].map((b) => (
                <div key={b.k} className="border-t border-[color:var(--color-line)] pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-forest-700)]">
                    {b.k}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]">{b.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MissionVision />

      <StatsBanner />

      {/* Values */}
      <section className="section bg-[color:var(--color-bg)]">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow text-[color:var(--color-forest-700)]">What We Stand For</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05]">
              The values that show up on every site.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-[color:var(--color-line)] ring-1 ring-[color:var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.Icon;
              return (
                <div key={v.title} className="bg-[color:var(--color-bg)] p-8">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-forest-900)] text-[color:var(--color-steel-300)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-[color:var(--color-ink)]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {v.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceAreas
        eyebrow="Local Roots"
        heading="An Edmonton company, serving Alberta builders"
        intro="We're proud to be based in Edmonton and to work alongside builders, developers, and homeowners across the Greater Edmonton Area and beyond — bringing the same prepared, schedule-first crews to every community we serve."
      />

      <CtaBand
        eyebrow="Work With Us"
        title="Let's get the groundwork"
        highlight="right on your build."
        body="Tell us about your project and we'll bring the prepared, schedule-first crews your site needs."
      />
    </>
  );
}
