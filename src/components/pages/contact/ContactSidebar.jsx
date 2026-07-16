import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { regionalOffices } from "@/data/servicesData";

export default function ContactSidebar() {
  return (
    <div className="space-y-6">
      {/* Primary HQ Details */}
      <Card className="border border-slate-200 bg-white shadow-sm overflow-hidden">
        {/* Abstract Map Preview Header */}
        <div className="h-36 bg-slate-900 relative flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #818CF8 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative z-10 flex flex-col items-center">
            
              {/* <MapPin size={20} /> */}
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uU-KgLhhwvXQMKRFsj_GLsZr-haHq7C5GONPLD_ZlQ&s=10" alt="CAWeb Logo"  />
           
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="font-heading font-bold text-slate-900 text-lg mb-4">
            Sterling CA Firm
          </h3>
          <div className="space-y-3 text-sm text-slate-600">
            <p className="flex items-start gap-2.5">
              <MapPin size={18} className="text-indigo-600 mt-0.5 shrink-0" />
              <span>100 Financial Plaza, Suite 400<br />Metropolis, NY 10004</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone size={18} className="text-indigo-600 shrink-0" />
              <span className="font-semibold text-slate-800">+1 (555) 019-2045</span>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail size={18} className="text-indigo-600 shrink-0" />
              <span className="font-semibold text-slate-800">advisory@sterlingca.com</span>
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-900">Career Inquiries</p>
              <p className="text-[11px] text-slate-500">Looking for positions?</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Careers <ArrowUpRight size={14} />
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Regional Liaison Offices */}
      <Card className="border border-slate-200 bg-white shadow-sm">
        <CardContent className="p-6">
          <h3 className="font-heading font-bold text-slate-900 text-base mb-4">
            Regional Liaison Desks
          </h3>
          <div className="space-y-3">
            {regionalOffices.map((office) => (
              <div
                key={office.city}
                className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100"
              >
                <div>
                  <p className="text-xs font-bold text-slate-900">{office.city}</p>
                  <p className="text-[11px] text-slate-500">Contact: {office.contact}</p>
                </div>
                <a
                  href={`tel:${office.phone.replace(/[^\d+]/g, "")}`}
                  className="text-xs font-semibold text-indigo-600 hover:underline"
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