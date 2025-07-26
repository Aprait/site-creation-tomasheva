import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Чем я могу быть полезна
          </h2>
          <p className="text-xl text-gray-600">
            Ключевые направления моей экспертной деятельности
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "Target",
              title: "Бизнес-трекинг и OKR-коучинг",
              description: "Диагностика, поиск точек роста, сопровождение до результата"
            },
            {
              icon: "Brain",
              title: "Внедрение ИИ в бизнес",
              description: "Автоматизация CRM, аналитики и операционных задач"
            },
            {
              icon: "TrendingUp",
              title: "Разработка стратегий",
              description: "Маркетинг, продажи, цифровая трансформация"
            },
            {
              icon: "Users",
              title: "Стратегические сессии",
              description: "Фасилитация для команд в России и СНГ"
            },
            {
              icon: "Rocket",
              title: "Запуск стартапов",
              description: "Консультации по развитию и выводу на рынок новых продуктов"
            },
            {
              icon: "Settings",
              title: "Аудит и оптимизация",
              description: "Построение отделов продаж, внедрение CRM и бережливого производства"
            }
          ].map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={service.icon} size={24} className="text-[#1E3A8A]" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;