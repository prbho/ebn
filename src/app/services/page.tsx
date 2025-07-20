"use client";

import { serviceData } from "@/lib";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative h-[20vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">
            Professional solutions, personalized for you.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 px-4 mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Link href={`/${service.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-red-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
