
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center py-24">
        <div className="text-center max-w-md px-4">
          <h1 className="text-8xl font-bold mb-4 text-gradient-purple">404</h1>
          <p className="text-2xl font-semibold mb-2">Page Not Found</p>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-accent-purple hover:bg-accent-purple/90">
              <Home size={18} className="mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
