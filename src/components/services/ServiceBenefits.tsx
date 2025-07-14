
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceBenefitsProps {
  benefits: string[];
}

const ServiceBenefits = ({ benefits }: ServiceBenefitsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-purple/20 to-accent-green/20 rounded-lg blur-md"></div>
            <div className="relative h-full aspect-video md:aspect-square bg-gradient-to-tr from-accent-purple/90 to-accent-green/90 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')] opacity-20 mix-blend-overlay bg-cover"></div>
              <div className="p-10 text-center relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Why Our Clients Choose Us</h3>
                <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
                <p className="text-white/90 mb-8">Experience the difference with our professional services tailored to your business needs.</p>
                <div className="grid grid-cols-2 gap-4">
                  {["99% Client Satisfaction", "15+ Years Experience", "250+ Successful Projects", "24/7 Support"].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-white font-medium">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-block px-4 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium mb-4">
              Key Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformative <span className="text-gradient-purple">Results</span> for Your Business
            </h2>
            <p className="text-muted-foreground mb-8">
              Our services deliver measurable impact that helps your business grow and succeed in today's competitive market.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg"
                >
                  <div className="p-1 bg-accent-green/10 rounded-full">
                    <CheckCircle className="text-accent-green h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
