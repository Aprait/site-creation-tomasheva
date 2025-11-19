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
      <div className="pt-32 pb-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          
          {/* Hero Section */}
          <section className="mb-24">
            <h1 className="text-6xl lg:text-8xl font-bold text-ink mb-8 font-heading tracking-tight">
              Кейсы
            </h1>
            <p className="text-2xl text-ink-tertiary font-light max-w-3xl leading-relaxed">
              Реальные истории трансформации бизнеса
            </p>
          </section>

          {/* Cases Grid */}
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <div key={caseItem.id} className="border-t border-line/30 pt-16">
                
                {/* Header */}
                <div className="mb-12">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-bg-tertiary text-ink-tertiary text-sm font-medium rounded-lg mb-4">{caseItem.category}</span>
                      <h2 className="text-4xl lg:text-5xl font-bold font-heading tracking-tight text-ink">{caseItem.title}</h2>
                    </div>
                  </div>
                  <div className="text-2xl font-semibold text-ink">{caseItem.result}</div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Left Column - S.T */}
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-xl font-semibold text-ink mb-4">
                        Ситуация
                      </h3>
                      <p className="text-ink-tertiary font-light leading-relaxed text-lg">
                        {caseItem.situation}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-ink mb-4">
                        Задача
                      </h3>
                      <p className="text-ink-tertiary font-light leading-relaxed text-lg">
                        {caseItem.task}
                      </p>
                    </div>
                  </div>

                  {/* Right Column - A.R */}
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-xl font-semibold text-ink mb-4">
                        Действия
                      </h3>
                      <p className="text-ink-tertiary font-light leading-relaxed text-lg">
                        {caseItem.actions}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-ink mb-4">
                        Результат
                      </h3>
                      <p className="text-ink-tertiary font-light leading-relaxed text-lg">
                        {caseItem.results}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-32 pt-16 border-t border-line/30">
            <div className="text-center">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 font-heading tracking-tight text-ink">
                Хотите такие же результаты?
              </h2>
              <p className="text-xl text-ink-tertiary mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                Каждый кейс уникален, но подход остается системным
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-accent hover:bg-accent-hover text-white rounded-xl px-8 h-14 text-base shadow-sm"
                >
                  Обсудить ваш проект
                </Button>
                <Button 
                  size="lg"
                  onClick={() => navigate('/services')}
                  className="border-line text-ink hover:border-accent hover:bg-accent-lighter rounded-xl px-8 h-14 text-base"
                  variant="outline"
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