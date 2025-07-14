
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import FloatingContactWidget from "@/components/common/FloatingContactWidget";
import StickyNewsletter from "@/components/common/StickyNewsletter";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// For city-specific landing pages
import SimpleCityPage from "./pages/SimpleCityPage";

// For service-specific landing pages
import ServicePage from "./pages/ServicePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <ErrorBoundary>
          <Toaster />
          <Sonner />
          <HashRouter>
            <div className="min-h-screen">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                
                {/* Dynamic City Pages for SEO */}
                <Route path="/locations/:city" element={<SimpleCityPage />} />
                
                {/* Dynamic Service Pages for SEO */}
                <Route path="/services/:service" element={<ServicePage />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
              
              {/* Global Components */}
              <FloatingContactWidget />
              <StickyNewsletter />
            </div>
          </HashRouter>
        </ErrorBoundary>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
