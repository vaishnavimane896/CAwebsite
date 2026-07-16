import { motion } from "framer-motion";
import { Award, Users2, ShieldCheck, Globe2, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "./AnimatedCounter";

const quickStats = [
  { icon: Award, value: 25, suffix: "+", decimals: 0, label: "Years Experience" },
  { icon: Users2, value: 500, suffix: "+", decimals: 0, label: "Corporate Clients" },
  { icon: ShieldCheck, value: 99.8, suffix: "%", decimals: 1, label: "Compliance Rate" },
  { icon: Globe2, value: 15, suffix: "+", decimals: 0, label: "Jurisdictions Served" },
];

export default function HeroSection({ latestMilestone }) {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="h-full flex"
      >
        <Card className="w-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow bg-card">
          <CardContent className="p-8 flex flex-col justify-between h-full w-full">
            <div>
              <Badge variant="outline" className="mb-4 text-xs font-semibold uppercase tracking-wider border-border text-foreground">
                Who We Are
              </Badge>
              <h1 className="font-heading font-bold text-4xl text-primary leading-tight tracking-tight">
                Precision, Integrity, Growth.
              </h1>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                At Sterling CA Firm, we navigate complex financial landscapes with
                uncompromising precision. Our mission is to provide high-net-worth
                individuals and corporate entities with strategic foresight,
                robust compliance, and actionable advisory that ensures long-term
                stability and sustainable growth.
              </p>
            </div>

            {/* Milestone Banner */}
            {latestMilestone && (
              <div className="mt-8 pt-6 border-t border-border w-full">
                <div className="flex items-start gap-4 bg-secondary/5 border border-secondary/20 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary uppercase tracking-wide">
                      Latest Milestone · {latestMilestone.year}
                    </p>
                    <p className="text-sm text-primary mt-1 leading-relaxed">
                      {latestMilestone.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Right Stats Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="h-full flex"
      >
        <Card className="bg-primary text-primary-foreground w-full border-none shadow-lg">
          <CardContent className="p-8 flex flex-col justify-center h-full">
            <h2 className="font-heading font-semibold text-lg text-primary-foreground mb-6">
              Sterling CA at a Glance
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <stat.icon size={20} className="text-secondary mb-3" />
                  <p className="font-heading font-bold text-2xl text-primary-foreground leading-none">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="text-xs text-primary-foreground/70 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}