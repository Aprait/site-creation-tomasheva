import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const handleTelegramClick = () => {
    window.open('https://t.me/natalyatomasheva', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:n.tomasheva@foxmetod.ru', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+79220227225', '_blank');
  };

  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-brand-light to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
            Давайте обсудим ваши задачи
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto leading-relaxed">
            Лучший способ начать диалог — написать мне в Telegram. 
            Я оперативно отвечаю и мы сможем быстро договориться о встрече.
          </p>
        </div>
        
        {/* Main CTA */}
        <div className="text-center mb-16">
          <Button 
            onClick={handleTelegramClick}
            size="lg"
            className="bg-brand-accent hover:bg-orange-500 text-white px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Написать в Telegram
            <Icon name="MessageCircle" size={24} className="ml-3" />
          </Button>
        </div>

        {/* Alternative contacts */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-heading">
            Альтернативные способы связи:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              onClick={handleEmailClick}
              className="flex items-center p-6 rounded-xl border border-gray-200 hover:border-brand-navy hover:shadow-lg transition-all duration-300 cursor-pointer card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl flex items-center justify-center mr-4">
                <Icon name="Mail" size={28} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1 font-heading">Email</div>
                <div className="text-brand-navy font-medium font-body">n.tomasheva@foxmetod.ru</div>
              </div>
            </div>

            <div 
              onClick={handlePhoneClick}
              className="flex items-center p-6 rounded-xl border border-gray-200 hover:border-brand-navy hover:shadow-lg transition-all duration-300 cursor-pointer card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl flex items-center justify-center mr-4">
                <Icon name="Phone" size={28} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1 font-heading">Телефон</div>
                <div className="text-brand-navy font-medium font-body">+7 (922) 022-72-25</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of contact */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Clock" size={24} className="text-brand-navy" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 font-heading">Быстрый ответ</h4>
            <p className="text-gray-600 text-sm font-body">Отвечаю в течение 2-4 часов в рабочее время</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={24} className="text-brand-navy" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 font-heading">Персональный подход</h4>
            <p className="text-gray-600 text-sm font-body">Индивидуальное решение для каждого проекта</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" size={24} className="text-brand-navy" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2 font-heading">Проверенный опыт</h4>
            <p className="text-gray-600 text-sm font-body">250+ успешно завершенных проектов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;