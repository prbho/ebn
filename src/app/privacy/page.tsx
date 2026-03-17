/* eslint-disable */

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Mail,
  Phone,
  FileText,
  Clock,
  Globe,
} from "lucide-react";

// shadcn/ui imports
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
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
            <Shield className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-pt-serif text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            How we protect and handle your information
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
              <h2 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                Quick Summary (The Short Version)
              </h2>
              <ul className="space-y-2 text-sm text-gray-700/90">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    We only collect information needed to provide our services
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>We never sell your personal data to anyone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    You can request to see or delete your data anytime
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>
                    We use industry-standard security to protect your
                    information
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="space-y-8">
            {/* 1. Who We Are */}
            <Section title="1. Who We Are" icon={Globe}>
              <p className="text-gray-700 mb-2">
                Errandboy Nigeria and Errandboy USA (collectively referred to as{" "}
                <strong>
                  &quot;we&quot;, &quot;us,&quot; or &quot;our&quot;
                </strong>
                ) provide errand, delivery, and vehicle import services. This
                privacy policy explains how we handle your personal information
                when you use our website, mobile app, or services.
              </p>
              <p className="text-gray-700">
                <strong>Our companies:</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>
                  <strong>Errandboy Nigeria</strong> - For local errands and
                  services in Nigeria
                </li>
                <li>
                  <strong>Errandboy USA</strong> - For vehicle imports from the
                  United States to Nigeria
                </li>
              </ul>
            </Section>

            <Separator />

            {/* 2. Information We Collect */}
            <Section title="2. Information We Collect" icon={FileText}>
              <p className="text-gray-700 mb-3">
                We only collect information that helps us provide our services
                to you. Here&apos;s what we may collect:
              </p>

              <h3 className="font-semibold text-gray-800 mt-4 mb-2">
                A. Information you give us:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Contact details:</strong> Your name, email address,
                  phone number
                </li>
                <li>
                  <strong>Address information:</strong> Pickup and delivery
                  locations
                </li>
                <li>
                  <strong>Payment information:</strong> We collect payment
                  details (credit card, bank transfer) to process your
                  transactions. Payment data is handled securely by our payment
                  partners
                </li>
                <li>
                  <strong>Service details:</strong> Information about the
                  errands or vehicles you&apos;re requesting
                </li>
                <li>
                  <strong>Account information:</strong> If you create an
                  account, we store your login credentials and preferences
                </li>
              </ul>

              <h3 className="font-semibold text-gray-800 mt-4 mb-2">
                B. Information collected automatically:
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Usage data:</strong> How you interact with our website
                  and app
                </li>
                <li>
                  <strong>Device information:</strong> IP address, browser type,
                  operating system
                </li>
                <li>
                  <strong>Location data:</strong> Approximate location to help
                  match you with nearby service providers
                </li>
                <li>
                  <strong>Cookies:</strong> Small files that help us remember
                  your preferences (you can disable cookies in your browser)
                </li>
              </ul>
            </Section>

            <Separator />

            {/* 3. How We Use Your Information */}
            <Section title="3. How We Use Your Information" icon={UserCheck}>
              <p className="text-gray-700 mb-3">
                We use your information only for legitimate business purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>To provide our services:</strong> Process your errand
                  requests, deliveries, and vehicle imports
                </li>
                <li>
                  <strong>To communicate with you:</strong> Send updates about
                  your requests, respond to questions, and provide customer
                  support
                </li>
                <li>
                  <strong>To improve our services:</strong> Analyze how
                  customers use our platform to make it better
                </li>
                <li>
                  <strong>To process payments:</strong> Handle billing and
                  transactions securely
                </li>
                <li>
                  <strong>To send important notices:</strong> Inform you about
                  changes to our terms or policies
                </li>
                <li>
                  <strong>To prevent fraud:</strong> Protect against
                  unauthorized transactions and misuse of our services
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                <strong>
                  We NEVER sell your personal information to third parties.
                </strong>
              </p>
            </Section>

            <Separator />

            {/* 4. When We Share Your Information */}
            <Section title="4. When We Share Your Information" icon={Eye}>
              <p className="text-gray-700 mb-3">
                We only share your information in these specific situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>With service providers:</strong> Trusted partners who
                  help us run our business (payment processors, delivery
                  partners, vehicle inspectors). They only get the information
                  needed to do their job and must protect it.
                </li>
                <li>
                  <strong>With your consent:</strong> When you ask us to share
                  information with someone (like a delivery recipient)
                </li>
                <li>
                  <strong>For legal reasons:</strong> If required by law, court
                  order, or to protect our rights and safety
                </li>
                <li>
                  <strong>Business transfers:</strong> If Errandboy is sold or
                  merged, your information would be transferred to the new owner
                  (who must follow this same privacy policy)
                </li>
              </ul>
            </Section>

            <Separator />

            {/* 5. Your Privacy Rights */}
            <Section title="5. Your Privacy Rights" icon={Lock}>
              <p className="text-gray-700 mb-3">
                You have control over your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Access:</strong> Request a copy of the information we
                  have about you
                </li>
                <li>
                  <strong>Correction:</strong> Ask us to fix incorrect
                  information
                </li>
                <li>
                  <strong>Deletion:</strong> Request that we delete your
                  information (we&apos;ll honor this unless we need to keep it
                  for legal reasons)
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing emails
                  anytime using the link in each email
                </li>
                <li>
                  <strong>Withdraw consent:</strong> If you agreed to something,
                  you can change your mind
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@errandboy.com"
                  className="text-red-600 hover:underline"
                >
                  privacy@errandboy.com
                </a>
                . We&apos;ll respond within 30 days.
              </p>
            </Section>

            <Separator />

            {/* 6. Data Security */}
            <Section title="6. How We Protect Your Information" icon={Shield}>
              <p className="text-gray-700 mb-3">We take security seriously:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Encryption:</strong> All data transmitted between you
                  and our site is encrypted using SSL/TLS technology
                </li>
                <li>
                  <strong>Access controls:</strong> Only employees who need your
                  information to do their jobs can access it
                </li>
                <li>
                  <strong>Regular reviews:</strong> We regularly review our
                  security practices
                </li>
                <li>
                  <strong>Payment security:</strong> We don&apos;t store full
                  credit card numbers – our payment partners handle this
                  securely
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                While no online system is 100% secure, we work hard to protect
                your information.
              </p>
            </Section>

            <Separator />

            {/* 7. Data Retention */}
            <Section title="7. How Long We Keep Your Information" icon={Clock}>
              <p className="text-gray-700">
                We keep your information only as long as needed:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                <li>
                  <strong>Account information:</strong> Until you delete your
                  account
                </li>
                <li>
                  <strong>Transaction records:</strong> Up to 6 years for tax
                  and legal requirements
                </li>
                <li>
                  <strong>Communications:</strong> As long as needed to address
                  your request
                </li>
              </ul>
              <p className="text-gray-700 mt-3">
                After we no longer need your information, we securely delete or
                anonymize it.
              </p>
            </Section>

            <Separator />

            {/* 8. Children's Privacy */}
            <Section title="8. Children's Privacy" icon={UserCheck}>
              <p className="text-gray-700">
                Our services are not intended for children under 13. We do not
                knowingly collect information from children. If you believe a
                child has provided us with personal information, please contact
                us so we can delete it.
              </p>
            </Section>

            <Separator />

            {/* 9. International Users */}
            <Section
              title="9. International Users (Nigeria & USA)"
              icon={Globe}
            >
              <p className="text-gray-700 mb-3">
                <strong>For users in Nigeria:</strong> We comply with the
                Nigeria Data Protection Act, 2023 and the General Application
                and Implementation Directive (GAID). You have the right to lodge
                a complaint with the Nigeria Data Protection Commission (NDPC).
              </p>
              <p className="text-gray-700 mb-3">
                <strong>For users in the USA:</strong> We comply with applicable
                US privacy laws. California residents have additional rights
                under the California Consumer Privacy Act (CCPA).
              </p>
              <p className="text-gray-700">
                When you use our services, your information may be transferred
                between Nigeria and the United States. We ensure appropriate
                safeguards are in place.
              </p>
            </Section>

            <Separator />

            {/* 10. Changes to This Policy */}
            <Section title="10. Changes to This Policy" icon={FileText}>
              <p className="text-gray-700">
                We may update this privacy policy occasionally. When we do,
                we&apos;ll post the new policy here and update the &quot;Last
                Updated&quot; date. If we make significant changes, we&apos;ll
                notify you by email or through a notice on our website.
              </p>
            </Section>

            <Separator />

            {/* 11. Contact Us */}
            <Section title="11. Contact Us" icon={Mail}>
              <p className="text-gray-700 mb-4">
                Have questions about your privacy? We&apos;re here to help:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Card className="border-0 shadow-none p-0">
                  <CardContent className="p-4 bg-gray-50">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Errandboy Nigeria
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4" /> privacy@errandboynigeria.com
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> +234 909 851 2546
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-none p-0">
                  <CardContent className="p-4 bg-gray-50">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Errandboy USA
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
                      <Mail className="w-4 h-4" /> privacy@errandboyusa.com
                    </p>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Phone className="w-4 h-4" /> +1 956-713-3491
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>
        </div>
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

export default PrivacyPolicyPage;
