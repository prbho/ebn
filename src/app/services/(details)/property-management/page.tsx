"use client";

import { propertyServices, typicalRequests } from "@/lib";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white text-gray-800">
      {/* Content */}
      <section className="py-20 px-4 container mx-auto">
        <motion.div
          className="space-y-10 mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Comprehensive Property Management
            </h2>
            <p>
              ErrandBoy Nigeria has acquired vast management experience over the
              years. We make searching for that dream house or land simple and
              stress-free, whether you&apos;re leasing, letting, or buying.
            </p>
            <p>
              Our services range from acquisition and inspections to ongoing
              maintenance, staff recruitment, and even overseeing renovations.
            </p>
          </div>

          {/* Services List */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Our Property Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propertyServices.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition-shadow flex gap-4 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>
                  <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-800 font-medium">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <section className="bg-red-500 text-white mt-24 rounded-xl py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let’s handle your property needs
            </h2>
            <p className="mb-6 text-white/90 max-w-xl mx-auto">
              From acquisition to maintenance and staffing, we&apos;ve got your
              property covered. Contact us to discuss your unique needs.
            </p>
            <button className="bg-white text-red-500 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold">
              Request Property Help
            </button>
          </section>
        </motion.div>
      </section>
    </main>
  );
}
