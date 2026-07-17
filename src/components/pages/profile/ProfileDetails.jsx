import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Sparkles, Briefcase, GraduationCap, Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const itemVariants = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "highlights", label: "Career Highlights" },
  { id: "testimonial", label: "Client Testimonial" },
];

export default function ProfileDetails({ person }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Card className="bg-card border-border p-8 min-h-[420px]">
      <CardContent className="p-0">
        {/* Tab selection buttons */}
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
                {[
                  { icon: Sparkles, bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "Signature Achievement", val: person.achievement || "Consistently delivered outcomes exceeding client expectations." },
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
  );
}