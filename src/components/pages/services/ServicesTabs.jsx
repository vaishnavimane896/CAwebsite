import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServicesTabs({
  serviceTabs,
  serviceDetails,
  activeTab,
  setActiveTab,
}) {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-16 pb-8">
      <div>
        <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30 dark:text-indigo-400">
          Our Capabilities
        </Badge>
        <h1 className="font-heading font-extrabold text-4xl text-foreground tracking-tight">
          Expert Financial Solutions
        </h1>
        <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          Comprehensive advisory and audit services tailored for high-net-worth
          individuals and corporate stakeholders seeking precision and growth.
        </p>
      </div>

      {/* Modern Horizontal Scroll / Tab Navigation */}
      <div className="flex gap-3 overflow-x-auto mt-8 pb-3 border-b border-border hide-scrollbar">
        {serviceTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={isActive ? "default" : "ghost"}
              size="sm"
              className="rounded-lg text-sm font-semibold shrink-0 cursor-pointer"
            >
              {tab.label}
            </Button>
          );
        })}
      </div>

      {/* Grid of Service Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          {(serviceDetails[activeTab] || []).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="h-full flex"
            >
              <Card className="w-full border border-border bg-card shadow-sm hover:shadow-md hover:border-input transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <div>
                  <CardHeader className="pb-3 border-b border-border">
                    <CardTitle className="font-heading font-bold text-lg text-foreground">
                      {item.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed font-normal">
                      {item.scope}
                    </p>
                  </CardHeader>

                  <CardContent className="pt-4 pb-6">
                    <p className="font-heading font-extrabold text-[11px] uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2.5">
                      {item.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>

                {/* Card Footer Banner */}
                <div className="flex items-center gap-2 px-6 py-3.5 bg-muted/50 border-t border-border mt-auto">
                  <Clock size={15} className="text-muted-foreground/60 shrink-0" />
                  <span className="text-xs text-muted-foreground">Timeline:</span>
                  <span className="text-xs font-semibold text-foreground">{item.timeline}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}