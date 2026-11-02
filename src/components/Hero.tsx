import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Calendar, ArrowRight, ShieldCheck, Award, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-28 bg-ivory">
      {/* Delicate background aesthetic lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] rounded-full bg-forest/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Trust Pill / Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/5 border border-forest/15 w-fit mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-forest">
                Mira Dental Care & Implant Centre
              </span>
              <span className="text-forest/30">|</span>
              <span className="text-xs text-charcoal/80 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gold" />
                Hesarghatta Main Rd, Bengaluru
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-semibold text-forest leading-[1.08] tracking-tight mb-6"
            >
              Where exceptional care meets{' '}
              <span className="italic font-normal text-gold-600 block sm:inline">
                confident smiles.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-charcoal/80 font-normal leading-relaxed max-w-2xl mb-8"
            >
              {CLINIC_INFO.subTagline} Led by <strong className="text-forest font-semibold">Dr. Ashwini Marurkar</strong> (BDS, MDS Conservative Dentistry & Endodontics), with treatment options discussed during a personal consultation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-forest text-ivory font-semibold text-sm sm:text-base tracking-wide hover:bg-forest-700 shadow-luxury hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <Calendar className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span>Book Your Consultation</span>
              </button>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-forest/20 text-forest font-semibold text-sm sm:text-base hover:bg-forest/5 transition-all duration-300"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-forest/70" />
              </a>
            </motion.div>

            {/* Ratings & Accreditations Mini Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 border-t border-forest/10 grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              {/* Public clinic profile */}
              <div className="flex flex-col">
                <div className="text-forest font-semibold text-sm mb-1">Clinic details</div>
                <span className="text-xs text-charcoal/70">
                  <a href="https://www.practo.com/bangalore/clinic/mira-dental-care-implant-centre-bagalakunte" target="_blank" rel="noopener noreferrer" className="underline">View clinic profile & photos</a>
                </span>
              </div>

              {/* Specialization Badge */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-forest font-semibold text-sm mb-1">
                  <Award className="w-4 h-4 text-gold" />
                  <span>Dentist</span>
                </div>
                <span className="text-xs text-charcoal/70">
                  MDS Endodontist & Implant Specialist
                </span>
              </div>

              {/* Painless Guarantee */}
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1.5 text-forest font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Patient-focused care</span>
                </div>
                <span className="text-xs text-charcoal/70">
                  Rotary RVG & Computerized Tech
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Frame */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Outer decorative gold border frame */}
              <div className="absolute -inset-3 rounded-[2rem] border border-gold/40 transform -rotate-1 pointer-events-none" />
              
              {/* Main image container */}
              <div className="relative rounded-[1.75rem] overflow-hidden bg-forest shadow-2xl border-2 border-ivory">
                <img
                  src={`${import.meta.env.BASE_URL}images/mira-clinic-exterior-day.jpg`}
                  alt="Mira Dental Care & Implant Centre clinical treatment operatory in Bagalagunte, Bengaluru"
                  className="w-full h-[430px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-ivory-100/95 backdrop-blur-md border border-gold/30 shadow-luxury">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-gold-600 font-bold">
                        Clinic information
                      </div>
                      <div className="text-sm font-bold text-forest">
                        Mira Dental Care & Implant Centre
                      </div>
                      <div className="text-xs text-charcoal/80 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-gold" />
                        Pujar Complex, Opp. MEI Ground
                      </div>
                    </div>
                    <a
                      href={getWhatsAppUrl('Hi Mira Dental Clinic, I would like to book a consultation.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-lg bg-forest text-ivory text-xs font-semibold hover:bg-forest-700 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Top-Right Accreditation Pill */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-forest text-ivory px-4 py-2 rounded-full shadow-lg border border-gold/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                <span className="text-xs font-semibold text-ivory">MDS qualification</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
