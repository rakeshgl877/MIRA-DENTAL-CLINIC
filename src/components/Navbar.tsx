import React, { useState, useEffect } from 'react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_INFO } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-forest text-ivory/80 text-[11px] sm:text-xs py-2 px-4 border-b border-forest-700/50 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-ivory/90">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              Opp. MEI Ground, 60 Ft Rd, MEI Layout, Hesarghatta Main Rd, Bengaluru
            </span>
            <span className="flex items-center gap-1.5 text-ivory/90">
              <Clock className="w-3.5 h-3.5 text-gold" />
              Mon - Sat: 10:00 AM - 1:30 PM | 5:00 PM - 8:30 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-gold font-medium">
              ★ 4.8 Rating (238+ Verified Patient Reviews)
            </span>
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="text-ivory hover:text-gold transition-colors flex items-center gap-1 font-semibold"
            >
              <Phone className="w-3 h-3 text-gold" />
              {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory-100/95 backdrop-blur-md shadow-luxury border-b border-forest/10 py-3'
            : 'bg-ivory/90 backdrop-blur-sm border-b border-forest/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="focus:outline-none">
              <ClinicLogo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-charcoal/80 hover:text-forest transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppUrl('Hi Mira Dental Clinic, I would like to enquire about consultation timings and book an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-forest/20 text-forest text-xs font-semibold hover:border-forest hover:bg-forest/5 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                WhatsApp Concierge
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-ivory text-xs sm:text-sm font-semibold tracking-wide hover:bg-forest-700 shadow-md hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-gold" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-forest text-ivory text-xs font-semibold sm:hidden"
              >
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-charcoal hover:text-forest hover:bg-forest/5 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-ivory-100 border-b border-forest/15 px-4 pt-4 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-charcoal hover:text-forest hover:bg-forest/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-3 border-t border-forest/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-forest text-ivory font-semibold text-sm shadow-md"
                >
                  <Calendar className="w-4 h-4 text-gold" />
                  Book Your Consultation
                </button>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-forest/20 text-forest font-semibold text-sm hover:bg-forest/5"
                >
                  Enquire via WhatsApp
                </a>
                <div className="text-center text-xs text-charcoal/60 mt-1">
                  Opp. MEI Ground, Bagalagunte, Hesarghatta Main Rd
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
