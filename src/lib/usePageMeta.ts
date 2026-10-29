import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description?: string;
  lang: 'bn' | 'en';
}

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
};

export const usePageMeta = ({ title, description, lang }: PageMeta) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;
    setMeta('meta[property="og:title"]', 'content', title);
    if (description) {
      setMeta('meta[name="description"]', 'content', description);
      setMeta('meta[property="og:description"]', 'content', description);
    }
  }, [title, description, lang]);
};
