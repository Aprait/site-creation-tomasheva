import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      service: "Бизнес-трекинг",
      text: "Наталья помогла мне выйти из операционной рутины и наконец-то увидеть свой бизнес со стороны. Благодаря ее трекингу мы нашли точки роста, о которых даже не подозревали, и за полгода увеличили прибыль на 30%. Теперь у меня есть не только стратегия, но и свободное время.",
      author: "Михаил Петров",
      position: "Владелец IT-компании",
      company: "ТехноСофт",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Target",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      service: "Стратегические сессии",
      text: "Стратегическая сессия с Натальей — это лучшее, что случалось с нашей командой. Она смогла так выстроить процесс, что мы за два дня сгенерировали и согласовали план на год вперед. Ушли с сессии с горящими глазами и четким пониманием, кто и что делает.",
      author: "Елена Смирнова",
      position: "Генеральный директор",
      company: "ПромИнвест Холдинг",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Users",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      service: "Интеграция ИИ",
      text: "Я скептически относился к ИИ, считая его чем-то сложным и дорогим. Наталья наглядно показала, как можно автоматизировать рутинные задачи в нашем отделе поддержки. Внедрили ее рекомендации — сэкономили команде по 10 часов в неделю. Это просто магия!",
      author: "Андрей Козлов",
      position: "Руководитель e-commerce проекта",
      company: "МаркетПлейс",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Bot",
      color: "from-purple-500 to-violet-600"
    },
    {
      id: 4,
      service: "Бизнес-трекинг",
      text: "После 3 месяцев работы с Натальей наша команда стала совершенно другой. Мы научились ставить четкие цели, измерять результаты и быстро корректировать курс. Выручка выросла на 45%, но главное — мы теперь понимаем, как управлять ростом системно.",
      author: "Олег Васильев",
      position: "Основатель стартапа",
      company: "FoodTech Solutions",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "TrendingUp",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      service: "Стратегические сессии",
      text: "Наталья провела для нас стратегическую сессию по выходу на международные рынки. За один день мы структурировали все наши идеи, выбрали приоритетные направления и составили детальный план действий. Сейчас уже работаем в 3 новых странах.",
      author: "Мария Федорова",
      position: "Директор по развитию",
      company: "ГлобалТрейд",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Globe",
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 6,
      service: "Интеграция ИИ",
      text: "Внедрение ИИ в нашу CRM-систему казалось сложной задачей, но Наталья разложила все по полочкам. Теперь система сама анализирует клиентов, прогнозирует продажи и подсказывает менеджерам лучшие моменты для звонков. Конверсия выросла на 40%.",
      author: "Дмитрий Новиков",
      position: "Руководитель отдела продаж",
      company: "СейлсПро",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Brain",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 7,
      service: "Бизнес-трекинг",
      text: "Работа с Натальей полностью изменила мой подход к управлению. Раньше я тушил пожары, теперь предотвращаю их появление. Система метрик, которую мы внедрили, позволяет видеть проблемы заранее и оперативно их решать. Стресс снизился в разы.",
      author: "Светлана Королева",
      position: "Владелица медицинского центра",
      company: "МедиСервис+",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Shield",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 8,
      service: "Стратегические сессии",
      text: "Благодаря стратегической сессии с Натальей мы смогли объединить три разрозненных направления бизнеса в единую экосистему. Синергия получилась потрясающая — общая прибыльность выросла на 60%. Команда работает как единый организм.",
      author: "Алексей Морозов",
      position: "Управляющий партнер",
      company: "БизнесГрупп",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Network",
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 9,
      service: "Интеграция ИИ",
      text: "Автоматизация нашего склада с помощью ИИ — это просто космос! Наталья помогла внедрить систему, которая сама управляет запасами, прогнозирует потребности и оптимизирует логистику. Операционные расходы снизились на 25%.",
      author: "Виктор Кузнецов",
      position: "Логистический директор",
      company: "ЛогиПро",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      icon: "Package",
      color: "from-amber-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "280+", label: "довольных клиентов" },
    { number: "4.9/5", label: "средняя оценка" },
    { number: "95%", label: "рекомендуют друзьям" },
    { number: "100%", label: "завершенных проектов" }
  ];

  return (
    <Layout currentPage="reviews">
      <div className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Отзывы клиентов
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
              Реальные истории людей, которые преобразили свой бизнес с моей помощью. 
              Каждый отзыв — это конкретный результат и измеримые изменения.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold text-center mb-8 font-heading">
                Статистика работы с клиентами
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold mb-2 text-brand-accent">{stat.number}</div>
                    <div className="font-body">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reviews Grid */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl shadow-lg p-8 card-hover">
                  
                  {/* Service Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${review.color} text-white`}>
                      <Icon name={review.icon as any} size={16} className="mr-2" />
                      <span className="text-sm font-medium">{review.service}</span>
                    </div>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-gray-700 font-body mb-6 leading-relaxed italic">
                    "{review.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center">
                    <img 
                      src={review.avatar} 
                      alt={review.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900 font-heading">{review.author}</div>
                      <div className="text-sm text-gray-600 font-body">{review.position}</div>
                      <div className="text-sm text-brand-blue font-body">{review.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-brand-light rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-heading">
                Как я работаю с клиентами
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageSquare" size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 font-heading">1. Диагностика</h3>
                  <p className="text-gray-600 font-body text-sm">Глубокий анализ текущего состояния бизнеса</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 font-heading">2. Планирование</h3>
                  <p className="text-gray-600 font-body text-sm">Разработка индивидуальной стратегии</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Cog" size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 font-heading">3. Внедрение</h3>
                  <p className="text-gray-600 font-body text-sm">Пошаговая реализация с постоянной поддержкой</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 font-heading">4. Результат</h3>
                  <p className="text-gray-600 font-body text-sm">Достижение измеримых показателей роста</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Готовы стать следующим успешным кейсом?
              </h2>
              <p className="text-xl mb-8 font-body opacity-90 max-w-2xl mx-auto">
                Каждый отзыв выше — это история трансформации бизнеса. 
                Давайте создадим такую же историю успеха для вашей компании.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="bg-brand-accent hover:bg-orange-500 text-white px-8 py-4 text-lg"
                >
                  Начать сотрудничество
                </Button>
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/cases'}
                  className="bg-white text-brand-navy border-2 border-white hover:bg-gray-100 hover:text-brand-navy px-8 py-4 text-lg"
                >
                  Изучить кейсы
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Reviews;