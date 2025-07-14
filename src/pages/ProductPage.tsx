
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Contact from '@/components/home/Contact';
import TrustBadges from '@/components/home/TrustBadges';
import Testimonials from '@/components/home/Testimonials';
import ProductHero from '@/components/products/ProductHero';
import ProductFeatures from '@/components/products/ProductFeatures';
import ProductProcess from '@/components/products/ProductProcess';
import ProductNotFound from '@/components/products/ProductNotFound';
import SEOMeta from '@/components/products/SEOMeta';
import { productData } from '@/data/productData';

const ProductPage = () => {
  const { product } = useParams<{ product: string }>();
  const productInfo = product ? productData[product] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!productInfo) {
    return <ProductNotFound />;
  }

  return (
    <>
      <SEOMeta product={product!} productInfo={productInfo} />
      <Navbar />
      <main>
        <ProductHero 
          title={productInfo.title}
          description={productInfo.description}
          image={productInfo.image}
        />
        
        <ProductFeatures features={productInfo.features} />
        
        <ProductProcess 
          process={productInfo.process}
          caseStudyLink={productInfo.caseStudyLink}
        />
        
        <TrustBadges />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
