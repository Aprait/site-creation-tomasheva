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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                Наталья Томашева
              </h3>
              <p className="text-gray-400 font-body leading-relaxed">
                Эксперт по системному росту бизнеса и внедрению ИИ в бизнес-процессы. 
                Помогаю компаниям масштабироваться и автоматизировать процессы.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold font-heading mb-4">Контакты</h4>
              <div className="space-y-3">
                <a 
                  href="https://t.me/natalyatomasheva" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <Icon name="MessageCircle" size={20} className="mr-3 text-blue-400 group-hover:text-blue-300" />
                  <span className="font-body">Telegram</span>
                </a>
                <a 
                  href="mailto:n.tomasheva@foxmetod.ru" 
                  className="flex items-center text-gray-400 hover:text-white transition-colors group"
                >
                  <Icon name="Mail" size={20} className="mr-3 text-blue-400 group-hover:text-blue-300" />
                  <span className="font-body">n.tomasheva@foxmetod.ru</span>
                </a>
                <div className="flex items-center text-gray-400">
                  <Icon name="MapPin" size={20} className="mr-3 text-blue-400" />
                  <span className="font-body">Москва, Россия</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold font-heading mb-6 text-white">Услуги</h4>
            <ul className="space-y-3">
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
            <h4 className="text-lg font-semibold font-heading mb-6 text-white">Компания</h4>
            <ul className="space-y-3">
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
            <h4 className="text-lg font-semibold font-heading mb-6 text-white">Поддержка</h4>
            <ul className="space-y-3">
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

        {/* CTA Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 font-heading">
              Готовы масштабировать бизнес?
            </h3>
            <p className="text-blue-100 mb-6 font-body max-w-2xl mx-auto">
              Получите бесплатную консультацию и узнайте, как системный подход поможет вашему бизнесу
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Получить консультацию
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm font-body text-center md:text-left">
              <p className="mb-1">© {currentYear} Наталья Томашева. Все права защищены.</p>
              <p>ИП Томашева Наталья Борисовна • ИНН: 667322943328 • ОГРНИП: 319665800095942</p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="font-body">Создано с</span>
              <Icon name="Heart" size={16} className="text-red-400" />
              <span className="font-body">для роста вашего бизнеса</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;