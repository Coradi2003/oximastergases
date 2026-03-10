import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-oximaster.jpg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Produtos", href: "#produtos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Oximaster Gases" className="h-10 w-auto rounded" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors tracking-wide uppercase font-display"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+554333218080"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition"
          >
            <Phone className="w-4 h-4" />
            (43) 3321-8080
          </a>
          <a
            href="tel:+5543999251330"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:brightness-110 transition"
          >
            <Phone className="w-4 h-4" />
            (43) 99925-1330
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-accent font-display text-sm uppercase tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+554333218080"
            className="mx-6 mt-2 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            (43) 3321-8080
          </a>
          <a
            href="tel:+5543999251330"
            className="mx-6 mt-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-semibold text-sm"
          >
            <Phone className="w-4 h-4" />
            (43) 99925-1330
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
