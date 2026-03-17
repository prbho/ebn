/* eslint-disable */

"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  CheckCircle,
  AlertCircle,
  Shield,
  DollarSign,
  UserCheck,
  XCircle,
  Scale,
  Ban,
  HelpCircle,
  Mail,
  Phone,
} from "lucide-react";

// shadcn/ui imports
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

const TermsOfServicePage = () => {
  const lastUpdated = "March 17, 2026";

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pt-serif text-gray-800">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            The rules of using our services
          </p>
          <p className="text-sm text-gray-500">Last Updated: {lastUpdated}</p>
        </motion.div>

        {/* Quick Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <Card className="bg-red-50 shadow-none border-0">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                Quick Summary (Plain English)
              </h2>
              <ul className="space-y-2 text-sm text-gray-700/90">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    We&apos;ll do our best to complete your errands and imports
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    Please provide accurate information and be respectful
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    You&apos;re responsible for paying for services you request
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    We&apos;re not liable for issues beyond our control
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    You can cancel, but fees may apply depending on timing
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            {/* 1. Introduction */}
            <Section title="1. Introduction" icon={FileText}>
              <p className="text-gray-700 mb-3">
                Welcome to Errandboy! These terms of service (&quot;Terms&quot;)
                govern your use of our websites, mobile apps, and services
                provided by Errandboy Nigeria and Errandboy USA (collectively,
                &quot;Errandboy,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;).
              </p>
              <p className="text-gray-700">
                By using our services, you agree to these Terms. If you
                don&apos;t agree, please don&apos;t use our services.
              </p>
            </Section>

            <Separator />

            {/* 2. Our Services */}
            <Section title="2. Our Services" icon={CheckCircle}>
              <p className="text-gray-700 mb-3">
                We offer two main types of services:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-2">
                <Card className="bg-gray-50 border-0 shadow-none">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Errandboy Nigeria
                    </h3>
                    <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                      <li>Delivery services (packages, documents, food)</li>
                      <li>Moving and packing assistance</li>
                      <li>Shopping and bill payment</li>
                      <li>General errands (bank, government office visits)</li>
                      <li>Professional services (photography, printing)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border-0 shadow-none">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Errandboy USA
                    </h3>
                    <ul className="list-disc pl-4 text-sm text-gray-600 space-y-1">
                      <li>Vehicle sourcing from USA auctions</li>
                      <li>Auction bidding assistance</li>
                      <li>Vehicle inspection and verification</li>
                      <li>Export documentation</li>
                      <li>Shipping to Nigeria</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Section>

            <Separator />

            {/* 3. Your Responsibilities */}
            <Section title="3. Your Responsibilities" icon={UserCheck}>
              <p className="text-gray-700 mb-3">
                When you use our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Provide accurate information:</strong> Give us correct
                  contact details, addresses, and service requirements
                </li>
                <li>
                  <strong>Be available:</strong> Answer calls or messages from
                  our team to coordinate your service
                </li>
                <li>
                  <strong>Pay for services:</strong> Complete payment as agreed
                  for the services you request
                </li>
                <li>
                  <strong>Be respectful:</strong> Treat our staff and partners
                  with courtesy
                </li>
                <li>
                  <strong>Follow the law:</strong> Don&apos;t use our services
                  for illegal activities (like shipping prohibited items)
                </li>
                <li>
                  <strong>Secure your account:</strong> Keep your login
                  credentials private
                </li>
              </ul>
            </Section>

            <Separator />

            {/* 4. Service Fees and Payment */}
            <Section title="4. Service Fees and Payment" icon={DollarSign}>
              <p className="text-gray-700 mb-3">
                <strong>How pricing works:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Service fees:</strong> We&apos;ll provide a quote or
                  estimate before you confirm your request
                </li>
                <li>
                  <strong>Payment methods:</strong> We accept bank transfers,
                  card payments, and cash (for eligible services)
                </li>
                <li>
                  <strong>Additional charges:</strong> If your request changes
                  (like adding items or longer distance), we&apos;ll notify you
                  before applying extra fees
                </li>
                <li>
                  <strong>Vehicle imports:</strong> Final cost includes vehicle
                  price, auction fees, shipping, duties, and our service fee (we
                  provide a detailed breakdown)
                </li>
              </ul>
              <Alert className="mt-4 bg-yellow-50 border-yellow-200">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <AlertDescription className="text-yellow-700 text-sm">
                  Payment is due as agreed in your service confirmation. Late
                  payments may result in service delays or suspension.
                </AlertDescription>
              </Alert>
            </Section>

            <Separator />

            {/* 5. Cancellations and Refunds */}
            <Section title="5. Cancellations and Refunds" icon={XCircle}>
              <p className="text-gray-700 mb-3">
                <strong>For local errands and deliveries:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  Cancel at least 2 hours before scheduled time: Full refund
                </li>
                <li>
                  Cancel within 2 hours: 50% refund (if work hasn&apos;t
                  started)
                </li>
                <li>
                  After work has started: No refund, but we&apos;ll complete the
                  service
                </li>
              </ul>

              <p className="text-gray-700 mb-3 mt-4">
                <strong>For vehicle imports:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  Before auction bidding: Full refund minus consultation fee (if
                  applicable)
                </li>
                <li>
                  After winning bid: Vehicle and shipping costs are
                  non-refundable (you own the vehicle)
                </li>
                <li>
                  Our service fee is refundable only if we fail to secure the
                  vehicle you requested
                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                To cancel, contact us immediately through phone or email.
              </p>
            </Section>

            <Separator />

            {/* 6. Vehicle Import Specific Terms */}
            <Section title="6. Vehicle Import Terms" icon={Shield}>
              <p className="text-gray-700 mb-3">
                <strong>Special conditions for USA vehicle imports:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Vehicle condition:</strong> We provide inspection
                  reports, but vehicles are sold &quot;as-is&quot; from
                  auctions. We&apos;re not responsible for undisclosed issues
                  from the seller.
                </li>
                <li>
                  <strong>Shipping times:</strong> Estimated 8-12 weeks. Delays
                  can happen due to weather, port congestion, or customs.
                  We&apos;ll keep you updated.
                </li>
                <li>
                  <strong>Import duties:</strong> You&apos;re responsible for
                  paying all Nigerian import duties and taxes. We can help
                  estimate these.
                </li>
                <li>
                  <strong>Customs clearance:</strong> We handle the process, but
                  you must provide required documents (passport, etc.)
                </li>
                <li>
                  <strong>Vehicle registration:</strong> We don&apos;t handle
                  local vehicle registration in Nigeria – you&apos;ll need to do
                  this yourself.
                </li>
              </ul>
            </Section>

            <Separator />

            {/* 7. Prohibited Items */}
            <Section title="7. Prohibited Items" icon={Ban}>
              <p className="text-gray-700 mb-3">
                You may NOT use our services for:
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Illegal drugs or substances</li>
                  <li>Weapons or ammunition</li>
                  <li>Stolen goods</li>
                  <li>Hazardous materials</li>
                </ul>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Counterfeit items</li>
                  <li>Perishables without proper packaging</li>
                  <li>Live animals (except authorized pet transport)</li>
                  <li>Any item prohibited by law</li>
                </ul>
              </div>
              <Alert className="mt-4 bg-red-50 border-red-200">
                <AlertCircle className="w-4 h-4 text-red-600" />
                <AlertDescription className="text-red-700 text-sm">
                  Violation of this section may result in immediate termination
                  of services and reporting to authorities.
                </AlertDescription>
              </Alert>
            </Section>

            <Separator />

            {/* 8. Liability */}
            <Section title="8. Our Liability" icon={Scale}>
              <p className="text-gray-700 mb-3">
                <strong>What we&apos;re responsible for:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  Completing services as described and with reasonable care
                </li>
                <li>
                  Protecting your information as outlined in our Privacy Policy
                </li>
                <li>Addressing issues caused by our negligence or mistakes</li>
              </ul>

              <p className="text-gray-700 mb-3 mt-4">
                <strong>What we&apos;re NOT responsible for:</strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  Delays beyond our control (weather, port strikes, customs
                  delays, etc.)
                </li>
                <li>Issues caused by incorrect information you provided</li>
                <li>Damage caused by improper packaging by you</li>
                <li>
                  Loss of value in imported vehicles due to market changes
                </li>
                <li>Indirect damages (lost profits, inconvenience, etc.)</li>
              </ul>

              <p className="text-gray-700 mt-3">
                <strong>Insurance:</strong> For valuable items and vehicles, we
                recommend purchasing additional insurance. We carry liability
                insurance as required by law.
              </p>
            </Section>

            <Separator />

            {/* 9. Dispute Resolution */}
            <Section title="9. Dispute Resolution" icon={HelpCircle}>
              <p className="text-gray-700 mb-3">If something goes wrong:</p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Contact us first:</strong> Most issues can be resolved
                  by talking to us. Email or call us immediately.
                </li>
                <li>
                  <strong>Formal complaint:</strong> If we cant&apos; resolve it
                  informally, you can submit a formal complaint to our customer
                  service team.
                </li>
                <li>
                  <strong>Mediation:</strong> If still unresolved, we agree to
                  try mediation before going to court.
                </li>
                <li>
                  <strong>Governing law:</strong> These Terms are governed by
                  the laws of Nigeria for Errandboy Nigeria services, and Texas
                  law for Errandboy USA services.
                </li>
                <li>
                  <strong>Small claims:</strong> Either party may bring claims
                  in small claims court.
                </li>
              </ol>
            </Section>

            <Separator />

            {/* 10. Account Termination */}
            <Section title="10. Account Termination" icon={XCircle}>
              <p className="text-gray-700 mb-3">
                <strong>
                  We may suspend or terminate your account if you:
                </strong>
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Violate these Terms (especially prohibited items)</li>
                <li>Provide false information</li>
                <li>Don&apos;t pay for services</li>
                <li>Are abusive to our staff</li>
                <li>Use our services for illegal activities</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>You can cancel anytime:</strong> You may delete your
                account by contacting us. Any pending services must be completed
                first.
              </p>
            </Section>

            <Separator />

            {/* 11. Changes to Terms */}
            <Section title="11. Changes to These Terms" icon={FileText}>
              <p className="text-gray-700">
                We may update these Terms occasionally. When we do, we&apos;ll
                post the new version here and update the &quot;Last
                Updated&quot; date. For significant changes, we&apos;ll notify
                you by email. Your continued use after changes means you accept
                the new Terms.
              </p>
            </Section>

            <Separator />

            {/* 12. Contact Us */}
            <Section title="12. Contact Us" icon={Mail}>
              <p className="text-gray-700 mb-4">
                Questions or concerns? We&apos;re here to help:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Card className="bg-gray-50 border-0 shadow-none">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Errandboy Nigeria
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4" /> support@errandboynigeria.com
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> 0909 851 2546
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border-0 shadow-none">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Errandboy USA
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4" /> support@errandboyusa.com
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> +1 956-713-3491
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-700 mt-4">
                <strong>Complaints:</strong> For formal complaints, please email
                us with your name, service details, and issue description.
                We&apos;ll respond within 5 business days.
              </p>
            </Section>
          </div>

          {/* Acceptance Section */}
          <div className="mt-12 p-6 bg-gray-50 rounded-xl text-center">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">
              By Using Our Services, You Agree to These Terms
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              If you have questions, please contact us before using our
              services.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-8 text-sm text-gray-500"
        >
          <p>
            These terms were written to be clear and fair. We want you to
            understand your rights and our responsibilities. If anything is
            unclear, please{" "}
            <Link href="/contact" className="text-red-600 hover:underline">
              ask us
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Helper component for sections
const Section = ({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: any;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true }}
  >
    <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
      <div className="bg-red-100 p-2 rounded-lg">
        <Icon className="w-5 h-5 text-red-600" />
      </div>
      {title}
    </h2>
    <div className="pl-2">{children}</div>
  </motion.div>
);

export default TermsOfServicePage;
