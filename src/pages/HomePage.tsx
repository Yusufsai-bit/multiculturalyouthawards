 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Calendar, MapPin, Award, Users, Heart, Megaphone, ArrowRight } from "lucide-react";
 import { siteContent, getNominationButtonText, areNominationsOpen } from "@/lib/siteContent";
import SectionHeading from "@/components/SectionHeading";
 
 const HomePage = () => {
   return (
     <div className="min-h-screen bg-background">
      {/* Hero Section — Editorial Prestige */}
        <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden pt-32 pb-24">
          {/* Radial gold glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,hsl(var(--gold)/0.08),transparent_70%)]" />

          {/* Large faded edition numeral */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute bottom-6 left-1/2 -translate-x-1/2 font-numeral leading-none text-[28vw] md:text-[20rem] text-foreground/[0.04]"
          >
            2024
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="relative max-w-4xl mx-auto text-center">
              {/* Concentric editorial frames */}
              <div className="absolute -inset-x-12 -inset-y-12 border border-gold/10 pointer-events-none hidden lg:block" />
              <div className="absolute -inset-x-16 -inset-y-16 border border-gold/5 pointer-events-none hidden lg:block" />

              {/* Pre-header vertical rule */}
              <div className="mx-auto w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent mb-8 animate-fade-in" />

              {/* Eyebrow */}
              <span className="block text-gold text-[11px] tracking-[0.4em] uppercase font-semibold mb-6 animate-fade-in">
                {siteContent.eventLocation}
              </span>

              {/* Main Title */}
            <h1 className="font-numeral uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
                <span className="text-foreground">Celebrating Australia's </span>
                <span className="text-gold">multicultural youth</span>
              </h1>

              {/* Tagline */}
              <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                Honouring the brilliance, resilience and leadership of young Australians shaping our shared future across every community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.45s' }}>
                <Button
                  variant="gold"
                  size="xl"
                  className="min-w-[220px] tracking-[0.2em] uppercase text-xs font-bold"
                  asChild
                  disabled={siteContent.nominationsStatus === 'closed'}
                >
                  <Link to="/nominations">
                    {getNominationButtonText(siteContent.nominationsStatus)}
                  </Link>
                </Button>
                <Button variant="goldOutline" size="xl" className="min-w-[220px] tracking-[0.2em] uppercase text-xs font-bold" asChild>
                  <Link to="/partners">Become a partner</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
 
       {/* Key Info Strip */}
       <section className="py-12 bg-secondary/30">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="glass-card rounded-xl p-6 border-gold-glow text-center">
               <Calendar className="w-8 h-8 text-gold mx-auto mb-3" />
               <p className="text-foreground font-semibold">{siteContent.eventDate}</p>
               <p className="text-muted-foreground text-sm">Event Date</p>
             </div>
             <div className="glass-card rounded-xl p-6 border-gold-glow text-center">
               <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
               <p className="text-foreground font-semibold">{siteContent.eventLocation}</p>
               <p className="text-muted-foreground text-sm">Location</p>
             </div>
             <div className="glass-card rounded-xl p-6 border-gold-glow text-center">
               <Award className="w-8 h-8 text-gold mx-auto mb-3" />
               <p className="text-foreground font-semibold">13 Award Categories</p>
               <p className="text-muted-foreground text-sm">Excellence Awards</p>
             </div>
           </div>
         </div>
       </section>
 
       {/* About Snapshot */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="About The Awards"
              title={<>Honouring the brilliance of <span className="italic text-gold">multicultural youth</span></>}
              className="mb-6"
            />
             <p className="text-muted-foreground text-lg leading-relaxed mb-8">
               The Multicultural Youth Awards is a prestigious national event devoted to showcasing 
               the outstanding achievements of multicultural youth across Australia. Steering away 
               from traditional awards, this initiative offers a unique platform for recognition, 
               emphasising the diverse talents, resilience, and positive contributions of young 
               individuals from multicultural backgrounds.
             </p>
             <Button variant="goldOutline" size="lg" asChild>
               <Link to="/about">
                 Learn more
                 <ArrowRight className="w-4 h-4 ml-2" />
               </Link>
             </Button>
           </div>
         </div>
       </section>
 
       <div className="section-divider" />
 
       {/* Get Involved Section */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Get Involved"
            title={<>Be part of the <span className="italic text-gold">celebration</span></>}
            className="mb-12"
          />
 
           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {/* Sponsor Card */}
             <div className="glass-card rounded-2xl p-8 border-gold-glow text-center">
               <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                 <Heart className="w-8 h-8 text-gold" />
               </div>
               <h3 className="font-display text-xl font-semibold text-foreground mb-3">Sponsor</h3>
               <p className="text-muted-foreground text-sm mb-6">
                 Support the next generation of multicultural leaders and make a lasting impact.
               </p>
               <Button variant="gold" className="w-full" asChild>
                 <Link to="/partners">Become a Sponsor</Link>
               </Button>
             </div>
 
             {/* Nominate Card */}
             <div className="glass-card rounded-2xl p-8 border-gold-glow text-center">
               <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                 <Award className="w-8 h-8 text-gold" />
               </div>
               <h3 className="font-display text-xl font-semibold text-foreground mb-3">Nominate</h3>
               <p className="text-muted-foreground text-sm mb-6">
                 Know an inspiring young person? Nominate them for recognition they deserve.
               </p>
               <Button 
                 variant="gold" 
                 className="w-full" 
                 asChild
                 disabled={siteContent.nominationsStatus === 'closed'}
               >
                 <Link to="/nominations">{getNominationButtonText(siteContent.nominationsStatus)}</Link>
               </Button>
             </div>
 
             {/* Volunteer Card */}
             <div className="glass-card rounded-2xl p-8 border-gold-glow text-center">
               <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                 <Users className="w-8 h-8 text-gold" />
               </div>
               <h3 className="font-display text-xl font-semibold text-foreground mb-3">Volunteer</h3>
               <p className="text-muted-foreground text-sm mb-6">
                 Join our team and help create an unforgettable awards experience.
               </p>
               <Button variant="gold" className="w-full" asChild>
                 <Link to="/contact">Get Involved</Link>
               </Button>
             </div>
           </div>
         </div>
       </section>
 
       <div className="section-divider" />
 
       {/* Partners Preview */}
       <section className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Partners"
            title={<>Proudly <span className="italic text-gold">supported by</span></>}
            className="mb-12"
          />
 
           {/* Partner logos placeholder */}
           <div className="flex flex-wrap justify-center gap-8 mb-12">
             {[...siteContent.partners2026, ...siteContent.sponsors].slice(0, 5).map((partner, index) => (
               <div 
                 key={index}
                 className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center border border-border"
               >
                 <span className="text-gold font-display text-2xl font-bold">
                   {partner.name.charAt(0)}
                 </span>
               </div>
             ))}
           </div>
 
           <div className="text-center">
             <Button variant="goldOutline" size="lg" asChild>
               <Link to="/partners">
                 View Partners
                 <ArrowRight className="w-4 h-4 ml-2" />
               </Link>
             </Button>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default HomePage;