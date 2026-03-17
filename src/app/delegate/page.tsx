/* eslint-disable */

"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Package,
  Truck,
  Home,
  Car,
  CreditCard,
  FileText,
  ArrowRight,
  Loader2,
  Sparkles,
  Shield,
  ShoppingBag,
  Briefcase,
  Heart,
  DollarSign,
  Wrench,
  Key,
  Gift,
  Coffee,
  Dog,
  Printer,
  Camera,
  Smartphone,
  ShoppingCart,
  Zap,
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import type { SubmitHandler } from "react-hook-form";

// Form schema validation with Zod
const formSchema = z.object({
  // Step 1: Contact Information
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  alternativePhone: z.string().default(""),

  // Step 2: Service Selection
  serviceCategory: z.string({
    error: "Please select a service category",
  }),
  specificService: z.string({
    error: "Please select a specific service",
  }),

  // Step 3: Service Details
  pickupAddress: z.string().min(5, "Please provide a valid pickup address"),
  deliveryAddress: z.string().default(""),
  preferredDate: z.string().default(""),
  preferredTime: z.string().default(""),
  urgencyLevel: z.string().default(""),

  // Step 4: Item Details (conditional based on service)
  itemDescription: z.string().min(5, "Please describe the item or task"),
  itemValue: z.string().default(""),
  itemWeight: z.string().default(""),
  itemDimensions: z.string().default(""),
  specialInstructions: z.string().default(""),

  // Step 5: Payment & Confirmation
  estimatedBudget: z.string().default(""),
  paymentMethod: z.string().default(""),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),

  // Hidden field for form type
  formType: z.string(),
});

// Infer the type from the schema
type FormValues = z.infer<typeof formSchema>;

// Service Categories and their specific services
const serviceCategories = [
  {
    id: "delivery",
    name: "Delivery Services",
    icon: Package,
    description: "Package and document delivery",
    services: [
      { id: "parcel-delivery", name: "Parcel Delivery", icon: Package },
      { id: "document-delivery", name: "Document Delivery", icon: FileText },
      { id: "food-delivery", name: "Food Delivery", icon: Coffee },
      { id: "grocery-delivery", name: "Grocery Delivery", icon: ShoppingCart },
      { id: "medicine-delivery", name: "Medicine Delivery", icon: Heart },
      { id: "gift-delivery", name: "Gift Delivery", icon: Gift },
    ],
  },
  {
    id: "moving",
    name: "Moving & Packing",
    icon: Truck,
    description: "Professional moving assistance",
    services: [
      { id: "residential-moving", name: "Residential Moving", icon: Home },
      { id: "office-moving", name: "Office Moving", icon: Briefcase },
      { id: "packing-services", name: "Packing Services", icon: Package },
      { id: "furniture-assembly", name: "Furniture Assembly", icon: Wrench },
      { id: "storage-services", name: "Storage Services", icon: Home },
    ],
  },
  {
    id: "vehicle",
    name: "Vehicle Services",
    icon: Car,
    description: "Car-related errands and imports",
    services: [
      { id: "car-import-usa", name: "Vehicle Import (USA)", icon: Car },
      { id: "car-wash", name: "Car Wash & Detailing", icon: Car },
      { id: "car-maintenance", name: "Car Maintenance", icon: Wrench },
      { id: "car-registration", name: "Vehicle Registration", icon: FileText },
      { id: "driver-service", name: "Driver Service", icon: User },
      { id: "car-sale", name: "Car Sale Assistance", icon: DollarSign },
    ],
  },
  {
    id: "shopping",
    name: "Shop & Pay",
    icon: ShoppingBag,
    description: "We shop, you relax",
    services: [
      { id: "grocery-shopping", name: "Grocery Shopping", icon: ShoppingCart },
      { id: "market-shopping", name: "Market Shopping", icon: ShoppingBag },
      { id: "clothes-shopping", name: "Clothes Shopping", icon: ShoppingBag },
      {
        id: "electronics-shopping",
        name: "Electronics Shopping",
        icon: Smartphone,
      },
      { id: "pharmacy-pickup", name: "Pharmacy Pickup", icon: Heart },
      { id: "bill-payment", name: "Bill Payment", icon: CreditCard },
    ],
  },
  {
    id: "errand",
    name: "General Errands",
    icon: Zap,
    description: "Quick and reliable daily errands",
    services: [
      { id: "bank-errand", name: "Bank Errands", icon: CreditCard },
      {
        id: "government-office",
        name: "Government Office Visits",
        icon: Briefcase,
      },
      { id: "school-errand", name: "School Errands", icon: FileText },
      { id: "pet-care", name: "Pet Care", icon: Dog },
      { id: "waiting-service", name: "Waiting in Line Service", icon: Clock },
      { id: "key-pickup", name: "Key Pickup/Drop-off", icon: Key },
    ],
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: Briefcase,
    description: "Specialized assistance",
    services: [
      { id: "photography", name: "Photography Services", icon: Camera },
      { id: "printing", name: "Printing & Scanning", icon: Printer },
      { id: "translation", name: "Translation Services", icon: FileText },
      { id: "notary", name: "Notary Services", icon: FileText },
      { id: "event-assistance", name: "Event Assistance", icon: Calendar },
      { id: "personal-assistant", name: "Personal Assistant", icon: User },
    ],
  },
];

