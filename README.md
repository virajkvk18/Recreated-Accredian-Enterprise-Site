# Accredian Enterprise Website Recreation

A responsive, production-deployed recreation of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built with Next.js and React.

## Live Demo

**[View the live website →](https://accredian-alpha-five.vercel.app)**

## Highlights

- Complete enterprise landing page covering every major reference section
- Responsive experience for desktop, tablet, and mobile devices
- Sticky navigation with smooth section scrolling and a mobile menu
- Interactive FAQ accordion and polished hover/transition states
- Lead-capture modal with client-side validation
- Next.js API route for receiving and validating lead submissions
- Production deployment through Vercel

## Sections Included

- Hero and primary call-to-action
- Achievement statistics and client partnerships
- Accredian Edge and CAT Framework visuals
- Domain expertise and tailored course segmentation
- Audience / learner profile section
- Three-step delivery process
- FAQs, partner testimonials, closing CTA, and footer

## Technology Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI | React 19 functional components and hooks |
| Styling | Custom responsive CSS |
| API | Next.js Route Handlers |
| Deployment | Vercel |

## Project Structure

```text
app/
├── api/leads/route.js    # Lead capture API endpoint
├── globals.css           # Responsive global styles
├── layout.jsx            # App metadata and root layout
└── page.jsx              # Landing page and reusable UI components
```

## Run Locally

### Prerequisites

- Node.js 20.9 or newer
- npm

### Setup

```bash
git clone https://github.com/virajkvk18/Recreated-Accredian-Enterprise-Site.git
cd Recreated-Accredian-Enterprise-Site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Lead Capture API

The enquiry form submits data to `POST /api/leads`.

Required fields:

- Full name
- Work email
- Company name

For this assignment, leads are stored in a temporary in-memory collection. `GET /api/leads` is also available for local API verification. A production implementation should replace this with a secure persistent database.

## Approach

The page is composed from small reusable React components, including the header, buttons, section titles, and lead form. Content-heavy areas such as domain cards, course segments, FAQs, learner groups, and testimonials are data-driven to keep the UI consistent and easy to maintain.

The visual system uses a blue-and-white enterprise theme, responsive CSS grids, breakpoint-specific layouts, semantic HTML, and smooth in-page navigation. Publicly available image assets from the reference were used to achieve closer visual fidelity.

## AI Usage

AI assisted with the initial component planning, responsive styling direction, content organization, and debugging workflow. The final implementation was manually reviewed, refined, tested across desktop and mobile layouts, built for production, and deployed through Vercel.

## Future Improvements

- Persist submitted leads in a managed database such as Vercel Postgres
- Add CAPTCHA / rate limiting for form protection
- Add automated accessibility, unit, and end-to-end tests
- Add more nuanced page animations and carousel behaviour
- Further optimize images and refine pixel-level visual matching

## Author

Built by [Viraj Kumar Vishwakarma](https://github.com/virajkvk18)
