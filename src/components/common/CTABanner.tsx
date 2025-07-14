
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'default' | 'gradient' | 'minimal';
}

const CTABanner = ({
  title = "Ready to Transform Your Business?",
  description = "Join 250+ successful businesses that trust NexaVision for their digital transformation",
  primaryButtonText = "Get Free Consultation",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Our Work",
  secondaryButtonLink = "/portfolio",
  variant = 'default'
}: CTABannerProps) => {
  const baseClasses = "relative overflow-hidden rounded-2xl p-8 md:p-12 text-center";
  
  const variantClasses = {
    default: "bg-secondary border",
    gradient: "bg-gradient-to-r from-accent-purple/20 via-background to-accent-green/20 border border-accent-purple/30",
    minimal: "bg-background border-2 border-dashed border-muted"
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className={`${baseClasses} ${variantClasses[variant]}`}>
          {variant === 'gradient' && (
            <>
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent-green/10 rounded-full blur-3xl"></div>
            </>
          )}
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-accent-purple mr-2" size={24} />
              <span className="text-accent-purple font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={primaryButtonLink}>
                <Button 
                  size="lg" 
                  className="bg-accent-purple hover:bg-accent-purple/90 w-full sm:w-auto"
                >
                  {primaryButtonText}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
              
              <Link to={secondaryButtonLink}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-accent-green text-accent-green hover:bg-accent-green/10 w-full sm:w-auto"
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span>No Commitment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span>24h Response</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
