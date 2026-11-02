import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-ivory-100/95 backdrop-blur-md border-t border-forest/15 p-2.5 px-4 sm:hidden shadow-2xl flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={`tel:${CLINIC_INFO.phoneRaw}`}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl border border-forest/20 text-forest font-bold text-xs bg-white active:bg-forest/5 shadow-sm"
      >
        <Phone className="w-3.5 h-3.5 text-forest" />
        <span>Call</span>
      </a>

      {/* Book Slot Modal Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-forest text-ivory font-bold text-xs shadow-md active:bg-forest-700"
      >
        <Calendar className="w-3.5 h-3.5 text-gold" />
        <span>Book Slot</span>
      </button>

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppUrl('Hi Mira Dental Clinic, I would like to book a dental consultation.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-md"
      >
        <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
