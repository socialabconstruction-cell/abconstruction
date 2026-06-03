import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconCheck, IconClock, IconShield, IconTruck } from "./Icons";

const STEPS = [
  {
    number: "01",
    title: "Site Walk and Scope Check",
    body: "We review access, grades, drawings, utilities, inspection needs, and where trucks and pumps can actually work.",
    image: "/images/stock/excavator-worker.jpg",
    Icon: IconShield,
  },
  {
    number: "02",
    title: "Schedule the Right Crew",
    body: "Equipment, operators, concrete timing, aggregate delivery, and weather windows are lined up before the job starts.",
    image: "/images/stock/dump-truck-road.jpg",
    Icon: IconClock,
  },
  {
    number: "03",
    title: "Build, Pour, Dig, or Haul",
    body: "Crews show up prepared, keep the site moving, and communicate anything that affects the next trade.",
    image: "/images/stock/excavator-dumptruck.jpg",
    Icon: IconTruck,
  },
  {
    number: "04",
    title: "Clean Handoff",
    body: "Forms, drainage, backfill, and site details are checked so builders can move to the next phase with confidence.",
    image: "/images/stock/workers-crane.jpg",
    Icon: IconCheck,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section bg-[color:var(--color-bg)] scroll-mt-24">
      <div className="container-x grid items-stretch gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="flex h-full flex-col justify-between rounded-lg bg-black p-7 text-white md:p-9">
          <div>
          <p className="eyebrow text-[color:var(--color-steel-300)]">How We Work</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-4">
            Built around the job site, the schedule, and the next trade.
          </h2>
          <p className="mt-6 max-w-md text-white/74 leading-relaxed">
            Construction gets expensive when details are guessed. Our process is simple:
            review the real site, plan the crew around the work, and leave a clean handoff.
          </p>
          <Link href="#contact" className="btn btn-primary mt-8">
            Talk Through Your Site
            <IconArrowUpRight size={16} />
          </Link>
          </div>
          <div className="mt-12 grid gap-4 border-t border-white/15 pt-6 text-sm text-white/72">
            <p>Measured access, equipment planning, and clean handoffs on every job.</p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-steel-300)]">
              Site first, schedule second, no guessing.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {STEPS.map((step) => {
            const Icon = step.Icon;

            return (
              <article
                key={step.number}
                className="grid overflow-hidden rounded-lg border border-[color:var(--color-line)] bg-white md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative min-h-[230px] md:min-h-full">
                  <Image
                    src={step.image}
                    alt={`${step.title} on an active construction site`}
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
                      Step {step.number}
                    </span>
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[color:var(--color-forest-900)] text-[color:var(--color-steel-300)]">
                      <Icon size={18} />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-[color:var(--color-ink)]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {step.body}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
