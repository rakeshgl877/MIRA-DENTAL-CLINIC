import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ClinicLogo } from './components/ClinicLogo';
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
  const [showLogoLoader, setShowLogoLoader] = useState(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [preselectedTreatmentName, setPreselectedTreatmentName] = useState<string>('Root Canal Treatment');

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLogoLoader(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

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
    <>
      <AnimatePresence>
      {showLogoLoader && (
        <motion.div
          role="status"
          aria-label="Loading Mira Dental Care"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-ivory"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: [0.85, 1.04, 1], opacity: 1 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="logo-loader-mark"
          >
            <ClinicLogo size="lg" />
          </motion.div>
          <span className="text-xs font-medium tracking-[0.22em] uppercase text-forest/70">A brighter smile starts here</span>
          <div className="h-1 w-40 overflow-hidden rounded-full bg-forest/10">
            <motion.div
              className="h-full w-1/2 rounded-full bg-gold"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
      </AnimatePresence>
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

        {/* Google Review Highlights */}
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
    </>
  );
}

export default App;
