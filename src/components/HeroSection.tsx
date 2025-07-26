import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-[#1E3A8A]">
              Наталья Томашева
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Услуги</a>
              <a href="#experience" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Опыт</a>
              <a href="#results" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Результаты</a>
              <a href="#contacts" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Контакты</a>
            </div>
            <Button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Наталья <span className="text-[#1E3A8A]">Томашева</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Эксперт по внедрению ИИ в бизнес-процессы, бизнес-трекер (грейд B+ Skolkovo), OKR-коуч
              </p>
              <Button 
                size="lg" 
                className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-4 text-lg animate-scale-in"
              >
                Получить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                  alt="Наталья Томашева - бизнес-эксперт"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;