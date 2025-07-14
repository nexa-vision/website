
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background p-6 rounded-lg flex items-start gap-4 hover:transform hover:scale-105 transition-all"
            >
              <CheckCircle className="text-accent-green shrink-0 mt-1" />
              <p className="font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
