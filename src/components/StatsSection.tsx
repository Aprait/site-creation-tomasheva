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
    <section id="results" className="py-32 bg-gradient-to-b from-white to-brand-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-brand-primary mb-6 font-heading tracking-tight">
            Мои результаты в цифрах
          </h2>
          <p className="text-2xl text-gray-600 font-body max-w-3xl mx-auto">
            Измеримые достижения в работе с командами и бизнесом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index} 
              className="text-center p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-brand-accent hover:shadow-xl transition-all duration-300 animate-fade-in card-hover" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-5xl font-bold text-brand-accent mb-4">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-slate-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">
                {stat.period}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Каждая цифра отражает конкретный результат работы с реальными компаниями. 
            Мой подход основан на измеримых KPI и долгосрочном партнерстве.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;