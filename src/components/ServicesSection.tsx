import React from "react";
import { Package, Truck, MapPin, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { servicesCard } from "@/lib";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 pt-24 sm:pb-32 lg:pb-0">
      <div className="container mx-auto px-4 relative z-10 item-center">
        <div className="mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:-top-30 relative">
            {servicesCard.map((service, index) => (
              <motion.div
                key={index}
                className="relative h-72 group perspective-[1000px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}>
                {/* Flip Card Container */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md [backface-visibility:hidden]">
                    <div className="ring-1 ring-white bg-opacity-20 backdrop-blur-md rounded-full p-3 w-14 h-14 mb-4 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-center">
                      {service.title}
                    </h3>
                    <p className="text-sm text-red-100 mt-2 text-center">
                      {service.description}
                    </p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl p-6 flex flex-col justify-between items-center shadow-md [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div>
                      <h3 className="text-lg font-semibold text-center mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-blue-100 text-center">
                        {service.details}
                      </p>
                    </div>

                    <Link href={service.href}>
                      <motion.button
                        className="mt-6 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-4 py-2 rounded-lg font-semibold transition-colors inline-block text-center"
                        whileTap={{ scale: 0.95 }}>
                        Learn More
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
