import { MapPin, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.2em] uppercase text-secondary mb-2">
            Fale Conosco
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border hover:shadow-xl transition">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-sm font-bold text-foreground mb-2">Endereço</h3>
            <p className="text-muted-foreground text-sm">
              Av. Das Maritacas, 930
              <br />
              Londrina - PR
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border hover:shadow-xl transition">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-sm font-bold text-foreground mb-2">Telefone</h3>
            <a href="tel:+554333218080" className="text-muted-foreground text-sm hover:text-primary transition block">
              (43) 3321-8080
            </a>
            <a href="tel:+5543999251330" className="text-muted-foreground text-sm hover:text-primary transition block mt-1">
              (43) 99925-1330
            </a>
          </div>

          <div className="bg-card rounded-xl p-8 text-center shadow-lg border border-border hover:shadow-xl transition">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-sm font-bold text-foreground mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/5543999251330?text=Olá! Gostaria de fazer um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-sm hover:text-secondary transition"
            >
              Enviar mensagem
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <iframe
            title="Localização Oximaster Gases"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5!2d-51.16!3d-23.31!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE4JzM2LjAiUyA1McKwMDknMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
