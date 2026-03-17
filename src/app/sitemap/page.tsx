"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Info,
  Phone,
  FileText,
  Shield,
  HelpCircle,
  Package,
  Car,
  Plane,
  User,
  Zap,
  Globe,
  ChevronRight,
  Map,
} from "lucide-react";

// shadcn/ui imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaSitemap } from "react-icons/fa";

const SitemapPage = () => {
  const lastUpdated = "March 17, 2026";

  // Main site sections
  const mainPages = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      description: "Welcome to Errandboy",
    },
    {
      name: "About Us",
      href: "/about",
      icon: Info,
      description: "Learn about our story and mission",
    },
    {
      name: "Services",
      href: "/services",
      icon: Package,
      description: "All our services at a glance",
    },
    // {
    //   name: "Pricing",
    //   href: "/pricing",
    //   icon: DollarSign,
    //   description: "Transparent pricing for our services",
    // },
    {
      name: "FAQ",
      href: "/faq",
      icon: HelpCircle,
      description: "Frequently asked questions",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
      description: "Get in touch with our team",
    },
    {
      name: "Delegate an Errand",
      href: "/delegate",
      icon: Zap,
      description: "Request our services",
    },
  ];

  // Legal pages
  const legalPages = [
    {
      name: "Privacy Policy",
      href: "/privacy",
      icon: Shield,
      description: "How we protect your data",
    },
    {
      name: "Terms of Service",
      href: "/terms",
      icon: FileText,
      description: "Our terms and conditions",
    },
    {
      name: "Sitemap",
      href: "/sitemap",
      icon: Map,
      description: "Site navigation guide",
    },
  ];

  // All services
  const allServices = [
    {
      category: "Vehicle Services",
      icon: Car,
      pages: [
        {
          name: "Vehicle Import (USA)",
          href: "/services/vehicle-import",
          description: "Import vehicles from USA to Nigeria",
        },
        {
          name: "Vehicle Import Form",
          href: "/services/vehicle-import/form",
          description: "Start your vehicle import",
        },
        {
          name: "Learn More About Imports",
          href: "/services/vehicle-import/learn-more",
          description: "Detailed import information",
        },
        {
          name: "Automobile Services",
          href: "/services/automobile-services",
          description: "General automobile assistance",
        },
      ],
    },
    {
      category: "Travel & Errands",
      icon: Plane,
      pages: [
        {
          name: "Custom Travel Solutions",
          href: "/services/custom-travel-solutions",
          description: "Travel planning and assistance",
        },
        {
          name: "Errand Running Service",
          href: "/services/errand-running-service",
          description: "Daily errands and tasks",
        },
      ],
    },
    {
      category: "Personal & Property",
      icon: User,
      pages: [
        {
          name: "Personal Assistance",
          href: "/services/personal-assistance",
          description: "Personal assistant services",
        },
        {
          name: "Property Management",
          href: "/services/property-management",
          description: "Property oversight and management",
        },
      ],
    },
  ];

  // USA section
  const usaPages = [
    {
      name: "Errandboy USA Home",
      href: "/usa",
      icon: Globe,
      description: "USA vehicle import services",
    },
  ];

  // Stats
  const stats = [
    { label: "Total Pages", value: "20+" },
    { label: "Services", value: "8" },
    { label: "Legal Pages", value: "3" },
    { label: "Last Updated", value: lastUpdated },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaSitemap className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pt-serif text-gray-800">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            A complete guide to all pages on Errandboy
          </p>
          <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center shadow-none border-0 bg-red-50"
            >
              <CardContent className="p-4">
                <div className="text-lg font-bold text-red-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500/70">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="bg-red-100 p-2 rounded-lg">
                <Home className="w-5 h-5 text-red-600" />
              </div>
              Main Pages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <Link key={index} href={page.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <Icon className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {page.description}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {page.href}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Services Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="bg-red-100 p-2 rounded-lg">
                <Package className="w-5 h-5 text-red-600" />
              </div>
              All Services
            </h2>

            <div className="space-y-8">
              {allServices.map((category, idx) => {
                const CategoryIcon = category.icon;
                return (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
                      <CategoryIcon className="w-4 h-4 text-red-600" />
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 pl-4">
                      {category.pages.map((page, index) => (
                        <Link key={index} href={page.href}>
                          <Card className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-medium text-gray-800 mb-1">
                                    {page.name}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {page.description}
                                  </p>
                                  <p className="text-xs text-gray-400 mt-2">
                                    {page.href}
                                  </p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* USA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="bg-red-100 p-2 rounded-lg">
                <Globe className="w-5 h-5 text-red-600" />
              </div>
              Errandboy USA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {usaPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <Link key={index} href={page.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-gradient-to-br from-blue-50 to-white border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {page.description}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {page.href}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Legal Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <div className="bg-red-100 p-2 rounded-lg">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              Legal & Information
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {legalPages.map((page, index) => {
                const Icon = page.icon;
                return (
                  <Link key={index} href={page.href}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-gray-100 p-2 rounded-lg">
                            <Icon className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-1">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {page.description}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                              {page.href}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* Full URL List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-600" />
                  Complete URL List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  {[
                    "/",
                    "/about",
                    "/contact",
                    "/delegate",
                    "/faq",
                    // "/pricing",
                    "/privacy",
                    "/services",
                    "/services/automobile-services",
                    "/services/custom-travel-solutions",
                    "/services/errand-running-service",
                    "/services/personal-assistance",
                    "/services/property-management",
                    "/services/vehicle-import",
                    "/services/vehicle-import/form",
                    "/services/vehicle-import/learn-more",
                    "/terms",
                    "/usa",
                    "/sitemap",
                  ].map((url, index) => (
                    <Link
                      key={index}
                      href={url}
                      className="text-gray-600 hover:text-red-600 hover:underline py-1 flex items-center gap-1"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {url}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
