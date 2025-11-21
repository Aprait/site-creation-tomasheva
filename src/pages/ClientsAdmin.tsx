import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Client {
  id: number;
  company_name: string;
  logo_url: string;
  website_url: string;
  description: string;
  display_order: number;
  is_active: boolean;
}

const ClientsAdmin = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState({
    company_name: '',
    logo_url: '',
    website_url: '',
    description: '',
    display_order: 0
  });

  const API_URL = 'https://functions.poehali.dev/f5ffed5a-4ae4-453b-93de-d742292626ff?type=clients';

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setClients(data.clients || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingClient) {
        const response = await fetch(API_URL, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: editingClient.id,
            ...formData,
            is_active: true
          })
        });
        
        if (response.ok) {
          await fetchClients();
          setEditingClient(null);
          resetForm();
        }
      } else {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          await fetchClients();
          setIsAddingNew(false);
          resetForm();
        }
      }
    } catch (error) {
      console.error('Error saving client:', error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить этого клиента?')) return;
    
    try {
      await fetch(`${API_URL}?id=${id}`, {
        method: 'DELETE'
      });
      await fetchClients();
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      company_name: client.company_name,
      logo_url: client.logo_url,
      website_url: client.website_url,
      description: client.description,
      display_order: client.display_order
    });
    setIsAddingNew(false);
  };

  const resetForm = () => {
    setFormData({
      company_name: '',
      logo_url: '',
      website_url: '',
      description: '',
      display_order: 0
    });
    setEditingClient(null);
    setIsAddingNew(false);
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
            <h1 className="text-3xl font-bold text-ink mb-2">Управление клиентами</h1>
            <p className="text-ink-tertiary">Добавляйте и редактируйте логотипы компаний-клиентов</p>
          </div>
          <Button
            onClick={() => {
              setIsAddingNew(true);
              setEditingClient(null);
              resetForm();
            }}
            className="bg-accent hover:bg-accent-hover text-white"
          >
            <Icon name="Plus" size={20} className="mr-2" />
            Добавить клиента
          </Button>
        </div>

        {(isAddingNew || editingClient) && (
          <div className="bg-white rounded-xl p-6 mb-8 border-2 border-gray-200">
            <h2 className="text-xl font-semibold text-ink mb-4">
              {editingClient ? 'Редактировать клиента' : 'Добавить нового клиента'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Название компании *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company_name}
                  onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="ООО Компания"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  URL логотипа *
                </label>
                <input
                  type="url"
                  required
                  value={formData.logo_url}
                  onChange={(e) => setFormData({ ...formData, logo_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="https://example.com/logo.png"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink-secondary mb-1">
                  Сайт компании
                </label>
                <input
                  type="url"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  placeholder="https://company.com"
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
                  placeholder="Краткое описание компании"
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
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-accent transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-ink text-lg mb-1">{client.company_name}</h3>
                  {client.website_url && (
                    <a
                      href={client.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {client.website_url}
                    </a>
                  )}
                </div>
              </div>

              {client.logo_url && (
                <div className="mb-4 flex items-center justify-center h-24 bg-gray-50 rounded-lg">
                  <img
                    src={client.logo_url}
                    alt={client.company_name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              )}

              {client.description && (
                <p className="text-sm text-ink-tertiary mb-4">{client.description}</p>
              )}

              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(client)}
                  variant="outline"
                  size="sm"
                  className="flex-1 border-gray-300"
                >
                  <Icon name="Edit" size={16} className="mr-1" />
                  Редактировать
                </Button>
                <Button
                  onClick={() => handleDelete(client.id)}
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

        {clients.length === 0 && !isAddingNew && (
          <div className="text-center py-12">
            <Icon name="Building2" size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-ink-tertiary text-lg mb-4">Клиенты еще не добавлены</p>
            <Button
              onClick={() => setIsAddingNew(true)}
              className="bg-accent hover:bg-accent-hover text-white"
            >
              Добавить первого клиента
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientsAdmin;