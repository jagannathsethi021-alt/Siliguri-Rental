---
name: Kinetic Mobility
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#584237'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#8c7164'
  outline-variant: '#e0c0b1'
  surface-tint: '#9d4300'
  primary: '#9d4300'
  on-primary: '#ffffff'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#ffb690'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006c49'
  on-tertiary: '#ffffff'
  tertiary-container: '#00b07a'
  on-tertiary-container: '#003b26'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  surface-canvas: '#F8FAFC'
  surface-card: '#FFFFFF'
  surface-muted: '#F1F5F9'
  border-subtle: '#E2E8F0'
  text-primary: '#0F172A'
  text-secondary: '#475569'
  accent-hover: '#EA580C'
  accent-warm: '#FF6B00'
  trust-green: '#10B981'
  trust-green-subtle: '#ECFDF5'
  warning-amber: '#F59E0B'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 3rem
    fontWeight: '800'
    lineHeight: 3.5rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '800'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: 1.5rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.02em
  caption:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system delivers a modern, high-trust consumer self-drive mobility experience tailored for urban Indian commuters, weekend travelers, and fleet renters. The interface merges consumer accessibility with enterprise-grade reliability, reflecting the swift, frictionless booking models of contemporary mobility platforms. 

The aesthetic is Modern Functional with warm, energetic kinetic accents. Clean, cool slate-tinted canvas structures prioritize rapid scanning of vehicle inventories, clear hourly/daily pricing, security deposits, and operational verification tiers (such as Aadhaar and driving license verification). Deep slate-navy structural typography instills financial and logistical trust, balanced by a vivid saffron-orange dynamic tier that commands action and signals momentum. Geometric, friendly headline typography paired with utilitarian body typography ensures immediate legibility across mobile devices under intense outdoor daylight conditions.

## Colors

The color palette centers on functional clarity and high-contrast hierarchy:

- **Primary (`#F97316` / Kinetic Orange):** The primary brand catalyst, reserved for core conversion actions (instant booking, vehicle unlocking, primary checkout CTA, key active tab pills).
- **Secondary (`#0F172A` / Executive Deep Navy):** Anchors high-priority structural UI, hero titles, heavy metric callouts, and dark-mode command elements, giving visual weight and architectural stability.
- **Tertiary (`#10B981` / Assurance Emerald):** Serves as the definitive validation tone. Used exclusively for security deposit refunds, verified driver status, 100% fuel level markers, zero-hidden-charge guarantees, and roadside assistance badges.
- **Neutrals (`#64748B` slate series, `#F8FAFC`, `#FFFFFF`):** Cool slate tints avoid sterile grays, providing clear figure-ground separation between screen backdrops and card containers without requiring heavy borders.

Dynamic interactive states shift `#F97316` to `#EA580C` on hover/press. Subtle container backgrounds for tags use 10% tint overlays (e.g., `#ECFDF5` for verified statuses) to avoid visual fatigue.

## Typography

The type system blends the geometric optimism of **Plus Jakarta Sans** for prominent headers with the disciplined, pixel-grid legibility of **Inter** for dense transactional UI.

- **Display & Headlines (`Plus Jakarta Sans`):** High x-height and friendly curved terminals evoke approachability. Used for vehicle model names, hero value propositions, category titles, and search selectors. Tight negative tracking (`-0.01em` to `-0.03em`) maintains cohesion across high-contrast titles.
- **Body & Numerical Readouts (`Inter`):** Deployed for hourly rates, trip specs (transmission, fuel type, seating capacity), legal disclaimers, and verification steppers. High legibility guarantees unambiguous comprehension of rental terms, deposit rules, and vehicle pickup addresses.
- **Labels & Micro-copy (`Inter SemiBold`):** Micro-badges (e.g., "FASTAG INCLUDED", "DELIVERY AVAILABLE") utilize strictly uppercase or semi-bold micro-tokens to guarantee quick visual appraisal on crowded mobile grids.

## Layout & Spacing

The layout model is built on an adaptable fluid grid with a strict 4px/8px base spacing increment:

- **Mobile (< 768px):** 4-column fluid grid, `1rem` (16px) margins and `1rem` gutters. Interactive actions adhere to a thumb-friendly 48px to 56px touch target zone. Sticky bottom action sheets lock primary pricing and CTA confirmation at the foot of the screen.
- **Tablet (768px - 1024px):** 8-column layout, `2rem` (32px) margins and `1.5rem` (24px) gutters. Vehicle listing cards adopt a 2-column comparative layout.
- **Desktop (> 1024px):** 12-column layout with a maximum container boundary of 1280px, flanked by auto-centering safety margins. 3-column inventory grid with a dedicated 4-column sticky filter and map sidebar.

Spacing application mandates that `space-sm` (8px) separates co-dependent metadata (e.g., transmission type icon and label), `space-md` (16px) divides distinct card segments, and `space-xl` (32px) governs section demarcations.

## Elevation & Depth

