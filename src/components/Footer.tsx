import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 font-heading">Наталья Томашева</h3>
            <p className="text-blue-200 font-body">Эксперт по внедрению ИИ в бизнес-процессы</p>
          </div>
          
          <div className="border-t border-blue-300/20 pt-6">
            <p className="text-lg font-semibold mb-3 font-body">
              © 2025 Наталья Томашева. Все права защищены.
            </p>
            
            <div className="text-sm text-blue-200 mb-4 font-body">
              <p>Индивидуальный предприниматель Томашева Наталья Борисовна</p>
              <p>ИНН: 667322943328, ОГРНИП: 319665800095942</p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              <a 
                href="#privacy" 
                className="hover:text-blue-200 transition-colors font-body underline"
              >
                Политика конфиденциальности
              </a>
              <a 
                href="https://t.me/natalyatomasheva" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-200 transition-colors font-body underline"
              >
                Связаться в Telegram
              </a>
              <a 
                href="mailto:tomasheva.natalia@yandex.ru" 
                className="hover:text-blue-200 transition-colors font-body underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;