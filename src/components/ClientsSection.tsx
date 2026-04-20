import { useEffect, useState } from "react";

const ClientsSection = () => {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    const importLogos = async () => {
      const logoModules = import.meta.glob(
        "/src/assets/clients/*.{png,jpg,jpeg,svg,webp}",
        { eager: true }
      );

      const logoPaths: string[] = Object.values(logoModules).map(
        (mod: any) => mod.default
      );

      setLogos(logoPaths);
    };

    importLogos();
  }, []);

  return (
    <section id="clients" className="pb-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase font-sans">
            Our Clients
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
            Trusted by Leading Companies
          </h2>
        </div>

        {/* Content */}
        {logos.length === 0 ? (
          <p className="text-center text-muted-foreground text-sm">
            Client logos will appear here once added to{" "}
            <span className="font-mono">src/assets/clients/</span>
          </p>
        ) : (
          <div className="relative">
            <div className="flex animate-marquee group items-center">
              {/* First set */}
              {logos.map((logo, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-10">
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="h-12 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}

              {/* Duplicate set for loop */}
              {logos.map((logo, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-10">
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="h-12 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Pause on hover */}
      <style>{`
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;