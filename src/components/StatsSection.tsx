import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Мои результаты в цифрах
          </h2>
          <p className="text-xl text-gray-600">
            Измеримые достижения в работе с командами и бизнесом
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { number: "250+", label: "команд проведено через трекинг", period: "2021-2024" },
            { number: "15+ млрд ₽", label: "годовой оборот компаний", period: "с которыми велась работа" },
            { number: "160 млн ₽", label: "привлечено венчурных инвестиций", period: "для IT-проекта" },
            { number: "х8 раз", label: "увеличен оборот компании", period: "на позиции коммерческого директора" },
            { number: "50 млн ₽", label: "выиграна субсидия", period: "на разработку инновационной продукции" }
          ].map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-[#1E3A8A] transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="pt-8 pb-6">
                <div className="text-4xl font-bold text-[#1E3A8A] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.period}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;