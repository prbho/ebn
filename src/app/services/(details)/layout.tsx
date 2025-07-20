// components/ServiceWrapper.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import ServiceHero from "@/components/ServiceHero";
import { serviceMeta } from "@/lib";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function ServiceWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const key = pathname.split("/").pop() ?? "";
  const meta = serviceMeta[key as keyof typeof serviceMeta];

  if (!meta) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-bold">No service found.</p>

        <Button
          onClick={() => router.push("/services")}
          className="group"
          variant="ghost">
          <ArrowLeftIcon
            className="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
          Back to Services
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <ServiceHero
        title={meta.title}
        subtitle={meta.subtitle}
        image={meta.image}
      />
      <div className="container mx-auto px-4 py-10">
        <Button
          onClick={() => router.push("/services")}
          className="group"
          variant="ghost">
          <ArrowLeftIcon
            className="-ms-1 opacity-60 transition-transform group-hover:-translate-x-0.5"
            size={16}
            aria-hidden="true"
          />
          Back to Services
        </Button>
        {children}
      </div>
    </div>
  );
}
