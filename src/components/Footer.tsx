"use client";

import { services } from "@/lib";
import { Phone, Mail, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="ErrandBoy Nigeria"
                width={150}
                height={50}
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              We are a Lagos-based logistics company that specializes in
              errands, personal assistance, travel, and more.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition">
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition">
                <FaLinkedinIn className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5" />
                <span>0909 851 2546, 0812 998 2106</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>info@errandboynigeria.com</span>
              </li>
              <li className="flex gap-2">
                <Pin className="w-4 h-4 mt-0.5" />
                <span>2, Ogunmade Street, Ikeja, Lagos</span>
              </li>
            </ul>
          </div>

          {/* Services with Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-white transition">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400 flex">
          <p>
            &copy; {new Date().getFullYear()} ErrandBoy Nigeria. All Rights
            Reserved.
          </p>
          <Link
            className="ml-auto"
            href="https://client.cofellow.com"
            target="_blank"
            rel="noopener noreferrer">
            <p className="underline">Designed by Cofellow Nigeria</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
