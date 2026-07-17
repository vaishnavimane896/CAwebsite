import { Sparkles, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function ProfileCta({ person }) {
  const navigate = useNavigate();
  const firstName = person.name.split(" ")[0];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-12 pb-16">
      <Card className="bg-slate-900 dark:bg-muted border border-border rounded-2xl p-8 md:p-12 lg:p-14 shadow-xl">
        <CardContent className="p-0 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-secondary font-medium backdrop-blur-md">
              <Sparkles size={13} /> <span>Direct Corporate Access</span>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-white dark:text-foreground tracking-tight">
              Ready to strategically scale your engagement with {firstName}?
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
  );
}