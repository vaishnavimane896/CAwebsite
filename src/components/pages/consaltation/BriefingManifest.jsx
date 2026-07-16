import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function BriefingManifest({ step, steps, form, consultationTypes }) {
  return (
    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
      <div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-secondary px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/20 inline-block mb-3">
          Corporate Intake
        </span>
        <h1 className="font-heading font-black text-3xl lg:text-4xl text-primary tracking-tight leading-none">
          Schedule Briefing
        </h1>
        <p className="text-muted-foreground text-xs mt-3 leading-relaxed">
          Secure priority access to our corporate advisors. Lock in your session through our private scheduling ledger.
        </p>
      </div>

      <Card className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4">
        <h3 className="font-heading font-bold text-xs text-primary uppercase tracking-wider pb-3 border-b border-border">
          Session Manifest
        </h3>
        <div className="space-y-3 text-xs">
          <div className="flex items-start justify-between">
            <span className="text-muted-foreground/60">Engagement</span>
            <span className="font-semibold text-primary text-right max-w-[180px] truncate">
              {consultationTypes.find(t => t.id === form.type)?.title || "Not selected"}
            </span>
          </div>
          <div className="flex items-start justify-between">
            <span className="text-muted-foreground/60">Practice Area</span>
            <span className="font-semibold text-primary text-right max-w-[180px] truncate">{form.service}</span>
          </div>
          {form.date && (
            <div className="flex items-start justify-between">
              <span className="text-muted-foreground/60">Target Date</span>
              <span className="font-semibold text-secondary">
                {form.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
              </span>
            </div>
          )}
          {form.time && (
            <div className="flex items-start justify-between">
              <span className="text-muted-foreground/60">Target Time</span>
              <span className="font-semibold text-secondary">{form.time}</span>
            </div>
          )}
        </div>
      </Card>

      <div className="space-y-2">
        <div className="flex justify-between text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest px-1">
          <span>Progress</span>
          <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
        </div>
        <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </div>
  );
}