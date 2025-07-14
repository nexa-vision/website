
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceFeaturesProps {
  features: string[];
}

const ServiceFeatures = ({ features }: ServiceFeaturesProps) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium mb-4">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient-purple">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our services include everything you need for a successful digital presence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg p-6 shadow-sm border border-transparent hover:border-accent-purple/30 transition-all duration-300 flex flex-col"
            >
              <div className="p-3 bg-accent-purple/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-accent-purple" size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              <p className="text-muted-foreground text-sm">
                Our team of experts ensures industry-leading quality and results for your business.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
