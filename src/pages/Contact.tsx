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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/0b2d6b04-0221-4374-9148-6065ed3c6851', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      setShowSuccess(true);
      setFormData({ name: '', contact: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Произошла ошибка при отправке сообщения. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
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
          <section className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-accent text-sm font-semibold mb-4">
              <Icon name="MessageCircle" size={16} />
              Связь
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-ink mb-4 font-heading tracking-tight">
              Контакты
            </h1>
            <p className="text-lg text-ink-secondary font-body max-w-2xl mx-auto leading-relaxed">
              Свяжитесь со мной, чтобы обсудить, как я могу помочь вашему бизнесу расти
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-ink mb-4 font-heading">
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
                    <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-ink font-heading text-sm">Email</div>
                      <a href="mailto:n.tomasheva@foxmetod.ru" className="text-ink-tertiary hover:text-accent transition-colors font-body">
                        n.tomasheva@foxmetod.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-light rounded-2xl flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-accent" />
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
              <div className="bg-gradient-to-br from-accent via-accent to-accent-hover rounded-3xl p-6 text-white relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12"></div>
                <div className="relative">
                  <h3 className="text-lg font-bold mb-3 font-heading">
                    Быстрая связь
                  </h3>
                  <p className="mb-4 font-body text-white/90 leading-relaxed text-sm">
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
              <h2 className="text-2xl font-bold text-ink mb-3 font-heading">
                Отправить сообщение
              </h2>
              <p className="text-ink-tertiary mb-8 font-body">
                Вы всегда можете связаться со мной по вопросам сотрудничества, партнёрства и выступлений
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ваше имя *"
                      required
                      className="font-body h-12 border-line/50 focus:border-accent"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Email *"
                      required
                      className="font-body h-12 border-line/50 focus:border-accent"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Сообщение *"
                    rows={6}
                    required
                    className="font-body border-line/50 focus:border-accent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent-hover text-white h-12 text-base font-semibold shadow-sm hover:shadow-md transition-all rounded-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      Отправить сообщение
                      <Icon name="ArrowRight" size={18} />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-ink-quaternary mt-6 font-body text-center">
                Обычно отвечаю в течение 24 часов
              </p>
              
              {showSuccess && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={20} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-900 font-heading">Сообщение отправлено!</h3>
                      <p className="text-sm text-green-700 font-body">Я свяжусь с вами в ближайшее время</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* CTA Section */}
          <section className="mt-20">
            <div className="bg-gradient-to-br from-accent via-accent to-accent-hover rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
              
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
                    className="bg-white text-accent hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
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