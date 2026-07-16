import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ children, className = "" }) {
  return <div className={cn("space-y-1", className)}>{children}</div>;
}

export function AccordionItem({ children, className = "" }) {
  const [open, setOpen] = useState(false);
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("border-b border-border", className)}>
      {items.map((child, index) =>
        child?.type?.displayName === "AccordionTrigger"
          ? (
              <child.type
                key={index}
                {...child.props}
                open={open}
                setOpen={setOpen}
              />
            )
          : (
              <child.type
                key={index}
                {...child.props}
                open={open}
              />
            )
      )}
    </div>
  );
}

export function AccordionTrigger({
  children,
  open,
  setOpen,
  className = "",
}) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "w-full flex items-center justify-between py-4 text-sm font-medium text-foreground transition-all hover:underline outline-none focus-visible:text-primary",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "text-muted-foreground transition-transform duration-200 shrink-0",
          open && "rotate-180"
        )}
        size={16}
      />
    </button>
  );
}

AccordionTrigger.displayName = "AccordionTrigger";

export function AccordionContent({
  children,
  open,
  className = "",
}) {
  if (!open) return null;

  return (
    <div className={cn("pb-4 text-sm text-muted-foreground leading-relaxed animate-in fade-in-50 duration-200", className)}>
      {children}
    </div>
  );
}