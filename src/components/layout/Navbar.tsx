
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { color } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceItems = [
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Branding', path: '/services/branding' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Motion Graphics', path: '/services/motion-graphics' },
    { name: 'Product photography', path: '/contact/' },
    { name: 'Paking design', path: '/contact/' },
    { name: '2D & 3D Animation', path: '/contact/' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-muted' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 relative pl-[70px]">
  <img src="/nexalogo.png" alt="Logo" className="w-14 h-auto absolute left-0" />
  <span className="font-extrabold text-xl sm:text-2xl text-gradient-white">
    NE<span className="text-gradient-red">X</span>A VISION
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-1 hover:text-accent-white">
                        {item.name}
                        <ChevronDown size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {serviceItems.map((service) => (
                        <DropdownMenuItem key={service.name} asChild>
                          <Link 
                            to={service.path}
                            className="cursor-pointer hover:bg-accent-purple/10"
                          >
                            {service.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className={`hover:text-accent-purple transition-colors ${
                      location.pathname === item.path ? 'text-accent-purple' : 'text-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button className="bg-accent-purple hover:bg-accent-purple/90">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-muted">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <div className="font-medium text-accent-purple py-2">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-3 font-medium transition-colors ${
                        location.pathname === item.path ? 'text-accent-purple' : 'text-foreground hover:text-accent-purple'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-muted">
                <Link to="/contact" className="block w-full">
                  <Button className="w-full bg-accent-purple hover:bg-accent-purple/90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
