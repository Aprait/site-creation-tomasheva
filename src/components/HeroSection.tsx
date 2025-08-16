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
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-32 md:h-36">
            <Logo />
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {navigationLinks.map((link) => (
                <a 
                  key={link.pageName}
                  href={link.to} 
                  className="text-gray-600 hover:text-brand-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={handleTelegramClick}
              className="hidden md:flex bg-brand-accent hover:bg-orange-500 text-white"
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
              {navigationLinks.map((link) => (
                <button 
                  key={link.pageName}
                  onClick={() => {
                    navigate(link.to);
                    closeMobileMenu();
                  }}
                  className="block w-full text-left py-3 px-4 rounded-lg transition-colors font-body font-medium text-gray-600 hover:bg-gray-50 hover:text-brand-primary"
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
      <section className="pt-48 md:pt-56 pb-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-brand-accent/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-primary/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          {/* Родительский Flex-контейнер */}
          <div className="md:flex md:items-center md:gap-16">
            
            {/* Левая колонка (Текст) */}
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-heading tracking-tight">
                <span className="block text-brand-primary">Наталья</span>
                <span className="block text-brand-primary">Томашёва</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-12 leading-relaxed font-body text-gray-600 max-w-2xl">
                Эксперт по росту бизнеса и внедрению ИИ. Более 20 лет опыта в развитии и масштабировании компаний. Основатель Консалтингового агентства FOXMetoD
              </p>
              
              <div className="flex justify-center md:justify-start flex-col sm:flex-row gap-6">
                <Button 
                  size="lg" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-brand-accent hover:bg-orange-500 text-white shadow-lg hover:shadow-xl transition-all"
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
            <div className="mt-12 md:mt-0 md:w-2/5 flex justify-center">
              <div className="relative group">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-brand-primary/20 rounded-2xl blur-2xl transform scale-110 -z-10 group-hover:scale-125 transition-transform duration-500"></div>
                
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all duration-300">
                  {/* Image */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden mb-6">
                    <img 
                      src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                      alt="Наталья Томашева - бизнес-эксперт"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent"></div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-xl text-brand-primary mb-2">Наталья Томашёва</h3>
                    
                    
                    {/* Stats */}
                    <div className="flex justify-center gap-6 text-sm">
                      <div>
                        <div className="font-bold text-brand-accent text-lg">280+</div>
                        <div className="text-gray-500">команд</div>
                      </div>
                      <div className="border-l border-gray-200"></div>
                      <div>
                        <div className="font-bold text-brand-accent text-lg">20 лет</div>
                        <div className="text-gray-500">опыта</div>
                      </div>
                    </div>
                  </div>
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