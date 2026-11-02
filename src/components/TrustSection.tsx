import React from 'react';
import { motion } from 'framer-motion';
import { TRUST_POINTS, CLINIC_INFO } from '../data/clinicData';
import { Star, MapPin, Shield, HeartHandshake, Sparkles } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-ivory-100 border-y border-forest/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Banner */}
        <div className="bg-forest rounded-2xl p-6 sm:p-8 text-ivory mb-12 shadow-luxury relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-gold/10 blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 flex items-center gap-4 border-b md:border-b-0 md:border-r border-forest-600/60 pb-6 md:pb-0 md:pr-6">
              <div className="w-16 h-16 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-gold" />
              </div>
              <div>
                <div className="font-serif text-xl sm:text-2xl font-semibold text-ivory">Plan your visit</div>
                <div className="text-xs text-ivory/70 mt-0.5">Call to confirm current clinic hours</div>
              </div>
            </div>

            {/* Location Pill */}
            <div className="md:col-span-5 flex items-start gap-3 border-b md:border-b-0 md:border-r border-forest-600/60 pb-6 md:pb-0 md:pr-6">
              <MapPin className="w-6 h-6 text-gold shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-semibold text-ivory">
                  {CLINIC_INFO.address.landmark}
                </div>
                <div className="text-xs text-ivory/75 mt-0.5 leading-relaxed">
                  #378, Pujar Complex, 60 Feet Road, MEI Layout, Bagalagunte, Bengaluru – 560073
                </div>
              </div>
            </div>

            {/* Philosophy Pill */}
            <div className="md:col-span-3 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gold/20 text-gold shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ivory">
                  Patient-First Care
                </div>
                <div className="text-xs text-ivory/75 mt-0.5">
                  Ethical diagnosis with zero pushy treatments
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-forest/10 hover:border-gold/50 shadow-sm hover:shadow-luxury transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest group-hover:bg-forest group-hover:text-gold flex items-center justify-center mb-4 transition-colors duration-300">
                {index === 0 && <Star className="w-5 h-5" />}
                {index === 1 && <Sparkles className="w-5 h-5" />}
                {index === 2 && <Shield className="w-5 h-5" />}
                {index === 3 && <HeartHandshake className="w-5 h-5" />}
              </div>
              <h3 className="font-serif text-lg font-semibold text-forest mb-1">
                {point.title}
              </h3>
              <p className="text-xs font-semibold text-gold-600 mb-2">
                {point.subtitle}
              </p>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
