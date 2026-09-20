/**
 * TableWorx rate card, hardware catalogue and finance terms.
 *
 * ────────────────────────────────────────────────────────────────────────────
 *  EVERY DEVICE PRICE AND FINANCE FACTOR BELOW IS A PLACEHOLDER.
 *
 *  The only figure supplied by the business is the core software subscription
 *  (R1 500 per site per month). Everything else is a round, made-up number so
 *  the builder can be demonstrated end to end.
 *
 *  While RATES_CONFIRMED is false the quote builder shows a warning banner and
 *  stamps every quote — on screen and in print — as not for client use.
 *
 *  To go live: replace the numbers, then set RATES_CONFIRMED to true.
 * ────────────────────────────────────────────────────────────────────────────
 */

export const RATES_CONFIRMED = false;

export const rateCard = {
  version: "Draft 1",
  updated: "Awaiting commercial sign-off",
  currency: "R",
  vatRate: 0.15,
  /** Quote validity, in days, as quoted to the client. */
  validDays: 7,
};

export type Acquisition = "purchase" | "rent-to-own" | "rental";

export const acquisitionOptions: {
  id: Acquisition;
  label: string;
  short: string;
  note: string;
}[] = [
  {
    id: "purchase",
    label: "Outright purchase",
    short: "Purchase",
    note: "Paid once off. The equipment is yours on delivery.",
  },
  {
    id: "rent-to-own",
    label: "Rent to own",
    short: "Rent to own",
    note: "Fixed monthly instalment over the term. Ownership transfers to you at the end of the term.",
  },
  {
    id: "rental",
    label: "Rental",
    short: "Rental",
    note: "Fixed monthly rental over the term. Equipment is returned or the term is renewed at the end.",
  },
];

/**
 * Monthly instalment = cash price x factor. Placeholder factors.
 */
export const financeFactors: Record<
  Exclude<Acquisition, "purchase">,
  Record<number, number>
> = {
  "rent-to-own": { 24: 0.0545, 36: 0.0395, 48: 0.0325, 60: 0.0285 },
  rental: { 24: 0.0495, 36: 0.0355, 48: 0.0295, 60: 0.0255 },
};

export const financeTerms = [24, 36, 48, 60] as const;
export const defaultTerm = 36;

export type HardwareRole =
  | "static-pos"
  | "mobile-pos"
  | "kitchen"
  | "printer"
  | "peripheral";

export type HardwareItem = {
  code: string;
  name: string;
  role: HardwareRole;
  blurb: string;
  specs: string[];
  /** Cash price excluding VAT. Placeholder. */
  price: number;
};

/**
 * Models are taken from the AddPay product portfolio in brand/.
 * Specifications come from the brochure; prices do not.
 */
