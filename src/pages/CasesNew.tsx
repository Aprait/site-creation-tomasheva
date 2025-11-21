import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import ConsultationModal from '@/components/ConsultationModal';

const Cases = () => {
  const navigate = useNavigate();
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://functions.poehali.dev/489d476b-93b7-4c42-a6e7-5e986e039093')
      .then(res => res.json())
      .then(data => {
        setCases(data.cases || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки кейсов:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout currentPage="cases">
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
          
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-ink mb-4 font-heading tracking-tight">
              Кейсы
            </h1>
            <p className="text-lg text-ink-secondary max-w-3xl leading-relaxed">
              Реальные истории трансформации бизнеса
            </p>
          </section>

          {/* Cases Grid */}
          <div className="space-y-12">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                <p className="mt-4 text-ink-tertiary">Загрузка кейсов...</p>
              </div>
            ) : cases.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-tertiary">Кейсы временно недоступны</p>
              </div>
            ) : cases.map((caseItem, index) => (
              <div key={caseItem.id || index} className="border-t border-line/30 pt-12">
                
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-start justify-between gap-6 mb-4">
                    <div>
                      {caseItem.category && (
                        <span className="inline-block px-3 py-1 bg-bg-tertiary text-ink-tertiary text-sm font-medium rounded-lg mb-4">
                          {caseItem.category}
                        </span>
                      )}
                      <h2 className="text-2xl lg:text-3xl font-bold font-heading tracking-tight text-ink">{caseItem.project_title}</h2>
                    </div>
                  </div>
                  {caseItem.results_metric && (
                    <div className="text-xl font-semibold text-ink">{caseItem.results_metric}</div>
                  )}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  
                  {/* Left Column */}
                  <div className="space-y-10">
                    {caseItem.challenge_summary && (
                      <div>
                        <h3 className="text-xl font-semibold text-ink mb-4">
                          Вызов
                        </h3>
                        <p className="text-ink-tertiary font-light leading-relaxed text-lg">
                          {caseItem.challenge_summary}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="space-y-10">
                    {caseItem.outcome_text && (
                      <div>
                        <h3 className="text-xl font-semibold text-ink mb-4">
                          Результат
                        </h3>
                        <p className="text-ink-tertiary font-light leading-relaxed text-lg">
                          {caseItem.outcome_text}
                        </p>
                      </div>
                    )}

                    {/* Tech Stack */}
                    {caseItem.tech_stack && Array.isArray(caseItem.tech_stack) && caseItem.tech_stack.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-ink mb-4">
                          Технологии
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {caseItem.tech_stack.map((tech: string, idx: number) => (
                            <span key={idx} className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-lg">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <section className="mt-32 pt-16 border-t border-line/30">
            <div className="text-center">
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 font-heading tracking-tight text-ink">
                Хотите такие же результаты?
              </h2>
              <p className="text-xl text-ink-tertiary mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                Каждый кейс уникален, но подход остается системным
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => setIsConsultationModalOpen(true)}
                  className="bg-accent hover:bg-accent-hover text-white rounded-xl px-8 h-14 text-base shadow-sm"
                >
                  Обсудить ваш проект
                </Button>
                <Button 
                  size="lg"
                  onClick={() => navigate('/services')}
                  className="border-line text-ink hover:border-accent hover:bg-accent-lighter rounded-xl px-8 h-14 text-base"
                  variant="outline"
                >
                  Изучить услуги
                </Button>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />
    </Layout>
  );
};

export default Cases;