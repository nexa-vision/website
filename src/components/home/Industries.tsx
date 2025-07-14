
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Industries = () => {
  const industries = [
    {
      name: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      description: "Digital solutions that improve patient care and streamline operations."
    },
    {
      name: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80",
      description: "Converting browsers into buyers with optimized customer experiences."
    },
    {
      name: "Finance",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b2d95a?auto=format&fit=crop&q=80",
      description: "Secure, intuitive platforms for fintech and traditional financial services."
    },
    {
      name: "Education",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
      description: "Engaging digital learning experiences that inspire and educate."
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-accent-purple/5 to-accent-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries We <span className="text-gradient-purple">Serve</span>
          </h2>
          <p className="text-muted-foreground">
            We deliver tailored digital solutions for diverse sectors, with deep expertise in these key industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square"
            >
              <img 
                src={industry.image} 
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-sm text-white/80 mb-4">{industry.description}</p>
                <Link to={`/industries/${industry.name.toLowerCase()}`} className="text-accent-green hover:text-white flex items-center text-sm font-medium">
                  Learn more
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-accent-green hover:bg-accent-green hover:text-white">
              Explore Our Services
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Industries;
