import React from 'react';
import CertificateCarousel from '@/components/CertificateCarousel';

const EducationSection = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Образование и квалификация
        </h3>
        <p className="text-lg text-gray-600">
          Документы об образовании, сертификаты и профессиональные достижения
        </p>
      </div>
      
      <CertificateCarousel />
      
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
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
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-[#1E3A8A] rounded-full flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{cert}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://disk.yandex.ru/d/1nkbIutLpX17Vw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#1E3A8A] text-white rounded-lg hover:bg-[#1E40AF] transition-colors font-medium"
          >
            📜 Сертификаты Open University
          </a>
          <a 
            href="https://disk.yandex.ru/d/_CbV983nnZMatQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            🎓 Все курсы и сертификаты
          </a>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;