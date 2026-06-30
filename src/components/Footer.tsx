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
     <footer className="bg-secondary/30 border-t border-border">
       {/* Newsletter Section */}
       <div className="container mx-auto px-4 py-12">
         <div className="max-w-xl mx-auto text-center mb-8">
           <h3 className="font-display text-2xl font-bold text-foreground mb-2">
             Stay Updated
           </h3>
           <p className="text-muted-foreground">
            Subscribe to receive updates about the awards, nominations and events.
           </p>
         </div>
         
         {submitted ? (
           <div className="max-w-md mx-auto text-center">
             <p className="text-gold font-medium">Thank you for subscribing!</p>
           </div>
         ) : (
           <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
             <div className="flex flex-col sm:flex-row gap-3">
               <Input
                 type="text"
                 placeholder="Your name"
                 value={newsletterName}
                 onChange={(e) => setNewsletterName(e.target.value)}
                 required
                 className="bg-background border-border"
               />
               <Input
                 type="email"
                 placeholder="Your email"
                 value={newsletterEmail}
                 onChange={(e) => setNewsletterEmail(e.target.value)}
                 required
                 className="bg-background border-border"
               />
               <Button type="submit" variant="gold" disabled={isSubmitting}>
                 {isSubmitting ? "..." : "Subscribe"}
               </Button>
             </div>
           </form>
         )}
 
         {/* Social Links */}
         <div className="flex justify-center gap-4 mt-8">
           {socialLinks.map((social) => (
             <a
               key={social.label}
               href={social.href}
               target="_blank"
               rel="noopener noreferrer"
               className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold transition-all duration-300"
               aria-label={social.label}
             >
               <social.icon className="w-5 h-5" />
             </a>
           ))}
         </div>
       </div>
 
       <div className="section-divider" />
 
       {/* Quick Links */}
       <div className="container mx-auto px-4 py-8">
         <div className="flex flex-wrap justify-center gap-6 text-sm mb-8">
           <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">Home</Link>
           <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">About</Link>
          <Link to="/awards" className="text-muted-foreground hover:text-gold transition-colors">Awards</Link>
           <Link to="/nominations" className="text-muted-foreground hover:text-gold transition-colors">Nominations</Link>
           <Link to="/partners" className="text-muted-foreground hover:text-gold transition-colors">Partners</Link>
          <Link to="/winners" className="text-muted-foreground hover:text-gold transition-colors">Winners 2024</Link>
           <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</Link>
           <Link to="/privacy" className="text-muted-foreground hover:text-gold transition-colors">Privacy</Link>
           <Link to="/copyright" className="text-muted-foreground hover:text-gold transition-colors">Copyright and disclaimer</Link>
         </div>
       </div>
 
       <div className="section-divider" />
 
       {/* Acknowledgement of Country */}
       <div className="container mx-auto px-4 py-8">
         <div className="max-w-3xl mx-auto text-center">
           <h4 className="font-display text-lg font-semibold text-foreground mb-4">
             Acknowledgement of Country
           </h4>
           <p className="text-muted-foreground text-sm leading-relaxed mb-6">
             The Multicultural Youth Awards acknowledges the Traditional Owners of the lands on which we 
             live, work and gather. We pay our respects to Elders past and present and extend that respect 
             to all Aboriginal and Torres Strait Islander peoples. We recognise that sovereignty was never 
             ceded and that this land always was and always will be Aboriginal land.
           </p>
           <div className="flex justify-center gap-4">
             {/* Aboriginal Flag */}
             <div className="w-12 h-8 rounded overflow-hidden flex flex-col relative">
               <div className="h-1/2 bg-[#000000]" />
               <div className="h-1/2 bg-[#CC0000]" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-3 h-3 rounded-full bg-[#FFCD00]" />
               </div>
             </div>
             {/* Torres Strait Islander Flag */}
             <div className="w-12 h-8 rounded overflow-hidden relative">
               <div className="absolute inset-0 flex flex-col">
                 <div className="h-1/5 bg-[#009933]" />
                 <div className="h-3/5 bg-[#0000CC]" />
                 <div className="h-1/5 bg-[#009933]" />
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-3 h-3 bg-white" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
               </div>
             </div>
           </div>
         </div>
       </div>
 
       <div className="section-divider" />
 
       {/* Copyright */}
       <div className="container mx-auto px-4 py-6">
         <p className="text-center text-muted-foreground text-sm">
          © 2024 Multicultural Youth Awards. All rights reserved.
         </p>
       </div>
     </footer>
   );
 };
 
 export default Footer;