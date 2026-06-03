import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number };

function base(props: Props) {
  const { size = 24, ...rest } = props;
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

export function IconPump(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M3 18h7l3-4h5l3-3" />
      <rect x="3" y="11" width="6" height="7" rx="1" />
      <path d="M9 14h2" />
      <circle cx="20" cy="11" r="1" />
    </svg>
  );
}

export function IconFoundation(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M3 7l9-4 9 4" />
      <path d="M5 9v11M19 9v11" />
      <path d="M3 20h18" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

export function IconForming(props: Props) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 10h18M3 16h18M9 4v16M15 4v16" />
    </svg>
  );
}

export function IconDrop(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c3.5 4 6 7 6 10a6 6 0 1 1-12 0c0-3 2.5-6 6-10z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}

export function IconTruck(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h5l3 3v3h-8z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export function IconExcavator(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M3 17h13l4-4-2-2-5 1-3-4H6v5l-3 1z" />
      <circle cx="7" cy="19" r="2" />
      <circle cx="14" cy="19" r="2" />
      <path d="M15 8l3-3 2 2" />
    </svg>
  );
}

export function IconShield(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconTeam(props: Props) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M14 18.5c.6-2 2.4-3.5 4.5-3.5 1 0 1.9.3 2.5.8" />
    </svg>
  );
}

export function IconClock(props: Props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function IconSparkle(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 17l.7 1.8L21.5 19.5 19.7 20.2 19 22l-.7-1.8L16.5 19.5l1.8-.7z" />
    </svg>
  );
}

export function IconArrowRight(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowUpRight(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function IconChevronDown(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconPhone(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.7 3.6a2 2 0 0 1-.6 2L7.9 10.7a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2-.5l3.6.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function IconMail(props: Props) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconPin(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M12 22s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function IconCheck(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

export function IconStar(props: Props) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 3l2.7 5.5 6 .9-4.3 4.2 1 6L12 16.8 6.6 19.6l1-6L3.3 9.4l6-.9z" />
    </svg>
  );
}

export function IconQuote(props: Props) {
  return (
    <svg {...base(props)}>
      <path d="M7 8h3v3c0 2-1 4-3 5" />
      <path d="M15 8h3v3c0 2-1 4-3 5" />
    </svg>
  );
}

const map = {
  pump: IconPump,
  foundation: IconFoundation,
  forming: IconForming,
  drop: IconDrop,
  truck: IconTruck,
  excavator: IconExcavator,
};

export function ServiceIcon({
  name,
  ...props
}: { name: keyof typeof map } & Props) {
  const C = map[name];
  return <C {...props} />;
}
