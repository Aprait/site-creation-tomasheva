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
    <section id="education" className="py-12 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-3 font-heading tracking-tight">
            Образование
          </h2>
          <p className="text-base text-ink-tertiary max-w-3xl leading-relaxed">
            Международные стандарты бизнес-образования
          </p>
        </div>
        
        <div className="space-y-8">
          {diplomas.map((diploma, index) => (
            <div 
              key={diploma.id}
              className="bg-white rounded-2xl p-8 border border-line/30 hover:border-ink/20 hover:bg-bg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-48 h-auto rounded-xl overflow-hidden">
                    <img
                      src={diploma.imageUrl}
                      alt={diploma.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="text-ink-quaternary text-sm mb-3 font-medium">
                    {diploma.year}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-ink mb-2 font-heading">
                    {diploma.title}
                  </h3>
                  
                  <p className="text-lg text-ink-secondary font-medium mb-3">
                    {diploma.subtitle}
                  </p>
                  
                  <p className="text-ink-tertiary font-light text-lg">
                    {diploma.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationDiplomasSection;