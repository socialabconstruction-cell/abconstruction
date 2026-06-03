import Link from "next/link";
import Image from "next/image";

export default function Logo({
  light = false,
  className = "h-11 w-auto md:h-12",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="AB Construction Group — home"
      className="inline-flex items-center"
    >
      <Image
        src={light ? "/logo-white.png" : "/logo-red.png"}
        alt="AB Construction Group"
        width={727}
        height={541}
        priority
        className={className}
      />
    </Link>
  );
}
