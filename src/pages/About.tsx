import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-bold text-brand-navy font-heading">
              Наталья Томашева
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-brand-navy font-medium font-body">Обо мне</a>
              <a href="/services" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Услуги</a>
              <a href="/cases" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Кейсы</a>
              <a href="/achievements" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Достижения</a>
              <a href="/blog" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Блог</a>
              <a href="/contact" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Контакты</a>
            </div>
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-brand-orange hover:bg-orange-600 text-white font-medium"
            >
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 font-heading">
                  Обо мне
                </h1>
                <div className="space-y-6 text-lg font-body text-brand-gray">
                  <p>
                    Более 20 лет я занимаюсь управлением компаниями, проектами, автоматизацией процессов и цифровой трансформацией. Как интерим-менеджер (операционный директор, директор по развитию) я более 10 лет помогала бизнесу расти изнутри.
                  </p>
                  <p>
                    С 2019 года я как бизнес-трекер и эксперт-наставник поработала с более чем 280 командами, чей общий годовой оборот превышает 21 миллиард рублей, и реализовала более 100 консалтинговых проектов в России и Узбекистане.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                    alt="Наталья Томашева"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Three Roles Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center font-heading">
              Мои ключевые роли
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Strategic Architect */}
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 font-heading">
                  Стратегический архитектор
                </h3>
                <p className="text-brand-gray font-body">
                  Проектирую системы управления, которые превращают хаос в порядок и обеспечивают устойчивый рост бизнеса.
                </p>
              </div>

              {/* Growth Catalyst */}
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 font-heading">
                  Катализатор роста
                </h3>
                <p className="text-brand-gray font-body">
                  Запускаю процессы, которые ускоряют развитие компании и выводят собственника из операционной рутины.
                </p>
              </div>

              {/* AI Futurist */}
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Bot" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 font-heading">
                  AI-футурист
                </h3>
                <p className="text-brand-gray font-body">
                  Внедряю искусственный интеллект в бизнес-процессы, подготавливая компании к будущему уже сегодня.
                </p>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center font-heading">
              Моя ключевая экспертиза
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-brand-gray font-body">Глубокое понимание и внедрение ИИ в бизнес-процессы (CRM, аналитика, автоматизация)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-brand-gray font-body">Бизнес-трекинг и управление проектами (OKR, KPI, Agile)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-brand-gray font-body">Разработка стратегий: маркетинг, продажи, цифровая трансформация</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-brand-gray font-body">Запуск и масштабирование стартапов</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-brand-gray font-body">Оптимизация бизнес-процессов, внедрение CRM, бережливое производство</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-orange mt-1 flex-shrink-0" />
                  <span className="text-brand-gray font-body">Проведение стратегических сессий и фасилитация</span>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center font-heading">
              Значимые достижения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-navy to-brand-orange rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">Рост оборота в 8 раз</h3>
                <p className="font-body">Увеличила оборот компании более чем в 8 раз за период работы</p>
              </div>
              <div className="bg-gradient-to-br from-brand-orange to-yellow-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">Открытие головного офиса</h3>
                <p className="font-body">Открыла с нуля головной офис компании в г. Москва</p>
              </div>
              <div className="bg-gradient-to-br from-brand-navy to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">Контракт на 500 млн ₽</h3>
                <p className="font-body">Участвовала в заключении контракта с госкорпорацией на сумму более 500 млн рублей</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-brand-orange rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">160 млн ₽ инвестиций</h3>
                <p className="font-body">Привлекла венчурный фонд, готовый инвестировать 160 млн рублей</p>
              </div>
            </div>
          </section>

          {/* Accelerators Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-brand-navy mb-12 text-center font-heading">
              Эксперт в ведущих акселераторах
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-brand-navy">Сколково</div>
              <div className="text-2xl font-bold text-brand-navy">Growth Academy</div>
              <div className="text-2xl font-bold text-brand-navy">Университет 20.35</div>
              <div className="text-2xl font-bold text-brand-navy">Бизнес-Уикенд</div>
              <div className="text-2xl font-bold text-brand-navy">Школа молодого предпринимателя</div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-brand-navy rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                Готовы изменить свой бизнес?
              </h2>
              <p className="text-xl text-white/90 mb-8 font-body">
                Посмотрите мои сертификаты и дипломы или изучите детальные кейсы работы
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/achievements'}
                  className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 text-lg"
                >
                  Посмотреть дипломы и сертификаты
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/cases'}
                  className="border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg"
                >
                  Изучить кейсы
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default About;