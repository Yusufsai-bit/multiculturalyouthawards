 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Award, Globe, Users, Calendar, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
 
 const AboutPage = () => {
   const impactStats = [
     { icon: Award, value: "13", label: "Award Categories" },
     { icon: Globe, value: "National", label: "Australia-wide Reach" },
    { icon: Calendar, value: "2024", label: "Last Event" },
     { icon: Users, value: "100+", label: "Young Leaders Recognised" },
   ];
 
   return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="About Us"
        title={<>Celebrating <span className="italic text-gold">multicultural excellence</span></>}
        subtitle="Recognising the outstanding achievements and contributions of Australia's diverse young leaders"
      />
 
       {/* Mission & Vision */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="glass-card rounded-2xl p-8 border-gold-glow">
                <h2 className="font-numeral uppercase text-3xl md:text-4xl text-gold mb-4 leading-none">Mission</h2>
               <p className="text-muted-foreground leading-relaxed">
                  Celebrate the rich diversity of talents, resilience and positive impacts of
                  multicultural youth, fostering inclusivity and showcasing their accomplishments
                  on a national stage.
               </p>
             </div>
             <div className="glass-card rounded-2xl p-8 border-gold-glow">
                <h2 className="font-numeral uppercase text-3xl md:text-4xl text-gold mb-4 leading-none">Vision</h2>
               <p className="text-muted-foreground leading-relaxed">
                  Recognise excellence across 13 categories, highlighting the outstanding
                  achievements and contributions of young individuals from diverse backgrounds.
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
            <SectionHeading
              eyebrow="Our Journey"
              title={<>Our <span className="italic text-gold">story</span></>}
              className="mb-10"
            />
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
 
        {/* How the Awards Work */}
       <section className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="The Process"
              title={<>How the <span className="italic text-gold">awards work</span></>}
              className="mb-12"
            />
             
             <div className="grid md:grid-cols-3 gap-8">
               <div className="text-center">
                 <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                   <span className="text-gold font-display text-2xl font-bold">1</span>
                 </div>
                 <h3 className="font-display text-xl font-semibold text-foreground mb-2">Nominations</h3>
                 <p className="text-muted-foreground text-sm">
                    Individuals and organisations can nominate a deserving young person, and self
                    nominations are encouraged, across our thirteen award categories.
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
                    Finalists and winners are celebrated at the Awards Ceremony at Victorian
                    Parliament House, a prestigious event honouring their achievements.
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
          <SectionHeading
            eyebrow="By the Numbers"
            title={<>Our <span className="italic text-gold">impact</span></>}
            className="mb-12"
          />
 
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
            <SectionHeading
              eyebrow="Join Us"
              title={<>Ready to <span className="italic text-gold">get involved?</span></>}
              className="mb-6"
            />
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