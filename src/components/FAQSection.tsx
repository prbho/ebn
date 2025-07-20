import React, { useState } from "react";
import {
  ChevronDown,
  Clock3,
  CalendarDays,
  CreditCard,
  HelpCircle,
  PlusIcon,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem } from "./ui/accordion";
import { Accordion as AccordionPrimitive } from "radix-ui";

const items = [
  {
    id: "1",
    title: "What are your hours?",
    content:
      "Our office hours are Monday – Friday 8am – 5pm. But we can accommodate other hour and weekend services for an additional fee.",
  },
  {
    id: "2",
    title: "Do I need to schedule an appointment in advance?",
    content:
      "While we recommend scheduling in advance for better service, we also accept same-day requests based on availability.",
  },
  {
    id: "3",
    title: "Can I make payment online?",
    content:
      "Yes, we accept various online payment methods including credit cards, debit cards, and digital wallets for your convenience.",
  },
  {
    id: "4",
    title: "What if I need to cancel?",
    content:
      "No worries. Just contact us at least 12 hours before your appointment and we’ll reschedule or cancel at no extra charge.",
  },
];

const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl mb-6 font-pt-serif">
          Frequently Asked Questions
        </h2>

        {/* FAQ list */}
        <div className="space-y-4">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="3">
            {items.map((item) => (
              <AccordionItem value={item.id} key={item.id} className="py-2">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center gap-4 rounded-md py-2 text-left text-sm text-[15px] leading-6 font-semibold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg]:-order-1 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
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
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
