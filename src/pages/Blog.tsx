import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи', count: 12 },
    { id: 'strategy', name: 'Стратегия', count: 4 },
    { id: 'management', name: 'Управление', count: 3 },
    { id: 'ai', name: 'Искусственный интеллект', count: 3 },
    { id: 'cases', name: 'Кейсы', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: "Как AI-чат-бот увеличил конверсию e-commerce на 25%",
      excerpt: "Реальный кейс внедрения ИИ в службу поддержки крупного интернет-магазина. Разбираем пошагово процесс интеграции и измеряем результаты.",
      category: "ai",
      categoryName: "Искусственный интеллект",
      date: "15 ноября 2024",
      readTime: "8 мин",
      image: "/img/e08b06e3-cc0e-4a6d-bf5b-f82ee47546e7.jpg",
      featured: true
    },
    {
      id: 2,
      title: "OKR vs KPI: какую систему выбрать для вашего бизнеса",
      excerpt: "Сравниваем две популярные методики управления целями. Когда использовать OKR, а когда достаточно классических KPI.",
      category: "management",
      categoryName: "Управление",
      date: "8 ноября 2024",
      readTime: "6 мин",
      image: "/img/d76b34d3-3109-4c8c-8498-213056484618.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Стратегическая сессия: 7 шагов к единому видению команды",
      excerpt: "Проверенная методика проведения стратегических сессий, которая гарантированно приведет к согласованному плану развития.",
      category: "strategy",
      categoryName: "Стратегия",
      date: "1 ноября 2024",
      readTime: "10 мин",
      image: "/img/35228f44-5fa2-4290-802d-53db3cc8cf9d.jpg",
      featured: true
    },
    {
      id: 4,
      title: "Бизнес-трекинг: как освободить 60% времени собственника",
      excerpt: "Система еженедельных спринтов, которая позволяет владельцам бизнеса выйти из операционной рутины и сосредоточиться на стратегии.",
      category: "management",
      categoryName: "Управление",
      date: "25 октября 2024",
      readTime: "7 мин",
      image: "/img/78e257d1-b7ad-44f2-9a4c-1e76a730206e.jpg"
    },
    {
      id: 5,
      title: "Цифровая трансформация: с чего начать в 2024 году",
      excerpt: "Практическое руководство по запуску процессов цифровизации в традиционном бизнесе. Реальные примеры и частые ошибки.",
      category: "strategy",
      categoryName: "Стратегия",
      date: "18 октября 2024",
      readTime: "9 мин",
      image: "/img/eb6c7e78-fbbf-4a32-b84a-8090fc123471.jpg"
    },
    {
      id: 6,
      title: "Как мы привлекли 160 млн рублей венчурных инвестиций",
      excerpt: "Детальный разбор кейса по подготовке IT-стартапа к инвестиционным раундам. От питч-дека до закрытия сделки.",
      category: "cases",
      categoryName: "Кейсы",
      date: "11 октября 2024",
      readTime: "12 мин",
      image: "/img/ef8d49ec-dde0-448e-a5a3-cea4b2118f10.jpg"
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <Layout currentPage="blog">
      <div className="pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Блог о бизнесе и технологиях
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
              Практические инсайты по управлению, стратегическому планированию, 
              внедрению ИИ и цифровой трансформации бизнеса
            </p>
          </section>

          {/* Categories Filter */}
          <section className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-brand-navy text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </section>

          {/* Featured Articles */}
          {selectedCategory === 'all' && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 font-heading flex items-center">
                <Icon name="Star" size={24} className="text-brand-accent mr-2" />
                Рекомендуемые статьи
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredArticles.map((article, index) => (
                  <article 
                    key={article.id} 
                    className={`bg-white rounded-xl shadow-lg overflow-hidden card-hover ${
                      index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                    }`}
                  >
                    <div className={`relative ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}>
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.categoryName}
                        </span>
                      </div>
                      {index === 0 && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Icon name="Star" size={16} className="mr-1" />
                            Популярное
                          </span>
                        </div>
                      )}
                    </div>
                    <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                      <div className="flex items-center text-sm text-gray-500 mb-3 font-body">
                        <Icon name="Calendar" size={16} className="mr-1" />
                        <span className="mr-4">{article.date}</span>
                        <Icon name="Clock" size={16} className="mr-1" />
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className={`font-bold text-gray-900 mb-3 font-heading ${
                        index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                      }`}>
                        {article.title}
                      </h3>
                      <p className={`text-gray-600 font-body ${
                        index === 0 ? 'text-lg mb-6' : 'mb-4'
                      }`}>
                        {article.excerpt}
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                      >
                        Читать далее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* Regular Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 font-heading">
              {selectedCategory === 'all' ? 'Все статьи' : `Категория: ${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === 'all' ? regularArticles : filteredArticles).map((article) => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.categoryName}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3 font-body">
                      <Icon name="Calendar" size={16} className="mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <Icon name="Clock" size={16} className="mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 font-body mb-4">
                      {article.excerpt}
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white w-full"
                    >
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Newsletter CTA */}
          <section className="mt-20">
            <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6 font-heading">
                Не пропускайте новые статьи
              </h2>
              <p className="text-xl mb-8 font-body opacity-90 max-w-2xl mx-auto">
                Подписывайтесь на мой Telegram-канал, где я делюсь актуальными инсайтами 
                по управлению бизнесом и внедрению новых технологий
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
                className="bg-brand-accent hover:bg-orange-500 text-white px-8 py-4 text-lg"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Подписаться на Telegram
              </Button>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
};

export default Blog;