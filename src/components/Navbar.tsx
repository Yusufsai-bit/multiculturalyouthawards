 import { useState, useEffect } from "react";
 import { Link, useLocation } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { Menu, X } from "lucide-react";
 import { siteContent, getNominationButtonText } from "@/lib/siteContent";
import myaLogo from "@/assets/mya-logo.png.asset.json";
 
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);
 
   const navLinks = [
     { name: "Home", href: "/" },
     { name: "About", href: "/about" },
    { name: "Awards", href: "/awards" },
     { name: "Nominations", href: "/nominations" },
     { name: "Partners", href: "/partners" },
    { name: "Winners", href: "/winners" },
     { name: "Contact", href: "/contact" },
   ];
 
   const isActive = (href: string) => {
     if (href === "/") {
       return location.pathname === "/";
     }
     return location.pathname.startsWith(href);
   };
 
   return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[60] -translate-y-24 bg-navy px-4 py-3 text-sm font-semibold text-background transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
     <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-background border-b border-border"
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
               className={`text-base font-medium transition-colors duration-200 ${
                 isActive(link.href) 
                   ? "text-gold underline decoration-2 underline-offset-8" 
                   : "text-muted-foreground hover:text-foreground"
               }`}
              aria-current={isActive(link.href) ? "page" : undefined}
             >
               {link.name}
             </Link>
           ))}
         </div>
 
         {/* Mobile Menu Button */}
         <div className="lg:hidden flex justify-end items-center pb-4">
           <Button
             variant="ghost"
             size="icon"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
           >
             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </Button>
         </div>
 
         {/* Mobile Menu */}
         {isMobileMenuOpen && (
           <div id="mobile-navigation" className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
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
                  aria-current={isActive(link.href) ? "page" : undefined}
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   {link.name}
                 </Link>
               ))}
               <div className="px-4 pt-4">
                 <Button variant="gold" size="default" className="w-full" asChild>
                   <Link to={siteContent.nominationsStatus === "open" ? "/nominations" : "/winners"} onClick={() => setIsMobileMenuOpen(false)}>
                     {siteContent.nominationsStatus === "open" ? getNominationButtonText(siteContent.nominationsStatus) : "View Winners"}
                   </Link>
                 </Button>
               </div>
             </div>
           </div>
         )}
       </div>
     </nav>
    </>
   );
 };
 
 export default Navbar;