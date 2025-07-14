
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React, { useRef, useEffect } from 'react';
import { Shield, Award, Star, CheckCircle, Clock, Hexagon } from 'lucide-react';
import { cn } from "@/lib/utils";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Enterprise-grade security protocols",
    color: "text-accent-purple",
    bgGradient: "from-accent-purple/20 to-accent-purple/5",
    delay: 100
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Industry-leading recognition",
    color: "text-accent-green",
    bgGradient: "from-accent-green/20 to-accent-green/5",
    delay: 200
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Exceptional client satisfaction",
    color: "text-accent-purple",
    bgGradient: "from-accent-purple/20 to-accent-purple/5",
    delay: 300
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Data-driven success metrics",
    color: "text-accent-green",
    bgGradient: "from-accent-green/20 to-accent-green/5",
    delay: 400
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Consistent project execution",
    color: "text-accent-purple",
    bgGradient: "from-accent-purple/20 to-accent-purple/5",
    delay: 500
  }
];

const clientLogos = [
  { url: "https://placehold.co/120x60/1F1F1E/FFFFFF?text=BRAND", alt: "Client 1" },
  { url: "https://placehold.co/120x60/1F1F1E/FFFFFF?text=BRAND", alt: "Client 2" },
  { url: "https://placehold.co/120x60/1F1F1E/FFFFFF?text=BRAND", alt: "Client 3" },
  { url: "https://placehold.co/120x60/1F1F1E/FFFFFF?text=BRAND", alt: "Client 4" },
  { url: "https://placehold.co/120x60/1F1F1E/FFFFFF?text=BRAND", alt: "Client 5" }
];

const TrustBadges = () => {
  const badgesRef = useRef<HTMLDivElement>(null);
  const hexagonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          badges.forEach((_, index) => {
            const badge = document.getElementById(`badge-${index}`);
            if (badge) {
              setTimeout(() => {
                badge.classList.add('animate-slide-up', 'opacity-100');
                badge.classList.remove('translate-y-4', 'opacity-0');
              }, 200 + (index * 100));
            }
          });
        }
      },
      { threshold: 0.2 }
    );

    if (badgesRef.current) {
      observer.observe(badgesRef.current);
    }

    // Animate background hexagons
    const animateHexagons = () => {
      const hexagons = document.querySelectorAll<HTMLElement>('.floating-hexagon');
      hexagons.forEach((hex: HTMLElement) => {
        const x = Math.random() * 100 - 50;
        const y = Math.random() * 100 - 50;
        hex.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
      });
    };

    const interval = setInterval(animateHexagons, 3000);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  // Get window width for responsive hexagons
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Adjusted blur sizes for mobile */}
        <div className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-accent-purple/10 blur-[50px] sm:blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-accent-green/10 blur-[50px] sm:blur-[100px] animate-pulse" />
        {/* Reduced number of hexagons on mobile */}
        {Array.from({ length: windowWidth < 640 ? 4 : 8 }).map((_, i) => (
          <div
            key={i}
            className="floating-hexagon absolute transition-transform duration-\\[3000ms\\] ease-in-out"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Hexagon 
              className={cn(
                "w-12 h-12 sm:w-16 sm:h-16 opacity-5",
                i % 2 === 0 ? "text-accent-purple" : "text-accent-green"
              )}
            />
          </div>
        ))}
      </div>
        
      <div ref={badgesRef} className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center mb-12 sm:mb-16 relative">
          <div className="inline-block px-3 sm:px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 relative">
            <span className="relative z-10">Our Reputation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-green/20 rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center relative px-4">
            Trusted By Leading{" "}
            <span className="relative inline-block">
              <span className="text-gradient-purple">Brands</span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="6" viewBox="0 0 100 6" preserveAspectRatio="none">
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  className="animate-draw-line"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(var(--accent-purple))" />
                    <stop offset="100%" stopColor="rgb(var(--accent-green))" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-muted-foreground text-center max-w-2xl px-4">
            Delivering exceptional results and building lasting partnerships through
            <span className="text-gradient-purple font-medium"> innovation </span>
            and
            <span className="text-gradient-green font-medium"> excellence</span>
          </p>
        </div>
          
        {/* Adjusted grid for better mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                id={`badge-${index}`}
                key={index}
                className={cn(
                  "group flex flex-col items-center p-4 sm:p-6",
                  "bg-background/80 backdrop-blur-sm",
                  "rounded-xl border border-border/50",
                  "transform transition-all duration-500 ease-out",
                  "hover:border-accent-purple/30 hover:shadow-lg hover:-translate-y-1",
                  "opacity-0 translate-y-4",
                  "relative overflow-hidden"
                )}
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  badge.bgGradient,
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                )} />
                
                <div className={cn(
                  "relative mb-3 sm:mb-4 p-2 sm:p-3 rounded-lg",
                  "bg-gradient-to-br from-background to-accent-purple/10",
                  "group-hover:scale-110 transition-transform duration-500"
                )}>
                  <Icon className={cn(
                    badge.color,
                    "w-6 h-6 sm:w-8 sm:h-8 transform group-hover:rotate-12 transition-transform duration-500"
                  )} />
                </div>
          
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 relative z-10">{badge.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center relative z-10">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Adjusted client logos section for mobile */}
        <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="group relative perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-green/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={logo.url} 
                  alt={logo.alt}
                  className="h-6 sm:h-8 md:h-10 w-auto opacity-50 group-hover:opacity-100 transition-all duration-300 relative z-10 transform group-hover:rotate-y-180" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes draw-line {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw-line {
          stroke-dasharray: 100;
          animation: draw-line 1.5s ease-in-out forwards;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-180:hover {
          transform: rotateY(180deg);
        }
        
        /* Mobile-specific animations */
        @media (max-width: 640px) {
          .animate-draw-line {
            animation-duration: 1s;
          }
          .floating-hexagon {
            transition-duration: 2000ms;
          }
        }
      `}</style>
    </section>
  );
};

export default TrustBadges;
