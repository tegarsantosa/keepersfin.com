import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

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

    {/* GRID CONTACT */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      
      {/* Address */}
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

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
          <Phone className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className="font-semibold text-sm font-sans mb-1 text-foreground">Phone</h4>
          <a href="https://wa.me/6281529251463" className="text-muted-foreground text-sm font-sans hover:text-gold transition-colors">
            +62 815 2925 1463
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
          <Mail className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className="font-semibold text-sm font-sans mb-1 text-foreground">Email</h4>
          <a href="mailto:halokeepers@gmail.com" className="text-muted-foreground text-sm font-sans hover:text-gold transition-colors">
            halokeepers@gmail.com
          </a>
        </div>
      </div>

      {/* LinkedIn */}
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="w-5 h-5 text-gold" />
        </div>
        <div>
          <h4 className="font-semibold text-sm font-sans mb-1 text-foreground">LinkedIn</h4>
          <a
            href="https://www.linkedin.com/company/keepers-financial-servicess/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground text-sm font-sans hover:text-gold transition-colors"
          >
            Connect with us on LinkedIn
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default ContactSection;
