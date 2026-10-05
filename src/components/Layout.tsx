 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 
 interface LayoutProps {
   children: React.ReactNode;
 }
 
 const Layout = ({ children }: LayoutProps) => {
   return (
     <div className="min-h-screen bg-background flex flex-col">
       <Navbar />
       <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
         {children}
       </main>
       <Footer />
     </div>
   );
 };
 
 export default Layout;