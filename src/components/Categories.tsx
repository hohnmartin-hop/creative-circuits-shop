import { categories } from "@/data/products";
import { Cpu, Radio, CircuitBoard, Wrench } from "lucide-react";

const iconMap = {
  arduino: Cpu,
  moduly: Radio,
  pasivni: CircuitBoard,
  stavebnice: Wrench,
} as const;

interface CategoriesProps {
  active: string | "all";
  onSelect: (id: string | "all") => void;
}

export const Categories = ({ active, onSelect }: CategoriesProps) => {
  return (
    <section id="kategorie" className="container py-16 md:py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // 01 — sortiment
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-2">
            Vyber si svou polici
          </h2>
        </div>
        <button
          onClick={() => onSelect("all")}
          className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border rounded-sm transition-colors ${
            active === "all"
              ? "bg-ink text-paper border-ink"
              : "border-border text-muted-foreground hover:border-ink hover:text-ink"
          }`}
        >
          Zobrazit vše
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const Icon = iconMap[cat.id];
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`group text-left p-6 rounded-sm border-2 transition-all shadow-soft hover:shadow-card hover:-translate-y-0.5 ${
                isActive
                  ? "bg-ink text-paper border-ink"
                  : "bg-card border-border hover:border-primary"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-sm mb-4 transition-colors ${
                  isActive ? "bg-mustard text-ink" : "bg-gradient-copper text-primary-foreground"
                }`}
              >
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3
                className={`font-serif text-xl mb-2 ${
                  isActive ? "text-paper" : "text-ink"
                }`}
              >
                {cat.name}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  isActive ? "text-paper/80" : "text-muted-foreground"
                }`}
              >
                {cat.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};
