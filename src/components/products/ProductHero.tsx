
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ProductHeroProps {
  title: string;
  description: string;
  image: string;
}

const ProductHero = ({ title, description, image }: ProductHeroProps) => {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-24 w-64 h-64 rounded-full bg-accent-purple/20 blur-[100px]" />
        <div className="absolute bottom-1/4 -right-24 w-64 h-64 rounded-full bg-accent-green/20 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-accent-purple hover:bg-accent-purple/90">
                Request a Quote
              </Button>
              <Button variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green/10">
                See Related Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden border-gradient">
              <img 
                src={image} 
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
