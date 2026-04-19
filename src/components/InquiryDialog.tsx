import { useState } from "react";
import { Product } from "@/data/products";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface InquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product | null;
}

export const InquiryDialog = ({ open, onOpenChange, product }: InquiryDialogProps) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!product) return;
    setSubmitting(true);
    // Mock submit — v dalším kroku můžeme připojit Lovable Cloud + e-mail.
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast.success("Poptávka odeslána", {
        description: `Ozveme se vám ohledně: ${product.name}.`,
      });
    }, 600);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg rounded-sm bg-card">
        <DialogHeader>
          <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
            Poptávka
          </span>
          <DialogTitle className="font-serif text-2xl text-ink">
            {product?.name ?? "Mám zájem"}
          </DialogTitle>
          <DialogDescription className="text-sm">
            Vyplňte kontakt a počet kusů. Odpovíme do 24 hodin s cenovou nabídkou
            a termínem expedice.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider">
                Jméno
              </Label>
              <Input id="name" required className="rounded-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider">
                E-mail
              </Label>
              <Input id="email" type="email" required className="rounded-sm" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider">
                Telefon (nepovinné)
              </Label>
              <Input id="phone" type="tel" className="rounded-sm" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qty" className="font-mono text-xs uppercase tracking-wider">
                Počet kusů
              </Label>
              <Input id="qty" type="number" min={1} defaultValue={1} required className="rounded-sm" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg" className="font-mono text-xs uppercase tracking-wider">
              Zpráva
            </Label>
            <Textarea
              id="msg"
              rows={3}
              placeholder="Doplňující dotaz, požadavky na dodání…"
              className="rounded-sm"
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="rounded-sm font-mono text-xs uppercase tracking-wider"
            >
              Zrušit
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              className="rounded-sm font-mono text-xs uppercase tracking-wider"
            >
              {submitting ? "Odesílám…" : "Odeslat poptávku"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
