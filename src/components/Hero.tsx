import heroImage from "@/assets/hero-electronics.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
        <div className="space-y-7 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <span className="tape-label">Est. 1987</span>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-pcb animate-blink" />
              skladem 200+ položek
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Stavebnice a součástky{" "}
            <span className="italic text-primary">pro každého kutila</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Arduino, ESP32, senzory, pájecí stavebnice i klasické pasivní součástky.
            Pečlivě vybrané kousky pro vaše projekty &mdash; od prvního blikajícího LED
            po vlastní robota.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#produkty"
              className="inline-flex h-12 items-center rounded-sm bg-primary px-6 font-mono text-sm uppercase tracking-wider text-primary-foreground shadow-elevated hover:bg-copper transition-colors"
            >
              Prohlédnout katalog
            </a>
            <a
              href="#kategorie"
              className="inline-flex h-12 items-center rounded-sm border-2 border-ink/80 bg-transparent px-6 font-mono text-sm uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Kategorie
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-6 pt-8 border-t border-border/60">
            {[
              { k: "200+", v: "položek" },
              { k: "48 h", v: "expedice" },
              { k: "1 200", v: "kutilů ročně" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-2xl md:text-3xl text-primary">{s.k}</dt>
                <dd className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-1">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-warm rounded-sm rotate-1" aria-hidden />
          <div className="relative overflow-hidden rounded-sm shadow-elevated border-4 border-paper">
            <img
              src={heroImage}
              alt="Retro pracovní stůl s Arduinem, rezistory, kondenzátory a osciloskopem"
              width={1600}
              height={1024}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
            <span className="absolute bottom-4 left-4 tape-label rotate-[-2deg]">
              dílna · 1987
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
