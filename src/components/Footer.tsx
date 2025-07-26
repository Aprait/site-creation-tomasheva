import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">© Томашева Наталья Борисовна, 2025</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-gray-200 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gray-200 transition-colors">Информация об ИП</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;