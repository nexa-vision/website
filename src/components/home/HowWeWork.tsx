
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HowWeWork = () => {
  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, target audience, and unique challenges."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Next, we develop a tailored strategy that aligns with your business objectives and market position."
    },
    {
      number: "03",
      title: "Creation",
      description: "Our team brings your vision to life with attention to detail, quality, and innovation."
    },
    {
      number: "04",
      title: "Launch & Optimize",
      description: "We ensure a smooth deployment, then continuously optimize for peak performance and results."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="text-gradient-green">Work</span>
          </h2>
          <p className="text-muted-foreground">
            Our proven four-step process ensures exceptional results for every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-background rounded-lg border border-muted hover:border-accent-purple/30 transition-all"
            >
              <div className="text-5xl font-bold text-accent-purple/20 absolute top-4 right-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-8">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
            <Button variant="outline" className="border-accent-purple hover:bg-accent-purple hover:text-white">
              Learn More About Our Process
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
