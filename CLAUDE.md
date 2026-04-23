# CLAUDE.md — Vitracosmetics Website

> **North-star brief for Claude Code (running in Antigravity).**
> Read this file fully before writing any code. Re-read the "Non-negotiables" and "Anti-AI-slop rules" sections before every meaningful commit.

---

## 1. Project

Build a **premium, one-page marketing website** for **Vitracosmetics** — the exclusive Swiss distributor of **TAO Cosmetics**, a German premium skincare brand (see https://www.tao-cosmetics.de).

- **Audience (B2B only):** dermatologists, medical spas, day spas, skincare boutiques, luxury hotels, aesthetic clinics, doctors, cosmeticians in Switzerland.
- **Primary business goal:** generate qualified partnership enquiries via a contact form.
- **Secondary goal:** establish Vitracosmetics as *the* credible Swiss gateway to TAO.
- **Language:** English (v1). The codebase must be structured so French, German, and Italian can be added later via a standard i18n library (`next-intl`).
- **Domain:** TBD — build with environment-agnostic config.

---

## 2. Non-negotiables (read before every commit)

1. **StoryBrand-first copy.** Every section must map to a StoryBrand (Donald Miller) building block. No marketing fluff. No feature-dumps. The *customer* is the hero, Vitracosmetics is the *guide*. (See §6.)
2. **No AI slop.** No stock phrases like "unlock your potential," "elevate your experience," "in today's fast-paced world," "revolutionary," "cutting-edge," "seamless." No generic gradient blobs, no centered-everything, no three-icon-trio of lorem features. If a sentence could appear on any other cosmetics site, rewrite it. (See §10.)
3. **Premium restraint.** White space is a feature. Typography does the heavy lifting. Animation is *quiet confidence*, never showy.
4. **Originality.** Before writing any section, fetch https://www.tao-cosmetics.de and study its visual language, product nomenclature, and tone. Reference but never copy. Vitracosmetics has its own Swiss identity — calmer, more institutional, more clinical-luxe than the parent brand.
5. **B2B tone.** Copy speaks to professionals. Assume the reader *already knows* the cosmetics industry — don't explain what a serum is. Focus on what separates TAO and what a partnership unlocks for their business.

---

## 3. Tech stack

| Concern             | Choice                                                         |
| ------------------- | -------------------------------------------------------------- |
| Framework           | **Next.js 15** (App Router, RSC, Turbopack)                    |
| Language            | **TypeScript** (strict mode)                                   |
| Styling             | **Tailwind CSS v4** + CSS variables for the design tokens      |
| Component primitives| **shadcn/ui** (Radix under the hood) — installed on demand     |
| Animation           | **Framer Motion** (now `motion/react`) for all motion          |
| Icons               | **Lucide** (no emoji, no icon soup)                            |
| Forms               | **react-hook-form** + **zod** for validation                   |
| Form submission     | Next.js server action → **Resend** (email) — env-configurable  |
| i18n (future)       | `next-intl` — scaffold structure, English only in v1           |
| Fonts               | Next.js `next/font` (self-hosted, no FOUT)                     |
| Image optimisation  | `next/image` with AVIF/WebP                                    |
| Analytics           | Plausible (privacy-first) — env-configurable, optional         |
| Deployment target   | Vercel (assume, but keep `output: "standalone"` compatible)    |
| Package manager     | **pnpm**                                                       |
| Node                | >= 20 LTS                                                      |

### Required Claude Code skills / MCPs to use

Claude Code must actively use these during the build:

- **UI UX PRO MAX** skill — for layout, spacing rhythm, hierarchy, and critique of every section before shipping.
- **Framer Motion** skill — for every animation. Choreography must be intentional (see §8).
- **Anthropic Frontend Design** skill — for visual polish, CSS craft, and accessibility.
- **21st.dev Magic MCP** (`mcp__21st-dev_magic__21st_magic_component_builder`, `component_inspiration`, `component_refiner`, `logo_search`) — use it to *inspire and scaffold* components, then refine by hand. Never ship raw 21st.dev output verbatim; always refine with the UI UX PRO MAX + Anthropic Frontend Design skills.

**Workflow for each component:** 21st.dev inspiration → scaffold → refine with UI UX PRO MAX critique → polish with Anthropic Frontend Design → add motion with Framer Motion skill → accessibility pass.

---

## 4. Brand identity (Vitracosmetics)

### Voice
- Swiss-precise. Calm. Evidence-led. Professional.
- Short sentences. Active voice. Concrete nouns.
- No superlatives unless supported by a specific fact (ingredient, clinical result, certification).
- Writes to a colleague, not a customer.

### Visual language
- **Clinical-luxe**, not "beauty-pretty." Think *Aesop × Swiss pharmacy × editorial magazine*.
- Generous negative space. Grid discipline. Quiet confidence.
- Product photography: clean, top-lit, with considered shadow. No lifestyle-model cliché.

### Colour tokens (CSS variables, exact values)

```css
:root {
  /* Surfaces */
  --color-bg:            #FFFFFF;       /* primary white background */
  --color-bg-soft:       #F7F8FA;       /* secondary surface, cards */
  --color-bg-mist:       #EEF1F5;       /* tertiary, dividers, section bands */

  /* Ink */
  --color-ink:           #0F1520;       /* primary text — near-black, slightly blue */
  --color-ink-muted:     #4A5567;       /* secondary text */
  --color-ink-soft:      #8692A6;       /* tertiary text, captions */

  /* Accent — soft light blue-grey (the CTA colour) */
  --color-accent:        #A9B7C6;       /* primary CTA fill */
  --color-accent-hover:  #94A4B8;       /* CTA hover */
  --color-accent-ink:    #0F1520;       /* text on accent buttons */
  --color-accent-soft:   #E7ECF2;       /* ghost CTA fill / focus rings */

  /* Lines */
  --color-line:          #E3E7ED;       /* hairlines */
  --color-line-strong:   #CBD2DB;       /* stronger dividers */

  /* Semantic */
  --color-success:       #3E6B5A;
  --color-error:         #8E3A3A;

  /* Motion */
  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast:   180ms;
  --dur-medium: 420ms;
  --dur-slow:   720ms;
}
```

**CTA buttons use `--color-accent` as fill, `--color-accent-ink` as text, with a 1px inner border at `rgba(15,21,32,0.06)` and a subtle `box-shadow: 0 1px 0 rgba(15,21,32,0.04), 0 8px 24px -12px rgba(15,21,32,0.18)`.** No gradients. No glow.

### Typography

- **Display / Headings:** a refined serif with Swiss-modern structure. Use **Fraunces** (variable, self-hosted via `next/font/google`). Weight 300–400 for display, optical size tuned per size.
- **Body / UI:** **Inter** (variable). Weight 400/500. Never ship text under 15px.
- Alternative if Fraunces feels too editorial: **GT Sectra Fine** fallback to **Canela** — but start with Fraunces.
- Tracking: tight on display (`-0.02em`), normal on body, slightly open on labels (`+0.06em`, uppercase, small).
- Line-height: 1.08 on display, 1.55 on body.
- Never mix more than two families. Never use italics for emphasis outside editorial pull-quotes.

### Logo
If no logo is provided, use a set wordmark: `Vitracosmetics` in Fraunces 300, letter-spacing `-0.015em`, with a hair-fine dot separator between `Vitra` and `cosmetics` at 40% opacity. Offer a variant lockup with a small apothecary-style mark (use 21st.dev `logo_search` to generate options, then refine).

---

## 5. Page sections (order is the spec)

This is the **authoritative section order** and matches the StoryBrand website flow from *Building a StoryBrand 2.0*. Do not reorder without explicit approval.

1. **Sticky nav** — wordmark left; anchor links (Products, About, Contact); primary CTA button right ("Become a partner").
2. **Hero** — big-promise headline + sub + primary CTA + secondary CTA. (§6)
3. **The stakes** — short strip: the cost of *not* partnering with a differentiated brand.
4. **Value proposition** — 3 concrete benefits for partners (not features of TAO).
5. **The guide** — "Why Vitracosmetics" — empathy + authority (Swiss presence, TAO exclusivity, support model).
6. **Product showcase** — the TAO range, grouped by line. Editorial grid with motion on scroll.
7. **The plan** — 3 steps: *Discover → Consult → Launch*.
8. **Explanatory paragraph** — the long-form case for TAO + Vitracosmetics (one considered block of prose).
9. **Social proof / partner logos** — horizontal marquee of partner types (medspas, hotels, clinics) with real logos where available, refined silhouettes otherwise.
10. **Contact / enquiry form** — the conversion point. (§7)
11. **Footer** — junk drawer: address placeholders, legal links, social, language switcher (disabled in v1).

---

## 6. StoryBrand BrandScript (the copy spine)

Every line on the site derives from this. Write these out in `/content/brandscript.md` and keep it in sync.

- **Hero (customer):** a skincare professional in Switzerland — derm, medspa owner, hotel spa director, boutique buyer, aesthetic clinician — who needs to differentiate their treatment menu with a premium, science-forward, professional-grade line.
- **External problem:** German-quality professional cosmetics are hard to source reliably in Switzerland, with inconsistent supply, unclear regulatory status, and thin professional support.
- **Internal problem:** fear of staking professional reputation on the wrong brand; frustration with mass-market lines that clients can buy anywhere.
- **Philosophical problem:** clients deserve formulations with integrity — evidence-led, considered, honest. Beauty-industry theatre is over.
- **Guide — empathy:** "We know a professional's reputation is built one client at a time."
- **Guide — authority:** exclusive Swiss distributor for TAO (Germany); direct manufacturer relationship; Swiss logistics and regulatory handling; professional training included.
- **Plan (3 steps):**
  1. **Discover** the TAO range and your professional pricing.
  2. **Consult** with our Swiss team — fit the line to your treatment menu.
  3. **Launch** with onboarding, staff training, and marketing assets.
- **Direct CTA:** *Become a partner* (opens the enquiry form).
- **Transitional CTA:** *Download the professional catalogue (PDF)* — gated by email.
- **Success:** a differentiated treatment menu, higher average ticket, loyal clients who can only get the line from you.
- **Failure:** undifferentiated shelf, commoditised treatments, clients drifting to spas with better lines.
- **Identity transformation:** from a professional selling *products* to one trusted for *judgement*.

### Hero copy direction (generate 3 options, pick the quietest one)
- Headline must state the promise in one breath. Example of *tone* (do not copy): *"The German precision of TAO, distributed professionally in Switzerland."*
- Sub: one sentence naming *who it's for* and *what they get*.
- Avoid: "discover," "unleash," "transform your spa," "elevate."

---

## 7. Contact form spec

- Fields: Business name*, Contact name*, Role (select: Dermatologist / Medspa / Spa / Hotel / Clinic / Boutique / Cosmetician / Other)*, Email*, Phone, Canton (select)*, Message, Consent checkbox*.
- Validation with zod; inline errors in `--color-error`; success state replaces the form with a short, human confirmation.
- Server action sends via Resend (env: `RESEND_API_KEY`, `ENQUIRY_INBOX`). Log failures to console and surface a generic retry message — never expose errors.
- Honeypot field + basic rate limiting (IP + LRU in memory).
- Accessibility: real `<label>`s, `aria-describedby` for errors, visible focus rings using `--color-accent`.

---

## 8. Motion (Framer Motion) direction

Motion is a tool for *hierarchy and confidence*, not decoration. Every animation must answer "what is this revealing?"

- **Entrance:** sections fade in with a 12–16px upward translate, duration 520ms, `--ease-entrance`, staggered children at 60ms. Only on first view (use `viewport={{ once: true, margin: "-10%" }}`).
- **Hero:** headline words animate in on a mask-reveal (`clip-path: inset(...)`), not a blur. Sub + CTA follow with a 120ms stagger.
- **CTA hover:** 1px inner border lifts to 2px, shadow deepens slightly, *no scale*. Duration 180ms.
- **Scroll parallax:** at most one element per section, 30px of travel max. Never on text.
- **Product cards:** on hover, image crossfade to a detail shot over 420ms; caption slides up 8px.
- **Prefers-reduced-motion:** honour it — swap every transform/clip animation for an opacity-only fade.

Create a `components/motion/` folder with reusable primitives: `<Reveal>`, `<Stagger>`, `<WordMask>`, `<Marquee>`. Import across the site.

---

## 9. Accessibility & performance

- WCAG 2.2 AA minimum. Accent on white has enough contrast only for **large** text and UI — body copy always on `--color-ink`.
- Every interactive element keyboard-operable with a visible focus ring (`outline: 2px solid var(--color-ink); outline-offset: 3px`).
- Lighthouse budget: **Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO = 100** on mobile.
- LCP element = hero headline (not an image). Hero image lazy-loads below the fold of LCP.
- No layout shift. All images have explicit `width`/`height` or `fill` with aspect-ratio wrapper.
- Total JS budget for the landing: **< 120KB gz** first load. Code-split the form.
- No third-party script before user interaction (analytics loads after `load`).

---

## 10. Anti-AI-slop rules (copy + visual)

### Copy bans
Never use: *unlock, elevate, empower, seamless, cutting-edge, revolutionary, redefine, reimagine, in today's ... world, at the intersection of, journey, solutions, passionate, we believe, our mission, crafted with love, curated, tailored experience, holistic, synergy, world-class, best-in-class, one-stop, next-level.*

### Structural bans
- No hero that is a centered headline with a gradient blob behind it.
- No "trusted by" logo strip that is only greyed-out SVG clichés.
- No three-column feature trio with identical icon style and "Lorem-grade" descriptions.
- No testimonial that doesn't name the person, role, and business.
- No product copy that lists only ingredients without stating *what it does for the client*.

### Visual bans
- No purple/pink gradients. No radial glows. No glassmorphism.
- No stock imagery of a woman laughing with salad, lab-coated model holding a pipette, or model with a towel turban.
- No SVG "abstract shapes" behind sections.
- No emoji anywhere in the UI copy.

### Positive direction (what to do instead)
- Let the grid breathe. A 12-column grid with a 72px row gap at desktop is fine.
- Photography is the hero. Use real product shots (placeholders to be swapped). Monochrome-leaning colour grade; single warm highlight on each.
- Make the form a *section*, not a modal. It is the point of the page.
- Use real numbers — founding year, CH canton count, product count, training hours included.

---

## 11. Content the user must provide (track in `/content/TODO-content.md`)

The following are the only placeholders allowed:
- `[COMPANY_ADDRESS]`, `[EMAIL]`, `[PHONE]`, `[HANDELSREGISTER_NR]`
- `[FOUNDING_YEAR]`, `[PARTNER_COUNT]`, `[PRODUCT_COUNT]`
- Real partner logos (use refined placeholder silhouettes until provided)
- TAO product imagery (use clearly-marked placeholder frames until provided — never invent product shots with AI image models)

Everywhere else, write real, considered copy from the BrandScript.

---

## 12. Repository structure

```
/
├── CLAUDE.md                    # this file
├── README.md
├── package.json
├── pnpm-lock.yaml
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.example                 # RESEND_API_KEY, ENQUIRY_INBOX, NEXT_PUBLIC_PLAUSIBLE_DOMAIN
├── /app
│   ├── layout.tsx               # fonts, metadata, skip-link
│   ├── page.tsx                 # composes sections in §5 order
│   ├── globals.css              # tokens from §4, Tailwind layers
│   └── /api or server-actions   # enquiry submission
├── /components
│   ├── /sections                # Nav, Hero, Stakes, Value, Guide, Products, Plan, Explanation, Proof, Contact, Footer
│   ├── /ui                      # shadcn primitives, Button, Input, Select, ...
│   └── /motion                  # Reveal, Stagger, WordMask, Marquee
├── /content
│   ├── brandscript.md           # §6 in markdown, source of truth for all copy
│   ├── copy.en.ts               # typed copy object consumed by sections
│   └── TODO-content.md          # tracked placeholders
├── /lib
│   ├── validators.ts            # zod schemas
│   ├── email.ts                 # Resend client
│   └── cn.ts
├── /public
│   ├── /images/products         # TAO product photography (placeholders for v1)
│   ├── /images/editorial        # section photography
│   └── favicon.svg
└── /tests                       # vitest + @testing-library/react for form logic
```

---

## 13. Build workflow for Claude Code

Follow this order. Do not skip steps.

1. **Fetch & study** https://www.tao-cosmetics.de. Summarise the brand voice, product taxonomy, and visual language in `/content/tao-notes.md`. This is read-only research — do not copy.
2. **Write the BrandScript** (`/content/brandscript.md`) from §6 before writing any JSX.
3. **Scaffold** the Next.js app with the stack in §3. Commit.
4. **Install design system** — tokens in `globals.css`, Tailwind config mapping tokens to utility classes (e.g. `bg-accent`, `text-ink-muted`). Commit.
5. **Install motion primitives** in `/components/motion/` from §8. Commit.
6. **Section-by-section**, in the order of §5: for each section
   a. Use **21st.dev Magic MCP** for inspiration/scaffold.
   b. Run **UI UX PRO MAX** critique on the draft — list every issue, then fix.
   c. Apply **Anthropic Frontend Design** polish.
   d. Wire **Framer Motion** per §8.
   e. Write the final copy straight from the BrandScript — no placeholder lorem allowed in any commit.
   f. Accessibility pass (keyboard walk, axe).
   g. Commit with a message describing what *the user sees*, not what changed in code.
7. **Form + server action** — zod + Resend + honeypot + rate limit. Unit-test the validator.
8. **Global polish pass** — run Lighthouse, fix to the §9 budget. Axe-core clean.
9. **Hand-off** — update `README.md` with setup, env vars, deploy instructions, and a *"How to edit copy"* section that points non-developers at `/content/copy.en.ts`.

### Commit hygiene
- One section per commit minimum.
- Conventional commits (`feat:`, `fix:`, `chore:`, `copy:`).
- Never commit `.env`. Commit `.env.example` with empty values and comments.

### Before opening a PR / declaring done
- Run `pnpm build` — zero warnings.
- Run `pnpm typecheck` — zero errors.
- Run `pnpm lint` — zero errors.
- Run Lighthouse on mobile — hit §9 budget.
- Manually re-read §2 and §10 against the live page. If anything fails, fix it.

---

## 14. Out of scope for v1

- E-commerce / cart / checkout.
- Multi-language (scaffold only; English content only).
- Blog / editorial section.
- Customer login / portal.
- Any AI chat widget.

If a request arrives to add one of these, stop and confirm before building.

---

## 15. Questions Claude Code should ask the user before building

Before writing code, surface these explicitly:
1. Confirm domain name and whether Vercel deployment is acceptable.
2. Ask for real business details to replace the placeholders in §11.
3. Ask whether real TAO product photography can be supplied, or whether Vitracosmetics will photograph the range.
4. Ask for the professional catalogue PDF (transitional CTA target).
5. Ask for any existing logo/wordmark files, or approval to generate a wordmark per §4.

Do not invent answers. Ship the site with clearly-marked placeholders until the user responds.

---

*End of brief. When in doubt, choose restraint.*
