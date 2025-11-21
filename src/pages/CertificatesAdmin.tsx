import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Certificate {
  id: number;
  title: string;
  category: string;
  image_url: string;
  issued_by: string;
  issued_date: string;
  description: string;
  display_order: number;
  is_active: boolean;
}

const CertificatesAdmin = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [formData, setFormData] = useState({
    title: '',
    category: 'accelerator',
    image_url: '',
    issued_by: '',
    issued_date: '',
    description: '',
    display_order: 0
  });

  const API_URL = 'https://functions.poehali.dev/f5ffed5a-4ae4-453b-93de-d742292626ff?type=certificates';

  const categories = [
    { value: 'all', label: 'Все категории' },
    { value: 'accelerator', label: 'Акселераторы' },
    { value: 'tracker', label: 'Трекер' },
    { value: 'certificate', label: 'Сертификаты' },
    { value: 'award', label: 'Благодарности' }
  ];

  useEffect(() => {
    fetchCertificates();
  }, [filterCategory]);

  const fetchCertificates = async () => {
    try {
      const url = filterCategory === 'all' ? API_URL : `${API_URL}?category=${filterCategory}`;
      const response = await fetch(url);
      const data = await response.json();
      setCertificates(data.certificates || []);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingCertificate) {
        const response = await fetch(API_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingCertificate.id,
            ...formData,
            is_active: true
          })
        });
        
        if (response.ok) {
          await fetchCertificates();
          setEditingCertificate(null);
          resetForm();
        }
      } else {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          await fetchCertificates();
          setIsAddingNew(false);
          resetForm();
        }
      }
    } catch (error) {
      console.error('Error saving certificate:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить этот сертификат?')) return;
    
    try {
      await fetch(`${API_URL}?id=${id}`, {
        method: 'DELETE'
      });
      await fetchCertificates();
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };

  const handleEdit = (certificate: Certificate) => {
    setEditingCertificate(certificate);
    setFormData({
      title: certificate.title,
      category: certificate.category,
      image_url: certificate.image_url,
      issued_by: certificate.issued_by,
      issued_date: certificate.issued_date || '',
      description: certificate.description,
      display_order: certificate.display_order
    });
    setIsAddingNew(false);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      category: 'accelerator',
      image_url: '',
      issued_by: '',
      issued_date: '',
      description: '',
      display_order: 0
    });
    setEditingCertificate(null);
    setIsAddingNew(false);
  };

  const getCategoryLabel = (value: string) => {
    return categories.find(c => c.value === value)?.label || value;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-ink-secondary">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-ink mb-2">Управление сертификатами</h1>
            <p className="text-ink-tertiary">Добавляйте и редактируйте сертификаты, награды и благодарности</p>
          </div>
          <Button
            onClick={() => {
              setIsAddingNew(true);
              setEditingCertificate(null);
              resetForm();
            }}
            className="bg-accent hover:bg-accent-hover text-white"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить сертификат
          </Button>
        </div>

        <div className="mb-6">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {(isAddingNew || editingCertificate) && (
          <div className="bg-white rounded-xl p-6 mb-8 border-2 border-gray-200">
            <h2 className="text-xl font-semibold text-ink mb-4">
              {editingCertificate ? 'Редактировать сертификат' : 'Добавить новый сертификат'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Название *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Название сертификата"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Категория *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  {categories.filter(c => c.value !== 'all').map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  URL изображения *
                </label>
                <input
                  type="url"
                  required
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="https://example.com/certificate.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Выдан кем
                </label>
                <input
                  type="text"
                  value={formData.issued_by}
                  onChange={(e) => setFormData({ ...formData, issued_by: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="Название организации"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Дата выдачи
                </label>
                <input
                  type="date"
                  value={formData.issued_date}
                  onChange={(e) => setFormData({ ...formData, issued_date: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Описание
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  rows={3}
                  placeholder="Краткое описание"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Порядок отображения
                </label>
                <input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="0"
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="bg-accent hover:bg-accent-hover text-white">
                  <Icon name="Save" size={18} className="mr-2" />
                  Сохранить
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={resetForm}
                  className="border-gray-300 text-ink-secondary hover:bg-gray-50"
                >
                  Отмена
                </Button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-accent transition-all"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-2">
                  {getCategoryLabel(certificate.category)}
                </span>
                <h3 className="font-semibold text-ink text-lg">{certificate.title}</h3>
                {certificate.issued_by && (
                  <p className="text-sm text-ink-tertiary mt-1">Выдан: {certificate.issued_by}</p>
                )}
                {certificate.issued_date && (
                  <p className="text-sm text-ink-tertiary">
                    Дата: {new Date(certificate.issued_date).toLocaleDateString('ru-RU')}
                  </p>
                )}
              </div>

              {certificate.image_url && (
                <div className="mb-4 flex items-center justify-center h-48 bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={certificate.image_url}
                    alt={certificate.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}

              {certificate.description && (
                <p className="text-sm text-ink-tertiary mb-4">{certificate.description}</p>
              )}

              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(certificate)}
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300"
                >
                  <Icon name="Edit" size={16} className="mr-1" />
                  Редактировать
                </Button>
                <Button
                  onClick={() => handleDelete(certificate.id)}
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-600 hover:bg-red-50"
                >
                  <Icon name="Trash2" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {certificates.length === 0 && !isAddingNew && (
          <div className="text-center py-12">
            <Icon name="Award" size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-ink-tertiary text-lg mb-4">Сертификаты еще не добавлены</p>
            <Button
              onClick={() => setIsAddingNew(true)}
              className="bg-accent hover:bg-accent-hover text-white"
            >
              Добавить первый сертификат
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesAdmin;