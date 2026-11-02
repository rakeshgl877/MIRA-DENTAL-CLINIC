import React from 'react';

interface ClinicLogoProps {
  light?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ClinicLogo: React.FC<ClinicLogoProps> = ({ light = false, size = 'md' }) => {
  const iconSize = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Luxury Crest Icon */}
      <div 
        className={`relative flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${
          light ? 'bg-gold/20 text-gold-200 border border-gold/30' : 'bg-forest text-gold border border-gold/30'
        }`}
        style={{ width: iconSize, height: iconSize }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/5 h-3/5"
        >
          {/* Subtle dental tooth & crown architectural geometry */}
          <path
            d="M20 7C14.5 7 10 11.5 10 17C10 23 13.5 28 17 31C18 31.8 19 32.5 20 32.5C21 32.5 22 31.8 23 31C26.5 28 30 23 30 17C30 11.5 25.5 7 20 7Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central luxury emblem sparkle */}
          <path
            d="M20 12V22M15 17H25"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="20" cy="17" r="1.8" fill={light ? '#F7F4EC' : '#C6A875'} />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-serif tracking-wider font-semibold uppercase leading-none ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
            } ${light ? 'text-ivory' : 'text-forest'}`}
          >
            MIRA
          </span>
          <span className="text-[10px] tracking-widest uppercase font-semibold text-gold px-1.5 py-0.5 rounded bg-gold/10 border border-gold/20">
            DENTAL
          </span>
        </div>
        <span
          className={`tracking-[0.2em] uppercase font-medium text-[9px] mt-0.5 ${
            light ? 'text-ivory/70' : 'text-charcoal/70'
          }`}
        >
          Care & Implant Centre
        </span>
      </div>
    </div>
  );
};
