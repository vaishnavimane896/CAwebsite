import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/badge";

export default function ServicesTabs({
  serviceTabs,
  serviceDetails,
  activeTab,
  setActiveTab,
}) {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 pt-16 pb-8">
      <div>
        <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50">
          Our Capabilities
        </Badge>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900 tracking-tight">
          Expert Financial Solutions
        </h1>
        <p className="text-slate-600 mt-3 max-w-2xl leading-relaxed">
          Comprehensive advisory and audit services tailored for high-net-worth
          individuals and corporate stakeholders seeking precision and growth.
        </p>
      </div>

      {/* Modern Horizontal Scroll / Tab Navigation */}
      <div className="flex gap-3 overflow-x-auto mt-8 pb-3 border-b border-slate-200 hide-scrollbar">
        {serviceTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
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
          className="grid md:grid-cols-2 gap-6 mt-8"
        >
          {(serviceDetails[activeTab] || []).map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Card className="h-full border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                <CardHeader className="pb-3 border-b border-slate-100">
                  <CardTitle className="font-heading font-bold text-lg text-slate-900">
                    {item.title}
                  </CardTitle>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed font-normal">
                    {item.scope}
                  </p>
                </CardHeader>

                <CardContent className="pt-4 pb-6">
                  <p className="font-heading font-extrabold text-[11px] uppercase tracking-wider text-indigo-600 mb-3">
                    Key Deliverables
                  </p>
                  <ul className="space-y-2.5">
                    {item.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-indigo-600 mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Card Footer Banner */}
                <div className="flex items-center gap-2 px-6 py-3.5 bg-slate-50 border-t border-slate-100 mt-auto">
                  <Clock size={15} className="text-slate-400 shrink-0" />
                  <span className="text-xs text-slate-500">Timeline:</span>
                  <span className="text-xs font-semibold text-slate-800">{item.timeline}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}