Visual hierarchy employs low-opacity ambient shadows paired with crisp border delineations rather than heavy skeuomorphic drop-shadows, ensuring lightness in mobile viewports:

- **Level 0 (Flat / Canvas):** Applied to the base background (`#F8FAFC`). No elevation or border.
- **Level 1 (Card & List Item Rest):** Pure white background (`#FFFFFF`) with a 1px solid border in `#E2E8F0` and an ambient shadow: `0px 1px 3px rgba(15, 23, 42, 0.04), 0px 4px 6px -2px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Hover & Interactive Cards):** Activated on vehicle card hover and filter dropdowns: `0px 4px 12px rgba(15, 23, 42, 0.06), 0px 12px 24px -4px rgba(15, 23, 42, 0.04)`. Border shifts subtly to `#CBD5E1`.
- **Level 3 (Sticky Bottom Bars & Navbars):** Semi-transparent white (`rgba(255, 255, 255, 0.92)`) with a blur filter (`backdrop-filter: blur(12px)`) and top/bottom borderline: `0px -2px 16px rgba(15, 23, 42, 0.06)`.
- **Level 4 (Floating Dialogs, KYC Sheets & Modals):** `0px 16px 32px -8px rgba(15, 23, 42, 0.12), 0px 4px 8px -2px rgba(15, 23, 42, 0.04)`. Accompanied by a 40% deep slate backdrop overlay (`#0F172A66`).

## Shapes

The design system operates at **Roundedness 2** (base radius: `0.5rem` / 8px). This creates approachable, modern curves without feeling childish or cartoonish:

- **Default Elements (`0.5rem` / 8px):** Input text fields, dropdown trigger buttons, date-time pickers, and secondary metadata badges.
- **Containers & Cards (`rounded-lg` - `1rem` / 16px):** Vehicle summary cards, booking calculation breakdowns, pickup map snippets, and KYC verification dropzones.
- **Modals & Bottom Drawers (`rounded-xl` - `1.5rem` / 24px):** Mobile slide-up booking sheets, review modals, and vehicle feature breakdown dialogs (top corners rounded on mobile sheets).
- **Pills (`rounded-full` / 9999px):** Status chips, search toggles (e.g., "Car" vs "Bike", "With Fuel" vs "Without Fuel"), and main call-to-action button states.

## Components

### Buttons
- **Primary CTA:** Saffron-orange (`#F97316`) background, bold white typography, fully rounded pill (`rounded-full`) or 12px rounded rectangle. Hover transitions to `#EA580C`. Focus rings feature a 3px ring of `#F9731633`. Height: 48px (mobile) to 52px (desktop) for main booking buttons.
- **Secondary Action:** Executive slate (`#0F172A`) solid fill with white text, or pure white container with a 1.5px border in `#0F172A` and matching navy text for neutral secondary tasks (e.g., "View Specifications").
- **Ghost / Tertiary:** Transparent background, slate text (`#475569`), hover state displays `#F1F5F9` background.

### Vehicle Listing Card
- Constructed on a pure white surface (`#FFFFFF`) framed by an `#E2E8F0` border and `1rem` corner rounding.
- Features a 16:9 responsive vehicle photography canvas with a top-left floating micro-badge (e.g., "Instant Confirmation" in tertiary green `#10B981` on white pill).
- Key telemetry section uses a 3-column micro-grid: Transmission (Manual/Auto), Fuel (Petrol/Diesel/EV), Seating (5/7 Seater), rendered with clean slate icons and `0.75rem` labels.
- Bottom partition separates the total rental calculation and per-hour unit price from the primary "Book Now" trigger.

### Chips & Micro-Badges
- **Filter Chips:** 36px height, rounded-full, `#F8FAFC` background with `#E2E8F0` border. Active filter state flips to solid `#0F172A` with pure white text and an inline removal icon.
- **Trust Badges:** Pill-shaped, composed of 10% `#10B981` green tint backdrop with solid `#047857` deep emerald text and an inline checkmark icon.

### Form Inputs & Search Module
- **Search Bar / Date Range Selectors:** Segmented single-surface bar. Displays pickup location, start date/time, and drop-off date/time separated by subtle vertical hairpins (`#E2E8F0`). Field focuses reveal a high-contrast `#F97316` outline ring.
- **Form Controls:** Text inputs feature an 8px radius, 48px height, 1px `#CBD5E1` border, and dark navy text `#0F172A`. Inactive placeholders rest in neutral `#94A3B8`. Error states transition borders to `#EF4444` with helper text beneath.

### Checkboxes & Radios
- 20x20px dimension with 4px border-radius for checkboxes, fully circular for radios. Inactive border is 1.5px `#CBD5E1`. Checked state fills with `#F97316` displaying an optic-white check or radio dot.

### Rental Timeline / Stepper
- Used for document verification (Aadhaar/DL) and trip status. Completed steps feature a `#10B981` circular node with check icon; active step has an orange `#F97316` pulsing ring; upcoming steps display subtle `#CBD5E1` ring nodes with connecting `#E2E8F0` track lines.