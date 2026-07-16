import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Globe2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const supportChannels = [
  {
    icon: Mail,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    title: "Email Support",
    detail: "advisory@sterlingca.com",
    response: "Response within 4 business hours.",
  },
  {
    icon: Phone,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    title: "Direct Phone",
    detail: "+1 (555) 019-2045",
    response: "Mon-Fri, 9:00 AM - 7:00 PM (ET).",
  },
  {
    icon: MessageCircle,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    title: "Live Portal Chat",
    detail: "Available via Client Portal",
    response: "Instant reply during working hours.",
  },
  {
    icon: Globe2,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    title: "Regional Desks",
    detail: "Mumbai, Bangalore, Hyderabad",
    response: "Local tax desk assistance.",
  },
];

export default function SupportChannels() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">
      <div className="max-w-2xl mb-10">
        <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30 dark:text-indigo-400">
          Reach Us
        </Badge>
        <h2 className="font-heading font-extrabold text-3xl text-foreground tracking-tight">
          Support Channels
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Select your preferred contact channel for advisory assistance.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {supportChannels.map((channel, i) => (
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="h-full flex"
          >
            <Card className="w-full border border-border bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${channel.bg} ${channel.color}`}>
                    <channel.icon size={20} strokeWidth={2.25} />
                  </div>
                  <h3 className="font-heading font-bold text-foreground text-base">{channel.title}</h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-1">{channel.detail}</p>
                </div>
                
                <p className="text-[11px] text-muted-foreground mt-3 flex items-start gap-1.5 pt-3 border-t border-border">
                  <Clock size={13} className="mt-0.5 shrink-0 text-muted-foreground/60" />
                  <span>{channel.response}</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}