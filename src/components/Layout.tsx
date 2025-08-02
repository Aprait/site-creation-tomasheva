import React from 'react';
import { Button } from '@/components/ui/button';
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-bold text-brand-navy font-heading">
              Наталья Томашева
            </a>
            <div className="hidden md:flex space-x-8">
              <a 
                href="/about" 
                className={`transition-colors font-body ${
                  currentPage === 'about' 
                    ? 'text-brand-navy font-medium' 
                    : 'text-gray-700 hover:text-brand-navy'
                }`}
              >
                Обо мне
              </a>
              <a 
                href="/services" 
                className={`transition-colors font-body ${
                  currentPage === 'services' 
                    ? 'text-brand-navy font-medium' 
                    : 'text-gray-700 hover:text-brand-navy'
                }`}
              >
                Услуги
              </a>
              <a 
                href="/cases" 
                className={`transition-colors font-body ${
                  currentPage === 'cases' 
                    ? 'text-brand-navy font-medium' 
                    : 'text-gray-700 hover:text-brand-navy'
                }`}
              >
                Кейсы
              </a>
              <a 
                href="/reviews" 
                className={`transition-colors font-body ${
                  currentPage === 'reviews' 
                    ? 'text-brand-navy font-medium' 
                    : 'text-gray-700 hover:text-brand-navy'
                }`}
              >
                Отзывы
              </a>
              <a 
                href="/blog" 
                className={`transition-colors font-body ${
                  currentPage === 'blog' 
                    ? 'text-brand-navy font-medium' 
                    : 'text-gray-700 hover:text-brand-navy'
                }`}
              >
                Блог
              </a>
              <a 
                href="/contact" 
                className={`transition-colors font-body ${
                  currentPage === 'contact' 
                    ? 'text-brand-navy font-medium' 
                    : 'text-gray-700 hover:text-brand-navy'
                }`}
              >
                Контакты
              </a>
            </div>
            <Button 
              onClick={handleTelegramClick}
              className="bg-brand-accent hover:bg-orange-500 text-white font-medium"
            >
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