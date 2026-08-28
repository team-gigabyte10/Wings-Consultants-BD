import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem-only' | 'banner';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  size = 'md',
  className = '',
  isLight = false
}) => {
  // Dimension mappings
  const emblemSizes = {
    sm: 36,
    md: 48,
    lg: 64,
    xl: 88
  };

  const currentSize = emblemSizes[size];

  const EmblemSVG = (
    <svg
      width={currentSize}
      height={currentSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Wings Consultants BD Emblem"
    >
      <defs>
        <linearGradient id="wingGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="wingGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        <linearGradient id="navyWGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* Outer Circular Ring (Top arc) */}
      <path
        d="M 28 85 A 76 76 0 0 1 172 85"
        stroke={isLight ? '#93c5fd' : '#1e3a8a'}
        strokeWidth="6.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom Circle Arch */}
      <path
        d="M 52 142 A 76 76 0 0 0 148 142"
        stroke={isLight ? '#64748b' : '#334155'}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left Wing - Top Feather */}
      <path
        d="M 90 75 C 65 60 30 40 24 35 C 22 45 35 65 52 78 C 65 88 85 92 90 92 Z"
        fill="url(#wingGradLeft)"
      />
      {/* Left Wing - Middle Feather */}
      <path
        d="M 85 92 C 60 82 32 68 28 62 C 26 72 38 88 56 98 C 68 105 82 106 85 106 Z"
        fill="url(#wingGradLeft)"
      />
      {/* Left Wing - Bottom Feather */}
      <path
        d="M 80 108 C 60 102 38 92 34 88 C 34 96 45 110 62 118 C 72 122 80 120 80 120 Z"
        fill="url(#wingGradLeft)"
      />

      {/* Right Wing - Top Feather */}
      <path
        d="M 110 75 C 135 60 170 40 176 35 C 178 45 165 65 148 78 C 135 88 115 92 110 92 Z"
        fill="url(#wingGradRight)"
      />
      {/* Right Wing - Middle Feather */}
      <path
        d="M 115 92 C 140 82 168 68 172 62 C 174 72 162 88 144 98 C 132 105 118 106 115 106 Z"
        fill="url(#wingGradRight)"
      />
      {/* Right Wing - Bottom Feather */}
      <path
        d="M 120 108 C 140 102 162 92 166 88 C 166 96 155 110 138 118 C 128 122 120 120 120 120 Z"
        fill="url(#wingGradRight)"
      />

      {/* Stylized Center 'W' Shape - Deep Navy Left Stem */}
      <polygon
        points="60,68 76,68 93,128 80,128"
        fill={isLight ? '#38bdf8' : '#0f2c59'}
      />
      {/* Stylized Center 'W' Shape - Deep Navy Right Stem */}
      <polygon
        points="140,68 124,68 107,128 120,128"
        fill={isLight ? '#38bdf8' : '#0f2c59'}
      />
      {/* Stylized Center 'W' Shape - Inner V Left */}
      <polygon
        points="80,128 93,128 100,82 91,82"
        fill={isLight ? '#0284c7' : '#0284c7'}
      />
      {/* Stylized Center 'W' Shape - Inner V Right */}
      <polygon
        points="120,128 107,128 100,82 109,82"
        fill={isLight ? '#0369a1' : '#0369a1'}
      />
      {/* Central Silver Wedge */}
      <polygon
        points="85,68 115,68 100,98"
        fill={isLight ? '#cbd5e1' : '#94a3b8'}
      />
    </svg>
  );

  if (variant === 'emblem-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {EmblemSVG}
      </div>
    );
  }

  if (variant === 'stacked' || variant === 'banner') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {EmblemSVG}
        <div className="mt-2">
          <h1
            className={`font-serif tracking-wider font-extrabold uppercase ${
              size === 'xl' ? 'text-2xl sm:text-3xl' : size === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg'
            } ${isLight ? 'text-white' : 'text-[#0f2c59]'}`}
          >
            WINGS CONSULTANTS BD
          </h1>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className={`h-px w-6 sm:w-10 ${isLight ? 'bg-amber-400/60' : 'bg-[#0f2c59]'}`} />
            <p
              className={`text-[10px] sm:text-xs tracking-widest font-semibold uppercase ${
                isLight ? 'text-amber-300' : 'text-[#0f2c59]'
              }`}
            >
              (A PROFESSIONAL CONSULTANCY FIRM)
            </p>
            <span className={`h-px w-6 sm:w-10 ${isLight ? 'bg-amber-400/60' : 'bg-[#0f2c59]'}`} />
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal
  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {EmblemSVG}
      <div className="flex flex-col">
        <span
          className={`font-serif font-extrabold tracking-wide uppercase leading-tight ${
            size === 'sm'
              ? 'text-sm sm:text-base'
              : size === 'lg'
              ? 'text-lg sm:text-xl'
              : size === 'xl'
              ? 'text-xl sm:text-2xl'
              : 'text-base sm:text-lg'
          } ${isLight ? 'text-white' : 'text-[#0f2c59]'}`}
        >
          WINGS CONSULTANTS BD
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`h-px w-3 ${isLight ? 'bg-amber-400/50' : 'bg-slate-400'}`} />
          <span
            className={`text-[9px] sm:text-[10.5px] font-semibold tracking-wider uppercase whitespace-nowrap ${
              isLight ? 'text-amber-300' : 'text-slate-600'
            }`}
          >
            (A PROFESSIONAL CONSULTANCY FIRM)
          </span>
          <span className={`h-px w-3 ${isLight ? 'bg-amber-400/50' : 'bg-slate-400'}`} />
        </div>
      </div>
    </div>
  );
};
