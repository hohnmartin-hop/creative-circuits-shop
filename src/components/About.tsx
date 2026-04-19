import { Truck, ShieldCheck, BookOpen } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Expedice do 48 hodin",
    text: "Skladové položky balíme druhý pracovní den a posíláme po celé ČR i SR.",
  },
  {
    icon: ShieldCheck,
    title: "Záruka 24 měsíců",
    text: "Na všechny moduly i hotové stavebnice. Na sortiment se sami spoléháme.",
  },
  {
    icon: BookOpen,
    title: "Návody česky",
    text: "Ke stavebnicím přikládáme přehledné schéma, postup pájení a tipy pro oživení.",
  },
];

export const About = () => {
  return (
    <section id="o-nas" className="bg-ink text-paper relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] pcb-trace pointer-events-none" aria-hidden />
      <div className="container py-16 md:py-24 relative">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-mustard">
            // 03 — proč my
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4">
            Dílna pro lidi, kteří{" "}
            <span className="italic text-mustard">mají rádi pájku</span>
          </h2>
          <p className="text-paper/80 leading-relaxed">
            Voltík &amp; Spol. provozují tři kamarádi, co se v elektronice motají od osmdesátek.
            Vybíráme jen to, co bychom si sami koupili — a co opravdu funguje.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((f) => (
            <div key={f.title} className="border border-paper/15 rounded-sm p-6 bg-paper/[0.03]">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-mustard text-ink mb-4">
                <f.icon className="h-5 w-5" strokeWidth={2.25} />
              </div>
              <h3 className="font-serif text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-paper/70 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
