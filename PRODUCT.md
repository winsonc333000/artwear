# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: Next.js (App Router, TypeScript). Chosen because the site is multi-page (home, category shop, artist index, per-artist pages, product, cart, checkout), every page draws on one shared catalog of artists and 1-of-1 garments, and the same app can later take a real payment provider and inventory backend without a rewrite. First version keeps catalog data in local files; no backend.

## Users

Primary: art collectors and fans, people who follow specific young NYC artists and want to own a piece of their actual practice. They arrive mostly through an artist's own social media, often looking for that artist's collection or the current monthly drop, and buy a garment because of who wore it and what it carries from the studio.

Secondary (supply side, not the site's shopping audience): the collective's artists, who are painters, sculptors, printmakers, mixed-media makers and anyone whose studio work is messy. They want a place to send their followers without running a shop themselves.

## Product Purpose

ARTwear sells authentic artist-worn clothing. ARTwear gives artists blank workwear for free; they wear it in normal studio practice and return it within about one month. Artists also submit garments from their own studios that have built up years of natural wear, stains and paint. ARTwear catalogues, photographs, prices, sells and ships each piece, so artists skip the technical and business work. Artists get half of the total profit from each sale.

Success: collectors find an artist's pieces quickly, understand that each item is a real 1-of-1 garment from that artist's studio, and complete checkout; monthly drops sell through.

## Positioning

The garment is the artifact: it is real work clothing worn in a named artist's studio, marked by their actual practice. Nothing is printed, distressed or reproduced. ARTwear runs as a collective, not a clothing company; reach comes from the artists promoting their own collections, and the site gives them and their studios top billing.

## Operating Context

- Each artist promotes their collection through their personal social media; ARTwear has little reach of its own, so links to an artist's page are a main way in.
- Monthly drops/restocks, announced periodically.
- Short videos of artists working in the clothing.
- Collaborations between artists bring in new audiences.
- Every item is 1-of-1: once it sells, it's gone. There is no size or colour restock of the same piece.

## Capabilities and Constraints

Site structure (confirmed):
- **Home:** about ARTwear, with graphics, plus highlights of the current monthly drop.
- **Shop:** a normal shopping experience divided by clothing category (tops, bottoms, etc.).
- **Artists:** a list of every artist, each leading to their own page.
- **Artist page:** bio, studio picture, a small portfolio of their artwork, and their listed clothing.
- **Checkout.**

The main shop groups everything together; artist pages are individual.

Constraints and open decisions:
- Checkout is design-only for v1: the full cart and checkout UI with no payment provider wired. The provider is undecided.
- Inventory is unique items, so product pages need sold/available states rather than stock counts or size pickers for multiples.
- Exact category list, pricing and shipping policy are undecided.

## Brand Commitments

- Name: ARTwear (wordmark styled with "ART" capitalised). NYC-based collective.
- Binding direction from the founder: basic website that is easy to navigate, mostly black and white, theme is "blank canvas".
- Typography (binding, set by the founder): **Caesura** primary (display/headings), **Aktiv Grotesk** secondary (text/UI).
- Home page: minimal hero, with the catalog directly beneath it. Tagline "authentic artist work clothes" (lowercase a) under the wordmark.

## Evidence on Hand

None yet (pre-launch). There is no artist roster, no garment photos, and no studio photos or videos. All builds use clearly marked placeholders. Do not invent artist names presented as real people, sales numbers, press, testimonials or prices presented as fact.

## Product Principles

1. **The artist comes first.** Every garment is credited to the person who wore it; artist and studio are as important as the product.
2. **Proof of wear is the product.** Show the real marks, paint and wear up close; never make a piece look like mass production.
3. **One of one.** Scarcity is real, not a sales tactic; be honest about sold and available pieces.
4. **Easy to shop.** Collectors arriving from social media should reach an artist's pieces or the current drop in one or two steps.
5. **Collective, not corporate.** The voice is the artists', not a brand selling at people.
