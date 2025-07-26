import React from 'react';

const AcceleratorsSection = () => {
  const accelerators = [
    {
      name: "Школа стартапов Skolkovo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Skolkovo_logo_2020.svg/240px-Skolkovo_logo_2020.svg.png",
      role: "Трекер (грейд В+)"
    },
    {
      name: "Форум «Сильные идеи для нового времени»",
      logo: "/api/placeholder/120/60",
      role: "Эксперт"
    },
    {
      name: "Growth Academy",
      logo: "/api/placeholder/120/60",
      role: "Тимлид"
    },
    {
      name: "ТехноВызов",
      logo: "/api/placeholder/120/60",
      role: "Трекер"
    },
    {
      name: "Архипелаг 2121",
      logo: "/api/placeholder/120/60",
      role: "Эксперт"
    },
    {
      name: "Университет 20.35",
      logo: "/api/placeholder/120/60",
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
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
        
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                Экспертиза в экосистеме
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-navy rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 font-heading">Трекинг команд</div>
                    <div className="text-gray-600 font-body">Сопровождение 250+ команд в программах акселерации</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-navy rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 font-heading">Экспертная оценка</div>
                    <div className="text-gray-600 font-body">Участие в отборе и развитии перспективных проектов</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brand-navy rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 font-heading">Менторство</div>
                    <div className="text-gray-600 font-body">Помощь стартапам в достижении ключевых метрик роста</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-8 text-white">
                <div className="text-4xl font-bold mb-2 font-heading">5+</div>
                <div className="text-lg mb-4 font-body">лет в экосистеме</div>
                <div className="h-px bg-white/20 mb-4"></div>
                <div className="text-sm opacity-90 font-body">
                  Опыт работы в ведущих российских акселераторах и инновационных программах
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcceleratorsSection;