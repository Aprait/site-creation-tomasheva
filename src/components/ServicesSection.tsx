import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: "Brain",
      title: "Внедрение ИИ в бизнес",
      description: "Интеграция ChatGPT, Claude, Midjourney и других инструментов в рабочие процессы. Автоматизация рутинных задач.",
      features: ["Аудит процессов", "Подбор инструментов", "Обучение команды"],
      color: "from-brand-primary/20 to-brand-primary/5"
    },
    {
      icon: "Target",
      title: "Системный трекинг",
      description: "90-дневные спринты для достижения амбициозных целей. Еженедельные встречи и поддержка.",
      features: ["Целеполагание", "KPI и метрики", "Accountability"],
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: "Users",
      title: "Корпоративное обучение",
      description: "Тренинги и мастер-классы для топ-менеджмента по использованию ИИ для роста бизнеса.",
      features: ["Живые воркшопы", "Кейсы из практики", "Сертификация"],
      color: "from-purple-500/20 to-purple-500/5"
    }
  ];

  return (
    <section className="section-padding bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Услуги
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Как я помогаю бизнесу расти
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Три ключевых направления для системного развития вашей компании
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="h-full dark-card rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px]">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-brand-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-text-secondary">
                        <Icon name="Check" size={20} className="text-brand-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <button 
                    onClick={() => navigate('/services')}
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all"
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="mt-20 relative rounded-3xl overflow-hidden h-96 group">
          <img 
            src="/img/04686068-a05d-4593-8932-f311393704b2.jpg" 
            alt="Abstract 3D composition"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Готовы трансформировать ваш бизнес?
            </h3>
            <p className="text-xl text-text-secondary mb-6 max-w-2xl">
              Начните с бесплатной консультации, где мы определим точки роста и составим план внедрения ИИ
            </p>
            <button className="primary-button px-8 py-4 rounded-lg font-semibold text-lg">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;