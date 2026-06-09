import type { Metadata } from "next";
import SplitHero from "@/components/SplitHero";
import ContactSection from "@/components/ContactSection";
import ServiceAreas from "@/components/ServiceAreas";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";
import { IconClock, IconMail, IconPhone, IconPin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact — Request a Construction Quote in Edmonton",
  description:
    "Get in touch with AB Construction Group for concrete, foundations, excavation, waterproofing, and aggregate supply across Greater Edmonton and Alberta. Request a quote today.",
  alternates: { canonical: "/contact" },
};

const QUICK = [
  { label: "Call", value: "(780) 000-0000", href: "tel:+17800000000", Icon: IconPhone },
  {
    label: "Email",
    value: "info@abconstructiongroup.ca",
    href: "mailto:info@abconstructiongroup.ca",
    Icon: IconMail,
  },
  { label: "Service area", value: "Greater Edmonton & Alberta", Icon: IconPin },
  { label: "Hours", value: "Monday–Saturday", Icon: IconClock },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <SplitHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Tell us about"
        highlight="your project."
        description="Send the project details and we'll respond with scope, schedule notes, and the next step for your site. For urgent work, give us a call directly."
        bullets={[
          "Free, no-pressure quotes",
          "Residential & commercial",
          "Response within one business day",
          "Edmonton & Alberta-wide",
        ]}
        image="/images/unique/blueprint-review.jpg"
        imageAlt="Project plans being reviewed before construction work begins"
        badge="Free Quotes"
        primary={{ label: "Send a Message", href: "#contact" }}
        secondary={{ label: "Our Services", href: "/services" }}
      />

      {/* Quick contact strip */}
      <section className="bg-black text-white">
        <div className="container-x grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
          {QUICK.map((q) => {
            const Icon = q.Icon;
            const content = (
              <>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/8 text-[color:var(--color-steel-300)] ring-1 ring-white/10">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55">
                    {q.label}
                  </span>
                  <span className="mt-1 block text-sm font-medium text-white">{q.value}</span>
                </span>
              </>
            );
            return q.href ? (
              <a
                key={q.label}
                href={q.href}
                className="flex items-center gap-3.5 transition-opacity hover:opacity-80"
              >
                {content}
              </a>
            ) : (
              <div key={q.label} className="flex items-center gap-3.5">
                {content}
              </div>
            );
          })}
        </div>
      </section>

      <ContactSection />

      <ServiceAreas
        eyebrow="Service Areas"
        heading="Construction crews across Greater Edmonton"
        intro="Based in Edmonton and working throughout the surrounding communities and across Alberta. Tell us where your project is and we'll confirm availability and timing."
      />
    </>
  );
}
