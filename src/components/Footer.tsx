import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  useEffect(() => {
    const accordionToggles = document.querySelectorAll('.accordion-toggle');
    
    accordionToggles.forEach(button => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling as HTMLElement;
        const icon = button.querySelector('.accordion-icon') as HTMLElement;
        
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      accordionToggles.forEach(button => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
    <footer className="bg-white border-t border-line/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== ДЕСКТОПНАЯ ВЕРСИЯ (4 колонки) ===== */}
        {/* Скрыта по умолчанию, видна на экранах md и больше */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-6 lg:gap-8">
          {/* Колонка 1: Контакты */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 font-heading text-ink-secondary uppercase tracking-wider">
              Контакты
            </h3>
            <div className="space-y-3">
              <div className="space-y-3">
                <a 
                  href="tel:+79220227225" 
                  className="block text-ink-tertiary hover:text-ink transition-colors font-light text-sm"
                >
                  +7 922 022-72-25
                </a>
                <a 
                  href="mailto:n.tomasheva@foxmetod.ru" 
                  className="block text-ink-tertiary hover:text-ink transition-colors font-light text-sm"
                >
                  n.tomasheva@foxmetod.ru
                </a>
                <a 
                  href="https://t.me/natalyatomasheva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-ink-tertiary hover:text-ink transition-colors font-light text-sm"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Колонка 2: Услуги */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 font-heading text-ink-secondary uppercase tracking-wider">
              Услуги
            </h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Бизнес-трекинг</Link></li>
              <li><Link to="/services" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Стратегическое планирование</Link></li>
              <li><Link to="/services" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Внедрение ИИ</Link></li>
              <li><Link to="/services" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Консультации</Link></li>
            </ul>
          </div>

          {/* Колонка 3: Эксперт */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 font-heading text-ink-secondary uppercase tracking-wider">
              Эксперт
            </h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Обо мне</Link></li>
              <li><Link to="/cases" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Кейсы</Link></li>
              <li><Link to="/reviews" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Отзывы</Link></li>
              <li><Link to="/blog" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Блог</Link></li>
            </ul>
          </div>

          {/* Колонка 4: Поддержка */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold mb-4 font-heading text-ink-secondary uppercase tracking-wider">
              Поддержка
            </h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Контакты</Link></li>
              <li><a href="#privacy" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Политика конфиденциальности</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors font-body text-sm">Условия использования</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors font-body text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* ===== МОБИЛЬНАЯ ВЕРСИЯ (Аккордеон) ===== */}
        {/* Видна только на мобильных, скрыта на md и больше */}
        <div className="md:hidden space-y-4">
          {/* Аккордеон 1: Навигация */}
          <div>
            <button className="accordion-toggle flex justify-between items-center w-full text-left text-xl font-bold py-2 font-heading text-white">
              <span>Навигация</span>
              <Icon name="ChevronDown" size={20} className="transition-transform accordion-icon" />
            </button>
            <div className="accordion-content hidden pt-2 pl-4">
              <ul className="space-y-2">
                <li><Link to="/services" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Услуги</Link></li>
                <li><Link to="/cases" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Кейсы</Link></li>
                <li><Link to="/blog" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Блог</Link></li>
                <li><Link to="/about" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Обо мне</Link></li>
                <li><Link to="/reviews" className="text-ink-tertiary hover:text-ink transition-colors font-light text-sm">Отзывы</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Аккордеон 2: Контакты */}
          <div>
            <button className="accordion-toggle flex justify-between items-center w-full text-left text-xl font-bold py-2 font-heading text-white">
              <span>Контакты</span>
              <Icon name="ChevronDown" size={20} className="transition-transform accordion-icon" />
            </button>
            <div className="accordion-content hidden pt-2 pl-4">
              <ul className="space-y-2">
                <li>
                  <a href="mailto:n.tomasheva@foxmetod.ru" className="hover:text-white transition-colors font-body text-sm flex items-center">
                    <Icon name="Mail" size={16} className="mr-2" />
                    n.tomasheva@foxmetod.ru
                  </a>
                </li>
                <li>
                  <a href="tel:+79220227225" className="hover:text-white transition-colors font-body text-sm flex items-center">
                    <Icon name="Phone" size={16} className="mr-2" />
                    +7 922 022-72-25
                  </a>
                </li>
                <li>
                  <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-body text-sm flex items-center">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Общая информация */}
          <div className="pt-8 text-center">
            <h3 className="text-sm font-semibold mb-4 font-heading text-ink-secondary uppercase tracking-wider">Наталья Томашёва</h3>
            <p className="text-gray-400 mb-4 font-body text-sm">Эксперт по системному росту бизнеса и внедрению ИИ</p>
            <Button 
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-brand-accent hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm leading-tight"
            >
              <span className="block">Записаться на</span>
              <span className="block">консультацию</span>
            </Button>
          </div>
        </div>

        {/* Общая нижняя часть футера */}
        <div className="border-t border-line/30 mt-12 pt-6">
          <div className="text-center text-ink-quaternary text-xs font-light">
            <p>© {currentYear} Наталья Томашева</p>
          </div>
        </div>
      </div>
    </footer>
    
    {/* Consultation Modal */}
    <ConsultationModal 
      isOpen={isConsultationModalOpen}
      onClose={() => setIsConsultationModalOpen(false)}
    />
    </>
  );
};

export default Footer;