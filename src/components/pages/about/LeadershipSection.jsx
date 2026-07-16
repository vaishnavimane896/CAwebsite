import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LeadershipSection({ leadership = [] }) {
  const navigate = useNavigate();

  const handleCardClick = (person) => {
    // Generate a clean URL slug from the name (e.g., "john-doe")
    const slug = encodeURIComponent(person.name.toLowerCase().replace(/\s+/g, "-"));
    navigate(`/profile/${slug}`, { state: { person } });
  };

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 py-20">
      <h2 className="font-heading font-bold text-3xl text-slate-900 mb-2">
        Leadership & Expertise
      </h2>
      <p className="text-slate-600 mb-10 text-sm">
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
            className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col sm:flex-row min-h-[220px]"
          >
            {/* Left Image Section */}
            <div className="sm:w-2/5 aspect-square sm:aspect-auto relative shrink-0 overflow-hidden bg-slate-100">
              <img
                src={person.image}
                alt={person.name}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Right Text Details */}
            <div className="sm:w-3/5 p-6 flex flex-col justify-between relative bg-white">
              <div className="text-slate-200 font-serif text-3xl select-none leading-none mb-1">
                ”
              </div>

              <p className="text-xs text-slate-600 italic leading-relaxed line-clamp-3 font-normal">
                "{person.bio || person.quote || "Dedicated to maintaining strategic oversight and robust financial compliance across all engagements."}"
              </p>

              <div className="mt-4">
                <h3 className="font-heading font-extrabold text-slate-900 text-base leading-tight">
                  {person.name}
                </h3>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600 mt-1">
                  {person.title}
                </p>
              </div>

              <div className="mt-4">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-semibold max-w-full">
                  <Award size={14} className="text-emerald-600 shrink-0" />
                  <span className="truncate">{person.badgeText || person.tags?.[0] || "Senior Leadership"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>  
    </section>
  );
}