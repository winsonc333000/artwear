---
name: ARTwear
description: authentic artist work clothes
colors:
  ink: "#0d0d0d"
  ink-hover: "#2b2b2a"
  ink-2: "#4a4a49"
  ink-3: "#6b6b6a"
  gallery-wall: "#f4f3f4"
  wall-shade: "#efefef"
  label-card: "#fbfaf8"
  rule: "#d6d5d2"
  pin: "#b3b0a8"
  error: "#8f1d14"
typography:
  wordmark:
    fontFamily: "Caesura, Prata, Georgia, serif"
    fontSize: "clamp(34px, 4.49vw, 66px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  display:
    fontFamily: "Caesura, Prata, Georgia, serif"
    fontSize: "clamp(40px, 6vw, 92px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Caesura, Prata, Georgia, serif"
    fontSize: "clamp(28px, 3vw, 44px)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Caesura, Prata, Georgia, serif"
    fontSize: "clamp(22px, 2vw, 30px)"
    fontWeight: 400
    lineHeight: 1.05
  lede:
    fontFamily: "Aktiv Grotesk, Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(18px, 1.6vw, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Aktiv Grotesk, Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "\"tnum\""
  nav:
    fontFamily: "Aktiv Grotesk, Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(14px, 1.27vw, 17px)"
    fontWeight: 600
    lineHeight: 1.5
  label:
    fontFamily: "Aktiv Grotesk, Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(11px, 1.03vw, 14.5px)"
    fontWeight: 400
    lineHeight: 1.45
  caption:
    fontFamily: "Aktiv Grotesk, Hanken Grotesk, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(12px, 1.17vw, 15px)"
    fontWeight: 400
    lineHeight: 1.32
rounded:
  none: "0px"
  full: "50%"
spacing:
  gutter: "clamp(16px, 2.93vw, 48px)"
  gap: "clamp(12px, 1.95vw, 32px)"
  row: "clamp(28px, 3.4vw, 56px)"
  section: "clamp(56px, 7vw, 112px)"
  header: "clamp(92px, 10vw, 150px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gallery-wall}"
    rounded: "{rounded.none}"
    padding: "0.38em 0.85em"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.gallery-wall}"
  button-primary-lg:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gallery-wall}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
    width: "220px"
  button-in-bag:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  button-disabled:
    backgroundColor: "transparent"
    textColor: "{colors.ink-3}"
    rounded: "{rounded.none}"
  wall-label:
    backgroundColor: "{colors.label-card}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "clamp(12px, 1.4vw, 20px) clamp(12px, 1.45vw, 22px) clamp(14px, 1.5vw, 22px)"
  tile-frame:
    backgroundColor: "{colors.wall-shade}"
    rounded: "{rounded.none}"
  sold-dot:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.gallery-wall}"
    rounded: "{rounded.full}"
    size: "clamp(32px, 3.4vw, 50px)"
  input-text:
    backgroundColor: "{colors.label-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "11px 12px"
---

# Design System: ARTwear

## Overview

**Creative North Star: "The Bare Gallery Wall"**

The site is a white gallery wall. Garments hang on it like artworks, each with a pinned tombstone label, and the catalog below reads as the show's checklist. The interface is black type and black controls on an off-white wall. All colour on screen comes from paint on the garments, so the UI never competes with the work. The density is low at the top and calm and orderly below: one hung piece with empty wall around it, then a numbered grid.

The two faces split the work. A high-contrast serif carries the wordmark, page titles and artist names, the way a gallery uses a name on a wall. A neo-grotesk carries everything a visitor reads or operates. Every piece is numbered ("No. 031") and stated as "1 of 1" or "Sold", in the voice of a museum checklist, not a shop.

The build deliberately rejects the streetwear drop template (a campaign photo with a CTA over a product grid). The system has no display headline over the hero, no gradient, no rounded "card UI" and no accent colour.

