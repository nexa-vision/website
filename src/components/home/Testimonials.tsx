
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  stars: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priyanka Edupuganti",
    position: "CEO",
    company: "Brivox",
    content: "It has been a pleasure collaborating with someone who brings creativity, dedication, and a strong sense of responsibility to every task. Their work consistently aligned with our brand vision and brought fresh, innovative ideas to the table. The professionalism and collaborative attitude made a significant positive impact on our projects. We truly value the contribution and look forward to future collaborations.",
    image: "https://static.wixstatic.com/media/b9ddcd_b81cc44734cc4c0ea58cf22789ddb0db~mv2.jpeg/v1/fill/w_804,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b9ddcd_b81cc44734cc4c0ea58cf22789ddb0db~mv2.jpeg",
    stars: 5,
    location: "Bangalore, KA"
  },
  {
    id: 2,
    name: "Michael Chang",
    position: "CEO",
    company: "Innovate Solutions",
    content: "Working with NexaVision was the best decision we made for our rebranding. Their strategic approach to design and development helped us stand out in a competitive market. Our digital presence has never been stronger.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    stars: 5,
    location: "New York, NY"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Creative Director",
    company: "VisualEdge",
    content: "The motion graphics NexaVision created for our product launch exceeded our expectations. The team's creativity and attention to detail resulted in a campaign that went viral and increased our product awareness by 200%.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
    stars: 5,
    location: "Los Angeles, CA"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      containerRef.current?.classList.add('animate-fade-in');
    }, 600);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 overflow-hidden">
      <div 
        ref={containerRef}
        className="container mx-auto px-4 opacity-0"
      >
        <div className="flex flex-col items-center mb-12">
          <span className="text-accent-purple font-semibold">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-accent-purple rounded-full mb-6"></div>
          <p className="text-muted-foreground text-center max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say about working with NexaVision.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 -z-10">
            <Quote size={120} className="text-accent-purple/10" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 flex justify-center items-center">
              <div className="relative">
                <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-accent-purple">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-lg shadow-lg">
                  <div className="flex">
                    {renderStars(testimonials[activeIndex].stars)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 flex flex-col justify-center">
              <blockquote className="mb-6 text-lg italic">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              <div className="border-l-4 border-accent-green pl-4">
                <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-muted-foreground">
                  {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[activeIndex].location}
                </p>
              </div>
              
              <div className="flex gap-3 mt-8">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrev}
                  className="hover:bg-accent-purple/10"
                >
                  <ArrowLeft size={18} />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext}
                  className="hover:bg-accent-purple/10"
                >
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
