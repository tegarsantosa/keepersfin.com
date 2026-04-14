import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Bali business landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="animate-fade-in-up">
            <span className="inline-block text-gold text-sm font-semibold tracking-[0.25em] uppercase mb-6 font-sans">
              Trusted Financial Partner in Indonesia
            </span>
          </div>

          <h1 className="animate-fade-in-up animation-delay-200 text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
            Navigate Indonesia's{" "}
            <span className="gold-text-gradient">Financial Landscape</span>{" "}
            with Confidence
          </h1>

          <p className="animate-fade-in-up animation-delay-400 text-lg text-primary-foreground/75 leading-relaxed mb-10 max-w-xl font-sans">
            From company incorporation to tax compliance, we empower
            entrepreneurs and foreign investors to build and scale in Indonesia
            — with clarity, precision, and peace of mind.
          </p>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-4">
            <a href="#contact">
              <Button variant="hero" size="lg" className="gap-2">
                Book a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#services">
              <Button variant="gold-outline" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Explore Services
              </Button>
            </a>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-in-up animation-delay-600 mt-14 flex items-center gap-8 text-primary-foreground/50 text-sm font-sans">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>500+ Companies Served</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
