import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Globe2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/Card";

const supportChannels = [
  {
    icon: Mail,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "Email Support",
    detail: "advisory@sterlingca.com",
    response: "Response within 4 business hours.",
  },
  {
    icon: Phone,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    title: "Direct Phone",
    detail: "+1 (555) 019-2045",
    response: "Mon-Fri, 9:00 AM - 7:00 PM (ET).",
  },
  {
    icon: MessageCircle,
    color: "text-amber-600",
    bg: "bg-amber-50",
    title: "Live Portal Chat",
    detail: "Available via Client Portal",
    response: "Instant reply during working hours.",
  },
  {
    icon: Globe2,
    color: "text-rose-600",
    bg: "bg-rose-50",
    title: "Regional Desks",
    detail: "Mumbai, Bangalore, Hyderabad",
    response: "Local tax desk assistance.",
  },
];

export default function SupportChannels() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">
      <div className="max-w-2xl mb-10">
        <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50">
          Reach Us
        </Badge>
        <h2 className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight">
          Support Channels
        </h2>
        <p className="text-slate-600 mt-2 text-sm">
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
          >
            <Card className="h-full border border-slate-200 bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${channel.bg} ${channel.color}`}>
                  <channel.icon size={20} strokeWidth={2.25} />
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-base">{channel.title}</h3>
                <p className="text-xs font-semibold text-indigo-600 mt-1">{channel.detail}</p>
                
                <p className="text-[11px] text-slate-500 mt-3 flex items-start gap-1.5 pt-3 border-t border-slate-100">
                  <Clock size={13} className="mt-0.5 shrink-0 text-slate-400" />
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