# Crusty’s Express – Design System (Finalized Tokens)

This document serves as the absolute single source of truth for all UI design tokens, visual treatments, typography hierarchies, and layout structures for the Official Crusty’s Express website.

---

## 🎨 1. Brand Color System

We maintain a premium, bold urban aesthetic with deep black surfaces, a punchy crimson logo-red, electric golden yellow highlights, and highly controlled, subtle glow states (avoiding "nightclub" saturation).

| Token Name | CSS Variable | Color Value (HEX/RGBA) | Purpose & Usage |
| :--- | :--- | :--- | :--- |
| **Deep Base Background** | `--color-bg-base` | `#080809` | Immersive core background (pitch-black) |
| **Surface (Cards & Nav)** | `--color-bg-surface` | `#111113` | Card backgrounds, top navbar, dialog bodies |
| **Elevated Surface** | `--color-bg-elevated`| `#17171a` | Active tab states, list items, input fields |
| **Brand Crimson Red** | `--color-primary` | `#e31c25` | Primary logo red: main CTA actions, highlights |
| **Subtle Red Glow** | `--color-primary-glow` | `rgba(227, 28, 37, 0.12)` | Highly subtle red button drop shadows and glow lines |
| **Brand Golden Yellow** | `--color-accent` | `#ffc700` | Accent yellow: promotion badges, ratings, warnings |
| **Subtle Yellow Glow** | `--color-accent-glow` | `rgba(255, 199, 0, 0.08)` | Very faint glow highlights for active status badges |
| **Border Dark** | `--color-border` | `#1f1f23` | Clean separations between components |
| **Text High Contrast** | `--color-text-high` | `#ffffff` | Headers, prices, card titles (white) |
| **Text Muted** | `--color-text-muted` | `#93939a` | Body copy, descriptions, placeholders (cool gray) |

---

## 📐 2. Spacing Scale (8px Grid)

To achieve clean visual rhythm and standard alignments across mobile and desktop interfaces, all padding, margins, and gaps are bound to the 8px spatial grid.

- **`--space-2xs` (4px):** Tight text label spacing, badge paddings.
- **`--space-xs` (8px):** Small layout adjustments, inner button paddings.
- **`--space-sm` (16px):** Card inner margins, category tab padding.
- **`--space-md` (24px):** Product card gaps, section element flow.
- **`--space-lg` (32px):** Standard grid gap for desktop cards, header paddings.
- **`--space-xl` (48px):** Outer block padding, section container margins.
- **`--space-2xl` (64px):** Hero section top/bottom padding, page boundaries.

---

## 🔤 3. Typography Scale & Hierarchy

We import **Outfit** for heavy urban headers and **Plus Jakarta Sans** for highly readable UI labels, descriptions, and buttons.

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
```

- **Brand Header Font:** `--font-display: 'Outfit', sans-serif;`
- **Body & Interface Font:** `--font-body: 'Plus Jakarta Sans', sans-serif;`

### Size Tokens
- **`--text-2xs` (10px / 0.625rem):** Micro badges, tiny metadata.
- **`--text-xs` (12px / 0.75rem):** Promo labels, discount rates.
- **`--text-sm` (14px / 0.875rem):** Card descriptions, auxiliary text.
- **`--text-md` (16px / 1rem):** Main base body copy, list text.
- **`--text-lg` (18px / 1.125rem):** Product pricing, checkout labels.
- **`--text-xl` (20px / 1.25rem):** Minor headers, navigation links, card titles.
- **`--text-2xl` (28px / 1.75rem):** Section titles, modal titles, mobile hero.
- **`--text-3xl` (48px / 3rem):** Desktop hero headliners, key promotions.

---

## 🔲 4. Rounded Corners (Border-Radius Scale)

Adjusted to feature smooth, modern rounded surfaces instead of sharp industrial edges.

- **`--radius-sm` (8px):** Badge elements, small selector fields.
- **`--radius-md` (12px):** Main buttons, dynamic dropdown menus, category tabs.
- **`--radius-lg` (16px):** Modern product cards, drawer overlays, interactive banners.
- **`--radius-xl` (24px):** Main layout elements, checkout modal wrappers.

---

## 🔘 5. Component Style Specs

### Primary CTA Button (Red)
- **Background:** `var(--color-primary)` (`#e31c25`).
- **Text:** `var(--color-text-high)` (`#ffffff`), weight `700`, uppercase/bold style.
- **Border Radius:** `var(--radius-md)` (`12px`).
- **Subtle Glow Shadow:** `box-shadow: 0 4px 12px var(--color-primary-glow)`.
- **Hover Micro-Interaction:** 
  - Translate layout up: `transform: translateY(-2px)`
  - Refined shadow spread: `box-shadow: 0 6px 16px rgba(227, 28, 37, 0.22)`
  - Active press: `transform: translateY(0)`

### Product Card System
- **Layout:** Vertical container, flex/grid align.
- **Background:** `var(--color-bg-surface)` (`#111113`).
- **Border:** `1px solid var(--color-border)` (`#1f1f23`).
- **Border Radius:** `var(--radius-lg)` (`16px`).
- **Hover Interaction:**
  - Modern elevation scale: `transform: translateY(-4px) scale(1.01)`
  - Extremely subtle ambient glow border highlight.
  - Smooth 300ms bezier transition on hover exit.

---

## ⚡ 6. Transition & Animation Guidelines

To ensure the site feels ultra-fast (under 3s loading) and premium, animations are strictly hardware-accelerated and capped in length.

### Animation Tokens
- **`--transition-fast` (150ms):** Used for hover colors, button highlights, and toggles.
- **`--transition-medium` (300ms):** Applied to card transitions, modal scale-ups, and category shifts.
- **`--transition-slow` (450ms):** Used exclusively for large container drawer actions (Cart entrance).

### Permitted Animations
1. **Hero Logo Pulse:** A slow, organic neon glow pulse on the hero header:
   ```css
   @keyframes brandPulse {
     0% { text-shadow: 0 0 4px rgba(227, 28, 37, 0.1); }
     50% { text-shadow: 0 0 12px rgba(227, 28, 37, 0.25), 0 0 20px rgba(255, 199, 0, 0.1); }
     100% { text-shadow: 0 0 4px rgba(227, 28, 37, 0.1); }
   }
   ```
2. **Slide Up & Fade In:** For scroll reveal and initial page loads:
   ```css
   @keyframes slideUpFade {
     from { opacity: 0; transform: translateY(12px); }
     to { opacity: 1; transform: translateY(0); }
   }
   ```
