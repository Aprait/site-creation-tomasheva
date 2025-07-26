import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AcceleratorsSection = () => {
  return (
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
      </div>
    </section>
  );
};

export default AcceleratorsSection;