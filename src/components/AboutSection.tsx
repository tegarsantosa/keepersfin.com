import { Shield, Eye, Target, Zap, Handshake } from "lucide-react";

const values = [
  { icon: Shield, label: "Integrity", desc: "Uncompromising ethical standards in every engagement." },
  { icon: Eye, label: "Clarity", desc: "Transparent communication, no hidden complexities." },
  { icon: Target, label: "Accuracy", desc: "Precision in every report, filing, and advisory." },
  { icon: Zap, label: "Efficiency", desc: "Streamlined processes that save you time and cost." },
  { icon: Handshake, label: "Partnership", desc: "We grow when you grow — your success is ours." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-surface-dark text-surface-dark-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase font-sans">
              Who We Are
            </span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mt-4 mb-6">
              Your Trusted Financial Partner in{" "}
              <span className="gold-text-gradient">Indonesia</span>
            </h2>
            <p className="text-surface-dark-foreground/70 leading-relaxed font-sans mb-6">
              Keepers Financial Services was founded with a singular mission: to
              bridge the gap between international ambition and Indonesian
              regulatory reality. Based in Bali, we combine deep local expertise
              with a global perspective to deliver financial, tax, and corporate
              advisory services that are both rigorous and approachable.
            </p>
            <p className="text-surface-dark-foreground/70 leading-relaxed font-sans mb-8">
              Whether you're an entrepreneur launching your first venture in
              Indonesia, a foreign investor navigating PMA regulations, or an
              established SME seeking operational excellence — Keepers is the
              partner you can rely on.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-surface-dark-foreground/10 rounded-xl p-6">
                <h3 className="text-gold font-serif font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-surface-dark-foreground/60 text-sm font-sans leading-relaxed">
                  To empower businesses with precise, compliant, and strategic
                  financial services that unlock growth in Indonesia's dynamic
                  market.
                </p>
              </div>
              <div className="border border-surface-dark-foreground/10 rounded-xl p-6">
                <h3 className="text-gold font-serif font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-surface-dark-foreground/60 text-sm font-sans leading-relaxed">
                  To be the most trusted financial services partner for
                  international businesses operating in Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Values */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-8">
              Our Core Values
            </h3>
            <div className="space-y-5">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl border border-surface-dark-foreground/10 hover:border-gold/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm font-sans mb-1">{v.label}</h4>
                    <p className="text-surface-dark-foreground/60 text-sm font-sans leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
