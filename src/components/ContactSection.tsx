import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;