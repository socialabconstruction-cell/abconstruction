import Image from "next/image";
import ContactForm from "./ContactForm";
import { IconMail, IconPhone, IconPin } from "./Icons";

const CONTACT_ITEMS = [
  {
    label: "Call",
    value: "(780) 000-0000",
    href: "tel:+17800000000",
    Icon: IconPhone,
  },
  {
    label: "Email",
    value: "info@abconstructiongroup.ca",
    href: "mailto:info@abconstructiongroup.ca",
    Icon: IconMail,
  },
  {
    label: "Service area",
    value: "Greater Edmonton & Alberta",
    Icon: IconPin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section bg-[color:var(--color-bg)] scroll-mt-24">
      <div className="container-x grid items-stretch gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex h-full flex-col">
          <p className="eyebrow text-[color:var(--color-forest-700)]">Contact</p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-medium mt-4">
            Tell us about your project.
          </h2>
          <p className="mt-6 max-w-md text-[color:var(--color-ink-soft)] leading-relaxed">
            Send the project details and we will respond with scope, schedule notes, and the next
            step for your site.
          </p>

          <div className="mt-9 space-y-5 border-y border-[color:var(--color-line)] py-6">
            {CONTACT_ITEMS.map((item) => {
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

          <div className="relative mt-8 min-h-[260px] flex-1 overflow-hidden rounded-lg ring-1 ring-[color:var(--color-line)]">
            <Image
              src="/images/unique/blueprint-review.jpg"
              alt="Project plans being reviewed before construction work begins"
              fill
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
