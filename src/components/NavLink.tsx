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
        className={`block py-3 px-4 rounded-xl transition-all duration-200 font-medium ${
          isActive 
            ? 'bg-accent-light text-accent font-semibold' 
            : 'text-ink-secondary hover:bg-bg-secondary hover:text-ink'
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link 
      to={to} 
      className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
        isActive 
          ? 'text-accent bg-accent-lighter' 
          : 'text-ink-secondary hover:text-ink hover:bg-bg-secondary'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;