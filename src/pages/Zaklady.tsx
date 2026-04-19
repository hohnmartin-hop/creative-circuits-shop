import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Cpu, Zap, Ruler, Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { basicTopics } from "@/data/basics";

const iconMap = {
  chip: Cpu,
  bolt: Zap,
  ruler: Ruler,
  lightbulb: Lightbulb,
} as const;

const Zaklady = () => {
  useEffect(() => {
    document.title = "Základy elektroniky — MaM Voltík";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Základy elektroniky pro začátečníky — součástky, principy, čtení schémat a první projekty. Srozumitelně a česky."
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/zaklady");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> zpět na katalog
          </Link>
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              // průvodce pro začátečníky
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink mt-3 leading-[1.05]">
              Základy <span className="italic text-primary">elektroniky</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-5 leading-relaxed">
              Než sáhnete po páječce, hodí se vědět pár věcí. Sepsali jsme čtyři kapitoly,
              které vás dovedou od „co je to vlastně proud?" k prvnímu blikajícímu LED.
              Bez vzorců, které by vás odradily.
            </p>
          </div>
        </section>

        <section className="container pb-20">
          <div className="grid sm:grid-cols-2 gap-5">
            {basicTopics.map((t) => {
              const Icon = iconMap[t.iconKey];
              return (
                <Link
                  key={t.id}
                  to={`/zaklady/${t.slug}`}
                  className="group relative flex flex-col p-7 bg-card border-2 border-border rounded-sm shadow-soft hover:shadow-card hover:border-primary hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-gradient-copper text-primary-foreground shadow-soft">
                      <Icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      // {t.number}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl text-ink mb-3 leading-tight">
                    {t.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {t.perex}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary group-hover:gap-3 transition-all">
                    Otevřít kapitolu <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Zaklady;
