 const CopyrightPage = () => {
   return (
     <div className="min-h-screen bg-background pt-32">
       {/* Hero Section */}
       <section className="py-16 hero-gradient">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
               Copyright and <span className="text-gold-gradient">Disclaimer</span>
             </h1>
             <p className="text-muted-foreground">
               Last updated: February 2026
             </p>
           </div>
         </div>
       </section>
 
       {/* Content */}
       <section className="py-24 bg-background">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto prose prose-invert">
             <div className="glass-card rounded-2xl p-8 border-gold-glow space-y-8">
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Copyright Notice</h2>
                 <p className="text-muted-foreground leading-relaxed">
                  © 2024 Multicultural Youth Awards. All rights reserved. The content, design, graphics, 
                   and other materials on this website are protected by copyright and other intellectual 
                   property laws.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Use of Content</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   You may view, download, and print content from this website for personal, 
                   non-commercial use only. Any other use, including reproduction, modification, 
                   distribution, or republication, requires prior written permission from the 
                   Multicultural Youth Awards.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Disclaimer</h2>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                   The information provided on this website is for general informational purposes only. 
                   While we endeavour to keep the information up to date and correct, we make no 
                   representations or warranties of any kind, express or implied, about:
                 </p>
                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
                   <li>The completeness, accuracy, or reliability of the information</li>
                   <li>The availability or continuity of the website</li>
                   <li>The suitability of the information for any particular purpose</li>
                 </ul>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Limitation of Liability</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   In no event shall the Multicultural Youth Awards be liable for any loss or damage 
                   arising out of or in connection with the use of this website or reliance on any 
                   information provided herein.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">External Links</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   This website may contain links to external websites. We have no control over the 
                   content and availability of those sites and do not endorse or accept responsibility 
                   for them.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Trademarks</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   The Multicultural Youth Awards name, logo, and related marks are trademarks of the 
                   Multicultural Youth Awards. Other trademarks and trade names may be used on this 
                   website to refer to either the entities claiming the marks and names or their 
                   products.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Contact</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   For any questions regarding copyright or to request permission to use our content, 
                   please contact us at{" "}
                   <a href="mailto:info@multiculturalyouthawards.com.au" className="text-gold hover:text-gold-light">
                     info@multiculturalyouthawards.com.au
                   </a>
                 </p>
               </div>
 
              </div>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default CopyrightPage;