export const hardwareCatalogue: HardwareItem[] = [
  // ---- counter / static positions ----
  {
    code: "D5",
    name: "D5 Desktop Android POS",
    role: "static-pos",
    blurb: "Dual-screen counter terminal for the till position.",
    specs: [
      '15.6" main screen, 1366x768',
      '10.1" customer-facing second screen',
      "Quad-core 64-bit Cortex-A55, up to 2.0GHz",
      "4x USB, RJ45, RJ11, RJ12",
    ],
    price: 18500,
  },
  {
    code: "D050",
    name: "D050 Desktop POS",
    role: "static-pos",
    blurb: "Single or dual-screen counter terminal.",
    specs: [
      '15.6" main screen, optional 1920x1080',
      '10.1" second screen optional',
      "Quad-core 64-bit Cortex-A55, up to 2.0GHz",
      "Android 11",
    ],
    price: 16500,
  },
  {
    code: "P051",
    name: "P051 Compact Countertop",
    role: "static-pos",
    blurb: "Small-footprint till position for bars and coffee counters.",
    specs: [
      '6.745" IPS multi-touch main display',
      "Dot-matrix second display",
      "Android 13, quad-core 2.0GHz",
      "2GB + 32GB, optional 3GB + 64GB",
    ],
    price: 11500,
  },

  // ---- mobile / waiter devices ----
  {
    code: "P5",
    name: "P5 Mobile POS & Payments",
    role: "mobile-pos",
    blurb: "Handheld with built-in printer — order and payment at the table.",
    specs: [
      '5.5" full screen, thin bezel',
      "100mm/s thermal printer built in",
      "Quad Cortex-A53 at 2.0GHz, Android 11",
      "4G, Wi-Fi, Bluetooth 5.0, NFC",
      "443g",
    ],
    price: 9500,
  },
  {
    code: "P5L",
    name: "P5L Mobile POS",
    role: "mobile-pos",
    blurb: "Lighter handheld for floor staff who do not print at the table.",
    specs: [
      '5.5" full screen',
      "Quad Cortex-A53 at 2.0GHz, Android 11",
      "4G, Wi-Fi, Bluetooth 5.0, NFC",
      "230g",
    ],
    price: 7500,
  },
  {
    code: "NANO6",
    name: "Nano6 Handheld",
    role: "mobile-pos",
    blurb: "Compact handheld for high-volume tap-to-pay rounds.",
    specs: [
      "Quad Cortex-A53 at 2.0GHz",
      "2GB + 32GB, Android",
      "4G, Wi-Fi, Bluetooth 5.0",
      "391g",
    ],
    price: 6500,
  },
  {
    code: "T2",
    name: "T2 EMV Android Tablet",
    role: "mobile-pos",
    blurb: "Tableside and host-stand tablet for menu browsing and ordering.",
    specs: [
      "247 x 163 x 12.3mm tablet",
      "Octa-core 2.0GHz, Android 13",
      "7000mAh battery, quick charge",
      "Fingerprint unlock, NFC, QR",
      "Optional print, scanner and camera modules",
    ],
    price: 12500,
  },

  // ---- kitchen ----
  {
    code: "T2-KDS",
    name: "T2 Tablet as KDS screen",
    role: "kitchen",
    blurb: "Wall or stand-mounted tablet running the KDS in the browser.",
    specs: [
      "Octa-core 2.0GHz, Android 13",
      "Runs TableWorx KDS in the browser",
      "Wall mount or counter stand",
    ],
    price: 12500,
  },
  {
    code: "BYO-SCREEN",
    name: "Use an existing screen",
    role: "kitchen",
    blurb:
      "KDS runs in any modern browser, so an existing monitor or tablet can be used at no hardware cost.",
    specs: ["No hardware charge", "Any browser on any screen"],
    price: 0,
  },

  // ---- printers ----
  {
    code: "D80B",
    name: "D80B Thermal Receipt Printer",
    role: "printer",
    blurb: "High-speed 80mm printer for kitchen dockets, bar slips and receipts.",
    specs: [
      "80mm thermal, 230mm/s",
      "Auto cutter, full or partial cut",
      "1D and 2D barcode printing",
      "USB + Wi-Fi + Bluetooth, or USB + RJ12 + Ethernet",
      "ESC/POS",
    ],
    price: 4800,
  },

  // ---- peripherals ----
  {
    code: "X-9701C",
    name: "X-9701C Barcode Scanner",
    role: "peripheral",
    blurb: "Cordless 1D/2D scanner for stock take and takeaway collection.",
    specs: [
      "Planar CMOS sensor",
      "Code 128 at 15cm/s, QR at 25cm/s",
      "42 hours standby, 8 hours working",
      "3.7V 2000mAh battery",
    ],
    price: 2400,
  },
  {
    code: "QS5E",
    name: "QS5E QR & NFC Soundbox",
    role: "peripheral",
    blurb: "Counter-top QR and tap acceptance with audible payment confirmation.",
    specs: [
      '2.4" colour screen with dynamic QR',
      "8-digit segment display",
      "NFC 13.56MHz, ISO/IEC 14443 Type A&B",
      "4G and Wi-Fi",
    ],
    price: 3200,
  },
  {
    code: "P5L-SSK",
    name: "P5L-SSK Self-service Kiosk",
    role: "peripheral",
    blurb: "Self-service ordering and payment unit for queue-busting.",
    specs: [
      "Quad-core A53 at 2.0GHz, Android 11",
      "190 x 112 x 83.1mm",
      "Kiosk mounting",
      "584.5g",
    ],
    price: 14500,
  },
];

export type SoftwareUnit = "site" | "station" | "device" | "seat";

