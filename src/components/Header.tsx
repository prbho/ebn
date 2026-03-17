/* eslint-disable */

"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Clock,
  Info,
  HelpCircle,
  FileText,
  Truck,
  Package,
  Home,
  Car,
  ShoppingBag,
  Zap,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { services } from "@/lib";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

const support = [
  {
    name: "FAQ",
    href: "/support/faq",
    icon: HelpCircle,
    description: "Find answers to common questions",
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: MessageCircle,
    description: "Get in touch with our team",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Check if we're on USA-related pages
  const isUSASection =
    pathname?.includes("/usa") ||
    pathname?.includes("/services/vehicle-import") ||
    pathname?.includes("/vehicle-import");

  // Determine CTA based on section - ONLY THIS CHANGES
  const ctaText = isUSASection ? "Start Your Import" : "Delegate an Errand";
  const ctaHref = isUSASection ? "/services/vehicle-import/form" : "/delegate";

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 transition-all duration-300
          ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg py-0"
              : "bg-white shadow-sm py-0"
          }
        `}
      >
        {/* Top Bar - Hidden on mobile, visible on desktop */}
        <div
          className={`
          bg-gradient-to-r from-red-600 to-red-500 text-white text-sm
          transition-all duration-300 overflow-hidden
          ${isScrolled ? "h-0 py-0" : "h-auto py-2"}
          hidden md:block
        `}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex flex-wrap gap-6 items-center">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Mon - Fri / 8am - 5pm
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@errandboynigeria.com"
                  className="hover:underline"
                >
                  info@errandboynigeria.com
                </a>
              </span>
              {/* <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+2349098512546" className="hover:underline">
                  0909 851 2546
                </a>
              </span> */}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Follow us:</span>
              <a
                href="https://facebook.com/errandboynigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-200 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/errandboynaija"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-200 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/errandboyng/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-200 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagramSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="py-3 md:py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center relative z-10">
                <Image
                  alt="Errandboy Nigeria"
                  src="/logo.png"
                  width={isScrolled ? 130 : 150}
                  height={isScrolled ? 43 : 50}
                  className="transition-all duration-300"
                />
              </Link>

              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                <NavLink href="/about" icon={Info}>
                  About Us
                </NavLink>

                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("services")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`
                      flex items-center gap-1 px-3 py-2 rounded-lg font-medium
                      transition-all duration-200
                      ${
                        activeDropdown === "services" ||
                        pathname.includes("/services")
                          ? "text-red-600 bg-red-50"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    <Package className="w-4 h-4 mr-1" />
                    Services
                    <ChevronDown
                      className={`
                      w-4 h-4 transition-transform duration-200
                      ${activeDropdown === "services" ? "rotate-180" : ""}
                    `}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {services.map((service) => {
                            // Assign icons based on service name
                            let Icon = Package;
                            if (service.name.includes("Delivery")) Icon = Truck;
                            else if (service.name.includes("Moving"))
                              Icon = Home;
                            else if (
                              service.name.includes("Vehicle") ||
                              service.name.includes("Import")
                            )
                              Icon = Car;
                            else if (service.name.includes("Shop"))
                              Icon = ShoppingBag;
                            else if (service.name.includes("Bill"))
                              Icon = FileText;
                            else if (service.name.includes("Errand"))
                              Icon = Zap;

                            return (
                              <Link
                                key={service.name}
                                href={service.href}
                                className={`
                                  block px-4 py-2 hover:bg-gray-50 transition-colors
                                  ${
                                    service.highlight
                                      ? "bg-red-50 hover:bg-red-100"
                                      : ""
                                  }
                                `}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`
                                    p-1.5 rounded-lg
                                    ${
                                      service.highlight
                                        ? "bg-red-100"
                                        : "bg-gray-100"
                                    }
                                  `}
                                  >
                                    <Icon
                                      className={`
                                      w-4 h-4
                                      ${
                                        service.highlight
                                          ? "text-red-600"
                                          : "text-gray-600"
                                      }
                                    `}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <p
                                      className={`
                                      font-medium
                                      ${
                                        service.highlight
                                          ? "text-red-600"
                                          : "text-gray-800"
                                      }
                                    `}
                                    >
                                      {service.name}
                                    </p>
                                    {service.description && (
                                      <p className="text-sm text-gray-500">
                                        {service.description}
                                      </p>
                                    )}
                                  </div>
                                  {service.highlight && (
                                    <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full">
                                      New
                                    </span>
                                  )}
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Support Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("support")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`
                      flex items-center gap-1 px-3 py-2 rounded-lg font-medium
                      transition-all duration-200
                      ${
                        activeDropdown === "support" ||
                        pathname.includes("/support")
                          ? "text-red-600 bg-red-50"
                          : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    <HelpCircle className="w-4 h-4 mr-1" />
                    Support
                    <ChevronDown
                      className={`
                      w-4 h-4 transition-transform duration-200
                      ${activeDropdown === "support" ? "rotate-180" : ""}
                    `}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "support" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {support.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-1.5 bg-gray-100 rounded-lg group-hover:bg-red-100 transition-colors">
                                  <Icon className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-700 group-hover:text-red-600 transition-colors">
                                    {item.name}
                                  </p>
                                  {item.description && (
                                    <p className="text-xs text-gray-500">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA Button - ONLY THIS CHANGES BASED ON PAGE */}
                <Link
                  href={ctaHref}
                  className="ml-4 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  {ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu - Slide from right */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Drawer Header */}
                <div className="flex justify-between items-center mb-6">
                  <Image
                    alt="Errandboy"
                    src="/logo.png"
                    width={120}
                    height={40}
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <a
                    href="tel:+2349098512546"
                    className="flex items-center gap-3 text-gray-600 hover:text-red-600"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">0909 851 2546</span>
                  </a>
                  <a
                    href="mailto:info@errandboynigeria.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-red-600"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">info@errandboynigeria.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Mon - Fri / 8am - 5pm</span>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="space-y-4">
                  <MobileNavLink
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                    icon={Info}
                  >
                    About Us
                  </MobileNavLink>

                  {/* Mobile Services Section */}
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                      <Package className="w-4 h-4 text-red-600" />
                      Services
                    </div>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                      {services.map((service) => {
                        let Icon = Package;
                        if (service.name.includes("Delivery")) Icon = Truck;
                        else if (service.name.includes("Moving")) Icon = Home;
                        else if (
                          service.name.includes("Vehicle") ||
                          service.name.includes("Import")
                        )
                          Icon = Car;
                        else if (service.name.includes("Shop"))
                          Icon = ShoppingBag;
                        else if (service.name.includes("Bill")) Icon = FileText;
                        else if (service.name.includes("Errand")) Icon = Zap;

                        return (
                          <MobileNavLink
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsMenuOpen(false)}
                            icon={Icon}
                            className={
                              service.highlight
                                ? "text-red-600 font-medium"
                                : ""
                            }
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>{service.name}</span>
                              {service.highlight && (
                                <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                                  New
                                </span>
                              )}
                            </div>
                          </MobileNavLink>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mobile Support Section */}
                  <div className="space-y-2">
                    <div className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-red-600" />
                      Support
                    </div>
                    <div className="pl-4 space-y-2 border-l-2 border-gray-100">
                      {support.map((item) => (
                        <MobileNavLink
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          icon={item.icon}
                        >
                          {item.name}
                        </MobileNavLink>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button - ALSO CHANGES IN MOBILE MENU */}
                  <Link
                    href={ctaHref}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-gradient-to-r from-red-600 to-red-500 text-white text-center px-4 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-200 mt-6 flex items-center justify-center gap-2"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-gray-200">
                    <a
                      href="https://facebook.com/errandboynigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com/errandboynaija"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/errandboyng/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper Components
const NavLink = ({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: any;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-1 px-3 py-2 rounded-lg font-medium transition-all duration-200
        ${
          isActive
            ? "text-red-600 bg-red-50"
            : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
        }
      `}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  href,
  children,
  onClick,
  icon: Icon,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  icon?: any;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors py-1 ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </Link>
  );
};

export default Header;
