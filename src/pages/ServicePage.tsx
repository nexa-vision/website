
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/home/Contact';
import TrustBadges from '@/components/home/TrustBadges';
import Testimonials from '@/components/home/Testimonials';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceNotFound from '@/components/services/ServiceNotFound';
import SEOMeta from '@/components/services/SEOMeta';
import { serviceData } from '@/data/serviceData';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceCTA from '@/components/services/ServiceCTA';
import ServiceDetails from '@/components/services/ServiceDetails';
import ServiceRelated from '@/components/services/ServiceRelated';

const ServicePage = () => {
  const { service } = useParams<{ service: string }>();
  const serviceInfo = service ? serviceData[service] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  if (!serviceInfo) {
    return <ServiceNotFound />;
  }

  // Transform process data to match ProcessStep interface
  const processSteps = serviceInfo.process.map(item => ({
    step: item.title,
    description: item.description
  }));

  return (
    <>
      <SEOMeta service={service!} serviceInfo={serviceInfo} />
      <Navbar />
      <main>
        <ServiceHero 
          title={serviceInfo.title}
          description={serviceInfo.description}
          image={serviceInfo.image}
        />
        
        <ServiceDetails longDescription={serviceInfo.longDescription} />
        
        <ServiceFeatures features={serviceInfo.features} />
        
        {serviceInfo.benefits && (
          <ServiceBenefits benefits={serviceInfo.benefits} />
        )}
        
        <ServiceProcess 
          process={processSteps}
          caseStudyLink={serviceInfo.caseStudyLink || '/portfolio'}
        />
        
        <TrustBadges />
        
        {serviceInfo.faq && (
          <ServiceFAQ faqItems={serviceInfo.faq} />
        )}
        
        <ServiceRelated currentService={service!} />
        
        <ServiceCTA />
        
        <Testimonials />
        
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
