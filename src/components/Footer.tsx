import { Mail, Phone, MapPin, Cpu } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="kontakt" className="border-t border-border bg-paper">
      <div className="container py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-gradient-copper">
              <Cpu className="h-5 w-5 text-primary-foreground" strokeWidth={2.25} />
            </div>
            <div className="font-serif text-xl text-ink">Voltík &amp; Spol.</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Elektronické stavebnice a součástky pro kutily, kantory i profíky.
            Pájíme od roku 1987.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink mb-4">
            Kontakt
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:dilna@voltik.cz" className="hover:text-primary">
                dilna@voltik.cz
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+420777123456" className="hover:text-primary">
                +420 777 123 456
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              Karlínská 12, Praha 8
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-ink mb-4">
            Otevírací doba
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-mono">
            <li className="flex justify-between"><span>Po – Pá</span><span className="text-ink">9 – 18</span></li>
            <li className="flex justify-between"><span>Sobota</span><span className="text-ink">9 – 12</span></li>
            <li className="flex justify-between"><span>Neděle</span><span>zavřeno</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Voltík &amp; Spol.</span>
          <span>made with soldering iron · Praha</span>
        </div>
      </div>
    </footer>
  );
};
