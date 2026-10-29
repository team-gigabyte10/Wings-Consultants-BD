# Plan: Show https://pureenterprise.netlify.app on the first page of Google

Audit date: 2026-10-29. Method: `curl` (the raw HTML that Google gets first) and headless
Edge (the page after JavaScript runs, which Google sees later).

## Status

| Phase | Status |
|---|---|
| 1. Code fixes | Done on 2026-10-29. `npm run build` now prerenders 24 routes and `404.html`, and writes `sitemap.xml`, `robots.txt` and `_redirects`. The new logo is in `public/images/brand/`. |
| 2. Search Console | Open (owner) |
| 3. Google Business Profile | Open (owner) |
| 4. Links from other sites | Open (owner). Pure Facebook page: https://www.facebook.com/PureEnterpriseLimited. The Wings social links are not confirmed, so they are not in the JSON-LD. |
| 5. Content | Open |

Notes:
- `vite preview` sends the home page HTML for URLs with no trailing slash. To check a
  prerendered page locally, open it with a trailing slash, for example `/wings/about/`.
  Netlify uses the generated `_redirects`, so this problem does not occur there.
- The logo source image is only 309 px wide. Ask for an SVG or a large PNG for a sharper logo.

## Target searches

| Company | Search terms | How hard |
|---|---|---|
| Pure Enterprise Limited | "Pure Enterprise Limited", "Pure Enterprise Cox's Bazar", "পিওর এন্টারপ্রাইজ" | Easy to medium |
| Pure Enterprise Limited | "Pure Enterprise" alone | Hard: many companies in many countries use this name |
| Wings Consultants BD | "Wings Consultants BD", "Wings Consultants Dhaka" | Easy to medium |

Nobody can guarantee a Google position. The full brand names are realistic for page 1.

## Audit results

### What is good

| Check | Result |
|---|---|
| HTTPS and HSTS | Yes |
| All routes load (SPA fallback) | Yes, `_redirects` works |
| Title and description change on each page after JavaScript runs | Yes |
| `lang` is `bn` on Pure pages and `en` on Wings pages | Yes |
| Pure home page H1 has the company name (Bengali) | Yes |
| Images have `alt` text | Yes |
| `robots.txt` allows all crawlers | Yes |

### Problems (highest impact first)

| # | Problem | Evidence | Effect |
|---|---|---|---|
| 1 | **Wrong domain in all SEO files** | `sitemap.xml`, `robots.txt`, JSON-LD and the expert page use `https://www.pureenterpriseltd.com` | Google gets a sitemap for a different site. The JSON-LD tells Google that the company website is another domain. |
| 2 | **Empty raw HTML** | Every URL sends the same 4,103-byte file with `<div id="root"></div>` and the same Bengali home title | Google must render JavaScript to see each page. Indexing is slower, and the first crawl sees all pages as duplicates. |
| 3 | **No canonical URL** | No `<link rel="canonical">` on any page | Google must guess the main URL of each page. |
| 4 | **Soft 404** | `/no-such-page` returns status 200 | Google can index empty or wrong pages. |
| 5 | **Wings H1 has no brand name** | `/wings` H1 is "YOUR SUCCESS, OUR COMMITMENT" | The strongest heading does not say "Wings Consultants BD". |
| 6 | **English brand name is weak on the Pure home page** | The H1 and title start in Bengali. "Pure Enterprise" appears only 4 times in 1,163 words. "Cox's Bazar" appears 0 times. | English searches match less well. |
| 7 | **`netlify.toml` is not active** | No security headers. `/assets/*.js` (390 kB) has `max-age=0`. | The site was uploaded as `dist/` by drag and drop, so Netlify ignores `netlify.toml`. Slower repeat visits, and a lower page-speed score. |
| 8 | **Relative `og:image`** | `content="/pure-enterprise-uploaded.png"` (207 kB) | Facebook, LinkedIn and WhatsApp previews can show no image. |
| 9 | **Wings home uses 3 Unsplash images** | 3 of 4 images come from `images.unsplash.com` | Slower load from a third-party server. Stock photos give no brand value. |
| 10 | **1 JSON-LD for both companies** | Wings is only a `subOrganization` in the Pure Enterprise JSON-LD | Google gets no separate company data for Wings. |
| 11 | **Unverified social links in JSON-LD** | `facebook.com/pureenterpriselimited`, `linkedin.com/company/pure-enterprise-limited` | If these pages do not exist, the `sameAs` signal is wrong. |
| 12 | **Probably not in Search Console** | No verification tag in the HTML | Google may not know the site, and no sitemap was sent. |

## Phase 1: Code fixes (I do this, about 1 day)

