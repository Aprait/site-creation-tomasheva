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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-line z-50">
        <div className="container">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Logo />
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationLinks.map((link) => (
                <a 
                  key={link.pageName}
                  href={link.to} 
                  className="px-4 py-2 rounded-lg text-ink-secondary hover:text-ink hover:bg-bg-secondary transition-all duration-200 font-medium"
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
              className="lg:hidden p-2.5 rounded-lg hover:bg-bg-secondary transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={22} className="text-ink" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-line shadow-lg">
            <div className="container py-4 space-y-2">
              {navigationLinks.map((link) => (
                <button 
                  key={link.pageName}
                  onClick={() => {
                    navigate(link.to);
                    closeMobileMenu();
                  }}
                  className="block w-full text-left py-3 px-4 rounded-xl transition-all duration-200 font-medium text-ink-secondary hover:bg-bg-secondary hover:text-ink"
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-gray-100">
                <Button 
                  onClick={() => {
                    handleTelegramClick();
                    closeMobileMenu();
                  }}
                  className="w-full"
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
      <section className="section bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent-lighter rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-lighter rounded-full blur-3xl opacity-30"></div>
        
        <div className="container relative">
          {/* Родительский Flex-контейнер */}
          <div className="md:flex md:items-center md:gap-16">
            
            {/* Левая колонка (Текст) */}
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="block">Наталья</span>
                <span className="block text-accent">Томашёва</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 leading-relaxed text-ink-secondary max-w-2xl">
                Эксперт по росту бизнеса и внедрению ИИ. Более 20 лет опыта в развитии и масштабировании компаний. Основатель Консалтингового агентства FOXMetoD
              </p>
              
              <div className="flex justify-center md:justify-start flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  variant="default"
                >
                  <Icon name="Calendar" size={20} />
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => navigate('/cases')}
                >
                  <Icon name="TrendingUp" size={20} />
                  Смотреть кейсы
                </Button>
              </div>
            </div>

            {/* Правая колонка (Фото) */}
            <div className="mt-12 md:mt-0 md:w-2/5 flex justify-center">
              <div className="relative group">
                {/* Card */}
                <div className="card hover-lift">
                  {/* Image */}
                  <div className="relative aspect-square max-w-[320px] rounded-2xl overflow-hidden mb-6">
                    <img 
                      src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                      alt="Наталья Томашева - бизнес-эксперт"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-xl text-ink mb-4">Наталья Томашёва</h3>
                    
                    
                    {/* Stats */}
                    <div className="flex justify-center gap-8 text-sm">
                      <div>
                        <div className="text-3xl font-bold text-accent">280+</div>
                        <div className="text-ink-tertiary text-sm">команд</div>
                      </div>
                      <div className="w-px bg-line"></div>
                      <div>
                        <div className="text-3xl font-bold text-accent">20</div>
                        <div className="text-ink-tertiary text-sm">лет опыта</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-ink-quaternary animate-bounce">
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