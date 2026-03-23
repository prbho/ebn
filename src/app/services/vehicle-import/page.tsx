/* eslint-disable */

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Gavel,
  ClipboardCheck,
  FileText,
  Ship,
  Shield,
  Truck,
  CheckCircle,
  Phone,
  Mail,
  DollarSign,
  Clock,
  Star,
  Heart,
  Globe,
} from "lucide-react";

const VehicleImportPage = () => {
  // Process steps
  const processSteps = [
    {
      icon: Search,
      title: "Vehicle Selection",
      description:
        "Browse and select vehicles from USA auctions and dealerships",
    },
    {
      icon: Gavel,
      title: "Auction Bidding",
      description: "Expert bidding assistance at USA auto auctions",
    },
    {
      icon: ClipboardCheck,
      title: "Inspection",
      description: "Thorough vehicle inspection and verification",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete export documentation processing",
    },
    {
      icon: Ship,
      title: "Shipping",
      description: "Secure container shipping to Nigeria",
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Customs clearance and delivery to your location",
    },
  ];

  // Benefits
  const benefits = [
    {
      icon: Shield,
      title: "Stress-Free Process",
      description: "We handle everything from bidding to delivery",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Access to competitive USA auction prices",
    },
    {
      icon: ClipboardCheck,
      title: "Verified Vehicles",
      description: "Comprehensive inspection reports provided",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Efficient documentation and shipping",
    },
    {
      icon: Globe,
      title: "USA Network",
      description: "Strong partnerships with USA dealers and auction houses",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Personalized service for each client",
    },
  ];

  // Vehicle categories
  const vehicleCategories = [
    {
      name: "Sedans",
      image: "/images/sedan.jpg",
      price: "From $3,000",
      popular: true,
    },
    {
      name: "SUVs",
      image: "/images/jeep.jpg",
      price: "From $5,000",
      popular: true,
    },
    {
      name: "Trucks",
      image: "/images/truck.jpg",
      price: "From $4,000",
      popular: false,
    },
    {
      name: "Luxury Cars",
      image: "/images/luxury_cars.jpg",
      price: "From $15,000",
      popular: true,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Adekunle Johnson",
      location: "Lagos",
      vehicle: "2019 Toyota Highlander",
      rating: 5,
      comment:
        "Errandboy made importing my SUV from USA stress-free. They handled everything and kept me updated throughout the process.",
      image: "/images/testimonial-1.jpg",
    },
    {
      name: "Chioma Okafor",
      location: "Abuja",
      vehicle: "2020 Honda Accord",
      rating: 5,
      comment:
        "The team was professional and transparent. Got my car in perfect condition, exactly as described in the inspection report.",
      image: "/images/testimonial-2.jpg",
    },
    {
      name: "Musa Ibrahim",
      location: "Kano",
      vehicle: "2018 Ford F-150",
      rating: 5,
      comment:
        "Best decision to use Errandboy. They saved me money and handled all the complicated paperwork. Highly recommended!",
      image: "/images/testimonial-3.jpg",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How long does the import process take?",
      answer:
        "The entire process typically takes 8-12 weeks from auction purchase to delivery in Nigeria, depending on shipping schedules and customs clearance.",
    },
    {
      question: "What costs are involved?",
      answer:
        "Costs include vehicle price, auction fees, inspection, shipping, insurance, import duties, and our service fee. We provide a detailed breakdown before starting.",
    },
    {
      question: "Can I inspect the vehicle before purchase?",
      answer:
        "Yes! We provide comprehensive inspection reports with photos and videos. Third-party inspections can also be arranged.",
    },
    {
      question: "What happens if the vehicle is damaged during shipping?",
      answer:
        "All vehicles are fully insured during transit. We'll handle the insurance claim and ensure you're compensated for any damages.",
    },
    {
      question: "Do you handle customs clearance?",
      answer:
        "Yes, we manage the entire customs clearance process in Nigeria, ensuring all duties are properly paid and documentation is complete.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, and secure payment platforms. Payment is structured in stages throughout the process.",
    },
  ];

  return (
    <div className="min-h-screen flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-16 h-11/12 pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/usa-niger-import.png"
            alt="USA Vehicle Import"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r max-w-8/12 from-white to-transparent rounded-2xl" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=" text-white"
          >
            <div className="max-w-3xl relative p-6">
              <div className="relative">
                <span className="inline-block px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-full mb-6">
                  USA Vehicle Import Service
                </span>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-pt-serif">
                  <span className="block">Bring Your Dream Car </span>
                  from the USA to Nigeria
                </h1>
                <p className="text-gray-700 mb-8 text-lg max-w-2xl">
                  <span className="block">
                    Errandboy USA helps customers in Nigeria and beyond access
                  </span>
                  <span className="block">
                    quality vehicles from the United States through{" "}
                  </span>
                  <span className="block">
                    a streamlined, stress-free process.
                  </span>
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/services/vehicle-import/form">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg inline-block text-center"
                    >
                      Start Your Import
                    </motion.button>
                  </Link>
                  <Link href="/services/vehicle-import/learn-more">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg inline-block text-center"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 font-pt-serif">
              Your Trusted Bridge to USA Vehicle Imports
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-600 mb-6 leading-relaxed">
                Errandboy USA specializes in helping Nigerians access quality
                vehicles from the United States. Our comprehensive service
                removes the stress and uncertainty often associated with
                international vehicle purchases.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                From auction bidding to final delivery, we handle every step
                with transparency, integrity, and professionalism. Our team in
                the USA ensures thorough inspections, while our Nigerian team
                manages customs clearance and delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-4 border bg-gray-200 rounded-xl p-6">
                {[
                  "Direct access to USA auctions and dealerships",
                  "Comprehensive vehicle inspection and verification",
                  "Full documentation and export coordination",
                  "Secure shipping with full insurance coverage",
                  "Customs clearance and delivery to your door",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800 font-pt-serif">
              Complete USA Vehicle Import Services
            </h2>
            <p className="text-gray-600 text-lg">
              We handle every aspect of the import process, ensuring a smooth
              experience from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Vehicle Sourcing",
                description:
                  "Access to thousands of vehicles from USA auctions and dealerships",
                features: [
                  "Copart & IAAI auctions",
                  "Dealer networks",
                  "Private sellers",
                ],
              },
              {
                icon: Gavel,
                title: "Auction Bidding",
                description:
                  "Expert bidding assistance to get you the best price",
                features: [
                  "Live bidding support",
                  "Price analysis",
                  "Bid strategy",
                ],
              },
              {
                icon: ClipboardCheck,
                title: "Inspection & Verification",
                description:
                  "Thorough vehicle inspection with detailed reports",
                features: [
                  "Mechanical check",
                  "History report",
                  "Photo/video documentation",
                ],
              },
              {
                icon: FileText,
                title: "Documentation",
                description: "Complete export paperwork handling",
                features: [
                  "Title transfer",
                  "Export permits",
                  "Bill of lading",
                ],
              },
              {
                icon: Ship,
                title: "Shipping & Logistics",
                description: "Secure container shipping to Nigeria",
                features: [
                  "Full container load",
                  "Ro-Ro options",
                  "Insurance coverage",
                ],
              },
              {
                icon: Truck,
                title: "Customs & Delivery",
                description: "Hassle-free clearance and door delivery",
                features: [
                  "Customs clearance",
                  "Duty calculation",
                  "Doorstep delivery",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                }}
                className="bg-white p-8 rounded-xl shadow transition-shadow border-t-4 border-transparent hover:border-red-500 ring ring-red-500/10"
              >
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-red-500 font-semibold mb-2 block">
              Simple Process
            </span>
            <h2 className="text-3xl font-bold text-gray-800 font-pt-serif">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg">
              Six simple steps to get your vehicle from the USA to Nigeria
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-red-200 -translate-y-1/2 hidden lg:block" />

            <div className="grid lg:grid-cols-6 gap-4 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white min-h-60 lg:h-72 p-6 rounded-xl shadow-lg text-center relative z-10">
                    <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 border border-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 font-pt-serif">
              Vehicles We Import
            </h2>
            <p className="text-gray-600 text-lg">
              Popular vehicle categories Nigerians import from the USA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicleCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {category.popular && (
                    <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-yellow-400 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-pt-serif">
              Why Choose Errandboy for Your Vehicle Import
            </h2>
            <p className="text-gray-800 mb-4">
              We make USA vehicle imports simple, safe, and stress-free
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <benefit.icon className="w-14 h-14 text-amber-600 bg-white p-3 rounded-full inline-block mb-4 shadow-md" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-800 mb-4">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-red-500 font-semibold mb-2 block">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-800 font-pt-serif">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real experiences from customers who imported vehicles through us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-gray-400">
                      {testimonial.vehicle}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  &quot;{testimonial.comment}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 font-pt-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about importing vehicles from the USA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl px-8 py-16 rounded-xl mx-auto text-center bg-gradient-to-r from-red-600 to-red-500">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold text-white font-pt-serif">
              Ready to Import Your Dream Vehicle?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Let us handle the stress while you focus on choosing your perfect
              car
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services/vehicle-import/form">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg inline-block text-center"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className=" bg-transparent border border-red-100 text-white/80 px-8 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors shadow-lg inline-block text-center"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap text-white justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 (956) 713-3491</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>imports@errandboynigeria.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span>Mon-Fri 8am-5pm</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing Search icon import
const Search = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export default VehicleImportPage;
