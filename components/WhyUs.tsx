import Link from "next/link";
import Image from "next/image";
import {
  IconArrowUpRight,
  IconCheck,
  IconClock,
  IconFoundation,
  IconQuote,
  IconShield,
  IconStar,
  IconTeam,
  IconTruck,
} from "./Icons";

const REASONS = [
  {
    title: "Quality Workmanship",
    body: "Clean forms, careful pours, and site details are checked before the next trade arrives.",
    Icon: IconShield,
  },
  {
    title: "Experienced Professionals",
    body: "Operators and foremen who know Alberta job sites, weather windows, and builder schedules.",
    Icon: IconTeam,
  },
  {
    title: "Reliable Timelines",
    body: "We plan equipment, trucks, concrete, and crew flow so the work does not stall mid-project.",
    Icon: IconClock,
  },
  {
    title: "Modern Equipment",
    body: "Pumping, excavation, hauling, and forming support kept ready for residential and commercial work.",
    Icon: IconTruck,
  },
  {
    title: "Safety-First Crews",
    body: "Clear site communication and practical safety habits are built into every phase of the job.",
    Icon: IconCheck,
  },
  {
    title: "Competitive Pricing",
    body: "Fair, transparent quotes scoped to the work — no padded line items or surprise extras.",
    Icon: IconStar,
  },
  {
    title: "Honest Communication",
    body: "Straight answers on scope, timing, and cost, from the first call through the final handoff.",
    Icon: IconQuote,
  },
  {
    title: "Residential & Commercial Expertise",
    body: "From custom homes to commercial site packages, the same prepared crews handle both.",
    Icon: IconFoundation,
  },
];

const PROOF_POINTS = [
  "Prepared crews",
  "Clean handoffs",
  "Clear communication",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section bg-[color:var(--color-paper)] overflow-hidden scroll-mt-24">
      <div className="container-x grid items-stretch gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="order-2 flex h-full flex-col lg:order-1">
          <div className="relative min-h-[520px] flex-1 overflow-hidden rounded-lg bg-[color:var(--color-forest-950)] ring-1 ring-[color:var(--color-line)]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/videos/why-us-poster.jpg"
            >
              <source src="/videos/why-us.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
              <Image
                src="/images/unique/skid-steer-gravel.jpg"
                alt="Excavator and truck working on a prepared construction site"
                fill
                sizes="(min-width: 1024px) 24vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
              <Image
                src="/images/services/waterproofing.jpg"
                alt="Waterproofing work prepared along a foundation wall"
                fill
                sizes="(min-width: 1024px) 24vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {PROOF_POINTS.map((point) => (
              <div key={point} className="border-t border-[color:var(--color-line)] pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-forest-700)]">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex h-full flex-col justify-center lg:order-2">
          <p className="eyebrow text-[color:var(--color-forest-700)]">Why Choose Us</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-4">
            Why clients trust AB Construction Group.
          </h2>
          <p className="mt-6 text-[color:var(--color-ink-soft)] max-w-md leading-relaxed">
            Crews are judged by what happens on site: whether they show up prepared, protect the
            schedule, and leave the next trade with a clean handoff.
          </p>

          <div className="mt-9 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
            {REASONS.map((reason) => {
              const Icon = reason.Icon;

              return (
                <div key={reason.title} className="grid grid-cols-[44px_1fr] gap-4 py-5">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-forest-900)] text-[color:var(--color-steel-300)]">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[color:var(--color-ink)]">
                      {reason.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                      {reason.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#quote" className="btn btn-primary">
              Request a Quote
              <IconArrowUpRight size={16} />
            </Link>
            <Link href="#services" className="btn btn-ghost">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
