 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Calendar, MapPin, Award, Users, Heart, Megaphone, ArrowRight } from "lucide-react";
 import { siteContent, getNominationButtonText, areNominationsOpen } from "@/lib/siteContent";
 
 const HomePage = () => {
   return (
     <div className="min-h-screen bg-background">
       {/* Hero Section */}
       <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden pt-32">
         {/* Decorative elements */}
         <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float" />
           <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
         </div>
 
         {/* Grid pattern overlay */}
         <div className="absolute inset-0 opacity-5" style={{
           backgroundImage: 'linear-gradient(hsl(var(--gold) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold) / 0.3) 1px, transparent 1px)',
           backgroundSize: '60px 60px'
         }} />
 
         <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl mx-auto text-center">
             {/* Main Title */}
             <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
               <span className="text-foreground">Celebrating the incredible talents and leadership of Australia's </span>
               <span className="text-gold-gradient">multicultural youth</span>
             </h1>
 
             {/* Tagline */}
             <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
               A national awards platform recognising diverse achievements, resilience, community impact and emerging leadership
             </p>
 
             {/* CTA Buttons */}
             <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
               <Button 
                 variant="gold" 
                 size="xl" 
                 className="min-w-[220px]"
                 asChild
                 disabled={siteContent.nominationsStatus === 'closed'}
               >
                 <Link to="/nominations">
                   {getNominationButtonText(siteContent.nominationsStatus)}
                 </Link>
               </Button>
               <Button variant="goldOutline" size="xl" className="min-w-[220px]" asChild>
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
             <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
               About The Awards
             </span>
             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
               Honouring the Brilliance of{" "}
               <span className="text-gold-gradient">Multicultural Youth</span>
             </h2>
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
           <div className="text-center mb-12">
             <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
               Get Involved
             </span>
             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
               Be Part of the <span className="text-gold-gradient">Celebration</span>
             </h2>
           </div>
 
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
           <div className="text-center mb-12">
             <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
               Our Partners
             </span>
             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
               Proudly Supported By
             </h2>
           </div>
 
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