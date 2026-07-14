import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SplitHero from "@/components/SplitHero";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { IconArrowUpRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Work — Construction Projects in Edmonton & Alberta",
  description:
    "A look at the foundations, concrete pours, excavation, waterproofing, and site work AB Construction Group delivers for builders across Greater Edmonton and Alberta.",
  alternates: { canonical: "/projects" },
};

type Project = {
  title: string;
  type: string;
  location: string;
  image: string;
  detail: string;
};

const PROJECTS: Project[] = [
  {
    title: "Residential Foundation Package",
    type: "Excavation & Concrete",
    location: "Greater Edmonton",
    image: "/images/unique/excavator-green-site.jpg",
    detail:
      "Basement excavation, footing preparation, foundation wall coordination, and backfill delivered as one connected workflow.",
  },
  {
    title: "Tight-Access Concrete Pour",
    type: "Concrete Pumping",
    location: "Edmonton Infill",
    image: "/images/unique/edmonton-crane-rooftop-2014.jpg",
    detail: "Coordinated concrete placement for tight urban access and staged pours.",
  },
  {
    title: "Commercial Footing Preparation",
    type: "Commercial Site Work",
    location: "Alberta",
    image: "/images/unique/paving-dump-truck.jpg",
    detail: "Footing preparation, aggregate delivery, and heavy equipment support.",
  },
  {
    title: "Foundation Waterproofing",
    type: "Drainage & Membrane",
    location: "Greater Edmonton",
    image: "/images/unique/rebar-sky.jpg",
    detail: "Foundation membrane, drainage rock, and weeping tile installation.",
  },
  {
    title: "Forming & Cribbing Setup",
    type: "Cribbing & Forming",
    location: "Residential Build",
    image: "/images/unique/workers-hardhats.jpg",
    detail: "Accurate forming and bracing for a compact residential build.",
  },
  {
    title: "Aggregate Delivery & Hauling",
    type: "Excavation & Trucking",
    location: "Active Job Site",
    image: "/images/services/aggregate-supply.jpg",
    detail: "Lot stripping, grading, hauling, and a clean handoff for foundation crews.",
  },
  {
    title: "Working Well Beyond Edmonton",
    type: "Alberta-Wide Coverage",
    location: "Red Deer to St. Albert · Alberta-wide",
    image: "/images/unique/two-dump-trucks.jpg",
    detail:
      "From Red Deer and Leduc to Spruce Grove, Beaumont, Stony Plain, St. Albert, and Smoky Lake — the same crews and equipment, on job sites across central Alberta.",
  },
];

const FEATURED = PROJECTS[0];

function WorkCard({ p }: { p: Project }) {
  return (
    <Link
      href="/contact#quote"
      className="group relative overflow-hidden rounded-lg bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image}
          alt={`${p.title} construction work`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-forest-700)]">
              {p.type}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold leading-tight">{p.title}</h3>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-soft)] transition-colors group-hover:border-[color:var(--color-forest-800)] group-hover:bg-[color:var(--color-forest-800)] group-hover:text-white">
            <IconArrowUpRight size={15} />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">{p.detail}</p>
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
          {p.location}
        </p>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ])}
      />
      <SplitHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        eyebrow="Our Work"
        title="The work our crews"
        highlight="handle week after week."
        description="Foundations, concrete pours, excavation, drainage, and full-site packages across Greater Edmonton and Alberta — a look at the kind of projects we take on."
        bullets={[
          "Residential foundations",
          "Commercial site work",
          "Tight-access pours",
          "Full-site coordination",
        ]}
        image="/images/unique/city-excavators.jpg"
        imageAlt="Excavator crews working in a city development corridor"
        badge="Edmonton & Alberta"
        secondary={{ label: "Our Services", href: "/services" }}
      />

      <section className="section bg-[color:var(--color-bg)]">
        <div className="container-x">
          {/* Capability strip */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {["Foundations", "Concrete Pumping", "Waterproofing", "Excavation"].map((item) => (
              <div key={item} className="border-t border-[color:var(--color-line)] pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-forest-700)]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Featured */}
          <Link
            href="/contact#quote"
            className="group mt-10 grid overflow-hidden rounded-lg bg-[color:var(--color-forest-950)] text-white ring-1 ring-[color:var(--color-line)] lg:grid-cols-[1.25fr_0.75fr]"
          >
            <div className="relative min-h-[360px] overflow-hidden">
              <Image
                src={FEATURED.image}
                alt={`${FEATURED.title} construction work`}
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between p-7 md:p-9">
              <div>
                <p className="eyebrow text-[color:var(--color-steel-300)]">Featured Work</p>
                <h3 className="mt-4 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.08]">
                  {FEATURED.title}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                  {FEATURED.type} · {FEATURED.location}
                </p>
                <p className="mt-6 leading-relaxed text-white/78">{FEATURED.detail}</p>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-sm font-medium text-white/78">Discuss a Similar Project</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-[color:var(--color-forest-950)]">
                  <IconArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(1).map((p) => (
              <WorkCard key={p.title} p={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Start Your Project"
        title="Have a project that"
        highlight="needs solid groundwork?"
        body="Send us the details and we'll come back with scope, schedule notes, and a quote you can build around."
      />
    </>
  );
}
