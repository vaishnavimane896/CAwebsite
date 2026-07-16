import { motion } from "framer-motion";
import { Download, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResourceGrid({ industries, clientResources }) {
  return (
    <div className="space-y-16 py-12">
      {/* Industry Specializations */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-8">
          Industry Specializations
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="h-full flex"
            >
              <Card className="w-full border border-border bg-card p-6 hover:border-input transition-colors flex flex-col justify-between">
                <div>
                  <ind.icon size={24} className="text-indigo-600 dark:text-indigo-400 mb-4" />
                  <h3 className="font-heading font-bold text-foreground text-base">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{ind.description}</p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground/60">Case Study</p>
                  <p className="text-xs font-semibold text-foreground mt-0.5">{ind.caseStudy}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Downloads */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
          Client Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {clientResources.map((res) => (
            <Card
              key={res.title}
              className="bg-card border border-border rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <p className="font-semibold text-foreground text-sm">{res.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{res.description}</p>
              </div>
              <Button
                variant="secondary"
                size="icon"
                aria-label={`Download ${res.title}`}
                className="shrink-0 cursor-pointer"
              >
                <Download size={18} />
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-6">
          Global Presence
        </h2>
        <Card className="border border-none bg-slate-900 dark:bg-muted text-white dark:text-foreground rounded-2xl overflow-hidden p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-xl text-white dark:text-foreground mb-2">
                Cross-Border Advisory
              </h3>
              <p className="text-sm text-slate-300 dark:text-muted-foreground leading-relaxed">
                Through our strategic network, we deliver seamless compliance across 15+ jurisdictions, ensuring international tax treaties and foreign entities are fully aligned.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6 text-sm text-indigo-400 dark:text-indigo-500 font-semibold">
                <span className="flex items-center gap-2">✓ North America</span>
                <span className="flex items-center gap-2">✓ European Union</span>
                <span className="flex items-center gap-2">✓ Middle East</span>
                <span className="flex items-center gap-2">✓ South East Asia</span>
              </div>
            </div>

            <div className="bg-white/5 dark:bg-card border border-white/10 dark:border-border rounded-xl p-6 flex flex-col items-center text-center backdrop-blur-sm shadow-inner">
              <Globe2 size={32} className="text-indigo-400 dark:text-indigo-500 mb-3" />
              <p className="font-heading font-bold text-white dark:text-foreground text-base">Global Audit Standards</p>
              <p className="text-xs text-slate-400 dark:text-muted-foreground mt-1 max-w-xs">
                IFRS-compliant reporting and SEBI guidelines for foreign direct investments.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}