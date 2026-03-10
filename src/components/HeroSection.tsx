import heroBg from "@/assets/hero-bg.jpg"; 
import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Cilindros de gases industriais"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="absolute top-20 right-10 w-72 h-72 rounded-full border border-accent/20 opacity-30" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-secondary/20 opacity-20" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <img
          src={logo}
          alt="Logo"
          className="mx-auto mb-8 w-[500px] mt-24"
        />

        <p className="font-display text-sm md:text-base tracking-[0.3em] uppercase text-accent">
          Gases Industriais & Medicinais
        </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.95]">
          <span className="text-white">Qualidade e</span>
          <br />
          <span className="text-gradient">Confiança</span>
          <br />
          <span className="text-white">desde 2010</span>
        </h1>

        <p className="max-w-xl mx-auto text-primary-foreground/70 text-lg mb-10 font-light">
          Fornecemos oxigênio, argônio, nitrogênio, CO₂ e gases de solda para
          indústria, comércio e saúde em Londrina e região.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5543999251330?text=Olá! Gostaria de fazer um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-display text-sm uppercase tracking-wider hover:brightness-110 transition glow-primary"
          >
            Solicitar Orçamento
          </a>

          <a
            href="#produtos"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-display text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition"
          >
            Ver Produtos
          </a>
        </div>
      </div>

      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;