import React from 'react';

const StatsSection = () => {
  const stats = [
    { 
      number: "280+", 
      label: "Команд проведено", 
      description: "через систему трекинга",
      icon: "Users"
    },
    { 
      number: "21+ млрд", 
      label: "Общий оборот", 
      description: "компаний-клиентов",
      icon: "TrendingUp"
    },
    { 
      number: "40%", 
      label: "Средний рост", 
      description: "выручки после внедрения ИИ",
      icon: "Zap"
    },
    { 
      number: "×8", 
      label: "Максимальный рост", 
      description: "оборота компании",
      icon: "Rocket"
    }
  ];

  return (
    <section className="section-padding bg-dark-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxIDEgTCA1OSAxIEwgNTkgNTkgTCAxIDU5IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFhMWExYSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="text-center mb-16">
          <p className="text-brand-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Результаты в цифрах
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Проверенная эффективность
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Каждая цифра — результат системной работы с реальными компаниями
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="dark-card rounded-2xl p-8 h-full transition-all duration-300 hover:translate-y-[-4px]">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 to-brand-primary/0 group-hover:from-brand-primary/10 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
                
                <div className="relative z-10">
                  {/* Number */}
                  <div className="text-5xl font-bold text-brand-primary mb-4 glow-text">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xl font-semibold text-text-primary mb-2">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-text-secondary">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Готовы увеличить эффективность вашего бизнеса с помощью ИИ?
          </p>
          <button className="primary-button px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center gap-3 group">
            Обсудить ваш проект
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;