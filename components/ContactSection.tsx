import Link from "next/link";
import ContactForm from "./ContactForm";
import { IconClock, IconMail, IconPhone, IconPin } from "./Icons";

type Crumb = { label: string; href?: string };

const SECONDARY_ITEMS = [
  {
    label: "Email",
    value: "abconstructiongroup1@gmail.com",
    href: "mailto:abconstructiongroup1@gmail.com",
    Icon: IconMail,
  },
  {
    label: "Address",
    value: "4912 Roper Road, Edmonton, AB T6B 3T7",
    href: "https://www.google.com/maps/search/?api=1&query=4912+Roper+Road+Edmonton+AB+T6B+3T7",
    Icon: IconPin,
  },
  {
    label: "Hours",
    value: "Monday–Saturday",
    Icon: IconClock,
  },
];

export default function ContactSection({
  eyebrow = "Request a Quote",
  heading = "Request your free quote.",
  intro = "Fill out the form and we will respond with scope, schedule notes, and the next step for your site — usually within one business day.",
  breadcrumbs,
  topPadded = false,
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
  breadcrumbs?: Crumb[];
  topPadded?: boolean;
}) {
  return (
    <section
      id="quote"
      className={`section bg-[color:var(--color-bg)] scroll-mt-24 ${
        topPadded ? "pt-36! md:pt-44!" : ""
      }`}
    >
      <div className="container-x grid items-stretch gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex h-full flex-col">
          {breadcrumbs && (
            <nav className="mb-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
              {breadcrumbs.map((b, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  {b.href ? (
                    <Link
                      href={b.href}
                      className="transition-colors hover:text-[color:var(--color-forest-700)]"
                    >
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

          <p className="eyebrow text-[color:var(--color-forest-700)]">{eyebrow}</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-4">
            {heading}
          </h2>
          <p className="mt-6 max-w-md text-[color:var(--color-ink-soft)] leading-relaxed">
            {intro}
          </p>

          {/* Prominent phone CTA — call directly */}
          <a
            href="tel:+17808185555"
            className="group mt-8 flex items-center justify-between gap-4 rounded-2xl bg-[color:var(--color-forest-900)] p-5 text-white transition-colors hover:bg-[color:var(--color-forest-950)]"
          >
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-steel-300)]">
                Prefer to talk? Call us directly
              </span>
              <span className="mt-1.5 block font-display text-2xl md:text-3xl font-medium">
                (780) 818-5555
              </span>
            </span>
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition-colors group-hover:bg-white group-hover:text-[color:var(--color-forest-900)]">
              <IconPhone size={22} />
            </span>
          </a>

          {/* Secondary contact info */}
          <div className="mt-6 space-y-5 border-t border-[color:var(--color-line)] pt-6">
            {SECONDARY_ITEMS.map((item) => {
              const Icon = item.Icon;
              const content = (
                <>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-forest-900)] text-[color:var(--color-steel-300)]">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-muted)]">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-[color:var(--color-ink)]">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="flex items-center gap-4">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="flex items-center gap-4">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
