import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="section-divider mb-24" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions about nominations, sponsorship, or volunteering? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6 border-gold-glow flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Email</h3>
                  <a href="mailto:info@multiculturalyouthawards.com.au" className="text-muted-foreground hover:text-gold transition-colors">
                    info@multiculturalyouthawards.com.au
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border-gold-glow flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Phone</h3>
                  <a href="tel:+61399999999" className="text-muted-foreground hover:text-gold transition-colors">
                    +61 3 9999 9999
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 border-gold-glow flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Melbourne, Victoria, Australia</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-muted-foreground text-sm">Follow us:</span>
                <div className="flex gap-3">
                  {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card rounded-2xl p-8 border-gold-glow">
              <h3 className="font-sans text-2xl font-bold text-foreground mb-6">
                Get Involved
              </h3>
              <div className="space-y-4">
                <Button variant="gold" className="w-full justify-center" size="lg">
                  Submit a Nomination
                </Button>
                <Button variant="goldOutline" className="w-full justify-center" size="lg">
                  Become a Sponsor
                </Button>
                <Button variant="secondary" className="w-full justify-center" size="lg">
                  Volunteer With Us
                </Button>
              </div>
              <p className="text-muted-foreground text-sm text-center mt-6">
                Nominations for the 2025 awards are now open!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;