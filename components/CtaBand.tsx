import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "./Icons";

export default function CtaBand({
  eyebrow = "Ready When You Are",
  title = "Let's build something",
  highlight = "great together.",
  body = "Tell us about your project — residential or commercial, a single pour or a full-site package. We'll respond with a clear scope, an honest timeline, and a quote you can actually use.",
}: {
  eyebrow?: string;
  title?: string;
  highlight?: string;
  body?: string;
}) {
  return (
    <section className="bg-[color:var(--color-bg)] pb-20 md:pb-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-[color:var(--color-forest-900)] p-10 text-[color:var(--color-bg)] md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="eyebrow text-[color:var(--color-steel-300)]">{eyebrow}</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.75rem)] font-medium leading-[1.05]">
                {title}
                <br />
                <span className="text-[color:var(--color-steel-300)]">{highlight}</span>
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-white/80">{body}</p>
            </div>
            <div className="flex flex-col gap-3 lg:items-end">
              <Link href="/contact#quote" className="btn btn-on-dark w-full justify-center lg:w-auto">
                Request a Quote
                <IconArrowUpRight size={16} />
              </Link>
              <a
                href="tel:+17808185555"
                className="btn btn-outline-on-dark w-full justify-center lg:w-auto"
              >
                <IconPhone size={16} />
                (780) 818-5555
              </a>
              <p className="mt-1 text-xs text-[color:var(--color-steel-300)] lg:text-right">
                Edmonton & Alberta · Monday–Saturday
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
