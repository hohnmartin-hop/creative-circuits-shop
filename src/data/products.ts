export type Category = "arduino" | "moduly" | "pasivni" | "stavebnice";

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // CZK
  description: string;
  tag?: string;
  stock: "skladem" | "na objednávku" | "doprodej";
  beginnerFriendly?: boolean;
}

export const categories: { id: Category; name: string; description: string }[] = [
  { id: "arduino", name: "Arduino & mikrokontroléry", description: "Arduino, ESP32, Raspberry Pi a příslušenství" },
  { id: "moduly", name: "Senzory a moduly", description: "Teplotní, pohybové, displeje a relé moduly" },
  { id: "pasivni", name: "Pasivní součástky", description: "Rezistory, kondenzátory, cívky, konektory" },
  { id: "stavebnice", name: "Stavebnice a kity", description: "Hotové sady k pájení a sestavení" },
];

export const products: Product[] = [
  {
    id: "ard-uno-r3",
    name: "Arduino UNO R3",
    category: "arduino",
    price: 599,
    description: "Originální vývojová deska Arduino UNO R3 s ATmega328P. Ideální pro začátečníky i pokročilé.",
    tag: "Bestseller",
    stock: "skladem",
    beginnerFriendly: true,
  },
  {
    id: "esp32-devkit",
    name: "ESP32 DevKit V1",
    category: "arduino",
    price: 249,
    description: "Wi-Fi a Bluetooth modul s dual-core procesorem. 30 pinů, USB-C.",
    stock: "skladem",
  },
  {
    id: "rpi-pico-w",
    name: "Raspberry Pi Pico W",
    category: "arduino",
    price: 189,
    description: "Mikrokontrolér RP2040 s Wi-Fi. Programovatelný v MicroPythonu i C/C++.",
    tag: "Novinka",
    stock: "skladem",
  },
  {
    id: "dht22",
    name: "Senzor teploty DHT22",
    category: "moduly",
    price: 129,
    description: "Přesný digitální senzor teploty a vlhkosti. Rozsah −40 až 80 °C.",
    stock: "skladem",
    beginnerFriendly: true,
  },
  {
    id: "oled-096",
    name: "OLED displej 0,96″ I²C",
    category: "moduly",
    price: 159,
    description: "Monochromatický 128×64 displej. Komunikace přes I²C, kompatibilní s Arduino.",
    stock: "skladem",
  },
  {
    id: "relay-4ch",
    name: "Relé modul 4 kanály 5V",
    category: "moduly",
    price: 109,
    description: "Optočlenem oddělený 4kanálový relé modul pro spínání 230 V zátěže.",
    stock: "skladem",
  },
  {
    id: "res-pack",
    name: "Sada rezistorů 600 ks",
    category: "pasivni",
    price: 199,
    description: "Sada uhlíkových rezistorů 1/4W, 30 hodnot od 10 Ω do 1 MΩ, v krabičce.",
    stock: "skladem",
    beginnerFriendly: true,
  },
  {
    id: "cap-pack",
    name: "Sada elektrolytických kondenzátorů",
    category: "pasivni",
    price: 249,
    description: "120 ks v 12 hodnotách od 0,1 µF do 1000 µF, 25 V.",
    stock: "skladem",
  },
  {
    id: "dupont-set",
    name: "Propojovací kabely Dupont 120 ks",
    category: "pasivni",
    price: 89,
    description: "M-M, M-F, F-F kabely 20 cm pro nepájivé kontaktní pole.",
    stock: "skladem",
    beginnerFriendly: true,
  },
  {
    id: "kit-clock",
    name: "Stavebnice digitálních hodin Nixie",
    category: "stavebnice",
    price: 2490,
    description: "Retro hodiny s doutnavkovými číslicemi IN-12. K pájení, návod česky.",
    tag: "Limitovaná edice",
    stock: "doprodej",
  },
  {
    id: "kit-amp",
    name: "Stavebnice nf zesilovače 2×15W",
    category: "stavebnice",
    price: 690,
    description: "Stereo zesilovač s TDA2030. Vhodné pro začátečníky v pájení.",
    stock: "skladem",
    beginnerFriendly: true,
  },
  {
    id: "kit-robot",
    name: "Stavebnice robota sledujícího čáru",
    category: "stavebnice",
    price: 1290,
    description: "Kompletní sada s podvozkem, motorky, senzory a Arduino Nano. Programovatelný.",
    tag: "Pro děti 12+",
    stock: "na objednávku",
  },
];
