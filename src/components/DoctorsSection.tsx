import React from 'react';
import { motion } from 'framer-motion';
import { DOCTORS } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Award, GraduationCap, Calendar, Sparkles, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

interface DoctorsSectionProps {
  onOpenBooking: () => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  const leadDoctor = DOCTORS[0];

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Clinical Leadership
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest mb-4 leading-tight">
            Meet Your Lead Dental Specialist
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
            Learn about Dr. Ashwini Marurkar and contact the clinic to confirm appointment availability.
          </p>
        </div>

        {/* Lead Doctor Featured Editorial Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-forest/15 shadow-luxury overflow-hidden mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Doctor Image Profile */}
            <div className="lg:col-span-5 relative bg-forest-900 overflow-hidden flex flex-col justify-end min-h-[420px] lg:min-h-full">
              <img
                src={leadDoctor.image}
                alt={`${leadDoctor.name} — Dentist listed at Mira Dental Care & Implant Centre in Bengaluru`}
                className="w-full h-full object-cover object-top opacity-95 hover:scale-102 transition-transform duration-700 absolute inset-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/30 to-transparent" />
              
              {/* Doctor Name Overlay on Mobile/Tablet */}
              <div className="relative p-6 sm:p-8 text-ivory z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/90 text-forest-900 text-xs font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  {leadDoctor.goldMedal}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory">
                  {leadDoctor.name}
                </h3>
                <p className="text-xs sm:text-sm text-gold-200 mt-1">
                  {leadDoctor.degrees}
                </p>
                <p className="text-[11px] text-ivory/70 mt-0.5">
                  {leadDoctor.regNumber}
                </p>

              </div>
            </div>

            {/* Doctor Biography and Expertise Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest text-ivory text-xs font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-gold" />
                    {leadDoctor.role}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-forest/5 text-forest text-xs font-semibold border border-forest/15">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    {leadDoctor.experience}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Clinic profile
                  </span>
                </div>

                {/* Bio paragraph */}
                <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed mb-6 font-normal">
                  {leadDoctor.bio}
                </p>

                {/* Clinical Philosophy Quote */}
                <blockquote className="p-4 sm:p-5 rounded-2xl bg-ivory-100 border-l-4 border-gold text-xs sm:text-sm text-charcoal/90 italic mb-8 leading-relaxed">
                  "{leadDoctor.philosophy}"
                  <footer className="not-italic text-xs font-bold text-forest mt-2">
                    — {leadDoctor.name}, Clinical Director
                  </footer>
                </blockquote>

                {/* Key Clinical Focus */}
                <h4 className="font-serif text-lg font-semibold text-forest mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gold" />
                  Areas to discuss with the dentist
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {leadDoctor.specialization.map((spec, sIndex) => (
                    <div key={sIndex} className="flex items-center gap-2 text-xs sm:text-sm text-charcoal/80">
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation CTAs */}
              <div className="pt-6 border-t border-forest/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-ivory text-xs sm:text-sm font-semibold hover:bg-forest-700 shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>Book Appointment with Dr. Ashwini</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hi Mira Dental Clinic, I would like to schedule a personal consultation with Dr. Ashwini Marurkar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-forest/20 text-forest text-xs sm:text-sm font-semibold hover:bg-forest/5 transition-all"
                >
                  Enquire via WhatsApp
                </a>
              </div>

            </div>

          </div>
        </motion.div>

        <p className="text-center text-sm text-charcoal/70">
          Contact the clinic to confirm which clinicians and treatment services are currently available.
        </p>

      </div>
    </section>
  );
};
