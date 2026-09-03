import {
  Bed,
  Utensils,
  Music,
  Camera,
  Waves,
  Flame,
  PartyPopper,
  Landmark,
  Map,
  Sun,
  Users,
  Headphones,
  Mic,
  Video,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import Basketball from '../components/icons/Basketball'

export const EVENT = {
  name: 'The Detty Escape',
  tagline: "Termine l'année autrement.",
  intro: "Les meilleures 24h de l’année pour terminer en beauté",
  dates: '29-30 Décembre 2026',
  // Countdown target date
  target: '2026-12-29T14:00:00',
  hotel: 'Hotel Millenium Popo Beach',
  location: 'Grand-Popo, Bénin',
  roomsLeft: 34,
  roomsTotal: 60,
  price: '245.000',
  currency: 'FCFA',
  priceEur: '375',
  currencyEur: '€',
  phone: '+229 01 23 45 67 89',
  email: 'lejardinconcept@gmail.com',
}

export const NAV_LINKS = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Programme', href: '#programme' },
  { label: 'Hébergement', href: '#hebergement' },
  { label: 'Lieu', href: '#lieu' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export type Feature = { icon: LucideIcon; label: string }

export const HERO_TAGS: string[] = [
  'Pool Party',
  'Feu de plage',
  'Boîte de nuit privatisée',
  'Piscine',
  'Tennis',
  'Basketball',
  'Repas',
  "Visite de Ouidah",
]

export const STRIP_FEATURES: Feature[] = [
  { icon: Utensils, label: 'All Inclusive' },
  { icon: Bed, label: 'Hébergement' },
  { icon: Landmark, label: 'Visite de Ouidah' },
  { icon: Music, label: 'Activités & Soirées' },
  { icon: Basketball, label: 'Infrastructures' },
  { icon: Camera, label: 'Souvenirs inoubliables' },
]

export const INCLUSIONS: string[] = [
  '1 nuit en chambre double (jusqu\'à 2 personnes)',
  'Buffet Petit-déjeuner',
  'Buffet Déjeuner',
  'Buffet Dîner',
  'Pool Party',
  'Feu de plage',
  'Soirée en boîte de nuit privatisée',
  'Piscine, Tennis, Basketball',
  "Visite de Ouidah",
]

export type Slot = { time: string; title: string; sub?: string; highlight?: boolean }

export const DAY_ONE: Slot[] = [
  { time: '10h00', title: 'Depart du convoi de Cotonou' },
  { time: '12h00', title: 'Arrivée à Grand Popo et installation' },
  { time: '13h00', title: 'Buffet Dejeuner' },
  { time: '15h00', title: 'Pool Party' },
  { time: '18h00', title: 'Temps libre', },
  { time: '20h00', title: 'Buffet Diner', },
  { time: '22h00', title: 'Feu de plage', },
  { time: '00h00', title: 'Boite de nuit privatisée', },
]

export const DAY_TWO: Slot[] = [
  { time: '08h00', title: 'Buffet Petit Dejeuner' },
  { time: '10h00', title: 'Temps libre' },
  { time: '12h00', title: 'Check out et depart du convoi pour Ouidah' },
  { time: '14h00', title: 'Visite de Ouidah' },
  { time: '17h00', title: 'Retour sur Cotonou' },
]

export type Guest = { icon: LucideIcon; label: string }

export const GUESTS: Guest[] = [
  { icon: Headphones, label: 'DJ' },
  { icon: Mic, label: 'Animateurs' },
  { icon: Camera, label: 'Photographe' },
  { icon: Video, label: 'Vidéaste' },
  { icon: Sparkles, label: 'Créateurs de contenu' },
  { icon: Map, label: 'Guide touristique' },
]

export type Reason = { icon: LucideIcon; label: string }

export const REASONS: Reason[] = [
  { icon: Waves, label: 'Déconnecter avant la nouvelle année' },
  { icon: Users, label: 'Rencontrer de nouvelles personnes' },
  { icon: Sun, label: 'Profiter d\'un cadre exceptionnel' },
  { icon: PartyPopper, label: 'Vivre un événement exclusif' },
  { icon: Flame, label: 'Repartir avec des souvenirs inoubliables' },
  { icon: Flame, label: 'Redecouvrir la ville de Ouidah et son histoire' },
]

export type Faq = { q: string; a: string }

export const FAQS: Faq[] = [
  {
    q: 'Les repas sont-ils inclus ?',
    a: 'Oui, la formule est 100% all inclusive : petit-déjeuner, déjeuner et dîner sous forme de buffet sont compris pendant tout le séjour.',
  },
  {
    q: 'Les boissons sont-elles incluses ?',
    a: 'Les consommations au bar sont libres et à la charge de chacun(e), y compris pendant la pool party, le feu de plage et la soirée en boîte de nuit.',
  },
  {
    q: 'Puis-je venir seul(e) ?',
    a: 'Absolument ! L\'événement est pensé pour rencontrer de nouvelles personnes dans une ambiance conviviale.',
  },
  {
    q: 'Puis-je réserver avec un(e) ami(e) ?',
    a: 'Oui, la chambre double accueille jusqu\'à 2 personnes. Vous pouvez donc partager votre séjour avec la personne de votre choix.',
  },
  {
    q: 'Le transport est-il inclus ?',
    a: 'Le transport jusqu\'à l\'Hotel Millenium Popo Beach n\'est pas compris dans la formule. Un point de rendez-vous et des options de covoiturage vous seront communiqués après réservation.',
  },
  {
    q: 'Puis-je payer en plusieurs fois ?',
    a: 'Oui, il est possible de payer en plusieurs fois grâce à des solutions de paiement comme Klarna',
  },
]
