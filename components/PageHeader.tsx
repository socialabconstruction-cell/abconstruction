import Link from "next/link";

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative bg-[color:var(--color-forest-950)] text-[color:var(--color-bg)] overflow-hidden pt-[72px]">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 24%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.5) 75%, rgba(255,255,255,0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.5) 75%, rgba(255,255,255,0.5) 76%, transparent 77%, transparent)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />
      <div className="container-x relative py-20 md:py-28">
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-steel-300)]">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">{b.label}</Link>
                ) : (
                  <span className="text-white/80">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="opacity-50">/</span>}
              </span>
            ))}
          </nav>
        )}
        <p className={`eyebrow text-[color:var(--color-steel-300)] ${breadcrumbs ? "mt-6" : ""}`}>
          <span className="inline-block h-[1px] w-8 align-middle mr-3 bg-[color:var(--color-steel-300)]" />
          {eyebrow}
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04] font-medium mt-4 max-w-4xl">
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-[color:var(--color-steel-300)]">{highlight}</span>
            </>
          )}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-white/80 leading-relaxed text-base md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
