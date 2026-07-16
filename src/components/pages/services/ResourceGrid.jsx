import { motion } from "framer-motion";
import { Download, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

export default function ResourceGrid({ industries, clientResources }) {
  return (
    <div className="space-y-16 py-12">
      {/* Industry Specializations */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12">
        <h2 className="font-heading font-bold text-2xl text-slate-900 mb-8">
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
            >
              <Card className="h-full border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors">
                <ind.icon size={24} className="text-indigo-600 mb-4" />
                <h3 className="font-heading font-bold text-slate-900 text-base">{ind.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{ind.description}</p>
                
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-[10px] uppercase font-bold text-slate-400">Case Study</p>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">{ind.caseStudy}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Downloads */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12">
        <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">
          Client Resources
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {clientResources.map((res) => (
            <div
              key={res.title}
              className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <p className="font-semibold text-slate-900 text-sm">{res.title}</p>
                <p className="text-xs text-slate-500 mt-1">{res.description}</p>
              </div>
              <button
                aria-label={`Download ${res.title}`}
                className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
              >
                <Download size={18} className="text-slate-700" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12">
        <h2 className="font-heading font-bold text-2xl text-slate-900 mb-6">
          Global Presence
        </h2>
        <Card className="border border-slate-200 bg-slate-900 text-white rounded-2xl overflow-hidden p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">
                Cross-Border Advisory
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Through our strategic network, we deliver seamless compliance across 15+ jurisdictions, ensuring international tax treaties and foreign entities are fully aligned.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6 text-sm text-indigo-400 font-semibold">
                <span className="flex items-center gap-2">✓ North America</span>
                <span className="flex items-center gap-2">✓ European Union</span>
                <span className="flex items-center gap-2">✓ Middle East</span>
                <span className="flex items-center gap-2">✓ South East Asia</span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center backdrop-blur-sm">
              <Globe2 size={32} className="text-indigo-400 mb-3" />
              <p className="font-heading font-bold text-white text-base">Global Audit Standards</p>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                IFRS-compliant reporting and SEBI guidelines for foreign direct investments.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}