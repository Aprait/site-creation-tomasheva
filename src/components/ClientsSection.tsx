import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "Уральские авиалинии",
      logo: "https://cdn.poehali.dev/files/ea385159-c001-430a-ab1e-bde567ffadd0.jpg",
      category: "Авиакомпания"
    },
    {
      name: "МЕГАМАРТ",
      logo: "/api/placeholder/120/60",
      category: "Ритейл"
    },
    {
      name: "Мир детства",
      logo: "/api/placeholder/120/60",
      category: "Детские товары"
    },
    {
      name: "ИНСИ",
      logo: "/api/placeholder/120/60",
      category: "Технологии"
    },
    {
      name: "ТК ОЛМИ",
      logo: "/api/placeholder/120/60",
      category: "Логистика"
    },
    {
      name: "Банзай",
      logo: "/api/placeholder/120/60",
      category: "Издательство"
    },
    {
      name: "Джанго Парк",
      logo: "/api/placeholder/120/60",
      category: "Развлечения"
    },
    {
      name: "Дерзкий",
      logo: "/api/placeholder/120/60",
      category: "IT"
    },
    {
      name: "EctemOk",
      logo: "/api/placeholder/120/60",
      category: "Технологии"
    },
    {
      name: "RedHolt",
      logo: "/api/placeholder/120/60",
      category: "IT-услуги"
    },
    {
      name: "Wowee",
      logo: "/api/placeholder/120/60",
      category: "Digital"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-brand-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-heading">
            Среди моих клиентов
          </h2>
          <p className="text-xl text-gray-600 font-body">
            Компании, с которыми я работала
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border">
            <span className="text-sm text-gray-600 font-body">
              От стартапов до компаний с оборотом 20+ млрд ₽
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover animate-fade-in border border-gray-100"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4 bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={`Логотип ${client.name}`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 text-center mb-1 font-heading">
                {client.name}
              </h3>
              <p className="text-xs text-gray-500 text-center font-body">
                {client.category}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">
              Результаты совместной работы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2 font-heading">15+</div>
                <div className="text-sm text-gray-600 font-body">отраслей экономики</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2 font-heading">98%</div>
                <div className="text-sm text-gray-600 font-body">клиентов рекомендуют</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-navy mb-2 font-heading">250+</div>
                <div className="text-sm text-gray-600 font-body">успешных проектов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;