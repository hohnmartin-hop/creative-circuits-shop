import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";

export const BeginnerCallout = () => {
  return (
    <section className="container py-12 md:py-16">
      <div className="relative overflow-hidden rounded-sm border-2 border-ink bg-mustard/30 p-8 md:p-12 shadow-card">
        <div className="absolute inset-0 opacity-[0.08] pcb-trace pointer-events-none" aria-hidden />
        <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-primary inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" /> // začínáte s elektronikou?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-ink leading-tight">
              Nevíte, co je rezistor?{" "}
              <span className="italic text-primary">Začněte tady.</span>
            </h2>
            <p className="text-ink/80 max-w-2xl leading-relaxed">
              Připravili jsme srozumitelný průvodce pro úplné začátečníky —
              od základních součástek přes Ohmův zákon až po první blikající LED.
              Žádné integrály, žádné odborné fráze.
            </p>
          </div>
          <Link
            to="/zaklady"
            className="inline-flex items-center gap-2 h-12 rounded-sm bg-ink px-6 font-mono text-sm uppercase tracking-wider text-paper shadow-elevated hover:bg-primary transition-colors whitespace-nowrap"
          >
            Otevřít základy <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
