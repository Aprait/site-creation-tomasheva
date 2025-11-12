import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Contact = () => {
  const navigate = useNavigate();
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
      <div className="pt-8 pb-16 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-semibold mb-6">
              <Icon name="MessageCircle" size={16} />
              Связь
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-ink mb-6 font-heading tracking-tight">
              Контакты
            </h1>
            <p className="text-xl text-ink-secondary font-body max-w-2xl mx-auto leading-relaxed">
              Свяжитесь со мной, чтобы обсудить, как я могу помочь вашему бизнесу расти
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-ink mb-6 font-heading">
                  Мои контакты
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center">
                      <Icon name="User" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink font-heading text-sm">Имя</div>
                      <div className="text-ink-tertiary font-body">Наталья Томашёва</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink font-heading text-sm">Email</div>
                      <a href="mailto:n.tomasheva@foxmetod.ru" className="text-ink-tertiary hover:text-accent transition-colors font-body">
                        n.tomasheva@foxmetod.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink font-heading text-sm">Телефон</div>
                      <a href="tel:+79220227225" className="text-ink-tertiary hover:text-accent transition-colors font-body">
                        +7 (922) 022-72-25
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink font-heading text-sm">Telegram</div>
                      <a href="https://t.me/natalyatomasheva" target="_blank" rel="noopener noreferrer" className="text-ink-tertiary hover:text-accent transition-colors font-body">
                        @natalyatomasheva
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-accent via-accent to-accent-hover rounded-3xl p-8 text-white relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-4 font-heading">
                    Быстрая связь
                  </h3>
                  <p className="mb-6 font-body text-white/90 leading-relaxed">
                    Для срочных вопросов рекомендую писать в Telegram — отвечаю быстрее всего
                  </p>
                  <Button 
                    onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
                    className="bg-white text-ink hover:bg-gray-100 w-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="MessageCircle" size={20} />
                    Написать в Telegram
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-sm border border-line/30 p-10">
              <h2 className="text-3xl font-bold text-ink mb-6 font-heading">
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
                  className="w-full bg-accent hover:bg-accent-hover text-white py-3 text-lg font-semibold shadow-sm hover:shadow-md transition-all"
                >
                  <Icon name="Send" size={20} />
                  Отправить сообщение
                </Button>
              </form>
              
              <p className="text-sm text-gray-500 mt-4 font-body">
                * Обязательные поля. Обычно отвечаю в течение 24 часов.
              </p>
            </div>

          </div>

          {/* CTA Section */}
          <section className="mt-20">
            <div className="bg-gradient-to-br from-ink via-ink-secondary to-ink rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <h2 className="text-4xl font-bold mb-6 font-heading">
                  Не знаете, с чего начать?
                </h2>
                <p className="text-lg lg:text-xl mb-10 font-body opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Изучите мои услуги и кейсы, чтобы понять, как я могу помочь именно вашему бизнесу
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg"
                    onClick={() => navigate('/services')}
                    className="bg-white text-ink hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Briefcase" size={18} />
                    Посмотреть услуги
                  </Button>
                  <Button 
                    size="lg"
                    onClick={() => navigate('/cases')}
                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
                  >
                    <Icon name="BookOpen" size={18} />
                    Изучить кейсы
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Contact;