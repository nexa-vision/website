import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqItems: FAQItem[];
}

const ServiceFAQ = ({ faqItems }: ServiceFAQProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
            Have Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted last:border-0">
                <AccordionTrigger className="text-left font-medium hover:text-accent-purple py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 pt-6 border-t border-muted flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Still have questions?</p>
            <a href="/contact" className="text-accent-purple hover:text-accent-purple/80 transition-colors font-medium flex items-center">
              Contact our support team
              <ArrowRight size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
