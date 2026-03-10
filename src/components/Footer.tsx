import logo from "@/assets/logo-oximaster.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Oximaster" className="h-8 rounded" />
          <span className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Oximaster Gases. Todos os direitos reservados.
          </span>
        </div>
        <p className="text-primary-foreground/40 text-xs">
          Av. Das Maritacas, 930 — Londrina, PR | (43) 3321-8080 | (43) 99925-1330
        </p>
      </div>
    </footer>
  );
};

export default Footer;
