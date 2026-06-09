import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { IconArrowUpRight, ServiceIcon } from "./Icons";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)] transition-all hover:-translate-y-1 hover:ring-[color:var(--color-forest-700)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[color:var(--color-line)]">
        <Image
          src={service.image}
          alt={`${service.title} construction service`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <span className="absolute bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--color-forest-900)] text-white transition-colors group-hover:bg-white group-hover:text-[color:var(--color-forest-900)]">
          <ServiceIcon name={service.icon} size={22} />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-forest-700)]">
            {service.category}
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-soft)] transition-colors group-hover:border-[color:var(--color-forest-800)] group-hover:bg-[color:var(--color-forest-800)] group-hover:text-[color:var(--color-bg)]">
            <IconArrowUpRight size={15} />
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold">{service.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
          {service.description}
        </p>
        <span className="mt-auto pt-6 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-forest-700)]">
          View Service
        </span>
      </div>
    </Link>
  );
}
