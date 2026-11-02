import React, { useState } from 'react';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, X, ChevronRight, Star } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    { label: "Book a consultation slot", msg: "Hi Mira Dental Clinic, I would like to book a consultation appointment." },
    { label: "Enquire about Root Canal (RCT)", msg: "Hi Mira Dental Clinic, I would like to enquire about painless Root Canal Treatment with Dr. Ashwini." },
    { label: "Enquire about Dental Implants", msg: "Hi Mira Dental Clinic, I would like to enquire about Dental Implants and costs." },
    { label: "Emergency tooth pain relief", msg: "Hi Mira Dental Clinic, I have severe tooth pain and need an urgent appointment today." }
  ];

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-5 z-40 flex flex-col items-end">
      {/* Expanded Quick Selector Popup */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-gold/40 p-5 animate-in fade-in slide-in-from-bottom-3 duration-200 text-charcoal">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-forest/10 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-forest text-gold flex items-center justify-center font-bold">
                M
              </div>
              <div>
                <div className="font-serif font-bold text-forest text-base leading-tight">
                  Mira Dental Concierge
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online • Typically replies in 5 mins
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-charcoal/50 hover:text-charcoal hover:bg-forest/5"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-charcoal/75 mb-3 leading-relaxed">
            Welcome to Mira Dental Care! Choose how we can help you today:
          </p>

          {/* Quick options */}
          <div className="space-y-2 mb-4">
            {quickPrompts.map((item, idx) => (
              <a
                key={idx}
                href={getWhatsAppUrl(item.msg)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-ivory text-xs font-semibold text-forest hover:bg-forest hover:text-ivory transition-colors group border border-forest/10"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 transition-transform" />
              </a>
            ))}
          </div>

          {/* Direct Free Text Button */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Chat Directly</span>
          </a>

          <div className="mt-3 flex items-center justify-between text-[10px] text-charcoal/50 pt-2 border-t border-forest/5">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              4.8 Google Rating
            </span>
            <span>Hesarghatta Main Rd</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-white/40"
        aria-label="Open WhatsApp appointment concierge"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
        </span>

        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Book on WhatsApp
        </span>
      </button>
    </div>
  );
};
