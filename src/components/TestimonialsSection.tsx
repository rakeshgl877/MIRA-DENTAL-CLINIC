import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Star } from 'lucide-react';

type ReviewHighlight = [string, string, string];

const reviewHighlights: ReviewHighlight[] = [
  [
    "Rachana S.",
    "2 months ago",
    "After a year of visits for several treatments, she praised Dr. Ashwini’s calm explanations and patient care."
  ],
  [
    "Rajath P.",
    "4 months ago",
    "He described implant and root canal care as smooth, comfortable, and professionally handled."
  ],
  [
    "Vignesh S.",
    "8 months ago",
    "He praised the gentle team after root canal treatment and multiple crowns."
  ],
  [
    "Charan B.",
    "2 months ago",
    "He appreciated patient explanations and kind care for both him and his mother."
  ],
  [
    "Rajesh G.",
    "2 months ago",
    "He thanked the clinic for compassionate care and a supportive staff."
  ],
  [
    "Jothi J.",
    "5 months ago",
    "She praised the implant experience, clear explanations, and follow-up care."
  ],
  [
    "Chandramohan A.",
    "5 months ago",
    "He described root canal and bridge treatment as smooth and precise."
  ],
  [
    "Rakesh S.",
    "4 months ago",
    "He praised Dr. Ashwini’s caring approach and his family’s experience."
  ],
  [
    "Anil S.",
    "4 months ago",
    "He highlighted patient doctors and helpful consultations."
  ],
  [
    "Muhammad U.",
    "5 months ago",
    "He praised Dr. Akash’s clear orthodontic guidance and his wife’s braces outcome."
  ],
  [
    "Krishan N.",
    "2 months ago",
    "He appreciated the team’s patience while treating his elderly mother."
  ],
  [
    "Sulochana T.",
    "8 months ago",
    "She described Invisalign care as comfortable, clear, and effective."
  ],
  [
    "Vijetha S.",
    "9 months ago",
    "She praised a kind, attentive dentist and simple explanations."
  ],
  [
    "Rahul N.",
    "6 months ago",
    "He described root canal care as comfortable and thanked Dr. Ashwini."
  ],
  [
    "Adi M.",
    "8 months ago",
    "He was pleased with bridge treatment and the natural-looking result."
  ],
  [
    "Sujata A.",
    "2 months ago",
    "She praised a professional, considerate root canal visit and friendly staff."
  ],
  [
    "Anju K.",
    "4 months ago",
    "She appreciated clear explanations and care during wisdom tooth removal."
  ],
  [
    "Shrikanth P.",
    "6 months ago",
    "He praised clear treatment explanations and caring doctors."
  ],
  [
    "Harsha H.",
    "5 months ago",
    "He described Dr. Ashwini’s root canal treatment as professional and high quality."
  ],
  [
    "Amina S.",
    "6 months ago",
    "She valued clear explanations and support throughout a longer treatment plan."
  ],
  [
    "Ashwini N.",
    "4 months ago",
    "She praised the doctors’ care and appointment follow-ups."
  ],
  [
    "Sunjiv E.",
    "8 months ago",
    "He appreciated implant care, transparent explanations, and follow-up."
  ],
  [
    "Satish H.",
    "8 months ago",
    "He shared a positive long-term experience after root canal treatment."
  ],
  [
    "Alok P.",
    "7 months ago",
    "He praised careful bridge and root canal treatment and follow-up."
  ],
  [
    "Priya H.",
    "11 months ago",
    "She described implant and root canal care as smooth and attentive."
  ],
  [
    "Pooja Y.",
    "8 months ago",
    "She valued clear answers and a comfortable experience across several treatments."
  ],
  [
    "Nitin B.",
    "6 months ago",
    "He praised attentive care during wisdom tooth removal and root canal treatment."
  ],
  [
    "Arshiya O.",
    "8 months ago",
    "She reported dissatisfaction with a scaling visit and raised concerns about treatment quality."
  ],
  [
    "Ragamalika K.",
    "1 year ago",
    "She appreciated a difficult extraction, aftercare instructions, and follow-up."
  ],
  [
    "TCRA114i",
    "1 year ago",
    "They described root canal care as comfortable and appreciated step-by-step explanations."
  ],
  [
    "Dalim S.",
    "8 months ago",
    "They praised clear updates during braces treatment and progress checks."
  ],
  [
    "Anil C.",
    "6 months ago",
    "He reported a positive experience with root canal and crown treatment."
  ],
  [
    "Akshatha S.",
    "1 year ago",
    "She praised Dr. Ashwini’s guidance and care during multiple treatments."
  ],
  [
    "Jacob G.",
    "1 year ago",
    "He valued detailed explanations and careful treatment during major dental procedures."
  ],
  [
    "Malharik80",
    "1 year ago",
    "They highlighted clear explanations, polite staff, and follow-up care."
  ],
  [
    "Shakuntala B.",
    "1 year ago",
    "She appreciated the braces progress and regular checkups for her daughter."
  ],
  [
    "Joydeep S.",
    "11 months ago",
    "He reported a long wait and difficulty getting timely appointment updates."
  ],
  [
    "Shobha G.",
    "1 year ago",
    "She praised the dentist but raised concerns about hygiene practices."
  ],
  [
    "Prem B.",
    "1 year ago",
    "He appreciated a clear treatment plan and professional care."
  ],
  [
    "Swetha S.",
    "1 year ago",
    "She praised clear explanations and care during her mother’s treatment."
  ],
  [
    "Deepali D.",
    "1 year ago",
    "She described a difficult extraction as smooth and appreciated aftercare."
  ],
  [
    "Veda U.",
    "1 year ago",
    "She valued the orthodontist’s guidance and flexibility during braces treatment."
  ],
  [
    "Annapurna B.",
    "1 year ago",
    "She described root canal and implant treatment as comfortable."
  ],
  [
    "Poojasri R.",
    "1 year ago",
    "She praised wisdom tooth care and the clinic team."
  ],
  [
    "Anaya N.",
    "8 months ago",
    "They summarized braces treatment as smooth, with regular follow-ups."
  ],
  [
    "Meera S.",
    "1 year ago",
    "She praised a calm, detailed consultation and professional root canal care."
  ],
  [
    "Sanjay B.",
    "2 years ago",
    "He appreciated the explanation and care during wisdom tooth treatment."
  ],
  [
    "Sowbhagya R.",
    "2 years ago",
    "She described implant treatment and staff support positively."
  ],
  [
    "Vishwanath H.",
    "2 years ago",
    "He valued a detailed diagnosis and treatment plan."
  ],
  [
    "Mahesh M.",
    "3 months ago",
    "He reported disappointment with management and the time spent travelling to the clinic."
  ]
];

