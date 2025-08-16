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
        {/* Logo Icon */}
        <div className="relative">
          <img 
            src="/img/4335c4bc-d9d5-4ee6-a3b3-47a16e54cbc7.jpg"
            alt="FOXMetoD"
            className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300"
          />
        </div>
        
        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-bold text-gray-900 leading-none">
            FOXMetoD
          </span>
          <span className="text-xs md:text-sm text-gray-600 leading-none">
            Консалтинговое агентство
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logo;