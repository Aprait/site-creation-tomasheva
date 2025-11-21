import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  currentPage?: string;
  pageName: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({ to, children, currentPage, pageName, onClick, isMobile = false }: NavLinkProps) => {
  const isActive = currentPage === pageName;
  
  if (isMobile) {
    return (
      <Link 
        to={to} 
        onClick={onClick}
        className={`block py-3 px-4 rounded-lg transition-colors font-body font-medium ${
          isActive 
            ? 'bg-brand-accent text-white font-semibold' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-brand-primary'
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors ${
        isActive 
          ? 'text-accent font-semibold' 
          : 'text-ink-secondary hover:text-accent'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;