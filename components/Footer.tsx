import Link from "next/link";
import Logo from "./Logo";
import { SERVICES } from "@/lib/services";
import { IconArrowUpRight, IconMail, IconPhone, IconPin } from "./Icons";

const COMPANY = [
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#work", label: "Our Work" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

function MapleLeaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="currentColor" aria-hidden>
      <path d="M32 4l3.5 9.5 9-3-3 9 9.5 3.5-7 5 4 9-9.5-1.5L36 46l-2-7-2 7-2.5-10.5L20 37l4-9-7-5 9.5-3.5-3-9 9 3z" />
      <path d="M30 44h4l-2 16z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-white pb-20 lg:pb-0">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "96px 96px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 70% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 70% 0%, #000 20%, transparent 75%)",
        }}
      />

      <div className="container-x relative">
        {/* CTA band */}
        <div className="flex flex-col gap-8 border-b border-white/12 py-14 md:flex-row md:items-end md:justify-between md:py-16">
          <div>
            <span className="font-mono text-[10px] tracking-[0.35em] text-white">
              READY WHEN YOU ARE
            </span>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] font-medium leading-[1.05]">
              Let&apos;s build something
              <br className="hidden sm:block" /> solid together.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="#contact" className="btn btn-on-dark">
              Request a Quote
              <IconArrowUpRight size={16} />
            </Link>
            <a href="tel:+17800000000" className="btn btn-outline-on-dark">
              <IconPhone size={16} />
              (780) 000-0000
            </a>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-16">
          <div>
            <Logo className="h-16 w-auto md:h-20" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white">
              Edmonton-based construction company specializing in residential and
              commercial foundations, concrete, excavation, waterproofing, and
              aggregate supply across Alberta.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
              <MapleLeaf className="h-4 w-4 text-[color:var(--color-forest-700)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                Alberta Owned
              </span>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
              Company
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {COMPANY.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-white transition-colors hover:text-white"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`#service-${s.slug}`}
                    className="text-white transition-colors hover:text-white"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white">
              Get in Touch
            </p>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white">
                <IconPin size={18} className="mt-0.5 shrink-0 text-white" />
                <span>Serving Greater Edmonton & Alberta</span>
              </li>
              <li className="flex items-start gap-3 text-white">
                <IconPhone size={18} className="mt-0.5 shrink-0 text-white" />
                <a href="tel:+17800000000" className="hover:text-white">
                  (780) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-3 text-white">
                <IconMail size={18} className="mt-0.5 shrink-0 text-white" />
                <a
                  href="mailto:info@abconstructiongroup.ca"
                  className="break-all hover:text-white"
                >
                  info@abconstructiongroup.ca
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/12">
        <div className="container-x relative flex flex-col items-start justify-between gap-x-6 gap-y-3 py-6 text-xs text-white md:flex-row md:items-center">
          <p>© {year} AB Construction Group. All rights reserved.</p>
          <p className="font-mono tracking-[0.2em] uppercase text-white">
            Built in Edmonton · Serving Alberta
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://townmedialabs.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-2 hover:opacity-80"
            >
              townmedialabs.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
