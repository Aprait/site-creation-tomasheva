import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const CTASection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className="py-16 mb-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="bg-gradient-to-br from-accent via-accent to-accent-hover rounded-3xl p-12 lg:p-16 shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-heading tracking-tight">
              Готовы масштабировать бизнес?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-10 font-body max-w-2xl mx-auto leading-relaxed">
              Получите бесплатную консультацию по развитию вашего бизнеса. 
              Обсудим конкретные задачи и найдем решения для роста.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                size="lg"
                onClick={() => setIsConsultationModalOpen(true)}
                className="bg-white text-accent hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="Calendar" size={18} />
                Записаться на консультацию
              </Button>
              
              <Button
                size="lg"
                onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 hover:bg-white/20 hover:border-white/30"
              >
                <Icon name="MessageCircle" size={18} />
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