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
                  src="/img/95d37511-d703-4eae-a8fa-5890f1e86db9.jpg" 
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

          {/* Education */}
          <div className="mt-16">
            <Card className="animate-fade-in" style={{animationDelay: "0.4s"}}>
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E3A8A] mb-4 text-center">
                  Образование и ключевые сертификаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Professional OKR Coach, OKR Academy (2024)",
                    "Продуктовый трекинг, ФРИИ (2025)",
                    "Аттестация трекеров (Грейд В+), Школа стартапов Skolkovo (2023)",
                    "VC analyst course, I2BF Global Ventures (2023)",
                    "Product-Manager, Skillsetter (2021)",
                    "Менеджмент, Международный Институт Менеджмента ЛИНК (2011)"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="GraduationCap" size={20} className="text-[#1E3A8A]" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
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