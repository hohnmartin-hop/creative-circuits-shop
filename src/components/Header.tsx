import { Cpu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  const navItem = (href: string, label: string, isAnchor = false) => {
    if (isAnchor && !onHome) {
      return (
        <Link to={`/${href}`} className="hover:text-primary transition-colors">
          {label}
        </Link>
      );
    }
    if (isAnchor) {
      return (
        <a href={href} className="hover:text-primary transition-colors">
          {label}
        </a>
      );
    }
    return (
      <Link to={href} className="hover:text-primary transition-colors">
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-paper/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-copper shadow-soft">
            <Cpu className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl text-ink">MaM Voltík</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              elektronické dílny
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 font-mono text-sm uppercase tracking-wider text-muted-foreground">
          {navItem("#kategorie", "Kategorie", true)}
          {navItem("#produkty", "Produkty", true)}
          {navItem("/zaklady", "Základy")}
          {navItem("#o-nas", "O nás", true)}
          {navItem("#kontakt", "Kontakt", true)}
        </nav>

        <Link
          to="/zaklady"
          className="hidden sm:inline-flex h-9 items-center rounded-sm bg-primary px-4 font-mono text-xs uppercase tracking-wider text-primary-foreground shadow-soft hover:bg-copper transition-colors"
        >
          Začínám s elektronikou
        </Link>
      </div>
    </header>
  );
};
