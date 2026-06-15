const Footer = () => {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="font-serif text-xl font-bold mb-2">KEEPERS</h3>
            <p className="text-surface-dark-foreground/50 text-sm font-sans leading-relaxed">
              Financial Services
            </p>
            <p className="text-surface-dark-foreground/40 text-sm font-sans mt-4 leading-relaxed">
              Empowering businesses with precise, compliant, and strategic
              financial services in Indonesia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm font-sans mb-4 text-gold uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["About", "Services", "Blog", "Testimonials", "Contact"].map((l) => (
                <a
                  key={l}
                  href={l === "Blog" ? "/blog" : `#${l.toLowerCase()}`}
                  className="text-surface-dark-foreground/50 text-sm font-sans hover:text-gold transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm font-sans mb-4 text-gold uppercase tracking-wider">
              Legal
            </h4>
            <div className="flex flex-col gap-2 text-surface-dark-foreground/50 text-sm font-sans">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-dark-foreground/10 pt-8 text-center">
          <p className="text-surface-dark-foreground/40 text-sm font-sans">
            © {new Date().getFullYear()} Keepers Financial Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
