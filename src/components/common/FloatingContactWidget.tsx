
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleToggle = () => {
    console.log('Floating button clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 2 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Main floating button - optimized for mobile */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          onClick={handleToggle}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-purple hover:bg-accent-purple/90 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          size="icon"
          type="button"
        >
          {isOpen ? (
            <X size={20} className="text-white" />
          ) : (
            <MessageCircle size={20} className="text-white group-hover:scale-110 transition-transform" />
          )}
        </Button>
        
        {/* Pulse animation for attention */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-accent-purple animate-ping opacity-20 pointer-events-none"></div>
        )}
      </div>

      {/* Contact panel - mobile-first responsive */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-6 sm:w-80 sm:h-auto z-40">
          {/* Mobile backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 sm:hidden" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel content */}
          <div className="bg-background border border-muted rounded-t-2xl sm:rounded-2xl shadow-2xl h-full sm:h-auto flex flex-col max-h-screen sm:max-h-[600px] relative">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-muted flex-shrink-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold">Get In Touch</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden"
                  type="button"
                >
                  <X size={20} />
                </Button>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span>Online now</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>250+ happy clients</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1 text-sm">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={14} className="fill-accent-green text-accent-green" />
                  ))}
                </div>
                <span className="text-muted-foreground ml-1">4.9/5 rating</span>
              </div>
            </div>
            
            {/* Quick actions - mobile optimized */}
            <div className="p-4 sm:p-6 border-b border-muted flex-shrink-0">
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:+15555551234" 
                  className="flex items-center gap-2 p-3 bg-accent-green/10 hover:bg-accent-green/20 rounded-lg transition-colors text-sm"
                >
                  <Phone size={16} className="text-accent-green" />
                  <span className="font-medium">Call Now</span>
                </a>
                <a 
                  href="mailto:hello@nexavision.com" 
                  className="flex items-center gap-2 p-3 bg-accent-purple/10 hover:bg-accent-purple/20 rounded-lg transition-colors text-sm"
                >
                  <Mail size={16} className="text-accent-purple" />
                  <span className="font-medium">Email Us</span>
                </a>
              </div>
            </div>
            
            {/* Form - scrollable on mobile */}
            <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-10 sm:h-11"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="h-10 sm:h-11"
                />
                <Textarea
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={3}
                  required
                  className="resize-none"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-accent-purple hover:bg-accent-purple/90 h-10 sm:h-11"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-3 text-center">
                We typically respond within 2 hours during business days
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingContactWidget;
