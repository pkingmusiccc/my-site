# Vitracosmetics

Premium B2B partnership site for **Vitracosmetics** — the exclusive Swiss distributor of TAO Cosmetics (Germany).

Audience: dermatologists, medspas, hotel spas, clinics, skincare boutiques, and cosmeticians in Switzerland. Primary goal: generate qualified partnership enquiries via the contact form.

See [CLAUDE.md](./CLAUDE.md) for the full brief, voice, visual language, and section-by-section spec.

---

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict)
- Tailwind CSS v4 with CSS-variable design tokens
- Framer Motion (via the `motion/react` package) for entrance + scroll motion
- shadcn-style primitives on Radix where behaviour matters
- React Hook Form + zod for validation; server action submits via Resend
- Lucide for icons
- pnpm · Node >= 20

## Getting started

```bash
pnpm install
cp .env.example .env.local       # fill in values — see "Environment" below
pnpm dev                         # http://localhost:3000
```

### Scripts

| Script              | What it does                                                       |
| ------------------- | ------------------------------------------------------------------ |
| `pnpm dev`          | Dev server with Turbopack                                          |
| `pnpm build`        | Production build (`output: "standalone"`, Vercel + Docker compatible) |
| `pnpm start`        | Run the production build locally                                   |
| `pnpm typecheck`    | `tsc --noEmit` — must be clean before PR                           |
| `pnpm lint`         | ESLint (flat config, Next + TypeScript presets) — must be clean    |
| `pnpm test`         | Vitest (form validators + utility-level tests)                     |

## Environment

Copy `.env.example` to `.env.local` and fill these in:

| Variable                       | Required | Purpose                                                              |
| ------------------------------ | -------- | -------------------------------------------------------------------- |
| `RESEND_API_KEY`               | yes      | [Resend](https://resend.com) API key — sends enquiry emails.         |
| `ENQUIRY_INBOX`                | yes      | Email address that receives enquiries.                               |
| `ENQUIRY_FROM`                 | yes      | Verified sender, e.g. `"Vitracosmetics <no-reply@vitracosmetics.ch>"`. |
| `NEXT_PUBLIC_SITE_URL`         | yes      | Absolute site URL — drives metadata/OG/sitemap. Swap when domain is confirmed. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | no       | Set to enable Plausible analytics. Leave blank to disable.           |

The enquiry form also includes a honeypot field and a 2-second time-trap, and a simple in-memory per-IP rate limit (5 per 10 minutes). For multi-region or serverless deployments, swap `lib/rate-limit.ts` for an Upstash Redis implementation.

---

## How to edit copy

**Every string rendered on the site lives in [`content/copy.en.ts`](./content/copy.en.ts).** That file is the one place a non-developer needs to touch to change body text, headlines, labels, and options (canton list, role list, etc.).

The copy spine — voice, tone rules, positioning, CTAs — is defined in [`content/brandscript.md`](./content/brandscript.md). Edit the BrandScript first when the positioning changes, then update `copy.en.ts` accordingly.

Research notes on the parent brand (TAO Cosmetics) are in [`content/tao-notes.md`](./content/tao-notes.md) — read-only reference.

### Localisation

The site is scaffolded for `next-intl` (French, German, Italian). v1 ships English only. When the other languages are ready, add `copy.fr.ts`, `copy.de.ts`, `copy.it.ts` mirroring the shape of `copy.en.ts`, wire them through `next-intl`, and enable the disabled buttons in the footer language switcher.

### Placeholders

Placeholders that need real content are tracked in [`content/TODO-content.md`](./content/TODO-content.md). Swap these before launch:

- Business details (address, phone, email, register number, founding year)
- Logo / wordmark SVG (falls back to a typographic wordmark in [`components/ui/Wordmark.tsx`](./components/ui/Wordmark.tsx))
- Professional catalogue PDF (target of the secondary hero CTA)
- TAO product photography (image frames reserved with `aspect-ratio: 4 / 5`)
- Partner logos (marquee currently shows typographic placeholders)

---

## Project layout

```
/app                       Next.js App Router — layout, page, server actions
/components
  /motion                  Reveal, Stagger, WordMask, Marquee (all client)
  /sections                The 11 sections composed on page.tsx, in order
  /ui                      Button, Field primitives, Wordmark
/content                   BrandScript, typed copy, TODOs, TAO research
/lib                       cn, validators, email, rate-limit
/public                    favicon, product imagery (to be supplied)
```

Section order (authoritative, see CLAUDE.md §5): Nav · Hero · Stakes · Value · Guide · Products · Plan · Explanation · Proof · Contact · Footer.

---

## Design tokens

Defined in [`app/globals.css`](./app/globals.css) under `@theme`. Tailwind v4 auto-maps `--color-*` tokens to utility classes (`bg-accent`, `text-ink-muted`, `border-line`, etc.). Change a token there once; it propagates across the site. Motion tokens (`--ease-*`, `--dur-*`) are referenced directly with `var(…)` in component CSS.

See CLAUDE.md §4 for the canonical token list and the CTA-button spec the `Button` component implements.

---

## Deploy

The project is configured with `output: "standalone"` so it runs on:

- **Vercel** — push to Git, connect the repo, set env vars in the Vercel project, done.
- **Any Node / Docker host** — `pnpm build && node .next/standalone/server.js` (copy `public/` and `.next/static/` into the standalone output per the [Next.js standalone docs](https://nextjs.org/docs/app/api-reference/next-config-js/output)).

Before deploying:

- Fill every env var above.
- Verify in Resend that `ENQUIRY_FROM`'s domain is authenticated (SPF + DKIM).
- Replace the Fraunces wordmark placeholder in `components/ui/Wordmark.tsx` with the real logo SVG.

---

## Pre-PR checklist (from CLAUDE.md §13)

Before declaring any section or feature done:

- [ ] `pnpm build` — zero warnings.
- [ ] `pnpm typecheck` — zero errors.
- [ ] `pnpm lint` — zero errors.
- [ ] Lighthouse on mobile: Performance ≥ 95, Accessibility = 100, Best Practices ≥ 95, SEO = 100.
- [ ] Re-read CLAUDE.md §2 (non-negotiables) and §10 (anti-AI-slop) against the live page.
