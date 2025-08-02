import React from 'react';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Бизнес-трекинг', href: '/services' },
    { name: 'Стратегические сессии', href: '/services' },
    { name: 'Внедрение ИИ', href: '/services' },
    { name: 'Консультации', href: '/contact' }
  ];

  const company = [
    { name: 'Обо мне', href: '/about' },
    { name: 'Кейсы', href: '/cases' },
    { name: 'Отзывы', href: '/reviews' },
    { name: 'Блог', href: '/blog' }
  ];

  const support = [
    { name: 'Контакты', href: '/contact' },
    { name: 'Политика конфиденциальности', href: '#privacy' },
    { name: 'Условия использования', href: '#terms' },
    { name: 'FAQ', href: '#faq' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        
        {/* Mobile Footer - Бутерброд */}
        <div className="lg:hidden">
          {/* Main Info - Always Visible */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2 font-heading text-white">
              Наталья Томашева
            </h3>
            <p className="text-gray-400 font-body text-sm mb-4">
              Эксперт по системному росту бизнеса и внедрению ИИ
            </p>
            
            {/* Quick Contacts */}
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="tel:+79220227225" 
                className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={20} className="mb-1 text-blue-400" />
                <span className="text-xs font-body">Звонок</span>
              </a>
              <a 
                href="mailto:n.tomasheva@foxmetod.ru" 
                className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={20} className="mb-1 text-blue-400" />
                <span className="text-xs font-body">Email</span>
              </a>
              <a 
                href="https://t.me/natalyatomasheva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={20} className="mb-1 text-blue-400" />
                <span className="text-xs font-body">Telegram</span>
              </a>
            </div>
          </div>

          {/* Compact Navigation */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <h4 className="text-sm font-bold font-heading mb-2 text-white">Навигация</h4>
              <div className="space-y-1 text-xs">
                <a href="/about" className="block text-gray-400 hover:text-white transition-colors font-body">Обо мне</a>
                <a href="/services" className="block text-gray-400 hover:text-white transition-colors font-body">Услуги</a>
                <a href="/cases" className="block text-gray-400 hover:text-white transition-colors font-body">Кейсы</a>
                <a href="/reviews" className="block text-gray-400 hover:text-white transition-colors font-body">Отзывы</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-heading mb-2 text-white">Быстрые ссылки</h4>
              <div className="space-y-1 text-xs">
                <a href="/contact" className="block text-gray-400 hover:text-white transition-colors font-body">Контакты</a>
                <a href="/blog" className="block text-gray-400 hover:text-white transition-colors font-body">Блог</a>
                <a href="#privacy" className="block text-gray-400 hover:text-white transition-colors font-body">Конфиденциальность</a>
                <a href="#faq" className="block text-gray-400 hover:text-white transition-colors font-body">FAQ</a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Footer - 4 Колонки */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-heading text-white">
              Наталья Томашева
            </h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">
              Эксперт по системному росту бизнеса и внедрению ИИ
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a 
                href="tel:+79220227225" 
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={16} className="mr-2 text-blue-400" />
                <span className="font-body">+7 (922) 022-72-25</span>
              </a>
              <a 
                href="mailto:n.tomasheva@foxmetod.ru" 
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={16} className="mr-2 text-blue-400" />
                <span className="font-body">Email</span>
              </a>
              <a 
                href="https://t.me/natalyatomasheva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={16} className="mr-2 text-blue-400" />
                <span className="font-body">Telegram</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4 text-white">Услуги</h4>
            <ul className="space-y-2 text-sm">
              {services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors font-body"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4 text-white">Компания</h4>
            <ul className="space-y-2 text-sm">
              {company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors font-body"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4 text-white">Поддержка</h4>
            <ul className="space-y-2 text-sm">
              {support.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-gray-400 hover:text-white transition-colors font-body"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>


      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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