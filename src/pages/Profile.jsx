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
import { leadership } from "@/data/servicesData";

function slugify(name) {
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
}

// Animates a number counting up from 0 on mount
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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

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

  const person =
    location.state?.person || leadership.find((p) => slugify(p.name) === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!person) {
    return (
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-24 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
          <p className="text-slate-600">We couldn't find that profile.</p>
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
    <>
      <section className="relative overflow-hidden">
        {/* Soft ambient background blob */}
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
          animate={{ x: [0, 25, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative max-w-[1280px] mx-auto px-4 md:px-12 py-16">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/about")}
              className="mb-6 gap-1.5 font-semibold"
            >
              <ArrowLeft size={15} /> Back to Team
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-6 items-start">
            {/* Left card — sticky on scroll */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white border border-border rounded-2xl p-8 text-center lg:sticky lg:top-24"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
                className="relative w-32 h-32 mx-auto"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-sm"
                />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                  className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-secondary flex items-center justify-center border-2 border-white"
                >
                  <ShieldCheck size={13} className="text-white" />
                </motion.span>
              </motion.div>

              <h1 className="font-heading font-bold text-2xl text-primary mt-5">{person.name}</h1>
              <p className="text-xs font-bold uppercase tracking-wide text-amber-600 mt-1.5">
                {person.title}
              </p>

              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3 justify-center text-left">
                <div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-slate-500" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">Tenure</p>
                  <p className="text-sm font-semibold text-primary">
                    <AnimatedNumber value={tenureValue} />
                  </p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => navigate("/consultation")}
                  className="w-full mt-6 bg-primary hover:bg-slate-900 text-white font-semibold rounded-xl h-12 gap-1.5"
                >
                  Book Corporate Consultation <ArrowRight size={15} />
                </Button>
              </motion.div>

              <div className="flex gap-2 mt-3">
                <Button variant="outline" asChild className="flex-1 gap-1.5 text-xs">
                  <a href={`mailto:${person.email || "info@sterlingca.com"}`}>
                    <Mail size={13} /> Email
                  </a>
                </Button>
                <Button variant="outline" asChild className="flex-1 gap-1.5 text-xs">
                  <a href={`tel:${person.phone || "+15550192045"}`}>
                    <Phone size={13} /> Call
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right card — tabbed content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="bg-white border border-border rounded-2xl p-8 min-h-[420px]"
            >
              {/* Tabs */}
              <div className="flex gap-1 bg-surface rounded-lg p-1 mb-8 w-fit">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative px-4 py-2 text-xs font-semibold rounded-md transition-colors"
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        layoutId="profileTabBg"
                        className="absolute inset-0 bg-white rounded-md shadow-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${activeTab === tab.id ? "text-primary" : "text-slate-500"}`}>
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h2 className="font-heading font-bold text-xl text-primary mb-4">Executive Profile</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {person.fullBio ||
                        `${person.bio} I specialize in ${person.expertise || "corporate advisory"}, helping clients navigate regulatory landscapes with precision. My approach combines rigorous financial analysis with innovative solutions to optimize business outcomes.`}
                    </p>

                    <hr className="my-6 border-border" />

                    <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400 mb-3">
                      Core Focus Fields
                    </p>
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="flex flex-wrap gap-2"
                    >
                      {person.tags?.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={itemVariants}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="inline-flex items-center gap-1.5 bg-surface border border-border rounded-lg px-3 py-1.5 text-xs font-medium text-primary cursor-default"
                        >
                          <Award size={13} className="text-amber-600" />
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "highlights" && (
                  <motion.div
                    key="highlights"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h2 className="font-heading font-bold text-xl text-primary mb-5">Career Highlights</h2>
                    <motion.div variants={containerVariants} initial="hidden" animate="show" className="space-y-4">
                      <motion.div
                        variants={itemVariants}
                        whileHover={{ x: 3 }}
                        className="flex gap-4 bg-surface border border-border rounded-xl p-5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <Sparkles size={18} strokeWidth={2.25} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">
                            Signature Achievement
                          </p>
                          <p className="text-sm text-primary font-medium leading-relaxed">
                            {person.achievement || "Consistently delivered outcomes exceeding client expectations."}
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        whileHover={{ x: 3 }}
                        className="flex gap-4 bg-surface border border-border rounded-xl p-5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                          <Briefcase size={18} strokeWidth={2.25} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">
                            Expertise Areas
                          </p>
                          <p className="text-sm text-primary font-medium leading-relaxed">
                            {person.expertise || "Tax Law, Advisory"}
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        variants={itemVariants}
                        whileHover={{ x: 3 }}
                        className="flex gap-4 bg-surface border border-border rounded-xl p-5"
                      >
                        <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                          <GraduationCap size={18} strokeWidth={2.25} />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-1">
                            Education
                          </p>
                          <p className="text-sm text-primary font-medium leading-relaxed">
                            {person.education || "Chartered Accountancy (ICAI)"}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "testimonial" && (
                  <motion.div
                    key="testimonial"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-primary rounded-xl p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Quote size={24} className="text-secondary mx-auto mb-4" />
                    </motion.div>
                    <div className="flex justify-center gap-0.5 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.15 + i * 0.06 }}
                        >
                          <Star size={14} className="text-secondary fill-secondary" />
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-base text-white leading-relaxed font-heading font-medium">
                      {person.testimonial ||
                        `"${person.name.split(" ")[0]} brought a level of clarity to our financials we hadn't seen before. The engagement paid for itself within the first quarter."`}
                    </p>
                    <p className="text-sm text-slate-400 mt-6">
                      {person.testimonialAuthor || "— Client, Fortune 500 Enterprise"}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= Ready to Work With [Name] CTA ================= */}
<section className="max-w-[1280px] mx-auto px-4 md:px-12 pb-16">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative overflow-hidden bg-[#0B132B] border border-slate-800 rounded-2xl p-8 md:p-12 lg:p-14 shadow-xl"
  >
    {/* Decorative background grid pattern for depth */}
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
    
    {/* Soft deep midnight ambient accent glow */}
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/20 blur-[100px] pointer-events-none" />

    <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
      
      {/* Left Column: Context & Typography */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-secondary font-medium backdrop-blur-sm">
          <Sparkles size={13} className="animate-pulse" />
          <span>Direct Corporate Access</span>
        </div>
        
        <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
          Ready to strategically scale <br className="hidden sm:inline" /> 
          your engagement with {person.name.split(" ")[0]}?
        </h2>
        
        <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
          Book a priority corporate consultation directly, or initiate a secure channel 
          if you have structured questions regarding{" "}
          <span className="text-white font-medium">
            {person.expertise?.split(",")[0]?.toLowerCase() || "your complex financials"}
          </span>.
        </p>
      </div>

      {/* Right Column: Clear, High-Contrast Action Terminal */}
      <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5 justify-start lg:justify-end">
        <motion.div className="w-full sm:w-auto xl:w-1/2" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Button
            onClick={() => navigate("/consultation")}
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold rounded-xl h-12 px-6 shadow-md shadow-secondary/10 gap-2 transition-all"
          >
            Book Consultation <ArrowRight size={15} />
          </Button>
        </motion.div>
        
        <motion.div className="w-full sm:w-auto xl:w-1/2" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          <Button
            variant="outline"
            asChild
            className="w-full border-slate-700 bg-slate-900/40 text-slate-200 hover:text-white hover:bg-slate-800 hover:border-slate-600 rounded-xl h-12 px-6 gap-2 transition-all backdrop-blur-sm"
          >
            <a href={`mailto:${person.email || "info@sterlingca.com"}`}>
              <Mail size={15} className="text-slate-400" /> Secure Message
            </a>
          </Button>
        </motion.div>
      </div>

    </div>
  </motion.div>
</section>

      {/* ================= Other Team Members ================= */}
      {otherMembers.length > 0 && (
        <section className="bg-white border-t border-border py-16">
          <div className="max-w-[1280px] mx-auto px-4 md:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-bold text-2xl text-primary mb-8"
            >
              Other Team Members
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherMembers.map((p) => (
                <motion.button
                  key={p.name}
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: "var(--color-secondary)" }}
                  onClick={() =>
                    navigate(`/profile/${slugify(p.name)}`, { state: { person: p } })
                  }
                  className="text-left bg-surface border border-border rounded-xl p-5 flex items-center gap-4 transition-colors"
                >
                  <img src={p.image} alt={p.name} className="w-14 h-14 rounded-full object-cover shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="font-heading font-semibold text-primary text-sm truncate">{p.name}</p>
                    <p className="text-xs text-secondary font-medium truncate">{p.title}</p>
                  </div>
                  <ArrowRight size={15} className="text-slate-300 shrink-0" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}