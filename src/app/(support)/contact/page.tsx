"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useId } from "react";

export default function ContactPage() {
  const id = useId();
  return (
    <main className="bg-white text-gray-800">
      {/* Contact Info */}
      <section className="py-20 px-4 container mx-auto max-w-5xl flex flex-col gap-12">
        {/* Left Column - Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="sm:w-1/2">
            Need to ask a question or want to work with us? Contact our team
            through any of the methods below or send a message through the
            contact form.
          </p>

          <div className="grid sm:grid-cols-3 mt-20">
            <div className="grid sm:grid-cols-8 gap-4">
              <MapPin className="text-red-500 mt-1" />
              <div className="space-y-3 sm:col-span-7">
                <h3 className="text-xl font-bold">Location</h3>
                <p>2, Ogunmade Street, Ikeja, Lagos, Nigeria</p>
                <p>
                  Labak Estate, Cornerstone Close A, House A3 New Oko Oba Road,
                  Agege, Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-8 gap-4">
              <Phone className="text-red-500 mt-1" />
              <div className="space-y-3 sm:col-span-7">
                <h3 className="text-xl font-bold">Phone</h3>
                <p>We’re here to help you answer any question you might have</p>
                <p>+234 812 345 6789</p>
              </div>
            </div>
            <div className="grid sm:grid-cols-8 gap-4">
              <Mail className="text-red-500" />
              <div className="space-y-3 sm:col-span-7">
                <h3 className="text-xl font-bold">Email</h3>
                <p>We look forward to hearing from you. Drop us a line.</p>
                <p>support@errandboynigeria.ng</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/*Form */}
      <div className="bg-gray-100">
        <section className="py-20 px-4 container mx-auto flex flex-col gap-12">
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 w-1/2 mx-auto">
            <h3 className="text-xl font-bold">Contact Form</h3>
            <div className="group relative">
              <label
                htmlFor={id}
                className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium ">
                <span className="bg-gray-100 inline-flex px-2">Full Name</span>
              </label>
              <Input
                id={id}
                type="FirstName"
                placeholder=" "
                className="ring-1 ring-red-500/10"
              />
            </div>

            <div className="group relative">
              <label
                htmlFor={id}
                className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium ">
                <span className="bg-gray-100 inline-flex px-2">
                  Phone Number
                </span>
              </label>
              <Input
                id={id}
                type="tel"
                placeholder=" "
                className="ring-1 ring-red-500/10"
              />
            </div>

            <div className="group relative">
              <label
                htmlFor={id}
                className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium ">
                <span className="bg-gray-100 inline-flex px-2">Email</span>
              </label>
              <Input
                id={id}
                type="email"
                placeholder=" "
                className="ring-1 ring-red-500/10"
              />
            </div>

            <div className="group relative">
              <label
                htmlFor={id}
                className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium ">
                <span className="bg-gray-100 inline-flex px-2">Subject</span>
              </label>
              <Input
                id={id}
                type="text"
                placeholder=" "
                className="ring-1 ring-red-500/10"
              />
            </div>
            <div className="group relative">
              <label
                htmlFor={id}
                className="origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground has-aria-invalid:border-destructive/60 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive absolute top-0 block translate-y-2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium">
                <span className="bg-gray-100 inline-flex px-2">Message</span>
              </label>
              <Textarea
                id={id}
                placeholder=" "
                className="ring-1 ring-red-500/10"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md">
              Send Message
            </button>
          </motion.form>
        </section>
      </div>
    </main>
  );
}
