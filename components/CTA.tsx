import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "./Icons";

export default function CTA() {
  return (
    <section id="contact" className="bg-[color:var(--color-bg)] pb-20 scroll-mt-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-forest-900)] text-[color:var(--color-bg)] p-10 md:p-16">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />
          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <p className="eyebrow text-[color:var(--color-steel-400)]">Ready When You Are</p>
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.05] font-medium mt-4">
                Let's build something<br />
                <span className="text-[color:var(--color-steel-300)]">great together.</span>
              </h2>
              <p className="mt-6 max-w-xl text-white/80 leading-relaxed">
                Tell us about your project — residential or commercial, single pour or full-site
                package. We'll respond with a clear scope, an honest timeline, and a quote you
                can actually use.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link
                href="mailto:info@abconstructiongroup.ca"
                className="btn btn-on-dark w-full lg:w-auto justify-center"
              >
                Request a Quote
                <IconArrowUpRight size={16} />
              </Link>
              <a
                href="tel:+17800000000"
                className="btn btn-outline-on-dark w-full lg:w-auto justify-center"
              >
                <IconPhone size={16} />
                (780) 000-0000
              </a>
              <p className="text-xs text-[color:var(--color-steel-300)] mt-1 lg:text-right">
                Edmonton & Alberta · Monday–Saturday
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
