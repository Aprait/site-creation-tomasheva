import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import ConsultationModal from '@/components/ConsultationModal';

const Services = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleServiceClick = (serviceTitle: string) => {
    const serviceMap: Record<string, string> = {
      'Бизнес-трекинг и OKR-коучинг': 'business-tracking',
      'Внедрение ИИ в бизнес': 'ai-implementation',
      'Разработка стратегий': 'strategic-planning',
      'Стратегические сессии': 'strategic-sessions',
      'Запуск и масштабирование стартапов': 'startup-launch',
      'Индивидуальные консультации': 'individual-consultation'
    };
    setSelectedService(serviceMap[serviceTitle] || 'business-tracking');
    setIsConsultationModalOpen(true);
  };

  useEffect(() => {
    fetch('https://functions.poehali.dev/c35f0742-d30a-433d-bc4f-1f2a1c501ffa')
      .then(res => res.json())
      .then(data => {
        setServices(data.services || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки услуг:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout currentPage="services">
      <div className="pt-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/10 text-accent text-sm font-semibold mb-4">
              <Icon name="Sparkles" size={16} />
              Премиальный консалтинг
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-ink mb-4 font-heading tracking-tight">
              Услуги для роста вашего бизнеса
            </h1>
            <p className="text-lg text-ink-tertiary font-body max-w-3xl mx-auto leading-relaxed">
              Помогаю компаниям выйти на новый уровень развития через системный подход, 
              внедрение технологий и стратегическое планирование
            </p>
          </section>

          {/* Services Grid */}
          <div className="space-y-8">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                <p className="mt-4 text-ink-tertiary">Загрузка услуг...</p>
              </div>
            ) : services.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-tertiary">Услуги временно недоступны</p>
              </div>
            ) : services.map((service, index) => (
              <div key={service.id || index} className="bg-white rounded-3xl shadow-sm border border-line/30 overflow-hidden hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="bg-gradient-to-br from-accent to-accent-hover px-8 py-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>
                  <div className="relative flex items-center">
                    <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 border border-white/20">
                      <Icon name="Target" size={28} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-bold font-heading tracking-tight">{service.title}</h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Описание */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                          <Icon name="FileText" size={16} className="text-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-ink font-heading">
                          Описание
                        </h3>
                      </div>
                      <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Особенности */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-ink font-heading">
                          Особенности
                        </h3>
                      </div>
                      {service.features && service.features.length > 0 ? (
                        <ul className="space-y-2">
                          {service.features.map((feature: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Icon name="Check" size={16} className="text-accent mt-1 flex-shrink-0" />
                              <span className="text-ink-tertiary font-body text-[15px]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                          Подробности обсуждаются индивидуально
                        </p>
                      )}
                    </div>

                    {/* Стоимость */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                          <Icon name="DollarSign" size={16} className="text-brand-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-ink font-heading">
                          Стоимость
                        </h3>
                      </div>
                      <p className="text-2xl font-bold text-accent font-heading">
                        {service.base_price || 'По запросу'}
                      </p>
                    </div>

                  </div>

                  {/* CTA */}
                  <div className="mt-10 pt-10 border-t border-line/40">
                    <div className="flex justify-center">
                      <Button 
                        size="lg"
                        onClick={() => handleServiceClick(service.title)}
                        className="bg-accent hover:bg-accent-hover text-white shadow-sm hover:shadow-md transition-all"
                      >
                        <Icon name="MessageSquare" size={18} />
                        Узнать подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-24">
            <div className="bg-gradient-to-br from-accent via-accent to-accent-hover rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
                  <Icon name="Zap" size={16} />
                  Начните прямо сейчас
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading tracking-tight">
                  Готовы начать трансформацию?
                </h2>
                <p className="text-lg lg:text-xl mb-10 font-body text-white max-w-2xl mx-auto leading-relaxed">
                  Каждая услуга адаптируется под специфику вашего бизнеса. 
                  Давайте обсудим, какой подход будет наиболее эффективным для вас.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="bg-accent hover:bg-accent-hover text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Calendar" size={18} />
                    Записаться на консультацию
                  </Button>
                  <Button 
                    size="lg"
                    onClick={() => navigate('/cases')}
                    className="bg-accent-light text-accent hover:bg-accent/20 border-2 border-accent/20 hover:border-accent/30"
                  >
                    <Icon name="BookOpen" size={18} />
                    Посмотреть кейсы
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => {
          setIsConsultationModalOpen(false);
          setSelectedService('');
        }}
        prefilledService={selectedService}
      />
    </Layout>
  );
};

export default Services;