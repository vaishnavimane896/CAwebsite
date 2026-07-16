import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function TimelineSection({ milestones }) {
  return (
    <section className="bg-background border-y border-border py-20 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-3 tracking-[0.2em] uppercase text-[10px] py-1 px-3">
            Our Journey
          </Badge>
          <h2 className="font-heading font-bold text-3xl text-primary">Firm Milestones</h2>
          <p className="text-muted-foreground mt-2">Nearly three decades of building trust, one milestone at a time.</p>
        </div>

        <div className="relative">
          {/* Timeline Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 hidden md:block">
            <motion.div
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="w-full bg-secondary"
            />
          </div>

          {/* Timeline Cards */}
          <div className="space-y-10 md:space-y-12 relative">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={m.year} className="relative">
                  <div className="hidden md:grid grid-cols-2 gap-12 items-center w-full">
                    <div className={`flex ${isLeft ? "justify-end text-right" : "justify-start opacity-0 pointer-events-none"}`}>
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="max-w-[340px] w-full"
                        >
                          <MilestoneCard m={m} align="right" />
                        </motion.div>
                      )}
                    </div>

                    <div className={`flex ${!isLeft ? "justify-start text-left" : "justify-end opacity-0 pointer-events-none"}`}>
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="max-w-[340px] w-full"
                        >
                          <MilestoneCard m={m} align="left" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Dot */}
                  <span
                    className={`hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-[3px] border-background z-10 transition-colors duration-300 ${
                      m.active ? "bg-secondary ring-4 ring-secondary/20" : "bg-muted shadow-sm"
                    }`}
                  />

                  {/* Mobile Fallback */}
                  <div className="block md:hidden pl-8 border-l-2 border-border relative ml-3">
                    <span
                      className={`absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-background ${
                        m.active ? "bg-secondary ring-4 ring-secondary/15" : "bg-muted"
                      }`}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      <MilestoneCard m={m} align="left" mobile />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MilestoneCard({ m, align, mobile }) {
  const isRight = align === "right";
  return (
    <Card className={`p-5 transition-all duration-300 hover:shadow-md bg-card ${
      isRight && !mobile ? "border-r-4 border-r-secondary border-l-border" : "border-l-4 border-l-secondary border-r-border"
    }`}>
      <p className={`font-heading font-extrabold text-lg leading-none tracking-tight ${
        m.active ? "text-secondary" : "text-primary"
      }`}>
        {m.year}
      </p>
      <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-medium">
        {m.description}
      </p>
    </Card>
  );
}