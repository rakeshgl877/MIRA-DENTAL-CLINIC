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
    { days: "Monday – Saturday", morning: "Call to confirm", evening: "Call to confirm" },
    { days: "Sunday", morning: "Call to confirm", evening: "Call to confirm" }
  ],
  stats: {
    rating: null,
    reviewsCount: "",
    yearsExperience: "",
    smilesRestored: "",
    painlessCommitment: ""
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
    image: `${import.meta.env.BASE_URL}images/implants.jpg`,
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
    description: "A dentist assesses the tooth and discusses suitable options. Contact the clinic to confirm current treatment availability.",
    image: `${import.meta.env.BASE_URL}images/root-canal.jpg`,
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
    image: `${import.meta.env.BASE_URL}images/invisalign.jpg`,
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
    image: `${import.meta.env.BASE_URL}images/orthodontics.jpg`,
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
    image: `${import.meta.env.BASE_URL}images/smile-design.jpg`,
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
    image: `${import.meta.env.BASE_URL}images/general-dentistry.jpg`,
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
    role: "Dentist",
    degrees: "BDS, MDS (Conservative Dentistry & Endodontics)",
    goldMedal: "MDS Conservative Dentistry & Endodontics",
    regNumber: "",
    experience: "Clinic profile",
    specialization: [
      "Conservative Dentistry & Endodontics",
      "Root canal treatment",
      "Dental consultation",
      "Preventive dental care"
    ],
    bio: "Dr. Ashwini Marurkar is listed on the clinic profile as a dentist with BDS and MDS qualifications in Conservative Dentistry & Endodontics. Contact the clinic directly to confirm current treatments and appointment availability.",
    philosophy: "Personalized dental care with a focus on patient comfort.",
    image: `${import.meta.env.BASE_URL}images/dr-ashwini-profile.webp`,
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

export const TESTIMONIALS: Testimonial[] = [];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Mira Dental Care storefront",
    category: "Clinic exterior",
    description: "Daytime storefront photo from the clinic's public Practo profile. Photo retains its source watermark.",
    image: `${import.meta.env.BASE_URL}images/mira-clinic-exterior-day.jpg`
  },
  {
    id: "gal-2",
    title: "Mira Dental Care at evening",
    category: "Clinic exterior",
    description: "Evening storefront photo from the clinic's public Practo profile. Photo retains its source watermark.",
    image: `${import.meta.env.BASE_URL}images/mira-clinic-exterior-evening.jpg`
  },

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
    answer: "Comfort and treatment approach depend on the individual case. Please discuss pain management and options with the dentist during a consultation.",
    category: "treatments"
  },
  {
    id: "faq-4",
    question: "What are your clinic timings?",
    answer: "Clinic hours shown in online directories differ. Please call the clinic at +91 63629 46204 to confirm today’s hours before visiting.",
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
    title: "Mira Dental Care",
    subtitle: "Clinic profile and patient feedback",
    description: "Visit the clinic’s public listing for current details and patient feedback."
  },
  {
    title: "Dr. Ashwini Marurkar",
    subtitle: "BDS, MDS Conservative Dentistry & Endodontics",
    description: "Qualifications listed on the clinic’s public profile."
  },
  {
    title: "Appointments",
    subtitle: "Call or message the clinic",
    description: "Confirm treatment options and current availability directly with the clinic."
  },
  {
    title: "Strict Sterilization",
    subtitle: "Class-B Autoclave Protocol",
    description: "Hospital-grade multi-tier hygiene, sealed single-use pouches and sanitized operatory suites."
  }
];
