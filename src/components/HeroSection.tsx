import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ConsultationModal from '@/components/ConsultationModal';

const HeroSection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleTelegramClick = () => {
    window.open('https://t.me/natalyatomasheva', '_blank');
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-text-primary">
              <span className="text-gradient">Наталья Томашева</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <a href="/about" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Обо мне</a>
              <a href="/services" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Услуги</a>
              <a href="/cases" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Кейсы</a>
              <a href="/reviews" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Отзывы</a>
              <a href="/blog" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Блог</a>
              <a href="/contact" className="text-text-secondary hover:text-text-primary transition-colors font-medium">Контакты</a>
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={handleTelegramClick}
              className="hidden md:flex"
              variant="default"
              size="default"
            >
              <Icon name="MessageSquare" size={18} />
              Написать в Telegram
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-lg hover:bg-dark-surface transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name="Menu" size={22} className="text-text-primary" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-bg">
        {/* Abstract 3D Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-brand-primary/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgb3BhY2l0eT0iMC40Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Subtitle */}
            <p className="text-brand-primary font-semibold text-lg mb-6 tracking-wide uppercase">
              Эксперт по системному росту бизнеса
            </p>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-text-primary">
              Масштабирую бизнес с помощью
              <span className="text-gradient block mt-2">искусственного интеллекта</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              Более 280 команд за 5 лет увеличили выручку в среднем на 40% благодаря внедрению ИИ-технологий и системному подходу
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
              <div className="glass-effect-light rounded-2xl p-6">
                <div className="text-4xl font-bold text-brand-primary mb-2">21+ млрд ₽</div>
                <div className="text-text-secondary">Общий оборот клиентов</div>
              </div>
              <div className="glass-effect-light rounded-2xl p-6">
                <div className="text-4xl font-bold text-brand-primary mb-2">280+</div>
                <div className="text-text-secondary">Команд прошли трекинг</div>
              </div>
              <div className="glass-effect-light rounded-2xl p-6">
                <div className="text-4xl font-bold text-brand-primary mb-2">×8</div>
                <div className="text-text-secondary">Максимальный рост</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                onClick={() => setIsConsultationModalOpen(true)}
                className="group"
              >
                <Icon name="Calendar" size={20} />
                Записаться на консультацию
                <Icon name="ArrowRight" size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/cases')}
                className="group"
              >
                <Icon name="TrendingUp" size={20} />
                Изучить кейсы
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-tertiary animate-bounce">
          <Icon name="ChevronDown" size={32} />
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