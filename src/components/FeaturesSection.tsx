import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

const FeaturesSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: "/images/64-1.png",
      title: "Fast Service",
      description:
        "We respond to your request within 24 hours ensuring great customer experience through our packaged delivery service.",
    },
    {
      icon: "/images/64-2.png",
      title: "Safe Delivery",
      description:
        "We offer a comprehensive insurance coverage policy on all items regardless of their monetary value.",
    },
    {
      icon: "/images/64-3.png",
      title: "24/7 Support",
      description:
        "Our customer service team is available 24/7 to assist you with any questions or concerns.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 relative z-10 item-center">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 font-pt-serif">
            Our Key Features
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full" />
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={`feature-${index}`}
              className="text-center bg-white p-8 rounded-xl shadow transition-shadow border-t-4 border-transparent hover:border-red-500 ring ring-red-500/10"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
              }}>
              <div className="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-inner">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 ">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {feature.description}
              </p>
              <Link href="/services/errand-running-service">
                <motion.button
                  className="text-red-500 font-semibold hover:text-red-600 transition-colors flex items-center justify-center mx-auto"
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Learn more about ${feature.title}`}>
                  LEARN MORE <span className="ml-1">→</span>
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
