"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, Gavel, ClipboardCheck, FileText, Ship } from "lucide-react";
import Link from "next/link";

const CarImportSection = () => {
  const services = [
    {
      icon: Car,
      title: "Vehicle Sourcing",
      description: "From auctions and dealerships in the United States",
    },
    {
      icon: Gavel,
      title: "Auction Bidding",
      description: "Expert assistance with USA auction bidding",
    },
    {
      icon: ClipboardCheck,
      title: "Inspection & Verification",
      description: "Thorough vehicle inspection and verification",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete export coordination and paperwork",
    },
    {
      icon: Ship,
      title: "Shipping",
      description: "Secure shipping of vehicles to Nigeria",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-pt-serif">
            USA Vehicle Import Services
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
            Errandboy USA helps customers in Nigeria and beyond access vehicles
            from the United States through a streamlined process.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-red-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-red-500 " />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/usa-vehicle-import" passHref>
            <motion.button
              className="bg-yellow-400 text-gray-800 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors shadow-lg inline-block"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              Learn More About Vehicle Import
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CarImportSection;
