 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Facebook, Linkedin, Instagram } from "lucide-react";
 import { siteContent } from "@/lib/siteContent";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
 
 const Footer = () => {
   const [newsletterName, setNewsletterName] = useState("");
   const [newsletterEmail, setNewsletterEmail] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitted, setSubmitted] = useState(false);
 
   const handleNewsletterSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);

    const { error } = await supabase.from("newsletter_subscribers").insert({
      name: newsletterName || null,
      email: newsletterEmail,
    });

    setIsSubmitting(false);
    if (error) {
      if (error.code === "23505") {
        toast.success("You are already subscribed.");
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    setSubmitted(true);
    setNewsletterName("");
    setNewsletterEmail("");
   };
 
   const socialLinks = [
     { icon: Facebook, href: siteContent.socialLinks.facebook, label: "Facebook" },
     { icon: Linkedin, href: siteContent.socialLinks.linkedin, label: "LinkedIn" },
     { icon: Instagram, href: siteContent.socialLinks.instagram, label: "Instagram" },
   ];
 
   return (
    <footer className="bg-background">
      {/* Top: Logo + section headers */}
      <div className="container mx-auto px-4 pt-12">
        <Link to="/" className="inline-flex items-center gap-3 mb-10">
          <div className="w-10 h-10 flex items-center justify-center">
            <span className="text-gold-gradient text-3xl font-display font-bold">M</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-foreground font-display text-sm tracking-wide">Multicultural</span>
            <span className="text-gold font-display text-sm tracking-wide">Youth Awards</span>
          </div>
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          <h3 className="font-display text-2xl font-bold text-foreground">Stay up to date</h3>
          <h3 className="font-display text-2xl font-bold text-foreground">Get social</h3>
        </div>
      </div>

      {/* Navy band: newsletter form + social icons */}
      <div className="bg-navy mt-6">
        <div className="container mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              {submitted ? (
                <p className="text-gold font-medium">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="max-w-md space-y-5">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 pb-2 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    value={newsletterName}
                    onChange={(e) => setNewsletterName(e.target.value)}
                    className="w-full bg-transparent border-0 border-b border-white/30 text-white placeholder:text-white/50 pb-2 focus:outline-none focus:border-gold transition-colors"
                  />
                  <Button type="submit" variant="gold" disabled={isSubmitting} className="rounded-full px-8">
                    {isSubmitting ? "..." : "Submit"}
                  </Button>
                </form>
              )}
            </div>

            <div className="flex md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-navy hover:bg-gold transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Three columns */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-foreground hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/nominations" className="text-foreground hover:text-gold transition-colors">Nominations</Link></li>
              <li><Link to="/privacy" className="text-foreground hover:text-gold transition-colors">Privacy</Link></li>
              <li><Link to="/copyright" className="text-foreground hover:text-gold transition-colors">Copyright &amp; Disclaimer</Link></li>
              <li><Link to="/contact" className="text-foreground hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Event Partners */}
          <div className="text-center">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-6">Event Partners</h4>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              {siteContent.partners2026.slice(0, 2).map((partner) => (
                <a
                  key={partner.name}
                  href={partner.website || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" loading="lazy" />
                </a>
              ))}
            </div>
          </div>

          {/* Acknowledgement of Country */}
          <div className="text-center">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-6">Acknowledgement of Country</h4>
            <div className="flex justify-center gap-4 mb-5">
              {/* Torres Strait Islander Flag */}
              <div className="w-14 h-9 rounded overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-1/5 bg-[#009933]" />
                  <div className="h-1/5 bg-white" />
                  <div className="h-1/5 bg-[#0000CC]" />
                  <div className="h-1/5 bg-white" />
                  <div className="h-1/5 bg-[#009933]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              {/* Aboriginal Flag */}
              <div className="w-14 h-9 rounded overflow-hidden flex flex-col relative shadow-sm">
                <div className="h-1/2 bg-[#000000]" />
                <div className="h-1/2 bg-[#CC0000]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FFCD00]" />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed mb-3">
              The Multicultural Youth Awards would like to acknowledge the Traditional Owners of the
              Aboriginal land, on which we all live, work, and play.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              We pay our deepest respect to Elders past and present, and any First Nations members who
              are part of the Multicultural Youth Group Industry. We acknowledge that sovereignty has
              never been ceded. This land always was and always will be Aboriginal land.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 pb-8">
        <p className="text-center text-muted-foreground text-sm">
          © 2024 Multicultural Youth Awards | All Rights Reserved
        </p>
      </div>
    </footer>
   );
 };
 
 export default Footer;