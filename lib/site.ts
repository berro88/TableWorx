export const site = {
  name: "TableWorx",
  legalName: "TableWorx (Pty) Ltd",
  tagline: "Everything works better together.",
  description:
    "One connected ecosystem for restaurants. Orders, payments, reservations, staff, inventory and insights — all in sync, online or offline.",
  url: "https://tableworx.co.za",
  email: "info@tableworx.co.za",
  phone: "+27 71 869 8758",
  phoneHref: "tel:+27718698758",
  founder: {
    name: "Visser Pretorius",
    role: "Founder / Chief Executive Officer",
    email: "visser.pretorius@tableworx.co.za",
  },
  address: {
    line1: "10 Hoek Place",
    line2: "Olivedale, Randburg",
    line3: "2188, South Africa",
  },
} as const;

export const nav = [
  { href: "/product", label: "Solutions" },
  { href: "/hardware", label: "Hardware" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
] as const;

export const capabilities = [
  { icon: "card", title: "POS & Payments", sub: "Fast. Flexible. Secure." },
  { icon: "cart", title: "Online Ordering", sub: "Your menu, everywhere." },
  { icon: "calendar", title: "Reservations", sub: "More tables, less hassle." },
  { icon: "box", title: "Inventory & Costing", sub: "Control costs. Reduce waste." },
  { icon: "staff", title: "Staff Management", sub: "A stronger team, every shift." },
  { icon: "heart", title: "Customer Loyalty", sub: "Turn guests into regulars." },
  { icon: "chart", title: "Analytics & Reporting", sub: "Insights that drive growth." },
  { icon: "nodes", title: "Full Ecosystem", sub: "All devices. All connected." },
] as const;

export const lineupNodes = [
  {
    id: "orders",
    label: "Orders",
    x: 19,
    y: 3,
    title: "Orders that never stall",
    body: "Send tickets from the floor, QR, and counter. The kitchen sees them the moment they leave the table — online or off.",
    href: "/product/waiter",
    image: "/images/lineup/orders.png",
  },
  {
    id: "payments",
    label: "Payments",
    x: 32,
    y: -1,
    title: "Pay at the table or the till",
    body: "Tap, chip, swipe, and split bills in one flow. Payments keep moving even if the restaurant Wi-Fi does not.",
    href: "/product/customer",
    image: "/images/lineup/payments.png",
  },
  {
    id: "tables",
    label: "Tables",
    x: 45,
    y: -1,
    title: "The floor, live",
    body: "Covers, courses, and table-ready alerts stay in sync so hosts and waiters are never guessing which table needs them.",
    href: "/product/waiter",
    image: "/images/lineup/tables.png",
  },
  {
    id: "inventory",
    label: "Inventory",
    x: 58,
    y: 3,
    title: "Stock that matches the ticket",
    body: "Recipes, counts, and waste sit next to live orders so food cost does not leak out the back door.",
    href: "/product",
    image: "/images/lineup/inventory.png",
  },
  {
    id: "staff",
    label: "Staff",
    x: 71,
    y: 3,
    title: "The shift, under control",
    body: "Roles, permissions, and who is on the floor — matched to the service you are actually running.",
    href: "/product",
    image: "/images/lineup/staff.png",
  },
  {
    id: "loyalty",
    label: "Loyalty",
    x: 82,
    y: 11,
    title: "Guests who come back",
    body: "Recognise regulars, track visits, and give them a reason to return without a separate loyalty stack.",
    href: "/product/customer",
    image: "/images/lineup/loyalty.png",
  },
  {
    id: "analytics",
    label: "Analytics",
    x: 91,
    y: 18,
    title: "Today’s service, explained",
    body: "Sales, covers, and product mix from the floor you just ran — not last month’s export.",
    href: "/product",
    image: "/images/lineup/analytics.png",
  },
] as const;

export const pillars = [
  {
    id: "kds",
    href: "/product/kds",
    kicker: "Kitchen",
    name: "TableWorx KDS",
    summary: "Station-specific tickets that keep the pass moving — even when the Wi-Fi does not.",
    bullets: [
      "Real-time order display across every kitchen station",
      "Colour-coded status: queue, preparing, ready",
      "Works offline — orders never drop",
    ],
  },
  {
    id: "waiter",
    href: "/product/waiter",
    kicker: "Floor",
    name: "TableWorx Waiter App",
    summary: "A command centre in the waiter’s hand: tables, courses, payments, and tips.",
    bullets: [
      "Instant table-ready and course-fire alerts",
      "Split-bill and tap-to-pay at the table",
      "Synced with KDS and the guest app in real time",
    ],
  },
  {
    id: "customer",
    href: "/product/customer",
    kicker: "Guest",
    name: "TableWorx Customer App",
    summary: "Guests scan a QR, order, and split the bill — no download required.",
    bullets: [
      "Scan QR to browse the menu and order in the browser",
      "Pay and split bills directly from the table",
      "Multi-language menus and allergen filters",
    ],
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Guest scans QR code",
    body: "The menu opens instantly in any browser — no app download needed.",
  },
  {
    n: "02",
    title: "Orders and splits the bill",
    body: "Each guest selects items and pays their own share, hassle-free.",
  },
  {
    n: "03",
    title: "Kitchen sees it instantly",
    body: "Every ticket hits the KDS in real time, colour-coded by status.",
  },
  {
    n: "04",
    title: "Waiter notified, table turned",
    body: "Staff get course alerts and ready signals — no shouting across the pass.",
  },
] as const;

export const hardware = [
  {
    code: "P5",
    name: "Mobile POS & Payments",
    body: "Android handheld with built-in thermal printer, scanner, and tap-to-pay. Take the order and the payment at the table.",
    specs: ["5.5\" HD touch screen", "Tap, chip, swipe and QR", "100mm/s receipt printer", "4G, Wi-Fi and Bluetooth"],
  },
  {
    code: "D80B",
    name: "Receipt Printer",
    body: "High-speed counter printer for kitchen dockets, bar slips, and guest receipts with QR feedback codes.",
    specs: ["80mm thermal roll", "Auto-cutter", "USB and LAN", "Kitchen or front counter"],
  },
  {
    code: "T2",
    name: "Tableside Tablet",
    body: "Menu and ordering tablet for the table or the host stand, with photography-first menus and allergen tags.",
    specs: ["Visual menu browsing", "Runs the guest app", "Charging stand", "Offline-first sync"],
  },
] as const;
