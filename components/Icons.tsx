type IconName =
  | "card"
  | "cart"
  | "calendar"
  | "box"
  | "staff"
  | "heart"
  | "chart"
  | "nodes";

const paths: Record<IconName, React.ReactNode> = {
  card: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 10h19" />
      <path d="M6 14.5h4" />
    </>
  ),
  cart: (
    <>
      <path d="M2.5 4h2.2l2.3 10.5h10.2" />
      <path d="M6.4 7.5h14L18.6 14" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="15" rx="2.5" />
      <path d="M3 9.5h18M8 3.5v3M16 3.5v3" />
    </>
  ),
  box: (
    <>
      <path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7z" />
      <path d="M3.5 7 12 11.3 20.5 7M12 11.3v9.9" />
    </>
  ),
  staff: (
    <>
      <circle cx="9.2" cy="8.4" r="3.3" />
      <path d="M2.8 20c.6-3.6 3.2-5.6 6.4-5.6s5.8 2 6.4 5.6" />
      <path d="M16.4 5.6a3.2 3.2 0 0 1 0 6.1M18 14.8c2 .8 3 2.6 3.3 5.2" />
    </>
  ),
  heart: (
    <path d="M12 20.2S3.6 15.3 3.6 9.6A4.3 4.3 0 0 1 12 7.8a4.3 4.3 0 0 1 8.4 1.8c0 5.7-8.4 10.6-8.4 10.6z" />
  ),
  chart: (
    <>
      <path d="M4 20V10M9.3 20V4.5M14.7 20v-7M20 20V8" />
    </>
  ),
  nodes: (
    <>
      <circle cx="12" cy="5" r="2.3" />
      <circle cx="5" cy="19" r="2.3" />
      <circle cx="19" cy="19" r="2.3" />
      <path d="M10.4 6.8 6.4 16.9M13.6 6.8l4 10.1M7.3 19h9.4" />
    </>
  ),
};

export function Icon({
  name,
  size = 22,
}: {
  name: IconName;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
