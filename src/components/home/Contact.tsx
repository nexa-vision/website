
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block p-3 bg-muted rounded-xl mb-6">
                <Mail className="h-6 w-6 text-accent-purple" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's <span className="text-gradient-purple">Connect</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to transform your brand's digital presence? Get in touch with us today and let's discuss how we can help you achieve your goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 bg-muted/50 p-4 rounded-lg">
                  <div className="bg-accent-purple/20 p-2 rounded-full">
                    <Mail size={20} className="text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">info@nexavisionsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 bg-muted/50 p-4 rounded-lg">
                  <div className="bg-accent-green/20 p-2 rounded-full">
                    <Mail size={20} className="text-accent-green" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Inquiries</p>
                    <p className="font-medium">hr@nexavisionsolutions.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-muted">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
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
                      Your Email
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
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted/50 border-muted min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent-purple hover:bg-accent-purple/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
