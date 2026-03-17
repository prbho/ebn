"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  ClipboardCheck,
  Heart,
  Globe,
  Phone,
  Mail,
  Star,
  Award,
  Clock,
  DollarSign,
  X,
  Percent,
  BadgeCheck,
  Send,
  Shield,
} from "lucide-react";

// shadcn/ui imports
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsWhatsapp } from "react-icons/bs";

const ErrandboyUSAPage = () => {
  const [, setIsScrolled] = useState(false);

  const [showQuickQuote, setShowQuickQuote] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Stats data
  const stats = [
    { value: "500+", label: "Vehicles Imported", icon: Car },
    { value: "98%", label: "Client Satisfaction", icon: Star },
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "24/7", label: "Customer Support", icon: Clock },
  ];

  // Benefits data
  const benefits = [
    {
      icon: Shield,
      title: "Stress-Free Process",
      description: "We handle everything from bidding to delivery",
    },
    {
      icon: DollarSign,
      title: "Save 30-50%",
      description: "Compared to local Nigerian prices",
    },
    {
      icon: ClipboardCheck,
      title: "Verified Vehicles",
      description: "Comprehensive inspection reports",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "8-12 weeks from auction to delivery",
    },
    {
      icon: Globe,
      title: "USA Network",
      description: "Strong partnerships with dealers",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Personalized service for each client",
    },
  ];

  // Popular vehicles
  const popularVehicles = [
    {
      name: "Toyota Highlander",
      image: "/images/toyota-highlander.png",
      year: "2020-2023",
      price: "$18,000 - $25,000",
      savings: "Save 40%",
      popularity: 98,
      features: ["7-Seater", "4WD", "Reliable"],
    },
    {
      name: "Honda Accord",
      image: "/images/honda-accord.png",
      year: "2021-2023",
      price: "$15,000 - $22,000",
      savings: "Save 35%",
      popularity: 95,
      features: ["Fuel Efficient", "Luxury", "Reliable"],
    },
    {
      name: "Ford F-150",
      image: "/images/ford-f-150.png",
      year: "2020-2023",
      price: "$20,000 - $30,000",
      savings: "Save 45%",
      popularity: 92,
      features: ["Powerful", "Durable", "Workhorse"],
    },
    {
      name: "Lexus RX 350",
      image: "/images/lexus-rx-350.png",
      year: "2019-2022",
      price: "$22,000 - $32,000",
      savings: "Save 50%",
      popularity: 96,
      features: ["Luxury", "Comfort", "Premium"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Video/Image with Overlay */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <Image
            src="/images/import.png"
            alt="USA Vehicle Import"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute w-full inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>

        {/* Animated Flags */}
        <div className="absolute top-20 right-20 opacity-10">
          <div className="flex gap-4">
            <div className="w-32 h-20 bg-green-600 rounded relative overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="w-1/3 h-full bg-white"></div>
                <div className="w-1/3 h-full bg-green-600"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-red-600 text-white border-none mb-6 text-sm">
                <Globe className="w-4 h-4 mr-1" />
                USA to Nigeria Vehicle Imports
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Your Trusted Bridge to{" "}
                <span className="text-red-500">American Cars</span>
              </h1>

              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                Import quality vehicles from the United States to Nigeria. Save
                30-50% compared to local prices with our complete, stress-free
                service.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg inline-block text-center"
                  onClick={() => setShowQuickQuote(true)}
                >
                  Get Instant Quote
                </button>
                <Link
                  href="#how-it-works"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg inline-block text-center"
                >
                  How It Works
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300 flex items-center justify-center gap-1">
                        <Icon className="w-4 h-4" />
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Quote Modal */}
      {showQuickQuote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6 relative"
          >
            <button
              onClick={() => setShowQuickQuote(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Get Your Free Quote
            </h3>
            <p className="text-gray-500 mb-6">
              Tell us what you&quot;re looking for and we&quot;ll get back to
              you within 24 hours
            </p>

            <div className="space-y-4">
              <Input placeholder="Your Name" className="w-full" />
              <Input
                type="email"
                placeholder="Email Address"
                className="w-full"
              />
              <Input placeholder="Phone Number" className="w-full" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Vehicle Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="truck">Truck</SelectItem>
                  <SelectItem value="luxury">Luxury Car</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Budget Range (USD)" className="w-full" />
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Get Quote <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              We respect your privacy. No spam, just your quote.
            </p>
          </motion.div>
        </div>
      )}

      {/* Trust Badges Section */}
      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { icon: Shield, text: "Secure & Insured" },
              { icon: Clock, text: "Fast Shipping" },
              { icon: BadgeCheck, text: "Verified Vehicles" },
              { icon: Percent, text: "Best Prices" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <Icon className="w-5 h-5 text-red-600" />
                  <span className="text-gray-600 font-medium">{item.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Why Import with Errandboy USA?
            </h2>
            <p className="text-xl text-gray-600">
              We make USA vehicle imports simple, safe, and incredibly
              cost-effective
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Vehicles Section */}
      <section id="vehicles" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Most Imported Vehicles
            </h2>
            <p className="text-xl text-gray-600">
              Discover what Nigerians are importing from the USA
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularVehicles.map((vehicle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden pt-0">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white z-20">
                      {vehicle.savings}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-800">
                        {vehicle.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">
                          {vehicle.popularity}%
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{vehicle.year}</p>
                    <p className="text-lg font-bold text-red-600 mb-2">
                      {vehicle.price}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-gray-100"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/cta-bg.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="container bg-gradient-to-r p-20 rounded-2xl from-red-600 mb-16 to-red-700 mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Import Your Dream Vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied customers who&quot;ve saved thousands
              importing with us
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link
                href="/services/vehicle-import/form"
                className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg inline-block text-center"
                onClick={() => setShowQuickQuote(true)}
              >
                Get Free Quote
              </Link>
              <Link
                href="/services/vehicle-import/learn-more"
                className="border-red-400 border text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-500 transition-colors shadow-lg inline-block text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-red-600" />{" "}
                </div>
                <div>
                  <p className="font-semibold">+1 (956) 713-3491</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold">import@errandboynigeria.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <BsWhatsapp className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold">+1 (956) 713-3491</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ErrandboyUSAPage;
