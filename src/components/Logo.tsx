import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="https://cdn.poehali.dev/files/e08d2af8-2c4e-435a-b415-8afd0f1bbec6.png"
        alt="Наталья Томашева"
        className="h-20 md:h-24 lg:h-28 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;