import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ConsultationModal from '@/components/ConsultationModal';

const HeroSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const navigate = useNavigate();

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
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-24">
            <div className="text-2xl font-semibold text-slate-900 font-heading tracking-tight">
              Наталья Томашева
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="/about" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Обо мне</a>
              <a href="/services" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Услуги</a>
              <a href="/cases" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Кейсы</a>
              <a href="/reviews" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Отзывы</a>
              <a href="/blog" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Блог</a>
              <a href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Контакты</a>
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={handleTelegramClick}
              className="hidden md:flex modern-button"
              variant="default"
              size="default"
            >
              <Icon name="Send" size={18} />
              Связаться
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={22} className="text-slate-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => {
                  navigate('/about');
                  closeMobileMenu();
                }}
                className="block w-full text-left py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Обо мне
              </button>
              <button 
                onClick={() => {
                  navigate('/services');
                  closeMobileMenu();
                }}
                className="block w-full text-left py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Услуги
              </button>
              <button 
                onClick={() => {
                  navigate('/cases');
                  closeMobileMenu();
                }}
                className="block w-full text-left py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Кейсы
              </button>
              <button 
                onClick={() => {
                  navigate('/reviews');
                  closeMobileMenu();
                }}
                className="block w-full text-left py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Отзывы
              </button>
              <button 
                onClick={() => {
                  navigate('/blog');
                  closeMobileMenu();
                }}
                className="block w-full text-left py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Блог
              </button>
              <button 
                onClick={() => {
                  navigate('/contact');
                  closeMobileMenu();
                }}
                className="block w-full text-left py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
              >
                Контакты
              </button>
              
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
      <section className="pt-40 pb-32 bg-white relative overflow-hidden">
        {/* Minimalist Decorative Elements */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-br from-brand-accent/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-100/50 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          {/* Родительский Flex-контейнер */}
          <div className="md:flex md:items-center md:gap-16">
            
            {/* Левая колонка (Текст) */}
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-heading tracking-tight text-slate-900">
                <span className="block">Наталья</span>
                <span className="block text-gradient">Томашёва</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 leading-relaxed font-body text-slate-600 max-w-2xl">
                Эксперт по системному росту бизнеса и внедрению ИИ. 
                <span className="text-slate-900 font-semibold">Более 280 команд за 5 лет, 21 млрд общий годовой оборот</span> клиентов.
              </p>
              
              <div className="flex justify-center md:justify-start flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="shadow-sm hover:shadow-lg transition-all"
                >
                  <Icon name="Calendar" size={20} />
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/cases')}
                  className="hover:bg-slate-50 transition-all"
                >
                  <Icon name="TrendingUp" size={20} />
                  Смотреть кейсы
                </Button>
              </div>
            </div>

            {/* Правая колонка (Фото) */}
            <div className="mt-8 md:mt-0 md:w-2/5 flex justify-center">
              <div className="relative">
                {/* Subtle Shadow */}
                <div className="absolute inset-0 bg-slate-200/30 rounded-3xl blur-2xl transform scale-110 -z-10"></div>
                
                {/* Main Image */}
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;