"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { lineupNodes } from "@/lib/site";

type LineupNode = (typeof lineupNodes)[number];

function buttonAsset(id: LineupNode["id"], state: "default" | "hover" | "active") {
  return `/tableworx-buttons/${id}-${state}.svg`;
}

export function Lineup() {
  const [activeId, setActiveId] = useState<LineupNode["id"] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const active = lineupNodes.find((node) => node.id === activeId) ?? null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active) {
      if (!dialog.open) dialog.showModal();
      return;
    }

    if (dialog.open) dialog.close();
  }, [active]);

  function closePreview() {
    dialogRef.current?.close();
  }

  return (
    <div className="lineup-c1">
      <img
        className="lineup-connectors"
        src="/tableworx-concept-1-pack/assets/icons/ecosystem-connectors.svg"
        alt=""
      />
      <div className="lineup-nodes">
        {lineupNodes.map((node) => {
          const selected = activeId === node.id;
          return (
            <button
              className={selected ? "lineup-node is-active" : "lineup-node"}
              key={node.id}
              type="button"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              aria-haspopup="dialog"
              aria-controls="lineup-preview"
              aria-pressed={selected}
              onClick={() => setActiveId(node.id)}
            >
              <span className="lineup-node-icon" aria-hidden="true">
                <img className="default" src={buttonAsset(node.id, "default")} alt="" />
                <img className="hover" src={buttonAsset(node.id, "hover")} alt="" />
                <img className="active" src={buttonAsset(node.id, "active")} alt="" />
              </span>
              {node.label}
            </button>
          );
        })}
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
      <dialog
        id="lineup-preview"
        ref={dialogRef}
        className="lineup-dialog"
        aria-labelledby="lineup-preview-title"
        onClose={() => setActiveId(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        {active ? <LineupPreview node={active} onClose={closePreview} /> : null}
      </dialog>
    </div>
  );
}

function LineupPreview({
  node,
  onClose,
}: {
  node: LineupNode;
  onClose: () => void;
}) {
  return (
    <div className="lineup-dialog-card">
      <button
        className="lineup-dialog-close"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Close"
      >
        ×
      </button>
      <LineupPreviewImage
        key={node.image}
        src={node.image}
        alt={`${node.label} preview`}
        nodeId={node.id}
      />
      <div className="lineup-dialog-copy">
        <p className="kicker">{node.label}</p>
        <h2 id="lineup-preview-title">{node.title}</h2>
        <p className="lede">{node.body}</p>
        <div className="lineup-dialog-actions">
          <Link className="btn" href={node.href}>
            Learn more <span aria-hidden="true">→</span>
          </Link>
          <Link className="btn btn-ghost" href="/demo">
            Book a demo
          </Link>
        </div>
      </div>
    </div>
  );
}

function LineupPreviewImage({
  src,
  alt,
  nodeId,
}: {
  src: string;
  alt: string;
  nodeId: LineupNode["id"];
}) {
  const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");

  return (
    <div className="lineup-dialog-media">
      {status !== "ready" ? (
        <div className="lineup-dialog-placeholder">
          <img src={buttonAsset(nodeId, "default")} alt="" />
          <span>{status === "failed" ? "Screenshot coming soon" : "Loading preview"}</span>
        </div>
      ) : null}
      {status !== "failed" ? (
        <img
          className="lineup-dialog-image"
          src={src}
          alt={alt}
          hidden={status !== "ready"}
          onLoad={() => setStatus("ready")}
          onError={() => setStatus("failed")}
        />
      ) : null}
    </div>
  );
}
