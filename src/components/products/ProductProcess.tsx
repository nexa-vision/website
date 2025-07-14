
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProcessStep {
  step: string;
  description: string;
}

interface ProductProcessProps {
  process: ProcessStep[];
  caseStudyLink: string;
}

const ProductProcess = ({ process, caseStudyLink }: ProductProcessProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Process</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          We follow a proven methodology to deliver exceptional results for every project
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Process line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-accent-purple/30 md:left-1/2 md:-ml-0.5"></div>
          
          {process.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Circle on timeline */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-accent-purple flex items-center justify-center md:left-1/2 md:-ml-4">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              
              <div className="pl-12 md:pl-0 md:w-1/2">
                <div className={`p-6 bg-card rounded-lg ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <h3 className="text-xl font-bold mb-2 text-accent-purple">{step.step}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
              
              {/* Empty div for timeline alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to={caseStudyLink}>
            <Button 
              className="bg-background hover:bg-secondary border border-accent-purple"
            >
              View Related Case Study
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductProcess;
