import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Workflow, TrendingUp, ShieldCheck } from "lucide-react";

const WhySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "We are passionate about customers",
      icon: <Lightbulb className="w-5 h-5 text-yellow-400" />,
      content: {
        heading: "Customer Passion",
        text: "Our clients are at the centre of our universe. We pay attention to their needs and are more than willing to go the extra mile to accomplish each delivery and more. We believe it's not just about the money, but about the relationship we build with our clients.",
      },
    },
    {
      title: "We ensure an adequate and organized workflow",
      icon: <Workflow className="w-5 h-5 text-blue-400" />,
      content: {
        heading: "Efficient Workflow",
        text: "Our processes are designed for maximum efficiency. From initial contact to final delivery, every step is optimized to ensure smooth operations and timely service execution.",
      },
    },
    {
      title: "We are performance driven",
      icon: <TrendingUp className="w-5 h-5 text-green-400" />,
      content: {
        heading: "Performance Excellence",
        text: "We set measurable goals and consistently track our performance. Our team is committed to delivering results that exceed expectations through continuous improvement.",
      },
    },
    {
      title: "We conduct service with integrity",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      content: {
        heading: "Ethical Operations",
        text: "Honesty and transparency guide every aspect of our business. We maintain the highest ethical standards in all our interactions and service deliveries.",
      },
    },
  ];

  return (
    <section className="pb-20 sm:pt-10 lg:pt-0 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 item-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center ">
          <h3 className="text-gray-500 text-sm uppercase mb-2">
            Why Choose Us
          </h3>
          <h2 className="text-3xl font-bold text-gray-800 font-pt-serif">
            What Makes Us Different
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Tab Titles */}
          <motion.div
            className="bg-gray-900 rounded-xl shadow-xl p-6 space-y-4"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}>
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                    : "hover:bg-gray-700 text-gray-300"
                }`}>
                <div className="flex items-center gap-3">
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.title}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <motion.div
            className="md:col-span-2 relative bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl shadow-xl p-10 overflow-hidden"
            key={activeTab} // ensures remounting and re-animate
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className="text-yellow-400 text-sm font-semibold mb-4 block">
              OUR DIFFERENTIATOR
            </span>
            <h2 className="text-3xl font-bold mb-4 font-pt-serif">
              {tabs[activeTab].content.heading}
            </h2>
            <p className="text-blue-100 leading-relaxed">
              {tabs[activeTab].content.text}
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 p-4 bg-red-600 bg-opacity-30 rounded-lg backdrop-blur-sm border border-red-400">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center mr-4">
                  {activeTab + 1}
                </div>
                <p className="text-sm text-blue-100">
                  This is one of our core values that drives our success.
                </p>
              </div>
            </motion.div>

            {/* Floating Animated Orb */}
            <motion.div
              className="absolute top-[-60px] right-[-60px] w-48 h-48 bg-yellow-400 opacity-10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
