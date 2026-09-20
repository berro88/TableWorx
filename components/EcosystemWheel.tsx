"use client";

import { ecosystemHub, ecosystemStages } from "@/lib/ecosystem";

const SIZE = 720;
const C = SIZE / 2;
const RING = 248;
const NODE = 58;
const HUB = 104;

function pointAt(index: number, radius = RING) {
  const angle = (-90 + index * (360 / ecosystemStages.length)) * (Math.PI / 180);
  return { x: C + radius * Math.cos(angle), y: C + radius * Math.sin(angle), angle };
}

/** Arc along the ring from one node to the next, trimmed clear of both. */
function arcBetween(from: number, to: number) {
  const span = 360 / ecosystemStages.length;
  const gap = 17;
  const a1 = (-90 + from * span + gap) * (Math.PI / 180);
  const a2 = (-90 + to * span - gap) * (Math.PI / 180);
  const x1 = C + RING * Math.cos(a1);
  const y1 = C + RING * Math.sin(a1);
  const x2 = C + RING * Math.cos(a2);
  const y2 = C + RING * Math.sin(a2);
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${RING} ${RING} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

export function EcosystemWheel({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  const stage = ecosystemStages[active];

  return (
    <div className="wheel">
      <div className="wheel-figure">
        <svg viewBox={`0 0 ${SIZE} ${SIZE}`} role="img" aria-label="The TableWorx service loop">
          <defs>
            <marker
              id="wheel-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
            </marker>
          </defs>

          <circle className="wheel-track" cx={C} cy={C} r={RING} />

          {ecosystemStages.map((s, i) => {
            const next = (i + 1) % ecosystemStages.length;
            return (
              <path
                key={`arc-${s.id}`}
                className={i === active ? "wheel-arc is-active" : "wheel-arc"}
                d={arcBetween(i, next)}
                markerEnd="url(#wheel-arrow)"
              />
            );
          })}

          {ecosystemStages.map((s, i) => {
            const p = pointAt(i);
            const inner = pointAt(i, HUB + 16);
            return (
              <line
                key={`spoke-${s.id}`}
                className={i === active ? "wheel-spoke is-active" : "wheel-spoke"}
                x1={p.x}
                y1={p.y}
                x2={inner.x}
                y2={inner.y}
              />
            );
          })}

          <circle className="wheel-hub" cx={C} cy={C} r={HUB} />
          <text className="wheel-hub-title" x={C} y={C - 10} textAnchor="middle">
            TableWorx
          </text>
          <text className="wheel-hub-sub" x={C} y={C + 14} textAnchor="middle">
            {ecosystemHub.title}
          </text>

          {ecosystemStages.map((s, i) => {
            const p = pointAt(i);
            const isActive = i === active;
            return (
              <g
                key={s.id}
                className={isActive ? "wheel-node is-active" : "wheel-node"}
                onClick={() => onSelect(i)}
                role="button"
                tabIndex={0}
                aria-label={`${s.step} ${s.label}`}
                aria-pressed={isActive}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelect(i);
                  }
                }}
              >
                <circle cx={p.x} cy={p.y} r={NODE} />
                <text className="wheel-node-step" x={p.x} y={p.y - 8} textAnchor="middle">
                  {s.step}
                </text>
                <text className="wheel-node-label" x={p.x} y={p.y + 16} textAnchor="middle">
                  {s.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <aside className="wheel-detail" aria-live="polite">
        <p className="kicker">
          Step {stage.step} of {String(ecosystemStages.length).padStart(2, "0")}
        </p>
        <h3>{stage.title}</h3>
        <p className="wheel-body">{stage.body}</p>

        <p className="wheel-feeds">
          <span>Hands on</span>
          {stage.feeds}
        </p>

        <div className="wheel-lists">
          <div>
            <p className="cap-label">Plugs into</p>
            <ul>
              {stage.plugs.map((plug) => (
                <li key={plug}>{plug}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="cap-label">On</p>
            <ul>
              {stage.devices.map((device) => (
                <li key={device}>{device}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wheel-dots" role="tablist" aria-label="Service loop stages">
          {ecosystemStages.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={s.label}
              className={i === active ? "is-active" : undefined}
              onClick={() => onSelect(i)}
            />
          ))}
        </div>
      </aside>
    </div>
  );
}
