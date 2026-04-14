import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface-elevated">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-[0.25em] uppercase font-sans">
            Get in Touch
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mt-4 mb-4">
            Let's Start the Conversation
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed">
            Ready to simplify your business operations in Indonesia? Reach out
            to our team for a free initial consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-sm font-sans mb-1 text-foreground">Office Address</h4>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">
                  Jl. Sunset Road No. 88, Seminyak,<br />
                  Badung, Bali 80361, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-sm font-sans mb-1 text-foreground">Phone</h4>
                <a href="tel:+6281234567890" className="text-muted-foreground text-sm font-sans hover:text-gold transition-colors">
                  +62 812 3456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-sm font-sans mb-1 text-foreground">Email</h4>
                <a href="mailto:info@keepersfinancial.com" className="text-muted-foreground text-sm font-sans hover:text-gold transition-colors">
                  info@keepersfinancial.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-semibold text-sm font-sans mb-1 text-foreground">WhatsApp</h4>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm font-sans hover:text-gold transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium font-sans text-foreground mb-1.5 block">Full Name *</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="text-sm font-medium font-sans text-foreground mb-1.5 block">Email *</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@company.com"
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium font-sans text-foreground mb-1.5 block">Phone / WhatsApp</label>
              <Input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+62 812 3456 7890"
                maxLength={20}
              />
            </div>
            <div>
              <label className="text-sm font-medium font-sans text-foreground mb-1.5 block">How can we help? *</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your business needs..."
                rows={5}
                maxLength={1000}
              />
            </div>
            <Button variant="gold" size="lg" type="submit" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
