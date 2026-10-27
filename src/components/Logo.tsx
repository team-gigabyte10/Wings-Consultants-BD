import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem-only' | 'pure-brand';
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
  // Dimensions for the emblem
  const emblemSizes = {
    sm: 34,
    md: 46,
    lg: 58,
    xl: 72
  };

  const dim = emblemSizes[size];

  // 5-Color Pinwheel Swirl Emblem matching Pure Enterprise official logo:
  // Colors clockwise: Red, Blue, Cyan, Green, Orange
  const colors = [
    '#E62129', // Red (Top)
    '#0072BC', // Blue (Right)
    '#00AEEF', // Cyan (Bottom-Right)
    '#8DC63F', // Green (Bottom-Left)
    '#F26522'  // Orange (Top-Left)
  ];

  // Symmetrical blade curved path
  const bladePath = 'M 50,11 C 66,12 80,23 85,37 C 76,41 66,41 58,46 C 52,50 48,55 47,59 C 45,47 45,31 50,11 Z';

  const EmblemSVG = (
    <div className="relative flex items-center justify-center shrink-0">
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:rotate-12"
        aria-label="Pure Enterprise Emblem"
      >
        <g id="pure-swirl">
          {colors.map((col, idx) => (
            <path
              key={idx}
              d={bladePath}
              fill={col}
              transform={`rotate(${idx * 72} 50 50)`}
            />
          ))}
          {/* Center negative space circle */}
          <circle cx="50" cy="50" r="7.5" fill={isLight ? '#07172b' : '#ffffff'} />
        </g>
      </svg>
    </div>
  );

  if (variant === 'emblem-only') {
    return <div className={`inline-flex items-center ${className}`}>{EmblemSVG}</div>;
  }

  // The official "pure enterprise" typography
  const Wordmark = (
    <div className="flex flex-col justify-center leading-none">
      <div className="flex items-baseline">
        <span className="font-extrabold text-2xl sm:text-3xl tracking-tight text-[#009FE3] font-sans lowercase">
          pure
        </span>
      </div>
      <span
        className={`font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase ${
          isLight ? 'text-white' : 'text-slate-900'
        }`}
      >
        enterprise
      </span>
    </div>
  );

  if (variant === 'pure-brand') {
    return (
      <div className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
        {EmblemSVG}
        {Wordmark}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {EmblemSVG}
      
      <div className="flex flex-col justify-center">
        {/* Top: 'pure enterprise' wordmark + Bengali title */}
        <div className="flex items-center gap-2">
          {Wordmark}
          
          <div className="hidden sm:block h-7 w-[1.5px] bg-slate-300/60 mx-1" />

          <div className="hidden sm:flex flex-col">
            <span
              className={`font-bold text-sm sm:text-base leading-tight font-sans ${
                isLight ? 'text-white' : 'text-[#0b1e3b]'
              }`}
            >
              পিওর এন্টারপ্রাইজ লি:
            </span>
            <span className="text-[10px] text-amber-500 font-semibold leading-tight">
              সহযোগী: Wings Consultants BD
            </span>
          </div>
        </div>

        {/* Mobile subtitle */}
        <span className="sm:hidden text-[10px] text-amber-500 font-semibold mt-0.5">
          পিওর এন্টারপ্রাইজ লি: • Wings Consultants
        </span>
      </div>
    </div>
  );
};
