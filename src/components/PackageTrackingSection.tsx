import React, { useState } from "react";
import { PackageSearch } from "lucide-react";
import { motion } from "framer-motion";

const PackageTrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleTrack = () => {
    if (!trackingNumber.trim()) {
      alert("Please enter your tracking ID.");
      return;
    }
    alert(`Tracking: ${trackingNumber}`);
    // You can integrate API call here
  };

  return (
    <section className="py-24 bg-yellow-400 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <img
              src="/images/parcel.jpg"
              alt="Package tracking"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>

          {/* RIGHT: Text + Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <div className="bg-white p-3 rounded-full inline-block mb-4 shadow-md">
              <PackageSearch className="w-8 h-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-pt-serif">
              Quick Tracking Service
            </h2>
            <p className="text-gray-800 mb-4">
              Track the progress of your delivery or assigned task.
            </p>
            <p className="text-gray-700 mb-8 text-sm leading-relaxed">
              You can find your Tracking ID in your client dashboard or receipt.
              It&apos;s often labeled as a reference number or barcode.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="TRACKING ID"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 bg-white"
              />
              <button
                onClick={handleTrack}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all">
                TRACK NOW
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackageTrackingSection;
