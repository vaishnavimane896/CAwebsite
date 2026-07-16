import { motion } from "framer-motion";

export default function MethodologySection({ methodology }) {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16">
      <h2 className="font-heading font-bold text-2xl text-foreground mb-12">
        Process & Methodology
      </h2>

      <div className="relative">
        {/* Animated Process Line */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-border">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-full bg-indigo-600 dark:bg-indigo-400"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {methodology.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-base font-heading font-bold mb-5 ring-4 ring-background shadow-sm">
                {step.step}
              </div>
              <h3 className="font-heading font-bold text-foreground text-base">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
              
              <div className="mt-4 pt-3 border-t border-border">
                <p className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground/60">Deliverable</p>
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">{step.deliverable}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}