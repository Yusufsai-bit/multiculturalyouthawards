 const PrivacyPage = () => {
   return (
     <div className="min-h-screen bg-background pt-32">
       {/* Hero Section */}
       <section className="py-16 hero-gradient">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
               Privacy <span className="text-gold-gradient">Policy</span>
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
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Introduction</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   The Multicultural Youth Awards is committed to protecting your privacy. This Privacy 
                   Policy explains how we collect, use, disclose and safeguard your information when you 
                   visit our website or submit information through our forms.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Information We Collect</h2>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                   We may collect personal information that you voluntarily provide to us when you:
                 </p>
                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
                   <li>Submit a nomination form</li>
                   <li>Register your interest for updates</li>
                   <li>Subscribe to our newsletter</li>
                   <li>Submit a contact or enquiry form</li>
                   <li>Apply to be a sponsor or partner</li>
                 </ul>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">How We Use Your Information</h2>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                   We use the information we collect to:
                 </p>
                 <ul className="list-disc list-inside text-muted-foreground space-y-2">
                   <li>Process nominations and applications</li>
                   <li>Communicate with you about the awards program</li>
                   <li>Send newsletters and updates (with your consent)</li>
                   <li>Respond to enquiries and provide support</li>
                   <li>Improve our website and services</li>
                 </ul>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Data Security</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   We implement appropriate technical and organisational security measures to protect 
                   your personal information. However, no method of transmission over the Internet or 
                   electronic storage is completely secure.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Your Rights</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   You have the right to access, correct, or delete your personal information. To 
                   exercise these rights, please contact us using the details provided on our Contact page.
                 </p>
               </div>
 
               <div>
                 <h2 className="font-display text-xl font-bold text-gold mb-4">Contact Us</h2>
                 <p className="text-muted-foreground leading-relaxed">
                   If you have questions about this Privacy Policy, please contact us at{" "}
                   <a href="mailto:info@multiculturalyouthawards.com.au" className="text-gold hover:text-gold-light">
                     info@multiculturalyouthawards.com.au
                   </a>
                 </p>
               </div>
 
               <div className="pt-4 border-t border-border">
                 <p className="text-muted-foreground text-sm italic">
                   This is a placeholder privacy policy. Please consult with a legal professional 
                   to ensure your privacy policy meets all applicable legal requirements.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default PrivacyPage;