import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, Users, TrendingUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer1 = setTimeout(() => {
        titleRef.current?.classList.add('animate-fade-in');
      }, 200);

      const timer2 = setTimeout(() => {
        subtitleRef.current?.classList.add('animate-fade-in');
      }, 600);

      const timer3 = setTimeout(() => {
        ctaRef.current?.classList.add('animate-fade-in');
      }, 1000);

      const timer4 = setTimeout(() => {
        statsRef.current?.classList.add('animate-fade-in');
      }, 1400);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isVisible]);

  const scrollProgress = Math.min(Math.max(scrollY / (window.innerHeight * 0.1), 0), 1);
  const slideDistance = (1 - scrollProgress) * 100;

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16 pb-8 overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-accent-purple/20 to-accent-green/20 blur-[50px] sm:blur-[75px] md:blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full bg-gradient-to-l from-accent-green/20 to-accent-purple/20 blur-[50px] sm:blur-[75px] md:blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-radial from-accent-purple/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-6 sm:pt-6">
        {/* ✅ Scrolling Banner */}
        <div className="relative overflow-hidden h-10 sm:h-10 bg-accent-purple/10 border border-accent-purple/10 rounded-full text-xs sm:text-sm font-medium text-accent-green backdrop-blur-sm group w-full mb-6">
          <div className="absolute min-w-max whitespace-nowrap animate-scroll px-2 py-2 group-hover:[animation-play-state:paused]">
            Our official website is coming soon — stay tuned as we build something exciting at NEXA VISION!
          </div>
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-accent-purple/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-accent-purple/20 to-transparent z-10 pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1 pt-6 sm:pt-8">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight opacity-0 tracking-tight"
            >
              <span className="block mb-2 sm:mb-4">Transform Your</span>
              <div className="block relative overflow-hidden">
                <span
                  className="inline-block text-gradient-purple font-extrabold transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(-${slideDistance}%)`
                  }}
                >
                  NexaVision
                </span>
              </div>
              <span className="block mt-2 sm:mt-4">Into Reality</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground opacity-0 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              We craft exceptional digital experiences that drive growth, engage audiences, and transform businesses through innovative design and cutting-edge technology.
            </p>

            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0 pt-4 justify-center lg:justify-start"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-gradient-to-r from-accent-purple to-accent-green hover:opacity-90 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Your Project
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-accent-purple/30 hover:bg-accent-purple/10 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto group transition-all duration-300 hover:scale-105">
                <Play size={16} className="mr-2 group-hover:scale-110 transition-transform flex-shrink-0" />
                Watch Our Story
              </Button>
            </div>

            <div ref={statsRef} className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 opacity-0 pt-6">
              <div className="text-center lg:text-left transform hover:scale-105 transition-transform">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-purple">250+</div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left transform hover:scale-105 transition-transform">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-green">97%</div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left transform hover:scale-105 transition-transform">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-accent-purple">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image + Floating Stats */}
          <div className="relative order-1 lg:order-2 px-4 sm:px-6 lg:px-0">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              <div className="absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-accent-purple/30 to-accent-green/30 rounded-xl sm:rounded-2xl md:rounded-3xl blur-xl md:blur-2xl -z-10 animate-pulse"></div>
              <div className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border border-muted/20 shadow-2xl bg-card">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                  alt="Digital workspace with creative development"
                  className="object-cover w-full h-full aspect-[4/3] hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-muted">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-accent-green animate-pulse"></div>
                    <span className="text-xs font-medium whitespace-nowrap">Live Project</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-3 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-muted animate-float">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-green/10 rounded-lg flex-shrink-0">
                  <Users size={16} className="text-accent-green" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">Happy Clients</p>
                  <p className="text-lg font-bold">150+</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-3 bg-background/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-muted animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-purple/10 rounded-lg flex-shrink-0">
                  <TrendingUp size={16} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground whitespace-nowrap">Growth Rate</p>
                  <p className="text-lg font-bold">300%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
