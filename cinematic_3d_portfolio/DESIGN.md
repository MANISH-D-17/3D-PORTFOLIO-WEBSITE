---
name: Cinematic 3D Portfolio
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1c1c'
  surface-container: '#1f2020'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e4e2e2'
  on-surface-variant: '#c4c7ca'
  inverse-surface: '#e4e2e2'
  inverse-on-surface: '#303031'
  outline: '#8d9194'
  outline-variant: '#43474a'
  surface-tint: '#bdc8d0'
  primary: '#fcfdff'
  on-primary: '#273238'
  primary-container: '#d7e2ea'
  on-primary-container: '#5a656b'
  inverse-primary: '#556067'
  secondary: '#ffaceb'
  on-secondary: '#5d0055'
  secondary-container: '#b805aa'
  on-secondary-container: '#ffdaf2'
  tertiary: '#fffcff'
  on-tertiary: '#3c2e21'
  tertiary-container: '#f4dcc9'
  on-tertiary-container: '#716051'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d9e4ec'
  primary-fixed-dim: '#bdc8d0'
  on-primary-fixed: '#131d23'
  on-primary-fixed-variant: '#3e484f'
  secondary-fixed: '#ffd7f2'
  secondary-fixed-dim: '#ffaceb'
  on-secondary-fixed: '#390034'
  on-secondary-fixed-variant: '#830079'
  tertiary-fixed: '#f6decb'
  tertiary-fixed-dim: '#d9c2b0'
  on-tertiary-fixed: '#25190e'
  on-tertiary-fixed-variant: '#544436'
  background: '#131314'
  on-background: '#e4e2e2'
  surface-variant: '#353535'
typography:
  display-hero:
    fontFamily: Kanit
    fontSize: 120px
    fontWeight: '900'
    lineHeight: '0.9'
    letterSpacing: -0.05em
  headline-xl:
    fontFamily: Kanit
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Kanit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Kanit
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.1em
  body-sm:
    fontFamily: Kanit
    fontSize: 12px
    fontWeight: '300'
    lineHeight: '1.5'
    letterSpacing: 0.15em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.2em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-padding: 4rem
  section-gap: 8rem
  gutter: 24px
  stack-offset: 40px
---

## Brand & Style

The brand personality is high-end, immersive, and technically precise. It positions the creator as a premium artist by utilizing a dark, cinematic atmosphere that allows 3D renders to take center stage. The style is a hybrid of **Minimalism** and **High-Contrast Bold**, punctuated by **Glassmorphism** for depth. 

The aesthetic relies on the tension between deep matte surfaces and vibrant, cosmic accents. UI elements should feel like they are floating in a vacuum, using scale and motion to create a sense of physical weight and premium craftsmanship.

## Colors

The palette is anchored in a deep matte black (`#0C0C0C`) to eliminate visual noise. The primary text color, Ice White/Blue (`#D7E2EA`), provides high legibility without the harshness of pure white.

- **Steel Gradient:** Reserved for massive headings and structural accents, simulating metallic light reflection.
- **Cosmic Gradient:** Used sparingly for Call-to-Action (CTA) elements and high-priority highlights to provide a "vibrant energy" source within the dark environment.
- **Translucency:** Background assets and decorative 3D groups should use reduced opacity (10-30%) to maintain hierarchy.

## Typography

Typography is used as a graphic element. Headings are massive and aggressive, utilizing the Steel Gradient to create a "chrome" effect. 

- **Headlines:** Must be uppercase with `leading-none` and tight tracking to create a solid block of text.
- **Body:** Uses lighter weights (300-500) with wide tracking (`0.1em` to `0.15em`) to evoke a technical, blueprint-like feel. 
- **Secondary Font:** Space Grotesk is introduced for micro-labels, metadata, and technical specs to reinforce the futuristic/3D-software aesthetic.

## Layout & Spacing

This design system uses a **Fixed Grid** (12-column) with extremely generous outer margins to focus attention on the center-weighted content. 

- **Sticky-Stacking:** Project cards use a sticky positioning logic. As the user scrolls, the previous card stays in place and scales down (e.g., to 90%) while the new card slides over it.
- **Section Transitions:** Large vertical gaps (120px+) separate content blocks to allow the decorative 3D background assets to breathe.
- **Rhythm:** Use an 8px base grid for internal component padding, but 20px/40px increments for layout-level spacing.

## Elevation & Depth

Depth is achieved through layering rather than traditional drop shadows.

- **The "Stacked" Look:** Main content sections use massive border-radii and high z-index values to appear as if they are physical panels resting on top of the black void.
- **Glassmorphism:** Navigation bars and floating action buttons use a subtle backdrop blur (20px) and a thin 1px border (`#D7E2EA` at 10% opacity) to signify elevation.
- **Parallax:** Decorative 3D elements (Lego, Moons) should move at different scroll speeds to create a sense of true 3D space behind the flat UI panels.

## Shapes

The design system employs an exaggerated rounding strategy to contrast with the sharp, technical typography.

- **Main Sections:** Use a radius between `40px` and `60px`.
- **Project Cards:** Match the section radius for consistency.
- **UI Components:** Buttons and input fields use "Pill-shaped" geometry to feel tactile and modern.
- **Masks:** 3D renders should often be housed within organic, rounded containers rather than sharp rectangles.

## Components

### Buttons (CTA)
Primary buttons use the **Cosmic Gradient** with white text. Apply a `magnetic effect` on hover where the button follows the cursor slightly. The shape is always pill-rounded.

### Project Cards
Designed as full-width or large-scale containers. Backgrounds should be a dark grey (`#141414`) to stand out against the `#0C0C0C` base. Include a "scale-down" animation as they exit the viewport.

### Magnetic Cursors
Replace the default cursor with a custom ring (`#D7E2EA`) that expands when hovering over clickable 3D elements or project cards.

### 3D Groups (Decorative)
Non-interactive assets like floating Lego bricks or cosmic bodies should have a `framer-motion` float animation (y-axis oscillation) and subtle rotation.

### Text Scrubber
Scroll-driven character reveal: headers should animate opacity and tracking (from wide to tight) as they enter the viewport.