# Handoff: Central de Ressonadores (Wuthering Waves personal guide hub)

## Overview
A personal, mobile-and-desktop reference hub for Wuthering Waves character build guides. Home screen is a filterable gallery grid of all Resonators; tapping one opens a compact, section-based build guide (no lore, just actionable build data). Built for a single user's own reference — dense on desktop, fully collapsible on mobile.

## About the Design Files
The bundled file (`Wuthering Waves Hub.dc.html`) is a **design reference prototype built in HTML/React** (a "Design Component" from the design tool used to create it) — it demonstrates intended layout, behavior, responsive rules, and visual language. It is **not production code to copy as-is**. The task is to **recreate this design in whatever stack you set up in VS Code** (plain HTML/CSS/JS, React, Vue, etc. — your choice, since this is a fresh project with no existing environment yet). Treat the HTML file as the spec, not the deliverable.

Some markup uses a custom templating syntax (`{{ value }}`, `<sc-for>`, `<sc-if>`, `<x-import>`) specific to the design tool's runtime (loaded via `support.js`). Ignore that syntax layer — read through it for the intended logic (loops, conditionals, data shape) and re-implement natively in your chosen stack.

## Fidelity
**High-fidelity for layout, color, type, and interaction logic.** Colors, spacing, type scale, and breakpoint behavior below should be recreated precisely. **Low-fidelity/placeholder for imagery** — every character portrait, weapon icon, and echo icon in the prototype is a drag-and-drop placeholder (see Assets section); real artwork will be supplied separately and dropped into equivalent `<img>` slots in your implementation.

## Screens / Views

