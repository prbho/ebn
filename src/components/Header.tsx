"use client";

import React, { useState } from "react";
import {
  Package,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  Search,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { services, support } from "@/lib";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isSupportDropdownOpen, setIsSupportDropdownOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="bg-red-500 text-white text-sm py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex flex-wrap gap-4 text-sm items-center">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Mon - Fri / 8 am - 5 pm
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                info@errandboynigeria.com
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                0909 851 2546, 0812 998 2106
              </span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <span>Follow us:</span>
              <a
                href="https://facebook.com/errandboynigeria"
                className="hover:text-red-200">
                f
              </a>
              <a
                href="https://twitter.com/errandboynaija"
                className="hover:text-red-200">
                t
              </a>
              <a
                href="https://www.instagram.com/errandboyng/"
                className="hover:text-red-200">
                in
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                alt={"Erandboy"}
                src={"/logo.png"}
                className=""
                width={150}
                height={50}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/about"
                className="text-gray-600 hover:text-red-500 transition-colors">
                About Us
              </Link>

              {/* Dropdown Menu */}
              <div
                className="relative group"
                onMouseEnter={() => setIsServiceDropdownOpen(true)}
                onMouseLeave={() => setIsServiceDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isServiceDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bg-white shadow-lg border rounded-lg py-2 px-4 top-10 z-50 space-y-1">
                      {services.map((service) => (
                        <li key={service.name}>
                          <Link
                            href={service.href}
                            className="block px-2 py-1 text-gray-700 hover:text-red-500">
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/pricing"
                className="text-gray-600 hover:text-red-500 transition-colors">
                Pricing
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setIsSupportDropdownOpen(true)}
                onMouseLeave={() => setIsSupportDropdownOpen(false)}>
                <button className="flex items-center gap-1 text-gray-600 hover:text-red-500 transition-colors">
                  Support <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isSupportDropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute bg-white shadow-lg border rounded-lg py-2 px-4 top-10 z-50 space-y-1">
                      {support.map((support) => (
                        <li key={support.name}>
                          <Link
                            href={support.href}
                            className="block px-2 py-1 text-gray-700 hover:text-red-500">
                            {support.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t shadow-md overflow-hidden">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link
                href="/about"
                className="block text-gray-600 hover:text-red-500">
                About Us
              </Link>

              {/* Mobile Dropdown */}
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-red-500">
                  Services
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="mt-2 pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-gray-500 hover:text-red-500">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </details>

              <Link
                href="/shop"
                className="block text-gray-600 hover:text-red-500">
                Shop
              </Link>
              <Link
                href="/support"
                className="block text-gray-600 hover:text-red-500">
                Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
