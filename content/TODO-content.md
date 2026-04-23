# Content the user must provide

Placeholders currently rendered in the site. Swap these before launch.

## Business details (CLAUDE.md §11)
- [ ] `[COMPANY_ADDRESS]` — full Swiss registered address
- [ ] `[EMAIL]` — public contact email (also used for `ENQUIRY_INBOX`)
- [ ] `[PHONE]` — Swiss phone number, E.164 format preferred for `tel:` links
- [ ] `[HANDELSREGISTER_NR]` — Swiss commercial-register (UID / CHE) number
- [ ] `[FOUNDING_YEAR]` — year Vitracosmetics was established
- [ ] `[PARTNER_COUNT]` — real number of current professional partners (for social-proof strip)
- [ ] `[PRODUCT_COUNT]` — number of TAO products distributed (used in showcase lead)

## Assets
- [ ] **Logo / wordmark files** (SVG preferred). Until supplied, the site renders a Fraunces 300 wordmark placeholder.
- [ ] **Professional catalogue PDF** — the transitional CTA target. Until supplied, the secondary CTA is disabled with a "coming soon" state.
- [ ] **Partner logos** (SVG). Until supplied, refined silhouette placeholders stand in.
- [ ] **Editorial photography** for the hero and section bands — shot to the Vitracosmetics direction in CLAUDE.md §4. Current site uses a neutral placeholder.

## TAO imagery
User has authorised using product imagery from `tao-cosmetics.de` for v1. Action items:
- [ ] Confirm this in writing with TAO (distributor asset-usage clearance).
- [ ] Prefer the **official TAO media kit** to scraped product thumbnails — ask TAO to send you the press-grade assets.
- [ ] Keep placeholder frames for any product shots that are missing press-grade files.

## Env vars (set in `.env.local`)
- [ ] `RESEND_API_KEY`
- [ ] `ENQUIRY_INBOX` — destination email for partnership enquiries
- [ ] `NEXT_PUBLIC_SITE_URL` — currently `https://vitracosmetics.ch` placeholder; swap when domain is confirmed
- [ ] `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — optional; omit to disable analytics

## Deployment
- [ ] Decide: Vercel vs self-host (standalone). Build is configured for both.
