import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { complianceEntities } from "@/data/servicesData";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TaxReadinessWidget() {
  const [activeId, setActiveId] = useState(complianceEntities[0].id);
  const active = complianceEntities.find((e) => e.id === activeId);

  return (
    <Card className="bg-card border-border p-6 shadow-sm">
      <CardHeader className="p-0 mb-5">
        <CardTitle className="font-heading font-semibold text-lg text-primary">
          Compliance Readiness Engine
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground mt-1">
          Select your entity profile to generate an initial compliance overview for FY 23-24.
        </CardDescription>
      </CardHeader>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-5 hide-scrollbar">
        {complianceEntities.map((entity) => (
          <Button
            key={entity.id}
            variant={activeId === entity.id ? "default" : "secondary"}
            size="sm"
            onClick={() => setActiveId(entity.id)}
            className="whitespace-nowrap text-xs font-medium cursor-pointer"
          >
            {entity.label}
          </Button>
        ))}
      </div>

      <CardContent className="p-0">
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-4 divide-y divide-border"
          >
            {active.checklist.map((item, i) => (
              <li key={i} className={`flex items-start gap-3 ${i > 0 ? "pt-4" : ""}`}>
                {item.status === "done" ? (
                  <CheckCircle2 size={18} className="text-secondary mt-0.5 shrink-0" />
                ) : (
                  <Clock size={18} className="text-muted-foreground mt-0.5 shrink-0" />
                )}
                <div>
                  <p className="text-sm font-medium text-primary">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.note}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </CardContent>

      <div className="mt-6">
        <Button asChild variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
          <a href="/services">
            View Full Checklist <ArrowRight size={14} />
          </a>
        </Button>
      </div>
    </Card>
  );
}