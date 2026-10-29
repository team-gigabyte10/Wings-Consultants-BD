# Redesign Plan: Enterprise Portfolio Website

Goal: change the 2 single-page sites (Pure Enterprise Limited and Wings Consultants BD)
into one standard enterprise portfolio website with real routes, a shared design system
and static deployment.

## Decisions

| Topic | Decision |
|---|---|
| Language | Keep as it is. Pure Enterprise pages are Bengali. Wings pages are English. |
| Backend | None. The site is fully static. |
| Forms | Validate in the browser, then open a filled-in WhatsApp message (main) or email (secondary). No data is stored. |
| Wings site | Stays in this app under `/wings/*`. It keeps its own theme. |
| Content | Typed data files in `src/data/`. No `localStorage` CMS and no admin dashboard. |
| Images | Placeholder images in `public/images/`. Replace them with real photos later. |
| Router | `react-router` with browser history and an SPA fallback on the host. |

## Sitemap

### Pure Enterprise Limited (Bengali)

| Route | Content |
|---|---|
| `/` | Hero, key numbers, short about, featured brands, sister concern, CTA |
| `/about` | History, mission and vision, Board of Directors, compliance and licenses |
| `/products` | Brand and product portfolio with a category filter |
| `/products/:slug` | Product detail (replaces the product modal) |
| `/dealership` | Dealer network, coverage and the application form |
| `/faq` | Questions and answers |
| `/contact` | Offices, map and the inquiry form |

### Wings Consultants BD (English)

| Route | Content |
|---|---|
| `/wings` | Hero, numbers, featured services, industries, testimonials, CTA |
| `/wings/about` | About, why choose us, consulting process |
| `/wings/services` | All services |
| `/wings/services/:id` | Service detail (replaces the service modal) |
| `/wings/industries` | Industries |
| `/wings/case-studies` | Projects portfolio and case studies |
| `/wings/insights` | Resources and guides |
| `/wings/faq` | Questions and answers |
| `/wings/contact` | Offices and the consultation form |

A `*` route shows a 404 page.

## Phases

### Phase 1: Clean up
1. Delete the 13 unused files in `src/components/` (11 old copies of `src/wings/` files,
   `AdminDashboardModal`, `SisterConcernModal`).
2. Remove the unused dependencies: `@google/genai`, `express`, `dotenv`, `@types/express`.
3. Make sure `npm run lint` and `npm run build` pass.

### Phase 2: Design system
1. Put design tokens in `@theme` in `src/index.css`: colors, fonts, radius and shadow.
2. Make shared parts in `src/ui/`: `Container`, `Section`, `SectionHeader`, `Button`,
   `Card`, `PageHero`, `Breadcrumb`.
3. Give each company a theme through CSS variables. Both themes use the same parts.

### Phase 3: Routes and layout
1. Add `react-router`. Replace the hash view switch and `scrollToSection`.
2. Make a layout for each company: header, footer, floating WhatsApp button, scroll to top
   on route change.
3. Keep the header to about 6 items and 1 main CTA.

### Phase 4: Pages
1. Move each current section into the page that owns it (see the sitemap).
2. Change the product and service modals into detail pages.
3. Remove the CMS contexts. Read data straight from `src/data/`.

### Phase 5: Forms without a backend
1. Make one `buildWhatsAppLink` and one `buildMailtoLink` helper.
2. The dealer, contact and consultation forms validate the input, then open WhatsApp
   with the message already filled in. An email link is the second option.

### Phase 6: SEO, performance and accessibility
1. Set the title, description and `lang` for each route.
2. Correct the JSON-LD in `index.html` (`Organization` for Pure Enterprise).
3. Add `robots.txt` and `sitemap.xml`. Lazy-load the route pages.
4. Check color contrast, keyboard focus and `prefers-reduced-motion`.

### Phase 7: Verify and launch
1. Run Lighthouse (target: 90 or more in each category).
2. Test at 375 px, 768 px and 1440 px.
3. Deploy to a static host with an SPA fallback (Netlify, Vercel or Cloudflare Pages).
