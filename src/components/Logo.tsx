import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="https://cdn.poehali.dev/files/15bb5918-f96b-4585-8e38-7b13aa8ec889.png"
        alt="Наталья Томашева"
        className="h-20 md:h-24 lg:h-28 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;