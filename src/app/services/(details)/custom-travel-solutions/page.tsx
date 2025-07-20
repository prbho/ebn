"use client";

import { typicalRequests } from "@/lib";
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
              Custom Travel Solutions
            </h2>
            <p>
              Whether you’re planning a short haul business trip, interested in
              studying abroad, or a family holiday, ErrandBoy Nigeria will
              gladly assist. Our exceptional experience, insider knowledge,
              discretion, and privacy have been recognized by clients.
            </p>
            <p>
              We offer unbeatable rates offered by other traditional travel
              agents. We offer access to exclusive benefits at the world’s top
              hotels and we are dedicated to handling every last detail to
              alleviate the frustration of spending hours on your travel
              arrangements.
            </p>
            <p>
              We offer international school programme services (ISPS) for
              individuals who are interested in studying abroad at undergraduate
              and post-graduate levels. We have affiliations with schools
              abroad, particularly in the United States and Canada. We guide you
              through the process of admission, fast-track visa processing with
              no extra charge, and ensure a smooth transition abroad.
            </p>
          </div>

          {/* Typical Requests */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Typical Requests</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Our most popular travel services tailored for every kind of
              traveler.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {typicalRequests.map((item, index) => (
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
              Need help planning your next trip?
            </h2>
            <p className="mb-6 text-white/90 max-w-xl mx-auto">
              From travel documents to dream destinations, our expert travel
              team handles everything so you can travel stress-free.
            </p>
            <button className="bg-white text-red-500 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold">
              Book Travel Consultation
            </button>
          </section>
        </motion.div>
      </section>
    </main>
  );
}
