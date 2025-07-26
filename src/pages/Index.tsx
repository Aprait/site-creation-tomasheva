import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-[#1E3A8A]">
              Наталья Томашева
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Услуги</a>
              <a href="#experience" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Опыт</a>
              <a href="#results" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Результаты</a>
              <a href="#contacts" className="text-gray-700 hover:text-[#1E3A8A] transition-colors">Контакты</a>
            </div>
            <Button className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Наталья <span className="text-[#1E3A8A]">Томашева</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Эксперт по внедрению ИИ в бизнес-процессы, бизнес-трекер (грейд B+ Skolkovo), OKR-коуч
              </p>
              <Button 
                size="lg" 
                className="bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-4 text-lg animate-scale-in"
              >
                Получить консультацию
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/files/836a580d-97da-475a-96ca-0ab1dcf55eea.JPG" 
                  alt="Наталья Томашева - бизнес-эксперт"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Мои результаты в цифрах
            </h2>
            <p className="text-xl text-gray-600">
              Измеримые достижения в работе с командами и бизнесом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { number: "250+", label: "команд проведено через трекинг", period: "2021-2024" },
              { number: "15+ млрд ₽", label: "годовой оборот компаний", period: "с которыми велась работа" },
              { number: "160 млн ₽", label: "привлечено венчурных инвестиций", period: "для IT-проекта" },
              { number: "х8 раз", label: "увеличен оборот компании", period: "на позиции коммерческого директора" },
              { number: "50 млн ₽", label: "выиграна субсидия", period: "на разработку инновационной продукции" }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-2 hover:border-[#1E3A8A] transition-colors animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl font-bold text-[#1E3A8A] mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.period}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Чем я могу быть полезна
            </h2>
            <p className="text-xl text-gray-600">
              Ключевые направления моей экспертной деятельности
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Target",
                title: "Бизнес-трекинг и OKR-коучинг",
                description: "Диагностика, поиск точек роста, сопровождение до результата"
              },
              {
                icon: "Brain",
                title: "Внедрение ИИ в бизнес",
                description: "Автоматизация CRM, аналитики и операционных задач"
              },
              {
                icon: "TrendingUp",
                title: "Разработка стратегий",
                description: "Маркетинг, продажи, цифровая трансформация"
              },
              {
                icon: "Users",
                title: "Стратегические сессии",
                description: "Фасилитация для команд в России и СНГ"
              },
              {
                icon: "Rocket",
                title: "Запуск стартапов",
                description: "Консультации по развитию и выводу на рынок новых продуктов"
              },
              {
                icon: "Settings",
                title: "Аудит и оптимизация",
                description: "Построение отделов продаж, внедрение CRM и бережливого производства"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in hover-scale" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-[#1E3A8A]" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Опыт в ведущих акселераторах и признание
            </h2>
            <p className="text-xl text-gray-600">
              Работа с топовыми программами и достижения в профессиональном сообществе
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Accelerators */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E3A8A] mb-4">
                  Опыт в акселераторах
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { name: "Skolkovo", role: "Трекер (грейд B+)" },
                    { name: "Форум «Сильные идеи для нового времени»", role: "Эксперт" },
                    { name: "Growth Academy", role: "Тимлид" },
                    { name: "Университет 20.35", role: "Эксперт" }
                  ].map((acc, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center">
                        <Icon name="Award" size={24} className="text-[#1E3A8A]" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{acc.name}</div>
                        <div className="text-sm text-gray-600">{acc.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recognition */}
            <Card className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E3A8A] mb-4">
                  Признание
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    "Член жюри Effie Russia",
                    "1-е место в питч-сессии форума «Россия – спортивная держава»",
                    "Победитель «Цифровой лаборатории в здравоохранении» 2021",
                    "Основатель консалтинговой компании FOXMetoD"
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center">
                        <Icon name="Trophy" size={24} className="text-[#1E3A8A]" />
                      </div>
                      <div className="font-medium text-gray-900">{achievement}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education Diplomas */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Дипломы и сертификаты
              </h3>
              <p className="text-lg text-gray-600">
                Документы об образовании и профессиональной квалификации
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Russian Diploma */}
              <Card className="animate-fade-in hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-[#1E3A8A] mb-2">
                    Диплом МИМ ЛИНК
                  </CardTitle>
                  <CardDescription>
                    Менеджмент · 17 июня 2011
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden border-2 border-gray-200">
                    <img 
                      src="https://cdn.poehali.dev/files/0f5e3233-e593-4677-acc3-b0fcf87f3395.JPG" 
                      alt="Диплом МИМ ЛИНК по менеджменту"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="School" size={16} className="text-[#1E3A8A]" />
                      <span className="text-sm font-medium">Международный Институт Менеджмента ЛИНК</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Award" size={16} className="text-[#1E3A8A]" />
                      <span className="text-sm text-gray-600">Профессиональная переподготовка</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} className="text-[#1E3A8A]" />
                      <span className="text-sm text-gray-600">Жуковский, Россия</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Open University Diploma */}
              <Card className="animate-fade-in hover:shadow-xl transition-all duration-300" style={{animationDelay: "0.2s"}}>
                <CardHeader>
                  <CardTitle className="text-xl text-[#1E3A8A] mb-2">
                    Professional Diploma in Management
                  </CardTitle>
                  <CardDescription>
                    The Open University · 31st July 2009
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden border-2 border-gray-200">
                    <img 
                      src="https://cdn.poehali.dev/files/70e0e592-961a-43f5-9eec-40da806c5bf8.JPG" 
                      alt="Professional Diploma in Management from The Open University"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="School" size={16} className="text-[#1E3A8A]" />
                      <span className="text-sm font-medium">The Open University</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Award" size={16} className="text-[#1E3A8A]" />
                      <span className="text-sm text-gray-600">Professional Diploma</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Globe" size={16} className="text-[#1E3A8A]" />
                      <span className="text-sm text-gray-600">United Kingdom</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Languages" size={16} className="text-[#1E3A8A]" />
                      <span className="text-sm text-gray-600">Teaching conducted in Russian language</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                      <Icon name="FileText" size={16} className="text-[#1E3A8A]" />
                      <a 
                        href="https://disk.yandex.ru/d/1nkbIutLpX17Vw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[#1E3A8A] hover:underline font-medium"
                      >
                        Просмотреть все сертификаты Open University
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Certificates Gallery */}
            <Card className="animate-fade-in" style={{animationDelay: "0.4s"}}>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E3A8A] mb-4 text-center">
                  Профессиональные сертификаты
                </CardTitle>
                <CardDescription className="text-center">
                  Документы, подтверждающие экспертизу в различных областях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {/* OKR Coach Certificate */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                      <img 
                        src="https://cdn.poehali.dev/files/a3b125cf-9540-4e0a-8e79-dec4385113d3.png" 
                        alt="OKR Academy - Certified professional OKR Coach"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-gray-900">OKR Coach</h4>
                      <p className="text-sm text-gray-600">OKR Academy · Март 2024</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          6 модулей, 24 часа
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* MFTI Recognition */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                      <img 
                        src="https://cdn.poehali.dev/files/20693778-f274-4711-bb8d-d105c5edb8f7.png" 
                        alt="Благодарность МФТИ за научное руководство ВКР"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-gray-900">Благодарность МФТИ</h4>
                      <p className="text-sm text-gray-600">Научное руководство ВКР · 2022/2024</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Наставничество
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Venture Analyst Recommendation */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                      <img 
                        src="https://cdn.poehali.dev/files/dc2a3d68-0274-4b92-9127-cd53d1af5f5c.png" 
                        alt="Рекомендательное письмо венчурного аналитика"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-gray-900">Рекомендация</h4>
                      <p className="text-sm text-gray-600">I2BF Global Ventures</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Венчурный анализ
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Digital Transformation Certificate */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                      <img 
                        src="https://cdn.poehali.dev/files/ef951a43-3618-4679-b6a4-fcb0945b9c27.png" 
                        alt="Сертификат цифровой трансформации Минпромторг"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-gray-900">Цифровая трансформация</h4>
                      <p className="text-sm text-gray-600">Минпромторг · Январь 2024</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Госпрограмма
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Risk Management Certificate */}
                  <div className="group cursor-pointer">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden border-2 border-gray-200 group-hover:border-[#1E3A8A] transition-all duration-300">
                      <img 
                        src="https://cdn.poehali.dev/files/1163c818-8ef0-4272-a91b-b47e334ea980.png" 
                        alt="Сертификат по управлению рисками проекта"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <h4 className="font-semibold text-gray-900">Управление рисками</h4>
                      <p className="text-sm text-gray-600">НАДПО · Декабрь 2023</p>
                      <div className="mt-2 flex justify-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          Риск-менеджмент
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Certifications List */}
                <div className="border-t border-gray-200 pt-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6 text-center">Дополнительные курсы и сертификации</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Продуктовый трекинг, ФРИИ (2025)",
                      "Аттестация трекеров (Грейд В+), Школа стартапов Skolkovo (2023)",
                      "VC analyst course, I2BF Global Ventures (2023)",
                      "Product-Manager, Skillsetter (2021)",
                      "Развитие производственных предприятий (2024)",
                      "Курсы повышения квалификации в области управления"
                    ].map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="GraduationCap" size={16} className="text-[#1E3A8A]" />
                        <span className="text-sm text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-3">
                    <Icon name="FileText" size={20} className="text-[#1E3A8A]" />
                    <a 
                      href="https://disk.yandex.ru/d/_CbV983nnZMatQ" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#1E3A8A] hover:underline font-medium text-lg"
                    >
                      Просмотреть все сертификаты курсов
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Давайте обсудим ваши задачи
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь со мной для консультации или сотрудничества
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact">Телефон или Email</Label>
                  <Input id="contact" placeholder="Ваш телефон или email" />
                </div>
                <div>
                  <Label htmlFor="message">Ваше сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших задачах..." rows={4} />
                </div>
                <Button className="w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white">
                  Отправить
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Direct Contacts */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-[#1E3A8A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">tomasheva.natalia@yandex.ru</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-[#1E3A8A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Телефон</div>
                      <div className="text-gray-600">+7 (922) 022-72-25</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1E3A8A]/10 rounded-lg flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-[#1E3A8A]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Telegram</div>
                      <div className="text-gray-600">Быстрая связь</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A8A] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">© Томашева Наталья Борисовна, 2025</p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-gray-200 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Информация об ИП</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;