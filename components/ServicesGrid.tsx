import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { IconArrowUpRight, ServiceIcon } from "./Icons";

export default function ServicesGrid() {
  return (
    <section id="services" className="section bg-[color:var(--color-bg)] scroll-mt-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-[color:var(--color-forest-700)]">Services</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-3 max-w-2xl">
              Concrete, Foundations, Excavation, Trucking, and Site Support.
            </h2>
          </div>
          <Link href="#quote" className="btn btn-ghost self-start md:self-end">
            Request a Service Quote
            <IconArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              id={`service-${s.slug}`}
              href={`/services/${s.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)] transition-all hover:ring-[color:var(--color-forest-700)] hover:-translate-y-1 scroll-mt-28"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-line)]">
                <Image
                  src={s.image}
                  alt={`${s.title} construction service`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <span className="absolute bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--color-forest-900)] text-white transition-colors group-hover:bg-white group-hover:text-[color:var(--color-forest-900)]">
                  <ServiceIcon name={s.icon} size={22} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-end">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-soft)] group-hover:bg-[color:var(--color-forest-800)] group-hover:text-[color:var(--color-bg)] group-hover:border-[color:var(--color-forest-800)] transition-colors">
                    <IconArrowUpRight size={15} />
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mt-2">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                  {s.description}
                </p>
                <span className="mt-auto pt-6 inline-flex text-xs uppercase tracking-[0.2em] text-[color:var(--color-forest-700)] font-semibold">
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
