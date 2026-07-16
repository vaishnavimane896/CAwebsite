import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Award,
  Briefcase,
  ShieldCheck,
  GraduationCap,
  Mail,
  Phone,
  Quote,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { leadership } from "@/data/servicesData";

function slugify(name) {
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
}

function AnimatedNumber({ value }) {
  const numeric = parseInt(String(value).replace(/\D/g, ""), 10) || 0;
  const suffix = String(value).replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame;
    const duration = 900;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [numeric]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Career Highlights" },
  { id: "testimonial", label: "Client Testimonial" },
];

export default function Profile() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const person = location.state?.person || leadership.find((p) => slugify(p.name) === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!person) {
    return (
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-24 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <p className="text-muted-foreground">We couldn't find that profile.</p>
          <Button variant="outline" className="mt-6" onClick={() => navigate("/about")}>
            <ArrowLeft size={16} className="mr-1.5" /> Back to Team
          </Button>
        </motion.div>
      </section>
    );
  }

  const otherMembers = leadership.filter((p) => p.name !== person.name).slice(0, 3);
  const tenureValue = person.tenure || "15+ Years";

  return (
    <div className="bg-background text-foreground min-h-screen">
      <section className="relative overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
          animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-12 py-16">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Button variant="outline" size="sm" onClick={() => navigate("/about")} className="mb-6 gap-1.5 font-semibold cursor-pointer">
              <ArrowLeft size={15} /> Back to Team
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 items-start">
            {/* Left card */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <Card className="bg-card border-border p-8 text-center lg:sticky lg:top-24">
                <CardContent className="p-0">
                  <div className="relative w-32 h-32 mx-auto">
                    <img src={person.image} alt={person.name} className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-xs" />
                    <span className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-secondary flex items-center justify-center border-2 border-background">
                      <ShieldCheck size={13} className="text-white" />
                    </span>
                  </div>

                  <h1 className="font-heading font-bold text-2xl text-primary mt-5">{person.name}</h1>
                  <p className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-500 mt-1.5">{person.title}</p>

                  <div className="mt-6 pt-6 border-t border-border flex items-center gap-3 justify-center text-left">
                    <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <Briefcase size={16} className="text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60">Tenure</p>
                      <p className="text-sm font-semibold text-primary"><AnimatedNumber value={tenureValue} /></p>
                    </div>
                  </div>

                  <Button onClick={() => navigate("/consultation")} className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12 gap-1.5 cursor-pointer">
                    Book Corporate Consultation <ArrowRight size={15} />
                  </Button>

                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" asChild className="flex-1 gap-1.5 text-xs cursor-pointer border-border">
                      <a href={`mailto:${person.email || "info@sterlingca.com"}`}><Mail size={13} /> Email</a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1 gap-1.5 text-xs cursor-pointer border-border">
                      <a href={`tel:${person.phone || "+15550192045"}`}><Phone size={13} /> Call</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right card */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
              <Card className="bg-card border-border p-8 min-h-[420px]">
                <CardContent className="p-0">
                  <div className="flex gap-1 bg-muted rounded-lg p-1 mb-8 w-fit">
                    {tabs.map((tab) => (
                      <Button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        variant={activeTab === tab.id ? "secondary" : "ghost"}
                        size="sm"
                        className="text-xs font-semibold rounded-md h-8 cursor-pointer"
                      >
                        {tab.label}
                      </Button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && (
                      <motion.div key="overview" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
                        <h2 className="font-heading font-bold text-xl text-primary mb-4">Executive Profile</h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {person.fullBio || `${person.bio} I specialize in ${person.expertise || "corporate advisory"}, helping clients navigate regulatory landscapes with precision.`}
                        </p>
                        <hr className="my-6 border-border" />
                        <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60 mb-3">Core Focus Fields</p>
                        <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-wrap gap-2">
                          {person.tags?.map((tag) => (
                            <motion.span key={tag} variants={itemVariants} className="inline-flex items-center gap-1.5 bg-muted border border-border rounded-lg px-3 py-1.5 text-xs font-medium text-foreground cursor-pointer">
                              <Award size={13} className="text-amber-600 dark:text-amber-400" />{tag}
                            </motion.span>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}

                    {activeTab === "highlights" && (
                      <motion.div key="highlights" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="space-y-4">
                        <h2 className="font-heading font-bold text-xl text-primary mb-5">Career Highlights</h2>
                        <div className="grid grid-cols-1 gap-4">
                          {[{ icon: Sparkles, bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "Signature Achievement", val: person.achievement || "Consistently delivered outcomes exceeding client expectations." },
                            { icon: Briefcase, bg: "bg-indigo-50 dark:bg-indigo-950/30", text: "Expertise Areas", val: person.expertise || "Tax Law, Advisory" },
                            { icon: GraduationCap, bg: "bg-amber-50 dark:bg-amber-950/30", text: "Education", val: person.education || "Chartered Accountancy (ICAI)" }
                          ].map((item, index) => (
                            <div key={index} className="flex gap-4 bg-muted/40 border border-border rounded-xl p-5">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.bg}`}><item.icon size={18} /></div>
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground/60 mb-1">{item.text}</p>
                                <p className="text-sm text-foreground font-medium leading-relaxed">{item.val}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "testimonial" && (
                      <motion.div key="testimonial" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="bg-primary text-primary-foreground rounded-xl p-8 text-center">
                        <Quote size={24} className="text-secondary mx-auto mb-4" />
                        <div className="flex justify-center gap-0.5 mb-5">
                          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="text-secondary fill-secondary" />)}
                        </div>
                        <p className="text-base text-white leading-relaxed font-heading font-medium">
                          {person.testimonial || `"${person.name.split(" ")[0]} brought a level of clarity to our financials we hadn't seen before."`}
                        </p>
                        <p className="text-sm text-primary-foreground/60 mt-6">{person.testimonialAuthor || "— Client, Fortune 500 Enterprise"}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Banner Panel */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 pb-16">
        <Card className="bg-slate-900 dark:bg-muted border border-border rounded-2xl p-8 md:p-12 lg:p-14 shadow-xl">
          <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-secondary font-medium backdrop-blur-md">
                <Sparkles size={13} /> <span>Direct Corporate Access</span>
              </div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white dark:text-foreground tracking-tight">
                Ready to strategically scale your engagement with {person.name.split(" ")[0]}?
              </h2>
              <p className="text-slate-400 dark:text-muted-foreground text-sm md:text-base max-w-xl">
                Book a priority corporate consultation directly, or initiate a secure channel if you have structured questions regarding <span className="text-white dark:text-foreground font-medium">{person.expertise?.split(",")[0]?.toLowerCase() || "your complex financials"}</span>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5 justify-start lg:justify-end">
              <Button onClick={() => navigate("/consultation")} className="bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl h-12 px-6 cursor-pointer">
                Book Consultation <ArrowRight size={15} />
              </Button>
              <Button variant="outline" asChild className="border-slate-700 bg-slate-900/40 text-slate-200 hover:text-white hover:bg-slate-800 rounded-xl h-12 px-6 cursor-pointer">
                <a href={`mailto:${person.email || "info@sterlingca.com"}`}><Mail size={15} /> Secure Message</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Team Members */}
      {otherMembers.length > 0 && (
        <section className="border-t border-border py-16 bg-card">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12">
            <h2 className="font-heading font-bold text-2xl text-primary mb-8">Other Team Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherMembers.map((p) => (
                <button key={p.name} onClick={() => navigate(`/profile/${slugify(p.name)}`, { state: { person: p } })} className="text-left bg-background border border-border rounded-xl p-5 flex items-center gap-4 hover:border-input transition-colors cursor-pointer w-full">
                  <img src={p.image} alt={p.name} className="w-14 h-14 rounded-full object-cover shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-heading font-semibold text-primary text-sm truncate">{p.name}</p>
                    <p className="text-xs text-secondary font-medium truncate">{p.title}</p>
                  </div>
                  <ArrowRight size={15} className="text-muted-foreground/40 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}