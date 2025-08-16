import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const FOXMetoD = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    problem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.problem) {
      toast.error('Пожалуйста, опишите вашу задачу');
      return;
    }
    toast.success('Заявка отправлена! Мы свяжемся с вами в течение 2-4 часов');
    setFormData({ name: '', contact: '', problem: '' });
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const painPoints = [
    {
      icon: 'UserX',
      text: 'Все держится на вас, невозможно уехать в отпуск и отпустить контроль'
    },
    {
      icon: 'Users',
      text: 'Команда не проявляет инициативу, а делегировать страшно из-за прошлого негативного опыта'
    },
    {
      icon: 'TrendingDown',
      text: 'Рост остановился, вы завязли в операционке и не успеваете работать над стратегией'
    },
    {
      icon: 'AlertCircle',
      text: 'Попытки самостоятельно внедрить изменения не приводят к результату, а только отнимают силы'
    }
  ];

  const products = [
    {
      title: 'Диагностика и наведение порядка',
      features: [
        'Проведем аудит бизнес-процессов, найдем «узкие места»',
        'Внедрим Отчет по ключевым метрикам (ОКМ) для прозрачного контроля',
        'Настроим управленческие планерки, которые экономят время'
      ]
    },
    {
      title: 'Построение системы управления',
      features: [
        'Разработаем оптимальную оргструктуру без дублирующих функций',
        'Создадим прозрачную систему мотивации на основе KPI',
        'Построим системный отдел продаж, который работает без «звезд»'
      ]
    },
    {
      title: 'Стратегическое партнерство и рост',
      features: [
        'Обеспечим регулярное сопровождение (бизнес-трекинг) для кратного роста',
        'Проведем стратегическую сессию для синхронизации всей команды',
        'Поможем найти новые рынки и адаптировать стратегию'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Корпоративные тренинги',
      items: [
        'Развитие навыков делегирования',
        'Формирование системного мышления',
        'Управление изменениями и конфликтами'
      ]
    },
    {
      title: 'Цифровая трансформация',
      items: [
        'Интеграция ИИ в бизнес-процессы',
        'Миграция на отечественные ERP/CRM',
        'Быстрый запуск таск-менеджеров'
      ]
    },
    {
      title: 'Усиление команды',
      items: [
        'Интерим-менеджмент (директор на аутсорсе)',
        'Экспертное участие в собеседованиях',
        'Услуги бизнес-инженеров для точечных задач'
      ]
    },
    {
      title: 'Отраслевые решения',
      items: [
        'Пакет для ритейла: «Эффективный магазин»',
        'Пакет для производства: «Старт к "Умной фабрике"»',
        'Пакет для АПК: «Системный агробизнес»'
      ]
    }
  ];

  const team = [
    {
      name: 'Наталья Томашёва',
      position: 'Генеральный директор',
      achievement: 'На предыдущих позициях увеличила оборот компании более чем в 8 раз',
      photo: 'https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG'
    },
    {
      name: 'Юлия Михеенко',
      position: 'Бизнес-трекер',
      achievement: 'Средний рост показателей команд, с которыми работала, — в 3,5 раза',
      photo: '/img/c70cc8b3-e4b7-443a-a476-7a96401af65a.jpg'
    },
    {
      name: 'Елена Харитоненко',
      position: 'HR-эксперт',
      achievement: 'Освободила руководителя компании от операционной деятельности на 70%',
      photo: '/img/9ef631ce-6053-4c5f-9fa9-cb6d039f81ab.jpg'
    }
  ];

  return (
    <Layout currentPage="foxmetod">
      <div className="min-h-screen bg-white">
        {/* Блок 1: Первый экран */}
        <section className="relative section-padding bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="relative container-width text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight">
              <span className="gradient-text">Превращаем ваш бизнес в систему,</span>
              <br/>
              <span className="text-gray-900">которая работает без вас</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Обретите свободу для стратегического роста, пока ваша команда слаженно достигает результатов
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-modern hover:shadow-modern-lg transition-all duration-300"
            >
              Получить план систематизации
            </Button>
          </div>
        </section>

        {/* Блок 2: Проблема */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-12 text-center">
              Для собственников, которые устали быть главным ресурсом своего бизнеса
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-modern hover:shadow-modern-lg transition-all border border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-accent/10 to-brand-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={point.icon} size={28} className="text-brand-accent" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Блок 3: Решение */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-8">
              Ваша свобода — через работающую систему
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Мы не решаем отдельные проблемы, а строим целостные, работающие системы, которые обеспечивают устойчивый рост вашего бизнеса. 
              Наша цель — помочь вам построить компанию, которая работает слаженно и эффективно, даря вам уверенность в будущем и удовольствие от дела вашей жизни.
            </p>
          </div>
        </section>

        {/* Блок 4: Продукты */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-12 text-center">
              Как мы построим вашу систему
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-modern hover:shadow-modern-lg transition-all border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {product.title}
                    </h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={20} className="text-brand-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Блок 5: Дополнительные компетенции */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-12 text-center">
              Решаем и другие ключевые задачи бизнеса
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 text-sm leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Блок 6: Команда */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-12 text-center">
              Гарантия результата — наша команда экспертов-практиков
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-modern hover:shadow-modern-lg transition-all text-center border border-gray-100">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon name="User" size={48} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold gradient-text mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    «{member.achievement}»
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Блок 7: Призыв к действию */}
        <section id="contact-form" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Готовы построить бизнес, который работает на вас?
              </h2>
              <p className="text-lg text-gray-200">
                Запишитесь на бесплатную диагностическую сессию. Мы разберем вашу ситуацию и наметим первые 3 шага по выходу из операционной рутины. 
                Это ни к чему вас не обязывает.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-modern-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Иван Иванов"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон или Email
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 123-45-67 или email@example.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                    Какая одна задача отнимает у вас больше всего времени прямо сейчас? *
                  </label>
                  <Textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    placeholder="Опишите вашу главную проблему..."
                    rows={4}
                    className="w-full"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold py-4 text-lg rounded-lg shadow-modern hover:shadow-modern-lg transition-all duration-300"
                >
                  Начать систематизацию
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FOXMetoD;