export interface ServiceInfo {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  features: string[];
  benefits?: string[];
  process: {
    title: string;
    description: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  caseStudyLink?: string;
  pricing?: {
    basic: number;
    premium: number;
    enterprise: number;
  };
}

export const serviceData: Record<string, ServiceInfo> = {
  'ui-ux-design': {
    title: 'UI/UX Design Services',
    description: 'Create intuitive and engaging user experiences that drive conversions and user satisfaction.',
    longDescription: 'Our UI/UX design services focus on creating user-centered designs that not only look beautiful but also provide exceptional functionality. We conduct thorough user research, create wireframes and prototypes, and design interfaces that align with your brand and business goals.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
    category: 'Design & Creative',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing',
      'Mobile-First Design',
      'Design System Creation'
    ],
    benefits: [
      'Increased User Engagement',
      'Higher Conversion Rates',
      'Better Brand Recognition',
      'Improved User Satisfaction'
    ],
    process: [
      {
        title: 'Research & Discovery',
        description: 'We analyze your users, competitors, and market to understand design requirements.'
      },
      {
        title: 'Wireframing',
        description: 'Create low-fidelity wireframes to establish layout and user flow.'
      },
      {
        title: 'Visual Design',
        description: 'Develop high-fidelity designs with your brand elements and visual hierarchy.'
      },
      {
        title: 'Testing & Iteration',
        description: 'Conduct usability testing and refine the design based on user feedback.'
      }
    ],
    faq: [
      {
        question: 'How long does a UI/UX design project typically take?',
        answer: 'The timeline varies based on project complexity, but most projects take 4-8 weeks from research to final deliverables.'
      },
      {
        question: 'Do you provide design files and assets?',
        answer: 'Yes, we provide all design files, assets, and a comprehensive style guide upon project completion.'
      }
    ],
    caseStudyLink: '/portfolio/ui-ux-design-case-study',
    pricing: {
      basic: 2500,
      premium: 5000,
      enterprise: 10000
    }
  },
  'web-development': {
    title: 'Web Development Services',
    description: 'Build fast, secure, and scalable websites using modern technologies and best practices.',
    longDescription: 'Our web development team creates custom websites and web applications using cutting-edge technologies. We focus on performance, security, and scalability to ensure your website can grow with your business.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    category: 'Web Development',
    features: [
      'Custom Website Development',
      'Responsive Design Implementation',
      'E-commerce Solutions',
      'CMS Integration',
      'API Development',
      'Performance Optimization'
    ],
    benefits: [
      'Faster Loading Times',
      'Better Search Rankings',
      'Enhanced Security',
      'Scalable Architecture'
    ],
    process: [
      {
        title: 'Planning & Architecture',
        description: 'Define technical requirements and create development roadmap.'
      },
      {
        title: 'Development',
        description: 'Build the website using modern frameworks and best practices.'
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing across devices and browsers.'
      },
      {
        title: 'Deployment & Support',
        description: 'Launch the website and provide ongoing maintenance support.'
      }
    ],
    faq: [
      {
        question: 'What technologies do you use for web development?',
        answer: 'We use modern technologies like React, Next.js, Node.js, and cloud platforms for optimal performance and scalability.'
      },
      {
        question: 'Do you provide ongoing maintenance?',
        answer: 'Yes, we offer maintenance packages to keep your website updated, secure, and performing optimally.'
      }
    ],
    caseStudyLink: '/portfolio/web-development-case-study'
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    description: 'Grow your online presence and reach your target audience with data-driven marketing strategies.',
    longDescription: 'Our digital marketing services help businesses increase their online visibility, attract qualified leads, and convert visitors into customers through strategic SEO, PPC, social media, and content marketing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    category: 'Digital Marketing',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    benefits: [
      'Increased Website Traffic',
      'Higher Lead Generation',
      'Better ROI',
      'Brand Awareness Growth'
    ],
    process: [
      {
        title: 'Audit & Strategy',
        description: 'Analyze current performance and develop comprehensive marketing strategy.'
      },
      {
        title: 'Implementation',
        description: 'Execute marketing campaigns across chosen channels.'
      },
      {
        title: 'Monitoring',
        description: 'Track performance metrics and adjust strategies as needed.'
      },
      {
        title: 'Optimization',
        description: 'Continuously optimize campaigns for better results and ROI.'
      }
    ],
    faq: [
      {
        question: 'How do you measure marketing success?',
        answer: 'We track key metrics like traffic, conversions, ROI, and engagement to measure campaign effectiveness.'
      },
      {
        question: 'How long before I see results?',
        answer: 'PPC campaigns show immediate results, while SEO typically takes 3-6 months to show significant improvements.'
      }
    ],
    caseStudyLink: '/portfolio/digital-marketing-case-study'
  },
  'branding': {
    title: 'Brand Strategy & Design',
    description: 'Build a strong brand identity that resonates with your audience and stands out in the market.',
    longDescription: 'Our branding services help businesses create distinctive brand identities that communicate their values, connect with their target audience, and differentiate them from competitors.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80',
    category: 'Design & Creative',
    features: [
      'Brand Strategy Development',
      'Logo Design & Identity',
      'Brand Guidelines',
      'Marketing Collateral',
      'Brand Messaging',
      'Brand Positioning'
    ],
    benefits: [
      'Strong Brand Recognition',
      'Customer Loyalty',
      'Premium Positioning',
      'Consistent Brand Experience'
    ],
    process: [
      {
        title: 'Brand Discovery',
        description: 'Understand your business, values, and target audience.'
      },
      {
        title: 'Strategy Development',
        description: 'Create brand positioning and messaging strategy.'
      },
      {
        title: 'Visual Identity',
        description: 'Design logo, colors, typography, and visual elements.'
      },
      {
        title: 'Implementation',
        description: 'Apply brand across all touchpoints and create guidelines.'
      }
    ],
    faq: [
      {
        question: 'What\'s included in a complete branding package?',
        answer: 'A complete package includes logo design, brand guidelines, color palette, typography, business cards, and marketing templates.'
      },
      {
        question: 'How long does the branding process take?',
        answer: 'Typically 6-8 weeks, depending on the scope and number of revision rounds needed.'
      }
    ],
    caseStudyLink: '/portfolio/branding-case-study'
  },
  'motion-graphics': {
    title: 'Motion Graphics & Animation',
    description: 'Bring your brand to life with engaging motion graphics and animations that capture attention.',
    longDescription: 'Our motion graphics services create compelling visual stories through animation, helping brands communicate complex ideas in an engaging and memorable way.',
    image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80',
    category: 'Specialized Services',
    features: [
      'Logo Animations',
      'Explainer Videos',
      'Social Media Animations',
      'Website Animations',
      '2D/3D Motion Graphics',
      'Video Editing'
    ],
    benefits: [
      'Increased Engagement',
      'Better Brand Recall',
      'Higher Conversion Rates',
      'Professional Appearance'
    ],
    process: [
      {
        title: 'Concept Development',
        description: 'Define animation style, story, and visual approach.'
      },
      {
        title: 'Storyboarding',
        description: 'Create detailed storyboards and plan animation sequences.'
      },
      {
        title: 'Animation Production',
        description: 'Produce high-quality animations with professional tools.'
      },
      {
        title: 'Final Delivery',
        description: 'Deliver optimized files for various platforms and uses.'
      }
    ],
    faq: [
      {
        question: 'What file formats do you provide?',
        answer: 'We provide MP4, GIF, and web-optimized formats suitable for various platforms and uses.'
      },
      {
        question: 'Can you create animations for social media?',
        answer: 'Yes, we create animations optimized for all major social media platforms with proper sizing and formats.'
      }
    ],
    caseStudyLink: '/portfolio/motion-graphics-case-study'
  }
};