const googleReviewsUrl = 'https://www.google.com/maps/search/?api=1&query=Mira%20Dental%20Care%20%26%20Implant%20Centre%20Bagalakunte%20Bengaluru';

export const TestimonialsSection: React.FC = () => {
  const moreReviewsRef = useRef<HTMLDivElement>(null);
  const featured = reviewHighlights.slice(0, 3);
  const moreReviews = reviewHighlights.slice(3);

  const scrollReviews = (direction: -1 | 1) => {
    moreReviewsRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' });
  };

  const ReviewCard = ({ review }: { review: ReviewHighlight }) => (
    <article className="flex h-full min-h-[230px] flex-col rounded-2xl border border-gold/15 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">Google review</span>
        <span className="text-xs text-ivory/55">{review[1]}</span>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-ivory/90">{review[2]}</p>
      <div className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-ivory">{review[0]}</div>
    </article>
  );

  return (
    <section id="reviews" className="relative overflow-hidden bg-forest py-20 text-ivory lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/10 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
                <Star className="h-3.5 w-3.5 fill-gold" /> Patient feedback
              </div>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-ivory sm:text-4xl md:text-5xl">
                Care stories from Google reviews
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-ivory/70">
                A selection of 50 review highlights, shortened for readability. Names are shown as first name and initial.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-gold/25 bg-forest-900/70 p-4">
              <div className="text-center">
                <div className="font-serif text-3xl font-bold leading-none text-gold">4.8</div>
                <div className="mt-1 flex justify-center text-gold">{[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-gold" />)}</div>
              </div>
              <div>
                <div className="text-sm font-semibold">4.8 out of 5</div>
                <div className="text-xs text-ivory/60">238 reviews on Google</div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {featured.map((review, index) => (
              <motion.div key={review[0]} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.08 }}>
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-2xl font-semibold">More patient feedback</h3>
              <p className="mt-1 text-xs text-ivory/60">Swipe or scroll horizontally to browse the other 47 highlights.</p>
            </div>
            <div className="hidden gap-2 sm:flex">
              <button type="button" onClick={() => scrollReviews(-1)} aria-label="Scroll reviews left" className="rounded-full border border-ivory/20 p-2.5 text-ivory transition hover:border-gold hover:text-gold">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => scrollReviews(1)} aria-label="Scroll reviews right" className="rounded-full border border-ivory/20 p-2.5 text-ivory transition hover:border-gold hover:text-gold">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div ref={moreReviewsRef} tabIndex={0} aria-label="More Google review highlights" className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 scroll-smooth">
            {moreReviews.map((review) => (
              <div key={review[0]} className="w-[min(84vw,340px)] shrink-0 snap-start">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-5 text-xs text-ivory/55 sm:flex-row sm:items-center">
            <p>Highlights are condensed from the review text provided for this site.</p>
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold-200">
              View all Google reviews <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
