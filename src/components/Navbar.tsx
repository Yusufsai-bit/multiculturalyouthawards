 import { useState, useEffect } from "react";
 import { Link, useLocation } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Menu, X } from "lucide-react";
 import { siteContent, getNominationButtonText } from "@/lib/siteContent";
 
 const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const location = useLocation();
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const navLinks = [
     { name: "Home", href: "/" },
     { name: "About", href: "/about" },
    { name: "Awards", href: "/awards" },
     { name: "Nominations", href: "/nominations" },
     { name: "Partners", href: "/partners" },
    { name: "Winners 2024", href: "/winners" },
     { name: "Contact", href: "/contact" },
   ];
 
   const isActive = (href: string) => {
     if (href === "/") {
       return location.pathname === "/";
     }
     return location.pathname.startsWith(href);
   };
 
   return (
     <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
       }`}
     >
      {/* Gold announcement banner */}
      <div className="bg-gold text-foreground text-center text-[10px] md:text-xs font-semibold tracking-[0.08em] uppercase py-2 px-4">
        Diverse talents, shared achievements — honouring the brilliance of multicultural youth
      </div>

       <div className="container mx-auto px-4">
         {/* Centered Logo */}
         <div className="flex justify-center py-4">
           <Link to="/" className="flex items-center">
             <img src={myaLogo.url} alt="Multicultural Youth Awards" className="h-14 md:h-16 w-auto" />
           </Link>
         </div>
 
         {/* Desktop Navigation */}
         <div className="hidden lg:flex items-center justify-center gap-8 pb-4">
           {navLinks.map((link) => (
             <Link
               key={link.name}
               to={link.href}
               className={`text-sm font-medium transition-colors duration-200 ${
                 isActive(link.href) 
                   ? "text-gold" 
                   : "text-muted-foreground hover:text-foreground"
               }`}
             >
               {link.name}
             </Link>
           ))}
         </div>
 
         {/* Mobile Menu Button */}
         <div className="lg:hidden flex justify-between items-center pb-4">
           <div /> {/* Spacer */}
           <button
             className="text-foreground p-2"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
           >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </div>
 
         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
             <div className="flex flex-col py-4 gap-2">
               {navLinks.map((link) => (
                 <Link
                   key={link.name}
                   to={link.href}
                   className={`px-4 py-3 transition-colors ${
                     isActive(link.href)
                       ? "text-gold bg-secondary/50"
                       : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                   }`}
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {link.name}
                 </Link>
               ))}
               <div className="px-4 pt-4">
                 <Button 
                   variant="gold" 
                   size="default" 
                   className="w-full"
                   asChild
                   disabled={siteContent.nominationsStatus === 'closed'}
                 >
                   <Link to="/nominations" onClick={() => setIsMobileMenuOpen(false)}>
                     {getNominationButtonText(siteContent.nominationsStatus)}
                   </Link>
                 </Button>
               </div>
             </div>
           </div>
         )}
       </div>
     </nav>
   );
 };
 
 export default Navbar;