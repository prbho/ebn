"use client";

import React, { useState } from "react";
import {
  Package,
  Truck,
  Clock,
  Shield,
  MapPin,
  Phone,
  ChevronDown,
  Star,
} from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import DelegateFormSection from "@/components/DelegateFormSection";
import PackageTrackingSection from "@/components/PackageTrackingSection";
import FAQSection from "@/components/FAQSection";

const ErrandBoyWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhySection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Contact Form */}
      <DelegateFormSection />

      {/* Package Tracking */}
      <PackageTrackingSection />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default ErrandBoyWebsite;
