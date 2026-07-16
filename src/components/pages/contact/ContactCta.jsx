import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactCta() {
  return (
    <section className="bg-slate-900 dark:bg-card dark:border-b py-20 border-t border-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-[700px] mx-auto px-4 text-center"
      >
        <h2 className="font-heading font-extrabold text-3xl text-white dark:text-foreground tracking-tight">
          Still deciding? Let's talk it through.
        </h2>
        <p className="mt-3 text-slate-400 dark:text-muted-foreground text-sm md:text-base leading-relaxed">
          Send us a note and a senior partner will reach out directly — no sales queues or scripts.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <Input
            placeholder="Enter your email address"
            className="bg-white/10 dark:bg-muted/5 border-white/20 dark:border-input text-white dark:text-foreground placeholder:text-slate-400 h-11"
          />
          <Button className="bg-indigo-600 hover:bg-indigo-500 text-white h-11 shrink-0 gap-2 cursor-pointer font-semibold px-6">
            <Send size={15} /> Send Note
          </Button>
        </div>
      </motion.div>
    </section>
  );
}