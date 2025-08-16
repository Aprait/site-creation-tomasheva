import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import NavLink from '@/components/NavLink';
import { navigationLinks } from '@/constants/navigation';

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
              {navigationLinks.map((link) => (
                <NavLink 
                  key={link.pageName}
                  to={link.to}
                  currentPage={currentPage}
                  pageName={link.pageName}
                >
                  {link.label}
                </NavLink>
              ))}
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
              {navigationLinks.map((link) => (
                <NavLink 
                  key={link.pageName}
                  to={link.to}
                  currentPage={currentPage}
                  pageName={link.pageName}
                  onClick={closeMobileMenu}
                  isMobile
                >
                  {link.label}
                </NavLink>
              ))}
              
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