import {
  BadgeCheck,
  Camera,
  Car,
  CarFront,
  CheckCircle,
  ClipboardList,
  Clock,
  Clock3,
  DollarSign,
  FileBadge,
  FileCheck2,
  FileSearch,
  FileText,
  Gift,
  GraduationCap,
  Hammer,
  Heart,
  Home,
  Hotel,
  MapPin,
  MoreHorizontal,
  Package,
  PackageCheck,
  PartyPopper,
  PhoneCall,
  Pill,
  Plane,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Shirt,
  ShoppingCart,
  Stamp,
  Syringe,
  Truck,
  Undo2,
  Users,
  Wrench,
} from "lucide-react";

export const errands = [
  { icon: PackageCheck, label: "Collecting and delivering packages" },
  { icon: ShoppingCart, label: "Grocery shopping" },
  { icon: Shirt, label: "Picking-up dry cleaning" },
  { icon: Home, label: "House-sitting" },
  { icon: Pill, label: "Collecting and delivering prescriptions" },
  { icon: Send, label: "Taking parcels to the Post Office" },
  { icon: Gift, label: "Personal shopping & gift shopping" },
  { icon: Undo2, label: "Returns and exchanges" },
  { icon: Clock3, label: "Queuing for passports and visas" },
  { icon: MoreHorizontal, label: "And more!" },
];

export const errandSteps = [
  {
    icon: PhoneCall,
    title: "Request an Errand",
    description:
      "Place a request via phone or email. We’ll listen to your needs and confirm the specifics with you.",
  },
  {
    icon: FileText,
    title: "Receive Invoice",
    description:
      "Once agreed, we’ll send an invoice covering the errand fee and any expected expenses. Payment confirms your booking.",
  },
  {
    icon: CheckCircle,
    title: "Task Completed",
    description:
      "You’ll receive a confirmation email, and we’ll carry out your errand professionally and on time.",
  },
];

export const PAservices = [
  {
    icon: ClipboardList,
    title: "Admin & Secretarial",
    description:
      "All general administrative and secretarial support tailored to your needs.",
  },
  {
    icon: Home,
    title: "Household Management",
    description:
      "Manage staff, handle rotas, schedule repairs, and monitor household budgets.",
  },
  {
    icon: Plane,
    title: "Travel & Logistics",
    description:
      "We arrange travel, coordinate itineraries, and manage all logistics stress-free.",
  },
  {
    icon: ShoppingCart,
    title: "Errands & Shopping",
    description:
      "We handle errands like grocery runs, dry cleaning, and personal shopping.",
  },
  {
    icon: PartyPopper,
    title: "Event Planning",
    description:
      "From birthdays to business events, we plan with precision and taste.",
  },
  {
    icon: Search,
    title: "Research Tasks",
    description:
      "We take care of any research, reports, or background checks you need done.",
  },
];

export const typicalRequests = [
  { label: "Travel insurance", icon: ShieldCheck },
  { label: "Passport renewals", icon: FileBadge },
  { label: "Visa arrangements", icon: Stamp },
  { label: "Currency exchange", icon: DollarSign },
  { label: "Vaccination information", icon: Syringe },
  { label: "Car breakdown cover", icon: Car },
  { label: "Romantic getaways", icon: Heart },
  { label: "Family friendly hotels, facilities and amenities", icon: Hotel },
  { label: "Arranging and booking flights", icon: Plane },
  {
    label: "ISPS (International School Placement Services)",
    icon: GraduationCap,
  },
];

export const autoServices = [
  { label: "Vehicle diagnostics & inspection", icon: FileSearch },
  { label: "Pre-purchase inspection report", icon: BadgeCheck },
  { label: "Maintenance & repairs", icon: Wrench },
  { label: "Car photography & checklist", icon: Camera },
  { label: "Accident checks & history", icon: ShieldCheck },
  { label: "Logistics and vehicle pickup", icon: Truck },
  { label: "Fair valuation before buying", icon: CheckCircle },
  { label: "Vehicle sourcing & advisory", icon: CarFront },
];

export const propertyServices = [
  { label: "Property acquisition", icon: Home },
  { label: "Property inspections & insurance checks", icon: FileCheck2 },
  { label: "Maintenance and repairs", icon: Wrench },
  { label: "Professional organizing & decluttering", icon: ClipboardList },
  { label: "Recruiting household staff", icon: Users },
  { label: "Property development & renovations", icon: Hammer },
];

export const serviceMeta = {
  "errand-running-service": {
    title: "Errand Running Service",
    subtitle: "Reliable and professional errand runners at your service.",
    image: "/images/errand-bg.jpg",
  },
  "custom-travel-solutions": {
    title: "Travel Services",
    subtitle: "Let us turn your dream into reality.",
    image: "/images/travel-bg.jpg",
  },
  "automobile-services": {
    title: "Automobile Services",
    subtitle: "Committed to providing customer service you expect.",
    image: "/images/auto-bg.jpg",
  },
  "personal-assistance": {
    title: "Personal Assistance",
    subtitle: "Discreet, reliable, and tailored support at your fingertips.",
    image: "/images/assist-bg.jpg",
  },
  "property-management": {
    title: "Property Management",
    subtitle: "Expert care and oversight for your valuable assets.",
    image: "/images/home-bg.jpg",
  },
} as const;

