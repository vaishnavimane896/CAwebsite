import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/Card";
import { contactServiceAreas } from "@/data/servicesData";

const steps = ["Area of Interest", "Financial Scale", "Date/Time", "Details"];

export default function ConsultationForm() {
  const [selected, setSelected] = useState(contactServiceAreas[0].title);

  return (
    <div className="space-y-6">
      {/* Modern Stepper Indicator */}
      <div className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i === 0
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 border border-slate-200 text-slate-400"
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-xs font-semibold hidden sm:inline ${
                  i === 0 ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-1 h-px bg-slate-200 mx-3 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* Main Interactive Form Card */}
      <Card className="border border-slate-200 bg-white shadow-sm">
        <CardContent className="p-8">
          <h2 className="font-heading font-bold text-xl text-slate-900 mb-6">
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
                      ? "border-indigo-600 bg-indigo-50/50 ring-2 ring-indigo-600/20 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  <area.icon
                    size={22}
                    className={isSelected ? "text-indigo-600 mb-2" : "text-slate-400 mb-2"}
                  />
                  <p className="text-sm font-bold text-slate-900">{area.title}</p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{area.description}</p>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-3.5 flex items-center gap-2 text-xs text-slate-700 font-medium">
            <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
            Selected Area: <span className="font-bold text-slate-900">{selected}</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                Annual Turnover
              </label>
              <Input placeholder="e.g. $5M+" className="bg-slate-50/50" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 block">
                Current Auditor / Firm
              </label>
              <Input placeholder="Firm Name" className="bg-slate-50/50" />
            </div>
          </div>

          <Button className="mt-8 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-5 rounded-xl cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2">
            Continue to Schedule <ChevronRight size={16} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}