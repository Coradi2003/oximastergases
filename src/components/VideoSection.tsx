import warehouse from "@/assets/warehouse.jpg";
import warehouse2 from "@/assets/warehouse2.jpg";

const VideoSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-display text-sm tracking-[0.2em] uppercase text-accent mb-2">
            Nosso Estoque
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Estrutura & Capacidade
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[9/16] max-h-[600px] mx-auto w-full max-w-sm">
            <video
              src="/videos/estoque.mp4"
              controls
              playsInline
              preload="metadata"
              poster={warehouse.toString()}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full font-display text-xs uppercase tracking-wider">
              Vídeo do Estoque
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={warehouse}
              alt="Estoque de cilindros Oximaster"
              className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
            <img
              src={warehouse2}
              alt="Cilindros organizados no depósito"
              className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="col-span-2 bg-card rounded-xl p-6 shadow-lg border border-accent/20">
              <p className="font-display text-lg font-bold text-foreground mb-2">
                Cilindros de Qualidade, Sempre à Disposição!
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Estoque pronto para atender você. Mantemos um amplo estoque de cilindros
                de todos os tipos para garantir agilidade na entrega e disponibilidade
                imediata para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
