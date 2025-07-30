import React from 'react';
import CertificateGrid from '@/components/CertificateGrid';

const EducationSection = () => {
  return (
    <div className="mt-16">
      <CertificateGrid />
      
      <div className="mt-16 pt-8 border-t border-gray-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center font-heading">
          Дополнительные курсы и сертификации
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            "Продуктовый трекинг, ФРИИ (2025)",
            "Аттестация трекеров (Грейд В+), Школа стартапов Skolkovo (2023)",
            "VC analyst course, I2BF Global Ventures (2023)",
            "Product-Manager, Skillsetter (2021)",
            "Развитие производственных предприятий (2024)",
            "Курсы повышения квалификации в области управления"
          ].map((cert, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-2 h-2 bg-brand-navy rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-700 font-body">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;