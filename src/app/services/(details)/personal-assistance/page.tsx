"use client";

import React from "react";
import {
  ClipboardList,
  Home,
  Plane,
  ShoppingCart,
  PartyPopper,
  Search,
  UserCheck,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { PAservices } from "@/lib";

export default function PersonalAssistancePage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Services */}
      <section className="">
        <div className="space-y-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Typical PA Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We match you with a dedicated PA who manages complex lifestyles,
              businesses, and schedules with professionalism and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PAservices.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="space-y-10 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Simple, professional, and seamless from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: UserCheck,
                title: "We Assign Your Assistant",
                desc: "You get matched with a dedicated PA based on your needs. They’ll work remotely or on-site when needed.",
              },
              {
                icon: ClipboardList,
                title: "Stay Connected During Hours",
                desc: "Your assistant works within contracted hours. Overtime is tracked and charged based on your plan.",
              },
              {
                icon: FileText,
                title: "Transparent Monthly Billing",
                desc: "Fees are paid monthly via direct debit. No hidden charges or commitment fees.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-xl shadow bg-gray-50 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}>
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <div className="space-y-10 max-w-5xl mx-auto pb-20">
        <section className="bg-red-500 text-white mt-24 rounded-xl py-12 px-6 text-center">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent Pricing, No Hidden Fees
            </h2>
            <p className="text-lg mb-6">
              We offer flexible pricing structures with no contract, membership,
              or joining fees.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-100 transition-colors shadow">
              Call Now for a Quote
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
