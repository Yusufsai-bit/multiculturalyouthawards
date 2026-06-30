 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useSponsors, usePartners } from "@/lib/queries";
 
 const PartnersPage = () => {
  const { data: sponsors = [] } = useSponsors();
  const { data: allPartners = [] } = usePartners();
  const majorPartners = allPartners.filter((p) => p.tier === "major_partner");
  const supporters = allPartners.filter((p) => p.tier === "supporter");
   const [form, setForm] = useState({
     organisation: "",
     contactName: "",
     email: "",
     phone: "",
     message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitted, setSubmitted] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);

    const { error } = await supabase.from("contact_submissions").insert({
      name: form.contactName,
      email: form.email,
      phone: form.phone,
      subject: `Sponsor enquiry: ${form.organisation}`,
      message: form.message,
    });

    setIsSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setSubmitted(true);
   };
 
  const PartnerGrid = ({ partners, title }: { partners: { name: string; logo_url: string | null; url: string | null }[]; title: string }) => (
    partners.length === 0 ? null : (
     <div className="mb-12">
       <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">{title}</h3>
     <div className="flex flex-wrap justify-center gap-8">
         {partners.map((partner, index) => (
         partner.url ? (
           <a
             key={index}
             href={partner.url}
             target="_blank"
             rel="noopener noreferrer"
             className="group flex flex-col items-center"
           >
             <div className="w-40 h-24 rounded-xl bg-white flex items-center justify-center border border-border group-hover:border-gold/50 transition-all group-hover:shadow-lg group-hover:shadow-gold/10">
              {partner.logo_url ? (
                 <img 
                  src={partner.logo_url} 
                   alt={partner.name} 
                   className="max-w-[80%] max-h-[70%] object-contain" 
                 />
               ) : (
                 <span className="text-gold font-display text-3xl font-bold">
                   {partner.name.charAt(0)}
                 </span>
               )}
             </div>
             <span className="text-muted-foreground text-xs mt-2 text-center max-w-[140px] group-hover:text-gold transition-colors">
               {partner.name}
             </span>
           </a>
         ) : (
           <div
             key={index}
             className="flex flex-col items-center"
           >
             <div className="w-40 h-24 rounded-xl bg-white flex items-center justify-center border border-border">
              {partner.logo_url ? (
                 <img 
                  src={partner.logo_url} 
                   alt={partner.name} 
                   className="max-w-[80%] max-h-[70%] object-contain" 
                 />
               ) : (
                 <span className="text-gold font-display text-3xl font-bold">
                   {partner.name.charAt(0)}
                 </span>
               )}
             </div>
             <span className="text-muted-foreground text-xs mt-2 text-center max-w-[140px]">
               {partner.name}
             </span>
           </div>
         )
         ))}
       </div>
     </div>
    )
   );
 
   return (
     <div className="min-h-screen bg-background pt-32">
       <PageHero
         eyebrow="Partners"
         title={<>Be part of the <span className="italic text-gold">change</span></>}
         subtitle="Join us in celebrating and empowering Australia's multicultural youth leaders"
       >
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button variant="gold" size="lg" className="min-w-[180px] tracking-[0.2em] uppercase text-xs font-bold" asChild>
             <a href="#sponsor-form">Sponsor</a>
           </Button>
           <Button variant="goldOutline" size="lg" className="min-w-[180px] tracking-[0.2em] uppercase text-xs font-bold" asChild>
             <Link to="/contact">Contact us</Link>
           </Button>
         </div>
       </PageHero>
 
       {/* Partner Logos */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
          <PartnerGrid partners={majorPartners} title="Major Partners" />
          <div className="section-divider my-12" />
          <PartnerGrid partners={sponsors} title="MYA Sponsors" />
          <div className="section-divider my-12" />
          <PartnerGrid partners={supporters} title="MYA Supporters" />
         </div>
       </section>
 
       <div className="section-divider" />
 
       {/* Sponsor Enquiry Form */}
       <section id="sponsor-form" className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4">
           <div className="max-w-xl mx-auto">
             {submitted ? (
               <div className="glass-card rounded-2xl p-12 border-gold-glow text-center">
                 <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                   <span className="text-gold text-3xl">✓</span>
                 </div>
                 <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                   Enquiry Received
                 </h2>
                 <p className="text-muted-foreground mb-8">
                   Thank you for your interest in partnering with us. A member of our team will be in touch shortly.
                 </p>
                 <Button variant="goldOutline" asChild>
                   <Link to="/">Return Home</Link>
                 </Button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border-gold-glow">
                 <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-center">
                   Sponsor Enquiry
                 </h2>
                 <p className="text-muted-foreground text-center mb-8">
                   Interested in becoming a sponsor or partner? Get in touch with us.
                 </p>
 
                 <div className="space-y-4">
                   <div>
                     <Label htmlFor="organisation">Organisation *</Label>
                     <Input
                       id="organisation"
                       value={form.organisation}
                       onChange={(e) => setForm({...form, organisation: e.target.value})}
                       required
                       className="bg-background border-border mt-1"
                     />
                   </div>
                   <div>
                     <Label htmlFor="contactName">Contact name *</Label>
                     <Input
                       id="contactName"
                       value={form.contactName}
                       onChange={(e) => setForm({...form, contactName: e.target.value})}
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
                     <Label htmlFor="phone">Phone</Label>
                     <Input
                       id="phone"
                       type="tel"
                       value={form.phone}
                       onChange={(e) => setForm({...form, phone: e.target.value})}
                       className="bg-background border-border mt-1"
                     />
                   </div>
                   <div>
                     <Label htmlFor="message">Message</Label>
                     <Textarea
                       id="message"
                       value={form.message}
                       onChange={(e) => setForm({...form, message: e.target.value})}
                       rows={4}
                       className="bg-background border-border mt-1"
                       placeholder="Tell us about your interest in partnering..."
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
                   {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                 </Button>
               </form>
             )}
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default PartnersPage;