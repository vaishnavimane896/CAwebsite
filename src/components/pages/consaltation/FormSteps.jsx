import { Calendar, Clock, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";

export function StepAccountMode({ form, consultationTypes, onUpdate }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-primary mb-2">Select Account Mode</h2>
      <p className="text-xs text-muted-foreground mb-6">Specify the operational umbrella for this advisory session.</p>
      <div className="space-y-3">
        {consultationTypes.map((t) => {
          const isSelected = form.type === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onUpdate("type", t.id)}
              className={`w-full text-left border rounded-xl p-5 flex items-start gap-4 transition-all cursor-pointer ${
                isSelected ? "border-primary bg-primary/[0.02] shadow-sm" : "border-border hover:border-input bg-card"
              }`}
            >
              <div className={`p-3 rounded-xl border transition-all ${
                isSelected ? "bg-primary text-white border-primary scale-105" : `${t.bg} ${t.color} border-transparent dark:bg-muted`
              }`}>
                <t.icon size={18} strokeWidth={2.25} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-primary">{t.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function StepPrimaryScope({ form, serviceAreas, onUpdate }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-primary mb-2">Select Primary Scope</h2>
      <p className="text-xs text-muted-foreground mb-6">Choose the accounting, audit, or tax framework required.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {serviceAreas.map((area) => {
          const isSelected = form.service === area.title;
          const AreaIcon = area.icon;
          return (
            <button
              key={area.title}
              onClick={() => onUpdate("service", area.title)}
              className={`text-left border rounded-xl p-5 flex flex-col justify-between min-h-[160px] transition-all cursor-pointer ${
                isSelected ? "border-primary bg-primary/[0.02] shadow-sm" : "border-border hover:border-input bg-card"
              }`}
            >
              <div className="flex flex-col gap-2">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                  isSelected ? "bg-primary text-white border-primary scale-105" : `${area.bg} ${area.color} border-transparent dark:bg-muted`
                }`}>
                  <AreaIcon size={19} strokeWidth={2.25} />
                </div>
                <p className="text-sm font-bold text-primary tracking-tight leading-snug">{area.title}</p>
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">{area.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-6 p-5 bg-muted/40 border border-border rounded-xl flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Estimated Enterprise Turnover</label>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <Input className="pl-9 bg-background border-input" placeholder="e.g. $2M - $5M" value={form.turnover} onChange={(e) => onUpdate("turnover", e.target.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function StepSchedule({ form, dates, timeSlots, onUpdate }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl text-primary mb-2 flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950/30 dark:text-indigo-400 flex items-center justify-center">
            <Calendar size={16} strokeWidth={2.25} />
          </span>
          Allocation Date
        </h2>
        <p className="text-xs text-muted-foreground mb-4">Select an upcoming corporate business morning or afternoon.</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
          {dates.map((d) => {
            const isSelected = form.date?.toDateString() === d.toDateString();
            return (
              <button
                key={d.toISOString()}
                onClick={() => onUpdate("date", d)}
                className={`rounded-xl border p-3.5 text-center transition-all cursor-pointer ${
                  isSelected ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border bg-card hover:border-input"
                }`}
              >
                <p className={`text-[10px] uppercase font-bold tracking-wider ${isSelected ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                  {d.toLocaleDateString(undefined, { weekday: "short" })}
                </p>
                <p className="text-xl font-black my-0.5 tracking-tight">{d.getDate()}</p>
                <p className={`text-[10px] font-medium uppercase tracking-wider ${isSelected ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                  {d.toLocaleDateString(undefined, { month: "short" })}
                </p>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <h2 className="font-heading font-bold text-xl text-primary mb-2 flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 flex items-center justify-center">
            <Clock size={16} strokeWidth={2.25} />
          </span>
          Window Slot
        </h2>
        <p className="text-xs text-muted-foreground mb-4">Select a specific temporal asset interface block.</p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {timeSlots.map((t) => {
            const isSelected = form.time === t;
            return (
              <button
                key={t}
                onClick={() => onUpdate("time", t)}
                className={`rounded-xl border py-3 text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  isSelected ? "border-secondary bg-secondary text-secondary-foreground shadow-sm" : "border-border bg-card text-foreground hover:border-input"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function StepIdentityCredentials({ form, onUpdate }) {
  return (
    <div>
      <h2 className="font-heading font-bold text-xl text-primary mb-2">Corporate Identity Credentials</h2>
      <p className="text-xs text-muted-foreground mb-6">Complete secure field values to register authorization parameters.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Full Name *</label>
          <Input value={form.name} onChange={(e) => onUpdate("name", e.target.value)} placeholder="Alexander Wright" className="border-input bg-background" />
        </div>
        <div>
          <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Corporate Email *</label>
          <Input type="email" value={form.email} onChange={(e) => onUpdate("email", e.target.value)} placeholder="wright@enterprise.com" className="border-input bg-background" />
        </div>
        <div>
          <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Secure Contact Line</label>
          <Input value={form.phone} onChange={(e) => onUpdate("phone", e.target.value)} placeholder="+1 (555) 019-2831" className="border-input bg-background" />
        </div>
        <div>
          <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Company Nomenclature</label>
          <Input value={form.company} onChange={(e) => onUpdate("company", e.target.value)} placeholder="Wright Holdings Ltd" className="border-input bg-background" />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-xs font-bold text-primary uppercase tracking-wide mb-1.5 block">Executive Directives / Special Notes</label>
        <textarea
          className="w-full rounded-lg border border-input p-3 text-sm bg-background text-foreground focus:outline-none focus:border-ring focus:ring-1 focus:ring-ring shadow-xs min-h-[80px]"
          value={form.message}
          onChange={(e) => onUpdate("message", e.target.value)}
          placeholder="Provide details on any complex structural updates or custom filing timelines required..."
          rows={3}
        />
      </div>
    </div>
  );
}