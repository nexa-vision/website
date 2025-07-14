import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';
import TrustBadges from '@/components/home/TrustBadges';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  Users,
  Building2,
  Trophy,
  ArrowRight,
  Clock,
  CheckCircle2,
  Star,
  Briefcase,
  Target,
  Phone,
  Mail,
  Award,
  ThumbsUp,
  Zap,
  Shield,
  FileCheck,
  MessageCircle,
  Calendar
} from 'lucide-react';

// Enhanced city data with SEO-focused content
const cityData: Record<string, {
  title: string;
  description: string;
  metaDescription: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  stats: {
    clients: string;
    projects: string;
    experience: string;
    satisfaction: string;
  };
  benefits: Array<{
    title: string;
    description: string;
  }>;
  industries: Array<{
    name: string;
    description: string;
    expertise: string[];
  }>;
  testimonials: Array<{
    name: string;
    company: string;
    role: string;
    image: string;
    content: string;
    rating: number;
    project: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  awards: Array<{
    title: string;
    year: string;
    organization: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
  caseStudies: Array<{
    title: string;
    client: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
    image: string;
  }>;
  localPresence: {
    established: string;
    communityInitiatives: string[];
    partnerships: string[];
    events: string[];
  };
}> = {
  'san-francisco': {
    title: 'Top-Rated Digital Agency in San Francisco | Web Design & Development',
    description: 'San Francisco\'s premier digital agency specializing in custom web design, development & digital marketing. Local expertise, proven results. Get a free consultation.',
    metaDescription: 'Award-winning San Francisco digital agency delivering custom web design, development & digital marketing solutions. 10+ years of local expertise. Free consultation.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29',
    address: '123 Market Street, San Francisco, CA 94103',
    phone: '+1 (415) 555-0123',
    email: 'sf@nexavision.com',
    stats: {
      clients: '200+',
      projects: '500+',
      experience: '10+ Years',
      satisfaction: '98%'
    },
    benefits: [
      {
        title: 'Local Market Expertise',
        description: 'Deep understanding of San Francisco\'s tech ecosystem and market dynamics'
      },
      {
        title: 'Custom Solutions',
        description: 'Tailored digital strategies aligned with Bay Area business needs'
      },
      {
        title: 'Proven Track Record',
        description: '98% client satisfaction rate with local SF businesses'
      },
      {
        title: 'Rapid Response',
        description: 'Local team available for in-person meetings within 24 hours'
      }
    ],
    industries: [
      {
        name: 'Tech Startups',
        description: 'Comprehensive digital solutions for emerging tech companies',
        expertise: ['MVP Development', 'Scalable Architecture', 'User Experience Design', 'Growth Marketing']
      },
      {
        name: 'SaaS',
        description: 'End-to-end development and marketing for software companies',
        expertise: ['Cloud Solutions', 'API Integration', 'UI/UX Design', 'SaaS Marketing']
      },
      {
        name: 'Fintech',
        description: 'Secure and compliant solutions for financial technology',
        expertise: ['Secure Payment Systems', 'Banking Integration', 'Regulatory Compliance', 'Financial UI/UX']
      },
      {
        name: 'E-commerce',
        description: 'Converting online stores for Bay Area retailers',
        expertise: ['Shopping Cart Development', 'Payment Gateway', 'Product Management', 'E-commerce SEO']
      }
    ],
    testimonials: [
      {
        name: 'Sarah Chen',
        company: 'TechFlow',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        content: 'NexaVision transformed our digital presence. Their understanding of the SF tech scene was invaluable. Our user engagement increased by 200% within 3 months.',
        rating: 5,
        project: 'Website Redesign & SEO'
      },
      {
        name: 'Michael Ross',
        company: 'FinanceHub',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'The team\'s technical expertise and attention to detail are outstanding. They delivered our fintech platform ahead of schedule and under budget.',
        rating: 5,
        project: 'Custom Platform Development'
      },
      {
        name: 'Emily Wong',
        company: 'EcoStore',
        role: 'Marketing Director',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        content: 'Our e-commerce revenue grew by 150% after implementing NexaVision\'s recommendations. Their local SEO expertise is unmatched.',
        rating: 5,
        project: 'E-commerce Optimization'
      }
    ],
    faq: [
      {
        question: 'How long does a typical web development project take in San Francisco?',
        answer: 'Project timelines vary based on complexity. A basic website typically takes 4-6 weeks, while complex platforms may take 3-6 months. We provide detailed timelines during our initial consultation.'
      },
      {
        question: 'What makes NexaVision different from other San Francisco agencies?',
        answer: 'We combine deep local market knowledge with technical expertise. Our team has worked with 200+ SF businesses, and we offer rapid response times, local presence, and proven results in the Bay Area tech ecosystem.'
      },
      {
        question: 'Do you offer ongoing support for San Francisco businesses?',
        answer: 'Yes, we provide comprehensive support packages including 24/7 monitoring, regular updates, and dedicated local support teams. Our SF office ensures quick response to any issues.'
      },
      {
        question: 'What are your pricing models for San Francisco projects?',
        answer: 'We offer flexible pricing models including project-based, retainer, and growth-based pricing. Our rates are competitive for the SF market, and we provide detailed quotes after understanding your specific needs.'
      }
    ],
    awards: [
      {
        title: 'Best Digital Agency in San Francisco',
        year: '2023',
        organization: 'SF Business Times'
      },
      {
        title: 'Top Web Development Company',
        year: '2023',
        organization: 'Silicon Valley Awards'
      },
      {
        title: 'Excellence in Digital Innovation',
        year: '2022',
        organization: 'Bay Area Tech Awards'
      }
    ],
    certifications: [
      {
        name: 'Google Partner',
        issuer: 'Google',
        year: '2023'
      },
      {
        name: 'Shopify Plus Partner',
        issuer: 'Shopify',
        year: '2023'
      },
      {
        name: 'AWS Certified Solution Architect',
        issuer: 'Amazon Web Services',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'TechFlow Platform Launch',
        client: 'TechFlow Inc.',
        industry: 'SaaS',
        challenge: 'Needed a scalable platform to handle 100,000+ users with real-time features',
        solution: 'Custom-built cloud platform with microservices architecture',
        results: [
          '200% increase in user engagement',
          '50% reduction in loading time',
          '3x increase in conversion rate'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
      },
      {
        title: 'FinanceHub Digital Transformation',
        client: 'FinanceHub',
        industry: 'Fintech',
        challenge: 'Legacy system migration with zero downtime',
        solution: 'Phased migration approach with modern stack implementation',
        results: [
          '99.99% uptime maintained',
          '40% increase in transaction speed',
          '2x increase in mobile users'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
      }
    ],
    localPresence: {
      established: '2013',
      communityInitiatives: [
        'SF Tech Mentorship Program',
        'Annual Bay Area Code Camp',
        'Women in Tech SF Sponsorship'
      ],
      partnerships: [
        'SF Chamber of Commerce',
        'Silicon Valley Startup Association',
        'Bay Area Digital Alliance'
      ],
      events: [
        'SF Digital Innovation Summit 2023',
        'Bay Area Tech Conference',
        'SF Small Business Digital Workshop'
      ]
    }
  },
  'new-york': {
    title: 'Leading Creative Agency in New York City',
    description: 'NexaVision delivers cutting-edge design and development solutions for New York\'s diverse business landscape, from startups to established corporations.',
    metaDescription: 'Award-winning New York digital agency delivering custom web design, development & digital marketing solutions. 12+ years of local expertise. Free consultation.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
    address: '456 Madison Avenue, New York, NY 10022',
    phone: '+1 (212) 555-0456',
    email: 'nyc@nexavision.com',
    stats: {
      clients: '250+',
      projects: '600+',
      experience: '12+ Years',
      satisfaction: '97%'
    },
    benefits: [
      {
        title: 'NYC Market Expertise',
        description: 'Deep understanding of New York\'s diverse business landscape'
      },
      {
        title: 'Custom Solutions',
        description: 'Tailored digital strategies for NYC businesses'
      },
      {
        title: 'Proven Track Record',
        description: '97% client satisfaction rate in New York'
      },
      {
        title: 'Local Support',
        description: '24/7 support for NYC businesses'
      }
    ],
    industries: [
      {
        name: 'Finance',
        description: 'Digital solutions for financial services',
        expertise: ['Banking Solutions', 'Investment Platforms', 'FinTech Integration', 'Secure Payment Systems']
      },
      {
        name: 'Media',
        description: 'Creative work for media companies',
        expertise: ['Content Management', 'Streaming Platforms', 'Digital Publishing', 'Media Analytics']
      },
      {
        name: 'Fashion',
        description: 'Digital presence for fashion brands',
        expertise: ['E-commerce Solutions', 'Virtual Try-ons', 'Inventory Management', 'Fashion Tech']
      },
      {
        name: 'Real Estate',
        description: 'Solutions for property tech',
        expertise: ['Property Management', 'Virtual Tours', 'Real Estate CRM', 'Market Analysis']
      }
    ],
    testimonials: [
      {
        name: 'David Chen',
        company: 'FinanceHub',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision transformed our fintech platform with cutting-edge solutions. Their expertise in the NYC market is unmatched.',
        rating: 5,
        project: 'Fintech Platform Development'
      },
      {
        name: 'Jessica Kim',
        company: 'MediaPro',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        content: 'Outstanding digital solutions that helped us scale our media business in New York.',
        rating: 5,
        project: 'Digital Media Platform'
      },
      {
        name: 'Robert Smith',
        company: 'NYC Properties',
        role: 'Marketing Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        content: 'Their real estate tech solutions have revolutionized how we operate in the NYC market.',
        rating: 5,
        project: 'Real Estate Platform'
      }
    ],
    faq: [
      {
        question: 'What makes NexaVision different from other NYC agencies?',
        answer: 'Our deep understanding of the NYC market, combined with our technical expertise and proven track record with local businesses sets us apart.'
      },
      {
        question: 'How long does a typical project take in New York?',
        answer: 'Project timelines vary, but we typically deliver websites in 4-6 weeks and complex platforms in 3-6 months.'
      },
      {
        question: 'Do you offer ongoing support for NYC businesses?',
        answer: 'Yes, we provide 24/7 support and maintenance services specifically tailored for NYC businesses.'
      }
    ],
    awards: [
      {
        title: 'Best Digital Agency NYC',
        year: '2023',
        organization: 'NYC Digital Awards'
      },
      {
        title: 'Excellence in Innovation',
        year: '2023',
        organization: 'Manhattan Tech Alliance'
      },
      {
        title: 'Top Web Development Firm',
        year: '2022',
        organization: 'NY Business Journal'
      }
    ],
    certifications: [
      {
        name: 'Google Partner',
        issuer: 'Google',
        year: '2023'
      },
      {
        name: 'HubSpot Solutions Partner',
        issuer: 'HubSpot',
        year: '2023'
      },
      {
        name: 'AWS Certified Solutions Architect',
        issuer: 'Amazon Web Services',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'NYC FinTech Platform',
        client: 'FinanceHub',
        industry: 'Finance',
        challenge: 'Needed a secure, scalable platform for NYC financial services',
        solution: 'Custom fintech platform with NY compliance features',
        results: [
          '200% increase in transactions',
          '50% reduction in processing time',
          'Full NY regulatory compliance'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
      }
    ],
    localPresence: {
      established: '2011',
      communityInitiatives: [
        'NYC Tech Mentorship Program',
        'Manhattan Code Camp',
        'Brooklyn Tech Week'
      ],
      partnerships: [
        'NYC Tech Alliance',
        'Manhattan Chamber of Commerce',
        'NY Digital Coalition'
      ],
      events: [
        'NYC Digital Summit 2023',
        'Manhattan Tech Conference',
        'NY Business Digital Workshop'
      ]
    }
  },
  'los-angeles': {
    title: 'Premier Creative Agency in Los Angeles',
    description: 'NexaVision helps Los Angeles businesses stand out with exceptional branding, motion graphics, and digital marketing strategies tailored to the entertainment industry.',
    metaDescription: 'Award-winning Los Angeles digital agency specializing in entertainment, gaming, and lifestyle brands. 8+ years of local expertise. Free consultation.',
    image: 'https://images.unsplash.com/photo-1580655653885-65763b2597d0',
    address: '789 Sunset Blvd, Los Angeles, CA 90069',
    phone: '+1 (310) 555-0789',
    email: 'la@nexavision.com',
    stats: {
      clients: '180+',
      projects: '450+',
      experience: '8+ Years',
      satisfaction: '99%'
    },
    benefits: [
      {
        title: 'LA Entertainment Expertise',
        description: 'Deep understanding of the entertainment industry'
      },
      {
        title: 'Creative Excellence',
        description: 'Award-winning creative solutions'
      },
      {
        title: 'Industry Connections',
        description: 'Strong network in LA entertainment'
      },
      {
        title: 'Local Support',
        description: '24/7 support for LA businesses'
      }
    ],
    industries: [
      {
        name: 'Entertainment',
        description: 'Digital solutions for entertainment',
        expertise: ['Streaming Platforms', 'Content Management', 'Digital Distribution', 'Media Analytics']
      },
      {
        name: 'Gaming',
        description: 'Creative for gaming industry',
        expertise: ['Game Development', 'Gaming Platforms', 'Community Management', 'E-sports Solutions']
      },
      {
        name: 'Lifestyle',
        description: 'Digital presence for lifestyle brands',
        expertise: ['Brand Development', 'Social Integration', 'Content Strategy', 'Influencer Platforms']
      },
      {
        name: 'Sports',
        description: 'Solutions for sports brands',
        expertise: ['Sports Analytics', 'Fan Engagement', 'Event Management', 'Team Platforms']
      }
    ],
    testimonials: [
      {
        name: 'Michael Johnson',
        company: 'StreamFlow',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        content: 'NexaVision transformed our streaming platform with innovative solutions.',
        rating: 5,
        project: 'Streaming Platform Development'
      },
      {
        name: 'Sarah Williams',
        company: 'GameVerse',
        role: 'Product Director',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        content: 'Outstanding gaming solutions that helped us scale in the LA market.',
        rating: 5,
        project: 'Gaming Platform'
      },
      {
        name: 'David Lee',
        company: 'LA Sports',
        role: 'Marketing Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'Their sports tech solutions have revolutionized our fan engagement.',
        rating: 5,
        project: 'Sports Platform'
      }
    ],
    faq: [
      {
        question: 'What makes NexaVision different in LA?',
        answer: 'Our deep understanding of the entertainment industry and LA market sets us apart.'
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary, but we typically deliver websites in 4-6 weeks and platforms in 3-6 months.'
      },
      {
        question: 'Do you offer ongoing support?',
        answer: 'Yes, we provide 24/7 support and maintenance services for LA businesses.'
      }
    ],
    awards: [
      {
        title: 'Best Digital Agency LA',
        year: '2023',
        organization: 'LA Digital Awards'
      },
      {
        title: 'Innovation in Entertainment Tech',
        year: '2023',
        organization: 'Hollywood Tech Alliance'
      },
      {
        title: 'Top Creative Agency',
        year: '2022',
        organization: 'LA Business Times'
      }
    ],
    certifications: [
      {
        name: 'Google Partner',
        issuer: 'Google',
        year: '2023'
      },
      {
        name: 'Unity Certified Developer',
        issuer: 'Unity',
        year: '2023'
      },
      {
        name: 'AWS Media Solutions',
        issuer: 'Amazon Web Services',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'StreamFlow Platform',
        client: 'StreamFlow Entertainment',
        industry: 'Entertainment',
        challenge: 'Needed a scalable streaming platform for content creators',
        solution: 'Custom streaming platform with advanced analytics',
        results: [
          '300% increase in user engagement',
          '50% reduction in buffering time',
          'Improved content monetization'
        ],
        image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c'
      }
    ],
    localPresence: {
      established: '2015',
      communityInitiatives: [
        'LA Tech Mentorship',
        'Hollywood Code Camp',
        'LA Gaming Summit'
      ],
      partnerships: [
        'LA Tech Alliance',
        'Hollywood Chamber of Commerce',
        'LA Digital Coalition'
      ],
      events: [
        'LA Digital Summit 2023',
        'Entertainment Tech Conference',
        'LA Gaming Expo'
      ]
    }
  },
  'hyderabad': {
    title: 'Leading Digital Agency in Hyderabad | Web Design & Development',
    description: 'Hyderabad\'s premier digital agency specializing in custom web design, development & digital marketing. Expertise in IT, Pharma, and Startup sectors. Get a free consultation.',
    metaDescription: 'Award-winning Hyderabad digital agency delivering innovative web design, development & digital marketing solutions. 8+ years of local expertise. Free consultation.',
    image: 'https://images.unsplash.com/photo-1580392242675-bf1c6845b433',
    address: 'Cyber Towers, HITEC City, Hyderabad, Telangana 500081',
    phone: '+91 (40) 4567-8900',
    email: 'hyderabad@nexavision.com',
    stats: {
      clients: '150+',
      projects: '400+',
      experience: '8+ Years',
      satisfaction: '98%'
    },
    benefits: [
      {
        title: 'HITEC City Expertise',
        description: 'Deep understanding of Hyderabad\'s IT ecosystem and startup landscape'
      },
      {
        title: 'Multilingual Solutions',
        description: 'Digital presence in Telugu, English, and other regional languages'
      },
      {
        title: 'Local Network',
        description: 'Strong connections with Hyderabad\'s tech community'
      },
      {
        title: 'Industry Focus',
        description: 'Specialized in IT, Pharma, and E-commerce sectors'
      }
    ],
    industries: [
      {
        name: 'Information Technology',
        description: 'Digital solutions for IT companies',
        expertise: ['Enterprise Solutions', 'Cloud Integration', 'Digital Transformation', 'Tech Consulting']
      },
      {
        name: 'Pharmaceuticals',
        description: 'Digital presence for pharma companies',
        expertise: ['Compliance Solutions', 'Healthcare Platforms', 'Research Portals', 'Drug Discovery Systems']
      },
      {
        name: 'E-commerce',
        description: 'Online retail solutions',
        expertise: ['Marketplace Development', 'Payment Integration', 'Inventory Management', 'Mobile Commerce']
      },
      {
        name: 'Startups',
        description: 'Solutions for emerging companies',
        expertise: ['MVP Development', 'Scaling Solutions', 'Funding Pitch Decks', 'Growth Hacking']
      }
    ],
    testimonials: [
      {
        name: 'Rajesh Kumar',
        company: 'TechSolutions India',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'NexaVision transformed our digital presence with their deep understanding of the Hyderabad tech market.',
        rating: 5,
        project: 'Enterprise Platform Development'
      },
      {
        name: 'Dr. Priya Reddy',
        company: 'HealthCare Plus',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'Their expertise in healthcare digital solutions helped us reach more patients across Telangana.',
        rating: 5,
        project: 'Healthcare Platform'
      },
      {
        name: 'Arun Sharma',
        company: 'StartupHub',
        role: 'Founder',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        content: 'NexaVision\'s startup-focused solutions helped us scale rapidly in the competitive market.',
        rating: 5,
        project: 'Startup MVP & Scaling'
      }
    ],
    faq: [
      {
        question: 'Do you provide multilingual website development?',
        answer: 'Yes, we specialize in creating websites in Telugu, English, and other regional languages to reach a wider audience in Telangana and AP.'
      },
      {
        question: 'What makes NexaVision different in Hyderabad?',
        answer: 'Our deep understanding of the local IT ecosystem, combined with expertise in pharma and startup sectors, sets us apart.'
      },
      {
        question: 'Do you offer local SEO for Hyderabad businesses?',
        answer: 'Yes, we provide comprehensive local SEO services optimized for Hyderabad and surrounding regions.'
      }
    ],
    awards: [
      {
        title: 'Best Digital Agency Telangana',
        year: '2023',
        organization: 'Telangana IT Awards'
      },
      {
        title: 'Innovation Excellence',
        year: '2023',
        organization: 'HYSEA'
      },
      {
        title: 'Top Tech Company',
        year: '2022',
        organization: 'TiE Hyderabad'
      }
    ],
    certifications: [
      {
        name: 'ISO 27001:2013',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'NASSCOM Membership',
        issuer: 'NASSCOM',
        year: '2023'
      },
      {
        name: 'AWS Advanced Partner',
        issuer: 'Amazon Web Services',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'E-Healthcare Platform',
        client: 'HealthCare Plus',
        industry: 'Healthcare',
        challenge: 'Needed a comprehensive healthcare management system',
        solution: 'Built a scalable, multilingual healthcare platform',
        results: [
          '200% increase in patient engagement',
          '40% reduction in wait times',
          'Coverage across 20 cities in Telangana'
        ],
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
      }
    ],
    localPresence: {
      established: '2015',
      communityInitiatives: [
        'Hyderabad Tech Mentorship',
        'Digital Literacy Program',
        'Startup Incubation Support'
      ],
      partnerships: [
        'T-Hub',
        'TASK',
        'HYSEA'
      ],
      events: [
        'Hyderabad Digital Summit 2023',
        'Tech4Good Hackathon',
        'Digital Transformation Conference'
      ]
    }
  },
  'visakhapatnam': {
    title: 'Premier Digital Agency in Visakhapatnam | Web & Marketing Solutions',
    description: 'Vizag\'s leading digital agency specializing in web development, maritime solutions, and industrial digital transformation. Local expertise, global standards.',
    metaDescription: 'Top-rated Visakhapatnam digital agency offering web design, development & digital marketing. Expertise in maritime, industrial, and tourism sectors.',
    image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c',
    address: 'Cyber Valley, IT SEZ, Rushikonda, Visakhapatnam, AP 530045',
    phone: '+91 (891) 234-5678',
    email: 'vizag@nexavision.com',
    stats: {
      clients: '100+',
      projects: '300+',
      experience: '6+ Years',
      satisfaction: '97%'
    },
    benefits: [
      {
        title: 'Maritime Expertise',
        description: 'Specialized solutions for port and shipping industry'
      },
      {
        title: 'Industrial Focus',
        description: 'Digital transformation for manufacturing sector'
      },
      {
        title: 'Tourism Solutions',
        description: 'Promoting Vizag\'s tourism potential digitally'
      },
      {
        title: 'Local Understanding',
        description: 'Deep knowledge of AP market dynamics'
      }
    ],
    industries: [
      {
        name: 'Maritime & Ports',
        description: 'Digital solutions for maritime sector',
        expertise: ['Port Management Systems', 'Shipping Solutions', 'Maritime IoT', 'Logistics Platforms']
      },
      {
        name: 'Manufacturing',
        description: 'Industrial digital transformation',
        expertise: ['Industry 4.0', 'IoT Integration', 'Process Automation', 'Supply Chain Solutions']
      },
      {
        name: 'Tourism',
        description: 'Digital tourism solutions',
        expertise: ['Travel Portals', 'Booking Systems', 'Virtual Tours', 'Tourism Marketing']
      },
      {
        name: 'Education',
        description: 'EdTech solutions',
        expertise: ['Learning Management', 'Virtual Classrooms', 'Student Portals', 'Education Analytics']
      }
    ],
    testimonials: [
      {
        name: 'Capt. Ravi Kumar',
        company: 'Vizag Port Solutions',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision\'s maritime solutions have significantly improved our port operations efficiency.',
        rating: 5,
        project: 'Port Management System'
      },
      {
        name: 'Lakshmi Devi',
        company: 'Tech Education Hub',
        role: 'Principal',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'Their EdTech platform has revolutionized how we deliver education.',
        rating: 5,
        project: 'Virtual Learning Platform'
      },
      {
        name: 'Suresh Reddy',
        company: 'Vizag Tourism',
        role: 'Marketing Head',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'The tourism portal they developed has helped showcase Vizag\'s beauty to the world.',
        rating: 5,
        project: 'Tourism Portal'
      }
    ],
    faq: [
      {
        question: 'Do you offer solutions specific to the maritime industry?',
        answer: 'Yes, we specialize in digital solutions for ports, shipping, and maritime logistics in Visakhapatnam.'
      },
      {
        question: 'Can you help with industrial digital transformation?',
        answer: 'We provide comprehensive Industry 4.0 solutions for manufacturing and industrial sectors in AP.'
      },
      {
        question: 'Do you support multiple languages?',
        answer: 'Yes, we develop solutions in Telugu, English, and other languages relevant to the AP market.'
      }
    ],
    awards: [
      {
        title: 'Best Tech Company Vizag',
        year: '2023',
        organization: 'AP IT Awards'
      },
      {
        title: 'Maritime Innovation Award',
        year: '2023',
        organization: 'Vizag Maritime Board'
      },
      {
        title: 'Digital Excellence',
        year: '2022',
        organization: 'AP Chamber of Commerce'
      }
    ],
    certifications: [
      {
        name: 'ISO 9001:2015',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'CMMi Level 3',
        issuer: 'CMMI Institute',
        year: '2023'
      },
      {
        name: 'Google Workspace Partner',
        issuer: 'Google',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Port Management',
        client: 'Vizag Port Authority',
        industry: 'Maritime',
        challenge: 'Needed digital transformation of port operations',
        solution: 'Implemented comprehensive port management system',
        results: [
          '30% increase in operational efficiency',
          '50% reduction in documentation time',
          'Real-time vessel tracking implementation'
        ],
        image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c'
      }
    ],
    localPresence: {
      established: '2017',
      communityInitiatives: [
        'Digital Literacy for Fishermen',
        'Tech Skills for Youth',
        'Smart City Initiatives'
      ],
      partnerships: [
        'Vizag IT Association',
        'AP Chamber of Commerce',
        'Maritime Board'
      ],
      events: [
        'Vizag Tech Summit 2023',
        'Maritime Digital Conference',
        'Industry 4.0 Workshop'
      ]
    }
  },
  'vijayawada': {
    title: 'Top Digital Agency in Vijayawada | Web & Marketing Solutions',
    description: 'Vijayawada\'s trusted digital agency specializing in agriculture tech, retail solutions, and educational technology. Local expertise, innovative solutions.',
    metaDescription: 'Leading Vijayawada digital agency offering web design, development & digital marketing. Expertise in agritech, retail, and education sectors.',
    image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011',
    address: 'PVP Square, MG Road, Vijayawada, AP 520010',
    phone: '+91 (866) 345-6789',
    email: 'vijayawada@nexavision.com',
    stats: {
      clients: '80+',
      projects: '200+',
      experience: '5+ Years',
      satisfaction: '96%'
    },
    benefits: [
      {
        title: 'AgriTech Focus',
        description: 'Specialized solutions for agriculture sector'
      },
      {
        title: 'Retail Expertise',
        description: 'Digital transformation for retail businesses'
      },
      {
        title: 'Education Solutions',
        description: 'Innovative EdTech platforms'
      },
      {
        title: 'Local Network',
        description: 'Strong presence in Krishna district'
      }
    ],
    industries: [
      {
        name: 'Agriculture',
        description: 'Digital solutions for agriculture',
        expertise: ['Farm Management', 'Supply Chain', 'Market Connect', 'AgriTech Apps']
      },
      {
        name: 'Retail',
        description: 'Solutions for retail sector',
        expertise: ['E-commerce', 'Inventory Systems', 'POS Solutions', 'Customer Analytics']
      },
      {
        name: 'Education',
        description: 'EdTech solutions',
        expertise: ['Learning Platforms', 'School Management', 'Online Testing', 'Educational Content']
      },
      {
        name: 'Real Estate',
        description: 'Property tech solutions',
        expertise: ['Property Portals', 'Virtual Tours', 'CRM Systems', 'Market Analysis']
      }
    ],
    testimonials: [
      {
        name: 'Krishna Rao',
        company: 'AgriTech Solutions',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision helped us digitize our entire agricultural supply chain.',
        rating: 5,
        project: 'AgriTech Platform'
      },
      {
        name: 'Padma Reddy',
        company: 'Smart Schools',
        role: 'Principal',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'Their education platform has transformed how we teach and assess students.',
        rating: 5,
        project: 'School Management System'
      },
      {
        name: 'Venkat Kumar',
        company: 'VJ Retail',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'The retail management system has streamlined our operations significantly.',
        rating: 5,
        project: 'Retail Management Platform'
      }
    ],
    faq: [
      {
        question: 'Do you provide solutions for agricultural businesses?',
        answer: 'Yes, we specialize in AgriTech solutions including farm management and supply chain systems.'
      },
      {
        question: 'Can you help with retail digital transformation?',
        answer: 'We offer comprehensive retail solutions including e-commerce, inventory management, and analytics.'
      },
      {
        question: 'Do you support local languages?',
        answer: 'Yes, we develop solutions in Telugu, English, and other regional languages.'
      }
    ],
    awards: [
      {
        title: 'Best Tech Innovator',
        year: '2023',
        organization: 'Vijayawada IT Association'
      },
      {
        title: 'AgriTech Excellence',
        year: '2023',
        organization: 'AP AgriTech Summit'
      },
      {
        title: 'Education Innovation',
        year: '2022',
        organization: 'AP EdTech Forum'
      }
    ],
    certifications: [
      {
        name: 'ISO 9001:2015',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'Microsoft Silver Partner',
        issuer: 'Microsoft',
        year: '2023'
      },
      {
        name: 'NASSCOM Member',
        issuer: 'NASSCOM',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Agriculture Platform',
        client: 'AP Farmers Cooperative',
        industry: 'Agriculture',
        challenge: 'Needed to digitize farming operations and market connectivity',
        solution: 'Built comprehensive AgriTech platform',
        results: [
          '40% increase in farmer market access',
          '30% improvement in price realization',
          'Connected 10,000+ farmers'
        ],
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449'
      }
    ],
    localPresence: {
      established: '2018',
      communityInitiatives: [
        'Digital Farmers Program',
        'Retail Tech Workshop',
        'Education Digital Literacy'
      ],
      partnerships: [
        'Vijayawada Chamber of Commerce',
        'AP Farmers Association',
        'Educational Institutions'
      ],
      events: [
        'AgriTech Summit 2023',
        'Retail Digital Conference',
        'EdTech Innovation Meet'
      ]
    }
  },
  'warangal': {
    title: 'Innovative Digital Agency in Warangal | Tech Solutions',
    description: 'Warangal\'s dynamic digital agency specializing in textile tech, educational solutions, and smart city initiatives. Local expertise, global standards.',
    metaDescription: 'Premier Warangal digital agency offering web design, development & digital marketing. Expertise in textile, education, and smart city solutions.',
    image: 'https://images.unsplash.com/photo-1596005554384-d293956e4326',
    address: 'IT Hub, Kazipet Road, Warangal, Telangana 506004',
    phone: '+91 (870) 456-7890',
    email: 'warangal@nexavision.com',
    stats: {
      clients: '60+',
      projects: '150+',
      experience: '4+ Years',
      satisfaction: '95%'
    },
    benefits: [
      {
        title: 'Textile Tech',
        description: 'Specialized solutions for textile industry'
      },
      {
        title: 'Education Focus',
        description: 'Solutions for educational institutions'
      },
      {
        title: 'Smart City',
        description: 'Digital initiatives for urban development'
      },
      {
        title: 'Local Expertise',
        description: 'Deep understanding of Warangal market'
      }
    ],
    industries: [
      {
        name: 'Textile',
        description: 'Digital solutions for textile sector',
        expertise: ['Textile ERP', 'Supply Chain', 'Design Systems', 'Inventory Management']
      },
      {
        name: 'Education',
        description: 'Solutions for educational sector',
        expertise: ['Campus Management', 'E-Learning', 'Student Portals', 'Academic Analytics']
      },
      {
        name: 'Smart City',
        description: 'Urban development solutions',
        expertise: ['City Planning', 'Public Services', 'Citizen Apps', 'Urban Analytics']
      },
      {
        name: 'Healthcare',
        description: 'Healthcare solutions',
        expertise: ['Hospital Management', 'Patient Care', 'Medical Records', 'Healthcare Analytics']
      }
    ],
    testimonials: [
      {
        name: 'Ramesh Kumar',
        company: 'Textile Hub',
        role: 'Managing Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision\'s textile management system has revolutionized our operations.',
        rating: 5,
        project: 'Textile ERP'
      },
      {
        name: 'Dr. Srinivas',
        company: 'City Hospital',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'Their healthcare solutions have improved our patient care significantly.',
        rating: 5,
        project: 'Hospital Management System'
      },
      {
        name: 'Prof. Lakshmi',
        company: 'Engineering College',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'The campus management system has streamlined our academic processes.',
        rating: 5,
        project: 'Campus Management'
      }
    ],
    faq: [
      {
        question: 'Do you offer solutions for textile businesses?',
        answer: 'Yes, we specialize in textile industry solutions including ERP and supply chain management.'
      },
      {
        question: 'How do you support smart city initiatives?',
        answer: 'We develop digital solutions for urban development and citizen services in Warangal.'
      },
      {
        question: 'What educational solutions do you provide?',
        answer: 'We offer comprehensive education management systems and e-learning platforms.'
      }
    ],
    awards: [
      {
        title: 'Innovation Leader',
        year: '2023',
        organization: 'Warangal IT Forum'
      },
      {
        title: 'Smart City Excellence',
        year: '2023',
        organization: 'Telangana Urban Development'
      },
      {
        title: 'Education Technology',
        year: '2022',
        organization: 'TS EdTech Association'
      }
    ],
    certifications: [
      {
        name: 'ISO 27001',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'SEI CMMI Level 3',
        issuer: 'CMMI Institute',
        year: '2023'
      },
      {
        name: 'Google Cloud Partner',
        issuer: 'Google',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Textile Management',
        client: 'Warangal Textile Park',
        industry: 'Textile',
        challenge: 'Needed comprehensive textile industry digitization',
        solution: 'Implemented end-to-end textile management system',
        results: [
          '35% increase in production efficiency',
          '40% reduction in inventory costs',
          'Real-time production monitoring'
        ],
        image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259'
      }
    ],
    localPresence: {
      established: '2019',
      communityInitiatives: [
        'Textile Digital Training',
        'Smart City Awareness',
        'Student Tech Programs'
      ],
      partnerships: [
        'Warangal Chamber of Commerce',
        'Textile Association',
        'Educational Institutions'
      ],
      events: [
        'Textile Tech Summit 2023',
        'Smart City Conference',
        'Education Digital Forum'
      ]
    }
  },
  'tirupati': {
    title: 'Premier Digital Agency in Tirupati | Tech & Tourism Solutions',
    description: 'Tirupati\'s leading digital agency specializing in tourism tech, temple management systems, and educational solutions. Local expertise, divine innovation.',
    metaDescription: 'Top-rated Tirupati digital agency offering web design, development & digital marketing. Expertise in tourism, temple management, and education sectors.',
    image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011',
    address: 'IT Park, Renigunta Road, Tirupati, AP 517501',
    phone: '+91 (877) 234-5678',
    email: 'tirupati@nexavision.com',
    stats: {
      clients: '70+',
      projects: '180+',
      experience: '5+ Years',
      satisfaction: '98%'
    },
    benefits: [
      {
        title: 'Tourism Tech',
        description: 'Specialized solutions for tourism sector'
      },
      {
        title: 'Temple Management',
        description: 'Digital systems for temples and religious institutions'
      },
      {
        title: 'Education Focus',
        description: 'Solutions for educational institutions'
      },
      {
        title: 'Local Understanding',
        description: 'Deep knowledge of Tirupati ecosystem'
      }
    ],
    industries: [
      {
        name: 'Tourism',
        description: 'Digital solutions for tourism',
        expertise: ['Booking Systems', 'Tourist Guides', 'Travel Analytics', 'Experience Management']
      },
      {
        name: 'Temple Management',
        description: 'Solutions for religious institutions',
        expertise: ['Queue Management', 'Donation Systems', 'Devotee Services', 'Event Management']
      },
      {
        name: 'Education',
        description: 'EdTech solutions',
        expertise: ['University Portals', 'Research Platforms', 'Student Services', 'Academic Management']
      },
      {
        name: 'Hospitality',
        description: 'Solutions for hospitality sector',
        expertise: ['Hotel Management', 'Guest Services', 'Booking Systems', 'Revenue Management']
      }
    ],
    testimonials: [
      {
        name: 'Dr. Venkatesh',
        company: 'Temple Trust',
        role: 'Executive Officer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision\'s temple management system has transformed our service delivery.',
        rating: 5,
        project: 'Temple Management System'
      },
      {
        name: 'Smt. Lakshmi',
        company: 'Tourism Board',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'Their tourism solutions have helped showcase Tirupati to the world.',
        rating: 5,
        project: 'Tourism Platform'
      },
      {
        name: 'Prof. Sharma',
        company: 'SVU',
        role: 'Dean',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'The university management system has enhanced our academic operations.',
        rating: 5,
        project: 'University Portal'
      }
    ],
    faq: [
      {
        question: 'Do you provide temple management solutions?',
        answer: 'Yes, we specialize in digital solutions for temples including queue management and devotee services.'
      },
      {
        question: 'How do you support tourism businesses?',
        answer: 'We offer comprehensive tourism solutions including booking systems and visitor management.'
      },
      {
        question: 'Do you support multiple languages?',
        answer: 'Yes, we develop solutions in Telugu, Sanskrit, English, and other languages.'
      }
    ],
    awards: [
      {
        title: 'Tourism Tech Leader',
        year: '2023',
        organization: 'AP Tourism Awards'
      },
      {
        title: 'Digital Innovation',
        year: '2023',
        organization: 'Tirupati IT Forum'
      },
      {
        title: 'Best Service Provider',
        year: '2022',
        organization: 'Temple Trust'
      }
    ],
    certifications: [
      {
        name: 'ISO 9001:2015',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'STQC Certified',
        issuer: 'Govt of India',
        year: '2023'
      },
      {
        name: 'Tourism Tech Partner',
        issuer: 'AP Tourism',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Temple Management',
        client: 'Major Temple Trust',
        industry: 'Religious Institutions',
        challenge: 'Needed to modernize temple operations and devotee services',
        solution: 'Implemented comprehensive temple management system',
        results: [
          '50% reduction in queue waiting time',
          '200% increase in online services',
          'Improved devotee satisfaction'
        ],
        image: 'https://images.unsplash.com/photo-1623479322729-28b25c16b011'
      }
    ],
    localPresence: {
      established: '2018',
      communityInitiatives: [
        'Digital Temple Services',
        'Tourism Tech Training',
        'Student Innovation Program'
      ],
      partnerships: [
        'Temple Trust',
        'Tourism Department',
        'Educational Institutions'
      ],
      events: [
        'Tourism Tech Summit 2023',
        'Temple Management Conference',
        'Education Digital Forum'
      ]
    }
  },
  'kakinada': {
    title: 'Leading Digital Agency in Kakinada | Maritime & Tech Solutions',
    description: 'Kakinada\'s innovative digital agency specializing in port management, aquaculture tech, and industrial solutions. Local expertise, global reach.',
    metaDescription: 'Premier Kakinada digital agency offering web design, development & digital marketing. Expertise in maritime, aquaculture, and industrial sectors.',
    image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c',
    address: 'Port City Complex, Beach Road, Kakinada, AP 533001',
    phone: '+91 (884) 345-6789',
    email: 'kakinada@nexavision.com',
    stats: {
      clients: '50+',
      projects: '120+',
      experience: '4+ Years',
      satisfaction: '96%'
    },
    benefits: [
      {
        title: 'Maritime Expertise',
        description: 'Specialized solutions for port and shipping'
      },
      {
        title: 'Aquaculture Tech',
        description: 'Digital solutions for aquaculture industry'
      },
      {
        title: 'Industrial Focus',
        description: 'Solutions for manufacturing sector'
      },
      {
        title: 'Local Network',
        description: 'Strong presence in coastal AP'
      }
    ],
    industries: [
      {
        name: 'Maritime & Ports',
        description: 'Port management solutions',
        expertise: ['Port Operations', 'Shipping Management', 'Logistics Systems', 'Maritime Safety']
      },
      {
        name: 'Aquaculture',
        description: 'Aquaculture technology',
        expertise: ['Farm Management', 'Quality Control', 'Supply Chain', 'Production Analytics']
      },
      {
        name: 'Manufacturing',
        description: 'Industrial solutions',
        expertise: ['Production Systems', 'Quality Management', 'Industrial IoT', 'Supply Chain']
      },
      {
        name: 'Energy',
        description: 'Energy sector solutions',
        expertise: ['Plant Management', 'Distribution Systems', 'Safety Solutions', 'Energy Analytics']
      }
    ],
    testimonials: [
      {
        name: 'Capt. Mohan',
        company: 'Port Authority',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision\'s port management solutions have enhanced our operational efficiency.',
        rating: 5,
        project: 'Port Management System'
      },
      {
        name: 'Ramakrishna',
        company: 'Aqua Farms',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'Their aquaculture solutions have revolutionized our farming practices.',
        rating: 5,
        project: 'Aquaculture Platform'
      },
      {
        name: 'Srinivas Rao',
        company: 'Industrial Park',
        role: 'Manager',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'The industrial management system has improved our productivity significantly.',
        rating: 5,
        project: 'Industrial Management'
      }
    ],
    faq: [
      {
        question: 'Do you provide port management solutions?',
        answer: 'Yes, we specialize in digital solutions for ports including operations and logistics management.'
      },
      {
        question: 'Can you help with aquaculture technology?',
        answer: 'We offer comprehensive solutions for aquaculture including farm management and quality control.'
      },
      {
        question: 'Do you support industrial automation?',
        answer: 'Yes, we provide industrial automation and IoT solutions for manufacturing sector.'
      }
    ],
    awards: [
      {
        title: 'Maritime Tech Leader',
        year: '2023',
        organization: 'AP Ports Authority'
      },
      {
        title: 'Aquaculture Innovation',
        year: '2023',
        organization: 'AP Aqua Society'
      },
      {
        title: 'Industrial Excellence',
        year: '2022',
        organization: 'Kakinada Industry Association'
      }
    ],
    certifications: [
      {
        name: 'ISO 9001:2015',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'Maritime Safety Certified',
        issuer: 'Indian Maritime Board',
        year: '2023'
      },
      {
        name: 'Industrial IoT Partner',
        issuer: 'IoT Council India',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Port Operations',
        client: 'Kakinada Port',
        industry: 'Maritime',
        challenge: 'Needed to digitize port operations and enhance efficiency',
        solution: 'Implemented integrated port management system',
        results: [
          '40% improvement in vessel turnaround time',
          '30% reduction in documentation time',
          'Enhanced safety compliance'
        ],
        image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c'
      }
    ],
    localPresence: {
      established: '2019',
      communityInitiatives: [
        'Maritime Skill Development',
        'Aquaculture Training',
        'Industrial Safety Programs'
      ],
      partnerships: [
        'Port Authority',
        'Aquaculture Association',
        'Industrial Development Board'
      ],
      events: [
        'Maritime Tech Summit 2023',
        'Aquaculture Innovation Meet',
        'Industrial Digital Conference'
      ]
    }
  },
  'guntur': {
    title: 'Innovative Digital Agency in Guntur | AgriTech & Education Solutions',
    description: 'Guntur\'s trusted digital agency specializing in agriculture technology, education solutions, and textile industry digitization. Local expertise, global standards.',
    metaDescription: 'Leading Guntur digital agency offering web design, development & digital marketing. Expertise in agriculture, education, and textile sectors.',
    image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c',
    address: 'IT Park, Inner Ring Road, Guntur, AP 522002',
    phone: '+91 (863) 234-5678',
    email: 'guntur@nexavision.com',
    stats: {
      clients: '75+',
      projects: '180+',
      experience: '5+ Years',
      satisfaction: '97%'
    },
    benefits: [
      {
        title: 'Agriculture Focus',
        description: 'Specialized solutions for agriculture sector'
      },
      {
        title: 'Education Tech',
        description: 'Digital solutions for educational institutions'
      },
      {
        title: 'Textile Innovation',
        description: 'Technology for textile industry'
      },
      {
        title: 'Local Network',
        description: 'Strong presence in Guntur region'
      }
    ],
    industries: [
      {
        name: 'Agriculture',
        description: 'AgriTech solutions',
        expertise: ['Crop Management', 'Market Linkage', 'Supply Chain', 'Farm Analytics']
      },
      {
        name: 'Education',
        description: 'Education technology',
        expertise: ['Learning Management', 'Campus Solutions', 'Student Services', 'EdTech Platforms']
      },
      {
        name: 'Textile',
        description: 'Textile industry solutions',
        expertise: ['Production Management', 'Quality Control', 'Supply Chain', 'Market Connect']
      },
      {
        name: 'Food Processing',
        description: 'Food industry solutions',
        expertise: ['Process Automation', 'Quality Management', 'Supply Chain', 'Distribution Systems']
      }
    ],
    testimonials: [
      {
        name: 'Ramesh Kumar',
        company: 'Agri Solutions',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision\'s agricultural solutions have transformed our farming operations.',
        rating: 5,
        project: 'Farm Management System'
      },
      {
        name: 'Dr. Lakshmi',
        company: 'Engineering College',
        role: 'Principal',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'Their education platform has revolutionized our teaching methods.',
        rating: 5,
        project: 'Campus Management'
      },
      {
        name: 'Suresh Reddy',
        company: 'Textile Exports',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'The textile management system has streamlined our operations.',
        rating: 5,
        project: 'Textile ERP'
      }
    ],
    faq: [
      {
        question: 'Do you provide agricultural technology solutions?',
        answer: 'Yes, we specialize in AgriTech solutions including crop management and market linkage.'
      },
      {
        question: 'What educational solutions do you offer?',
        answer: 'We provide comprehensive education management systems and e-learning platforms.'
      },
      {
        question: 'Can you help with textile industry digitization?',
        answer: 'Yes, we offer complete digital solutions for textile industry management.'
      }
    ],
    awards: [
      {
        title: 'AgriTech Innovator',
        year: '2023',
        organization: 'AP Agriculture Forum'
      },
      {
        title: 'Education Excellence',
        year: '2023',
        organization: 'Guntur Education Society'
      },
      {
        title: 'Best IT Company',
        year: '2022',
        organization: 'Guntur Chamber of Commerce'
      }
    ],
    certifications: [
      {
        name: 'ISO 9001:2015',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'CMMI Level 3',
        issuer: 'CMMI Institute',
        year: '2023'
      },
      {
        name: 'AgriTech Partner',
        issuer: 'AP Agriculture Department',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Agriculture Platform',
        client: 'Guntur Farmers Association',
        industry: 'Agriculture',
        challenge: 'Needed to modernize farming operations',
        solution: 'Implemented comprehensive farm management system',
        results: [
          '40% increase in crop yield',
          '30% reduction in input costs',
          'Improved market access'
        ],
        image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c'
      }
    ],
    localPresence: {
      established: '2018',
      communityInitiatives: [
        'Farmer Digital Literacy',
        'Student Tech Programs',
        'Textile Tech Training'
      ],
      partnerships: [
        'Agriculture Department',
        'Educational Institutions',
        'Textile Association'
      ],
      events: [
        'AgriTech Summit 2023',
        'Education Digital Conference',
        'Textile Innovation Meet'
      ]
    }
  },
  'nellore': {
    title: 'Premier Digital Agency in Nellore | Tech Solutions',
    description: 'Nellore\'s leading digital agency specializing in aquaculture technology, industrial solutions, and renewable energy. Local expertise, innovative solutions.',
    metaDescription: 'Top Nellore digital agency offering web design, development & digital marketing. Expertise in aquaculture, industrial, and renewable energy sectors.',
    image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c',
    address: 'Tech Hub, Magunta Layout, Nellore, AP 524001',
    phone: '+91 (861) 234-5678',
    email: 'nellore@nexavision.com',
    stats: {
      clients: '60+',
      projects: '150+',
      experience: '4+ Years',
      satisfaction: '96%'
    },
    benefits: [
      {
        title: 'Aquaculture Tech',
        description: 'Specialized solutions for aquaculture industry'
      },
      {
        title: 'Industrial Solutions',
        description: 'Digital transformation for industries'
      },
      {
        title: 'Renewable Energy',
        description: 'Solutions for energy sector'
      },
      {
        title: 'Local Expertise',
        description: 'Deep understanding of Nellore market'
      }
    ],
    industries: [
      {
        name: 'Aquaculture',
        description: 'Aquaculture solutions',
        expertise: ['Farm Management', 'Quality Control', 'Supply Chain', 'Production Analytics']
      },
      {
        name: 'Industrial',
        description: 'Industrial solutions',
        expertise: ['Process Automation', 'Quality Management', 'Supply Chain', 'Industrial IoT']
      },
      {
        name: 'Renewable Energy',
        description: 'Energy sector solutions',
        expertise: ['Solar Management', 'Energy Analytics', 'Grid Solutions', 'Maintenance Systems']
      },
      {
        name: 'Agriculture',
        description: 'Agricultural solutions',
        expertise: ['Crop Management', 'Irrigation Systems', 'Farm Analytics', 'Supply Chain']
      }
    ],
    testimonials: [
      {
        name: 'Venkat Rao',
        company: 'Aqua Farms',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        content: 'NexaVision\'s aquaculture solutions have improved our farm productivity.',
        rating: 5,
        project: 'Aquaculture Management'
      },
      {
        name: 'Ravi Kumar',
        company: 'Solar Solutions',
        role: 'CEO',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2f9e2bf',
        content: 'Their renewable energy management system is exceptional.',
        rating: 5,
        project: 'Solar Farm Management'
      },
      {
        name: 'Priya Reddy',
        company: 'Industrial Park',
        role: 'Manager',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
        content: 'The industrial automation system has enhanced our efficiency.',
        rating: 5,
        project: 'Industrial Automation'
      }
    ],
    faq: [
      {
        question: 'Do you provide aquaculture solutions?',
        answer: 'Yes, we specialize in digital solutions for aquaculture including farm management and quality control.'
      },
      {
        question: 'Can you help with renewable energy management?',
        answer: 'We offer comprehensive solutions for solar and renewable energy management.'
      },
      {
        question: 'What industrial solutions do you provide?',
        answer: 'We provide end-to-end industrial automation and IoT solutions.'
      }
    ],
    awards: [
      {
        title: 'Aquaculture Innovation',
        year: '2023',
        organization: 'AP Aqua Society'
      },
      {
        title: 'Energy Tech Leader',
        year: '2023',
        organization: 'Renewable Energy Forum'
      },
      {
        title: 'Industrial Excellence',
        year: '2022',
        organization: 'Nellore Industry Association'
      }
    ],
    certifications: [
      {
        name: 'ISO 9001:2015',
        issuer: 'ISO',
        year: '2023'
      },
      {
        name: 'Aquaculture Tech Partner',
        issuer: 'AP Fisheries',
        year: '2023'
      },
      {
        name: 'Solar Energy Certified',
        issuer: 'Renewable Energy Council',
        year: '2023'
      }
    ],
    caseStudies: [
      {
        title: 'Smart Aquaculture Management',
        client: 'Nellore Aqua Farms',
        industry: 'Aquaculture',
        challenge: 'Needed to optimize aquaculture operations',
        solution: 'Implemented integrated aquaculture management system',
        results: [
          '45% increase in production efficiency',
          '35% reduction in operational costs',
          'Improved quality control'
        ],
        image: 'https://images.unsplash.com/photo-1589475362810-0642a82a2a8c'
      }
    ],
    localPresence: {
      established: '2019',
      communityInitiatives: [
        'Aquaculture Training',
        'Solar Energy Awareness',
        'Industrial Skill Development'
      ],
      partnerships: [
        'Fisheries Department',
        'Renewable Energy Association',
        'Industrial Development Board'
      ],
      events: [
        'Aquaculture Tech Summit 2023',
        'Renewable Energy Conference',
        'Industrial Innovation Meet'
      ]
    }
  }
};

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityInfo = city ? cityData[city] : null;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [city]);

  if (!cityInfo) {
    return (
      <>
        <Navbar />
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
            <p className="mb-6">Sorry, we don't have information for this location yet.</p>
            <Link to="/">
              <Button className="bg-accent-purple hover:bg-accent-purple/90">
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const cityName = city?.split('-').join(' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  return (
    <>
      <Helmet>
        <title>{cityInfo.title}</title>
        <meta name="description" content={cityInfo.metaDescription} />
        <meta name="keywords" content={`digital agency ${cityName}, web design ${cityName}, web development ${cityName}, digital marketing ${cityName}, local business ${cityName}, tech company ${cityName}, UI/UX design ${cityName}, SEO ${cityName}, e-commerce ${cityName}, mobile app development ${cityName}`} />
        <link rel="canonical" href={`https://nexavision.com/locations/${city}`} />
        <meta property="og:title" content={cityInfo.title} />
        <meta property="og:description" content={cityInfo.metaDescription} />
        <meta property="og:image" content={cityInfo.image} />
        <meta property="og:url" content={`https://nexavision.com/locations/${city}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cityInfo.title} />
        <meta name="twitter:description" content={cityInfo.metaDescription} />
        <meta name="twitter:image" content={cityInfo.image} />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NexaVision - ${cityInfo.title}",
              "description": "${cityInfo.description}",
              "url": "https://nexavision.com/locations/${city}",
              "logo": "https://nexavision.com/logo.png",
              "image": "${cityInfo.image}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "${cityInfo.address.split(',')[0]}",
                "addressLocality": "${cityName}",
                "addressRegion": "${cityInfo.address.split(', ')[2].split(' ')[0]}",
                "postalCode": "${cityInfo.address.split(', ')[2].split(' ')[1]}",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.7749",
                "longitude": "-122.4194"
              },
              "telephone": "${cityInfo.phone}",
              "email": "${cityInfo.email}",
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
              "areaServed": "${cityName}",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              },
              "sameAs": [
                "https://facebook.com/nexavision",
                "https://twitter.com/nexavision",
                "https://linkedin.com/company/nexavision"
              ]
            }
          `}
        </script>
      </Helmet>

      <Navbar />
      <main className="bg-background">
        {/* Hero Section with Lead Generation Focus */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-24 w-80 h-80 rounded-full bg-accent-purple/20 blur-[120px]" />
            <div className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full bg-accent-green/20 blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-4 py-1 bg-accent-purple/10 text-accent-purple rounded-full text-sm font-medium mb-4">
                  {cityName}'s Trusted Digital Agency
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Transform Your Business in{' '}
                  <span className="text-gradient-purple">{cityName}</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">{cityInfo.description}</p>
                
                {/* Lead Generation Form */}
                <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border mb-8">
                  <h3 className="text-xl font-semibold mb-4">Get Your Free Digital Strategy Session</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Business Name"
                      className="w-full p-3 rounded-lg bg-background border border-border"
                    />
                    <input
                      type="email"
                      placeholder="Business Email"
                      className="w-full p-3 rounded-lg bg-background border border-border"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-3 rounded-lg bg-background border border-border"
                    />
                    <Button className="w-full bg-accent-purple hover:bg-accent-purple/90 py-6">
                      Schedule Free Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    ✓ Free 30-min strategy session
                    <br />
                    ✓ Custom proposal within 24 hours
                    <br />
                    ✓ No obligation consultation
                  </p>
                </div>
                
                {/* Trust Signals */}
                <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
                  {cityInfo.awards.slice(0, 3).map((award, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span className="text-sm font-medium">{award.title}</span>
                </div>
                  ))}
              </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent-purple/20 to-accent-green/20 blur-md rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden border-gradient aspect-w-4 aspect-h-3">
                  <img 
                    src={cityInfo.image} 
                    alt={`NexaVision office in ${cityName}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Building Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Choose NexaVision in {cityName}?
              </h2>
              <p className="text-xl text-muted-foreground">
                Your trusted partner for digital success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cityInfo.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent-purple/20 rounded-full mb-4">
                    {index === 0 && <MapPin className="h-6 w-6 text-accent-purple" />}
                    {index === 1 && <Target className="h-6 w-6 text-accent-purple" />}
                    {index === 2 && <Trophy className="h-6 w-6 text-accent-purple" />}
                    {index === 3 && <Zap className="h-6 w-6 text-accent-purple" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Trusted by Leading {cityName} Businesses
              </h2>
              <p className="text-xl text-muted-foreground">
                See what our clients say about working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityInfo.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                  <p className="text-sm font-medium text-accent-purple">{testimonial.project}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Success Stories from {cityName}
              </h2>
              <p className="text-xl text-muted-foreground">
                Real results for local businesses
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {cityInfo.caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background/80 backdrop-blur-sm rounded-xl border border-border overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-accent-purple mb-2">{study.industry}</div>
                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-4">{study.challenge}</p>
                    <h4 className="font-medium mb-2">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent-green" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Presence Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our {cityName} Presence
              </h2>
              <p className="text-xl text-muted-foreground">
                Deeply rooted in the local business community since {cityInfo.localPresence.established}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Community Initiatives</h3>
                <ul className="space-y-3">
                  {cityInfo.localPresence.communityInitiatives.map((initiative, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-accent-purple" />
                      <span className="text-muted-foreground">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Local Partnerships</h3>
                <ul className="space-y-3">
                  {cityInfo.localPresence.partnerships.map((partnership, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent-green" />
                      <span className="text-muted-foreground">{partnership}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Local Events</h3>
                <ul className="space-y-3">
                  {cityInfo.localPresence.events.map((event, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-accent-purple" />
                      <span className="text-muted-foreground">{event}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions from {cityName} businesses
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {cityInfo.faq.map((item, index) => (
                  <div
                    key={index}
                    className="bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border"
                  >
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Grow Your {cityName} Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule your free consultation today and discover how we can help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-accent-purple hover:bg-accent-purple/90">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-accent-green text-accent-green">
                  View Our Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent-purple" />
                  <span className="text-muted-foreground">{cityInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent-purple" />
                  <span className="text-muted-foreground">{cityInfo.email}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TrustBadges />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default CityPage;
