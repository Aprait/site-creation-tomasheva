import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-blue-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <span className="text-white font-bold text-xl font-heading">НТ</span>
        </div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      </div>
      <div className="hidden sm:block">
        <div className="text-gray-900 font-bold text-lg leading-tight font-heading">Наталья</div>
        <div className="text-brand-blue text-sm font-medium -mt-1">Томашёва</div>
      </div>
    </div>
  );
};

export default Logo;