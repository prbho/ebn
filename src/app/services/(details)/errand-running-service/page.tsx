"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { errands, errandSteps } from "@/lib";
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
          <Tabs defaultValue="tab-1" className="w-full">
            <TabsList className="flex gap-2 flex-wrap justify-center mb-6 bg-transparent">
              <TabsTrigger
                value="tab-1"
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-full px-4 py-2 border border-gray-200">
                Errand Running Service
              </TabsTrigger>
              <TabsTrigger
                value="tab-2"
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white rounded-full px-4 py-2 border border-gray-200">
                Errand Service for Businesses
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tab-1">
              <p className="mb-4">
                Life’s hectic schedule often makes it hard to complete personal
                tasks which is why ErrandBoy Nigeria created a reliable and
                professional Errand Running Service. Whether it’s picking up dry
                cleaning, delivering packages, or grocery shopping, our expert
                team is here to assist.
              </p>
              <p className="mb-4">
                Fast, efficient and reliable—ErrandBoy Nigeria offers the most
                experienced errand services across Lagos and surrounding areas.
              </p>

              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-6">
                  Popular Errand Services for Individuals
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {errands.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white flex space-y-3 items-start gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}>
                      <div className="text-red-500">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <p className="text-gray-700 font-medium">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tab-2">
              <p className="mb-4">
                Businesses face tasks daily, and the volume can become
                overwhelming. ErrandBoy Nigeria supports businesses by
                outsourcing errands—allowing them to focus on their core
                strengths.
              </p>
              <p className="mb-4">
                Our reliable team handles a wide range of tasks with
                professionalism so your team can focus on what matters most.
              </p>
            </TabsContent>
          </Tabs>

          {/* How It Works */}
          <div>
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Our process is designed to be quick, simple, and stress-free.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {errandSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow text-center hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}>
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <section className="bg-red-500 text-white mt-24 rounded-xl py-12 px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to delegate your errands?
            </h2>
            <p className="mb-6 text-white/90 max-w-xl mx-auto">
              Let ErrandBoy Nigeria handle the stress. Our professional errand
              team is just a request away.
            </p>
            <button className="bg-white text-red-500 hover:bg-gray-100 transition px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </section>
        </motion.div>
      </section>
    </main>
  );
}
