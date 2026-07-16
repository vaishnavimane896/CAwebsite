import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { contactServiceAreas } from "@/data/servicesData";

const steps = ["Area of Interest", "Financial Scale", "Date/Time", "Details"];

export default function ConsultationForm() {
  const [selected, setSelected] = useState(contactServiceAreas[0].title);

  return (
    <div className="space-y-6">
      {/* Modern Stepper Indicator */}
      <div className="flex items-center justify-between bg-card border border-border rounded-xl p-4 shadow-sm">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted border border-border text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-xs font-semibold hidden sm:inline ${
                  i === 0 ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-px bg-border mx-3 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Main Interactive Form Card */}
      <Card className="border border-border bg-card shadow-sm">
        <CardContent className="p-8">
          <h2 className="font-heading font-bold text-xl text-foreground mb-6">
            1. Select Area of Interest
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactServiceAreas.map((area) => {
              const isSelected = selected === area.title;
              return (
                <motion.button
                  key={area.title}
                  onClick={() => setSelected(area.title)}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left border rounded-xl p-5 transition-all cursor-pointer ${
                    isSelected
                      ? "border-indigo-600 bg-indigo-50/30 dark:bg-indigo-950/20 ring-2 ring-indigo-600/20 shadow-sm"
                      : "border-border hover:border-input bg-card text-card-foreground"
                  }`}
                >
                  <area.icon
                    size={22}
                    className={isSelected ? "text-indigo-600 dark:text-indigo-400 mb-2" : "text-muted-foreground mb-2"}
                  />
                  <p className="text-sm font-bold text-foreground">{area.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{area.description}</p>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 bg-muted/50 border border-border rounded-lg p-3.5 flex items-center gap-2 text-xs text-muted-foreground font-medium">
            <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
            Selected Area: <span className="font-bold text-foreground">{selected}</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
                Annual Turnover
              </label>
              <Input placeholder="e.g. $5M+" className="bg-muted/30 border-input" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 block">
                Current Auditor / Firm
              </label>
              <Input placeholder="Firm Name" className="bg-muted/30 border-input" />
            </div>
          </div>

          <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-5 rounded-xl cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2">
            Continue to Schedule <ChevronRight size={16} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}