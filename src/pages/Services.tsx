import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import ConsultationModal from '@/components/ConsultationModal';

const Services = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const navigate = useNavigate();
  const services = [
    {
      title: "Бизнес-трекинг",
      subtitle: "Для кого",
      description: "Для собственников, которые тратят большую часть времени на рутинные задачи вместо стратегического развития. Ваш бизнес держится исключительно на вас, рост замедлился или остановился. Вы работаете 12-14 часов в сутки, но результаты не соответствуют затраченным усилиям. Команда постоянно обращается к вам за решениями даже по мелким вопросам. Вы чувствуете, что застряли в операционке и не видите пути к изменениям.",
      results: "Освобождение вашего времени до 60-70% для решения стратегических задач. Повышение прибыльности на 20-40% через системный подход к управлению. Полная прозрачность и контроль: еженедельные отчеты с ключевыми метриками бизнеса. Создание самостоятельной команды, которая принимает решения без вас. Готовность бизнеса к масштабированию: четкие процессы и системы. Снижение уровня стресса и возврат энергии для жизни вне работы.",
      process: "Работаем еженедельными спринтами по 60-90 минут. На каждой встрече: анализируем результаты прошлой недели по ключевым метрикам, выявляем узкие места и точки роста, формулируем гипотезы для тестирования, ставим измеримые цели на следующую неделю, определяем конкретные действия и ответственных. Между встречами: тестируем гипотезы, собираем данные, корректируем подход. Результат: непрерывное улучшение бизнеса через малые, но системные шаги.",
      formats: [
        { name: "Месячный пакет", duration: "4 встречи по 90 минут", price: "120 000 ₽" },
        { name: "Квартальный пакет", duration: "12 встреч + поддержка в чате", price: "420 000 ₽" },
        { name: "Годовое сопровождение", duration: "48 встреч + стратегические сессии", price: "1 440 000 ₽" }
      ],
      icon: "Target",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Стратегические сессии",
      subtitle: "Для кого",
      description: "Для команд и компаний, у которых отсутствует единое видение куда двигаться дальше. Каждый отдел тянет в свою сторону, цели разрознены. Предыдущие попытки провести стратсессию провалились: хаос в обсуждениях, нет конкретики, решения не реализуются. Вы теряете рыночные возможности, потому что команда не может быстро адаптироваться. Есть ощущение, что бизнес «буксует» на месте. Вы понимаете: без четкой стратегии не вырастете.",
      results: "Согласованная и принятая всей командой стратегия развития на ближайшие 12-36 месяцев. Конкретный план реализации: 5-7 стратегических проектов с дорожной картой. Четкое распределение ответственности: кто, что и когда делает. Повышение вовлеченности команды: каждый понимает свою роль в общей картине. Единая система координат для принятия всех бизнес-решений. Ваша команда начинает функционировать как единое целое, двигаясь в одном направлении.",
      process: "До сессии провожу глубокий анализ вашего бизнеса: изучаю финансы, процессы, конкурентную среду. Провожу индивидуальные интервью с ключевыми сотрудниками для выявления реальной ситуации. На очной сессии (1-2 дня) модерирую процесс: помогаю выявить сильные стороны и возможности, сформировать стратегическое видение, определить 5-7 ключевых проектов для реализации, создать дорожную карту с конкретными сроками и KPI. После сессии: поддержка на этапе запуска проектов, корректировка по результатам первых шагов.",
      formats: [
        { name: "Однодневная сессия", duration: "8 часов + 5 недель подготовки", price: "от 240 000 ₽" },
        { name: "Двухдневная сессия", duration: "2 дня + 5 недель подготовки", price: "от 380 000 ₽" },
        { name: "С сопровождением", duration: "Сессия 2 дня + 3 месяца поддержки", price: "от 650 000 ₽" }
      ],
      icon: "Users",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Интеграция ИИ в бизнес-процессы",
      subtitle: "Для кого",
      description: "Для компаний, которые страдают от рутинных операций, отнимающих массу времени у квалифицированных специалистов. Низкая скорость обработки данных и принятия решений. Высокие операционные затраты на выполнение повторяющихся задач. Сложность масштабирования: чтобы расти, нужно постоянно увеличивать штат. Вы теряете конкурентное преимущество, потому что другие компании уже используют ИИ. Понимаете потенциал искусственного интеллекта, но не знаете, с чего начать внедрение в ваш бизнес.",
      results: "Освобождение ценных человеческих ресурсов от рутины для более творческих и стратегических задач. Повышение скорости и точности принятия решений благодаря быстрой обработке больших объемов данных. Сокращение операционных затрат на 30-50% за счет автоматизации. Возможность масштабирования бизнеса без пропорционального роста штата. Улучшение качества обслуживания клиентов через быстрые и персонализированные ответы. Получение конкурентного преимущества через использование передовых технологий.",
      process: "Начинаем с аудита ваших бизнес-процессов: выявляем точки, где ИИ даст максимальный эффект. Разрабатываем стратегию внедрения с учетом специфики вашего бизнеса. Основные направления интеграции: автоматизация рутинных операций (обработка заявок, документов, данных), создание ИИ-ассистентов для аналитики (отделы продаж, контроль качества, финансы), интеграция с CRM и другими системами для автоматизации коммуникаций, настройка автоматического анализа данных и прогнозирования. Проводим пилотное внедрение на одном процессе, оцениваем результаты, масштабируем успешные решения на весь бизнес.",
      formats: [
        { name: "Пилотный проект", duration: "1 процесс, 1-2 месяца", price: "от 250 000 ₽" },
        { name: "Комплексное внедрение", duration: "3-5 процессов, 3-4 месяца", price: "от 800 000 ₽" },
        { name: "Полная трансформация", duration: "Все процессы + обучение команды", price: "от 2 000 000 ₽" }
      ],
      icon: "Bot",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      title: "Операционный консалтинг",
      subtitle: "Для кого",
      description: "Для компаний, где процессы хаотичны и зависят от конкретных людей. Рост бизнеса остановился из-за операционной неэффективности. Высокая текучка кадров: новые сотрудники долго входят в курс дела. Ошибки и недочеты повторяются из раза в раз. Отсутствует система контроля качества работы. Вы не можете делегировать, потому что процессы не описаны и не стандартизированы. Чувствуете, что нужны системные изменения, но не знаете, с чего начать.",
      results: "Прозрачные и документированные бизнес-процессы, которые не зависят от конкретных людей. Снижение количества ошибок на 50-70% благодаря четким стандартам работы. Сокращение времени адаптации новых сотрудников в 2-3 раза. Возможность эффективно делегировать задачи без потери качества. Рост производительности команды на 20-40%. Создание системы постоянного улучшения процессов. Готовность к росту: бизнес может масштабироваться без хаоса.",
      process: "Начинаем с операционного аудита: глубоко погружаюсь в ваш бизнес, выявляю критические процессы и узкие места. Совместно с командой описываем и оптимизируем ключевые процессы. Внедряем: систему управления проектами и задачами, регулярные ритмы управления (планерки, совещания, отчетность), KPI и метрики для контроля эффективности, стандарты качества и чек-листы для каждого процесса. Обучаю вашу команду работать в новой системе. Поддерживаю на этапе внедрения: корректируем процессы по мере их использования, помогаю преодолеть сопротивление изменениям. Результат: работающая операционная система, которая живет и развивается без меня.",
      formats: [
        { name: "Экспресс-аудит", duration: "2 недели + отчет", price: "от 150 000 ₽" },
        { name: "Базовое внедрение", duration: "2-3 месяца + описание процессов", price: "от 500 000 ₽" },
        { name: "Полная трансформация", duration: "6 месяцев + сопровождение", price: "от 1 500 000 ₽" }
      ],
      icon: "Settings",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Построение системы управления",
      subtitle: "Для кого",
      description: "Для собственников и CEO, которые хотят создать бизнес, работающий без их постоянного участия. Компания выросла, но управленческие инструменты остались на уровне стартапа. Нет четкой структуры принятия решений: все решается хаотично. Отсутствуют регулярные ритмы управления или они формальны и неэффективны. Нет единой системы целеполагания и контроля. Менеджеры не берут ответственность, ждут указаний сверху. Вы понимаете: без управленческой системы бизнес не вырастет дальше.",
      results: "Четкая система управления с прописанными правилами игры. Регулярные управленческие ритмы: планерки, еженедельные встречи, ежемесячные ревью. Каскадная система целей: от стратегии компании до задач каждого сотрудника. Система контроля: dashboards с ключевыми показателями, доступные 24/7. Культура ответственности: менеджеры принимают решения в рамках своей зоны. Освобождение вашего времени: бизнес работает по системе, а не на ваших личных усилиях. Рост управленческой зрелости команды.",
      process: "Проектируем систему управления под вашу специфику: определяем оргструктуру и зоны ответственности, создаем систему целеполагания (стратегические, операционные, личные цели), выстраиваем управленческие ритмы (что, когда, как обсуждаем и решаем), формируем систему отчетности и метрик. Внедряем пошагово: запускаем управленческие ритмы, обучаем команду работе с целями и метриками, настраиваем инструменты (dashboards, системы учета задач). Сопровождаю первые 2-3 месяца работы новой системы: корректируем процессы, помогаю команде адаптироваться, закрепляю новые привычки управления.",
      formats: [
        { name: "Проектирование системы", duration: "1 месяц + документация", price: "от 450 000 ₽" },
        { name: "Внедрение с обучением", duration: "3 месяца + поддержка команды", price: "от 1 200 000 ₽" },
        { name: "Полное сопровождение", duration: "6 месяцев до автономной работы", price: "от 1 800 000 ₽" }
      ],
      icon: "Network",
      gradient: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <Layout currentPage="services">
      <div className="pt-16 pb-24 bg-gradient-to-b from-bg-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light border border-accent/10 text-accent text-sm font-semibold mb-6">
              <Icon name="Sparkles" size={16} />
              Премиальный консалтинг
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-ink mb-6 font-heading tracking-tight">
              Услуги для роста вашего бизнеса
            </h1>
            <p className="text-xl text-ink-tertiary font-body max-w-3xl mx-auto leading-relaxed">
              Помогаю компаниям выйти на новый уровень развития через системный подход, 
              внедрение технологий и стратегическое планирование
            </p>
          </section>

          {/* Services Grid */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-sm border border-line/30 overflow-hidden hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className={`bg-gradient-to-br ${service.gradient} px-10 py-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>
                  <div className="relative flex items-center">
                    <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-5 border border-white/20">
                      <Icon name={service.icon as any} size={28} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold font-heading tracking-tight">{service.title}</h2>
                  </div>
                </div>
                
                <div className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Для кого */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                          <Icon name="Users" size={16} className="text-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-ink font-heading">
                          {service.subtitle}
                        </h3>
                      </div>
                      <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                        {service.description}
                      </p>
                    </div>

                    {/* Что получите */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                        </div>
                        <h3 className="text-lg font-bold text-ink font-heading">
                          Что вы получите
                        </h3>
                      </div>
                      <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                        {service.results}
                      </p>
                    </div>

                    {/* Как работаю */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                          <Icon name="Settings" size={16} className="text-brand-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-ink font-heading">
                          Как я работаю
                        </h3>
                      </div>
                      <p className="text-ink-tertiary font-body leading-relaxed text-[15px]">
                        {service.process}
                      </p>
                    </div>

                  </div>

                  {/* Форматы и цены */}
                  {service.formats && (
                    <div className="mt-10 pt-10 border-t border-line/40">
                      <div className="flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                          <Icon name="DollarSign" size={16} className="text-accent" />
                        </div>
                        <h3 className="text-xl font-bold text-ink font-heading">
                          Форматы и стоимость
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {service.formats.map((format, idx) => (
                          <div key={idx} className="bg-bg-secondary rounded-2xl p-6 border border-line/50 hover:border-accent/40 hover:shadow-md transition-all duration-300 group">
                            <h4 className="text-base font-bold text-ink mb-3 font-heading group-hover:text-accent transition-colors">
                              {format.name}
                            </h4>
                            <p className="text-sm text-ink-quaternary mb-4 font-body leading-relaxed">
                              {format.duration}
                            </p>
                            <p className="text-2xl font-bold text-accent font-heading">
                              {format.price}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 flex justify-center">
                        <Button 
                          size="lg"
                          onClick={() => setIsConsultationModalOpen(true)}
                          className="bg-accent hover:bg-accent-hover text-white shadow-sm hover:shadow-md transition-all"
                        >
                          <Icon name="MessageSquare" size={18} />
                          Узнать точную стоимость
                        </Button>
                      </div>
                      <p className="mt-5 text-sm text-ink-quaternary font-body text-center">
                        Точная стоимость рассчитывается индивидуально после диагностической встречи
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-24">
            <div className="bg-gradient-to-br from-ink via-ink-secondary to-ink rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
                  <Icon name="Zap" size={16} />
                  Начните прямо сейчас
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-heading tracking-tight">
                  Готовы начать трансформацию?
                </h2>
                <p className="text-lg lg:text-xl mb-10 font-body opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Каждая услуга адаптируется под специфику вашего бизнеса. 
                  Давайте обсудим, какой подход будет наиболее эффективным для вас.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="bg-white text-ink hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Icon name="Calendar" size={18} />
                    Записаться на консультацию
                  </Button>
                  <Button 
                    size="lg"
                    onClick={() => navigate('/cases')}
                    className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
                  >
                    <Icon name="BookOpen" size={18} />
                    Посмотреть кейсы
                  </Button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </Layout>
  );
};

export default Services;