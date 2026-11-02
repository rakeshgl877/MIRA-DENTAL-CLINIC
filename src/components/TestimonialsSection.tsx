import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Star, Quote, CheckCircle, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-forest text-ivory relative overflow-hidden">
      {/* Background radial gold aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              Verified Patient Experiences
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory leading-tight">
              Honest Stories from Patients We've Had the Privilege to Treat
            </h2>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-forest-900/90 border border-gold/30 p-5 rounded-2xl flex items-center gap-4 shrink-0 shadow-xl">
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex flex-col items-center justify-center text-gold">
              <span className="font-serif text-2xl font-bold leading-none">4.8</span>
              <div className="flex text-gold mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2 h-2 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-ivory">Google Business Rating</div>
              <div className="text-xs text-gold-200 mt-0.5">{CLINIC_INFO.stats.reviewsCount} verified patient ratings</div>
              <div className="text-[10px] text-ivory/60 mt-0.5">Bagalagunte, Hesarghatta Main Rd</div>
            </div>
          </div>
        </div>

        {/* Featured Review Spotlight */}
        <div className="bg-forest-900/60 rounded-3xl p-6 sm:p-10 lg:p-12 border border-gold/20 backdrop-blur-sm relative mb-12">
          <Quote className="w-16 h-16 text-gold/15 absolute top-6 right-6 pointer-events-none" />
          
          <div className="max-w-3xl">
            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 text-gold">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
              <span className="text-xs text-ivory/80 ml-2 font-medium">5.0 Star Experience</span>
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory font-normal leading-relaxed mb-8 italic">
              "{TESTIMONIALS[activeIndex].comment}"
            </p>

            {/* Reviewer Details */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold text-base">
                  {TESTIMONIALS[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-ivory text-sm sm:text-base flex items-center gap-2">
                    {TESTIMONIALS[activeIndex].name}
                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle className="w-2.5 h-2.5" />
                      Verified
                    </span>
                  </div>
                  <div className="text-xs text-gold-300 mt-0.5">
                    Treatment: {TESTIMONIALS[activeIndex].treatment}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full border border-gold/30 text-gold hover:bg-gold/20 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-ivory/70 px-2 font-medium">
                  {activeIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full border border-gold/30 text-gold hover:bg-gold/20 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Secondary Review Snippets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-forest-900/40 border border-white/10 hover:border-gold/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-gold mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed mb-4 line-clamp-4 italic">
                  "{item.comment}"
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-ivory">{item.name}</div>
                  <div className="text-[11px] text-gold-300">{item.treatment}</div>
                </div>
                <span className="text-[10px] text-ivory/50">{item.verifiedSource}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Share Feedback / Book Prompt */}
        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl('Hi Mira Dental Clinic, I read your patient reviews and would like to schedule a consultation with Dr. Ashwini.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-forest-900 font-bold text-xs sm:text-sm hover:bg-gold-300 transition-all shadow-gold-glow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Experience Our Patient-Focused Care — Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
