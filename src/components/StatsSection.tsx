import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="results" className="py-20 bg-gradient-to-b from-white to-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Мои результаты в цифрах
          </h2>
          <p className="text-xl text-gray-600 font-body">
            Измеримые достижения в работе с командами и бизнесом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center border-2 hover:border-brand-navy transition-all duration-300 card-hover animate-fade-in bg-white shadow-lg" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="pt-8 pb-8">
                <div className="stats-number text-brand-navy mb-4">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2 font-heading">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 font-body">
                  {stat.period}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
            Каждая цифра отражает конкретный результат работы с реальными компаниями. 
            Мой подход основан на измеримых KPI и долгосрочном партнерстве.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;