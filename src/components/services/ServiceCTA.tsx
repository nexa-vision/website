import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceCTA = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-green/20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-muted">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-gradient-purple">Digital Presence</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how our services can help you achieve your business goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-4">
              {[
                "Custom tailored solutions for your business",
                "Transparent pricing with no hidden fees",
                "Dedicated support throughout your project"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 bg-accent-green/10 rounded-full mt-0.5">
                    <Check size={16} className="text-accent-green" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              {[
                "Experienced team of industry professionals",
                "Proven results with 250+ satisfied clients",
                "Ongoing optimization and improvement"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="p-1 bg-accent-green/10 rounded-full mt-0.5">
                    <Check size={16} className="text-accent-green" />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/contact">
              <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90 w-full sm:w-auto">
                Schedule a Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-accent-green text-accent-green hover:bg-accent-green/10 w-full sm:w-auto">
                Browse Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
