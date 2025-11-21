import React from 'react';

const WorldMap = () => {
  const countries = [
    { name: 'Россия', color: '#10B981' },
    { name: 'Казахстан', color: '#10B981' },
    { name: 'Узбекистан', color: '#10B981' },
    { name: 'Таиланд', color: '#10B981' },
    { name: 'ОАЭ', color: '#10B981' },
    { name: 'Киргизия', color: '#10B981' },
    { name: 'Словакия', color: '#10B981' },
    { name: 'Испания', color: '#10B981' },
    { name: 'Белоруссия', color: '#10B981' }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-ink mb-3 font-heading tracking-tight">
            География работы
          </h2>
          <p className="text-base text-ink-tertiary max-w-3xl leading-relaxed">
            Проведение и фасилитация стратегических сессий для компаний с русскоговорящими командами по всему миру
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9e8f7d1b0d4e5a2b3c6d8e9f0a1b2c3&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              className="rounded-xl"
              title="География работы"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: country.color }}
                />
                <span className="text-sm font-medium text-ink">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
