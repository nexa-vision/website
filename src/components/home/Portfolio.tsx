
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Avanterra Housing Platform",
    category: "Web Design & Development",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    delay: 100
  },
  {
    id: 2,
    title: "Luminary Brand Identity",
    category: "Branding & Design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    delay: 200
  },
  {
    id: 3,
    title: "Quantum Marketing Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    delay: 300
  },
  {
    id: 4,
    title: "Nebulix App Interface",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    delay: 400
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const filters = ["All", "Web Design", "Branding", "UI/UX", "Marketing"];
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.current) {
            titleRef.current.classList.add('animate-fade-in');
          }
          
          projects.forEach((_, index) => {
            if (projectRefs.current[index] && entry.target === projectRefs.current[index]) {
              setTimeout(() => {
                projectRefs.current[index]?.classList.add('animate-scale-in');
              }, projects[index].delay);
            }
          });
        }
      });
    }, { threshold: 0.1 });
    
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 opacity-0">
            Featured <span className="text-gradient-green">Work</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our diverse portfolio of successful projects and see how we've helped brands across industries achieve their goals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={activeFilter === filter ? "bg-accent-purple" : "border-muted"}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="group relative overflow-hidden rounded-lg opacity-0"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end">
                <p className="text-accent-green text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{project.title}</h3>
                <Link to={`/portfolio/${project.id}`} className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="sm" className="border-accent-purple hover:bg-accent-purple hover:text-white">
                    View Project
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/portfolio">
            <Button className="bg-accent-purple hover:bg-accent-purple/90">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
