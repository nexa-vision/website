
export interface ProductProcess {
  step: string;
  description: string;
}

export interface ProductInfo {
  title: string;
  description: string;
  features: string[];
  image: string;
  process: ProductProcess[];
  caseStudyLink: string;
}

export const productData: Record<string, ProductInfo> = {
  'ui-ux-design': {
    title: 'UI/UX Design Services',
    description: 'Transform your digital products with our user-centered design approach. We create intuitive, engaging interfaces that delight users and drive conversions.',
    features: [
      'User Research & Persona Development',
      'Wireframing & Prototyping',
      'Interaction Design',
      'Usability Testing',
      'Design Systems Creation',
      'Mobile-First Responsive Design'
    ],
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    process: [
      {step: 'Discovery', description: 'Understanding your users, business goals, and market landscape'},
      {step: 'Research', description: 'Analyzing user behavior, needs, and pain points'},
      {step: 'Design', description: 'Creating wireframes, prototypes, and visual designs'},
      {step: 'Testing', description: 'Validating designs through user testing'},
      {step: 'Implementation', description: 'Collaborating with developers for pixel-perfect execution'}
    ],
    caseStudyLink: '/portfolio/fintech-app-redesign'
  },
  'web-development': {
    title: 'Web Development Services',
    description: 'Build scalable, high-performance websites and web applications that provide seamless user experiences across all devices.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'CMS Implementation',
      'API Development & Integration',
      'Performance Optimization'
    ],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    process: [
      {step: 'Planning', description: 'Defining technical requirements and project scope'},
      {step: 'Architecture', description: 'Designing system architecture and database structure'},
      {step: 'Development', description: 'Building frontend and backend components'},
      {step: 'Testing', description: 'Quality assurance and bug fixing'},
      {step: 'Deployment', description: 'Launch and post-launch support'}
    ],
    caseStudyLink: '/portfolio/e-commerce-platform'
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    description: 'Drive traffic, generate leads, and increase conversions with our data-driven digital marketing strategies tailored to your business goals.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click Advertising (PPC)',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing Campaigns',
      'Analytics & Performance Tracking'
    ],
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312',
    process: [
      {step: 'Audit', description: 'Analyzing current digital presence and performance'},
      {step: 'Strategy', description: 'Developing tailored marketing plans'},
      {step: 'Implementation', description: 'Executing campaigns across channels'},
      {step: 'Optimization', description: 'Continuous improvement based on data'},
      {step: 'Reporting', description: 'Transparent metrics and ROI tracking'}
    ],
    caseStudyLink: '/portfolio/saas-growth-campaign'
  },
  
};
