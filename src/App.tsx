 import { Toaster } from "@/components/ui/toaster";
 import { Toaster as Sonner } from "@/components/ui/sonner";
 import { TooltipProvider } from "@/components/ui/tooltip";
 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Layout from "@/components/Layout";
 import HomePage from "@/pages/HomePage";
 import AboutPage from "@/pages/AboutPage";
 import AwardsPage from "@/pages/AwardsPage";
 import NominationsPage from "@/pages/NominationsPage";
 import PartnersPage from "@/pages/PartnersPage";
 import WinnersPage from "@/pages/WinnersPage";
 import ContactPage from "@/pages/ContactPage";
 import PrivacyPage from "@/pages/PrivacyPage";
 import CopyrightPage from "@/pages/CopyrightPage";
 import NotFound from "@/pages/NotFound";
 
 const queryClient = new QueryClient();
 
 const App = () => (
   <QueryClientProvider client={queryClient}>
     <TooltipProvider>
       <Toaster />
       <Sonner />
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout><HomePage /></Layout>} />
           <Route path="/about" element={<Layout><AboutPage /></Layout>} />
           <Route path="/awards" element={<Layout><AwardsPage /></Layout>} />
           <Route path="/nominations" element={<Layout><NominationsPage /></Layout>} />
           <Route path="/partners" element={<Layout><PartnersPage /></Layout>} />
           <Route path="/winners" element={<Layout><WinnersPage /></Layout>} />
           <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
           <Route path="/privacy" element={<Layout><PrivacyPage /></Layout>} />
           <Route path="/copyright" element={<Layout><CopyrightPage /></Layout>} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </BrowserRouter>
     </TooltipProvider>
   </QueryClientProvider>
 );
 
 export default App;
