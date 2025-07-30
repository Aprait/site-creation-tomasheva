import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: "Target",
      title: "Бизнес-трекинг и OKR-коучинг",
      description: "Диагностика, поиск точек роста бизнеса, сопровождение в течение 3-12 месяцев до результата."
    },
    {
      icon: "Brain",
      title: "Внедрение ИИ в бизнес",
      description: "Автоматизация CRM, аналитика для отделов продаж и контроля качества, оптимизация операционных задач."
    },
    {
      icon: "TrendingUp",
      title: "Разработка стратегий",
      description: "Разработка маркетинговой стратегии, стратегии продвижения, продаж и цифровой трансформации."
    },
    {
      icon: "Users",
      title: "Стратегические сессии",
      description: "Проведение и фасилитация стратегических сессий для компаний России и СНГ."
    },
    {
      icon: "Rocket",
      title: "Запуск и масштабирование стартапов",
      description: "Полный цикл поддержки от идеи до масштабирования, включая формирование УТП и анализ метрик."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Чем я могу быть полезна
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Ключевые направления моей экспертной деятельности для развития вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 border-gray-100 hover:border-brand-navy hover:shadow-xl transition-all duration-300 card-hover animate-fade-in bg-white" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Icon name={service.icon} size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 font-heading">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed font-body">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 font-body mb-8 max-w-4xl mx-auto">
            Каждое направление подкреплено многолетним опытом работы с компаниями разного масштаба — 
            от стартапов до крупных корпораций с оборотом свыше 20 млрд рублей.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-brand-light rounded-lg">
            <Icon name="CheckCircle" size={20} className="text-brand-navy mr-2" />
            <span className="text-brand-navy font-medium font-body">
              Индивидуальный подход к каждому проекту
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;