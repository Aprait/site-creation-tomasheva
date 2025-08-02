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
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="text-xl font-bold text-brand-primary font-heading tracking-tight">
              Наталья Томашева
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Обо мне</a>
              <a href="/services" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Услуги</a>
              <a href="/cases" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Кейсы</a>
              <a href="/reviews" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Отзывы</a>
              <a href="/blog" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Блог</a>
              <a href="/contact" className="text-gray-600 hover:text-brand-primary transition-colors font-body font-medium">Контакты</a>
            </div>
            <Button 
              onClick={handleTelegramClick}
              className="modern-button bg-brand-accent hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 modern-gradient relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/80 to-brand-accent/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="modern-fade-in text-white lg:order-1">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20">
                  <Icon name="Star" size={16} className="mr-2 text-yellow-400" />
                  Топ-эксперт Сколково
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-heading tracking-tight">
                <span className="block">Наталья</span>
                <span className="block text-gradient-white">Томашёва</span>
              </h1>
              
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed font-body text-white/90 max-w-2xl">
                Эксперт по системному росту бизнеса и внедрению ИИ. 
                <span className="text-white font-semibold"> Более 280 команд, 21 млрд ₽ общий оборот</span> клиентов.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center lg:text-left">
                  <div className="stats-number text-white">280+</div>
                  <div className="text-white/70 font-body font-medium">Команд</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="stats-number text-white">21</div>
                  <div className="text-white/70 font-body font-medium">Млрд ₽</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="stats-number text-white">15+</div>
                  <div className="text-white/70 font-body font-medium">Лет</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Image */}
            <div className="flex justify-center lg:justify-end lg:order-2">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform scale-105"></div>
                
                {/* Main Image */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl modern-card border-4 border-white/20">
                  <img 
                    src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                    alt="Наталья Томашева - бизнес-эксперт"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Badges */}
                  <div className="absolute -top-4 -right-4 bg-brand-success/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                    <Icon name="Award" size={16} className="inline mr-1" />
                    Эксперт года
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-brand-accent/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl font-semibold text-sm shadow-lg">
                    <Icon name="Users" size={16} className="inline mr-1" />
                    280+ команд
                  </div>
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