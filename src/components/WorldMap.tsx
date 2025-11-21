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
              viewBox="0 0 2000 1000" 
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="2000" height="1000" fill="#E8F4F8"/>
              
              <path d="M 100 300 L 200 250 L 250 280 L 300 260 L 350 290 L 380 270 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
              <path d="M 500 200 L 600 180 L 650 210 L 680 190 L 700 220 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
              <path d="M 800 400 L 900 380 L 950 410 L 980 390 L 1000 420 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
              <path d="M 1200 300 L 1300 280 L 1350 310 L 1380 290 L 1400 320 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
              <path d="M 300 600 L 400 580 L 450 610 L 480 590 L 500 620 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
              <path d="M 1600 500 L 1700 480 L 1750 510 L 1780 490 L 1800 520 Z" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="0.5"/>
              
              <path d="M 700 250 L 750 230 L 780 245 L 800 235 L 820 255 L 850 240 L 880 260 L 910 245 L 950 265 L 990 250 L 1030 270 L 1070 255 L 1120 280 L 1160 265 L 1200 290 L 1240 275 L 1280 300 L 1320 285 L 1360 310 L 1400 295 L 1440 320 L 1470 305 L 1500 330 L 1530 315 L 1560 340 L 1590 325 L 1620 350 L 1650 335 L 1680 360 L 1700 345 L 1720 365 L 1740 350 L 1760 370 L 1780 355 L 1800 380 L 1750 400 L 1700 420 L 1650 440 L 1600 420 L 1550 440 L 1500 460 L 1450 440 L 1400 460 L 1350 440 L 1300 460 L 1250 440 L 1200 460 L 1150 440 L 1100 460 L 1050 440 L 1000 460 L 950 440 L 900 460 L 850 440 L 800 420 L 750 400 L 720 380 L 700 360 L 690 340 L 680 320 L 670 300 L 680 280 L 690 270 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="1200" y="360" textAnchor="middle" fill="#059669" fontSize="20" fontWeight="700">Россия</text>
              
              <path d="M 1050 390 L 1080 380 L 1110 395 L 1140 385 L 1170 400 L 1200 390 L 1230 405 L 1250 395 L 1270 410 L 1240 420 L 1210 435 L 1180 425 L 1150 440 L 1120 430 L 1090 445 L 1060 435 L 1040 420 L 1030 405 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="1140" y="415" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="600">Казахстан</text>
              
              <path d="M 1000 430 L 1020 420 L 1040 435 L 1060 425 L 1075 440 L 1055 450 L 1035 465 L 1015 455 L 995 445 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="1035" y="450" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="600">Узбекистан</text>
              
              <path d="M 1100 420 L 1115 415 L 1130 425 L 1145 420 L 1155 430 L 1140 440 L 1125 435 L 1110 440 L 1095 430 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="1125" y="432" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="600">Киргизия</text>
              
              <path d="M 920 300 L 940 295 L 955 305 L 970 300 L 982 310 L 965 320 L 948 315 L 930 320 L 915 310 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="948" y="312" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="600">Беларусь</text>
              
              <path d="M 850 320 L 870 315 L 885 325 L 900 320 L 915 330 L 900 340 L 885 335 L 870 340 L 855 330 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="882" y="332" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="600">Словакия</text>
              
              <path d="M 730 360 L 760 350 L 790 365 L 820 355 L 850 370 L 870 360 L 880 380 L 860 395 L 830 405 L 800 395 L 770 410 L 740 400 L 720 385 L 710 370 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="790" y="385" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="600">Испания</text>
              
              <path d="M 1180 520 L 1200 515 L 1220 525 L 1240 520 L 1260 530 L 1245 540 L 1225 535 L 1205 540 L 1185 530 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="1220" y="532" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="600">ОАЭ</text>
              
              <path d="M 1550 560 L 1570 555 L 1590 565 L 1610 560 L 1625 570 L 1610 580 L 1590 575 L 1570 580 L 1555 570 Z" 
                    fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="1.5"/>
              <text x="1588" y="572" textAnchor="middle" fill="#059669" fontSize="12" fontWeight="600">Таиланд</text>
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