import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      icon: "Target",
      title: "Бизнес-трекинг и OKR-коучинг",
      description: "Диагностика, поиск точек роста бизнеса, сопровождение в течение 3-12 месяцев до результата.",
      bgColor: "from-blue-500 to-indigo-600",
      iconColor: "bg-blue-100 group-hover:bg-blue-500"
    },
    {
      icon: "Brain",
      title: "Внедрение ИИ в бизнес",
      description: "Автоматизация CRM, аналитика для отделов продаж и контроля качества, оптимизация операционных задач.",
      bgColor: "from-purple-500 to-violet-600",
      iconColor: "bg-purple-100 group-hover:bg-purple-500"
    },
    {
      icon: "TrendingUp",
      title: "Разработка стратегий",
      description: "Разработка маркетинговой стратегии, стратегии продвижения, продаж и цифровой трансформации.",
      bgColor: "from-emerald-500 to-green-600",
      iconColor: "bg-emerald-100 group-hover:bg-emerald-500"
    },
    {
      icon: "Users",
      title: "Стратегические сессии",
      description: "Проведение и фасилитация стратегических сессий для компаний России и СНГ.",
      bgColor: "from-orange-500 to-red-600",
      iconColor: "bg-orange-100 group-hover:bg-orange-500"
    },
    {
      icon: "Rocket",
      title: "Запуск и масштабирование стартапов",
      description: "Полный цикл поддержки от идеи до масштабирования, включая формирование УТП и анализ метрик.",
      bgColor: "from-pink-500 to-rose-600",
      iconColor: "bg-pink-100 group-hover:bg-pink-500"
    },
    {
      icon: "Award",
      title: "Индивидуальные консультации",
      description: "Комплексная диагностика и советы по развитию вашего бизнеса от эксперта.",
      bgColor: "from-cyan-500 to-blue-600",
      iconColor: "bg-cyan-100 group-hover:bg-cyan-500"
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
              className={`group p-6 rounded-xl border-2 border-gray-200 bg-gradient-to-br ${service.bgColor} hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl`}
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${service.iconColor} flex items-center justify-center transition-all duration-300`}>
                  <Icon name={service.icon} size={24} className="text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed text-sm">
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