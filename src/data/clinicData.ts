export interface Treatment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  duration: string;
  idealFor: string;
  whatsappMessage: string;
}

export interface Doctor {
  name: string;
  role: string;
  degrees: string;
  goldMedal: string;
  regNumber: string;
  experience: string;
  specialization: string[];
  bio: string;
  philosophy: string;
  image: string;
  isRepresentativeImage: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verifiedSource: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'appointments' | 'treatments' | 'location' | 'general';
}

export const CLINIC_INFO = {
  name: "Mira Dental Clinic",
  fullName: "Mira Dental Care & Implant Centre",
  tagline: "Where exceptional care meets confident smiles.",
  subTagline: "Discover personalized dental care designed around your comfort, your needs and your smile.",
  phone: "+91 63629 46204",
  phoneRaw: "6362946204",
  whatsappNumber: "916362946204",
  address: {
    line1: "No. 378, 1st Floor, Pujar Complex",
    line2: "60 Feet Road, MEI Layout, Bagalagunte",
    landmark: "Opposite MEI Ground / Stadium",
    mainRoad: "Hesarghatta Main Road",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560073"
  },
  timings: [
    { days: "Monday – Saturday", morning: "10:00 AM – 1:30 PM", evening: "5:00 PM – 8:30 PM" },
    { days: "Sunday", morning: "10:00 AM – 1:00 PM", evening: "By Prior Appointment" }
  ],
  stats: {
    rating: 4.8,
    reviewsCount: "238+",
    yearsExperience: "10+",
    smilesRestored: "5,000+",
    painlessCommitment: "100%"
  },
  mapsUrl: "https://maps.google.com/?q=Mira+Dental+Care+and+Implant+Centre+Bagalagunte+Bangalore",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7262106338573!2d77.50058537590886!3d13.049444313101168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d19f2a74c73%3A0x6bbf692f8efb54a7!2sMira%20Dental%20Care%20%26%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const TREATMENTS: Treatment[] = [
  {
    id: "implants",
    name: "Dental Implants",
    tagline: "Permanent, natural-looking replacement for missing teeth",
    description: "Replace lost or damaged teeth with state-of-the-art titanium and zirconia dental implants that integrate seamlessly with your jawbone, restoring full chewing power and facial structure.",
    image: "/images/implants.jpg",
    benefits: [
      "Titanium root fixture mimics natural tooth physiology",
      "Prevents bone loss and facial sagging",
      "Lifetime durability with proper oral hygiene",
      "Precision guided surgical placement for minimal healing time"
    ],
    duration: "2 - 3 visits (Surgical placement + Custom crown fitting)",
    idealFor: "Patients with single or multiple missing teeth looking for fixed replacement",
    whatsappMessage: "Hi Mira Dental Clinic, I would like to enquire about Dental Implants and book a consultation."
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    tagline: "Microscope-guided, single-sitting painless endodontics",
    description: "Save your infected or severely painful natural tooth. Dr. Ashwini Marurkar (MDS Endodontics, Gold Medalist) utilizes rotary instruments and digital apex locators for virtually painless, swift therapy.",
    image: "/images/root-canal.jpg",
    benefits: [
      "Led by university gold medalist Endodontist",
      "Painless procedure using advanced computerized anesthesia",
      "Completed in single-visit for 85% of standard cases",
      "Hermetic 3D sealing preventing re-infection"
    ],
    duration: "Single visit (45 - 60 minutes) for most cases",
    idealFor: "Patients suffering from toothache, deep cavities, sensitivity to hot/cold, or swelling",
    whatsappMessage: "Hi Mira Dental Clinic, I would like to enquire about Root Canal Treatment and book a consultation."
  },
  {
    id: "invisalign",
    name: "Invisalign & Clear Aligners",
    tagline: "Virtually invisible teeth straightening without wires",
    description: "Achieve a straight, harmonious smile with discreet, removable clear aligners. Custom-fabricated from 3D intraoral scans to gradually align teeth with zero metal irritation.",
    image: "/images/invisalign.jpg",
    benefits: [
      "100% transparent and discreet for work and social life",
      "Removable while eating, brushing, and flossing",
      "Custom 3D preview of your final smile before treatment begins",
      "Smooth, comfortable edges that never cut gums or cheeks"
    ],
    duration: "6 - 14 months depending on alignment complexity",
    idealFor: "Adults and teens with crowded teeth, spacing, mild overbite, or relapse",
    whatsappMessage: "Hi Mira Dental Clinic, I would like to enquire about Invisalign Clear Aligners and book a consultation."
  },
  {
    id: "orthodontics",
    name: "Braces & Orthodontics",
    tagline: "Precision bite correction and dental alignment for all ages",
    description: "Comprehensive orthodontic care utilizing self-ligating metal and tooth-colored ceramic brackets to correct malocclusions, bite imbalances, and irregular tooth positions.",
    image: "/images/orthodontics.jpg",
    benefits: [
      "Ceramic tooth-colored brackets available for aesthetic discretion",
      "Self-ligating technology for reduced friction and fewer clinic visits",
      "Corrects complex crossbites, deep bites, and severe crowding",
      "Permanent structural smile harmony and improved oral hygiene access"
    ],
    duration: "12 - 18 months with monthly progress checkups",
    idealFor: "Children, adolescents, and adults with complex bite or alignment needs",
    whatsappMessage: "Hi Mira Dental Clinic, I would like to enquire about Braces and Orthodontics and book a consultation."
  },
  {
    id: "smile-design",
    name: "Smile Designing & Veneers",
    tagline: "Handcrafted cosmetic dentistry to unlock your dream smile",
    description: "A tailored blend of porcelain veneers, aesthetic bonding, gum contouring, and medical teeth whitening to sculpt symmetrical, luminous smiles tailored to your unique facial features.",
    image: "/images/smile-design.jpg",
    benefits: [
      "Ultra-thin ceramic porcelain veneers resistant to staining",
      "Harmonious tooth shade matching and micro-texture detailing",
      "Immediate transformation for chipped, discolored, or uneven teeth",
      "In-office laser whitening providing 5-8 shades brighter results"
    ],
    duration: "2 - 3 visits for full cosmetic smile transformation",
    idealFor: "Individuals with discolored, chipped, worn, or gapped front teeth",
    whatsappMessage: "Hi Mira Dental Clinic, I would like to enquire about Smile Designing and Veneers and book a consultation."
  },
  {
    id: "general-dentistry",
    name: "General & Preventive Dentistry",
    tagline: "Comprehensive care for the entire family's dental wellness",
    description: "From gentle ultrasonic scaling and deep polishings to tooth-colored composite restorations and pediatric sealants, we safeguard your long-term dental health through preventive excellence.",
    image: "/images/general-dentistry.jpg",
    benefits: [
      "Ultrasonic tartar & plaque removal with gentle polish",
      "BPA-free composite fillings matching natural enamel translucency",
      "Digital RVG diagnostic X-rays with 90% reduced radiation",
      "Pediatric preventative sealants and fluoridation"
    ],
    duration: "30 - 45 minutes for comprehensive checkup and cleaning",
    idealFor: "Everyone seeking routine 6-month preventative maintenance and family oral health",
    whatsappMessage: "Hi Mira Dental Clinic, I would like to enquire about General Dentistry and book a consultation."
  }
];

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Ashwini Marurkar",
    role: "Lead Specialist & Clinical Director",
    degrees: "BDS, MDS (Conservative Dentistry & Endodontics)",
    goldMedal: "University Gold Medalist & Rank Holder",
    regNumber: "KSDC Reg. No: 31570A",
    experience: "10+ Years of Clinical Excellence",
    specialization: [
      "Microscopic & Rotary Endodontics (Painless RCT)",
      "Dental Implantology & Crown Restorations",
      "Aesthetic Smile Designing & Veneers",
      "Full Mouth Restorative Rehabilitation"
    ],
    bio: "Dr. Ashwini Marurkar is a distinguished Endodontist, certified implantologist, and the visionary founder of Mira Dental Care & Implant Centre. Recognized with a prestigious University Gold Medal in MDS Conservative Dentistry & Endodontics, she brings over a decade of clinical precision to Hesarghatta Main Road, Bengaluru. Renowned for her gentle chairside manner, Dr. Ashwini has successfully relieved thousands of patients from dental pain through microscopic single-sitting root canal treatments and modern implant restorations.",
    philosophy: "I believe true dental care is where scientific precision meets gentle compassion. No patient should ever fear the dental chair—our mission is to deliver pain-free treatments with absolute transparency and meticulous aesthetic detail.",
    image: "/images/doctor-ashwini.jpg",
    isRepresentativeImage: true
  }
];

