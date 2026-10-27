import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem-only';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  isLight = false
}) => {
  const iconDimensions = {
    sm: 36,
    md: 46,
    lg: 58
  };

  const dim = iconDimensions[size];

  // Pure Enterprise Emblem: Pure crystal drop / salt prism & ocean wave + leaf of sustainability
  const EmblemSVG = (
    <div className="relative flex items-center justify-center shrink-0">
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-105"
        aria-label="Pure Enterprise Limited Emblem"
      >
        <defs>
          <linearGradient id="oceanBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0f2b5c" />
          </linearGradient>
          <linearGradient id="pureAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="saltWhiteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>

        {/* Outer Circular Shield */}
        <circle cx="50" cy="50" r="46" fill="url(#oceanBlueGrad)" stroke={isLight ? '#38bdf8' : '#cbd5e1'} strokeWidth="2.5" />

        {/* Pure Salt Crystal Diamond in the center */}
        <polygon points="50,16 78,50 50,84 22,50" fill="url(#saltWhiteGrad)" opacity="0.95" />
        
        {/* Inner Facet Lines for Crystal */}
        <line x1="50" y1="16" x2="50" y2="84" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="22" y1="50" x2="78" y2="50" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Vitality Leaf & Golden Wave for Nutrition & Sustainable Agriculture */}
        <path
          d="M 32 60 C 42 74 65 72 74 58 C 72 68 55 78 40 76 Z"
          fill="url(#pureAmberGrad)"
        />

        {/* Pure Sparkle in Center */}
        <circle cx="50" cy="50" r="4.5" fill="#f59e0b" />
        <circle cx="50" cy="50" r="2.2" fill="#ffffff" />
      </svg>
    </div>
  );

  if (variant === 'emblem-only') {
    return <div className={`inline-flex items-center ${className}`}>{EmblemSVG}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {EmblemSVG}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span
            className={`font-bold tracking-tight text-lg sm:text-xl leading-none font-brand-logo ${
              isLight ? 'text-white' : 'text-[#0f2c59]'
            }`}
          >
            পিওর এন্টারপ্রাইজ লিমিটেড
          </span>
        </div>
        <span
          className={`text-[11px] font-medium tracking-wide mt-1 ${
            isLight ? 'text-sky-200' : 'text-slate-600'
          }`}
        >
          PURE ENTERPRISE LIMITED • <span className="text-amber-500 font-semibold">সহযোগী: Wings Consultants BD</span>
        </span>
      </div>
    </div>
  );
};
