import { useState } from "react";
import { Gavel } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { milestones, leadership } from "@/data/servicesData";

import HeroSection from "@/components/pages/about/HeroSection";
import TimelineSection from "@/components/pages/about/TimelineSection";
import LeadershipSection from "@/components/pages/about/LeadershipSection";

export default function About() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const latestMilestone = milestones.find((m) => m.active) || milestones[0];
  const chronologicalMilestones = [...milestones].sort(
    (a, b) => parseInt(a.year) - parseInt(b.year)
  );

  return (
    <div className="bg-slate-50/50 min-h-screen relative">
      {/* SECTION 1: HERO & STATS */}
      <HeroSection latestMilestone={latestMilestone} />

      {/* SECTION 2: MILESTONES TIMELINE */}
      <TimelineSection milestones={chronologicalMilestones} />

      {/* SECTION 3: LEADERSHIP TEAM (Matches image_8c4619.jpg) */}
      <LeadershipSection
        leadership={leadership}
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
      />

      {/* SECTION 4: GOVERNANCE FRAMEWORK */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-8 pb-24">
        <Card className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-8 flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
              <Gavel size={20} className="text-slate-900" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                Governance Framework
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sterling CA Firm operates under a robust governance framework
                that ensures absolute data integrity and client confidentiality.
                Our practices are strictly aligned with the regulatory standards
                established by the Institute of Chartered Accountants of India
                (ICAI) and SEBI regulations for corporate entities.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mt-3">
                We maintain international IFRS alignment across all cross-border
                engagements, ensuring that our audit and advisory services meet
                global benchmarks for professional ethics, independence, and
                objectivity.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}