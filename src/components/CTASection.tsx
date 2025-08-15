import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const CTASection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className="py-16 mb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="bg-brand-navy rounded-2xl p-12 shadow-xl border border-brand-navy/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Готовы масштабировать бизнес?
          </h2>
          <p className="text-xl text-white/90 mb-8 font-body max-w-2xl mx-auto">
            Получите бесплатную консультацию по развитию вашего бизнеса. 
            Обсудим конкретные задачи и найдем решения для роста.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Calendar" size={20} />
              Записаться на консультацию
            </Button>
            
            <Button
              size="lg"
              onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
              className="bg-white text-brand-navy border-2 border-white hover:bg-gray-100 hover:text-brand-navy px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="MessageCircle" size={20} />
              Написать в Telegram
            </Button>
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