
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, User, Building2 } from 'lucide-react';

interface LeadCaptureFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: 'default' | 'compact' | 'inline';
  onSubmit?: (data: any) => void;
}

const LeadCaptureForm = ({ 
  title = "Get Your Free Consultation",
  subtitle = "Let's discuss how we can help transform your business",
  buttonText = "Get Started",
  variant = 'default',
  onSubmit
}: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Thank you for your interest!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        interest: ''
      });
      
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className="bg-background/95 backdrop-blur-sm p-6 rounded-lg border">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-10"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-10"
              required
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full bg-accent-purple hover:bg-accent-purple/90">
            {isLoading ? "Sending..." : buttonText}
          </Button>
        </form>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <Input
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="flex-1"
          required
        />
        <Button 
          onClick={handleSubmit} 
          disabled={isLoading}
          className="bg-accent-purple hover:bg-accent-purple/90 shrink-0"
        >
          {isLoading ? "Sending..." : buttonText}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-background/95 backdrop-blur-sm p-8 rounded-xl border">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="pl-10"
              required
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="pl-10"
            />
          </div>
          <div className="relative">
            <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Company Name"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="pl-10"
            />
          </div>
        </div>
        
        <Textarea
          placeholder="Tell us about your project or requirements..."
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          rows={3}
        />
        
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-accent-purple hover:bg-accent-purple/90"
          size="lg"
        >
          {isLoading ? "Sending..." : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
