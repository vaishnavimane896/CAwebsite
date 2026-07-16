import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

export default function LeadershipSection({ leadership = [] }) {
  const navigate = useNavigate();

  const handleCardClick = (person) => {
    const slug = encodeURIComponent(person.name.toLowerCase().replace(/\s+/g, "-"));
    navigate(`/profile/${slug}`, { state: { person } });
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">
      <h2 className="font-heading font-bold text-3xl text-foreground mb-2">
        Leadership & Expertise
      </h2>
      <p className="text-muted-foreground mb-10 text-sm">
        Our team of senior partners brings decades of specialized financial experience. Click any card to view detailed profiles.
      </p>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {leadership.map((person, i) => (
          <motion.div
            key={person.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            onClick={() => handleCardClick(person)}
            className="h-full flex"
          >
            <Card className="group overflow-hidden border border-border bg-card shadow-sm hover:shadow-md hover:border-input transition-all duration-300 cursor-pointer flex flex-col sm:flex-row min-h-[220px] w-full">
              {/* Left Image Section */}
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative shrink-0 overflow-hidden bg-muted">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full  object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Right Text Details */}
              <div className="sm:w-3/5 p-6 flex flex-col justify-between relative bg-card">
                <div className="text-border font-serif text-3xl select-none leading-none mb-1">
                  ”
                </div>

                <p className="text-xs text-muted-foreground italic leading-relaxed line-clamp-3 font-normal">
                  "{person.bio || person.quote || "Dedicated to maintaining strategic oversight and robust financial compliance across all engagements."}"
                </p>

                <div className="mt-4">
                  <h3 className="font-heading font-extrabold text-foreground text-base leading-tight">
                    {person.name}
                  </h3>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-500 mt-1">
                    {person.title}
                  </p>
                </div>

                <div className="mt-4">
                  <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-100 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-900 px-3 py-1.5 rounded-lg text-xs font-semibold max-w-full">
                    <Award size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{person.badgeText || person.tags?.[0] || "Senior Leadership"}</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>  
    </section>
  );
}