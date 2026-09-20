"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  acquisitionOptions,
  defaultTerm,
  financeTerms,
  formatRand,
  hardwareByRole,
  findHardware,
  monthlyInstalment,
  onceOffServices,
  quoteTerms,
  rateCard,
  RATES_CONFIRMED,
  softwareModules,
  type Acquisition,
  type HardwareRole,
} from "@/lib/quote-catalogue";
import { site } from "@/lib/site";

type Line = { code: string; qty: number; acquisition: Acquisition };

type QuoteLine = {
  key: string;
  group: string;
  label: string;
  detail: string;
  qty: number;
  onceOff: number;
  monthly: number;
};

const peripheralCodes = hardwareByRole("peripheral").map((item) => item.code);

function useLine(role: HardwareRole, startQty: number, fallback?: string) {
  const options = hardwareByRole(role);
  return useState<Line>({
    code: fallback ?? options[0]?.code ?? "",
    qty: startQty,
    acquisition: "purchase",
  });
}

export function QuoteBuilder() {
  const [term, setTerm] = useState<number>(defaultTerm);

  const [staticPos, setStaticPos] = useLine("static-pos", 1);
  const [mobilePos, setMobilePos] = useLine("mobile-pos", 4);
  const [kitchenHw, setKitchenHw] = useLine("kitchen", 0, "BYO-SCREEN");
  const [printer, setPrinter] = useLine("printer", 1);

  const [kdsStations, setKdsStations] = useState(1);
  const [peripherals, setPeripherals] = useState<Record<string, Line>>(() =>
    Object.fromEntries(
      peripheralCodes.map((code) => [code, { code, qty: 0, acquisition: "purchase" as Acquisition }])
    )
  );

  const optionalModules = softwareModules.filter((m) => !m.core && !m.driver);
  const [modules, setModules] = useState<string[]>(["guest", "analytics"]);
  const [services, setServices] = useState<string[]>(["install", "menu", "training"]);

  const summaryRef = useRef<HTMLElement | null>(null);
  const [summaryOnScreen, setSummaryOnScreen] = useState(false);

  const [details, setDetails] = useState({ client: "", contact: "", consultant: "" });
  const [issued, setIssued] = useState({ date: "", validUntil: "", reference: "" });

  // Dates are set after mount so server and client markup agree.
  useEffect(() => {
    const now = new Date();
    const until = new Date(now.getTime() + rateCard.validDays * 86400000);
    const fmt = (d: Date) =>
      d.toLocaleDateString("en-ZA", { day: "2-digit", month: "short", year: "numeric" });
    const ref = `TW-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
      now.getDate()
    ).padStart(2, "0")}-${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
    setIssued({ date: fmt(now), validUntil: fmt(until), reference: ref });
  }, []);

  // The floating total is redundant once the full summary is in view.
  useEffect(() => {
    const el = summaryRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setSummaryOnScreen(entry.isIntersecting),
      { rootMargin: "-80px 0px -120px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const lines = useMemo<QuoteLine[]>(() => {
    const out: QuoteLine[] = [];

    const pushHardware = (group: string, line: Line) => {
      const item = findHardware(line.code);
      if (!item || line.qty <= 0) return;
      const cash = item.price * line.qty;
      const perUnit = monthlyInstalment(item.price, line.acquisition, term);
      const label = acquisitionOptions.find((a) => a.id === line.acquisition)?.short ?? "";
      out.push({
        key: `${group}-${item.code}`,
        group,
        label: item.name,
        detail:
          line.acquisition === "purchase"
            ? `${label} · ${formatRand(item.price)} each`
            : `${label} over ${term} months · ${perUnit ? formatRand(perUnit) : "—"} each p/m`,
        qty: line.qty,
        onceOff: line.acquisition === "purchase" ? cash : 0,
        monthly: perUnit ? perUnit * line.qty : 0,
      });
    };

    pushHardware("Counter positions", staticPos);
    pushHardware("Floor devices", mobilePos);
    pushHardware("Kitchen", kitchenHw);
    pushHardware("Printing", printer);
    peripheralCodes.forEach((code) => {
      const line = peripherals[code];
      if (line) pushHardware("Peripherals", line);
    });

    const driverQty = (driver?: string) => {
      if (driver === "staticPos") return staticPos.qty;
      if (driver === "mobilePos") return mobilePos.qty;
      if (driver === "kdsStations") return kdsStations;
      return 1;
    };

    softwareModules.forEach((module) => {
      const selected = module.core || module.driver || modules.includes(module.id);
      if (!selected) return;
      const qty = module.driver ? driverQty(module.driver) : 1;
      if (qty <= 0) return;
      out.push({
        key: `sw-${module.id}`,
        group: "Software subscription",
        label: module.name,
        detail: `${formatRand(module.monthly)} per ${module.unit} p/m`,
        qty,
        onceOff: 0,
        monthly: module.monthly * qty,
      });
    });

    onceOffServices.forEach((service) => {
      if (!services.includes(service.id)) return;
      out.push({
        key: `svc-${service.id}`,
        group: "Services",
        label: service.name,
        detail: "Once off",
        qty: 1,
        onceOff: service.price,
        monthly: 0,
      });
    });

    return out;
  }, [staticPos, mobilePos, kitchenHw, printer, peripherals, kdsStations, modules, services, term]);

  const totals = useMemo(() => {
    const onceOff = lines.reduce((sum, l) => sum + l.onceOff, 0);
    const monthly = lines.reduce((sum, l) => sum + l.monthly, 0);
    return {
      onceOff,
      monthly,
      onceOffVat: onceOff * rateCard.vatRate,
      monthlyVat: monthly * rateCard.vatRate,
      onceOffIncl: onceOff * (1 + rateCard.vatRate),
      monthlyIncl: monthly * (1 + rateCard.vatRate),
      firstPayment: onceOff * (1 + rateCard.vatRate) + monthly * (1 + rateCard.vatRate),
    };
  }, [lines]);

  const grouped = useMemo(() => {
    const map = new Map<string, QuoteLine[]>();
    lines.forEach((line) => {
      const list = map.get(line.group) ?? [];
      list.push(line);
      map.set(line.group, list);
    });
    return [...map.entries()];
  }, [lines]);

  const toggle = (list: string[], set: (v: string[]) => void, id: string) =>
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  const hardwareBlock = (
    title: string,
    help: string,
    role: HardwareRole,
    line: Line,
    setLine: (l: Line) => void
  ) => (
    <div className="q-block">
      <div className="q-block-head">
        <h3>{title}</h3>
        <p>{help}</p>
      </div>
      <div className="q-row">
        <label>
          <span>Model</span>
          <select value={line.code} onChange={(e) => setLine({ ...line, code: e.target.value })}>
            {hardwareByRole(role).map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="q-qty">
          <span>Quantity</span>
          <input
            type="number"
            min={0}
            max={99}
            value={line.qty}
            onChange={(e) => setLine({ ...line, qty: Math.max(0, Number(e.target.value) || 0) })}
          />
        </label>
        <label>
          <span>Acquisition</span>
          <select
            value={line.acquisition}
            onChange={(e) => setLine({ ...line, acquisition: e.target.value as Acquisition })}
          >
            {acquisitionOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      {findHardware(line.code) && (
        <p className="q-specs">{findHardware(line.code)!.specs.join(" · ")}</p>
      )}
    </div>
  );

  return (
    <div className="quote">
      {!RATES_CONFIRMED && (
        <p className="q-warning" role="alert">
          <b>Provisional rate card — not for client use.</b> Only the R1 500 core
          subscription is a confirmed figure. Every hardware price, finance factor
          and module rate below is a placeholder in{" "}
          <code>lib/quote-catalogue.ts</code>.
        </p>
      )}

      <div className="q-layout">
        <div className="q-config">
          <div className="q-block">
            <div className="q-block-head">
              <h3>Quote details</h3>
              <p>Printed at the head of the quotation.</p>
            </div>
            <div className="q-row">
              <label>
                <span>Restaurant</span>
                <input
                  value={details.client}
                  placeholder="Restaurant name"
                  onChange={(e) => setDetails({ ...details, client: e.target.value })}
                />
              </label>
              <label>
                <span>Contact</span>
                <input
                  value={details.contact}
                  placeholder="Owner or manager"
                  onChange={(e) => setDetails({ ...details, contact: e.target.value })}
                />
              </label>
              <label>
                <span>Prepared by</span>
                <input
                  value={details.consultant}
                  placeholder="Consultant"
                  onChange={(e) => setDetails({ ...details, consultant: e.target.value })}
                />
              </label>
            </div>
          </div>

          {hardwareBlock(
            "Counter positions",
            "Static till positions — one per fixed point of sale in the restaurant.",
            "static-pos",
            staticPos,
            setStaticPos
          )}

          {hardwareBlock(
            "Floor devices",
            "Mobile POS handhelds, typically one per waiter on shift.",
            "mobile-pos",
            mobilePos,
            setMobilePos
          )}

          <div className="q-block">
            <div className="q-block-head">
              <h3>Kitchen</h3>
              <p>
                KDS runs in any browser, so screens you already own cost nothing.
                Licences are charged per station.
              </p>
            </div>
            <div className="q-row">
              <label className="q-qty">
                <span>KDS stations</span>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={kdsStations}
                  onChange={(e) => setKdsStations(Math.max(0, Number(e.target.value) || 0))}
                />
              </label>
              <label>
                <span>Screens</span>
                <select
                  value={kitchenHw.code}
                  onChange={(e) => setKitchenHw({ ...kitchenHw, code: e.target.value })}
                >
                  {hardwareByRole("kitchen").map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="q-qty">
                <span>Screen qty</span>
                <input
                  type="number"
                  min={0}
                  max={20}
                  value={kitchenHw.qty}
                  onChange={(e) =>
                    setKitchenHw({ ...kitchenHw, qty: Math.max(0, Number(e.target.value) || 0) })
                  }
                />
              </label>
              <label>
                <span>Acquisition</span>
                <select
                  value={kitchenHw.acquisition}
                  onChange={(e) =>
                    setKitchenHw({ ...kitchenHw, acquisition: e.target.value as Acquisition })
                  }
                >
                  {acquisitionOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {hardwareBlock(
            "Printing",
            "Docket and receipt printers for the kitchen, bar and counter.",
            "printer",
            printer,
            setPrinter
          )}

          <div className="q-block">
            <div className="q-block-head">
              <h3>Peripherals</h3>
              <p>Optional extras. Leave at zero if they are not needed.</p>
            </div>
            {peripheralCodes.map((code) => {
              const item = findHardware(code)!;
              const line = peripherals[code];
              return (
                <div className="q-row q-row-tight" key={code}>
                  <label>
                    <span>Device</span>
                    <p className="q-peri">{item.name}</p>
                  </label>
                  <label className="q-qty">
                    <span>Qty</span>
                    <input
                      type="number"
                      min={0}
                      max={99}
                      value={line.qty}
                      onChange={(e) =>
                        setPeripherals({
                          ...peripherals,
                          [code]: { ...line, qty: Math.max(0, Number(e.target.value) || 0) },
                        })
                      }
                    />
                  </label>
                  <label>
                    <span>Acquisition</span>
                    <select
                      value={line.acquisition}
                      onChange={(e) =>
                        setPeripherals({
                          ...peripherals,
                          [code]: { ...line, acquisition: e.target.value as Acquisition },
                        })
                      }
                    >
                      {acquisitionOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              );
            })}
          </div>

          <div className="q-block">
            <div className="q-block-head">
              <h3>Finance term</h3>
              <p>Applies to every rent-to-own and rental line on the quote.</p>
            </div>
            <div className="q-terms">
              {financeTerms.map((months) => (
                <button
                  key={months}
                  type="button"
                  className={term === months ? "is-active" : undefined}
                  onClick={() => setTerm(months)}
                >
                  {months} months
                </button>
              ))}
            </div>
            <ul className="q-legend">
              {acquisitionOptions.map((option) => (
                <li key={option.id}>
                  <b>{option.label}</b> {option.note}
                </li>
              ))}
            </ul>
          </div>

          <div className="q-block">
            <div className="q-block-head">
              <h3>Software</h3>
              <p>
                The core subscription is always included. Till, waiter and KDS
                licences follow the quantities above.
              </p>
            </div>
            <ul className="q-modules">
              {softwareModules
                .filter((m) => m.core || m.driver)
                .map((module) => (
                  <li key={module.id} className="is-fixed">
                    <span>
                      <b>{module.name}</b>
                      <small>{module.blurb}</small>
                    </span>
                    <em>
                      {formatRand(module.monthly)} / {module.unit}
                    </em>
                  </li>
                ))}
              {optionalModules.map((module) => (
                <li key={module.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={modules.includes(module.id)}
                      onChange={() => toggle(modules, setModules, module.id)}
                    />
                    <span>
                      <b>{module.name}</b>
                      <small>{module.blurb}</small>
                    </span>
                  </label>
                  <em>
                    {formatRand(module.monthly)} / {module.unit}
                  </em>
                </li>
              ))}
            </ul>
          </div>

          <div className="q-block">
            <div className="q-block-head">
              <h3>Once-off services</h3>
              <p>Getting the restaurant live.</p>
            </div>
            <ul className="q-modules">
              {onceOffServices.map((service) => (
                <li key={service.id}>
                  <label>
                    <input
                      type="checkbox"
                      checked={services.includes(service.id)}
                      onChange={() => toggle(services, setServices, service.id)}
                    />
                    <span>
                      <b>{service.name}</b>
                      <small>{service.blurb}</small>
                    </span>
                  </label>
                  <em>{formatRand(service.price)}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="q-summary" id="quote-summary" ref={summaryRef}>
          <div className="q-summary-inner">
            <div className="q-letterhead" aria-hidden="true">
              <div>
                <b>{site.legalName}</b>
                <span>{site.address.line1}</span>
                <span>
                  {site.address.line2}, {site.address.line3}
                </span>
              </div>
              <div>
                <b>Quotation</b>
                <span>{site.email}</span>
                <span>{site.phone}</span>
              </div>
            </div>

            {!RATES_CONFIRMED && <p className="q-stamp">Indicative only</p>}

            <div className="q-meta">
              <div>
                <span>Quote</span>
                <b>{issued.reference || "—"}</b>
              </div>
              <div>
                <span>Issued</span>
                <b>{issued.date || "—"}</b>
              </div>
              <div>
                <span>Valid until</span>
                <b>{issued.validUntil || "—"}</b>
              </div>
            </div>

            {details.client && (
              <p className="q-client">
                Prepared for <b>{details.client}</b>
                {details.contact ? ` · ${details.contact}` : ""}
                {details.consultant ? ` · by ${details.consultant}` : ""}
              </p>
            )}

            <div className="q-headline">
              <div>
                <span>Monthly</span>
                <b>{formatRand(totals.monthly)}</b>
                <small>excl VAT · {formatRand(totals.monthlyIncl)} incl</small>
              </div>
              <div>
                <span>Once off</span>
                <b>{formatRand(totals.onceOff)}</b>
                <small>excl VAT · {formatRand(totals.onceOffIncl)} incl</small>
              </div>
            </div>

            <p className="q-first">
              Payable to get started, including the first month:{" "}
              <b>{formatRand(totals.firstPayment)}</b> incl VAT
            </p>

            <div className="q-lines">
              {grouped.map(([group, items]) => (
                <section key={group}>
                  <h4>{group}</h4>
                  {items.map((line) => (
                    <div className="q-line" key={line.key}>
                      <div>
                        <b>
                          {line.qty > 1 ? `${line.qty} x ` : ""}
                          {line.label}
                        </b>
                        <small>{line.detail}</small>
                      </div>
                      <span>
                        {line.monthly > 0 && <em>{formatRand(line.monthly)} p/m</em>}
                        {line.onceOff > 0 && <em>{formatRand(line.onceOff)}</em>}
                      </span>
                    </div>
                  ))}
                </section>
              ))}
              {lines.length === 0 && <p className="q-empty">Add quantities to build the quote.</p>}
            </div>

            <ul className="q-terms-list">
              {quoteTerms.map((clause) => (
                <li key={clause}>{clause}</li>
              ))}
            </ul>

            <button className="btn q-print" type="button" onClick={() => window.print()}>
              Print or save as PDF
            </button>
          </div>
        </aside>
      </div>

      <div className={summaryOnScreen ? "q-sticky is-hidden" : "q-sticky"}>
        <div>
          <span>Monthly</span>
          <b>{formatRand(totals.monthly)}</b>
        </div>
        <div>
          <span>Once off</span>
          <b>{formatRand(totals.onceOff)}</b>
        </div>
        <a href="#quote-summary">Full quote</a>
      </div>
    </div>
  );
}
