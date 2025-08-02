import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Services = () => {
  const services = [
    {
      title: "Бизнес-трекинг",
      subtitle: "Для кого",
      description: "Для собственников, которые тратят большую часть времени на рутинные задачи вместо стратегического развития, чей бизнес держится исключительно на них, а рост замедлился или остановился.",
      results: "Освобождение вашего времени до 60-70% для решения стратегических задач, повышение прибыльности на 20-40%, полная прозрачность и контроль через еженедельные метрики, создание самостоятельной и адаптивной команды, и готовность бизнеса к масштабированию.",
      process: "Еженедельные спринты (60-90 минут), установка измеримых целей и KPI, разработка и тестирование гипотез роста, непрерывный анализ результатов и корректировка стратегии.",
      icon: "Target",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Стратегические сессии",
      subtitle: "Для кого",
      description: "Для команд, у которых отсутствует единое видение развития, цели разрознены, а предыдущие попытки проведения стратсессий были безуспешны из-за хаоса в процессах.",
      results: "Согласованная и принятая командой стратегия развития, конкретный план реализации стратегических проектов с четким распределением ответственности, повышение вовлеченности команды. Ваша команда начинает функционировать как единое целое.",
      process: "Провожу глубокий предварительный анализ бизнеса и интервью с ключевыми сотрудниками. Модерирую очную сессию, помогая сформировать 5-7 стратегических проектов и дорожную карту их реализации.",
      icon: "Users",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Интеграция ИИ в бизнес-процессы",
      subtitle: "Для кого",
      description: "Для компаний, которые страдают от рутинных операций, низкой скорости обработки данных, высоких операционных затрат и сложности масштабирования без увеличения штата.",
      results: "Освобождение ценных человеческих ресурсов от рутины, повышение скорости и точности принятия решений, сокращение операционных затрат и возможность масштабирования бизнеса без пропорционального роста штата.",
      process: "Автоматизация операционных задач, аналитика для отделов продаж и контроля качества, интеграция с CRM-системами, автоматизация стандартных коммуникаций, анализ данных и прогнозирование.",
      icon: "Bot",
      gradient: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <Layout currentPage="services">
      <div className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Мои услуги
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
              Помогаю компаниям выйти на новый уровень развития через системный подход, 
              внедрение технологий и стратегическое планирование
            </p>
          </section>

          {/* Services Grid */}
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`bg-gradient-to-r ${service.gradient} px-8 py-12 text-white`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                      <Icon name={service.icon as any} size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold font-heading">{service.title}</h2>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Для кого */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                        <Icon name="Users" size={20} className="text-brand-blue mr-2" />
                        {service.subtitle}
                      </h3>
                      <p className="text-gray-600 font-body leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Что получите */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                        <Icon name="CheckCircle" size={20} className="text-green-500 mr-2" />
                        Что вы получите
                      </h3>
                      <p className="text-gray-600 font-body leading-relaxed">
                        {service.results}
                      </p>
                    </div>

                    {/* Как работаю */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading flex items-center">
                        <Icon name="Settings" size={20} className="text-brand-accent mr-2" />
                        Как я работаю
                      </h3>
                      <p className="text-gray-600 font-body leading-relaxed">
                        {service.process}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Готовы начать трансформацию?
              </h2>
              <p className="text-xl mb-8 font-body opacity-90 max-w-2xl mx-auto">
                Каждая услуга адаптируется под специфику вашего бизнеса. 
                Давайте обсудим, какой подход будет наиболее эффективным для вас.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-brand-accent hover:bg-orange-500 text-white px-8 py-4 text-lg"
                >
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/cases'}
                  className="bg-white text-brand-navy border-2 border-white hover:bg-gray-100 hover:text-brand-navy px-8 py-4 text-lg"
                >
                  Посмотреть кейсы
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Services;