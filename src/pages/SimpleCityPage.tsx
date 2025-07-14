
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { cityData } from '@/data/cityData';
import { motion } from 'framer-motion';

// Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Services from '@/components/home/Services';
import TrustBadges from '@/components/home/TrustBadges';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowWeWork from '@/components/home/HowWeWork';
import FAQ from '@/components/home/FAQ';
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Target,
  Users,
  Globe,
  Phone,
  Mail,
  MessageSquare,
  Star,
  TrendingUp,
  Zap,
  Shield,
  Award,
  Heart,
  Sparkles,
  Hexagon
} from 'lucide-react';

const SimpleCityPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityInfo = city ? (cityData as Record<string, any>)[city] : null;
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });

  // Animation for floating hexagons
  useEffect(() => {
    const hexagons = document.querySelectorAll('.floating-hexagon');
    hexagons.forEach((hexagon) => {
      const duration = 3000 + Math.random() * 2000;
      const delay = Math.random() * 1000;
      const element = hexagon as HTMLElement;
      
      const animate = () => {
        const translateY = -20 + Math.random() * 40;
        const translateX = -20 + Math.random() * 40;
        element.style.transform = `translate(${translateX}px, ${translateY}px)`;
        element.style.transition = `transform ${duration}ms ease-in-out`;
        
        setTimeout(animate, duration);
      };
      
      setTimeout(() => animate(), delay);
    });
  }, []);

  if (!cityInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested city page does not exist.</p>
          <Button variant="default" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your lead capture system
    console.log('Form submitted:', formData);
  };

  // Schema for Local Business
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `NexaVision Digital Solutions - ${cityInfo.cityName}`,
    "description": cityInfo.metaDescription,
    "url": `https://nexavision.com/locations/${city}`,
    "areaServed": cityInfo.cityName,
    "serviceType": cityInfo.keyServices,
    "priceRange": "₹₹₹",
    "knowsLanguage": ["Telugu", "English", "Hindi"]
  };

  return (
    <>
      <Helmet>
        <title>{cityInfo.title}</title>
        <meta name="description" content={cityInfo.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://nexavision.com/locations/${city}`} />
        <meta property="og:title" content={cityInfo.title} />
        <meta property="og:description" content={cityInfo.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://nexavision.com/locations/${city}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content={cityInfo.cityName} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <Navbar />
      
      <main className="bg-background min-h-screen">
        {/* Hero Section with Lead Form */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Enhanced Animated Background */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Primary gradient orbs with increased opacity */}
            <div className="absolute top-0 -left-24 w-96 h-96 rounded-full bg-accent-purple/40 blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full bg-accent-green/40 blur-[120px] animate-pulse" />
            
            {/* Diagonal gradient stripes */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,var(--accent-purple-alpha)_50%,transparent_75%)] opacity-10 animate-gradient" />
            <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,var(--accent-green-alpha)_50%,transparent_75%)] opacity-10 animate-gradient" />
            
            {/* Central radial gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,var(--accent-purple-alpha)_0%,transparent_60%)] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,var(--accent-green-alpha)_0%,transparent_60%)] opacity-20" />
            
            {/* Moving gradient lines */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent-purple via-accent-green to-accent-purple opacity-30" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-accent-green via-accent-purple to-accent-green opacity-30" />
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-green to-accent-purple opacity-30" />
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-green via-accent-purple to-accent-green opacity-30" />
            </div>

            {/* Floating hexagons with enhanced colors */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="floating-hexagon absolute transition-transform duration-\\[3000ms\\] ease-in-out"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              >
                <Hexagon 
                  className={`w-${Math.random() > 0.5 ? '8' : '12'} h-${Math.random() > 0.5 ? '8' : '12'} ${
                    i % 2 === 0 
                      ? 'text-accent-purple opacity-20' 
                      : 'text-accent-green opacity-20'
                  }`}
                />
              </div>
            ))}

            {/* Gradient overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-background/95" />
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                  #{cityInfo.cityName} Digital Solutions
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Transform Your <span className="text-gradient-purple">{cityInfo.cityName}</span> Business with Digital Excellence
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert web development and digital marketing solutions tailored for {cityInfo.cityName} businesses
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {cityInfo.mainIndustries.map((industry: string, index: number) => (
                    <span key={index} className="bg-accent-purple/10 px-4 py-2 rounded-full text-sm text-accent-purple">
                      {industry}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Lead Capture Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6">
                  <span className="text-gradient-purple">{cityInfo.ctaText}</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Name</label>
                    <input
                      type="text"
                      placeholder="Your Business Name"
                      className="w-full p-3 rounded-lg bg-background/50 border focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all"
                      value={formData.businessName}
                      onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-3 rounded-lg bg-background/50 border focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="w-full p-3 rounded-lg bg-background/50 border focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Industry</label>
                    <select
                      className="w-full p-3 rounded-lg bg-background/50 border focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      required
                    >
                      <option value="">Select Your Industry</option>
                      {cityInfo.mainIndustries.map((industry: string, index: number) => (
                        <option key={index} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      placeholder="Tell us about your project"
                      className="w-full p-3 rounded-lg bg-background/50 border focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all h-24"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent-purple hover:bg-accent-purple/90">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Services Section */}
        <Services/>

        {/* Trust Badges Section */}
        <TrustBadges />

        {/* Local Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-accent-green/10 text-accent-green rounded-full text-sm font-medium mb-4">
                Success Stories from {cityInfo.cityName}
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Local Businesses <span className="text-gradient-green">Thriving</span> with Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real results achieved for businesses in {cityInfo.cityName}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cityInfo.testimonials.map((testimonial: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border hover:border-accent-green/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <p className="text-sm font-medium text-accent-purple">{testimonial.project}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* How We Work Section */}
        <HowWeWork />

        {/* Industry Focus */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                Industries We Serve
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Specialized Solutions for <span className="text-gradient-green">{cityInfo.cityName}</span> Industries
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tailored digital solutions for key industries driving {cityInfo.cityName}'s economy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cityInfo.mainIndustries.map((industry: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-lg border hover:border-accent-green/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-accent-green/10 flex items-center justify-center">
                      <Target className="h-5 w-5 text-accent-green" />
                    </div>
                    <h3 className="text-xl font-semibold">{industry}</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-green" />
                      <span>Industry-specific digital strategies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-green" />
                      <span>Customized growth solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-green" />
                      <span>Local market expertise</span>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-accent-purple/5 to-accent-green/5">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Ready to Grow Your <span className="text-gradient-purple">{cityInfo.cityName}</span> Business?
              </h2>
              <div className="max-w-xl mx-auto">
                <p className="text-muted-foreground mb-8">
                  Get in touch for a free consultation and discover how we can help you achieve your digital goals
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent-purple/20 hover:bg-accent-purple/10">
                    View Our Portfolio
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5 text-accent-purple" />
                    <span>Contact Sales</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5 text-accent-purple" />
                    <span>Email Us</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SimpleCityPage;
