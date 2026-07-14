import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[color:var(--color-bg)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 10%, transparent 75%)",
        }}
      />
      <div className="container-x relative pt-28 pb-20 text-center md:pt-36">
        <p className="eyebrow text-[color:var(--color-forest-700)]">Error 404</p>
        <h1 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium leading-[1.04]">
          This page isn&apos;t on
          <br />
          <span className="text-[color:var(--color-steel-500)]">our site plan.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-[color:var(--color-ink-soft)]">
          The page you&apos;re looking for may have moved or never existed. Let&apos;s get you back on
          solid ground.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary w-full justify-center sm:w-auto">
            Back to Home
            <IconArrowUpRight size={16} />
          </Link>
          <Link href="/services" className="btn btn-ghost w-full justify-center sm:w-auto">
            View Services
          </Link>
          <a
            href="tel:+17808185555"
            className="hidden items-center gap-2 text-sm font-medium text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-forest-700)] sm:ml-2 sm:inline-flex"
          >
            <IconPhone size={16} /> (780) 818-5555
          </a>
        </div>
      </div>
    </section>
  );
}
