import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { absoluteUrl, DEFAULT_OG_IMAGE, WINGS_OG_IMAGE, WINGS_FAVICON } from './site';

interface PageMeta {
  title: string;
  description?: string;
  lang: 'bn' | 'en';
  image?: string;
  favicon?: string;
  /** Set on the 404 page, so it has no canonical URL. */
  noindex?: boolean;
}

export interface HeadData {
  title: string;
  description?: string;
  lang: 'bn' | 'en';
  canonical?: string;
  image: string;
  favicon?: string;
}

// The prerender script reads this after it renders a route on the server.
let serverHead: HeadData | null = null;
export const takeServerHead = () => {
  const head = serverHead;
  serverHead = null;
  return head;
};

const setAttr = (selector: string, attr: string, value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

export const usePageMeta = ({ title, description, lang, image, favicon, noindex }: PageMeta) => {
  const { pathname } = useLocation();
  const isWings = pathname.startsWith('/wings');
  const defaultImage = isWings ? WINGS_OG_IMAGE : DEFAULT_OG_IMAGE;
  const activeFavicon = favicon ?? (isWings ? WINGS_FAVICON : '/images/brand/icon-32.png');
  const canonical = noindex ? undefined : absoluteUrl(pathname);
  const ogImage = absoluteUrl(image ?? defaultImage);

  if (typeof window === 'undefined') {
    serverHead = { title, description, lang, canonical, image: ogImage, favicon: activeFavicon };
  }

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    setAttr('meta[property="og:title"]', 'content', title);
    setAttr('meta[property="og:image"]', 'content', ogImage);
    if (activeFavicon) {
      setAttr('link[rel="icon"][sizes="32x32"]', 'href', activeFavicon);
      setAttr('link[rel="icon"][sizes="192x192"]', 'href', activeFavicon);
      setAttr('link[rel="apple-touch-icon"]', 'href', activeFavicon);
    }
    if (description) {
      setAttr('meta[name="description"]', 'content', description);
      setAttr('meta[property="og:description"]', 'content', description);
    }
    if (canonical) {
      setAttr('link[rel="canonical"]', 'href', canonical);
      setAttr('meta[property="og:url"]', 'content', canonical);
    }
  }, [title, description, lang, canonical, ogImage, activeFavicon]);
};
