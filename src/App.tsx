import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RealPhotosGallery } from './components/RealPhotosGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { QuizConsultant } from './components/QuizConsultant';
import { ServicesCatalog } from './components/ServicesCatalog';
import { BookingSection } from './components/BookingSection';
import { GoogleReviews } from './components/GoogleReviews';
import { StudioAmbienceSection } from './components/StudioAmbienceSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Service } from './types';
import { SERVICES } from './data/servicesData';

export default function App() {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(['design-visagismo']);
  const [isQuizOpen, setIsQuizOpen] = useState<boolean>(false);
  const [bookingNotes, setBookingNotes] = useState<string>('');

  const handleToggleService = (service: Service) => {
    setSelectedServiceIds((prev) =>
      prev.includes(service.id) ? prev.filter((id) => id !== service.id) : [...prev, service.id]
    );
  };

  const handleToggleServiceId = (serviceId: string) => {
    setSelectedServiceIds((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId]
    );
  };

  const scrollToBooking = () => {
    const el = document.getElementById('agendamento');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookWithQuizResult = (serviceName: string, quizDetails: string) => {
    // Find matching service or add it
    const found = SERVICES.find((s) => s.name.toLowerCase().includes(serviceName.toLowerCase()) || serviceName.toLowerCase().includes(s.name.toLowerCase()));
    if (found && !selectedServiceIds.includes(found.id)) {
      setSelectedServiceIds([found.id]);
    }
    setBookingNotes(quizDetails);
    setIsQuizOpen(false);
    setTimeout(() => {
      scrollToBooking();
    }, 150);
  };

  const handleSelectServiceFromBeforeAfter = (serviceTitle: string) => {
    const found = SERVICES.find((s) => s.name.toLowerCase().includes(serviceTitle.toLowerCase()) || serviceTitle.toLowerCase().includes(s.name.toLowerCase()));
    if (found) {
      setSelectedServiceIds([found.id]);
    }
    scrollToBooking();
  };

  const handleSelectProcedureFromGallery = (procedureName: string) => {
    const found = SERVICES.find((s) => s.name.toLowerCase().includes(procedureName.toLowerCase()) || procedureName.toLowerCase().includes(s.name.toLowerCase()));
    if (found) {
      setSelectedServiceIds([found.id]);
    }
    setBookingNotes(`Interesse no procedimento da galeria: ${procedureName}`);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242120]">
      {/* Header with live open status and business info */}
      <Header
        onBookClick={scrollToBooking}
        onQuizClick={() => setIsQuizOpen(true)}
      />

      <main className="flex-grow">
        {/* Luxury Hero with Trust Badges */}
        <Hero
          onBookClick={scrollToBooking}
          onQuizClick={() => setIsQuizOpen(true)}
        />

        {/* Real Photos Gallery from Google Maps Profile */}
        <RealPhotosGallery
          onSelectProcedureForBooking={handleSelectProcedureFromGallery}
        />

        {/* Dynamic Before & After Interactive Slider */}
        <BeforeAfterSlider
          onSelectServiceForBooking={handleSelectServiceFromBeforeAfter}
        />

        {/* Dynamic Services Catalog with category tabs and filters */}
        <ServicesCatalog
          selectedServiceIds={selectedServiceIds}
          onToggleService={handleToggleService}
          onOpenBooking={scrollToBooking}
        />

        {/* Online Appointment Scheduler with WhatsApp message preview generator */}
        <BookingSection
          selectedServiceIds={selectedServiceIds}
          onToggleServiceId={handleToggleServiceId}
          presetNotes={bookingNotes}
        />

        {/* Google Maps Reviews (5.0 rating) */}
        <GoogleReviews />

        {/* Studio Ambience & External Facade in Sinop */}
        <StudioAmbienceSection onBookClick={scrollToBooking} />

        {/* Location & Directions (Ao lado da Unemat) */}
        <LocationSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Visagism Quiz Modal */}
      <QuizConsultant
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onBookWithService={handleBookWithQuizResult}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp
        onBookClick={scrollToBooking}
        onQuizClick={() => setIsQuizOpen(true)}
      />
    </div>
  );
}

