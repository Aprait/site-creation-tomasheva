import React from 'react';

const AcceleratorsSection = () => {
  const accelerators = [
    {
      name: "Школа стартапов Skolkovo",
      logo: "/img/9c21003f-6957-4194-a458-24e57a74b11c.jpg",
      role: "Трекер (грейд В+)"
    },
    {
      name: "Форум «Сильные идеи для нового времени»",
      logo: "/img/ff2b092a-bcfc-480b-95ee-677ee5435647.jpg",
      role: "Эксперт"
    },
    {
      name: "DU LAB ИТМО",
      logo: "/img/51467ce7-dcf9-4d47-b852-8c9c3271fa3b.jpg",
      role: "Тимлид"
    },
    {
      name: "ТехноВызов",
      logo: "/img/eeff3de2-cdc7-404b-ab06-1fc1fb7cd3e3.jpg",
      role: "Трекер"
    },
    {
      name: "Архипелаг 2121",
      logo: "/img/503fe85a-cf46-4094-bea0-d6ca02a8bbed.jpg",
      role: "Эксперт"
    },
    {
      name: "Университет 20.35",
      logo: "/img/f77e1d43-6efb-4063-9606-f2bf3414df20.jpg",
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
                <div className="w-32 h-32 mb-6 bg-white rounded-xl flex items-center justify-center overflow-hidden p-4 border border-gray-100">
                  <img 
                    src={accelerator.logo} 
                    alt={`Логотип ${accelerator.name}`}
                    className="w-full h-full object-contain"
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