import React from 'react';

const AcceleratorsSection = () => {
  const accelerators = [
    {
      name: "Школа стартапов Skolkovo",
      logo: "/img/Сколково.png",
      role: "Трекер (грейд В+)"
    },
    {
      name: "Форум «Сильные идеи для нового времени»",
      logo: "/img/Сильные идеи для нового времени.jpg",
      role: "Эксперт"
    },
    {
      name: "DU LAB ИТМО",
      logo: "https://cdn.poehali.dev/files/247d191b-df07-415f-8b9f-c1f44c67d0e2.png",
      role: "Тимлид"
    },
    {
      name: "ТехноВызов",
      logo: "/img/Техновызов.png",
      role: "Трекер"
    },
    {
      name: "Архипелаг 2121",
      logo: "/img/Архипелаг 2121.png",
      role: "Эксперт"
    },
    {
      name: "Университет 20.35",
      logo: "/img/Университет 2035.png",
      role: "Эксперт"
    }
  ];

  return (
    <section id="accelerators" className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ink mb-4 font-heading">
            Трекер и эксперт в ведущих акселераторах
          </h2>
          <p className="text-xl text-ink-tertiary font-body max-w-3xl mx-auto">
            Работа с топовыми программами развития стартапов и инновационных проектов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {accelerators.map((accelerator, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover animate-fade-in border border-line/30 hover:border-accent"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-6 bg-white rounded-xl flex items-center justify-center overflow-hidden p-4 border border-line/30">
                  <img 
                    src={accelerator.logo} 
                    alt={`Логотип ${accelerator.name}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-ink mb-3 font-heading leading-tight">
                  {accelerator.name}
                </h3>
                <div className="inline-flex items-center px-3 py-1 bg-accent-light rounded-full">
                  <span className="text-sm font-medium text-accent font-body">
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