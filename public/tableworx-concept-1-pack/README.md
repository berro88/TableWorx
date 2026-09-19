# TableWorx Concept 1 — Cursor asset and design pack

Source: the supplied `Concept 1.png`, preserved unchanged as `assets/source/concept-1.png` (1536 × 1024 px). Open `preview/index.html` to see the source beside editable HTML/CSS recreations of its widgets. Copy this whole folder into a Cursor project so the linked SVG crops retain their relative paths.

## What is in the pack

| Folder | Contents | Fidelity |
|---|---|---|
| `assets/source/` | Unchanged master PNG | Pixel exact |
| `assets/photography/` | SVG viewBox crops for the hero context and three lower panels | Pixel exact crops; any text or device within a crop is still baked in |
| `assets/devices/` | D5, P5, D80B, T2, and payment-in-hand source crops | Pixel exact crops; backgrounds and nearby details remain |
| `assets/icons/` | Recreated TableWorx round mark and a line-icon SVG sprite | Faithful approximations, not original vector artwork |
| `styles/` | Palette, typography, and reusable component styles | Editable approximations based on the raster |
| `preview/` | HTML examples of hero copy, ecosystem nodes, feature strip, dashboard, payment screen, analytics card | Rebuilt from visible details |

The original image is a flattened composite. It does **not** contain recoverable clean photographs, transparent product renders, logo vectors, or component source files. The SVG crops reference the unchanged PNG rather than inventing missing detail. For production, replace these crops with licensed clean photography or actual manufacturer product renders if available; keep the CSS/HTML widget structures.

## Pixel map of the source

All rectangles use `(left, top, width, height)` in source pixels. The source is 1536 × 1024. Values are measured by visual inspection and should be treated as ±5–15 px guides where edges are soft or perspective distorted.

| Region | Rectangle / position | Notes |
|---|---:|---|
| Hero | `(0, 0, 1536, 570)` | Full-bleed dark restaurant image, device group, copy, header |
| Header logo | centre `(97, 58)`, circle Ø72 | Wordmark begins x≈145, baseline y≈69 |
| Header navigation | x≈408–733, y≈46 | 32–37 px gaps |
| Header actions | Login x≈1267; button `(1322, 21, 169, 49)` | Button is a muted Steel pill |
| Hero eyebrow | `(69, 122, 332, 17)` | Uppercase tracked copy |
| Hero headline | `(66, 149, 403, 181)` | Three lines, last line Steel pale blue |
| Hero body | `(67, 358, 371, 87)` | Four lines |
| Hero action row | `(66, 470, 355, 49)` | Primary pill and outlined play circle |
| Side microcopy | `(517, 180, 106, 75)` | PEOPLE / PLACES / POSSIBILITIES |
| D5 terminal | `(649, 144, 490, 417)` | Angled screen and base; pixel crop supplied |
| P5 hero terminal | `(522, 292, 125, 265)` | Left of D5; pixel crop supplied |
| D80B printer | `(1120, 282, 179, 279)` | Includes receipt; pixel crop supplied |
| T2 tablet | `(1295, 364, 241, 197)` | Right of printer; pixel crop supplied |
| Ecosystem nodes | centres x≈746, 841, 948, 1058, 1157, 1257, 1367 | y≈89, 73, 73, 89, 91, 115, 149 respectively |
| Feature strip | `(0, 570, 1536, 136)` | Eight columns, ≈192 px each, white background |
| Chef panel | `(0, 706, 566, 318)` | Baked text over photography |
| P5 payment panel | `(566, 706, 465, 318)` | Copy at x≈600, handheld at x≈793 |
| Analytics panel | `(1031, 706, 505, 318)` | Copy left, analytics widget right |
| Lower analytics widget | `(1244, 733, 267, 241)` | Rounded dark glass card |

For desktop reconstruction, use a 1536 px canvas as the fixed visual reference. Hero height is 570 px (55.7% of image height); feature strip 136 px (13.3%); lower panels 318 px (31.1%). Scale those proportions with the viewport, then reflow at tablet/mobile widths. The lower panel widths are 36.8%, 30.3%, and 32.9%.

## Visible copy, transcribed

**Header:** `TableWorx` · `Solutions` · `Hardware` · `Pricing` · `Resources` · `Login` · `Get Started`

**Hero:** `ALL-IN-ONE RESTAURANT ECOSYSTEM` · `Everything works better together.` · `One connected ecosystem for restaurants. Orders, payments, reservations, staff, inventory and insights — all in sync, so you can focus on great food and happy guests.` · `Get Started` · `Watch the Video` · `PEOPLE` / `PLACES` / `POSSIBILITIES`

