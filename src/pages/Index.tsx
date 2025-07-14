
import React, { useEffect } from 'react';
import SEOHead from '@/components/common/SEOHead';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';
import Testimonials from '@/components/home/Testimonials';
import TrustBadges from '@/components/home/TrustBadges';
import HowWeWork from '@/components/home/HowWeWork';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Industries from '@/components/home/Industries';
import FeaturedBlogs from '@/components/home/FeaturedBlogs';
import FAQ from '@/components/home/FAQ';
import CTABanner from '@/components/common/CTABanner';
import LeadCaptureForm from '@/components/common/LeadCaptureForm';

const Index = () => {
  useEffect(() => {
    // Track page view if analytics are implemented
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "NexaVision",
    "description": "Creative agency specializing in UI/UX design, branding, web development, motion graphics, and digital marketing",
    "url": "https://nexavision.com",
    "logo": "https://nexavision.com/",
    "sameAs": [
      "https://twitter.com/nexavision",
      "https://www.linkedin.com/company/nexavision"
    ],
    "priceRange": "$$",
    "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
    "telephone": "+1-800-555-0123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design Avenue",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94103",
      "addressCountry": "US"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brand Strategy"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Motion Graphics"
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="NexaVision | Transform Your Digital Vision Into Reality"
        description="Award-winning digital agency specializing in UI/UX design, web development, branding, and digital marketing. Transform your business with cutting-edge digital solutions."
        keywords="digital agency, UI/UX design, web development, branding, digital marketing, creative solutions"
        url="https://nexavision.com"
        structuredData={structuredData}
      />

      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <WhyChooseUs />
        
        {/* Enhanced Mid-page CTA */}
        <CTABanner 
          variant="gradient"
          title="Ready to Transform Your Digital Presence?"
          description="Join 250+ businesses that achieved 300% growth with our proven digital strategies"
          primaryButtonText="Get Free Digital Audit"
          secondaryButtonText="View Success Stories"
        />
        
        <HowWeWork />
        <Portfolio />
        <Industries />
        
        {/* Strategic Lead Capture */}
        <section className="py-20 bg-gradient-to-r from-accent-purple/5 to-accent-green/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <LeadCaptureForm 
                title="Ready to Start Your Digital Transformation?"
                subtitle="Get a personalized strategy session and discover how we can accelerate your business growth"
                buttonText="Book Free Strategy Call"
                variant="default"
              />
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* FAQ and Lead Capture Side by Side */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <FAQ />
              </div>
              <div className="lg:col-span-1">
                <div className="sticky top-8">
                  <LeadCaptureForm 
                    title="Still Have Questions?"
                    subtitle="Get expert answers tailored to your needs"
                    buttonText="Talk to Expert"
                    variant="compact"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedBlogs />
        
        {/* Final CTA with urgency */}
        <CTABanner 
          variant="minimal"
          title="Don't Let Your Competition Get Ahead"
          description="Schedule your free consultation today and get a custom digital roadmap worth $2,500"
          primaryButtonText="Claim Free Consultation"
          secondaryButtonText="Download Case Studies"
        />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
