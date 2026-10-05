import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
    <div className="flex min-h-[70vh] items-center justify-center bg-navy px-4 pt-40 text-background">
      <div className="text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-gold">404</p>
        <h1 className="font-display mb-5 text-5xl font-extrabold uppercase md:text-7xl">Page not found</h1>
        <p className="mb-8 text-lg text-background/75">The page you requested may have moved or no longer exists.</p>
        <Button variant="gold" size="lg" className="rounded-none" asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
    </Layout>
  );
};

export default NotFound;
