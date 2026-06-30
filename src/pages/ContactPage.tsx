 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
 import { Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
 import { siteContent } from "@/lib/siteContent";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
 
 const ContactPage = () => {
   const [form, setForm] = useState({
     fullName: "",
     email: "",
     subject: "",
     message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitted, setSubmitted] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.fullName,
      email: form.email,
      subject: form.subject,
      message: form.message,
    });

    setIsSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
   };
 
   const socialLinks = [
     { icon: Facebook, href: siteContent.socialLinks.facebook, label: "Facebook" },
     { icon: Linkedin, href: siteContent.socialLinks.linkedin, label: "LinkedIn" },
     { icon: Instagram, href: siteContent.socialLinks.instagram, label: "Instagram" },
   ];
 
   return (
     <div className="min-h-screen bg-background pt-32">
       <PageHero
         eyebrow="Contact"
         title={<>Get in <span className="italic text-gold">touch</span></>}
         subtitle="Have questions about nominations, sponsorship, or volunteering? We would love to hear from you."
       />
 
       {/* Contact Content */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
             {/* Contact Cards */}
             <div className="space-y-6">
               <div className="glass-card rounded-xl p-6 border-gold-glow flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                   <Mail className="w-5 h-5 text-gold" />
                 </div>
                 <div>
                   <h3 className="text-foreground font-semibold mb-1">Email</h3>
                   <a 
                     href={`mailto:${siteContent.contactEmail}`} 
                     className="text-muted-foreground hover:text-gold transition-colors"
                   >
                     {siteContent.contactEmail}
                   </a>
                 </div>
               </div>
 
               <div className="glass-card rounded-xl p-6 border-gold-glow flex items-start gap-4">
                 <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                   <MapPin className="w-5 h-5 text-gold" />
                 </div>
                 <div>
                   <h3 className="text-foreground font-semibold mb-1">Location</h3>
                   <p className="text-muted-foreground">{siteContent.contactLocation}</p>
                 </div>
               </div>
 
               <div className="glass-card rounded-xl p-6 border-gold-glow">
                 <h3 className="text-foreground font-semibold mb-4">Follow Us</h3>
                 <div className="flex gap-4">
                   {socialLinks.map((social) => (
                     <a
                       key={social.label}
                       href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-gold/20 hover:text-gold transition-all duration-300"
                       aria-label={social.label}
                     >
                       <social.icon className="w-5 h-5" />
                     </a>
                   ))}
                 </div>
               </div>
             </div>
 
             {/* Contact Form */}
             <div>
               {submitted ? (
                 <div className="glass-card rounded-2xl p-12 border-gold-glow text-center">
                   <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                     <span className="text-gold text-3xl">✓</span>
                   </div>
                   <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                     Message Sent
                   </h2>
                   <p className="text-muted-foreground mb-8">
                     Thank you for your message. We will get back to you as soon as possible.
                   </p>
                   <Button variant="goldOutline" asChild>
                     <Link to="/">Return Home</Link>
                   </Button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border-gold-glow">
                   <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                     Send a Message
                   </h2>
 
                   <div className="space-y-4">
                     <div>
                       <Label htmlFor="fullName">Full name *</Label>
                       <Input
                         id="fullName"
                         value={form.fullName}
                         onChange={(e) => setForm({...form, fullName: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div>
                       <Label htmlFor="email">Email *</Label>
                       <Input
                         id="email"
                         type="email"
                         value={form.email}
                         onChange={(e) => setForm({...form, email: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div>
                       <Label htmlFor="subject">Subject *</Label>
                       <Input
                         id="subject"
                         value={form.subject}
                         onChange={(e) => setForm({...form, subject: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div>
                       <Label htmlFor="message">Message *</Label>
                       <Textarea
                         id="message"
                         value={form.message}
                         onChange={(e) => setForm({...form, message: e.target.value})}
                         required
                         rows={5}
                         className="bg-background border-border mt-1"
                         placeholder="How can we help you?"
                       />
                     </div>
                   </div>
 
                   <Button 
                     type="submit" 
                     variant="gold" 
                     size="lg" 
                     className="w-full mt-8"
                     disabled={isSubmitting}
                   >
                     {isSubmitting ? "Sending..." : "Send Message"}
                   </Button>
                 </form>
               )}
             </div>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default ContactPage;