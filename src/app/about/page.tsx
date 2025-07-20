"use client";

import React from "react";
import { Shield, Target, Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "MURITALA MOHAMMED",
    title: "CEO & Co-Founder",
    image: "/images/mm.png",
    bio: "With experience in logistics and customer service, Muritala envisioned Errandboy Nigeria as the bridge between convenience and quality service solutions. His leadership drives the company's mission to simplify lives.",
  },
  {
    name: "FATIMOH MOHAMMED",
    title: "COO & Co-Founder",
    image: "/images/fati.png",
    bio: "Fatimoh's expertise in operations and her passion for community support ensure seamless service delivery. She champions the company's trust culture, reliability, and personalized care.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Confidentiality",
    color: "blue",
    desc: "Honesty and integrity build confidence and trust, and we continually strive to improve.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    color: "red",
    desc: "We listen to our clients' needs and act on them. We have bespoke plans to accommodate each client, providing a personalized service that works for them.",
  },
  {
    icon: Target,
    title: "Reliability",
    color: "green",
    desc: "We strongly believe in being open, honest, and transparent, and we keep our word.",
  },
];

const ErrandBoyAboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24 text-center">
        <motion.div
          className="container mx-auto px-4 "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Who is Errandboy Nigeria?
            </h1>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Errandboy Nigeria is your ultimate convenience partner, designed
                to ease everyday tasks in a fast-paced world. Whether you are a
                busy professional, a parent, a nursing mother, or a senior
                needing assistance, Errandboy Nigeria delivers reliable,
                efficient services tailored to your needs.
              </p>
              <p>
                From grocery shopping to administrative errands, our dedicated
                team ensures that every task we are assigned is carried out with
                care and professionally handled. By leveraging technology and a
                commitment to excellence, Errandboy Nigeria simplifies your
                life, saving you time and reducing stress.
              </p>
              <p>
                In a world where every minute counts, they stand as a trusted
                helping hand—making daily challenges effortless so you can focus
                on what truly matters.
              </p>
              <p className="font-semibold text-gray-800">
                Our mission is to offer a seamless experience that minimizes
                stress and maximizes efficiency and to become the trusted
                partner that helps restore balance in your life.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet the Founders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              Meet the Founders
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Our leadership team brings decades of experience...
            </p>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {founders.map((f, idx) => (
                <motion.div
                  key={idx}
                  className="group text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}>
                  <div className="relative mb-6">
                    <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition duration-300">
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>Co-Founder</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{f.name}</h3>
                  <p className="text-red-500 font-medium mb-3">{f.title}</p>
                  <p className="text-gray-600 leading-relaxed">{f.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              Our Culture
            </motion.h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Our values shape everything we do...
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map(({ icon: Icon, title, color, desc }, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}>
                  <div
                    className={`bg-${color}-100 group-hover:bg-${color}-200 transition p-4 w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-10 h-10 text-${color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="bg-red-500 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold max-w-xl mb-6 md:mb-0">
            We can be your great business partner and help you grow strongly.
          </h2>
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-100 transition">
            Get A Quote Now
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default ErrandBoyAboutPage;
