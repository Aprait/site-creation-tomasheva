import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center group cursor-pointer">
      <img 
        src="https://cdn.poehali.dev/files/29b2cae9-6659-4904-8697-0ff18b3946d5.png"
        alt="Наталья Томашева"
        className="h-16 w-auto transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
      />
    </div>
  );
};

export default Logo;