import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const stats = [
    { 
      number: "270+", 
      label: "Команд проведено через трекинг", 
      period: "за 2021-2025 гг." 
    },
    { 
      number: "31+ млрд ₽", 
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
    <section id="results" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4 font-heading tracking-tight">
            Результаты
          </h2>
          <p className="text-lg text-ink-tertiary max-w-2xl leading-relaxed">
            Измеримые достижения в работе с командами и бизнесом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index} 
              className="p-6 bg-gray-50 rounded-xl border border-gray-200" 
            >
              <div className="text-3xl lg:text-4xl font-bold text-ink mb-3 font-heading" style={{fontVariantNumeric: 'tabular-nums'}}>
                {stat.number}
              </div>
              <div className="text-base font-medium text-ink-secondary mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-ink-quaternary font-light">
                {stat.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;