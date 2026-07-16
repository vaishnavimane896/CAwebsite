import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, TrendingUp, Building2, Landmark, Factory, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

const trustIcons = [Building2, Landmark, Factory, Briefcase];
const bars = [40, 55, 48, 70, 85, 100];

export default function Hero() {
  return (
    <section className="bg-background relative overflow-hidden border-b border-border">
      {/* Subtle radial background decorative glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Heading Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 px-3 py-1.5 rounded-full">
              <BadgeCheck size={14} className="text-secondary" /> ICAI Registered Firm
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-primary">
            Precision Accounting. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-indigo-500">
              Strategic Growth.
            </span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl font-normal">
            Risk-mitigated financial engineering for enterprise scales. Expert financial advisory, 
            statutory auditing, and regulatory compliance management for modern businesses and high-net-worth individuals.
          </p>

          <div className="pt-2 flex flex-wrap gap-3.5">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl px-6 py-6 text-sm shadow-md shadow-secondary/10 transition-all cursor-pointer">
              <Link to="/consaltation">Book Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-input text-foreground font-semibold rounded-xl px-6 py-6 text-sm bg-background hover:bg-accent transition-all cursor-pointer">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>

          {/* Social Proof Section */}
          <div className="pt-8 border-t border-border">
            <p className="text-[10px] font-extrabold text-muted-foreground tracking-wider uppercase mb-4">
              Trusted Across Industrial Verticals
            </p>
            <div className="flex flex-wrap gap-8 text-muted-foreground/80">
              {trustIcons.map((Icon, i) => (
                <div key={i} className="hover:text-primary transition-colors duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Financial Dashboard Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 h-[340px] flex"
        >
          <Card className="w-full flex flex-col justify-between p-6 shadow-md shadow-slate-100/60 bg-card">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-extrabold tracking-wider text-muted-foreground uppercase">
                  Performance Analytics
                </span>
                <CardTitle className="text-sm font-bold text-foreground">Q3 Enterprise Metrics</CardTitle>
              </div>
              <div className="p-2 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-lg dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900">
                <TrendingUp size={16} />
              </div>
            </div>

            {/* Interactive Animated Bar Chart Container */}
            <CardContent className="p-0 flex items-end gap-3.5 h-48 pt-4 border-b border-border">
              {bars.map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center h-full justify-end group">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 + i * 0.06 }}
                    className={`w-full rounded-t-lg transition-all relative ${
                      i === bars.length - 1 
                        ? "bg-primary shadow-sm" 
                        : "bg-secondary/85 group-hover:bg-secondary"
                  }`}
                  >
                    {/* Floating tooltip data point on hover */}
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] font-bold px-1.5 py-0.5 rounded border border-border transition-opacity pointer-events-none shadow-sm z-20">
                      {h}%
                    </div>
                  </motion.div>
                </div>
              ))}
            </CardContent>
            
            <div className="flex justify-between items-center text-[10px] text-muted-foreground font-bold uppercase tracking-wider pt-2">
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span className="text-primary font-extrabold">Current</span>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}