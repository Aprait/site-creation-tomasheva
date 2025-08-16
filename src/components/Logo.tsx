import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="flex items-center cursor-pointer group"
      onClick={() => navigate('/')}
    >
      <div className="flex items-center gap-3">
        {/* Logo Icon with initials NT */}
        <div className="relative">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary rounded-lg flex items-center justify-center group-hover:shadow-md transition-all duration-300">
            <span className="text-white font-bold text-xl md:text-2xl font-heading">НТ</span>
          </div>
        </div>
        
        {/* Text */}
        <div className="flex flex-col">
          <span className="text-lg md:text-xl font-bold text-brand-secondary leading-none">
            Наталья
          </span>
          <span className="text-lg md:text-xl font-bold text-brand-secondary leading-none">
            Томашёва
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;