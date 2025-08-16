import React from 'react';

const AcceleratorsSection = () => {
  const accelerators = [
    {
      name: "Школа стартапов Skolkovo",
      logo: "/img/skolkovo.png",
      role: "Трекер (грейд В+)"
    },
    {
      name: "Форум «Сильные идеи для нового времени»",
      logo: "/img/silnye-idei.png",
      role: "Эксперт"
    },
    {
      name: "DU LAB ИТМО",
      logo: "/img/du-lab-itmo.png",
      role: "Тимлид"
    },
    {
      name: "ТехноВызов",
      logo: "/img/technovyzov.png",
      role: "Трекер"
    },
    {
      name: "Архипелаг 2121",
      logo: "/img/arhipelag.png",
      role: "Эксперт"
    },
    {
      name: "Университет 20.35",
      logo: "/img/universitet-2035.png",
      role: "Эксперт"
    }
  ];

  return (
    <section id="accelerators" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Трекер и эксперт в ведущих акселераторах
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Работа с топовыми программами развития стартапов и инновационных проектов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accelerators.map((accelerator, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in border border-gray-100"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={accelerator.logo} 
                    alt={`Логотип ${accelerator.name}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading leading-tight">
                  {accelerator.name}
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-brand-light rounded-full">
                  <span className="text-sm font-medium text-brand-navy font-body">
                    {accelerator.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AcceleratorsSection;