import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout = ({ children, currentPage = '' }: LayoutProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTelegramClick = () => {
    window.open('https://t.me/natalyatomasheva', '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-brand-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/">
              <Logo />
            </Link>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/about" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'about' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Обо мне
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'services' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Услуги
              </Link>
              <Link 
                to="/cases" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'cases' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Кейсы
              </Link>
              <Link 
                to="/reviews" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'reviews' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Отзывы
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'blog' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Блог
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors font-body font-medium ${
                  currentPage === 'contact' 
                    ? 'text-brand-accent font-semibold' 
                    : 'text-gray-600 hover:text-brand-primary'
                }`}
              >
                Контакты
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <Button 
              onClick={handleTelegramClick}
              className="hidden md:flex modern-button bg-brand-accent hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} className="text-brand-primary" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg transition-colors font-body font-medium ${
                  currentPage === 'about' 
                    ? 'bg-brand-accent text-white font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                }`}
              >
                Обо мне
              </Link>
              <Link 
                to="/services" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg transition-colors font-body font-medium ${
                  currentPage === 'services' 
                    ? 'bg-brand-accent text-white font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                }`}
              >
                Услуги
              </Link>
              <Link 
                to="/cases" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg transition-colors font-body font-medium ${
                  currentPage === 'cases' 
                    ? 'bg-brand-accent text-white font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                }`}
              >
                Кейсы
              </Link>
              <Link 
                to="/reviews" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg transition-colors font-body font-medium ${
                  currentPage === 'reviews' 
                    ? 'bg-brand-accent text-white font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                }`}
              >
                Отзывы
              </Link>
              <Link 
                to="/blog" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg transition-colors font-body font-medium ${
                  currentPage === 'blog' 
                    ? 'bg-brand-accent text-white font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                }`}
              >
                Блог
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`block py-3 px-4 rounded-lg transition-colors font-body font-medium ${
                  currentPage === 'contact' 
                    ? 'bg-brand-accent text-white font-semibold' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
                }`}
              >
                Контакты
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-gray-100">
                <Button 
                  onClick={() => {
                    handleTelegramClick();
                    closeMobileMenu();
                  }}
                  className="w-full bg-brand-accent hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg"
                >
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Связаться
                </Button>
              </div>
            </div>
          </div>
        )}
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