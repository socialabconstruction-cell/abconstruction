import Link from "next/link";
import { SERVICES } from "@/lib/services";
import ServiceCard from "./ServiceCard";
import { IconArrowUpRight } from "./Icons";

export default function RelatedServices({
  currentSlug,
  limit = 3,
  heading = "Explore other services",
}: {
  currentSlug?: string;
  limit?: number;
  heading?: string;
}) {
  const services = SERVICES.filter((s) => s.slug !== currentSlug).slice(0, limit);

  return (
    <section className="section bg-[color:var(--color-paper)]">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-[color:var(--color-forest-700)]">More From AB Construction</p>
            <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.8rem,3.5vw,2.75rem)] font-medium leading-[1.06]">
              {heading}
            </h2>
          </div>
          <Link href="/services" className="btn btn-ghost self-start md:self-end">
            View All Services
            <IconArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
