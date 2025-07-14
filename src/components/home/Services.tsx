import React, { useRef } from 'react';
import { Code, PenTool, BarChart, Monitor, Film, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { serviceData, ServiceInfo } from '@/data/serviceData';

// Icon mapping for different service categories
const categoryIcons: Record<string, React.ReactNode> = {
  'Web Development': <Code size={36} className="text-accent-purple" />,
  'Digital Marketing': <BarChart size={36} className="text-accent-green" />,
  'Design & Creative': <PenTool size={36} className="text-accent-purple" />,
  'Business Solutions': <Monitor size={36} className="text-accent-green" />,
  'Specialized Services': <Film size={36} className="text-accent-purple" />
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Transform serviceData object into array and get first 6 featured services
  const featuredServices = Object.entries(serviceData)
    .map(([key, value]) => ({
      ...value,
      route: key,
      id: key
    }))
    .filter(service => service.category) // Only show services with categories
    .slice(0, 6); // Show only first 6 services

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-accent-purple/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent-green/10 blur-[100px] animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive <span className="text-gradient-purple">Digital Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Strategic solutions to help your brand stand out in the digital landscape and achieve sustainable growth. Explore our range of services tailored to your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {featuredServices.map((service) => (
            <Link key={service.route} to={`/services/${service.route}`} className="group">
              <Card className="bg-background/80 backdrop-blur-sm border border-muted overflow-hidden transition-all duration-300 hover:border-accent-purple/40 hover:shadow-lg hover:-translate-y-1 h-full">
                <div className="relative overflow-hidden h-32 sm:h-40 md:h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-50" />
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 p-1.5 sm:p-2 bg-background/80 backdrop-blur-sm rounded-full">
                    {categoryIcons[service.category || 'Other']}
                  </div>
                </div>
                
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="mb-1 sm:mb-2">
                    <span className="text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-accent-purple/10 text-accent-purple">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-accent-purple transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 md:mb-6 line-clamp-2 sm:line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-accent-purple font-medium text-sm sm:text-base">
                    Learn more
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Link to="/services">
            <Button 
              variant="outline" 
              size="lg"
              className="relative group overflow-hidden border-accent-purple px-8 py-6 text-lg"
            >
              <span className="relative z-10">Explore All Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
