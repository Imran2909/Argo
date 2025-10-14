// src/types/index.ts - Export all shared types for reusability

// Trip interface (from backend schema: source, destination, etc.)
export interface Trip {
  id: string | number ;  // Or number if using Mongo _id.toString()
  source: string;
  destination: string;
  date: string;  // ISO date, e.g., '2025-10-15'
  time?: string;  // Optional timing
  totalSeats: number;
  availableSeats?: number;  // For booking logic
  price: number;  // In rupees
  createdAt?: Date;
}

// Booking interface
export interface Booking {
  id: string;
  userId: string;
  tripId: string;
  seats: number[];  // Selected seat numbers
  status: 'upcoming' | 'past' | 'cancelled';
  bookingDate: Date;
  totalPrice: number;
}

// User interface (for auth/profile)
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: Date;
  avatar: string
}

// Auth payload (extends User + token)
export interface AuthUser extends User {
  token: string;
}

// Filters for trip search
export interface TripFilters {
  from: string;
  to: string;
  date: string;
}

// Error type for consistency
export interface AppError {
  message: string;
  code?: string;
}

export interface NavLink {
  label: string;
  to: string;
  adminOnly?: boolean;
}

export interface NavLinksProps {
  user?: User | null;
  links?: NavLink[];
}

// Footer types (no any, reusable)
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  heading: string;
  links: FooterLink[];
}

export interface FooterSocialIcon {
  icon: React.ReactNode;
  href: string;
}

export interface FooterProps {
  sections?: FooterSection[];  // Typed array, optional
  socialIcons?: FooterSocialIcon[];  // Typed array, optional
  year?: number;
  company?: string;
}