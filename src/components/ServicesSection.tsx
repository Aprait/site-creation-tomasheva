import React from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

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
    <section id="services" className="section-padding bg-accent-06">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-10 text-accent-ink rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} className="mr-2" />
            Мои услуги
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">
            Чем я могу быть полезна
          </h2>
          <p className="text-lg text-muted-ink max-w-3xl mx-auto">
            Ключевые направления моей экспертной деятельности для развития вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="card h-full">
              <div className="w-12 h-12 bg-accent-06 rounded-xl flex items-center justify-center mb-4">
                <Icon name={service.icon} size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-ink mb-3">
                {service.title}
              </h3>
              <p className="text-muted-ink leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-base md:text-lg text-muted-ink mb-8 max-w-4xl mx-auto">
            Каждое направление подкреплено многолетним опытом работы с компаниями разного масштаба — 
            от стартапов до крупных корпораций с оборотом свыше 20 млрд рублей.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-accent-06 rounded-xl">
            <Icon name="CheckCircle" size={20} className="text-accent mr-2" />
            <span className="text-ink font-medium">
              Индивидуальный подход к каждому проекту
            </span>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <div className="card text-center">
            <h3 className="text-2xl font-bold text-ink mb-4">
              Не нашли подходящее решение?
            </h3>
            <p className="text-muted-ink mb-6">
              Обсудим вашу задачу индивидуально — я помогу найти оптимальное решение
            </p>
            <Button 
              variant="default"
              size="lg"
              onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
            >
              <Icon name="MessageCircle" size={20} />
              Обсудить задачу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;