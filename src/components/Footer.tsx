import React, { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== ДЕСКТОПНАЯ ВЕРСИЯ (4 колонки) ===== */}
        {/* Скрыта по умолчанию, видна на экранах md и больше */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-8">
          {/* Колонка 1: О бренде */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-white">Наталья Томашёва</h3>
            <p className="text-gray-400 font-body mb-4">Бизнес-трекер, стратег. Превращаю хаос в систему.</p>
            <p className="text-gray-400 font-body text-sm">Более 280 команд за 5 лет, 21 млрд общий годовой оборот клиентов.</p>
          </div>
          
          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-white">Навигация</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/services" className="hover:text-white transition-colors font-body">Услуги</a></li>
              <li><a href="/cases" className="hover:text-white transition-colors font-body">Кейсы</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors font-body">Блог</a></li>
              <li><a href="/about" className="hover:text-white transition-colors font-body">Обо мне</a></li>
              <li><a href="/reviews" className="hover:text-white transition-colors font-body">Отзывы</a></li>
            </ul>
          </div>
          
          {/* Колонка 3: Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-white">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:n.tomasheva@foxmetod.ru" className="hover:text-white transition-colors font-body flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  n.tomasheva@foxmetod.ru
                </a>
              </li>
              <li>
                <a href="tel:+79220227225" className="hover:text-white transition-colors font-body flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 922 022-72-25
                </a>
              </li>
              <li>
                <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-body flex items-center">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          
          {/* Колонка 4: Призыв к действию */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading text-white">Готовы к росту?</h3>
            <p className="text-gray-400 mb-4 font-body">Давайте обсудим ваши задачи.</p>
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-brand-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Записаться на консультацию
            </Button>
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
              <ul className="space-y-2 text-gray-300">
                <li><a href="/services" className="hover:text-white transition-colors font-body">Услуги</a></li>
                <li><a href="/cases" className="hover:text-white transition-colors font-body">Кейсы</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors font-body">Блог</a></li>
                <li><a href="/about" className="hover:text-white transition-colors font-body">Обо мне</a></li>
                <li><a href="/reviews" className="hover:text-white transition-colors font-body">Отзывы</a></li>
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
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="mailto:n.tomasheva@foxmetod.ru" className="hover:text-white transition-colors font-body flex items-center">
                    <Icon name="Mail" size={16} className="mr-2" />
                    n.tomasheva@foxmetod.ru
                  </a>
                </li>
                <li>
                  <a href="tel:+79220227225" className="hover:text-white transition-colors font-body flex items-center">
                    <Icon name="Phone" size={16} className="mr-2" />
                    +7 922 022-72-25
                  </a>
                </li>
                <li>
                  <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-body flex items-center">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Общая информация */}
          <div className="pt-8 text-center">
            <h3 className="text-xl font-bold mb-4 font-heading text-white">Наталья Томашёва</h3>
            <p className="text-gray-400 mb-4 font-body text-sm">Эксперт по системному росту бизнеса и внедрению ИИ</p>
            <Button 
              onClick={() => window.location.href = '/contact'}
              className="bg-brand-accent hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>

        {/* Общая нижняя часть футера */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-gray-400 text-xs font-body text-center md:text-left">
              <p>© {currentYear} Наталья Томашева • ИП Томашева Н.Б. • ИНН: 667322943328</p>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span className="font-body">Создано с</span>
              <Icon name="Heart" size={12} className="text-red-400" />
              <span className="font-body">для роста бизнеса</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;