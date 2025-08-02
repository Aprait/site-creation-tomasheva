import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const education = [
    {
      title: "Международный Институт Менеджмента ЛИНК",
      subtitle: "Факультет менеджмента",
      image: "/api/placeholder/400/300",
      year: "2008"
    },
    {
      title: "Школа Бизнеса Открытого Британского Университета",
      subtitle: "OU Business School",
      image: "/api/placeholder/400/300",
      year: "2010"
    }
  ];

  const certificates = [
    { title: "Бизнес-трекинг Сколково", image: "/img/893867a2-53b0-4715-a3e3-902c3acf89cc.jpg", year: "2023" },
    { title: "OKR Coach Certification", image: "/img/299736ab-0020-4b4b-ae51-38e68cf79204.jpg", year: "2022" },
    { title: "Agile Project Management", image: "/img/392c3591-789c-44af-be49-7fbd09a23148.jpg", year: "2022" },
    { title: "Strategic Planning Expert", image: "/img/6a8596f8-91f9-462b-8584-617a66b32e7a.jpg", year: "2021" },
    { title: "Digital Transformation", image: "/img/0a303409-7b48-40e9-99fd-60567e73c983.jpg", year: "2021" }
  ];

  const testimonials = [
    {
      title: "Благодарность от IT-компании",
      image: "/api/placeholder/400/300",
      description: "За выдающиеся результаты в оптимизации бизнес-процессов"
    },
    {
      title: "Отзыв производственного холдинга",
      image: "/api/placeholder/400/300",
      description: "За успешное проведение стратегической сессии"
    },
    {
      title: "Рекомендация от стартапа",
      image: "/api/placeholder/400/300",
      description: "За помощь в привлечении венчурных инвестиций"
    }
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <Layout currentPage="about">
      <div className="pt-8 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full font-medium mb-6">
                <Icon name="User" size={16} className="mr-2" />
                Обо мне
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-brand-primary mb-6 font-heading tracking-tight">
                Моя экспертиза
              </h1>
              <p className="text-xl text-brand-muted font-body max-w-3xl mx-auto leading-relaxed">
                Комплексный подход к развитию вашего бизнеса от опытного эксперта
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-6 text-lg font-body text-brand-muted leading-relaxed">
                  <p className="text-xl">
                    Более <span className="font-semibold text-brand-primary">20 лет</span> я занимаюсь управлением компаниями, проектами, автоматизацией процессов и цифровой трансформацией.
                  </p>
                  <p>
                    С <span className="font-semibold text-brand-primary">2019 года</span> как бизнес-трекер поработала с <span className="font-semibold text-brand-accent">более 280 командами</span>, чей общий годовой оборот <span className="font-semibold text-brand-accent">превышает 21 млрд ₽</span>.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Мои ключевые роли
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Strategic Architect */}
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Target" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  Стратегический архитектор
                </h3>
                <p className="text-gray-600 font-body">
                  Проектирую системы управления, которые превращают хаос в порядок и обеспечивают устойчивый рост бизнеса.
                </p>
              </div>

              {/* Growth Catalyst */}
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  Катализатор роста
                </h3>
                <p className="text-gray-600 font-body">
                  Запускаю процессы, которые ускоряют развитие компании и выводят собственника из операционной рутины.
                </p>
              </div>

              {/* AI Futurist */}
              <div className="bg-white rounded-xl p-8 shadow-lg card-hover">
                <div className="w-16 h-16 bg-brand-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Bot" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">
                  AI-футурист
                </h3>
                <p className="text-gray-600 font-body">
                  Внедряю искусственный интеллект в бизнес-процессы, подготавливая компании к будущему уже сегодня.
                </p>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Моя ключевая экспертиза
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Глубокое понимание и внедрение ИИ в бизнес-процессы (CRM, аналитика, автоматизация)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Бизнес-трекинг и управление проектами (OKR, KPI, Agile)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Разработка стратегий: маркетинг, продажи, цифровая трансформация</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Запуск и масштабирование стартапов</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Оптимизация бизнес-процессов, внедрение CRM, бережливое производство</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-brand-accent mt-1 flex-shrink-0" />
                  <span className="text-gray-600 font-body">Проведение стратегических сессий и фасилитация</span>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Значимые достижения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">Рост оборота в 8 раз</h3>
                <p className="font-body">Увеличила оборот компании более чем в 8 раз за период работы</p>
              </div>
              <div className="bg-gradient-to-br from-brand-accent to-yellow-500 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">Открытие головного офиса</h3>
                <p className="font-body">Открыла с нуля головной офис компании в г. Москва</p>
              </div>
              <div className="bg-gradient-to-br from-brand-navy to-purple-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">Контракт на 500 млн ₽</h3>
                <p className="font-body">Участвовала в заключении контракта с госкорпорацией на сумму более 500 млн рублей</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-brand-accent rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4 font-heading">160 млн ₽ инвестиций</h3>
                <p className="font-body">Привлекла венчурный фонд, готовый инвестировать 160 млн рублей</p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Образование
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div 
                    className="h-48 bg-gray-200 cursor-pointer"
                    onClick={() => openLightbox(edu.image)}
                  >
                    <img 
                      src={edu.image} 
                      alt={edu.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900 font-heading">{edu.title}</h3>
                      <span className="text-sm text-brand-blue font-medium bg-blue-50 px-2 py-1 rounded">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 font-body">{edu.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Сертификаты и благодарности
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                  <div 
                    className="h-48 bg-gray-200 cursor-pointer"
                    onClick={() => openLightbox(cert.image)}
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold text-gray-900 font-heading line-clamp-2">
                        {cert.title}
                      </h3>
                      <span className="text-xs text-brand-blue font-medium bg-blue-50 px-2 py-1 rounded ml-2 flex-shrink-0">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-heading">
                Благодарности от клиентов
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                    <div 
                      className="h-48 bg-gray-200 cursor-pointer"
                      onClick={() => openLightbox(testimonial.image)}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading">
                        {testimonial.title}
                      </h3>
                      <p className="text-gray-600 font-body text-sm">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Accelerators Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Эксперт в ведущих акселераторах
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg card-hover border border-gray-100">
                <div className="w-20 h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Сколково" 
                    className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">Сколково</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg card-hover border border-gray-100">
                <div className="w-20 h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Growth Academy" 
                    className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">Growth Academy</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg card-hover border border-gray-100">
                <div className="w-20 h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Университет 20.35" 
                    className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">Университет 20.35</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg card-hover border border-gray-100">
                <div className="w-20 h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Бизнес-Уикенд" 
                    className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">Бизнес-Уикенд</span>
              </div>
              
              <div className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg card-hover border border-gray-100">
                <div className="w-20 h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/80/80" 
                    alt="Школа молодого предпринимателя" 
                    className="w-16 h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">Школа молодого предпринимателя</span>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-brand-navy rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                Готовы изменить свой бизнес?
              </h2>
              <p className="text-xl text-white/90 mb-8 font-body">
                Посмотрите детальные кейсы работы или обсудим ваш проект
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/cases'}
                  className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 text-lg font-semibold"
                >
                  Изучить кейсы
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/contact'}
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-navy px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Связаться со мной
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Увеличенное изображение"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <Icon name="X" size={32} />
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default About;