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
      <div className="pt-8 pb-16 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-semibold mb-6">
              <Icon name="BookOpen" size={16} />
              Портфолио
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-ink mb-6 font-heading tracking-tight">
              Кейсы и результаты
            </h1>
            <p className="text-xl text-ink-secondary font-body max-w-3xl mx-auto leading-relaxed">
              Реальные истории трансформации бизнеса. Каждый кейс — это конкретные метрики 
              и измеримые результаты работы с командами и процессами.
            </p>
          </section>

          {/* Cases Grid */}
          <div className="space-y-12">
            {cases.map((caseItem, index) => (
              <div key={caseItem.id} className="bg-white rounded-3xl shadow-sm border border-line/30 overflow-hidden hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                
                {/* Header */}
                <div className={`bg-gradient-to-br ${caseItem.color} px-10 py-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>
                  <div className="relative flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 border border-white/20">
                        <Icon name={caseItem.icon as any} size={28} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold font-heading mb-1 tracking-tight">{caseItem.title}</h2>
                        <span className="text-white/80 font-body text-sm">{caseItem.category}</span>
                      </div>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm px-5 py-3 rounded-2xl border border-white/20">
                      <span className="font-semibold font-body text-sm">{caseItem.result}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    {/* Left Column - S.T */}
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                            <Icon name="AlertCircle" size={16} className="text-red-600" />
                          </div>
                          <h3 className="text-lg font-bold text-ink font-heading">
                            Ситуация
                          </h3>
                        </div>
                        <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                          {caseItem.situation}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                            <Icon name="Target" size={16} className="text-blue-600" />
                          </div>
                          <h3 className="text-lg font-bold text-ink font-heading">
                            Задача
                          </h3>
                        </div>
                        <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                          {caseItem.task}
                        </p>
                      </div>
                    </div>

                    {/* Right Column - A.R */}
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center">
                            <Icon name="Zap" size={16} className="text-purple-600" />
                          </div>
                          <h3 className="text-lg font-bold text-ink font-heading">
                            Действия
                          </h3>
                        </div>
                        <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                          {caseItem.actions}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                            <Icon name="CheckCircle" size={16} className="text-green-600" />
                          </div>
                          <h3 className="text-lg font-bold text-ink font-heading">
                            Результат
                          </h3>
                        </div>
                        <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
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
          <section className="mt-24">
            <div className="bg-gradient-to-br from-ink via-ink-secondary to-ink rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
                  <Icon name="Sparkles" size={16} />
                  Ваш результат
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading tracking-tight">
                  Хотите такие же результаты?
                </h2>
                <p className="text-lg lg:text-xl mb-10 font-body opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Каждый кейс уникален, но подход остается системным. 
                  Давайте обсудим, как адаптировать эти решения под ваш бизнес.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="bg-white text-ink hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Calendar" size={18} />
                    Обсудить ваш проект
                  </Button>
                  <Button 
                    size="lg"
                    onClick={() => navigate('/services')}
                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
                  >
                    <Icon name="Briefcase" size={18} />
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