export const ASSOCIATE_TEAM = [
  {
    name: "Dr. Neha Sharma",
    role: "Associate Dental Surgeon",
    degrees: "BDS",
    focus: "General Dentistry, Pediatric Preventive Care & Prophylaxis"
  },
  {
    name: "Visiting Orthodontic Specialist",
    role: "Consultant Orthodontist",
    degrees: "MDS (Orthodontics & Dentofacial Orthopedics)",
    focus: "Invisalign Aligners & Complex Bite Corrections"
  },
  {
    name: "Visiting Maxillofacial Surgeon",
    role: "Consultant Oral & Maxillofacial Surgeon",
    degrees: "MDS (Oral & Maxillofacial Surgery)",
    focus: "Impacted Wisdom Tooth Extractions & Bone Grafting"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Suresh Gowda",
    treatment: "Root Canal Treatment & Zirconia Crown",
    rating: 5,
    date: "Verified Google Review",
    comment: "I was extremely anxious about getting a root canal done after postponing it for 6 months. Dr. Ashwini Marurkar explained every step before starting and did the entire procedure with zero pain. The clinic in Bagalagunte is spotlessly clean and very well maintained. Truly the best dental experience I've had in Bengaluru.",
    verifiedSource: "Google Review"
  },
  {
    id: "rev-2",
    name: "Pooja V. Nair",
    treatment: "Dental Implants & Consultation",
    rating: 5,
    date: "Verified Google Review",
    comment: "Dr. Ashwini is very polite, soft spoken and genuine. Unlike many commercial clinics that push unnecessary procedures, she gave me an honest assessment and saved my adjacent teeth. My dental implant was placed smoothly without swelling. Highly recommend Mira Dental Clinic to anyone on Hesarghatta Road.",
    verifiedSource: "Google Review"
  },
  {
    id: "rev-3",
    name: "Rajesh Kumar",
    treatment: "Scaling & Tooth Fillings",
    rating: 5,
    date: "Verified Google Review",
    comment: "Excellent clinic ambiance right opposite MEI Ground. Both Dr. Ashwini and Dr. Neha took great care of my mother's dental issues. The digital X-rays were shown on screen immediately and the pricing is very reasonable. Definitely our family dentist now.",
    verifiedSource: "Google Review"
  },
  {
    id: "rev-4",
    name: "Meenakshi Sundaram",
    treatment: "Smile Designing & Ceramic Crowns",
    rating: 5,
    date: "Verified Google Review",
    comment: "Had severe discoloration and chipped front teeth from years ago. Dr. Ashwini transformed my smile with custom crowns that look 100% natural. People at work keep complimenting my smile. The warmth and attention to hygiene here are unmatched.",
    verifiedSource: "Google Review"
  },
  {
    id: "rev-5",
    name: "Vinay Prasad",
    treatment: "Emergency RCT & Pain Relief",
    rating: 5,
    date: "Verified Google Review",
    comment: "Came in with unbearable night pain in my lower molar. Dr. Ashwini accommodated me on urgent notice and within 30 minutes the pain was completely gone. Cleanliness standards and sterilization here are top class.",
    verifiedSource: "Google Review"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Welcoming Reception & Patient Lounge",
    category: "Ambiance",
    description: "Soothing, clutter-free reception area designed to calm dental anxiety before your appointment.",
    image: "/images/gallery-reception.jpg"
  },
  {
    id: "gal-2",
    title: "Advanced Ergonomic Operatory Suite",
    category: "Treatment Suite",
    description: "Fully motorized ergonomic dental chair equipped with fiber-optic LED illuminators.",
    image: "/images/gallery-operatory.jpg"
  },
  {
    id: "gal-3",
    title: "Digital RVG & Diagnostic Imaging",
    category: "Technology",
    description: "High-frequency intraoral Radiovisiography (RVG) delivering immediate diagnostic precision with 90% less radiation.",
    image: "/images/gallery-rvg.jpg"
  },
  {
    id: "gal-4",
    title: "Multi-Tier Sterilization Zone",
    category: "Hygiene",
    description: "Hospital-grade Class-B vacuum autoclave and chemical pouch sealers ensuring 100% sterile instruments.",
    image: "/images/gallery-sterilization.jpg"
  },
  {
    id: "gal-5",
    title: "Private Consultation & Case Review",
    category: "Consultation",
    description: "Dedicated digital consultation desk where treatment plans, 3D simulations, and timelines are transparently discussed.",
    image: "/images/gallery-consultation.jpg"
  },
  {
    id: "gal-6",
    title: "Patient Comfort & Recovery Lounge",
    category: "Comfort",
    description: "Quiet relaxation area post-procedure with warm refreshments and detailed aftercare guidance.",
    image: "/images/gallery-lounge.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is Mira Dental Clinic located and how can I find it?",
    answer: "Mira Dental Care & Implant Centre is located at #378, 1st Floor, Pujar Complex, 60 Feet Road, MEI Layout, Bagalagunte, Bengaluru – 560073. We are situated directly opposite MEI Ground / Stadium, easily accessible from Hesarghatta Main Road with convenient parking nearby.",
    category: "location"
  },
  {
    id: "faq-2",
    question: "How do I book an appointment with Dr. Ashwini Marurkar?",
    answer: "You can book easily via WhatsApp by clicking any of the 'Book Consultation' buttons across our website, or by calling us directly at +91 63629 46204. Our front desk will confirm a dedicated time slot to ensure zero waiting time.",
    category: "appointments"
  },
  {
    id: "faq-3",
    question: "Is root canal treatment (RCT) really painless?",
    answer: "Yes. Dr. Ashwini Marurkar holds an MDS Gold Medal in Conservative Dentistry and Endodontics. Utilizing computer-controlled localized anesthesia, digital apex locators, and rotary endodontics, the treatment is virtually sensation-free, providing immediate relief from toothache.",
    category: "treatments"
  },
  {
    id: "faq-4",
    question: "What are your clinic timings?",
    answer: "We are open Monday through Saturday with split sessions: Morning 10:00 AM – 1:30 PM, and Evening 5:00 PM – 8:30 PM. On Sundays, we are open 10:00 AM – 1:00 PM by prior appointment.",
    category: "appointments"
  },
  {
    id: "faq-5",
    question: "Are clear aligners (Invisalign) suitable for my teeth?",
    answer: "Clear aligners work effectively for mild to moderate crowding, spacing, and bite irregularities. During your initial consultation, we perform an intraoral evaluation to verify your candidacy and simulate your expected final smile.",
    category: "treatments"
  },
  {
    id: "faq-6",
    question: "What safety and sterilization standards do you maintain?",
    answer: "We adhere strictly to international multi-stage sterilization protocols. Every non-disposable instrument undergoes ultrasonic cleaning, packaging in medical-grade pouches, and high-pressure steam sterilization in a Class-B autoclave.",
    category: "general"
  },
  {
    id: "faq-7",
    question: "How long does a dental implant procedure take?",
    answer: "The initial surgical placement of the titanium implant fixture usually takes 30 to 45 minutes under local anesthesia. Following an integration period of 8–12 weeks where the implant fuses with bone, your permanent ceramic crown is precisely fitted.",
    category: "treatments"
  },
  {
    id: "faq-8",
    question: "Do you handle dental emergencies?",
    answer: "Yes. If you are experiencing severe toothache, a broken crown, facial swelling, or dental trauma, reach out on WhatsApp at +91 63629 46204 or call us immediately. We prioritize emergency patients for same-day relief.",
    category: "general"
  }
];

export const TRUST_POINTS = [
  {
    title: "4.8★ Google Rating",
    subtitle: "Over 238+ real patient reviews",
    description: "Consistently rated highest on Hesarghatta Main Road for patient satisfaction and comfort."
  },
  {
    title: "MDS Gold Medalist",
    subtitle: "Led by Dr. Ashwini Marurkar",
    description: "Academic rank-holder in Endodontics & Conservative Dentistry with 10+ years specialized experience."
  },
  {
    title: "100% Painless Tech",
    subtitle: "Rotary Endodontics & RVG",
    description: "Digital diagnostics, apex locators and computerized anesthesia for quiet, stress-free procedures."
  },
  {
    title: "Strict Sterilization",
    subtitle: "Class-B Autoclave Protocol",
    description: "Hospital-grade multi-tier hygiene, sealed single-use pouches and sanitized operatory suites."
  }
];
