import { HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { bookingFaq } from "@/data/servicesData";

export default function BookingFaq() {
  return (
    <section className="bg-white border-y border-slate-200 py-16">
      <div className="max-w-[850px] mx-auto px-4 md:px-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50">
            Good to Know
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight">
            Booking FAQ
          </h2>
          <p className="text-slate-600 mt-2 text-sm">
            Answers to common questions before scheduling your consultation.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {bookingFaq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="bg-slate-50/60 border border-slate-200 rounded-xl px-5 transition-colors data-[state=open]:bg-white data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-sm font-bold text-slate-900 hover:no-underline gap-3 py-4">
                <span className="flex items-center gap-2.5 text-left">
                  <HelpCircle size={16} className="text-indigo-600 shrink-0" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-600 pl-[26px] pb-4 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}