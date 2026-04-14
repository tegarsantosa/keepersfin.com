import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus van der Berg",
    role: "CEO, SurfTech Bali",
    text: "Keepers made our PMA incorporation effortless. Their team handled every detail — from BKPM to tax registration — so we could focus on building our product. Absolutely indispensable.",
  },
  {
    name: "Sarah Chen",
    role: "Co-founder, GreenLeaf Ventures",
    text: "We needed a partner who understood both international standards and Indonesian regulations. Keepers delivered with precision, professionalism, and genuine care for our success.",
  },
  {
    name: "David Santoso",
    role: "Director, PT Maju Bersama",
    text: "From payroll to annual tax filings, Keepers has been our financial backbone for over three years. Their attention to detail and proactive advisory have saved us significant costs.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase font-sans">
            Client Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
            Trusted by Businesses Across Indonesia
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-8 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm font-sans">{t.name}</p>
                <p className="text-muted-foreground text-xs font-sans">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
