import React from 'react';
import { motion } from 'framer-motion';
import { TREATMENTS } from '../data/clinicData';
import type { Treatment } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, CheckCircle2, ArrowUpRight, Sparkles, Clock } from 'lucide-react';

interface TreatmentsSectionProps {
  onSelectTreatment: (treatment: Treatment) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onSelectTreatment }) => {
  return (
    <section id="treatments" className="py-20 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-700 text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Specialized Clinical Services
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest mb-4 leading-tight">
            Tailored Treatments for Lifelong Dental Health
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed font-normal">
            From single-sitting painless endodontics and Swedish dental implants to invisible orthodontic aligners, experience uncompromising clinical precision under expert care.
          </p>
        </div>

        {/* 6 Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TREATMENTS.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden border border-forest/10 hover:border-gold/50 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top: Image & Tagline */}
              <div>
                <div className="relative h-56 overflow-hidden bg-forest/5">
                  <img
                    src={treatment.image}
                    alt={`${treatment.name} at Mira Dental Care Bengaluru`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
                  
                  {/* Floating Treatment Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-forest uppercase tracking-wider shadow-sm">
                    {treatment.id === 'root-canal' ? 'Gold Medalist Specialty' : 'Advanced Procedure'}
                  </div>

                  {/* Duration on bottom right of image */}
                  <div className="absolute bottom-3 right-3 bg-forest/80 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] text-ivory flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-gold" />
                    <span>{treatment.duration.split(' ')[0]} {treatment.duration.split(' ')[1]}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-forest mb-1.5 group-hover:text-forest-600 transition-colors">
                    {treatment.name}
                  </h3>
                  <p className="text-xs font-semibold text-gold-600 mb-3 tracking-wide">
                    {treatment.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed mb-4 line-clamp-3">
                    {treatment.description}
                  </p>

                  {/* Key Highlights list */}
                  <div className="space-y-1.5 pt-3 border-t border-forest/5 mb-4">
                    {treatment.benefits.slice(0, 2).map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2 text-xs text-charcoal/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-forest/5 flex items-center gap-2">
                {/* Primary WhatsApp Action */}
                <a
                  href={getWhatsAppUrl(treatment.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-forest text-ivory text-xs font-semibold hover:bg-forest-700 shadow-sm transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-gold" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* Secondary: Details trigger */}
                <button
                  onClick={() => onSelectTreatment(treatment)}
                  className="p-2.5 rounded-xl border border-forest/20 text-forest hover:bg-forest/5 hover:border-forest/40 transition-colors"
                  title="View clinical details"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Consultation Assistance Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-forest/5 border border-forest/10 max-w-2xl mx-auto">
          <p className="text-sm text-charcoal/80">
            Unsure which dental procedure is right for your smile?
          </p>
          <a
            href={getWhatsAppUrl('Hi Mira Dental Clinic, I need advice on which dental treatment suits my teeth condition. Can I consult Dr. Ashwini?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-forest hover:text-gold-600 underline underline-offset-4 mt-1 transition-colors"
          >
            Chat directly with our clinical desk on WhatsApp
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
