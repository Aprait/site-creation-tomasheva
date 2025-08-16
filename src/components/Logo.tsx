import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center group cursor-pointer relative">
      {/* Фоновая подсветка */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Логотип с анимациями */}
      <div className="relative">
        <img 
          src="https://cdn.poehali.dev/files/15bb5918-f96b-4585-8e38-7b13aa8ec889.png"
          alt="Наталья Томашева"
          className="h-16 w-auto transition-all duration-500 ease-out
                     group-hover:scale-110 
                     group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]
                     group-hover:brightness-110"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
          }}
        />
        
        {/* Анимированные элементы */}
        <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Верхний левый угол */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 rounded-tl-lg transform -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
          
          {/* Нижний правый угол */}
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-orange-500 rounded-br-lg transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"></div>
        </div>
      </div>
      
      {/* Анимированная линия под логотипом */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default Logo;