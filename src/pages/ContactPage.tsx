import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageSquare,
  Globe,
  CheckCircle2,
  ArrowRight,
  Users,
  Sparkles,
  Target,
  Rocket,
  MessageCircle,
  Calendar,
  FileCheck,
  Star
} from 'lucide-react';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'General Inquiry',
    budget: 'Not Specified'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        service: 'General Inquiry',
        budget: 'Not Specified'
      });
    }, 1500);
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
                Let's Talk
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your <span className="text-gradient-green">Digital Vision</span>?
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get in touch with our team of experts and let's discuss how we can help bring your ideas to life.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
                {[
                  { icon: Clock, value: "2hr", label: "Avg. Response Time" },
                  { icon: MessageSquare, value: "24/7", label: "Support" },
                  { icon: Globe, value: "Global", label: "Service Coverage" },
                  { icon: CheckCircle2, value: "100%", label: "Satisfaction Rate" }
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
        
        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              <div className="group bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent-purple/40 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-accent-purple" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href="mailto:hello@nexavision.com" className="text-muted-foreground hover:text-accent-green transition-colors block">
                   info@nexavisionsolutions.com
                </a>
                <a href="mailto:support@nexavision.com" className="text-muted-foreground hover:text-accent-green transition-colors block mt-1">
                   hr@nexavisionsolutions.com
                </a>
              </div>
              
              <div className="group bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent-purple/40 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-green/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-accent-green" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href="tel:+15552345678" className="text-muted-foreground hover:text-accent-purple transition-colors block">
                   +91 9000288481
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Mon-Fri: 9:00 AM - 6:00 PM EST
                </p>
              </div>
              
              <div className="group bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-border hover:border-accent-purple/40 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-accent-purple" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                 BZ Space, 4th floor, Capital tower HI - TECH City, Hyderabad, Telangana 500081<br />
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-16 bg-secondary/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-purple/5 blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  Send Us a <span className="text-gradient-purple">Message</span>
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/50 border-muted"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted/50 border-muted"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-muted/50 border-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1 (123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-muted/50 border-muted"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service You're Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-muted rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Branding">Branding</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Motion Graphics">Motion Graphics</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-muted rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    >
                      <option value="Not Specified">Not Specified</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted/50 border-muted min-h-[150px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent-purple hover:bg-accent-purple/90 py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent-purple/20 to-accent-green/20 blur-md rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden border-gradient h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580887a6cf807%3A0xc09107b5f31b02aa!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1620975373680!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="NexaVision Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We <span className="text-gradient-purple">Work</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our streamlined process ensures clear communication and successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: MessageCircle,
                  title: "Initial Consultation",
                  description: "We discuss your needs, goals, and vision for the project"
                },
                {
                  icon: Target,
                  title: "Strategy Planning",
                  description: "We develop a detailed roadmap and project scope"
                },
                {
                  icon: Rocket,
                  title: "Implementation",
                  description: "Our team brings your vision to life with regular updates"
                },
                {
                  icon: FileCheck,
                  title: "Launch & Support",
                  description: "We ensure smooth deployment and ongoing maintenance"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border group-hover:border-accent-purple/40 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-6 w-6 text-accent-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-accent-purple/30 to-accent-green/30 transform translate-x-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="text-gradient-green">Clients</span> Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Priyanka Edupuganti",
                  role: "CEO, Brivox",
                  image: "https://static.wixstatic.com/media/b9ddcd_b81cc44734cc4c0ea58cf22789ddb0db~mv2.jpeg/v1/fill/w_804,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b9ddcd_b81cc44734cc4c0ea58cf22789ddb0db~mv2.jpeg",
                  content: "Working with NexaVision was a game-changer for our brand. Their attention to detail and creative solutions exceeded our expectations."
                },
                {
                  name: "Michael Chen",
                  role: "Marketing Director, InnovateCo",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                  content: "The team's expertise in digital transformation helped us achieve our goals faster than we imagined. Highly recommended!"
                },
                {
                  name: "Emily Rodriguez",
                  role: "Founder, DesignHub",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                  content: "NexaVision's strategic approach and professional execution made our project a huge success. A pleasure to work with!"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-accent-purple/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="inline-block w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-gradient-purple">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Find quick answers to common questions about working with us
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "What is your typical project timeline?",
                    answer: "Project timelines vary depending on scope and complexity. Typically, small projects take 4-6 weeks, while larger projects can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
                  },
                  {
                    question: "How do you handle project communication?",
                    answer: "We maintain regular communication through scheduled check-ins, progress reports, and a dedicated project management platform. You'll have direct access to your project team throughout the process."
                  },
                  {
                    question: "What is your payment structure?",
                    answer: "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments."
                  },
                  {
                    question: "Do you offer ongoing support after project completion?",
                    answer: "Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally after launch."
                  },
                  {
                    question: "Can you work with clients internationally?",
                    answer: "Absolutely! We work with clients worldwide and have experience managing remote projects effectively across different time zones."
                  }
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left hover:text-accent-purple">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Schedule a <span className="text-gradient-green">Free Consultation</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Book a 30-minute call with our experts to discuss your project
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-accent-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium">30-Minute Discovery Call</h4>
                      <p className="text-sm text-muted-foreground">No commitment required</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-green/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-accent-green" />
                    </div>
                    <div>
                      <h4 className="font-medium">Meet the Team</h4>
                      <p className="text-sm text-muted-foreground">Talk to our experts directly</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-accent-purple" />
                    </div>
                    <div>
                      <h4 className="font-medium">Custom Solution</h4>
                      <p className="text-sm text-muted-foreground">Get a tailored proposal</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90 w-full py-6">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Your Call
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    Available slots within the next 48 hours
                  </p>
                </div>
              </div>
            </div>
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
              className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-muted text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to Join Our <span className="text-gradient-purple">Team</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We're always looking for talented individuals to join our creative family.
              </p>
              <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90 px-8 py-6 text-lg">
                View Career Opportunities
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
