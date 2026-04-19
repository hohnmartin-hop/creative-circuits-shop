import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { BeginnerCallout } from "@/components/BeginnerCallout";

const Index = () => {
  const [category, setCategory] = useState<string | "all">("all");
  const [beginnerOnly, setBeginnerOnly] = useState(false);

  useEffect(() => {
    document.title = "MaM Voltík — elektronika srozumitelně pro začátečníky";

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
      "Začínáte s elektronikou? Stavebnice pro začátečníky i pokročilé, Arduino, senzory a srozumitelné návody k základům elektroniky. MaM Voltík."
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
        <BeginnerCallout />
        <Categories active={category} onSelect={handleSelect} />
        <ProductGrid
          category={category}
          beginnerOnly={beginnerOnly}
          onToggleBeginner={() => setBeginnerOnly((v) => !v)}
        />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