### 0. Top-level navigation (applies to both galleries)
The app has two top-level sections, switched via a segmented-control tab pair at the top of both gallery screens (not shown on detail screens, which use a simple "← Voltar" back link instead):
- **Ressonadores** — the character gallery (see #1 below).
- **Mecânicas** — a gallery of game-system guides (Echo system, Resonance Chain, combat/dodge, exploration, gacha, Tower of Adversity), independent of any character. All 6 are placeholder "Em construção" cards for now (square 1:1 image slot + name), same interaction pattern as unfinished characters — tapping one opens a minimal detail shell (icon + title + "under construction" message) ready to be filled in later.

Tab bar: pill-shaped container, `background: oklch(0.24 0.006 260)`, `border-radius: 999px`, `padding: 4px`, two buttons inside with `4px` gap. Active tab: `background: oklch(0.95 0.006 260)`, `color: oklch(0.16 0.004 260)`. Inactive tab: transparent background, dim text color. Switching tabs always returns to that section's gallery (never keeps you on a stale detail screen).

### 1. Home — Character Gallery
**Purpose:** Browse/filter all Resonators, jump into a character's guide.

**Layout:**
- Sticky top bar (backdrop-blur, `padding: 20px 20px 16px`, bottom border `1px solid oklch(1 0 0 / 6%)`), content max-width `1100px` centered.
  - Title "Central de Ressonadores" — Space Grotesk 700, 22px, letter-spacing -0.01em.
  - Subtitle "Guias rápidos de build — sem enrolação" — Manrope 400, 13px, dim text color.
  - Filter chip row below, `gap: 8px`, wraps.
- Grid below top bar: `padding: 20px`, `display: grid`, `grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))`, `gap: 14px`, max-width 1100px centered. This is what makes it 2 columns on a phone and many columns on desktop, automatically, with no explicit breakpoints needed for the grid itself.

**Components:**
- **Filter chip**: pill button, `padding: 7px 14px`, `border-radius: 999px`, 13px/600 Manrope. First chip is "Todos" (all). One chip per element (Aero, Electro, Fusão, Glacio, Havoc, Spectro). Active state: background = element color at ~16% alpha, border = full element color, text = element color. Inactive: transparent background, `border: 1px solid oklch(1 0 0 / 12%)`, dim text.
- **Character card**: rounded rect, `border-radius: 16px`, `padding: 12px`, background `oklch(0.21 0.006 260)`, border tinted by the character's element color (~35% alpha if the guide is filled in, ~12% if still a placeholder), flex column, `gap: 10px`.
  - Portrait image slot: vertical rectangle, **aspect-ratio 3:4**, `border-radius: 12px`, `object-fit: cover`. This is the #1 visual change from the very first draft — portraits are tall rectangles, not squares.
  - Name — Space Grotesk 600, 14px.
  - Element dot (8px circle, element color) + "Element · Role" — Manrope 400, 11px, dim.
  - "Em construção" label (10px, 700, uppercase, dim) shown only on characters without a finished guide yet.
  - Whole card is clickable → opens that character's detail screen. Unfinished characters render at ~55% opacity but are still clickable (they show a placeholder detail state).

### 2. Character Detail (example populated: Cartethyia)
**Purpose:** One character's condensed build reference — no lore/biography, just what's needed to build and play them.

**Layout:**
- Content max-width 1100px, `padding: 20px 20px 80px`.
- "← Voltar" back link (top left, plain text button, 13px/600, dim color) returns to Home.
- Header row: `display:flex; gap:16px; align-items:flex-start; flex-wrap:wrap`.
  - Hero portrait image slot: vertical rectangle, width 120px, **aspect-ratio 3:4**, `border-radius:14px`, 2px border in the character's element accent color. (Same source art as the home-grid card, just larger — one image, two placements.)
  - Name — Space Grotesk 700, 26px.
  - Badge row below name: element pill (accent-colored border/text, background = accent at ~14% alpha) + role pill (neutral).
- **Desktop (≥900px viewport width):** two-column layout below the header — `display:grid; grid-template-columns:200px 1fr; gap:24px; margin-top:24px`. Left column is a sticky table-of-contents (plain text links, one per section, jumps + smooth-scrolls to that section). Right column stacks all 6... **5** content section cards, all expanded, no accordion chrome.
- **Mobile (<900px):** single column (`display:block; margin-top:20px`), no sidebar. Every section card header is clickable and toggles an accordion (chevron ▾/▸ shown at the right of the header). Only the "Visão Geral" section is open by default. A floating circular button (52px, bottom-right, `position:fixed`, background = accent color, "☰" glyph) opens a bottom sheet listing all sections; tapping one opens that section and smooth-scrolls to it.
- Breakpoint of 900px is evaluated in JS via `window.innerWidth` on mount + on `resize` — **not** a CSS media query — because layout structure (grid vs block, sidebar present/absent) changes, not just styling.

**Section card** (repeated shell, `background: oklch(0.2 0.005 260)`, `border: 1px solid oklch(1 0 0 / 7%)`, `border-radius:16px`, `padding:16px 18px`):
1. **Visão Geral** — 4 small stat chips (Elemento, Papel, Arma, Raridade as ★★★★★) in a wrapping row, then a short bullet list (3–5 one-line bullets, no paragraphs) of the character's core mechanic.
2. **Echoes** — responsive grid (`repeat(auto-fit, minmax(220px,1fr))`) of echo-build cards. Each card: small square icon slot (32×32, top-left of card header) + set name (Space Grotesk 600, accent-colored), then a 2-column label/value list: Custo, Stat principal, Sub-stat priority.
3. **Sinergia de Time** — one pill per team pairing. Inside each pill: character thumbnails (28×28 rounded-square image slots) and names, separated by a "+" — e.g. [thumb] Cartethyia + [thumb] Ciaconna.
4. **Opções de Arma** — one row per weapon: 36×36 icon slot + weapon name on the left, key stat line on the right (`justify-content: space-between`).
5. **Prioridade de Habilidades** — inline wrapping row of ability-name chips (bordered in accent color) separated by `>` / `>>` / `=` text tokens reflecting relative priority.

There is intentionally **no Materials/Ascension section** — that data now lives in the in-game guide and was removed from this hub.

**Unfinished character state:** header renders normally (name, element/role badges, placeholder portrait), but instead of the 5 sections a single dashed-border box reads "Guia em construção — volte em breve."

### 3. Mechanic Detail (placeholder shell, all 6 mechanics)
Minimal screen: back link, a square icon slot (96×96) + mechanic name in the header row, then the same dashed "Guia em construção" box used for unfinished characters. This is intentionally bare — no sections/data model has been designed for mechanics guides yet; extend this screen's content structure once the first mechanic guide is actually written.

## Interactions & Behavior
- Click a home card → navigate to that character's detail view, scroll to top.
- Click "← Voltar" → return to Home, scroll to top.
- Click a filter chip → filter the grid to that element (or all).
- Desktop: click a sidebar TOC item → smooth-scroll the page to that section (scroll offset ~90px to clear the sticky area).
- Mobile: click a section header → toggle that section's accordion open/closed. Click the floating ☰ button → toggle a bottom sheet; clicking a sheet item opens that section, closes the sheet, and smooth-scrolls to it.
- No animations beyond native smooth-scroll and instant open/close (no transition durations specified — keep it snappy).
- No loading, error, or form states — this is a static/local-data reference tool, not backed by an API in the prototype.

## State Management
Minimal client-side state, no backend:
- `activeTab`: `'characters' | 'mechanics'` — top-level nav
- `screen`: `'gallery' | 'detail'`
- `activeFilter`: `'all'` or an element key (characters gallery only)
- `activeCharId` / `activeMechId`: id of the item being viewed in detail mode
- `isDesktop`: boolean, derived from `window.innerWidth >= 900`, recomputed on resize
- `sectionsOpen`: per-section boolean map, used only on mobile (accordion state) for character detail, reset to `{ overview: true, others: false }` every time a new character is opened
- `tocOpen`: boolean, mobile bottom-sheet visibility (character detail only)

Data shape per character (suggest a `characters.json` or one file per character):
```json
{
  "id": "cartethyia",
  "name": "Cartethyia",
  "element": "aero",
  "role": "Dano Principal",
  "ready": true,
  "weapon": "Espada",
  "rarityStars": "★★★★★",
  "overviewBullets": ["...", "..."],
  "echoSets": [{ "label": "...", "cost": "...", "mainStat": "...", "subStat": "...", "slug": "echo-a" }],
  "synergyPairs": [{ "members": [{ "id": "cartethyia", "name": "Cartethyia" }, { "id": "ciaconna", "name": "Ciaconna" }] }],
  "weapons": [{ "name": "...", "stat": "...", "slug": "defiers-thorn" }],
  "priorityChips": [{ "label": "...", "sep": null }, { "label": "...", "sep": ">" }]
}
```
The full 20-character roster used in the prototype (only Cartethyia has real guide content, the rest are named placeholders) is in the `<script>` block of `Wuthering Waves Hub.dc.html` (`CHARACTERS` array) and `CARTETHYIA_DATA` object — copy the values over when you set up your data layer.

## Design Tokens

**Typography**
- Headings: Space Grotesk, weights 500/600/700
- Body/UI: Manrope, weights 400/500/600/700/800
- Google Fonts: `Space+Grotesk:wght@500;600;700` and `Manrope:wght@400;500;600;700;800`

**Base colors (OKLCH)**
- Background: `oklch(0.17 0.004 260)`
- Card surface (home cards, detail hero): `oklch(0.21 0.006 260)`
- Card surface (detail section shells): `oklch(0.2 0.005 260)`
- Nested chip/row surface: `oklch(0.24 0.006 260)`
- Border, subtle: `oklch(1 0 0 / 7%)` – `oklch(1 0 0 / 12%)`
- Text, primary: `oklch(0.95 0.006 260)` / `oklch(0.96 0.006 260)`
- Text, dim (secondary/labels): `oklch(0.68 0.01 260)`, `oklch(0.6 0.01 260)`, `oklch(0.55 0.01 260)`

**Element accent colors (OKLCH — same chroma/lightness family, hue varies)**
- Aero: `oklch(0.75 0.14 175)` (teal)
- Electro: `oklch(0.72 0.16 300)` (violet)
- Fusão: `oklch(0.72 0.17 35)` (orange-red)
- Glacio: `oklch(0.75 0.13 230)` (blue)
- Havoc: `oklch(0.65 0.18 340)` (magenta)
- Spectro: `oklch(0.8 0.15 95)` (gold)

The active character's element color becomes the page's single accent (borders, active chips, TOC/section dots, floating action button, priority-chip borders) — every other screen uses the neutral dim grays above.

**Radius**
- Cards: 16px · Portrait images: 12–14px · Chips/pills: 999px (full) · Small icon slots: 8px

**Breakpoint**
- 900px CSS px width — desktop (expanded, sidebar) vs mobile (accordion, floating nav) layout switch, evaluated in JS.

## Assets
Every character portrait, team-synergy thumbnail, weapon icon, and echo icon in the prototype is a **drag-and-drop placeholder component**, not real art — the design owner will source/crop the actual game-inspired artwork separately and needs matching image slots in the real build:
- **Character card / hero art**: vertical PNG, transparent background, ~3:4 aspect ratio (same source image used both small in the grid card and larger in the detail header).
- **Character thumbnail** (used in Sinergia de Time): square crop, ~28×28 at display size (supply a reasonably sized square source, e.g. 200×200, and let CSS scale down).
- **Weapon icon**: square, ~36×36 at display size.
- **Echo icon**: square, ~32×32 at display size.

Naming convention used in the prototype (carry this over to your asset folder so it's easy to wire up 1:1):
- `img-{characterId}-full` — vertical card/hero art
- `img-{characterId}-thumb` — square synergy thumbnail
- `img-weapon-{weaponSlug}` — weapon icon
- `img-echo-{echoSlug}` — echo/set icon

## Files
- `Wuthering Waves Hub.dc.html` — the full design reference (markup + inline styles + state logic in one file). Search for the `CHARACTERS`, `MECHANICS`, `CARTETHYIA_DATA`, `ELEMENTS` constants near the bottom for all copy and data values.
- `screenshots/` — reference captures: `01-home-desktop`, `02-home-mobile`, `03-character-detail-desktop`, `04-character-detail-mobile`, `05-mechanics-gallery`. The mobile shots are true ~390px-wide captures showing the 2-column grid and the accordion + floating nav button in context.
- `image-slot.js` — the placeholder drag-and-drop image component used in the prototype (author's own tool, for previewing only — not meant to be ported into your app; replace with plain `<img>` tags wired to real assets).
- `support.js` — internal runtime harness that makes the `.dc.html` file render in a browser during design. Not relevant to your implementation — ignore it.
