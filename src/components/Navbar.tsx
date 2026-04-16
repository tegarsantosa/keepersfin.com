import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Keepers Logo"
            className="h-16 w-auto"
          />

          <span className="hidden sm:inline text-primary-foreground/70 text-xs tracking-[0.3em] uppercase font-sans">
            Keepers Financial Services
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a href="https://calendly.com/nilaskeepers/30min" target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="default" className="ml-2">
              <Phone className="w-4 h-4 mr-1" />
              Book a Consultation
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors tracking-wide uppercase py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="https://calendly.com/nilaskeepers/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="gold" className="w-full mt-2">
                <Phone className="w-4 h-4 mr-1" />
                Book a Consultation
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
