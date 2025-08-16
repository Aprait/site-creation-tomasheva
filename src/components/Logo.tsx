import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative group cursor-pointer">
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 1000 1000" 
          className="transform transition-all duration-300 group-hover:scale-110"
        >
          <rect x="0" y="0" width="1000" height="1000" fill="white" />
          
          <rect x="130" y="358" width="154" height="500" fill="#1e3a8a" />
          
          <rect x="330" y="142" width="370" height="154" fill="#1e3a8a" />
          
          <rect x="546" y="142" width="154" height="716" fill="#ff6600" />
          
          <g transform="translate(130, 358)">
            <rect 
              x="0" 
              y="0" 
              width="154" 
              height="500" 
              fill="#1e3a8a"
              className="transition-all duration-300 group-hover:fill-[var(--brand-blue)]"
            />
          </g>
          
          <g transform="translate(330, 142)">
            <rect 
              x="0" 
              y="0" 
              width="370" 
              height="154" 
              fill="#1e3a8a"
              className="transition-all duration-300 group-hover:fill-[var(--brand-blue)]"
            />
          </g>
          
          <g transform="translate(546, 142)">
            <rect 
              x="0" 
              y="0" 
              width="154" 
              height="716" 
              fill="#ff6600"
              className="transition-all duration-300 group-hover:fill-orange-500"
            />
          </g>
        </svg>
      </div>
      <div className="hidden sm:block">
        <div className="text-2xl font-bold text-[#1e3a8a] font-heading">Наталья</div>
        <div className="text-2xl font-bold text-[#1e3a8a] font-heading -mt-1">Томашева</div>
      </div>
    </div>
  );
};

export default Logo;