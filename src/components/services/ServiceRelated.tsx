
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { serviceData } from '@/data/serviceData';

interface ServiceRelatedProps {
  currentService: string;
}

const ServiceRelated = ({ currentService }: ServiceRelatedProps) => {
  // Get all service keys except the current one
  const relatedServices = Object.keys(serviceData)
    .filter(key => key !== currentService)
    // Get random 3 services
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
    
  if (relatedServices.length === 0) return null;
  
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Related Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedServices.map((serviceKey) => {
            const service = serviceData[serviceKey];
            return (
              <div key={serviceKey} className="group">
                <Link to={`/services/${serviceKey}`}>
                  <div className="relative h-60 rounded-t-lg overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                  
                  <div className="bg-background p-6 rounded-b-lg border border-t-0 border-muted group-hover:border-accent-purple/30 transition-all">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-purple transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="flex items-center text-accent-purple font-medium">
                      Learn more
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelated;
