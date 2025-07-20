"use client";
import React, { useState, useId } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Timer, Smile } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";

const DelegateFormSplitSection = () => {
  const id = useId();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Form submitted! We will get back to you within 24 hours.");
      setLoading(false);
    }, 1500);
  };

  const inputStyle =
    "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Details / Motivation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 font-pt-serif">
            Why Delegate with Us?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our dedicated team handles your errands professionally so you can
            focus on what truly matters. We respond within 24 hours.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-red-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  100% Task Completion Guarantee
                </h4>
                <p className="text-gray-500 text-sm">
                  Every request is tracked and completed with care.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Timer className="text-red-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Same-Day Response
                </h4>
                <p className="text-gray-500 text-sm">
                  Get feedback within 24 hours or less.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Smile className="text-red-500 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800">
                  Friendly Support Team
                </h4>
                <p className="text-gray-500 text-sm">
                  Talk to humans, not robots. We&apos;re here for you.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-xl shadow-md p-8 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-gray-800 mb-2 font-pt-serif">
            Delegate an Errand
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Fill in your details. We&apos;ll respond within 24 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="group relative">
              <label
                htmlFor={id}
                className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
                <span className="bg-gray-50 inline-flex px-2">First Name</span>
              </label>
              <Input id={id} type="firstName" placeholder=" " />
            </div>
            <div className="group relative">
              <label
                htmlFor={id}
                className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
                <span className="bg-gray-50 inline-flex px-2">Last Name</span>
              </label>
              <Input id={id} type="lastName" placeholder=" " />
            </div>
          </div>

          <div className="group relative">
            <label
              htmlFor={id}
              className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
              <span className="bg-gray-50 inline-flex px-2">Phone Number</span>
            </label>
            <Input id={id} type="tel" placeholder=" " />
          </div>
          <div className="group relative">
            <label
              htmlFor={id}
              className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
              <span className="bg-gray-50 inline-flex px-2">Email</span>
            </label>
            <Input id={id} type="email" placeholder=" " />
          </div>

          <div className="group relative">
            <label
              htmlFor={id}
              className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium">
              <span className="bg-gray-50 inline-flex px-2">Subject</span>
            </label>
            <Input id={id} type="subject" placeholder=" " />
          </div>

          <div className="group relative">
            <label
              htmlFor={id}
              className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive absolute top-0 block translate-y-2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium">
              <span className="bg-gray-50 inline-flex px-2">
                Errand Details
              </span>
            </label>
            <Textarea id={id} placeholder=" " />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}>
            {loading ? "Submitting..." : "SUBMIT NOW"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default DelegateFormSplitSection;
