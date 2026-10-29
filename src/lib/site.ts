/** The public address of the site. Change it here when a custom domain is added. */
export const SITE_URL = 'https://pureenterprise.netlify.app';

export const DEFAULT_OG_IMAGE = '/images/brand/og-image.jpg';

/** `/` stays `/`. Other paths have no trailing slash. */
export const absoluteUrl = (path: string) => SITE_URL + (path === '/' ? '/' : path.replace(/\/+$/, ''));
