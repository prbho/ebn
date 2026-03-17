"use client";

import { services } from "@/lib";
import { Phone, Mail, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Separator } from "./ui/separator";

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
                href="https://www.facebook.com/errandboynigeria/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebookF className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/ErrandBoyNaija"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/errandboyng/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <div className="w-4 h-4 mt-0.5">
                  <Phone className="w-4 h-4 mt-0.5" />
                </div>
                <div className="space-y-3">
                  <span className="mb-2 block">
                    Nigeria: +234 (0) 812 998-2106
                  </span>
                  <span>USA: +1 (956) 713-3491</span>
                </div>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5" />
                <span>info@errandboynigeria.com</span>
              </li>
              <li className="flex gap-2">
                <div className="w-4 h-4 mt-0.5">
                  <Pin className="w-4 h-4 mt-0.5" />
                </div>
                <div className="space-y-3">
                  <span className="mb-2 block">
                    2 Ogunmade Street, Ikeja 100001, Lagos, Nigeria
                  </span>
                  <span>1609 W. McIntyre StEdinburg, TX 78541, USA</span>
                </div>
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
                    className="hover:text-white transition"
                  >
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
                  Errandboy Nigeria
                </Link>
              </li>
              <li>
                <Link href="/usa" className="hover:text-white transition">
                  Errandboy USA
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vehicle-import"
                  className="hover:text-white transition"
                >
                  USA to Nigeria Importation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-gray-400/80 flex">
          <p>
            &copy; {new Date().getFullYear()} ErrandBoy Nigeria. All Rights
            Reserved.
          </p>
          <div className="flex ml-auto space-x-2">
            <Link href="/privacy" className=" hover:text-white">
              Privacy Policy
            </Link>
            <Separator orientation="vertical" className="bg-gray-400/50" />
            <Link href="/terms" className=" hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
