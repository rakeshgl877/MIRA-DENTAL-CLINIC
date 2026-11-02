import React from 'react';
import { ClinicLogo } from './ClinicLogo';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Phone, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-ivory/80 pt-16 pb-12 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <ClinicLogo light size="lg" />
            </div>
            <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed mb-6 max-w-sm">
              Mira Dental Care & Implant Centre is listed in Bagalagunte, Bengaluru. Contact the clinic to confirm current treatments and appointment availability.
            </p>
            <a href="https://www.practo.com/bangalore/clinic/mira-dental-care-implant-centre-bagalakunte" target="_blank" rel="noopener noreferrer" className="inline-flex p-3.5 rounded-xl bg-forest-900 border border-gold/30 text-xs text-gold items-center gap-2 max-w-sm hover:bg-forest-800 transition-colors">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>View clinic profile and patient feedback</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-semibold text-ivory mb-4 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-gold transition-colors">Treatments</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Clinic</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-gold transition-colors">Lead Doctor</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-gold transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold transition-colors">Clinic Gallery</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Treatments */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-ivory mb-4 tracking-wide">
              Specialized Care
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {TREATMENTS.map((treatment) => (
                <li key={treatment.id}>
                  <a
                    href={getWhatsAppUrl(`Hi Mira Dental Clinic, I would like to enquire about ${treatment.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors flex items-center justify-between group"
                  >
                    <span>{treatment.name}</span>
                    <span className="text-[10px] text-gold/60 opacity-0 group-hover:opacity-100 transition-opacity">
                      Enquire
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-ivory mb-4 tracking-wide">
              Clinic Details
            </h4>
            <div className="space-y-3.5 text-xs leading-relaxed text-ivory/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  #378, Pujar Complex, Opp. MEI Ground, 60 Feet Road, Bagalagunte, Hesarghatta Main Rd, Bengaluru – 560073
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-gold text-ivory font-semibold">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <div className="text-ivory font-medium">Mon – Sat:</div>
                  <div>10:00 AM – 1:30 PM | 5:00 PM – 8:30 PM</div>
                  <div className="text-gold mt-0.5">Sun: 10:00 AM – 1:00 PM (Appt only)</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl bg-gold text-forest-900 font-bold text-xs hover:bg-gold-300 transition-colors shadow-sm"
                >
                  Book Consultation Slot
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Presentation Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <div>
            © {new Date().getFullYear()} Mira Dental Care & Implant Centre. All rights reserved.
          </div>

          <div className="flex items-center gap-1.5 text-ivory/70">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            <span>by</span>
            <span className="font-semibold text-gold">Mavern Studio</span>
            <span>as a bespoke concept</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-gold transition-colors text-ivory/70"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
