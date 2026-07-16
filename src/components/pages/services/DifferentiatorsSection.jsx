import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/Card";

export default function DifferentiatorsSection({ differentiators }) {
  return (
    <section className="bg-slate-100/70 border-y border-slate-200 py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="max-w-2xl mb-12">
          <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50">
            Why Sterling CA
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight">
            Why Partner With Us
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base">
            What changes when you work with us instead of a generic accounting shop.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full border border-slate-200 bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                    <item.icon size={20} strokeWidth={2.25} />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}