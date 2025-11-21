import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Icon from '@/components/ui/icon';

const BlogEditor = () => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'strategy',
    categoryName: 'Стратегия',
    imageUrl: '',
    readTime: '5 мин',
    featured: false
  });

  const categories = [
    { id: 'strategy', name: 'Стратегия' },
    { id: 'management', name: 'Управление' },
    { id: 'ai', name: 'Искусственный интеллект' },
    { id: 'cases', name: 'Кейсы' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'category') {
      const selectedCategory = categories.find(c => c.id === value);
      setFormData({
        ...formData,
        category: value,
        categoryName: selectedCategory?.name || ''
      });
    } else if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/8c47a8b7-ca0c-45a2-88cd-66e61ce07db0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success('Статья успешно опубликована!');
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          category: 'strategy',
          categoryName: 'Стратегия',
          imageUrl: '',
          readTime: '5 мин',
          featured: false
        });
      } else {
        toast.error('Ошибка при публикации статьи');
      }
    } catch (error) {
      toast.error('Ошибка подключения к серверу');
    }
  };

  return (
    <Layout currentPage="blog">
      <div className="pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-ink mb-4 font-heading">
              Создать новую статью
            </h1>
            <p className="text-lg text-ink-tertiary">
              Заполните форму для публикации статьи в блоге
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            
            {/* Заголовок */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-ink mb-2">
                Заголовок статьи *
              </label>
              <Input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Введите заголовок"
                className="w-full"
                required
              />
            </div>

            {/* Краткое описание */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-ink mb-2">
                Краткое описание *
              </label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                placeholder="Введите краткое описание (будет показано в превью)"
                rows={3}
                className="w-full"
                required
              />
            </div>

            {/* Полный текст */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-ink mb-2">
                Полный текст статьи *
              </label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                placeholder="Введите полный текст статьи"
                rows={12}
                className="w-full"
                required
              />
            </div>

            {/* Категория и время чтения */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-ink mb-2">
                  Категория *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  required
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="readTime" className="block text-sm font-medium text-ink mb-2">
                  Время чтения
                </label>
                <Input
                  id="readTime"
                  name="readTime"
                  type="text"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  placeholder="5 мин"
                  className="w-full"
                />
              </div>
            </div>

            {/* URL изображения */}
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-ink mb-2">
                URL изображения
              </label>
              <Input
                id="imageUrl"
                name="imageUrl"
                type="text"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="https://example.com/image.jpg"
                className="w-full"
              />
            </div>

            {/* Рекомендуемая статья */}
            <div className="flex items-center">
              <input
                id="featured"
                name="featured"
                type="checkbox"
                checked={formData.featured}
                onChange={handleInputChange}
                className="w-4 h-4 text-accent border-gray-300 rounded focus:ring-accent"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-ink">
                Отметить как рекомендуемую статью
              </label>
            </div>

            {/* Кнопки */}
            <div className="flex gap-4 pt-4">
              <Button 
                type="submit"
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white"
              >
                <Icon name="Send" size={18} className="mr-2" />
                Опубликовать статью
              </Button>
              
              <Button 
                type="button"
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/blog'}
                className="border-gray-300 text-ink hover:bg-gray-50"
              >
                <Icon name="X" size={18} className="mr-2" />
                Отмена
              </Button>
            </div>
          </form>

        </div>
      </div>
    </Layout>
  );
};

export default BlogEditor;