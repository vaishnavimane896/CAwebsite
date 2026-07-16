import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function DifferentiatorsSection({ differentiators }) {
  return (
    <section className="bg-muted/40 border-y border-border py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="max-w-2xl mb-12">
          <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30 dark:text-indigo-400">
            Why Sterling CA
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl text-foreground tracking-tight">
            Why Partner With Us
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
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
              className="h-full flex"
            >
              <Card className="w-full border border-border bg-card hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                    <item.icon size={20} strokeWidth={2.25} />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}