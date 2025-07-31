import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  organization: string;
}

const certificates: Certificate[] = [
  {
    id: 'okr-coach',
    title: 'Professional OKR Coach',
    description: 'Сертификат профессионального OKR-коуча',
    imageUrl: 'https://cdn.poehali.dev/files/1ec8b698-d971-4e1b-a2bc-4204e12c0846.png',
    date: '2024',
    organization: 'OKR Standard'
  },
  {
    id: 'director-development',
    title: 'Директор по развитию',
    description: 'Отработка практических навыков в объеме 16 учебных часов',
    imageUrl: 'https://cdn.poehali.dev/files/2b6b1e8e-f8c9-40b8-86da-c2d18efc24dd.png',
    date: '13-14 октября 2020',
    organization: 'Стратегии устойчивого развития'
  },
  {
    id: 'social-projects',
    title: 'Методическая подготовка по социальным проектам',
    description: 'Акселерационное сопровождение социальных проектов',
    imageUrl: 'https://cdn.poehali.dev/files/727fcbd4-427d-4144-8a3b-23d9915d4de3.png',
    date: '08 июня 2022',
    organization: 'ИТ-Контракт'
  },
  {
    id: 'i2bf-analyst',
    title: 'Венчурный аналитик',
    description: 'VC analyst course по анализу инвестиций',
    imageUrl: 'https://cdn.poehali.dev/files/73f61a30-6242-4d34-8878-533b0bc5662e.png',
    date: '2023',
    organization: 'I2BF Global Ventures'
  },
  {
    id: 'digital-transformation',
    title: 'Цифровая трансформация',
    description: 'Государственная программа цифровой трансформации',
    imageUrl: 'https://cdn.poehali.dev/files/705f4018-6841-4dd2-b9a8-2c91eda6768a.png',
    date: 'Январь 2024',
    organization: 'Минпромторг России'
  },
  {
    id: 'risk-management',
    title: 'Управление рисками проекта',
    description: 'Профессиональная переподготовка по риск-менеджменту',
    imageUrl: 'https://cdn.poehali.dev/files/d3f5e358-3c69-4073-8074-6078db8f34f8.png',
    date: 'Декабрь 2023',
    organization: 'НАДПО'
  },
  {
    id: 'mfti-thanks',
    title: 'Благодарность МФТИ',
    description: 'За научное руководство и вклад в развитие прикладных навыков',
    imageUrl: 'https://cdn.poehali.dev/files/7f755f85-080b-442f-bb61-ab3aa4e9ebdb.png',
    date: '2022/2024',
    organization: 'МФТИ'
  }
];

const CertificateGrid = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Сертификаты и достижения
          </h2>
          <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
            Документы об образовании, сертификаты и профессиональные достижения
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <Card 
              key={certificate.id} 
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-200 animate-fade-in" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                  />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-brand-navy transition-colors font-heading">
                    {certificate.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 font-body">
                    {certificate.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Building2" size={16} className="mr-2 text-brand-navy" />
                    <span className="font-body">{certificate.organization}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Calendar" size={16} className="mr-2 text-brand-navy" />
                    <span className="font-body">{certificate.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-brand-light rounded-lg">
            <Icon name="Award" size={20} className="text-brand-navy mr-2" />
            <span className="text-brand-navy font-medium font-body">
              Постоянное повышение квалификации и профессиональное развитие
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateGrid;