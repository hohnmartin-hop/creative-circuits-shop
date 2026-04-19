import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BasicTopic, basicTopics } from "@/data/basics";

interface BasicArticleLayoutProps {
  topic: BasicTopic;
  children: ReactNode;
}

export const BasicArticleLayout = ({ topic, children }: BasicArticleLayoutProps) => {
  const idx = basicTopics.findIndex((t) => t.id === topic.id);
  const prev = idx > 0 ? basicTopics[idx - 1] : null;
  const next = idx < basicTopics.length - 1 ? basicTopics[idx + 1] : null;

  useEffect(() => {
    document.title = `${topic.title} — Základy elektroniky | MaM Voltík`;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", topic.perex);
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/zaklady/${topic.slug}`);
    window.scrollTo({ top: 0 });
  }, [topic.id, topic.perex, topic.slug, topic.title]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="container py-12 md:py-16 max-w-3xl">
          <nav className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">domů</Link>
            <span>/</span>
            <Link to="/zaklady" className="hover:text-primary transition-colors">základy</Link>
            <span>/</span>
            <span className="text-ink">{topic.shortTitle}</span>
          </nav>

          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            // kapitola {topic.number}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-ink mt-3 leading-[1.1]">
            {topic.title}
          </h1>
          <p className="text-lg text-muted-foreground mt-5 leading-relaxed">{topic.perex}</p>

          <div className="prose-basics mt-10 space-y-6 text-ink/90 leading-relaxed">
            {children}
          </div>

          <div className="mt-16 pt-8 border-t border-border grid sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/zaklady/${prev.slug}`}
                className="group p-5 border border-border rounded-sm hover:border-primary transition-colors bg-card"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2">
                  <ArrowLeft className="h-3 w-3" /> předchozí
                </span>
                <div className="font-serif text-lg text-ink mt-1 group-hover:text-primary transition-colors">
                  {prev.title}
                </div>
              </Link>
            ) : (
              <Link
                to="/zaklady"
                className="group p-5 border border-border rounded-sm hover:border-primary transition-colors bg-card"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2">
                  <ArrowLeft className="h-3 w-3" /> rozcestník
                </span>
                <div className="font-serif text-lg text-ink mt-1 group-hover:text-primary transition-colors">
                  Všechny kapitoly
                </div>
              </Link>
            )}
            {next && (
              <Link
                to={`/zaklady/${next.slug}`}
                className="group p-5 border border-border rounded-sm hover:border-primary transition-colors bg-card sm:text-right"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground inline-flex items-center gap-2 sm:justify-end sm:w-full">
                  další <ArrowRight className="h-3 w-3" />
                </span>
                <div className="font-serif text-lg text-ink mt-1 group-hover:text-primary transition-colors">
                  {next.title}
                </div>
              </Link>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};
