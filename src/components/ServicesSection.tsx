import { Building2, Calculator, FileText, BarChart3, Users } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Incorporation & Immigration",
    description:
      "End-to-end company setup for PT, PMA, and representative offices, plus work permit and visa processing for foreign professionals.",
  },
  {
    icon: Calculator,
    title: "Accounting & Payroll",
    description:
      "Accurate bookkeeping, monthly financial reporting, and compliant payroll management tailored to Indonesian regulations.",
  },
  {
    icon: FileText,
    title: "Financial & Tax Services",
    description:
      "Strategic tax planning, annual filings, and compliance advisory to optimize your obligations and minimize risk.",
  },
  {
    icon: BarChart3,
    title: "LKPM Reporting for PMA",
    description:
      "Timely and accurate Investment Activity Reports to BKPM, ensuring your foreign investment entity stays fully compliant.",
  },
  {
    icon: Users,
    title: "Business Support & Hiring",
    description:
      "Recruitment, HR advisory, and operational support to help you build a high-performing team in Indonesia.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-surface-elevated">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase font-sans">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            We provide a full spectrum of services designed to simplify doing
            business in Indonesia, so you can focus on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-card rounded-xl p-8 border border-border hover:border-gold/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <s.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
