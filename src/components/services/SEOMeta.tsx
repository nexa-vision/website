import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ServiceInfo } from '@/data/serviceData';

interface SEOMetaProps {
  service: string;
  serviceInfo: ServiceInfo;
}

const SEOMeta = ({ service, serviceInfo }: SEOMetaProps) => {
  // Format the service name for display (e.g., "ui-ux-design" to "UI UX Design")
  const formattedServiceName = service
    .split('-')
    .map(word => {
      if (word.toLowerCase() === 'ui' || word.toLowerCase() === 'ux') {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
    
  // Generate more keywords based on the service
  const keywords = [
    `${formattedServiceName}`,
    `best ${formattedServiceName}`,
    `professional ${formattedServiceName}`,
    `${formattedServiceName} services`,
    `${formattedServiceName} agency`,
    `${formattedServiceName} company`,
    `affordable ${formattedServiceName}`,
    `expert ${formattedServiceName}`,
    `${formattedServiceName} near me`,
    `top ${formattedServiceName} provider`
  ].join(', ');
  
  return (
    <Helmet>
      <title>{serviceInfo.title} | NexaVision Creative Agency</title>
      <meta name="description" content={serviceInfo.description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`https://nexavision.com/services/${service}`} />
      <meta property="og:title" content={`${serviceInfo.title} | NexaVision Creative Agency`} />
      <meta property="og:description" content={serviceInfo.description} />
      <meta property="og:image" content={serviceInfo.image} />
      <meta property="og:url" content={`https://nexavision.com/services/${service}`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${serviceInfo.title} | NexaVision Creative Agency`} />
      <meta name="twitter:description" content={serviceInfo.description} />
      <meta name="twitter:image" content={serviceInfo.image} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "${serviceInfo.title}",
            "name": "${serviceInfo.title}",
            "description": "${serviceInfo.description}",
            "provider": {
              "@type": "ProfessionalService",
              "name": "NexaVision Creative Agency",
              "url": "https://nexavision.com",
              "telephone": "+1-800-555-0123",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Design Avenue",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94103",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/nexavision",
                "https://www.linkedin.com/company/nexavision",
                "https://www.instagram.com/nexavision"
              ]
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "${serviceInfo.title} Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Standard ${formattedServiceName} Package"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Premium ${formattedServiceName} Package"
                  }
                }
              ]
            },
            "review": {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4.9",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Client Review"
              }
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOMeta;
