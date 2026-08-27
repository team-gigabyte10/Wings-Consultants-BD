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
  const emblemSizes = {
    sm: 36,
    md: 46,
    lg: 60,
    xl: 84
  };

  const currentSize = emblemSizes[size];

  // Authentic Wings Consultants Emblem SVG
  const EmblemSVG = (
    <svg
      width={currentSize}
      height={currentSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      aria-label="Wings Consultants Emblem"
    >
      <defs>
        {/* Outer Circular Gradient */}
        <linearGradient id="ringOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea580c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        
        {/* Wing Feather Metallic Gradients */}
        <linearGradient id="wingSilverLeft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="wingSilverRight" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
      </defs>

      {/* Outer Metallic Ring Frame */}
      <circle cx="100" cy="100" r="92" stroke="url(#ringOrangeGrad)" strokeWidth="7" fill={isLight ? '#0f172a' : '#ffffff'} />
      <circle cx="100" cy="100" r="84" stroke={isLight ? '#334155' : '#e2e8f0'} strokeWidth="2.5" fill="none" />

      {/* Soaring Left Wing Feathers */}
      <path
        d="M 94 65 C 72 44 42 36 34 32 C 32 46 44 68 62 82 C 76 92 90 95 94 95 Z"
        fill="url(#wingSilverLeft)"
      />
      <path
        d="M 90 85 C 68 70 44 60 38 56 C 36 68 50 88 68 100 C 80 108 88 109 90 109 Z"
        fill="url(#wingSilverLeft)"
      />
      <path
        d="M 86 102 C 66 94 48 86 44 82 C 43 93 54 110 72 120 C 82 124 86 122 86 122 Z"
        fill="url(#wingSilverLeft)"
      />
      <path
        d="M 82 118 C 66 112 54 106 50 104 C 50 114 62 128 78 134 C 84 136 86 133 86 133 Z"
        fill="#ea580c"
      />

      {/* Soaring Right Wing Feathers */}
      <path
        d="M 106 65 C 128 44 158 36 166 32 C 168 46 156 68 138 82 C 124 92 110 95 106 95 Z"
        fill="url(#wingSilverRight)"
      />
      <path
        d="M 110 85 C 132 70 156 60 162 56 C 164 68 150 88 132 100 C 120 108 112 109 110 109 Z"
        fill="url(#wingSilverRight)"
      />
      <path
        d="M 114 102 C 134 94 152 86 156 82 C 157 93 146 110 128 120 C 118 124 114 122 114 122 Z"
        fill="url(#wingSilverRight)"
      />
      <path
        d="M 118 118 C 134 112 146 106 150 104 C 150 114 138 128 122 134 C 116 136 114 133 114 133 Z"
        fill="#ea580c"
      />

      {/* Central Core Shield & Crown Wedge */}
      <polygon points="100,56 108,76 100,88 92,76" fill="#ea580c" />
      <polygon points="100,90 106,128 100,146 94,128" fill={isLight ? '#38bdf8' : '#0f2c59'} />
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
        <div className="mt-2.5">
          <h1
            className={`font-serif tracking-tight font-extrabold uppercase ${
              size === 'xl' ? 'text-2xl sm:text-3xl' : size === 'lg' ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            } ${isLight ? 'text-white' : 'text-slate-900'}`}
          >
            Wings Consultants
          </h1>
          <p className="text-xs sm:text-sm font-medium text-amber-600 dark:text-amber-400 mt-0.5 italic">
            For Training and Development
          </p>
          <p
            className={`text-[10px] sm:text-xs tracking-wider uppercase font-semibold mt-1 ${
              isLight ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            "Sky is not the Limit- It's an Opportunity"
          </p>
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
          className={`font-serif font-extrabold tracking-tight leading-tight ${
            size === 'sm'
              ? 'text-sm sm:text-base'
              : size === 'lg'
              ? 'text-lg sm:text-xl'
              : size === 'xl'
              ? 'text-xl sm:text-2xl'
              : 'text-base sm:text-lg'
          } ${isLight ? 'text-white' : 'text-slate-900'}`}
        >
          Wings Consultants
        </span>
        <span className="text-[11px] sm:text-xs font-semibold text-amber-600 dark:text-amber-400 -mt-0.5">
          For Training and Development
        </span>
        <span
          className={`text-[9.5px] sm:text-[10.5px] italic font-medium truncate ${
            isLight ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Sky is not the Limit- It's an Opportunity
        </span>
      </div>
    </div>
  );
};
