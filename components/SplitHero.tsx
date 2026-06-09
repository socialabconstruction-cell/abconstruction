import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconCheck, IconPhone } from "./Icons";

type Crumb = { label: string; href?: string };
type CtaLink = { label: string; href: string };

export default function SplitHero({
  eyebrow,
  title,
  highlight,
  description,
  bullets,
  image,
  imageAlt,
  breadcrumbs,
  badge,
  reverse = false,
  primary = { label: "Request a Quote", href: "/contact" },
  secondary,
  phone = true,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  bullets?: string[];
  image: string;
  imageAlt: string;
  breadcrumbs?: Crumb[];
  badge?: string;
  reverse?: boolean;
  primary?: CtaLink | null;
  secondary?: CtaLink | null;
  phone?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-bg)]">
      {/* faint grid wash, echoing the home page's structured feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, #000 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, #000 10%, transparent 70%)",
        }}
      />

      <div className="container-x relative grid items-center gap-10 pt-32 pb-16 md:pt-40 md:pb-24 lg:grid-cols-2 lg:gap-16">
        {/* Text side */}
        <div className={reverse ? "lg:order-2" : ""}>
          {breadcrumbs && (
            <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
              {breadcrumbs.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="transition-colors hover:text-[color:var(--color-forest-700)]">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-[color:var(--color-ink)]">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span className="opacity-40">/</span>}
                </span>
              ))}
            </nav>
          )}

          <p className="eyebrow text-[color:var(--color-forest-700)]">
            <span className="mr-3 inline-block h-[1px] w-8 align-middle bg-[color:var(--color-forest-700)]" />
            {eyebrow}
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.4rem,5.2vw,4.25rem)] font-medium leading-[1.04]">
            {title}
            {highlight && (
              <>
                <br />
                <span className="text-[color:var(--color-steel-500)]">{highlight}</span>
              </>
            )}
          </h1>

          {description && (
            <p className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-[color:var(--color-ink-soft)]">
              {description}
            </p>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="mt-8 grid max-w-lg gap-x-6 gap-y-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-[color:var(--color-ink)]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-forest-700)] text-white">
                    <IconCheck size={12} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          {(primary || secondary || phone) && (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {primary && (
                <Link href={primary.href} className="btn btn-primary w-full justify-center sm:w-auto">
                  {primary.label}
                  <IconArrowUpRight size={16} />
                </Link>
              )}
              {secondary && (
                <Link href={secondary.href} className="btn btn-ghost w-full justify-center sm:w-auto">
                  {secondary.label}
                </Link>
              )}
              {phone && (
                <a
                  href="tel:+17800000000"
                  className="hidden items-center gap-2 text-sm font-medium text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-forest-700)] sm:ml-2 sm:inline-flex"
                >
                  <IconPhone size={16} /> (780) 000-0000
                </a>
              )}
            </div>
          )}
        </div>

        {/* Image side */}
        <div className={`relative ${reverse ? "lg:order-1" : ""}`}>
          {/* offset accent panel for depth */}
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-2xl bg-[color:var(--color-forest-900)]/8 ring-1 ring-[color:var(--color-line)] sm:block"
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[color:var(--color-paper)] ring-1 ring-[color:var(--color-line)] ring-soft">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            {badge && (
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-forest-900)] ring-1 ring-black/10 shadow-lg">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-forest-700)]" />
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
