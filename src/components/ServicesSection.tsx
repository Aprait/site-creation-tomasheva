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
    },
    {
      icon: "Award",
      title: "Индивидуальные консультации",
      description: "Комплексная диагностика и советы по развитию вашего бизнеса от эксперта."
    }
  ];

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-3 font-heading tracking-tight">
            Услуги
          </h2>
          <p className="text-base text-ink-tertiary max-w-2xl leading-relaxed">
            Комплексное сопровождение бизнеса на пути к росту
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-xl border-2 border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-accent transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                  <Icon name={service.icon} size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-ink mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-ink-tertiary leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default ServicesSection;