import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Partners from "@/components/Partners";
import Winners from "@/components/Winners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Categories />
      <Winners />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
