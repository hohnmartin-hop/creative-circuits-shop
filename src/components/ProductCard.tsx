import { Product, categories } from "@/data/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  onInquire: (product: Product) => void;
}

const stockStyles: Record<Product["stock"], string> = {
  "skladem": "bg-pcb text-paper",
  "na objednávku": "bg-mustard text-ink",
  "doprodej": "bg-primary text-primary-foreground",
};

export const ProductCard = ({ product, onInquire }: ProductCardProps) => {
  const catName = categories.find((c) => c.id === product.category)?.name ?? "";

  return (
    <article className="group flex flex-col bg-card border border-border rounded-sm shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5 overflow-hidden">
      {/* Visual placeholder — PCB trace pattern with category mark */}
      <div className="relative aspect-[4/3] pcb-trace bg-muted overflow-hidden border-b border-border">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-serif text-5xl md:text-6xl text-ink/15 select-none rotate-[-4deg]">
            {product.name.split(" ")[0]}
          </div>
        </div>
        <span className={`absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm ${stockStyles[product.stock]}`}>
          {product.stock}
        </span>
        {product.tag && (
          <span className="absolute top-3 right-3 tape-label rotate-[3deg]">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {catName}
        </span>
        <h3 className="font-serif text-xl text-ink leading-tight">{product.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {product.description}
        </p>
        <div className="flex items-end justify-between pt-3 mt-1 border-t border-dashed border-border">
          <div>
            <div className="font-serif text-2xl text-primary">{product.price.toLocaleString("cs-CZ")} Kč</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              vč. DPH
            </div>
          </div>
          <Button
            onClick={() => onInquire(product)}
            variant="default"
            size="sm"
            className="font-mono text-xs uppercase tracking-wider rounded-sm"
          >
            Mám zájem
          </Button>
        </div>
      </div>
    </article>
  );
};
