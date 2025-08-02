import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout = ({ children, currentPage = '' }: LayoutProps) => {
  const handleTelegramClick = () => {
    window.open('https://t.me/natalyatomasheva', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-brand-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="/" className="text-xl font-bold text-brand-primary font-heading tracking-tight hover:text-brand-accent transition-colors">
              Наталья Томашева
            </a>
            <div className="hidden md:flex space-x-8">
              <a 
                href="/about" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'about' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Обо мне
              </a>
              <a 
                href="/services" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'services' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Услуги
              </a>
              <a 
                href="/cases" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'cases' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Кейсы
              </a>
              <a 
                href="/reviews" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'reviews' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Отзывы
              </a>
              <a 
                href="/blog" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'blog' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Блог
              </a>
              <a 
                href="/contact" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'contact' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Контакты
              </a>
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

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;