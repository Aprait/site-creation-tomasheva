import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import ConsultationModal from '@/components/ConsultationModal';

const Cases = () => {
  const navigate = useNavigate();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  
  const cases = [
    {
      id: 1,
      title: "Бизнес-трекинг для IT-компании",
      category: "Бизнес-трекинг",
      result: "Рост выручки на 40% за 6 месяцев",
      situation: "IT-компания быстро росла, но столкнулась с управленческим хаосом. Собственник был полностью погружен в операционные задачи, а команда теряла мотивацию из-за отсутствия четких целей.",
      task: "Вывести собственника из операционки, внедрить системное управление и найти новые точки роста для масштабирования.",
      actions: "В рамках еженедельных трекинг-сессий мы внедрили систему OKR для фокусировки команды. Провели анализ юнит-экономики, что позволило выявить самые прибыльные продукты. Разработали и протестировали 5 гипотез по выходу в новый сегмент B2B-клиентов.",
      results: "Собственник сократил свое участие в операционной деятельности на 50%. Выручка компании выросла на 40% за 6 месяцев. Команда стала более автономной и мотивированной.",
      icon: "TrendingUp",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Стратегическая сессия для производственной компании",
      category: "Стратегические сессии",
      result: "Единая стратегия и план на 2 года",
      situation: "Топ-менеджеры крупного производственного предприятия не могли договориться о векторе развития на ближайшие годы. Совещания превращались в конфликты, а стратегические цели оставались размытыми.",
      task: "Синхронизировать команду руководителей, разработать единую стратегию развития на 2 года и создать конкретную дорожную карту ее реализации.",
      actions: "Я провела серию индивидуальных глубинных интервью с каждым руководителем, чтобы выявить скрытые противоречия и общие цели. После этого подготовила и провела двухдневную очную стратегическую сессию, где модерировала обсуждение и помогла команде сформулировать 5 ключевых стратегических инициатив.",
      results: "Команда впервые за долгое время вышла с сессии с единым видением и согласованным планом. Была сформирована дорожная карта с ответственными и сроками. Уровень вовлеченности и доверия в команде топ-менеджеров значительно вырос.",
      icon: "Users",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Интеграция ИИ для E-commerce проекта",
      category: "Внедрение ИИ",
      result: "Сокращение времени ответа с 15 минут до 30 секунд",
      situation: "Отдел поддержки крупного интернет-магазина был завален однотипными вопросами о статусе заказа, доставке и возвратах. Менеджеры тратили до 40% времени на рутину, а не на решение сложных проблем клиентов.",
      task: "Снизить нагрузку на первую линию поддержки, автоматизировать ответы на часто задаваемые вопросы и ускорить время реакции на обращения клиентов.",
      actions: "Я проанализировала более 1000 обращений и выделила 20 самых частых тем. На основе этого подобрала и помогла настроить ИИ-чат-бота для сайта. Мы совместно разработали базу знаний и скрипты для бота, а также провели обучение команды по работе с новой системой.",
      results: "ИИ-бот успешно взял на себя обработку 60% типовых обращений. Среднее время первого ответа клиенту сократилось с 15 минут до 30 секунд. Сотрудники поддержки смогли сфокусироваться на сложных кейсах, что повысило лояльность клиентов (NPS вырос на 15%).",
      icon: "Bot",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <Layout currentPage="cases">
      <div className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Кейсы и результаты
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
              Реальные истории трансформации бизнеса. Каждый кейс — это конкретные метрики 
              и измеримые результаты работы с командами и процессами.
            </p>
          </section>

          {/* Cases Grid */}
          <div className="space-y-12">
            {cases.map((caseItem, index) => (
              <div key={caseItem.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                
                {/* Header */}
                <div className={`bg-gradient-to-r ${caseItem.color} border-t border-l border-r border-white/10 px-8 py-8 text-white`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <Icon name={caseItem.icon as any} size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold font-heading mb-1">{caseItem.title}</h2>
                        <span className="text-white/80 font-body">{caseItem.category}</span>
                      </div>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <span className="font-medium font-body">{caseItem.result}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Left Column - S.T */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                          Ситуация
                        </h3>
                        <p className="text-gray-600 font-body leading-relaxed">
                          {caseItem.situation}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                          Задача
                        </h3>
                        <p className="text-gray-600 font-body leading-relaxed">
                          {caseItem.task}
                        </p>
                      </div>
                    </div>

                    {/* Right Column - A.R */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                          Действия
                        </h3>
                        <p className="text-gray-600 font-body leading-relaxed">
                          {caseItem.actions}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                          Результат
                        </h3>
                        <p className="text-gray-600 font-body leading-relaxed">
                          {caseItem.results}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl border border-brand-accent/20 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Хотите такие же результаты?
              </h2>
              <p className="text-xl mb-8 font-body opacity-90 max-w-2xl mx-auto">
                Каждый кейс уникален, но подход остается системным. 
                Давайте обсудим, как адаптировать эти решения под ваш бизнес.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-brand-accent hover:bg-orange-500 text-white px-8 py-4 text-lg"
                >
                  Обсудить ваш проект
                </Button>
                <Button 
                  size="lg"
                  onClick={() => navigate('/services')}
                  className="bg-white text-brand-navy border-2 border-white hover:bg-gray-100 hover:text-brand-navy px-8 py-4 text-lg"
                >
                  Изучить услуги
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </Layout>
  );
};

export default Cases;