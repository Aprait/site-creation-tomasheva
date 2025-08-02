import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTelegramClick = () => {
    window.open('https://t.me/natalyatomasheva', '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-bold text-brand-primary font-heading tracking-tight">
              Наталья Томашева
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Обо мне</a>
              <a href="/services" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Услуги</a>
              <a href="/cases" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Кейсы</a>
              <a href="/reviews" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Отзывы</a>
              <a href="/blog" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Блог</a>
              <a href="/contact" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Контакты</a>
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={handleTelegramClick}
              className="hidden md:flex modern-button bg-brand-accent hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} className="text-brand-primary" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a 
                href="/about" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Обо мне
              </a>
              <a 
                href="/services" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Услуги
              </a>
              <a 
                href="/cases" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Кейсы
              </a>
              <a 
                href="/reviews" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Отзывы
              </a>
              <a 
                href="/blog" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Блог
              </a>
              <a 
                href="/contact" 
                onClick={closeMobileMenu}
                className="block py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Контакты
              </a>
              
              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-gray-100">
                <Button 
                  onClick={() => {
                    handleTelegramClick();
                    closeMobileMenu();
                  }}
                  className="w-full bg-brand-accent hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-40 modern-gradient relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/80 to-brand-accent/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          {/* Родительский Flex-контейнер */}
          <div className="md:flex md:items-center md:gap-12">
            
            {/* Левая колонка (Текст) */}
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-heading tracking-tight text-white">
                <span className="block">Наталья</span>
                <span className="block text-gradient-white">Томашёва</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 leading-relaxed font-body text-white/90">
                Эксперт по системному росту бизнеса и внедрению ИИ. 
                <span className="text-white font-semibold">Более 280 команд за 5 лет, 21 млрд общий годовой оборот</span> клиентов.
              </p>
              
              <div className="flex justify-center md:justify-start flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => window.location.href = '/contact'}
                  className="modern-button bg-white text-brand-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl"
                >
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = '/cases'}
                  className="modern-button border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Смотреть кейсы
                </Button>
              </div>
            </div>

            {/* Правая колонка (Фото) */}
            <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform scale-105"></div>
                
                {/* Main Image */}
                <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-3xl overflow-hidden shadow-2xl modern-card border-4 border-white/20">
                  <img 
                    src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                    alt="Наталья Томашева - бизнес-эксперт"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <Icon name="ChevronDown" size={24} />
        </div>
      </section>
    </>
  );
};

export default HeroSection;