import React from 'react';
import Icon from '@/components/ui/icon';

const EducationDiplomasSection = () => {
  const diplomas = [
    {
      id: 'link-management',
      title: 'Международный Институт Менеджмента ЛИНК',
      subtitle: 'Менеджер по специальности «Менеджмент организации»',
      description: 'Диплом о высшем образовании',
      imageUrl: 'https://cdn.poehali.dev/files/fb0f3b05-946e-42a3-a475-acd84429a673.jpg',
      year: '2011',
      degree: 'Менеджер'
    },
    {
      id: 'ou-business',
      title: 'Школа Бизнеса Открытого Британского Университета',
      subtitle: 'OU Business School',
      description: 'Professional Diploma in Management',
      imageUrl: 'https://cdn.poehali.dev/files/b44d02e9-fc85-4ed6-b11d-7e135d04a478.JPG',
      year: '2009',
      degree: 'Professional Diploma in Management'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Высшее образование
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Фундаментальная подготовка в области менеджмента и бизнес-администрирования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {diplomas.map((diploma, index) => (
            <div 
              key={diploma.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-48 h-auto bg-gray-100 rounded-xl overflow-hidden shadow-md">
                    <img
                      src={diploma.imageUrl}
                      alt={diploma.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="flex-grow text-center lg:text-left">
                  <div className="inline-flex items-center px-3 py-1 bg-brand-navy text-white text-sm font-medium rounded-full mb-3">
                    <Icon name="GraduationCap" size={16} className="mr-1" />
                    {diploma.year}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                    {diploma.title}
                  </h3>
                  
                  <p className="text-lg text-brand-blue font-medium mb-2 font-body">
                    {diploma.subtitle}
                  </p>
                  
                  <p className="text-gray-600 mb-3 font-body">
                    {diploma.description}
                  </p>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-lg">
                    <Icon name="Award" size={16} className="text-brand-navy mr-2" />
                    <span className="text-brand-navy font-medium text-sm font-body">
                      {diploma.degree}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              Международное образование
            </h3>
            <p className="text-lg opacity-90 font-body max-w-2xl mx-auto">
              Двойная экспертиза в российской и международной бизнес-практике, 
              что позволяет применять лучшие мировые стандарты управления
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationDiplomasSection;