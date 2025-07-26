import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const EducationSection = () => {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Дипломы и сертификаты
        </h3>
        <p className="text-lg text-gray-600">
          Документы об образовании и профессиональной квалификации
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Russian Diploma */}
        <Card className="animate-fade-in hover:shadow-xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl text-[#1E3A8A] mb-2">
              Диплом МИМ ЛИНК
            </CardTitle>
            <CardDescription>
              Менеджмент · 17 июня 2011
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden border-2 border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/0f5e3233-e593-4677-acc3-b0fcf87f3395.JPG" 
                alt="Диплом МИМ ЛИНК по менеджменту"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="School" size={16} className="text-[#1E3A8A]" />
                <span className="text-sm font-medium">Международный Институт Менеджмента ЛИНК</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-[#1E3A8A]" />
                <span className="text-sm text-gray-600">Профессиональная переподготовка</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-[#1E3A8A]" />
                <span className="text-sm text-gray-600">Жуковский, Россия</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Open University Diploma */}
        <Card className="animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: "0.2s"}}>
          <CardHeader>
            <CardTitle className="text-xl text-[#1E3A8A] mb-2">
              Professional Diploma in Management
            </CardTitle>
            <CardDescription>
              The Open University · 31st July 2009
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden border-2 border-gray-200">
              <img 
                src="https://cdn.poehali.dev/files/70e0e592-961a-43f5-9eec-40da806c5bf8.JPG" 
                alt="Professional Diploma in Management from The Open University"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="School" size={16} className="text-[#1E3A8A]" />
                <span className="text-sm font-medium">The Open University</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-[#1E3A8A]" />
                <span className="text-sm text-gray-600">Professional Diploma</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-[#1E3A8A]" />
                <span className="text-sm text-gray-600">United Kingdom</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Languages" size={16} className="text-[#1E3A8A]" />
                <span className="text-sm text-gray-600">Teaching conducted in Russian language</span>
              </div>
              <div className="flex items-center space-x-2 mt-3">
                <Icon name="FileText" size={16} className="text-[#1E3A8A]" />
                <a 
                  href="https://disk.yandex.ru/d/1nkbIutLpX17Vw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#1E3A8A] hover:underline font-medium"
                >
                  Просмотреть все сертификаты Open University
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Professional Certificates Gallery */}
      <Card className="animate-fade-in" style={{animationDelay: "0.4s"}}>
        <CardHeader>
          <CardTitle className="text-2xl text-[#1E3A8A] mb-4 text-center">
            Профессиональные сертификаты
          </CardTitle>
          <CardDescription className="text-center">
            Документы, подтверждающие экспертизу в различных областях
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {/* OKR Coach Certificate */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/8a607dea-b189-4762-aefe-04e54fcae4ff.png" 
                  alt="OKR Academy - Certified professional OKR Coach"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-semibold text-gray-900">OKR Coach</h4>
                <p className="text-sm text-gray-600">OKR Academy · Март 2024</p>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    6 модулей, 24 часа
                  </span>
                </div>
              </div>
            </div>

            {/* MFTI Recognition */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/7f755f85-080b-442f-bb61-ab3aa4e9ebdb.png" 
                  alt="Благодарность МФТИ за научное руководство ВКР"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-semibold text-gray-900">Благодарность МФТИ</h4>
                <p className="text-sm text-gray-600">Научное руководство ВКР · 2022/2024</p>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Наставничество
                  </span>
                </div>
              </div>
            </div>

            {/* Venture Analyst Recommendation */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/73f61a30-6242-4d34-8878-533b0bc5662e.png" 
                  alt="Рекомендательное письмо венчурного аналитика"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-semibold text-gray-900">Рекомендация</h4>
                <p className="text-sm text-gray-600">I2BF Global Ventures</p>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Венчурный анализ
                  </span>
                </div>
              </div>
            </div>

            {/* Digital Transformation Certificate */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/705f4018-6841-4dd2-b9a8-2c91eda6768a.png" 
                  alt="Сертификат цифровой трансформации Минпромторг"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-semibold text-gray-900">Цифровая трансформация</h4>
                <p className="text-sm text-gray-600">Минпромторг · Январь 2024</p>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Госпрограмма
                  </span>
                </div>
              </div>
            </div>

            {/* Risk Management Certificate */}
            <div className="group cursor-pointer">
              <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/d3f5e358-3c69-4073-8074-6078db8f34f8.png" 
                  alt="Сертификат по управлению рисками проекта"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-3 text-center">
                <h4 className="font-semibold text-gray-900">Управление рисками</h4>
                <p className="text-sm text-gray-600">НАДПО · Декабрь 2023</p>
                <div className="mt-2 flex justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                    Риск-менеджмент
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Certifications List */}
          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Дополнительные курсы и сертификации</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Продуктовый трекинг, ФРИИ (2025)",
                "Аттестация трекеров (Грейд В+), Школа стартапов Skolkovo (2023)",
                "VC analyst course, I2BF Global Ventures (2023)",
                "Product-Manager, Skillsetter (2021)",
                "Развитие производственных предприятий (2024)",
                "Курсы повышения квалификации в области управления"
              ].map((cert, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="GraduationCap" size={16} className="text-[#1E3A8A]" />
                  <span className="text-sm text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="FileText" size={20} className="text-[#1E3A8A]" />
              <a 
                href="https://disk.yandex.ru/d/_CbV983nnZMatQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#1E3A8A] hover:underline font-medium text-lg"
              >
                Просмотреть все сертификаты курсов
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EducationSection;