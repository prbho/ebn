"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NumberFlow from "@number-flow/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    id: "hourly",
    name: "Hourly Services",
    icon: Star,
    price: {
      hourly: 10000,
      daily: 30000,
    },
    description: "Suitable for starter",
    features: ["Grocery shopping", "Drop-off mail", "Car wash", "and more..."],
    cta: "Get a Quote",
  },
  {
    id: "pro",
    name: "Queuing & Waiting",
    icon: Zap,
    price: {
      hourly: 15000,
      daily: 50000,
    },
    description: "Suitable for professionals.",
    features: ["Servicemen", "Visas", "Light house cleaning", "and more..."],
    cta: "Get a Quote",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Delivery & Pickup",
    icon: Shield,
    price: {
      hourly: 6000,
      daily: 40000,
    },
    description: "Fast delivery services.",
    features: [
      "Delivering merchandise.",
      "Recieving merchandise.",
      "Drop-off.",
      "much more...",
    ],
    cta: "Contact us",
  },
];

export default function SimplePricing() {
  const [frequency, setFrequency] = useState<string>("hourly");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="not-prose relative flex w-full flex-col gap-16 overflow-hidden px-4 py-24 text-center sm:px-8">
      {/* Background blur effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-t from-red-900 to-black bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Seamless and Affordable Prices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-20 px-4 mx-auto max-w-5xl pt-2 text-lg text-muted-foreground">
            Our pricing is competitive and transparent and we never have hidden
            charges. We provide a quotation for each errand and ensure you
            understand and agree to errand costs before we facilitate your
            request. The specifications below are only a guide.
          </motion.p>
        </div>

        {/* Frequency toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}>
          <Tabs
            defaultValue={frequency}
            onValueChange={setFrequency}
            className="inline-block rounded-full bg-muted/30 p-1 shadow-sm">
            <TabsList className="bg-transparent">
              <TabsTrigger
                value="hourly"
                className="rounded-full transition-all duration-300 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                Hourly
              </TabsTrigger>
              <TabsTrigger
                value="daily"
                className="rounded-full transition-all duration-300 data-[state=active]:bg-background data-[state=active]:shadow-sm">
                Daily
                <Badge
                  variant="secondary"
                  className="ml-2 bg-red=500/10 text-primary hover:bg-primary/15">
                  20% off
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-8 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => {
            const isPopular = !!plan.popular;
            const cardClasses = `relative h-full w-full ring-red-200 ring-1 bg-red-200/.5 text-left transition-all duration-300 hover:shadow-lg ${
              isPopular
                ? "shadow-md ring-2 ring-red-500"
                : "hover:border-red-500/30"
            } ${
              isPopular
                ? "bg-gradient-to-b from-red-500/[0.03] to-transparent"
                : ""
            }`;

            const iconWrapperClasses = `flex h-8 w-8 items-center justify-center rounded-full ${
              isPopular
                ? "bg-red-500/40 text-primary"
                : "bg-red-500/10 text-black"
            }`;

            const titleClasses = `text-xl font-bold ${
              isPopular ? "text-primary" : ""
            }`;

            const priceClasses = `text-2xl font-bold ${
              isPopular ? "text-primary" : "text-foreground"
            }`;

            const featureIconClasses = `flex h-5 w-5 items-center justify-center rounded-full ${
              isPopular
                ? "bg-red-500/10 text-primary"
                : "bg-red-500/5 text-secondary-foreground"
            }`;

            const featureTextClasses = isPopular
              ? "text-foreground"
              : "text-muted-foreground";

            const buttonClasses = `w-full font-medium transition-all duration-300 ${
              isPopular
                ? "bg-red-500 hover:bg-red-900/90 hover:shadow-md hover:shadow-primary/20"
                : "hover:border-red-500/30 border border-red-500/10 hover:bg-red-600/90 hover:text-primary"
            }`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex">
                <Card className={cardClasses}>
                  {isPopular && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                      <Badge className="rounded-full bg-primary px-4 py-1 text-primary-foreground shadow-sm">
                        <Sparkles className="mr-1 h-3.5 w-3.5" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className={`pb-4 ${isPopular ? "pt-8" : ""}`}>
                    <div className="flex items-center gap-2">
                      <div className={iconWrapperClasses}>
                        <plan.icon className="h-4 w-4" />
                      </div>
                      <CardTitle className={titleClasses}>
                        {plan.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="mt-3 space-y-2">
                      <p className="text-sm">{plan.description}</p>
                      <div className="pt-2">
                        {typeof plan.price[frequency as "hourly" | "daily"] ===
                        "number" ? (
                          <div className="flex items-baseline">
                            <NumberFlow
                              className={`text-3xl font-bold ${
                                isPopular ? "text-primary" : "text-foreground"
                              }`}
                              format={{
                                style: "currency",
                                currency: "NGN",
                                maximumFractionDigits: 0,
                              }}
                              value={
                                plan.price[
                                  frequency as "hourly" | "daily"
                                ] as number
                              }
                            />
                            <span className="ml-1 text-sm text-muted-foreground wi-full">
                              billed {frequency}
                            </span>
                          </div>
                        ) : (
                          <span className={priceClasses}>
                            {plan.price[frequency as "hourly" | "daily"]}
                          </span>
                        )}
                      </div>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="grid gap-3 pb-6">
                    {plan.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + index * 0.05,
                        }}
                        className="flex items-center gap-2 text-sm">
                        <div className={featureIconClasses}>
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className={featureTextClasses}>{feature}</span>
                      </motion.div>
                    ))}
                  </CardContent>

                  <CardFooter>
                    <Button
                      variant={isPopular ? "default" : "outline"}
                      className={buttonClasses}>
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>

                  {isPopular ? (
                    <>
                      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg bg-gradient-to-t from-red-500/[0.05] to-transparent" />
                      <div className="pointer-events-none absolute inset-0 rounded-lg border border-red-500/20" />
                    </>
                  ) : (
                    <div className="pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:border-red-500/10 hover:opacity-100" />
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
