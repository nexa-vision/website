import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { PenTool, Code, Monitor, Film, BarChart, ArrowRight, CheckCircle, Search, Grid, List, SlidersHorizontal, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { serviceData, ServiceInfo } from '@/data/serviceData';
import { Helmet } from 'react-helmet-async';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Icon mapping for different service categories
const categoryIcons: Record<string, React.ReactNode> = {
  'Web Development': <Code size={36} className="text-accent-purple" />,
  'Digital Marketing': <BarChart size={36} className="text-accent-green" />,
  'Design & Creative': <PenTool size={36} className="text-accent-purple" />,
  'Business Solutions': <Monitor size={36} className="text-accent-green" />,
  'Specialized Services': <Film size={36} className="text-accent-purple" />
};

const ITEMS_PER_PAGE = 6;

const ServicesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Transform serviceData object into array and add route key
  const servicesArray = useMemo(() => {
    return Object.entries(serviceData).map(([key, value]) => ({
      ...value,
      route: key,
      id: key,
      keywords: value.features || [] // Add keywords fallback
    }));
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(servicesArray.map(service => service.category || 'Other'))];
    return cats.filter(cat => cat !== undefined);
  }, [servicesArray]);

  // Filter services based on search and category
  const filteredServices = useMemo(() => {
    return servicesArray.filter(service => {
      const matchesSearch = 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (service.keywords?.some((keyword: string) => 
          keyword.toLowerCase().includes(searchTerm.toLowerCase())
        ) ?? false);

      const matchesCategory = 
        selectedCategory === 'all' || 
        service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [servicesArray, searchTerm, selectedCategory]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const currentServices = filteredServices.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Generate JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": servicesArray.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "url": `https://nexavision.com/services/${service.route}`
    }))
  };

  return (
    <>
      <Helmet>
        <title>Professional Digital Services | NexaVision Creative Agency</title>
        <meta 
          name="description" 
          content="Explore NexaVision's comprehensive range of digital services including UI/UX design, web development, branding, digital marketing, and more." 
        />
        <meta 
          name="keywords" 
          content="digital services, UI/UX design, web development, branding, digital marketing, website design services, creative agency services" 
        />
        <link rel="canonical" href="https://nexavision.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/3 -left-64 w-96 h-96 rounded-full bg-accent-purple/20 blur-[150px]" />
            <div className="absolute bottom-1/3 -right-64 w-96 h-96 rounded-full bg-accent-green/20 blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-6">
                Our Expertise
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Comprehensive <span className="text-gradient-purple">Digital Services</span> for Your Business
              </h1>
              <p className="text-xl text-muted-foreground">
                Strategic solutions to help your brand stand out in the digital landscape and achieve sustainable growth.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-secondary/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="pl-12 h-12 text-base bg-background border-border focus-visible:ring-accent-purple"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  </div>
                  {searchTerm && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-background border border-border rounded-md shadow-lg">
                      <p className="text-sm text-muted-foreground px-2 py-1">
                        Found {filteredServices.length} results
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Filters and View Toggle */}
                <div className="flex gap-4 items-center">
                  {/* Category Filter Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="h-12 px-6">
                        <SlidersHorizontal className="h-4 w-4 mr-2" />
                        {selectedCategory === 'all' ? 'All Categories' : selectedCategory}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {categories.map((category: string) => (
                        <DropdownMenuItem
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setCurrentPage(1);
                          }}
                          className="flex items-center gap-2"
                        >
                          {categoryIcons[category] && (
                            <div className="h-4 w-4">
                              {categoryIcons[category]}
                            </div>
                          )}
                          <span>{category === 'all' ? 'All Categories' : category}</span>
                          {selectedCategory === category && (
                            <CheckCircle className="h-4 w-4 ml-auto text-accent-purple" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* View Toggle */}
                  <div className="flex items-center gap-2 border border-border rounded-lg p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="icon"
                      onClick={() => setViewMode('grid')}
                      className="h-10 w-10"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="icon"
                      onClick={() => setViewMode('list')}
                      className="h-10 w-10"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {selectedCategory !== 'all' && (
                <div className="mt-4 flex items-center gap-2">
                  <div className="text-sm text-muted-foreground">Active filters:</div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setSelectedCategory('all')}
                    className="h-8 text-sm"
                  >
                    {selectedCategory}
                    <X className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Services Grid/List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
            }>
              {currentServices.map((service) => (
                <Link key={service.route} to={`/services/${service.route}`} className="group">
                  <Card className={`bg-background border border-muted overflow-hidden transition-all duration-300 hover:border-accent-purple/40 hover:shadow-lg hover:-translate-y-1 ${
                    viewMode === 'list' ? 'flex' : 'h-full'
                  }`}>
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-72' : 'h-48'
                    }`}>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-50"></div>
                      <div className="absolute top-4 left-4 p-2 bg-background/80 backdrop-blur-sm rounded-full">
                        {categoryIcons[service.category || 'Other']}
                      </div>
                    </div>
                    
                    <CardContent className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="mb-2">
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent-purple/10 text-accent-purple">
                          {service.category || 'Other'}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-purple transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="flex items-center text-accent-purple font-medium">
                        Learn more
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="h-10 px-4 min-w-[100px]"
                >
                  Previous
                </Button>
                <div className="flex items-center gap-1 md:gap-2">
                  {/* First page */}
                  {currentPage > 3 && (
                    <>
                      <Button
                        variant={currentPage === 1 ? "default" : "outline"}
                        onClick={() => setCurrentPage(1)}
                        className="h-10 w-10 hidden md:flex"
                      >
                        1
                      </Button>
                      {currentPage > 4 && (
                        <span className="px-1 text-muted-foreground">...</span>
                      )}
                    </>
                  )}

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(page => {
                      if (totalPages <= 5) return true;
                      if (page === 1 || page === totalPages) return false;
                      return Math.abs(currentPage - page) <= 1;
                    })
                    .map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className="h-10 w-10"
                      >
                        {page}
                      </Button>
                    ))}

                  {/* Last page */}
                  {currentPage < totalPages - 2 && (
                    <>
                      {currentPage < totalPages - 3 && (
                        <span className="px-1 text-muted-foreground">...</span>
                      )}
                      <Button
                        variant={currentPage === totalPages ? "default" : "outline"}
                        onClick={() => setCurrentPage(totalPages)}
                        className="h-10 w-10 hidden md:flex"
                      >
                        {totalPages}
                      </Button>
                    </>
                  )}

                  {/* Mobile current page indicator */}
                  <span className="text-sm text-muted-foreground md:hidden px-2">
                    Page {currentPage} of {totalPages}
                  </span>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="h-10 px-4 min-w-[100px]"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* How We Work Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <div className="inline-block px-4 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium mb-4">
                Our Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We <span className="text-gradient-purple">Work</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A strategic approach to delivering exceptional results for every project
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    num: "01", 
                    title: "Discovery", 
                    desc: "We begin by understanding your business goals, target audience, and unique challenges." 
                  },
                  { 
                    num: "02", 
                    title: "Strategy", 
                    desc: "Based on our research, we develop a tailored strategy to address your specific needs." 
                  },
                  { 
                    num: "03", 
                    title: "Creation", 
                    desc: "Our team brings your project to life, focusing on quality and attention to detail." 
                  },
                  { 
                    num: "04", 
                    title: "Refinement", 
                    desc: "We iterate and refine based on feedback, ensuring the final product exceeds expectations." 
                  }
                ].map((step, index) => (
                  <div key={index} className="relative bg-background p-6 rounded-lg border border-muted hover:border-accent-purple/30 transition-all">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.num}
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-semibold mb-2 mt-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-accent-purple/20 to-accent-green/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-green/50 to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-muted">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your <span className="text-gradient-purple">Digital Presence</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss how our services can help you achieve your goals
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90 px-8 py-6 text-lg">
                    Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
