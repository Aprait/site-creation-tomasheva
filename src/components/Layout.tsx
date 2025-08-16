import React, { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-bg text-ink">
      {/* Navigation - воздушная и легкая */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-base",
        isScrolled ? "bg-white/95 backdrop-blur-lg border-b border-line shadow-sm" : "bg-transparent"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="relative z-10">
              <Logo />
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.pageName}
                  to={link.to}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-fast",
                    currentPage === link.pageName 
                      ? "text-accent bg-accent-06" 
                      : "text-muted-ink hover:text-ink hover:bg-accent-06"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button 
                onClick={handleTelegramClick}
                variant="default"
                size="default"
                className="ml-6"
              >
                <Icon name="Send" size={18} />
                Связаться
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-xl hover:bg-accent-06 transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={22} className="text-ink" />
            </button>
          </div>
        </div>

        {/* Mobile Menu - воздушное выпадающее меню */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-line">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.pageName}
                    to={link.to}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-fast",
                      currentPage === link.pageName 
                        ? "text-accent bg-accent-06" 
                        : "text-muted-ink hover:text-ink hover:bg-accent-06"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTA Button */}
              <div className="mt-4 pt-4 border-t border-line">
                <Button 
                  onClick={() => {
                    handleTelegramClick();
                    closeMobileMenu();
                  }}
                  variant="default"
                  size="default"
                  className="w-full"
                >
                  <Icon name="Send" size={18} />
                  Связаться в Telegram
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

// Утилита cn для объединения классов (временно здесь)
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default Layout;