import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { AboutSection } from './components/AboutSection';
import { DoctorsSection } from './components/DoctorsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { FAQSection } from './components/FAQSection';
import { ContactLocationSection } from './components/ContactLocationSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingModal } from './components/BookingModal';
import { TreatmentDetailModal } from './components/TreatmentDetailModal';
import type { Treatment } from './data/clinicData';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [preselectedTreatmentName, setPreselectedTreatmentName] = useState<string>('Root Canal Treatment');

  const handleOpenBooking = (treatmentName?: string) => {
    if (treatmentName) {
      setPreselectedTreatmentName(treatmentName);
    }
    setBookingModalOpen(true);
  };

  const handleSelectTreatment = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col selection:bg-gold/30 selection:text-forest">
      {/* Premium Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Viewports */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Trust & Accreditations Section */}
        <TrustSection />

        {/* Treatments Showcase */}
        <TreatmentsSection onSelectTreatment={handleSelectTreatment} />

        {/* Editorial About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Meet the Doctors */}
        <DoctorsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Genuine Patient Reviews */}
        <TestimonialsSection />

        {/* Clinic Interior & Tech Gallery with Lightbox */}
        <GallerySection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Location, Contact & Google Maps */}
        <ContactLocationSection onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Luxury Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Concierge WhatsApp Widget */}
      <WhatsAppFloating />

      {/* Mobile Sticky Booking Bar */}
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Appointment Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedTreatment={preselectedTreatmentName}
      />

      {/* Treatment Details Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onOpenBooking={() => handleOpenBooking(selectedTreatment?.name)}
      />
    </div>
  );
}

export default App;
