"use client";

import { autoServices } from "@/lib";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="bg-white text-gray-800">
      {/* Content */}
      <section className="py-20 px-4 container mx-auto">
        <motion.div
          className="space-y-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Vehicle Sales, Maintenance and Repairs
            </h2>
            <p>
              Errandboy Nigeria offers an inspection referral service including
              car inspections, suggestions, and appraisals. We act on behalf of
              clients to get an independent analysis of car condition, safety,
              and quality.
            </p>
            <p>
              Our trusted inspectors are unbiased, not affiliated with any
              seller. We prioritize your interests only. With a 4-page
              inspection report and a detailed photo checklist, you gain
              confidence before making a purchase.
            </p>
            <p>
              The report includes vehicle history, visible issues (e.g., pitted
              chrome, bubbles in paint, rust in trunks), and the VIN. You’ll
              receive a comprehensive view before any commitment.
            </p>
          </div>

          {/* Typical Services */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Typical Auto Services</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Our most requested automobile services delivered with
              professionalism and trust.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {autoServices.map((item, index) => (
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

          {/* Call to Action */}
          <section className="bg-red-500 text-white mt-24 rounded-xl py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need reliable auto inspection or repairs?
            </h2>
            <p className="mb-6 text-white/90 max-w-xl mx-auto">
              Let ErrandBoy Nigeria inspect, assess, or help you secure your
              next vehicle with confidence.
            </p>
            <button className="bg-white text-red-500 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold">
              Request Auto Help
            </button>
          </section>
        </motion.div>
      </section>
    </main>
  );
}
