import { useState } from "react";
import { ShieldCheck, Users2, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  serviceTabs,
  serviceDetails,
  methodology,
  industries,
  clientResources,
} from "@/data/servicesData";

import ServicesTabs from "@/components/pages/services/ServicesTabs";
import MethodologySection from "@/components/pages/services/MethodologySection";
import DifferentiatorsSection from "@/components/pages/services/DifferentiatorsSection";
import ResourceGrid from "@/components/pages/services/ResourceGrid";

const differentiators = [
  { icon: ShieldCheck, color: "text-indigo-600", bg: "bg-indigo-50", title: "Regulatory Precision", description: "Cross-checked against the latest ICAI, SEBI, and IFRS standards before final delivery." },
  { icon: Users2, color: "text-emerald-600", bg: "bg-emerald-50", title: "Senior Partner Access", description: "Direct collaboration with senior partners for continuous advisory." },
  { icon: Zap, color: "text-amber-600", bg: "bg-amber-50", title: "Responsive SLA", description: "Standard response times of under 4 business hours for all inquiries." },
  { icon: Award, color: "text-rose-600", bg: "bg-rose-50", title: "15+ Years Track Record", description: "A 99.8% compliance success rate across 500+ corporate clients." },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Tabbed Services Overview */}
      <ServicesTabs
        serviceTabs={serviceTabs}
        serviceDetails={serviceDetails}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Execution Process */}
      <MethodologySection methodology={methodology} />

      {/* Why Partner With Us */}
      <DifferentiatorsSection differentiators={differentiators} />

      {/* Industry, Downloads, Global */}
      <ResourceGrid industries={industries} clientResources={clientResources} />

      {/* Bottom CTA Banner */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 pb-20">
        <Card className="bg-slate-900 dark:bg-muted border border-border rounded-2xl p-10 md:p-14 text-center shadow-xl">
          <CardContent className="p-0 flex flex-col items-center">
            <h2 className="font-heading font-extrabold text-3xl text-white dark:text-foreground tracking-tight">
              Not sure what you need?
            </h2>
            <p className="text-slate-400 dark:text-muted-foreground mt-3 max-w-xl text-sm md:text-base">
              Let's discuss your specific financial landscape and determine the best path forward.
            </p>
            <Button asChild size="lg" className="mt-8 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-6 rounded-xl shadow-md cursor-pointer transition-all">
              <a href="tel:+15551234567">
                Book a 15-min Discovery Call
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}