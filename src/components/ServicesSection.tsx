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

  const gradientColors = [
    "from-blue-500 to-indigo-600",
    "from-green-500 to-emerald-600", 
    "from-purple-500 to-violet-600",
    "from-orange-500 to-red-600",
    "from-pink-500 to-rose-600",
    "from-cyan-500 to-blue-600"
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4 font-heading tracking-tight">
            Услуги
          </h2>
          <p className="text-lg text-ink-tertiary max-w-2xl leading-relaxed">
            Комплексное сопровождение бизнеса на пути к росту
          </p>
        </div>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-line/30 hover:border-accent/30 hover:bg-bg-secondary transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon name={service.icon} size={24} className="text-accent group-hover:text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-ink mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-ink-tertiary leading-relaxed font-light text-lg">
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