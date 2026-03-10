import productOxigenio from "@/assets/product-oxigenio.jpg";
import productArgonio from "@/assets/product-argonio.jpg";
import productNitrogenio from "@/assets/product-nitrogenio.jpg";
import productCO2 from "@/assets/product-co2.jpg";
import productSolda from "@/assets/product-solda.jpg";

const products = [
  {
    name: "Oxigênio",
    formula: "O₂",
    image: productOxigenio,
    description:
      "O Oxigênio Medicinal possui o cilindro da cor verde, geralmente utilizado em Clínicas e Hospitais para tratamentos respiratórios. Também utilizado em processos industriais de corte e solda.",
    color: "border-secondary",
  },
  {
    name: "Argônio",
    formula: "Ar",
    image: productArgonio,
    description:
      "Gás nobre inerte utilizado em processos de soldagem TIG e MIG, proporcionando proteção contra oxidação e garantindo soldas de alta qualidade.",
    color: "border-primary",
  },
  {
    name: "Nitrogênio",
    formula: "N₂",
    image: productNitrogenio,
    description:
      "Amplamente utilizado na indústria alimentícia para conservação, em laboratórios e em processos de criogenia. Essencial para diversas aplicações industriais.",
    color: "border-muted-foreground",
  },
  {
    name: "Dióxido de Carbono",
    formula: "CO₂",
    image: productCO2,
    description:
      "O CO₂ é utilizado de diversas maneiras — na carbonatação de bebidas, em extintores de incêndio, processos de soldagem e na indústria alimentícia.",
    color: "border-accent",
  },
  {
    name: "Gás de Solda",
    formula: "Mix",
    image: productSolda,
    description:
      "Fornecemos Mistura de Solda para uma soldagem perfeita! Gases industriais de alta pureza para processos MIG, MAG e TIG.",
    color: "border-destructive",
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-sm tracking-[0.2em] uppercase text-secondary mb-2">
            Nossos Produtos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Gases do Ar
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className={`group bg-card rounded-xl overflow-hidden border-t-4 ${p.color} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="h-56 overflow-hidden bg-muted flex items-center justify-center">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {p.name}
                  </h3>
                  <span className="font-display text-xs text-muted-foreground tracking-wider">
                    {p.formula}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <a
                  href={`https://wa.me/5543999251330?text=Olá! Gostaria de solicitar um orçamento de ${p.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center bg-secondary text-secondary-foreground px-4 py-3 rounded-lg font-display text-xs uppercase tracking-widest hover:brightness-110 transition"
                >
                  Solicitar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
