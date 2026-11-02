import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TREATMENTS } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { X, User, Phone, Check, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment
}) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [treatment, setTreatment] = useState(preselectedTreatment || 'Root Canal Treatment');
  const [preferredSlot, setPreferredSlot] = useState('Morning preference (confirm with clinic)');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (preselectedTreatment) {
      setTreatment(preselectedTreatment);
    }
  }, [preselectedTreatment]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Appointment Request — Mira Dental Clinic*\n\n` +
      `• *Patient Name:* ${name.trim() || 'Patient'}\n` +
      `• *Mobile:* ${mobile.trim() || 'Provided on chat'}\n` +
      `• *Treatment:* ${treatment}\n` +
      `• *Preferred Time:* ${preferredSlot}\n` +
      (notes.trim() ? `• *Notes:* ${notes.trim()}\n\n` : `\n`) +
      `Please confirm slot availability at your Hesarghatta Main Road clinic.`;

    const url = getWhatsAppUrl(message);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gold/40 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-forest p-6 text-ivory relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-1.5 rounded-full text-ivory/70 hover:text-ivory hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-gold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Priority Booking Concierge
            </div>
            <h3 className="font-serif text-2xl font-semibold text-ivory">
              Schedule Your Dental Consultation
            </h3>
            <p className="text-xs text-ivory/75 mt-1">
              Mira Dental Care & Implant Centre • Led by Dr. Ashwini Marurkar (MDS)
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
            {/* Patient Name */}
            <div>
              <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-forest/20 text-xs sm:text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-ivory/50"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                Contact Number
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit mobile number"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-forest/20 text-xs sm:text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-ivory/50"
                />
              </div>
            </div>

            {/* Treatment Selector */}
            <div>
              <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                Treatment of Interest
              </label>
              <select
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-forest/20 text-xs sm:text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-ivory/50 text-charcoal"
              >
                {TREATMENTS.map((t) => (
                  <option key={t.id} value={t.name}>
                    {t.name}
                  </option>
                ))}
                <option value="General Checkup & Scaling">General Dental Checkup & Cleaning</option>
                <option value="Urgent Toothache / Emergency">Urgent Tooth Pain / Emergency</option>
                <option value="General Consultation">Other / General Consultation</option>
              </select>
            </div>

            {/* Preferred Slot */}
            <div>
              <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                Preferred Consultation Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPreferredSlot('Morning preference (confirm with clinic)')}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    preferredSlot.includes('Morning')
                      ? 'border-forest bg-forest text-ivory shadow-sm'
                      : 'border-forest/20 bg-white text-charcoal/80 hover:bg-forest/5'
                  }`}
                >
                  <div className="font-bold">Morning Session</div>
                  <div className="text-[11px] opacity-80">Preferred morning time</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPreferredSlot('Afternoon/evening preference (confirm with clinic)')}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                    preferredSlot.includes('Evening')
                      ? 'border-forest bg-forest text-ivory shadow-sm'
                      : 'border-forest/20 bg-white text-charcoal/80 hover:bg-forest/5'
                  }`}
                >
                  <div className="font-bold">Evening Session</div>
                  <div className="text-[11px] opacity-80">Preferred afternoon or evening time</div>
                </button>
              </div>
            </div>

            {/* Optional Symptoms / Notes */}
            <div>
              <label className="block text-xs font-bold text-forest uppercase tracking-wider mb-1.5">
                Symptoms or Specific Requests (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g. Tooth sensitivity on lower right molar, or enquire about ceramic crowns"
                rows={2}
                className="w-full px-4 py-2 rounded-xl border border-forest/20 text-xs sm:text-sm focus:outline-none focus:border-forest focus:ring-1 focus:ring-forest bg-ivory/50 resize-none"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-forest hover:bg-forest-700 text-ivory font-bold text-sm shadow-luxury transition-all flex items-center justify-center gap-2 group"
              >
                <span>Send Appointment Request on WhatsApp</span>
                <Check className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              </button>
              <div className="text-center text-[11px] text-charcoal/60 mt-2">
                Fast confirmation • No spam • Confidential clinical data
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
