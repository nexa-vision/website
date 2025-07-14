
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ProductNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6">Sorry, we don't have information about this service yet.</p>
          <Link to="/services">
            <Button className="bg-accent-purple hover:bg-accent-purple/90">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductNotFound;
