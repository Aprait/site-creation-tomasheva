import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    preferredTime: '',
    consultationType: 'business-growth'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = async (data: typeof formData) => {
    // TODO: Заменить на ваши данные бота
    const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
    const CHAT_ID = 'YOUR_CHAT_ID_HERE';
    
    const message = `
🎯 *Новая заявка на консультацию*

👤 *Имя:* ${data.name}
📧 *Email:* ${data.email}
📞 *Телефон:* ${data.phone}
🏢 *Компания:* ${data.company || 'Не указана'}
🔥 *Тип консультации:* ${getConsultationTypeName(data.consultationType)}
⏰ *Предпочитаемое время:* ${data.preferredTime || 'Любое'}

💬 *Сообщение:*
${data.message || 'Не указано'}

---
Заявка с сайта ntomasheva.ru
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      return true;
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      return false;
    }
  };

  const getConsultationTypeName = (type: string) => {
    const types = {
      'business-growth': 'Рост бизнеса',
      'ai-implementation': 'Внедрение ИИ',
      'strategic-planning': 'Стратегическое планирование',
      'business-tracking': 'Бизнес-трекинг',
      'team-management': 'Управление командой',
      'other': 'Другое'
    };
    return types[type as keyof typeof types] || type;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Валидация
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Пожалуйста, заполните обязательные поля');
      setIsSubmitting(false);
      return;
    }

    // Отправка в Telegram
    const success = await sendToTelegram(formData);
    
    if (success) {
      setIsSubmitted(true);
      // Сброс формы через 3 секунды
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          preferredTime: '',
          consultationType: 'business-growth'
        });
        onClose();
      }, 3000);
    } else {
      alert('Произошла ошибка при отправке. Попробуйте позже или свяжитесь напрямую в Telegram.');
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-line/30">
          <div>
            <h2 className="text-2xl font-bold text-ink font-heading">
              Записаться на консультацию
            </h2>
            <p className="text-ink-tertiary font-body mt-1">
              Заполните форму и я свяжусь с вами в ближайшее время
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bg-secondary rounded-lg transition-colors"
          >
            <Icon name="X" size={24} className="text-ink-quaternary" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-ink mb-2 font-heading">
                Заявка отправлена!
              </h3>
              <p className="text-ink-tertiary font-body">
                Я получила вашу заявку и свяжусь с вами в ближайшее время
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Имя и Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-line/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="Ваше имя"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-line/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Телефон и Компания */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-line/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ink mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-line/30 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                    placeholder="Название компании"
                  />
                </div>
              </div>

              {/* Тип консультации */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Тип консультации
                </label>
                <select
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                >
                  <option value="business-growth">Рост бизнеса</option>
                  <option value="ai-implementation">Внедрение ИИ</option>
                  <option value="strategic-planning">Стратегическое планирование</option>
                  <option value="business-tracking">Бизнес-трекинг</option>
                  <option value="team-management">Управление командой</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              {/* Предпочитаемое время */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Предпочитаемое время консультации
                </label>
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors"
                  placeholder="Например: будни утром, выходные днем"
                />
              </div>

              {/* Сообщение */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Расскажите о ваших задачах
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors resize-none"
                  placeholder="Опишите ваши цели и задачи, которые хотели бы обсудить..."
                />
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-6 py-3"
                >
                  Отмена
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;