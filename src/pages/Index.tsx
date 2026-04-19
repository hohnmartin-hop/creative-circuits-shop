import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [category, setCategory] = useState<string | "all">("all");

  useEffect(() => {
    document.title = "MaM Voltík — elektronické stavebnice a součástky";

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
      "Arduino, ESP32, senzory, pasivní součástky a pájecí stavebnice. Pečlivě vybraná elektronika pro kutily i profíky. Expedice do 48 hodin."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  const handleSelect = (id: string | "all") => {
    setCategory(id);
    setTimeout(() => {
      document.getElementById("produkty")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories active={category} onSelect={handleSelect} />
        <ProductGrid category={category} />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
