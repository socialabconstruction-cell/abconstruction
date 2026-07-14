import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconCheck } from "./Icons";

export default function IntroSplit() {
  return (
    <section id="about" className="section bg-[color:var(--color-bg)] scroll-mt-24">
      <div className="container-x grid items-stretch gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex h-full flex-col justify-center">
          <p className="eyebrow text-[color:var(--color-forest-700)]">About Us</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-4">
            Built on Trust.<br />
            <span className="text-[color:var(--color-steel-500)]">Driven by Quality.</span>
          </h2>
          <p className="mt-6 text-[color:var(--color-ink-soft)] leading-relaxed text-[1.02rem] max-w-xl">
            AB Construction Group handles the groundwork that makes the rest of the build easier:
            excavation, footings, foundation walls, waterproofing, concrete pumping, backfill, and
            material supply across Greater Edmonton and Alberta.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-x-6 gap-y-3 max-w-lg">
            {[
              "Foundations & concrete",
              "Excavation & site preparation",
              "Waterproofing systems",
              "Aggregate & material supply",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-[color:var(--color-ink)]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-forest-700)] text-white">
                  <IconCheck size={12} />
                </span>
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#why-us" className="btn btn-primary">
              Learn More About Us
              <IconArrowRight size={16} />
            </Link>
            <Link href="#services" className="btn btn-ghost">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="grid h-full min-h-[520px] gap-4">
          <div className="relative min-h-[330px] w-full overflow-hidden rounded-lg bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)]">
            <Image
              src="/images/stock/cranes-buildings.jpg"
              alt="Cranes and heavy equipment on an active construction site"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
              <Image
                src="/images/stock/site-foreman.jpg"
                alt="Construction foreman checking work on site"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
              <Image
                src="/images/stock/dump-truck-dirt.jpg"
                alt="Dump truck moving material on a construction site"
                fill
                sizes="(min-width: 1024px) 22vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
