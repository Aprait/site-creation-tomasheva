import React from 'react';
import Icon from '@/components/ui/icon';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-heading">
              Готовы масштабировать бизнес?
            </h2>
            <p className="text-xl text-blue-100 mb-8 font-body max-w-2xl mx-auto">
              Получите бесплатную консультацию по развитию вашего бизнеса. 
              Обсудим конкретные задачи и найдем решения для роста.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </a>
              
              <a 
                href="https://t.me/natalyatomasheva"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в Telegram
              </a>
            </div>
            
            <div className="mt-8 text-blue-100/80 text-sm">
              <p>📞 +7 (922) 022-72-25 • 📧 n.tomasheva@foxmetod.ru</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;