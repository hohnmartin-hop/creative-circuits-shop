import { Cpu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-paper/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-copper shadow-soft">
            <Cpu className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl text-ink">Voltík &amp; Spol.</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              elektronické dílny
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider text-muted-foreground">
          <a href="#kategorie" className="hover:text-primary transition-colors">Kategorie</a>
          <a href="#produkty" className="hover:text-primary transition-colors">Produkty</a>
          <a href="#o-nas" className="hover:text-primary transition-colors">O nás</a>
          <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
        </nav>

        <a
          href="#produkty"
          className="hidden sm:inline-flex h-9 items-center rounded-sm bg-primary px-4 font-mono text-xs uppercase tracking-wider text-primary-foreground shadow-soft hover:bg-copper transition-colors"
        >
          Procházet katalog
        </a>
      </div>
    </header>
  );
};