export type SoftwareModule = {
  id: string;
  name: string;
  blurb: string;
  unit: SoftwareUnit;
  /** Monthly charge per unit, excluding VAT. */
  monthly: number;
  /** Core is always on the quote and cannot be removed. */
  core?: boolean;
  /** Quantity follows a cost driver rather than being set by hand. */
  driver?: "staticPos" | "mobilePos" | "kdsStations";
};

export const softwareModules: SoftwareModule[] = [
  {
    id: "core",
    name: "TableWorx core subscription",
    blurb:
      "The platform itself: cloud hosting, menu, ordering, table management, updates and support. One per restaurant.",
    unit: "site",
    monthly: 1500,
    core: true,
  },
  {
    id: "kds",
    name: "KDS station licence",
    blurb: "Kitchen display per station — pass, grill, larder, bar.",
    unit: "station",
    monthly: 250,
    driver: "kdsStations",
  },
  {
    id: "waiter",
    name: "Waiter app seat",
    blurb: "Floor ordering and pay-at-table, per handheld device.",
    unit: "device",
    monthly: 180,
    driver: "mobilePos",
  },
  {
    id: "pos",
    name: "POS till licence",
    blurb: "Counter till position, per static terminal.",
    unit: "station",
    monthly: 220,
    driver: "staticPos",
  },
  {
    id: "guest",
    name: "Customer app & QR ordering",
    blurb: "Guests scan, browse, order and split the bill in the browser.",
    unit: "site",
    monthly: 450,
  },
  {
    id: "inventory",
    name: "Inventory & costing",
    blurb: "Recipe costing, stock counts, variance and waste tracking.",
    unit: "site",
    monthly: 650,
  },
  {
    id: "staff",
    name: "Staff management",
    blurb: "Rosters, clock-in, sections and tip distribution.",
    unit: "site",
    monthly: 420,
  },
  {
    id: "loyalty",
    name: "Customer loyalty",
    blurb: "Guest profiles, repeat-visit rewards and campaigns.",
    unit: "site",
    monthly: 380,
  },
  {
    id: "analytics",
    name: "Analytics & reporting",
    blurb: "Sales, covers, product mix and trading dashboards.",
    unit: "site",
    monthly: 520,
  },
  {
    id: "multisite",
    name: "Multi-site console",
    blurb: "Group reporting and shared menus across more than one restaurant.",
    unit: "site",
    monthly: 900,
  },
];

export const onceOffServices = [
  {
    id: "install",
    name: "Installation & commissioning",
    blurb: "On-site setup, network checks and go-live support.",
    price: 4500,
  },
  {
    id: "menu",
    name: "Menu build & data load",
    blurb: "Menu, modifiers, pricing and recipe data captured for you.",
    price: 3500,
  },
  {
    id: "training",
    name: "Staff training",
    blurb: "Floor, kitchen and management training on site.",
    price: 2800,
  },
];

/** Clauses printed at the foot of every quote. */
export const quoteTerms = [
  "This quotation is valid for 7 (seven) days from the date of issue.",
  "After the validity period, rates are subject to change based on prevailing exchange rates and at company discretion.",
  "All amounts exclude VAT at 15% unless stated otherwise.",
  "Hardware finance options are subject to credit approval and the signing of the applicable agreement.",
  "Monthly software subscriptions are billed in advance and are subject to the TableWorx terms of service.",
];

export function hardwareByRole(role: HardwareRole): HardwareItem[] {
  return hardwareCatalogue.filter((item) => item.role === role);
}

export function findHardware(code: string): HardwareItem | undefined {
  return hardwareCatalogue.find((item) => item.code === code);
}

/** Monthly instalment for a financed line, or null for outright purchase. */
export function monthlyInstalment(
  price: number,
  acquisition: Acquisition,
  term: number
): number | null {
  if (acquisition === "purchase") return null;
  const factor = financeFactors[acquisition]?.[term];
  if (!factor) return null;
  return price * factor;
}

/**
 * Grouped to South African convention. Formatted by hand rather than with
 * toLocaleString, which resolves differently on the server and in the browser
 * and breaks hydration.
 */
export function formatRand(value: number): string {
  const rounded = Math.round(value);
  const grouped = Math.abs(rounded)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return `${rounded < 0 ? "-" : ""}R ${grouped}`;
}
