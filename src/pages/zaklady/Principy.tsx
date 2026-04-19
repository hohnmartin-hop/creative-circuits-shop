import { BasicArticleLayout } from "@/components/BasicArticleLayout";
import { basicTopics } from "@/data/basics";

const topic = basicTopics.find((t) => t.id === "principy")!;

const Principy = () => {
  return (
    <BasicArticleLayout topic={topic}>
      <p>
        V elektronice se opakovaně setkáte se třemi pojmy: <strong>napětí</strong>,{" "}
        <strong>proud</strong> a <strong>odpor</strong>. Pochopit je je jednodušší,
        než to zní — pomůže analogie s vodou v hadici.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 not-prose">
        {[
          {
            label: "Napětí (U)",
            unit: "Volt · V",
            water: "Tlak vody v hadici",
            text: "Rozdíl potenciálů, který tlačí elektrony obvodem. Bez napětí se nic nepohne.",
          },
          {
            label: "Proud (I)",
            unit: "Ampér · A",
            water: "Množství vody za vteřinu",
            text: "Tok elektronů obvodem. Čím větší proud, tím víc energie se přenáší (a víc se hřeje).",
          },
          {
            label: "Odpor (R)",
            unit: "Ohm · Ω",
            water: "Zúžení v hadici",
            text: "Brzda pro proud. Větší odpor = menší proud při stejném napětí.",
          },
        ].map((c) => (
          <div key={c.label} className="border border-border bg-card p-5 rounded-sm shadow-soft">
            <div className="font-serif text-xl text-ink">{c.label}</div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-primary mt-1 mb-3">
              {c.unit}
            </div>
            <div className="font-mono text-xs text-muted-foreground mb-2">// {c.water}</div>
            <p className="text-sm text-ink/80 leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>

      <h3 className="font-serif text-2xl text-ink mt-10">Ohmův zákon</h3>
      <p>
        Vztah mezi napětím, proudem a odporem je překvapivě jednoduchý. Stačí znát jeden vzorec:
      </p>

      <div className="not-prose bg-ink text-paper p-8 rounded-sm text-center my-6">
        <div className="font-serif text-5xl">U = R × I</div>
        <div className="font-mono text-xs uppercase tracking-widest text-mustard mt-3">
          napětí = odpor × proud
        </div>
      </div>

      <p>
        <strong>Praktický příklad:</strong> Máte LED, která potřebuje 20 mA (0,02 A) a baterii
        9 V. Aby LED nezhořela, musíte „spotřebovat" přebytečné napětí na rezistoru. Ze vzorce
        spočítáte, že potřebujete rezistor zhruba 350 Ω (běžně se použije 470 Ω).
      </p>

      <div className="mt-10 p-6 border-2 border-dashed border-pcb bg-pcb/10 rounded-sm">
        <h4 className="font-serif text-xl text-ink mb-2">Co si pamatovat</h4>
        <ul className="space-y-2 text-ink/80 list-disc pl-5">
          <li>Napětí <em>je</em>, proud <em>teče</em>, odpor <em>brzdí</em>.</li>
          <li>Bez uzavřeného obvodu žádný proud — musí být kudy se vrátit zpět ke zdroji.</li>
          <li>Kalkulačka Ohmova zákona je v každém telefonu. Není ostuda ji používat.</li>
        </ul>
      </div>
    </BasicArticleLayout>
  );
};

export default Principy;
