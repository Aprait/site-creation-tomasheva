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
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ClientsSection />
      <AcceleratorsSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EducationSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;