import truckImg from "@/assets/truck.jpg";
import { Shield, Truck, Clock, Award } from "lucide-react";

const features = [
  { icon: Shield, label: "Segurança", desc: "Produtos certificados e dentro das normas" },
  { icon: Truck, label: "Entrega", desc: "Atendemos Londrina e toda a região" },
  { icon: Clock, label: "+15 anos", desc: "De experiência no mercado de gases" },
  { icon: Award, label: "Qualidade", desc: "Gases de alta pureza e procedência" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-display text-sm tracking-[0.2em] uppercase text-accent mb-2">
              Sobre Nós
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Oximaster Gases
            </h2>
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              A Oximaster Gases está há mais de 15 anos atendendo Londrina e região,
              buscando sempre fornecer a melhor qualidade em gases industriais e medicinais.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed mb-8">
              Fundada em 2010, nossa missão é oferecer segurança, qualidade, confiança
              e preço justo. Trabalhamos com oxigênio, argônio, nitrogênio, CO₂ e misturas
              para solda, atendendo indústrias, hospitais, clínicas e comércios.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <f.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-primary-foreground">
                      {f.label}
                    </p>
                    <p className="text-primary-foreground/60 text-xs">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={truckImg}
              alt="Caminhão Oximaster Gases"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-display text-sm font-bold shadow-lg">
              Desde 2010
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
