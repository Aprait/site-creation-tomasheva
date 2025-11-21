import React from 'react';
import Icon from '@/components/ui/icon';

const WorldMap = () => {
  const regions = [
    {
      title: 'Европа',
      countries: ['Испания', 'Словакия', 'Белоруссия'],
      icon: 'MapPin',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Евразия',
      countries: ['Россия', 'Казахстан', 'Узбекистан', 'Киргизия'],
      icon: 'Globe',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Азия и Ближний Восток',
      countries: ['Таиланд', 'ОАЭ'],
      icon: 'Navigation',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-4">
            <Icon name="Plane" size={16} />
            Международный опыт
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-3 font-heading tracking-tight">
            География работы
          </h2>
          <p className="text-base text-ink-tertiary max-w-3xl mx-auto leading-relaxed">
            Проведение и фасилитация стратегических сессий для компаний с русскоговорящими командами по всему миру
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${region.gradient} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${region.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={region.icon} size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-ink mb-4 font-heading">
                  {region.title}
                </h3>
                
                <div className="space-y-2">
                  {region.countries.map((country, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-ink-tertiary group-hover:text-accent transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-sm font-medium">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/5 rounded-full border border-accent/10">
            <Icon name="Users" size={18} className="text-accent" />
            <span className="text-ink-secondary font-medium">
              <span className="font-bold text-accent">9 стран</span> · Команды по всему миру
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;