
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: "What services does NexaVision offer?",
      answer: "NexaVision offers a comprehensive range of digital services including UI/UX design, web development, branding, digital marketing, motion graphics, and more. We provide end-to-end solutions to help businesses establish and enhance their digital presence."
    },
    {
      question: "How long does a typical project take to complete?",
      answer: "Project timelines vary based on complexity and scope. A standard website design might take 4-6 weeks, while a comprehensive digital transformation project could take 3-6 months. During our initial consultation, we'll provide a detailed timeline tailored to your specific needs."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes, from startups to large enterprises. Our services are scalable and can be tailored to meet the specific needs and budgets of different organizations. We believe every business deserves exceptional digital experiences."
    },
    {
      question: "What is your design process like?",
      answer: "Our design process begins with discovery to understand your business goals and user needs. We then move into research, wireframing, and prototyping phases before creating high-fidelity designs. Throughout the process, we collaborate closely with clients to ensure the final product meets their expectations."
    },
    {
      question: "How do you measure the success of a project?",
      answer: "We establish key performance indicators (KPIs) at the beginning of each project based on your business objectives. These might include metrics like user engagement, conversion rates, load times, or other relevant indicators. We provide regular reports to track progress against these KPIs."
    },
    {
      question: "What makes NexaVision different from other agencies?",
      answer: "NexaVision combines strategic thinking, creative design, and technical expertise to deliver holistic solutions. We prioritize understanding your business goals and audience needs to create digital experiences that drive real results. Our collaborative approach ensures that we work as an extension of your team."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-green">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-background rounded-xl p-6 md:p-8 border border-muted">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted last:border-0">
                <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-accent-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Link to="/contact" className="text-accent-purple hover:text-accent-green font-medium inline-flex items-center">
              Contact us for more information
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
