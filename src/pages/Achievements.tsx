import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import ConsultationModal from '@/components/ConsultationModal';

const Achievements = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

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
    { title: "Бизнес-трекинг Сколково", image: "/api/placeholder/300/400", year: "2023" },
    { title: "OKR Coach Certification", image: "/api/placeholder/300/400", year: "2022" },
    { title: "Agile Project Management", image: "/api/placeholder/300/400", year: "2022" },
    { title: "Strategic Planning Expert", image: "/api/placeholder/300/400", year: "2021" },
    { title: "Digital Transformation", image: "/api/placeholder/300/400", year: "2021" },
    { title: "AI Business Integration", image: "/api/placeholder/300/400", year: "2023" },
    { title: "Growth Hacking Specialist", image: "/api/placeholder/300/400", year: "2020" },
    { title: "CRM Implementation Expert", image: "/api/placeholder/300/400", year: "2019" }
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
    <Layout currentPage="achievements">
      <div className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Достижения и квалификация
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
              Документальное подтверждение экспертизы и профессиональных достижений 
              в области управления, стратегического планирования и цифровой трансформации
            </p>
          </section>

          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-ink mb-12 text-center font-heading">
              Высшее образование
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
                      <h3 className="text-lg font-bold text-ink font-heading">{edu.title}</h3>
                      <span className="text-sm text-accent font-medium bg-accent-light px-2 py-1 rounded">
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
            <h2 className="text-3xl font-bold text-ink mb-12 text-center font-heading">
              Курсы и сертификации
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          </section>

          {/* Testimonials Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-heading">
              Отзывы и благодарности
            </h2>
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
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-8 font-heading">
                Профессиональные достижения
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2 text-brand-accent">20+</div>
                  <div className="font-body">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-brand-accent">280+</div>
                  <div className="font-body">команд в портфеле</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-brand-accent">100+</div>
                  <div className="font-body">реализованных проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2 text-brand-accent">21B₽</div>
                  <div className="font-body">оборот клиентов</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-white border-2 border-brand-blue rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                Готовы работать с экспертом?
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-body max-w-2xl mx-auto">
                Мой опыт и квалификация — это фундамент для решения самых сложных бизнес-задач. 
                Давайте обсудим, как применить эти знания для развития вашей компании.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-brand-navy hover:bg-blue-900 text-white px-8 py-4 text-lg"
                >
                  Начать сотрудничество
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/about')}
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-8 py-4 text-lg"
                >
                  Узнать больше обо мне
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
      
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </Layout>
  );
};

export default Achievements;