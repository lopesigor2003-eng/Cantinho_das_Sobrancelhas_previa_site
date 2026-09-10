export interface Service {
  id: string;
  name: string;
  category: 'sobrancelhas' | 'cilios' | 'facial';
  shortDesc: string;
  fullDesc: string;
  duration: string;
  price: string;
  priceNum: number;
  highlight?: boolean;
  tag?: string;
  recommendedFor: string;
  includes: string[];
  imageUrl?: string;
}

export interface Review {
  id: string;
  author: string;
  avatarText: string;
  rating: number;
  timeAgo: string;
  serviceTaken: string;
  text: string;
  verified: boolean;
  localGuide?: boolean;
  reviewCount?: number;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  duration: string;
  durability: string;
  beforeImg: string;
  afterImg: string;
  highlightNote: string;
}

export interface QuizOption {
  id: string;
  label: string;
  detail: string;
  matchedProcedure: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  hint: string;
  options: QuizOption[];
}

export interface BookingState {
  selectedServices: string[];
  clientName: string;
  clientPhone: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export interface RealPhotoItem {
  id: string;
  title: string;
  category: 'Micropigmentação' | 'Brow Lamination' | 'Tratamento & Fios' | 'Cílios' | 'Estúdio & Fachada';
  procedureName: string;
  description: string;
  badge: string;
  imageUrl: string;
  sourceLabel: string;
  details: string[];
}

