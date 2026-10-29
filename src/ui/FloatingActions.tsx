import React, { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../lib/inquiry';

interface FloatingActionsProps {
  whatsapp: string;
  whatsappLabel: string;
  topLabel: string;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ whatsapp, whatsappLabel, topLabel }) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-11 h-11 rounded-full bg-brand text-white flex items-center justify-center shadow-lg hover:bg-brand-dark transition-colors cursor-pointer"
          aria-label={topLabel}
          title={topLabel}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      <a
        href={buildWhatsAppLink(whatsapp)}
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all group relative"
        aria-label={whatsappLabel}
        title={whatsappLabel}
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-15 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap hidden group-hover:block">
          {whatsappLabel}
        </span>
      </a>
    </div>
  );
};