export const serviceData = [
  {
    title: "Errand Running",
    slug: "services/errand-running-service",
    image: "/images/errand-bg.jpg",
    description:
      "Reliable, fast, and professional personal errand services across Lagos.",
  },
  {
    title: "Custom Travel Solutions",
    slug: "services/custom-travel-solutions",
    image: "/images/travel-bg.jpg",
    description:
      "Study abroad, visa help, curated getaways — all arranged with ease.",
  },
  {
    title: "Personal Assistant Service",
    slug: "services/personal-assistance",
    image: "/images/assist-bg.jpg",
    description:
      "Executive, celebrity, and household PAs who handle it all discreetly.",
  },
  {
    title: "Property Management",
    slug: "services/property-management",
    image: "/images/home-bg.jpg",
    description:
      "Acquisition, inspections, maintenance, organizing, and staff recruitment.",
  },
  {
    title: "Automobile Services",
    slug: "services/automobile-services",
    image: "/images/auto-bg.jpg",
    description:
      "Vehicle inspections, sourcing, and maintenance with expert reports.",
  },
];

export const services = [
  { name: "Errand Running", href: "/services/errand-running-service" },
  { name: "Automobile Services", href: "/services/automobile-services" },
  {
    name: "Custom Travel Solutions",
    href: "/services/custom-travel-solutions",
  },
  { name: "Personal Assistant", href: "/services/personal-assistance" },
  { name: "Property Management", href: "/services/property-management" },
];

export const support = [
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const faqs = [
  {
    id: "1",
    title: "What are the delivery services you offer?",
    content:
      "We offer Same Day Delivery Plan with no specific time frame as to when we’ll be coming to pick/deliver packages. Errands on this plan are picked and delivered between 8am and 9pm. All errands before 11am are on this plan, and it starts immediately your payment is confirmed. We also offer Express Service Plan, a custom delivery requiring a dedicated rider to go for an immediate pick up. It attracts a premium fee.",
  },
  {
    id: "2",
    title: "Do you deliver cakes or other perishable goods?",
    content:
      "Yes we do. These require careful service and safer transportation and come with a premium fee. We recommend using the Express Service Plan for such deliveries.",
  },
  {
    id: "3",
    title: "Do you run deliveries for large items?",
    content:
      "Yes we do. This is a special service and comes with a premium fee.",
  },
  {
    id: "4",
    title: "What happens if I'm not available during delivery?",
    content:
      "Our riders will wait a maximum of 5 minutes at pickup and 10 minutes at delivery. If you're unavailable, the package returns to our headquarters and must be reordered.",
  },
  {
    id: "5",
    title: "Can I contact the rider directly?",
    content:
      "No. Customers are advised not to contact riders for any arrangements outside the ErrandBoy Nigeria platform.",
  },
  {
    id: "6",
    title: "What if I provided the wrong delivery address or phone number?",
    content:
      "ErrandBoy Nigeria is not liable for incorrect information. Packages with wrong details will be returned, and you'll need to place a new order.",
  },
  {
    id: "7",
    title: "When should I expect a refund?",
    content:
      "If approved, refunds typically take 3–7 working days to reflect in your bank account.",
  },
  {
    id: "8",
    title: "Can I choose a specific delivery time?",
    content:
      "Yes, by choosing our Express Service Plan. It assigns a dedicated rider for your task and allows for more specific scheduling.",
  },
  {
    id: "9",
    title: "Do you operate on weekends and public holidays?",
    content:
      "Yes, but availability may be limited depending on location and service type. Express delivery is recommended for urgent weekend requests.",
  },
  {
    id: "10",
    title: "Is there tracking for my delivery?",
    content:
      "Currently, we do not offer real-time tracking, but you'll receive status updates via SMS or call from our team.",
  },
];

export const servicesCard = [
  {
    title: "Errand Running",
    icon: Package,
    description: "Save time with our reliable professionals",
    details: "Grocery pickup, dry cleaning, pharmacy runs and more",
    href: "/services/errand-running-service",
  },
  {
    title: "Car Sales & Service",
    icon: Truck,
    description: "Quality vehicles and maintenance",
    details: "New/used sales, detailing, repairs and maintenance",
    href: "/services/automobile-services",
  },
  {
    title: "Travel Solutions",
    icon: MapPin,
    description: "Seamless travel planning",
    details: "Flight booking, itinerary planning, concierge services",
    href: "/services/custom-travel-solutions",
  },
  {
    title: "Personal Assistant",
    icon: Shield,
    description: "Dedicated task support",
    details: "Scheduling, research, event planning and organization",
    href: "/services/personal-assistance",
  },
  {
    title: "Property Management",
    icon: Clock,
    description: "Complete property management",
    details: "Rental management, maintenance coordination",
    href: "/services/property-management",
  },
];
