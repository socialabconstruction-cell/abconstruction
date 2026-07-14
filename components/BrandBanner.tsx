import Image from "next/image";
import Link from "next/link";

/**
 * Full-width branded promo banner (client-supplied graphic with baked-in
 * headline + service icons). Links straight to the quote form.
 */
export default function BrandBanner() {
  return (
    <section className="bg-[color:var(--color-bg)] pb-16 md:pb-24">
      <div className="container-x">
        <Link
          href="/contact#quote"
          aria-label="Request a quote from AB Construction Group"
          className="group block overflow-hidden rounded-2xl ring-1 ring-[color:var(--color-line)] shadow-sm transition-shadow hover:shadow-xl"
        >
          <Image
            src="/images/fleet/brand-banner.jpg"
            alt="AB Construction Group — concrete pumping, footings, waterproofing, excavation, trucking, and aggregate supply for builders across Alberta"
            width={1600}
            height={1066}
            sizes="(min-width: 1024px) 90vw, 100vw"
            className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </Link>
      </div>
    </section>
  );
}
