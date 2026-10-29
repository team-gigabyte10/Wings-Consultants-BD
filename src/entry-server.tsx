import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router';
import App from './App';
import { takeServerHead } from './lib/usePageMeta';
import { initialProducts } from './data/initialData';
import { initialServices, initialExperts } from './data/wingsInitialData';

export { SITE_URL } from './lib/site';

/** Every public URL. The prerender script writes 1 HTML file for each, and lists them in the sitemap. */
export const routes = [
  '/',
  '/about',
  '/products',
  ...initialProducts.map((p) => `/products/${p.slug}`),
  '/dealership',
  '/faq',
  '/contact',
  '/wings',
  '/wings/about',
  ...initialExperts.map((e) => `/wings/experts/${e.slug}`),
  '/wings/services',
  ...initialServices.map((s) => `/wings/services/${s.slug}`),
  '/wings/industries',
  '/wings/case-studies',
  '/wings/insights',
  '/wings/faq',
  '/wings/contact'
];

/** Renders 1 URL to HTML. Waits until all lazy pages are loaded. */
export async function render(url: string) {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return { html, head: takeServerHead() };
}
