import { useMemo, useState } from "react";
import { Product, products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { InquiryDialog } from "./InquiryDialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ProductGridProps {
  category: string | "all";
}

export const ProductGrid = ({ category }: ProductGridProps) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "all" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  const handleInquire = (p: Product) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <section id="produkty" className="container py-16 md:py-20">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // 02 — katalog
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mt-2">
            Aktuální nabídka
          </h2>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Hledat součástku…"
            className="pl-9 font-mono text-sm rounded-sm bg-card"
            aria-label="Vyhledat produkt"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center font-mono text-muted-foreground">
          Pro toto hledání jsme nic nenašli. Zkuste jinou kategorii.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onInquire={handleInquire} />
          ))}
        </div>
      )}

      <InquiryDialog open={open} onOpenChange={setOpen} product={selected} />
    </section>
  );
};
