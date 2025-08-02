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
      logo: "/img/1e626a9d-9f39-4ce1-91bc-884876df0dbf.jpg",
      category: "Ритейл"
    },
    {
      name: "Мир детства",
      logo: "/img/c4c43bc4-9820-4fb1-9070-90e19c09b129.jpg",
      category: "Детские товары"
    },
    {
      name: "ИНСИ",
      logo: "/img/787054bc-414c-4234-a0fc-054cce6dcb84.jpg",
      category: "Технологии"
    },
    {
      name: "ТК ОЛМИ",
      logo: "/img/dd797f96-b6fd-481b-8316-33e934ce7319.jpg",
      category: "Логистика"
    },
    {
      name: "Банзай",
      logo: "/img/ba13414a-0404-46e1-942c-ec1d8ffade15.jpg",
      category: "Издательство"
    },
    {
      name: "Джанго Парк",
      logo: "/img/56b46447-6b70-4bf9-978e-41a0559f2183.jpg",
      category: "Развлечения"
    },
    {
      name: "Дерзкий",
      logo: "/img/23a744f5-75df-47f5-bd57-3aa1237bdf8f.jpg",
      category: "IT"
    },
    {
      name: "EctemOk",
      logo: "/img/e873e486-0447-43b3-a559-ca1ae98792a6.jpg",
      category: "Технологии"
    },
    {
      name: "RedHolt",
      logo: "/img/ec22a7d2-a539-44da-9870-35d7577c0fd3.jpg",
      category: "IT-услуги"
    },
    {
      name: "Wowee",
      logo: "/img/c6c5f832-c879-456c-9af5-dd090206ede8.jpg",
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
        

      </div>
    </section>
  );
};

export default ClientsSection;