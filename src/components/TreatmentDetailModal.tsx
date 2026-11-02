import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Treatment } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { X, CheckCircle2, Clock, UserCheck, MessageCircle } from 'lucide-react';

interface TreatmentDetailModalProps {
  treatment: Treatment | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  treatment,
  onClose,
  onOpenBooking
}) => {
  if (!treatment) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gold/40 overflow-hidden my-8"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-forest-900/80 text-ivory hover:bg-forest transition-colors z-20 shadow-md"
            aria-label="Close treatment details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-72 bg-forest overflow-hidden">
            <img
              src={treatment.image}
              alt={treatment.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-ivory">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold px-2.5 py-1 rounded bg-forest/80 border border-gold/30">
                Procedure Overview
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory mt-2">
                {treatment.name}
              </h3>
              <p className="text-xs sm:text-sm text-gold-200 mt-1">
                {treatment.tagline}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h4 className="font-serif text-lg font-semibold text-forest mb-2">
                Clinical Overview
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                {treatment.description}
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-forest mb-3">
                Key Advantages & Clinical Standards
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {treatment.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration & Candidates Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-ivory-100 border border-forest/10 text-xs">
              <div>
                <span className="font-bold text-forest flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  Estimated Duration:
                </span>
                <span className="text-charcoal/80">{treatment.duration}</span>
              </div>
              <div>
                <span className="font-bold text-forest flex items-center gap-1.5 mb-1">
                  <UserCheck className="w-3.5 h-3.5 text-gold" />
                  Ideal Candidate:
                </span>
                <span className="text-charcoal/80">{treatment.idealFor}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppUrl(treatment.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 rounded-xl bg-forest hover:bg-forest-700 text-ivory font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-forest/30 text-forest font-bold text-xs sm:text-sm hover:bg-forest/5 transition-colors"
              >
                Book Appointment Slot
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
