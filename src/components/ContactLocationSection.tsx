import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MapPin, Phone, Clock, MessageCircle, Calendar, Navigation, ExternalLink } from 'lucide-react';

interface ContactLocationSectionProps {
  onOpenBooking: () => void;
}

export const ContactLocationSection: React.FC<ContactLocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold uppercase tracking-widest mb-3">
            <Navigation className="w-3.5 h-3.5 text-gold" />
            Visit & Connect
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest mb-4 leading-tight">
            Conveniently Located on Hesarghatta Main Road
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
            Situated opposite the MEI Ground in Bagalagunte, with accessible parking and dedicated patient appointment slots to respect your time.
          </p>
        </div>

        {/* Content Grid: Contact Details & Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-forest/10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-forest mb-1">
                    Clinic Address
                  </h3>
                  <p className="text-xs font-bold text-gold-600 mb-1">
                    {CLINIC_INFO.address.landmark}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                    {CLINIC_INFO.address.line1}, {CLINIC_INFO.address.line2},<br />
                    {CLINIC_INFO.address.mainRoad}, {CLINIC_INFO.address.city} – {CLINIC_INFO.address.pincode}
                  </p>
                  <a
                    href={CLINIC_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-forest hover:text-gold-600 mt-3 transition-colors"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-forest/10 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest/5 text-forest flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold text-forest mb-2">
                    Consultation Hours
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-charcoal/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-forest/5 gap-1">
                      <span className="font-medium text-forest">Monday – Saturday:</span>
                      <span className="text-charcoal/70">10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                      <span className="font-medium text-forest">Sunday:</span>
                      <span className="text-gold-700 font-semibold">10:00 AM – 1:00 PM (Prior Appointment)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & Direct WhatsApp Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-forest text-ivory shadow-luxury flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ivory">
                      Direct Enquiries & Bookings
                    </h3>
                    <p className="text-xs text-ivory/70">
                      Spoken languages: English, Kannada, Hindi
                    </p>
                  </div>
                </div>

                <div className="text-2xl font-bold text-gold tracking-wide mb-6">
                  {CLINIC_INFO.phone}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-forest-700 hover:bg-forest-600 text-ivory text-xs font-semibold border border-forest-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>Call Reception</span>
                </a>

                <a
                  href={getWhatsAppUrl('Hi Mira Dental Clinic, I would like to book a dental consultation.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gold hover:bg-gold-300 text-forest-900 text-xs font-bold transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Frame */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-forest/15 shadow-luxury min-h-[420px] bg-forest/5 flex flex-col">
            {/* Map Frame Header */}
            <div className="bg-white p-4 px-6 border-b border-forest/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-forest">Live Clinic Map Location</span>
              </div>
              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gold-700 hover:text-forest flex items-center gap-1"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Interactive Map */}
            <div className="flex-1 w-full relative min-h-[360px]">
              <iframe
                title="Mira Dental Care & Implant Centre Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7410058983944!2d77.50201827479708!3d13.049615987272895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d19f2a74c73%3A0x6bbf692f8efb54a7!2sMira%20Dental%20Care%20%26%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Bottom Quick Directions Assistance */}
            <div className="bg-ivory-100 p-4 px-6 border-t border-forest/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-charcoal/80">
              <span>Landmark: Right opposite MEI Ground / Stadium on 60 Feet Road.</span>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 font-bold text-forest hover:text-gold-700 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Schedule Your Visit Slot</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
