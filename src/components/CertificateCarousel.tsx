import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  organization: string;
}

const certificates: Certificate[] = [
  {
    id: 'mim-link',
    title: 'Диплом МИМ ЛИНК',
    description: 'Профессиональная переподготовка по менеджменту',
    imageUrl: 'https://cdn.poehali.dev/files/0f5e3233-e593-4677-acc3-b0fcf87f3395.JPG',
    date: '17 июня 2011',
    organization: 'Международный Институт Менеджмента ЛИНК'
  },
  {
    id: 'open-university',
    title: 'Professional Diploma in Management',
    description: 'Teaching conducted in Russian language',
    imageUrl: 'https://cdn.poehali.dev/files/70e0e592-961a-43f5-9eec-40da806c5bf8.JPG',
    date: '31st July 2009',
    organization: 'The Open University'
  },
  {
    id: 'okr-coach',
    title: 'Professional OKR Coach',
    description: '6 модулей, 24 часа интенсивного обучения',
    imageUrl: 'https://cdn.poehali.dev/files/8a607dea-b189-4762-aefe-04e54fcae4ff.png',
    date: 'Март 2024',
    organization: 'OKR Academy'
  },
  {
    id: 'mfti-recognition',
    title: 'Благодарность МФТИ',
    description: 'За научное руководство выпускными квалификационными работами',
    imageUrl: 'https://cdn.poehali.dev/files/7f755f85-080b-442f-bb61-ab3aa4e9ebdb.png',
    date: '2022-2024',
    organization: 'Московский физико-технический институт'
  },
  {
    id: 'i2bf-recommendation',
    title: 'Рекомендательное письмо',
    description: 'Венчурный анализ и инвестиционная экспертиза',
    imageUrl: 'https://cdn.poehali.dev/files/73f61a30-6242-4d34-8878-533b0bc5662e.png',
    date: '2023',
    organization: 'I2BF Global Ventures'
  },
  {
    id: 'digital-transformation',
    title: 'Цифровая трансформация',
    description: 'Государственная программа цифровой трансформации',
    imageUrl: 'https://cdn.poehali.dev/files/705f4018-6841-4dd2-b9a8-2c91eda6768a.png',
    date: 'Январь 2024',
    organization: 'Минпромторг России'
  },
  {
    id: 'risk-management',
    title: 'Управление рисками проекта',
    description: 'Профессиональная переподготовка по риск-менеджменту',
    imageUrl: 'https://cdn.poehali.dev/files/d3f5e358-3c69-4073-8074-6078db8f34f8.png',
    date: 'Декабрь 2023',
    organization: 'НАДПО'
  }
];

const CertificateCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1);
  };

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    setIsAutoPlay(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
    setIsAutoPlay(true);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Сертификаты и достижения
      </h2>
      
      {/* Main Carousel */}
      <div className="relative mb-8">
        <div className="relative h-96 overflow-hidden rounded-lg shadow-lg bg-white">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((certificate) => (
              <div key={certificate.id} className="min-w-full h-full flex">
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {certificate.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {certificate.description}
                  </p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p><span className="font-semibold">Дата:</span> {certificate.date}</p>
                    <p><span className="font-semibold">Организация:</span> {certificate.organization}</p>
                  </div>
                  <button
                    onClick={() => openModal(certificate)}
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Icon name="ZoomIn" size={16} />
                    Увеличить сертификат
                  </button>
                </div>
                <div className="w-1/2 p-6">
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => openModal(certificate)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
        >
          <Icon name="ChevronLeft" size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200"
        >
          <Icon name="ChevronRight" size={24} />
        </button>

        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
          title={isAutoPlay ? "Остановить автопрокрутку" : "Включить автопрокрутку"}
        >
          <Icon name={isAutoPlay ? "Pause" : "Play"} size={16} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mb-8">
        {certificates.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Preview Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {certificates.map((certificate, index) => (
          <div
            key={certificate.id}
            className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 ${
              index === currentIndex 
                ? 'ring-2 ring-blue-500 scale-105' 
                : 'hover:scale-105 hover:shadow-lg'
            }`}
            onClick={() => goToSlide(index)}
          >
            <img
              src={certificate.imageUrl}
              alt={certificate.title}
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg z-10"
            >
              <Icon name="X" size={24} />
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{selectedCertificate.title}</h3>
              <img
                src={selectedCertificate.imageUrl}
                alt={selectedCertificate.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="mt-4 space-y-2">
                <p className="text-lg">{selectedCertificate.description}</p>
                <p><span className="font-semibold">Дата:</span> {selectedCertificate.date}</p>
                <p><span className="font-semibold">Организация:</span> {selectedCertificate.organization}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateCarousel;