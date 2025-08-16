import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ConsultationModal from '@/components/ConsultationModal';
import Logo from '@/components/Logo';
import { navigationLinks } from '@/constants/navigation';

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
      {/* Navigation - воздушная с тонкой линией */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-line z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Logo />
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <a 
                  key={link.pageName}
                  href={link.to} 
                  className="px-4 py-2 rounded-xl text-sm font-medium text-muted-ink hover:text-ink hover:bg-accent-06 transition-all duration-fast"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={handleTelegramClick}
              className="hidden lg:flex"
              variant="default"
              size="default"
            >
              <Icon name="Send" size={18} />
              Связаться
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-xl hover:bg-accent-06 transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={22} className="text-ink" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-line">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {navigationLinks.map((link) => (
                  <button 
                    key={link.pageName}
                    onClick={() => {
                      navigate(link.to);
                      closeMobileMenu();
                    }}
                    className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-muted-ink hover:text-ink hover:bg-accent-06 transition-all duration-fast"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              
              {/* Mobile CTA Button */}
              <div className="mt-4 pt-4 border-t border-line">
                <Button 
                  onClick={() => {
                    handleTelegramClick();
                    closeMobileMenu();
                  }}
                  className="w-full"
                  variant="default"
                  size="default"
                >
                  <Icon name="Send" size={18} />
                  Связаться в Telegram
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - воздушная верстка с большими отступами */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-white relative overflow-hidden">
        {/* Легкие декоративные элементы */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-06 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-06 rounded-full blur-3xl opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Левая колонка - Текст */}
            <div className="text-center lg:text-left">
              <h1 className="text-4.5xl md:text-5xl lg:text-5.5xl font-bold leading-tight tracking-tight text-ink mb-6">
                <span className="block">Наталья</span>
                <span className="block text-accent">Томашёва</span>
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed text-muted-ink mb-8 max-w-2xl">
                Эксперт по росту бизнеса и внедрению ИИ. Более 20 лет опыта в развитии и масштабировании компаний. 
                Основатель Консалтингового агентства FOXMetoD
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  variant="default"
                  className="shadow-sm"
                >
                  <Icon name="Calendar" size={20} />
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/cases')}
                  className="shadow-sm"
                >
                  <Icon name="TrendingUp" size={20} />
                  Смотреть кейсы
                </Button>
              </div>
            </div>

            {/* Правая колонка - Карточка с фото */}
            <div className="flex justify-center">
              <div className="relative group max-w-sm">
                {/* Карточка */}
                <div className="card p-6 md:p-8">
                  {/* Фото */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                    <img 
                      src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                      alt="Наталья Томашева - бизнес-эксперт"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Информация */}
                  <div className="text-center">
                    <h3 className="font-bold text-xl text-ink mb-4">Наталья Томашёва</h3>
                    
                    {/* Статистика */}
                    <div className="flex justify-center gap-8">
                      <div>
                        <div className="text-3xl font-bold text-accent mb-1">280+</div>
                        <div className="text-sm text-muted-ink">команд</div>
                      </div>
                      <div className="w-px bg-line"></div>
                      <div>
                        <div className="text-3xl font-bold text-accent mb-1">20</div>
                        <div className="text-sm text-muted-ink">лет опыта</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Индикатор скролла */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-ink animate-bounce">
          <Icon name="ChevronDown" size={28} />
        </div>
      </section>

      {/* Модальное окно консультации */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;