import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/clinicData';
import type { GalleryItem } from '../data/clinicData';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Ambiance', 'Treatment Suite', 'Technology', 'Hygiene', 'Consultation'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest/5 border border-forest/15 text-forest text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            Clinic Infrastructure
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-forest mb-4 leading-tight">
            Step Inside Mira Dental Clinic
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 leading-relaxed">
            Designed for uncompromising clinical hygiene, advanced digital radiography, and a tranquil, anxiety-free atmosphere.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-forest text-ivory shadow-md'
                  : 'bg-white text-charcoal/70 border border-forest/10 hover:border-gold hover:text-forest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              onClick={() => openLightbox(item)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-forest/10 border border-forest/10 shadow-sm cursor-pointer"
            >
              <img
                src={item.image}
                alt={`${item.title} - Mira Dental Clinic Hesarghatta Main Road`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* View Overlay Button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-forest flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-ivory">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold px-2 py-0.5 rounded bg-forest/80 border border-gold/30">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-ivory mt-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory/80 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Caption */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-charcoal/60">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          <span>Facility tour: No. 378 Pujar Complex, 60 Feet Road, Bagalagunte, Hesarghatta Main Rd</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 hidden sm:block"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 hidden sm:block"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full bg-forest-900 rounded-2xl overflow-hidden border border-gold/30 shadow-2xl flex flex-col"
            >
              <div className="relative flex-1 bg-black overflow-hidden flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              <div className="p-6 bg-forest text-ivory flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-forest-700">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold">
                    {selectedItem.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ivory">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/80 mt-1 max-w-xl">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handlePrev}
                    className="sm:hidden p-2 rounded-lg bg-forest-800 text-ivory text-xs border border-white/10"
                  >
                    Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="sm:hidden p-2 rounded-lg bg-forest-800 text-ivory text-xs border border-white/10"
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
