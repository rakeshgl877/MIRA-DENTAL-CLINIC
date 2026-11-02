import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { ShieldCheck, Sparkles, Microscope, HeartHandshake, ArrowRight, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Backing golden border accent */}
              <div className="absolute -inset-4 rounded-3xl border border-gold/30 transform rotate-1 pointer-events-none" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-luxury border-2 border-white bg-forest">
                <img
                  src={`${import.meta.env.BASE_URL}images/mira-clinic-exterior-evening.jpg`}
                  alt="Mira Dental Care & Implant Centre clinical facility and patient consultation lounge"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-forest/95 backdrop-blur-md text-ivory border border-gold/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                      <Microscope className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-serif text-lg font-semibold text-ivory">
                        Modern Conservative Dentistry
                      </div>
                      <div className="text-xs text-ivory/70">
                        Preserving your natural teeth with microscopic precision
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-white px-4 py-2.5 rounded-2xl shadow-lg border border-forest/10 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-xs font-bold text-forest">Bagalagunte, Bengaluru</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                About Mira Dental Clinic
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest leading-tight mb-6">
                Where clinical excellence is guided by empathy and gentle touch.
              </h2>

              <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-normal mb-6">
                Founded with a mission to eliminate dental anxiety, <strong className="text-forest font-semibold">{CLINIC_INFO.fullName}</strong> is located conveniently on Hesarghatta Main Road, opposite MEI Ground. Led by university gold-medalist endodontist <strong className="text-forest font-semibold">Dr. Ashwini Marurkar</strong>, our practice combines academic rigor with patient-centered warmth.
              </p>

              <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed mb-8">
                We reject the cold, assembly-line approach of corporate dental chains. Instead, every patient is treated to private, unhurried consultations where digital X-rays and intraoral findings are explained transparently. From painless single-sitting root canals to dental implants and invisible braces, our goal is preserving your natural tooth structure for life.
              </p>

              {/* 3 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-forest/10 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-forest mb-2" />
                  <h4 className="font-serif text-base font-semibold text-forest mb-1">
                    Class-B Autoclave
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    Hospital-grade vacuum sterilization protocols ensuring absolute microbial sterility.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-forest/10 shadow-sm">
                  <Microscope className="w-5 h-5 text-gold mb-2" />
                  <h4 className="font-serif text-base font-semibold text-forest mb-1">
                    Digital RVG Suite
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    High-definition instant sensor radiography with up to 90% reduced X-ray exposure.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-forest/10 shadow-sm">
                  <HeartHandshake className="w-5 h-5 text-forest mb-2" />
                  <h4 className="font-serif text-base font-semibold text-forest mb-1">
                    Zero Overtreatment
                  </h4>
                  <p className="text-xs text-charcoal/70">
                    Transparent, conservative treatment plans without hidden costs or unnecessary steps.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-ivory text-sm font-semibold hover:bg-forest-700 shadow-luxury transition-all"
                >
                  <span>Book Consultation With Dr. Ashwini</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </button>

                <a
                  href={getWhatsAppUrl('Hi Mira Dental Clinic, I would like to learn more about the clinic and schedule a consultation.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-forest/20 text-forest text-sm font-semibold hover:bg-forest/5 transition-all"
                >
                  Enquire via WhatsApp
                </a>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
