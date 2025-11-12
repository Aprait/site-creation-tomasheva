import React from 'react';

const ClientsSection = () => {
  const clients = [
    {
      name: "Уральские авиалинии",
      logo: "https://cdn.poehali.dev/files/ea385159-c001-430a-ab1e-bde567ffadd0.jpg",
      category: "Авиакомпания",
      website: ""
    },
    {
      name: "FLE",
      logo: "/img/Flex Service.png",
      category: "Сервис",
      website: "https://fle.kz"
    },
    {
      name: "Tynda Music",
      logo: "/img/Tynda Music.png",
      category: "Музыка",
      website: "https://tyndamusic.com"
    },
    {
      name: "Саккурам",
      logo: "/img/Саккурам.png",
      category: "Продукты",
      website: "https://sakkuram.ru"
    },
    {
      name: "В Восторге",
      logo: "https://cdn.poehali.dev/files/c7798e8f-c5e0-4eaf-9b02-46e1e5c7ecc1.png",
      category: "Праздники",
      website: "https://vvostorge-deti.ru"
    },
    {
      name: "Театр «НитьЯ»",
      logo: "/img/Нитья.png",
      category: "Театр",
      website: "https://teatrnitya.ru"
    },
    {
      name: "PAPA MOSCOW",
      logo: "/img/PAPA Moscow.png",
      category: "HoReCa",
      website: "https://papamoscow.ru"
    },
    {
      name: "Endeavour Kazakhstan",
      logo: "/img/Endeavour.png",
      category: "Одежда",
      website: "https://endeavour.kz"
    },
    {
      name: "ИНСИ",
      logo: "/img/ИНСИ.jpg",
      category: "Строительство",
      website: "https://insi-dom.ru"
    },
    {
      name: "Банзай",
      logo: "/img/Банзай.png",
      category: "Медиа",
      website: ""
    },
    {
      name: "Джанго Парк",
      logo: "/img/Джанго.png",
      category: "Развлечения",
      website: "https://jango-park.ru"
    },
    {
      name: "Дерзкий",
      logo: "/img/Дерзкий.png",
      category: "Производство",
      website: "https://derzky.moscow"
    },
    {
      name: "RedHolt",
      logo: "/img/RedHolt.jpg",
      category: "Логистика",
      website: "https://redholt.ru"
    },
    {
      name: "Wowee",
      logo: "/img/wowee.svg",
      category: "Косметика",
      website: "https://wowee.ru"
    },
    {
      name: "EctemOk (OKK)",
      logo: "/img/EctemOK.png",
      category: "IT",
      website: "https://okk.ectem.ru"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-bg-tertiary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-ink mb-4 font-heading">
            Среди моих клиентов
          </h2>
          <p className="text-xl text-ink-tertiary font-body">
            Компании, с которыми я работала
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-line/30">
            <span className="text-sm text-ink-tertiary font-body">
              От стартапов до компаний с оборотом 20+ млрд ₽
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover animate-fade-in border border-line/30 hover:border-accent group"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="w-20 h-20 flex items-center justify-center mb-4 bg-bg-secondary rounded-lg overflow-hidden">
                <img 
                  src={client.logo} 
                  alt={`Логотип ${client.name}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-ink text-center mb-1 font-heading">
                {client.name}
              </h3>
              <p className="text-xs text-ink-quaternary text-center font-body mb-2">
                {client.category}
              </p>
              {client.website && (
                <a 
                  href={client.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-accent-hover transition-colors font-body"
                >
                  Перейти на сайт →
                </a>
              )}
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default ClientsSection;