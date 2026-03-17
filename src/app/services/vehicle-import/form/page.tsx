"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Car,
  User,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  Loader2,
  Shield,
  Globe,
} from "lucide-react";

// shadcn/ui imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Form schema validation with Zod
const formSchema = z.object({
  // Step 1: Contact Information
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  howDidYouHear: z.string().optional(),

  // Step 2: Vehicle Preferences
  preferredVehicle: z.string().optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  vehicleType: z.string().optional(),
  vehicleYear: z.string().optional(),

  // Step 3: Additional Details
  message: z.string().optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

// Options data
const budgetRanges = [
  { value: "under-3k", label: "Under $3,000" },
  { value: "3k-5k", label: "$3,000 - $5,000" },
  { value: "5k-10k", label: "$5,000 - $10,000" },
  { value: "10k-15k", label: "$10,000 - $15,000" },
  { value: "15k-20k", label: "$15,000 - $20,000" },
  { value: "20k-30k", label: "$20,000 - $30,000" },
  { value: "30k-plus", label: "$30,000+" },
];

const timelines = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-2-months", label: "Within 1-2 months" },
  { value: "3-4-months", label: "Within 3-4 months" },
  { value: "researching", label: "Just researching" },
  { value: "not-sure", label: "Not sure yet" },
];

const vehicleTypes = [
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
  { value: "truck", label: "Truck" },
  { value: "luxury", label: "Luxury Car" },
  { value: "sports", label: "Sports Car" },
  { value: "van", label: "Van/Minivan" },
  { value: "other", label: "Other" },
];

const hearAboutOptions = [
  { value: "google", label: "Google Search" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "referral", label: "Friend/Family Referral" },
  { value: "customer", label: "Previous Customer" },
  { value: "billboard", label: "Billboard/Advert" },
  { value: "other", label: "Other" },
];

const vehicleYears = Array.from({ length: 30 }, (_, i) => {
  const year = new Date().getFullYear() - i;
  return { value: year.toString(), label: year.toString() };
});

const ImportForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [activeTab, setActiveTab] = useState("contact");
  const [, setFormProgress] = useState(33);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      howDidYouHear: "",
      preferredVehicle: "",
      budget: "",
      timeline: "",
      vehicleType: "",
      vehicleYear: "",
      message: "",
      agreeToTerms: false,
    },
  });

  // Watch form values to update progress
  const watchedValues = form.watch();

  React.useEffect(() => {
    let progress = 33; // Base progress for step 1

    // Step 1 completion (33-50%)
    if (watchedValues.fullName && watchedValues.email && watchedValues.phone) {
      progress = 50;
    }

    // Step 2 completion (50-75%)
    if (watchedValues.vehicleType || watchedValues.budget) {
      progress = 60;
    }
    if (watchedValues.preferredVehicle && watchedValues.timeline) {
      progress = 75;
    }

    // Step 3 completion (75-100%)
    if (watchedValues.agreeToTerms) {
      progress = 90;
    }
    if (watchedValues.message && watchedValues.agreeToTerms) {
      progress = 100;
    }

    setFormProgress(progress);
  }, [watchedValues]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Format the labels for better readability
      const budgetLabel =
        budgetRanges.find((b) => b.value === data.budget)?.label ||
        data.budget ||
        "Not specified";
      const timelineLabel =
        timelines.find((t) => t.value === data.timeline)?.label ||
        data.timeline ||
        "Not specified";
      const vehicleTypeLabel =
        vehicleTypes.find((v) => v.value === data.vehicleType)?.label ||
        data.vehicleType ||
        "Not specified";
      const hearAboutLabel =
        hearAboutOptions.find((h) => h.value === data.howDidYouHear)?.label ||
        data.howDidYouHear ||
        "Not specified";

      // Prepare data for Formspree
      const formData = {
        ...data,
        budget: budgetLabel,
        timeline: timelineLabel,
        vehicleType: vehicleTypeLabel,
        howDidYouHear: hearAboutLabel,
        _subject: "New Vehicle Import Inquiry", // Email subject
        _replyto: data.email, // Reply-to address
      };

      // Send to Formspree
      const response = await fetch("https://formspree.io/f/mpqyyrlw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        setActiveTab("contact");

        // Optional: Send to WhatsApp as backup
        // You can keep the WhatsApp integration as a backup
        const whatsappMessage = `
*🚗 NEW VEHICLE IMPORT INQUIRY*
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Vehicle: ${data.preferredVehicle || "Not specified"}
Budget: ${budgetLabel}
      `;
        window.open(
          `https://wa.me/2349098512546?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const canProceedToNextTab = () => {
    if (activeTab === "contact") {
      return (
        form.getValues("fullName") &&
        form.getValues("email") &&
        form.getValues("phone")
      );
    }
    return true;
  };

  if (submitStatus === "success") {
    return (
      <Card className="w-full max-w-4xl mx-auto shadow-none border-0">
        <CardContent className="pt-12 pb-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </motion.div>

          <CardTitle className="text-2xl font-bold text-gray-800 mb-2 font-pt-serif">
            Thank You!
          </CardTitle>
          <CardDescription className="text-lg mb-6">
            Your vehicle import inquiry has been received.
          </CardDescription>

          <div className="bg-red-50 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              What happens next?
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>
                  A vehicle import specialist will review your requirements
                  within 24 hours
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>
                  You&apos;ll receive a detailed quote and vehicle options
                  matching your criteria
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>
                  We&apos;ll schedule a consultation to discuss the import
                  process
                </span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <Link href="/services/vehicle-import">
              <Button variant="outline">Back to Import Page</Button>
            </Link>
            <Link href="/">
              <Button className="bg-red-600 hover:bg-red-700">
                Go to Homepage
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full border-0 p-0">
      <CardHeader className="bg-gradient-to-r from-red-600 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="p-6">
              <CardTitle className="text-2xl mb-2">
                Start Your Vehicle Import
              </CardTitle>
              <CardDescription className="text-red-100">
                Fill out the form below and we&apos;ll get back to you within 24
                hours
              </CardDescription>
            </div>
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30"
            >
              <Globe className="w-4 h-4 mr-1" />
              USA to Nigeria
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-8">
        {/* Progress Bar */}
        {/* <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Form Completion
            </span>
            <span className="text-sm font-medium text-red-600">
              {formProgress}%
            </span>
          </div>
          <Progress value={formProgress} className="h-2 bg-amber-300" />
        </div> */}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="container mx-auto">
              <Tabs
                value={activeTab}
                onValueChange={handleTabChange}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-50">
                  <TabsTrigger
                    value="contact"
                    className="data-[state=active]:bg-red-50"
                  >
                    1. Contact Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="vehicle"
                    className="data-[state=active]:bg-red-50"
                  >
                    2. Vehicle Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="details"
                    className="data-[state=active]:bg-red-50"
                  >
                    3. Additional Info
                  </TabsTrigger>
                </TabsList>

                {/* Tab 1: Contact Information */}
                <TabsContent
                  value="contact"
                  className="bg-gray-50 rounded-xl shadow-md p-8 space-y-6 mb-16"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Full Name <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                placeholder="John Doe"
                                className="pl-10 bg-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Email <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                placeholder="john@example.com"
                                className="pl-10 bg-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Phone Number <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                placeholder="0800 123 4567"
                                className="pl-10 bg-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="howDidYouHear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>How did you hear about us?</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue
                                  className="bg-white"
                                  placeholder="Select an option"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {hearAboutOptions.map((option) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                  className="bg-white"
                                >
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="button"
                      onClick={() => setActiveTab("vehicle")}
                      disabled={!canProceedToNextTab()}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Next: Vehicle Details{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Tab 2: Vehicle Preferences */}
                <TabsContent
                  value="vehicle"
                  className="bg-gray-50 rounded-xl shadow-md p-8 space-y-6 mb-16"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="vehicleType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Vehicle Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select vehicle type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {vehicleTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="vehicleYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Year</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select year" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white max-h-60">
                              {vehicleYears.map((year) => (
                                <SelectItem key={year.value} value={year.value}>
                                  {year.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="preferredVehicle"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Preferred Vehicle (Make, Model)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Car className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                placeholder="e.g., 2020 Toyota Highlander"
                                className="pl-10 bg-white"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            Tell us the specific vehicle you&apos;re interested
                            in
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget Range (USD)</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {budgetRanges.map((range) => (
                                <SelectItem
                                  key={range.value}
                                  value={range.value}
                                >
                                  {range.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="timeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Desired Timeline</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white">
                                <SelectValue placeholder="Select timeline" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              {timelines.map((time) => (
                                <SelectItem key={time.value} value={time.value}>
                                  {time.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setActiveTab("contact")}
                    >
                      Previous
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setActiveTab("details")}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Next: Additional Details{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>

                {/* Tab 3: Additional Details */}
                <TabsContent
                  value="details"
                  className="bg-gray-50 rounded-xl shadow-md p-8 space-y-6 mb-16"
                >
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Additional Message or Requirements
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Textarea
                              placeholder="Tell us more about what you're looking for, specific requirements, or questions..."
                              className="pl-10 min-h-[120px] bg-white"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          Include any specific features, color preferences, or
                          questions
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Separator />

                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-1 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="gap-1">
                            I agree to the
                            <Link
                              href="/terms"
                              className="text-blue-600 hover:underline"
                            >
                              Terms and Conditions
                            </Link>
                            and
                            <Link
                              href="/privacy"
                              className="text-blue-600 hover:underline"
                            >
                              Privacy Policy
                            </Link>
                            . I consent to Errandboy contacting me about vehicle
                            import services.
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <div>
                    <h4 className="font-semibold  mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Your Information is Secure
                    </h4>
                    <p className="text-sm text-gray-600">
                      We respect your privacy and will never share your
                      information. By submitting this form, you agree to be
                      contacted by our vehicle import specialists.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setActiveTab("vehicle")}
                    >
                      Previous
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-green-600 hover:bg-green-700 min-w-[150px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Inquiry <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-medium">Submission Failed</p>
                  <p className="text-sm text-red-600">
                    There was an error submitting your form. Please try again or
                    contact us directly at
                    <a
                      href="tel:+2349098512546"
                      className="font-medium underline ml-1"
                    >
                      0909 851 2546
                    </a>
                  </p>
                </div>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ImportForm;
