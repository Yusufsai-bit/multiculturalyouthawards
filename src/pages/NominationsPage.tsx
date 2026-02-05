 import { useState } from "react";
 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Checkbox } from "@/components/ui/checkbox";
 import { Label } from "@/components/ui/label";
 import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
 } from "@/components/ui/accordion";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { siteContent, areNominationsOpen } from "@/lib/siteContent";
 
 const NominationsPage = () => {
   const nominationsOpen = areNominationsOpen(siteContent.nominationsStatus);
   
   // Nomination form state
   const [nominationForm, setNominationForm] = useState({
     nominatorName: "",
     nominatorEmail: "",
     nominatorPhone: "",
     nomineeName: "",
     nomineeContact: "",
     nomineeSuburb: "",
     nomineeState: "",
     category: "",
     whyNominating: "",
     impactExamples: "",
     consentContact: false,
     consentPublicity: false,
   });
 
   // Register interest form state
   const [interestForm, setInterestForm] = useState({
     name: "",
     email: "",
     categoryInterest: "",
   });
 
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitted, setSubmitted] = useState(false);
 
   const handleNominationSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     // TODO: Connect to form service (Formspree, Airtable, Google Sheets, or email delivery)
     // Example: await fetch('/api/nominations', { method: 'POST', body: JSON.stringify(nominationForm) })
     
     await new Promise(resolve => setTimeout(resolve, 1500));
     setSubmitted(true);
     setIsSubmitting(false);
   };
 
   const handleInterestSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     // TODO: Connect to form service
     // Example: await fetch('/api/register-interest', { method: 'POST', body: JSON.stringify(interestForm) })
     
     await new Promise(resolve => setTimeout(resolve, 1500));
     setSubmitted(true);
     setIsSubmitting(false);
   };
 
   const australianStates = [
     "Australian Capital Territory",
     "New South Wales",
     "Northern Territory",
     "Queensland",
     "South Australia",
     "Tasmania",
     "Victoria",
     "Western Australia",
   ];
 
   return (
     <div className="min-h-screen bg-background pt-32">
       {/* Hero Section */}
       <section className="py-16 hero-gradient">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto text-center">
             <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-4 block">
               Nominations
             </span>
             <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
               {nominationsOpen ? (
                 <>Nominate a <span className="text-gold-gradient">Young Leader</span></>
               ) : (
                 <>Nominations <span className="text-gold-gradient">Opening Soon</span></>
               )}
             </h1>
             <p className="text-muted-foreground text-lg">
               {nominationsOpen 
                 ? "Know an inspiring young person making a difference? Nominate them for recognition."
                 : "Register your interest to be notified when nominations open for the 2026 awards."
               }
             </p>
           </div>
         </div>
       </section>
 
       {/* Info Section */}
       <section className="py-16 bg-background">
         <div className="container mx-auto px-4">
           <div className="max-w-3xl mx-auto">
             <div className="glass-card rounded-2xl p-8 border-gold-glow mb-8">
               <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                 How Nominations Work
               </h2>
               <p className="text-muted-foreground leading-relaxed">
                 Anyone can nominate a young person from a multicultural background who has demonstrated 
                 excellence, leadership or made a positive contribution to their community. Nominees 
                 must be aged between 15 and 30 years at the time of nomination.
               </p>
             </div>
 
             <Accordion type="single" collapsible className="space-y-4">
               <AccordionItem value="how-to" className="glass-card rounded-xl border-gold-glow px-6">
                 <AccordionTrigger className="text-foreground font-semibold hover:text-gold">
                   How to nominate
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground">
                   <ol className="list-decimal list-inside space-y-2">
                     <li>Choose the most appropriate award category for your nominee</li>
                     <li>Complete the nomination form with your details and the nominee's details</li>
                     <li>Provide a compelling explanation of why they deserve recognition</li>
                     <li>Include specific examples of their achievements and impact</li>
                     <li>Ensure you have consent to share their information</li>
                     <li>Submit your nomination before the closing date</li>
                   </ol>
                 </AccordionContent>
               </AccordionItem>
 
               <AccordionItem value="eligibility" className="glass-card rounded-xl border-gold-glow px-6">
                 <AccordionTrigger className="text-foreground font-semibold hover:text-gold">
                   Eligibility
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground">
                   <ul className="list-disc list-inside space-y-2">
                     <li>Nominees must be aged 15-30 years at the time of nomination</li>
                     <li>Nominees must identify as having a multicultural background</li>
                     <li>Nominees must be Australian citizens or permanent residents</li>
                     <li>Achievements must have occurred within the past two years</li>
                     <li>Self-nominations are accepted</li>
                     <li>Previous finalists may be nominated again</li>
                   </ul>
                 </AccordionContent>
               </AccordionItem>
 
               <AccordionItem value="judging" className="glass-card rounded-xl border-gold-glow px-6">
                 <AccordionTrigger className="text-foreground font-semibold hover:text-gold">
                   Screening and judging
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground">
                   <p className="mb-4">
                     All nominations undergo a thorough review process:
                   </p>
                   <ol className="list-decimal list-inside space-y-2">
                     <li>Initial screening for eligibility and completeness</li>
                     <li>Assessment by category-specific judges</li>
                     <li>Shortlisting of finalists</li>
                     <li>Final judging panel determines winners</li>
                   </ol>
                 </AccordionContent>
               </AccordionItem>
 
               <AccordionItem value="criteria" className="glass-card rounded-xl border-gold-glow px-6">
                 <AccordionTrigger className="text-foreground font-semibold hover:text-gold">
                   Scoring criteria
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground">
                   <p className="mb-4">Nominations are assessed against the following criteria:</p>
                   <ul className="list-disc list-inside space-y-2">
                     <li><strong>Impact:</strong> The significance and reach of their contribution</li>
                     <li><strong>Leadership:</strong> Demonstrated leadership qualities and influence</li>
                     <li><strong>Innovation:</strong> Creative approaches and new ideas</li>
                     <li><strong>Community benefit:</strong> Positive outcomes for the community</li>
                     <li><strong>Resilience:</strong> Overcoming challenges and inspiring others</li>
                   </ul>
                 </AccordionContent>
               </AccordionItem>
 
               <AccordionItem value="dates" className="glass-card rounded-xl border-gold-glow px-6">
                 <AccordionTrigger className="text-foreground font-semibold hover:text-gold">
                   Important dates for 2026
                 </AccordionTrigger>
                 <AccordionContent className="text-muted-foreground">
                   <ul className="space-y-3">
                     <li className="flex justify-between">
                       <span>Nominations open</span>
                       <span className="text-gold">To be confirmed</span>
                     </li>
                     <li className="flex justify-between">
                       <span>Nominations close</span>
                       <span className="text-gold">To be confirmed</span>
                     </li>
                     <li className="flex justify-between">
                       <span>Finalists announced</span>
                       <span className="text-gold">To be confirmed</span>
                     </li>
                     <li className="flex justify-between">
                       <span>Awards ceremony</span>
                       <span className="text-gold">To be confirmed</span>
                     </li>
                   </ul>
                 </AccordionContent>
               </AccordionItem>
             </Accordion>
           </div>
         </div>
       </section>
 
       <div className="section-divider" />
 
       {/* Form Section */}
       <section className="py-24 bg-secondary/30">
         <div className="container mx-auto px-4">
           <div className="max-w-2xl mx-auto">
             {submitted ? (
               <div className="glass-card rounded-2xl p-12 border-gold-glow text-center">
                 <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                   <span className="text-gold text-3xl">✓</span>
                 </div>
                 <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                   {nominationsOpen ? "Nomination Submitted" : "Interest Registered"}
                 </h2>
                 <p className="text-muted-foreground mb-8">
                   {nominationsOpen 
                     ? "Thank you for your nomination. We will be in touch once the review process is complete."
                     : "Thank you for registering your interest. We will notify you when nominations open."
                   }
                 </p>
                 <Button variant="goldOutline" asChild>
                   <Link to="/">Return Home</Link>
                 </Button>
               </div>
             ) : nominationsOpen ? (
               /* Nomination Form */
               <form onSubmit={handleNominationSubmit} className="glass-card rounded-2xl p-8 border-gold-glow">
                 <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                   Nomination Form
                 </h2>
 
                 {/* Nominator Details */}
                 <div className="mb-8">
                   <h3 className="font-semibold text-gold mb-4">Your Details (Nominator)</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                     <div>
                       <Label htmlFor="nominatorName">Your name *</Label>
                       <Input
                         id="nominatorName"
                         value={nominationForm.nominatorName}
                         onChange={(e) => setNominationForm({...nominationForm, nominatorName: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div>
                       <Label htmlFor="nominatorEmail">Your email *</Label>
                       <Input
                         id="nominatorEmail"
                         type="email"
                         value={nominationForm.nominatorEmail}
                         onChange={(e) => setNominationForm({...nominationForm, nominatorEmail: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div className="md:col-span-2">
                       <Label htmlFor="nominatorPhone">Your phone</Label>
                       <Input
                         id="nominatorPhone"
                         type="tel"
                         value={nominationForm.nominatorPhone}
                         onChange={(e) => setNominationForm({...nominationForm, nominatorPhone: e.target.value})}
                         className="bg-background border-border mt-1"
                       />
                     </div>
                   </div>
                 </div>
 
                 {/* Nominee Details */}
                 <div className="mb-8">
                   <h3 className="font-semibold text-gold mb-4">Nominee Details</h3>
                   <div className="grid md:grid-cols-2 gap-4">
                     <div>
                       <Label htmlFor="nomineeName">Nominee name *</Label>
                       <Input
                         id="nomineeName"
                         value={nominationForm.nomineeName}
                         onChange={(e) => setNominationForm({...nominationForm, nomineeName: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div>
                       <Label htmlFor="nomineeContact">Nominee email or phone *</Label>
                       <Input
                         id="nomineeContact"
                         value={nominationForm.nomineeContact}
                         onChange={(e) => setNominationForm({...nominationForm, nomineeContact: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div>
                       <Label htmlFor="nomineeSuburb">Suburb *</Label>
                       <Input
                         id="nomineeSuburb"
                         value={nominationForm.nomineeSuburb}
                         onChange={(e) => setNominationForm({...nominationForm, nomineeSuburb: e.target.value})}
                         required
                         className="bg-background border-border mt-1"
                       />
                     </div>
                     <div>
                       <Label htmlFor="nomineeState">State *</Label>
                       <Select
                         value={nominationForm.nomineeState}
                         onValueChange={(value) => setNominationForm({...nominationForm, nomineeState: value})}
                       >
                         <SelectTrigger className="bg-background border-border mt-1">
                           <SelectValue placeholder="Select state" />
                         </SelectTrigger>
                         <SelectContent>
                           {australianStates.map((state) => (
                             <SelectItem key={state} value={state}>{state}</SelectItem>
                           ))}
                         </SelectContent>
                       </Select>
                     </div>
                   </div>
                 </div>
 
                 {/* Category Selection */}
                 <div className="mb-8">
                   <Label htmlFor="category">Award category *</Label>
                   <Select
                     value={nominationForm.category}
                     onValueChange={(value) => setNominationForm({...nominationForm, category: value})}
                   >
                     <SelectTrigger className="bg-background border-border mt-1">
                       <SelectValue placeholder="Select a category" />
                     </SelectTrigger>
                     <SelectContent>
                       {siteContent.categories.map((cat) => (
                         <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                       ))}
                     </SelectContent>
                   </Select>
                 </div>
 
                 {/* Nomination Details */}
                 <div className="mb-8">
                   <Label htmlFor="whyNominating">Why are you nominating them? *</Label>
                   <Textarea
                     id="whyNominating"
                     value={nominationForm.whyNominating}
                     onChange={(e) => setNominationForm({...nominationForm, whyNominating: e.target.value})}
                     required
                     rows={5}
                     className="bg-background border-border mt-1"
                     placeholder="Describe why this person deserves recognition..."
                   />
                 </div>
 
                 <div className="mb-8">
                   <Label htmlFor="impactExamples">Examples of their impact *</Label>
                   <Textarea
                     id="impactExamples"
                     value={nominationForm.impactExamples}
                     onChange={(e) => setNominationForm({...nominationForm, impactExamples: e.target.value})}
                     required
                     rows={5}
                     className="bg-background border-border mt-1"
                     placeholder="Provide specific examples of their achievements and impact..."
                   />
                 </div>
 
                 {/* Consent */}
                 <div className="space-y-4 mb-8">
                   <div className="flex items-start gap-3">
                     <Checkbox
                       id="consentContact"
                       checked={nominationForm.consentContact}
                       onCheckedChange={(checked) => setNominationForm({...nominationForm, consentContact: checked as boolean})}
                       required
                     />
                     <Label htmlFor="consentContact" className="text-sm text-muted-foreground leading-relaxed">
                       I confirm that I have permission to share the nominee's contact details and they are aware of this nomination. *
                     </Label>
                   </div>
                   <div className="flex items-start gap-3">
                     <Checkbox
                       id="consentPublicity"
                       checked={nominationForm.consentPublicity}
                       onCheckedChange={(checked) => setNominationForm({...nominationForm, consentPublicity: checked as boolean})}
                     />
                     <Label htmlFor="consentPublicity" className="text-sm text-muted-foreground leading-relaxed">
                       I consent to the nominee's details being used for publicity purposes if they are shortlisted or win an award.
                     </Label>
                   </div>
                 </div>
 
                 <Button 
                   type="submit" 
                   variant="gold" 
                   size="lg" 
                   className="w-full"
                   disabled={isSubmitting || !nominationForm.consentContact}
                 >
                   {isSubmitting ? "Submitting..." : "Submit Nomination"}
                 </Button>
               </form>
             ) : (
               /* Register Interest Form */
               <form onSubmit={handleInterestSubmit} className="glass-card rounded-2xl p-8 border-gold-glow">
                 <h2 className="font-display text-2xl font-bold text-foreground mb-4 text-center">
                   Register Your Interest
                 </h2>
                 <p className="text-muted-foreground text-center mb-8">
                   Be the first to know when nominations open for the 2026 awards.
                 </p>
 
                 <div className="space-y-4">
                   <div>
                     <Label htmlFor="interestName">Your name *</Label>
                     <Input
                       id="interestName"
                       value={interestForm.name}
                       onChange={(e) => setInterestForm({...interestForm, name: e.target.value})}
                       required
                       className="bg-background border-border mt-1"
                     />
                   </div>
                   <div>
                     <Label htmlFor="interestEmail">Your email *</Label>
                     <Input
                       id="interestEmail"
                       type="email"
                       value={interestForm.email}
                       onChange={(e) => setInterestForm({...interestForm, email: e.target.value})}
                       required
                       className="bg-background border-border mt-1"
                     />
                   </div>
                   <div>
                     <Label htmlFor="categoryInterest">Category of interest</Label>
                     <Select
                       value={interestForm.categoryInterest}
                       onValueChange={(value) => setInterestForm({...interestForm, categoryInterest: value})}
                     >
                       <SelectTrigger className="bg-background border-border mt-1">
                         <SelectValue placeholder="Select a category (optional)" />
                       </SelectTrigger>
                       <SelectContent>
                         {siteContent.categories.map((cat) => (
                           <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                         ))}
                       </SelectContent>
                     </Select>
                   </div>
                 </div>
 
                 <Button 
                   type="submit" 
                   variant="gold" 
                   size="lg" 
                   className="w-full mt-8"
                   disabled={isSubmitting}
                 >
                   {isSubmitting ? "Submitting..." : "Register Interest"}
                 </Button>
               </form>
             )}
           </div>
         </div>
       </section>
     </div>
   );
 };
 
 export default NominationsPage;