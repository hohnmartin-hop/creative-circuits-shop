export type BasicTopicId = "soucastky" | "principy" | "schema" | "projekty";

export interface BasicTopic {
  id: BasicTopicId;
  slug: string;
  title: string;
  shortTitle: string;
  perex: string;
  iconKey: "chip" | "bolt" | "ruler" | "lightbulb";
  number: string;
}

export const basicTopics: BasicTopic[] = [
  {
    id: "soucastky",
    slug: "soucastky",
    title: "Základní součástky",
    shortTitle: "Součástky",
    perex:
      "Rezistor, kondenzátor, dioda, tranzistor a LED — pět kamenů, na kterých stojí každý obvod. Vysvětlíme, co dělají, jak vypadají ve schématu a kdy je nasadit.",
    iconKey: "chip",
    number: "01",
  },
  {
    id: "principy",
    slug: "principy",
    title: "Základní principy",
    shortTitle: "Principy",
    perex:
      "Napětí, proud, odpor a Ohmův zákon. Bez paniky a bez integrálů — vysvětlíme to obrázky, vodou v trubce a praktickými příklady z domácí dílny.",
    iconKey: "bolt",
    number: "02",
  },
  {
    id: "schema",
    slug: "schema",
    title: "Jak číst schéma a osadit PCB",
    shortTitle: "Schéma & PCB",
    perex:
      "Co znamenají čárky, kroužky a klikyháky? Naučíme vás přečíst schéma jako notu a postavit první plošný spoj bez studených spojů.",
    iconKey: "ruler",
    number: "03",
  },
  {
    id: "projekty",
    slug: "projekty",
    title: "První projekty krok za krokem",
    shortTitle: "Projekty",
    perex:
      "Blikající LED, jednoduchý zesilovač, mikrotest tranzistoru — projekty, na kterých si osaháte páječku a získáte první ‚aha‘ momenty.",
    iconKey: "lightbulb",
    number: "04",
  },
];
