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
    <div className="min-h-screen bg-white text-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-line z-50">
        <div className="container">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/">
              <Logo />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
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
              className="hidden lg:flex"
              variant="default"
              size="default"
            >
              <Icon name="Send" size={18} />
              Связаться
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-bg-secondary transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} className="text-ink" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-line shadow-lg">
            <div className="container py-4 space-y-2">
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
                  className="w-full"
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
      <main className="pt-16 md:pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;