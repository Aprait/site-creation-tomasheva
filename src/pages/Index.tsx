import React from 'react';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import ClientsSection from '@/components/ClientsSection';
import AcceleratorsSection from '@/components/AcceleratorsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-brand-white text-brand-gray">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      {/* Блок отзывов будет добавлен позже */}
      <ClientsSection />
      <AcceleratorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;