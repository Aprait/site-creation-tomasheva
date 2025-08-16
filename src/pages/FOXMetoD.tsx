import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const FOXMetoD = () => {
  const handleContactClick = () => {
    window.open('https://t.me/natalyatomasheva', '_blank');
  };

  const services = [
    {
      icon: 'TrendingUp',
      title: 'Бизнес-трекинг',
      description: 'Еженедельные спринты для освобождения вашего времени и роста прибыли на 20-40%',
      features: [
        'Освобождение 60-70% времени для стратегии',
        'Прозрачные метрики каждую неделю',
        'Создание самостоятельной команды'
      ]
    },
    {
      icon: 'Target',
      title: 'Стратегические сессии',
      description: 'Создание единого видения развития компании для всей команды',
      features: [
        'Согласованная стратегия развития',
        'План реализации с KPI',
        'Повышение вовлеченности команды'
      ]
    },
    {
      icon: 'Cpu',
      title: 'Интеграция ИИ',
      description: 'Внедрение искусственного интеллекта для автоматизации и масштабирования',
      features: [
        'Автоматизация рутинных задач',
        'Сокращение операционных затрат',
        'Масштабирование без роста штата'
      ]
    }
  ];

  const achievements = [
    { value: '20+', label: 'лет опыта' },
    { value: '280+', label: 'команд' },
    { value: '21 млрд ₽', label: 'оборот клиентов' },
    { value: '250+', label: 'проектов' }
  ];

  return (
    <Layout currentPage="foxmetod">
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-primary via-blue-900 to-brand-primary overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
              FOXMetoD
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Консалтинговое агентство для системного роста вашего бизнеса
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleContactClick}
                className="bg-brand-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold px-8 py-4 text-lg rounded-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        {/* About FOXMetoD */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-brand-primary mb-6">
                  Катализатор роста вашего бизнеса
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  FOXMetoD — это больше, чем консалтинг. Это системный подход к развитию бизнеса, 
                  основанный на 20-летнем опыте управления компаниями и внедрения инноваций.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Мы помогаем собственникам освободиться от операционной рутины, выстроить 
                  эффективные процессы и подготовить бизнес к будущему с помощью ИИ-технологий.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-brand-accent mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-brand-accent to-blue-600 rounded-2xl p-8 text-white">
                  <div className="h-full flex flex-col justify-center">
                    <Icon name="Zap" size={64} className="mb-6 mx-auto" />
                    <h3 className="text-2xl font-bold mb-4 text-center">
                      Ускоряем развитие бизнеса
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Icon name="Check" size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                        <span>Системный подход к управлению</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                        <span>Внедрение ИИ для автоматизации</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" size={20} className="mr-3 mt-0.5 flex-shrink-0" />
                        <span>Результат через еженедельные спринты</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-brand-primary mb-4">
                Как мы помогаем бизнесу расти
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Выберите подходящий формат работы для решения ваших задач
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-brand-accent/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={32} className="text-brand-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="CheckCircle" size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-brand-primary mb-4">
                Как мы работаем
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Проверенная методология для достижения результатов
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Диагностика', description: 'Анализируем текущее состояние бизнеса и выявляем точки роста' },
                { step: '02', title: 'Стратегия', description: 'Разрабатываем план развития с четкими KPI и сроками' },
                { step: '03', title: 'Внедрение', description: 'Реализуем изменения через еженедельные спринты' },
                { step: '04', title: 'Результат', description: 'Измеряем эффект и масштабируем успешные решения' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-brand-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-brand-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-brand-primary to-blue-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Готовы ускорить рост вашего бизнеса?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ответ в течение 2-4 часов в рабочее время
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleContactClick}
                className="bg-white text-brand-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold px-8 py-4 text-lg rounded-lg"
                onClick={() => window.open('mailto:n.tomasheva@foxmetod.ru', '_blank')}
              >
                <Icon name="Mail" size={20} className="mr-2" />
                n.tomasheva@foxmetod.ru
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FOXMetoD;