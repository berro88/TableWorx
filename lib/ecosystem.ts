/**
 * The TableWorx service loop — the circular flow the sales deck walks through.
 * Each stage names what happens, what plugs into it, and on which device.
 */

export type EcosystemStage = {
  id: string;
  step: string;
  label: string;
  title: string;
  body: string;
  /** What this stage hands to the rest of the platform. */
  feeds: string;
  plugs: string[];
  devices: string[];
};

export const ecosystemStages: EcosystemStage[] = [
  {
    id: "guest",
    step: "01",
    label: "Guest",
    title: "The guest arrives and scans",
    body: "A QR code on the table opens the menu in the guest's browser. No app, no download, no waiting to be noticed.",
    feeds: "Table, covers and guest session",
    plugs: ["Menu & pricing", "Table management", "Loyalty profile"],
    devices: ["Guest's own phone", "T2 tableside tablet"],
  },
  {
    id: "order",
    step: "02",
    label: "Order",
    title: "The order is taken once",
    body: "Whether the guest orders themselves or a waiter takes it on a handheld, it is the same ticket. Nothing is rekeyed at a till.",
    feeds: "One ticket, shared by every station",
    plugs: ["Waiter app", "Customer app", "POS till"],
    devices: ["P5 / P5L handheld", "D5 counter POS", "Guest's own phone"],
  },
  {
    id: "kitchen",
    step: "03",
    label: "Kitchen",
    title: "The kitchen sees it instantly",
    body: "Items route to the station that cooks them. Colour-coded status keeps the pass honest about what is queued, preparing and ready.",
    feeds: "Course timing and ready signals",
    plugs: ["KDS stations", "Printers for dockets", "Course firing"],
    devices: ["KDS in any browser", "D80B docket printer"],
  },
  {
    id: "service",
    step: "04",
    label: "Service",
    title: "Ready hits the floor",
    body: "The waiter is told the moment a dish is up — no shouting across the pass, no plates standing under the lamp.",
    feeds: "Table-ready alerts and course pacing",
    plugs: ["Waiter app", "Table management", "Section routing"],
    devices: ["P5 / P5L handheld"],
  },
  {
    id: "payment",
    step: "05",
    label: "Payment",
    title: "Paid at the table or the till",
    body: "Tap, chip, swipe, QR or split the bill — at the table on the handheld or at the counter. The ticket closes itself.",
    feeds: "Settled tickets, tips and turnaround",
    plugs: ["Payments", "Split billing", "Tips & staff allocation"],
    devices: ["P5 handheld", "QS5E soundbox", "D5 counter POS"],
  },
  {
    id: "insight",
    step: "06",
    label: "Insight",
    title: "Service becomes information",
    body: "Every ticket adjusts stock, informs costing, and feeds the numbers the owner actually runs on — which then shapes tomorrow's menu and roster.",
    feeds: "Stock, costing, rosters and reporting",
    plugs: ["Inventory & costing", "Staff management", "Analytics"],
    devices: ["Any browser, anywhere"],
  },
];

export const ecosystemHub = {
  title: "One platform",
  body: "Every stage writes to the same cloud ticket. Nothing is hosted in the restaurant.",
};