**Connector labels:** `Orders` · `Payments` · `Tables` · `Inventory` · `Staff` · `Loyalty` · `Analytics`

**Feature strip:**

1. `POS & Payments` — `Fast. Flexible. Secure.`
2. `Online Ordering` — `Your menu, everywhere.`
3. `Reservations` — `More tables, less hassle.`
4. `Inventory & Costing` — `Control costs. Reduce waste.`
5. `Staff Management` — `A stronger team, every shift.`
6. `Customer Loyalty` — `Turn guests into regulars.`
7. `Analytics & Reporting` — `Insights that drive growth.`
8. `Full Ecosystem` — `All devices. All connected.`

**Lower panels:** `BUILT FOR RESTAURANTS LIKE YOURS` · `Less admin. More time for what matters.` · `Power in your hands.` · `Take orders, accept payments and serve anywhere with the P5.` · `MOBILE. FLEXIBLE. ALWAYS CONNECTED.` · `Real insights. Real growth.` · `Turn today's service into a stronger tomorrow with powerful analytics and reporting.` · `DATA THAT DRIVES PROGRESS.`

**Device labels:** `P5` / `Mobile POS & Payments`; `D80B` / `Receipt Printer`; `T2` / `Tableside Tablet`.

**Dashboard:** `Home`, `Orders`, `Reservations`, `Payments`, `Menu`, `Inventory`, `Staff`, `Customers`, `Reports`; `Active Orders`; `View All`; columns `#`, `Item`, `Table`, `Status`, `Time`. Rows: `#104 Truffle Pasta 6 Preparing 2m`; `#105 Caesar Salad 8 Ready 5m`; `#106 Grilled Salmon 3 Preparing 6m`; `#107 Margherita Pizza 12 Served 12m`; `#108 Chocolate Cake 7 Ready 14m`. Summary: `Today's Sales R 4,892 ▲ 12%`; `Total Orders 128 ▲ 8%`; `New Guests 24 ▲ 20%`. Small date text is approximately `Mon, Apr 28 19:37`.

**Payment screen:** `Payment Complete` · `R 210,00` · `VISA` / Mastercard / Apple Pay symbols. **Analytics card:** `Sales R 4,892 ▲ 12%`; `Orders 128 ▲ 12%`; `New Guests 24 ▲ 20%`; `Repeat Guests 64% ▲ 6%`.

The smallest device-screen type is low resolution in the source, so the dashboard row details and date are best-effort transcription. Use the editable copy in the HTML when sharp text matters.

## Palette and type

The Steel values `#4A5F73` and `#8A9AAB` came from the preceding TableWorx discussion. The other tokens in `styles/design-tokens.css` are visually sampled approximations to this raster. Main backgrounds are near-black blue/charcoal; surfaces are cool white; connector glow is pale steel blue; dashboard positive values are soft green.

The wordmark/headline looks like a heavy modern geometric sans. **Inter** or **Helvetica Neue** gives a close practical match; for a more geometric face, try **Manrope**. This is guidance, not a claim about the original font. Headline is ≈68–75 px at 1536 px canvas, weight 750–800, line height ≈0.9, tracking ≈−0.055em. Header wordmark ≈35 px bold. Body ≈17–18 px, line height ≈1.35. Eyebrows are ≈12–13 px uppercase with ≈0.25em tracking. Feature titles ≈14 px semibold and descriptions ≈13 px.

## Rebuild guidance for Cursor

1. Copy the entire `tableworx-concept-1-pack` folder into the web project.
2. Use `assets/source/concept-1.png` as a visual overlay/reference while setting the 1536 px desktop layout. The linked SVG crops must remain beside `assets/source/` as supplied.
3. Port the HTML from `preview/index.html` into components: `Hero`, `EcosystemMap`, `FeatureStrip`, `Dashboard`, `PaymentScreen`, and `AnalyticsCard`. Keep actual UI text as HTML rather than pixels.
4. Use `styles/design-tokens.css` and `styles/components.css` to get the initial appearance. Match the pixel map at desktop first, then create responsive layouts.
5. The hero photo/device grouping cannot be separated cleanly from the baked labels in this source. Use the source as the most faithful desktop image background if exact visual matching is the priority, or obtain the underlying photos/renders for a fully editable production page.

The crop SVG files are lightweight linked windows into the source image. If a target pipeline does not resolve relative images inside SVG, render the master PNG as a CSS background with `background-position` based on each crop rectangle, or export the SVGs to PNG using a renderer. No hidden original image data exists outside the supplied concept.
