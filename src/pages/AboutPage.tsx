 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Award, Globe, Users, Calendar, ArrowRight } from "lucide-react";
 
 const AboutPage = () => {
   const impactStats = [
     { icon: Award, value: "13", label: "Award Categories" },
     { icon: Globe, value: "National", label: "Australia-wide Reach" },
     { icon: Calendar, value: "2025", label: "Last Event" },
     { icon: Users, value: "100+", label: "Young Leaders Recognised" },
   ];
 
   return (
     <div className="min-h-screen bg-background pt-32">
       {/* Hero Section */}
       <section className="py-16 hero-gradient">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
               About Us
             </span>
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
               Celebrating <span className="text-gold-gradient">Multicultural Excellence</span>
             </h1>
             <p className="text-muted-foreground text-lg">
               Recognising the outstanding achievements and contributions of Australia's diverse young leaders
             </p>
           </div>
         </div>
       </section>
 
       {/* Mission & Vision */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="glass-card rounded-2xl p-8 border-gold-glow">
               <h2 className="font-display text-2xl font-bold text-gold mb-4">Our Mission</h2>
               <p className="text-muted-foreground leading-relaxed">
                 To recognise, celebrate and elevate the achievements of multicultural young people 
                 across Australia. We believe in the power of recognition to inspire confidence, 
                 build community connections and showcase the incredible contributions of diverse 
                 young Australians.
               </p>
             </div>
             <div className="glass-card rounded-2xl p-8 border-gold-glow">
               <h2 className="font-display text-2xl font-bold text-gold mb-4">Our Vision</h2>
               <p className="text-muted-foreground leading-relaxed">
                 A society where the talents, leadership and positive contributions of multicultural 
                 youth are widely recognised and celebrated. We envision a future where every young 
                 person from a diverse background has the opportunity to be acknowledged for their 
                 excellence.
               </p>
             </div>
           </div>
         </div>
       </section>
 
       <div className="section-divider" />
 
       {/* Story Section */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto">
             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
               Our <span className="text-gold-gradient">Story</span>
             </h2>
             <div className="prose prose-lg prose-invert mx-auto">
               <p className="text-muted-foreground leading-relaxed mb-6">
                 The Multicultural Youth Awards was established to address a gap in recognition 
                 for young people from culturally diverse backgrounds. While many young Australians 
                 from multicultural communities achieve remarkable things, their contributions often 
                 go unnoticed in mainstream awards programs.
               </p>
               <p className="text-muted-foreground leading-relaxed mb-6">
                 Our awards provide a dedicated platform to celebrate these achievements across 
                 thirteen categories, from leadership and academic excellence to creative arts 
                 and community service. Each year, we bring together nominees, finalists, winners, 
                 families, sponsors and community members for a prestigious celebration.
               </p>
               <p className="text-muted-foreground leading-relaxed">
                 The awards have grown from a small community initiative to a nationally recognised 
                 program, with support from government, corporate and community partners who share 
                 our commitment to celebrating diversity and empowering young leaders.
               </p>
             </div>
           </div>
         </div>
       </section>
 
       <div className="section-divider" />
 
       {/* What to Expect in 2026 */}
       <section className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto">
             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
               What to Expect in <span className="text-gold-gradient">2026</span>
             </h2>
             
             <div className="grid md:grid-cols-3 gap-8">
               <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                   <span className="text-gold font-display text-2xl font-bold">1</span>
                 </div>
                 <h3 className="font-display text-xl font-semibold text-foreground mb-2">Nominations</h3>
                 <p className="text-muted-foreground text-sm">
                   Nominations will open in early 2026. Anyone can nominate a deserving young person 
                   across our thirteen award categories.
                 </p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                   <span className="text-gold font-display text-2xl font-bold">2</span>
                 </div>
                 <h3 className="font-display text-xl font-semibold text-foreground mb-2">Judging</h3>
                 <p className="text-muted-foreground text-sm">
                   Our panel of judges will review all nominations, assess against criteria, 
                   and select finalists and winners for each category.
                 </p>
               </div>
               <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                   <span className="text-gold font-display text-2xl font-bold">3</span>
                 </div>
                 <h3 className="font-display text-xl font-semibold text-foreground mb-2">Celebration</h3>
                 <p className="text-muted-foreground text-sm">
                   Join us for the 2026 Awards Ceremony where we will celebrate all finalists 
                   and announce the winners in a prestigious event.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>
 
       <div className="section-divider" />
 
       {/* Impact Highlights */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
               Our <span className="text-gold-gradient">Impact</span>
             </h2>
           </div>
 
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
             {impactStats.map((stat, index) => (
               <div 
                 key={index}
                 className="glass-card rounded-2xl p-6 text-center border-gold-glow"
               >
                 <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                 <div className="text-2xl md:text-3xl font-display font-bold text-gold-gradient mb-1">
                   {stat.value}
                 </div>
                 <div className="text-muted-foreground text-sm">{stat.label}</div>
               </div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4">
           <div className="max-w-2xl mx-auto text-center">
             <h2 className="font-display text-3xl font-bold text-foreground mb-6">
               Ready to Get Involved?
             </h2>
             <p className="text-muted-foreground mb-8">
               Whether you want to nominate someone, become a sponsor, or volunteer, 
               there are many ways to be part of the Multicultural Youth Awards.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="gold" size="lg" asChild>
                 <Link to="/nominations">
                   Nominate
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </Link>
               </Button>
               <Button variant="goldOutline" size="lg" asChild>
                 <Link to="/contact">Contact Us</Link>
               </Button>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default AboutPage;