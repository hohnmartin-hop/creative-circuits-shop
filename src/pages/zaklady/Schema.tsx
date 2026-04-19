import { BasicArticleLayout } from "@/components/BasicArticleLayout";
import { basicTopics } from "@/data/basics";

const topic = basicTopics.find((t) => t.id === "schema")!;

const Schema = () => {
  return (
    <BasicArticleLayout topic={topic}>
      <p>
        Schéma je <strong>návod k zapojení</strong> namalovaný symboly. Vypadá tajemně,
        ale po pár hodinách čtení uvidíte v klikyhácích jasné věci — jako noty na papíře.
      </p>

      <h3 className="font-serif text-2xl text-ink mt-8">Co najdete na schématu</h3>
      <div className="grid sm:grid-cols-2 gap-4 not-prose">
        {[
          { sym: "──╱╲╱╲──", what: "Rezistor", note: "Někdy obdélníček (evropská norma)." },
          { sym: "──┤├──", what: "Kondenzátor", note: "Dvě čárky proti sobě." },
          { sym: "──▷|──", what: "Dioda / LED", note: "Trojúhelník ukazuje směr proudu." },
          { sym: "──○──", what: "Spojení", note: "Tečka = vodiče se spojují, bez tečky se křižují." },
          { sym: "VCC / GND", what: "Napájení", note: "VCC = plus, GND = zem (mínus)." },
          { sym: "S1, R1, C1", what: "Označení dílů", note: "Písmeno = typ, číslo = pořadí." },
        ].map((it) => (
          <div key={it.what} className="border border-border bg-card p-5 rounded-sm">
            <div className="font-mono text-lg text-primary mb-1">{it.sym}</div>
            <div className="font-serif text-lg text-ink">{it.what}</div>
            <div className="text-sm text-muted-foreground mt-1">{it.note}</div>
          </div>
        ))}
      </div>

      <h3 className="font-serif text-2xl text-ink mt-10">Plošný spoj (PCB) krok za krokem</h3>
      <ol className="space-y-4 list-none pl-0 not-prose">
        {[
          { n: "1", t: "Připravte si nářadí", d: "Páječka 30–60 W, cín 0,8 mm s tavidlem, štípačky, pinzeta, antistatická podložka." },
          { n: "2", t: "Setřiďte součástky", d: "Rozdělte si je podle typů. Hodnoty rezistorů ověřte multimetrem — barevné kódy se snadno popletou." },
          { n: "3", t: "Začněte od nejnižších", d: "Nejdřív rezistory (lze ohnout), pak diody, IO patice, kondenzátory. Tranzistory a LED až nakonec — bývají citlivé na teplo." },
          { n: "4", t: "Pajte rychle a čistě", d: "Na pájecí ploška přiložte hrot, přidejte cín, držte 1–2 vteřiny. Hotový spoj je lesklý a kuželovitý." },
          { n: "5", t: "Odstřihněte přebytky", d: "Nožičky zkraťte těsně nad spojem. Zkontrolujte, jestli se sousední pájené body nedotýkají." },
          { n: "6", t: "Oživení", d: "Než pustíte napájení, projděte si schéma a zkontrolujte polaritu kondenzátorů a diod. Začněte se sníženým napětím, pokud máte zdroj." },
        ].map((s) => (
          <li key={s.n} className="flex gap-5 border-l-2 border-primary pl-5">
            <div className="font-serif text-3xl text-primary leading-none">{s.n}</div>
            <div>
              <div className="font-serif text-xl text-ink">{s.t}</div>
              <div className="text-ink/80 mt-1">{s.d}</div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 p-6 border-2 border-dashed border-primary bg-primary/5 rounded-sm">
        <h4 className="font-serif text-xl text-ink mb-2">Studený spoj — postrach začátečníka</h4>
        <p className="text-ink/80">
          Matný, granulový spoj se vám časem rozjede a obvod přestane fungovat. Když si
          nejste jistí, raději ho přepájte. Páječka musí mít čas plošku ohřát — přiložte
          hrot dřív, než přidáte cín.
        </p>
      </div>
    </BasicArticleLayout>
  );
};

export default Schema;
