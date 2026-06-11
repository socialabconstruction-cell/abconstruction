import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";
import SplitHero from "@/components/SplitHero";
import ServiceCard from "@/components/ServiceCard";
import ServiceAreas from "@/components/ServiceAreas";
import WorkPortfolio from "@/components/WorkPortfolio";
import StatsBanner from "@/components/StatsBanner";
import TestimonialStrip from "@/components/TestimonialStrip";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, servicesItemListSchema } from "@/lib/seo";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Construction Services in Edmonton & Alberta",
  description:
    "Concrete pumping, footings and foundation walls, cribbing and forming, waterproofing and weeping tile, aggregate supply, and excavation services across Greater Edmonton and Alberta.",
  alternates: { canonical: "/services" },
};

const CAPABILITIES = [
  "Residential & commercial",
  "Full-site packages",
  "One coordinated crew",
  "Alberta-wide service",
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
          servicesItemListSchema(),
        ]}
      />
      <SplitHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Our Services"
        title="Groundwork to foundation,"
        highlight="handled by one crew."
        description="From the first excavation to the final waterproofed wall, AB Construction Group delivers the heavy, foundational work that makes the rest of your build easier — across Greater Edmonton and Alberta."
        bullets={CAPABILITIES}
        image="/images/stock/cranes-buildings.jpg"
        imageAlt="Cranes and heavy equipment on an active construction site"
        badge="6 Core Services"
        secondary={{ label: "Talk to Us", href: "/contact" }}
      />

      {/* Services grid */}
      <section className="section bg-[color:var(--color-bg)]">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow text-[color:var(--color-forest-700)]">What We Do</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05]">
              Concrete, foundations, excavation, trucking, and site support.
            </h2>
            <p className="mt-6 leading-relaxed text-[color:var(--color-ink-soft)]">
              Choose a service to see how we approach it, what&apos;s included, and the questions we
              get asked most — or send us your project and we&apos;ll scope the whole package.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <StatsBanner />

      {/* Full-site package band */}
      <section className="bg-black text-white">
        <div className="container-x grid items-center gap-10 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow text-[color:var(--color-steel-300)]">One Point of Contact</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3.25rem)] font-medium leading-[1.05]">
              Bundle the whole site package.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/75">
              Excavation, footings, foundation walls, waterproofing, weeping tile, concrete pumping,
              backfill, and material supply — coordinated as one connected workflow so handoffs
              between phases don&apos;t cost you days.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Excavation & site prep",
              "Footings & foundation walls",
              "Cribbing & forming",
              "Waterproofing & weeping tile",
              "Concrete pumping",
              "Aggregate & material supply",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-lg bg-white/5 p-4 text-sm font-medium ring-1 ring-white/10"
              >
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-forest-700)] text-white">
                  <IconCheck size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WorkPortfolio
        eyebrow="Portfolio"
        heading="Recent work from Edmonton job sites"
        intro="A sample of the foundations, pours, excavation, and full-site packages our crews have delivered across Greater Edmonton and Alberta."
      />

      <TestimonialStrip />

      <ServiceAreas
        eyebrow="Where We Work"
        heading="Construction services across Greater Edmonton"
        intro="From Edmonton infill lots to acreage and commercial sites in the surrounding region, our crews bring concrete, foundations, excavation, waterproofing, and aggregate supply to projects throughout the area."
      />

      <CtaBand
        eyebrow="Scope Your Project"
        title="Not sure which services"
        highlight="your build needs?"
        body="Tell us what you're building and we'll map out the right scope, sequence, and quote for the work."
      />
    </>
  );
}
