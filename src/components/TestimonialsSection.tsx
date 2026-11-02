import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const clinicProfileUrl = 'https://www.practo.com/bangalore/clinic/mira-dental-care-implant-centre-bagalakunte';

export const TestimonialsSection: React.FC = () => (
  <section id="reviews" className="py-20 lg:py-28 bg-forest text-ivory relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-semibold uppercase tracking-widest mb-4">
          <Star className="w-3.5 h-3.5" /> Patient feedback
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory leading-tight">
          See the clinic’s public profile
        </h2>
        <p className="text-ivory/75 mt-5 max-w-2xl mx-auto leading-relaxed">
          Visit the clinic listing to view its current details, patient feedback and photos.
        </p>
        <a href={clinicProfileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-gold text-forest font-semibold hover:bg-gold-200 transition-colors">
          View Mira Dental Care profile <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </div>
  </section>
);
