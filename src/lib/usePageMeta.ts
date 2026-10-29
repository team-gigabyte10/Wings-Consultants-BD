import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { absoluteUrl, DEFAULT_OG_IMAGE } from './site';

interface PageMeta {
  title: string;
  description?: string;
  lang: 'bn' | 'en';
  image?: string;
  /** Set on the 404 page, so it has no canonical URL. */
  noindex?: boolean;
}

export interface HeadData {
  title: string;
  description?: string;
  lang: 'bn' | 'en';
  canonical?: string;
  image: string;
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

export const usePageMeta = ({ title, description, lang, image, noindex }: PageMeta) => {
  const { pathname } = useLocation();
  const canonical = noindex ? undefined : absoluteUrl(pathname);
  const ogImage = absoluteUrl(image ?? DEFAULT_OG_IMAGE);

  if (typeof window === 'undefined') {
    serverHead = { title, description, lang, canonical, image: ogImage };
  }

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    setAttr('meta[property="og:title"]', 'content', title);
    setAttr('meta[property="og:image"]', 'content', ogImage);
    if (description) {
      setAttr('meta[name="description"]', 'content', description);
      setAttr('meta[property="og:description"]', 'content', description);
    }
    if (canonical) {
      setAttr('link[rel="canonical"]', 'href', canonical);
      setAttr('meta[property="og:url"]', 'content', canonical);
    }
  }, [title, description, lang, canonical, ogImage]);
};
