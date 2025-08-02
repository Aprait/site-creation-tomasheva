import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-bold text-brand-navy font-heading">
              Наталья Томашева
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Обо мне</a>
              <a href="/services" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Услуги</a>
              <a href="/cases" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Кейсы</a>
              <a href="/achievements" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Достижения</a>
              <a href="/blog" className="text-gray-700 hover:text-brand-navy transition-colors font-body">Блог</a>
              <a href="/contact" className="text-brand-navy font-medium font-body">Контакты</a>
            </div>
            <Button 
              onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
              className="bg-brand-orange hover:bg-orange-600 text-white font-medium"
            >
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6 font-heading">
              Контакты
            </h1>
            <p className="text-xl text-brand-gray font-body max-w-2xl mx-auto">
              Свяжитесь со мной, чтобы обсудить, как я могу помочь вашему бизнесу расти
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-6 font-heading">
                  Мои контакты
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-brand-navy font-heading">Имя</div>
                      <div className="text-brand-gray font-body">Наталья Томашёва</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-brand-navy font-heading">Email</div>
                      <a href="mailto:n.tomasheva@foxmetod.ru" className="text-brand-gray hover:text-brand-orange transition-colors font-body">
                        n.tomasheva@foxmetod.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-brand-navy font-heading">Телефон</div>
                      <a href="tel:+79220227225" className="text-brand-gray hover:text-brand-orange transition-colors font-body">
                        +7 (922) 022-72-25
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-brand-navy font-heading">Telegram</div>
                      <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-orange transition-colors font-body">
                        @natalyatomasheva
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-brand-navy to-brand-orange rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4 font-heading">
                  Быстрая связь
                </h3>
                <p className="mb-6 font-body opacity-90">
                  Для срочных вопросов рекомендую писать в Telegram — отвечаю быстрее всего
                </p>
                <Button 
                  onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
                  className="bg-white text-brand-navy hover:bg-gray-100 w-full"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-brand-navy mb-6 font-heading">
                Отправить сообщение
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-2 font-body">
                    Ваше имя *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите ваше имя"
                    required
                    className="font-body"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-brand-gray mb-2 font-body">
                    Email или телефон *
                  </label>
                  <Input
                    type="text"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="email@example.com или +7 (900) 000-00-00"
                    required
                    className="font-body"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray mb-2 font-body">
                    Сообщение *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашей задаче или вопросе..."
                    rows={5}
                    required
                    className="font-body"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white py-3 text-lg font-medium"
                >
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              
              <p className="text-sm text-brand-gray mt-4 font-body">
                * Обязательные поля. Обычно отвечаю в течение 24 часов.
              </p>
            </div>

          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <div className="bg-brand-white border-2 border-brand-orange rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-brand-navy mb-6 font-heading">
                Не знаете, с чего начать?
              </h2>
              <p className="text-xl text-brand-gray mb-8 font-body max-w-2xl mx-auto">
                Изучите мои услуги и кейсы, чтобы понять, как я могу помочь именно вашему бизнесу
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/services'}
                  className="bg-brand-navy hover:bg-blue-900 text-white px-8 py-4 text-lg"
                >
                  Посмотреть услуги
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.location.href = '/cases'}
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-4 text-lg"
                >
                  Изучить кейсы
                </Button>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default Contact;