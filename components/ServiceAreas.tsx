import Link from "next/link";
import { IconArrowUpRight, IconPin } from "./Icons";
import { SERVICE_AREAS, EDMONTON_COMMUNITIES } from "@/lib/seo";

/**
 * "Areas We Serve" — keyword-rich local section listing the Greater Edmonton
 * municipalities and Edmonton neighbourhoods the crews cover. Copy is
 * configurable per page so each page reads differently (avoids duplicate copy).
 */
export default function ServiceAreas({
  eyebrow = "Service Areas",
  heading = "Serving Edmonton, Red Deer & communities across Alberta",
  intro = "AB Construction Group delivers concrete, foundations, excavation, waterproofing, and aggregate supply well beyond Edmonton — from Red Deer and Leduc to Spruce Grove, Beaumont, Stony Plain, St. Albert, Smoky Lake, and across central Alberta. Tell us where your build is and our crews can be on site.",
}: {
  eyebrow?: string;
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="section bg-[color:var(--color-paper)]">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — narrative + CTA */}
          <div>
            <p className="eyebrow text-[color:var(--color-forest-700)]">
              <span className="mr-3 inline-block h-[1px] w-8 align-middle bg-[color:var(--color-forest-700)]" />
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.06]">
              {heading}
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-[color:var(--color-ink-soft)]">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#quote" className="btn btn-primary">
                Request a Quote
                <IconArrowUpRight size={16} />
              </Link>
              <Link href="/services" className="btn btn-ghost">
                View Services
              </Link>
            </div>
          </div>

          {/* Right — municipalities + neighbourhoods */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] tracking-[0.3em] text-[color:var(--color-forest-700)]">
                CITIES&nbsp;&amp;&nbsp;TOWNS&nbsp;WE&nbsp;SERVE
              </span>
              <span className="h-px flex-1 bg-[color:var(--color-line)]" />
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 text-sm text-[color:var(--color-ink-soft)]"
                >
                  <IconPin
                    size={13}
                    className="shrink-0 text-[color:var(--color-forest-700)]"
                  />
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-9 border-t border-[color:var(--color-line)] pt-7">
              <p className="font-mono text-[10px] tracking-[0.3em] text-[color:var(--color-muted)]">
                EDMONTON&nbsp;NEIGHBOURHOODS
              </p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {EDMONTON_COMMUNITIES.map((c) => (
                  <span
                    key={c}
                    className="rounded-full bg-[color:var(--color-bg)] px-3 py-1 text-xs font-medium text-[color:var(--color-ink-soft)] ring-1 ring-[color:var(--color-line)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs text-[color:var(--color-muted)]">
                Don&apos;t see your community? We work across the Greater Edmonton
                Area and beyond — just ask.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
