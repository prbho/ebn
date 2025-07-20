import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}>
        <img
          src="/images/bqig4chkumdrijqxub8y.jpg"
          alt="Moving company background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-30" />
      </motion.div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 item-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-black/80"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-pt-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              Let&apos;s help take the stress off your shoulders.
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-8 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}>
              Our professional team of movers and packers are at your beck and
              call.
            </motion.p>

            <Link href="/services" passHref>
              <motion.button
                className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors shadow-lg inline-block text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                whileTap={{ scale: 0.95 }}>
                LEARN MORE
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
