"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Gavel,
  ClipboardCheck,
  FileText,
  Ship,
  Truck,
  Shield,
  Target,
  Heart,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Clock,
  Sparkles,
  TrendingUp,
  Handshake,
  Users2,
  Rocket,
  Briefcase,
  Phone as PhoneIcon,
  MessageCircle,
} from "lucide-react";

// shadcn/ui imports
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const LearnMorePage = () => {
  // Stats data
  const stats = [
    { value: "500+", label: "Vehicles Imported", icon: Car },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "24/7", label: "Customer Support", icon: Clock },
  ];

  // Services data
  const services = [
    {
      icon: Car,
      title: "Vehicle Sourcing",
      description: "From auctions and dealerships in the United States",
      details: ["Copart & IAAI auctions", "Dealer networks", "Private sellers"],
    },
    {
      icon: Gavel,
      title: "Auction Bidding",
      description: "Expert assistance with USA auction bidding",
      details: ["Live bidding support", "Price analysis", "Bid strategy"],
    },
    {
      icon: ClipboardCheck,
      title: "Inspection & Verification",
      description: "Thorough vehicle inspection and verification",
      details: ["Mechanical check", "History report", "Photo documentation"],
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete export coordination and paperwork",
      details: ["Title transfer", "Export permits", "Bill of lading"],
    },
    {
      icon: Ship,
      title: "Shipping",
      description: "Secure shipping of vehicles to Nigeria",
      details: ["Container shipping", "Insurance", "Tracking"],
    },
    {
      icon: Truck,
      title: "Door-to-Door Delivery",
      description: "Customs clearance and delivery to your location",
      details: ["Customs clearance", "Duty calculation", "Final delivery"],
    },
  ];

  // Values data
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest and transparent dealings in every transaction",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Consistent and dependable service you can trust",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building long-term relationships with our clients",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting USA opportunities with Nigerian buyers",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly improving our processes",
    },
  ];

  // Timeline data
  const timeline = [
    {
      year: "2018",
      title: "Errandboy Nigeria Founded",
      description: "Started as a local errand and logistics service in Nigeria",
    },
    {
      year: "2020",
      title: "Expansion to Vehicle Services",
      description: "Added vehicle-related services to meet growing demand",
    },
    {
      year: "2022",
      title: "USA Operations Begin",
      description:
        "Established presence in the United States for vehicle sourcing",
    },
    {
      year: "2024",
      title: "Full USA Import Service",
      description:
        "Launched comprehensive vehicle import service from USA to Nigeria",
    },
    {
      year: "2025",
      title: "500+ Vehicles Imported",
      description: "Celebrated major milestone of successful imports",
    },
  ];

  // Team/Expertise data
  const expertise = [
    {
      icon: Briefcase,
      title: "Industry Expertise",
      description: "Deep knowledge of USA auto auctions and market trends",
    },
    {
      icon: Users2,
      title: "Experienced Team",
      description: "Dedicated professionals in both USA and Nigeria",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Understanding of Nigerian preferences and USA inventory",
    },
    {
      icon: FileText,
      title: "Regulatory Knowledge",
      description: "Expert handling of export/import documentation",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-500/90 z-10" />
          <Image
            src="/images/usa-import-hero.jpg"
            alt="USA Vehicle Import"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30 mb-6"
            >
              Errandboy USA
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-pt-serif">
              Your Trusted Partner for USA Vehicle Imports
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Bridging the gap between the United States and Nigeria, making
              international vehicle purchases simple, transparent, and
              stress-free.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services/vehicle-import">
                <button className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg inline-block text-center">
                  Start Your Import
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              Our Story
            </Badge>
            <h2 className="text-3xl font-bold mb-6 font-pt-serif text-gray-800">
              Bridging the Gap Between USA and Nigeria
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  As the demand for affordable and reliable vehicles continues
                  to grow in Nigeria, many buyers look toward the United States
                  for quality vehicles at competitive prices. Errandboy USA was
                  established to bridge that gap by helping individuals and
                  businesses source, purchase, and ship vehicles from the United
                  States to Nigeria.
                </p>

                <p className="text-lg leading-relaxed">
                  Building on the trusted service culture of Errandboy Nigeria,
                  our mission is to simplify the process of buying cars from the
                  United States by providing guidance, transparency, and
                  reliable support at every stage of the transaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-red-600" />
                  Our Foundation
                </h3>
                <p className="text-gray-600">
                  Errandboy USA is built on the foundation of Errandboy Nigeria,
                  a service-driven platform created to simplify everyday tasks
                  and logistics for individuals and businesses. With years of
                  experience in customer service, logistics coordination, and
                  problem-solving, the Errandboy brand continues to evolve to
                  meet the needs of a growing global community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              What We Do
            </Badge>
            <h2 className="text-3xl font-bold mb-6 font-pt-serif text-gray-800">
              Complete USA Vehicle Import Services
            </h2>
            <p className="text-gray-600 text-lg">
              We help customers in Nigeria and beyond access vehicles from the
              United States through a streamlined, end-to-end process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-yellow-400 overflow-hidden text-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-black text-white border-white/30 mb-4">
                Our Vision
              </Badge>
              <h2 className="text-3xl font-bold mb-6 font-pt-serif">
                Becoming the Trusted Bridge Between Continents
              </h2>
              <p className="text-gray-700 mb-8 text-sm leading-relaxed">
                Our vision is to become a trusted bridge between the United
                States and Nigeria for vehicle sourcing and export services.
              </p>
              <p className="text-gray-700 mb-8 text-sm leading-relaxedmb-8">
                We are committed to helping individuals, families, and
                businesses access reliable vehicles while maintaining the values
                of integrity, transparency, and customer satisfaction that
                define the Errandboy brand.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {values.slice(0, 4).map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <value.icon className="w-5 h-5 text-gray-900 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">{value.title}</h4>
                      <p className="text-gray-700 mb-8 text-sm leading-relaxedmb-8">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black p-8 rounded-2xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Our Commitment
              </h3>
              <div className="space-y-6">
                {[
                  "Providing honest guidance throughout the buying process",
                  "Helping customers find vehicles that fit their budget and needs",
                  "Ensuring clear communication from purchase to shipment",
                  "Building long-term relationships with our clients",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <p className="text-white">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              Our Journey
            </Badge>
            <h2 className="text-3xl font-bold mb-6 font-pt-serif text-gray-800">
              The Errandboy Story
            </h2>
            <p className="text-gray-600 text-lg">
              From local errands to international vehicle imports - our growth
              journey
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-md hidden md:block" />

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <Card className="hover:shadow-lg transition-shadow bg-red-500">
                    <CardContent className="p-6">
                      <Badge className="bg-red-100 text-red-600 mb-2">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-red-100">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold mb-6 font-pt-serif text-gray-800">
              Why Trust Errandboy USA?
            </h2>
            <p className="text-gray-600 text-lg">
              Combining local knowledge with international expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold mb-6 font-pt-serif text-gray-800">
              What Drives Us Forward
            </h2>
            <p className="text-gray-600 text-lg">
              The principles that guide every interaction and transaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
                Get in Touch
              </Badge>
              <h2 className="text-3xl font-bold mb-6 font-pt-serif text-gray-800">
                Ready to Start Your Import Journey?
              </h2>
              <p className="text-gray-600 text-lg">
                Whether you&apos;re an individual buyer or a dealer looking to
                source vehicles from the United States, our team is ready to
                assist you every step of the way.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PhoneIcon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Call Us
                  </h3>
                  <p className="text-2xl font-semibold text-red-600 mb-2">
                    956-713-3491
                  </p>
                  <p className="text-sm text-gray-500">
                    Mon-Fri, 8am-5pm (USA Time)
                  </p>
                  <Separator className="my-4" />
                  <p className="text-sm text-gray-600">
                    Speak directly with our USA-based vehicle import specialists
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-2xl font-semibold text-green-600 mb-2">
                    +1 956-713-3491
                  </p>
                  <p className="text-sm text-gray-500">24/7 messaging</p>
                  <Separator className="my-4" />
                  <Link href="https://wa.me/19567133491" target="_blank">
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      Chat on WhatsApp
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-gray-500 text-sm">
                By combining the reliability of Errandboy Nigeria with the
                opportunities available in the United States automotive market,
                Errandboy USA creates a seamless path for customers looking to
                purchase vehicles abroad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-pt-serif">
              Start Your Import Journey Today
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Let us help you find and import your dream vehicle from the United
              States
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services/vehicle-import/form">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;
