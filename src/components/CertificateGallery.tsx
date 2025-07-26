import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Certificate {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: string;
  imageUrl: string;
  description?: string;
}

const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Certified professional OKR Coach',
    organization: 'OKR Academy',
    date: 'Март 2024',
    type: 'Сертификация',
    imageUrl: 'https://cdn.poehali.dev/files/8a607dea-b189-4762-aefe-04e54fcae4ff.png',
    description: '6 модулей, 24 часа, онлайн обучение'
  },
  {
    id: '2',
    title: 'Благодарность за научное руководство',
    organization: 'МФТИ',
    date: '2022/2024',
    type: 'Благодарность',
    imageUrl: 'https://cdn.poehali.dev/files/7f755f85-080b-442f-bb61-ab3aa4e9ebdb.png',
    description: 'За весомый вклад в развитие прикладных навыков и научное руководство ВКР формата «Стартап как диплом»'
  },
  {
    id: '3',
    title: 'Венчурный аналитик',
    organization: 'i2BF Global Ventures',
    date: 'Курс VC analyst',
    type: 'Рекомендация',
    imageUrl: 'https://cdn.poehali.dev/files/73f61a30-6242-4d34-8878-533b0bc5662e.png',
    description: 'Рекомендательное письмо по итогам успешного прохождения курса венчурного аналитика'
  },
  {
    id: '4',
    title: 'Развитие производственных, торговых и сервисных предприятий',
    organization: 'Минпромторг России',
    date: 'Январь 2024',
    type: 'Сертификат',
    imageUrl: 'https://cdn.poehali.dev/files/705f4018-6841-4dd2-b9a8-2c91eda6768a.png',
    description: 'Совет по цифровой трансформации при Минпромторге России'
  },
  {
    id: '5',
    title: 'Риски проекта. Матрица рисков. Управление рисками проекта',
    organization: 'НАДПО',
    date: '03.12.2023',
    type: 'Вебинар',
    imageUrl: 'https://cdn.poehali.dev/files/d3f5e358-3c69-4073-8074-6078db8f34f8.png',
    description: 'Национальная академия дополнительного профессионального образования'
  }
];

const CertificateGallery = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Сертификация':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Благодарность':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'Рекомендация':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'Сертификат':
        return 'bg-orange-100 text-orange-800 hover:bg-orange-200';
      case 'Вебинар':
        return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Сертификаты и достижения
          </h1>
          <h2 className="text-2xl text-blue-600 mb-2">Томашева Наталья Борисовна</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Коллекция профессиональных сертификатов, наград и рекомендаций
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-2 border-transparent hover:border-blue-200">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                      />
                      <Badge 
                        className={`absolute top-2 right-2 ${getTypeColor(cert.type)}`}
                      >
                        {cert.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {cert.title}
                      </h3>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="Building2" size={16} className="mr-2 text-blue-500" />
                        <span className="line-clamp-1">{cert.organization}</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-600">
                        <Icon name="Calendar" size={16} className="mr-2 text-blue-500" />
                        <span>{cert.date}</span>
                      </div>

                      {cert.description && (
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                      <span>Открыть полный размер</span>
                      <Icon name="ExternalLink" size={16} className="ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-gray-900">{cert.title}</h2>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Icon name="Building2" size={16} className="mr-2 text-blue-500" />
                          {cert.organization}
                        </div>
                        <div className="flex items-center">
                          <Icon name="Calendar" size={16} className="mr-2 text-blue-500" />
                          {cert.date}
                        </div>
                      </div>
                      {cert.description && (
                        <p className="text-gray-600 mt-2">{cert.description}</p>
                      )}
                    </div>
                    <Badge className={getTypeColor(cert.type)}>
                      {cert.type}
                    </Badge>
                  </div>
                  
                  <div className="w-full">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Сертификатов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Организации</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">2024</div>
              <div className="text-gray-600">Последний год</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
              <div className="text-gray-600">Часов обучения</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGallery;