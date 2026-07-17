import { Briefcase, ShieldCheck, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Local helper component for counting up numbers cleanly
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

export default function ProfileSidebar({ person }) {
  const navigate = useNavigate();
  const tenureValue = person.tenure || "15+ Years";

  return (
    <Card className="bg-card border-border p-8 text-center lg:sticky lg:top-24">
      <CardContent className="p-0">
        <div className="relative w-32 h-32 mx-auto">
          <img 
            src={person.image} 
            alt={person.name} 
            className="w-32 h-32 rounded-full object-cover border-4 border-background shadow-xs" 
          />
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
            <p className="text-sm font-semibold text-primary">
              <AnimatedNumber value={tenureValue} />
            </p>
          </div>
        </div>

        <Button 
          onClick={() => navigate("/consultation")} 
          className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl h-12 gap-1.5 cursor-pointer"
        >
          Book Corporate Consultation <ArrowRight size={15} />
        </Button>

        <div className="flex gap-2 mt-3">
          <Button variant="outline" asChild className="flex-1 gap-1.5 text-xs cursor-pointer border-border">
            <a href={`mailto:${person.email || "info@sterlingca.com"}`}>
              <Mail size={13} /> Email
            </a>
          </Button>
          <Button variant="outline" asChild className="flex-1 gap-1.5 text-xs cursor-pointer border-border">
            <a href={`tel:${person.phone || "+15550192045"}`}>
              <Phone size={13} /> Call
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}