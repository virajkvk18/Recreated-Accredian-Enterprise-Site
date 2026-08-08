# Accredian Enterprise Recreation

A responsive Next.js recreation of the Accredian Enterprise landing page, built from the public reference at https://enterprise.accredian.com/.

## Setup

1. Install Node.js 18.17 or newer.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run build` to create a production build. The app is ready to deploy by importing this folder in Vercel.

## Approach

- Used Next.js App Router with one composed landing page and small reusable components for buttons, section titles, header and lead form.
- Matched the reference information architecture: hero, stats, partners, Accredian Edge, domains, segments, audience, CAT framework, delivery process, FAQs, testimonials, call-to-action and footer.
- Used responsive CSS breakpoints for tablet and mobile layouts.
- Reused publicly served Accredian image assets for visual fidelity.
- Added a client-side modal lead form that validates required fields and posts to `POST /api/leads`. The route keeps submissions in a runtime in-memory mock store, and `GET /api/leads` returns them for local testing.

## AI usage

AI assisted with the component structure, responsive styles, content composition and API route. The reference website was inspected to identify its publicly visible layout, section names and asset URLs. The implementation was then authored and reviewed locally.

## With more time

- Persist leads in a managed database (for example Vercel Postgres) and add spam protection.
- Add automated unit, accessibility and end-to-end tests.
- Implement carousel interactions and animation details from the source site.
- Further refine pixel-level spacing and interaction states across device sizes.
