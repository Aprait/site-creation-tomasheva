import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const stats = [
    { 
      number: ">20 лет", 
      label: "опыта в управлении", 
      period: "компаниями и проектами" 
    },
    { 
      number: ">280", 
      label: "команд в портфеле", 
      period: "работа как бизнес-трекера" 
    },
    { 
      number: ">21 млрд ₽", 
      label: "общий годовой оборот", 
      period: "клиентов в портфеле" 
    },
    { 
      number: "160 млн ₽", 
      label: "привлеченных инвестиций", 
      period: "для клиента" 
    }
  ];

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-brand-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-4 font-heading">
            Ключевые достижения в цифрах
          </h2>
          <p className="text-xl text-brand-gray font-body">
            Конкретные результаты работы с бизнесом
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center border-2 hover:border-brand-orange transition-all duration-300 card-hover animate-fade-in bg-white shadow-lg" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="pt-8 pb-8">
                <div className="stats-number text-brand-orange mb-4">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-brand-navy mb-2 font-heading">
                  {stat.label}
                </div>
                <div className="text-sm text-brand-gray font-body">
                  {stat.period}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-brand-gray font-body max-w-3xl mx-auto">
            Каждая цифра отражает реальные результаты в работе с компаниями разных масштабов. 
            Моя экспертиза — это мост между классическим бизнесом и миром высоких технологий.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;