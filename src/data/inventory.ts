import heroShowroomImg from '../assets/images/hero_luxury_showroom_1794745199381.jpg';
import suvFrontImg from '../assets/images/suv_flagship_front_1794745200704.jpg';
import cabinInteriorImg from '../assets/images/luxury_cabin_interior_1794745200605.jpg';
import sedanFrontImg from '../assets/images/executive_sedan_front_1794745201492.jpg';
import sedanRearImg from '../assets/images/executive_sedan_rear_1794745200686.jpg';
import premiumGtImg from '../assets/images/premium_gt_platinum_1794745202450.jpg';
import familySuvImg from '../assets/images/family_suv_basalt_1794745201996.jpg';
import newlyImportedImg from '../assets/images/newly_imported_arrival_1794745203347.jpg';

export type VehicleCategory =
  | 'Luxury SUVs'
  | 'Executive Sedans'
  | 'Premium Vehicles'
  | 'Family Cars'
  | 'Newly Imported Cars';

export const VEHICLE_CATEGORIES: readonly VehicleCategory[] = [
  'Luxury SUVs',
  'Executive Sedans',
  'Premium Vehicles',
  'Family Cars',
  'Newly Imported Cars',
] as const;

export interface VehiclePhoto {
  src: string;
  alt: string;
  caption: string;
}

export interface VehicleListing {
  id: string;
  category: VehicleCategory;
  featured: boolean;
  makeAndModel: string;
  year: string;
  specifications: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  priceEtb: string;
  availability: string;
  overview: string;
  highlights: string[];
  photos: VehiclePhoto[];
}

export const BRAND_CONTACT = {
  brandName: 'LEXURY CAR',
  country: 'Ethiopia',
  // Phone & WhatsApp number taken directly from the official LEXURY CAR logo
  displayPhone: '+251 91 280 4318',
  telHref: 'tel:+251912804318',
  whatsappDigits: '251912804318',
} as const;

export const HERO_MEDIA = {
  image: heroShowroomImg,
  alt: 'Obsidian black flagship luxury vehicle inside an architectural showroom',
} as const;

export const ABOUT_MEDIA = {
  image: cabinInteriorImg,
  alt: 'Hand-stitched obsidian leather luxury vehicle interior cabin with warm ambient lighting',
} as const;

export function buildWhatsAppInquiryUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BRAND_CONTACT.whatsappDigits}?text=${encoded}`;
}

export function buildVehicleWhatsAppUrl(vehicle: VehicleListing): string {
  const message = [
    `Hello ${BRAND_CONTACT.brandName} Team,`,
    `I would like to inquire about the following vehicle category/listing:`,
    `- Vehicle: ${vehicle.makeAndModel}`,
    `- Category: ${vehicle.category}`,
    `- Year: ${vehicle.year}`,
    `- Price: ${vehicle.priceEtb}`,
    `Please share current availability, full specifications, and pricing in ETB.`,
  ].join('\n');

  return buildWhatsAppInquiryUrl(message);
}

/**
 * EASY-TO-UPDATE SHOWROOM INVENTORY
 * ---------------------------------
 * To add or update real vehicles in your showroom:
 * 1. Replace `makeAndModel`, `year`, `specifications`, `transmission`, `fuelType`,
 *    `mileage`, and `priceEtb` (e.g. "24,500,000 ETB" or "Contact for Price").
 * 2. Update `availability` (e.g. "In Showroom", "In Transit", "Available to Order").
 * 3. Replace or add photo imports in `photos`.
 */
export const VEHICLE_INVENTORY: VehicleListing[] = [
  {
    id: 'luxury-suvs-allocation',
    category: 'Luxury SUVs',
    featured: true,
    makeAndModel: 'Flagship Luxury SUV',
    year: 'Current & Recent Model Years',
    specifications: 'Full-Size SUV Trim · Inspection & Spec Sheet Provided',
    transmission: 'Automatic',
    fuelType: 'Petrol / Hybrid Options',
    mileage: 'Zero-KM & Verified Low Mileage',
    priceEtb: 'Contact for Price',
    availability: 'Available via Direct Inquiry',
    overview:
      'Commanding presence, elevated cabin craftsmanship, and multi-terrain confidence tailored for both city avenues and long-distance travel across Ethiopia.',
    highlights: [
      'Full pre-import inspection & specification verification',
      'Multiple exterior finishes and interior trim packages available on request',
      'End-to-end international import & customs coordination',
    ],
    photos: [
      {
        src: suvFrontImg,
        alt: 'Obsidian metallic luxury SUV three-quarter front studio view',
        caption: 'Exterior Three-Quarter Profile',
      },
      {
        src: cabinInteriorImg,
        alt: 'Luxury SUV quilted leather interior cabin and panoramic glass roof',
        caption: 'Executive Cabin & Leather Trim',
      },
      {
        src: newlyImportedImg,
        alt: 'Obsidian luxury SUV in showroom inspection bay',
        caption: 'Showroom Inspection Presentation',
      },
    ],
  },
  {
    id: 'executive-sedans-allocation',
    category: 'Executive Sedans',
    featured: true,
    makeAndModel: 'Executive Chauffeur Sedan',
    year: 'Current & Recent Model Years',
    specifications: 'Executive Saloon Trim · Confirmed Per Chassis',
    transmission: 'Automatic',
    fuelType: 'Petrol / Mild-Hybrid / Electric',
    mileage: 'Zero-KM & Verified Low Mileage',
    priceEtb: 'Contact for Price',
    availability: 'Available via Direct Inquiry',
    overview:
      'Whisper-quiet cabin acoustics, tailored rear-seat comfort, and poised architectural lines designed for diplomatic, corporate, and private executive transport.',
    highlights: [
      'Dedicated cabin comfort and driver-assistance packages',
      'Verified documentation and clean title history prior to shipping',
      'Personalized exterior and interior trim sourcing',
    ],
    photos: [
      {
        src: sedanFrontImg,
        alt: 'Dark graphite metallic executive luxury sedan front three-quarter profile',
        caption: 'Front Architectural Profile',
      },
      {
        src: sedanRearImg,
        alt: 'Obsidian luxury executive sedan rear three-quarter angle with LED lighting',
        caption: 'Rear Lighting & Stance',
      },
      {
        src: cabinInteriorImg,
        alt: 'Executive sedan quilted obsidian leather cabin',
        caption: 'Interior Craftsmanship',
      },
    ],
  },
  {
    id: 'premium-vehicles-allocation',
    category: 'Premium Vehicles',
    featured: true,
    makeAndModel: 'Bespoke Grand Tourer',
    year: 'Current & Recent Model Years',
    specifications: 'High-Specification Grand Touring Package',
    transmission: 'Automatic',
    fuelType: 'Petrol / Hybrid',
    mileage: 'Zero-KM & Verified Low Mileage',
    priceEtb: 'Contact for Price',
    availability: 'Available for Custom Allocation',
    overview:
      'Collector-caliber coupes and bespoke flagship editions sourced directly for clients seeking distinctive automotive design and rare specification levels.',
    highlights: [
      'Bespoke sourcing tailored to client color and trim preferences',
      'Enclosed logistics and insured international transit options',
      'Private consultation and delivery coordination in Ethiopia',
    ],
    photos: [
      {
        src: premiumGtImg,
        alt: 'Platinum silver luxury grand tourer coupe in obsidian gallery',
        caption: 'Platinum Metallic Studio Profile',
      },
      {
        src: sedanRearImg,
        alt: 'Rear three-quarter luxury performance profile',
        caption: 'Sculpted Rear Quarter',
      },
      {
        src: cabinInteriorImg,
        alt: 'Hand-stitched luxury leather cockpit',
        caption: 'Driver Cockpit Detail',
      },
    ],
  },
  {
    id: 'family-cars-allocation',
    category: 'Family Cars',
    featured: false,
    makeAndModel: 'Three-Row Luxury Family SUV',
    year: 'Current & Recent Model Years',
    specifications: 'Multi-Passenger Configuration · Safety & Comfort Suite',
    transmission: 'Automatic',
    fuelType: 'Petrol / Hybrid',
    mileage: 'Zero-KM & Verified Low Mileage',
    priceEtb: 'Contact for Price',
    availability: 'Available via Direct Inquiry',
    overview:
      'Generous three-row seating, refined ride comfort, and comprehensive safety engineering crafted for modern families seeking space without sacrificing prestige.',
    highlights: [
      'Spacious multi-row seating and flexible luggage capacity',
      'Verified mechanical condition and clean history reports',
      'Transparent ETB quotation upon specification selection',
    ],
    photos: [
      {
        src: familySuvImg,
        alt: 'Dark charcoal luxury family SUV parked at contemporary residence at dusk',
        caption: 'Architectural Exterior View',
      },
      {
        src: cabinInteriorImg,
        alt: 'Spacious panoramic luxury cabin interior',
        caption: 'Panoramic Interior Space',
      },
      {
        src: suvFrontImg,
        alt: 'Dark metallic SUV studio profile',
        caption: 'Side & Wheel Detail',
      },
    ],
  },
  {
    id: 'newly-imported-cars-allocation',
    category: 'Newly Imported Cars',
    featured: false,
    makeAndModel: 'Newly Cleared Import Arrival',
    year: 'Current & Recent Model Years',
    specifications: 'Latest Shipment Batch · Full Paperwork Verified',
    transmission: 'Automatic',
    fuelType: 'Petrol / Hybrid / Electric',
    mileage: 'Zero-KM & Verified Low Mileage',
    priceEtb: 'Contact for Price',
    availability: 'Inspection & Inquiry Open',
    overview:
      'Recent international arrivals processed with complete import documentation and prepared for immediate viewing, inspection, and handover consultation.',
    highlights: [
      'Customs & clearance documentation handled with transparency',
      'Direct viewing and walk-around inspection coordinated via our team',
      'Fastest pathway from inquiry to ownership in Ethiopia',
    ],
    photos: [
      {
        src: newlyImportedImg,
        alt: 'Obsidian black luxury SUV in clean inspection bay after import arrival',
        caption: 'Post-Arrival Inspection Bay',
      },
      {
        src: heroShowroomImg,
        alt: 'Obsidian black flagship SUV on polished showroom floor',
        caption: 'Showroom Floor Presentation',
      },
      {
        src: cabinInteriorImg,
        alt: 'Detailed interior inspection of newly imported luxury car',
        caption: 'Cabin Quality Verification',
      },
    ],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Private Consultation & Vehicle Selection',
    description:
      'Share your preferred vehicle category, body style, fuel type, and specification goals with our team on WhatsApp or by phone.',
  },
  {
    number: '02',
    title: 'Verification, Inspection & Valuation',
    description:
      'We confirm exact vehicle availability, verify mechanical and cosmetic condition, review documentation, and provide a clear ETB quotation.',
  },
  {
    number: '03',
    title: 'International Shipping & Customs Clearance',
    description:
      'Every step of international logistics, port handling, and customs clearance into Ethiopia is coordinated transparently on your behalf.',
  },
  {
    number: '04',
    title: 'Final Inspection & Handover',
    description:
      'Upon arrival, your vehicle completes final inspection and detailing before seamless handover with complete ownership documentation.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How do I check current vehicle prices in ETB and live stock?',
    answer:
      'Because vehicle specifications, model years, trim packages, and import duties vary per vehicle, we provide exact ETB pricing and live availability directly through our WhatsApp concierge at +251 91 280 4318.',
  },
  {
    question: 'Can LEXURY CAR import a specific make, model, or trim to order?',
    answer:
      'Yes. Beyond vehicles presented in our showroom collection, you can share your desired make, model, year, fuel type, and interior preferences with our team to source a vehicle tailored to your requirements.',
  },
  {
    question: 'Which vehicle categories do you specialize in importing to Ethiopia?',
    answer:
      'We focus on Luxury SUVs, Executive Sedans, Premium Vehicles, Family Cars, and Newly Imported Cars sourced with verified condition and complete documentation.',
  },
  {
    question: 'How does the inspection and documentation process work?',
    answer:
      'Every vehicle undergoes thorough condition verification and paperwork review prior to final confirmation. Full specifications, photographs, and clearance updates are shared directly with you throughout the journey.',
  },
  {
    question: 'How can I schedule a viewing or speak directly with LEXURY CAR?',
    answer:
      'You can reach our team immediately via WhatsApp or direct telephone on +251 91 280 4318 using any inquiry button on this website.',
  },
];
