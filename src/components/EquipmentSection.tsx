import equipOxicorte from "@/assets/equip-oxicorte.jpg";
import equipKitCompleto from "@/assets/equip-kit-completo.webp";
import equipMacarico from "@/assets/equip-macarico.webp";
import equipSolda from "@/assets/equip-solda.jpg";
import equipCilindroOxigenio from "@/assets/equip-cilindro-oxigenio.webp";
import equipCilindrosDiversos from "@/assets/equip-cilindros-diversos.webp";
import equipCilindrosMistura from "@/assets/equip-cilindros-mistura.webp";
import equipCilindrosIndustriais from "@/assets/equip-cilindros-industriais.webp";

const equipment = [
  {
    name: "Kit Oxicorte Portátil",
    image: equipOxicorte,
    description:
      "Kit completo com cilindros, reguladores, mangueiras e maçarico para corte e solda oxiacetilênica.",
  },
  {
    name: "Kit Completo com Acessórios",
    image: equipKitCompleto,
    description:
      "Conjunto profissional com carrinho, cilindros, reguladores, mangueiras, maçarico e todos os acessórios necessários.",
  },
  {
    name: "Kit Maçarico Profissional",
    image: equipMacarico,
    description:
      "Kit de maçarico com reguladores, mangueira, válvulas corta-chama, bicos e ferramentas para corte e solda.",
  },
  {
    name: "Soldagem MIG/MAG/TIG",
    image: equipSolda,
    description:
      "Equipamentos e gases para soldagem industrial de alta performance. Qualidade e precisão para seu projeto.",
  },
  {
    name: "Cilindro de Oxigênio com Fluxômetro",
    image: equipCilindroOxigenio,
    description:
      "Cilindro de alumínio com válvula, fluxômetro e carga de oxigênio. Ideal para uso medicinal e industrial.",
  },
  {
    name: "Cilindros de Oxigênio - Diversos Tamanhos",
    image: equipCilindrosDiversos,
    description:
      "Cilindros de oxigênio em alumínio e aço, disponíveis em diversos tamanhos para atender sua necessidade.",
  },
  {
    name: "Cilindros para Mistura de Gases",
    image: equipCilindrosMistura,
    description:
      "Cilindros para argônio, nitrogênio, CO2, oxigênio e misturas. Venda e aluguel em diversos volumes.",
  },
  {
    name: "Cilindros Industriais",
    image: equipCilindrosIndustriais,
    description:
      "Linha completa de cilindros industriais para todos os tipos de gases. Venda, aluguel e recarga.",
  },
];

const EquipmentSection = () => {
  return (
    <section id="equipamentos" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.2em] uppercase text-secondary mb-2">
            Equipamentos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Vendas e Aluguel de Equipamentos
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item) => (
            <div
              key={item.name}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="h-56 overflow-hidden bg-white flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <a
                  href={`https://wa.me/5543999251330?text=Olá! Gostaria de saber mais sobre ${item.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-display text-xs uppercase tracking-widest hover:brightness-110 transition"
                >
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