// Urgency levels
const urgencyLevels = [
  { value: "low", label: "Low - Within 3-5 days", color: "green" },
  { value: "medium", label: "Medium - Within 24-48 hours", color: "yellow" },
  { value: "high", label: "High - Within 12 hours", color: "orange" },
  {
    value: "emergency",
    label: "Emergency - ASAP (within 2 hours)",
    color: "red",
  },
];

// Payment methods
const paymentMethods = [
  { value: "cash", label: "Cash on Delivery" },
  { value: "transfer", label: "Bank Transfer" },
  { value: "card", label: "Credit/Debit Card" },
  { value: "wallet", label: "Errandboy Wallet" },
];

// Time slots
const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
  "6:00 PM - 8:00 PM",
];

const DelegateFormPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [formProgress, setFormProgress] = useState(20);

  // Initialize form with proper typing and Zod resolver
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      alternativePhone: "",
      serviceCategory: "",
      specificService: "",
      pickupAddress: "",
      deliveryAddress: "",
      preferredDate: "",
      preferredTime: "",
      urgencyLevel: "",
      itemDescription: "",
      itemValue: "",
      itemWeight: "",
      itemDimensions: "",
      specialInstructions: "",
      estimatedBudget: "",
      paymentMethod: "",
      agreeToTerms: false,
      formType: "delegate-errand",
    },
  });

  // Watch form values to update progress
  const watchedValues = form.watch();

  useEffect(() => {
    let progress = 20; // Base progress

    // Step 1 completion (20-40%)
    if (watchedValues.fullName && watchedValues.email && watchedValues.phone) {
      progress = 40;
    }

    // Step 2 completion (40-60%)
    if (watchedValues.serviceCategory && watchedValues.specificService) {
      progress = 60;
    }

    // Step 3 completion (60-80%)
    if (watchedValues.pickupAddress) {
      progress = 70;
    }
    if (watchedValues.preferredDate && watchedValues.urgencyLevel) {
      progress = 80;
    }

    // Step 4 completion (80-90%)
    if (watchedValues.itemDescription) {
      progress = 85;
    }
    if (watchedValues.specialInstructions) {
      progress = 90;
    }

    // Step 5 completion (90-100%)
    if (watchedValues.agreeToTerms) {
      progress = 100;
    }

    setFormProgress(progress);
  }, [watchedValues]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Get category and service names for better display
      const category = serviceCategories.find(
        (c) => c.id === data.serviceCategory
      );
      const service = category?.services.find(
        (s) => s.id === data.specificService
      );

      // Format data for Formspree
      const formData = {
        ...data,
        serviceCategoryName: category?.name || data.serviceCategory,
        serviceName: service?.name || data.specificService,
        _subject: `New Errand Delegation: ${service?.name || "General Errand"}`,
        _replyto: data.email,
        _form: "delegate-errand",
        _template: "table",
      };

      // Send to Formspree - Replace with your actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/mzdjjjbb", {
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
        setCurrentStep(1);
        setSelectedCategory("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (currentStep === 1) {
      const fields: (keyof FormValues)[] = ["fullName", "email", "phone"];
      fields.forEach((field) => {
        form.trigger(field);
      });

      // Check if fields are valid
      const isValid = fields.every((field) => !form.formState.errors[field]);
      if (!isValid) return;
    } else if (currentStep === 2) {
      const fields: (keyof FormValues)[] = [
        "serviceCategory",
        "specificService",
      ];
      fields.forEach((field) => {
        form.trigger(field);
      });

      const isValid = fields.every((field) => !form.formState.errors[field]);
      if (!isValid) return;
    } else if (currentStep === 3) {
      form.trigger("pickupAddress");
      if (form.formState.errors.pickupAddress) return;
    }

    setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    form.setValue("serviceCategory", categoryId);
    form.setValue("specificService", ""); // Reset specific service
  };

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-2 border-green-100">
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

              <CardTitle className="text-3xl mb-3">
                Errand Delegated Successfully!
              </CardTitle>
              <CardDescription className="text-lg mb-6">
                Thank you for choosing Errandboy Nigeria
              </CardDescription>

              <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  What happens next?
                </h4>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      We&apos;ll review your request within 30 minutes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      An errand specialist will contact you to confirm details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>
                      You&apos;ll receive real-time updates via SMS/WhatsApp
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Your errand will be completed on schedule</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSubmitStatus("idle");
                    form.reset();
                  }}
                >
                  Delegate Another Errand
                </Button>
                <Link href="/">
                  <Button className="bg-red-600 hover:bg-red-700">
                    Go to Homepage
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="bg-red-100 text-red-600 hover:bg-red-200 mb-4">
            Delegate Your Errand
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 font-pt-serif text-gray-800">
            Let Us Handle It For You
          </h1>
          <p className="text-xl text-gray-600">
            Whatever you need done, our team of reliable errand specialists is
            ready to help
          </p>
        </motion.div>

        {/* Main Form Card */}
        <Card className="max-w-4xl mx-auto shadow-xl border-2 border-gray-100 pt-0">
          <CardHeader className="bg-gradient-to-r p-4 from-red-600 to-red-500 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">
                  Delegate an Errand
                </CardTitle>
                <CardDescription className="text-red-100">
                  Fill out the form below and we&apos;ll take it from there
                </CardDescription>
              </div>
              <Badge
                variant="outline"
                className="bg-white/20 text-white border-white/30"
              >
                <Clock className="w-4 h-4 mr-1" />
                30-min Response
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="pt-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Form Completion
                </span>
                <span className="text-sm font-medium text-red-600">
                  {formProgress}%
                </span>
              </div>
              <Progress value={formProgress} className="h-2" />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4, 5].map((step) => (
                <div
                  key={step}
                  className={`flex-1 text-center ${
                    step < currentStep
                      ? "text-green-600"
                      : step === currentStep
                      ? "text-red-600"
                      : "text-gray-300"
                  }`}
                >
                  <div
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 ${
                      step < currentStep
                        ? "bg-green-100 text-green-600"
                        : step === currentStep
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {step < currentStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      step
                    )}
                  </div>
                  <span className="text-xs hidden md:block">
                    {step === 1 && "Contact"}
                    {step === 2 && "Service"}
                    {step === 3 && "Location"}
                    {step === 4 && "Details"}
                    {step === 5 && "Confirm"}
                  </span>
                </div>
              ))}
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Contact Information
                    </h3>

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
                                  className="pl-10"
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
                                  className="pl-10"
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
                              Phone Number{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  placeholder="0800 123 4567"
                                  className="pl-10"
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
                        name="alternativePhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Alternative Phone (Optional)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  placeholder="0812 987 6543"
                                  className="pl-10"
                                  {...field}
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Service Selection */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Select Service Category
                    </h3>

                    <FormField
                      control={form.control}
                      name="serviceCategory"
                      render={({}) => (
                        <FormItem>
                          <FormLabel>
                            Service Category{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                            {serviceCategories.map((category) => {
                              const Icon = category.icon;
                              const isSelected =
                                selectedCategory === category.id;

                              return (
                                <div
                                  key={category.id}
                                  onClick={() =>
                                    handleCategoryChange(category.id)
                                  }
                                  className={`
                                    p-4 border-2 rounded-xl cursor-pointer transition-all
                                    ${
                                      isSelected
                                        ? "border-red-500 bg-red-50"
                                        : "border-gray-200 hover:border-red-300 hover:bg-gray-50"
                                    }
                                  `}
                                >
                                  <div className="flex items-start gap-3">
                                    <div
                                      className={`
                                      p-2 rounded-lg
                                      ${
                                        isSelected
                                          ? "bg-red-100"
                                          : "bg-gray-100"
                                      }
                                    `}
                                    >
                                      <Icon
                                        className={`
                                        w-5 h-5
                                        ${
                                          isSelected
                                            ? "text-red-600"
                                            : "text-gray-600"
                                        }
                                      `}
                                      />
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-800">
                                        {category.name}
                                      </h4>
                                      <p className="text-xs text-gray-500">
                                        {category.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {selectedCategory && (
                      <FormField
                        control={form.control}
                        name="specificService"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Specific Service{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a specific service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceCategories
                                  .find((c) => c.id === selectedCategory)
                                  ?.services.map((service) => {
                                    const Icon = service.icon;
                                    return (
                                      <SelectItem
                                        key={service.id}
                                        value={service.id}
                                      >
                                        <div className="flex items-center gap-2">
                                          <Icon className="w-4 h-4" />
                                          {service.name}
                                        </div>
                                      </SelectItem>
                                    );
                                  })}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </motion.div>
                )}

                {/* Step 3: Location & Timing */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Location & Timing
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="pickupAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>
                              Pickup Address{" "}
                              <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  placeholder="Enter the pickup location"
                                  className="pl-10"
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
                        name="deliveryAddress"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>
                              Delivery/Destination Address (Optional)
                            </FormLabel>
                            <FormControl>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  placeholder="Enter destination if different from pickup"
                                  className="pl-10"
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
                        name="preferredDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Date</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  type="date"
                                  className="pl-10"
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
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Time</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select time slot" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {timeSlots.map((slot) => (
                                  <SelectItem key={slot} value={slot}>
                                    {slot}
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
                        name="urgencyLevel"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Urgency Level</FormLabel>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                              {urgencyLevels.map((level) => (
                                <div key={level.value}>
                                  <RadioGroupItem
                                    value={level.value}
                                    id={level.value}
                                    className="peer sr-only"
                                  />
                                  <label
                                    htmlFor={level.value}
                                    className={`
                                      flex flex-col items-center justify-between rounded-md border-2 
                                      border-gray-200 bg-white p-4 hover:bg-gray-50 
                                      peer-data-[state=checked]:border-${level.color}-500 
                                      peer-data-[state=checked]:bg-${level.color}-50
                                      cursor-pointer
                                    `}
                                  >
                                    <Clock
                                      className={`w-6 h-6 text-${level.color}-500 mb-2`}
                                    />
                                    <span className="text-sm font-medium text-center">
                                      {level.label}
                                    </span>
                                  </label>
                                </div>
                              ))}
                            </RadioGroup>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Item Details */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Item & Task Details
                    </h3>

                    <FormField
                      control={form.control}
                      name="itemDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Describe the Item/Task{" "}
                            <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide a detailed description of what needs to be done..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Include any specific details that will help us serve
                            you better
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid md:grid-cols-3 gap-6">
                      <FormField
                        control={form.control}
                        name="itemValue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Estimated Value (₦)</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                <Input
                                  placeholder="e.g., 50000"
                                  className="pl-10"
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
                        name="itemWeight"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Weight (if applicable)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 5kg" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="itemDimensions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dimensions (if applicable)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., 30x20x15 cm"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="specialInstructions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Special Instructions</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any special instructions or notes for our team..."
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}

                {/* Step 5: Confirmation */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      Review & Confirm
                    </h3>

                    {/* Summary Card */}
                    <Card className="bg-gray-50">
                      <CardContent className="p-6 space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">
                              Contact Info
                            </h4>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Name:</span>{" "}
                              {form.getValues("fullName")}
                              <br />
                              <span className="font-medium">Email:</span>{" "}
                              {form.getValues("email")}
                              <br />
                              <span className="font-medium">Phone:</span>{" "}
                              {form.getValues("phone")}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2">
                              Service Details
                            </h4>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Category:</span>{" "}
                              {
                                serviceCategories.find(
                                  (c) =>
                                    c.id === form.getValues("serviceCategory")
                                )?.name
                              }
                              <br />
                              <span className="font-medium">Service:</span>{" "}
                              {
                                serviceCategories
                                  .find(
                                    (c) =>
                                      c.id === form.getValues("serviceCategory")
                                  )
                                  ?.services.find(
                                    (s) =>
                                      s.id === form.getValues("specificService")
                                  )?.name
                              }
                              <br />
                              <span className="font-medium">Urgency:</span>{" "}
                              {
                                urgencyLevels.find(
                                  (u) =>
                                    u.value === form.getValues("urgencyLevel")
                                )?.label
                              }
                            </p>
                          </div>

                          <div className="md:col-span-2">
                            <h4 className="font-semibold text-gray-700 mb-2">
                              Location
                            </h4>
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Pickup:</span>{" "}
                              {form.getValues("pickupAddress")}
                              <br />
                              {form.getValues("deliveryAddress") && (
                                <>
                                  <span className="font-medium">Delivery:</span>{" "}
                                  {form.getValues("deliveryAddress")}
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <FormField
                      control={form.control}
                      name="estimatedBudget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Estimated Budget (Optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                placeholder="Your estimated budget for this task"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormDescription>
                            This helps us match you with the right service level
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Payment Method</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select payment method" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {paymentMethods.map((method) => (
                                <SelectItem
                                  key={method.value}
                                  value={method.value}
                                >
                                  {method.label}
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
                      name="agreeToTerms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I agree to the{" "}
                              <Link
                                href="/terms"
                                className="text-red-600 hover:underline"
                              >
                                Terms and Conditions
                              </Link>{" "}
                              and{" "}
                              <Link
                                href="/privacy"
                                className="text-red-600 hover:underline"
                              >
                                Privacy Policy
                              </Link>
                              . I confirm that the information provided is
                              accurate. <span className="text-red-500">*</span>
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <div className="rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Your Information is Secure
                      </h4>
                      <p className="text-sm text-gray-600">
                        We respect your privacy and will never share your
                        information. By submitting this form, you agree to be
                        contacted by our errand specialists.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}

                  {currentStep < 5 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto bg-red-600 hover:bg-red-700"
                    >
                      Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto bg-green-600 hover:bg-green-700 min-w-[150px]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Delegate Errand <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 font-medium">
                        Submission Failed
                      </p>
                      <p className="text-sm text-red-600">
                        There was an error submitting your form. Please try
                        again or contact us directly at
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
      </div>
    </div>
  );
};

export default DelegateFormPage;