The faces in use are stand-ins. The intended system is **Caesura** for display and **Aktiv Grotesk** for text and UI, both pinned by the founder. **Prata** and **Hanken Grotesk** (via next/font, `--font-serif` / `--font-sans`) render until the licensed files arrive. Swap the files without changing the roles, the sizes or the weights, then check the wordmark and the wall label against the comp again.

All artists, pieces and prices in the build are placeholders. The footer says so ("Preview site: artists, pieces and prices shown are samples.").

**Key Characteristics:**
- Off-white wall ground (#f4f3f4), with black used only for type and controls.
- Colour comes only from garment photography. Garment plates sit on neutral grounds.
- The pinned tombstone wall label is the signature component.
- Corners are square everywhere. The only circles are the Sold dot and the label pins.
- Numbered checklist captions: No., artist / garment, media, 1 of 1 or Sold.
- Fluid sizing tied to page width (the comp is 1024 wide), using clamp() throughout.

## Colors

A grey gallery wall with black ink. The palette is a monochrome neutral by design, and the garments supply the colour.

### Primary
- **Gallery Ink** (ink): every piece of text, the wordmark, the primary button fill, the selected-tab underline, the Sold dot, focus outlines, and the text selection fill. It is the only "brand colour".
- **Warm Charcoal** (ink-hover): used only as the hover fill of a solid ink button.

### Neutral
- **Gallery Wall** (gallery-wall): the page ground on every route. It matches the comp. It also serves as the inverse text colour on ink.
- **Wall Shade** (wall-shade): the slightly darker ground behind garment plates in tiles, piece images and bag thumbnails, so square crops read as hung objects, not boxes.
- **Label Card** (label-card): the warm paper of the wall label, the order summary panel, the notice box and the input fields.
- **Graphite** (ink-2): secondary text such as the tagline, page intros, artist meta, footer text and step descriptions.
- **Pencil** (ink-3): tertiary text such as spec terms, figure captions, sample notes, the "Sold" caption line and disabled controls.
- **Hairline** (rule): 1px dividers between list rows, the footer top rule, and the hover underline on unselected tabs.
- **Pin Grey** (pin): the four corner pins on the wall label. It is purely decorative.

### Functional
- **Oxide Red** (error): the only hue in the UI. Use it only for form validation (an invalid field border and its message). Never use it for decoration or sale messaging.

### Named Rules
**The Paint Only Rule.** Colour on screen comes from paint on the garments. UI chrome stays ink on wall, with Oxide Red reserved for validation errors.

**The Neutral Plate Rule.** Garment and studio rasters sit on neutral grounds that read as the wall or Wall Shade. A plate with a coloured or scenic ground breaks the wall.

## Typography

**Display Font:** Caesura (intended), currently set in Prata, with Georgia, serif as fallback
**Body Font:** Aktiv Grotesk (intended), currently set in Hanken Grotesk 400/500/600/700, with Helvetica Neue, Arial, sans-serif as fallback

**Character:** The serif has the high contrast of a name painted on a gallery wall. The grotesk is plain and factual, like a museum label. The serif is set at regular weight only, and emphasis lives in the grotesk.

### Hierarchy
- **Wordmark** (serif 400, clamp(34px, 4.49vw, 66px), 1, -0.015em): "ARTwear", with "ART" capitalised, set top-left in the header. A 30px version appears in the footer.
- **Display** (serif 400, clamp(40px, 6vw, 92px), 1.05): page titles on inner pages. The piece title runs a step smaller, at clamp(40px, 4.6vw, 72px). The home page has no visible headline.
- **Artist name** (serif 400, clamp(28px, 3.6vw, 56px), 1.05): the rows on the artists index.
- **Headline** (serif 400, clamp(28px, 3vw, 44px)): section titles.
- **Title** (serif 400, clamp(22px, 2vw, 30px)): about steps, bag items, and checkout legends (24-32px).
- **Lede** (sans 400, clamp(18px, 1.6vw, 22px), 1.5, max 60ch): opening paragraphs.
- **Body** (sans 400, 16px, 1.5, with tabular numerals throughout): running text, with prose capped at 48-58ch.
- **Nav** (sans 600, clamp(14px, 1.27vw, 17px)): header links. The category tabs use clamp(14px, 1.37vw, 19px) at 400, with 700 when selected.
- **Label** (sans 400, clamp(11px, 1.03vw, 14.5px), 1.45): wall label text. The artist line is 700 at 1.12em.
- **Caption** (sans 400, clamp(12px, 1.17vw, 15px), 1.32): checklist captions under tiles, where "No." is set in 700.

### Named Rules
**The Two Voices Rule.** The serif names things (the wordmark, titles, artists, quotes). The grotesk tells and operates (labels, captions, nav, buttons, forms). Never set controls or captions in the serif.

**The Lowercase Tagline Rule.** The tagline is always "authentic artist work clothes", in lowercase, set in Graphite at caption size under the wordmark.

## Layout

The page is a full-bleed wall with a fluid gutter (clamp(16px, 2.93vw, 48px)) and a fluid gap (clamp(12px, 1.95vw, 32px)). Sizes scale with the viewport width because the composition is scaled from a 1024px comp.

- **Home wall:** the header overlaps the wall, which is pulled up by the header height. One garment hangs centred at about 32.7vw wide, and its wall label is placed just to the right at the coat's chest height. The rest of the wall stays empty. The catalog follows directly, with category tabs and then the grid.
- **Catalog grid:** five columns, then four below 960px and two below 860px. Row gap is clamp(28px, 3.4vw, 56px). Tiles are square.
- **Inner pages:** padding is clamp(24px, 4vw, 64px) on top and clamp(64px, 8vw, 128px) at the bottom. Page heads are capped at 62rem. Two-column splits (artist top, portfolio, piece, checkout) use unequal fr ratios and collapse to one column below 860px. The piece info and order summary panels are sticky at 24px and become static on mobile.
- **Lists as ledgers:** the artist index, bag and order lines are rows divided by 1px hairlines, not cards.
- **Mobile (below 860px):** the header stacks the wordmark, tagline and nav, and the nav wraps. The hung garment flows in at min(78vw, 420px), with its label centred beneath it at 14px. Below 520px, forms and steps go to one column.

**The Empty Wall Rule.** On the home page, the hung piece gets the wall to itself. Nothing else sits in the first band apart from the header and the piece's own label.

## Elevation & Depth

The system is flat. Depth appears only where the gallery metaphor calls for an object resting on the wall. The wall label carries a soft paper shadow, and the hero garment is feathered into the wall with an edge mask, so no photo rectangle shows. Nothing else casts a shadow. Panels separate by tone (Label Card against the wall) or by hairline rules.

### Shadow Vocabulary
- **Pinned paper** (`box-shadow: 0 1px 2px rgba(20,18,14,0.08), 0 8px 18px -6px rgba(20,18,14,0.12)`): only on the wall label.

### Named Rules
**The Only Object Rule.** A shadow means "a physical thing on the wall". Only the wall label earns one, and buttons, tiles, panels and inputs stay flat.

## Shapes

All corners are square (0) on buttons, inputs, tiles, panels and labels. Circles appear only where a gallery uses them: the black Sold dot on a tile (50%) and the four 2.2px corner pins drawn on the wall label. Lines are 1px hairlines. The 2px ink underline marks the selected category tab, and the 1px ink underline marks the current nav link.

## Components

### Buttons
Buttons are solid ink blocks with square corners, in the grotesk at 600.
- **Shape:** square (0), with a 1px ink border.
- **Primary:** ink fill with wall text. The small size (on the label) is 0.38em 0.85em at clamp(11px, 0.98vw, 14px), and 8px 14px at 14px on mobile. The large size (on the piece, bag and checkout pages) is 14px 28px at 16px, with a minimum width of 220px.
- **Hover / Active / Focus:** hover shifts the fill to Warm Charcoal, and active inverts to wall fill with ink text. Transitions run 160ms on the ease-out curve. Focus shows a 2px ink outline offset by 3px.
- **In your bag:** the button becomes a transparent ink outline linking to the bag, and fills with ink on hover.
- **Disabled (Sold):** transparent, with Pencil text and a Hairline border.
- **Ghost:** the same outline treatment as In your bag. **Text link button:** underlined at 15px, with a 0.2em offset.

### Wall Label (signature)
A tombstone label pinned to the wall beside a piece. It holds the following lines in order: the artist name in bold, linked, followed by " /"; the garment and wear ("Chore coat, worn 5 weeks"); the media; "No. 031 · 1 of 1" (or Sold); and an Add to bag button. It uses Label Card paper, four Pin Grey corner pins and the pinned-paper shadow. On desktop it does not wrap. It is the only surface that sells directly on the home page.

### Piece Tile and Checklist Caption
The image is a square Wall Shade frame with the garment plate cropped to cover it. On hover the image eases to scale 1.035 over 500ms, and the artist line underlines. The caption is a block of four lines at caption size: **No. 0xx**, then "Artist / Garment", then the media, then "1 of 1" or "Sold". The Sold line is set in Pencil. Sold pieces carry a black Sold dot in the top-right corner of the frame.

### Navigation
The header nav is set in sans 600: Shop, Artists, Drop, About, and Bag (n). The current page and hover states get a 1px ink underline. There is no menu icon; on mobile the links wrap under the wordmark. Category tabs are text buttons. The selected tab is set in 700 with a 2px ink underline, and hovering an unselected tab shows a Hairline underline. The tab row scrolls horizontally without a scrollbar.

### Artist Index
Artists are listed as ledger rows: the serif name, meta in Graphite, and a 4:3 thumbnail. Hovering the list fades the other rows to 0.28 opacity over 240ms. Focus keeps the focused row at full opacity.

### Inputs / Fields
- **Style:** Label Card fill, a 1px stroke, square corners, 11px 12px padding, and 16px text. The shipped stroke (#a9a8a4) gives only about 2.3:1 against the field and is not a system value; the stroke needs at least 3:1 (Pencil meets it). The label above sits at 14px/600.
- **Focus:** a 2px ink outline with no offset, and the border turns ink.
- **Error:** an Oxide Red border and a 13px Oxide Red message.

### Notice / Order Panel
Notices are Label Card blocks with a 1px ink border and 18px 20px padding. The checkout order summary is a flat Label Card panel with hairline-divided order lines.

## Do's and Don'ts

### Do:
- **Do** keep the UI to ink (#0d0d0d) on the gallery wall (#f4f3f4), and let garment paint supply all colour.
- **Do** credit every piece the checklist way: No., artist / garment, media, then 1 of 1 or Sold.
- **Do** use the pinned wall label wherever a single piece is offered for sale on a wall composition.
- **Do** mark sold pieces honestly with the black Sold dot and a Pencil "Sold" line, and disable the button.
- **Do** keep garment and studio plates on neutral grounds that sit quietly on the wall.
- **Do** size type and spacing fluidly with clamp(), as globals.css does, and keep every corner square.
- **Do** respect reduced motion: the hero "settle" swing (2.4s, ease-out) and all transitions switch off.
- **Do** label sample content as samples until real artists, pieces and prices exist.

### Don't:
- **Don't** add an accent colour, gradient or tinted UI surface. Oxide Red is for validation only.
- **Don't** put a campaign headline or CTA over a hero photo. The home page is a hung piece with its label.
- **Don't** round buttons, inputs, tiles or panels. Circles are only for the Sold dot and label pins.
- **Don't** add shadows to anything except the wall label.
- **Don't** set the tagline in title case, or use the serif for buttons, captions or form text.
- **Don't** use "distressed", "limited" or countdown language, or fake scarcity badges. Scarcity is stated as "1 of 1".
