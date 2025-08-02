import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout currentPage="contact">
      <div className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Контакты
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-2xl mx-auto">
              Свяжитесь со мной, чтобы обсудить, как я могу помочь вашему бизнесу расти
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                  Мои контакты
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                      <Icon name="User" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 font-heading">Имя</div>
                      <div className="text-gray-600 font-body">Наталья Томашёва</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 font-heading">Email</div>
                      <a href="mailto:n.tomasheva@foxmetod.ru" className="text-gray-600 hover:text-brand-accent transition-colors font-body">
                        n.tomasheva@foxmetod.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 font-heading">Телефон</div>
                      <a href="tel:+79220227225" className="text-gray-600 hover:text-brand-accent transition-colors font-body">
                        +7 (922) 022-72-25
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 font-heading">Telegram</div>
                      <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-accent transition-colors font-body">
                        @natalyatomasheva
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-xl p-8 text-white">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Отправить сообщение
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-body">
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
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2 font-body">
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-body">
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
                  className="w-full bg-brand-accent hover:bg-orange-500 text-white py-3 text-lg font-medium"
                >
                  Отправить сообщение
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 font-body">
                * Обязательные поля. Обычно отвечаю в течение 24 часов.
              </p>
            </div>

          </div>

          {/* CTA Section */}
          <section className="mt-20 text-center">
            <div className="bg-brand-light border-2 border-brand-accent rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">
                Не знаете, с чего начать?
              </h2>
              <p className="text-xl text-gray-600 mb-8 font-body max-w-2xl mx-auto">
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
                  className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-8 py-4 text-lg"
                >
                  Изучить кейсы
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;