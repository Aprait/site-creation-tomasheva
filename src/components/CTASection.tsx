import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const CTASection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className="section-padding bg-dark-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="bg-gradient-to-r from-brand-primary/20 to-brand-primary-dark/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-brand-primary/30">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-brand-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-text-primary">
              Готовы масштабировать бизнес?
            </h2>
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Получите бесплатную консультацию по развитию вашего бизнеса. 
              Обсудим конкретные задачи и найдем решения для роста.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                onClick={() => setIsConsultationModalOpen(true)}
                className="group"
              >
                <Icon name="Calendar" size={20} />
                Записаться на консультацию
                <Icon name="ArrowRight" size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
              >
                <Icon name="MessageCircle" size={20} />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal 
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </section>
  );
};

export default CTASection;