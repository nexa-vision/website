import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Award, 
  ArrowRight, 
  Target, 
  Zap, 
  Heart, 
  Sparkles,
  Code,
  Globe,
  Laptop,
  Trophy,
  Rocket,
  CheckCircle2,
  Clock,
  Lightbulb,
  Gem
} from 'lucide-react';
import TrustBadges from '@/components/home/TrustBadges';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import HowWeWork from '@/components/home/HowWeWork';
import FAQ from '@/components/home/FAQ';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-accent-purple/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent-green/10 blur-[100px] animate-pulse" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                About NexaVision
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Ideas into <span className="text-gradient-green">Digital Reality</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A team of creative thinkers and strategic problem solvers dedicated to transforming brands through innovative digital solutions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-[21/9] rounded-xl overflow-hidden mb-16 group"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center">
                <div className="p-8 md:p-12">
                  <div className="space-y-4 max-w-lg">
                    <div className="flex items-center gap-2 text-accent-purple">
                      <Trophy className="h-5 w-5" />
                      <span className="font-medium">Established 2015</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Creating digital experiences that matter
                    </h2>
                    <div className="flex gap-8 text-muted-foreground">
                      <div>
                        <div className="text-2xl font-bold text-foreground">500+</div>
                        <div>Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">98%</div>
                        <div>Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 bg-secondary/50 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                  Our Journey
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  From Vision to <span className="text-gradient-purple">Reality</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    NexaVision was founded with a simple mission: to help brands stand out in the digital landscape through exceptional design and strategic thinking.
                  </p>
                  <p>
                    What began as a small team of passionate designers has grown into a full-service creative agency, working with clients across industries to create impactful digital experiences.
                  </p>
                  <p>
                    Today, we're proud to be trusted by startups and enterprise clients alike, helping them navigate the ever-changing digital landscape and achieve their business goals.
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Link to="/contact">
                    <Button className="bg-accent-purple hover:bg-accent-purple/90">
                      Work With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" className="border-accent-purple">
                      View Portfolio
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80" 
                    alt="Design process" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg -mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80" 
                    alt="Digital workspace" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                    alt="Team meeting" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Trust Badges Section */}
        <TrustBadges />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Achievement Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-green/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-purple/10 blur-[100px] animate-pulse" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                Our Achievements
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Milestones that <span className="text-gradient-purple">Define Us</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                A track record of excellence and innovation in digital solutions.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Trophy,
                  value: "500+",
                  label: "Projects Completed",
                  color: "purple"
                },
                {
                  icon: Users,
                  value: "200+",
                  label: "Happy Clients",
                  color: "green"
                },
                {
                  icon: Globe,
                  value: "15+",
                  label: "Countries Served",
                  color: "purple"
                },
                {
                  icon: Award,
                  value: "25+",
                  label: "Industry Awards",
                  color: "green"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:border-accent-purple/40 transition-all duration-300 hover:shadow-lg text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-accent-${stat.color}/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`h-6 w-6 text-accent-${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold mb-1 group-hover:text-accent-purple transition-colors">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <HowWeWork />

        {/* Values Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent-green/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-accent-purple/10 blur-[100px] animate-pulse" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                Our Core Values
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Principles that <span className="text-gradient-purple">Guide Us</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                These are the foundations that shape our work and define our culture.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: "Strategic",
                  description: "Every decision we make is rooted in strategy, ensuring measurable results for our clients.",
                  color: "purple"
                },
                {
                  icon: Zap,
                  title: "Innovative",
                  description: "We push boundaries and embrace new technologies to create cutting-edge solutions.",
                  color: "green"
                },
                {
                  icon: Heart,
                  title: "Passionate",
                  description: "We love what we do, and that passion shines through in every project we undertake.",
                  color: "purple"
                },
                {
                  icon: Users,
                  title: "Collaborative",
                  description: "We work closely with our clients, treating their challenges as our own.",
                  color: "green"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:border-accent-purple/40 transition-all duration-300 hover:shadow-lg h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-accent-${value.color}/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`h-6 w-6 text-accent-${value.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-purple transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />

        {/* Team Section */}
        <section className="py-20 bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[120px]" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Meet the <span className="text-gradient-purple">Innovators</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                The talented individuals driving NexaVision's success forward.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  name: "Alex Morgan", 
                  role: "Founder & Creative Director",
                  img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80"
                },
                { 
                  name: "Jamie Chen", 
                  role: "Lead UI/UX Designer",
                  img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                },
                { 
                  name: "Sam Wilson", 
                  role: "Technical Director",
                  img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                },
                { 
                  name: "Taylor Reed", 
                  role: "Marketing Strategist",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-background/80 backdrop-blur-sm rounded-lg border border-border p-4 hover:border-accent-purple/40 transition-all duration-300 hover:shadow-lg">
                    <div className="rounded-lg overflow-hidden mb-4 aspect-square">
                      <img 
                        src={member.img} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-accent-purple transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Certifications Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px]" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                Our Expertise
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Industry <span className="text-gradient-purple">Certifications</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Recognized excellence in digital innovation and development.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  icon: CheckCircle2,
                  title: "ISO 27001",
                  description: "Information Security Management"
                },
                {
                  icon: Gem,
                  title: "Google Partner",
                  description: "Certified Digital Marketing"
                },
                {
                  icon: Code,
                  title: "Microsoft Gold",
                  description: "Development Excellence"
                },
                {
                  icon: Globe,
                  title: "AWS Certified",
                  description: "Cloud Solutions Partner"
                }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="p-6 bg-background/80 backdrop-blur-sm rounded-lg border border-border hover:border-accent-purple/40 transition-all duration-300 hover:shadow-lg text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="h-6 w-6 text-accent-purple" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-purple transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-green/20" />
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-purple/10 blur-[100px] animate-pulse" />
          </div>

          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-purple/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-8 w-8 text-accent-purple" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="text-gradient-purple">Digital Presence</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's create something extraordinary together.
              </p>
              <div className="flex gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-accent-purple">
                    Explore Services
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
