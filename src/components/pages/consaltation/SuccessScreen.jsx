import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Briefcase, 
  Building, 
  Mail, 
  Phone, 
  FileText, 
  User,
  ArrowRight,
  Inbox,
  FileCheck2,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessScreen({ form, onReset }) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-card border border-border rounded-2xl p-8 md:p-10 text-center shadow-2xl shadow-slate-900/5"
      >
        {/* Success Icon Badge */}
        <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 border border-secondary/20">
          <ShieldCheck size={32} className="text-secondary" />
        </div>

        {/* Title & Confirmation Headline */}
        <h1 className="font-heading font-black text-3xl text-primary tracking-tight">Booking Secured</h1>
        <p className="text-muted-foreground mt-3 text-sm leading-relaxed max-w-md mx-auto">
          Thank you, <span className="text-primary font-bold">{form.name}</span>. Your slot for{" "}
          <span className="font-semibold text-primary">{form.service || "Advisory Session"}</span> has been provisionally locked on our calendars.
        </p>

        {/* Complete Session Credentials Grid */}
        <div className="my-6 bg-muted/60 border border-border text-xs text-left text-muted-foreground rounded-xl p-5 space-y-4">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Left Column: Allocation & Scope */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary/60 border-b border-border/60 pb-1">
                Allocation & Scope
              </p>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-primary/70 shrink-0" />
                <span>
                  <strong className="text-primary">Date:</strong>{" "}
                  {form.date?.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary/70 shrink-0" />
                <span>
                  <strong className="text-primary">Window Slot:</strong> {form.time || "Not specified"}
                </span>
              </div>
              {form.type && (
                <div className="flex items-center gap-2">
                  <User size={14} className="text-primary/70 shrink-0" />
                  <span>
                    <strong className="text-primary">Account Mode:</strong> {form.type.charAt(0).toUpperCase() + form.type.slice(1)}
                  </span>
                </div>
              )}
              {form.turnover && (
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-primary/70 shrink-0" />
                  <span>
                    <strong className="text-primary">Turnover Allocation:</strong> {form.turnover}
                  </span>
                </div>
              )}
            </div>

            {/* Right Column: Corporate Registry Credentials */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary/60 border-b border-border/60 pb-1">
                Corporate Authorization
              </p>
              {form.company && (
                <div className="flex items-center gap-2">
                  <Building size={14} className="text-primary/70 shrink-0" />
                  <span>
                    <strong className="text-primary">Company:</strong> {form.company}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-primary/70 shrink-0" />
                <span>
                  <strong className="text-primary">Email Link:</strong> {form.email}
                </span>
              </div>
              {form.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-primary/70 shrink-0" />
                  <span>
                    <strong className="text-primary">Secure Line:</strong> {form.phone}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Building size={14} className="text-primary/70 shrink-0" />
                <span>
                  <strong className="text-primary">Firm Contact:</strong> partner@sterlingca.com
                </span>
              </div>
            </div>
          </div>

          {/* Conditional Bottom Row: Directives / Message Notes */}
          {form.message && (
            <div className="pt-3 border-t border-border/60 space-y-1">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-primary/60">
                <FileText size={13} />
                <span>Executive Directives / Special Notes</span>
              </div>
              <p className="bg-background/50 border border-border/50 rounded-lg p-2.5 text-muted-foreground leading-relaxed italic text-[11px]">
                "{form.message}"
              </p>
            </div>
          )}
        </div>

        {/* NEW SECTION: Verification & Preparation Timeline */}
        <div className="mb-8 border border-border rounded-xl p-5 text-left bg-card">
          <p className="text-[10px] font-bold uppercase tracking-wider text-primary/60 border-b border-border pb-2 mb-4">
            Next Steps & Preparation Timeline
          </p>
          
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 flex items-center justify-center shrink-0 text-[10px] font-bold border border-emerald-200/50">
                1
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <Inbox size={13} className="text-muted-foreground" /> 
                  Calendar Invitation Issued
                </p>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  A system confirmation blueprint has been dispatched to <span className="text-primary font-medium">{form.email}</span> with structured calendar meta-tags.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400 flex items-center justify-center shrink-0 text-[10px] font-bold border border-indigo-200/50">
                2
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <FileCheck2 size={13} className="text-muted-foreground" /> 
                  Briefing Materials Request
                </p>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  Our corporate intake desk will request relevant financial or structural profiles 24 hours prior to alignment if mandatory.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 flex items-center justify-center shrink-0 text-[10px] font-bold border border-amber-200/50">
                3
              </div>
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-primary flex items-center gap-1.5">
                  <Video size={13} className="text-muted-foreground" /> 
                  Secure Interface Portal Link
                </p>
                <p className="text-[11px] text-muted-foreground leading-normal">
                  Your encrypted corporate meeting link will go live 10 minutes prior to your allocated slot ({form.time}).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Anchor */}
        <Button
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-heading font-bold uppercase tracking-wider text-xs py-6 rounded-xl transition-all shadow-lg shadow-secondary/20 cursor-pointer"
          onClick={onReset}
        >
          Return to Booking
        </Button>
      </motion.div>
    </section>
  );
}