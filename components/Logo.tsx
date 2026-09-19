export function Logo({ light = false }: { light?: boolean }) {
  const disc = light ? "#ffffff" : "#0f151a";
  const mark = light ? "#0f151a" : "#ffffff";

  return (
    <span className="brand" style={{ color: light ? "#ffffff" : "var(--ink)" }}>
      <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="31" fill={disc} />
        <g fill={mark} transform="translate(32 32) rotate(-30) translate(-32 -32)">
          <rect x="29.6" y="26" width="4.8" height="24" rx="2.2" />
          <path d="M23.4 12h3.2v9.4h1.8V12h3.2v9.4h1.8V12h3.2v10.6c0 2.6-1.7 4.4-4.1 4.9V50h-4.9V27.5c-2.4-.5-4.2-2.3-4.2-4.9V12z" />
        </g>
        <g fill={mark} transform="translate(32 32) rotate(30) translate(-32 -32)">
          <rect x="30" y="24" width="4.2" height="26" rx="2" />
          <path d="M25.5 12h13c.9 8.6-3.2 14-6.5 14s-7.4-5.4-6.5-14z" />
        </g>
      </svg>
      TableWorx
    </span>
  );
}
