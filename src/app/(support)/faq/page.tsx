"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { faqs } from "@/lib";
import { motion } from "framer-motion";
import { ArrowRight, PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

export default function FaqPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black text-white">
        <img
          src="/images/faq-bg.jpg"
          alt="FAQ"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FAQs</h1>
          <p className="text-lg">
            All you need to know before placing an order.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 container mx-auto">
        <motion.div
          className="space-y-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}>
          <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
        </motion.div>

        <motion.div
          className="space-y-10 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          <Accordion
            type="single"
            collapsible
            className="w-full -space-y-px"
            defaultValue="3">
            {faqs.map((item) => (
              <AccordionItem
                value={item.id}
                key={item.id}
                className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative border px-4 py-1 outline-none first:rounded-t-md last:rounded-b-md last:border-b has-focus-visible:z-10 has-focus-visible:ring-[3px]">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-0 [&>svg]:-order-1 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                    {item.title}
                    <PlusIcon
                      size={16}
                      className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-muted-foreground ps-7 pb-2">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
    </main>
  );
}