1. **Domain.** Add `src/lib/site.ts` with `SITE_URL = 'https://pureenterprise.netlify.app'`.
   Use it in the sitemap, `robots.txt`, JSON-LD, `og:url`, `og:image` and the expert page.
2. **Canonical.** `usePageMeta` adds `<link rel="canonical">` and `og:url` on each page.
3. **Prerender.** After `vite build`, a script opens each route and saves the rendered
   HTML as `dist/<route>/index.html`. Each file has its own title, description, canonical,
   JSON-LD and page text. Visitors still get the same React app.
4. **Sitemap.** The build generates `sitemap.xml` from the route list and the data files,
   with a `lastmod` date. New products, services and experts are added automatically.
5. **404.** Add `dist/404.html` and change `_redirects`, so unknown URLs return status 404.
6. **Headings and titles:**
   - Pure home title: "Pure Enterprise Limited | পিওর এন্টারপ্রাইজ লিমিটেড – Cox's Bazar, Bangladesh".
   - Pure home H1: add the English name next to the Bengali name.
   - Wings home H1: "Wings Consultants BD". Keep "Your Success, Our Commitment" as the subtitle.
   - Add "Cox's Bazar, Bangladesh" to the Pure home text and the footer address.
7. **Structured data.** Make a separate `Organization` JSON-LD for Wings on the `/wings`
   pages. Add `WebSite` JSON-LD on `/`. Add `Product` JSON-LD on each product page, and
   `BreadcrumbList` on inner pages.
8. **Headers that work with drag and drop.** Move the cache and security headers from
   `netlify.toml` to `public/_headers`. Netlify reads this file from `dist/`.
9. **Images.** Make the `og:image` a 1200 x 630 px JPEG under 150 kB, with an absolute
   URL. Replace the 3 Unsplash images with local WebP files.
10. **Check.** Run Lighthouse on `/` and `/wings`. Target: 90 or more for SEO and
    Performance.

You then upload the new `dist/` again, or connect the GitHub repo to Netlify (recommended:
it publishes each push automatically and uses `netlify.toml`).

## Phase 2: Google Search Console (you, about 30 minutes)

1. Search Google for `site:pureenterprise.netlify.app`. Write down how many pages show.
2. Open https://search.google.com/search-console. Add a **URL prefix** property:
   `https://pureenterprise.netlify.app/`.
3. Select the **HTML tag** method. Send me the tag. I add it to `index.html`, and you upload
   the site again. Then select **Verify**.
4. In **Sitemaps**, send `sitemap.xml`.
5. In **URL inspection**, select **Request indexing** for `/`, `/wings`, `/products` and
   `/wings/services`.
6. Add the site to Bing Webmaster Tools with **Import from Google Search Console**.

## Phase 3: Google Business Profile (you; the strongest step for brand searches)

1. Make 1 profile for **Pure Enterprise Limited**: Cox's Bazar, category "Salt manufacturer".
2. Make 1 profile for **Wings Consultants BD**: Dhaka, category "Business management consultant".
3. Website link: `https://pureenterprise.netlify.app/` for Pure, and `.../wings` for Wings.
4. Use the same name, address and phone number as on the site.
5. Add a logo, photos and business hours. Ask clients for reviews.

## Phase 4: Links from other sites (you)

1. Put the website link on the Facebook page and LinkedIn page of each company. Send me
   the real page URLs, and I correct the `sameAs` links.
2. List both companies in Bangladesh business directories, for example bdtradeinfo and
   Bangladesh Yellow Pages, and in relevant trade bodies.
3. Ask dealers, partners and clients to link to the site.

## Phase 5: Content (ongoing)

1. Publish 1 or 2 articles each month on `/wings/insights`. Each article gets its own URL.
2. Add product news and dealer news for Pure Enterprise.

## Later: custom domain (optional)

A domain such as `pureenterpriseltd.com` gives a stronger brand signal than a Netlify
subdomain. If you buy one later, connect it in Netlify. Netlify sends a 301 redirect from
the old address, and Search Console **Change of address** moves the rankings.

## Timeline

| When | Expected result |
|---|---|
| Week 1 | Phase 1 is live. Search Console is verified, and the sitemap is sent. |
| Week 1–2 | Google indexes the main pages. |
| Week 2–6 | "Pure Enterprise Limited" and "Wings Consultants BD" reach page 1. |
| Month 2–6 | Wider searches improve, mainly from Business Profile reviews and links. |

## Measure

1. Each week, check the **Performance** report in Search Console: queries, clicks and position.
2. Check the **Pages** report for pages that are not indexed, and fix the cause.
