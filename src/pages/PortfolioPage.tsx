import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Users, 
  Code, 
  Palette, 
  Megaphone,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Avanterra Housing Platform",
    category: "Web Development",
    tags: ["UI/UX", "Development"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    client: "Avanterra Real Estate",
    year: "2023",
    description: "A comprehensive real estate platform with virtual tours and smart booking",
    stats: {
      increase: "150%",
      metric: "Booking Rate"
    }
  },
  {
    id: 2,
    title: "Luminary Brand Identity",
    category: "Branding",
    tags: ["Branding", "Design"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
    client: "Luminary Tech",
    year: "2023",
    description: "Complete brand transformation for a tech innovator",
    stats: {
      increase: "85%",
      metric: "Brand Recognition"
    }
  },
  {
    id: 3,
    title: "Quantum Marketing Campaign",
    category: "Digital Marketing",
    tags: ["Marketing", "Strategy"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    client: "Quantum Industries",
    year: "2022",
    description: "Data-driven marketing campaign with exceptional ROI",
    stats: {
      increase: "200%",
      metric: "Lead Generation"
    }
  },
  {
    id: 4,
    title: "Nebulix App Interface",
    category: "UI/UX Design",
    tags: ["UI/UX", "Mobile"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    client: "Nebulix Technologies",
    year: "2022",
    description: "Intuitive mobile app design with focus on user experience",
    stats: {
      increase: "95%",
      metric: "User Satisfaction"
    }
  },
  {
    id: 5,
    title: "Horizon E-Commerce Platform",
    category: "Web Development",
    tags: ["Development", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
    client: "Horizon Retail",
    year: "2023",
    description: "High-performance e-commerce solution with advanced features",
    stats: {
      increase: "175%",
      metric: "Sales Growth"
    }
  },
  {
    id: 6,
    title: "Pulse Health App",
    category: "UI/UX Design",
    tags: ["UI/UX", "Mobile"],
    image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&q=80",
    client: "Pulse Health",
    year: "2022",
    description: "Healthcare app focused on patient engagement",
    stats: {
      increase: "120%",
      metric: "Patient Engagement"
    }
  },
];

const categoryIcons = {
  "UI/UX": <Palette className="w-4 h-4" />,
  "Development": <Code className="w-4 h-4" />,
  "Branding": <Star className="w-4 h-4" />,
  "Marketing": <Megaphone className="w-4 h-4" />
};

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const filters = ["All", "UI/UX", "Branding", "Development", "Marketing"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => 
        project.category.includes(activeFilter) || 
        project.tags.includes(activeFilter)
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-accent-purple/20 blur-[120px]" />
            <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-accent-green/20 blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                Our Work
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Ideas into <span className="text-gradient-green">Digital Success</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Explore our portfolio of successful projects and see how we've helped brands achieve their digital ambitions.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
                {[
                  { icon: CheckCircle, value: "200+", label: "Projects Completed" },
                  { icon: Users, value: "150+", label: "Happy Clients" },
                  { icon: Star, value: "15+", label: "Industry Awards" },
                  { icon: Clock, value: "8+", label: "Years Experience" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="bg-secondary/50 backdrop-blur-sm p-4 rounded-lg border border-border"
                  >
                    <stat.icon className="w-6 h-6 text-accent-purple mb-2" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-12"
            >
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  className={`
                    ${activeFilter === filter ? "bg-accent-purple" : "border-muted"}
                    transition-all duration-300
                  `}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter !== "All" && categoryIcons[filter as keyof typeof categoryIcons]}
                  <span className="ml-1">{filter}</span>
                </Button>
              ))}
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg border border-border bg-secondary/20 backdrop-blur-sm"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="text-sm text-accent-green">
                              {categoryIcons[tag as keyof typeof categoryIcons]}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">{project.stats.increase}</p>
                            <p className="text-xs text-muted-foreground">{project.stats.metric}</p>
                          </div>
                          <Button variant="outline" size="sm" className="border-accent-purple hover:bg-accent-purple hover:text-white">
                            View Case Study
                            <ArrowRight size={14} className="ml-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Featured Project */}
        <section className="py-20 bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                    Featured Project
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Avanterra Housing <span className="text-gradient-purple">Platform</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    A comprehensive digital platform for real estate management, featuring intuitive property listings, virtual tours, and a sophisticated booking system.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["UI/UX Design", "Web Development", "CRM Integration"].map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-accent-purple/10 text-accent-purple text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-2xl font-bold text-accent-green">150%</p>
                      <p className="text-sm text-muted-foreground">Booking Rate Increase</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-2xl font-bold text-accent-purple">98%</p>
                      <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                    </div>
                  </div>
                  <Button className="bg-accent-purple hover:bg-accent-purple/90">
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-accent-purple/20 to-accent-green/20 blur-md rounded-lg"></div>
                  <div className="relative rounded-lg overflow-hidden border-gradient">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80" 
                      alt="Avanterra Housing Platform" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-green/20"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-muted"
            >
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Create Your <span className="text-gradient-purple">Success Story</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss how we can help bring your vision to life.
                </p>
                <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90 px-8 py-6 text-lg">
                  Start Your Project
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
