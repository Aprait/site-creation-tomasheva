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
          <div className="relative w-full aspect-[2/1] bg-white rounded-xl overflow-hidden">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1000" height="500" fill="#F0F2F5" />
              
              <circle cx="550" cy="180" r="25" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="550" y="155" textAnchor="middle" fill="#0D0D0D" fontSize="12" fontWeight="600">Россия</text>
              
              <circle cx="520" cy="230" r="18" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="18;22;18" dur="2s" repeatCount="indefinite" begin="0.2s" />
              </circle>
              <text x="520" y="260" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="500">Казахстан</text>
              
              <circle cx="505" cy="250" r="15" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="15;19;15" dur="2s" repeatCount="indefinite" begin="0.4s" />
              </circle>
              <text x="505" y="276" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="500">Узбекистан</text>
              
              <circle cx="515" cy="242" r="13" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="13;17;13" dur="2s" repeatCount="indefinite" begin="0.6s" />
              </circle>
              <text x="515" y="226" textAnchor="middle" fill="#0D0D0D" fontSize="9" fontWeight="500">Киргизия</text>
              
              <circle cx="640" cy="280" r="16" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite" begin="0.8s" />
              </circle>
              <text x="640" y="306" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="500">Таиланд</text>
              
              <circle cx="485" cy="275" r="16" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="16;20;16" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>
              <text x="485" y="301" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="500">ОАЭ</text>
              
              <circle cx="535" cy="185" r="14" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="14;18;14" dur="2s" repeatCount="indefinite" begin="1.2s" />
              </circle>
              <text x="535" y="172" textAnchor="middle" fill="#0D0D0D" fontSize="9" fontWeight="500">Белоруссия</text>
              
              <circle cx="470" cy="200" r="14" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="14;18;14" dur="2s" repeatCount="indefinite" begin="1.4s" />
              </circle>
              <text x="470" y="188" textAnchor="middle" fill="#0D0D0D" fontSize="9" fontWeight="500">Словакия</text>
              
              <circle cx="420" cy="220" r="15" fill="#10B981" opacity="0.8">
                <animate attributeName="r" values="15;19;15" dur="2s" repeatCount="indefinite" begin="1.6s" />
              </circle>
              <text x="420" y="207" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="500">Испания</text>
            </svg>
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
