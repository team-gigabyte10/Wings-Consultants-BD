import React from 'react';
import { Link } from 'react-router';
import { usePageMeta } from '../lib/usePageMeta';

export default function NotFoundPage() {
  usePageMeta({ title: 'Page not found | Pure Enterprise Limited', lang: 'en', noindex: true });

  return (
    <div data-site="pure" className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-7xl font-bold text-brand">404</div>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-600">পৃষ্ঠাটি খুঁজে পাওয়া যায়নি। The page you are looking for does not exist or has moved.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="px-5 py-2.5 rounded-lg bg-brand text-white font-bold hover:bg-brand-dark">
            Pure Enterprise Ltd.
          </Link>
          <Link to="/wings" className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-800 font-bold hover:bg-white">
            Wings Consultants BD
          </Link>
        </div>
      </div>
    </div>
  );
}
