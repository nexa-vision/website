
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProcessStep {
  step: string;
  description: string;
}

interface ServiceProcessProps {
  process: ProcessStep[];
  caseStudyLink: string;
}

const ServiceProcess = ({ process, caseStudyLink }: ServiceProcessProps) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
            Our Methodology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient-green">Process</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a proven methodology to deliver exceptional results for every project
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Process line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-purple via-accent-green to-accent-purple/30 -ml-0.5"></div>
          
          {process.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Circle on timeline */}
              <div className="hidden md:flex absolute left-1/2 -ml-6 w-12 h-12 rounded-full bg-background border-4 border-accent-purple items-center justify-center">
                <span className="text-accent-purple font-bold">{index + 1}</span>
              </div>
              
              <div className="md:w-1/2">
                <div className={`bg-background p-8 rounded-lg border border-muted hover:border-accent-purple/30 transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent-purple flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-accent-purple">{step.step}</h3>
                  </div>
                  
                  <h3 className="hidden md:block text-xl font-bold text-accent-purple mb-3">{step.step}</h3>
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
            <Button className="bg-background hover:bg-accent-purple hover:text-white border border-accent-purple">
              View Related Case Study
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
