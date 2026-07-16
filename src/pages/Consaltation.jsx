import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Compass, ClipboardCheck, Presentation, Calendar, Clock,
  ArrowLeft, ArrowRight, CheckCircle, Landmark, ReceiptText,
  Gem, FileSearch, Award, Users2, Lock, PhoneCall, FileText,
  Handshake, Star, Quote,ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Reusable Atomic Sub-Components
import SuccessScreen from "../components/pages/consaltation/SuccessScreen";
import BriefingManifest from "../components/pages/consaltation/BriefingManifest";
import {
  StepAccountMode,
  StepPrimaryScope,
  StepSchedule,
  StepIdentityCredentials
} from "../components/pages/consaltation/FormSteps";

const steps = ["Consultation Mode", "Practice Area", "Schedule", "Finalize"];

const consultationTypes = [
  { id: "new-client", icon: Compass, color: "text-indigo-600", bg: "bg-indigo-50", title: "Discovery Consultation", description: "Initial 30-min strategy alignment session." },
  { id: "existing-review", icon: ClipboardCheck, color: "text-emerald-600", bg: "bg-emerald-50", title: "Corporate Review", description: "Deep-dive analysis on active advisory matters." },
  { id: "general-inquiry", icon: Presentation, color: "text-amber-600", bg: "bg-amber-50", title: "Strategic Briefing", description: "Quick consultation regarding upcoming changes." },
];

const serviceAreas = [
  { icon: Landmark, color: "text-indigo-600", bg: "bg-indigo-50", title: "Corporate Taxation & Structure", description: "Strategic planning, domestic & international cross-border compliance." },
  { icon: ReceiptText, color: "text-amber-600", bg: "bg-amber-50", title: "GST Advisory & Auditing", description: "Periodic structure reconciliation, filings, and regulatory reviews." },
  { icon: Gem, color: "text-rose-600", bg: "bg-rose-50", title: "Wealth Engineering", description: "Capital portfolio growth optimization, asset structuring, and planning." },
  { icon: FileSearch, color: "text-emerald-600", bg: "bg-emerald-50", title: "Statutory & Private Audits", description: "Comprehensive regulatory compliance checks and independent reporting." },
];

const trustPoints = [
  { icon: Award, value: "15+", label: "Years of Practice" },
  { icon: Users2, value: "500+", label: "Corporate Clients" },
  { icon: ShieldCheck, value: "99.8%", label: "Compliance Success Rate" },
  { icon: Lock, value: "100%", label: "Confidential Engagements" },
];

const processTimeline = [
  { icon: PhoneCall, color: "text-indigo-600", bg: "bg-indigo-50", title: "Confirmation Call", description: "A member of our team reaches out within 2 business hours to confirm your slot and gather initial context." },
  { icon: FileText, color: "text-amber-600", bg: "bg-amber-50", title: "Document Preparation", description: "We send a short checklist so the assigned partner walks into your session already briefed on your numbers." },
  { icon: Handshake, color: "text-emerald-600", bg: "bg-emerald-50", title: "Strategy Session", description: "Meet your advisor — in person, via video, or by phone — for a focused, actionable session on your objectives." },
];

const testimonials = [
  { quote: "Sterling CA restructured our cross-border tax position and saved us six figures within the first year. The discovery call alone was worth it.", name: "Meera Anand", title: "CFO, Vantage Logistics" },
  { quote: "Booking was effortless and the partner who called us back had clearly read our brief. Rare to see that level of preparation.", name: "Daniel Osei", title: "Founder, Osei & Farrow" },
  { quote: "We use them for statutory audit every year now. Precise, on schedule, and they explain findings in plain language.", name: "Priya Raghunathan", title: "Director of Finance, Nimbus Health" },
];

function getUpcomingDates() {
  const dates = [];
  let d = new Date();
  while (dates.length < 6) {
    d = new Date(d.getTime() + 24 * 60 * 60 * 1000);
    if (d.getDay() !== 0 && d.getDay() !== 6) dates.push(new Date(d));
  }
  return dates;
}

const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

export default function Consaltation() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    type: consultationTypes[0].id,
    service: serviceAreas[0].title,
    turnover: "",
    date: null,
    time: null,
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const dates = getUpcomingDates();
  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));
  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = () => setSubmitted(true);

  const canContinue = () => {
    if (step === 0) return !!form.type;
    if (step === 1) return !!form.service;
    if (step === 2) return !!form.date && !!form.time;
    if (step === 3) return form.name && form.email;
    return true;
  };

  if (submitted) {
    return <SuccessScreen form={form} onReset={() => { setSubmitted(false); setStep(0); }} />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 lg:py-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side Manifest Track Widget */}
        <BriefingManifest 
          step={step} 
          steps={steps} 
          form={form} 
          consultationTypes={consultationTypes} 
        />

        {/* Right Active Form Steps Wrapper */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-10 min-h-[480px] flex flex-col justify-between">
            <CardContent className="p-0 flex-1 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1"
                >
                  {step === 0 && <StepAccountMode form={form} consultationTypes={consultationTypes} onUpdate={update} />}
                  {step === 1 && <StepPrimaryScope form={form} serviceAreas={serviceAreas} onUpdate={update} />}
                  {step === 2 && <StepSchedule form={form} dates={dates} timeSlots={timeSlots} onUpdate={update} />}
                  {step === 3 && <StepIdentityCredentials form={form} onUpdate={update} />}
                </motion.div>
              </AnimatePresence>

              {/* Multi-Step Pagination Footer Controls */}
              <div className="flex items-center justify-between border-t border-border pt-6 mt-8 w-full">
                <Button variant="ghost" onClick={back} disabled={step === 0} className="gap-2 text-xs font-bold uppercase tracking-wider h-11 px-4 rounded-xl cursor-pointer">
                  <ArrowLeft size={14} /> Back
                </Button>

                {step < steps.length - 1 ? (
                  <Button onClick={next} disabled={!canContinue()} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-xs font-bold uppercase tracking-wider h-11 px-6 rounded-xl cursor-pointer transition-all">
                    Next Component <ArrowRight size={14} />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canContinue()} className="bg-secondary hover:bg-secondary/90 text-white gap-2 text-xs font-bold uppercase tracking-wider h-11 px-6 rounded-xl transition-all shadow-md cursor-pointer">
                    Lock Session <CheckCircle size={14} />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trust points bar footer sections below */}
      <section className="border-y border-border bg-card">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {trustPoints.map((tp, i) => (
              <motion.div key={tp.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <tp.icon size={20} strokeWidth={2.25} />
                </div>
                <div>
                  <p className="font-heading font-black text-2xl text-primary leading-none tracking-tight">{tp.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{tp.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}