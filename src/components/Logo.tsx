import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** For dark backgrounds: shows the logo on a white tile. */
  isLight?: boolean;
}

const heights = { sm: 'h-9', md: 'h-11', lg: 'h-12' };

export const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', isLight = false }) => (
  <span className={`inline-flex items-center select-none ${isLight ? 'bg-white rounded-xl px-3 py-2' : ''} ${className}`}>
    <img
      src="/images/brand/pure-enterprise-logo.webp"
      alt="Pure Enterprise Limited"
      width={286}
      height={90}
      className={`${heights[size]} w-auto`}
    />
  </span>
);
