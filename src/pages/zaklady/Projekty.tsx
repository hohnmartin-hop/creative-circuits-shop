import { BasicArticleLayout } from "@/components/BasicArticleLayout";
import { basicTopics } from "@/data/basics";

const topic = basicTopics.find((t) => t.id === "projekty")!;

const projects = [
  {
    level: "01",
    name: "Blikající LED",
    time: "15 minut",
    parts: ["1× LED", "1× rezistor 470 Ω", "1× baterie 9 V s konektorem", "nepájivé pole, dráty"],
    steps: [
      "Zapojte plus baterie přes rezistor na delší nožičku LED (anoda).",
      "Kratší nožičku LED (katoda) připojte na mínus baterie.",
      "LED svítí. Gratulujeme — máte první funkční obvod.",
      "Bonus: vyměňte rezistor za 220 Ω a sledujte, jak je LED jasnější (pozor, zkraťte čas svícení, ať nepřehřejete).",
    ],
  },
  {
    level: "02",
    name: "Tlačítko a LED",
    time: "30 minut",
    parts: ["1× LED", "1× rezistor 470 Ω", "1× tlačítko (mikrospínač)", "baterie 9 V"],
    steps: [
      "Mezi plus baterie a rezistor zařaďte tlačítko.",
      "Po stisknutí se obvod uzavře a LED svítí.",
      "Zkuste tlačítko zapojit paralelně k LED — uvidíte opačné chování (LED svítí v klidu, tlačítko ji zhasne).",
    ],
  },
  {
    level: "03",
    name: "Jednoduchý zesilovač s TDA2030",
    time: "1–2 hodiny pájení",
    parts: ["Naše stavebnice nf zesilovače 2×15 W", "Zdroj 12 V / 2 A", "Reproduktor 4–8 Ω", "Audio kabel"],
    steps: [
      "Postupujte podle přiloženého schématu — všechny součástky jsou popsané písmenem a číslem.",
      "Nejprve osaďte rezistory a kondenzátory, pak IO TDA2030 do chladiče.",
      "Před prvním zapnutím překontrolujte polaritu elektrolytů.",
      "Připojte zdroj, audio vstup a reproduktor. Hraje? Skvělé. Nehraje? Zkontrolujte studené spoje a polaritu.",
    ],
  },
];

const Projekty = () => {
  return (
    <BasicArticleLayout topic={topic}>
      <p>
        Tři projekty, které zvládnete v jednom víkendovém odpoledni. První dva jsou
        bez pájení (jen do nepájivého pole), třetí už je opravdová stavebnice.
      </p>

      <div className="space-y-8 not-prose">
        {projects.map((p) => (
          <div key={p.name} className="border-2 border-border rounded-sm overflow-hidden bg-card shadow-soft">
            <div className="bg-ink text-paper p-5 flex items-baseline justify-between gap-4 flex-wrap">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-mustard">
                  // projekt {p.level}
                </span>
                <h3 className="font-serif text-2xl mt-1">{p.name}</h3>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-paper/70">
                ⏱ {p.time}
              </span>
            </div>
            <div className="p-6 grid md:grid-cols-[1fr_2fr] gap-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">
                  potřebujete
                </div>
                <ul className="space-y-1.5 text-sm text-ink/80">
                  {p.parts.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-primary">▸</span> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">
                  postup
                </div>
                <ol className="space-y-2 text-ink/80 list-decimal pl-5">
                  {p.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 border-2 border-dashed border-mustard bg-mustard/10 rounded-sm">
        <h4 className="font-serif text-xl text-ink mb-2">Co dál?</h4>
        <p className="text-ink/80">
          Až vám blikající LED přestane stačit, sáhněte po Arduinu. S deskou Arduino UNO
          a pár senzory postavíte za víkend meteostanici, alarm nebo robota. Inspiraci
          najdete v naší kategorii <em>Stavebnice a kity</em>.
        </p>
      </div>
    </BasicArticleLayout>
  );
};

export default Projekty;
