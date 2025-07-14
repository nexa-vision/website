
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-muted">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-2xl text-gradient-white">NEXA<span className="text-gradient-white">VISION</span></span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Creating bold digital experiences that transform brands and drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-accent-purple transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-accent-purple transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-accent-purple transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" className="hover:text-accent-purple transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">Branding</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">Packing design</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">Vedio Editing</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">2D & 3D Animation</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">Product photography</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">Motion Graphics</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-accent-green transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent-green transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-accent-green transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent-green transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-accent-green transition-colors">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-accent-green transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-0.5 text-accent-purple" />
                <span className="text-muted-foreground">BZ Space, 4th floor, Capital tower HI - TECH City, Hyderabad, Telangana 500081</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-accent-purple" />
                <span className="text-muted-foreground">+91 9000288481</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-accent-purple" />
                <span className="text-muted-foreground">info@nexavisionsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} NexaVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
