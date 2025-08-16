import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 shadow-sm">
        <img 
          src="https://cdn.poehali.dev/files/e08d2af8-2c4e-435a-b415-8afd0f1bbec6.png"
          alt="Наталья Томашева"
          className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;