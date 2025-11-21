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
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16 md:h-18">
            <Logo />
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 bg-gray-50 rounded-full px-6 py-2">
              {navigationLinks.map((link, index) => (
                <React.Fragment key={link.pageName}>
                  <a 
                    href={link.to} 
                    className="text-ink-secondary hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                  {index < navigationLinks.length - 1 && (
                    <div className="w-px h-4 bg-gray-300"></div>
                  )}
                </React.Fragment>
              ))}
              {/* Админские ссылки - видны только при разработке */}
              {window.location.hostname === 'localhost' && (
                <>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <a 
                    href="/admin/clients" 
                    className="text-orange-600 hover:text-orange-700 transition-colors text-sm font-medium"
                  >
                    👥 Клиенты
                  </a>
                  <div className="w-px h-4 bg-gray-300"></div>
                  <a 
                    href="/admin/certificates" 
                    className="text-orange-600 hover:text-orange-700 transition-colors text-sm font-medium"
                  >
                    🏆 Сертификаты
                  </a>
                </>
              )}
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={() => setIsConsultationModalOpen(true)}
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 h-11 text-sm font-medium shadow-sm"
              variant="default"
              size="default"
            >
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
                  className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-4 rounded-lg shadow-sm"
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
      <section className="pt-24 md:pt-28 pb-12 md:pb-16 bg-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
          {/* Родительский Flex-контейнер */}
          <div className="md:flex md:items-center md:gap-16">
            
            {/* Левая колонка (Текст) */}
            <div className="text-center md:text-left md:w-3/5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading tracking-tight text-ink">
                Наталья Томашёва
              </h1>
              
              <p className="text-lg md:text-xl mb-8 leading-relaxed font-body text-ink-tertiary max-w-2xl">
                Эксперт по росту бизнеса и внедрению ИИ. Более 20 лет опыта в развитии и масштабировании компаний
              </p>
              
              <div className="flex justify-center md:justify-start flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-accent hover:bg-accent-hover text-white rounded-xl px-8 h-14 text-base font-medium shadow-sm"
                >
                  Записаться на консультацию
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/cases')}
                  className="border-line text-ink hover:border-accent hover:bg-accent-lighter rounded-xl px-8 h-14 text-base font-medium"
                >
                  Смотреть кейсы
                </Button>
              </div>
            </div>

            {/* Правая колонка (Фото) */}
            <div className="mt-16 md:mt-0 md:w-2/5 flex justify-center">
              <div className="relative">
                {/* Image */}
                <div className="relative w-72 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                    alt="Наталья Томашева - бизнес-эксперт"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                
                {/* Stats Card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-line/30">
                  <div className="flex gap-8">
                    <div>
                      <div className="font-bold text-ink text-2xl">280+</div>
                      <div className="text-ink-tertiary text-sm font-medium">команд</div>
                    </div>
                    <div className="border-l border-line"></div>
                    <div>
                      <div className="font-bold text-ink text-2xl">20</div>
                      <div className="text-ink-tertiary text-sm font-medium">лет опыта</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
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