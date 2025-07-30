import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/natalyatomasheva', '_blank');
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-brand-navy font-heading">
              Наталья Томашева
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Услуги</a>
              <a href="#results" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Результаты</a>
              <a href="#clients" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Клиенты</a>
              <a href="#certificates" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Сертификаты</a>
              <a href="#contacts" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Контакты</a>
            </div>
            <Button 
              onClick={handleTelegramClick}
              className="bg-brand-accent hover:bg-orange-500 text-white font-medium"
            >
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start lg:order-2">
              <div className="w-80 h-80 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl animate-scale-in ring-4 ring-white/20">
                <img 
                  src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                  alt="Наталья Томашева - бизнес-эксперт"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in text-white lg:order-1">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading">
                Наталья Томашева
              </h1>
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed font-body opacity-90">
                Эксперт по системному росту бизнеса и внедрению ИИ в бизнес-процессы, бизнес-трекер (грейд В+ Skolkovo), OKR-коуч, модератор и фасилитатор стратегических сессий
              </p>
              <Button 
                size="lg" 
                onClick={handleTelegramClick}
                className="bg-brand-accent hover:bg-orange-500 text-white px-8 py-4 text-lg font-medium animate-scale-in border-0 shadow-lg"
              >
                Связаться в Telegram
                <Icon name="MessageCircle" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;