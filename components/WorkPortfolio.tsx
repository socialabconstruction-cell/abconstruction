import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight } from "./Icons";
import { PROJECTS, type Project } from "@/lib/projects";

function WorkCard({ p }: { p: Project }) {
  return (
    <Link
      href="/contact"
      className="group relative overflow-hidden rounded-lg bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.image}
          alt={`${p.title} — construction work in ${p.location}`}
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
            <h3 className="mt-2 font-display text-lg font-semibold leading-tight">
              {p.title}
            </h3>
          </div>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-soft)] transition-colors group-hover:border-[color:var(--color-forest-800)] group-hover:bg-[color:var(--color-forest-800)] group-hover:text-white">
            <IconArrowUpRight size={15} />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
          {p.detail}
        </p>
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
          {p.location}
        </p>
      </div>
    </Link>
  );
}

/**
 * Reusable portfolio / recent work grid. Links to the real /projects and
 * /contact routes (unlike the home-page ProjectShowcase, which uses # anchors).
 */
export default function WorkPortfolio({
  eyebrow = "Our Work",
  heading = "Recent projects across Greater Edmonton",
  intro,
  limit = 6,
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  limit?: number;
}) {
  const items = PROJECTS.slice(0, limit);

  return (
    <section className="section bg-[color:var(--color-bg)]">
      <div className="container-x">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-[color:var(--color-forest-700)]">
              <span className="mr-3 inline-block h-[1px] w-8 align-middle bg-[color:var(--color-forest-700)]" />
              {eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.05]">
              {heading}
            </h2>
            {intro && (
              <p className="mt-5 leading-relaxed text-[color:var(--color-ink-soft)]">
                {intro}
              </p>
            )}
          </div>
          <Link href="/projects" className="btn btn-ghost self-start md:self-end">
            View All Projects
            <IconArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <WorkCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
