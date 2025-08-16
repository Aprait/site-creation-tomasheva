import React from 'react';

const StatsSection = () => {
  const stats = [
    { 
      number: "250+", 
      label: "Команд проведено через трекинг", 
      period: "за 2021-2024 гг." 
    },
    { 
      number: "21+ млрд ₽", 
      label: "Годовой оборот компаний", 
      period: "с которыми велась работа" 
    },
    { 
      number: "160 млн ₽", 
      label: "Привлечено венчурных инвестиций", 
      period: "для IT-проекта" 
    },
    { 
      number: "×8 раз", 
      label: "Увеличен оборот компании", 
      period: "на позиции коммерческого директора" 
    }
  ];

  return (
    <section id="results" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Мои результаты в цифрах
          </h2>
          <p className="text-lg text-muted-ink max-w-3xl mx-auto">
            Измеримые достижения в работе с командами и бизнесом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index} 
              className="card text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-3">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-ink mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-ink">
                {stat.period}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-muted-ink max-w-3xl mx-auto leading-relaxed">
            Каждая цифра отражает конкретный результат работы с реальными компаниями. 
            Мой подход основан на измеримых KPI и долгосрочном партнерстве.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;