
import React from 'react';

interface ServiceDetailsProps {
  longDescription?: string;
}

const ServiceDetails = ({ longDescription }: ServiceDetailsProps) => {
  if (!longDescription) return null;
  
  return (
    <section className="py-16 bg-gradient-to-r from-accent-purple/5 to-accent-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-accent-purple to-accent-green"></div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Professional Services</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{longDescription}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Expertise", desc: "Team of specialists with years of industry experience" },
              { title: "Quality", desc: "Exceptional attention to detail and premium results" },
              { title: "Support", desc: "Dedicated customer service throughout your project" }
            ].map((item, index) => (
              <div key={index} className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-muted hover:border-accent-purple/30 transition-all">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
