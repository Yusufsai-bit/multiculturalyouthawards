 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { 
   Megaphone, 
   Sparkles, 
   Heart, 
   Users, 
   User, 
   Wrench,
   Feather,
   GraduationCap,
   HandHeart,
   Trophy,
   Palette,
   Rocket,
   Award
 } from "lucide-react";
 import { siteContent, getNominationButtonText } from "@/lib/siteContent";
 
 const categoryIcons: Record<number, React.ElementType> = {
   1: Megaphone,      // Young Influencer
   2: Sparkles,       // Inspirational
   3: Heart,          // Volunteer
   4: Users,          // Young Leader
   5: User,           // Young Woman
   6: Wrench,         // Apprentice/Vocational
   7: Feather,        // Aboriginal Self Determination
   8: GraduationCap,  // Academic Excellence
   9: HandHeart,      // Community Contribution
   10: Trophy,        // Sportsperson
   11: Palette,       // Creative Arts
   12: Rocket,        // Entrepreneur
   13: Award,         // Youth Minister
 };
 
 const AwardsPage = () => {
   return (
     <div className="min-h-screen bg-background pt-32">
       {/* Hero Section */}
       <section className="py-16 hero-gradient">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
               Awards 2026
             </span>
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
               13 Categories of <span className="text-gold-gradient">Excellence</span>
             </h1>
             <p className="text-muted-foreground text-lg mb-8">
               Recognising outstanding achievements across diverse fields of talent, leadership and contribution
             </p>
             <Button 
               variant="gold" 
               size="xl"
               asChild
               disabled={siteContent.nominationsStatus === 'closed'}
             >
               <Link to="/nominations">
                 {getNominationButtonText(siteContent.nominationsStatus)}
               </Link>
             </Button>
           </div>
         </div>
       </section>
 
       {/* Categories Grid */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
             {siteContent.categories.map((category) => {
               const Icon = categoryIcons[category.id] || Award;
               return (
                 <div
                   key={category.id}
                   className="glass-card rounded-2xl p-6 border-gold-glow hover:border-gold/50 transition-all duration-500 group"
                 >
                   <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                       <Icon className="w-6 h-6 text-gold" />
                     </div>
                     <div>
                       <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                         {category.name}
                       </h3>
                       <p className="text-muted-foreground text-sm leading-relaxed">
                         {category.description}
                       </p>
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>
         </div>
       </section>
 
       {/* CTA Section */}
       <section className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4">
           <div className="max-w-2xl mx-auto text-center">
             <h2 className="font-display text-3xl font-bold text-foreground mb-6">
               Know Someone Deserving?
             </h2>
             <p className="text-muted-foreground mb-8">
               Nominate an outstanding young person who is making a difference in their community.
             </p>
             <Button 
               variant="gold" 
               size="lg"
               asChild
               disabled={siteContent.nominationsStatus === 'closed'}
             >
               <Link to="/nominations">
                 {getNominationButtonText(siteContent.nominationsStatus)}
               </Link>
             </Button>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default AwardsPage;