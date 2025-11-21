import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WorldMap = () => {
  const countries = [
    { name: 'Россия', lat: 55.7558, lng: 37.6173 },
    { name: 'Казахстан', lat: 51.1694, lng: 71.4491 },
    { name: 'Узбекистан', lat: 41.2995, lng: 69.2401 },
    { name: 'Таиланд', lat: 13.7563, lng: 100.5018 },
    { name: 'ОАЭ', lat: 25.2048, lng: 55.2708 },
    { name: 'Киргизия', lat: 42.8746, lng: 74.5698 },
    { name: 'Словакия', lat: 48.1486, lng: 17.1077 },
    { name: 'Испания', lat: 40.4168, lng: -3.7038 },
    { name: 'Белоруссия', lat: 53.9006, lng: 27.5590 }
  ];

  const customIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="8" fill="#10B981" stroke="white" stroke-width="2"/>
        <circle cx="16" cy="16" r="12" fill="#10B981" opacity="0.3"/>
      </svg>
    `),
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });

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
            <MapContainer
              center={[50, 50]}
              zoom={3}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {countries.map((country, index) => (
                <Marker 
                  key={index} 
                  position={[country.lat, country.lng]}
                  icon={customIcon}
                >
                  <Popup>
                    <div className="text-center p-2">
                      <p className="font-semibold text-ink">{country.name}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200"
              >
                <div
                  className="w-3 h-3 rounded-full bg-accent"
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
