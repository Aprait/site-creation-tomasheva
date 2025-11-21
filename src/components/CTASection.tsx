import React, { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import ConsultationModal from '@/components/ConsultationModal';

const CTASection = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  return (
    <section className="py-16 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-6 font-heading tracking-tight">
            Готовы к росту?
          </h2>
          <p className="text-lg text-ink-tertiary mb-8 max-w-2xl mx-auto leading-relaxed">
            Обсудим ваши задачи и найдем решения
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => setIsConsultationModalOpen(true)}
              className="bg-accent hover:bg-accent-hover text-white rounded-xl px-8 h-14 text-base shadow-sm"
            >
              Записаться на консультацию
            </Button>
            
            <Button
              size="lg"
              onClick={() => window.open('https://t.me/natalyatomasheva', '_blank')}
              className="border-line text-ink hover:border-accent hover:bg-accent-lighter rounded-xl px-8 h-14 text-base"
              variant="outline"
            >
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