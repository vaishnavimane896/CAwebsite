import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { coreCompetencies } from "@/data/servicesData";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesGrid() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading font-bold text-3xl text-primary">Core Competencies</h2>
          <p className="mt-3 text-muted-foreground">
            Structured financial solutions designed to mitigate risk and accelerate sustainable enterprise growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {coreCompetencies.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full flex"
            >
              <Card className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow bg-card flex flex-col justify-between w-full">
                <div>
                  <div className="w-11 h-11 rounded-full bg-secondary/10 flex items-center justify-center mb-5">
                    <item.icon size={20} className="text-secondary" />
                  </div>
                  <CardTitle className="font-heading font-semibold text-lg text-primary mb-2">
                    {item.title}
                  </CardTitle>
                  <CardContent className="p-0 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </CardContent>
                </div>
                
                <div className="mt-4">
                  <Button asChild variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                    <a href="/services">
                      Learn More <ArrowRight size={14} />
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}