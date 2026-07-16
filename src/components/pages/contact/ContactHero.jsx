import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactHero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-background overflow-hidden py-24 md:py-32 border-b border-border">
      {/* Decorative Subtle Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-muted border border-border text-amber-600 dark:text-amber-500 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Global Advisory Access
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight"
            >
              Let’s Architect Your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-indigo-500 dark:from-amber-400 dark:to-indigo-400">
                Financial Strategy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Connect with our senior partners for comprehensive tax structuring, corporate audits, and high-scale corporate advisory. Your strategic breakthrough starts with a single conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary text-primary-foreground font-semibold py-6 px-6 rounded-xl hover:bg-primary/90 transition-all shadow-md group text-sm cursor-pointer"
              >
                Initiate Consultation
                <ArrowRight size={16} className="text-primary-foreground/80 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border text-foreground font-semibold py-6 px-6 rounded-xl transition-all text-sm"
              >
                <a href="mailto:advisory@caweb.com">
                  <Mail size={16} className="text-amber-500" />
                  advisory@caweb.com
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Quick Info Cards Container */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card border-border p-5 rounded-2xl flex items-start gap-4 hover:border-input transition-colors shadow-sm">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">Response Guarantee</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">All corporate inquiries reviewed by senior partners within 24 business hours.</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-card border-border p-5 rounded-2xl flex items-start gap-4 hover:border-input transition-colors shadow-sm">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1">Direct Advisory Line</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">+91 22 4567 8901</p>
                  <p className="text-[10px] text-muted-foreground/60 mt-1">Mon - Fri: 9:30 AM - 6:30 PM</p>
                </div>
              </Card>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}