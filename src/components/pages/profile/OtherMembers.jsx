import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function slugify(name) {
  return encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"));
}

export default function OtherMembers({ otherMembers }) {
  const navigate = useNavigate();

  if (otherMembers.length === 0) return null;

  return (
    <section className="border-t border-border py-16 bg-card">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <h2 className="font-heading font-bold text-2xl text-primary mb-8">Other Team Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherMembers.map((p) => (
            <button 
              key={p.name} 
              onClick={() => navigate(`/profile/${slugify(p.name)}`, { state: { person: p } })} 
              className="text-left bg-background border border-border rounded-xl p-5 flex items-center gap-4 hover:border-input transition-colors cursor-pointer w-full"
            >
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
  );
}