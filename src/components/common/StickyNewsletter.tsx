
import React, { useState, useEffect } from 'react';
import { X, Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const StickyNewsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenNewsletter = localStorage.getItem('newsletter-seen');
      if (!hasSeenNewsletter) {
        setIsVisible(true);
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Welcome aboard!",
        description: "You've been subscribed to our newsletter. Check your email for a special offer!",
      });
      localStorage.setItem('newsletter-seen', 'true');
      setIsVisible(false);
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

  const handleClose = () => {
    localStorage.setItem('newsletter-seen', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-sm z-40">
      <div className="bg-gradient-to-r from-accent-purple to-accent-green p-1 rounded-t-lg sm:rounded-lg">
        <div className="bg-background p-4 sm:p-6 rounded-t-lg sm:rounded-lg">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-accent-green/10 rounded-full">
                <Gift size={16} className="text-accent-green" />
              </div>
              <h3 className="font-bold text-sm sm:text-base">Get 20% Off!</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="h-6 w-6 p-0"
            >
              <X size={14} />
            </Button>
          </div>
          
          <p className="text-xs sm:text-sm text-muted-foreground mb-4">
            Join our newsletter for exclusive tips, case studies, and special offers on our services.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-9 text-sm"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-accent-purple hover:bg-accent-purple/90 h-9 px-4 text-sm whitespace-nowrap"
              >
                {isLoading ? "..." : "Get Offer"}
              </Button>
            </div>
          </form>
          
          <p className="text-xs text-muted-foreground mt-2">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StickyNewsletter;
