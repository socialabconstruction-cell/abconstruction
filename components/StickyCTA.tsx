"use client";

import Link from "next/link";
import { IconArrowUpRight, IconPhone } from "./Icons";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <div className="flex gap-2 border-t border-white/10 bg-black/95 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md">
        <a
          href="tel:+17800000000"
          className="btn btn-outline-on-dark flex-1 justify-center"
        >
          <IconPhone size={16} /> Call
        </a>
        <Link href="/contact" className="btn btn-on-dark flex-1 justify-center">
          Request
          <IconArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
