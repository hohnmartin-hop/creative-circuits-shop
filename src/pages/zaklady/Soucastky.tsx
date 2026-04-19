import { BasicArticleLayout } from "@/components/BasicArticleLayout";
import { basicTopics } from "@/data/basics";

const topic = basicTopics.find((t) => t.id === "soucastky")!;

const items = [
  {
    name: "Rezistor",
    symbol: "R",
    role: "Brzdí proud",
    text: "Klade elektrickému proudu odpor — měřený v ohmech (Ω). Používá se k omezení proudu (např. přes LED) nebo k vytvoření napěťového děliče. Ve schématu vypadá jako klikyhák nebo obdélníček.",
  },
  {
    name: "Kondenzátor",
    symbol: "C",
    role: "Skladuje energii",
    text: "Krátkodobě uchovává elektrický náboj. Hodí se na vyhlazení napájení, filtraci signálu nebo časování. Kapacita se měří ve faradech (F), v praxi spíš v µF a nF.",
  },
  {
    name: "Dioda",
    symbol: "D",
    role: "Jednosměrka pro proud",
    text: "Pouští proud jen v jednom směru. Chrání obvod proti přepólování, usměrňuje střídavý proud nebo svítí (LED). Má anodu (+) a katodu (−) — pozor na orientaci.",
  },
  {
    name: "Tranzistor",
    symbol: "Q",
    role: "Spínač a zesilovač",
    text: "Malým proudem na bázi řídí velký proud mezi kolektorem a emitorem. Tvoří základ veškeré moderní elektroniky — od zesilovačů po procesory.",
  },
  {
    name: "LED",
    symbol: "LED",
    role: "Svítící dioda",
    text: "Speciální dioda, která při průchodu proudu svítí. Vždy ji připojte přes předřadný rezistor, jinak ji spálíte. Delší nožička = anoda (+).",
  },
];

const Soucastky = () => {
  return (
    <BasicArticleLayout topic={topic}>
      <p>
        Pět součástek, bez kterých se v elektronice neobejdete. Až je budete znát od pohledu,
        otevře se vám 90 % schémat na internetu.
      </p>

      <div className="grid gap-5 not-prose">
        {items.map((it) => (
          <div
            key={it.name}
            className="border-l-4 border-primary bg-card p-6 rounded-sm shadow-soft"
          >
            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-3">
              <h3 className="font-serif text-2xl text-ink">{it.name}</h3>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                značka: {it.symbol} · {it.role}
              </span>
            </div>
            <p className="text-ink/80 leading-relaxed">{it.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 border-2 border-dashed border-mustard bg-mustard/10 rounded-sm">
        <h4 className="font-serif text-xl text-ink mb-2">Tip do dílny</h4>
        <p className="text-ink/80">
          Pořiďte si <strong>krabičku se sadou rezistorů a kondenzátorů</strong>. Bez nich
          neuděláte nic, a ke každé hodnotě se časem dostanete. Hodnoty rezistorů poznáte
          podle barevných proužků — tabulka je v každé seriózní knížce o elektronice.
        </p>
      </div>
    </BasicArticleLayout>
  );
};

export default Soucastky;
