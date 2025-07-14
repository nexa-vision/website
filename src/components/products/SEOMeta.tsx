
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ProductInfo } from '@/data/productData';

interface SEOMetaProps {
  product: string;
  productInfo: ProductInfo;
}

const SEOMeta = ({ product, productInfo }: SEOMetaProps) => {
  return (
    <Helmet>
      <title>{productInfo.title} | NexaVision Creative Agency</title>
      <meta name="description" content={productInfo.description} />
      <meta 
        name="keywords" 
        content={`${product?.split('-').join(' ')}, creative agency, professional ${product?.split('-').join(' ')}, ${product?.split('-').join(' ')} services`} 
      />
      <link rel="canonical" href={`https://nexavision.com/services/${product}`} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "${productInfo.title}",
            "provider": {
              "@type": "ProfessionalService",
              "name": "NexaVision Creative Agency",
              "url": "https://nexavision.com"
            },
            "description": "${productInfo.description}",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "url": "https://nexavision.com/services/${product}"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEOMeta;
