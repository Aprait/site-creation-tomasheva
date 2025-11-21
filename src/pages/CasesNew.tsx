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
          <div className="grid grid-cols-1 gap-8">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
                <p className="mt-4 text-ink-tertiary">Загрузка кейсов...</p>
              </div>
            ) : cases.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-tertiary">Кейсы временно недоступны</p>
              </div>
            ) : cases.map((caseItem, index) => {
              const colors = [
                { bg: 'from-blue-500 to-indigo-600', badge: 'bg-blue-100 text-blue-700', icon: 'Zap' },
                { bg: 'from-emerald-500 to-green-600', badge: 'bg-emerald-100 text-emerald-700', icon: 'TrendingUp' },
                { bg: 'from-purple-500 to-pink-600', badge: 'bg-purple-100 text-purple-700', icon: 'Sparkles' },
                { bg: 'from-orange-500 to-red-600', badge: 'bg-orange-100 text-orange-700', icon: 'Target' },
                { bg: 'from-cyan-500 to-blue-600', badge: 'bg-cyan-100 text-cyan-700', icon: 'BarChart' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div key={caseItem.id || index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow">
                  
                  {/* Header with gradient */}
                  <div className={`bg-gradient-to-r ${colorScheme.bg} p-8 text-white`}>
                    <div className="flex items-start justify-between gap-6 mb-4">
                      <div className="flex-1">
                        {caseItem.category && (
                          <span className={`inline-block px-3 py-1 ${colorScheme.badge} text-sm font-medium rounded-lg mb-4`}>
                            {caseItem.category}
                          </span>
                        )}
                        <h2 className="text-2xl lg:text-3xl font-bold font-heading tracking-tight">{caseItem.project_title}</h2>
                        {caseItem.results_metric && (
                          <div className="text-lg font-semibold mt-3 opacity-95">{caseItem.results_metric}</div>
                        )}
                      </div>
                      <Icon name={colorScheme.icon as any} size={40} className="opacity-80" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      
                      {/* Left Column */}
                      <div>
                        {caseItem.challenge_summary && (
                          <div>
                            <h3 className="text-lg font-semibold text-ink mb-3 flex items-center gap-2">
                              <Icon name="AlertCircle" size={20} className="text-red-500" />
                              Вызов
                            </h3>
                            <p className="text-ink-tertiary leading-relaxed">
                              {caseItem.challenge_summary}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-6">
                        {caseItem.outcome_text && (
                          <div>
                            <h3 className="text-lg font-semibold text-ink mb-3 flex items-center gap-2">
                              <Icon name="CheckCircle" size={20} className="text-green-500" />
                              Результат
                            </h3>
                            <p className="text-ink-tertiary leading-relaxed">
                              {caseItem.outcome_text}
                            </p>
                          </div>
                        )}

                        {/* Tech Stack */}
                        {caseItem.tech_stack && Array.isArray(caseItem.tech_stack) && caseItem.tech_stack.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-ink mb-3 flex items-center gap-2">
                              <Icon name="Code" size={20} className="text-accent" />
                              Технологии
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {caseItem.tech_stack.map((tech: string, idx: number) => (
                                <span key={idx} className={`inline-block px-3 py-1 ${colorScheme.badge} text-sm font-medium rounded-lg`}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
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