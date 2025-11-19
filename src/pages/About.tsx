import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import SharedEducationSection from '@/components/SharedEducationSection';
import SharedCertificatesSection from '@/components/SharedCertificatesSection';
import SharedAcceleratorsSection from '@/components/SharedAcceleratorsSection';

const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const education = [
    {
      title: "Международный Институт Менеджмента ЛИНК",
      subtitle: "Менеджер по специальности «Менеджмент организации»",
      image: "https://cdn.poehali.dev/files/fb0f3b05-946e-42a3-a475-acd84429a673.jpg",
      year: "2011"
    },
    {
      title: "Школа Бизнеса Открытого Британского Университета",
      subtitle: "Professional Diploma in Management",
      image: "https://cdn.poehali.dev/files/b44d02e9-fc85-4ed6-b11d-7e135d04a478.JPG",
      year: "2009"
    }
  ];

  const certificates = [
    { title: "Professional OKR Coach", image: "https://cdn.poehali.dev/files/8a607dea-b189-4762-aefe-04e54fcae4ff.png", year: "2024", organization: "OKR Academy" },
    { title: "Трекер, Грейд В+", image: "/api/placeholder/400/300", year: "2023", organization: "Школа стартапов Skolkovo" },
    { title: "Венчурный аналитик", image: "https://cdn.poehali.dev/files/73f61a30-6242-4d34-8878-533b0bc5662e.png", year: "2023", organization: "I2BF Global Ventures" },
    { title: "Цифровая трансформация", image: "https://cdn.poehali.dev/files/705f4018-6841-4dd2-b9a8-2c91eda6768a.png", year: "2024", organization: "Минпромторг России" },
    { title: "Управление рисками проекта", image: "https://cdn.poehali.dev/files/d3f5e358-3c69-4073-8074-6078db8f34f8.png", year: "2023", organization: "НАДПО" },
    { title: "Продуктовый трекинг", image: "/api/placeholder/400/300", year: "2025", organization: "ФРИИ" },
    { title: "Благодарственное письмо", image: "/api/placeholder/400/300", year: "2022", organization: "Форум «Сильные идеи для нового времени»" },
    { title: "Член жюри Effie Russia", image: "/api/placeholder/400/300", year: "2019", organization: "Effie Awards" },
    { title: "1-е место в питч-сессии", image: "/api/placeholder/400/300", year: "2022", organization: "«Россия – спортивная держава»" }
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
      <div className="pt-8 pb-16 bg-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-semibold mb-6">
                <Icon name="User" size={16} />
                Обо мне
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-ink mb-6 font-heading tracking-tight">
                Моя экспертиза
              </h1>
              <p className="text-xl text-ink-secondary font-body max-w-3xl mx-auto leading-relaxed">
                Комплексный подход к развитию вашего бизнеса от опытного эксперта
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="space-y-6 text-lg font-body text-ink-secondary leading-relaxed">
                  <p className="text-xl">
                    Более <span className="font-semibold text-ink">20 лет</span> я занимаюсь управлением компаниями, проектами, автоматизацией процессов и цифровой трансформацией.
                  </p>
                  <p>
                    С <span className="font-semibold text-ink">2019 года</span> как бизнес-трекер поработала с <span className="font-semibold text-accent">более 280 командами</span>, чей общий годовой оборот <span className="font-semibold text-accent">превышает 21 млрд ₽</span>.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-lg border border-line/30">
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
            <h2 className="text-4xl font-bold text-ink mb-12 text-center font-heading">
              Мои ключевые роли
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Strategic Architect */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-line/30 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="w-14 h-14 bg-accent-light rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Target" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-4 font-heading">
                  Стратегический архитектор
                </h3>
                <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                  Проектирую системы управления, которые превращают хаос в порядок и обеспечивают устойчивый рост бизнеса.
                </p>
              </div>

              {/* Growth Catalyst */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-line/30 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="w-14 h-14 bg-accent-light rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-4 font-heading">
                  Катализатор роста
                </h3>
                <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                  Запускаю процессы, которые ускоряют развитие компании и выводят собственника из операционной рутины.
                </p>
              </div>

              {/* AI Futurist */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-line/30 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="w-14 h-14 bg-accent-light rounded-2xl flex items-center justify-center mb-6">
                  <Icon name="Bot" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-ink mb-4 font-heading">
                  AI-футурист
                </h3>
                <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                  Внедряю искусственный интеллект в бизнес-процессы, подготавливая компании к будущему уже сегодня.
                </p>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-ink mb-12 text-center font-heading">
              Моя ключевая экспертиза
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-ink-tertiary font-body leading-relaxed text-[15px]">Глубокое понимание и внедрение ИИ в бизнес-процессы (CRM, аналитика, автоматизация)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-ink-tertiary font-body leading-relaxed text-[15px]">Бизнес-трекинг и управление проектами (OKR, KPI, Agile)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-ink-tertiary font-body leading-relaxed text-[15px]">Разработка стратегий: маркетинг, продажи, цифровая трансформация</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-ink-tertiary font-body leading-relaxed text-[15px]">Запуск и масштабирование стартапов</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-ink-tertiary font-body leading-relaxed text-[15px]">Оптимизация бизнес-процессов, внедрение CRM, бережливое производство</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <span className="text-ink-tertiary font-body leading-relaxed text-[15px]">Проведение стратегических сессий и фасилитация</span>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-ink mb-12 text-center font-heading">
              Значимые достижения
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-accent via-accent to-accent-hover rounded-3xl p-8 text-white shadow-sm border border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 font-heading">Рост оборота в 8 раз</h3>
                <p className="font-body text-white/90 leading-relaxed">Увеличила оборот компании более чем в 8 раз за период работы</p>
              </div>
              <div className="bg-gradient-to-br from-brand-accent via-brand-accent to-orange-600 rounded-3xl p-8 text-white shadow-sm border border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 font-heading">Открытие головного офиса</h3>
                <p className="font-body text-white/90 leading-relaxed">Открыла с нуля головной офис компании в г. Москва</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600 via-purple-600 to-purple-700 rounded-3xl p-8 text-white shadow-sm border border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 font-heading">Контракт на 500 млн ₽</h3>
                <p className="font-body text-white/90 leading-relaxed">Участвовала в заключении контракта с госкорпорацией на сумму более 500 млн рублей</p>
              </div>
              <div className="bg-gradient-to-br from-green-600 via-green-600 to-emerald-600 rounded-3xl p-8 text-white shadow-sm border border-white/10 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 font-heading">160 млн ₽ инвестиций</h3>
                <p className="font-body text-white/90 leading-relaxed">Привлекла венчурный фонд, готовый инвестировать 160 млн рублей</p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <SharedEducationSection />

          {/* Certificates Section */}
          <SharedCertificatesSection />

          {/* Accelerators Section */}
          <SharedAcceleratorsSection />

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-accent via-accent to-accent-hover rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <h2 className="text-4xl font-bold mb-6 font-heading">
                  Готовы изменить свой бизнес?
                </h2>
                <p className="text-xl text-white/90 mb-8 font-body max-w-2xl mx-auto leading-relaxed">
                  Посмотрите детальные кейсы работы или обсудим ваш проект
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/cases')}
                    className="bg-white text-accent hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="BookOpen" size={18} />
                    Изучить кейсы
                  </Button>
                  <Button 
                    size="lg"
                    onClick={() => navigate('/contact')}
                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
                  >
                    <Icon name="MessageCircle" size={18} />
                    Связаться со мной
                  </Button>
                </div>
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