const nodes = [
  { id: "reservations", label: "Orders", x: 19, y: 3 },
  { id: "payments", label: "Payments", x: 32, y: -1 },
  { id: "ordering", label: "Tables", x: 45, y: -1 },
  { id: "inventory", label: "Inventory", x: 58, y: 3 },
  { id: "staff", label: "Staff", x: 71, y: 3 },
  { id: "loyalty", label: "Loyalty", x: 82, y: 11 },
  { id: "analytics", label: "Analytics", x: 91, y: 18 },
] as const;

export function Lineup() {
  return (
    <div className="lineup-c1" aria-hidden="true">
      <img
        className="lineup-connectors"
        src="/tableworx-concept-1-pack/assets/icons/ecosystem-connectors.svg"
        alt=""
      />
      <div className="lineup-nodes">
        {nodes.map((node) => (
          <span
            className="lineup-node"
            key={node.label}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <i>
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <use
                  href={`/tableworx-concept-1-pack/assets/icons/icon-sprite.svg#${node.id}`}
                />
              </svg>
            </i>
            {node.label}
          </span>
        ))}
      </div>
      <object
        className="lineup-d5"
        data="/tableworx-concept-1-pack/assets/devices/d5-counter-pos.svg"
        type="image/svg+xml"
        aria-hidden="true"
      />
      <object
        className="lineup-p5"
        data="/tableworx-concept-1-pack/assets/devices/p5-hero-handheld.svg"
        type="image/svg+xml"
        aria-hidden="true"
      />
      <object
        className="lineup-d80b"
        data="/tableworx-concept-1-pack/assets/devices/d80b-receipt-printer.svg"
        type="image/svg+xml"
        aria-hidden="true"
      />
      <object
        className="lineup-t2"
        data="/tableworx-concept-1-pack/assets/devices/t2-tableside-tablet.svg"
        type="image/svg+xml"
        aria-hidden="true"
      />
    </div>
  );
}
