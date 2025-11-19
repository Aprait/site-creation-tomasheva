import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { problems, getServicesByProblem, type Service } from '@/data/chatbotData';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  options?: Option[];
  service?: Service;
}

interface Option {
  id: string;
  label: string;
  action: () => void;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
    }
  }, [isOpen]);

  const addMessage = (message: Omit<Message, 'id'>) => {
    setMessages(prev => [...prev, { ...message, id: Date.now().toString() }]);
  };

  const initChat = () => {
    addMessage({
      type: 'bot',
      text: 'Привет! Я цифровой помощник Натальи Томашёвой. Мы превращаем хаос в систему, используя силу ИИ и управленческих технологий.\n\nЧтобы я мог предложить релевантное решение, скажите, какая задача сейчас стоит наиболее остро?',
      options: problems.map(problem => ({
        id: problem.id,
        label: problem.userIntent,
        action: () => handleProblemSelect(problem.id)
      }))
    });
  };

  const handleProblemSelect = (problemId: string) => {
    const problem = problems.find(p => p.id === problemId);
    if (!problem) return;

    addMessage({
      type: 'user',
      text: problem.userIntent
    });

    setTimeout(() => {
      const services = getServicesByProblem(problemId);
      
      let responseText = '';
      switch (problemId) {
        case 'P_SALES':
          responseText = 'Понимаю. Продажи — это математика, а не магия. Давайте посмотрим на вашу проблему системно. У меня есть проверенные решения:';
          break;
        case 'P_OPERATIONS':
          responseText = 'Мы вступаем в эру ИИ, и это открывает беспрецедентные возможности. Давайте превратим операционный хаос в отлаженную систему:';
          break;
        case 'P_TEAM':
          responseText = 'Люди — это самый ценный актив. Когда команда работает неэффективно, страдает весь бизнес. Вот как мы можем помочь:';
          break;
        case 'P_STRATEGY':
          responseText = 'Стратегия — это не документ на полке, это живая навигационная карта. Предлагаю решения для кратного роста:';
          break;
      }

      addMessage({
        type: 'bot',
        text: responseText,
        options: services.map(service => ({
          id: service.id,
          label: service.title,
          action: () => handleServiceSelect(service)
        })).concat([{
          id: 'back',
          label: '← Вернуться к выбору проблемы',
          action: initChat
        }])
      });
    }, 500);
  };

  const handleServiceSelect = (service: Service) => {
    addMessage({
      type: 'user',
      text: service.title
    });

    setTimeout(() => {
      addMessage({
        type: 'bot',
        text: service.description + (service.price ? `\n\n💰 Инвестиции: ${service.price}` : ''),
        service,
        options: [
          {
            id: 'cta',
            label: service.cta,
            action: () => handleCTA(service)
          },
          {
            id: 'back',
            label: '← Посмотреть другие решения',
            action: initChat
          }
        ]
      });
    }, 500);
  };

  const handleCTA = (service: Service) => {
    addMessage({
      type: 'user',
      text: service.cta
    });

    setTimeout(() => {
      addMessage({
        type: 'bot',
        text: `Отлично! Чтобы обсудить "${service.title}", оставьте свои контакты, и Наталья свяжется с вами в ближайшее время.\n\n📧 Email: info@ntomasheva.ru\n📱 Telegram: @ntomasheva\n\nИли заполните форму на сайте через кнопку "Записаться на консультацию".`,
        options: [
          {
            id: 'restart',
            label: 'Посмотреть другие услуги',
            action: initChat
          }
        ]
      });
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage({
      type: 'user',
      text: inputValue
    });

    setInputValue('');

    setTimeout(() => {
      addMessage({
        type: 'bot',
        text: 'Спасибо за ваше сообщение! Для более точного ответа, пожалуйста, выберите проблему из меню выше или свяжитесь с Натальей напрямую:\n\n📧 info@ntomasheva.ru\n📱 @ntomasheva',
        options: [
          {
            id: 'restart',
            label: 'Вернуться к началу',
            action: initChat
          }
        ]
      });
    }, 500);
  };

  return (
    <>
      {/* Кнопка открытия чата */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-hover text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          aria-label="Открыть чат-консультант"
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Окно чата */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-ink-tertiary/10">
          {/* Хедер */}
          <div className="bg-gradient-to-r from-accent to-accent-hover text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="Bot" size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Консультант Натальи</h3>
                <p className="text-xs opacity-90">Онлайн</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.type === 'user'
                      ? 'bg-accent text-white'
                      : 'bg-white border border-ink-tertiary/10'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">
                    {message.text}
                  </p>
                  
                  {/* Опции */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={option.action}
                          className={`w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            option.id === 'back' || option.id === 'restart'
                              ? 'bg-ink-tertiary/5 hover:bg-ink-tertiary/10 text-ink-secondary'
                              : 'bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Инпут */}
          <div className="p-4 bg-white border-t border-ink-tertiary/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Напишите сообщение..."
                className="flex-1 px-4 py-2 rounded-lg border border-ink-tertiary/20 focus:outline-none focus:border-accent transition-colors text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="bg-accent hover:bg-accent-hover"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
