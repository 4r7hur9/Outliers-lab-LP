/**
 * Types para formulários e dados da aplicação
 */

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface FeatureCardProps {
  id: string;
  title: string;
  description: string;
}

export interface StatProps {
  value: string;
  label: string;
}

export interface HowItWorkStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  avatar: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface RecursoFeature {
  icon: string;
  title: string;
  features: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}
