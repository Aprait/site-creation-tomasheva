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
    <div className="min-h-screen bg-white text-brand-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
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
              <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.84 6.38l-1.63 7.67c-.12.57-.44.71-.9.44l-2.48-1.83-1.2 1.15c-.13.13-.24.24-.5.24l.18-2.5 4.58-4.14c.2-.18-.04-.28-.31-.1l-5.66 3.56-2.44-.76c-.53-.17-.54-.53.11-.78l9.55-3.68c.44-.17.83.11.68.78z"/>
              </svg>
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