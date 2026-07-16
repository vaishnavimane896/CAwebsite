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
    <section className="bg-background border-y border-border py-16">
      <div className="max-w-[850px] mx-auto px-4 md:px-12">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-3 text-xs font-bold uppercase tracking-wider border-indigo-500/30 text-indigo-600 bg-indigo-50 dark:bg-indigo-950/30 dark:text-indigo-400">
            Good to Know
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl text-foreground tracking-tight">
            Booking FAQ
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">
            Answers to common questions before scheduling your consultation.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {bookingFaq.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="bg-muted/40 border border-border rounded-xl px-5 transition-colors data-[state=open]:bg-card data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-sm font-bold text-foreground hover:no-underline gap-3 py-4">
                <span className="flex items-center gap-2.5 text-left">
                  <HelpCircle size={16} className="text-indigo-600 shrink-0 dark:text-indigo-400" />
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pl-[26px] pb-4 leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}