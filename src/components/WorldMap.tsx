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
              <rect width="1000" height="500" fill="#E8F4F8" />
              
              <path d="M 100 200 Q 150 180 200 200 L 250 220 L 300 180 L 350 200 L 400 190 L 450 210 L 480 200" fill="#D4E7DD" stroke="#A8D5BA" strokeWidth="1" />
              
              <path d="M 450 250 Q 500 240 550 260 L 600 240 L 650 270 L 700 250 L 750 280 L 800 260 L 850 290" fill="#D4E7DD" stroke="#A8D5BA" strokeWidth="1" />
              
              <path d="M 200 350 L 250 330 L 300 360 L 350 340 L 400 370 L 450 350" fill="#D4E7DD" stroke="#A8D5BA" strokeWidth="1" />
              
              <path d="M 500 350 L 550 330 L 600 350 L 650 340" fill="#D4E7DD" stroke="#A8D5BA" strokeWidth="1" />
              
              <circle cx="420" cy="200" r="8" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1.6s" />
              </circle>
              <text x="420" y="185" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="600">Испания</text>
              
              <circle cx="470" cy="190" r="8" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1.4s" />
              </circle>
              <text x="470" y="175" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="600">Словакия</text>
              
              <circle cx="535" cy="175" r="8" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1.2s" />
              </circle>
              <text x="535" y="160" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="600">Беларусь</text>
              
              <circle cx="600" cy="160" r="12" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x="600" y="140" textAnchor="middle" fill="#0D0D0D" fontSize="12" fontWeight="600">Россия</text>
              
              <circle cx="560" cy="215" r="9" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="9;13;9" dur="2s" repeatCount="indefinite" begin="0.2s" />
              </circle>
              <text x="560" y="240" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="600">Казахстан</text>
              
              <circle cx="540" cy="235" r="8" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="0.4s" />
              </circle>
              <text x="540" y="255" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="600">Узбекистан</text>
              
              <circle cx="548" cy="225" r="7" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="7;11;7" dur="2s" repeatCount="indefinite" begin="0.6s" />
              </circle>
              <text x="548" y="210" textAnchor="middle" fill="#0D0D0D" fontSize="10" fontWeight="600">Киргизия</text>
              
              <circle cx="500" cy="255" r="8" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>
              <text x="500" y="275" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="600">ОАЭ</text>
              
              <circle cx="700" cy="280" r="8" fill="#10B981" opacity="0.9">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="0.8s" />
              </circle>
              <text x="700" y="300" textAnchor="middle" fill="#0D0D0D" fontSize="11" fontWeight="600">Таиланд</text>
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