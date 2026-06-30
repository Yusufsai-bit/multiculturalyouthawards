 import { Trophy } from "lucide-react";
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 import { siteContent } from "@/lib/siteContent";
 
 const WinnersPage = () => {
   const categories = Object.entries(siteContent.winners2025);
 
   return (
     <div className="min-h-screen bg-background pt-32">
       {/* Hero Section */}
       <section className="py-16 hero-gradient">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
              Winners 2024
             </span>
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Celebrating Our <span className="text-gold-gradient">2024 Champions</span>
             </h1>
             <p className="text-muted-foreground text-lg">
              Meet the exceptional young people who were recognised at the 2024 Multicultural Youth Awards
             </p>
           </div>
         </div>
       </section>
 
       {/* Winners Accordion */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto">
             <Accordion type="single" collapsible className="space-y-4">
               {categories.map(([categoryName, winner], index) => (
                 <AccordionItem 
                   key={categoryName} 
                   value={`category-${index}`}
                   className="glass-card rounded-xl border-gold-glow px-6"
                 >
                   <AccordionTrigger className="text-foreground font-semibold hover:text-gold py-6">
                     <div className="flex items-center gap-4">
                       <Trophy className="w-5 h-5 text-gold flex-shrink-0" />
                       <span className="text-left">{categoryName}</span>
                     </div>
                   </AccordionTrigger>
                   <AccordionContent className="pb-6">
                     <div className="pl-9">
                       {/* Winner */}
                       <div className="mb-6">
                         <div className="flex items-center gap-3 mb-2">
                           <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                             <Trophy className="w-6 h-6 text-gold" />
                           </div>
                           <div>
                             <p className="text-gold text-sm font-medium">Winner</p>
                             <h4 className="font-display text-lg font-semibold text-foreground">
                               {winner.name}
                             </h4>
                           </div>
                         </div>
                         <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                           {winner.bio}
                         </p>
                       </div>
 
                       {/* Finalists */}
                       <div>
                         <p className="text-sm font-medium text-muted-foreground mb-2">Finalists</p>
                         <ul className="space-y-1">
                           {winner.finalists.map((finalist, i) => (
                             <li key={i} className="text-foreground text-sm flex items-center gap-2">
                               <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                               {finalist}
                             </li>
                           ))}
                         </ul>
                       </div>
 
                       {/* QR Code Placeholder */}
                       <div className="mt-6 pt-6 border-t border-border">
                         <div className="flex items-center gap-4">
                           <div className="w-16 h-16 rounded bg-secondary flex items-center justify-center">
                             <span className="text-muted-foreground text-xs">QR</span>
                           </div>
                           <p className="text-muted-foreground text-sm">
                             Scan to learn more about this winner
                           </p>
                         </div>
                       </div>
                     </div>
                   </AccordionContent>
                 </AccordionItem>
               ))}
             </Accordion>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default WinnersPage;