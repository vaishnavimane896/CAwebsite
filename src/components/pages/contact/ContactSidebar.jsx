import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { regionalOffices } from "@/data/servicesData";

export default function ContactSidebar() {
  return (
    <div className="space-y-6">
      {/* Primary HQ Details */}
      <Card className="border border-border bg-card shadow-sm overflow-hidden">
        {/* Abstract Map Preview Header */}
        <div className="h-36 bg-slate-900 dark:bg-muted relative flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #818CF8 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uU-KgLhhwvXQMKRFsj_GLsZr-haHq7C5GONPLD_ZlQ&s=10" alt="CAWeb Logo" className="rounded" />
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-heading font-bold text-foreground text-lg mb-4">
            Sterling CA Firm
          </h3>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex items-start gap-2.5">
              <MapPin size={18} className="text-indigo-600 dark:text-indigo-400 mt-0.5 shrink-0" />
              <span>100 Financial Plaza, Suite 400<br />Metropolis, NY 10004</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="font-semibold text-foreground">+1 (555) 019-2045</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span className="font-semibold text-foreground">advisory@sterlingca.com</span>
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-foreground">Career Inquiries</p>
              <p className="text-[11px] text-muted-foreground">Looking for positions?</p>
            </div>
            <Button asChild variant="link" className="text-indigo-600 dark:text-indigo-400 p-0 h-auto font-bold text-xs">
              <a href="#">
                Careers <ArrowUpRight size={14} />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Regional Liaison Offices */}
      <Card className="border border-border bg-card shadow-sm">
        <CardContent className="p-6">
          <h3 className="font-heading font-bold text-foreground text-base mb-4">
            Regional Liaison Desks
          </h3>
          <div className="space-y-3">
            {regionalOffices.map((office) => (
              <div
                key={office.city}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border"
              >
                <div>
                  <p className="text-xs font-bold text-foreground">{office.city}</p>
                  <p className="text-[11px] text-muted-foreground">Contact: {office.contact}</p>
                </div>
                <a
                  href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}