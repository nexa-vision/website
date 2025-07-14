
import React from 'react';
import { Shield, Zap, Users, BarChart } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap size={36} className="text-accent-purple" />,
      title: "Fast Turnaround",
      description: "We deliver high-quality projects efficiently, ensuring you meet your business deadlines and market opportunities."
    },
    {
      icon: <Shield size={36} className="text-accent-green" />,
      title: "Proven Expertise",
      description: "Our team brings years of industry experience across diverse sectors and cutting-edge technologies."
    },
    {
      icon: <Users size={36} className="text-accent-purple" />,
      title: "Client-Centric Approach",
      description: "We prioritize understanding your goals, audience, and business to deliver truly customized solutions."
    },
    {
      icon: <BarChart size={36} className="text-accent-green" />,
      title: "Results-Driven",
      description: "We focus on creating measurable impact through analytics and continuous improvement strategies."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-gradient-purple">Choose Us</span>
          </h2>
          <p className="text-muted-foreground">
            We're more than a service provider – we're your strategic partner for digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-background p-8 rounded-lg hover:shadow-lg transition-all">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
