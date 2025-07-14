
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-accent-purple/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-accent-green/20 blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-6">
              Professional Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i % 3 === 0 ? "text-gradient-purple" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/contact">
                <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90">
                  Get a Free Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-accent-green text-accent-green hover:bg-accent-green/10">
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent-purple/20 to-accent-green/20 blur-md rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-background p-4 rounded-lg border border-muted shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accent-purple/90 flex items-center justify-center text-white text-xs border-2 border-background">
                        {i}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-medium">Trusted by 250+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
