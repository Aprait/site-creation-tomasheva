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
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full font-medium mb-6">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Мои услуги
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-6 font-heading tracking-tight">
            Чем я могу быть полезна
          </h2>
          <p className="text-xl text-brand-muted font-body max-w-3xl mx-auto leading-relaxed">
            Ключевые направления моей экспертной деятельности для развития вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="modern-card border-0 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden" 
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
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-white modern-shadow-lg rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-brand-primary mb-4 font-heading">
              Не нашли подходящее решение?
            </h3>
            <p className="text-brand-muted mb-6 font-body">
              Обсудим вашу задачу индивидуально — я помогу найти оптимальное решение
            </p>
            <button className="modern-button bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
              <Icon name="MessageCircle" size={20} className="mr-2 inline" />
              Обсудить задачу
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;